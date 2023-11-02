import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace ILauncher {
    type UserEarnStruct = {
        tgId: PromiseOrValue<BigNumberish>;
        user: PromiseOrValue<string>;
        earnTotal: PromiseOrValue<BigNumberish>;
    };
    type UserEarnStructOutput = [BigNumber, string, BigNumber] & {
        tgId: BigNumber;
        user: string;
        earnTotal: BigNumber;
    };
}
export interface LauncherV2Interface extends utils.Interface {
    functions: {
        "_USER_EARN_MINT_TX_TYPEHASH()": FunctionFragment;
        "acceptedToken()": FunctionFragment;
        "buy(address,uint256,uint256)": FunctionFragment;
        "computeShare2EarnReward(address,address,uint256)": FunctionFragment;
        "config()": FunctionFragment;
        "earnMint((uint256,address,uint256),bytes)": FunctionFragment;
        "getEarnClaimable((uint256,address,uint256))": FunctionFragment;
        "getInitializedVersion()": FunctionFragment;
        "getMaxHoldeAmount()": FunctionFragment;
        "getPrice(uint256,uint256)": FunctionFragment;
        "getPrice(uint256)": FunctionFragment;
        "getRemainBuyAmount(address)": FunctionFragment;
        "getRemainEarnAmount(uint256)": FunctionFragment;
        "getRemainSharePoolAmount()": FunctionFragment;
        "getShare2MultiplyAmount(address)": FunctionFragment;
        "getTribeShare2MultiplyRemainTimes(address)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "isAuthorized(address)": FunctionFragment;
        "isBlackList(address)": FunctionFragment;
        "launchDone()": FunctionFragment;
        "maxBuyAmount()": FunctionFragment;
        "maxEarnAmount()": FunctionFragment;
        "mfc()": FunctionFragment;
        "operator()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "remainBuyAmount()": FunctionFragment;
        "remainSharePoolAmount()": FunctionFragment;
        "setBlackList(address,bool)": FunctionFragment;
        "setOperator(address)": FunctionFragment;
        "subShare2MultiplyAmount(address,address,uint256,uint256)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "withdrawLPToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_USER_EARN_MINT_TX_TYPEHASH" | "acceptedToken" | "buy" | "computeShare2EarnReward" | "config" | "earnMint" | "getEarnClaimable" | "getInitializedVersion" | "getMaxHoldeAmount" | "getPrice(uint256,uint256)" | "getPrice(uint256)" | "getRemainBuyAmount" | "getRemainEarnAmount" | "getRemainSharePoolAmount" | "getShare2MultiplyAmount" | "getTribeShare2MultiplyRemainTimes" | "initialize" | "isAuthorized" | "isBlackList" | "launchDone" | "maxBuyAmount" | "maxEarnAmount" | "mfc" | "operator" | "proxiableUUID" | "remainBuyAmount" | "remainSharePoolAmount" | "setBlackList" | "setOperator" | "subShare2MultiplyAmount" | "upgradeTo" | "upgradeToAndCall" | "withdrawLPToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "_USER_EARN_MINT_TX_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptedToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "buy", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "computeShare2EarnReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "earnMint", values: [ILauncher.UserEarnStruct, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getEarnClaimable", values: [ILauncher.UserEarnStruct]): string;
    encodeFunctionData(functionFragment: "getInitializedVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxHoldeAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPrice(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRemainBuyAmount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRemainEarnAmount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRemainSharePoolAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getShare2MultiplyAmount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTribeShare2MultiplyRemainTimes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isAuthorized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isBlackList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "launchDone", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxBuyAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxEarnAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "mfc", values?: undefined): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "remainBuyAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "remainSharePoolAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBlackList", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "subShare2MultiplyAmount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withdrawLPToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_USER_EARN_MINT_TX_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptedToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeShare2EarnReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earnMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEarnClaimable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitializedVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxHoldeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRemainBuyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRemainEarnAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRemainSharePoolAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShare2MultiplyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTribeShare2MultiplyRemainTimes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAuthorized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlackList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "launchDone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxBuyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxEarnAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mfc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainBuyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainSharePoolAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBlackList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subShare2MultiplyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawLPToken", data: BytesLike): Result;
    events: {
        "AcceptedShare2Earn(address,address,uint256,uint256)": EventFragment;
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "BuyMFC(address,uint256,uint256)": EventFragment;
        "EarnMFC(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AcceptedShare2Earn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BuyMFC"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EarnMFC"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AcceptedShare2EarnEventObject {
    from: string;
    to: string;
    amount: BigNumber;
    reward: BigNumber;
}
export type AcceptedShare2EarnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], AcceptedShare2EarnEventObject>;
export type AcceptedShare2EarnEventFilter = TypedEventFilter<AcceptedShare2EarnEvent>;
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface BuyMFCEventObject {
    to: string;
    amount: BigNumber;
    price: BigNumber;
}
export type BuyMFCEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], BuyMFCEventObject>;
export type BuyMFCEventFilter = TypedEventFilter<BuyMFCEvent>;
export interface EarnMFCEventObject {
    to: string;
    amount: BigNumber;
}
export type EarnMFCEvent = TypedEvent<[string, BigNumber], EarnMFCEventObject>;
export type EarnMFCEventFilter = TypedEventFilter<EarnMFCEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface LauncherV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LauncherV2Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _USER_EARN_MINT_TX_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        acceptedToken(overrides?: CallOverrides): Promise<[string]>;
        buy(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        config(overrides?: CallOverrides): Promise<[string]>;
        earnMint(ue: ILauncher.UserEarnStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getEarnClaimable(ue: ILauncher.UserEarnStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        getInitializedVersion(overrides?: CallOverrides): Promise<[number]>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        "getPrice(uint256,uint256)"(supply: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "getPrice(uint256)"(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRemainBuyAmount(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRemainEarnAmount(tgId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_operator: PromiseOrValue<string>, _mfc: PromiseOrValue<string>, _acceptedToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        launchDone(overrides?: CallOverrides): Promise<[boolean]>;
        maxBuyAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxEarnAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        mfc(overrides?: CallOverrides): Promise<[string]>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        remainBuyAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        remainSharePoolAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        setBlackList(account: PromiseOrValue<string>, isBlack: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOperator(operator_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawLPToken(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _USER_EARN_MINT_TX_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    acceptedToken(overrides?: CallOverrides): Promise<string>;
    buy(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    config(overrides?: CallOverrides): Promise<string>;
    earnMint(ue: ILauncher.UserEarnStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getEarnClaimable(ue: ILauncher.UserEarnStruct, overrides?: CallOverrides): Promise<BigNumber>;
    getInitializedVersion(overrides?: CallOverrides): Promise<number>;
    getMaxHoldeAmount(overrides?: CallOverrides): Promise<BigNumber>;
    "getPrice(uint256,uint256)"(supply: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "getPrice(uint256)"(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getRemainBuyAmount(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRemainEarnAmount(tgId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getRemainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_operator: PromiseOrValue<string>, _mfc: PromiseOrValue<string>, _acceptedToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    launchDone(overrides?: CallOverrides): Promise<boolean>;
    maxBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;
    maxEarnAmount(overrides?: CallOverrides): Promise<BigNumber>;
    mfc(overrides?: CallOverrides): Promise<string>;
    operator(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    remainBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;
    remainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
    setBlackList(account: PromiseOrValue<string>, isBlack: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOperator(operator_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawLPToken(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _USER_EARN_MINT_TX_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        acceptedToken(overrides?: CallOverrides): Promise<string>;
        buy(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<string>;
        earnMint(ue: ILauncher.UserEarnStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getEarnClaimable(ue: ILauncher.UserEarnStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getInitializedVersion(overrides?: CallOverrides): Promise<number>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<BigNumber>;
        "getPrice(uint256,uint256)"(supply: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getPrice(uint256)"(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRemainBuyAmount(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRemainEarnAmount(tgId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_operator: PromiseOrValue<string>, _mfc: PromiseOrValue<string>, _acceptedToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        launchDone(overrides?: CallOverrides): Promise<boolean>;
        maxBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;
        maxEarnAmount(overrides?: CallOverrides): Promise<BigNumber>;
        mfc(overrides?: CallOverrides): Promise<string>;
        operator(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        remainBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;
        remainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
        setBlackList(account: PromiseOrValue<string>, isBlack: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setOperator(operator_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        withdrawLPToken(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AcceptedShare2Earn(address,address,uint256,uint256)"(from?: null, to?: null, amount?: null, reward?: null): AcceptedShare2EarnEventFilter;
        AcceptedShare2Earn(from?: null, to?: null, amount?: null, reward?: null): AcceptedShare2EarnEventFilter;
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "BuyMFC(address,uint256,uint256)"(to?: null, amount?: null, price?: null): BuyMFCEventFilter;
        BuyMFC(to?: null, amount?: null, price?: null): BuyMFCEventFilter;
        "EarnMFC(address,uint256)"(to?: null, amount?: null): EarnMFCEventFilter;
        EarnMFC(to?: null, amount?: null): EarnMFCEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        _USER_EARN_MINT_TX_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;
        buy(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<BigNumber>;
        earnMint(ue: ILauncher.UserEarnStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getEarnClaimable(ue: ILauncher.UserEarnStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getInitializedVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<BigNumber>;
        "getPrice(uint256,uint256)"(supply: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getPrice(uint256)"(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRemainBuyAmount(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRemainEarnAmount(tgId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_operator: PromiseOrValue<string>, _mfc: PromiseOrValue<string>, _acceptedToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        launchDone(overrides?: CallOverrides): Promise<BigNumber>;
        maxBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;
        maxEarnAmount(overrides?: CallOverrides): Promise<BigNumber>;
        mfc(overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        remainBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;
        remainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
        setBlackList(account: PromiseOrValue<string>, isBlack: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOperator(operator_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawLPToken(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _USER_EARN_MINT_TX_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buy(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, maxPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        earnMint(ue: ILauncher.UserEarnStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getEarnClaimable(ue: ILauncher.UserEarnStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitializedVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getPrice(uint256,uint256)"(supply: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getPrice(uint256)"(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRemainBuyAmount(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRemainEarnAmount(tgId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_operator: PromiseOrValue<string>, _mfc: PromiseOrValue<string>, _acceptedToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        launchDone(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxBuyAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxEarnAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mfc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remainBuyAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remainSharePoolAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBlackList(account: PromiseOrValue<string>, isBlack: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOperator(operator_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawLPToken(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
