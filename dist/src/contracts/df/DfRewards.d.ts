import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { AbiItem, ReceiptOrEstimate } from '../../@types';
/**
 * Provides an interface for DFRewards contract
 */
export declare class DfRewards extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem[];
    /** Get available DF Rewards for a token
     * @param {String} userAddress user address
     * @param {String} tokenAddress token address
     * @return {Promise<string>}
     */
    getAvailableRewards(userAddress: string, tokenAddress: string): Promise<string>;
    /**
     * claim rewards for any address
     * @param {String} userAddress user address to claim
     * @param {String} tokenAddress token address
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    claimRewards<G extends boolean = false>(userAddress: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * allocate rewards to address.  An approve must exist before calling this function.
     * @param {String[]} userAddresses array of users that will receive rewards
     * @param {String[]} amounts array of amounts
     * @param {String} tokenAddress token address
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    allocateRewards<G extends boolean = false>(userAddresses: string[], amounts: string[], tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
}
