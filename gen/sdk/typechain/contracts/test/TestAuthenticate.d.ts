import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface TestAuthenticateInterface extends utils.Interface {
    functions: {
        "_TWITTER_TYPEHASH()": FunctionFragment;
        "authorizeTwitter(address,uint256)": FunctionFragment;
        "config()": FunctionFragment;
        "getShareIdByTwitterId(uint256)": FunctionFragment;
        "getShareTwitterId(address)": FunctionFragment;
        "isAuthorized(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_TWITTER_TYPEHASH" | "authorizeTwitter" | "config" | "getShareIdByTwitterId" | "getShareTwitterId" | "isAuthorized"): FunctionFragment;
    encodeFunctionData(functionFragment: "_TWITTER_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "authorizeTwitter", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "getShareIdByTwitterId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getShareTwitterId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAuthorized", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_TWITTER_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizeTwitter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShareIdByTwitterId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShareTwitterId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAuthorized", data: BytesLike): Result;
    events: {
        "Authorized(address,bytes32,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Authorized"): EventFragment;
}
export interface AuthorizedEventObject {
    shareId: string;
    authType: string;
    authId: BigNumber;
}
export type AuthorizedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AuthorizedEventObject>;
export type AuthorizedEventFilter = TypedEventFilter<AuthorizedEvent>;
export interface TestAuthenticate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestAuthenticateInterface;
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
        _TWITTER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        config(overrides?: CallOverrides): Promise<[string]>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    _TWITTER_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    config(overrides?: CallOverrides): Promise<string>;
    getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _TWITTER_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        config(overrides?: CallOverrides): Promise<string>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Authorized(address,bytes32,uint256)"(shareId?: null, authType?: null, authId?: null): AuthorizedEventFilter;
        Authorized(shareId?: null, authType?: null, authId?: null): AuthorizedEventFilter;
    };
    estimateGas: {
        _TWITTER_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<BigNumber>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _TWITTER_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
