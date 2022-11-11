import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { Config } from '../config';
import { TransactionReceipt } from 'web3-core';
export declare function setContractDefaults(contract: Contract, config: Config): Contract;
export declare function getFairGasPrice(web3: Web3, gasFeeMultiplier: number): Promise<string>;
export declare function unitsToAmount(web3: Web3, token: string, amount: string, tokenDecimals?: number): Promise<string>;
export declare function amountToUnits(web3: Web3, token: string, amount: string, tokenDecimals?: number): Promise<string>;
/**
 * Estimates the gas used when a function would be executed on chain
 * @param {string} from account that calls the function
 * @param {Function} functionToEstimateGas function that we need to estimate the gas
 * @param {...any[]} args arguments of the function
 * @return {Promise<number>} gas cost of the function
 */
export declare function calculateEstimatedGas(from: string, functionToEstimateGas: Function, ...args: any[]): Promise<number>;
/**
 * Send the transation on chain
 * @param {string} from account that calls the function
 * @param {any} estGas estimated gas for the transaction
 * @param {Web3} web3 web3 objcet
 * @param {Function} functionToSend function that we need to send
 * @param {...any[]} args arguments of the function
 * @return {Promise<any>} transaction receipt
 */
export declare function sendTx(from: string, estGas: number, web3: Web3, gasFeeMultiplier: number, functionToSend: Function, ...args: any[]): Promise<TransactionReceipt>;
