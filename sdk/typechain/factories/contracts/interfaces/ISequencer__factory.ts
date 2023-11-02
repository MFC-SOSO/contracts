/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISequencer,
  ISequencerInterface,
} from "../../../contracts/interfaces/ISequencer";

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
] as const;

export class ISequencer__factory {
  static readonly abi = _abi;
  static createInterface(): ISequencerInterface {
    return new utils.Interface(_abi) as ISequencerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISequencer {
    return new Contract(address, _abi, signerOrProvider) as ISequencer;
  }
}
