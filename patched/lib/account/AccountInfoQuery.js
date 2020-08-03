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
exports.AccountInfoQuery = void 0;
const QueryBuilder_1 = require("../QueryBuilder");
const CryptoGetInfo_pb_1 = require("../generated/CryptoGetInfo_pb");
const CryptoService_pb_service_1 = require("../generated/CryptoService_pb_service");
const QueryHeader_pb_1 = require("../generated/QueryHeader_pb");
const Hbar_1 = require("../Hbar");
const AccountId_1 = require("./AccountId");
const Timestamp_1 = require("../Timestamp");
const PublicKey_1 = require("../crypto/PublicKey");
/**
 * Get all the information about an account, including the balance.
 * This does not get the list of account records.
 */
class AccountInfoQuery extends QueryBuilder_1.QueryBuilder {
    constructor() {
        super();
        this._builder = new CryptoGetInfo_pb_1.CryptoGetInfoQuery();
        this._builder.setHeader(new QueryHeader_pb_1.QueryHeader());
        this._inner.setCryptogetinfo(this._builder);
    }
    /**
     * The account ID for which information is requested.
     */
    setAccountId(accountId) {
        this._builder.setAccountid(new AccountId_1.AccountId(accountId)._toProto());
        return this;
    }
    /**
     * Wrapper around `QueryBuilder.getCost()`. This must exist because the cost returned
     * `QueryBuilder.getCost()` and therein the Hedera Network doesn't work for any
     * acocuntns that have been deleted. In that case we want the minimum
     * cost to be ~25 Tinybar as this seems to succeed most of the time.
     */
    getCost(client) {
        const _super = Object.create(null, {
            getCost: { get: () => super.getCost }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // deleted accounts return a COST_ANSWER of zero which triggers `INSUFFICIENT_TX_FEE`
            // if you set that as the query payment; 25 tinybar seems to be enough to get
            // `ACCOUNT_DELETED` back instead.
            const min = Hbar_1.Hbar.fromTinybar(25);
            const cost = yield _super.getCost.call(this, client);
            return cost.isGreaterThan(min) ? cost : min;
        });
    }
    _doLocalValidate(errors) {
        if (!this._builder.hasAccountid()) {
            errors.push("`.setAccountId()` required");
        }
    }
    _getMethod() {
        return CryptoService_pb_service_1.CryptoService.getAccountInfo;
    }
    _getHeader() {
        return this._builder.getHeader();
    }
    _mapResponseHeader(response) {
        return response.getCryptogetinfo().getHeader();
    }
    _mapResponse(response) {
        const accountInfo = response.getCryptogetinfo().getAccountinfo();
        const sendThreshold = Hbar_1.Hbar.fromTinybar(accountInfo.getGeneratesendrecordthreshold());
        const receiveThreshold = Hbar_1.Hbar.fromTinybar(accountInfo.getGeneratereceiverecordthreshold());
        return {
            accountId: AccountId_1.AccountId._fromProto(accountInfo.getAccountid()),
            contractAccountId: accountInfo.getContractaccountid(),
            isDeleted: accountInfo.getDeleted(),
            key: PublicKey_1._fromProtoKey(accountInfo.getKey()),
            balance: Hbar_1.Hbar.fromTinybar(accountInfo.getBalance()),
            generateSendRecordThreshold: sendThreshold,
            generateReceiveRecordThreshold: receiveThreshold,
            isReceiverSignatureRequired: accountInfo.getReceiversigrequired(),
            expirationTime: new Date(Timestamp_1.timestampToMs(accountInfo.getExpirationtime())),
            autoRenewPeriod: accountInfo.getAutorenewperiod().getSeconds(),
            proxyAccountId: accountInfo.hasProxyaccountid() ?
                AccountId_1.AccountId._fromProto(accountInfo.getProxyaccountid()) :
                null,
            proxyReceived: Hbar_1.Hbar.fromTinybar(accountInfo.getProxyreceived())
        };
    }
}
exports.AccountInfoQuery = AccountInfoQuery;
