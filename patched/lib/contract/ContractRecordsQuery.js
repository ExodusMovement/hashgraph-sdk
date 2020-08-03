"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRecordsQuery = void 0;
const QueryBuilder_1 = require("../QueryBuilder");
const QueryHeader_pb_1 = require("../generated/QueryHeader_pb");
const SmartContractService_pb_service_1 = require("../generated/SmartContractService_pb_service");
const TransactionRecord_1 = require("../TransactionRecord");
const ContractId_1 = require("./ContractId");
const ContractGetRecords_pb_1 = require("../generated/ContractGetRecords_pb");
/**
 * Get all the records for a smart contract instance, for any function call
 * (or the constructor call) during the last 25 hours, for which a Record was requested.
 */
class ContractRecordsQuery extends QueryBuilder_1.QueryBuilder {
    constructor() {
        super();
        this._builder = new ContractGetRecords_pb_1.ContractGetRecordsQuery();
        this._builder.setHeader(new QueryHeader_pb_1.QueryHeader());
        this._inner.setContractgetrecords(this._builder);
    }
    /**
     * The smart contract instance for which the records should be retrieved.
     */
    setContractId(contractIdLike) {
        this._builder.setContractid(new ContractId_1.ContractId(contractIdLike)._toProto());
        return this;
    }
    _doLocalValidate(errors) {
        if (!this._builder.hasContractid()) {
            errors.push(".setContractId() required");
        }
    }
    _getMethod() {
        return SmartContractService_pb_service_1.SmartContractService.getTxRecordByContractID;
    }
    _getHeader() {
        return this._builder.getHeader();
    }
    _mapResponseHeader(response) {
        return response.getContractgetrecordsresponse().getHeader();
    }
    _mapResponse(response) {
        const contractResponse = response.getContractgetrecordsresponse();
        return contractResponse.getRecordsList().map(TransactionRecord_1.TransactionRecord._fromProto);
    }
}
exports.ContractRecordsQuery = ContractRecordsQuery;
