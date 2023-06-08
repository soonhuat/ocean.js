import { Signer } from 'ethers';
import { AbiItem, ConsumeMarketFee, FreOrderParams, FreCreationParams, ProviderFees, PublishingMarketFee, DispenserParams, OrderParams, DatatokenRoles, ReceiptOrEstimate } from '../@types';
import { Nft } from './NFT';
import { Config } from '../config';
import { SmartContract } from './SmartContract';
export declare class Datatoken extends SmartContract {
    abiEnterprise: AbiItem[];
    nft: Nft;
    getDefaultAbi(): AbiItem[];
    /**
     * Instantiate Datatoken class
     * @param {Signer} signer The signer object.
     * @param {string | number} [network] Network id or name
     * @param {Config} [config] The configuration object.
     * @param {AbiItem[]} [abi] ABI array of the smart contract
     * @param {AbiItem[]} abiEnterprise Enterprise ABI array of the smart contract
     */
    constructor(signer: Signer, network?: string | number, config?: Config, abi?: AbiItem[], abiEnterprise?: AbiItem[]);
    /**
     * Approves a spender to spend a certain amount of datatokens.
     * @param {String} dtAddress Datatoken address
     * @param {String} spender Spender address
     * @param {string} amount Number of datatokens, as number. Will be converted to wei
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    approve<G extends boolean = false>(dtAddress: string, spender: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates a new FixedRateExchange setup.
     * @param {String} dtAddress Datatoken address
     * @param {String} address Caller address
     * @param {FixedRateParams} fixedRateParams The parameters required to create a fixed-rate exchange contract.
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    createFixedRate<G extends boolean = false>(dtAddress: string, address: string, fixedRateParams: FreCreationParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Creates a new Dispenser
     * @param {String} dtAddress Datatoken address
     * @param {String} address Caller address
     * @param {String} dispenserAddress Dispenser contract address
     * @param {DispenserParams} dispenserParams The parameters required to create a dispenser contract.
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    createDispenser<G extends boolean = false>(dtAddress: string, address: string, dispenserAddress: string, dispenserParams: DispenserParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Mints datatokens
     * @param {String} dtAddress Datatoken address
     * @param {String} address Minter address
     * @param {String} amount Number of datatokens, as number. Will be converted to wei
     * @param {String} toAddress only if toAddress is different from the minter
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    mint<G extends boolean = false>(dtAddress: string, address: string, amount: string, toAddress?: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Add Minter for an ERC20 Datatoken
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address caller address
     * @param {String} minter address which is going to be a Minter
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    addMinter<G extends boolean = false>(dtAddress: string, address: string, minter: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Revoke Minter permission for an ERC20 Datatoken
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address caller address
     * @param {String} minter address which will have removed the Minter permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    removeMinter<G extends boolean = false>(dtAddress: string, address: string, minter: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     *  Adds a payment manager on a datatoken to a desired address.(can set who's going to collect fee when consuming orders)
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address Caller address
     * @param {String} paymentManager  The address of the payment manager
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    addPaymentManager<G extends boolean = false>(dtAddress: string, address: string, paymentManager: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Revoke paymentManager permission for an ERC20 Datatoken
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} paymentManager User which will be removed from paymentManager permission
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    removePaymentManager<G extends boolean = false>(dtAddress: string, address: string, paymentManager: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * This function allows to set a new PaymentCollector (receives DT when consuming)
     * If not set the paymentCollector is the NFT Owner
     * only NFT owner can call
     * @param dtAddress Datatoken address
     * @param address Caller address
     * @param paymentCollector User to be set as new payment collector
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} trxReceipt
     */
    setPaymentCollector<G extends boolean = false>(dtAddress: string, address: string, paymentCollector: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * getPaymentCollector - It returns the current paymentCollector
     * @param dtAddress datatoken address
     * @return {Promise<string>}
     */
    getPaymentCollector(dtAddress: string): Promise<string>;
    /**
     * Transfer tokens(as number) from address to toAddress
     * @param {String} dtAddress Datatoken address
     * @param {String} toAddress Receiver address
     * @param {String} amount Number of datatokens, as number. Will be converted to wei.
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    transfer<G extends boolean = false>(dtAddress: string, toAddress: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Transfer in wei from address to toAddress
     * @param {String} dtAddress Datatoken address
     * @param {String} toAddress Receiver address
     * @param {String} amount Number of datatokens (number) expressed as wei
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    transferWei<G extends boolean = false>(dtAddress: string, toAddress: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Start Order: called by payer or consumer prior ordering a service consume on a marketplace.
     * @param {String} dtAddress Datatoken address
     * @param {String} consumer Consumer Address
     * @param {Number} serviceIndex  Service index in the metadata
     * @param {providerFees} providerFees provider fees
     * @param {consumeMarketFee} ConsumeMarketFee consume market fees
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} string
     */
    startOrder<G extends boolean = false>(dtAddress: string, consumer: string, serviceIndex: number, providerFees: ProviderFees, consumeMarketFee?: ConsumeMarketFee, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Reuse Order: called by payer or consumer having a valid order, but with expired provider access.
     * Pays the provider fee again, but it will not require a new datatoken payment
     * Requires previous approval of provider fee.
     * @param {String} dtAddress Datatoken address
     * @param {String} orderTxId previous valid order
     * @param {providerFees} providerFees provider fees
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} string
     */
    reuseOrder<G extends boolean = false>(dtAddress: string, orderTxId: string, providerFees: ProviderFees, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Buys 1 DT from the FRE and then startsOrder, while burning that DT
     * @param {String} dtAddress Datatoken address
     * @param {OrderParams} orderParams  The parameters required to place an order.
     * @param {FreParams} freParams The parameters required to buy from a fixed-rate exchange.
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    buyFromFreAndOrder<G extends boolean = false>(dtAddress: string, orderParams: OrderParams, freParams: FreOrderParams, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Gets 1 DT from dispenser and then startsOrder, while burning that DT
     * @param {String} dtAddress Datatoken address
     * @param {OrderParams} orderParams - The parameters required to place an order.
     * @param {String} dispenserContract  dispenser address
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>}
     */
    buyFromDispenserAndOrder<G extends boolean = false>(dtAddress: string, orderParams: OrderParams, dispenserContract: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** setData
     * This function allows to store data with a preset key (keccak256(dtAddress)) into NFT 725 Store
     * only DatatokenDeployer can succeed
     * @param {String} dtAddress Datatoken address
     * @param {String} address User address
     * @param {String} value Data to be stored into 725Y standard
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    setData<G extends boolean = false>(dtAddress: string, address: string, value: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Clean Datatoken level Permissions (minters, paymentManager and reset the paymentCollector) for an ERC20 Datatoken
     * Only NFT Owner (at 721 level) can call it.
     * @param {string} dtAddress Datatoken address where we want to clean permissions
     * @param {string} address User adress
     * @param {Boolean} estimateGas if True, return gas estimate
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    cleanPermissions<G extends boolean = false>(dtAddress: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Returns ERC20 Datatoken user's permissions for a datatoken
     * @param {String} dtAddress Datatoken adress
     * @param {String} address user adress
     * @return {Promise<DatatokenRoles>}
     */
    getPermissions(dtAddress: string, address: string): Promise<DatatokenRoles>;
    /**
     * Returns the Datatoken cap
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<string>}
     */
    getCap(dtAddress: string): Promise<string>;
    /**
     * It returns the token decimals, how many supported decimal points
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getDecimals(dtAddress: string): Promise<number>;
    /**
     * It returns the token symbol
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getSymbol(dtAddress: string): Promise<string>;
    /**
     *  It returns the name of the token
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getName(dtAddress: string): Promise<string>;
    /**
     * It returns the token decimals, how many supported decimal points
     * @param {String} dtAddress Datatoken adress
     * @return {Promise<number>}
     */
    getNFTAddress(dtAddress: string): Promise<string>;
    /**
     *  Returns true if address has deployERC20 role
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
     * Allows to set the fee required by the publisherMarket
     * only publishMarketFeeAddress can call it
     * @param {string} datatokenAddress Datatoken adress
     * @param {string} publishMarketFeeAddress  new publish Market Fee Address
     * @param {string} publishMarketFeeToken new publish Market Fee Token
     * @param {string} publishMarketFeeAmount new fee amount
     * @param {String} address user adress
     * @param {Boolean} estimateGas if True, return gas estimate
     */
    setPublishingMarketFee<G extends boolean = false>(datatokenAddress: string, publishMarketFeeAddress: string, publishMarketFeeToken: string, publishMarketFeeAmount: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Returns the current fee set by the publishing market
     * @param {String} datatokenAddress Datatoken adress
     * @return {Promise<PublishingMarketFee>} Current fee set by the publishing market
     */
    getPublishingMarketFee(datatokenAddress: string): Promise<PublishingMarketFee>;
    private getFreOrderParams;
}
