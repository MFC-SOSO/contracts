"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1155Upgradeable__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
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
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
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
                name: "id",
                type: "uint256",
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
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
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
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
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
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
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
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "uri",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50611386806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610b49565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610b8c565b610227565b60405190151581526020016100a9565b6100e86100e3366004610bb0565b610277565b6040516100a99190610c0f565b610108610103366004610d6e565b61030b565b005b61011d610118366004610e18565b610357565b6040516100a99190610f1e565b610108610138366004610f31565b610481565b6100c561014b366004610f6d565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b610108610187366004610fa0565b610490565b60006001600160a01b0383166101fc5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b5060008181526065602090815260408083206001600160a01b03861684529091529020545b92915050565b60006001600160e01b03198216636cdb3d1360e11b148061025857506001600160e01b031982166303a24d0760e21b145b8061022157506301ffc9a760e01b6001600160e01b0319831614610221565b60606067805461028690611005565b80601f01602080910402602001604051908101604052809291908181526020018280546102b290611005565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103275750610327853361014b565b6103435760405162461bcd60e51b81526004016101f39061103f565b61035085858585856104d5565b5050505050565b606081518351146103bc5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f3565b6000835167ffffffffffffffff8111156103d8576103d8610c22565b604051908082528060200260200182016040528015610401578160200160208202803683370190505b50905060005b84518110156104795761044c8582815181106104255761042561108d565b602002602001015185838151811061043f5761043f61108d565b602002602001015161018c565b82828151811061045e5761045e61108d565b6020908102919091010152610472816110b9565b9050610407565b509392505050565b61048c3383836106b5565b5050565b6001600160a01b0385163314806104ac57506104ac853361014b565b6104c85760405162461bcd60e51b81526004016101f39061103f565b6103508585858585610795565b81518351146105375760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f3565b6001600160a01b03841661055d5760405162461bcd60e51b81526004016101f3906110d2565b3360005b845181101561064757600085828151811061057e5761057e61108d565b60200260200101519050600085838151811061059c5761059c61108d565b60209081029190910181015160008481526065835260408082206001600160a01b038e1683529093529190912054909150818110156105ed5760405162461bcd60e51b81526004016101f390611117565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061062c908490611161565b9250508190555050505080610640906110b9565b9050610561565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610697929190611174565b60405180910390a46106ad8187878787876108c3565b505050505050565b816001600160a01b0316836001600160a01b0316036107285760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f3565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166107bb5760405162461bcd60e51b81526004016101f3906110d2565b3360006107c785610a27565b905060006107d485610a27565b905060008681526065602090815260408083206001600160a01b038c168452909152902054858110156108195760405162461bcd60e51b81526004016101f390611117565b60008781526065602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610858908490611161565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46108b8848a8a8a8a8a610a72565b505050505050505050565b6001600160a01b0384163b156106ad5760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061090790899089908890889088906004016111a2565b6020604051808303816000875af1925050508015610942575060408051601f3d908101601f1916820190925261093f91810190611200565b60015b6109ee5761094e61121d565b806308c379a0036109875750610962611239565b8061096d5750610989565b8060405162461bcd60e51b81526004016101f39190610c0f565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f3565b6001600160e01b0319811663bc197c8160e01b14610a1e5760405162461bcd60e51b81526004016101f3906112c3565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610a6157610a6161108d565b602090810291909101015292915050565b6001600160a01b0384163b156106ad5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610ab6908990899088908890889060040161130b565b6020604051808303816000875af1925050508015610af1575060408051601f3d908101601f19168201909252610aee91810190611200565b60015b610afd5761094e61121d565b6001600160e01b0319811663f23a6e6160e01b14610a1e5760405162461bcd60e51b81526004016101f3906112c3565b80356001600160a01b0381168114610b4457600080fd5b919050565b60008060408385031215610b5c57600080fd5b610b6583610b2d565b946020939093013593505050565b6001600160e01b031981168114610b8957600080fd5b50565b600060208284031215610b9e57600080fd5b8135610ba981610b73565b9392505050565b600060208284031215610bc257600080fd5b5035919050565b6000815180845260005b81811015610bef57602081850181015186830182015201610bd3565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ba96020830184610bc9565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610c5e57610c5e610c22565b6040525050565b600067ffffffffffffffff821115610c7f57610c7f610c22565b5060051b60200190565b600082601f830112610c9a57600080fd5b81356020610ca782610c65565b604051610cb48282610c38565b83815260059390931b8501820192828101915086841115610cd457600080fd5b8286015b84811015610cef5780358352918301918301610cd8565b509695505050505050565b600082601f830112610d0b57600080fd5b813567ffffffffffffffff811115610d2557610d25610c22565b604051610d3c601f8301601f191660200182610c38565b818152846020838601011115610d5157600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610d8657600080fd5b610d8f86610b2d565b9450610d9d60208701610b2d565b9350604086013567ffffffffffffffff80821115610dba57600080fd5b610dc689838a01610c89565b94506060880135915080821115610ddc57600080fd5b610de889838a01610c89565b93506080880135915080821115610dfe57600080fd5b50610e0b88828901610cfa565b9150509295509295909350565b60008060408385031215610e2b57600080fd5b823567ffffffffffffffff80821115610e4357600080fd5b818501915085601f830112610e5757600080fd5b81356020610e6482610c65565b604051610e718282610c38565b83815260059390931b8501820192828101915089841115610e9157600080fd5b948201945b83861015610eb657610ea786610b2d565b82529482019490820190610e96565b96505086013592505080821115610ecc57600080fd5b50610ed985828601610c89565b9150509250929050565b600081518084526020808501945080840160005b83811015610f1357815187529582019590820190600101610ef7565b509495945050505050565b602081526000610ba96020830184610ee3565b60008060408385031215610f4457600080fd5b610f4d83610b2d565b915060208301358015158114610f6257600080fd5b809150509250929050565b60008060408385031215610f8057600080fd5b610f8983610b2d565b9150610f9760208401610b2d565b90509250929050565b600080600080600060a08688031215610fb857600080fd5b610fc186610b2d565b9450610fcf60208701610b2d565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ff957600080fd5b610e0b88828901610cfa565b600181811c9082168061101957607f821691505b60208210810361103957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016110cb576110cb6110a3565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b80820180821115610221576102216110a3565b6040815260006111876040830185610ee3565b82810360208401526111998185610ee3565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190526000906111ce90830186610ee3565b82810360608401526111e08186610ee3565b905082810360808401526111f48185610bc9565b98975050505050505050565b60006020828403121561121257600080fd5b8151610ba981610b73565b600060033d11156112365760046000803e5060005160e01c5b90565b600060443d10156112475790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561127757505050505090565b828501915081518181111561128f5750505050505090565b843d87010160208285010111156112a95750505050505090565b6112b860208286010187610c38565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061134590830184610bc9565b97965050505050505056fea26469706673582212203ac90535787fb150b2b588cd2f0fb983876b4b15dfbf06808c9078c89d9677fc64736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC1155Upgradeable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.ERC1155Upgradeable__factory = ERC1155Upgradeable__factory;
ERC1155Upgradeable__factory.bytecode = _bytecode;
ERC1155Upgradeable__factory.abi = _abi;
