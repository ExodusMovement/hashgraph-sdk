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
exports.ConsensusMessageSubmitTransaction = void 0;
const TransactionBuilder_1 = require("../TransactionBuilder");
const SingleConsensusMessageSubmitTransaction_1 = require("./SingleConsensusMessageSubmitTransaction");
const ConsensusService_pb_service_1 = require("../generated/ConsensusService_pb_service");
const ConsensusTopicId_1 = require("./ConsensusTopicId");
const utf8 = require("@stablelib/utf8");
const TransactionId_1 = require("../TransactionId");
class ConsensusMessageSubmitTransaction extends TransactionBuilder_1.TransactionBuilder {
    constructor() {
        super();
        this._maxChunks = 10;
        this.topicId = null;
        this.message = null;
        this.chunkInfo = null;
    }
    setTopicId(id) {
        this.topicId = new ConsensusTopicId_1.ConsensusTopicId(id);
        return this;
    }
    setMessage(message) {
        this.message = message instanceof Uint8Array ? message : utf8.encode(message);
        return this;
    }
    setMaxChunks(maxChunks) {
        this._maxChunks = maxChunks;
        return this;
    }
    setChunkInfo(initialId, total, num) {
        this.chunkInfo = {
            id: initialId,
            total,
            number: num
        };
        return this;
    }
    build(client) {
        if (this.message.length / ConsensusMessageSubmitTransaction.chunkSize > this._maxChunks) {
            throw new Error(`Message with size ${this.message.length} too long for ${this._maxChunks} chunks`);
        }
        const initialTransactionId = this._inner.getTransactionid() == null ?
            new TransactionId_1.TransactionId(client._getOperatorAccountId()) :
            TransactionId_1.TransactionId._fromProto(this._inner.getTransactionid());
        let time = initialTransactionId.validStart;
        if (this.chunkInfo != null) {
            return [
                new SingleConsensusMessageSubmitTransaction_1.SingleConsensusMessageSubmitTransaction()
                    .setTopicId(this.topicId)
                    .setMessage(this.message)
                    .setChunkInfo(this.chunkInfo)
                    .build(client)
            ];
        }
        const chunks = [];
        // split message into one or more "chunks"
        for (let i = 0; i < this.message.length; i += ConsensusMessageSubmitTransaction.chunkSize) {
            chunks.push(this.message.slice(i, i + ConsensusMessageSubmitTransaction.chunkSize));
        }
        return chunks.map((chunk, index) => {
            const tx = new SingleConsensusMessageSubmitTransaction_1.SingleConsensusMessageSubmitTransaction()
                .setTopicId(this.topicId)
                .setMessage(chunk)
                .setChunkInfo({
                id: initialTransactionId,
                total: chunks.length,
                number: index + 1
            })
                // eslint-disable-next-line max-len
                .setTransactionId(TransactionId_1.TransactionId.withValidStart(initialTransactionId.accountId, time))
                .build(client);
            time = time._increment();
            return tx;
        });
    }
    // eslint-disable-next-line require-await
    getCost() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Cannot get cost of a transaction list");
        });
    }
    execute(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = yield this.executeAll(client);
            return ids[0];
        });
    }
    executeAll(client) {
        return Promise.all(this.build(client).map((tx) => tx.execute(client)));
    }
    get _method() {
        return ConsensusService_pb_service_1.ConsensusService.submitMessage;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _doValidate(_) {
        // No local validation needed
    }
}
exports.ConsensusMessageSubmitTransaction = ConsensusMessageSubmitTransaction;
ConsensusMessageSubmitTransaction.chunkSize = 4096;
