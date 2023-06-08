import { BigNumber } from 'ethers';
import { MetadataProof, MetadataAndTokenURI, NftRoles, ReceiptOrEstimate, AbiItem } from '../@types';
import { SmartContract } from './SmartContract';
export declare class Nft extends SmartContract {
    getDefaultAbi(): AbiItem[];
    /**
     * Create new ERC20 Datatoken - only user with DatatokenDeployer permission can succeed
     * @param {String} nftAddress NFT address
     * @param {String} address User address
     * @param {String} minter User set as initial minter for the Datatoken
     * @param {String} paymentCollector initial paymentCollector for this DT
     * @param {String} mpFeeAddress Consume marketplace fee address
     * @param {String} feeToken address of the token marketplace wants to add fee on top
     * @param {String} feeAmount amount of feeToken to be transferred to mpFeeAddress on top, will be converted to WEI
     * @param {String} cap Maximum cap (Number) - will be converted to wei
     * @param {String} name Token name
     * @param {String} symbol Token symbol
     * @param {Number} templateIndex NFT template index
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<string>} ERC20 Datatoken address
     */
    createDatatoken<G extends boolean = false>(nftAddress: string, address: string, minter: string, paymentCollector: string, mpFeeAddress: string, feeToken: string, feeAmount: string, cap: string, name?: string, symbol?: string, templateIndex?: number, estimateGas?: G): Promise<G extends false ? string : BigNumber>;
    /**
     * Add Manager for NFT Contract (only NFT Owner can succeed)
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Owner adress
     * @param {String} manager User adress which is going to be assing manager
     * @param {Boolean} [estimateGas] if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    addManager<G extends boolean = false>(nftAddress: string, address: string, manager: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Removes a specific manager for NFT Contract (only NFT Owner can succeed)
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Owner adress
     * @param {String} manager User adress which is going to be removed as manager
     * @param {Boolean} [estimateGas] if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    removeManager<G extends boolean = false>(nftAddress: string, address: string, manager: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add DatatokenDeployer permission - only Manager can succeed
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Manager adress
     * @param {String} datatokenDeployer User adress which is going to have DatatokenDeployer permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    addDatatokenDeployer<G extends boolean = false>(nftAddress: string, address: string, datatokenDeployer: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Remove DatatokenDeployer permission - only Manager can succeed
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Manager adress
     * @param {String} datatokenDeployer Address of the user to be revoked DatatokenDeployer Permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    removeDatatokenDeployer<G extends boolean = false>(nftAddress: string, address: string, datatokenDeployer: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add Metadata Updater permission - only Manager can succeed
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Manager adress
     * @param {String} metadataUpdater User adress which is going to have Metadata Updater permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    addMetadataUpdater<G extends boolean = false>(nftAddress: string, address: string, metadataUpdater: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Remove Metadata Updater permission - only Manager can succeed
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Manager adress
     * @param {String} metadataUpdater Address of the user to be revoked Metadata updater Permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    removeMetadataUpdater<G extends boolean = false>(nftAddress: string, address: string, metadataUpdater: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add Store Updater permission - only Manager can succeed
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Manager adress
     * @param {String} storeUpdater User adress which is going to have Store Updater permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    addStoreUpdater<G extends boolean = false>(nftAddress: string, address: string, storeUpdater: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Remove Store Updater permission - only Manager can succeed
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Manager adress
     * @param {String} storeUpdater Address of the user to be revoked Store Updater Permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    removeStoreUpdater<G extends boolean = false>(nftAddress: string, address: string, storeUpdater: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * This function allows to remove all ROLES at NFT level: Managers, DatatokenDeployer, MetadataUpdater, StoreUpdater
     * Even NFT Owner has to readd himself as Manager
     * Permissions at Datatoken level stay.
     * Only NFT Owner  can call it.
     * @param {String} nftAddress NFT contract address
     * @param {String} address NFT Owner adress
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    cleanPermissions<G extends boolean = false>(nftAddress: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Transfers the NFT
     * will clean all permissions both on NFT and Datatoken level.
     * @param {String} nftAddress NFT contract address
     * @param {String} nftOwner Current NFT Owner adress
     * @param {String} nftReceiver User which will receive the NFT, will also be set as Manager
     * @param {Number} tokenId The id of the token to be transfered
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    transferNft<G extends boolean = false>(nftAddress: string, nftOwner: string, nftReceiver: string, tokenId?: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * safeTransferNFT Used for transferring the NFT, can be used by an approved relayer
     * will clean all permissions both on NFT and Datatoken level.
     * @param {String} nftAddress NFT contract address
     * @param {String} nftOwner Current NFT Owner adress
     * @param {String} nftReceiver User which will receive the NFT, will also be set as Manager
     * @param {Number} tokenId The id of the token to be transfered
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    safeTransferNft<G extends boolean = false>(nftAddress: string, nftOwner: string, nftReceiver: string, tokenId?: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates or update Metadata cached by Aquarius. Also, updates the METADATA_DECRYPTOR key
     * @param {String} nftAddress NFT contract address
     * @param {String} address Caller address NFT Owner adress
     * @param {Number} metadataState
     * @param {String} metadataDecryptorUrl
     * @param {String} metadataDecryptorAddress
     * @param {String} flags
     * @param {String} data
     * @param {String} metadataHash
     * @param {MetadataProof[]} metadataProofs
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    setMetadata<G extends boolean = false>(nftAddress: string, address: string, metadataState: number, metadataDecryptorUrl: string, metadataDecryptorAddress: string, flags: string, data: string, metadataHash: string, metadataProofs?: MetadataProof[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     *  Helper function to improve UX sets both MetaData & TokenURI in one tx
     * @param {String} nftAddress NFT contract address
     * @param {String} address Caller address
     * @param {MetadataAndTokenURI} metadataAndTokenURI metaDataAndTokenURI object
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    setMetadataAndTokenURI<G extends boolean = false>(nftAddress: string, metadataUpdater: string, metadataAndTokenURI: MetadataAndTokenURI, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * setMetadataState Used for updating the metadata State
     * @param {String} nftAddress NFT contract address
     * @param {String} address Caller address => metadata updater
     * @param {Number} metadataState new metadata state
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    setMetadataState<G extends boolean = false>(nftAddress: string, address: string, metadataState: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * set TokenURI on an nft
     * @param {String} nftAddress NFT contract address
     * @param {String} data input data for TokenURI
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    setTokenURI<G extends boolean = false>(nftAddress: string, data: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Get NFT Owner
     * @param {String} nftAddress NFT contract address
     * @return {Promise<string>} string
     */
    getNftOwner(nftAddress: string): Promise<string>;
    /**
     * Gets NFT Permissions for a specified user
     * @param {String} nftAddress NFT contract address
     * @param {String} address user adress
     * @return {Promise<NftRoles>}
     */
    getNftPermissions(nftAddress: string, address: string): Promise<NftRoles>;
    /**
     * Returns Metadata details for an NFT
     * @param {String} nftAddress NFT contract address
     * @return {Promise<Objecta>}
     */
    getMetadata(nftAddress: string): Promise<Object>;
    /**
     * Checks if user has DatatokenDeployer role
     * @param {String} nftAddress NFT contract address
     * @param {String} address user adress
     * @return {Promise<boolean>}
     */
    isDatatokenDeployer(nftAddress: string, address: string): Promise<boolean>;
    /**
     * Allows users to store data with a preset key (keccak256(ERC20Address)) into NFT 725 Store
     * only ERC20Deployer can succeed
     * @param {string} nftAddress Nft datatoken adress
     * @param {string} address User adress
     * @param {string} key Key of the data to be stored into 725Y standard
     * @param {string} value Data to be stored into 725Y standard
     * @param {boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    setData<G extends boolean = false>(nftAddress: string, address: string, key: string, value: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Gets stored data at a given `key` in an NFT
     * @param {string} nftAddress - The address of the NFT.
     * @param {string} key - The key of the data to get.
     * @return {Promise<string>} The data stored at the key
     */
    getData(nftAddress: string, key: string): Promise<string>;
    /**
     * Gets the token URI of an NFT.
     * @param {string} nftAddress - The address of the NFT.
     * @param {number} id - The ID of the token.
     * @returns {Promise&lt;string&gt;}
     */
    getTokenURI(nftAddress: string, id: number): Promise<string>;
}
