export declare const ed25519PrivKeyPrefix = "302e020100300506032b657004220420";
export declare const ed25519PubKeyPrefix = "302a300506032b6570032100";
export declare const hmacAlgo = "sha384";
/** SLIP-10/BIP-32 child key derivation */
export declare function deriveChildKey2(parentKey: Uint8Array, chainCode: Uint8Array, index: number): Promise<{
    keyBytes: Uint8Array;
    chainCode: Uint8Array;
}>;
/** SLIP-10/BIP-32 child key derivation */
export declare function deriveChildKey(parentKey: Uint8Array, chainCode: Uint8Array, index: number): {
    keyBytes: Uint8Array;
    chainCode: Uint8Array;
};
export declare function arraysEqual(a: Uint8Array, b: Uint8Array): boolean;
