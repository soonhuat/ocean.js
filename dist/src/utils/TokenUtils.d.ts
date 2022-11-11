import Web3 from 'web3';
import { Config } from '../config';
import { ReceiptOrEstimate } from '../@types';
/**
 * Approve spender to spent amount tokens
 * @param {Web3} web3
 * @param {Config} config
 * @param {String} account
 * @param {String} tokenAddress
 * @param {String} spender
 * @param {String} amount amount of ERC20 Datatokens (always expressed as wei)
 * @param {boolean} force  if true, will overwrite any previous allowence. Else, will check if allowence is enough and will not send a transaction if it's not needed
 * @param {number} tokenDecimals optional number of decimals of the token
 * @param {boolean} estimateGas  if true, returns the estimate gas cost for calling the method
 */
export declare function approve<G extends boolean = false>(web3: Web3, config: Config, account: string, tokenAddress: string, spender: string, amount: string, force?: boolean, tokenDecimals?: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
/**
 * Approve spender to spent amount tokens
 * @param {Web3} web3
 * @param {Config} config
 * @param {String} account
 * @param {String} tokenAddress
 * @param {String} spender
 * @param {String} amount amount of ERC20 tokens (always expressed as wei)
 * @param {boolean} force  if true, will overwrite any previous allowence. Else, will check if allowence is enough and will not send a transaction if it's not needed
 * @param {boolean} estimateGas  if true, returns the estimate gas cost for calling the method
 */
export declare function approveWei<G extends boolean = false>(web3: Web3, config: Config, account: string, tokenAddress: string, spender: string, amount: string, force?: boolean, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
/**
 * Moves amount tokens from the caller’s account to recipient.
 * @param {String} account
 * @param {String} tokenAddress
 * @param {String} recipient
 * @param {String} amount amount of ERC20 Datatokens (not as wei)
 * @param {String} force  if true, will overwrite any previous allowence. Else, will check if allowence is enough and will not send a transaction if it's not needed
 */
export declare function transfer<G extends boolean = false>(web3: Web3, config: Config, account: string, tokenAddress: string, recipient: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
/**
 * Get Allowance for any Datatoken
 * @param {Web3} web3
 * @param {String } tokenAdress
 * @param {String} account
 * @param {String} spender
 * @param {number} tokenDecimals optional number of decimals of the token
 */
export declare function allowance(web3: Web3, tokenAddress: string, account: string, spender: string, tokenDecimals?: number): Promise<string>;
/**
 * Get balance for any Datatoken
 * @param {Web3} web3
 * @param {String} tokenAdress
 * @param {String} owner
 * @param {String} spender
 * @param {number} tokenDecimals optional number of decimals of the token
 */
export declare function balance(web3: Web3, tokenAddress: string, account: string, tokenDecimals?: number): Promise<string>;
/**
 * Get Allowance for any erc20
 * @param {Web3} web3
 * @param {String} tokenAdress
 * @param {String} account
 * @param {String} spender
 */
export declare function allowanceWei(web3: Web3, tokenAddress: string, account: string, spender: string): Promise<string>;
/**
 * Get decimals for any Datatoken
 * @param {Web3} web3
 * @param {String} tokenAdress
 * @return {Promise<number>} Number of decimals of the token
 */
export declare function decimals(web3: Web3, tokenAddress: string): Promise<number>;
