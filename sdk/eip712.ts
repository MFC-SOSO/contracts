import { ILauncher } from './typechain/contracts/Launcher';
import { TypedDataField, ethers } from 'ethers';

export async function getUserEarnTypedDataTypesAndValue(exTxStruct: ILauncher.UserEarnStruct): Promise<{ types: Record<string, Array<TypedDataField>>, value: Record<string, any> }> {
    const ex = await ethers.utils.resolveProperties(exTxStruct);
    const types = {
        UserEarn: [
            { name: 'user', type: 'address' },
            { name: 'tgId', type: 'uint256' },
            { name: 'earnTotal', type: 'uint256' },
        ]
    }
    const value = {
        user: ex.user,
        tgId: ex.tgId,
        earnTotal: ex.earnTotal,
    }
    return { types, value };
}