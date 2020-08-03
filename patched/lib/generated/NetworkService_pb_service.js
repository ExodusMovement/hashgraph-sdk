// package: proto
// file: NetworkService.proto

var NetworkService_pb = require("./NetworkService_pb");
var Query_pb = require("./Query_pb");
var Response_pb = require("./Response_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NetworkService = (function () {
  function NetworkService() {}
  NetworkService.serviceName = "proto.NetworkService";
  return NetworkService;
}());

NetworkService.getVersionInfo = {
  methodName: "getVersionInfo",
  service: NetworkService,
  requestStream: false,
  responseStream: false,
  requestType: Query_pb.Query,
  responseType: Response_pb.Response
};

exports.NetworkService = NetworkService;

function NetworkServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NetworkServiceClient.prototype.getVersionInfo = function getVersionInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NetworkService.getVersionInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.NetworkServiceClient = NetworkServiceClient;

