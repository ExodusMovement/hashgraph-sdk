"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountId = void 0;
const BasicTypes_pb_1 = require("../generated/BasicTypes_pb");
const util_1 = require("../util");
const bignumber_js_1 = require("bignumber.js");
const hex = require("@stablelib/hex");
/** Normalized account ID returned by various methods in the SDK. */
class AccountId {
    constructor(shardOrAccountId, realm, account) {
        if (typeof shardOrAccountId === "number" && realm != null && account != null) {
            this.shard = shardOrAccountId;
            this.realm = realm;
            this.account = account;
        }
        else {
            const accountId = shardOrAccountId;
            const id = accountId instanceof AccountId ?
                accountId :
                util_1.normalizeEntityId("account", accountId);
            this.shard = id.shard;
            this.realm = id.realm;
            this.account = id.account;
        }
    }
    static fromString(id) {
        return new AccountId(id);
    }
    // NOT A STABLE API
    static _fromProto(accountId) {
        return new AccountId({
            shard: accountId.getShardnum(),
            realm: accountId.getRealmnum(),
            account: accountId.getAccountnum()
        });
    }
    toString() {
        return `${this.shard}.${this.realm}.${this.account}`;
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
        const account = new bignumber_js_1.default(address.slice(24, 40), 16).toNumber();
        return new AccountId(shard, realm, account);
    }
    toSolidityAddress() {
        const buffer = new Uint8Array(20);
        const view = new DataView(buffer.buffer, 0, 20);
        view.setUint32(0, this.shard);
        view.setUint32(8, this.realm);
        view.setUint32(16, this.account);
        return hex.encode(buffer, true);
    }
    // NOT A STABLE API
    _toProto() {
        const acctId = new BasicTypes_pb_1.AccountID();
        acctId.setShardnum(this.shard);
        acctId.setRealmnum(this.realm);
        acctId.setAccountnum(this.account);
        return acctId;
    }
}
exports.AccountId = AccountId;
