"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
const QueryHeader_pb_1 = require("./generated/QueryHeader_pb");
const Query_pb_1 = require("./generated/Query_pb");
const HederaStatusError_1 = require("./errors/HederaStatusError");
const MaxQueryPaymentExceededError_1 = require("./errors/MaxQueryPaymentExceededError");
const util_1 = require("./util");
const Hbar_1 = require("./Hbar");
const TransactionBody_pb_1 = require("./generated/TransactionBody_pb");
const AccountId_1 = require("./account/AccountId");
const Status_1 = require("./Status");
const HederaPrecheckStatusError_1 = require("./errors/HederaPrecheckStatusError");
const CryptoTransferTransaction_1 = require("./account/CryptoTransferTransaction");
class QueryBuilder {
    constructor() {
        this._inner = new Query_pb_1.Query();
        this._maxPaymentAmount = null;
        this._paymentAmount = null;
        this._transactionId = null;
    }
    setMaxQueryPayment(amount) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(amount);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._maxPaymentAmount = hbar;
        return this;
    }
    setQueryPayment(amount) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(amount);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._paymentAmount = hbar;
        return this;
    }
    /**
     * Set a manually created and signed
     * `CryptoTransferTransaction` as the query payment.
     */
    setQueryPaymentTransaction(transaction) {
        this._transactionId = transaction.id;
        this._getHeader().setPayment(transaction._toProto());
        return this;
    }
    getCost(client) {
        return __awaiter(this, void 0, void 0, function* () {
            // Skip payment validation and just run general validation
            this._localValidate(false);
            const queryHeader = this._getHeader();
            // Store the current response type and payment
            // from the polymorphic query header
            const currentResponseType = queryHeader.getResponsetype();
            const currentPayment = queryHeader.getPayment();
            try {
                // Pick a node for us to use
                const node = client._randomNode();
                // COST_ANSWER tells HAPI to return only the cost for the query body
                queryHeader.setResponsetype(QueryHeader_pb_1.ResponseType.COST_ANSWER);
                // COST_ANSWER requires a "null" payment but does not actually
                // process it
                const transaction = new CryptoTransferTransaction_1.CryptoTransferTransaction()
                    .addRecipient(node.id, 0)
                    .addSender(client._getOperatorAccountId(), 0)
                    .build(client);
                this._transactionId = transaction.id;
                queryHeader.setPayment((yield transaction
                    .signWith(client._getOperatorKey(), client._getOperatorSigner()))
                    ._toProto());
                const resp = yield client._unaryCall(node.url, this._inner.clone(), this._getMethod());
                const respHeader = this._mapResponseHeader(resp);
                HederaPrecheckStatusError_1.HederaPrecheckStatusError._throwIfError(respHeader.getNodetransactionprecheckcode(), this._transactionId);
                return Hbar_1.Hbar.fromTinybar(respHeader.getCost());
            }
            finally {
                // Reset the response type and payment transaction
                // on the query header
                queryHeader.setResponsetype(currentResponseType);
                queryHeader.setPayment(currentPayment);
            }
        });
    }
    execute(client) {
        let respStatus = null;
        return util_1.timeoutPromise(this._getDefaultExecuteTimeout(), (() => __awaiter(this, void 0, void 0, function* () {
            let node;
            if (this._isPaymentRequired()) {
                if (this._getHeader().hasPayment()) {
                    const paymentTxBodyBytes = this._getHeader().getPayment().getBodybytes_asU8();
                    const paymentTxBody = TransactionBody_pb_1.TransactionBody.deserializeBinary(paymentTxBodyBytes);
                    const nodeId = AccountId_1.AccountId._fromProto(paymentTxBody.getNodeaccountid());
                    node = client._getNode(nodeId);
                }
                else if (this._paymentAmount != null) {
                    node = client._randomNode();
                    yield this._generatePaymentTransaction(client, node, this._paymentAmount);
                }
                else if (this._maxPaymentAmount != null || client._maxQueryPayment != null) {
                    node = client._randomNode();
                    const maxPaymentAmount = this._maxPaymentAmount == null ?
                        client._maxQueryPayment :
                        this._maxPaymentAmount;
                    const actualCost = yield this.getCost(client);
                    if (actualCost.isGreaterThan(maxPaymentAmount)) {
                        throw new MaxQueryPaymentExceededError_1.MaxQueryPaymentExceededError(actualCost, maxPaymentAmount);
                    }
                    yield this._generatePaymentTransaction(client, node, actualCost);
                }
            }
            else {
                node = client._randomNode();
            }
            // Run validator (after we have set the payment)
            this._localValidate();
            for (let attempt = 0; /* this will timeout by [timeoutPromise] */; attempt += 1) {
                if (attempt > 0) {
                    // Wait a bit before the next call if this is not our first rodeo
                    const delayMs = Math.floor(500 * Math.random() * ((Math.pow(2, attempt)) - 1));
                    yield util_1.setTimeoutAwaitable(delayMs);
                }
                const resp = yield client._unaryCall(node.url, this._inner, this._getMethod());
                respStatus = Status_1.Status._fromCode(this._mapResponseHeader(resp)
                    .getNodetransactionprecheckcode());
                if (this._shouldRetry(respStatus, resp)) {
                    continue;
                }
                HederaPrecheckStatusError_1.HederaPrecheckStatusError._throwIfError(respStatus.code, this._transactionId);
                return this._mapResponse(resp);
            }
        }))(), (reject) => {
            if (respStatus == null) {
                // Timed out before we executed ??
                reject(new Error("timed out"));
            }
            else {
                // We executed at least once
                reject(new HederaStatusError_1.HederaStatusError(respStatus));
            }
        });
    }
    _toProto() {
        return this._inner;
    }
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    _shouldRetry(status, response) {
        // By deafult, ONLY the BUSY status should be retriesd
        return status.code === Status_1.Status.Busy.code;
    }
    _getDefaultExecuteTimeout() {
        return 20000; // 20s
    }
    _isPaymentRequired() {
        // Nearly all queries require a payment
        return true;
    }
    _localValidate(checkPayment = true) {
        util_1.runValidation(this, (errors) => {
            if (checkPayment && this._isPaymentRequired() && !this._getHeader().hasPayment()) {
                errors.push("one of `.setPayment()` or `.setPaymentAmount()` is required");
            }
            this._doLocalValidate(errors);
        });
    }
    _generatePaymentTransaction(client, node, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const hbar = Hbar_1.hbarFromTinybarOrHbar(amount);
            hbar[Hbar_1.hbarCheck]({ allowNegative: false });
            const paymentTx = yield new CryptoTransferTransaction_1.CryptoTransferTransaction()
                .setNodeAccountId(node.id)
                .addRecipient(node.id, hbar)
                .addSender(client._getOperatorAccountId(), hbar)
                .setMaxTransactionFee(new Hbar_1.Hbar(1))
                .build(client)
                .signWith(client._getOperatorKey(), client._getOperatorSigner());
            this.setQueryPaymentTransaction(paymentTx);
            return this;
        });
    }
}
exports.QueryBuilder = QueryBuilder;
