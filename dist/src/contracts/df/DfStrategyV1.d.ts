import { AbiItem } from 'web3-utils';
import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { ReceiptOrEstimate } from '../../@types';
/**
 * Provides an interface for dfStrategyV1 contract
 */
export declare class DfStrategyV1 extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /** Get available DF Rewards for multiple tokens
     * @param {String} userAddress user address
     * @param {String} tokenAddresses array of tokens
     * @return {Promise<string[]>}
     */
    getMultipleAvailableRewards(userAddress: string, tokenAddresses: string[]): Promise<string[]>;
    /**
     * claim multiple token rewards for any address
     * @param {String} fromUserAddress user that generates the tx
     * @param {String} userAddress user address to claim
     * @param {String} tokenAddresses array of tokens
     * @return {Promise<ReceiptOrEstimate>}
     */
    claimMultipleRewards<G extends boolean = false>(fromUserAddress: string, userAddress: string, tokenAddresses: string[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
}
