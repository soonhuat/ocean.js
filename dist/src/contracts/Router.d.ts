import { AbiItem } from 'web3-utils';
import { Operation, ReceiptOrEstimate } from '../@types';
import { SmartContractWithAddress } from './SmartContractWithAddress';
/**
 * Provides an interface for FactoryRouter contract
 */
export declare class Router extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * buyDatatokenBatch
     * @param {String} address
     * @param {Operation} operations Operations objects array
     * @return {Promise<ReceiptOrEstimate>} Transaction receipt
     */
    buyDatatokenBatch<G extends boolean = false>(address: string, operations: Operation[], estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Check if a token is on approved tokens list, if true opfFee is lower in pools with that token/DT
     * @return {Promise<boolean>} true if is on the list.
     */
    isApprovedToken(address: string): Promise<boolean>;
    /** Check if an address is a Fixed Rate contract.
     * @return {Promise<boolean>} true if is a Fixed Rate contract
     */
    isFixedPrice(address: string): Promise<boolean>;
    /** Get Router Owner
     * @return {Promise<string>} Router Owner address
     */
    getOwner(): Promise<string>;
    /** Get NFT Factory address
     * @return {Promise<string>} NFT Factory address
     */
    getNFTFactory(): Promise<string>;
    /**
     * Adds a token to the list of tokens with reduced fees
     * @param {String} address caller address
     * @param {String} tokenAddress token address to add
     * @return {Promise<ReceiptOrEstimate>}
     */
    addApprovedToken<G extends boolean = false>(address: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Removes a token if exists from the list of tokens with reduced fees
     * @param {String} address
     * @param {String} tokenAddress address to remove
     * @return {Promise<ReceiptOrEstimate>}
     */
    removeApprovedToken<G extends boolean = false>(address: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Adds an address to the list of fixed rate contracts
     * @param {String} address
     * @param {String} tokenAddress contract address to add
     * @return {Promise<ReceiptOrEstimate>}
     */
    addFixedRateContract<G extends boolean = false>(address: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Removes an address from the list of fixed rate contracts
     * @param {String} address
     * @param {String} tokenAddress contract address to add
     * @return {Promise<ReceiptOrEstimate>}
     */
    removeFixedRateContract<G extends boolean = false>(address: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Adds an address to the list of dispensers
     * @param {String} address
     * @param {String} tokenAddress contract address to add
     * @return {Promise<ReceiptOrEstimate>}
     */
    addDispenserContract<G extends boolean = false>(address: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /**
     * Removes an address from the list of dispensers
     * @param {String} address
     * @param {String} tokenAddress address Contract to be removed
     * @return {Promise<ReceiptOrEstimate>}
     */
    removeDispenserContract<G extends boolean = false>(address: string, tokenAddress: string, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
    /** Get OPF Fee per token
     * @return {Promise<number>} OPC fee for a specific baseToken
     */
    getOPCFee(baseToken: string): Promise<number>;
    /** Get Current OPF Fee
     * @return {Promise<number>} OPF fee
     */
    getCurrentOPCFee(): Promise<number>;
    /**
     * Updates OP Community Fees
     * @param {String} address
     * @param {number} newSwapOceanFee Amount charged for swapping with ocean approved tokens
     * @param {number} newSwapNonOceanFee Amount charged for swapping with non ocean approved tokens
     * @param {number} newConsumeFee Amount charged from consumeFees
     * @param {number} newProviderFee Amount charged for providerFees
     * @return {Promise<ReceiptOrEstimate>}
     */
    updateOPCFee<G extends boolean = false>(address: string, newSwapOceanFee: number, newSwapNonOceanFee: number, newConsumeFee: number, newProviderFee: number, estimateGas?: G): Promise<ReceiptOrEstimate<G>>;
}
