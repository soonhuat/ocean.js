import { Signer } from 'ethers';
import { Arweave, FileInfo, ComputeJob, ComputeOutput, ComputeAlgorithm, ComputeAsset, ComputeEnvironment, ProviderInitialize, ProviderComputeInitializeResults, ServiceEndpoint, UrlFile, UserCustomParameters, Ipfs, Smartcontract, GraphqlQuery } from '../@types';
export declare class Provider {
    /**
     * Returns the provider endpoints
     * @param {string} providerUri - the provider url
     * @return {Promise<any>}
     */
    getEndpoints(providerUri: string): Promise<any>;
    /**
     * This function returns the endpoint URL for a given service name.
     * @param {ServiceEndpoint[]} servicesEndpoints - The array of service endpoints
     * @param {string} serviceName - The name of the service
     * @returns {ServiceEndpoint} The endpoint URL for the given service name
     */
    getEndpointURL(servicesEndpoints: ServiceEndpoint[], serviceName: string): ServiceEndpoint;
    /**
     * This function returns an array of service endpoints for a given provider endpoint.
     * @param {string} providerEndpoint - The provider endpoint
     * @param {any} endpoints - The endpoints object
     * @returns {ServiceEndpoint[]} An array of service endpoints
     */
    getServiceEndpoints(providerEndpoint: string, endpoints: any): Promise<ServiceEndpoint[]>;
    /**
     * Get current nonce from the provider.
     * @param {string} providerUri provider uri address
     * @param {string} consumerAddress Publisher address
     * @param {AbortSignal} signal abort signal
     * @param {string} providerEndpoints Identifier of the asset to be registered in ocean
     * @param {string} serviceEndpoints document description object (DDO)=
     * @return {Promise<string>} urlDetails
     */
    getNonce(providerUri: string, consumerAddress: string, signal?: AbortSignal, providerEndpoints?: any, serviceEndpoints?: ServiceEndpoint[]): Promise<string>;
    /**
     * Sign a provider request with a signer.
     * @param {Signer} signer - The signer to use.
     * @param {string} message - The message to sign.
     * @returns {Promise<string>} A promise that resolves with the signature.
     */
    signProviderRequest(signer: Signer, message: string): Promise<string>;
    /**
     * Encrypt data using the Provider's own symmetric key
     * @param {string} data data in json format that needs to be sent , it can either be a DDO or a File array
     * @param {number} chainId network's id so provider can choose the corresponding Signer object
     * @param {string} providerUri provider uri address
     * @param {AbortSignal} signal abort signal
     * @return {Promise<string>} urlDetails
     */
    encrypt(data: any, chainId: number, providerUri: string, signal?: AbortSignal): Promise<string>;
    /**
     * Get file details for a given DID and service ID.
     * @param {string} did - The DID to check.
     * @param {string} serviceId - The service ID to check.
     * @param {string} providerUri - The URI of the provider.
     * @param {boolean} [withChecksum=false] - Whether or not to include a checksum.
     * @param {AbortSignal} [signal] - An optional abort signal.
     * @returns {Promise<FileInfo[]>} A promise that resolves with an array of file info objects.
     */
    checkDidFiles(did: string, serviceId: string, providerUri: string, withChecksum?: boolean, signal?: AbortSignal): Promise<FileInfo[]>;
    /**
     * Get File details (if possible)
     * @param {UrlFile | Arweave | Ipfs | GraphqlQuery | Smartcontract} file one of the supported file structures
     * @param {string} providerUri uri of the provider that will be used to check the file
     * @param {boolean} [withChecksum=false] - Whether or not to include a checksum.
     * @param {AbortSignal} [signal] - An optional abort signal.
     * @param {any} headers headers key value pairs associated with the asset GET request
     * @returns {Promise<FileInfo[]>} A promise that resolves with an array of file info objects.
     */
    getFileInfo(file: UrlFile | Arweave | Ipfs | GraphqlQuery | Smartcontract, providerUri: string, withChecksum?: boolean, signal?: AbortSignal, headers?: any): Promise<FileInfo[]>;
    /**
     * Returns compute environments from a provider.
     * @param {string} providerUri - The URI of the provider.
     * @param {AbortSignal} [signal] - An optional abort signal.
     * @returns {Promise<{[chainId: number]: ComputeEnvironment[]}>} A promise that resolves with an object containing compute environments for each chain ID.
     */
    getComputeEnvironments(providerUri: string, signal?: AbortSignal): Promise<{
        [chainId: number]: ComputeEnvironment[];
    }>;
    /**
     * Initializes the provider for a service request.
     * @param {string} did - The asset DID .
     * @param {string} serviceId - The asset service ID.
     * @param {number} fileIndex - The file index.
     * @param {string} consumerAddress - The consumer address.
     * @param {string} providerUri - The URI of the provider.
     * @param {AbortSignal} [signal] - The abort signal if any.
     * @param {UserCustomParameters} [userCustomParameters] - The custom parameters if any.
     * @param {string} [computeEnv] - The compute environment if any.
     * @param {number} [validUntil] - The validity time if any.
     * @returns {Promise<ProviderInitialize>} A promise that resolves with ProviderInitialize response.
     */
    initialize(did: string, serviceId: string, fileIndex: number, consumerAddress: string, providerUri: string, signal?: AbortSignal, userCustomParameters?: UserCustomParameters, computeEnv?: string, validUntil?: number): Promise<ProviderInitialize>;
    /** Initializes the provider for a compute request.
     * @param {ComputeAsset[]} assets The datasets array to initialize compute request.
     * @param {ComputeAlgorithmber} algorithm The algorithm to use.
     * @param {string} computeEnv The compute environment.
     * @param {number} validUntil  The job expiration date.
     * @param {string} providerUri The provider URI.
     * @param {string} accountId caller address
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ProviderComputeInitialize>} ProviderComputeInitialize data
     */
    initializeCompute(assets: ComputeAsset[], algorithm: ComputeAlgorithm, computeEnv: string, validUntil: number, providerUri: string, accountId: string, signal?: AbortSignal): Promise<ProviderComputeInitializeResults>;
    /**
     * Gets the download URL.
     * @param {string} did - The DID.
     * @param {string} serviceId - The service ID.
     * @param {number} fileIndex - The file index.
     * @param {string} transferTxId - The transfer transaction ID.
     * @param {string} providerUri - The provider URI.
     * @param {Signer} signer - The signer.
     * @param {UserCustomParameters} userCustomParameters - The user custom parameters.
     * @returns {Promise<any>} The download URL.
     */
    getDownloadUrl(did: string, serviceId: string, fileIndex: number, transferTxId: string, providerUri: string, signer: Signer, userCustomParameters?: UserCustomParameters): Promise<any>;
    /** Instruct the provider to start a compute job
     * @param {string} providerUri The provider URI.
     * @param {Signer} signer The consumer signer object.
     * @param {string} computeEnv The compute environment.
     * @param {ComputeAsset} dataset The dataset to start compute on
     * @param {ComputeAlgorithm} algorithm The algorithm to start compute with.
     * @param {AbortSignal} signal abort signal
     * @param {ComputeAsset[]} additionalDatasets The additional datasets if that is the case.
     * @param {ComputeOutput} output The compute job output settings.
     * @return {Promise<ComputeJob | ComputeJob[]>} The compute job or jobs.
     */
    computeStart(providerUri: string, consumer: Signer, computeEnv: string, dataset: ComputeAsset, algorithm: ComputeAlgorithm, signal?: AbortSignal, additionalDatasets?: ComputeAsset[], output?: ComputeOutput): Promise<ComputeJob | ComputeJob[]>;
    /** Instruct the provider to Stop the execution of a to stop a compute job.
     * @param {string} did the asset did
     * @param {string} consumerAddress The consumer address.
     * @param {string} jobId the compute job id
     * @param {string} providerUri The provider URI.
     * @param {Signer} signer The consumer signer object.
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ComputeJob | ComputeJob[]>}
     */
    computeStop(did: string, consumerAddress: string, jobId: string, providerUri: string, signer: Signer, signal?: AbortSignal): Promise<ComputeJob | ComputeJob[]>;
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
     * @param {Signer} consumer consumer Signer wallet object
     * @param {string} jobId The ID of a compute job.
     * @param {number} index Result index
     * @return {Promise<string>}
     */
    getComputeResultUrl(providerUri: string, consumer: Signer, jobId: string, index: number): Promise<string>;
    /** Deletes a compute job.
     * @param {string} did asset did
     * @param {Signer} consumer consumer Signer wallet object
     * @param {string} jobId the compute job ID
     * @param {string} providerUri The URI of the provider we want to query
     * @param {AbortSignal} signal abort signal
     * @return {Promise<ComputeJob | ComputeJob[]>}
     */
    computeDelete(did: string, consumer: Signer, jobId: string, providerUri: string, signal?: AbortSignal): Promise<ComputeJob | ComputeJob[]>;
    /** Check for a valid provider at URL
     * @param {String} url provider uri address
     * @param {AbortSignal} signal abort signal
     * @return {Promise<boolean>} valid or not
     */
    isValidProvider(url: string, signal?: AbortSignal): Promise<boolean>;
    /**
     * Private method that removes the leading 0x from a string.
     * @param {string} input - The input string.
     * @returns The transformed string.
     */
    private noZeroX;
    /**
     * Private method that removes the leading 0x from a string.
     * @param {string} input - The input string.
     * @param {boolean} zeroOutput - Whether to include 0x in the output if the input is valid and zeroOutput is true.
     * @returns The transformed string.
     */
    private zeroXTransformer;
    /**
     * Private method that matches an input string against a regular expression and returns the first capture group.
     * @param {string} input - The input string to match.
     * @param {RegExp} regexp - The regular expression to match against.
     * @param {string} conversorName - The name of the method calling this function.
     * @returns An object with two properties: `valid` (a boolean indicating whether the input matched the regular expression) and `output` (the first capture group of the match, or the original input if there was no match).
     */
    private inputMatch;
    /**
     * Private method that fetches data from a URL using the GET method.
     * @param {string} url - The URL to fetch data from.
     * @returns A Promise that resolves to a Response object.
     */
    private getData;
}
export declare const ProviderInstance: Provider;
