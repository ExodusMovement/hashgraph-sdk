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
exports.Transaction = exports.transactionCall = exports.transactionCreate = void 0;
const nacl = require("tweetnacl");
const Transaction_pb_1 = require("./generated/Transaction_pb");
const TransactionBody_pb_1 = require("./generated/TransactionBody_pb");
const BasicTypes_pb_1 = require("./generated/BasicTypes_pb");
const util_1 = require("./util");
const google_protobuf_1 = require('./google-protobuf.patched/google-protobuf');
const CryptoService_pb_service_1 = require("./generated/CryptoService_pb_service");
const AccountId_1 = require("./account/AccountId");
const TransactionId_1 = require("./TransactionId");
const Status_1 = require("./Status");
const base64 = require("./encoding/base64");
const crypto_1 = require("crypto");
const HederaPrecheckStatusError_1 = require("./errors/HederaPrecheckStatusError");
function sha384Hash(data) {
    const hash = crypto_1.createHash('sha384');
    hash.update(data);
    return hash.digest();
}
const receiptRetryDelayMs = 500;
/** internal method to create a new transaction from its discrete parts */
exports.transactionCreate = Symbol("transactionCreate");
/** execute the transaction directly and return the protobuf response */
exports.transactionCall = Symbol("transactionCall");
class Transaction {
    constructor() {
        throw new Error("the constructor of Transaction is private; please construct through TransactionBuilder");
    }
    static [exports.transactionCreate](node, inner, body, method) {
        const tx = Object.create(this.prototype);
        tx._node = node;
        tx._inner = inner;
        tx._txnId = util_1.orThrow(body.getTransactionid());
        tx._validDurationSeconds = util_1.orThrow(body.getTransactionvalidduration()).getSeconds();
        tx._method = method;
        return tx;
    }
    static fromBytes(bytes) {
        const inner = Transaction_pb_1.Transaction.deserializeBinary(bytes);
        const body = TransactionBody_pb_1.TransactionBody.deserializeBinary(inner.getBodybytes_asU8());
        const nodeId = AccountId_1.AccountId._fromProto(util_1.orThrow(body.getNodeaccountid(), "transaction missing node account ID"));
        const method = methodFromTxn(body);
        return Transaction[exports.transactionCreate](nodeId, inner, body, method);
    }
    get id() {
        return TransactionId_1.TransactionId._fromProto(this._txnId);
    }
    _checkPubKey(publicKey) {
        if (this._inner.hasSigmap()) {
            for (const sig of this._inner.getSigmap().getSigpairList()) {
                if (publicKey._bytesEqual(sig.getPubkeyprefix_asU8())) {
                    throw new Error(`transaction ${this._txnId} already signed with public key ${publicKey.toString()}`);
                }
            }
        }
    }
    _addSignature({ signature, publicKey }) {
        const pubKeyBytes = publicKey.toBytes();
        const sigMap = this._inner.getSigmap() || new BasicTypes_pb_1.SignatureMap();
        sigMap.getSigpairList().forEach((sigPair) => {
            const sigPairBytes = base64.decode(sigPair.getPubkeyprefix_asB64());
            if (pubKeyBytes.toString() === sigPairBytes.toString()) {
                throw new Error(`transaction already signed with key ${publicKey.toString()}`);
            }
        });
        const sigPair = new BasicTypes_pb_1.SignaturePair();
        sigPair.setPubkeyprefix(publicKey.toBytes());
        sigPair.setEd25519(signature);
        sigMap.addSigpair(sigPair);
        this._inner.setSigmap(sigMap);
        return this;
    }
    sign(privateKey) {
        this._checkPubKey(privateKey.publicKey);
        return this._addSignature({
            signature: nacl.sign.detached(this._inner.getBodybytes_asU8(), privateKey._keyData),
            publicKey: privateKey.publicKey
        });
    }
    /**
     * Given the transaction body bytes, asynchronously return a signature and associated public
     * key.
     *
     * @param publicKey the public key that can be used to verify the returned signature
     * @param signer
     */
    signWith(publicKey, signer) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkPubKey(publicKey);
            const signResult = signer(this._inner.getBodybytes_asU8());
            const signature = signResult instanceof Promise ?
                yield signResult :
                signResult;
            this._addSignature({ signature, publicKey });
            return this;
        });
    }
    hash() {
        var _a, _b;
        const body = TransactionBody_pb_1.TransactionBody.deserializeBinary(this._inner.getBodybytes_asU8());
        if (!body.hasNodeaccountid()) {
            throw new Error("transaction must have node id set");
        }
        if (((_b = (_a = this._inner.getSigmap()) === null || _a === void 0 ? void 0 : _a.getSigpairList().length) !== null && _b !== void 0 ? _b : 0) === 0) {
            throw new Error("transaction must be signed");
        }
        return sha384Hash(this.toBytes());
    }
    [exports.transactionCall](client) {
        return __awaiter(this, void 0, void 0, function* () {
            // If client is supplied make sure to sign transaction if we have not already
            if (client._getOperatorKey() && client._getOperatorSigner()) {
                try {
                    yield this.signWith(client._getOperatorKey(), client._getOperatorSigner());
                }
                catch (_a) {
                    // ignored. This means the operator has already signed the transaction
                }
            }
            const node = client._getNode(this._node);
            const validUntilMs = Date.now() + (this._validDurationSeconds * 1000);
            /* eslint-disable no-await-in-loop */
            // we want to wait in a loop, that's the whole point here
            for (let attempt = 0; /* loop will exit when transaction expires */; attempt += 1) {
                if (attempt > 0) {
                    const delay = Math.floor(receiptRetryDelayMs *
                        Math.random() * ((Math.pow(2, attempt)) - 1));
                    if (Date.now() + delay > validUntilMs) {
                        throw new Error(`timed out waiting to send transaction ID: ${this._txnId.toString()}`);
                    }
                    yield util_1.setTimeoutAwaitable(delay);
                }
                const response = yield client._unaryCall(node.url, this._inner, this._method);
                const status = Status_1.Status._fromCode(response.getNodetransactionprecheckcode());
                // If response code is BUSY we need to timeout and retry
                if (status._isBusy()) {
                    continue;
                }
                return response;
            }
            /* eslint-enable no-await-in-loop */
        });
    }
    execute(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this[exports.transactionCall](client);
            const status = Status_1.Status._fromCode(response.getNodetransactionprecheckcode());
            HederaPrecheckStatusError_1.HederaPrecheckStatusError._throwIfError(status.code, this.id);
            return this.id;
        });
    }
    _toProto() {
        return google_protobuf_1.Message.cloneMessage(this._inner);
    }
    toBytes() {
        return this._inner.serializeBinary();
    }
    toString() {
        const tx = this._toProto().toObject();
        const bodybytes = tx.bodybytes instanceof Uint8Array ?
            tx.bodybytes :
            base64.decode(tx.bodybytes);
        tx.body = TransactionBody_pb_1.TransactionBody.deserializeBinary(bodybytes).toObject();
        return JSON.stringify(tx, null, 4);
    }
}
exports.Transaction = Transaction;
/* eslint-disable-next-line max-len */
function methodFromTxn(inner) {
    switch (inner.getDataCase()) {
        case TransactionBody_pb_1.TransactionBody.DataCase.CONTRACTCALL:
        case TransactionBody_pb_1.TransactionBody.DataCase.CONTRACTCREATEINSTANCE:
        case TransactionBody_pb_1.TransactionBody.DataCase.CONTRACTUPDATEINSTANCE:
        case TransactionBody_pb_1.TransactionBody.DataCase.CONTRACTDELETEINSTANCE:
            throw new Error('This method was removed by code cleanup');
        case TransactionBody_pb_1.TransactionBody.DataCase.CRYPTOCREATEACCOUNT:
            return CryptoService_pb_service_1.CryptoService.createAccount;
        case TransactionBody_pb_1.TransactionBody.DataCase.CRYPTODELETE:
            return CryptoService_pb_service_1.CryptoService.cryptoDelete;
        case TransactionBody_pb_1.TransactionBody.DataCase.CRYPTOTRANSFER:
            return CryptoService_pb_service_1.CryptoService.cryptoTransfer;
        case TransactionBody_pb_1.TransactionBody.DataCase.CRYPTOUPDATEACCOUNT:
            return CryptoService_pb_service_1.CryptoService.updateAccount;
        case TransactionBody_pb_1.TransactionBody.DataCase.FILEAPPEND:
        case TransactionBody_pb_1.TransactionBody.DataCase.FILECREATE:
        case TransactionBody_pb_1.TransactionBody.DataCase.FILEDELETE:
        case TransactionBody_pb_1.TransactionBody.DataCase.FILEUPDATE:
        case TransactionBody_pb_1.TransactionBody.DataCase.SYSTEMDELETE:
        case TransactionBody_pb_1.TransactionBody.DataCase.SYSTEMUNDELETE:
            throw new Error('This method was removed by code cleanup');
        case TransactionBody_pb_1.TransactionBody.DataCase.DATA_NOT_SET:
            throw new Error("transaction body missing");
        default:
            throw new Error(`unsupported body case:${inner.getDataCase().toString()}`);
    }
}
