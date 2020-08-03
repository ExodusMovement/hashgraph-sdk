import { SingleTransactionBuilder } from "../TransactionBuilder";
import { Transaction } from "../generated/Transaction_pb";
import { TransactionResponse } from "../generated/TransactionResponse_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { Hbar, Tinybar } from "../Hbar";
import { AccountIdLike } from "./AccountId";
/**
 * Transfer cryptocurrency from some accounts to other accounts. The accounts list can contain up
 * to 10 accounts. The amounts list must be the same length as the accounts list. Each negative
 * amount is withdrawn from the corresponding account (a sender), and each positive one is added
 * to the corresponding account (a receiver). The amounts list must sum to zero. Each amount is a
 * number of tinyBars (there are 100,000,000 tinyBars in one Hbar). If any sender account fails to
 * have sufficient hbars to do the withdrawal, then the entire transaction fails, and none of those
 * transfers occur, though the transaction fee is still charged. This transaction must be signed by
 * the keys for all the sending accounts, and for any receiving accounts that have
 * receiverSigRequired == true. The signatures are in the same order as the accounts, skipping those
 * accounts that don't need a signature.
 */
export declare class CryptoTransferTransaction extends SingleTransactionBuilder {
    private readonly _body;
    constructor();
    /**
     * A list of senders with a given amount.
     */
    addSender(accountId: AccountIdLike, amount: Tinybar | Hbar): this;
    /**
     * A list of receivers with a given amount.
     */
    addRecipient(accountId: AccountIdLike, amount: Tinybar | Hbar): this;
    /**
     * Add a transfer to the list of transfers. Negative values are `senders` and
     * postitive values are `receivers`. Perfer using `CryptoTransferTransaction.addSender()`
     * and `CryptoTransferTransaction.addRecipient()` instead as those methods automatically
     * negate the values appropriately.
     */
    addTransfer(accountId: AccountIdLike, amount: Tinybar | Hbar): this;
    protected _doValidate(errors: string[]): void;
    protected get _method(): grpc.UnaryMethodDefinition<Transaction, TransactionResponse>;
}
