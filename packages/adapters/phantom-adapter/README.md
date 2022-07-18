# Phantom Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/phantom-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/phantom-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/phantom-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/phantom-adapter@latest)

Phantom adapter allows you to connect with phantom wallet. You can read more about phantom wallet here.(https://docs.phantom.app/).

## Basic Details

- Adapter Name: `phantom`

- Package Name: [`@web3auth/phantom-adapter`](https://web3auth.io/docs/sdk/web/adapters/phantom)

- authMode: `DAPP`

- chainNamespace: `SOLANA`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/phantom-adapter
```

## Arguments

```ts
interface PhantomAdapterOptions {
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { PhantomAdapter } from "@web3auth/phantom-adapter";
const phantomAdapter = new PhantomAdapter();
web3auth.configureAdapter(phantomAdapter);
```