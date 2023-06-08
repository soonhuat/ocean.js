import { Signer } from 'ethers';
import { Config } from '../config';
import { ReceiptOrEstimate, ReceiptOrDecimal } from '../@types';
/**
 * Approve spender to spent amount tokens
 * @param {Signer} signer - The signer object
 * @param {Config} config - The config object
 * @param {string} account - The address of the caller
 * @param {string} tokenAddress - The address of the token
 * @param {string} spender - The address of the spender
 * @param {String} amount amount of ERC20 Datatokens (always expressed as wei)
 * @param {boolean} force  if true, will overwrite any previous allowence. Else, will check if allowence is enough and will not send a transaction if it's not needed
 * @param {number} [tokenDecimals] optional number of decimals of the token
 * @param {boolean} [estimateGas]  if true, returns the estimate gas cost for calling the method
 */
export declare function approve<G extends boolean = false>(signer: Signer, config: Config, account: string, tokenAddress: string, spender: string, amount: string, force?: boolean, tokenDecimals?: number, estimateGas?: G): Promise<ReceiptOrDecimal<G> | number>;
/**
 * Approve spender to spent amount tokens
 * @param {Signer} signer - The signer object
 * @param {Config} config - The config object
 * @param {string} account - The address of the caller
 * @param {string} tokenAddress - The address of the token
 * @param {string} spender - The address of the spender
 * @param {string} amount amount of ERC20 tokens (always expressed as wei)
 * @param {boolean} force  if true, will overwrite any previous allowence. Else, will check if allowence is enough and will not send a transaction if it's not needed
 * @param {boolean} [estimateGas]  if true, returns the estimate gas cost for calling the method
 */
export declare function approveWei<G extends boolean = false>(signer: Signer, config: Config, account: string, tokenAddress: string, spender: string, amount: string, force?: boolean, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
/**
 * Moves amount tokens from the caller’s account to recipient.
 * @param {Signer} signer - The signer object
 * @param {Config} config - The config object
 * @param {string} tokenAddress - The address of the token
 * @param {string} recipient - The address of the tokens receiver
 * @param {String} amount amount of ERC20 Datatokens (not as wei)
 * @param {String} estimateGas  if true returns the gas estimate
 */
export declare function transfer<G extends boolean = false>(signer: Signer, config: Config, tokenAddress: string, recipient: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
/**
 * Get Allowance for any Datatoken
 * @param {Signer} signer - The signer object
 * @param {string} tokenAddress - The address of the token
 * @param {string} account - The address of the caller
 * @param {string} spender - The address of the spender
 * @param {number} tokenDecimals optional number of decimals of the token
 */
export declare function allowance(signer: Signer, tokenAddress: string, account: string, spender: string, tokenDecimals?: number): Promise<string>;
/**
 * Get balance for any Datatoken
 * @param {Signer} signer - The signer object
 * @param {string} tokenAddress - The address of the token
 * @param {string} account - The address of the caller
 * @param {number} [tokenDecimals] optional number of decimals of the token
 */
export declare function balance(signer: Signer, tokenAddress: string, account: string, tokenDecimals?: number): Promise<string>;
/**
 * Get Allowance in wei for any erc20
 * @param {Signer} signer - The signer object
 * @param {string} tokenAddress - The address of the token
 * @param {string} account - The address of the caller
 * @param {string} spender - The address of the spneder
 */
export declare function allowanceWei(signer: Signer, tokenAddress: string, account: string, spender: string): Promise<string>;
/**
 * Get decimals for any Datatoken
 * @param {Signer} signer - The signer object
 * @param {String} tokenAddress - The address of the token
 * @return {Promise<number>} Number of decimals of the token
 */
export declare function decimals(signer: Signer, tokenAddress: string): Promise<number>;
