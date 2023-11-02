import { ethers } from "ethers";
import { TypedDataSigner } from '@ethersproject/abstract-signer';
import { Transaction, ExecuteResult, IExecutor } from './types';
export type Signer = ethers.Signer & TypedDataSigner;
export declare class EOAExecutor implements IExecutor {
    private signer;
    constructor(signer: Signer);
    static create(signer: Signer): EOAExecutor;
    getAddress(): Promise<string>;
    _signTypedData(domain: ethers.TypedDataDomain, types: Record<string, ethers.TypedDataField[]>, value: Record<string, any>): Promise<string>;
    execute(txns: Transaction[]): Promise<ExecuteResult>;
}
