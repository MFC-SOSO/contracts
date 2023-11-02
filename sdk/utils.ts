import { TransactionResponse } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import bn from 'bignumber.js';


export function convert2TokenPrice(
    protocolPrice: BigNumber,
    tokenDecimals: number = 18,
    ceil: boolean = true
): BigNumber {
    const bigPrice = protocolPrice;
    const inDecimals = BigNumber.from(10).pow(tokenDecimals);
    const originDecimals = BigNumber.from(10).pow(18);
    let result = bigPrice.mul(inDecimals).div(originDecimals);

    // 向上取整
    if (ceil && result.mul(originDecimals).lt(bigPrice.mul(inDecimals))) {
        result = result.add(1);
    }

    return result;
}

export function convert2ProtocolPrice(erc20Price: BigNumber, tokenDecimals: number = 18): BigNumber {
    if (tokenDecimals === 18) {
        return erc20Price;
    }
    if (tokenDecimals > 18) {
        throw new Error("tokenDecimals > 18");
    }
    const diff = 18 - tokenDecimals;
    return erc20Price.mul(BigNumber.from(10).pow(diff));
}

export function sqrt(x: BigNumber): BigNumber {
    return BigNumber.from(new bn(x.toString()).sqrt().toFixed().split('.')[0])
}

export async function waitTx(...txs: (Promise<TransactionResponse> | TransactionResponse)[]): Promise<void> {
    const results = await Promise.all(txs.map(tx => tx instanceof Promise ? tx.then(tx => tx.wait()) : Promise.resolve(tx.wait())));
    results.forEach(result => {
        if (result.status === 0) {
            throw new Error("Transaction failed");
        }
    });
    return;
}

type TapTx = {
    skip: () => Promise<boolean>;
    exec: () => Promise<TransactionResponse>;
};

export function tapWithEqual<T>(
    valueP: Promise<T>,
    expected: T,
    exec: () => Promise<TransactionResponse>
): TapTx {
    let executed = false;
    return {
        skip: async () => {
            const value = await valueP;
            return executed || value == expected;
        },
        exec: async () => {
            executed = true;
            return exec();
        }
    };
}

export function tapWithNotEqual<T>(
    valueP: Promise<T>,
    expected: T,
    exec: () => Promise<TransactionResponse>
): TapTx {
    let executed = false;
    return {
        skip: async () => {
            const value = await valueP;
            return executed || value != expected;
        },
        exec: async () => {
            executed = true;
            return exec();
        }
    };
}

export async function tapTx(...taps: TapTx[]): Promise<void> {
    const results = await Promise.all(taps.map(tap => tap.skip()));

    // en: filter out txs that don't need to be executed
    taps = taps.filter((_, index) => !results[index]);

    console.log(`tapTx: ${taps.length} txs to be executed`);
    const ps: TransactionResponse[] = [];

    for (let i = 0; i < taps.length; i++) {
        const tap = taps[i];
        ps.push(await tap.exec());
    }

    return waitTx(
        ...ps
    );
}