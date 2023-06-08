import { Signer, Contract } from 'ethers';
import { AbiItem } from '../@types';
import { Config } from '../config';
export declare abstract class SmartContract {
    signer: Signer;
    config: Config;
    abi: AbiItem[];
    abstract getDefaultAbi(): any;
    /**
     * Instantiate the smart contract.
     * @param {Signer} signer The signer object.
     * @param {string | number} [network] Network id or name
     * @param {Config} [config] The configuration object.
     * @param {AbiItem[]} [abi] ABI array of the smart contract
     */
    constructor(signer: Signer, network?: string | number, config?: Config, abi?: AbiItem[]);
    /**
     * Converts an amount of tokens to units
     * @param {string} token - The token to convert
     * @param {string} amount - The amount of tokens to convert
     * @param {number} [tokenDecimals] - The number of decimals of the token
     * @returns {Promise<string>} - The converted amount in units
     */
    protected amountToUnits(token: string, amount: string, tokenDecimals?: number): Promise<string>;
    /**
     * Converts an amount of units to tokens
     * @param {string} token - The token to convert
     * @param {string} amount - The amount of units to convert
     * @param {number} [tokenDecimals] - The number of decimals in the token
     * @returns {Promise<string>} - The converted amount in tokens
     */
    protected unitsToAmount(token: string, amount: string, tokenDecimals?: number): Promise<string>;
    /**
     * Retruns the gas price
     * @returns {Promise<string>} - The fair gas price
     */
    protected getFairGasPrice(): Promise<string>;
    /**
     * Returns a contract instance for the given address
     * @param {string} address - The address of the contract
     * @param {AbiItem[]} [abi] - The ABI of the contract
     * @returns {Contract} - The contract instance
     */
    protected getContract(address: string, abi?: AbiItem[]): Contract;
}
