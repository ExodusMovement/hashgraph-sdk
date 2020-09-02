// source: Response.proto
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

var GetByKey_pb = require('./GetByKey_pb.js');
goog.object.extend(proto, GetByKey_pb);
var GetBySolidityID_pb = require('./GetBySolidityID_pb.js');
goog.object.extend(proto, GetBySolidityID_pb);
var CryptoGetAccountBalance_pb = require('./CryptoGetAccountBalance_pb.js');
goog.object.extend(proto, CryptoGetAccountBalance_pb);
var CryptoGetAccountRecords_pb = require('./CryptoGetAccountRecords_pb.js');
goog.object.extend(proto, CryptoGetAccountRecords_pb);
var CryptoGetInfo_pb = require('./CryptoGetInfo_pb.js');
goog.object.extend(proto, CryptoGetInfo_pb);
var CryptoGetLiveHash_pb = require('./CryptoGetLiveHash_pb.js');
goog.object.extend(proto, CryptoGetLiveHash_pb);
var CryptoGetStakers_pb = require('./CryptoGetStakers_pb.js');
goog.object.extend(proto, CryptoGetStakers_pb);
var TransactionGetReceipt_pb = require('./TransactionGetReceipt_pb.js');
goog.object.extend(proto, TransactionGetReceipt_pb);
var TransactionGetRecord_pb = require('./TransactionGetRecord_pb.js');
goog.object.extend(proto, TransactionGetRecord_pb);
var TransactionGetFastRecord_pb = require('./TransactionGetFastRecord_pb.js');
goog.object.extend(proto, TransactionGetFastRecord_pb);
var NetworkGetVersionInfo_pb = require('./NetworkGetVersionInfo_pb.js');
goog.object.extend(proto, NetworkGetVersionInfo_pb);
goog.exportSymbol('proto.proto.Response', null, { proto });
goog.exportSymbol('proto.proto.Response.ResponseCase', null, { proto });
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
proto.proto.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.Response.oneofGroups_);
};
goog.inherits(proto.proto.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Response.displayName = 'proto.proto.Response';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.Response.oneofGroups_ = [[1,2,7,8,9,10,11,14,15,16,151]];

/**
 * @enum {number}
 */
proto.proto.Response.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  GETBYKEY: 1,
  GETBYSOLIDITYID: 2,
  CRYPTOGETACCOUNTBALANCE: 7,
  CRYPTOGETACCOUNTRECORDS: 8,
  CRYPTOGETINFO: 9,
  CRYPTOGETLIVEHASH: 10,
  CRYPTOGETPROXYSTAKERS: 11,
  TRANSACTIONGETRECEIPT: 14,
  TRANSACTIONGETRECORD: 15,
  TRANSACTIONGETFASTRECORD: 16,
  NETWORKGETVERSIONINFO: 151
};

/**
 * @return {proto.proto.Response.ResponseCase}
 */
proto.proto.Response.prototype.getResponseCase = function() {
  return /** @type {proto.proto.Response.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.proto.Response.oneofGroups_[0]));
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
proto.proto.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    getbykey: (f = msg.getGetbykey()) && GetByKey_pb.GetByKeyResponse.toObject(includeInstance, f),
    getbysolidityid: (f = msg.getGetbysolidityid()) && GetBySolidityID_pb.GetBySolidityIDResponse.toObject(includeInstance, f),
    cryptogetaccountbalance: (f = msg.getCryptogetaccountbalance()) && CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse.toObject(includeInstance, f),
    cryptogetaccountrecords: (f = msg.getCryptogetaccountrecords()) && CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse.toObject(includeInstance, f),
    cryptogetinfo: (f = msg.getCryptogetinfo()) && CryptoGetInfo_pb.CryptoGetInfoResponse.toObject(includeInstance, f),
    cryptogetlivehash: (f = msg.getCryptogetlivehash()) && CryptoGetLiveHash_pb.CryptoGetLiveHashResponse.toObject(includeInstance, f),
    cryptogetproxystakers: (f = msg.getCryptogetproxystakers()) && CryptoGetStakers_pb.CryptoGetStakersResponse.toObject(includeInstance, f),
    transactiongetreceipt: (f = msg.getTransactiongetreceipt()) && TransactionGetReceipt_pb.TransactionGetReceiptResponse.toObject(includeInstance, f),
    transactiongetrecord: (f = msg.getTransactiongetrecord()) && TransactionGetRecord_pb.TransactionGetRecordResponse.toObject(includeInstance, f),
    transactiongetfastrecord: (f = msg.getTransactiongetfastrecord()) && TransactionGetFastRecord_pb.TransactionGetFastRecordResponse.toObject(includeInstance, f),
    networkgetversioninfo: (f = msg.getNetworkgetversioninfo()) && NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse.toObject(includeInstance, f)
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
 * @return {!proto.proto.Response}
 */
proto.proto.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Response;
  return proto.proto.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Response}
 */
