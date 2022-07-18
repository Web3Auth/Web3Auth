# Solflare Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/solflare-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/solflare-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/solflare-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/solflare-adapter@latest)

Solflare adapter allows you to connect with solflare wallet. You can read more about solflare wallet here.(https://docs.solflare.app/).

## Basic Details

- Adapter Name: `solflare`

- Package Name: [`@web3auth/solflare-adapter`](https://web3auth.io/docs/sdk/web/adapters/solflare)

- authMode: `DAPP`

- chainNamespace: `SOLANA`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/solflare-adapter
```

## Arguments

```ts
interface SolflareAdapterOptions {
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { SolflareAdapter } from "@web3auth/solflare-adapter";
const phantomAdapter = new SolflareAdapter();
web3auth.configureAdapter(phantomAdapter);
```