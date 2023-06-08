import { BigNumber } from 'ethers';
import { AbiItem, FreCreationParams, DatatokenCreateParams, DispenserCreationParams, NftCreateData, Template, TokenOrder, ReceiptOrEstimate } from '../@types';
import { SmartContractWithAddress } from './SmartContractWithAddress';
/**
 * Provides an interface for NFT Factory contract
 */
export declare class NftFactory extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem[];
    /**
     * Create new data NFT
     * @param {NFTCreateData} nftData The data needed to create an NFT.
     * @param {Boolean} [estimateGas] if True, return gas estimate
     * @return {Promise<string|BigNumber>} The transaction hash or the gas estimate.
     */
    createNFT<G extends boolean = false>(nftData: NftCreateData, estimateGas?: G): Promise<G extends false ? string : BigNumber>;
    /**
     * Get Current NFT Count (NFT created)
     * @return {Promise<number>} Number of NFT created from this factory
     */
    getCurrentNFTCount(): Promise<number>;
    /**
     * Get Current Datatoken Count
     * @return {Promise<number>} Number of DTs created from this factory
     */
    getCurrentTokenCount(): Promise<number>;
    /**
     *  Get Factory Owner
     * @return {Promise<string>} Factory Owner address
     */
    getOwner(): Promise<string>;
    /**
     * Get Current NFT Template Count
     * @return {Promise<number>} Number of NFT Template added to this factory
     */
    getCurrentNFTTemplateCount(): Promise<number>;
    /**
     * Get Current Template  Datatoken (ERC20) Count
     * @return {Promise<number>} Number of Datatoken Template added to this factory
     */
    getCurrentTokenTemplateCount(): Promise<number>;
    /**
     * Get NFT Template
     * @param {number} index Template index
     * @return {Promise<Template>} Number of Template added to this factory
     */
    getNFTTemplate(index: number): Promise<Template>;
    /**
     * Get Datatoken (ERC20) Template
     * @param {number} index Template index
     * @return {Promise<Template>} DT Template info
     */
    getTokenTemplate(index: number): Promise<Template>;
    /**
     * Check if Datatoken is deployed from the factory
     * @param {String} datatoken Datatoken address to check
     * @return {Promise<Boolean>} return true if deployed from this factory
     */
    checkDatatoken(datatoken: string): Promise<Boolean>;
    /**
     * Check if  NFT is deployed from the factory
     * @param {String} nftAddress nftAddress address to check
     * @return {Promise<String>} return address(0) if it's not, or the nftAddress if true
     */
    checkNFT(nftAddress: string): Promise<String>;
    /**
     * Add a new NFT token template - only factory Owner
     * @param {String} address caller address
     * @param {String} templateAddress template address to add
     * @param {Boolean} [estimateGas] if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    addNFTTemplate<G extends boolean = false>(address: string, templateAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Disable token template - only factory Owner
     * @param {String} address
     * @param {Number} templateIndex index of the template we want to disable
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    disableNFTTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Reactivate a previously disabled token template - only factory Owner
     * @param {String} address
     * @param {Number} templateIndex index of the template we want to reactivate
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    reactivateNFTTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add a new NFT token template - only factory Owner
     * @param {String} address caller address
     * @param {String} templateAddress template address to add
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    addTokenTemplate<G extends boolean = false>(address: string, templateAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Disable token template - only factory Owner
     * @param {String} address caller address
     * @param {Number} templateIndex index of the template we want to disable
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    disableTokenTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Reactivate a previously disabled token template - only factory Owner
     * @param {String} address caller address
     * @param {Number} templateIndex index of the template we want to reactivate
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    reactivateTokenTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     *      Used as a proxy to order multiple services
     *      Users can have inifinite approvals for fees for factory instead of having one approval/ Datatoken contract
     *      Requires previous approval of all :
     *          - consumeFeeTokens
     *          - publishMarketFeeTokens
     *          - ERC20 Datatokens
     * @param {TokenOrder[]} orders array of of orders
     * @param {Boolean} [estimateGas] if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    startMultipleTokenOrder<G extends boolean = false>(orders: TokenOrder[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     *  Creates a new NFT, then a datatoken,all in one call
     * @param {NftCreateData} nftCreateData - The data required to create an NFT.
     * @param {DatatokenCreateParams} dtParams - The parameters required to create a datatoken.
     * @param {boolean} [estimateGas] - Whether to return only estimate gas or not.
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    createNftWithDatatoken<G extends boolean = false>(nftCreateData: NftCreateData, dtParams: DatatokenCreateParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates an NFT with a datatoken with a fixed rate  all in one call.
     * be aware if Fixed Rate creation fails, you are still going to pay a lot of gas
     * @param {NftCreateData} nftCreateData - The data required to create an NFT.
     * @param {DatatokenCreateParams} dtParams - The parameters required to create a datatoken.
     * @param {FreCreationParams} freParams - The parameters required to create a fixed-rate exchange contract.
     * @param {boolean} [estimateGas] - Whether to return only estimate gas or not.
     * @returns {Promis<ReceiptOrEstimate<G>>}
     */
    createNftWithDatatokenWithFixedRate<G extends boolean = false>(nftCreateData: NftCreateData, dtParams: DatatokenCreateParams, freParams: FreCreationParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates an NFT with a datatoken with a dispenser in one call.
     * Be aware if Fixed Rate creation fails, you are still going to pay a lot of gas
     * @param {NftCreateData} nftCreateData - The data required to create an NFT.
     * @param {DatatokenCreateParams} dtParams - The parameters required to create a datatoken.
     * @param {DispenserCreationParams} dispenserParams - The parameters required to create a dispenser contract.
     * @param {boolean} [estimateGas] - Whether to estimate gas or not.
     * @returns {Promis<ReceiptOrEstimate<G>>}
     */
    createNftWithDatatokenWithDispenser<G extends boolean = false>(nftCreateData: NftCreateData, dtParams: DatatokenCreateParams, dispenserParams: DispenserCreationParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Gets the parameters required to create an ERC20 token.
     * @param {DatatokenCreateParams} dtParams - The parameters required to create a datatoken.
     * @returns {Promise<any>}
     */
    private getErcCreationParams;
    /**
     * Gets the parameters required to create a fixed-rate exchange contract.
     * @param {FreCreationParams} freParams - The parameters required to create a fixed-rate exchange contract.
     * @returns {Promise<any> }
     */
    private getFreCreationParams;
}
