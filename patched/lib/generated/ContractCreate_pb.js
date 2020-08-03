// source: ContractCreate.proto
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
goog.exportSymbol('proto.proto.ContractCreateTransactionBody', null, global);
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
proto.proto.ContractCreateTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ContractCreateTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ContractCreateTransactionBody.displayName = 'proto.proto.ContractCreateTransactionBody';
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
proto.proto.ContractCreateTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractCreateTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractCreateTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCreateTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f),
    adminkey: (f = msg.getAdminkey()) && BasicTypes_pb.Key.toObject(includeInstance, f),
    gas: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    initialbalance: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    proxyaccountid: (f = msg.getProxyaccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    autorenewperiod: (f = msg.getAutorenewperiod()) && Duration_pb.Duration.toObject(includeInstance, f),
    constructorparameters: msg.getConstructorparameters_asB64(),
    shardid: (f = msg.getShardid()) && BasicTypes_pb.ShardID.toObject(includeInstance, f),
    realmid: (f = msg.getRealmid()) && BasicTypes_pb.RealmID.toObject(includeInstance, f),
    newrealmadminkey: (f = msg.getNewrealmadminkey()) && BasicTypes_pb.Key.toObject(includeInstance, f),
    memo: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.proto.ContractCreateTransactionBody}
 */
proto.proto.ContractCreateTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractCreateTransactionBody;
  return proto.proto.ContractCreateTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractCreateTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractCreateTransactionBody}
 */
proto.proto.ContractCreateTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.FileID;
      reader.readMessage(value,BasicTypes_pb.FileID.deserializeBinaryFromReader);
      msg.setFileid(value);
      break;
    case 3:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setAdminkey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setGas(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInitialbalance(value);
      break;
    case 6:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setProxyaccountid(value);
      break;
    case 8:
      var value = new Duration_pb.Duration;
      reader.readMessage(value,Duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAutorenewperiod(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConstructorparameters(value);
      break;
    case 10:
      var value = new BasicTypes_pb.ShardID;
      reader.readMessage(value,BasicTypes_pb.ShardID.deserializeBinaryFromReader);
      msg.setShardid(value);
      break;
    case 11:
      var value = new BasicTypes_pb.RealmID;
      reader.readMessage(value,BasicTypes_pb.RealmID.deserializeBinaryFromReader);
      msg.setRealmid(value);
      break;
    case 12:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setNewrealmadminkey(value);
      break;
    case 13:
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
proto.proto.ContractCreateTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractCreateTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractCreateTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCreateTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
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
  f = message.getGas();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getInitialbalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
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
      8,
      f,
      Duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getConstructorparameters_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getShardid();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      BasicTypes_pb.ShardID.serializeBinaryToWriter
    );
  }
  f = message.getRealmid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      BasicTypes_pb.RealmID.serializeBinaryToWriter
    );
  }
  f = message.getNewrealmadminkey();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional FileID fileID = 1;
 * @return {?proto.proto.FileID}
 */
proto.proto.ContractCreateTransactionBody.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 1));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setFileid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Key adminKey = 3;
 * @return {?proto.proto.Key}
 */
proto.proto.ContractCreateTransactionBody.prototype.getAdminkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 3));
};


/**
 * @param {?proto.proto.Key|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setAdminkey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearAdminkey = function() {
  return this.setAdminkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasAdminkey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 gas = 4;
 * @return {string}
 */
proto.proto.ContractCreateTransactionBody.prototype.getGas = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.setGas = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional int64 initialBalance = 5;
 * @return {string}
 */
proto.proto.ContractCreateTransactionBody.prototype.getInitialbalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.setInitialbalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional AccountID proxyAccountID = 6;
 * @return {?proto.proto.AccountID}
 */
proto.proto.ContractCreateTransactionBody.prototype.getProxyaccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 6));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setProxyaccountid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearProxyaccountid = function() {
  return this.setProxyaccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasProxyaccountid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Duration autoRenewPeriod = 8;
 * @return {?proto.proto.Duration}
 */
proto.proto.ContractCreateTransactionBody.prototype.getAutorenewperiod = function() {
  return /** @type{?proto.proto.Duration} */ (
    jspb.Message.getWrapperField(this, Duration_pb.Duration, 8));
};


/**
 * @param {?proto.proto.Duration|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setAutorenewperiod = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearAutorenewperiod = function() {
  return this.setAutorenewperiod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasAutorenewperiod = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes constructorParameters = 9;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ContractCreateTransactionBody.prototype.getConstructorparameters = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes constructorParameters = 9;
 * This is a type-conversion wrapper around `getConstructorparameters()`
 * @return {string}
 */
proto.proto.ContractCreateTransactionBody.prototype.getConstructorparameters_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConstructorparameters()));
};


/**
 * optional bytes constructorParameters = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConstructorparameters()`
 * @return {!Uint8Array}
 */
proto.proto.ContractCreateTransactionBody.prototype.getConstructorparameters_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConstructorparameters()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.setConstructorparameters = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional ShardID shardID = 10;
 * @return {?proto.proto.ShardID}
 */
proto.proto.ContractCreateTransactionBody.prototype.getShardid = function() {
  return /** @type{?proto.proto.ShardID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ShardID, 10));
};


/**
 * @param {?proto.proto.ShardID|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setShardid = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearShardid = function() {
  return this.setShardid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasShardid = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RealmID realmID = 11;
 * @return {?proto.proto.RealmID}
 */
proto.proto.ContractCreateTransactionBody.prototype.getRealmid = function() {
  return /** @type{?proto.proto.RealmID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.RealmID, 11));
};


/**
 * @param {?proto.proto.RealmID|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setRealmid = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearRealmid = function() {
  return this.setRealmid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasRealmid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Key newRealmAdminKey = 12;
 * @return {?proto.proto.Key}
 */
proto.proto.ContractCreateTransactionBody.prototype.getNewrealmadminkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 12));
};


/**
 * @param {?proto.proto.Key|undefined} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
*/
proto.proto.ContractCreateTransactionBody.prototype.setNewrealmadminkey = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.clearNewrealmadminkey = function() {
  return this.setNewrealmadminkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCreateTransactionBody.prototype.hasNewrealmadminkey = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string memo = 13;
 * @return {string}
 */
proto.proto.ContractCreateTransactionBody.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ContractCreateTransactionBody} returns this
 */
proto.proto.ContractCreateTransactionBody.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


goog.object.extend(exports, proto.proto);
