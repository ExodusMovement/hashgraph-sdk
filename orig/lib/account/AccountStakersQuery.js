"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStakersQuery = void 0;
const QueryBuilder_1 = require("../QueryBuilder");
const CryptoService_pb_service_1 = require("../generated/CryptoService_pb_service");
const QueryHeader_pb_1 = require("../generated/QueryHeader_pb");
const AccountId_1 = require("./AccountId");
const CryptoGetStakers_pb_1 = require("../generated/CryptoGetStakers_pb");
const Hbar_1 = require("../Hbar");
/**
 * Get all the accounts that are proxy staking to this account. For each of them, give the amount
 * currently staked. This is not yet implemented, but will be in a future version of the API.
 */
class AccountStakersQuery extends QueryBuilder_1.QueryBuilder {
    constructor() {
        super();
        this._builder = new CryptoGetStakers_pb_1.CryptoGetStakersQuery();
        this._builder.setHeader(new QueryHeader_pb_1.QueryHeader());
        this._inner.setCryptogetproxystakers(this._builder);
    }
    /**
     * The Account ID that is being proxy staked to.
     */
    setAccountId(accountId) {
        this._builder.setAccountid(new AccountId_1.AccountId(accountId)._toProto());
        return this;
    }
    _doLocalValidate(errors) {
        if (!this._builder.hasAccountid()) {
            errors.push("`.setAccountId()` required");
        }
    }
    _getMethod() {
        return CryptoService_pb_service_1.CryptoService.getStakersByAccountID;
    }
    _getHeader() {
        return this._builder.getHeader();
    }
    _mapResponseHeader(response) {
        return response.getCryptogetproxystakers().getHeader();
    }
    _mapResponse(response) {
        const allStakers = response.getCryptogetproxystakers();
        return allStakers.getStakers().getProxystakerList().map((proto) => ({
            accountId: AccountId_1.AccountId._fromProto(proto.getAccountid()),
            amount: Hbar_1.Hbar.fromTinybar(proto.getAmount())
        }));
    }
}
exports.AccountStakersQuery = AccountStakersQuery;
