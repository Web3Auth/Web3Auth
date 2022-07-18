# Sollet Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/sollet-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/sollet-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/sollet-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/sollet-adapter@latest)

Sollet adapter allows you to connect with sollet wallet. You can read more about sollet wallet
here.(https://github.com/project-serum/spl-token-wallet).

## Basic Details

- Adapter Name: `sollet`

- Package Name: [`@web3auth/sollet-adapter`](https://web3auth.io/docs/sdk/web/adapters/sollet)

- authMode: `DAPP`

- chainNamespace: `SOLANA`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/sollet-adapter
```

## `SolletWebAdapter`

### Arguments

```ts
export declare class SolletWebAdapter extends BaseSolletAdapter {
  readonly name: string;
  constructor({ provider, ...options }?: SolletAdapterOptions);
}
export interface SolletAdapterOptions {
  chainConfig?: CustomChainConfig;
  provider?: string;
}
export declare class BaseSolletAdapter extends BaseAdapter<void> {
  readonly name: string;
  readonly adapterNamespace: AdapterNamespaceType;
  readonly currentChainNamespace: ChainNamespaceType;
  readonly type: ADAPTER_CATEGORY_TYPE;
  status: ADAPTER_STATUS_TYPE;
  _wallet: SolletWallet | null;
  protected _provider: string | SolletProvider | undefined;
  private solletProvider;
  private rehydrated;
  constructor({ provider, chainConfig }?: SolletAdapterOptions);
  get isWalletConnected(): boolean;
  get provider(): SafeEventEmitterProvider | null;
  init(options: AdapterInitOptions): Promise<void>;
  connect(): Promise<SafeEventEmitterProvider | null>;
  disconnect(options?: { cleanup: boolean }): Promise<void>;
  getUserInfo(): Promise<Partial<UserInfo>>;
  private connectWithProvider;
  private _onDisconnect;
}
export interface SolletProvider {
  postMessage(...args: unknown[]): unknown;
}
```

## Example

```ts
import { SolletWebAdapter } from "@web3auth/sollet-adapter";
const solletWebAdapter = new SolletWebAdapter();
web3auth.configureAdapter(solletWebAdapter);
```

### `SolletExtensionAdapter`

```ts
import { SolletExtensionAdapter } from "@web3auth/sollet-adapter";
const solletExtensionAdapter = new SolletExtensionAdapter();
web3auth.configureAdapter(solletExtensionAdapter);
```