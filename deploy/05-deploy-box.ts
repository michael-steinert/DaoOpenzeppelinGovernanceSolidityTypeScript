import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import verify from "../utils/verify";
import {networkConfig, developmentChains} from "../utils/hardhat-config";
import {ethers} from "hardhat";

const deployBox: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {getNamedAccounts, deployments, network} = hre;
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    log("----------------------------------------------------");
    log("Deploying Box and waiting for Confirmations");
    /* Deployment Object `box` that can not invoke Function from Contract `Box` */
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
        /* Waiting some Block Confirmation, so on a Testnet or Mainnet it can be verified properly */
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1
    })
    log(`Box at ${box.address}`);
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(box.address, []);
    }
    /* Contract Object `box` that can invoke Function from Contract `Box` */
    const boxContract = await ethers.getContractAt("Box", box.address);
    const governanceTimeLockContract = await ethers.getContract("GovernanceTimeLock");
    /* Giving Ownership of Contract `Box` from `deployer` to Contract `timeLockContract` */
    const transferTransaction = await boxContract.transferOwnership(governanceTimeLockContract.address);
    await transferTransaction.wait(1);
}

export default deployBox;
deployBox.tags = ["all", "box"];
