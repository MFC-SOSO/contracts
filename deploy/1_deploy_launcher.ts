import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { keccak256 } from 'ethers/lib/utils';
import { toUtf8Bytes } from "@ethersproject/strings";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();
    const config = "0x25c0f2085377F4705667a2cDD31aa59f87de21b3";

    await deploy("Launcher", {
        deterministicDeployment: keccak256(toUtf8Bytes("Launcher")),
        args: [
            config
        ],
        proxy: {
            proxyContract: "ERC1967Proxy",
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
func.id = "deploy_launcher";
func.tags = [
    "Launcher",
    "Deploy"
]
func.dependencies = [
];