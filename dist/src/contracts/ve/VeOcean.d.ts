import { AbiItem } from 'web3-utils';
import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { ReceiptOrEstimate } from '../../@types';
/**
 * Provides an interface for veOcean contract
 */
export declare class VeOcean extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Deposit `amount` tokens for `userAddress` and lock until `unlockTime`
     * @param {String} userAddress user address
     * @param {String} amount Amount of tokens to be locked
     * @param {Number} unlockTime Timestamp for unlock
     * @return {Promise<ReceiptOrEstimate>}
     */
    lockTokens<G extends boolean = false>(userAddress: string, amount: string, unlockTime: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deposit `amount` tokens for `toAddress` and add to the existing lock
     * Anyone (even a smart contract) can deposit for someone else, but cannot extend their locktime and deposit for a brand new user
     * @param {String} fromUserAddress user address that sends the tx
     * @param {String} toAddress user address to deposit for
     * @param {String} amount Amount of tokens to be locked
     * @return {Promise<ReceiptOrEstimate>}
     */
    depositFor<G extends boolean = false>(fromUserAddress: string, toAddress: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deposit `amount` additional tokens for `userAddress` without modifying the unlock time
     * @param {String} userAddress user address that sends the tx
     * @param {String} amount Amount of tokens to be locked
     * @return {Promise<ReceiptOrEstimate>}
     */
    increaseAmount<G extends boolean = false>(userAddress: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Extend the unlock time for `userAddress` to `unlockTime`
     * @param {String} userAddress user address that sends the tx
     * @param {Number} unlockTime Timestamp for new unlock time
     * @return {Promise<ReceiptOrEstimate>}
     */
    increaseUnlockTime<G extends boolean = false>(userAddress: string, unlockTime: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Withdraw all tokens for `userAddress`
     * @param {String} userAddress user address that sends the tx
     * @return {Promise<ReceiptOrEstimate>}
     */
    withdraw<G extends boolean = false>(userAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Get voting power for address
     * @param {String} userAddress user address
     * @return {Promise<number>}
     */
    getVotingPower(userAddress: string): Promise<number>;
    /** Get locked balance
     * @param {String} userAddress user address
     * @return {Promise<string>}
     */
    getLockedAmount(userAddress: string): Promise<string>;
    /** Get untilLock for address
     * @param {String} userAddress user address
     * @return {Promise<number>}
     */
    lockEnd(userAddress: string): Promise<number>;
    /** Get total supply
     * @return {Promise<number>}
     */
    totalSupply(): Promise<string>;
    /** Get token
     * @return {Promise<string>}
     */
    getToken(): Promise<string>;
}
