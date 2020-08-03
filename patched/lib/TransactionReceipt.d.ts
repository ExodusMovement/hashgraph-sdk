import { TransactionReceipt as ProtoTransactionReceipt } from "./generated/TransactionReceipt_pb";
import { AccountId } from "./account/AccountId";
import { ConsensusTopicId } from "./consensus/ConsensusTopicId";
import { ContractId } from "./contract/ContractId";
import { FileId } from "./file/FileId";
import { Status } from "./Status";
/**
 * The consensus result for a transaction, which might not be currently known,
 * or may  succeed or fail.
 */
export declare class TransactionReceipt {
    /**
     * Whether the transaction succeeded or failed (or is unknown).
     */
    readonly status: Status;
    private readonly ["_accountId"];
    private readonly ["_fileId"];
    private readonly ["_contractId"];
    private readonly ["_topicId"];
    private readonly ["_exchangeRateSet"];
    private readonly ["_topicSequenceNumber"];
    private readonly ["_topicRunningHash"];
    private constructor();
    /** @deprecated */
    get accountId(): AccountId;
    /**
     * The account ID, if a new account was created.
     */
    getAccountId(): AccountId;
    /** @deprecated */
    get fileId(): FileId;
    /**
     * The file ID, if a new file was created.
     */
    getFileId(): FileId;
    /** @deprecated */
    get contractId(): ContractId;
    /**
     * The contract ID, if a new smart contract instance was created.
     */
    getContractId(): ContractId;
    /**
     * TopicID of a newly created consensus service topic.
     */
    getConsensusTopicId(): ConsensusTopicId;
    /** @deprecated `TransactionReceipt.getTopicId()` is deprecrated. Use `TransactionReceipt.getConsensusTopicId()` instead. */
    getTopicId(): ConsensusTopicId;
    /**
     * Updated running hash for a consensus service topic. The result of a ConsensusSubmitMessage.
     */
    getConsensusTopicRunningHash(): Uint8Array;
    /**
     * Updated sequence number for a consensus service topic. The result of a ConsensusSubmitMessage.
     */
    getConsensusTopicSequenceNumber(): number;
    toJSON(): object;
    toString(): string;
    static _fromProto(receipt: ProtoTransactionReceipt): TransactionReceipt;
}
