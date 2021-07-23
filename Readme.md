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
4. Test 
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
https://keeper.chain.link/kovan/upkeeps/283  //This is stale
https://kovan.etherscan.io/address/0x13BdaFC115314b6D2b4b8E8DFd23A7f1Eeaa206A#code  //LockedCacheGoldAPIConsumer
https://kovan.etherscan.io/address/0xD4b89c118F6D0CE49A81F194540f1b37392c4675#code   //CacheGoldLockedDataCronKeeper

////// TODO:REMEMBER TO SEND THE FINAL ORACLE AND JOB ID TO  CHAINLINK , also check if these are going to change in future and if so we need to accomodate.
//////TODO: Change optimization based on number of calls expected
