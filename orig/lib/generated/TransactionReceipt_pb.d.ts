// package: proto
// file: TransactionReceipt.proto

import * as jspb from "google-protobuf";
import * as BasicTypes_pb from "./BasicTypes_pb";
import * as ResponseCode_pb from "./ResponseCode_pb";
import * as ExchangeRate_pb from "./ExchangeRate_pb";

export class TransactionReceipt extends jspb.Message {
  getStatus(): ResponseCode_pb.ResponseCodeEnumMap[keyof ResponseCode_pb.ResponseCodeEnumMap];
  setStatus(value: ResponseCode_pb.ResponseCodeEnumMap[keyof ResponseCode_pb.ResponseCodeEnumMap]): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;

  hasExchangerate(): boolean;
  clearExchangerate(): void;
  getExchangerate(): ExchangeRate_pb.ExchangeRateSet | undefined;
  setExchangerate(value?: ExchangeRate_pb.ExchangeRateSet): void;

  hasTopicid(): boolean;
  clearTopicid(): void;
  getTopicid(): BasicTypes_pb.TopicID | undefined;
  setTopicid(value?: BasicTypes_pb.TopicID): void;

  getTopicsequencenumber(): number;
  setTopicsequencenumber(value: number): void;

  getTopicrunninghash(): Uint8Array | string;
  getTopicrunninghash_asU8(): Uint8Array;
  getTopicrunninghash_asB64(): string;
  setTopicrunninghash(value: Uint8Array | string): void;

  getTopicrunninghashversion(): string;
  setTopicrunninghashversion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReceipt): TransactionReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReceipt;
  static deserializeBinaryFromReader(message: TransactionReceipt, reader: jspb.BinaryReader): TransactionReceipt;
}

export namespace TransactionReceipt {
  export type AsObject = {
    status: ResponseCode_pb.ResponseCodeEnumMap[keyof ResponseCode_pb.ResponseCodeEnumMap],
    accountid?: BasicTypes_pb.AccountID.AsObject,
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
    exchangerate?: ExchangeRate_pb.ExchangeRateSet.AsObject,
    topicid?: BasicTypes_pb.TopicID.AsObject,
    topicsequencenumber: number,
    topicrunninghash: Uint8Array | string,
    topicrunninghashversion: string,
  }
}

