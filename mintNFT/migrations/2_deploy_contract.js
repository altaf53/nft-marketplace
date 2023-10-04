const NFT = artifacts.require("NFT");

module.exports = function (deployer, network, accounts) {
  deployer.then(async () => {
    await deployer.deploy(NFT, "ALTAF", "ALT"); // Replace "MyNFT" and "MNFT" with your desired name and symbol
  });
};
