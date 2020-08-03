"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateTransaction = void 0;
const TransactionBuilder_1 = require("../TransactionBuilder");
const CryptoCreate_pb_1 = require("../generated/CryptoCreate_pb");
const util_1 = require("../util");
const CryptoService_pb_service_1 = require("../generated/CryptoService_pb_service");
const Hbar_1 = require("../Hbar");
const bignumber_js_1 = require("bignumber.js");
const AccountId_1 = require("./AccountId");
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
class AccountCreateTransaction extends TransactionBuilder_1.SingleTransactionBuilder {
    constructor() {
        super();
        const body = new CryptoCreate_pb_1.CryptoCreateTransactionBody();
        this._body = body;
        this._inner.setCryptocreateaccount(body);
        // 90 days, required
        this.setAutoRenewPeriod(7890000);
        // Default to maximum values for record thresholds. Without this records would be
        // auto-created whenever a send or receive transaction takes place for this new account.
        // This should be an explicit ask.
        this.setReceiveRecordThreshold(Hbar_1.Hbar.MAX);
        this.setSendRecordThreshold(Hbar_1.Hbar.MAX);
    }
    /**
     * The key that must sign each transfer out of the account. If receiverSigRequired is true, then it must also sign any transfer into the account.
     */
    setKey(publicKey) {
        this._body.setKey(publicKey._toProtoKey());
        return this;
    }
    /**
     * The account is charged to extend its expiration date every this many seconds. If it doesn't have enough balance,
     * it extends as long as possible. If it is empty when it expires, then it is deleted.
     */
    setAutoRenewPeriod(seconds) {
        this._body.setAutorenewperiod(util_1.newDuration(seconds));
        return this;
    }
    /**
     * The initial number of tinybars to put into the account.
     */
    setInitialBalance(balance) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(balance);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._body.setInitialbalance(hbar[Hbar_1.hbarToProto]());
        return this;
    }
    /**
     * The threshold amount (in tinybars) for which an account record is created for any receive/deposit transaction.
     */
    setReceiveRecordThreshold(threshold) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(threshold);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._body.setReceiverecordthreshold(hbar[Hbar_1.hbarToProto]());
        return this;
    }
    /**
     * The threshold amount (in tinybars) for which an account record is created for any send/withdraw transaction.
     */
    setSendRecordThreshold(threshold) {
        const hbar = Hbar_1.hbarFromTinybarOrHbar(threshold);
        hbar[Hbar_1.hbarCheck]({ allowNegative: false });
        this._body.setSendrecordthreshold(hbar[Hbar_1.hbarToProto]());
        return this;
    }
    /**
     * If true, this account's key must sign any transaction depositing into this account (in addition to all withdrawals).
     */
    setReceiverSignatureRequired(required) {
        this._body.setReceiversigrequired(required);
        return this;
    }
    /**
     * ID of the account to which this account is proxy staked. If proxyAccountID is null,
     * or is an invalid account, or is an account that isn't a node, then this account is
     * automatically proxy staked to a node chosen by the network, but without earning payments.
     * If the proxyAccountID account refuses to accept proxy staking , or if it is not currently
     * running a node, then it will behave as if proxyAccountID was null.
     */
    setProxyAccountId(accountId) {
        this._body.setProxyaccountid(new AccountId_1.AccountId(accountId)._toProto());
        return this;
    }
    get _method() {
        return CryptoService_pb_service_1.CryptoService.createAccount;
    }
    _doValidate(errors) {
        if (!this._body.hasKey()) {
            errors.push("AccountCreateTransaction requires .setKey()");
        }
        if (new bignumber_js_1.default(this._body.getInitialbalance()).isNegative()) {
            errors.push("AccountCreateTransaction must have a positive setInitialBalance");
        }
    }
}
exports.AccountCreateTransaction = AccountCreateTransaction;
