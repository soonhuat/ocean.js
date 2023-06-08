import { Signer, providers, Contract, ContractFunction, BigNumber } from 'ethers';
import { Config } from '../config';
export declare function setContractDefaults(contract: Contract, config: Config): Contract;
/**
 * Asynchronous function that returns a fair gas price based on the current gas price and a multiplier.
 * @param {Signer} signer - The signer object to use for fetching the current gas price.
 * @param {number} gasFeeMultiplier - The multiplier to apply to the current gas price. If not provided, the current gas price is returned as a string.
 * @returns A Promise that resolves to a string representation of the fair gas price.
 */
export declare function getFairGasPrice(signer: Signer, gasFeeMultiplier: number): Promise<string>;
/**
 * Asynchronous function that returns the number of decimal places for a given token.
 * @param {Signer} signer - The signer object to use for fetching the token decimals.
 * @param {string} token - The address of the token contract.
 * @returns A Promise that resolves to the number of decimal places for the token.
 */
export declare function getTokenDecimals(signer: Signer, token: string): Promise<any>;
/**
 * Converts an amount of units to tokens
 * @param {Signer} signer -  The signer object to use.
 * @param {string} token - The token to convert
 * @param {string} amount - The amount of units to convert
 * @param {number} [tokenDecimals] - The number of decimals in the token
 * @returns {Promise<string>} - The converted amount in tokens
 */
export declare function unitsToAmount(signer: Signer, token: string, amount: string, tokenDecimals?: number): Promise<string>;
/**
 * Converts an amount of tokens to units
 * @param {Signer} signer -  The signer object to use.
 * @param {string} token - The token to convert
 * @param {string} amount - The amount of tokens to convert
 * @param {number} [tokenDecimals] - The number of decimals of the token
 * @returns {Promise<string>} - The converted amount in units
 */
export declare function amountToUnits(signer: Signer, token: string, amount: string, tokenDecimals?: number): Promise<string>;
export declare function getEventFromTx(txReceipt: any, eventName: any): any;
/**
 * Send the transation on chain
 * @param {BigNumber} estGas estimated gas for the transaction
 * @param {Signer} signer signer object
 * @param {number} gasFeeMultiplier number represinting the multiplier we apply to gas fees
 * @param {Function} functionToSend function that we need to send
 * @param {...any[]} args arguments of the function
 * @return {Promise<any>} transaction receipt
 */
export declare function sendTx(estGas: BigNumber, signer: Signer, gasFeeMultiplier: number, functionToSend: ContractFunction, ...args: any[]): Promise<providers.TransactionResponse>;
