// source: NetworkGetVersionInfo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('../google-protobuf.patched/google-protobuf');
var goog = jspb;


var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.object.extend(proto, ResponseHeader_pb);
goog.exportSymbol('proto.proto.NetworkGetVersionInfoQuery', null, global);
goog.exportSymbol('proto.proto.NetworkGetVersionInfoResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.NetworkGetVersionInfoQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.NetworkGetVersionInfoQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.NetworkGetVersionInfoQuery.displayName = 'proto.proto.NetworkGetVersionInfoQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.NetworkGetVersionInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.NetworkGetVersionInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.NetworkGetVersionInfoResponse.displayName = 'proto.proto.NetworkGetVersionInfoResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NetworkGetVersionInfoQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NetworkGetVersionInfoQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NetworkGetVersionInfoQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetVersionInfoQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && QueryHeader_pb.QueryHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.NetworkGetVersionInfoQuery}
 */
proto.proto.NetworkGetVersionInfoQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NetworkGetVersionInfoQuery;
  return proto.proto.NetworkGetVersionInfoQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NetworkGetVersionInfoQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NetworkGetVersionInfoQuery}
 */
proto.proto.NetworkGetVersionInfoQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new QueryHeader_pb.QueryHeader;
      reader.readMessage(value,QueryHeader_pb.QueryHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.NetworkGetVersionInfoQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NetworkGetVersionInfoQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NetworkGetVersionInfoQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetVersionInfoQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      QueryHeader_pb.QueryHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.NetworkGetVersionInfoQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/**
 * @param {?proto.proto.QueryHeader|undefined} value
 * @return {!proto.proto.NetworkGetVersionInfoQuery} returns this
*/
proto.proto.NetworkGetVersionInfoQuery.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.NetworkGetVersionInfoQuery} returns this
 */
proto.proto.NetworkGetVersionInfoQuery.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NetworkGetVersionInfoQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NetworkGetVersionInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NetworkGetVersionInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetVersionInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    hapiprotoversion: (f = msg.getHapiprotoversion()) && BasicTypes_pb.SemanticVersion.toObject(includeInstance, f),
    hederaservicesversion: (f = msg.getHederaservicesversion()) && BasicTypes_pb.SemanticVersion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.NetworkGetVersionInfoResponse}
 */
proto.proto.NetworkGetVersionInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NetworkGetVersionInfoResponse;
  return proto.proto.NetworkGetVersionInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NetworkGetVersionInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NetworkGetVersionInfoResponse}
 */
proto.proto.NetworkGetVersionInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ResponseHeader_pb.ResponseHeader;
      reader.readMessage(value,ResponseHeader_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new BasicTypes_pb.SemanticVersion;
      reader.readMessage(value,BasicTypes_pb.SemanticVersion.deserializeBinaryFromReader);
      msg.setHapiprotoversion(value);
      break;
    case 3:
      var value = new BasicTypes_pb.SemanticVersion;
      reader.readMessage(value,BasicTypes_pb.SemanticVersion.deserializeBinaryFromReader);
      msg.setHederaservicesversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NetworkGetVersionInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NetworkGetVersionInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetVersionInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getHapiprotoversion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.SemanticVersion.serializeBinaryToWriter
    );
  }
  f = message.getHederaservicesversion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.SemanticVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.proto.ResponseHeader|undefined} value
 * @return {!proto.proto.NetworkGetVersionInfoResponse} returns this
*/
proto.proto.NetworkGetVersionInfoResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.NetworkGetVersionInfoResponse} returns this
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SemanticVersion hapiProtoVersion = 2;
 * @return {?proto.proto.SemanticVersion}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.getHapiprotoversion = function() {
  return /** @type{?proto.proto.SemanticVersion} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.SemanticVersion, 2));
};


/**
 * @param {?proto.proto.SemanticVersion|undefined} value
 * @return {!proto.proto.NetworkGetVersionInfoResponse} returns this
*/
proto.proto.NetworkGetVersionInfoResponse.prototype.setHapiprotoversion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.NetworkGetVersionInfoResponse} returns this
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.clearHapiprotoversion = function() {
  return this.setHapiprotoversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.hasHapiprotoversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SemanticVersion hederaServicesVersion = 3;
 * @return {?proto.proto.SemanticVersion}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.getHederaservicesversion = function() {
  return /** @type{?proto.proto.SemanticVersion} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.SemanticVersion, 3));
};


/**
 * @param {?proto.proto.SemanticVersion|undefined} value
 * @return {!proto.proto.NetworkGetVersionInfoResponse} returns this
*/
proto.proto.NetworkGetVersionInfoResponse.prototype.setHederaservicesversion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.NetworkGetVersionInfoResponse} returns this
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.clearHederaservicesversion = function() {
  return this.setHederaservicesversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.NetworkGetVersionInfoResponse.prototype.hasHederaservicesversion = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);
