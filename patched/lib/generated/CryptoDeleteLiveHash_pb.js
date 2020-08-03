// source: CryptoDeleteLiveHash.proto
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
goog.exportSymbol('proto.proto.CryptoDeleteLiveHashTransactionBody', null, global);
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
proto.proto.CryptoDeleteLiveHashTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoDeleteLiveHashTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CryptoDeleteLiveHashTransactionBody.displayName = 'proto.proto.CryptoDeleteLiveHashTransactionBody';
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
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoDeleteLiveHashTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoDeleteLiveHashTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountoflivehash: (f = msg.getAccountoflivehash()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    livehashtodelete: msg.getLivehashtodelete_asB64()
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
 * @return {!proto.proto.CryptoDeleteLiveHashTransactionBody}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoDeleteLiveHashTransactionBody;
  return proto.proto.CryptoDeleteLiveHashTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoDeleteLiveHashTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoDeleteLiveHashTransactionBody}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountoflivehash(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLivehashtodelete(value);
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
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoDeleteLiveHashTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoDeleteLiveHashTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountoflivehash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getLivehashtodelete_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional AccountID accountOfLiveHash = 1;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.getAccountoflivehash = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 1));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.CryptoDeleteLiveHashTransactionBody} returns this
*/
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.setAccountoflivehash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CryptoDeleteLiveHashTransactionBody} returns this
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.clearAccountoflivehash = function() {
  return this.setAccountoflivehash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.hasAccountoflivehash = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes liveHashToDelete = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.getLivehashtodelete = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes liveHashToDelete = 2;
 * This is a type-conversion wrapper around `getLivehashtodelete()`
 * @return {string}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.getLivehashtodelete_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLivehashtodelete()));
};


/**
 * optional bytes liveHashToDelete = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLivehashtodelete()`
 * @return {!Uint8Array}
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.getLivehashtodelete_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLivehashtodelete()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.CryptoDeleteLiveHashTransactionBody} returns this
 */
proto.proto.CryptoDeleteLiveHashTransactionBody.prototype.setLivehashtodelete = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.proto);
