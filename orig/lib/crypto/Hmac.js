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
exports.Hmac = exports.HashAlgorithm = void 0;
const crypto = require("crypto");
const utf8 = require("@stablelib/utf8");
const hmac_1 = require("@stablelib/hmac");
const sha512_1 = require("@stablelib/sha512");
const sha384_1 = require("@stablelib/sha384");
const sha256_1 = require("@stablelib/sha256");
var HashAlgorithm;
(function (HashAlgorithm) {
    HashAlgorithm["Sha256"] = "SHA-256";
    HashAlgorithm["Sha384"] = "SHA-384";
    HashAlgorithm["Sha512"] = "SHA-512";
})(HashAlgorithm = exports.HashAlgorithm || (exports.HashAlgorithm = {}));
class Hmac {
    static hash(algorithm, secretKey, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = typeof secretKey === "string" ? utf8.encode(secretKey) : secretKey;
            const value = typeof data === "string" ? utf8.encode(data) : data;
            if (typeof window !== "undefined") {
                // Try SubtleCrypto if it exists, otherwise fallback to @stablelibs/Hmac
                try {
                    const key_ = yield window.crypto.subtle.importKey("raw", key, {
                        name: "HMAC",
                        hash: algorithm
                    }, false, ["sign"]);
                    return new Uint8Array(yield window.crypto.subtle.sign("HMAC", key_, value));
                }
                catch (_a) {
                    switch (algorithm) {
                        case HashAlgorithm.Sha256:
                            return hmac_1.hmac(sha256_1.SHA256, key, value);
                        case HashAlgorithm.Sha384:
                            return hmac_1.hmac(sha384_1.SHA384, key, value);
                        case HashAlgorithm.Sha512:
                            return hmac_1.hmac(sha512_1.SHA512, key, value);
                        default: throw new Error("(BUG) Non-Exhaustive switch statement for algorithms");
                    }
                }
            }
            switch (algorithm) {
                case HashAlgorithm.Sha256:
                    return crypto.createHmac("SHA256", key).update(value).digest();
                case HashAlgorithm.Sha384:
                    return crypto.createHmac("SHA384", key).update(value).digest();
                case HashAlgorithm.Sha512:
                    return crypto.createHmac("SHA512", key).update(value).digest();
                default: throw new Error("(BUG) Non-Exhaustive switch statement for algorithms");
            }
        });
    }
}
exports.Hmac = Hmac;
