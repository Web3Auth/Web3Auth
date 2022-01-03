import { IAdapter, LoginMethodConfig, WALLET_ADAPTERS } from "@web3auth/base";
import type { CustomauthAdapter } from "@web3auth/customauth-adapter";

const OPENLOGIN_PROVIDERS = [
  "google",
  "facebook",
  "twitter",
  "reddit",
  "discord",
  "twitch",
  "apple",
  "line",
  "github",
  "kakao",
  "linkedin",
  "weibo",
  "wechat",
  "email_passwordless",
];
export const getAdapterSocialLogins = (
  adapterName: string,
  adapter: IAdapter<unknown>,
  loginMethodsConfig: Record<string, LoginMethodConfig> = {}
): Record<string, LoginMethodConfig> => {
  const finalLoginMethodsConfig: Record<string, LoginMethodConfig> = {};
  if (adapterName === WALLET_ADAPTERS.CUSTOM_AUTH) {
    const customAuthAdapter = adapter as CustomauthAdapter;
    Object.keys(customAuthAdapter.loginSettings?.loginProviderConfig).forEach((loginMethod) => {
      const currentLoginMethodConfig = loginMethodsConfig[loginMethod] || {};
      finalLoginMethodsConfig[loginMethod] = { ...currentLoginMethodConfig };
    });
  } else if (adapterName === WALLET_ADAPTERS.OPENLOGIN) {
    OPENLOGIN_PROVIDERS.forEach((loginMethod) => {
      const currentLoginMethodConfig = loginMethodsConfig[loginMethod] || {};
      finalLoginMethodsConfig[loginMethod] = { ...currentLoginMethodConfig };
    });
  } else {
    throw new Error(`${adapterName} is not a valid adapter`);
  }
  return finalLoginMethodsConfig;
};