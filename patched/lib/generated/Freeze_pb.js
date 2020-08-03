// source: Freeze.proto
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

var Duration_pb = require('./Duration_pb.js');
goog.object.extend(proto, Duration_pb);
var Timestamp_pb = require('./Timestamp_pb.js');
goog.object.extend(proto, Timestamp_pb);
var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
goog.exportSymbol('proto.proto.FreezeTransactionBody', null, global);
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
proto.proto.FreezeTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FreezeTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FreezeTransactionBody.displayName = 'proto.proto.FreezeTransactionBody';
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
proto.proto.FreezeTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FreezeTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FreezeTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FreezeTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    starthour: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startmin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endhour: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endmin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatefile: (f = msg.getUpdatefile()) && BasicTypes_pb.FileID.toObject(includeInstance, f)
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
 * @return {!proto.proto.FreezeTransactionBody}
 */
proto.proto.FreezeTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FreezeTransactionBody;
  return proto.proto.FreezeTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FreezeTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FreezeTransactionBody}
 */
proto.proto.FreezeTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStarthour(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartmin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndhour(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndmin(value);
      break;
    case 5:
      var value = new BasicTypes_pb.FileID;
      reader.readMessage(value,BasicTypes_pb.FileID.deserializeBinaryFromReader);
      msg.setUpdatefile(value);
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
proto.proto.FreezeTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FreezeTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FreezeTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FreezeTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarthour();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartmin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndhour();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getEndmin();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUpdatefile();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 startHour = 1;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getStarthour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.FreezeTransactionBody} returns this
 */
proto.proto.FreezeTransactionBody.prototype.setStarthour = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 startMin = 2;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getStartmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.FreezeTransactionBody} returns this
 */
proto.proto.FreezeTransactionBody.prototype.setStartmin = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 endHour = 3;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getEndhour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.FreezeTransactionBody} returns this
 */
proto.proto.FreezeTransactionBody.prototype.setEndhour = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 endMin = 4;
 * @return {number}
 */
proto.proto.FreezeTransactionBody.prototype.getEndmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.FreezeTransactionBody} returns this
 */
proto.proto.FreezeTransactionBody.prototype.setEndmin = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional FileID updateFile = 5;
 * @return {?proto.proto.FileID}
 */
proto.proto.FreezeTransactionBody.prototype.getUpdatefile = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 5));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.FreezeTransactionBody} returns this
*/
proto.proto.FreezeTransactionBody.prototype.setUpdatefile = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FreezeTransactionBody} returns this
 */
proto.proto.FreezeTransactionBody.prototype.clearUpdatefile = function() {
  return this.setUpdatefile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FreezeTransactionBody.prototype.hasUpdatefile = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.proto);
