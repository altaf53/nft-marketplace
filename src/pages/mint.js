import { useState } from "react";
import { useWeb3 } from "../utils/web3";
import { createNFT } from "../utils/nft";
import { uploadToPinata } from "../utils/pinata";
import Web3 from "web3";

const Mint = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleMint = async () => {
    let web3;
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const connectetdAccounts = await web3.eth.getAccounts();

    if (!connectetdAccounts.length || !file) {
      console.error("Please connect your wallet and upload an image.");
      return;
    }

    // Upload the image to Pinata and get the IPFS URL
    const ipfsUrl = await uploadToPinata(file);

    // Mint the NFT on the Ethereum blockchain
    const tokenId = await createNFT(ipfsUrl, connectetdAccounts[0]);

    console.log(`Minted NFT with ID: ${tokenId}`);
  };

  return (
    <div>
      <h1>Mint NFT</h1>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <button onClick={handleMint}>Mint NFT</button>
    </div>
  );
};

export default Mint;
