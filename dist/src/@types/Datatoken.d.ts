import { ProviderFees } from '.';
export interface DatatokenCreateParams {
    templateIndex: number;
    minter: string;
    paymentCollector: string;
    mpFeeAddress: string;
    feeToken: string;
    feeAmount: string;
    cap: string;
    name?: string;
    symbol?: string;
}
export interface ConsumeMarketFee {
    consumeMarketFeeAddress: string;
    consumeMarketFeeToken: string;
    consumeMarketFeeAmount: string;
}
export interface PublishingMarketFee {
    publishMarketFeeAddress: string;
    publishMarketFeeToken: string;
    publishMarketFeeAmount: string;
}
export interface DatatokenRoles {
    minter: boolean;
    paymentManager: boolean;
}
export interface OrderParams {
    consumer: string;
    serviceIndex: number;
    _providerFee: ProviderFees;
    _consumeMarketFee: ConsumeMarketFee;
}
export interface DispenserParams {
    maxTokens: string;
    maxBalance: string;
    withMint?: boolean;
    allowedSwapper?: string;
}
