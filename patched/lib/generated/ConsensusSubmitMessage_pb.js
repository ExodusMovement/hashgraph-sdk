// source: ConsensusSubmitMessage.proto
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
goog.exportSymbol('proto.proto.ConsensusMessageChunkInfo', null, global);
goog.exportSymbol('proto.proto.ConsensusSubmitMessageTransactionBody', null, global);
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
proto.proto.ConsensusMessageChunkInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConsensusMessageChunkInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ConsensusMessageChunkInfo.displayName = 'proto.proto.ConsensusMessageChunkInfo';
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
proto.proto.ConsensusSubmitMessageTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConsensusSubmitMessageTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ConsensusSubmitMessageTransactionBody.displayName = 'proto.proto.ConsensusSubmitMessageTransactionBody';
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
proto.proto.ConsensusMessageChunkInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConsensusMessageChunkInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConsensusMessageChunkInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusMessageChunkInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialtransactionid: (f = msg.getInitialtransactionid()) && BasicTypes_pb.TransactionID.toObject(includeInstance, f),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.ConsensusMessageChunkInfo}
 */
proto.proto.ConsensusMessageChunkInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConsensusMessageChunkInfo;
  return proto.proto.ConsensusMessageChunkInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConsensusMessageChunkInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConsensusMessageChunkInfo}
 */
proto.proto.ConsensusMessageChunkInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.TransactionID;
      reader.readMessage(value,BasicTypes_pb.TransactionID.deserializeBinaryFromReader);
      msg.setInitialtransactionid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
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
proto.proto.ConsensusMessageChunkInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConsensusMessageChunkInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConsensusMessageChunkInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusMessageChunkInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialtransactionid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.TransactionID.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional TransactionID initialTransactionID = 1;
 * @return {?proto.proto.TransactionID}
 */
proto.proto.ConsensusMessageChunkInfo.prototype.getInitialtransactionid = function() {
  return /** @type{?proto.proto.TransactionID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TransactionID, 1));
};


/**
 * @param {?proto.proto.TransactionID|undefined} value
 * @return {!proto.proto.ConsensusMessageChunkInfo} returns this
*/
proto.proto.ConsensusMessageChunkInfo.prototype.setInitialtransactionid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusMessageChunkInfo} returns this
 */
proto.proto.ConsensusMessageChunkInfo.prototype.clearInitialtransactionid = function() {
  return this.setInitialtransactionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusMessageChunkInfo.prototype.hasInitialtransactionid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.proto.ConsensusMessageChunkInfo.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ConsensusMessageChunkInfo} returns this
 */
proto.proto.ConsensusMessageChunkInfo.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.proto.ConsensusMessageChunkInfo.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ConsensusMessageChunkInfo} returns this
 */
proto.proto.ConsensusMessageChunkInfo.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConsensusSubmitMessageTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConsensusSubmitMessageTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusSubmitMessageTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicid: (f = msg.getTopicid()) && BasicTypes_pb.TopicID.toObject(includeInstance, f),
    message: msg.getMessage_asB64(),
    chunkinfo: (f = msg.getChunkinfo()) && proto.proto.ConsensusMessageChunkInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConsensusSubmitMessageTransactionBody;
  return proto.proto.ConsensusSubmitMessageTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConsensusSubmitMessageTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.TopicID;
      reader.readMessage(value,BasicTypes_pb.TopicID.deserializeBinaryFromReader);
      msg.setTopicid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.proto.ConsensusMessageChunkInfo;
      reader.readMessage(value,proto.proto.ConsensusMessageChunkInfo.deserializeBinaryFromReader);
      msg.setChunkinfo(value);
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
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConsensusSubmitMessageTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConsensusSubmitMessageTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusSubmitMessageTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.TopicID.serializeBinaryToWriter
    );
  }
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getChunkinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.ConsensusMessageChunkInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TopicID topicID = 1;
 * @return {?proto.proto.TopicID}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getTopicid = function() {
  return /** @type{?proto.proto.TopicID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TopicID, 1));
};


/**
 * @param {?proto.proto.TopicID|undefined} value
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody} returns this
*/
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.setTopicid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody} returns this
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.clearTopicid = function() {
  return this.setTopicid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.hasTopicid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes message = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes message = 2;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * optional bytes message = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody} returns this
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.setMessage = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional ConsensusMessageChunkInfo chunkInfo = 3;
 * @return {?proto.proto.ConsensusMessageChunkInfo}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getChunkinfo = function() {
  return /** @type{?proto.proto.ConsensusMessageChunkInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ConsensusMessageChunkInfo, 3));
};


/**
 * @param {?proto.proto.ConsensusMessageChunkInfo|undefined} value
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody} returns this
*/
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.setChunkinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusSubmitMessageTransactionBody} returns this
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.clearChunkinfo = function() {
  return this.setChunkinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusSubmitMessageTransactionBody.prototype.hasChunkinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);
