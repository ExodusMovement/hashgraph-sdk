"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionReceipt = void 0;
const AccountId_1 = require("./account/AccountId");
const ExchangeRate_1 = require("./ExchangeRate");
const Status_1 = require("./Status");
/**
 * The consensus result for a transaction, which might not be currently known,
 * or may  succeed or fail.
 */
class TransactionReceipt {
    constructor(status, accountId, exchangeRateSet, topicSequenceNubmer, topicRunningHash) {
        this.status = status;
        this._accountId = accountId;
        this._exchangeRateSet = exchangeRateSet;
        this._topicSequenceNumber = topicSequenceNubmer;
        this._topicRunningHash = topicRunningHash;
    }
    /** @deprecated */
    get accountId() {
        console.warn("`TransactionReceipt.accountId` is deprecrated. Use `TransactionReceipt.getAccountId()` instead.");
        return this.getAccountId();
    }
    /**
     * The account ID, if a new account was created.
     */
    getAccountId() {
        if (this._accountId == null) {
            throw new Error("receipt does not contain an account ID");
        }
        return this._accountId;
    }
    /**
     * Updated running hash for a consensus service topic. The result of a ConsensusSubmitMessage.
     */
    getConsensusTopicRunningHash() {
        if (this._topicRunningHash.byteLength === 0) {
            throw new Error("receipt was not for a consensus topic transaction");
        }
        return this._topicRunningHash;
    }
    /**
     * Updated sequence number for a consensus service topic. The result of a ConsensusSubmitMessage.
     */
    getConsensusTopicSequenceNumber() {
        if (this._topicSequenceNumber === 0) {
            throw new Error("receipt was not for a consensus topic transaction");
        }
        return this._topicSequenceNumber;
    }
    toJSON() {
        var _a;
        return {
            status: this.status.toString(),
            accountId: (_a = this._accountId) === null || _a === void 0 ? void 0 : _a.toString(),
            consensusTopicRunningHash: this._topicRunningHash.byteLength === 0 ?
                /* eslint-disable-next-line no-undefined */
                undefined :
                this._topicRunningHash.toString(),
            consensusTopicSequenceNumber: this._topicSequenceNumber === 0 ?
                /* eslint-disable-next-line no-undefined */
                undefined :
                this._topicSequenceNumber
        };
    }
    toString() {
        return JSON.stringify(this.toJSON(), null, 2);
    }
    // NOT A STABLE API
    static _fromProto(receipt) {
        return new TransactionReceipt(Status_1.Status._fromCode(receipt.getStatus()), receipt.hasAccountid() ? AccountId_1.AccountId._fromProto(receipt.getAccountid()) : null, receipt.hasExchangerate() ?
            ExchangeRate_1.exchangeRateSetToSdk(receipt.getExchangerate()) :
            null, receipt.getTopicsequencenumber(), receipt.getTopicrunninghash_asU8());
    }
}
exports.TransactionReceipt = TransactionReceipt;
