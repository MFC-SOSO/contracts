import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();
    const config = "0x25c0f2085377F4705667a2cDD31aa59f87de21b3";

    await deploy("Launcher", {
        contract: "LauncherV2",
        args: [
            config
        ],
        proxy: {
            proxyContract: "ERC1967Proxy",
            checkProxyAdmin: false,
            proxyArgs: [
                "{implementation}",
                "{data}"
            ],
        },
        from: deployer,
        autoMine: false,
        log: true
    });
};
export default func;
func.id = "upgrade_launcher";
func.tags = [
    "Upgrade_Launcher"
]
func.dependencies = [
    "Deploy"
];