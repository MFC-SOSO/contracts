import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IProtocolFeeStoreInterface extends utils.Interface {
    functions: {
        "collectFees(address,address,uint256,bool,bytes)": FunctionFragment;
        "getFeePercentage()": FunctionFragment;
        "onInstall()": FunctionFragment;
        "onUninstall()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectFees" | "getFeePercentage" | "onInstall" | "onUninstall"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFeePercentage", values?: undefined): string;
    encodeFunctionData(functionFragment: "onInstall", values?: undefined): string;
    encodeFunctionData(functionFragment: "onUninstall", values?: undefined): string;
    decodeFunctionResult(functionFragment: "collectFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeePercentage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onInstall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onUninstall", data: BytesLike): Result;
    events: {};
}
export interface IProtocolFeeStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProtocolFeeStoreInterface;
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
        collectFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;
        onInstall(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onUninstall(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    collectFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;
    onInstall(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onUninstall(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;
        onInstall(overrides?: CallOverrides): Promise<void>;
        onUninstall(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        collectFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;
        onInstall(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onUninstall(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFeePercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onInstall(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onUninstall(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
