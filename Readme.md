## Cache Gold Chainlink Oracle 
These are contracts that use the keepers network to ensure that the total locked gold in the cache ecosystem is synced to the chainlink system.  

The keepers network basically allows us to create a cron job on chain. The keepers keep checking the CacheGoldLockedDataCronKeeper.checkUpkeep() function and
if the conditions are met to do a checkUpkeep then the calldata returned from the checkUpkeep() function is passed to the performUpkeep() function.

In our case, we check if the locked Oracle Gold value matches the state stored in the CacheGoldLockedDataCronKeeper contract. If it does we do not perform an upkeep, if
it does not we call LockedCacheGoldAPIConsumer.requestedLockedData() function which will call an api, the api in this case is a wrapper around the value that is reported on our websites
which is based on the lockedGold value from the gramchain system.

## Building
1. Install required modules
```
yarn install
```
2. Setup .env from .env.example
3. Compile
```
npx hardhat compile
```
4. Test (TESTS ARE INCOMPLETE)
```
npx hardhat test
```
5. Deploy changing the network to the correct network and also in deploy.ts point it to the correct Locked Gold Oracle Contract.
```
npx hardhat --network kovan run scripts/deploy.ts
```

## Caveats
1. We need to fund the LockedCacheGoldAPIConsumer with LINK tokens
2. We need to fund the CacheGoldLockedDataCronKeeper with LINK Tokens via the keeper network at https://keeper.chain.link/


## Previous Deployment Data
https://keeper.chain.link/kovan/upkeeps/310 
https://kovan.etherscan.io/address/0xaa23d692D93Ee78fDcDe00618F71840D55929D50#code//LockedCacheGoldAPIConsumer
https://kovan.etherscan.io/address/0x663a06c5E28a43Fd887bDD97ef36458CF82b1f4f#code  //CacheGoldLockedDataCronKeeper

Oracle:
0xEc77e8d3a63D4AC8341dF6Ef4E07d2866fCa83D6
JobID: 42ad0fffcd6a44fdbd58bd8a7a34cdd1
https://market.link/jobs/7138111d-7a7a-4def-a616-633b85b9a285?network=1

//////TODO: Change optimization based on number of calls expected
