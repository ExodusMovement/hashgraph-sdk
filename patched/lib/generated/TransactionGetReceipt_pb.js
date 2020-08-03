// source: TransactionGetReceipt.proto
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


var TransactionReceipt_pb = require('./TransactionReceipt_pb.js');
goog.object.extend(proto, TransactionReceipt_pb);
var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.object.extend(proto, ResponseHeader_pb);
goog.exportSymbol('proto.proto.TransactionGetReceiptQuery', null, global);
goog.exportSymbol('proto.proto.TransactionGetReceiptResponse', null, global);
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
proto.proto.TransactionGetReceiptQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TransactionGetReceiptQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TransactionGetReceiptQuery.displayName = 'proto.proto.TransactionGetReceiptQuery';
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
proto.proto.TransactionGetReceiptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TransactionGetReceiptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TransactionGetReceiptResponse.displayName = 'proto.proto.TransactionGetReceiptResponse';
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
proto.proto.TransactionGetReceiptQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionGetReceiptQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionGetReceiptQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && QueryHeader_pb.QueryHeader.toObject(includeInstance, f),
    transactionid: (f = msg.getTransactionid()) && BasicTypes_pb.TransactionID.toObject(includeInstance, f)
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
 * @return {!proto.proto.TransactionGetReceiptQuery}
 */
proto.proto.TransactionGetReceiptQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionGetReceiptQuery;
  return proto.proto.TransactionGetReceiptQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionGetReceiptQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionGetReceiptQuery}
 */
proto.proto.TransactionGetReceiptQuery.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = new BasicTypes_pb.TransactionID;
      reader.readMessage(value,BasicTypes_pb.TransactionID.deserializeBinaryFromReader);
      msg.setTransactionid(value);
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
proto.proto.TransactionGetReceiptQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionGetReceiptQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionGetReceiptQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      QueryHeader_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getTransactionid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.TransactionID.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.TransactionGetReceiptQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/**
 * @param {?proto.proto.QueryHeader|undefined} value
 * @return {!proto.proto.TransactionGetReceiptQuery} returns this
*/
proto.proto.TransactionGetReceiptQuery.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetReceiptQuery} returns this
 */
proto.proto.TransactionGetReceiptQuery.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetReceiptQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransactionID transactionID = 2;
 * @return {?proto.proto.TransactionID}
 */
proto.proto.TransactionGetReceiptQuery.prototype.getTransactionid = function() {
  return /** @type{?proto.proto.TransactionID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TransactionID, 2));
};


/**
 * @param {?proto.proto.TransactionID|undefined} value
 * @return {!proto.proto.TransactionGetReceiptQuery} returns this
*/
proto.proto.TransactionGetReceiptQuery.prototype.setTransactionid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetReceiptQuery} returns this
 */
proto.proto.TransactionGetReceiptQuery.prototype.clearTransactionid = function() {
  return this.setTransactionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetReceiptQuery.prototype.hasTransactionid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.proto.TransactionGetReceiptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionGetReceiptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionGetReceiptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    receipt: (f = msg.getReceipt()) && TransactionReceipt_pb.TransactionReceipt.toObject(includeInstance, f)
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
 * @return {!proto.proto.TransactionGetReceiptResponse}
 */
proto.proto.TransactionGetReceiptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionGetReceiptResponse;
  return proto.proto.TransactionGetReceiptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionGetReceiptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionGetReceiptResponse}
 */
proto.proto.TransactionGetReceiptResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new TransactionReceipt_pb.TransactionReceipt;
      reader.readMessage(value,TransactionReceipt_pb.TransactionReceipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
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
proto.proto.TransactionGetReceiptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionGetReceiptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionGetReceiptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetReceiptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      TransactionReceipt_pb.TransactionReceipt.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.TransactionGetReceiptResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.proto.ResponseHeader|undefined} value
 * @return {!proto.proto.TransactionGetReceiptResponse} returns this
*/
proto.proto.TransactionGetReceiptResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetReceiptResponse} returns this
 */
proto.proto.TransactionGetReceiptResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetReceiptResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransactionReceipt receipt = 2;
 * @return {?proto.proto.TransactionReceipt}
 */
proto.proto.TransactionGetReceiptResponse.prototype.getReceipt = function() {
  return /** @type{?proto.proto.TransactionReceipt} */ (
    jspb.Message.getWrapperField(this, TransactionReceipt_pb.TransactionReceipt, 2));
};


/**
 * @param {?proto.proto.TransactionReceipt|undefined} value
 * @return {!proto.proto.TransactionGetReceiptResponse} returns this
*/
proto.proto.TransactionGetReceiptResponse.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetReceiptResponse} returns this
 */
proto.proto.TransactionGetReceiptResponse.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetReceiptResponse.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
