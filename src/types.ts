import { PublicKey } from "@solana/web3.js";
import { u32, u8, struct } from "@solana/buffer-layout";
import { publicKey, u64, bool } from "@solana/buffer-layout-utils";

// Defining RawMint from https://github.com/solana-labs/solana-program-library/blob/48fbb5b7c49ea35848442bba470b89331dea2b2b/token/js/src/state/mint.ts#L31 //
export interface RawMint {
    mintAuthorityOption: 1 | 0;
    mintAuthority: PublicKey;
    supply: bigint;
    decimals: number;
    isInitialized: boolean;
    freezeAuthorityOption: 1 | 0;
    freezeAuthority: PublicKey;
}

// Defining Buffer Layout from https://github.com/solana-labs/solana-program-library/blob/48fbb5b7c49ea35848442bba470b89331dea2b2b/token/js/src/state/mint.ts#L31 // 

/** Buffer layout for de/serializing a mint */
export const MintLayout = struct<RawMint>([
    u32('mintAuthorityOption'),
    publicKey('mintAuthority'),
    u64('supply'),
    u8('decimals'),
    bool('isInitialized'),
    u32('freezeAuthorityOption'),
    publicKey('freezeAuthority'),
]);