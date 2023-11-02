import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import {
    contracts,
} from '../sdk';
import { deployContract } from "./testutils";
import { expect } from "chai";

function tokenFormat(count: number, d = 18): string {
    return BigNumber.from(10).pow(d).mul(count).toString();
}

describe("Price", function () {
    const provider = ethers.provider;
    let price: contracts.Launcher;

    beforeEach(async function () {
        price = await deployContract(provider.getSigner(), contracts.Launcher__factory, [
            ethers.constants.AddressZero,
        ]);
    });

    it("should return price 1", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](0, tokenFormat(1));
        expect(priceValue).to.equal("101");
    });

    it("should return price 2", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](0, tokenFormat(2));
        expect(priceValue).to.equal("201");
    });

    it("should return price 3", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](0, tokenFormat(3));
        expect(priceValue).to.equal("301");
    });

    it("should return price 1 - 1", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](tokenFormat(1), tokenFormat(1));
        expect(priceValue).to.equal("101");
    });

    it("should return price 5 - 1", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](tokenFormat(5), tokenFormat(1));
        expect(priceValue).to.equal("101");
    });

    it("should return price 0 - 1000000", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](tokenFormat(0), tokenFormat(1000000));
        expect(priceValue).to.equal("100025001");
    });

    it("should return price 1000000 - 1000000", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](tokenFormat(1000000), tokenFormat(1000000));
        expect(priceValue).to.equal("100075001");
    });

    it("should return price 2000000 - 1000000", async function () {
        const priceValue = await price["getPrice(uint256,uint256)"](tokenFormat(2000000), tokenFormat(1000000));
        expect(priceValue).to.equal("100125001");
    });
});