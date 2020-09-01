import { Transaction as Transaction_ } from "./generated/Transaction_pb";
import { BaseClient, TransactionSigner } from "./BaseClient";
import { TransactionResponse } from "./generated/TransactionResponse_pb";
import { TransactionId } from "./TransactionId";
import { TransactionReceipt } from "./TransactionReceipt";
import { Ed25519PublicKey } from "./crypto/Ed25519PublicKey";
import { Ed25519PrivateKey } from "./crypto/Ed25519PrivateKey";
/** signature/public key pairs are passed around as objects */
export interface SignatureAndKey {
    signature: Uint8Array;
    publicKey: Ed25519PublicKey;
}
/** internal method to create a new transaction from its discrete parts */
export declare const transactionCreate: unique symbol;
/** execute the transaction directly and return the protobuf response */
export declare const transactionCall: unique symbol;
export declare class Transaction {
    private readonly _node;
    private readonly _inner;
    private readonly _txnId;
    private readonly _validDurationSeconds;
    private readonly _method;
    private static [transactionCreate];
    private constructor();
    static fromBytes(bytes: Uint8Array): Transaction;
    get id(): TransactionId;
    private _checkPubKey;
    private _addSignature;
    sign(privateKey: Ed25519PrivateKey): this;
    /**
     * Given the transaction body bytes, asynchronously return a signature and associated public
     * key.
     *
     * @param publicKey the public key that can be used to verify the returned signature
     * @param signer
     */
    signWith(publicKey: Ed25519PublicKey, signer: TransactionSigner): Promise<this>;
    hash(): Uint8Array;
    [transactionCall](client: BaseClient): Promise<TransactionResponse>;
    execute(client: BaseClient): Promise<TransactionId>;
    /** @deprecate `Transaction.getReceipt()` is deprecrated. Use `(await Transaction.execute()).getReceipt()` instead. */
    getReceipt(client: BaseClient): Promise<TransactionReceipt>;
    _toProto(): Transaction_;
    toBytes(): Uint8Array;
    toString(): string;
}
