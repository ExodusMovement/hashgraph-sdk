"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoTransferTransaction = void 0;
const TransactionBuilder_1 = require("../TransactionBuilder");
const CryptoTransfer_pb_1 = require("../generated/CryptoTransfer_pb");
const bignumber_js_1 = require("bignumber.js");
const CryptoService_pb_service_1 = require("../generated/CryptoService_pb_service");
const Hbar_1 = require("../Hbar");
const AccountId_1 = require("./AccountId");
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
class CryptoTransferTransaction extends TransactionBuilder_1.SingleTransactionBuilder {
    constructor() {
        super();
        this._body = new CryptoTransfer_pb_1.CryptoTransferTransactionBody();
        this._body.setTransfers(new CryptoTransfer_pb_1.TransferList());
        this._inner.setCryptotransfer(this._body);
    }
    /**
     * A list of senders with a given amount.
     */
    addSender(accountId, amount) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(amount);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        return this.addTransfer(accountId, hbar.negated());
    }
    /**
     * A list of receivers with a given amount.
     */
    addRecipient(accountId, amount) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(amount);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        return this.addTransfer(accountId, amount);
    }
    /**
     * Add a transfer to the list of transfers. Negative values are `senders` and
     * postitive values are `receivers`. Perfer using `CryptoTransferTransaction.addSender()`
     * and `CryptoTransferTransaction.addRecipient()` instead as those methods automatically
     * negate the values appropriately.
     */
    addTransfer(accountId, amount) {
        const amountHbar = Hbar_1.hbarFromTinybarOrHbar(amount);
        amountHbar[Hbar_1.hbarCheck]({ allowNegative: true });
        const transfers = this._body.getTransfers() || new CryptoTransfer_pb_1.TransferList();
        this._body.setTransfers(transfers);
        const acctAmt = new CryptoTransfer_pb_1.AccountAmount();
        acctAmt.setAccountid(new AccountId_1.AccountId(accountId)._toProto());
        acctAmt.setAmount(amountHbar[Hbar_1.hbarToProto]());
        transfers.addAccountamounts(acctAmt);
        return this;
    }
    _doValidate(errors) {
        const amts = this._body.getTransfers().getAccountamountsList();
        if (amts.length === 0) {
            errors.push("CryptoTransferTransaction must have at least one transfer");
            return;
        }
        const sum = amts.reduce((lastSum, acctAmt) => lastSum.plus(acctAmt.getAmount()), new bignumber_js_1.default(0));
        if (!sum.isZero()) {
            errors.push(`CryptoTransferTransaction must have zero sum; got: ${sum}`);
        }
    }
    get _method() {
        return CryptoService_pb_service_1.CryptoService.cryptoTransfer;
    }
}
exports.CryptoTransferTransaction = CryptoTransferTransaction;
