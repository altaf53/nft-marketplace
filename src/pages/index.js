import Head from "next/head";
import Header from "../components/Header";
import WalletAddress from "../components/WalletAddress";
import NFTList from "@/components/NFTList";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to the NFT Marketplace</h1>
        <WalletAddress />
        {/* Display NFTs here */}
        <NFTList />
      </main>
    </div>
  );
};

export default Home;
