import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPowerStore, IPowerStoreInterface } from "../../../contracts/interfaces/IPowerStore";
export declare class IPowerStore__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "injectPower";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IPowerStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPowerStore;
}
