// source: ContractDelete.proto
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
goog.exportSymbol('proto.proto.ContractDeleteTransactionBody', null, { proto });
goog.exportSymbol('proto.proto.ContractDeleteTransactionBody.ObtainersCase', null, { proto });
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
proto.proto.ContractDeleteTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ContractDeleteTransactionBody.oneofGroups_);
};
goog.inherits(proto.proto.ContractDeleteTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ContractDeleteTransactionBody.displayName = 'proto.proto.ContractDeleteTransactionBody';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.ContractDeleteTransactionBody.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.proto.ContractDeleteTransactionBody.ObtainersCase = {
  OBTAINERS_NOT_SET: 0,
  TRANSFERACCOUNTID: 2,
  TRANSFERCONTRACTID: 3
};

/**
 * @return {proto.proto.ContractDeleteTransactionBody.ObtainersCase}
 */
proto.proto.ContractDeleteTransactionBody.prototype.getObtainersCase = function() {
  return /** @type {proto.proto.ContractDeleteTransactionBody.ObtainersCase} */(jspb.Message.computeOneofCase(this, proto.proto.ContractDeleteTransactionBody.oneofGroups_[0]));
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
proto.proto.ContractDeleteTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractDeleteTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractDeleteTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractDeleteTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    transferaccountid: (f = msg.getTransferaccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    transfercontractid: (f = msg.getTransfercontractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f)
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
 * @return {!proto.proto.ContractDeleteTransactionBody}
 */
proto.proto.ContractDeleteTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractDeleteTransactionBody;
  return proto.proto.ContractDeleteTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractDeleteTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractDeleteTransactionBody}
 */
proto.proto.ContractDeleteTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setTransferaccountid(value);
      break;
    case 3:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setTransfercontractid(value);
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
proto.proto.ContractDeleteTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractDeleteTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractDeleteTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractDeleteTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getTransferaccountid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getTransfercontractid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContractID contractID = 1;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractDeleteTransactionBody.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 1));
};


/**
 * @param {?proto.proto.ContractID|undefined} value
 * @return {!proto.proto.ContractDeleteTransactionBody} returns this
*/
proto.proto.ContractDeleteTransactionBody.prototype.setContractid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractDeleteTransactionBody} returns this
 */
proto.proto.ContractDeleteTransactionBody.prototype.clearContractid = function() {
  return this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractDeleteTransactionBody.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountID transferAccountID = 2;
 * @return {?proto.proto.AccountID}
 */
proto.proto.ContractDeleteTransactionBody.prototype.getTransferaccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 2));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.ContractDeleteTransactionBody} returns this
*/
proto.proto.ContractDeleteTransactionBody.prototype.setTransferaccountid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.ContractDeleteTransactionBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractDeleteTransactionBody} returns this
 */
proto.proto.ContractDeleteTransactionBody.prototype.clearTransferaccountid = function() {
  return this.setTransferaccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractDeleteTransactionBody.prototype.hasTransferaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContractID transferContractID = 3;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractDeleteTransactionBody.prototype.getTransfercontractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 3));
};


/**
 * @param {?proto.proto.ContractID|undefined} value
 * @return {!proto.proto.ContractDeleteTransactionBody} returns this
*/
proto.proto.ContractDeleteTransactionBody.prototype.setTransfercontractid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.ContractDeleteTransactionBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ContractDeleteTransactionBody} returns this
 */
proto.proto.ContractDeleteTransactionBody.prototype.clearTransfercontractid = function() {
  return this.setTransfercontractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractDeleteTransactionBody.prototype.hasTransfercontractid = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);
