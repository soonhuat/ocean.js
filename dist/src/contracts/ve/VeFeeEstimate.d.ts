import { AbiItem } from 'web3-utils';
import { SmartContractWithAddress } from '../SmartContractWithAddress';
/**
 * Provides an interface for veOcean contract
 */
export declare class VeFeeEstimate extends SmartContractWithAddress {
    getDefaultAbi(): AbiItem | AbiItem[];
    /**
     * estimateClaim
     * @param {String} userAddress user address
     * @return {Promise<string>}
     */
    estimateClaim(userAddress: string): Promise<string>;
}
