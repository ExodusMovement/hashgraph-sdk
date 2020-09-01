// package: proto
// file: Response.proto

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

export class Response extends jspb.Message {
  hasGetbykey(): boolean;
  clearGetbykey(): void;
  getGetbykey(): GetByKey_pb.GetByKeyResponse | undefined;
  setGetbykey(value?: GetByKey_pb.GetByKeyResponse): void;

  hasGetbysolidityid(): boolean;
  clearGetbysolidityid(): void;
  getGetbysolidityid(): GetBySolidityID_pb.GetBySolidityIDResponse | undefined;
  setGetbysolidityid(value?: GetBySolidityID_pb.GetBySolidityIDResponse): void;

  hasCryptogetaccountbalance(): boolean;
  clearCryptogetaccountbalance(): void;
  getCryptogetaccountbalance(): CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse | undefined;
  setCryptogetaccountbalance(value?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse): void;

  hasCryptogetaccountrecords(): boolean;
  clearCryptogetaccountrecords(): void;
  getCryptogetaccountrecords(): CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse | undefined;
  setCryptogetaccountrecords(value?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse): void;

  hasCryptogetinfo(): boolean;
  clearCryptogetinfo(): void;
  getCryptogetinfo(): CryptoGetInfo_pb.CryptoGetInfoResponse | undefined;
  setCryptogetinfo(value?: CryptoGetInfo_pb.CryptoGetInfoResponse): void;

  hasCryptogetlivehash(): boolean;
  clearCryptogetlivehash(): void;
  getCryptogetlivehash(): CryptoGetLiveHash_pb.CryptoGetLiveHashResponse | undefined;
  setCryptogetlivehash(value?: CryptoGetLiveHash_pb.CryptoGetLiveHashResponse): void;

  hasCryptogetproxystakers(): boolean;
  clearCryptogetproxystakers(): void;
  getCryptogetproxystakers(): CryptoGetStakers_pb.CryptoGetStakersResponse | undefined;
  setCryptogetproxystakers(value?: CryptoGetStakers_pb.CryptoGetStakersResponse): void;

  hasTransactiongetreceipt(): boolean;
  clearTransactiongetreceipt(): void;
  getTransactiongetreceipt(): TransactionGetReceipt_pb.TransactionGetReceiptResponse | undefined;
  setTransactiongetreceipt(value?: TransactionGetReceipt_pb.TransactionGetReceiptResponse): void;

  hasTransactiongetrecord(): boolean;
  clearTransactiongetrecord(): void;
  getTransactiongetrecord(): TransactionGetRecord_pb.TransactionGetRecordResponse | undefined;
  setTransactiongetrecord(value?: TransactionGetRecord_pb.TransactionGetRecordResponse): void;

  hasTransactiongetfastrecord(): boolean;
  clearTransactiongetfastrecord(): void;
  getTransactiongetfastrecord(): TransactionGetFastRecord_pb.TransactionGetFastRecordResponse | undefined;
  setTransactiongetfastrecord(value?: TransactionGetFastRecord_pb.TransactionGetFastRecordResponse): void;

  hasNetworkgetversioninfo(): boolean;
  clearNetworkgetversioninfo(): void;
  getNetworkgetversioninfo(): NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse | undefined;
  setNetworkgetversioninfo(value?: NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse): void;

  getResponseCase(): Response.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    getbykey?: GetByKey_pb.GetByKeyResponse.AsObject,
    getbysolidityid?: GetBySolidityID_pb.GetBySolidityIDResponse.AsObject,
    cryptogetaccountbalance?: CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse.AsObject,
    cryptogetaccountrecords?: CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse.AsObject,
    cryptogetinfo?: CryptoGetInfo_pb.CryptoGetInfoResponse.AsObject,
    cryptogetlivehash?: CryptoGetLiveHash_pb.CryptoGetLiveHashResponse.AsObject,
    cryptogetproxystakers?: CryptoGetStakers_pb.CryptoGetStakersResponse.AsObject,
    transactiongetreceipt?: TransactionGetReceipt_pb.TransactionGetReceiptResponse.AsObject,
    transactiongetrecord?: TransactionGetRecord_pb.TransactionGetRecordResponse.AsObject,
    transactiongetfastrecord?: TransactionGetFastRecord_pb.TransactionGetFastRecordResponse.AsObject,
    networkgetversioninfo?: NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
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
    NETWORKGETVERSIONINFO = 151,
  }
}

