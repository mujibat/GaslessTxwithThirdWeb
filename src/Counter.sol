// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "../lib/openzeppelin-contracts/contracts/metatx/ERC2771Context.sol";
contract Counter is ERC2771Context{
    uint256 public number;
    address public lastcaller;
    address _trusted;
     constructor(address trustedForwarder_) ERC2771Context(trustedForwarder_) {
        _trusted = trustedForwarder_;
    }


    function setNumber(uint256 newNumber) public {
        lastcaller = _msgSender();
        number = newNumber;
    }

    function increment() public {
        lastcaller = _msgSender();
        number++;
    }
     function decrement() public {
        lastcaller = _msgSender();
        number--;
    }
    function getLastCaller() public view returns (address) {
        return lastcaller;
    }
}
