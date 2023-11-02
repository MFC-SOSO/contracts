import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface ILauncherInterface extends utils.Interface {
    functions: {
        "computeShare2EarnReward(address,address,uint256)": FunctionFragment;
        "getMaxHoldeAmount()": FunctionFragment;
        "getRemainSharePoolAmount()": FunctionFragment;
        "getShare2MultiplyAmount(address)": FunctionFragment;
        "getTribeShare2MultiplyRemainTimes(address)": FunctionFragment;
        "isAuthorized(address)": FunctionFragment;
        "isBlackList(address)": FunctionFragment;
        "launchDone()": FunctionFragment;
        "subShare2MultiplyAmount(address,address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "computeShare2EarnReward" | "getMaxHoldeAmount" | "getRemainSharePoolAmount" | "getShare2MultiplyAmount" | "getTribeShare2MultiplyRemainTimes" | "isAuthorized" | "isBlackList" | "launchDone" | "subShare2MultiplyAmount"): FunctionFragment;
    encodeFunctionData(functionFragment: "computeShare2EarnReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getMaxHoldeAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRemainSharePoolAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getShare2MultiplyAmount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTribeShare2MultiplyRemainTimes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAuthorized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isBlackList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "launchDone", values?: undefined): string;
    encodeFunctionData(functionFragment: "subShare2MultiplyAmount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "computeShare2EarnReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxHoldeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRemainSharePoolAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShare2MultiplyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTribeShare2MultiplyRemainTimes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAuthorized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlackList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "launchDone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subShare2MultiplyAmount", data: BytesLike): Result;
    events: {
        "AcceptedShare2Earn(address,address,uint256,uint256)": EventFragment;
        "BuyMFC(address,uint256,uint256)": EventFragment;
        "EarnMFC(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AcceptedShare2Earn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BuyMFC"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EarnMFC"): EventFragment;
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
export interface ILauncher extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILauncherInterface;
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
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        launchDone(overrides?: CallOverrides): Promise<[boolean]>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMaxHoldeAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getRemainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    launchDone(overrides?: CallOverrides): Promise<boolean>;
    subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        launchDone(overrides?: CallOverrides): Promise<boolean>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AcceptedShare2Earn(address,address,uint256,uint256)"(from?: null, to?: null, amount?: null, reward?: null): AcceptedShare2EarnEventFilter;
        AcceptedShare2Earn(from?: null, to?: null, amount?: null, reward?: null): AcceptedShare2EarnEventFilter;
        "BuyMFC(address,uint256,uint256)"(to?: null, amount?: null, price?: null): BuyMFCEventFilter;
        BuyMFC(to?: null, amount?: null, price?: null): BuyMFCEventFilter;
        "EarnMFC(address,uint256)"(to?: null, amount?: null): EarnMFCEventFilter;
        EarnMFC(to?: null, amount?: null): EarnMFCEventFilter;
    };
    estimateGas: {
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        launchDone(overrides?: CallOverrides): Promise<BigNumber>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        computeShare2EarnReward(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxHoldeAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRemainSharePoolAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShare2MultiplyAmount(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTribeShare2MultiplyRemainTimes(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        launchDone(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        subShare2MultiplyAmount(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rewardAmoumt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
