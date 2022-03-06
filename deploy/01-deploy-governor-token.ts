import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import verify from "../utils/verify";
import {networkConfig, developmentChains} from "../utils/hardhat-config";
import {ethers} from "hardhat";

const deployGovernanceToken: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    /* Getting from `hardhat.config.ts` the `deployer` Account which is the Account with Index 0 */
    const {deployer} = await getNamedAccounts();
    log("----------------------------------------------------");
    log("Deploying GovernanceToken and waiting for Confirmations");
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        /* Waiting some Block Confirmation, so on a Testnet or Mainnet it can be verified properly */
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1
    });
    log(`GovernanceToken at ${governanceToken.address}`);
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(governanceToken.address, []);
    }
    log(`Delegating to ${deployer} in Process`);
    await delegate(governanceToken.address, deployer);
    log("Delegated");
}

/* Delegating a Vote from one User to another */
const delegate = async (governanceTokenAddress: string, delegatedAccount: string) => {
    const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress);
    const delegateTransaction = await governanceToken.delegate(delegatedAccount);
    /* Transaction will be confirmed by one Block */
    await delegateTransaction.wait(1);
    /* `numCheckpoints()` from `ERC20Votes` keep a Mapping over how many Checkpoints an Address (User) has */
    /* Votes are based on Checkpoints - everytime a Vote Token is delegated (or transferred) a Checkpoint is created */
    /* Each Checkpoint represent how much Vote Tokens (Voting Power) each User has */
    /* Updating Checkpoints is much cheaper than updating Blocks */
    console.log(`Checkpoints: ${await governanceToken.numCheckpoints(delegatedAccount)}`);
}

export default deployGovernanceToken;
deployGovernanceToken.tags = ["all", "governor"];
