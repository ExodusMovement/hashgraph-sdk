import { SingleTransactionBuilder } from "../TransactionBuilder";
import { Transaction } from "../generated/Transaction_pb";
import { TransactionResponse } from "../generated/TransactionResponse_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { Hbar, Tinybar } from "../Hbar";
import UnaryMethodDefinition = grpc.UnaryMethodDefinition;
import { PublicKey } from "../crypto/PublicKey";
import { AccountIdLike } from "./AccountId";
/**
 * Create a new account. After the account is created, the AccountID for it is in the receipt,
 * or can be retrieved with a GetByKey query, or by asking for a Record of the transaction to
 * be created, and retrieving that. The account can then automatically generate records for large
 * transfers into it or out of it, which each last for 25 hours. Records are generated for any
 * transfer that exceeds the thresholds given here. This account is charged cryptocurrency for
 * each record generated, so the thresholds are useful for limiting Record generation to happen
 * only for large transactions. The Key field is the key used to sign transactions for this
 * account. If the account has receiverSigRequired set to true, then all cryptocurrency transfers
 * must be signed by this account's key, both for transfers in and out. If it is false, then only
 * transfers out have to be signed by it. When the account is created, the payer account is charged
 * enough hbars so that the new account will not expire for the next autoRenewPeriod seconds. When
 * it reaches the expiration time, the new account will then be automatically charged to renew for
 *  another autoRenewPeriod seconds. If it does not have enough hbars to renew for that long, then
 * the remaining hbars are used to extend its expiration as long as possible. If it is has a zero
 * balance when it expires, then it is deleted. This transaction must be signed by the payer
 * account. If receiverSigRequired is false, then the transaction does not have to be signed by the
 * keys in the keys field. If it is true, then it must be signed by them, in addition to the keys
 * of the payer account.
 *
 * An entity (account, file, or smart contract instance) must be created in a particular realm.
 * If the realmID is left null, then a new realm will be created with the given admin key.
 * If a new realm has a null adminKey, then anyone can create/modify/delete entities in that realm.
 * But if an admin key is given, then any transaction to create/modify/delete an entity in that
 * realm must be signed by that key, though anyone can still call functions on smart contract
 * instances that exist in that realm. A realm ceases to exist when everything within it has
 * expired and no longer exists.
 *
 * The current API ignores shardID, realmID, and newRealmAdminKey, and creates everything in
 * shard 0 and realm 0, with a null key. Future versions of the API will support multiple
 * realms and multiple shards.
 */
export declare class AccountCreateTransaction extends SingleTransactionBuilder {
    private _body;
    constructor();
    /**
     * The key that must sign each transfer out of the account. If receiverSigRequired is true, then it must also sign any transfer into the account.
     */
    setKey(publicKey: PublicKey): this;
    /**
     * The account is charged to extend its expiration date every this many seconds. If it doesn't have enough balance,
     * it extends as long as possible. If it is empty when it expires, then it is deleted.
     */
    setAutoRenewPeriod(seconds: number): this;
    /**
     * The initial number of tinybars to put into the account.
     */
    setInitialBalance(balance: Tinybar | Hbar): this;
    /**
     * The threshold amount (in tinybars) for which an account record is created for any receive/deposit transaction.
     */
    setReceiveRecordThreshold(threshold: Tinybar | Hbar): this;
    /**
     * The threshold amount (in tinybars) for which an account record is created for any send/withdraw transaction.
     */
    setSendRecordThreshold(threshold: Tinybar | Hbar): this;
    /**
     * If true, this account's key must sign any transaction depositing into this account (in addition to all withdrawals).
     */
    setReceiverSignatureRequired(required: boolean): this;
    /**
     * ID of the account to which this account is proxy staked. If proxyAccountID is null,
     * or is an invalid account, or is an account that isn't a node, then this account is
     * automatically proxy staked to a node chosen by the network, but without earning payments.
     * If the proxyAccountID account refuses to accept proxy staking , or if it is not currently
     * running a node, then it will behave as if proxyAccountID was null.
     */
    setProxyAccountId(accountId: AccountIdLike): this;
    protected get _method(): UnaryMethodDefinition<Transaction, TransactionResponse>;
    protected _doValidate(errors: string[]): void;
}
