/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISharesFeeStore,
  ISharesFeeStoreInterface,
} from "../../../contracts/interfaces/ISharesFeeStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "shareId",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "feedata",
        type: "bytes",
      },
    ],
    name: "collectShareFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shareId",
        type: "address",
      },
    ],
    name: "getFeePercentage",
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
        name: "shareId",
        type: "address",
      },
    ],
    name: "onInstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shareId",
        type: "address",
      },
    ],
    name: "onUninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shareId",
        type: "address",
      },
    ],
    name: "withdrawShareFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISharesFeeStore__factory {
  static readonly abi = _abi;
  static createInterface(): ISharesFeeStoreInterface {
    return new utils.Interface(_abi) as ISharesFeeStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISharesFeeStore {
    return new Contract(address, _abi, signerOrProvider) as ISharesFeeStore;
  }
}
