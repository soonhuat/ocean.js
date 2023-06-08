import { BigNumber, providers } from 'ethers';
export declare type ReceiptOrEstimate<G extends boolean = false> = G extends false ? providers.TransactionResponse : BigNumber;
export declare type ReceiptOrDecimal<G extends boolean = false> = G extends false ? providers.TransactionResponse : number;
