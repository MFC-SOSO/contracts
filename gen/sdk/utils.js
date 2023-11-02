"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapTx = exports.tapWithNotEqual = exports.tapWithEqual = exports.waitTx = exports.sqrt = exports.convert2ProtocolPrice = exports.convert2TokenPrice = void 0;
const ethers_1 = require("ethers");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function convert2TokenPrice(protocolPrice, tokenDecimals = 18, ceil = true) {
    const bigPrice = protocolPrice;
    const inDecimals = ethers_1.BigNumber.from(10).pow(tokenDecimals);
    const originDecimals = ethers_1.BigNumber.from(10).pow(18);
    let result = bigPrice.mul(inDecimals).div(originDecimals);
    // 向上取整
    if (ceil && result.mul(originDecimals).lt(bigPrice.mul(inDecimals))) {
        result = result.add(1);
    }
    return result;
}
exports.convert2TokenPrice = convert2TokenPrice;
function convert2ProtocolPrice(erc20Price, tokenDecimals = 18) {
    if (tokenDecimals === 18) {
        return erc20Price;
    }
    if (tokenDecimals > 18) {
        throw new Error("tokenDecimals > 18");
    }
    const diff = 18 - tokenDecimals;
    return erc20Price.mul(ethers_1.BigNumber.from(10).pow(diff));
}
exports.convert2ProtocolPrice = convert2ProtocolPrice;
function sqrt(x) {
    return ethers_1.BigNumber.from(new bignumber_js_1.default(x.toString()).sqrt().toFixed().split('.')[0]);
}
exports.sqrt = sqrt;
async function waitTx(...txs) {
    const results = await Promise.all(txs.map(tx => tx instanceof Promise ? tx.then(tx => tx.wait()) : Promise.resolve(tx.wait())));
    results.forEach(result => {
        if (result.status === 0) {
            throw new Error("Transaction failed");
        }
    });
    return;
}
exports.waitTx = waitTx;
function tapWithEqual(valueP, expected, exec) {
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
exports.tapWithEqual = tapWithEqual;
function tapWithNotEqual(valueP, expected, exec) {
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
exports.tapWithNotEqual = tapWithNotEqual;
async function tapTx(...taps) {
    const results = await Promise.all(taps.map(tap => tap.skip()));
    // en: filter out txs that don't need to be executed
    taps = taps.filter((_, index) => !results[index]);
    console.log(`tapTx: ${taps.length} txs to be executed`);
    const ps = [];
    for (let i = 0; i < taps.length; i++) {
        const tap = taps[i];
        ps.push(await tap.exec());
    }
    return waitTx(...ps);
}
exports.tapTx = tapTx;
