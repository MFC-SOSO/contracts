import { ERC20, Launcher, MakeFriendsCoin } from './typechain';
import { ILauncher } from './typechain/contracts/Launcher';
import { IExecutor, ExecuteResult } from './types';
import { Signer } from './eoa-executor';
import { BigNumber, Wallet, ethers } from 'ethers';
export declare class SDK {
    private _launcher;
    private _provider;
    private _operator;
    private _signer?;
    private _cachePromises;
    constructor(_launcher: Launcher, _provider: ethers.providers.Provider, _operator: Wallet, _signer?: IExecutor | undefined);
    setCache(c: typeof SDK.prototype._cachePromises): void;
    connect(signer: IExecutor): SDK;
    clone(newProvider: ethers.providers.Provider): SDK;
    getAllContractAddress(): Promise<string[]>;
    connectWithEOA(signer: Signer): SDK;
    _requireConnected(): void;
    static create(_provider: ethers.providers.Provider, _launcherAddr: string, _operator: Wallet): Promise<SDK>;
    mfc(): Promise<MakeFriendsCoin>;
    acceptedToken(): Promise<ERC20>;
    launcher(): Launcher;
    tokenBalanceOf(): Promise<BigNumber>;
    mfcBalanceOf(): Promise<BigNumber>;
    getBuyPrice(amount: BigNumber): Promise<{
        basePrice: BigNumber;
        maxPayPrice: BigNumber;
    }>;
    mfcTransfer(to: string, amount: BigNumber): Promise<ExecuteResult>;
    buy(amount: BigNumber, maxPayPrice: BigNumber): Promise<ExecuteResult>;
    getAvailableMintAmount(): Promise<BigNumber>;
    getRemainBuyAmount(): Promise<BigNumber>;
    getUserEarnClaimable(ue: ILauncher.UserEarnStruct): Promise<BigNumber>;
    earnCliam(ue: ILauncher.UserEarnStruct): Promise<ExecuteResult>;
}
