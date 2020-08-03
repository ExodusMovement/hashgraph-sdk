"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileId = void 0;
const BasicTypes_pb_1 = require("../generated/BasicTypes_pb");
const util_1 = require("../util");
const bignumber_js_1 = require("bignumber.js");
const hex = require("@stablelib/hex");
/** Normalized file ID returned by various methods in the SDK. */
class FileId {
    constructor(shardOrFileId, realm, file) {
        if (typeof shardOrFileId === "number" && realm != null && file != null) {
            this.shard = shardOrFileId;
            this.realm = realm;
            this.file = file;
        }
        else {
            const fileId = shardOrFileId;
            const id = fileId instanceof FileId ?
                fileId :
                util_1.normalizeEntityId("file", fileId);
            this.shard = id.shard;
            this.realm = id.realm;
            this.file = id.file;
        }
    }
    static fromString(id) {
        return new FileId(id);
    }
    // NOT A STABLE API
    static _fromProto(fileId) {
        return new FileId({
            shard: fileId.getShardnum(),
            realm: fileId.getRealmnum(),
            file: fileId.getFilenum()
        });
    }
    toString() {
        return `${this.shard}.${this.realm}.${this.file}`;
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
        const file = new bignumber_js_1.default(address.slice(24, 40), 16).toNumber();
        return new FileId(shard, realm, file);
    }
    toSolidityAddress() {
        const buffer = new Uint8Array(20);
        const view = new DataView(buffer.buffer, 0, 20);
        view.setUint32(0, this.shard);
        view.setUint32(8, this.realm);
        view.setUint32(16, this.file);
        return hex.encode(buffer, true);
    }
    // NOT A STABLE API
    _toProto() {
        const fileId = new BasicTypes_pb_1.FileID();
        fileId.setShardnum(this.shard);
        fileId.setRealmnum(this.realm);
        fileId.setFilenum(this.file);
        return fileId;
    }
}
exports.FileId = FileId;
/**
 * The public node address book for the current network.
 */
FileId.ADDRESS_BOOK = new FileId("0.0.102");
/**
 * The current fee schedule for the network.
 */
FileId.FEE_SCHEDULE = new FileId("0.0.111");
/**
 * The current exchange rate of HBAR to USD.
 */
FileId.EXCHANGE_RATES = new FileId("0.0.112");
