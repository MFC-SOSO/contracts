"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOAExecutor = void 0;
class EOAExecutor {
    constructor(signer) {
        this.signer = signer;
    }
    static create(signer) {
        return new EOAExecutor(signer);
    }
    getAddress() {
        return this.signer.getAddress();
    }
    _signTypedData(domain, types, value) {
        return this.signer._signTypedData(domain, types, value);
    }
    async execute(txns) {
        const from = await this.signer.getAddress();
        let nonce = await this.signer.getTransactionCount();
        let latestTxr;
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
            }
            else {
                await txr.wait();
            }
        }
        return {
            getTransactionReceipt() {
                return latestTxr.wait();
            },
            getTransactionResponse() {
                return Promise.resolve(latestTxr);
            },
            getBlockNumber: async () => {
                const tr = await latestTxr.wait();
                return tr.blockNumber;
            }
        };
    }
}
exports.EOAExecutor = EOAExecutor;
