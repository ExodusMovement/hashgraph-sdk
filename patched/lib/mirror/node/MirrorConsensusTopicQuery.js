"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MirrorConsensusTopicQuery = void 0;
const grpc = require("@grpc/grpc-js");
const MirrorConsensusService_pb_1 = require("../../generated/MirrorConsensusService_pb");
const MirrorConsensusService_pb_service_1 = require("../../generated/MirrorConsensusService_pb_service");
const TransactionId_1 = require("../../TransactionId");
const BaseMirrorConsensusTopicQuery_1 = require("../BaseMirrorConsensusTopicQuery");
const MirrorConsensusTopicResponse_1 = require("../MirrorConsensusTopicResponse");
const MirrorSubscriptionHandle_1 = require("../MirrorSubscriptionHandle");
class MirrorConsensusTopicQuery extends BaseMirrorConsensusTopicQuery_1.BaseMirrorConsensusTopicQuery {
    subscribe(client, listener, errorHandler) {
        this._validate();
        const handle = new MirrorSubscriptionHandle_1.MirrorSubscriptionHandle();
        this._makeServerStreamRequest(handle, 0, client, listener, errorHandler);
        return handle;
    }
    _makeServerStreamRequest(handle, attempt, client, listener, errorHandler) {
        const list = {};
        let shouldRetry = true;
        const response = client._client.makeServerStreamRequest(`/${MirrorConsensusService_pb_service_1.ConsensusService.serviceName}/${MirrorConsensusService_pb_service_1.ConsensusService.subscribeTopic.methodName}`, (req) => Buffer.from(req.serializeBinary()), MirrorConsensusService_pb_1.ConsensusTopicResponse.deserializeBinary, this._builder, new grpc.Metadata(), {})
            .on("data", (message) => {
            shouldRetry = false;
            if (!message.hasChunkinfo()) {
                listener(new MirrorConsensusTopicResponse_1.MirrorConsensusTopicResponse(message));
            }
            else {
                // eslint-disable-next-line max-len
                const txId = TransactionId_1.TransactionId._fromProto(message.getChunkinfo().getInitialtransactionid()).toString();
                if (list[txId] == null) {
                    list[txId] = [];
                }
                list[txId].push(message);
                if (list[txId].length === message.getChunkinfo().getTotal()) {
                    const m = list[txId];
                    list[txId] = null;
                    listener(new MirrorConsensusTopicResponse_1.MirrorConsensusTopicResponse(m));
                }
            }
        })
            .on("status", (status) => {
            if (!shouldRetry || attempt > 10) {
                if (errorHandler != null) {
                    errorHandler(new Error(`Received status code: ${status.code} and message: ${status.details}`));
                }
            }
            else if (attempt < 10 &&
                shouldRetry &&
                (status.code === grpc.status.NOT_FOUND ||
                    status.code === grpc.status.UNAVAILABLE)) {
                setTimeout(() => {
                    this._makeServerStreamRequest(handle, attempt + 1, client, listener, errorHandler);
                }, 250 * Math.pow(2, attempt));
            }
        })
            .on("end", (status) => {
            if (errorHandler != null && status != null) {
                errorHandler(new Error(`Received status code: ${status.code} and message: ${status.details}`));
            }
        })
            .on("error", () => {
            // Do nothing. `on("status")` will be called after this which has the retry loop
        });
        handle._setCall(response.cancel);
    }
}
exports.MirrorConsensusTopicQuery = MirrorConsensusTopicQuery;
