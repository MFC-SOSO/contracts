import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { keccak256 } from 'ethers/lib/utils';
import { toUtf8Bytes } from "@ethersproject/strings";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();
    const Launcher = await deployments.get("Launcher");

    await deploy("MakeFriendsCoin", {
        args: [
            Launcher.address,
        ],
        from: deployer,
        autoMine: false,
        log: true
    });
};
export default func;
func.id = "deploy_mfc";
func.tags = [
    "MFC",
    "Deploy"
]
func.dependencies = [
    "Launcher"
];