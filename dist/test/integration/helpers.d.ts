import { Aquarius, ProviderComputeInitialize, ConsumeMarketFee, Datatoken, Config, DDO } from '../../src';
export declare function createAsset(name: string, symbol: string, owner: string, assetUrl: any, ddo: any, providerUrl: string, nftContractAddress: string, // addresses.ERC721Factory,
aquariusInstance: Aquarius): Promise<any>;
export declare function updateAssetMetadata(owner: string, updatedDdo: DDO, providerUrl: string, aquariusInstance: Aquarius): Promise<import("web3-core").TransactionReceipt>;
export declare function handleComputeOrder(order: ProviderComputeInitialize, datatokenAddress: string, payerAccount: string, consumerAccount: string, serviceIndex: number, datatoken: Datatoken, config: Config, consumeMarkerFee?: ConsumeMarketFee): Promise<string>;
export declare function orderAsset(did: string, datatokenAddress: string, consumerAccount: string, serviceId: string, serviceIndex: number, datatoken: Datatoken, providerUrl: string): Promise<import("web3-core").TransactionReceipt>;
