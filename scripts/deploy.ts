// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import  { ethers } from "hardhat";
import * as hre from "hardhat";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'../.env' });

const JOBID_DEFAULT = "29fa9aa13bf1468788b7cc4a500a45b8";

async function main() {
  const lockedCacheGoldAPIConsumer = await ethers.getContractFactory("LockedCacheGoldAPIConsumer");
  const _lockedCacheGoldAPIConsumer = await lockedCacheGoldAPIConsumer.deploy(
    process.env.CHAINLINK_ORACLE || '0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e', 
    ethers.utils.toUtf8Bytes(process.env.CHAINLINK_ORACLE_JOB_ID || JOBID_DEFAULT));
  console.log("Deploying LockedCacheGoldAPIConsumer...", _lockedCacheGoldAPIConsumer.address);

  const cacheGoldLockedDataCronKeeper = await ethers.getContractFactory("CacheGoldLockedDataCronKeeper");
  const _cacheGoldLockedDataCronKeeper = await cacheGoldLockedDataCronKeeper.deploy( 
    process.env.LOCKED_GOLD_ORACLE || '0xa77451Ce512c970173fD3Faff316F6EDED1867f6', 
    _lockedCacheGoldAPIConsumer.address);
  console.log("Deploying cacheGoldLockedDataCronKeeper...", _cacheGoldLockedDataCronKeeper.address);

  return {
    '_lockedCacheGoldAPIConsumer':_lockedCacheGoldAPIConsumer.address, 
    '_cacheGoldLockedDataCronKeeper': _cacheGoldLockedDataCronKeeper.address};
}

async function verify(contractAddress:string, ...args:Array<any>) {
  console.log("verifying", contractAddress, ...args);
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
      ...args
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then( async (deployedData) => {
    await new Promise(resolve => setTimeout(resolve, 20000, null));
    await verify(deployedData._cacheGoldLockedDataCronKeeper, 
      process.env.LOCKED_GOLD_ORACLE || '0xa77451Ce512c970173fD3Faff316F6EDED1867f6', 
      deployedData._lockedCacheGoldAPIConsumer); //Verify the cacheGoldLockedDataCronKeeper contract
    await verify(deployedData._lockedCacheGoldAPIConsumer, 
      process.env.CHAINLINK_ORACLE || '0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e', 
      ethers.utils.toUtf8Bytes(process.env.CHAINLINK_ORACLE_JOB_ID || JOBID_DEFAULT) ); //Verify the lockedCacheGoldAPIConsumer contract
    process.exit(0)
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

