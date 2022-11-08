const { Farcaster } = require("@standard-crypto/farcaster-js");
const { ethers } = require("ethers");
const { AlchemyProvider } = require("@ethersproject/providers");

INFURA_ID = process.env.INFURA_ID;

const provider = new ethers.providers.InfuraProvider("goerli", INFURA_ID);

const main = async () => {
  const farcaster = new Farcaster(provider);
  for await (const activity of farcaster.getAllActivityForUser("dwr", {
    includeRecasts: false,
  })) {
    console.log(activity.body.data.text);
  }
};

main();
