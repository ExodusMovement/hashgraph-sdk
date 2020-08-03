"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractId = void 0;
const BasicTypes_pb_1 = require("../generated/BasicTypes_pb");
const util_1 = require("../util");
const PublicKey_1 = require("../crypto/PublicKey");
const bignumber_js_1 = require("bignumber.js");
const hex = require("@stablelib/hex");
/** Normalized contract ID returned by various methods in the SDK. */
class ContractId extends PublicKey_1.PublicKey {
    constructor(shardOrContractId, realm, contract) {
        super();
        if (typeof shardOrContractId === "number" && realm != null && contract != null) {
            this.shard = shardOrContractId;
            this.realm = realm;
            this.contract = contract;
        }
        else {
            const contractId = shardOrContractId;
            const id = contractId instanceof ContractId ?
                contractId :
                util_1.normalizeEntityId("contract", contractId);
            this.shard = id.shard;
            this.realm = id.realm;
            this.contract = id.contract;
        }
    }
    static fromString(id) {
        return new ContractId(id);
    }
    // NOT A STABLE API
    static _fromProto(contractId) {
        return new ContractId({
            shard: contractId.getShardnum(),
            realm: contractId.getRealmnum(),
            contract: contractId.getContractnum()
        });
    }
    toString() {
        return `${this.shard}.${this.realm}.${this.contract}`;
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
        const contract = new bignumber_js_1.default(address.slice(24, 40), 16).toNumber();
        return new ContractId(shard, realm, contract);
    }
    toSolidityAddress() {
        const buffer = new Uint8Array(20);
        const view = new DataView(buffer.buffer, 0, 20);
        view.setUint32(0, this.shard);
        view.setUint32(8, this.realm);
        view.setUint32(16, this.contract);
        return hex.encode(buffer, true);
    }
    // NOT A STABLE API
    _toProto() {
        const contractId = new BasicTypes_pb_1.ContractID();
        contractId.setShardnum(this.shard);
        contractId.setRealmnum(this.realm);
        contractId.setContractnum(this.contract);
        return contractId;
    }
    // NOT A STABLE API
    _toProtoKey() {
        const key = new BasicTypes_pb_1.Key();
        key.setContractid(this._toProto());
        return key;
    }
}
exports.ContractId = ContractId;
