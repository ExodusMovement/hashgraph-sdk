// package: proto
// file: NetworkService.proto

import * as NetworkService_pb from "./NetworkService_pb";
import * as Query_pb from "./Query_pb";
import * as Response_pb from "./Response_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NetworkServicegetVersionInfo = {
  readonly methodName: string;
  readonly service: typeof NetworkService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Query_pb.Query;
  readonly responseType: typeof Response_pb.Response;
};

export class NetworkService {
  static readonly serviceName: string;
  static readonly getVersionInfo: NetworkServicegetVersionInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class NetworkServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getVersionInfo(
    requestMessage: Query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Response_pb.Response|null) => void
  ): UnaryResponse;
  getVersionInfo(
    requestMessage: Query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: Response_pb.Response|null) => void
  ): UnaryResponse;
}

