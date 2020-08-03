"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionReceipt = void 0;
const AccountId_1 = require("./account/AccountId");
const ConsensusTopicId_1 = require("./consensus/ConsensusTopicId");
const ContractId_1 = require("./contract/ContractId");
const FileId_1 = require("./file/FileId");
const ExchangeRate_1 = require("./ExchangeRate");
const Status_1 = require("./Status");
/**
 * The consensus result for a transaction, which might not be currently known,
 * or may  succeed or fail.
 */
class TransactionReceipt {
    constructor(status, accountId, fileId, contractId, topicId, exchangeRateSet, topicSequenceNubmer, topicRunningHash) {
        this.status = status;
        this._accountId = accountId;
        this._fileId = fileId;
        this._contractId = contractId;
        this._topicId = topicId;
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
    /** @deprecated */
    get fileId() {
        console.warn("`TransactionReceipt.fileId` is deprecrated. Use `TransactionReceipt.getfileId()` instead.");
        return this.getFileId();
    }
    /**
     * The file ID, if a new file was created.
     */
    getFileId() {
        if (this._fileId == null) {
            throw new Error("receipt does not contain a file ID");
        }
        return this._fileId;
    }
    /** @deprecated */
    get contractId() {
        console.warn("`TransactionReceipt.contractId` is deprecrated. Use `TransactionReceipt.getcontractId()` instead.");
        return this.getContractId();
    }
    /**
     * The contract ID, if a new smart contract instance was created.
     */
    getContractId() {
        if (this._contractId == null) {
            throw new Error("receipt does not contain a contract ID");
        }
        return this._contractId;
    }
    /**
     * TopicID of a newly created consensus service topic.
     */
    getConsensusTopicId() {
        if (this._topicId == null) {
            throw new Error("receipt does not contain a topic ID");
        }
        return this._topicId;
    }
    /** @deprecated `TransactionReceipt.getTopicId()` is deprecrated. Use `TransactionReceipt.getConsensusTopicId()` instead. */
    getTopicId() {
        console.warn("`TransactionReceipt.getTopicId()` is deprecrated. Use `TransactionReceipt.getConsensusTopicId()` instead.");
        return this.getConsensusTopicId();
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
        var _a, _b, _c, _d;
        return {
            status: this.status.toString(),
            accountId: (_a = this._accountId) === null || _a === void 0 ? void 0 : _a.toString(),
            fileId: (_b = this._fileId) === null || _b === void 0 ? void 0 : _b.toString(),
            contractId: (_c = this._contractId) === null || _c === void 0 ? void 0 : _c.toString(),
            consensusTopicId: (_d = this._topicId) === null || _d === void 0 ? void 0 : _d.toString(),
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
        return new TransactionReceipt(Status_1.Status._fromCode(receipt.getStatus()), receipt.hasAccountid() ? AccountId_1.AccountId._fromProto(receipt.getAccountid()) : null, receipt.hasFileid() ? FileId_1.FileId._fromProto(receipt.getFileid()) : null, receipt.hasContractid() ?
            ContractId_1.ContractId._fromProto(receipt.getContractid()) :
            null, receipt.hasTopicid() ?
            ConsensusTopicId_1.ConsensusTopicId._fromProto(receipt.getTopicid()) :
            null, receipt.hasExchangerate() ?
            ExchangeRate_1.exchangeRateSetToSdk(receipt.getExchangerate()) :
            null, receipt.getTopicsequencenumber(), receipt.getTopicrunninghash_asU8());
    }
}
exports.TransactionReceipt = TransactionReceipt;
