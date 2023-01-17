import { AbiItem } from 'web3-utils';
import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { ReceiptOrEstimate } from '../../@types';
/**
 * Provides an interface for veOcean contract
 */
export declare class VeFeeDistributor extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Claim fees for `userAddress`
     * Each call to claim look at a maximum of 50 user veOCEAN points.
           For accounts with many veOCEAN related actions, this function
           may need to be called more than once to claim all available
           fees. In the `Claimed` event that fires, if `claim_epoch` is
           less than `max_epoch`, the account may claim again
     * @param {String} userAddress user address
     * @return {Promise<ReceiptOrEstimate>}
     */
    claim<G extends boolean = false>(userAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Make multiple fee claims in a single call
      Used to claim for many accounts at once, or to make
           multiple claims for the same address when that address
           has significant veOCEAN history
     * @param {String} fromUserAddress user address that sends the tx
     * @param {String} addresses array of addresses to claim
     * @return {Promise<ReceiptOrEstimate>}
     */
    claimMany<G extends boolean = false>(fromUserAddress: string, addresses: string[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
}
