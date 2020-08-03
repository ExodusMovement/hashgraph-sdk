import { BaseClient, Node } from "./BaseClient";
import { QueryHeader } from "./generated/QueryHeader_pb";
import { Query } from "./generated/Query_pb";
import { Response } from "./generated/Response_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { Hbar, Tinybar } from "./Hbar";
import { ResponseHeader } from "./generated/ResponseHeader_pb";
import { Status } from "./Status";
export declare abstract class QueryBuilder<T> {
    protected readonly _inner: Query;
    private _maxPaymentAmount;
    private _paymentAmount;
    private _transactionId;
    protected constructor();
    setMaxQueryPayment(amount: Tinybar | Hbar): this;
    setQueryPayment(amount: Tinybar | Hbar): this;
    /**
     * Set a manually created and signed
     * `CryptoTransferTransaction` as the query payment.
     */
    setQueryPaymentTransaction(transaction: import("./Transaction").Transaction): this;
    getCost(client: BaseClient): Promise<Hbar>;
    execute(client: BaseClient): Promise<T>;
    _toProto(): Query;
    protected abstract _getMethod(): grpc.UnaryMethodDefinition<Query, Response>;
    protected abstract _getHeader(): QueryHeader;
    protected abstract _mapResponseHeader(response: Response): ResponseHeader;
    protected abstract _mapResponse(response: Response): T;
    protected abstract _doLocalValidate(errors: string[]): void;
    protected _shouldRetry(status: Status, response: Response): boolean;
    protected _getDefaultExecuteTimeout(): number;
    protected _isPaymentRequired(): boolean;
    private _localValidate;
    _generatePaymentTransaction(client: BaseClient, node: Node, amount: Tinybar | Hbar): Promise<this>;
}
