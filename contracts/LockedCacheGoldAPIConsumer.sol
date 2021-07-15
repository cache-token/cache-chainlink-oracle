// SPDX-License-Identifier: MIT
////// REMEMBER TO SEND THE FINAL ORACLE AND JOB ID TO  MICHAEL STONE
pragma solidity ^0.7.0;

import "https://raw.githubusercontent.com/smartcontractkit/chainlink/master/evm-contracts/src/v0.7/ChainlinkClient.sol";

contract LockedCacheGoldAPIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    uint256 public lockedGold;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    
    
    /**
     * Network: Kovan
     * Chainlink - 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e
     * Chainlink - 29fa9aa13bf1468788b7cc4a500a45b8
     * Fee: 0.1 LINK
     */
    constructor() {
        setPublicChainlinkToken();
        oracle = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        jobId = "29fa9aa13bf1468788b7cc4a500a45b8";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }
    
    function requestedLockedData(string memory _pathOfValue) public returns (bytes32 requestId) 
    {
        require(bytes(_pathOfValue).length != 0);
        
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        
        // Set the URL to perform the GET request on and 
        // use 8 decimals for Cache Gold Token
        request.add("get", "https://contract.cache.gold/api/lockedGold");
        request.add("path", _pathOfValue);
        int timesAmount = 10**8;
        request.addInt("times", timesAmount);
        
        // Sends the request
        requestId = sendChainlinkRequestTo(oracle, request, fee);
        return requestId;
    }
    
    /**
     * Receive the response in the form of uint256
     */ 
    function fulfill(bytes32 _requestId, uint256 _lockedGold) public recordChainlinkFulfillment(_requestId)
    {
        // Add check conditions before changing state 
        lockedGold = _lockedGold;
    }
    
}