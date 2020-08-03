// source: MirrorConsensusService.proto
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
var global = Function('return this')();

var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var Timestamp_pb = require('./Timestamp_pb.js');
goog.object.extend(proto, Timestamp_pb);
var ConsensusSubmitMessage_pb = require('./ConsensusSubmitMessage_pb.js');
goog.object.extend(proto, ConsensusSubmitMessage_pb);
goog.exportSymbol('proto.com.hedera.mirror.api.proto.ConsensusTopicQuery', null, global);
goog.exportSymbol('proto.com.hedera.mirror.api.proto.ConsensusTopicResponse', null, global);
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
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.hedera.mirror.api.proto.ConsensusTopicQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.displayName = 'proto.com.hedera.mirror.api.proto.ConsensusTopicQuery';
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
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.hedera.mirror.api.proto.ConsensusTopicResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.displayName = 'proto.com.hedera.mirror.api.proto.ConsensusTopicResponse';
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
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicid: (f = msg.getTopicid()) && BasicTypes_pb.TopicID.toObject(includeInstance, f),
    consensusstarttime: (f = msg.getConsensusstarttime()) && Timestamp_pb.Timestamp.toObject(includeInstance, f),
    consensusendtime: (f = msg.getConsensusendtime()) && Timestamp_pb.Timestamp.toObject(includeInstance, f),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.hedera.mirror.api.proto.ConsensusTopicQuery;
  return proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new Timestamp_pb.Timestamp;
      reader.readMessage(value,Timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConsensusstarttime(value);
      break;
    case 3:
      var value = new Timestamp_pb.Timestamp;
      reader.readMessage(value,Timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConsensusendtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
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
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.TopicID.serializeBinaryToWriter
    );
  }
  f = message.getConsensusstarttime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConsensusendtime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      Timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional proto.TopicID topicID = 1;
 * @return {?proto.proto.TopicID}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getTopicid = function() {
  return /** @type{?proto.proto.TopicID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TopicID, 1));
};


/**
 * @param {?proto.proto.TopicID|undefined} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
*/
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setTopicid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.clearTopicid = function() {
  return this.setTopicid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.hasTopicid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional proto.Timestamp consensusStartTime = 2;
 * @return {?proto.proto.Timestamp}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getConsensusstarttime = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, Timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.proto.Timestamp|undefined} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
*/
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setConsensusstarttime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.clearConsensusstarttime = function() {
  return this.setConsensusstarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.hasConsensusstarttime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional proto.Timestamp consensusEndTime = 3;
 * @return {?proto.proto.Timestamp}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getConsensusendtime = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, Timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.proto.Timestamp|undefined} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
*/
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setConsensusendtime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.clearConsensusendtime = function() {
  return this.setConsensusendtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.hasConsensusendtime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 limit = 4;
 * @return {number}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicQuery} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    consensustimestamp: (f = msg.getConsensustimestamp()) && Timestamp_pb.Timestamp.toObject(includeInstance, f),
    message: msg.getMessage_asB64(),
    runninghash: msg.getRunninghash_asB64(),
    sequencenumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    runninghashversion: jspb.Message.getFieldWithDefault(msg, 5, 0),
    chunkinfo: (f = msg.getChunkinfo()) && ConsensusSubmitMessage_pb.ConsensusMessageChunkInfo.toObject(includeInstance, f)
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
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.hedera.mirror.api.proto.ConsensusTopicResponse;
  return proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Timestamp_pb.Timestamp;
      reader.readMessage(value,Timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConsensustimestamp(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRunninghash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequencenumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRunninghashversion(value);
      break;
    case 6:
      var value = new ConsensusSubmitMessage_pb.ConsensusMessageChunkInfo;
      reader.readMessage(value,ConsensusSubmitMessage_pb.ConsensusMessageChunkInfo.deserializeBinaryFromReader);
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
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsensustimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getRunninghash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getSequencenumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRunninghashversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getChunkinfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      ConsensusSubmitMessage_pb.ConsensusMessageChunkInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional proto.Timestamp consensusTimestamp = 1;
 * @return {?proto.proto.Timestamp}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getConsensustimestamp = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, Timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.proto.Timestamp|undefined} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
*/
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setConsensustimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.clearConsensustimestamp = function() {
  return this.setConsensustimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.hasConsensustimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes message = 2;
 * @return {!(string|Uint8Array)}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes message = 2;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getMessage_asB64 = function() {
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
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes runningHash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes runningHash = 3;
 * This is a type-conversion wrapper around `getRunninghash()`
 * @return {string}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRunninghash()));
};


/**
 * optional bytes runningHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRunninghash()`
 * @return {!Uint8Array}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRunninghash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setRunninghash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 sequenceNumber = 4;
 * @return {number}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setSequencenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 runningHashVersion = 5;
 * @return {number}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghashversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setRunninghashversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional proto.ConsensusMessageChunkInfo chunkInfo = 6;
 * @return {?proto.proto.ConsensusMessageChunkInfo}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getChunkinfo = function() {
  return /** @type{?proto.proto.ConsensusMessageChunkInfo} */ (
    jspb.Message.getWrapperField(this, ConsensusSubmitMessage_pb.ConsensusMessageChunkInfo, 6));
};


/**
 * @param {?proto.proto.ConsensusMessageChunkInfo|undefined} value
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
*/
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setChunkinfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.hedera.mirror.api.proto.ConsensusTopicResponse} returns this
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.clearChunkinfo = function() {
  return this.setChunkinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.hasChunkinfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.com.hedera.mirror.api.proto);
