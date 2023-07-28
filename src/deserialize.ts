import { Connection, PublicKey } from "@solana/web3.js";
import { RawMint, MintLayout } from "./types";

async function deserializeMint() {
  const rpc =
    "https://rpc.helius.xyz/?api-key=<api-key>";
  const connection = new Connection(rpc);
  const mint = new PublicKey("6MWfAt3S9Xu4ybxxgPm6e4LSwuXfyAwGXd5yfUqpox9K");

  try {
    let { data } = (await connection.getAccountInfo(mint)) || {};
    if (!data) {
      return;
    }
    console.log(data);
    const deserialize = MintLayout.decode(data)
    // Breaking down the response // 
    console.log(deserialize.mintAuthorityOption)
    console.log(deserialize.mintAuthority.toString())
    console.log(deserialize.decimals)
    console.log(deserialize.isInitialized)
    console.log(deserialize.freezeAuthorityOption)
    console.log(deserialize.freezeAuthority.toString)




  } catch {
    return null;
  }
}
deserializeMint();
