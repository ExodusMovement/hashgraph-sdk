"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MirrorConsensusTopicResponse = exports.ConsensusMessageChunk = void 0;
const Time_1 = require("../Time");
const utf8 = require("@stablelib/utf8");
class ConsensusMessageChunk {
    constructor(consensusTimestamp, runningHash, sequenceNumber, contentSize) {
        this.consensusTimestamp = consensusTimestamp;
        this.runningHash = runningHash;
        this.sequenceNumber = sequenceNumber;
        this.contentSize = contentSize;
    }
}
exports.ConsensusMessageChunk = ConsensusMessageChunk;
class MirrorConsensusTopicResponse {
    constructor(maybeChunkedMessage) {
        this.chunks = null;
        if (Array.isArray(maybeChunkedMessage)) {
            const message = maybeChunkedMessage;
            const length = message.length;
            this.consensusTimestamp =
                Time_1.Time._fromProto(message[length - 1].getConsensustimestamp());
            this.message = new Uint8Array();
            this.runningHash = message[length - 1].getRunninghash_asU8();
            this.sequenceNumber = message[length - 1].getSequencenumber();
            // eslint-disable-next-line max-len
            message.sort((a, b) => a.getChunkinfo().getNumber() < b.getChunkinfo().getNumber() ? -1 : 1);
            this.chunks = message.map((m) => new ConsensusMessageChunk(Time_1.Time._fromProto(m.getConsensustimestamp()), m.getRunninghash_asU8(), m.getSequencenumber(), m.getMessage_asU8().length));
            // eslint-disable-next-line max-len
            const size = this.chunks.map((chunk) => chunk.contentSize).reduce((sum, current) => sum + current, 0);
            this.message = new Uint8Array(size);
            let offset = 0;
            message.forEach((message) => {
                this.message.set(message.getMessage_asU8(), offset);
                offset += message.getMessage_asU8().length;
            });
        }
        else {
            const message = maybeChunkedMessage;
            this.consensusTimestamp = Time_1.Time._fromProto(message.getConsensustimestamp());
            this.message = message.getMessage_asU8();
            this.runningHash = message.getRunninghash_asU8();
            this.sequenceNumber = message.getSequencenumber();
        }
    }
    toString() {
        return utf8.decode(this.message);
    }
}
exports.MirrorConsensusTopicResponse = MirrorConsensusTopicResponse;
