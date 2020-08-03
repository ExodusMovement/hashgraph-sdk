// source: FileDelete.proto
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


var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
goog.exportSymbol('proto.proto.FileDeleteTransactionBody', null, global);
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
proto.proto.FileDeleteTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FileDeleteTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FileDeleteTransactionBody.displayName = 'proto.proto.FileDeleteTransactionBody';
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
proto.proto.FileDeleteTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FileDeleteTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FileDeleteTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileDeleteTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.proto.FileDeleteTransactionBody}
 */
proto.proto.FileDeleteTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FileDeleteTransactionBody;
  return proto.proto.FileDeleteTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FileDeleteTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FileDeleteTransactionBody}
 */
proto.proto.FileDeleteTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.proto.FileDeleteTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FileDeleteTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FileDeleteTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileDeleteTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
 * optional FileID fileID = 2;
 * @return {?proto.proto.FileID}
 */
proto.proto.FileDeleteTransactionBody.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 2));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.FileDeleteTransactionBody} returns this
*/
proto.proto.FileDeleteTransactionBody.prototype.setFileid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileDeleteTransactionBody} returns this
 */
proto.proto.FileDeleteTransactionBody.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileDeleteTransactionBody.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
