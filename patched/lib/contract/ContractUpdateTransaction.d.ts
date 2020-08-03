import { SingleTransactionBuilder } from "../TransactionBuilder";
import { Transaction } from "../generated/Transaction_pb";
import { TransactionResponse } from "../generated/TransactionResponse_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { ContractIdLike } from "./ContractId";
import { AccountIdLike } from "../account/AccountId";
import { FileIdLike } from "../file/FileId";
import { PublicKey } from "../crypto/PublicKey";
/**
 * Modify a smart contract instance to have the given parameter values. Any null field is ignored
 * (left unchanged). If only the contractInstanceExpirationTime is being modified, then no signature
 * is needed on this transaction other than for the account paying for the transaction itself.
 * But if any of the other fields are being modified, then it must be signed by the adminKey. The
 * use of adminKey is not currently supported in this API, but in the future will be implemented to
 * allow these fields to be modified, and also to make modifications to the state of the instance.
 * If the contract is created with no admin key, then none of the fields can be changed that need an
 * admin signature, and therefore no admin key can ever be added. So if there is no admin key, then
 * things like the bytecode are immutable. But if there is an admin key, then they can be changed.
 * For example, the admin key might be a threshold key, which requires 3 of 5 binding arbitration
 * judges to agree before the bytecode can be changed. This can be used to add flexibility to the
 * management of smart contract behavior. But this is optional. If the smart contract is created
 * without an admin key, then such a key can never be added, and its bytecode will be immutable.
 */
export declare class ContractUpdateTransaction extends SingleTransactionBuilder {
    private readonly _body;
    constructor();
    /**
     * The Contract ID instance to update (this can't be changed).
     */
    setContractId(contractIdLike: ContractIdLike): this;
    /**
     * The state of the instance can be modified arbitrarily if this key signs a transaction to
     * modify it. If this is null, then such modifications are not possible, and there is no
     * administrator that can override the normal operation of this smart contract instance.
     */
    setAdminKey(publicKey: PublicKey): this;
    /**
     * ID of the account to which this account is proxy staked. If proxyAccountID is null, or is
     * an invalid account, or is an account that isn't a node, then this account is automatically
     * proxy staked to a node chosen by the network, but without earning payments. If the
     * proxyAccountID account refuses to accept proxy staking , or if it is not currently running
     * a node, then it will behave as if proxyAccountID was null.
     */
    setProxyAccountId(proxyAccountId: AccountIdLike): this;
    /**
     * The file ID of file containing the smart contract byte code. A copy will be made and held
     * by the contract instance, and have the same expiration time as the instance.
     */
    setBytecodeFileId(fileIdLike: FileIdLike): this;
    /**
     * The instance will charge its account every this many seconds to renew for this long.
     */
    setAutoRenewPeriod(seconds: number): this;
    /**
     * Extend the expiration of the instance and its account to this time (no effect if it
     * already is this time or later).
     */
    setExpirationTime(date: number | Date): this;
    /**
     * The memo associated with the contract (max 100 bytes)
     */
    setContractMemo(memo: string): this;
    protected _doValidate(errors: string[]): void;
    protected get _method(): grpc.UnaryMethodDefinition<Transaction, TransactionResponse>;
}
