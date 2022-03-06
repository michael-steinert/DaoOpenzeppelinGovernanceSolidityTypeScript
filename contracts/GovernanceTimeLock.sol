// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/governance/TimelockController.sol";

/* Contract allows to wait for a new Proposal to be executed - this gives Users the Time to check the Proposal (Governance Update) */
/* Contract holds all Funds and Ownerships */
contract GovernanceTimeLock is TimelockController {
    constructor(
        /* `minDelay` is how long the DAO has to wait before executing the Proposal */
        uint256 minDelay,
        /* List of Addresses that can make a Proposal */
        address[] memory proposers,
        /* List of Addresses that can execute a Proposal - only the `GovernorContract` */
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors) {
    }
}
