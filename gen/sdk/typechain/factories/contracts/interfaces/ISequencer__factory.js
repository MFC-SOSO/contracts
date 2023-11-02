"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISequencer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes[]",
                name: "returnData",
                type: "bytes[]",
            },
        ],
        name: "AggregateResult",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes4[]",
                name: "status",
                type: "bytes4[]",
            },
            {
                internalType: "string[]",
                name: "errs",
                type: "string[]",
            },
        ],
        name: "SimulateResult",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32[]",
                name: "processedHashs",
                type: "bytes32[]",
            },
            {
                indexed: false,
                internalType: "bytes32[]",
                name: "skipHashs",
                type: "bytes32[]",
            },
        ],
        name: "HandleOpsResult",
        type: "event",
    },
];
class ISequencer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISequencer__factory = ISequencer__factory;
ISequencer__factory.abi = _abi;