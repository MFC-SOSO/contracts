"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserEarnTypedDataTypesAndValue = void 0;
const ethers_1 = require("ethers");
async function getUserEarnTypedDataTypesAndValue(exTxStruct) {
    const ex = await ethers_1.ethers.utils.resolveProperties(exTxStruct);
    const types = {
        UserEarn: [
            { name: 'user', type: 'address' },
            { name: 'tgId', type: 'uint256' },
            { name: 'earnTotal', type: 'uint256' },
        ]
    };
    const value = {
        user: ex.user,
        tgId: ex.tgId,
        earnTotal: ex.earnTotal,
    };
    return { types, value };
}
exports.getUserEarnTypedDataTypesAndValue = getUserEarnTypedDataTypesAndValue;
