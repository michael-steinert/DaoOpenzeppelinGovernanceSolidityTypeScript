// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/* ERC20 Extension that allows to take Snapshots */
/* It has a Tally of how many People how many Tokens hold on different Blocks - for preventing Flash Loans */
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

/* `ERC20Votes` allows to take Snapshot of Tokens People have at a Checkpoint (certain Block) */
/* Snapshots prevent before that someone knows a popular Proposal is coming up, so they just buy lot Tokens, and then they dum it after the Proposal */
contract GovernanceToken is ERC20Votes {
    /* Max Supply is 1000 Token */
    uint256 public maxSupply = 1000 * 10 ** 18;

    constructor() ERC20("GovernanceToken", "GT") ERC20Permit("GovernanceToken"){
        _mint(msg.sender, maxSupply);
    }

    /* Update Balances to know how many Votes People have depending on the Checkpoint (certain Block) */
    function _afterTokenTransfer(address from, address to, uint256 amount) internal override(ERC20Votes) {
        /* `_afterTokenTransfer` of `ERC20Votes` */
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20Votes) {
        /* `_afterTokenTransfer` of `ERC20Votes` */
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20Votes) {
        super._burn(account, amount);
    }
}
