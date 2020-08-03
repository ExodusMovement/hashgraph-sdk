"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ed25519PublicKey = void 0;
const nacl = require("tweetnacl");
const BasicTypes_pb_1 = require("../generated/BasicTypes_pb");
const util_1 = require("./util");
const BadKeyError_1 = require("../errors/BadKeyError");
const hex = require("@stablelib/hex");
class Ed25519PublicKey {
    constructor(keyData) {
        if (keyData.length !== nacl.sign.publicKeyLength) {
            throw new BadKeyError_1.BadKeyError();
        }
        this._keyData = keyData;
    }
    static fromBytes(keyData) {
        return new Ed25519PublicKey(keyData);
    }
    static fromString(keyStr) {
        switch (keyStr.length) {
            case 64: { // raw public key
                const newKey = new Ed25519PublicKey(hex.decode(keyStr));
                newKey._asStringRaw = keyStr;
                return newKey;
            }
            case 88: // DER encoded public key
                if (keyStr.startsWith(util_1.ed25519PubKeyPrefix)) {
                    const rawKey = keyStr.slice(24);
                    const newKey = new Ed25519PublicKey(hex.decode(rawKey));
                    newKey._asStringRaw = rawKey;
                    return newKey;
                }
                break;
            default:
        }
        throw new BadKeyError_1.BadKeyError();
    }
    toBytes() {
        return this._keyData.slice();
    }
    toString(raw = false) {
        if (this._asStringRaw == null) {
            this._asStringRaw = hex.encode(this._keyData, true);
        }
        return (raw ? "" : util_1.ed25519PubKeyPrefix) + this._asStringRaw;
    }
    /* eslint-disable-next-line @typescript-eslint/member-naming */
    _toProtoKey() {
        const key = new BasicTypes_pb_1.Key();
        // copy the key bytes so they can't modify them through this object
        key.setEd25519(this.toBytes());
        return key;
    }
    // INTERNAL API
    _bytesEqual(bytes) {
        return this._keyData === bytes;
    }
}
exports.Ed25519PublicKey = Ed25519PublicKey;
