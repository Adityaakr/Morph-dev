import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./contract/contracts",
    tests: "./contract/test",
    cache: "./contract/cache",
    artifacts: "./contract/artifacts"
  },
  networks: {
    morph: {
      url: "https://rpc-quicknode-holesky.morphl2.io",
      accounts: ["4018d6281651978c80c56841b67abc24e62ff0ce6cfea87c1f89e6fe8b4e3bb0"]
    }
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6"
  }
};

export default config;