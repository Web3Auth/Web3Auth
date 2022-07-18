# Torus EVM Wallet Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/torus-evm-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/torus-evm-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/torus-evm-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/torus-evm-adapter@latest)

Torus Wallet adapter allows to connect with torus wallet for evm chains. You can read more about torus wallet
[here](https://docs.tor.us/wallet/get-started).

## Basic Details

- Adapter Name: `torus-evm`

- Package Name: [`@web3auth/torus-evm-adapter`](https://web3auth.io/docs/sdk/web/adapters/torus-evm)

- authMode: `DAPP`

- chainNamespace: `EIP155`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/torus-evm-adapter
```

## Arguments

```ts
// refer to https://docs.tor.us/wallet/sdk/class to know more about interface field types
interface TorusWalletOptions {
  adapterSettings?: TorusCtorArgs;
  loginSettings?: LoginParams;
  initParams?: Omit<TorusParams, "network">;
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";

const torusWalletAdapter = new TorusWalletAdapter({
  adapterSettings: {
    buttonPosition: "bottom-left",
  },
  loginSettings: {
    verifier: "google",
  },
  initParams: {
    buildEnv: "testing",
  },
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x3",
    rpcTarget: "https://ropsten.infura.io/v3/776218ac4734478c90191dde8cae483c",
    displayName: "ropsten",
    blockExplorer: "https://ropsten.etherscan.io/",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
});

// it will add/update  the torus-evm adapter in to web3auth class
web3auth.configureAdapter(torusWalletAdapter);
```
