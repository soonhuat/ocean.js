import { Asset, DDO, ValidateMetadata } from '../@types';
export interface SearchQuery {
    from?: number;
    size?: number;
    query: any;
    sort?: {
        [jsonPath: string]: string;
    };
    aggs?: any;
}
export declare class Aquarius {
    aquariusURL: string;
    /**
     * Instantiate Aquarius
     * @param {String} aquariusURL
     */
    constructor(aquariusURL: string);
    /** Resolves a DID
     * @param {string} did DID of the asset.
     * @param {AbortSignal} signal abort signal
     * @return {Promise<Asset>} Asset
     */
    resolve(did: string, signal?: AbortSignal): Promise<Asset>;
    /**
     * Blocks until Aqua will cache the did (or the update for that did) or timeouts
     * @param {string} did DID of the asset.
     * @param {string} txid used when the did exists and we expect an update with that txid.
     * @param {AbortSignal} signal abort signal
     * @return {Promise<Asset>} DDO of the asset.
     */
    waitForAqua(did: string, txid?: string, signal?: AbortSignal): Promise<Asset>;
    /**
     * Validate DDO content
     * @param {DDO} ddo DID Descriptor Object content.
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ValidateMetadata>}.
     */
    validate(ddo: DDO, signal?: AbortSignal): Promise<ValidateMetadata>;
    /**
     * Search over the DDOs using a query.
     * @param {string} did DID of the asset
     * @param {AbortSignal} signal abort signal
     * @return {Promise<QueryResult>}
     */
    getAssetMetadata(did: string, signal?: AbortSignal): Promise<any>;
    /**
     * Search over the DDOs using a query.
     * @param  {SearchQuery} query Query to filter the DDOs.
     * @param {AbortSignal} signal abort signal
     * @return {Promise<QueryResult>}
     */
    querySearch(query: SearchQuery, signal?: AbortSignal): Promise<any>;
}
