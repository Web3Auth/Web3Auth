# Web3Auth Coinbase Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/coinbase-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/coinbase-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/coinbase-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/coinbase-adapter@latest)

Coinbase adapter allows you to connect with coinbase wallet. You can read more about coinbase wallet
here.(https://docs.cloud.coinbase.com/wallet-sdk/docs).

## Basic Details

- Adapter Name: `coinbase`

- Package Name: [`@web3auth/coinbase-adapter`](https://web3auth.io/docs/sdk/web/adapters/coinbase)

- authMode: `DAPP`

- chainNamespace: `EIP155`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/coinbase-adapter
```

## Arguments

```ts
interface CoinbaseAdapterOptions {
  chainConfig?: CustomChainConfig;
  adapterSettings?: CoinbaseWalletSDKOptions;
}
```

### `CoinbaseWalletSDKOptions`

Checkout the [Coinbase Wallet SDK Documentation](https://docs.cloud.coinbase.com/wallet-sdk/docs/initializing#initializing) for these options.

## Example

```ts
import { CoinbaseAdapter } from "@web3auth/coinbase-adapter";
const coinbaseAdapter = new CoinbaseAdapter();
web3auth.configureAdapter(coinbaseAdapter);
```