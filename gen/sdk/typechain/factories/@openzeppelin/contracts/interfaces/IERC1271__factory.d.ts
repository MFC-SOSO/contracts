import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1271, IERC1271Interface } from "../../../../@openzeppelin/contracts/interfaces/IERC1271";
export declare class IERC1271__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IERC1271Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1271;
}
