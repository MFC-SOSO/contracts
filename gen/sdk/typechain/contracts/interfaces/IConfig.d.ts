import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IConfigInterface extends utils.Interface {
    functions: {
        "acceptedToken()": FunctionFragment;
        "getAuthenticate()": FunctionFragment;
        "getSequencer()": FunctionFragment;
        "getShares()": FunctionFragment;
        "getVAMM()": FunctionFragment;
        "owner()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptedToken" | "getAuthenticate" | "getSequencer" | "getShares" | "getVAMM" | "owner"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptedToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAuthenticate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSequencer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVAMM", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptedToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthenticate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSequencer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVAMM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    events: {};
}
export interface IConfig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConfigInterface;
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
        acceptedToken(overrides?: CallOverrides): Promise<[string]>;
        getAuthenticate(overrides?: CallOverrides): Promise<[string]>;
        getSequencer(overrides?: CallOverrides): Promise<[string]>;
        getShares(overrides?: CallOverrides): Promise<[string]>;
        getVAMM(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
    };
    acceptedToken(overrides?: CallOverrides): Promise<string>;
    getAuthenticate(overrides?: CallOverrides): Promise<string>;
    getSequencer(overrides?: CallOverrides): Promise<string>;
    getShares(overrides?: CallOverrides): Promise<string>;
    getVAMM(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        acceptedToken(overrides?: CallOverrides): Promise<string>;
        getAuthenticate(overrides?: CallOverrides): Promise<string>;
        getSequencer(overrides?: CallOverrides): Promise<string>;
        getShares(overrides?: CallOverrides): Promise<string>;
        getVAMM(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;
        getAuthenticate(overrides?: CallOverrides): Promise<BigNumber>;
        getSequencer(overrides?: CallOverrides): Promise<BigNumber>;
        getShares(overrides?: CallOverrides): Promise<BigNumber>;
        getVAMM(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAuthenticate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSequencer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVAMM(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
