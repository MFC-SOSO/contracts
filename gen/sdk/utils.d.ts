import { TransactionResponse } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
export declare function convert2TokenPrice(protocolPrice: BigNumber, tokenDecimals?: number, ceil?: boolean): BigNumber;
export declare function convert2ProtocolPrice(erc20Price: BigNumber, tokenDecimals?: number): BigNumber;
export declare function sqrt(x: BigNumber): BigNumber;
export declare function waitTx(...txs: (Promise<TransactionResponse> | TransactionResponse)[]): Promise<void>;
type TapTx = {
    skip: () => Promise<boolean>;
    exec: () => Promise<TransactionResponse>;
};
export declare function tapWithEqual<T>(valueP: Promise<T>, expected: T, exec: () => Promise<TransactionResponse>): TapTx;
export declare function tapWithNotEqual<T>(valueP: Promise<T>, expected: T, exec: () => Promise<TransactionResponse>): TapTx;
export declare function tapTx(...taps: TapTx[]): Promise<void>;
export {};
