// source: TransactionReceipt.proto
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
var ResponseCode_pb = require('./ResponseCode_pb.js');
goog.object.extend(proto, ResponseCode_pb);
var ExchangeRate_pb = require('./ExchangeRate_pb.js');
goog.object.extend(proto, ExchangeRate_pb);
goog.exportSymbol('proto.proto.TransactionReceipt', null, global);
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
proto.proto.TransactionReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TransactionReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TransactionReceipt.displayName = 'proto.proto.TransactionReceipt';
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
proto.proto.TransactionReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TransactionReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TransactionReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionReceipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accountid: (f = msg.getAccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f),
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    exchangerate: (f = msg.getExchangerate()) && ExchangeRate_pb.ExchangeRateSet.toObject(includeInstance, f),
    topicid: (f = msg.getTopicid()) && BasicTypes_pb.TopicID.toObject(includeInstance, f),
    topicsequencenumber: jspb.Message.getFieldWithDefault(msg, 7, 0),
    topicrunninghash: msg.getTopicrunninghash_asB64(),
    topicrunninghashversion: jspb.Message.getFieldWithDefault(msg, 9, "0")
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
 * @return {!proto.proto.TransactionReceipt}
 */
proto.proto.TransactionReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TransactionReceipt;
  return proto.proto.TransactionReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TransactionReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TransactionReceipt}
 */
proto.proto.TransactionReceipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ResponseCodeEnum} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountid(value);
      break;
    case 3:
      var value = new BasicTypes_pb.FileID;
      reader.readMessage(value,BasicTypes_pb.FileID.deserializeBinaryFromReader);
      msg.setFileid(value);
      break;
    case 4:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
      break;
    case 5:
      var value = new ExchangeRate_pb.ExchangeRateSet;
      reader.readMessage(value,ExchangeRate_pb.ExchangeRateSet.deserializeBinaryFromReader);
      msg.setExchangerate(value);
      break;
    case 6:
      var value = new BasicTypes_pb.TopicID;
      reader.readMessage(value,BasicTypes_pb.TopicID.deserializeBinaryFromReader);
      msg.setTopicid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTopicsequencenumber(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTopicrunninghash(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTopicrunninghashversion(value);
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
proto.proto.TransactionReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TransactionReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TransactionReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TransactionReceipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAccountid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getExchangerate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ExchangeRate_pb.ExchangeRateSet.serializeBinaryToWriter
    );
  }
  f = message.getTopicid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      BasicTypes_pb.TopicID.serializeBinaryToWriter
    );
  }
  f = message.getTopicsequencenumber();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTopicrunninghash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getTopicrunninghashversion();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
};


/**
 * optional ResponseCodeEnum status = 1;
 * @return {!proto.proto.ResponseCodeEnum}
 */
proto.proto.TransactionReceipt.prototype.getStatus = function() {
  return /** @type {!proto.proto.ResponseCodeEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ResponseCodeEnum} value
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AccountID accountID = 2;
 * @return {?proto.proto.AccountID}
 */
proto.proto.TransactionReceipt.prototype.getAccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 2));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.TransactionReceipt} returns this
*/
proto.proto.TransactionReceipt.prototype.setAccountid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.clearAccountid = function() {
  return this.setAccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionReceipt.prototype.hasAccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FileID fileID = 3;
 * @return {?proto.proto.FileID}
 */
proto.proto.TransactionReceipt.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 3));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.TransactionReceipt} returns this
*/
proto.proto.TransactionReceipt.prototype.setFileid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionReceipt.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ContractID contractID = 4;
 * @return {?proto.proto.ContractID}
 */
proto.proto.TransactionReceipt.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 4));
};


/**
 * @param {?proto.proto.ContractID|undefined} value
 * @return {!proto.proto.TransactionReceipt} returns this
*/
proto.proto.TransactionReceipt.prototype.setContractid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.clearContractid = function() {
  return this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionReceipt.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ExchangeRateSet exchangeRate = 5;
 * @return {?proto.proto.ExchangeRateSet}
 */
proto.proto.TransactionReceipt.prototype.getExchangerate = function() {
  return /** @type{?proto.proto.ExchangeRateSet} */ (
    jspb.Message.getWrapperField(this, ExchangeRate_pb.ExchangeRateSet, 5));
};


/**
 * @param {?proto.proto.ExchangeRateSet|undefined} value
 * @return {!proto.proto.TransactionReceipt} returns this
*/
proto.proto.TransactionReceipt.prototype.setExchangerate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.clearExchangerate = function() {
  return this.setExchangerate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionReceipt.prototype.hasExchangerate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TopicID topicID = 6;
 * @return {?proto.proto.TopicID}
 */
proto.proto.TransactionReceipt.prototype.getTopicid = function() {
  return /** @type{?proto.proto.TopicID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TopicID, 6));
};


/**
 * @param {?proto.proto.TopicID|undefined} value
 * @return {!proto.proto.TransactionReceipt} returns this
*/
proto.proto.TransactionReceipt.prototype.setTopicid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.clearTopicid = function() {
  return this.setTopicid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TransactionReceipt.prototype.hasTopicid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 topicSequenceNumber = 7;
 * @return {number}
 */
proto.proto.TransactionReceipt.prototype.getTopicsequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.setTopicsequencenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bytes topicRunningHash = 8;
 * @return {!(string|Uint8Array)}
 */
proto.proto.TransactionReceipt.prototype.getTopicrunninghash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes topicRunningHash = 8;
 * This is a type-conversion wrapper around `getTopicrunninghash()`
 * @return {string}
 */
proto.proto.TransactionReceipt.prototype.getTopicrunninghash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTopicrunninghash()));
};


/**
 * optional bytes topicRunningHash = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTopicrunninghash()`
 * @return {!Uint8Array}
 */
proto.proto.TransactionReceipt.prototype.getTopicrunninghash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTopicrunninghash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.setTopicrunninghash = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional uint64 topicRunningHashVersion = 9;
 * @return {string}
 */
proto.proto.TransactionReceipt.prototype.getTopicrunninghashversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.proto.TransactionReceipt} returns this
 */
proto.proto.TransactionReceipt.prototype.setTopicrunninghashversion = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};


goog.object.extend(exports, proto.proto);
