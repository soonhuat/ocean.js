import Web3 from 'web3';
import { Arweave, FileInfo, ComputeJob, ComputeOutput, ComputeAlgorithm, ComputeAsset, ComputeEnvironment, ProviderInitialize, ProviderComputeInitializeResults, ServiceEndpoint, UrlFile, UserCustomParameters, Ipfs, Smartcontract, GraphqlQuery } from '../@types';
export declare class Provider {
    /**
     * Returns the provider endpoints
     * @return {Promise<ServiceEndpoint[]>}
     */
    getEndpoints(providerUri: string): Promise<any>;
    getEndpointURL(servicesEndpoints: ServiceEndpoint[], serviceName: string): ServiceEndpoint;
    /**
     * Returns the service endpoints that exist in provider.
     * @param {any} endpoints
     * @return {Promise<ServiceEndpoint[]>}
     */
    getServiceEndpoints(providerEndpoint: string, endpoints: any): Promise<ServiceEndpoint[]>;
    /** Gets current nonce
     * @param {string} providerUri provider uri address
     * @param {string} consumerAddress Publisher address
     * @param {AbortSignal} signal abort signal
     * @param {string} providerEndpoints Identifier of the asset to be registered in ocean
     * @param {string} serviceEndpoints document description object (DDO)=
     * @return {Promise<string>} urlDetails
     */
    getNonce(providerUri: string, consumerAddress: string, signal?: AbortSignal, providerEndpoints?: any, serviceEndpoints?: ServiceEndpoint[]): Promise<string>;
    signProviderRequest(web3: Web3, accountId: string, message: string, password?: string): Promise<string>;
    /** Encrypt data using the Provider's own symmetric key
     * @param {string} data data in json format that needs to be sent , it can either be a DDO or a File array
     * @param {number} chainId network's id so provider can choose the corresponding web3 object
     * @param {string} providerUri provider uri address
     * @param {AbortSignal} signal abort signal
     * @return {Promise<string>} urlDetails
     */
    encrypt(data: any, chainId: number, providerUri: string, signal?: AbortSignal): Promise<string>;
    /** Get DDO File details (if possible)
     * @param {UrlFile | Arweave | Ipfs | GraphqlQuery | Smartcontract} file one of the supported file structures
     * @param {string} serviceId the id of the service for which to check the files
     * @param {string} providerUri uri of the provider that will be used to check the file
     * @param {boolean} withChecksum if true, will return checksum of files content
     * @param {AbortSignal} signal abort signal
     * @return {Promise<FileInfo[]>} urlDetails
     */
    checkDidFiles(did: string, serviceId: string, providerUri: string, withChecksum?: boolean, signal?: AbortSignal): Promise<FileInfo[]>;
    /** Get URL details (if possible)
     * @param {UrlFile | Arweave | Ipfs | GraphqlQuery | Smartcontract} file one of the supported file structures
     * @param {string} providerUri uri of the provider that will be used to check the file
     * @param {boolean} withChecksum if true, will return checksum of files content
     * @param {AbortSignal} signal abort signal
     * @param {any} headers headers key value pairs associated with the asset GET request
     * @return {Promise<FileInfo[]>} urlDetails
     */
    getFileInfo(file: UrlFile | Arweave | Ipfs | GraphqlQuery | Smartcontract, providerUri: string, withChecksum?: boolean, signal?: AbortSignal, headers?: any): Promise<FileInfo[]>;
    /** Get Compute Environments
     * @return {Promise<ComputeEnvironment[]>} urlDetails
     */
    getComputeEnvironments(providerUri: string, signal?: AbortSignal): Promise<ComputeEnvironment[]>;
    /** Initialize a service request.
     * @param {DDO | string} asset
     * @param {number} serviceIndex
     * @param {string} serviceType
     * @param {string} consumerAddress
     * @param {UserCustomParameters} userCustomParameters
     * @param {string} providerUri Identifier of the asset to be registered in ocean
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ProviderInitialize>} ProviderInitialize data
     */
    initialize(did: string, serviceId: string, fileIndex: number, consumerAddress: string, providerUri: string, signal?: AbortSignal, userCustomParameters?: UserCustomParameters, computeEnv?: string, validUntil?: number): Promise<ProviderInitialize>;
    /** Initialize a compute request.
     * @param {ComputeAsset} assets
     * @param {ComputeAlgorithmber} algorithm
     * @param {string} computeEnv
     * @param {number} validUntil
     * @param {string} providerUri Identifier of the asset to be registered in ocean
     * @param {string} accountId
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ProviderComputeInitialize>} ProviderComputeInitialize data
     */
    initializeCompute(assets: ComputeAsset[], algorithm: ComputeAlgorithm, computeEnv: string, validUntil: number, providerUri: string, accountId: string, signal?: AbortSignal): Promise<ProviderComputeInitializeResults>;
    /** Gets fully signed URL for download
     * @param {string} did
     * @param {string} accountId
     * @param {string} serviceId
     * @param {number} fileIndex
     * @param {string} providerUri
     * @param {Web3} web3
     * @param {UserCustomParameters} userCustomParameters
     * @return {Promise<string>}
     */
    getDownloadUrl(did: string, accountId: string, serviceId: string, fileIndex: number, transferTxId: string, providerUri: string, web3: Web3, userCustomParameters?: UserCustomParameters): Promise<any>;
    /** Instruct the provider to start a compute job
     * @param {string} did
     * @param {string} consumerAddress
     * @param {string} computeEnv
     * @param {ComputeAlgorithm} algorithm
     * @param {string} providerUri
     * @param {Web3} web3
     * @param {AbortSignal} signal abort signal
     * @param {ComputeOutput} output
     * @return {Promise<ComputeJob | ComputeJob[]>}
     */
    computeStart(providerUri: string, web3: Web3, consumerAddress: string, computeEnv: string, dataset: ComputeAsset, algorithm: ComputeAlgorithm, signal?: AbortSignal, additionalDatasets?: ComputeAsset[], output?: ComputeOutput): Promise<ComputeJob | ComputeJob[]>;
    /** Instruct the provider to Stop the execution of a to stop a compute job.
     * @param {string} did
     * @param {string} consumerAddress
     * @param {string} jobId
     * @param {string} providerUri
     * @param {Web3} web3
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ComputeJob | ComputeJob[]>}
     */
    computeStop(did: string, consumerAddress: string, jobId: string, providerUri: string, web3: Web3, signal?: AbortSignal): Promise<ComputeJob | ComputeJob[]>;
    /** Get compute status for a specific jobId/documentId/owner.
     * @param {string} providerUri The URI of the provider we want to query
     * @param {string} consumerAddress The consumer ethereum address
     * @param {string} jobId The ID of a compute job.
     * @param {string} did The ID of the asset
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ComputeJob | ComputeJob[]>}
     */
    computeStatus(providerUri: string, consumerAddress: string, jobId?: string, did?: string, signal?: AbortSignal): Promise<ComputeJob | ComputeJob[]>;
    /** Get compute result url
     * @param {string} providerUri The URI of the provider we want to query
     * @param {Web3} web3 Web3 instance
     * @param {string} consumerAddress The consumer ethereum address
     * @param {string} jobId The ID of a compute job.
     * @param {number} index Result index
     * @return {Promise<string>}
     */
    getComputeResultUrl(providerUri: string, web3: Web3, consumerAddress: string, jobId: string, index: number): Promise<string>;
    /** Deletes a compute job.
     * @param {string} did
     * @param {string} consumerAddress
     * @param {string} jobId
     * @param {string} providerUri
     * @param {Web3} web3
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ComputeJob | ComputeJob[]>}
     */
    computeDelete(did: string, consumerAddress: string, jobId: string, providerUri: string, web3: Web3, signal?: AbortSignal): Promise<ComputeJob | ComputeJob[]>;
    /** Check for a valid provider at URL
     * @param {String} url provider uri address
     * @param {AbortSignal} signal abort signal
     * @return {Promise<boolean>} string
     */
    isValidProvider(url: string, signal?: AbortSignal): Promise<boolean>;
    private noZeroX;
    private zeroXTransformer;
    private inputMatch;
    private getData;
}
export declare const ProviderInstance: Provider;
