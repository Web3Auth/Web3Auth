# Openlogin Adapter

[![npm version](https://img.shields.io/npm/v/@web3auth/openlogin-adapter?label=%22%22)](https://www.npmjs.com/package/@web3auth/openlogin-adapter/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/openlogin-adapter?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/openlogin-adapter@latest)


The default adapter of Web3Auth is the [`openlogin-adapter`](../openlogin). This adapter is a wrapper around the
[`openlogin`](https://github.com/torusresearch/openlogin) library from Web3Auth and enables the social login features. By default, Web3Auth has
certain configuration set to enable a quick integration, however, for customising features, like Whitelabel,
Custom Authentication, etc. you need to customise the Openlogin Adapter. With the Openlogin Adapter package installed and
instantiated, you can explore a number of options and can customise the login experience of the user as per your needs.

## Basic Details

- Adapter Name: `openlogin`

- Package Name: [`@web3auth/openlogin-adapter`](https://web3auth.io/docs/sdk/web/openlogin)

- authMode: `WALLET`, `DAPP`

- chainNamespace: `EIP155`,`SOLANA`

- Default: `YES`

## Installation

```shell
npm install --save @web3auth/openlogin-adapter
```

## Instantiation

#### Import the `OpenloginAdapter` class from `@web3auth/openlogin-adapter`

```js
import OpenloginAdapter from "@web3auth/openlogin-adapter";
```

#### Assign the `OpenloginAdapter` class to a variable

```js
const openloginAdapter = new OpenloginAdapter(OpenloginAdapterOptions);
```

This OpenloginAdapter constructor takes an object with `OpenloginAdapterOptions` as input.

## Arguments

#### `OpenloginAdapterOptions`

```ts
interface OpenloginAdapterOptions {
  chainConfig?: CustomChainConfig;
  adapterSettings?: OpenLoginOptions;
  loginSettings?: LoginSettings;
}
```

## Example

### Using with `web3auth/web3auth`

```js
const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    clientId,
    network: "testnet",
    uxMode: "popup",
    whiteLabel: {
      name: "Your app Name",
      logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
      logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
      defaultLanguage: "en",
      dark: true, // whether to enable dark mode. defaultValue: false
    },
    loginConfig: {
      // Add login configs corresponding to the providers on modal
      // Google login
      google: {
        name: "Custom Auth Login",
        verifier: "YOUR_GOOGLE_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
        typeOfLogin: "google", // Pass on the login provider of the verifier you've created
        clientId: "GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
      },
      // Facebook login
      facebook: {
        name: "Custom Auth Login",
        verifier: "YOUR_FACEBOOK_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
        typeOfLogin: "facebook", // Pass on the login provider of the verifier you've created
        clientId: "FACEBOOK_CLIENT_ID_1234567890", // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
      },
      // Add other login providers here
    },
  },
  loginSettings: {
    mfaLevel: "mandatory",
  },
});
web3auth.configureAdapter(openloginAdapter);
```

### Using with `web3auth/core`

```js
const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    clientId,
    network: "testnet",
    uxMode: "popup",
    whiteLabel: {
      name: "Your app Name",
      logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
      logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
      defaultLanguage: "en",
      dark: true, // whether to enable dark mode. defaultValue: false
    },
    loginConfig: {
      jwt: {
        name: "Web3Auth-Auth0-JWT",
        verifier: "web3auth-auth0",
        typeOfLogin: "jwt",
        clientId: "294QRkchfq2YaXUbPri7D6PH7xzHgQMT",
      },
    },
  },
});
web3auth.configureAdapter(openloginAdapter);
```
