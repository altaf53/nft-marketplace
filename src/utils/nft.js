import Web3 from "web3";
import { ABI } from "../../NFT";

const ETHEREUM_RPC_URL =
  "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
const CONTRACT_ADDRESS = "0x5BEc482AA0cE2bb6a712b88B99D2822f4c35F274";

const createNFT = async (ipfsLink, owner) => {
  const web3 = new Web3(new Web3.providers.HttpProvider(ETHEREUM_RPC_URL));
  const MyContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

  const tokenId = Math.floor(Math.random() * 10000);

  await MyContract.methods.mint(owner, tokenId, ipfsLink).send({ from: owner });

  return tokenId;
};

export { createNFT };
