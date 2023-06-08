import { SmartContractWithAddress } from '../SmartContractWithAddress';
import { ReceiptOrEstimate, AbiItem } from '../../@types';
/**
 * Provides an interface for veOcean contract
 */
export declare class VeAllocate extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem[];
    /**
     * set a specific percentage of veOcean to a specific nft
     * Maximum allocated percentage is 10000, so 1% is specified as 100
     * @param {String} amount Percentage used
     * @param {String} nft NFT address to allocate to
     * @param {String} chainId chainId of NFT
     * @return {Promise<ReceiptOrEstimate>}
     */
    setAllocation<G extends boolean = false>(amount: string, nft: string, chainId: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * set specific percetage of veOcean to multiple nfts
     * Maximum allocated percentage is 10000, so 1% is specified as 100
     * @param {String[]} amount Array of percentages used
     * @param {String[]} nft Array of NFT addresses
     * @param {String[]} chainId Array of chainIds
     * @return {Promise<ReceiptOrEstimate>}
     */
    setBatchAllocation<G extends boolean = false>(amount: string[], nft: string[], chainId: number[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Get totalAllocation for address
     * @param {String} userAddress user address
     * @return {Promise<number>}
     */
    getTotalAllocation(userAddress: string): Promise<number>;
    /** Get getveAllocation for address, nft, chainId
     * @param {String} userAddress user address
     * @param {String} nft NFT address to allocate to
     * @param {String} chainId chainId of NFT
     * @return {Promise<number>}
     */
    getVeAllocation(userAddress: string, nft: string, chainId: string): Promise<number>;
}
