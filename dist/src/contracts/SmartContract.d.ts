import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import { Config } from '../config';
export declare abstract class SmartContract {
    web3: Web3;
    config: Config;
    abi: AbiItem | AbiItem[];
    abstract getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Instantiate the smart contract.
     * @param {Web3} web3
     * @param {string | number} network Network id or name
     * @param {Config} config Configutation of the smart contract
     * @param {AbiItem | AbiItem[]} abi ABI of the smart contract
     */
    constructor(web3: Web3, network?: string | number, config?: Config, abi?: AbiItem | AbiItem[]);
    protected amountToUnits(token: string, amount: string, tokenDecimals?: number): Promise<string>;
    protected unitsToAmount(token: string, amount: string, tokenDecimals?: number): Promise<string>;
    protected getFairGasPrice(): Promise<string>;
    protected getContract(address: string, account?: string, abi?: AbiItem | AbiItem[]): Contract;
}
