"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractFunctionParams = void 0;
const bignumber_js_1 = require("bignumber.js");
const ContractFunctionSelector_1 = require("./ContractFunctionSelector");
const utf8 = require("@stablelib/utf8");
const hex = require("@stablelib/hex");
class ContractFunctionParams {
    constructor() {
        this._arguments = [];
        this._selector = new ContractFunctionSelector_1.ContractFunctionSelector();
    }
    addString(value) {
        this._selector.addString();
        return this._addParam(value, true);
    }
    addStringArray(value) {
        this._selector.addStringArray();
        return this._addParam(value, true);
    }
    addBytes(value) {
        this._selector.addBytes();
        return this._addParam(value, true);
    }
    addBytes32(value) {
        if (value.length !== 32) {
            throw new Error(`addBytes32 expected array to be of length 32, but received ${value.length}`);
        }
        this._selector.addBytes32();
        return this._addParam(value, false);
    }
    addBytesArray(value) {
        this._selector.addBytesArray();
        return this._addParam(value, true);
    }
    addBytes32Array(value) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_, entry] of value.entries()) {
            if (entry.length !== 32) {
                throw new Error(`addBytes32 expected array to be of length 32, but received ${entry.length}`);
            }
        }
        this._selector.addBytes32Array();
        return this._addParam(value, true);
    }
    addBool(value) {
        this._selector.addBool();
        return this._addParam(value, false);
    }
    addInt8(value) {
        this._selector.addInt8();
        return this._addParam(value, false);
    }
    addInt32(value) {
        this._selector.addInt32();
        return this._addParam(value, false);
    }
    addInt64(value) {
        this._selector.addInt64();
        return this._addParam(value, false);
    }
    addInt256(value) {
        this._selector.addInt256();
        return this._addParam(value, false);
    }
    addInt8Array(value) {
        this._selector.addInt8Array();
        return this._addParam(value, true);
    }
    addInt32Array(value) {
        this._selector.addInt32Array();
        return this._addParam(value, true);
    }
    addInt64Array(value) {
        this._selector.addInt64Array();
        return this._addParam(value, true);
    }
    addInt256Array(value) {
        this._selector.addInt256Array();
        return this._addParam(value, true);
    }
    addUint8(value) {
        this._selector.addUint8();
        return this._addParam(value, false);
    }
    addUint32(value) {
        this._selector.addUint32();
        return this._addParam(value, false);
    }
    addUint64(value) {
        this._selector.addUint64();
        return this._addParam(value, false);
    }
    addUint256(value) {
        this._selector.addUint256();
        return this._addParam(value, false);
    }
    addUint8Array(value) {
        this._selector.addUint8Array();
        return this._addParam(value, true);
    }
    addUint32Array(value) {
        this._selector.addUint32Array();
        return this._addParam(value, true);
    }
    addUint64Array(value) {
        this._selector.addUint64Array();
        return this._addParam(value, true);
    }
    addUint256Array(value) {
        this._selector.addUint256Array();
        return this._addParam(value, true);
    }
    addAddress(value) {
        // Allow `0x` prefix
        if (value.length !== 40 && value.length !== 42) {
            throw new Error("`address` type requires parameter to be 40 or 42 characters");
        }
        const par = value.length === 40 ?
            hex.decode(value) :
            hex.decode(value.substring(2));
        this._selector.addAddress();
        return this._addParam(par, false);
    }
    addAddressArray(value) {
        const par = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_, entry] of value.entries()) {
            if (entry.length !== 40 && entry.length !== 42) {
                throw new Error("`address` type requires parameter to be 40 or 42 characters");
            }
            const buf = entry.length === 40 ?
                hex.decode(entry) :
                hex.decode(entry.substring(2));
            par.push(buf);
        }
        this._selector.addAddressArray();
        return this._addParam(par, true);
    }
    addFunction(address, selector) {
        const addressParam = hex.decode(address);
        const functionSelector = selector._build(null);
        if (addressParam.length !== 20) {
            throw new Error("`function` type requires parameter `address` to be exactly 20 bytes");
        }
        this._selector.addFunction();
        const proto = new Uint8Array(24);
        proto.set(addressParam, 0);
        proto.set(functionSelector, 20);
        return this._addParam(proto, false);
    }
    _addParam(param, dynamic) {
        const index = this._selector._paramTypes.length - 1;
        const value = argumentToBytes(param, this._selector._paramTypes[index]);
        this._arguments.push({ dynamic, value });
        return this;
    }
    /**
     * NOT A STABLE API
     */
    _build(name) {
        const includeId = name != null;
        const nameOffset = includeId ? 4 : 0;
        const length = this._arguments.length === 0 ?
            nameOffset :
            this._arguments.length * 32 + this._arguments
                .map((arg) => arg.dynamic ? arg.value.length : 0)
                .reduce((sum, value) => sum + value) + nameOffset;
        const func = new Uint8Array(length);
        if (includeId) {
            func.set(this._selector._build(name), 0);
        }
        let offset = 32 * this._arguments.length;
        for (const [i, { dynamic, value }] of this._arguments.entries()) {
            if (dynamic) {
                const view = new DataView(func.buffer, nameOffset + i * 32 + 28);
                view.setUint32(0, offset);
                func.set(value, view.getUint32(0) + nameOffset);
                offset += value.length;
            }
            else {
                func.set(value, nameOffset + i * 32);
            }
        }
        return func;
    }
}
exports.ContractFunctionParams = ContractFunctionParams;
function argumentToBytes(param, ty) {
    let value = new Uint8Array(32);
    let valueView = new DataView(value.buffer, 0);
    if (ty.array) {
        if (!Array.isArray(param)) {
            throw new TypeError("SolidityType indicates type is array, but parameter is not an array");
        }
        const values = [];
        // Generic over any type of array
        // Destructuring required so the first variable must be assigned
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_, p] of param.entries()) {
            const arg = argumentToBytes(p, { ty: ty.ty, array: false });
            values.push(arg);
        }
        const totalLengthOfValues = values
            .map((a) => a.length)
            .reduce((total, current) => total + current);
        switch (ty.ty) {
            case ContractFunctionSelector_1.ArgumentType.uint8:
            case ContractFunctionSelector_1.ArgumentType.int8:
            case ContractFunctionSelector_1.ArgumentType.uint16:
            case ContractFunctionSelector_1.ArgumentType.int16:
            case ContractFunctionSelector_1.ArgumentType.uint32:
            case ContractFunctionSelector_1.ArgumentType.int32:
            case ContractFunctionSelector_1.ArgumentType.uint64:
            case ContractFunctionSelector_1.ArgumentType.int64:
            case ContractFunctionSelector_1.ArgumentType.uint256:
            case ContractFunctionSelector_1.ArgumentType.int256:
            case ContractFunctionSelector_1.ArgumentType.bool:
            case ContractFunctionSelector_1.ArgumentType.bytes32:
            case ContractFunctionSelector_1.ArgumentType.address:
            case ContractFunctionSelector_1.ArgumentType.func:
                value = new Uint8Array(totalLengthOfValues + 32);
                break;
            case ContractFunctionSelector_1.ArgumentType.bytes:
            case ContractFunctionSelector_1.ArgumentType.string:
                value = new Uint8Array(values.length * 32 + totalLengthOfValues + 32);
                break;
            default: throw new TypeError(`Expected param type to be ArgumentType, but received ${ty.ty}`);
        }
        valueView = new DataView(value.buffer, 28);
        valueView.setUint32(0, values.length);
        let offset = 32 * values.length;
        for (const [i, e] of values.entries()) {
            switch (ty.ty) {
                case ContractFunctionSelector_1.ArgumentType.uint8:
                case ContractFunctionSelector_1.ArgumentType.int8:
                case ContractFunctionSelector_1.ArgumentType.uint16:
                case ContractFunctionSelector_1.ArgumentType.int16:
                case ContractFunctionSelector_1.ArgumentType.uint32:
                case ContractFunctionSelector_1.ArgumentType.int32:
                case ContractFunctionSelector_1.ArgumentType.uint64:
                case ContractFunctionSelector_1.ArgumentType.int64:
                case ContractFunctionSelector_1.ArgumentType.uint256:
                case ContractFunctionSelector_1.ArgumentType.int256:
                case ContractFunctionSelector_1.ArgumentType.bool:
                case ContractFunctionSelector_1.ArgumentType.bytes32:
                case ContractFunctionSelector_1.ArgumentType.address:
                case ContractFunctionSelector_1.ArgumentType.func:
                    value.set(e, i * 32 + 32);
                    break;
                case ContractFunctionSelector_1.ArgumentType.bytes:
                case ContractFunctionSelector_1.ArgumentType.string:
                    // eslint-disable-next-line no-case-declarations
                    const view = new DataView(value.buffer, (i + 1) * 32 + 28);
                    view.setUint32(0, offset);
                    value.set(e, view.getUint32(0) + 32);
                    offset += e.length;
                    break;
                default: throw new TypeError(`Expected param type to be ArgumentType, but received ${ty.ty}`);
            }
        }
        return value;
    }
    switch (ty.ty) {
        case ContractFunctionSelector_1.ArgumentType.uint8:
            numberToBytes(param, 31, valueView.setUint8.bind(valueView));
            return value;
        case ContractFunctionSelector_1.ArgumentType.int8:
            numberToBytes(param, 31, valueView.setInt8.bind(valueView));
            return value;
        case ContractFunctionSelector_1.ArgumentType.uint16:
            numberToBytes(param, 30, valueView.setUint16.bind(valueView));
            return value;
        case ContractFunctionSelector_1.ArgumentType.int16:
            numberToBytes(param, 30, valueView.setInt16.bind(valueView));
            return value;
        case ContractFunctionSelector_1.ArgumentType.uint32:
            numberToBytes(param, 28, valueView.setUint32.bind(valueView));
            return value;
        case ContractFunctionSelector_1.ArgumentType.int32:
            numberToBytes(param, 28, valueView.setInt32.bind(valueView));
            return value;
        // int64, uint64, and int256 both expect the parameter to be an Uint8Array instead of number
        case ContractFunctionSelector_1.ArgumentType.uint64:
        case ContractFunctionSelector_1.ArgumentType.int64:
            if (bignumber_js_1.default.isBigNumber(param)) {
                // eslint-disable-next-line no-case-declarations
                let par = param.toString(16);
                if (par.length > 16) {
                    throw new TypeError("uint64/int64 requires BigNumber to be less than or equal to 8 bytes");
                }
                else if (!param.isInteger()) {
                    throw new TypeError("uint64/int64 requires BigNumber to be an integer");
                }
                if (par.length % 2 === 1) {
                    par = `0${par}`;
                }
                // eslint-disable-next-line no-case-declarations
                const buf = hex.decode(par);
                value.set(buf, 32 - buf.length);
            }
            return value;
        case ContractFunctionSelector_1.ArgumentType.int256:
        case ContractFunctionSelector_1.ArgumentType.uint256:
            if (bignumber_js_1.default.isBigNumber(param)) {
                let par = param.toString(16);
                if (par.length % 2 === 1) {
                    par = `0${par}`;
                }
                const buf = hex.decode(par);
                value.set(buf, 32 - buf.length);
            }
            return value;
        case ContractFunctionSelector_1.ArgumentType.address:
            value.set(param, 32 - 20);
            return value;
        case ContractFunctionSelector_1.ArgumentType.bool:
            value[31] = param ? 1 : 0;
            return value;
        case ContractFunctionSelector_1.ArgumentType.func:
            value.set(param, (32 - 24));
            return value;
        case ContractFunctionSelector_1.ArgumentType.bytes32:
            value.set(param, 0);
            return value;
        // Bytes should have not the length already encoded
        // JS String type is encoded as UTF-16 whilst Solidity `string` type is UTF-8 encoded.
        // So if will assume is already correctly updated to being a Uint8Array of UTF-8 string
        case ContractFunctionSelector_1.ArgumentType.bytes:
        case ContractFunctionSelector_1.ArgumentType.string:
            // If value is of type string, encode it in UTF-8 format and conver it to Uint8Array
            // Required because JS Strings are UTF-16
            // eslint-disable-next-line no-case-declarations
            const par = param instanceof Uint8Array ?
                param :
                utf8.encode(param);
            // Resize value to a 32 byte boundary if needed
            if (Math.floor(par.length / 32) >= 0 && Math.floor(par.length % 32) !== 0) {
                value = new Uint8Array((Math.floor(par.length / 32) + 1) * 32 + 32);
            }
            else {
                value = new Uint8Array(64);
            }
            value.set(par, 32);
            valueView = new DataView(value.buffer, 28);
            valueView.setUint32(0, par.length);
            return value;
        default: throw new Error(`Unsupported argument type: ${ty}`);
    }
}
function numberToBytes(param, byteoffset, func) {
    const value = bignumber_js_1.default.isBigNumber(param) ? param.toNumber() : param;
    func(byteoffset, value);
}
