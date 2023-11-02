import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface ISharesFeeStoreInterface extends utils.Interface {
    functions: {
        "collectShareFees(address,address,uint256,bool,bytes)": FunctionFragment;
        "getFeePercentage(address)": FunctionFragment;
        "onInstall(address)": FunctionFragment;
        "onUninstall(address)": FunctionFragment;
        "withdrawShareFees(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectShareFees" | "getFeePercentage" | "onInstall" | "onUninstall" | "withdrawShareFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectShareFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFeePercentage", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "onInstall", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "onUninstall", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawShareFees", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "collectShareFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeePercentage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onInstall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onUninstall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawShareFees", data: BytesLike): Result;
    events: {};
}
export interface ISharesFeeStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISharesFeeStoreInterface;
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
        collectShareFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFeePercentage(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        onInstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onUninstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    collectShareFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFeePercentage(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    onInstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onUninstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectShareFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getFeePercentage(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onInstall(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        onUninstall(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        collectShareFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFeePercentage(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        onInstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onUninstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectShareFees(shareId: PromiseOrValue<string>, recipient: PromiseOrValue<string>, fees: PromiseOrValue<BigNumberish>, isBuy: PromiseOrValue<boolean>, feedata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFeePercentage(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onInstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onUninstall(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
