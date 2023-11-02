import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProtocolFeeStore, IProtocolFeeStoreInterface } from "../../../contracts/interfaces/IProtocolFeeStore";
export declare class IProtocolFeeStore__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fees";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isBuy";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "feedata";
            readonly type: "bytes";
        }];
        readonly name: "collectFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFeePercentage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "onInstall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "onUninstall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IProtocolFeeStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolFeeStore;
}
