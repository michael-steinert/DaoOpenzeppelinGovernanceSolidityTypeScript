import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import {ethers} from "hardhat";

const setupContracts: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {getNamedAccounts, deployments} = hre;
    const {log} = deployments;
    const {deployer} = await getNamedAccounts();
    await ethers.getContract("GovernanceToken", deployer);
    const governanceTimeLock = await ethers.getContract("GovernanceTimeLock", deployer);
    const governorContract = await ethers.getContract("GovernorContract", deployer);
    log("----------------------------------------------------");
    log("Setting up Smart Contracts for Roles");
    /* Alternative: using a Multicall to TimeLock Contract */
    const proposerRole = await governanceTimeLock.PROPOSER_ROLE();
    const executorRole = await governanceTimeLock.EXECUTOR_ROLE();
    const adminRole = await governanceTimeLock.TIMELOCK_ADMIN_ROLE();
    /* `deployer` owns the Contract `timeLockContract` so he can change the Roles */
    /* Only Contract `governorContract` can create a Proposal */
    const proposerTransaction = await governanceTimeLock.grantRole(proposerRole, governorContract.address);
    await proposerTransaction.wait(1);
    /* Everyone can execute a Proposal after the TimeLock Period */
    const executorTransaction = await governanceTimeLock.grantRole(executorRole, ethers.constants.AddressZero);
    await executorTransaction.wait(1);
    /* `deployer` does not own the Contract `timeLockContract` anymore, so he can not change the Roles */
    const revokeTransaction = await governanceTimeLock.revokeRole(adminRole, deployer);
    await revokeTransaction.wait(1);
    /* Now, every Action that the Contract TimeLock wants to do has to go through the Governance Process */
}

export default setupContracts;
setupContracts.tags = ["all", "setup"];
