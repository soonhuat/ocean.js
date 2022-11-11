import { AbiItem } from 'web3-utils';
import { FreCreationParams, DatatokenCreateParams, DispenserCreationParams, NftCreateData, Template, TokenOrder, ReceiptOrEstimate } from '../@types';
import { SmartContractWithAddress } from './SmartContractWithAddress';
/**
 * Provides an interface for NFT Factory contract
 */
export declare class NftFactory extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Create new NFT
     * @param {String} address
     * @param {NFTCreateData} nftData
     * @return {Promise<string>} NFT datatoken address
     */
    createNFT<G extends boolean = false>(address: string, nftData: NftCreateData, estimateGas?: G): Promise<G extends false ? string : number>;
    /** Get Current NFT Count (NFT created)
     * @return {Promise<number>} Number of NFT created from this factory
     */
    getCurrentNFTCount(): Promise<number>;
    /** Get Current Datatoken Count
     * @return {Promise<number>} Number of DTs created from this factory
     */
    getCurrentTokenCount(): Promise<number>;
    /** Get Factory Owner
     * @return {Promise<string>} Factory Owner address
     */
    getOwner(): Promise<string>;
    /** Get Current NFT Template Count
     * @return {Promise<number>} Number of NFT Template added to this factory
     */
    getCurrentNFTTemplateCount(): Promise<number>;
    /** Get Current Template  Datatoken (ERC20) Count
     * @return {Promise<number>} Number of Datatoken Template added to this factory
     */
    getCurrentTokenTemplateCount(): Promise<number>;
    /** Get NFT Template
     * @param {Number} index Template index
     * @return {Promise<Template>} Number of Template added to this factory
     */
    getNFTTemplate(index: number): Promise<Template>;
    /** Get Datatoken (ERC20) Template
     * @param {Number} index Template index
     * @return {Promise<Template>} DT Template info
     */
    getTokenTemplate(index: number): Promise<Template>;
    /** Check if Datatoken is deployed from the factory
     * @param {String} datatoken Datatoken address we want to check
     * @return {Promise<Boolean>} return true if deployed from this factory
     */
    checkDatatoken(datatoken: string): Promise<Boolean>;
    /** Check if  NFT is deployed from the factory
     * @param {String} nftAddress nftAddress address we want to check
     * @return {Promise<String>} return address(0) if it's not, or the nftAddress if true
     */
    checkNFT(nftAddress: string): Promise<String>;
    /**
     * Add a new NFT token template - only factory Owner
     * @param {String} address
     * @param {String} templateAddress template address to add
     * @return {Promise<ReceiptOrEstimate>}
     */
    addNFTTemplate<G extends boolean = false>(address: string, templateAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Disable token template - only factory Owner
     * @param {String} address
     * @param {Number} templateIndex index of the template we want to disable
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    disableNFTTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Reactivate a previously disabled token template - only factory Owner
     * @param {String} address
     * @param {Number} templateIndex index of the template we want to reactivate
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    reactivateNFTTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add a new NFT token template - only factory Owner
     * @param {String} address
     * @param {String} templateAddress template address to add
     * @return {Promise<ReceiptOrEstimate>}
     */
    addTokenTemplate<G extends boolean = false>(address: string, templateAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Disable token template - only factory Owner
     * @param {String} address
     * @param {Number} templateIndex index of the template we want to disable
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    disableTokenTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Reactivate a previously disabled token template - only factory Owner
     * @param {String} address
     * @param {Number} templateIndex index of the template we want to reactivate
     * @return {Promise<ReceiptOrEstimate>} current token template count
     */
    reactivateTokenTemplate<G extends boolean = false>(address: string, templateIndex: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * @dev startMultipleTokenOrder
     *      Used as a proxy to order multiple services
     *      Users can have inifinite approvals for fees for factory instead of having one approval/ Datatoken contract
     *      Requires previous approval of all :
     *          - consumeFeeTokens
     *          - publishMarketFeeTokens
     *          - ERC20 Datatokens
     * @param address Caller address
     * @param orders an array of struct tokenOrder
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    startMultipleTokenOrder<G extends boolean = false>(address: string, orders: TokenOrder[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * @dev createNftWithDatatoken
     *      Creates a new NFT, then a Datatoken,all in one call
     * @param address Caller address
     * @param _NftCreateData input data for nft creation
     * @param _ErcCreateData input data for Datatoken creation
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    createNftWithDatatoken<G extends boolean = false>(address: string, nftCreateData: NftCreateData, dtParams: DatatokenCreateParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * @dev createNftWithDatatokenWithFixedRate
     *      Creates a new NFT, then a Datatoken, then a FixedRateExchange, all in one call
     *      Use this carefully, because if Fixed Rate creation fails, you are still going to pay a lot of gas
     * @param address Caller address
     * @param nftCreateData input data for NFT Creation
     * @param dtParams input data for Datatoken Creation
     * @param freParams input data for FixedRate Creation
     *  @return {Promise<TransactionReceipt>} transaction receipt
     */
    createNftWithDatatokenWithFixedRate<G extends boolean = false>(address: string, nftCreateData: NftCreateData, dtParams: DatatokenCreateParams, freParams: FreCreationParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * @dev createNftWithDatatokenWithDispenser
     *      Creates a new NFT, then a Datatoken, then a Dispenser, all in one call
     *      Use this carefully, because if Dispenser creation fails, you are still going to pay a lot of gas
     * @param address Caller address
     * @param nftCreateData input data for NFT Creation
     * @param dtParams input data for Datatoken Creation
     * @param dispenserParams input data for Dispenser Creation
     *  @return {Promise<TransactionReceipt>} transaction receipt
     */
    createNftWithDatatokenWithDispenser<G extends boolean = false>(address: string, nftCreateData: NftCreateData, dtParams: DatatokenCreateParams, dispenserParams: DispenserCreationParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    private getErcCreationParams;
    private getFreCreationParams;
}
