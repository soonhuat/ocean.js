import { DownloadResponse } from '../@types';
/**
 * Triggers  a file download from the specified URL when called from a browser context.
 * @param {string} url - The URL of the file to download
 * @returns {Promise<void>} - A Promise that resolves when the file has been downloaded
 */
export declare function downloadFileBrowser(url: string): Promise<void>;
/**
 * Triggers  a file download from the specified URL when called from a browser context.
 * @param {string} url - The URL of the file to download
 * @param {number} [index] - The file index
 * @returns {Promise<void>} - A Promise that resolves when the file has been downloaded
 */
export declare function downloadFile(url: string, index?: number): Promise<DownloadResponse>;
