// test/BoxV2.js
// Load dependencies
import { Wallet } from 'ethers'
import { Contract } from "@ethersproject/contracts";
import { ethers, waffle, network } from "hardhat";
// import { Signer } from "ethers";
import { expect } from "chai";
import { describe } from "mocha";
import { CacheGoldLockedDataCronKeeper } from '../src/types/index';

let cacheGoldLockedDataCronKeeper:CacheGoldLockedDataCronKeeper;

const lockedGoldOracle = '0xa77451Ce512c970173fD3Faff316F6EDED1867f6';

function isLocalEnv(envName: string) {
  return !!({
    hardhat: true,
    localhost: true,
  } as Record<string, true>)[envName];
}

// Start test block
describe('CGT root convertor', function () {
  let wallet: Wallet, other: Wallet;
  let factory:CacheGoldLockedDataCronKeeper;
  let loadFixture: ReturnType<typeof createFixtureLoader>;

  const createFixtureLoader = waffle.createFixtureLoader;
  const fixture = async () => {
    const lockedCacheGoldAPIConsumer = await ethers.getContractFactory("LockedCacheGoldAPIConsumer");
    const _lockedCacheGoldAPIConsumer = await lockedCacheGoldAPIConsumer.deploy();
    console.log("Deploying LockedCacheGoldAPIConsumer...", _lockedCacheGoldAPIConsumer.address);
  
    const _CacheGoldLockedDataCronKeeper = await ethers.getContractFactory("CacheGoldLockedDataCronKeeper");
    const cacheGoldLockedDataCronKeeper = await _CacheGoldLockedDataCronKeeper.deploy(lockedGoldOracle, _lockedCacheGoldAPIConsumer.address) as CacheGoldLockedDataCronKeeper;

    return cacheGoldLockedDataCronKeeper;
  }

  before('create fixture loader', async () => {
    ;[wallet, other] = await (ethers as any).getSigners()

    loadFixture = createFixtureLoader([wallet, other])
  })

  beforeEach('deploy factory', async () => {
    if (isLocalEnv(network.name)) {
    factory = await loadFixture(fixture);
    }
  })

  // Test case
  xit('can fetch the cacheGoldContractAddress', async function () {
    expect(await factory.cacheGoldContractAddress()).equals(lockedGoldOracle);
  });



});