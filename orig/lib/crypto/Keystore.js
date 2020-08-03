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
exports.loadKeystore = exports.createKeystore = void 0;
const crypto = require("crypto");
const nacl = require("tweetnacl");
const KeyMismatchError_1 = require("./KeyMismatchError");
const hex = require("@stablelib/hex");
const utf8 = require("@stablelib/utf8");
const Hmac_1 = require("./Hmac");
const Pbkdf2_1 = require("./Pbkdf2");
const AES_128_CTR = "aes-128-ctr";
const HMAC_SHA256 = "hmac-sha256";
function createKeystore(privateKey, passphrase) {
    return __awaiter(this, void 0, void 0, function* () {
        // all values taken from https://github.com/ethereumjs/ethereumjs-wallet/blob/de3a92e752673ada1d78f95cf80bc56ae1f59775/src/index.ts#L25
        const dkLen = 32;
        const c = 262144;
        const saltLen = 32;
        const salt = nacl.randomBytes(saltLen);
        const key = yield Pbkdf2_1.Pbkdf2.deriveKey(Hmac_1.HashAlgorithm.Sha256, passphrase, salt, c, dkLen);
        const iv = nacl.randomBytes(16);
        // AES-128-CTR with the first half of the derived key and a random IV
        const cipher = crypto.createCipheriv(AES_128_CTR, key.slice(0, 16), iv);
        const cipherText = Buffer.concat([cipher.update(privateKey), cipher["final"]()]);
        const mac = yield Hmac_1.Hmac.hash(Hmac_1.HashAlgorithm.Sha384, key.slice(16), cipherText);
        const keystore = {
            version: 1,
            crypto: {
                ciphertext: hex.encode(cipherText, true),
                cipherparams: { iv: hex.encode(iv, true) },
                cipher: AES_128_CTR,
                kdf: "pbkdf2",
                kdfparams: {
                    dkLen,
                    salt: hex.encode(salt, true),
                    c,
                    prf: HMAC_SHA256
                },
                mac: hex.encode(mac, true)
            }
        };
        return utf8.encode(JSON.stringify(keystore));
    });
}
exports.createKeystore = createKeystore;
function loadKeystore(keystoreBytes, passphrase) {
    return __awaiter(this, void 0, void 0, function* () {
        const keystore = JSON.parse(Buffer.from(keystoreBytes).toString());
        if (keystore.version !== 1) {
            throw new Error(`unsupported keystore version: ${keystore.version}`);
        }
        const { ciphertext, cipherparams: { iv }, cipher, kdf, kdfparams: { dkLen, salt, c, prf }, mac } = keystore.crypto;
        if (kdf !== "pbkdf2") {
            throw new Error(`unsupported key derivation function: ${kdf}`);
        }
        if (prf !== HMAC_SHA256) {
            throw new Error(`unsupported key derivation hash function: ${prf}`);
        }
        const saltBytes = hex.decode(salt);
        const ivBytes = hex.decode(iv);
        const cipherBytes = hex.decode(ciphertext);
        const key = yield Pbkdf2_1.Pbkdf2.deriveKey(Hmac_1.HashAlgorithm.Sha256, passphrase, saltBytes, c, dkLen);
        const hmac = hex.decode(mac);
        const verifyHmac = yield Hmac_1.Hmac.hash(Hmac_1.HashAlgorithm.Sha384, key.slice(16), cipherBytes);
        // compare that these two Uint8Arrays are equivalent
        if (!hmac.every((b, i) => b === verifyHmac[i])) {
            throw new KeyMismatchError_1.KeyMismatchError(hmac, verifyHmac);
        }
        const decipher = crypto.createDecipheriv(cipher, key.slice(0, 16), ivBytes);
        const privateKeyBytes = Buffer.concat([decipher.update(cipherBytes), decipher["final"]()]);
        // `Buffer instanceof Uint8Array` doesn't work in Jest because the prototype chain is different
        const { secretKey: privateKey, publicKey } = nacl.sign.keyPair.fromSecretKey(Uint8Array.from(privateKeyBytes));
        return { privateKey, publicKey };
    });
}
exports.loadKeystore = loadKeystore;
