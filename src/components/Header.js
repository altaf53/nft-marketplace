import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/mint">Mint NFT</Link>
      </nav>
    </header>
  );
};

export default Header;
