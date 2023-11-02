import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISequencer, ISequencerInterface } from "../../../contracts/interfaces/ISequencer";
export declare class ISequencer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "returnData";
            readonly type: "bytes[]";
        }];
        readonly name: "AggregateResult";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "status";
            readonly type: "bytes4[]";
        }, {
            readonly internalType: "string[]";
            readonly name: "errs";
            readonly type: "string[]";
        }];
        readonly name: "SimulateResult";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "processedHashs";
            readonly type: "bytes32[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "skipHashs";
            readonly type: "bytes32[]";
        }];
        readonly name: "HandleOpsResult";
        readonly type: "event";
    }];
    static createInterface(): ISequencerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISequencer;
}
