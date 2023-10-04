import { useEffect, useState } from "react";
import { useWeb3 } from "../utils/web3";

const WalletAddress = () => {
  const { accounts, connect } = useWeb3();
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnectWallet = async () => {
    try {
      await connect(); // Connect to MetaMask
      console.log(accounts);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      setWalletAddress(accounts[0]);
    }
  }, [accounts]);

  return (
    <div>
      <h2>Your Wallet Address:</h2>
      {walletAddress ? (
        <p>{walletAddress}</p>
      ) : (
        <button onClick={handleConnectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletAddress;
