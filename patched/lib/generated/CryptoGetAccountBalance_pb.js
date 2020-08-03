// source: CryptoGetAccountBalance.proto
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
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.object.extend(proto, ResponseHeader_pb);
goog.exportSymbol('proto.proto.CryptoGetAccountBalanceQuery', null, global);
goog.exportSymbol('proto.proto.CryptoGetAccountBalanceQuery.BalancesourceCase', null, global);
goog.exportSymbol('proto.proto.CryptoGetAccountBalanceResponse', null, global);
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
proto.proto.CryptoGetAccountBalanceQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.CryptoGetAccountBalanceQuery.oneofGroups_);
};
goog.inherits(proto.proto.CryptoGetAccountBalanceQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CryptoGetAccountBalanceQuery.displayName = 'proto.proto.CryptoGetAccountBalanceQuery';
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
proto.proto.CryptoGetAccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoGetAccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CryptoGetAccountBalanceResponse.displayName = 'proto.proto.CryptoGetAccountBalanceResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.CryptoGetAccountBalanceQuery.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.proto.CryptoGetAccountBalanceQuery.BalancesourceCase = {
  BALANCESOURCE_NOT_SET: 0,
  ACCOUNTID: 2,
  CONTRACTID: 3
};

/**
 * @return {proto.proto.CryptoGetAccountBalanceQuery.BalancesourceCase}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.getBalancesourceCase = function() {
  return /** @type {proto.proto.CryptoGetAccountBalanceQuery.BalancesourceCase} */(jspb.Message.computeOneofCase(this, proto.proto.CryptoGetAccountBalanceQuery.oneofGroups_[0]));
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
proto.proto.CryptoGetAccountBalanceQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoGetAccountBalanceQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoGetAccountBalanceQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoGetAccountBalanceQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && QueryHeader_pb.QueryHeader.toObject(includeInstance, f),
    accountid: (f = msg.getAccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
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
 * @return {!proto.proto.CryptoGetAccountBalanceQuery}
 */
proto.proto.CryptoGetAccountBalanceQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoGetAccountBalanceQuery;
  return proto.proto.CryptoGetAccountBalanceQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoGetAccountBalanceQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoGetAccountBalanceQuery}
 */
proto.proto.CryptoGetAccountBalanceQuery.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountid(value);
      break;
    case 3:
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
proto.proto.CryptoGetAccountBalanceQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoGetAccountBalanceQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoGetAccountBalanceQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoGetAccountBalanceQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      QueryHeader_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getAccountid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/**
 * @param {?proto.proto.QueryHeader|undefined} value
 * @return {!proto.proto.CryptoGetAccountBalanceQuery} returns this
*/
proto.proto.CryptoGetAccountBalanceQuery.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CryptoGetAccountBalanceQuery} returns this
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountID accountID = 2;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.getAccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 2));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.CryptoGetAccountBalanceQuery} returns this
*/
proto.proto.CryptoGetAccountBalanceQuery.prototype.setAccountid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.CryptoGetAccountBalanceQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CryptoGetAccountBalanceQuery} returns this
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.clearAccountid = function() {
  return this.setAccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.hasAccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContractID contractID = 3;
 * @return {?proto.proto.ContractID}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 3));
};


/**
 * @param {?proto.proto.ContractID|undefined} value
 * @return {!proto.proto.CryptoGetAccountBalanceQuery} returns this
*/
proto.proto.CryptoGetAccountBalanceQuery.prototype.setContractid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.CryptoGetAccountBalanceQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CryptoGetAccountBalanceQuery} returns this
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.clearContractid = function() {
  return this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoGetAccountBalanceQuery.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.proto.CryptoGetAccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoGetAccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoGetAccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoGetAccountBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    accountid: (f = msg.getAccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    balance: jspb.Message.getFieldWithDefault(msg, 3, "0")
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
 * @return {!proto.proto.CryptoGetAccountBalanceResponse}
 */
proto.proto.CryptoGetAccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoGetAccountBalanceResponse;
  return proto.proto.CryptoGetAccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoGetAccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoGetAccountBalanceResponse}
 */
proto.proto.CryptoGetAccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBalance(value);
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
proto.proto.CryptoGetAccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoGetAccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoGetAccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoGetAccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getAccountid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.proto.ResponseHeader|undefined} value
 * @return {!proto.proto.CryptoGetAccountBalanceResponse} returns this
*/
proto.proto.CryptoGetAccountBalanceResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CryptoGetAccountBalanceResponse} returns this
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountID accountID = 2;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.getAccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 2));
};


/**
 * @param {?proto.proto.AccountID|undefined} value
 * @return {!proto.proto.CryptoGetAccountBalanceResponse} returns this
*/
proto.proto.CryptoGetAccountBalanceResponse.prototype.setAccountid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CryptoGetAccountBalanceResponse} returns this
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.clearAccountid = function() {
  return this.setAccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.hasAccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 balance = 3;
 * @return {string}
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.proto.CryptoGetAccountBalanceResponse} returns this
 */
proto.proto.CryptoGetAccountBalanceResponse.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


goog.object.extend(exports, proto.proto);
