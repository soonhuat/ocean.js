import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { TransactionReceipt } from 'web3-eth';
import { ConsumeMarketFee, FreOrderParams, FreCreationParams, ProviderFees, PublishingMarketFee, DispenserParams, OrderParams, DatatokenRoles, ReceiptOrEstimate } from '../@types';
import { Nft } from './NFT';
import { Config } from '../config';
import { SmartContract } from './SmartContract';
export declare class Datatoken extends SmartContract {
    abiEnterprise: AbiItem | AbiItem[];
    nft: Nft;
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Instantiate ERC20 Datatokens
     * @param {AbiItem | AbiItem[]} datatokensAbi
     * @param {Web3} web3
     */
    constructor(web3: Web3, network?: string | number, config?: Config, abi?: AbiItem | AbiItem[], abiEnterprise?: AbiItem | AbiItem[]);
    /**
     * Approve
     * @param {String} dtAddress Datatoken address
     * @param {String} spender Spender address
     * @param {string} amount Number of datatokens, as number. Will be converted to wei
     * @param {String} address User adress
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    approve<G extends boolean = false>(dtAddress: string, spender: string, amount: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates a new FixedRateExchange setup.
     * @param {String} dtAddress Datatoken address
     * @param {String} address Caller address
     * @param {String} fixedPriceAddress
     * @param {FixedRateParams} fixedRateParams
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    createFixedRate<G extends boolean = false>(dtAddress: string, address: string, fixedRateParams: FreCreationParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates a new Dispenser
     * @param {String} dtAddress Datatoken address
     * @param {String} address Caller address
     * @param {String} dispenserAddress ispenser contract address
     * @param {String} dispenserParams
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    createDispenser<G extends boolean = false>(dtAddress: string, address: string, dispenserAddress: string, dispenserParams: DispenserParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Mint
     * @param {String} dtAddress Datatoken address
     * @param {String} address Minter address
     * @param {String} amount Number of datatokens, as number. Will be converted to wei
     * @param {String} toAddress only if toAddress is different from the minter
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    mint<G extends boolean = false>(dtAddress: string, address: string, amount: string, toAddress?: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add Minter for an ERC20 Datatoken
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} minter User which is going to be a Minter
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    addMinter<G extends boolean = false>(dtAddress: string, address: string, minter: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Revoke Minter permission for an ERC20 Datatoken
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} minter User which will be removed from Minter permission
     * @param {Contract} contractInstance optional contract instance
     * @return {Promise<any>}
     */
    removeMinter<G extends boolean = false>(dtAddress: string, address: string, minter: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add addPaymentManager (can set who's going to collect fee when consuming orders)
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} paymentManager User which is going to be a Minter
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    addPaymentManager<G extends boolean = false>(dtAddress: string, address: string, paymentManager: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Revoke paymentManager permission for an ERC20 Datatoken
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} paymentManager User which will be removed from paymentManager permission
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    removePaymentManager<G extends boolean = false>(dtAddress: string, address: string, paymentManager: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * This function allows to set a new PaymentCollector (receives DT when consuming)
     * If not set the paymentCollector is the NFT Owner
     * only NFT owner can call
     * @param dtAddress datatoken address
     * @param address Caller address
     * @param paymentCollector User to be set as new payment collector
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    setPaymentCollector<G extends boolean = false>(dtAddress: string, address: string, paymentCollector: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** getPaymentCollector - It returns the current paymentCollector
     * @param dtAddress datatoken address
     * @return {Promise<string>}
     */
    getPaymentCollector(dtAddress: string): Promise<string>;
    /**
     * Transfer as number from address to toAddress
     * @param {String} dtAddress Datatoken address
     * @param {String} toAddress Receiver address
     * @param {String} amount Number of datatokens, as number. To be converted to wei.
     * @param {String} address User adress
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    transfer(dtAddress: string, toAddress: string, amount: string, address: string): Promise<TransactionReceipt>;
    /**
     * Transfer in wei from address to toAddress
     * @param {String} dtAddress Datatoken address
     * @param {String} toAddress Receiver address
     * @param {String} amount Number of datatokens, as number. Expressed as wei
     * @param {String} address User adress
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    transferWei<G extends boolean = false>(dtAddress: string, toAddress: string, amount: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Start Order: called by payer or consumer prior ordering a service consume on a marketplace.
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address which calls
     * @param {String} consumer Consumer Address
     * @param {Number} serviceIndex  Service index in the metadata
     * @param {providerFees} providerFees provider fees
     * @param {consumeMarketFee} ConsumeMarketFee consume market fees
     * @return {Promise<ReceiptOrEstimate>} string
     */
    startOrder<G extends boolean = false>(dtAddress: string, address: string, consumer: string, serviceIndex: number, providerFees: ProviderFees, consumeMarketFee?: ConsumeMarketFee, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Reuse Order: called by payer or consumer having a valid order, but with expired provider access.
     * Pays the provider fee again, but it will not require a new datatoken payment
     * Requires previous approval of provider fee.
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address which calls
     * @param {String} orderTxId previous valid order
     * @param {providerFees} providerFees provider fees
     * @return {Promise<ReceiptOrEstimate>} string
     */
    reuseOrder<G extends boolean = false>(dtAddress: string, address: string, orderTxId: string, providerFees: ProviderFees, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Buys 1 DT from the FRE and then startsOrder, while burning that DT
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address which calls
     * @param {OrderParams} orderParams Consumer Address
     * @param {FreParams} freParams Amount of tokens that is going to be transfered
     * @return {Promise<ReceiptOrEstimate>}
     */
    buyFromFreAndOrder<G extends boolean = false>(dtAddress: string, address: string, orderParams: OrderParams, freParams: FreOrderParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Gets DT from dispenser and then startsOrder, while burning that DT
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address which calls
     * @param {OrderParams} orderParams
     * @param {String} dispenserContract
     * @return {Promise<ReceiptOrEstimate>}
     */
    buyFromDispenserAndOrder<G extends boolean = false>(dtAddress: string, address: string, orderParams: OrderParams, dispenserContract: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** setData
     * This function allows to store data with a preset key (keccak256(dtAddress)) into NFT 725 Store
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} value Data to be stored into 725Y standard
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    setData<G extends boolean = false>(dtAddress: string, address: string, value: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Clean Datatoken level Permissions (minters, paymentManager and reset the paymentCollector) for an ERC20 Datatoken
     * Only NFT Owner (at 721 level) can call it.
     * @param dtAddress Datatoken address where we want to clean permissions
     * @param address User adress
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    cleanPermissions<G extends boolean = false>(dtAddress: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Returns ERC20 Datatoken user's permissions for a datatoken
     * @param {String} dtAddress Datatoken adress
     * @param {String} address user adress
     * @return {Promise<DatatokenRoles>}
     */
    getPermissions(dtAddress: string, address: string): Promise<DatatokenRoles>;
    /** Returns the Datatoken capital
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<string>}
     */
    getCap(dtAddress: string): Promise<string>;
    /** It returns the token decimals, how many supported decimal points
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getDecimals(dtAddress: string): Promise<string>;
    /** It returns the token symbol
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getSymbol(dtAddress: string): Promise<string>;
    /** It returns the name of the token
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getName(dtAddress: string): Promise<string>;
    /** It returns the token decimals, how many supported decimal points
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getNFTAddress(dtAddress: string): Promise<string>;
    /**  Returns true if address has deployERC20 role
     * @param {String} dtAddress Datatoken adress
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<boolean>}
     */
    isDatatokenDeployer(dtAddress: string, address: string): Promise<boolean>;
    /**
     * Get Address Balance for datatoken
     * @param {String} dtAddress Datatoken adress
     * @param {String} address user adress
     * @return {Promise<String>} balance  Number of datatokens. Will be converted from wei
     */
    balance(datatokenAddress: string, address: string): Promise<string>;
    /**
     * @dev setPublishingMarketFee
     *      Only publishMarketFeeAddress can call it
     *      This function allows to set the fee required by the publisherMarket
     * @param {string} datatokenAddress Datatoken adress
     * @param {string} publishMarketFeeAddress  new publish Market Fee Address
     * @param {string} publishMarketFeeToken new publish Market Fee Token
     * @param {string} publishMarketFeeAmount new fee amount
     * @param {String} address user adress
     */
    setPublishingMarketFee<G extends boolean = false>(datatokenAddress: string, publishMarketFeeAddress: string, publishMarketFeeToken: string, publishMarketFeeAmount: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * @dev getPublishingMarketFee
     *      Get publishingMarket Fee
     *      This function allows to get the current fee set by the publishing market
     * @param {String} datatokenAddress Datatoken adress
     * @param {String} address user adress
     * @return {Promise<PublishingMarketFee>} Current fee set by the publishing market
     */
    getPublishingMarketFee(datatokenAddress: string, address: string): Promise<PublishingMarketFee>;
    private getFreOrderParams;
}
