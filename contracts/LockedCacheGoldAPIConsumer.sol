// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LockedCacheGoldAPIConsumer is ChainlinkClient, Ownable {
    using Chainlink for Chainlink.Request;
    uint256 public lockedGold;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    constructor() {
        setPublicChainlinkToken();
        oracle = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        jobId = "29fa9aa13bf1468788b7cc4a500a45b8";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }
    
    function requestedLockedData(string memory _pathOfValue) public returns (bytes32 requestId) 
    {
        require(bytes(_pathOfValue).length != 0, "Requested path is not valid");
        
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        
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
     *  @dev modifier recordChainlinkFulfillment reverts if the sender is not the oracle of the request.
     */ 
    function fulfill(bytes32 _requestId, uint256 _lockedGold) public recordChainlinkFulfillment(_requestId)
    {
        require(_lockedGold >= 1, "Locked Gold has to have a value greater than or atleast equal to 1");
        lockedGold = _lockedGold;
    }

 /**
     * Receive the response in the form of uint256
     *  @dev withdrawLINK function to be called by owner if required to withdraw LINK tokens
     */ 
    function withdrawLINK() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
    }

    
}