// source: ContractUpdate.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('@exodus/google-protobuf');
var goog = jspb;
const proto = {};

var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var Duration_pb = require('./Duration_pb.js');
goog.object.extend(proto, Duration_pb);
var Timestamp_pb = require('./Timestamp_pb.js');
goog.object.extend(proto, Timestamp_pb);
goog.exportSymbol('proto.proto.ContractUpdateTransactionBody', null, { proto });
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
proto.proto.ContractUpdateTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ContractUpdateTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ContractUpdateTransactionBody.displayName = 'proto.proto.ContractUpdateTransactionBody';
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
proto.proto.ContractUpdateTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractUpdateTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractUpdateTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractUpdateTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    expirationtime: (f = msg.getExpirationtime()) && Timestamp_pb.Timestamp.toObject(includeInstance, f),
    adminkey: (f = msg.getAdminkey()) && BasicTypes_pb.Key.toObject(includeInstance, f),
    proxyaccountid: (f = msg.getProxyaccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    autorenewperiod: (f = msg.getAutorenewperiod()) && Duration_pb.Duration.toObject(includeInstance, f),
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f),
    memo: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.proto.ContractUpdateTransactionBody}
 */
proto.proto.ContractUpdateTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractUpdateTransactionBody;
  return proto.proto.ContractUpdateTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractUpdateTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractUpdateTransactionBody}
 */
proto.proto.ContractUpdateTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
      break;
    case 2:
      var value = new Timestamp_pb.Timestamp;
      reader.readMessage(value,Timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationtime(value);
      break;
    case 3:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setAdminkey(value);
      break;
    case 6:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setProxyaccountid(value);
      break;
    case 7:
      var value = new Duration_pb.Duration;
      reader.readMessage(value,Duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAutorenewperiod(value);
      break;
    case 8:
      var value = new BasicTypes_pb.FileID;
      reader.readMessage(value,BasicTypes_pb.FileID.deserializeBinaryFromReader);
      msg.setFileid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
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
proto.proto.ContractUpdateTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractUpdateTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractUpdateTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractUpdateTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getExpirationtime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAdminkey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
  f = message.getProxyaccountid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
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
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional ContractID contractID = 1;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 1));
};


/**
 * @param {?proto.proto.ContractID|undefined} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
*/
proto.proto.ContractUpdateTransactionBody.prototype.setContractid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.clearContractid = function() {
  return this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractUpdateTransactionBody.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Timestamp expirationTime = 2;
 * @return {?proto.proto.Timestamp}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getExpirationtime = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, Timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.proto.Timestamp|undefined} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
*/
proto.proto.ContractUpdateTransactionBody.prototype.setExpirationtime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.clearExpirationtime = function() {
  return this.setExpirationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractUpdateTransactionBody.prototype.hasExpirationtime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Key adminKey = 3;
 * @return {?proto.proto.Key}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getAdminkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 3));
};


/**
 * @param {?proto.proto.Key|undefined} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
*/
proto.proto.ContractUpdateTransactionBody.prototype.setAdminkey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.clearAdminkey = function() {
  return this.setAdminkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractUpdateTransactionBody.prototype.hasAdminkey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AccountID proxyAccountID = 6;
 * @return {?proto.proto.AccountID}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getProxyaccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 6));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
*/
proto.proto.ContractUpdateTransactionBody.prototype.setProxyaccountid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.clearProxyaccountid = function() {
  return this.setProxyaccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractUpdateTransactionBody.prototype.hasProxyaccountid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Duration autoRenewPeriod = 7;
 * @return {?proto.proto.Duration}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getAutorenewperiod = function() {
  return /** @type{?proto.proto.Duration} */ (
    jspb.Message.getWrapperField(this, Duration_pb.Duration, 7));
};


/**
 * @param {?proto.proto.Duration|undefined} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
*/
proto.proto.ContractUpdateTransactionBody.prototype.setAutorenewperiod = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.clearAutorenewperiod = function() {
  return this.setAutorenewperiod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractUpdateTransactionBody.prototype.hasAutorenewperiod = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional FileID fileID = 8;
 * @return {?proto.proto.FileID}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 8));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
*/
proto.proto.ContractUpdateTransactionBody.prototype.setFileid = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractUpdateTransactionBody.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string memo = 9;
 * @return {string}
 */
proto.proto.ContractUpdateTransactionBody.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContractUpdateTransactionBody} returns this
 */
proto.proto.ContractUpdateTransactionBody.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.proto);
