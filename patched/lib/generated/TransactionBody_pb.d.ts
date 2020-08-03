// package: proto
// file: TransactionBody.proto

import * as jspb from "google-protobuf";
import * as SystemDelete_pb from "./SystemDelete_pb";
import * as SystemUndelete_pb from "./SystemUndelete_pb";
import * as Freeze_pb from "./Freeze_pb";
import * as ContractCall_pb from "./ContractCall_pb";
import * as ContractCreate_pb from "./ContractCreate_pb";
import * as ContractUpdate_pb from "./ContractUpdate_pb";
import * as CryptoAddLiveHash_pb from "./CryptoAddLiveHash_pb";
import * as CryptoCreate_pb from "./CryptoCreate_pb";
import * as CryptoDelete_pb from "./CryptoDelete_pb";
import * as CryptoDeleteLiveHash_pb from "./CryptoDeleteLiveHash_pb";
import * as CryptoTransfer_pb from "./CryptoTransfer_pb";
import * as CryptoUpdate_pb from "./CryptoUpdate_pb";
import * as FileAppend_pb from "./FileAppend_pb";
import * as FileCreate_pb from "./FileCreate_pb";
import * as FileDelete_pb from "./FileDelete_pb";
import * as FileUpdate_pb from "./FileUpdate_pb";
import * as Duration_pb from "./Duration_pb";
import * as BasicTypes_pb from "./BasicTypes_pb";
import * as ContractDelete_pb from "./ContractDelete_pb";
import * as ConsensusCreateTopic_pb from "./ConsensusCreateTopic_pb";
import * as ConsensusUpdateTopic_pb from "./ConsensusUpdateTopic_pb";
import * as ConsensusDeleteTopic_pb from "./ConsensusDeleteTopic_pb";
import * as ConsensusSubmitMessage_pb from "./ConsensusSubmitMessage_pb";

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

  hasContractcall(): boolean;
  clearContractcall(): void;
  getContractcall(): ContractCall_pb.ContractCallTransactionBody | undefined;
  setContractcall(value?: ContractCall_pb.ContractCallTransactionBody): void;

  hasContractcreateinstance(): boolean;
  clearContractcreateinstance(): void;
  getContractcreateinstance(): ContractCreate_pb.ContractCreateTransactionBody | undefined;
  setContractcreateinstance(value?: ContractCreate_pb.ContractCreateTransactionBody): void;

  hasContractupdateinstance(): boolean;
  clearContractupdateinstance(): void;
  getContractupdateinstance(): ContractUpdate_pb.ContractUpdateTransactionBody | undefined;
  setContractupdateinstance(value?: ContractUpdate_pb.ContractUpdateTransactionBody): void;

  hasContractdeleteinstance(): boolean;
  clearContractdeleteinstance(): void;
  getContractdeleteinstance(): ContractDelete_pb.ContractDeleteTransactionBody | undefined;
  setContractdeleteinstance(value?: ContractDelete_pb.ContractDeleteTransactionBody): void;

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

  hasFileappend(): boolean;
  clearFileappend(): void;
  getFileappend(): FileAppend_pb.FileAppendTransactionBody | undefined;
  setFileappend(value?: FileAppend_pb.FileAppendTransactionBody): void;

  hasFilecreate(): boolean;
  clearFilecreate(): void;
  getFilecreate(): FileCreate_pb.FileCreateTransactionBody | undefined;
  setFilecreate(value?: FileCreate_pb.FileCreateTransactionBody): void;

  hasFiledelete(): boolean;
  clearFiledelete(): void;
  getFiledelete(): FileDelete_pb.FileDeleteTransactionBody | undefined;
  setFiledelete(value?: FileDelete_pb.FileDeleteTransactionBody): void;

  hasFileupdate(): boolean;
  clearFileupdate(): void;
  getFileupdate(): FileUpdate_pb.FileUpdateTransactionBody | undefined;
  setFileupdate(value?: FileUpdate_pb.FileUpdateTransactionBody): void;

  hasSystemdelete(): boolean;
  clearSystemdelete(): void;
  getSystemdelete(): SystemDelete_pb.SystemDeleteTransactionBody | undefined;
  setSystemdelete(value?: SystemDelete_pb.SystemDeleteTransactionBody): void;

  hasSystemundelete(): boolean;
  clearSystemundelete(): void;
  getSystemundelete(): SystemUndelete_pb.SystemUndeleteTransactionBody | undefined;
  setSystemundelete(value?: SystemUndelete_pb.SystemUndeleteTransactionBody): void;

  hasFreeze(): boolean;
  clearFreeze(): void;
  getFreeze(): Freeze_pb.FreezeTransactionBody | undefined;
  setFreeze(value?: Freeze_pb.FreezeTransactionBody): void;

  hasConsensuscreatetopic(): boolean;
  clearConsensuscreatetopic(): void;
  getConsensuscreatetopic(): ConsensusCreateTopic_pb.ConsensusCreateTopicTransactionBody | undefined;
  setConsensuscreatetopic(value?: ConsensusCreateTopic_pb.ConsensusCreateTopicTransactionBody): void;

  hasConsensusupdatetopic(): boolean;
  clearConsensusupdatetopic(): void;
  getConsensusupdatetopic(): ConsensusUpdateTopic_pb.ConsensusUpdateTopicTransactionBody | undefined;
  setConsensusupdatetopic(value?: ConsensusUpdateTopic_pb.ConsensusUpdateTopicTransactionBody): void;

  hasConsensusdeletetopic(): boolean;
  clearConsensusdeletetopic(): void;
  getConsensusdeletetopic(): ConsensusDeleteTopic_pb.ConsensusDeleteTopicTransactionBody | undefined;
  setConsensusdeletetopic(value?: ConsensusDeleteTopic_pb.ConsensusDeleteTopicTransactionBody): void;

  hasConsensussubmitmessage(): boolean;
  clearConsensussubmitmessage(): void;
  getConsensussubmitmessage(): ConsensusSubmitMessage_pb.ConsensusSubmitMessageTransactionBody | undefined;
  setConsensussubmitmessage(value?: ConsensusSubmitMessage_pb.ConsensusSubmitMessageTransactionBody): void;

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
    contractcall?: ContractCall_pb.ContractCallTransactionBody.AsObject,
    contractcreateinstance?: ContractCreate_pb.ContractCreateTransactionBody.AsObject,
    contractupdateinstance?: ContractUpdate_pb.ContractUpdateTransactionBody.AsObject,
    contractdeleteinstance?: ContractDelete_pb.ContractDeleteTransactionBody.AsObject,
    cryptoaddlivehash?: CryptoAddLiveHash_pb.CryptoAddLiveHashTransactionBody.AsObject,
    cryptocreateaccount?: CryptoCreate_pb.CryptoCreateTransactionBody.AsObject,
    cryptodelete?: CryptoDelete_pb.CryptoDeleteTransactionBody.AsObject,
    cryptodeletelivehash?: CryptoDeleteLiveHash_pb.CryptoDeleteLiveHashTransactionBody.AsObject,
    cryptotransfer?: CryptoTransfer_pb.CryptoTransferTransactionBody.AsObject,
    cryptoupdateaccount?: CryptoUpdate_pb.CryptoUpdateTransactionBody.AsObject,
    fileappend?: FileAppend_pb.FileAppendTransactionBody.AsObject,
    filecreate?: FileCreate_pb.FileCreateTransactionBody.AsObject,
    filedelete?: FileDelete_pb.FileDeleteTransactionBody.AsObject,
    fileupdate?: FileUpdate_pb.FileUpdateTransactionBody.AsObject,
    systemdelete?: SystemDelete_pb.SystemDeleteTransactionBody.AsObject,
    systemundelete?: SystemUndelete_pb.SystemUndeleteTransactionBody.AsObject,
    freeze?: Freeze_pb.FreezeTransactionBody.AsObject,
    consensuscreatetopic?: ConsensusCreateTopic_pb.ConsensusCreateTopicTransactionBody.AsObject,
    consensusupdatetopic?: ConsensusUpdateTopic_pb.ConsensusUpdateTopicTransactionBody.AsObject,
    consensusdeletetopic?: ConsensusDeleteTopic_pb.ConsensusDeleteTopicTransactionBody.AsObject,
    consensussubmitmessage?: ConsensusSubmitMessage_pb.ConsensusSubmitMessageTransactionBody.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CONTRACTCALL = 7,
    CONTRACTCREATEINSTANCE = 8,
    CONTRACTUPDATEINSTANCE = 9,
    CONTRACTDELETEINSTANCE = 22,
    CRYPTOADDLIVEHASH = 10,
    CRYPTOCREATEACCOUNT = 11,
    CRYPTODELETE = 12,
    CRYPTODELETELIVEHASH = 13,
    CRYPTOTRANSFER = 14,
    CRYPTOUPDATEACCOUNT = 15,
    FILEAPPEND = 16,
    FILECREATE = 17,
    FILEDELETE = 18,
    FILEUPDATE = 19,
    SYSTEMDELETE = 20,
    SYSTEMUNDELETE = 21,
    FREEZE = 23,
    CONSENSUSCREATETOPIC = 24,
    CONSENSUSUPDATETOPIC = 25,
    CONSENSUSDELETETOPIC = 26,
    CONSENSUSSUBMITMESSAGE = 27,
  }
}

