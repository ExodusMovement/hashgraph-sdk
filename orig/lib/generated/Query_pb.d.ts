// package: proto
// file: Query.proto

import * as jspb from "google-protobuf";
import * as GetByKey_pb from "./GetByKey_pb";
import * as GetBySolidityID_pb from "./GetBySolidityID_pb";
import * as CryptoGetAccountBalance_pb from "./CryptoGetAccountBalance_pb";
import * as CryptoGetAccountRecords_pb from "./CryptoGetAccountRecords_pb";
import * as CryptoGetInfo_pb from "./CryptoGetInfo_pb";
import * as CryptoGetLiveHash_pb from "./CryptoGetLiveHash_pb";
import * as CryptoGetStakers_pb from "./CryptoGetStakers_pb";
import * as TransactionGetReceipt_pb from "./TransactionGetReceipt_pb";
import * as TransactionGetRecord_pb from "./TransactionGetRecord_pb";
import * as TransactionGetFastRecord_pb from "./TransactionGetFastRecord_pb";
import * as NetworkGetVersionInfo_pb from "./NetworkGetVersionInfo_pb";

export class Query extends jspb.Message {
  hasGetbykey(): boolean;
  clearGetbykey(): void;
  getGetbykey(): GetByKey_pb.GetByKeyQuery | undefined;
  setGetbykey(value?: GetByKey_pb.GetByKeyQuery): void;

  hasGetbysolidityid(): boolean;
  clearGetbysolidityid(): void;
  getGetbysolidityid(): GetBySolidityID_pb.GetBySolidityIDQuery | undefined;
  setGetbysolidityid(value?: GetBySolidityID_pb.GetBySolidityIDQuery): void;

  hasCryptogetaccountbalance(): boolean;
  clearCryptogetaccountbalance(): void;
  getCryptogetaccountbalance(): CryptoGetAccountBalance_pb.CryptoGetAccountBalanceQuery | undefined;
  setCryptogetaccountbalance(value?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceQuery): void;

  hasCryptogetaccountrecords(): boolean;
  clearCryptogetaccountrecords(): void;
  getCryptogetaccountrecords(): CryptoGetAccountRecords_pb.CryptoGetAccountRecordsQuery | undefined;
  setCryptogetaccountrecords(value?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsQuery): void;

  hasCryptogetinfo(): boolean;
  clearCryptogetinfo(): void;
  getCryptogetinfo(): CryptoGetInfo_pb.CryptoGetInfoQuery | undefined;
  setCryptogetinfo(value?: CryptoGetInfo_pb.CryptoGetInfoQuery): void;

  hasCryptogetlivehash(): boolean;
  clearCryptogetlivehash(): void;
  getCryptogetlivehash(): CryptoGetLiveHash_pb.CryptoGetLiveHashQuery | undefined;
  setCryptogetlivehash(value?: CryptoGetLiveHash_pb.CryptoGetLiveHashQuery): void;

  hasCryptogetproxystakers(): boolean;
  clearCryptogetproxystakers(): void;
  getCryptogetproxystakers(): CryptoGetStakers_pb.CryptoGetStakersQuery | undefined;
  setCryptogetproxystakers(value?: CryptoGetStakers_pb.CryptoGetStakersQuery): void;

  hasTransactiongetreceipt(): boolean;
  clearTransactiongetreceipt(): void;
  getTransactiongetreceipt(): TransactionGetReceipt_pb.TransactionGetReceiptQuery | undefined;
  setTransactiongetreceipt(value?: TransactionGetReceipt_pb.TransactionGetReceiptQuery): void;

  hasTransactiongetrecord(): boolean;
  clearTransactiongetrecord(): void;
  getTransactiongetrecord(): TransactionGetRecord_pb.TransactionGetRecordQuery | undefined;
  setTransactiongetrecord(value?: TransactionGetRecord_pb.TransactionGetRecordQuery): void;

  hasTransactiongetfastrecord(): boolean;
  clearTransactiongetfastrecord(): void;
  getTransactiongetfastrecord(): TransactionGetFastRecord_pb.TransactionGetFastRecordQuery | undefined;
  setTransactiongetfastrecord(value?: TransactionGetFastRecord_pb.TransactionGetFastRecordQuery): void;

  hasNetworkgetversioninfo(): boolean;
  clearNetworkgetversioninfo(): void;
  getNetworkgetversioninfo(): NetworkGetVersionInfo_pb.NetworkGetVersionInfoQuery | undefined;
  setNetworkgetversioninfo(value?: NetworkGetVersionInfo_pb.NetworkGetVersionInfoQuery): void;

  getQueryCase(): Query.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    getbykey?: GetByKey_pb.GetByKeyQuery.AsObject,
    getbysolidityid?: GetBySolidityID_pb.GetBySolidityIDQuery.AsObject,
    cryptogetaccountbalance?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceQuery.AsObject,
    cryptogetaccountrecords?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsQuery.AsObject,
    cryptogetinfo?: CryptoGetInfo_pb.CryptoGetInfoQuery.AsObject,
    cryptogetlivehash?: CryptoGetLiveHash_pb.CryptoGetLiveHashQuery.AsObject,
    cryptogetproxystakers?: CryptoGetStakers_pb.CryptoGetStakersQuery.AsObject,
    transactiongetreceipt?: TransactionGetReceipt_pb.TransactionGetReceiptQuery.AsObject,
    transactiongetrecord?: TransactionGetRecord_pb.TransactionGetRecordQuery.AsObject,
    transactiongetfastrecord?: TransactionGetFastRecord_pb.TransactionGetFastRecordQuery.AsObject,
    networkgetversioninfo?: NetworkGetVersionInfo_pb.NetworkGetVersionInfoQuery.AsObject,
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    GETBYKEY = 1,
    GETBYSOLIDITYID = 2,
    CRYPTOGETACCOUNTBALANCE = 7,
    CRYPTOGETACCOUNTRECORDS = 8,
    CRYPTOGETINFO = 9,
    CRYPTOGETLIVEHASH = 10,
    CRYPTOGETPROXYSTAKERS = 11,
    TRANSACTIONGETRECEIPT = 14,
    TRANSACTIONGETRECORD = 15,
    TRANSACTIONGETFASTRECORD = 16,
    NETWORKGETVERSIONINFO = 51,
  }
}

