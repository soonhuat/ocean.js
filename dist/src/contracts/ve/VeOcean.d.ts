import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { ReceiptOrEstimate, AbiItem } from '../../@types';
/**
 * Provides an interface for veOcean contract
 */
export declare class VeOcean extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem[];
    /**
     * Deposit `amount` tokens for `userAddress` and lock until `unlockTime`
     * @param {String} amount Amount of tokens to be locked
     * @param {Number} unlockTime Timestamp for unlock
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    lockTokens<G extends boolean = false>(amount: string, unlockTime: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deposit `amount` tokens for `toAddress` and add to the existing lock
     * Anyone (even a smart contract) can deposit for someone else, but cannot extend their locktime and deposit for a brand new user
     * @param {String} toAddress user address to deposit for
     * @param {String} amount Amount of tokens to be locked
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    depositFor<G extends boolean = false>(toAddress: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deposit `amount` additional tokens for `userAddress` without modifying the unlock time
     * @param {String} amount Amount of tokens to be locked
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    increaseAmount<G extends boolean = false>(amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Extend the unlock time for `userAddress` to `unlockTime`
     * @param {Number} unlockTime Timestamp for new unlock time
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    increaseUnlockTime<G extends boolean = false>(unlockTime: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Withdraw all tokens for `userAddress`
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    withdraw<G extends boolean = false>(estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
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
