import { ILauncher } from './typechain/contracts/Launcher';
import { TypedDataField } from 'ethers';
export declare function getUserEarnTypedDataTypesAndValue(exTxStruct: ILauncher.UserEarnStruct): Promise<{
    types: Record<string, Array<TypedDataField>>;
    value: Record<string, any>;
}>;
