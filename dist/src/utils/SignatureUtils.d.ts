import { Signer } from 'ethers';
/**
 * Signs the hash of a message using the provided signer.
 * @param {Signer} signer - The signer to use for signing the hash.
 * @param {string} message - The message to sign.
 * @returns {Promise<string>} - A Promise that resolves to the signature of the hash of the message.
 */
export declare function signHash(signer: Signer, message: string): Promise<{
    v: string;
    r: string;
    s: string;
}>;
