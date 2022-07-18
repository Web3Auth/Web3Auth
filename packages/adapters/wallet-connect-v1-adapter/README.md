# WalletConnect v1 Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/wallet-connect-v1-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/wallet-connect-v1-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/wallet-connect-v1-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/wallet-connect-v1-adapter@latest)

Wallet connect v1 adapter allows you login with wallet connect v1. You can read more about wallet connect [here](https://docs.walletconnect.com/).

## Basic Details

- Adapter Name: `wallet-connect-v1`

- Package Name: [`@web3auth/wallet-connect-v1-adapter`](https://web3auth.io/docs/sdk/web/adapters/wallet-connect-v1)

- authMode: `DAPP`

- chainNamespace: `EIP155`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/wallet-connect-v1-adapter
```

## Arguments

```ts
interface WalletConnectV1AdapterOptions {
  adapterSettings?: IWalletConnectProviderOptions;
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { WalletConnectV1Adapter } from "@web3auth/wallet-connect-v1-adapter";

const walletConnectV1Adapter = new WalletConnectV1Adapter({
  adapterSettings: {
    infuraId: "YOUR_INFURA_ID",
  },
});

web3auth.configureAdapter(walletConnectV1Adapter);
```