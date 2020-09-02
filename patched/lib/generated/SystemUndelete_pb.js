// source: SystemUndelete.proto
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
goog.exportSymbol('proto.proto.SystemUndeleteTransactionBody', null, { proto });
goog.exportSymbol('proto.proto.SystemUndeleteTransactionBody.IdCase', null, { proto });
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
proto.proto.SystemUndeleteTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.SystemUndeleteTransactionBody.oneofGroups_);
};
goog.inherits(proto.proto.SystemUndeleteTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SystemUndeleteTransactionBody.displayName = 'proto.proto.SystemUndeleteTransactionBody';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.SystemUndeleteTransactionBody.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.SystemUndeleteTransactionBody.IdCase = {
  ID_NOT_SET: 0,
  FILEID: 1,
  CONTRACTID: 2
};

/**
 * @return {proto.proto.SystemUndeleteTransactionBody.IdCase}
 */
proto.proto.SystemUndeleteTransactionBody.prototype.getIdCase = function() {
  return /** @type {proto.proto.SystemUndeleteTransactionBody.IdCase} */(jspb.Message.computeOneofCase(this, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0]));
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
proto.proto.SystemUndeleteTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SystemUndeleteTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SystemUndeleteTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SystemUndeleteTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f),
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f)
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
 * @return {!proto.proto.SystemUndeleteTransactionBody}
 */
proto.proto.SystemUndeleteTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SystemUndeleteTransactionBody;
  return proto.proto.SystemUndeleteTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SystemUndeleteTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SystemUndeleteTransactionBody}
 */
proto.proto.SystemUndeleteTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
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
proto.proto.SystemUndeleteTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SystemUndeleteTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SystemUndeleteTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SystemUndeleteTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
};


/**
 * optional FileID fileID = 1;
 * @return {?proto.proto.FileID}
 */
proto.proto.SystemUndeleteTransactionBody.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 1));
};


/**
 * @param {?proto.proto.FileID|undefined} value
 * @return {!proto.proto.SystemUndeleteTransactionBody} returns this
*/
proto.proto.SystemUndeleteTransactionBody.prototype.setFileid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SystemUndeleteTransactionBody} returns this
 */
proto.proto.SystemUndeleteTransactionBody.prototype.clearFileid = function() {
  return this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SystemUndeleteTransactionBody.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContractID contractID = 2;
 * @return {?proto.proto.ContractID}
 */
proto.proto.SystemUndeleteTransactionBody.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 2));
};


/**
 * @param {?proto.proto.ContractID|undefined} value
 * @return {!proto.proto.SystemUndeleteTransactionBody} returns this
*/
proto.proto.SystemUndeleteTransactionBody.prototype.setContractid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SystemUndeleteTransactionBody} returns this
 */
proto.proto.SystemUndeleteTransactionBody.prototype.clearContractid = function() {
  return this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SystemUndeleteTransactionBody.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
