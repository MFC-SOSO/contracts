import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAuthenticate, IAuthenticateInterface } from "../../../contracts/interfaces/IAuthenticate";
export declare class IAuthenticate__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "twitterId";
            readonly type: "uint256";
        }];
        readonly name: "authorizeTwitter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "twitterId";
            readonly type: "uint256";
        }];
        readonly name: "getShareIdByTwitterId";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }];
        readonly name: "getShareTwitterId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }];
        readonly name: "isAuthorized";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IAuthenticateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAuthenticate;
}
