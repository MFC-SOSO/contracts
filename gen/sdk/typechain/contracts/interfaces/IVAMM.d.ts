import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IVAMMInterface extends utils.Interface {
    functions: {
        "aggregateMint(address,uint256,uint256,address[],bytes,bytes)": FunctionFragment;
        "burn(address,uint256,uint256,address,bytes,bytes)": FunctionFragment;
        "getShareFeeStore(address)": FunctionFragment;
        "mint(address,uint256,uint256,address,bytes,bytes)": FunctionFragment;
        "shareInitialize(address,address)": FunctionFragment;
        "withdrawProtocolFees()": FunctionFragment;
        "withdrawShareFees(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregateMint" | "burn" | "getShareFeeStore" | "mint" | "shareInitialize" | "withdrawProtocolFees" | "withdrawShareFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregateMint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getShareFeeStore", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "shareInitialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawShareFees", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "aggregateMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShareFeeStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shareInitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawShareFees", data: BytesLike): Result;
    events: {
        "CollectFees(address,address,uint256,uint256)": EventFragment;
        "Trade(address,bool,address,uint256)": EventFragment;
        "UpdateMarketPrice(address,uint256)": EventFragment;
        "UpdateProtocolFeeStore(address,address)": EventFragment;
        "UpdateShareFeeStore(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CollectFees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateMarketPrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateProtocolFeeStore"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateShareFeeStore"): EventFragment;
}
export interface CollectFeesEventObject {
    shareId: string;
    trader: string;
    protocolFees: BigNumber;
    shareOwnerFees: BigNumber;
}
export type CollectFeesEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], CollectFeesEventObject>;
export type CollectFeesEventFilter = TypedEventFilter<CollectFeesEvent>;
export interface TradeEventObject {
    trader: string;
    isBuy: boolean;
    shareId: string;
    amount: BigNumber;
}
export type TradeEvent = TypedEvent<[
    string,
    boolean,
    string,
    BigNumber
], TradeEventObject>;
export type TradeEventFilter = TypedEventFilter<TradeEvent>;
export interface UpdateMarketPriceEventObject {
    shareId: string;
    newMarketPrice: BigNumber;
}
export type UpdateMarketPriceEvent = TypedEvent<[
    string,
    BigNumber
], UpdateMarketPriceEventObject>;
export type UpdateMarketPriceEventFilter = TypedEventFilter<UpdateMarketPriceEvent>;
export interface UpdateProtocolFeeStoreEventObject {
    oldProtocolFeeStore: string;
    newProtocolFeeStore: string;
}
export type UpdateProtocolFeeStoreEvent = TypedEvent<[
    string,
    string
], UpdateProtocolFeeStoreEventObject>;
export type UpdateProtocolFeeStoreEventFilter = TypedEventFilter<UpdateProtocolFeeStoreEvent>;
export interface UpdateShareFeeStoreEventObject {
    shareId: string;
    oldShareFeeStore: string;
    newShareFeeStore: string;
}
export type UpdateShareFeeStoreEvent = TypedEvent<[
    string,
    string,
    string
], UpdateShareFeeStoreEventObject>;
export type UpdateShareFeeStoreEventFilter = TypedEventFilter<UpdateShareFeeStoreEvent>;
export interface IVAMM extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVAMMInterface;
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
        aggregateMint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipients: PromiseOrValue<string>[], protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(shareId: PromiseOrValue<string>, brunAmount: PromiseOrValue<BigNumberish>, minReceiveAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getShareFeeStore(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        mint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        shareInitialize(shareId: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawProtocolFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    aggregateMint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipients: PromiseOrValue<string>[], protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(shareId: PromiseOrValue<string>, brunAmount: PromiseOrValue<BigNumberish>, minReceiveAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getShareFeeStore(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    mint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    shareInitialize(shareId: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawProtocolFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        aggregateMint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipients: PromiseOrValue<string>[], protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        burn(shareId: PromiseOrValue<string>, brunAmount: PromiseOrValue<BigNumberish>, minReceiveAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getShareFeeStore(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        mint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        shareInitialize(shareId: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawProtocolFees(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CollectFees(address,address,uint256,uint256)"(shareId?: null, trader?: PromiseOrValue<string> | null, protocolFees?: null, shareOwnerFees?: null): CollectFeesEventFilter;
        CollectFees(shareId?: null, trader?: PromiseOrValue<string> | null, protocolFees?: null, shareOwnerFees?: null): CollectFeesEventFilter;
        "Trade(address,bool,address,uint256)"(trader?: PromiseOrValue<string> | null, isBuy?: null, shareId?: null, amount?: null): TradeEventFilter;
        Trade(trader?: PromiseOrValue<string> | null, isBuy?: null, shareId?: null, amount?: null): TradeEventFilter;
        "UpdateMarketPrice(address,uint256)"(shareId?: null, newMarketPrice?: null): UpdateMarketPriceEventFilter;
        UpdateMarketPrice(shareId?: null, newMarketPrice?: null): UpdateMarketPriceEventFilter;
        "UpdateProtocolFeeStore(address,address)"(oldProtocolFeeStore?: null, newProtocolFeeStore?: null): UpdateProtocolFeeStoreEventFilter;
        UpdateProtocolFeeStore(oldProtocolFeeStore?: null, newProtocolFeeStore?: null): UpdateProtocolFeeStoreEventFilter;
        "UpdateShareFeeStore(address,address,address)"(shareId?: null, oldShareFeeStore?: null, newShareFeeStore?: null): UpdateShareFeeStoreEventFilter;
        UpdateShareFeeStore(shareId?: null, oldShareFeeStore?: null, newShareFeeStore?: null): UpdateShareFeeStoreEventFilter;
    };
    estimateGas: {
        aggregateMint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipients: PromiseOrValue<string>[], protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(shareId: PromiseOrValue<string>, brunAmount: PromiseOrValue<BigNumberish>, minReceiveAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getShareFeeStore(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        shareInitialize(shareId: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawProtocolFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregateMint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipients: PromiseOrValue<string>[], protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(shareId: PromiseOrValue<string>, brunAmount: PromiseOrValue<BigNumberish>, minReceiveAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getShareFeeStore(shareId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shareId: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, maxPayAmount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, protocolFeeData: PromiseOrValue<BytesLike>, shareFeeData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        shareInitialize(shareId: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawProtocolFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawShareFees(shareId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
