// source: TransactionGetFastRecord.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;


var TransactionRecord_pb = require('./TransactionRecord_pb.js');
goog.object.extend(proto, TransactionRecord_pb);
var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.object.extend(proto, ResponseHeader_pb);
goog.exportSymbol('proto.proto.TransactionGetFastRecordQuery', null, global);
goog.exportSymbol('proto.proto.TransactionGetFastRecordResponse', null, global);
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
proto.proto.TransactionGetFastRecordQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TransactionGetFastRecordQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TransactionGetFastRecordQuery.displayName = 'proto.proto.TransactionGetFastRecordQuery';
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
proto.proto.TransactionGetFastRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TransactionGetFastRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TransactionGetFastRecordResponse.displayName = 'proto.proto.TransactionGetFastRecordResponse';
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
proto.proto.TransactionGetFastRecordQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionGetFastRecordQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionGetFastRecordQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetFastRecordQuery.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TransactionGetFastRecordQuery}
 */
proto.proto.TransactionGetFastRecordQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionGetFastRecordQuery;
  return proto.proto.TransactionGetFastRecordQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionGetFastRecordQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionGetFastRecordQuery}
 */
proto.proto.TransactionGetFastRecordQuery.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TransactionGetFastRecordQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionGetFastRecordQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionGetFastRecordQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetFastRecordQuery.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TransactionGetFastRecordQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/**
 * @param {?proto.proto.QueryHeader|undefined} value
 * @return {!proto.proto.TransactionGetFastRecordQuery} returns this
*/
proto.proto.TransactionGetFastRecordQuery.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetFastRecordQuery} returns this
 */
proto.proto.TransactionGetFastRecordQuery.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetFastRecordQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransactionID transactionID = 2;
 * @return {?proto.proto.TransactionID}
 */
proto.proto.TransactionGetFastRecordQuery.prototype.getTransactionid = function() {
  return /** @type{?proto.proto.TransactionID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TransactionID, 2));
};


/**
 * @param {?proto.proto.TransactionID|undefined} value
 * @return {!proto.proto.TransactionGetFastRecordQuery} returns this
*/
proto.proto.TransactionGetFastRecordQuery.prototype.setTransactionid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetFastRecordQuery} returns this
 */
proto.proto.TransactionGetFastRecordQuery.prototype.clearTransactionid = function() {
  return this.setTransactionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetFastRecordQuery.prototype.hasTransactionid = function() {
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
proto.proto.TransactionGetFastRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionGetFastRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionGetFastRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetFastRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    transactionrecord: (f = msg.getTransactionrecord()) && TransactionRecord_pb.TransactionRecord.toObject(includeInstance, f)
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
 * @return {!proto.proto.TransactionGetFastRecordResponse}
 */
proto.proto.TransactionGetFastRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionGetFastRecordResponse;
  return proto.proto.TransactionGetFastRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionGetFastRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionGetFastRecordResponse}
 */
proto.proto.TransactionGetFastRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new TransactionRecord_pb.TransactionRecord;
      reader.readMessage(value,TransactionRecord_pb.TransactionRecord.deserializeBinaryFromReader);
      msg.setTransactionrecord(value);
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
proto.proto.TransactionGetFastRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionGetFastRecordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionGetFastRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionGetFastRecordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getTransactionrecord();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      TransactionRecord_pb.TransactionRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.TransactionGetFastRecordResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.proto.ResponseHeader|undefined} value
 * @return {!proto.proto.TransactionGetFastRecordResponse} returns this
*/
proto.proto.TransactionGetFastRecordResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetFastRecordResponse} returns this
 */
proto.proto.TransactionGetFastRecordResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetFastRecordResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TransactionRecord transactionRecord = 2;
 * @return {?proto.proto.TransactionRecord}
 */
proto.proto.TransactionGetFastRecordResponse.prototype.getTransactionrecord = function() {
  return /** @type{?proto.proto.TransactionRecord} */ (
    jspb.Message.getWrapperField(this, TransactionRecord_pb.TransactionRecord, 2));
};


/**
 * @param {?proto.proto.TransactionRecord|undefined} value
 * @return {!proto.proto.TransactionGetFastRecordResponse} returns this
*/
proto.proto.TransactionGetFastRecordResponse.prototype.setTransactionrecord = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionGetFastRecordResponse} returns this
 */
proto.proto.TransactionGetFastRecordResponse.prototype.clearTransactionrecord = function() {
  return this.setTransactionrecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionGetFastRecordResponse.prototype.hasTransactionrecord = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
