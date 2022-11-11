import Web3 from 'web3';
export interface Addresses {
    opfCommunityFeeCollectorAddress: string;
    datatokenTemplateAddress: string;
    nftTemplateAddress: string;
    oceanAddress: string;
    routerAddress: string;
    sideStakingAddress: string;
    fixedRateAddress: string;
    dispenserAddress: string;
    nftFactoryAddress: string;
    daiAddress: string;
    usdcAddress: string;
    poolTemplateAddress: string;
}
export declare const deployContracts: (web3: Web3, owner: string) => Promise<Addresses>;
