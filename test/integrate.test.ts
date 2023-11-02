import { ethers } from "hardhat";
import { BigNumber, Wallet } from "ethers";
import {
    contracts,
    SDK
} from '../sdk';
import { deployContract, fund, waitTx } from "./testutils";
import { expect } from "chai";

function tokenFormat(count: number, d = 18): BigNumber {
    return BigNumber.from(10).pow(d).mul(count);
}

describe("integrate", function () {
    const provider = ethers.provider;
    let config: contracts.TestConfig;
    let launcher: contracts.Launcher;
    let mfc: contracts.MakeFriendsCoin;
    let token: contracts.TestToken;
    let sdk: SDK;

    beforeEach(async function () {
        config = await deployContract(provider.getSigner(), contracts.TestConfig__factory);
        launcher = await deployContract(provider.getSigner(), contracts.Launcher__factory, [
            config.address,
        ]);
        token = await deployContract(provider.getSigner(), contracts.TestToken__factory);
        mfc = await deployContract(provider.getSigner(), contracts.MakeFriendsCoin__factory, [
            launcher.address,
        ]);
        const operator = Wallet.createRandom();
        await waitTx(
            launcher.initialize(
                operator.address,
                mfc.address,
                token.address,
            ),
        );
        sdk = await SDK.create(provider, launcher.address, operator);
    });

    it("mint to unauthed", async function () {
        const user = Wallet.createRandom().connect(provider);
        await fund(provider, user.address, "1");
        await expect(sdk.connectWithEOA(user).earnCliam({
            tgId: "123",
            user: user.address,
            earnTotal: tokenFormat(1),
        })).rejectedWith("MFC: only transfer to tribe");
    });

    it("mint to authed", async function () {
        const user = Wallet.createRandom().connect(provider);
        await fund(provider, user.address, "1");
        await waitTx(
            config.mockAuth(user.address)
        );
        const a = await sdk.connectWithEOA(user).earnCliam({
            tgId: "123",
            user: user.address,
            earnTotal: tokenFormat(1),
        });
    });
});