"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateTransaction = void 0;
const TransactionBuilder_1 = require("../TransactionBuilder");
const CryptoUpdate_pb_1 = require("../generated/CryptoUpdate_pb");
const util_1 = require("../util");
const CryptoService_pb_service_1 = require("../generated/CryptoService_pb_service");
const Hbar_1 = require("../Hbar");
const AccountId_1 = require("./AccountId");
const Timestamp_1 = require("../Timestamp");
const wrappers_pb_1 = require("@exodus/google-protobuf/google/protobuf/wrappers_pb");
/**
 * Change properties for the given account. Any null field is ignored (left unchanged). This
 * transaction must be signed by the existing key for this account. If the transaction is
 * changing the key field, then the transaction must be signed by both the old key
 * (from before the change) and the new key. The old key must sign for security. The new
 * key must sign as a safeguard to avoid accidentally changing to an invalid key, and then
 * having no way to recover. When extending the expiration date, the cost is affected by the
 * size of the list of attached claims, and of the keys associated with the claims and the account.
 */
class AccountUpdateTransaction extends TransactionBuilder_1.SingleTransactionBuilder {
    constructor() {
        super();
        const body = new CryptoUpdate_pb_1.CryptoUpdateTransactionBody();
        this._body = body;
        this._inner.setCryptoupdateaccount(body);
    }
    /**
     * The account ID which is being updated in this transaction.
     */
    setAccountId(id) {
        this._body.setAccountidtoupdate(new AccountId_1.AccountId(id)._toProto());
        return this;
    }
    /**
     * The new key.
     */
    setKey(publicKey) {
        this._body.setKey(publicKey._toProtoKey());
        return this;
    }
    /**
     * The new expiration time to extend to (ignored if equal to or before the current one)
     */
    setExpirationTime(date) {
        this._body.setExpirationtime(Timestamp_1.timestampToProto(Timestamp_1.dateToTimestamp(date)));
        return this;
    }
    /**
     * The duration in which it will automatically extend the expiration period. If it doesn't
     * have enough balance, it extends as long as possible. If it is empty when it expires,
     * then it is deleted.
     */
    setAutoRenewPeriod(seconds) {
        this._body.setAutorenewperiod(util_1.newDuration(seconds));
        return this;
    }
    /**
     * ID of the account to which this account is proxy staked. If proxyAccountID is null, or is
     * an invalid account, or is an account that isn't a node, then this account is automatically
     * proxy staked to a node chosen by the network, but without earning payments. If the
     * proxyAccountID account refuses to accept proxy staking , or if it is not currently running
     * a node, then it will behave as if proxyAccountID was null.
     */
    setProxyAccountId(id) {
        this._body.setProxyaccountid(id._toProto());
        return this;
    }
    /**
     * The new expiration time to extend to (ignored if equal to or before the current one).
     * @deprecated `.setPorxyAccount` was renamed to `.setProxyAccountId`
     */
    setPorxyAccount(id) {
        console.warn("deprecated: `.setPorxyAccount` was renamed to `.setProxyAccountId`");
        return this.setProxyAccountId(id);
    }
    /**
     * The new threshold amount (in tinybars) for which an account record is created for any send/withdraw transaction.
     */
    setReceiverSignatureRequired(required) {
        const value = new wrappers_pb_1.BoolValue();
        value.setValue(required);
        this._body.setReceiversigrequiredwrapper(value);
        return this;
    }
    /**
     * The new threshold amount (in tinybars) for which an account record is created for any receive/deposit transaction.
     */
    setReceiveRecordThreshold(threshold) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(threshold);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._body.setReceiverecordthresholdwrapper(hbar[Hbar_1.hbarToProtoValue]());
        return this;
    }
    /**
     * The new expiration time to extend to (ignored if equal to or before the current one).
     */
    setSendRecordThreshold(threshold) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(threshold);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._body.setSendrecordthresholdwrapper(hbar[Hbar_1.hbarToProtoValue]());
        return this;
    }
    get _method() {
        return CryptoService_pb_service_1.CryptoService.updateAccount;
    }
    _doValidate(errors) {
        if (!this._body.hasAccountidtoupdate()) {
            errors.push("AccountUpdateTransaction requires .setAccountId()");
        }
    }
}
exports.AccountUpdateTransaction = AccountUpdateTransaction;
