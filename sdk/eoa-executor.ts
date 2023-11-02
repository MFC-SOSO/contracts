import { ethers } from "ethers";
import { TypedDataSigner } from '@ethersproject/abstract-signer';
import { Transaction, ExecuteResult, IExecutor } from './types';

export type Signer = ethers.Signer & TypedDataSigner;
export class EOAExecutor implements IExecutor {
    constructor(
        private signer: Signer
    ) {

    }

    static create(signer: Signer): EOAExecutor {
        return new EOAExecutor(signer);
    }

    getAddress(): Promise<string> {
        return this.signer.getAddress();
    }

    _signTypedData(domain: ethers.TypedDataDomain, types: Record<string, ethers.TypedDataField[]>, value: Record<string, any>): Promise<string> {
        return this.signer._signTypedData(domain, types, value);
    }

    async execute(txns: Transaction[]): Promise<ExecuteResult> {
        const from = await this.signer.getAddress();
        let nonce = await this.signer.getTransactionCount();
        let latestTxr: ethers.providers.TransactionResponse;

        for (let i = 0; i < txns.length; i++) {
            const txn = txns[i];
            if (txn.check) {
                const canExecute = await txn.check(from);
                if (!canExecute) {
                    continue;
                }
            }

            const txr = await this.signer.sendTransaction({
                from: from,
                maxFeePerGas: 2e9,
                maxPriorityFeePerGas: 2e9,
                nonce: nonce++,
                gasLimit: 2e7,
                to: txn.to,
                value: txn.value,
                data: txn.data,
            });

            if (i == txns.length - 1) {
                latestTxr = txr;
            } else {
                await txr.wait();
            }
        }
        return {
            getTransactionReceipt(): Promise<ethers.providers.TransactionReceipt> {
                return latestTxr.wait();
            },
            getTransactionResponse(): Promise<ethers.providers.TransactionResponse> {
                return Promise.resolve(latestTxr);
            },
            getBlockNumber: async () => {
                const tr = await latestTxr.wait();
                return tr.blockNumber;
            }
        }
    }
}