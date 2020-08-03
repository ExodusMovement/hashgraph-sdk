"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const nacl = require("tweetnacl");
const Hbar_1 = require("./Hbar");
const Ed25519PrivateKey_1 = require("./crypto/Ed25519PrivateKey");
const AccountId_1 = require("./account/AccountId");
const AccountBalanceQuery_1 = require("./account/AccountBalanceQuery");
class BaseClient {
    constructor(network, operator) {
        this._nodes = [];
        // Default payment and transaction fees to 1 hbar
        // NOTE: This is a package-private API
        this._maxTransactionFee = new Hbar_1.Hbar(1);
        // NOTE: This is a package-private API
        this._maxQueryPayment = new Hbar_1.Hbar(1);
        this.replaceNodes(network);
        if (operator) {
            if (operator.privateKey != null) {
                this.setOperator(operator.accountId, operator.privateKey);
            }
            else {
                this.setOperatorWith(operator.accountId, operator.publicKey, operator.signer);
            }
        }
    }
    // Add a node to the list of nodes
    // @deprecate `BaseClient.putNode()` is deprecrated. Use `BaseClient.replaceNodes()` instead.
    putNode(id, url) {
        console.warn("`BaseClient.putNode()` is deprecrated. Use `BaseClient.replaceNodes()` instead.");
        this._nodes.push({ id: new AccountId_1.AccountId(id), url });
        return this;
    }
    /** Set the operator for the client object */
    setOperator(account, privateKey) {
        const key = typeof privateKey === "string" ?
            Ed25519PrivateKey_1.Ed25519PrivateKey.fromString(privateKey) :
            privateKey;
        this._operatorAccount = new AccountId_1.AccountId(account);
        this._operatorPublicKey = key.publicKey;
        this._operatorSigner =
            (msg) => nacl.sign.detached(msg, key._keyData);
        return this;
    }
    setOperatorWith(account, publicKey, signer) {
        this._operatorAccount = new AccountId_1.AccountId(account);
        this._operatorPublicKey = publicKey;
        this._operatorSigner = signer;
        return this;
    }
    replaceNodes(network) {
        this._nodes = Array.isArray(network) ?
            network :
            Object.entries(network)
                .map(([url, accountId]) => {
                const id = new AccountId_1.AccountId(accountId);
                return { url, id };
            });
        return this;
    }
    _getOperatorAccountId() {
        return this._operatorAccount;
    }
    _getOperatorSigner() {
        return this._operatorSigner;
    }
    _getOperatorKey() {
        return this._operatorPublicKey;
    }
    /** Get the current maximum transaction fee. */
    get maxTransactionFee() {
        console.warn("deprecated: Client#maxTransactionFee is deprecated for removal with no replacement; please see #184");
        return this._maxTransactionFee;
    }
    /** Get the current maximum query payment. */
    get maxQueryPayment() {
        console.warn("deprecated: Client#maxQueryPayment is deprecated for removal with no replacement; please see #184");
        return this._maxQueryPayment;
    }
    /**
     * Set the default maximum fee for a transaction.
     *
     * This can be overridden for an individual transaction with
     * `TransactionBuilder.setMaxTransactionFee()`.
     *
     * If a transaction's fee will exceed this value, a `HederaStatusError` will be thrown with
     * `ResponseCode.INSUFFICIENT_TX_FEE`.
     *
     * @param maxFee
     */
    setMaxTransactionFee(maxFee) {
        this._maxTransactionFee = maxFee;
        return this;
    }
    /**
     * Set the max payment that can be automatically attached to a query.
     *
     * If this is not called then by default no payments will be made automatically for queries.
     *
     * If a query will cost more than this amount, a `MaxQueryPaymentExceededError` will be thrown
     * from `QueryBuilder.execute()`.
     *
     * This can be overridden for an individual query with
     * `query.setPaymentDefault(await query.requestCost())`.
     *
     * @param maxPayment the maximum automatic payment for a query
     */
    setMaxQueryPayment(maxPayment) {
        this._maxQueryPayment = maxPayment instanceof Hbar_1.Hbar ?
            maxPayment :
            Hbar_1.Hbar.fromTinybar(maxPayment);
        return this;
    }
    /**
     * Get the current account balance.
     * @deprecated `Client.getAccountBalance()` is deprecated with no replacement. Use the `AccountBalanceQuery` directly instead.
     */
    getAccountBalance(id) {
        console.warn("`Client.getAccountBalance()` is deprecated with no replacement. Use the `AccountBalanceQuery` directly instead");
        return new AccountBalanceQuery_1.AccountBalanceQuery()
            .setAccountId(id)
            .execute(this);
    }
    ping(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new AccountBalanceQuery_1.AccountBalanceQuery()
                .setAccountId(id)
                .execute(this);
        });
    }
    _randomNode() {
        return this._nodes[Math.floor(Math.random() * this._nodes.length)];
    }
    _getNode(node) {
        const maybeNode = this._nodes.find((_node) => _node.url === node ||
            typeof node === "object" &&
                _node.id.account === node.account &&
                _node.id.realm === node.realm &&
                _node.id.shard === node.shard);
        if (maybeNode) {
            return maybeNode;
        }
        throw new Error(`could not find node: ${JSON.stringify(node)}`);
    }
}
exports.BaseClient = BaseClient;
