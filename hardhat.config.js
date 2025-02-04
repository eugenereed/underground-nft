require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon_mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon_mainnet: {
      url: process.env.ALCHEMY_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
