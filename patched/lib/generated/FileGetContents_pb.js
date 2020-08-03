// source: FileGetContents.proto
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
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.object.extend(proto, ResponseHeader_pb);
goog.exportSymbol('proto.proto.FileGetContentsQuery', null, global);
goog.exportSymbol('proto.proto.FileGetContentsResponse', null, global);
goog.exportSymbol('proto.proto.FileGetContentsResponse.FileContents', null, global);
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
proto.proto.FileGetContentsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FileGetContentsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FileGetContentsQuery.displayName = 'proto.proto.FileGetContentsQuery';
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
proto.proto.FileGetContentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FileGetContentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FileGetContentsResponse.displayName = 'proto.proto.FileGetContentsResponse';
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
proto.proto.FileGetContentsResponse.FileContents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FileGetContentsResponse.FileContents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FileGetContentsResponse.FileContents.displayName = 'proto.proto.FileGetContentsResponse.FileContents';
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
proto.proto.FileGetContentsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FileGetContentsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FileGetContentsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileGetContentsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && QueryHeader_pb.QueryHeader.toObject(includeInstance, f),
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f)
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
 * @return {!proto.proto.FileGetContentsQuery}
 */
proto.proto.FileGetContentsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FileGetContentsQuery;
  return proto.proto.FileGetContentsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FileGetContentsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FileGetContentsQuery}
 */
proto.proto.FileGetContentsQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.FileID;
      reader.readMessage(value,BasicTypes_pb.FileID.deserializeBinaryFromReader);
      msg.setFileid(value);
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
proto.proto.FileGetContentsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FileGetContentsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FileGetContentsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileGetContentsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      QueryHeader_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.FileGetContentsQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/**
 * @param {?proto.proto.QueryHeader|undefined} value
 * @return {!proto.proto.FileGetContentsQuery} returns this
*/
proto.proto.FileGetContentsQuery.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileGetContentsQuery} returns this
 */
proto.proto.FileGetContentsQuery.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileGetContentsQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileID fileID = 2;
 * @return {?proto.proto.FileID}
 */
proto.proto.FileGetContentsQuery.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 2));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.FileGetContentsQuery} returns this
*/
proto.proto.FileGetContentsQuery.prototype.setFileid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileGetContentsQuery} returns this
 */
proto.proto.FileGetContentsQuery.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileGetContentsQuery.prototype.hasFileid = function() {
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
proto.proto.FileGetContentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FileGetContentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FileGetContentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileGetContentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    filecontents: (f = msg.getFilecontents()) && proto.proto.FileGetContentsResponse.FileContents.toObject(includeInstance, f)
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
 * @return {!proto.proto.FileGetContentsResponse}
 */
proto.proto.FileGetContentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FileGetContentsResponse;
  return proto.proto.FileGetContentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FileGetContentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FileGetContentsResponse}
 */
proto.proto.FileGetContentsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.proto.FileGetContentsResponse.FileContents;
      reader.readMessage(value,proto.proto.FileGetContentsResponse.FileContents.deserializeBinaryFromReader);
      msg.setFilecontents(value);
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
proto.proto.FileGetContentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FileGetContentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FileGetContentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileGetContentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getFilecontents();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.FileGetContentsResponse.FileContents.serializeBinaryToWriter
    );
  }
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
proto.proto.FileGetContentsResponse.FileContents.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FileGetContentsResponse.FileContents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FileGetContentsResponse.FileContents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileGetContentsResponse.FileContents.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f),
    contents: msg.getContents_asB64()
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
 * @return {!proto.proto.FileGetContentsResponse.FileContents}
 */
proto.proto.FileGetContentsResponse.FileContents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FileGetContentsResponse.FileContents;
  return proto.proto.FileGetContentsResponse.FileContents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FileGetContentsResponse.FileContents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FileGetContentsResponse.FileContents}
 */
proto.proto.FileGetContentsResponse.FileContents.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContents(value);
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
proto.proto.FileGetContentsResponse.FileContents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FileGetContentsResponse.FileContents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FileGetContentsResponse.FileContents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileGetContentsResponse.FileContents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
  f = message.getContents_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional FileID fileID = 1;
 * @return {?proto.proto.FileID}
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 1));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.FileGetContentsResponse.FileContents} returns this
*/
proto.proto.FileGetContentsResponse.FileContents.prototype.setFileid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileGetContentsResponse.FileContents} returns this
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes contents = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.getContents = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes contents = 2;
 * This is a type-conversion wrapper around `getContents()`
 * @return {string}
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.getContents_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContents()));
};


/**
 * optional bytes contents = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContents()`
 * @return {!Uint8Array}
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.getContents_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContents()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.FileGetContentsResponse.FileContents} returns this
 */
proto.proto.FileGetContentsResponse.FileContents.prototype.setContents = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.FileGetContentsResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.proto.ResponseHeader|undefined} value
 * @return {!proto.proto.FileGetContentsResponse} returns this
*/
proto.proto.FileGetContentsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileGetContentsResponse} returns this
 */
proto.proto.FileGetContentsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileGetContentsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileContents fileContents = 2;
 * @return {?proto.proto.FileGetContentsResponse.FileContents}
 */
proto.proto.FileGetContentsResponse.prototype.getFilecontents = function() {
  return /** @type{?proto.proto.FileGetContentsResponse.FileContents} */ (
    jspb.Message.getWrapperField(this, proto.proto.FileGetContentsResponse.FileContents, 2));
};


/**
 * @param {?proto.proto.FileGetContentsResponse.FileContents|undefined} value
 * @return {!proto.proto.FileGetContentsResponse} returns this
*/
proto.proto.FileGetContentsResponse.prototype.setFilecontents = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileGetContentsResponse} returns this
 */
proto.proto.FileGetContentsResponse.prototype.clearFilecontents = function() {
  return this.setFilecontents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileGetContentsResponse.prototype.hasFilecontents = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
