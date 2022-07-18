# Metamask Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/metamask-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/metamask-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/metamask-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/metamask-adapter@latest)

Metamask Adapter allows user to login with metamask wallet. You can read more about metamask wallet [here](https://docs.metamask.io/guide/).

## Basic Details

- Adapter Name: `metamask`

- Package Name: [`@web3auth/metamask-adapter`](https://web3auth.io/docs/sdk/web/adapters/metamask)

- authMode: `DAPP`

- chainNamespace: `EIP155`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/metamask-adapter
```

## Arguments

```ts
interface MetamaskAdapterOptions {
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
const metamaskAdapter = new MetamaskAdapter();

// it will add/update  the metamask adapter in to web3auth class
web3auth.configureAdapter(metamaskAdapter);
```
