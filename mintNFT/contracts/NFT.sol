pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    // Mapping to store IPFS URLs for each NFT token ID
    mapping(uint256 => string) private _tokenIPFSLinks;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mint(address to, uint256 tokenId, string memory ipfsLink) public {
        _mint(to, tokenId);
        _setTokenIPFSLink(tokenId, ipfsLink);
    }

    function getTokenIPFSLink(uint256 tokenId) public view returns (string memory) {
        return _tokenIPFSLinks[tokenId];
    }

    function _setTokenIPFSLink(uint256 tokenId, string memory ipfsLink) internal {
        require(_exists(tokenId), "Token does not exist");
        _tokenIPFSLinks[tokenId] = ipfsLink;
    }
}
