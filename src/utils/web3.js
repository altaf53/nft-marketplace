import { useEffect, useState } from "react";
import Web3 from "web3";

let web3;

const useWeb3 = () => {
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        //   try {
        //     await window.ethereum.enable();
        //     accounts = await web3.eth.getAccounts();
        //     contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        //     setConnected(true);
        //   } catch (error) {
        //     console.error("Error connecting to MetaMask:", error);
        //   }
      }
    };

    initWeb3();
  }, []);

  const connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        let metaAccounts = await web3.eth.getAccounts();
        setAccounts(metaAccounts);
        console.log("accounts", accounts, metaAccounts);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  };

  return { connected, accounts, connect };
};

export { useWeb3 };
