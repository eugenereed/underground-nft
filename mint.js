const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const [owner] = await ethers.getSigners();
    const contractAddress = "YOUR_CONTRACT_ADDRESS";  // Введи адресу контракту після деплою
    const NFTContract = await ethers.getContractAt("UndergroundNFT", contractAddress);

    console.log(`Карбування 2000 NFT на адресу: ${owner.address} ...`);

    const batchSize = 100;
    for (let i = 0; i < 20; i++) {
        let tx = await NFTContract.mintBatch(owner.address, batchSize);
        await tx.wait();
        console.log(`✅ Карбовано ${batchSize * (i + 1)} NFT`);
    }

    console.log("🎉 2000 NFT успішно випущено!");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
