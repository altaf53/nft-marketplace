// components/NFTList.js
import { useEffect, useState } from "react";
import { useWeb3 } from "../utils/web3";
import Web3 from "web3";

const NFTList = () => {
  const { accounts, connect } = useWeb3();
  const [nfts, setNFTs] = useState([]);

  const fetchNFTs = async () => {
    let web3;
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const connectetdAccounts = await web3.eth.getAccounts();
    if (connectetdAccounts.length === 0) {
      console.error("No connected wallet found.");
      return;
    }

    try {
      console.log("fetching nft");
      // Use an Ethereum API (like Etherscan) or an Ethereum RPC library
      // to fetch the NFTs owned by the user's Ethereum address.
      // This example demonstrates a simplified approach:

      const response = await fetch(
        `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${connectetdAccounts[0]}`
      );
      const data = await response.json();

      if (data.status === "1") {
        const nftList = data.result;
        console.log("nftList", nftList);
        setNFTs(nftList);
      } else {
        console.error("Error fetching NFTs:", data.message);
      }
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  useEffect(() => {
    if (accounts.length > 0) {
      console.log("nft accounts", accounts);
      fetchNFTs();
    }
  }, [accounts]);

  return (
    <div>
      <button onClick={() => fetchNFTs()}>Fetch NFT</button>
      <h2>Your NFTs:</h2>
      <ul>
        {nfts.map((nft, index) => (
          <li key={index}>{nft.tokenName}</li>
        ))}
      </ul>
    </div>
  );
};

export default NFTList;
