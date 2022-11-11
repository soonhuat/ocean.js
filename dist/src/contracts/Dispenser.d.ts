import { AbiItem } from 'web3-utils';
import { Datatoken } from './Datatoken';
import { SmartContractWithAddress } from './SmartContractWithAddress';
import { DispenserToken, ReceiptOrEstimate } from '../@types';
export declare class Dispenser extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * Get information about a datatoken dispenser
     * @param {String} dtAddress
     * @return {Promise<FixedPricedExchange>} Exchange details
     */
    status(dtAdress: string): Promise<DispenserToken>;
    /**
     * Creates a new Dispenser
     * @param {String} dtAddress Datatoken address
     * @param {String} address Owner address
     * @param {String} maxTokens max tokens to dispense
     * @param {String} maxBalance max balance of requester
     * @param {String} allowedSwapper  only account that can ask tokens. set address(0) if not required
     * @return {Promise<ReceiptOrEstimate>} transactionId
     */
    create<G extends boolean = false>(dtAddress: string, address: string, maxTokens: string, maxBalance: string, allowedSwapper: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Activates a new dispener.
     * @param {String} dtAddress refers to datatoken address.
     * @param {Number} maxTokens max amount of tokens to dispense
     * @param {Number} maxBalance max balance of user. If user balance is >, then dispense will be rejected
     * @param {String} address User address (must be owner of the datatoken)
     * @return {Promise<ReceiptOrEstimate>} TransactionReceipt
     */
    activate<G extends boolean = false>(dtAddress: string, maxTokens: string, maxBalance: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Deactivate an existing dispenser.
     * @param {String} dtAddress refers to datatoken address.
     * @param {String} address User address (must be owner of the datatoken)
     * @return {Promise<ReceiptOrEstimate>} TransactionReceipt
     */
    deactivate<G extends boolean = false>(dtAddress: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Sets a new allowedSwapper.
     * @param {String} dtAddress refers to datatoken address.
     * @param {String} address User address (must be owner of the datatoken)
     * @param {String} newAllowedSwapper refers to the new allowedSwapper
     * @return {Promise<ReceiptOrEstimate>} TransactionReceipt
     */
    setAllowedSwapper<G extends boolean = false>(dtAddress: string, address: string, newAllowedSwapper: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Dispense datatokens to caller.
     * The dispenser must be active, hold enough DT (or be able to mint more)
     * and respect maxTokens/maxBalance requirements
     * @param {String} dtAddress refers to datatoken address.
     * @param {String} address User address
     * @param {String} amount amount of datatokens required.
     * @param {String} destination who will receive the tokens
     * @return {Promise<ReceiptOrEstimate>} TransactionReceipt
     */
    dispense<G extends boolean = false>(dtAddress: string, address: string, amount: string, destination: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Withdraw all tokens from the dispenser
     * @param {String} dtAddress refers to datatoken address.
     * @param {String} address User address (must be owner of the dispenser)
     * @return {Promise<ReceiptOrEstimate>} TransactionReceipt
     */
    ownerWithdraw<G extends boolean = false>(dtAddress: string, address: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Check if tokens can be dispensed
     * @param {String} dtAddress
     * @param {String} address User address that will receive datatokens
     * @param {String} amount amount of datatokens required.
     * @return {Promise<Boolean>}
     */
    isDispensable(dtAddress: string, datatoken: Datatoken, address: string, amount?: string): Promise<Boolean>;
}
