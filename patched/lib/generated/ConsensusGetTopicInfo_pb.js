// source: ConsensusGetTopicInfo.proto
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
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.object.extend(proto, ResponseHeader_pb);
var ConsensusTopicInfo_pb = require('./ConsensusTopicInfo_pb.js');
goog.object.extend(proto, ConsensusTopicInfo_pb);
goog.exportSymbol('proto.proto.ConsensusGetTopicInfoQuery', null, { proto });
goog.exportSymbol('proto.proto.ConsensusGetTopicInfoResponse', null, { proto });
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
proto.proto.ConsensusGetTopicInfoQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConsensusGetTopicInfoQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ConsensusGetTopicInfoQuery.displayName = 'proto.proto.ConsensusGetTopicInfoQuery';
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
proto.proto.ConsensusGetTopicInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConsensusGetTopicInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ConsensusGetTopicInfoResponse.displayName = 'proto.proto.ConsensusGetTopicInfoResponse';
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
proto.proto.ConsensusGetTopicInfoQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConsensusGetTopicInfoQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConsensusGetTopicInfoQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusGetTopicInfoQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && QueryHeader_pb.QueryHeader.toObject(includeInstance, f),
    topicid: (f = msg.getTopicid()) && BasicTypes_pb.TopicID.toObject(includeInstance, f)
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
 * @return {!proto.proto.ConsensusGetTopicInfoQuery}
 */
proto.proto.ConsensusGetTopicInfoQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConsensusGetTopicInfoQuery;
  return proto.proto.ConsensusGetTopicInfoQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConsensusGetTopicInfoQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConsensusGetTopicInfoQuery}
 */
proto.proto.ConsensusGetTopicInfoQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.TopicID;
      reader.readMessage(value,BasicTypes_pb.TopicID.deserializeBinaryFromReader);
      msg.setTopicid(value);
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
proto.proto.ConsensusGetTopicInfoQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConsensusGetTopicInfoQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConsensusGetTopicInfoQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusGetTopicInfoQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      QueryHeader_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getTopicid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.TopicID.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.ConsensusGetTopicInfoQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/**
 * @param {?proto.proto.QueryHeader|undefined} value
 * @return {!proto.proto.ConsensusGetTopicInfoQuery} returns this
*/
proto.proto.ConsensusGetTopicInfoQuery.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusGetTopicInfoQuery} returns this
 */
proto.proto.ConsensusGetTopicInfoQuery.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusGetTopicInfoQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TopicID topicID = 2;
 * @return {?proto.proto.TopicID}
 */
proto.proto.ConsensusGetTopicInfoQuery.prototype.getTopicid = function() {
  return /** @type{?proto.proto.TopicID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TopicID, 2));
};


/**
 * @param {?proto.proto.TopicID|undefined} value
 * @return {!proto.proto.ConsensusGetTopicInfoQuery} returns this
*/
proto.proto.ConsensusGetTopicInfoQuery.prototype.setTopicid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusGetTopicInfoQuery} returns this
 */
proto.proto.ConsensusGetTopicInfoQuery.prototype.clearTopicid = function() {
  return this.setTopicid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusGetTopicInfoQuery.prototype.hasTopicid = function() {
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
proto.proto.ConsensusGetTopicInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConsensusGetTopicInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConsensusGetTopicInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusGetTopicInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    topicid: (f = msg.getTopicid()) && BasicTypes_pb.TopicID.toObject(includeInstance, f),
    topicinfo: (f = msg.getTopicinfo()) && ConsensusTopicInfo_pb.ConsensusTopicInfo.toObject(includeInstance, f)
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
 * @return {!proto.proto.ConsensusGetTopicInfoResponse}
 */
proto.proto.ConsensusGetTopicInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConsensusGetTopicInfoResponse;
  return proto.proto.ConsensusGetTopicInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConsensusGetTopicInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConsensusGetTopicInfoResponse}
 */
proto.proto.ConsensusGetTopicInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.TopicID;
      reader.readMessage(value,BasicTypes_pb.TopicID.deserializeBinaryFromReader);
      msg.setTopicid(value);
      break;
    case 5:
      var value = new ConsensusTopicInfo_pb.ConsensusTopicInfo;
      reader.readMessage(value,ConsensusTopicInfo_pb.ConsensusTopicInfo.deserializeBinaryFromReader);
      msg.setTopicinfo(value);
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
proto.proto.ConsensusGetTopicInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConsensusGetTopicInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConsensusGetTopicInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConsensusGetTopicInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getTopicid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.TopicID.serializeBinaryToWriter
    );
  }
  f = message.getTopicinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ConsensusTopicInfo_pb.ConsensusTopicInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.proto.ResponseHeader|undefined} value
 * @return {!proto.proto.ConsensusGetTopicInfoResponse} returns this
*/
proto.proto.ConsensusGetTopicInfoResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusGetTopicInfoResponse} returns this
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TopicID topicID = 2;
 * @return {?proto.proto.TopicID}
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.getTopicid = function() {
  return /** @type{?proto.proto.TopicID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.TopicID, 2));
};


/**
 * @param {?proto.proto.TopicID|undefined} value
 * @return {!proto.proto.ConsensusGetTopicInfoResponse} returns this
*/
proto.proto.ConsensusGetTopicInfoResponse.prototype.setTopicid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusGetTopicInfoResponse} returns this
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.clearTopicid = function() {
  return this.setTopicid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.hasTopicid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConsensusTopicInfo topicInfo = 5;
 * @return {?proto.proto.ConsensusTopicInfo}
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.getTopicinfo = function() {
  return /** @type{?proto.proto.ConsensusTopicInfo} */ (
    jspb.Message.getWrapperField(this, ConsensusTopicInfo_pb.ConsensusTopicInfo, 5));
};


/**
 * @param {?proto.proto.ConsensusTopicInfo|undefined} value
 * @return {!proto.proto.ConsensusGetTopicInfoResponse} returns this
*/
proto.proto.ConsensusGetTopicInfoResponse.prototype.setTopicinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ConsensusGetTopicInfoResponse} returns this
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.clearTopicinfo = function() {
  return this.setTopicinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ConsensusGetTopicInfoResponse.prototype.hasTopicinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.proto);
