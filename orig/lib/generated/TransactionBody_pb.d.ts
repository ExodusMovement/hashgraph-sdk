// package: proto
// file: TransactionBody.proto

import * as jspb from "google-protobuf";
import * as CryptoAddLiveHash_pb from "./CryptoAddLiveHash_pb";
import * as CryptoCreate_pb from "./CryptoCreate_pb";
import * as CryptoDelete_pb from "./CryptoDelete_pb";
import * as CryptoDeleteLiveHash_pb from "./CryptoDeleteLiveHash_pb";
import * as CryptoTransfer_pb from "./CryptoTransfer_pb";
import * as CryptoUpdate_pb from "./CryptoUpdate_pb";
import * as Duration_pb from "./Duration_pb";
import * as BasicTypes_pb from "./BasicTypes_pb";

export class TransactionBody extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): BasicTypes_pb.TransactionID | undefined;
  setTransactionid(value?: BasicTypes_pb.TransactionID): void;

  hasNodeaccountid(): boolean;
  clearNodeaccountid(): void;
  getNodeaccountid(): BasicTypes_pb.AccountID | undefined;
  setNodeaccountid(value?: BasicTypes_pb.AccountID): void;

  getTransactionfee(): string;
  setTransactionfee(value: string): void;

  hasTransactionvalidduration(): boolean;
  clearTransactionvalidduration(): void;
  getTransactionvalidduration(): Duration_pb.Duration | undefined;
  setTransactionvalidduration(value?: Duration_pb.Duration): void;

  getGeneraterecord(): boolean;
  setGeneraterecord(value: boolean): void;

  getMemo(): string;
  setMemo(value: string): void;

  hasCryptoaddlivehash(): boolean;
  clearCryptoaddlivehash(): void;
  getCryptoaddlivehash(): CryptoAddLiveHash_pb.CryptoAddLiveHashTransactionBody | undefined;
  setCryptoaddlivehash(value?: CryptoAddLiveHash_pb.CryptoAddLiveHashTransactionBody): void;

  hasCryptocreateaccount(): boolean;
  clearCryptocreateaccount(): void;
  getCryptocreateaccount(): CryptoCreate_pb.CryptoCreateTransactionBody | undefined;
  setCryptocreateaccount(value?: CryptoCreate_pb.CryptoCreateTransactionBody): void;

  hasCryptodelete(): boolean;
  clearCryptodelete(): void;
  getCryptodelete(): CryptoDelete_pb.CryptoDeleteTransactionBody | undefined;
  setCryptodelete(value?: CryptoDelete_pb.CryptoDeleteTransactionBody): void;

  hasCryptodeletelivehash(): boolean;
  clearCryptodeletelivehash(): void;
  getCryptodeletelivehash(): CryptoDeleteLiveHash_pb.CryptoDeleteLiveHashTransactionBody | undefined;
  setCryptodeletelivehash(value?: CryptoDeleteLiveHash_pb.CryptoDeleteLiveHashTransactionBody): void;

  hasCryptotransfer(): boolean;
  clearCryptotransfer(): void;
  getCryptotransfer(): CryptoTransfer_pb.CryptoTransferTransactionBody | undefined;
  setCryptotransfer(value?: CryptoTransfer_pb.CryptoTransferTransactionBody): void;

  hasCryptoupdateaccount(): boolean;
  clearCryptoupdateaccount(): void;
  getCryptoupdateaccount(): CryptoUpdate_pb.CryptoUpdateTransactionBody | undefined;
  setCryptoupdateaccount(value?: CryptoUpdate_pb.CryptoUpdateTransactionBody): void;

  getDataCase(): TransactionBody.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBody): TransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBody;
  static deserializeBinaryFromReader(message: TransactionBody, reader: jspb.BinaryReader): TransactionBody;
}

export namespace TransactionBody {
  export type AsObject = {
    transactionid?: BasicTypes_pb.TransactionID.AsObject,
    nodeaccountid?: BasicTypes_pb.AccountID.AsObject,
    transactionfee: string,
    transactionvalidduration?: Duration_pb.Duration.AsObject,
    generaterecord: boolean,
    memo: string,
    cryptoaddlivehash?: CryptoAddLiveHash_pb.CryptoAddLiveHashTransactionBody.AsObject,
    cryptocreateaccount?: CryptoCreate_pb.CryptoCreateTransactionBody.AsObject,
    cryptodelete?: CryptoDelete_pb.CryptoDeleteTransactionBody.AsObject,
    cryptodeletelivehash?: CryptoDeleteLiveHash_pb.CryptoDeleteLiveHashTransactionBody.AsObject,
    cryptotransfer?: CryptoTransfer_pb.CryptoTransferTransactionBody.AsObject,
    cryptoupdateaccount?: CryptoUpdate_pb.CryptoUpdateTransactionBody.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CRYPTOADDLIVEHASH = 10,
    CRYPTOCREATEACCOUNT = 11,
    CRYPTODELETE = 12,
    CRYPTODELETELIVEHASH = 13,
    CRYPTOTRANSFER = 14,
    CRYPTOUPDATEACCOUNT = 15,
  }
}

