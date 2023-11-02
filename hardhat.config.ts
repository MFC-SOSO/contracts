import "@nomicfoundation/hardhat-toolbox";
import "tsconfig-paths/register";
import 'hardhat-deploy';
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";
import { BigNumber } from "ethers";
import { getSingletonFactoryInfo } from "@gnosis.pm/safe-singleton-factory";
import * as fs from 'fs';
import { HttpNetworkUserConfig } from "hardhat/types";

const sharedNetworkConfig: HttpNetworkUserConfig = {};
if (fs.existsSync(".secret")) {
  const PK = fs.readFileSync(".secret").toString().trim();
  sharedNetworkConfig.accounts = [PK];
} else if (fs.existsSync(".MNEMONIC")) {
  const MNEMONIC = fs.readFileSync(".MNEMONIC").toString().trim();
  sharedNetworkConfig.accounts = {
    mnemonic: MNEMONIC
  };
} else {
  // hardhat local private key
  sharedNetworkConfig.accounts = [
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
  ];
}

const deterministicDeployment = (network: string) => {
  if (parseInt(network) == 1337) {
    return undefined;
  }
  if (parseInt(network) == 31337) {
    network = "42161";
  }
  if (parseInt(network) == 777) {
    return {
      factory: "0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7",
      deployer: "0xE1CB04A0fA36DdD16a06ea828007E35e1a3cBC37",
      signedTx: "0xf8a78085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3820135a085f489c94262e70d9568f4d99427fe4c8aa38bfc1db00284ba8335c577a83f73a0519952b3403cbddd02532b7a9747ff1612d1889b42a53c63e6b63c20026532a8",
      funding: BigNumber.from(100000).mul(BigNumber.from(100000000000)).toString()
    };
  }
  const info = getSingletonFactoryInfo(parseInt(network));
  if (!info) {
    throw new Error(`
      Safe factory not found for network ${network}. You can request a new deployment at https://github.com/safe-global/safe-singleton-factory.
      For more information, see https://github.com/safe-global/safe-contracts#replay-protection-eip-155
    `);
  }
  return {
    factory: info.address,
    deployer: info.signerAddress,
    funding: BigNumber.from(info.gasLimit).mul(BigNumber.from(info.gasPrice)).toString(),
    signedTx: info.transaction,
  };
};

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  typechain: {
    outDir: "sdk/typechain"
  },
  deterministicDeployment,
  networks: {
    hardhat: {
      forking: {
        url: "https://arb-mainnet.g.alchemy.com/v2/jdIrmXtgYJOL-j89hHRPQVmFUFa5w4Rx",
      },
    },
    localhost: {
      chainId: 31337,
      ...sharedNetworkConfig,
      url: "http://localhost:8545",
    },
    arbitrum: {
      chainId: 42161,
      ...sharedNetworkConfig,
      url: "https://arb-mainnet.g.alchemy.com/v2/LhWLKwBByY8nLuq57UIj6t2OPCSAdwUH",
    },
  }
};

export default config;