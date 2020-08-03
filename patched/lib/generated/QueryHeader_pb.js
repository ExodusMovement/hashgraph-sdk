// source: QueryHeader.proto
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
const global = jspb.globalScope; const { proto } = jspb.globalScope

var Transaction_pb = require('./Transaction_pb.js');
goog.object.extend(proto, Transaction_pb);
goog.exportSymbol('proto.proto.QueryHeader', null, global);
goog.exportSymbol('proto.proto.ResponseType', null, global);
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
proto.proto.QueryHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.QueryHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.QueryHeader.displayName = 'proto.proto.QueryHeader';
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
proto.proto.QueryHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.QueryHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.QueryHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.QueryHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    payment: (f = msg.getPayment()) && Transaction_pb.Transaction.toObject(includeInstance, f),
    responsetype: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.QueryHeader}
 */
proto.proto.QueryHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.QueryHeader;
  return proto.proto.QueryHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.QueryHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.QueryHeader}
 */
proto.proto.QueryHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Transaction_pb.Transaction;
      reader.readMessage(value,Transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
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
proto.proto.QueryHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.QueryHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.QueryHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.QueryHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Transaction payment = 1;
 * @return {?proto.proto.Transaction}
 */
proto.proto.QueryHeader.prototype.getPayment = function() {
  return /** @type{?proto.proto.Transaction} */ (
    jspb.Message.getWrapperField(this, Transaction_pb.Transaction, 1));
};


/**
 * @param {?proto.proto.Transaction|undefined} value
 * @return {!proto.proto.QueryHeader} returns this
*/
proto.proto.QueryHeader.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.QueryHeader} returns this
 */
proto.proto.QueryHeader.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.QueryHeader.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResponseType responseType = 2;
 * @return {!proto.proto.ResponseType}
 */
proto.proto.QueryHeader.prototype.getResponsetype = function() {
  return /** @type {!proto.proto.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ResponseType} value
 * @return {!proto.proto.QueryHeader} returns this
 */
proto.proto.QueryHeader.prototype.setResponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.proto.ResponseType = {
  ANSWER_ONLY: 0,
  ANSWER_STATE_PROOF: 1,
  COST_ANSWER: 2,
  COST_ANSWER_STATE_PROOF: 3
};

goog.object.extend(exports, proto.proto);
