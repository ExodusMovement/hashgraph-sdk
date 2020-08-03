// source: ConsensusTopicInfo.proto
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

var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var Duration_pb = require('./Duration_pb.js');
goog.object.extend(proto, Duration_pb);
var Timestamp_pb = require('./Timestamp_pb.js');
goog.object.extend(proto, Timestamp_pb);
goog.exportSymbol('proto.proto.ConsensusTopicInfo', null, global);
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
proto.proto.ConsensusTopicInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConsensusTopicInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ConsensusTopicInfo.displayName = 'proto.proto.ConsensusTopicInfo';
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
proto.proto.ConsensusTopicInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConsensusTopicInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConsensusTopicInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusTopicInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runninghash: msg.getRunninghash_asB64(),
    sequencenumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expirationtime: (f = msg.getExpirationtime()) && Timestamp_pb.Timestamp.toObject(includeInstance, f),
    adminkey: (f = msg.getAdminkey()) && BasicTypes_pb.Key.toObject(includeInstance, f),
    submitkey: (f = msg.getSubmitkey()) && BasicTypes_pb.Key.toObject(includeInstance, f),
    autorenewperiod: (f = msg.getAutorenewperiod()) && Duration_pb.Duration.toObject(includeInstance, f),
    autorenewaccount: (f = msg.getAutorenewaccount()) && BasicTypes_pb.AccountID.toObject(includeInstance, f)
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
 * @return {!proto.proto.ConsensusTopicInfo}
 */
proto.proto.ConsensusTopicInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConsensusTopicInfo;
  return proto.proto.ConsensusTopicInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConsensusTopicInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConsensusTopicInfo}
 */
proto.proto.ConsensusTopicInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRunninghash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequencenumber(value);
      break;
    case 4:
      var value = new Timestamp_pb.Timestamp;
      reader.readMessage(value,Timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationtime(value);
      break;
    case 5:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setAdminkey(value);
      break;
    case 6:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setSubmitkey(value);
      break;
    case 7:
      var value = new Duration_pb.Duration;
      reader.readMessage(value,Duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAutorenewperiod(value);
      break;
    case 8:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAutorenewaccount(value);
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
proto.proto.ConsensusTopicInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConsensusTopicInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConsensusTopicInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusTopicInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRunninghash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSequencenumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getExpirationtime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      Timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAdminkey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
  f = message.getSubmitkey();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
  f = message.getAutorenewperiod();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      Duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAutorenewaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
};


/**
 * optional string memo = 1;
 * @return {string}
 */
proto.proto.ConsensusTopicInfo.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes runningHash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ConsensusTopicInfo.prototype.getRunninghash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes runningHash = 2;
 * This is a type-conversion wrapper around `getRunninghash()`
 * @return {string}
 */
proto.proto.ConsensusTopicInfo.prototype.getRunninghash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRunninghash()));
};


/**
 * optional bytes runningHash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRunninghash()`
 * @return {!Uint8Array}
 */
proto.proto.ConsensusTopicInfo.prototype.getRunninghash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRunninghash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.setRunninghash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 sequenceNumber = 3;
 * @return {number}
 */
proto.proto.ConsensusTopicInfo.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.setSequencenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Timestamp expirationTime = 4;
 * @return {?proto.proto.Timestamp}
 */
proto.proto.ConsensusTopicInfo.prototype.getExpirationtime = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, Timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.proto.Timestamp|undefined} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
*/
proto.proto.ConsensusTopicInfo.prototype.setExpirationtime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.clearExpirationtime = function() {
  return this.setExpirationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusTopicInfo.prototype.hasExpirationtime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Key adminKey = 5;
 * @return {?proto.proto.Key}
 */
proto.proto.ConsensusTopicInfo.prototype.getAdminkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 5));
};


/**
 * @param {?proto.proto.Key|undefined} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
*/
proto.proto.ConsensusTopicInfo.prototype.setAdminkey = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.clearAdminkey = function() {
  return this.setAdminkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusTopicInfo.prototype.hasAdminkey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Key submitKey = 6;
 * @return {?proto.proto.Key}
 */
proto.proto.ConsensusTopicInfo.prototype.getSubmitkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 6));
};


/**
 * @param {?proto.proto.Key|undefined} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
*/
proto.proto.ConsensusTopicInfo.prototype.setSubmitkey = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.clearSubmitkey = function() {
  return this.setSubmitkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusTopicInfo.prototype.hasSubmitkey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Duration autoRenewPeriod = 7;
 * @return {?proto.proto.Duration}
 */
proto.proto.ConsensusTopicInfo.prototype.getAutorenewperiod = function() {
  return /** @type{?proto.proto.Duration} */ (
    jspb.Message.getWrapperField(this, Duration_pb.Duration, 7));
};


/**
 * @param {?proto.proto.Duration|undefined} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
*/
proto.proto.ConsensusTopicInfo.prototype.setAutorenewperiod = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.clearAutorenewperiod = function() {
  return this.setAutorenewperiod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusTopicInfo.prototype.hasAutorenewperiod = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AccountID autoRenewAccount = 8;
 * @return {?proto.proto.AccountID}
 */
proto.proto.ConsensusTopicInfo.prototype.getAutorenewaccount = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 8));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.ConsensusTopicInfo} returns this
*/
proto.proto.ConsensusTopicInfo.prototype.setAutorenewaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusTopicInfo} returns this
 */
proto.proto.ConsensusTopicInfo.prototype.clearAutorenewaccount = function() {
  return this.setAutorenewaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusTopicInfo.prototype.hasAutorenewaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.proto);
