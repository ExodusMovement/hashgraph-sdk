import { SingleTransactionBuilder } from "../TransactionBuilder";
import { Transaction } from "../generated/Transaction_pb";
import { TransactionResponse } from "../generated/TransactionResponse_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { Hbar, Tinybar } from "../Hbar";
import UnaryMethodDefinition = grpc.UnaryMethodDefinition;
import { PublicKey } from "../crypto/PublicKey";
import { AccountId, AccountIdLike } from "./AccountId";
/**
 * Change properties for the given account. Any null field is ignored (left unchanged). This
 * transaction must be signed by the existing key for this account. If the transaction is
 * changing the key field, then the transaction must be signed by both the old key
 * (from before the change) and the new key. The old key must sign for security. The new
 * key must sign as a safeguard to avoid accidentally changing to an invalid key, and then
 * having no way to recover. When extending the expiration date, the cost is affected by the
 * size of the list of attached claims, and of the keys associated with the claims and the account.
 */
export declare class AccountUpdateTransaction extends SingleTransactionBuilder {
    private _body;
    constructor();
    /**
     * The account ID which is being updated in this transaction.
     */
    setAccountId(id: AccountIdLike): this;
    /**
     * The new key.
     */
    setKey(publicKey: PublicKey): this;
    /**
     * The new expiration time to extend to (ignored if equal to or before the current one)
     */
    setExpirationTime(date: number | Date): this;
    /**
     * The duration in which it will automatically extend the expiration period. If it doesn't
     * have enough balance, it extends as long as possible. If it is empty when it expires,
     * then it is deleted.
     */
    setAutoRenewPeriod(seconds: number): this;
    /**
     * ID of the account to which this account is proxy staked. If proxyAccountID is null, or is
     * an invalid account, or is an account that isn't a node, then this account is automatically
     * proxy staked to a node chosen by the network, but without earning payments. If the
     * proxyAccountID account refuses to accept proxy staking , or if it is not currently running
     * a node, then it will behave as if proxyAccountID was null.
     */
    setProxyAccountId(id: AccountId): this;
    /**
     * The new expiration time to extend to (ignored if equal to or before the current one).
     * @deprecated `.setPorxyAccount` was renamed to `.setProxyAccountId`
     */
    setPorxyAccount(id: AccountId): this;
    /**
     * The new threshold amount (in tinybars) for which an account record is created for any send/withdraw transaction.
     */
    setReceiverSignatureRequired(required: boolean): this;
    /**
     * The new threshold amount (in tinybars) for which an account record is created for any receive/deposit transaction.
     */
    setReceiveRecordThreshold(threshold: Tinybar | Hbar): this;
    /**
     * The new expiration time to extend to (ignored if equal to or before the current one).
     */
    setSendRecordThreshold(threshold: Tinybar | Hbar): this;
    protected get _method(): UnaryMethodDefinition<Transaction, TransactionResponse>;
    protected _doValidate(errors: string[]): void;
}
