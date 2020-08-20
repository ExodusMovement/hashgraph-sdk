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
exports.Pbkdf2 = exports.pbkdf2 = void 0;
const Hmac_1 = require("./Hmac");
const utf8 = require("@stablelib/utf8");
const crypto = require("crypto");
const util_1 = require("util");
exports.pbkdf2 = util_1.promisify(crypto.pbkdf2);
class Pbkdf2 {
    static deriveKey(algorithm, password, salt, iterations, length) {
        return __awaiter(this, void 0, void 0, function* () {
            const pass = typeof password === "string" ?
                // Valid ASCII is also valid UTF-8 so encoding the password as UTF-8
                // should be fine if only valid ASCII characters are used in the password
                utf8.encode(password) :
                password;
            const nacl = typeof salt === "string" ?
                utf8.encode(salt) :
                salt;
            if (typeof window !== "undefined" && window != null) {
                try {
                    const key = yield window.crypto.subtle.importKey("raw", pass, {
                        name: "PBKDF2",
                        hash: algorithm
                    }, false, ["deriveBits"]);
                    return new Uint8Array(yield window.crypto.subtle.deriveBits({
                        name: "PBKDF2",
                        hash: algorithm,
                        salt: nacl,
                        iterations
                    }, key, length << 3));
                }
                catch (_a) {
                    // will fall through to crypto, which can be polyfilled using crypto-browserify
                }
            }
            switch (algorithm) {
                case Hmac_1.HashAlgorithm.Sha256:
                    return exports.pbkdf2(password, nacl, iterations, length, "sha256");
                case Hmac_1.HashAlgorithm.Sha384:
                    return exports.pbkdf2(password, nacl, iterations, length, "sha384");
                case Hmac_1.HashAlgorithm.Sha512:
                    return exports.pbkdf2(password, nacl, iterations, length, "sha512");
                default: throw new Error("(BUG) Non-Exhaustive switch statement for algorithms");
            }
        });
    }
}
exports.Pbkdf2 = Pbkdf2;
