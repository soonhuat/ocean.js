import { Config } from '.';
export declare const configHelperNetworks: Config[];
export declare class ConfigHelper {
    getAddressesFromEnv(network: string, customAddresses?: any): Partial<Config>;
    getConfig(network: string | number, infuraProjectId?: string): Config;
}
