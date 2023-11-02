import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFeeWithdraw, IFeeWithdrawInterface } from "../../../contracts/interfaces/IFeeWithdraw";
export declare class IFeeWithdraw__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "withdrawProtocolFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }];
        readonly name: "withdrawShareFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFeeWithdrawInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFeeWithdraw;
}
