"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeFriendsCoin__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ILauncher",
                name: "_launcher",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "launcher",
        outputs: [
            {
                internalType: "contract ILauncher",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxTotalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b50604051620016b8380380620016b88339810160408190526200003491620000bf565b6040518060400160405280601181526020017026b0b5b290233934b2b732399021b7b4b760791b815250604051806040016040528060038152602001624d464360e81b81525081600390816200008b919062000196565b5060046200009a828262000196565b5050506001600160a01b03166080526b33b2e3c9fd0803ce8000000060a05262000262565b600060208284031215620000d257600080fd5b81516001600160a01b0381168114620000ea57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011c57607f821691505b6020821081036200013d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200019157600081815260208120601f850160051c810160208610156200016c5750805b601f850160051c820191505b818110156200018d5782815560010162000178565b5050505b505050565b81516001600160401b03811115620001b257620001b2620000f1565b620001ca81620001c3845462000107565b8462000143565b602080601f831160018114620002025760008415620001e95750858301515b600019600386901b1c1916600185901b1785556200018d565b600085815260208120601f198616915b82811015620002335788860151825594840194600190910190840162000212565b5085821015620002525787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a0516113ea620002ce600039600081816101af0152610b3001526000818161014b0152818161038c01528181610a6801528181610bc601528181610c6901528181610db201528181610eac01528181610f5101528181610ff4015261105601526113ea6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806340c10f191161009757806395d89b411161006657806395d89b4114610257578063a457c2d71461025f578063a9059cbb14610272578063dd62ed3e1461028557600080fd5b806340c10f19146101f357806342966c681461020857806370a082311461021b57806379cc67901461024457600080fd5b806323b872dd116100d357806323b872dd146101975780632ab4d052146101aa578063313ce567146101d157806339509351146101e057600080fd5b806306fdde0314610105578063095ea7b31461012357806316eebd1e1461014657806318160ddd14610185575b600080fd5b61010d610298565b60405161011a9190611195565b60405180910390f35b6101366101313660046111ff565b61032a565b604051901515815260200161011a565b61016d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161011a565b6002545b60405190815260200161011a565b6101366101a5366004611229565b610344565b6101897f000000000000000000000000000000000000000000000000000000000000000081565b6040516012815260200161011a565b6101366101ee3660046111ff565b610368565b6102066102013660046111ff565b61038a565b005b610206610216366004611265565b610415565b61018961022936600461127e565b6001600160a01b031660009081526020819052604090205490565b6102066102523660046111ff565b610422565b61010d610437565b61013661026d3660046111ff565b610446565b6101366102803660046111ff565b6104c1565b610189610293366004611299565b6104cf565b6060600380546102a7906112cc565b80601f01602080910402602001604051908101604052809291908181526020018280546102d3906112cc565b80156103205780601f106102f557610100808354040283529160200191610320565b820191906000526020600020905b81548152906001019060200180831161030357829003601f168201915b5050505050905090565b6000336103388185856104fa565b60019150505b92915050565b60003361035285828561061f565b61035d858585610699565b506001949350505050565b60003361033881858561037b83836104cf565b6103859190611306565b6104fa565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633146104075760405162461bcd60e51b815260206004820152601f60248201527f4d46433a2063616c6c6572206973206e6f7420746865206c61756e636865720060448201526064015b60405180910390fd5b6104118282610848565b5050565b61041f3382610913565b50565b61042d82338361061f565b6104118282610913565b6060600480546102a7906112cc565b6000338161045482866104cf565b9050838110156104b45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103fe565b61035d82868684036104fa565b600033610338818585610699565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661055c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fe565b6001600160a01b0382166105bd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fe565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061062b84846104cf565b9050600019811461069357818110156106865760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103fe565b61069384848484036104fa565b50505050565b6001600160a01b0383166106fd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fe565b6001600160a01b03821661075f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fe565b61076a838383610a49565b6001600160a01b038316600090815260208190526040902054818110156107e25760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103fe565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610693565b6001600160a01b03821661089e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fe565b6108aa60008383610a49565b80600260008282546108bc9190611306565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166109735760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103fe565b61097f82600083610a49565b6001600160a01b038216600090815260208190526040902054818110156109f35760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103fe565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610612565b60405163b36d691960e01b81526001600160a01b0384811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063b36d691990602401602060405180830381865afa158015610aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad39190611327565b15610b205760405162461bcd60e51b815260206004820152601a60248201527f4d46433a2066726f6d20697320696e20626c61636b206c69737400000000000060448201526064016103fe565b6001600160a01b038316610bc4577f000000000000000000000000000000000000000000000000000000000000000081610b5960025490565b610b639190611306565b1115610bc45760405162461bcd60e51b815260206004820152602a60248201527f4d46433a20746f74616c20737570706c792065786365656473206d617820746f60448201526974616c20737570706c7960b01b60648201526084016103fe565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c7a74a736040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190611327565b611178576040516301fd3f7760e71b81526001600160a01b0383811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063fe9fbb8090602401602060405180830381865afa158015610cb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd49190611327565b610d205760405162461bcd60e51b815260206004820152601b60248201527f4d46433a206f6e6c79207472616e7366657220746f207472696265000000000060448201526064016103fe565b6001600160a01b0383161561117857816001600160a01b0316836001600160a01b031603610d905760405162461bcd60e51b815260206004820152601c60248201527f4d46433a20646f206e6f74207472616e7366657220746f2073656c660000000060448201526064016103fe565b60405163061c9ad960e31b81526001600160a01b0383811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906330e4d6c890602401602060405180830381865afa158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f9190611349565b11610e865760405162461bcd60e51b815260206004820152603160248201527f4d46433a20746172676574207472696265207368617265326561726e2072656d60448201527061696e2074696d6573206973207a65726f60781b60648201526084016103fe565b604051637bc2221f60e11b81526001600160a01b038481166004830152600091610f1d917f0000000000000000000000000000000000000000000000000000000000000000169063f784443e90602401602060405180830381865afa158015610ef3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f179190611349565b8361117d565b6040516306a49ce160e51b81526001600160a01b0386811660048301528581166024830152604482018390529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063d4939c2090606401602060405180830381865afa158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190611349565b604051634ff1b90760e01b81526001600160a01b038781166004830152868116602483015260448201859052606482018390529192507f000000000000000000000000000000000000000000000000000000000000000090911690634ff1b90790608401600060405180830381600087803b15801561103a57600080fd5b505af115801561104e573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166371d922a36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d69190611349565b905080846110f9876001600160a01b031660009081526020819052604090205490565b6111039190611306565b11156111215760405162461bcd60e51b81526004016103fe90611362565b8082611142886001600160a01b031660009081526020819052604090205490565b61114c9190611306565b111561116a5760405162461bcd60e51b81526004016103fe90611362565b6111748683610848565b5050505b505050565b600081831061118c578161118e565b825b9392505050565b600060208083528351808285015260005b818110156111c2578581018301518582016040015282016111a6565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146111fa57600080fd5b919050565b6000806040838503121561121257600080fd5b61121b836111e3565b946020939093013593505050565b60008060006060848603121561123e57600080fd5b611247846111e3565b9250611255602085016111e3565b9150604084013590509250925092565b60006020828403121561127757600080fd5b5035919050565b60006020828403121561129057600080fd5b61118e826111e3565b600080604083850312156112ac57600080fd5b6112b5836111e3565b91506112c3602084016111e3565b90509250929050565b600181811c908216806112e057607f821691505b60208210810361130057634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561033e57634e487b7160e01b600052601160045260246000fd5b60006020828403121561133957600080fd5b8151801515811461118e57600080fd5b60006020828403121561135b57600080fd5b5051919050565b60208082526032908201527f4d46433a207461726765742074726962652062616c616e6365206578636565646040820152711cc81b585e081a1bdb191948185b5bdd5b9d60721b60608201526080019056fea2646970667358221220ccc408a3b42f02d3ff3af2e578a6abd5d12c8bae586da725855398601ec8647764736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
class MakeFriendsCoin__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_launcher, overrides) {
        return super.deploy(_launcher, overrides || {});
    }
    getDeployTransaction(_launcher, overrides) {
        return super.getDeployTransaction(_launcher, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MakeFriendsCoin__factory = MakeFriendsCoin__factory;
MakeFriendsCoin__factory.bytecode = _bytecode;
MakeFriendsCoin__factory.abi = _abi;
