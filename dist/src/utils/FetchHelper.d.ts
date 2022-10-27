import { DownloadResponse } from '../@types';
export declare function downloadFileBrowser(url: string): Promise<void>;
export declare function downloadFile(url: string, index?: number): Promise<DownloadResponse>;
