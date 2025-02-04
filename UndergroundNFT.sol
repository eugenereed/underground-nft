// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UndergroundNFT is ERC721Enumerable, Ownable {
    uint256 public constant MAX_SUPPLY = 2000;
    uint256 public totalMinted = 0;
    string public baseURI;

    constructor(string memory _baseURI) ERC721("Underground NFT", "UGNFT") {
        baseURI = _baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseURI = _newBaseURI;
    }

    function mintBatch(address recipient, uint256 amount) external onlyOwner {
        require(totalMinted + amount <= MAX_SUPPLY, "Exceeds max supply");

        for (uint256 i = 0; i < amount; i++) {
            uint256 tokenId = totalMinted + 1;
            _safeMint(recipient, tokenId);
            totalMinted++;
        }
    }
}
