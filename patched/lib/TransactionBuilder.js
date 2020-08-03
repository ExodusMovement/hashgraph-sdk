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
exports.SingleTransactionBuilder = exports.TransactionBuilder = void 0;
const TransactionBody_pb_1 = require("./generated/TransactionBody_pb");
const util_1 = require("./util");
const Transaction_1 = require("./Transaction");
const Transaction_pb_1 = require("./generated/Transaction_pb");
const Hbar_1 = require("./Hbar");
const AccountId_1 = require("./account/AccountId");
const TransactionId_1 = require("./TransactionId");
const Status_1 = require("./Status");
const HederaPrecheckStatusError_1 = require("./errors/HederaPrecheckStatusError");
const bignumber_js_1 = require("bignumber.js");
/**
 * Max duration of transactions on the network is 2 minutes
 */
const maxValidDuration = 120;
class TransactionBuilder {
    constructor() {
        this._shouldSetFee = true;
        this._inner = new TransactionBody_pb_1.TransactionBody();
        this._inner.setTransactionvalidduration(util_1.newDuration(120));
    }
    setTransactionId(id) {
        this._inner.setTransactionid((id instanceof TransactionId_1.TransactionId ? id : new TransactionId_1.TransactionId(id))
            ._toProto());
        return this;
    }
    setTransactionValidDuration(seconds) {
        this._inner.setTransactionvalidduration(util_1.newDuration(Math.min(seconds, maxValidDuration)));
        return this;
    }
    setMaxTransactionFee(fee) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(fee);
        // const hbar = typeof fee === "number" ? Hbar.fromTinybar(fee) : fee as Hbar;
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._inner.setTransactionfee(hbar[Hbar_1.hbarToProto]());
        return this;
    }
    setNodeAccountId(nodeAccountId) {
        this._node = new AccountId_1.AccountId(nodeAccountId);
        this._inner.setNodeaccountid(this._node._toProto());
        return this;
    }
    setTransactionMemo(memo) {
        this._inner.setMemo(memo);
        return this;
    }
    setGenerateRecord(generateRecord) {
        this._inner.setGeneraterecord(generateRecord);
        return this;
    }
    validate() {
        util_1.runValidation(this, (errors) => {
            if (!this._inner.hasTransactionid()) {
                errors.push("missing ID for transaction");
            }
            // strings are UTF-16, max 100 bytes
            if (this._inner.getMemo().length * 2 > 100) {
                errors.push("memo may not be longer than 100 bytes");
            }
            this._doValidate(errors);
        });
    }
}
exports.TransactionBuilder = TransactionBuilder;
class SingleTransactionBuilder extends TransactionBuilder {
    getCost(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const originalFee = this._inner.getTransactionfee();
            try {
                // We get the cost by trying to run the transaction with a zero fee
                this._inner.setTransactionfee("0");
                this._shouldSetFee = false;
                const tx = this.build(client);
                const response = yield tx[Transaction_1.transactionCall](client);
                const status = Status_1.Status._fromCode(response.getNodetransactionprecheckcode());
                if (status === Status_1.Status.InsufficientTxFee) {
                    // NOTE: The actual cost returned by Hedera is within 99.8% to 99.9% of the actual
                    //       fee that will be assessed. We're unsure if this is because the fee fluctuates that
                    //       much or if the calculations are simply incorrect on the server. To compensate for
                    //       this we just bump by a 1% the value returned. As this would only ever be
                    //       a maximum this will not cause you to be charged more.
                    let estimatedFee = new bignumber_js_1.default(response.getCost());
                    estimatedFee = estimatedFee.multipliedBy(1.01).decimalPlaces(0);
                    return Hbar_1.Hbar.fromTinybar(estimatedFee);
                }
                HederaPrecheckStatusError_1.HederaPrecheckStatusError._throwIfError(status.code, tx.id);
            }
            finally {
                // Reset the contained transaction body
                this._shouldSetFee = true;
                this._inner.setTransactionfee(originalFee);
                this._inner.clearTransactionid();
                this._inner.clearTransactionvalidduration();
                // NOTE: The Node ID is explicitly not cleared as we want to use the same node to execute
                //       as we just used to ask for the cost
                // this._inner.clearNodeaccountid();
            }
            // Cost of the transaction was 0?
            return new Hbar_1.Hbar(0);
        });
    }
    build(client) {
        if (client && this._shouldSetFee && this._inner.getTransactionfee() === "0") {
            // Don't override TransactionFee if it's already set
            this._inner.setTransactionfee(client._maxTransactionFee[Hbar_1.hbarToProto]());
        }
        if (client && !this._inner.hasTransactionid()) {
            if (client._getOperatorAccountId()) {
                const tx = new TransactionId_1.TransactionId(client._getOperatorAccountId());
                this._inner.setTransactionid(tx._toProto());
            }
        }
        if (!this._inner.hasTransactionvalidduration()) {
            this.setTransactionValidDuration(maxValidDuration);
        }
        // Set `this._node` accordingly if client is supplied otherwise error out
        if (!this._node && !client) {
            throw new Error("`setNodeAccountId` must be called if client is not supplied");
        }
        if (!this._node) {
            this._node = client._randomNode().id;
        }
        if (this._node && !this._inner.hasNodeaccountid()) {
            this.setNodeAccountId(this._node);
        }
        this.validate();
        const protoTx = new Transaction_pb_1.Transaction();
        protoTx.setBodybytes(this._inner.serializeBinary());
        return Transaction_1.Transaction[Transaction_1.transactionCreate](this._node, protoTx, this._inner, this._method);
    }
    execute(client) {
        return this.build(client).execute(client);
    }
    get _method() {
        throw new Error("Method not implemented.");
    }
    _doValidate(_) {
        throw new Error("Method not implemented.");
    }
}
exports.SingleTransactionBuilder = SingleTransactionBuilder;
