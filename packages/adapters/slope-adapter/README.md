# Slope Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/slope-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/slope-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/slope-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/slope-adapter@latest)

Slope adapter allows you to connect with slope wallet. You can read more about slope wallet here.(https://docs.slope.app/).

## Basic Details

- Adapter Name: `slope`

- Package Name: [`@web3auth/slope-adapter`](https://web3auth.io/docs/sdk/web/adapters/slope)

- authMode: `DAPP`

- chainNamespace: `SOLANA`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/slope-adapter
```

## Arguments

```ts
interface SlopeAdapterOptions {
  chainConfig?: CustomChainConfig;
}
```

## Example

```ts
import { SlopeAdapter } from "@web3auth/slope-adapter";
const slopeAdapter = new SlopeAdapter();
web3auth.configureAdapter(slopeAdapter);
```