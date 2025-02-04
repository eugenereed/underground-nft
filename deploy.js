const hre = require("hardhat");

async function main() {
    const NFTContract = await hre.ethers.getContractFactory("UndergroundNFT");
    const contract = await NFTContract.deploy("ipfs://YOUR_METADATA_CID/");

    await contract.deployed();
    console.log("✅ Контракт розгорнуто за адресою:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
