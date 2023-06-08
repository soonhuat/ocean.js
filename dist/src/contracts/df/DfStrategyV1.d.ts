import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { ReceiptOrEstimate, AbiItem } from '../../@types';
/**
 * Provides an interface for dfStrategyV1 contract
 */
export declare class DfStrategyV1 extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem[];
    /** Get available DF Rewards for multiple tokens
     * @param {String} userAddress user address
     * @param {String} tokenAddresses array of tokens
     * @return {Promise<string[]>}
     */
    getMultipleAvailableRewards(userAddress: string, tokenAddresses: string[]): Promise<string[]>;
    /**
     * claim multiple token rewards for any address
     * @param {String} userAddress user address to claim
     * @param {String} tokenAddresses array of tokens
     * @return {Promise<ReceiptOrEstimate>}
     */
    claimMultipleRewards<G extends boolean = false>(userAddress: string, tokenAddresses: string[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
}
