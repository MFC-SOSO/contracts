import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { contracts, tapTx, tapWithEqual, tapWithNotEqual } from '../sdk';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    const Launcher = await deployments.get("Launcher");
    const MFC = await deployments.get("MakeFriendsCoin");

    // USDT token
    let acceptedToken = "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9";
    let operator = "0xC1b965a90fd52e8Ee6222Fc0E15d0424f8f2E44C";

    const launcherI = contracts.Launcher__factory.connect(Launcher.address, await hre.ethers.getSigner(deployer));

    await tapTx(
        tapWithEqual(
            launcherI.getInitializedVersion(),
            1,
            () => launcherI.initialize(operator, MFC.address, acceptedToken)
        )
    );
};
export default func;
func.id = "init_launcher";
func.tags = [
    "Init_Launcher"
];
func.dependencies = [
    "Deploy",
];