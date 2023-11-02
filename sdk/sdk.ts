import {
    ERC20,
    ERC20__factory,
    Launcher,
    Launcher__factory,
    MakeFriendsCoin,
    MakeFriendsCoin__factory,
} from './typechain';
import {
    ILauncher,
} from './typechain/contracts/Launcher';
import {
    Transaction,
    IExecutor,
    ExecuteResult,
} from './types';
import { EOAExecutor, Signer } from './eoa-executor';
import { BigNumber, Wallet, ethers } from 'ethers';
import { contracts } from '.';
import { resolveProperties } from 'ethers/lib/utils';
import { getUserEarnTypedDataTypesAndValue } from './eip712';

export class SDK {
    private _cachePromises: { [key: string]: Promise<any> } = {};

    constructor(
        private _launcher: Launcher,
        private _provider: ethers.providers.Provider,
        private _operator: Wallet,
        private _signer?: IExecutor,
    ) {

    }

    setCache(c: typeof SDK.prototype._cachePromises): void {
        this._cachePromises = c;
    }

    connect(signer: IExecutor): SDK {
        // @ts-ignore
        const newProvider: ethers.providers.Provider = this._provider;
        const _cloned = new SDK(
            this._launcher,
            newProvider,
            this._operator,
            signer
        );
        _cloned.setCache(this._cachePromises);
        return _cloned;
    }
    clone(newProvider: ethers.providers.Provider): SDK {
        const _cloned = new SDK(
            this._launcher,
            newProvider,
            this._operator,
            this._signer,
        );
        _cloned.setCache(this._cachePromises);
        return _cloned;
    }

    async getAllContractAddress(): Promise<string[]> {
        return [
            this._launcher.address,
        ];
    }

    connectWithEOA(signer: Signer): SDK {
        return this.connect(EOAExecutor.create(
            signer
        ));
    }

    _requireConnected(): void {
        if (!this._signer) {
            throw new Error('SDK not connected');
        }
    }

    static async create(
        _provider: ethers.providers.Provider,
        _launcherAddr: string,
        _operator: Wallet,
    ): Promise<SDK> {
        const launcher = Launcher__factory.connect(_launcherAddr, _provider);
        const sdk = new SDK(
            launcher,
            _provider,
            _operator
        );
        return sdk;
    }

    async mfc(): Promise<MakeFriendsCoin> {
        const cacheKey = "mfc";
        if (!this._cachePromises[cacheKey]) {
            this._cachePromises[cacheKey] = this._launcher.mfc();
        }
        const addr = await this._cachePromises[cacheKey].catch((error) => {
            delete this._cachePromises[cacheKey];
            return Promise.reject(error);
        });
        return MakeFriendsCoin__factory.connect(addr, this._provider);
    }

    async acceptedToken(): Promise<ERC20> {
        const cacheKey = "acceptedToken";
        if (!this._cachePromises[cacheKey]) {
            this._cachePromises[cacheKey] = this._launcher.acceptedToken();
        }
        const addr = await this._cachePromises[cacheKey].catch((error) => {
            delete this._cachePromises[cacheKey];
            return Promise.reject(error);
        });
        return ERC20__factory.connect(addr, this._provider);
    }

    launcher(): Launcher {
        return this._launcher;
    }

    async tokenBalanceOf(): Promise<BigNumber> {
        this._requireConnected();
        const token = await this.acceptedToken();
        const user = await this._signer!.getAddress();
        return token.balanceOf(user);
    }

    async mfcBalanceOf(): Promise<BigNumber> {
        this._requireConnected();
        const token = await this.mfc();
        const user = await this._signer!.getAddress();
        return token.balanceOf(user);
    }

    async getBuyPrice(
        amount: BigNumber,
    ): Promise<{
        basePrice: BigNumber,
        maxPayPrice: BigNumber
    }> {
        const bprice = await this._launcher['getPrice(uint256)'](amount);
        // slipage 1.005
        return {
            basePrice: bprice,
            maxPayPrice: bprice.mul(1005).div(1000),
        };
    }

    async mfcTransfer(to: string, amount: BigNumber): Promise<ExecuteResult> {
        this._requireConnected();
        const mfc = await this.mfc();
        const txns: Transaction[] = [
            {
                to: mfc.address,
                data: mfc.interface.encodeFunctionData("transfer", [
                    to, amount
                ]),
                value: BigNumber.from(0),
            }
        ];
        return this._signer!.execute(txns);
    }

    async buy(
        amount: BigNumber,
        maxPayPrice: BigNumber,
    ): Promise<ExecuteResult> {
        this._requireConnected();
        const [
            user,
            acceptedToken
        ] = await Promise.all([
            this._signer!.getAddress(),
            this.acceptedToken()
        ]);
        const approveData = ERC20__factory.createInterface().encodeFunctionData("approve", [
            this._launcher.address, maxPayPrice
        ]);
        const mintData = contracts.Launcher__factory.createInterface().encodeFunctionData("buy", [
            user, amount, maxPayPrice
        ]);
        const txns: Transaction[] = [
            {
                to: acceptedToken.address,
                data: approveData,
                value: BigNumber.from(0),
            },
            {
                to: this._launcher.address,
                data: mintData,
                value: BigNumber.from(0),
            }
        ];
        return this._signer!.execute(txns);
    }

    async getAvailableMintAmount(): Promise<BigNumber> {
        return this._launcher.remainBuyAmount();
    }

    async getRemainBuyAmount(): Promise<BigNumber> {
        this._requireConnected();
        const [
            user,
        ] = await Promise.all([
            this._signer!.getAddress(),
        ]);
        return this._launcher.getRemainBuyAmount(user);
    }

    async getUserEarnClaimable(ue: ILauncher.UserEarnStruct): Promise<BigNumber> {
        return this._launcher.getEarnClaimable(ue);
    }

    async earnCliam(ue: ILauncher.UserEarnStruct): Promise<ExecuteResult> {
        this._requireConnected();
        const [
            user,
        ] = await Promise.all([
            this._signer!.getAddress(),
        ]);
        const rue = await resolveProperties(ue);
        if (user.toLowerCase() != rue.user.toLowerCase()) {
            throw new Error("user not match");
        }
        const eip712Domain = {
            chainId: await this._provider.getNetwork().then((n) => n.chainId),
            verifyingContract: this._launcher.address,
        }
        const typeData = await getUserEarnTypedDataTypesAndValue(rue);
        const signature = await this._operator._signTypedData(
            eip712Domain,
            typeData.types,
            typeData.value
        );
        const mintData = contracts.Launcher__factory.createInterface().encodeFunctionData("earnMint", [
            rue,
            signature
        ]);
        const txns: Transaction[] = [
            {
                to: this._launcher.address,
                data: mintData,
                value: BigNumber.from(0),
            }
        ];
        return this._signer!.execute(txns);
    }
}