proto.proto.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new GetByKey_pb.GetByKeyResponse;
      reader.readMessage(value,GetByKey_pb.GetByKeyResponse.deserializeBinaryFromReader);
      msg.setGetbykey(value);
      break;
    case 2:
      var value = new GetBySolidityID_pb.GetBySolidityIDResponse;
      reader.readMessage(value,GetBySolidityID_pb.GetBySolidityIDResponse.deserializeBinaryFromReader);
      msg.setGetbysolidityid(value);
      break;
    case 7:
      var value = new CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse;
      reader.readMessage(value,CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse.deserializeBinaryFromReader);
      msg.setCryptogetaccountbalance(value);
      break;
    case 8:
      var value = new CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse;
      reader.readMessage(value,CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse.deserializeBinaryFromReader);
      msg.setCryptogetaccountrecords(value);
      break;
    case 9:
      var value = new CryptoGetInfo_pb.CryptoGetInfoResponse;
      reader.readMessage(value,CryptoGetInfo_pb.CryptoGetInfoResponse.deserializeBinaryFromReader);
      msg.setCryptogetinfo(value);
      break;
    case 10:
      var value = new CryptoGetLiveHash_pb.CryptoGetLiveHashResponse;
      reader.readMessage(value,CryptoGetLiveHash_pb.CryptoGetLiveHashResponse.deserializeBinaryFromReader);
      msg.setCryptogetlivehash(value);
      break;
    case 11:
      var value = new CryptoGetStakers_pb.CryptoGetStakersResponse;
      reader.readMessage(value,CryptoGetStakers_pb.CryptoGetStakersResponse.deserializeBinaryFromReader);
      msg.setCryptogetproxystakers(value);
      break;
    case 14:
      var value = new TransactionGetReceipt_pb.TransactionGetReceiptResponse;
      reader.readMessage(value,TransactionGetReceipt_pb.TransactionGetReceiptResponse.deserializeBinaryFromReader);
      msg.setTransactiongetreceipt(value);
      break;
    case 15:
      var value = new TransactionGetRecord_pb.TransactionGetRecordResponse;
      reader.readMessage(value,TransactionGetRecord_pb.TransactionGetRecordResponse.deserializeBinaryFromReader);
      msg.setTransactiongetrecord(value);
      break;
    case 16:
      var value = new TransactionGetFastRecord_pb.TransactionGetFastRecordResponse;
      reader.readMessage(value,TransactionGetFastRecord_pb.TransactionGetFastRecordResponse.deserializeBinaryFromReader);
      msg.setTransactiongetfastrecord(value);
      break;
    case 151:
      var value = new NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse;
      reader.readMessage(value,NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse.deserializeBinaryFromReader);
      msg.setNetworkgetversioninfo(value);
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
proto.proto.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetbykey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      GetByKey_pb.GetByKeyResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetbysolidityid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      GetBySolidityID_pb.GetBySolidityIDResponse.serializeBinaryToWriter
    );
  }
  f = message.getCryptogetaccountbalance();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse.serializeBinaryToWriter
    );
  }
  f = message.getCryptogetaccountrecords();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse.serializeBinaryToWriter
    );
  }
  f = message.getCryptogetinfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      CryptoGetInfo_pb.CryptoGetInfoResponse.serializeBinaryToWriter
    );
  }
  f = message.getCryptogetlivehash();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      CryptoGetLiveHash_pb.CryptoGetLiveHashResponse.serializeBinaryToWriter
    );
  }
  f = message.getCryptogetproxystakers();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      CryptoGetStakers_pb.CryptoGetStakersResponse.serializeBinaryToWriter
    );
  }
  f = message.getTransactiongetreceipt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      TransactionGetReceipt_pb.TransactionGetReceiptResponse.serializeBinaryToWriter
    );
  }
  f = message.getTransactiongetrecord();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      TransactionGetRecord_pb.TransactionGetRecordResponse.serializeBinaryToWriter
    );
  }
  f = message.getTransactiongetfastrecord();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      TransactionGetFastRecord_pb.TransactionGetFastRecordResponse.serializeBinaryToWriter
    );
  }
  f = message.getNetworkgetversioninfo();
  if (f != null) {
    writer.writeMessage(
      151,
      f,
      NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetByKeyResponse getByKey = 1;
 * @return {?proto.proto.GetByKeyResponse}
 */
proto.proto.Response.prototype.getGetbykey = function() {
  return /** @type{?proto.proto.GetByKeyResponse} */ (
    jspb.Message.getWrapperField(this, GetByKey_pb.GetByKeyResponse, 1));
};


/**
 * @param {?proto.proto.GetByKeyResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setGetbykey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearGetbykey = function() {
  return this.setGetbykey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasGetbykey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetBySolidityIDResponse getBySolidityID = 2;
 * @return {?proto.proto.GetBySolidityIDResponse}
 */
proto.proto.Response.prototype.getGetbysolidityid = function() {
  return /** @type{?proto.proto.GetBySolidityIDResponse} */ (
    jspb.Message.getWrapperField(this, GetBySolidityID_pb.GetBySolidityIDResponse, 2));
};


/**
 * @param {?proto.proto.GetBySolidityIDResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setGetbysolidityid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearGetbysolidityid = function() {
  return this.setGetbysolidityid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasGetbysolidityid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CryptoGetAccountBalanceResponse cryptogetAccountBalance = 7;
 * @return {?proto.proto.CryptoGetAccountBalanceResponse}
 */
proto.proto.Response.prototype.getCryptogetaccountbalance = function() {
  return /** @type{?proto.proto.CryptoGetAccountBalanceResponse} */ (
    jspb.Message.getWrapperField(this, CryptoGetAccountBalance_pb.CryptoGetAccountBalanceResponse, 7));
};


/**
 * @param {?proto.proto.CryptoGetAccountBalanceResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setCryptogetaccountbalance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearCryptogetaccountbalance = function() {
  return this.setCryptogetaccountbalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasCryptogetaccountbalance = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CryptoGetAccountRecordsResponse cryptoGetAccountRecords = 8;
 * @return {?proto.proto.CryptoGetAccountRecordsResponse}
 */
proto.proto.Response.prototype.getCryptogetaccountrecords = function() {
  return /** @type{?proto.proto.CryptoGetAccountRecordsResponse} */ (
    jspb.Message.getWrapperField(this, CryptoGetAccountRecords_pb.CryptoGetAccountRecordsResponse, 8));
};


/**
 * @param {?proto.proto.CryptoGetAccountRecordsResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setCryptogetaccountrecords = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearCryptogetaccountrecords = function() {
  return this.setCryptogetaccountrecords(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasCryptogetaccountrecords = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CryptoGetInfoResponse cryptoGetInfo = 9;
 * @return {?proto.proto.CryptoGetInfoResponse}
 */
proto.proto.Response.prototype.getCryptogetinfo = function() {
  return /** @type{?proto.proto.CryptoGetInfoResponse} */ (
    jspb.Message.getWrapperField(this, CryptoGetInfo_pb.CryptoGetInfoResponse, 9));
};


/**
 * @param {?proto.proto.CryptoGetInfoResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setCryptogetinfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearCryptogetinfo = function() {
  return this.setCryptogetinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasCryptogetinfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CryptoGetLiveHashResponse cryptoGetLiveHash = 10;
 * @return {?proto.proto.CryptoGetLiveHashResponse}
 */
proto.proto.Response.prototype.getCryptogetlivehash = function() {
  return /** @type{?proto.proto.CryptoGetLiveHashResponse} */ (
    jspb.Message.getWrapperField(this, CryptoGetLiveHash_pb.CryptoGetLiveHashResponse, 10));
};


/**
 * @param {?proto.proto.CryptoGetLiveHashResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setCryptogetlivehash = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearCryptogetlivehash = function() {
  return this.setCryptogetlivehash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasCryptogetlivehash = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CryptoGetStakersResponse cryptoGetProxyStakers = 11;
 * @return {?proto.proto.CryptoGetStakersResponse}
 */
proto.proto.Response.prototype.getCryptogetproxystakers = function() {
  return /** @type{?proto.proto.CryptoGetStakersResponse} */ (
    jspb.Message.getWrapperField(this, CryptoGetStakers_pb.CryptoGetStakersResponse, 11));
};


/**
 * @param {?proto.proto.CryptoGetStakersResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setCryptogetproxystakers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearCryptogetproxystakers = function() {
  return this.setCryptogetproxystakers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasCryptogetproxystakers = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional TransactionGetReceiptResponse transactionGetReceipt = 14;
 * @return {?proto.proto.TransactionGetReceiptResponse}
 */
proto.proto.Response.prototype.getTransactiongetreceipt = function() {
  return /** @type{?proto.proto.TransactionGetReceiptResponse} */ (
    jspb.Message.getWrapperField(this, TransactionGetReceipt_pb.TransactionGetReceiptResponse, 14));
};


/**
 * @param {?proto.proto.TransactionGetReceiptResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setTransactiongetreceipt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearTransactiongetreceipt = function() {
  return this.setTransactiongetreceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasTransactiongetreceipt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional TransactionGetRecordResponse transactionGetRecord = 15;
 * @return {?proto.proto.TransactionGetRecordResponse}
 */
proto.proto.Response.prototype.getTransactiongetrecord = function() {
  return /** @type{?proto.proto.TransactionGetRecordResponse} */ (
    jspb.Message.getWrapperField(this, TransactionGetRecord_pb.TransactionGetRecordResponse, 15));
};


/**
 * @param {?proto.proto.TransactionGetRecordResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setTransactiongetrecord = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearTransactiongetrecord = function() {
  return this.setTransactiongetrecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasTransactiongetrecord = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional TransactionGetFastRecordResponse transactionGetFastRecord = 16;
 * @return {?proto.proto.TransactionGetFastRecordResponse}
 */
proto.proto.Response.prototype.getTransactiongetfastrecord = function() {
  return /** @type{?proto.proto.TransactionGetFastRecordResponse} */ (
    jspb.Message.getWrapperField(this, TransactionGetFastRecord_pb.TransactionGetFastRecordResponse, 16));
};


/**
 * @param {?proto.proto.TransactionGetFastRecordResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setTransactiongetfastrecord = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearTransactiongetfastrecord = function() {
  return this.setTransactiongetfastrecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasTransactiongetfastrecord = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional NetworkGetVersionInfoResponse networkGetVersionInfo = 151;
 * @return {?proto.proto.NetworkGetVersionInfoResponse}
 */
proto.proto.Response.prototype.getNetworkgetversioninfo = function() {
  return /** @type{?proto.proto.NetworkGetVersionInfoResponse} */ (
    jspb.Message.getWrapperField(this, NetworkGetVersionInfo_pb.NetworkGetVersionInfoResponse, 151));
};


/**
 * @param {?proto.proto.NetworkGetVersionInfoResponse|undefined} value
 * @return {!proto.proto.Response} returns this
*/
proto.proto.Response.prototype.setNetworkgetversioninfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 151, proto.proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Response} returns this
 */
proto.proto.Response.prototype.clearNetworkgetversioninfo = function() {
  return this.setNetworkgetversioninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Response.prototype.hasNetworkgetversioninfo = function() {
  return jspb.Message.getField(this, 151) != null;
};


goog.object.extend(exports, proto.proto);
