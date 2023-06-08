import { Config } from '.';
export declare const configHelperNetworks: Config[];
export declare class ConfigHelper {
    getAddressesFromEnv(network: string, customAddresses?: any): Partial<Config>;
    /**
     * Returns the config object for a specific network supported by the oceanprotocol stack
     * @param {string | number} network the network's chainId or name
     * @param {string} infuraProjectId optional infura project id that will replace the configs node URI
     * @return {Config} Config obhjedct
     */
    getConfig(network: string | number, infuraProjectId?: string): Config;
}
