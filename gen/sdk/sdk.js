"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
const typechain_1 = require("./typechain");
const eoa_executor_1 = require("./eoa-executor");
const ethers_1 = require("ethers");
const _1 = require(".");
const utils_1 = require("ethers/lib/utils");
const eip712_1 = require("./eip712");
class SDK {
    constructor(_launcher, _provider, _operator, _signer) {
        this._launcher = _launcher;
        this._provider = _provider;
        this._operator = _operator;
        this._signer = _signer;
        this._cachePromises = {};
    }
    setCache(c) {
        this._cachePromises = c;
    }
    connect(signer) {
        // @ts-ignore
        const newProvider = this._provider;
        const _cloned = new SDK(this._launcher, newProvider, this._operator, signer);
        _cloned.setCache(this._cachePromises);
        return _cloned;
    }
    clone(newProvider) {
        const _cloned = new SDK(this._launcher, newProvider, this._operator, this._signer);
        _cloned.setCache(this._cachePromises);
        return _cloned;
    }
    async getAllContractAddress() {
        return [
            this._launcher.address,
        ];
    }
    connectWithEOA(signer) {
        return this.connect(eoa_executor_1.EOAExecutor.create(signer));
    }
    _requireConnected() {
        if (!this._signer) {
            throw new Error('SDK not connected');
        }
    }
    static async create(_provider, _launcherAddr, _operator) {
        const launcher = typechain_1.Launcher__factory.connect(_launcherAddr, _provider);
        const sdk = new SDK(launcher, _provider, _operator);
        return sdk;
    }
    async mfc() {
        const cacheKey = "mfc";
        if (!this._cachePromises[cacheKey]) {
            this._cachePromises[cacheKey] = this._launcher.mfc();
        }
        const addr = await this._cachePromises[cacheKey].catch((error) => {
            delete this._cachePromises[cacheKey];
            return Promise.reject(error);
        });
        return typechain_1.MakeFriendsCoin__factory.connect(addr, this._provider);
    }
    async acceptedToken() {
        const cacheKey = "acceptedToken";
        if (!this._cachePromises[cacheKey]) {
            this._cachePromises[cacheKey] = this._launcher.acceptedToken();
        }
        const addr = await this._cachePromises[cacheKey].catch((error) => {
            delete this._cachePromises[cacheKey];
            return Promise.reject(error);
        });
        return typechain_1.ERC20__factory.connect(addr, this._provider);
    }
    launcher() {
        return this._launcher;
    }
    async tokenBalanceOf() {
        this._requireConnected();
        const token = await this.acceptedToken();
        const user = await this._signer.getAddress();
        return token.balanceOf(user);
    }
    async mfcBalanceOf() {
        this._requireConnected();
        const token = await this.mfc();
        const user = await this._signer.getAddress();
        return token.balanceOf(user);
    }
    async getBuyPrice(amount) {
        const bprice = await this._launcher['getPrice(uint256)'](amount);
        // slipage 1.005
        return {
            basePrice: bprice,
            maxPayPrice: bprice.mul(1005).div(1000),
        };
    }
    async mfcTransfer(to, amount) {
        this._requireConnected();
        const mfc = await this.mfc();
        const txns = [
            {
                to: mfc.address,
                data: mfc.interface.encodeFunctionData("transfer", [
                    to, amount
                ]),
                value: ethers_1.BigNumber.from(0),
            }
        ];
        return this._signer.execute(txns);
    }
    async buy(amount, maxPayPrice) {
        this._requireConnected();
        const [user, acceptedToken] = await Promise.all([
            this._signer.getAddress(),
            this.acceptedToken()
        ]);
        const approveData = typechain_1.ERC20__factory.createInterface().encodeFunctionData("approve", [
            this._launcher.address, maxPayPrice
        ]);
        const mintData = _1.contracts.Launcher__factory.createInterface().encodeFunctionData("buy", [
            user, amount, maxPayPrice
        ]);
        const txns = [
            {
                to: acceptedToken.address,
                data: approveData,
                value: ethers_1.BigNumber.from(0),
            },
            {
                to: this._launcher.address,
                data: mintData,
                value: ethers_1.BigNumber.from(0),
            }
        ];
        return this._signer.execute(txns);
    }
    async getAvailableMintAmount() {
        return this._launcher.remainBuyAmount();
    }
    async getRemainBuyAmount() {
        this._requireConnected();
        const [user,] = await Promise.all([
            this._signer.getAddress(),
        ]);
        return this._launcher.getRemainBuyAmount(user);
    }
    async getUserEarnClaimable(ue) {
        return this._launcher.getEarnClaimable(ue);
    }
    async earnCliam(ue) {
        this._requireConnected();
        const [user,] = await Promise.all([
            this._signer.getAddress(),
        ]);
        const rue = await (0, utils_1.resolveProperties)(ue);
        if (user.toLowerCase() != rue.user.toLowerCase()) {
            throw new Error("user not match");
        }
        const eip712Domain = {
            chainId: await this._provider.getNetwork().then((n) => n.chainId),
            verifyingContract: this._launcher.address,
        };
        const typeData = await (0, eip712_1.getUserEarnTypedDataTypesAndValue)(rue);
        const signature = await this._operator._signTypedData(eip712Domain, typeData.types, typeData.value);
        const mintData = _1.contracts.Launcher__factory.createInterface().encodeFunctionData("earnMint", [
            rue,
            signature
        ]);
        const txns = [
            {
                to: this._launcher.address,
                data: mintData,
                value: ethers_1.BigNumber.from(0),
            }
        ];
        return this._signer.execute(txns);
    }
}
exports.SDK = SDK;
