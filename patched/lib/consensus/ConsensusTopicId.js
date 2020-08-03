"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsensusTopicId = void 0;
const BasicTypes_pb_1 = require("../generated/BasicTypes_pb");
const util_1 = require("../util");
const bignumber_js_1 = require("bignumber.js");
const hex = require("@stablelib/hex");
class ConsensusTopicId {
    constructor(shardOrTopicId, realm, topic) {
        if (typeof shardOrTopicId === "number" && realm != null && topic != null) {
            this.shard = shardOrTopicId;
            this.realm = realm;
            this.topic = topic;
        }
        else {
            const topicId = shardOrTopicId;
            const id = topicId instanceof ConsensusTopicId ?
                topicId :
                util_1.normalizeEntityId("topic", topicId);
            this.shard = id.shard;
            this.realm = id.realm;
            this.topic = id.topic;
        }
    }
    static fromString(id) {
        return new ConsensusTopicId(id);
    }
    // NOT A STABLE API
    static _fromProto(topicId) {
        return new ConsensusTopicId({
            shard: topicId.getShardnum(),
            realm: topicId.getRealmnum(),
            topic: topicId.getTopicnum()
        });
    }
    toString() {
        return `${this.shard}.${this.realm}.${this.topic}`;
    }
    static fromSolidityAddress(address) {
        if (address.length !== 40) {
            throw new Error(`Invalid hex encoded solidity address length:
                    expected length 40, got length ${address.length}`);
        }
        // First 4 bytes encoded as 8 characters
        const shard = new bignumber_js_1.default(address.slice(0, 8), 16).toNumber();
        // Next 8 bytes encoded as 16 characters
        const realm = new bignumber_js_1.default(address.slice(8, 24), 16).toNumber();
        // Next 8 bytes encoded as 16 characters
        const topic = new bignumber_js_1.default(address.slice(24, 40), 16).toNumber();
        return new ConsensusTopicId(shard, realm, topic);
    }
    toSolidityAddress() {
        const buffer = new Uint8Array(20);
        const view = new DataView(buffer.buffer, 0, 20);
        view.setUint32(0, this.shard);
        view.setUint32(8, this.realm);
        view.setUint32(16, this.topic);
        return hex.encode(buffer, true);
    }
    // NOT A STABLE API
    _toProto() {
        const acctId = new BasicTypes_pb_1.TopicID();
        acctId.setShardnum(this.shard);
        acctId.setRealmnum(this.realm);
        acctId.setTopicnum(this.topic);
        return acctId;
    }
}
exports.ConsensusTopicId = ConsensusTopicId;
