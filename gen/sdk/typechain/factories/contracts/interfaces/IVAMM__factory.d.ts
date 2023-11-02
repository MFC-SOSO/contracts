import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVAMM, IVAMMInterface } from "../../../contracts/interfaces/IVAMM";
export declare class IVAMM__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "protocolFees";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "shareOwnerFees";
            readonly type: "uint256";
        }];
        readonly name: "CollectFees";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isBuy";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Trade";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMarketPrice";
            readonly type: "uint256";
        }];
        readonly name: "UpdateMarketPrice";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldProtocolFeeStore";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newProtocolFeeStore";
            readonly type: "address";
        }];
        readonly name: "UpdateProtocolFeeStore";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldShareFeeStore";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newShareFeeStore";
            readonly type: "address";
        }];
        readonly name: "UpdateShareFeeStore";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "mintAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPayAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "recipients";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "protocolFeeData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "shareFeeData";
            readonly type: "bytes";
        }];
        readonly name: "aggregateMint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "brunAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minReceiveAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "protocolFeeData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "shareFeeData";
            readonly type: "bytes";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }];
        readonly name: "getShareFeeStore";
        readonly outputs: readonly [{
            readonly internalType: "contract ISharesFeeStore";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "mintAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPayAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "protocolFeeData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "shareFeeData";
            readonly type: "bytes";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISharesFeeStore";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "shareInitialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
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
    static createInterface(): IVAMMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVAMM;
}
