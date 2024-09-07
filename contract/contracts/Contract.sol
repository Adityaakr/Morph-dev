// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter { 
    int256 public count;
    constructor(){
        count = 0;
    }

   function getCount() public view returns (int256){
    return count;
   }

   function increment() public {
    count += 1;
   }

   function decrement() public{
    count -= 1;
   }
}