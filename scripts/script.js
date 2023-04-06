const hre = require("hardhat")

async function main() {
  const LcCryptoCurrency = await hre.ethers.getContractFactory(
    "LcCryptoCurrency"
  )
  const lcCryptoCurrency = await LcCryptoCurrency.deploy()

  await lcCryptoCurrency.deployed()

  console.log("LcCryptoCurrency deployed to:", lcCryptoCurrency.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
