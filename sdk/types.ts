import { BigNumber, ethers } from 'ethers';
import { TypedDataSigner } from '@ethersproject/abstract-signer';
import { Provider } from "@ethersproject/providers";
export type Transaction = {
    to: string;
    data: string;
    value: ethers.BigNumber;

    // 检测是否需要执行
    check?: (from: string) => Promise<boolean>;
}

export type ProtocolContractAddress = {
    config: string;
}

export type ExecuteResult = {
    getBlockNumber: () => Promise<number>
    getTransactionResponse: () => Promise<ethers.providers.TransactionResponse>
    getTransactionReceipt: () => Promise<ethers.providers.TransactionReceipt>
};

export type PriceChangeEvent = {
    timestamp: number,
    price: BigNumber,
}

export type xERC20 = {
    address: string,
    decimals: number,
}

export interface IExecutor extends TypedDataSigner {
    execute(txns: Transaction[]): Promise<ExecuteResult>;

    getAddress(): Promise<string>;
};