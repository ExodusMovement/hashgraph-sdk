import * as pb from "../generated/BasicTypes_pb";
export declare abstract class PublicKey {
    abstract _toProtoKey(): pb.Key;
}
