# Torus Solana Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/torus-solana-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/torus-solana-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/torus-solana-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/torus-solana-adapter@latest)

Torus solana adapter allows to connect with torus wallet for solana blockchain. You can read more about torus wallet
[here](https://docs.tor.us/solana-wallet/get-started).

## Basic Details

- Adapter Name: `torus-solana`

- Package Name: [`@web3auth/torus-solana-adapter`](https://web3auth.io/docs/sdk/web/adapters/torus-solana)

- authMode: `DAPP`

- chainNamespace: `SOLANA`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/torus-solana-adapter
```

## Arguments

```ts
// refer to https://docs.tor.us/solana-wallet/sdk/class to know more about interface field types
interface SolanaWalletOptions {
  adapterSettings?: TorusCtorArgs;
  loginSettings?: LoginParams;
  initParams?: Omit<TorusParams, "network">;
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { SolanaWalletAdapter } from "@web3auth/torus-solana-adapter";
const solanaWalletAdapter = new SolanaWalletAdapter({
  adapterSettings: {
    modalZIndex: 99999,
  },
  loginSettings: {
    loginProvider: "google",
  },
  initParams: {
    buildEnv: "testing",
  },
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: "https://api.testnet.solana.com",
    blockExplorer: "https://explorer.solana.com",
    chainId: "0x2",
    displayName: "testnet",
    ticker: "sol",
    tickerName: "solana",
  },
});

// it will add/update  the torus-solana adapter in to web3auth class
web3auth.configureAdapter(solanaWalletAdapter);
```