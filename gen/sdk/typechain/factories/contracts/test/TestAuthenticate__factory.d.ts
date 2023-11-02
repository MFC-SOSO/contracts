import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { TestAuthenticate, TestAuthenticateInterface } from "../../../contracts/test/TestAuthenticate";
type TestAuthenticateConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestAuthenticate__factory extends ContractFactory {
    constructor(...args: TestAuthenticateConstructorParams);
    deploy(_config: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestAuthenticate>;
    getDeployTransaction(_config: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestAuthenticate;
    connect(signer: Signer): TestAuthenticate__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161050a38038061050a83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610477806100936000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630a1c9e851461006757806352fa0cfd146100975780636b6d0cc2146100ba57806379502c55146100cf578063b4bf0b7b146100e2578063fe9fbb80146100f5575b600080fd5b61007a6100753660046103a0565b610131565b6040516001600160a01b0390911681526020015b60405180910390f35b6100ac60008051602061042283398151915281565b60405190815260200161008e565b6100cd6100c83660046103d5565b610160565b005b60005461007a906001600160a01b031681565b6100ac6100f03660046103ff565b6102e7565b6101216101033660046103ff565b6001600160a01b031660009081526001602052604090205460ff1690565b604051901515815260200161008e565b6000600360006101408461035f565b81526020810191909152604001600020546001600160a01b031692915050565b6001600160a01b03821660009081526002602090815260408083206000805160206104228339815191528452909152902054156101d95760405162461bcd60e51b8152602060048201526012602482015271185b1c9958591e48185d5d1a1bdc9a5e995960721b60448201526064015b60405180910390fd5b60006101e48261035f565b6000818152600360205260409020549091506001600160a01b0316156102415760405162461bcd60e51b8152602060048201526012602482015271185b1c9958591e48185d5d1a1bdc9a5e995960721b60448201526064016101d0565b6001600160a01b0383166000818152600160208181526040808420805460ff191690931790925560028152818320600080516020610422833981519152808552908252828420879055858452600382529282902080546001600160a01b03191685179055815193845283019190915281018390527f3e79e103ac535dd86ef7b93da2949adb337367b7692b650bbc8ddecf8cbd72649060600160405180910390a1505050565b6001600160a01b038116600090815260026020908152604080832060008051602061042283398151915284529091528120548082036103595760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b60448201526064016101d0565b92915050565b604080516000805160206104228339815191526020820152908101829052600090606001604051602081830303815290604052805190602001209050919050565b6000602082840312156103b257600080fd5b5035919050565b80356001600160a01b03811681146103d057600080fd5b919050565b600080604083850312156103e857600080fd5b6103f1836103b9565b946020939093013593505050565b60006020828403121561041157600080fd5b61041a826103b9565b939250505056fed69e921de4e0d5601a72cfa188816d31cee3cd6303a8d13b6bdcc7fa98ff4671a2646970667358221220b21cb67c185f42be2ee212b7f1a2f7d112b11aa185e44fb3d3d56f3a207705a564736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConfig";
            readonly name: "_config";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "shareId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "authType";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "authId";
            readonly type: "uint256";
        }];
        readonly name: "Authorized";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "_TWITTER_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
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
            readonly name: "twitterId";
            readonly type: "uint256";
        }];
        readonly name: "authorizeTwitter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "config";
        readonly outputs: readonly [{
            readonly internalType: "contract IConfig";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
    static createInterface(): TestAuthenticateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAuthenticate;
}
export {};
