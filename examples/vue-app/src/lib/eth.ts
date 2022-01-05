import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";

export const sendEth = async (provider: SafeEventEmitterProvider, uiConsole: any) => {
  try {
    
    const web3 = new Web3(provider as any);
    const accounts = await web3.eth.getAccounts();
    console.log("pubKey", accounts)
    const txRes = await web3.eth.sendTransaction({ from: accounts[0], to: accounts[0], value: web3.utils.toWei("0.01") })
    uiConsole("txRes", txRes)
  } catch (error) {
    console.log("error", error)
    uiConsole("error", error)
  }
}

export const signEthMessage =  async (provider: SafeEventEmitterProvider, uiConsole: any) =>  {
  try {
    const pubKey = await provider.request({ method: "eth_accounts" })
    const web3 = new Web3();
    web3.setProvider(provider as any)
    // hex message
    const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
    (web3.currentProvider as any)?.send(
      {
        method: "eth_sign",
        params: [pubKey[0], message],
        from: pubKey[0],
      },
      (err: Error, result: any) => {
        if (err) {
          return uiConsole(err);
        }
        uiConsole("sign message => true", result);
      }
    );
  } catch (error) {
    console.log("error", error)
    uiConsole("error", error)
  }
}