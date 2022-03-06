// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

/* `Box` is owned and governed by DAO - new Values for `Box` are proposed through the DAO */
contract Box is Ownable {
    uint256 private value;

    /* Event is emitted when the stored Value changes */
    event ValueChanged(uint256 newValue);

    /* Only DAO can invoke `store`to save a new Value in the Contract */
    function store(uint256 newValue) public onlyOwner {
        value = newValue;
        emit ValueChanged(newValue);
    }

    /* Everyone can invoke `retrieve` to get the Value in the Contract */
    function retrieve() public view returns (uint256) {
        return value;
    }
}
