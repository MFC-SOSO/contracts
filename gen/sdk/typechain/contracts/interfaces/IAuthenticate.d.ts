import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IAuthenticateInterface extends utils.Interface {
    functions: {
        "authorizeTwitter(address,uint256)": FunctionFragment;
        "getShareIdByTwitterId(uint256)": FunctionFragment;
        "getShareTwitterId(address)": FunctionFragment;
        "isAuthorized(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "authorizeTwitter" | "getShareIdByTwitterId" | "getShareTwitterId" | "isAuthorized"): FunctionFragment;
    encodeFunctionData(functionFragment: "authorizeTwitter", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getShareIdByTwitterId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getShareTwitterId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAuthorized", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "authorizeTwitter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShareIdByTwitterId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShareTwitterId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAuthorized", data: BytesLike): Result;
    events: {};
}
export interface IAuthenticate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAuthenticateInterface;
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
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        authorizeTwitter(shareId: PromiseOrValue<string>, twitterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getShareIdByTwitterId(twitterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShareTwitterId(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAuthorized(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
