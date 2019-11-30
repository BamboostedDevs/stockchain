import { Container } from "unstated";
import UniversalLoginSdk from '@universal-login/sdk'
import { PDexSdk } from "pdex-core/src"

type State = {
  contractAddress?: any;
  privateKey?: any;
  providerUrl: any;
  suffix: string;
};

export class SdkContainer extends Container<State> {
  constructor() {
    super();
    this.state = {
      suffix: ".poppularapp.test",
      providerUrl: "https://kovan.infura.io"
    };
  }

  sdk = new UniversalLoginSdk(
    "https://kovan-relayer.universallogin.io",
    this.state.providerUrl
  );

  async register(username: string) {
    const ensName = username + this.state.suffix;
    const { contractAddress, privateKey } = await walletSDK.createAndDeploy(
      this.sdk,
      ensName
    );
    this.setState({ contractAddress, privateKey });
  }

  async doSmthn(coreAddress: any) {
    const pDexSdk = new PDexSdk(
      this.state.privateKey,
      this.state.contractAddress,
      coreAddress,
      this.state.providerUrl,
      this.sdk
    );
    await pDexSdk.approveBroker("0x1253676373");
  }
}

const sdkContainer = new SdkContainer();
export default sdkContainer;
