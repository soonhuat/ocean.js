import { AbiItem } from 'web3-utils/types';
import { PriceAndFees, FeesInfo, FixedPriceExchange, ReceiptOrEstimate } from '../@types';
import { SmartContractWithAddress } from './SmartContractWithAddress';
export declare class FixedRateExchange extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Creates unique exchange identifier.
     * @param {String} baseToken baseToken contract address
     * @param {String} datatoken Datatoken contract address
     * @return {Promise<string>} exchangeId
     */
    generateExchangeId(baseToken: string, datatoken: string): Promise<string>;
    /**
     * Atomic swap
     * @param {String} exchangeId ExchangeId
     * @param {String} datatokenAmount Amount of datatokens
     * @param {String} maxBaseTokenAmount max amount of baseToken we want to pay for datatokenAmount
     * @param {String} address User address
     * @param {String} consumeMarketAddress consumeMarketAddress
     * @param {String} consumeMarketFee consumeMarketFee in fraction
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    buyDatatokens<G extends boolean = false>(address: string, exchangeId: string, datatokenAmount: string, maxBaseTokenAmount: string, consumeMarketAddress?: string, consumeMarketFee?: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Sell datatokenAmount while expecting at least minBaseTokenAmount
     * @param {String} exchangeId ExchangeId
     * @param {String} datatokenAmount Amount of datatokens
     * @param {String} minBaseTokenAmount min amount of baseToken we want to receive back
     * @param {String} address User address
     * @param {String} consumeMarketAddress consumeMarketAddress
     * @param {String} consumeMarketFee consumeMarketFee in fraction
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    sellDatatokens<G extends boolean = false>(address: string, exchangeId: string, datatokenAmount: string, minBaseTokenAmount: string, consumeMarketAddress?: string, consumeMarketFee?: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Gets total number of exchanges
     * @param {String} exchangeId ExchangeId
     * @param {Number} datatokenAmount Amount of datatokens
     * @return {Promise<Number>} no of available exchanges
     */
    getNumberOfExchanges(): Promise<number>;
    /**
     * Set new rate
     * @param {String} exchangeId ExchangeId
     * @param {String} newRate New rate
     * @param {String} address User account
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    setRate<G extends boolean = false>(address: string, exchangeId: string, newRate: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Sets a new allowedSwapper
     * @param {String} exchangeId ExchangeId
     * @param {String} newAllowedSwapper newAllowedSwapper (set address zero if we want to remove allowed swapper)
     * @param {String} address User account
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    setAllowedSwapper<G extends boolean = false>(address: string, exchangeId: string, newAllowedSwapper: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Activate an exchange
     * @param {String} exchangeId ExchangeId
     * @param {String} address User address
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    activate<G extends boolean = false>(address: string, exchangeId: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deactivate an exchange
     * @param {String} exchangeId ExchangeId
     * @param {String} address User address
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    deactivate<G extends boolean = false>(address: string, exchangeId: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Get Rate
     * @param {String} exchangeId ExchangeId
     * @return {Promise<string>} Rate (converted from wei)
     */
    getRate(exchangeId: string): Promise<string>;
    /**
     * Get Datatoken Supply in the exchange
     * @param {String} exchangeId ExchangeId
     * @return {Promise<string>}  dt supply formatted
     */
    getDatatokenSupply(exchangeId: string): Promise<string>;
    /**
     * Get BaseToken Supply in the exchange
     * @param {String} exchangeId ExchangeId
     * @return {Promise<string>} dt supply formatted
     */
    getBasetokenSupply(exchangeId: string): Promise<string>;
    /**
     * Get Allower Swapper (if set this is the only account which can use this exchange, else is set at address(0))
     * @param {String} exchangeId ExchangeId
     * @return {Promise<string>} address of allowedSwapper
     */
    getAllowedSwapper(exchangeId: string): Promise<string>;
    /**
     * calcBaseInGivenDatatokensOut - Calculates how many base tokens are needed to get specified amount of datatokens
     * @param {String} exchangeId ExchangeId
     * @param {string} datatokenAmount Amount of datatokens user wants to buy
     * @param {String} consumeMarketFee consumeMarketFee in fraction
     * @return {Promise<PriceAndFees>} how many base tokens are needed and fees
     */
    calcBaseInGivenDatatokensOut(exchangeId: string, datatokenAmount: string, consumeMarketFee?: string): Promise<PriceAndFees>;
    /**
     * getBTOut - returns amount in baseToken that user will receive for datatokenAmount sold
     * @param {String} exchangeId ExchangeId
     * @param {Number} datatokenAmount Amount of datatokens
     * @param {String} consumeMarketFee consumeMarketFee in fraction
     * @return {Promise<string>} Amount of baseTokens user will receive
     */
    getAmountBasetokensOut(exchangeId: string, datatokenAmount: string, consumeMarketFee?: string): Promise<string>;
    /**
     * Get exchange details
     * @param {String} exchangeId ExchangeId
     * @return {Promise<FixedPricedExchange>} Exchange details
     */
    getExchange(exchangeId: string): Promise<FixedPriceExchange>;
    /**
     * Get fee details for an exchange
     * @param {String} exchangeId ExchangeId
     * @return {Promise<FixedPricedExchange>} Exchange details
     */
    getFeesInfo(exchangeId: string): Promise<FeesInfo>;
    /**
     * Get all exchanges
     * @param {String} exchangeId ExchangeId
     * @return {Promise<String[]>} Exchanges list
     */
    getExchanges(): Promise<string[]>;
    /**
     * Check if an exchange is active
     * @param {String} exchangeId ExchangeId
     * @return {Promise<Boolean>} Result
     */
    isActive(exchangeId: string): Promise<boolean>;
    /**
     * Activate minting option for fixed rate contract
     * @param {String} exchangeId ExchangeId
     * @param {String} address User address
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    activateMint<G extends boolean = false>(address: string, exchangeId: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deactivate minting for fixed rate
     * @param {String} exchangeId ExchangeId
     * @param {String} address User address
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    deactivateMint<G extends boolean = false>(address: string, exchangeId: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Collect BaseTokens in the contract (anyone can call this, funds are sent to Datatoken.paymentCollector)
     * @param {String} address User address
     * @param {String} exchangeId ExchangeId
     * @param {String} amount amount to be collected
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    collectBasetokens<G extends boolean = false>(address: string, exchangeId: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Collect datatokens in the contract (anyone can call this, funds are sent to Datatoken.paymentCollector)
     * @param {String} address User address
     * @param {String} exchangeId ExchangeId
     * @param {String} amount amount to be collected
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    collectDatatokens<G extends boolean = false>(address: string, exchangeId: string, amount: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Collect market fee and send it to marketFeeCollector (anyone can call it)
     * @param {String} exchangeId ExchangeId
     * @param {String} address User address
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    collectMarketFee<G extends boolean = false>(address: string, exchangeId: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Collect ocean fee and send it to OPF collector (anyone can call it)
     * @param {String} exchangeId ExchangeId
     * @param {String} address User address
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    collectOceanFee<G extends boolean = false>(address: string, exchangeId: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Get OPF Collector of fixed rate contract
     * @return {String}
     */
    getOPCCollector(): Promise<string>;
    /**
     * Get Router address set in fixed rate contract
     * @return {String}
     */
    getRouter(): Promise<string>;
    /**
     * Get Exchange Owner given an exchangeId
     * @param {String} exchangeId ExchangeId
     * @return {String} return exchange owner
     */
    getExchangeOwner(exchangeId: string): Promise<string>;
    /**
     * Set new market fee, only market fee collector can update it
     * @param {String} address user address
     * @param {String} exchangeId ExchangeId
     * @param {String} newMarketFee New market fee
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    updateMarketFee<G extends boolean = false>(address: string, exchangeId: string, newMarketFee: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Set new market fee collector, only market fee collector can update it
     * @param {String} address user address
     * @param {String} exchangeId ExchangeId
     * @param {String} newMarketFeeCollector New market fee collector
     * @return {Promise<ReceiptOrEstimate>} transaction receipt
     */
    updateMarketFeeCollector<G extends boolean = false>(address: string, exchangeId: string, newMarketFeeCollector: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
}
