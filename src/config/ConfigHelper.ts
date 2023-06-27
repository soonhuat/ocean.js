// eslint-disable-next-line import/no-named-default
// import { default as DefaultContractsAddresses } from '@oceanprotocol/contracts/addresses/address.json'
import { Config } from '.'
import { LoggerInstance } from '../utils'
// eslint-disable-next-line import/no-named-default
import { default as DefaultContractsAddresses } from '../../address.json'

const configHelperNetworksBase: Config = {
  chainId: null,
  network: 'unknown',
  metadataCacheUri: 'https://v4.aquarius.oceanprotocol.com',
  nodeUri: 'http://127.0.0.1:8545',
  providerUri: 'https://v4.provider.oceanprotocol.com',
  subgraphUri: null,
  explorerUri: null,
  oceanTokenAddress: null,
  oceanTokenSymbol: 'OCEAN',
  fixedRateExchangeAddress: null,
  dispenserAddress: null,
  startBlock: 0,
  transactionBlockTimeout: 50,
  transactionConfirmationBlocks: 1,
  transactionPollingTimeout: 750,
  gasFeeMultiplier: 1
}

export const configHelperNetworks: Config[] = [
  {
    ...configHelperNetworksBase
  },
  {
    // barge
    ...configHelperNetworksBase,
    chainId: 8996,
    network: 'development',
    // comment th following configs if running on macOS
    metadataCacheUri: 'http://172.15.0.5:5000',
    providerUri: 'http://172.15.0.4:8030',
    subgraphUri: 'https://172.15.0.15:8000'
    // uncomment the following configs if running on macOS
    // metadataCacheUri: 'http://127.0.0.1:5000',
    // providerUri: 'http://127.0.0.1:8030/',
    // subgraphUri: 'http://127.0.0.1:9000/'
  },
  {
    ...configHelperNetworksBase,
    chainId: 5,
    network: 'goerli',
    nodeUri: 'https://goerli.infura.io/v3',
    subgraphUri: 'https://v4.subgraph.goerli.oceanprotocol.com',
    explorerUri: 'https://goerli.etherscan.io',
    gasFeeMultiplier: 1.1
  },
  {
    ...configHelperNetworksBase,
    chainId: 11155111,
    network: 'sepolia',
    nodeUri: 'https://sepolia.infura.io/v3',
    providerUri: 'https://v4.provider.goerli.oceanprotocol.com',
    subgraphUri: 'https://v4.subgraph.goerli.oceanprotocol.com',
    explorerUri: 'https://sepolia.etherscan.io',
    gasFeeMultiplier: 1.1
  },
  {
    ...configHelperNetworksBase,
    chainId: 1,
    network: 'mainnet',
    nodeUri: 'https://mainnet.infura.io/v3',
    subgraphUri: 'https://v4.subgraph.mainnet.oceanprotocol.com',
    explorerUri: 'https://etherscan.io',
    startBlock: 11105459,
    transactionBlockTimeout: 150,
    transactionConfirmationBlocks: 5,
    transactionPollingTimeout: 1750,
    gasFeeMultiplier: 1.05
  },
  {
    ...configHelperNetworksBase,
    chainId: 137,
    network: 'polygon',
    nodeUri: 'https://polygon-mainnet.infura.io/v3',
    subgraphUri: 'https://v4.subgraph.polygon.oceanprotocol.com',
    explorerUri: 'https://polygonscan.com',
    oceanTokenSymbol: 'mOCEAN',
    gasFeeMultiplier: 1.6
  },
  {
    ...configHelperNetworksBase,
    chainId: 2021000,
    network: 'gaiaxtestnet',
    nodeUri: 'https://rpc.gaiaxtestnet.oceanprotocol.com',
    providerUri: 'https://v4.provider.gaiaxtestnet.oceanprotocol.com',
    subgraphUri: 'https://v4.subgraph.gaiaxtestnet.oceanprotocol.com',
    explorerUri: 'https://blockscout.gaiaxtestnet.oceanprotocol.com'
  },
  {
    ...configHelperNetworksBase,
    chainId: 80001,
    network: 'mumbai',
    nodeUri: 'https://polygon-mumbai.infura.io/v3',
    subgraphUri: 'https://v4.subgraph.mumbai.oceanprotocol.com',
    explorerUri: 'https://mumbai.polygonscan.com',
    gasFeeMultiplier: 1.1
  },
  {
    ...configHelperNetworksBase,
    chainId: 56,
    network: 'bsc',
    nodeUri: 'https://bsc-dataseed.binance.org',
    subgraphUri: 'https://v4.subgraph.bsc.oceanprotocol.com',
    explorerUri: 'https://bscscan.com/',
    gasFeeMultiplier: 1.05
  },
  {
    ...configHelperNetworksBase,
    chainId: 246,
    network: 'energyweb',
    nodeUri: 'https://rpc.energyweb.org',
    subgraphUri: 'https://v4.subgraph.energyweb.oceanprotocol.com',
    explorerUri: 'https://explorer.energyweb.org',
    gasFeeMultiplier: 1.05
  },
  {
    ...configHelperNetworksBase,
    chainId: 1285,
    network: 'moonriver',
    nodeUri: 'https://moonriver.api.onfinality.io/public',
    subgraphUri: 'https://v4.subgraph.moonriver.oceanprotocol.com',
    explorerUri: 'https://moonriver.moonscan.io/',
    gasFeeMultiplier: 1.05
  },
  {
    ...configHelperNetworksBase,
    chainId: 81001,
    network: 'polygonedge',
    nodeUri: 'https://rpc-edgenet.polygon.technology',
    providerUri: 'https://v4.provider.goerli.oceanprotocol.com',
    subgraphUri: 'https://v4.subgraph.goerli.oceanprotocol.com',
    explorerUri: 'https://explorer-edgenet.polygon.technology/',
    gasFeeMultiplier: 1.05
  },
  {
    ...configHelperNetworksBase,
    chainId: 100,
    network: 'gen-x-testnet',
    nodeUri: 'https://rpc.genx.minimal-gaia-x.eu',
    providerUri: 'https://v4.provider.goerli.oceanprotocol.com',
    subgraphUri: 'https://v4.subgraph.goerli.oceanprotocol.com',
    explorerUri: 'https://logging.genx.minimal-gaia-x.eu/',
    gasFeeMultiplier: 1.05
  }
]

export class ConfigHelper {
  /* Load contract addresses from env ADDRESS_FILE (generated by ocean-contracts) */
  public getAddressesFromEnv(network: string, customAddresses?: any): Partial<Config> {
    // use the defaults first
    let configAddresses: Partial<Config>

    // load from custom addresses structure
    if (customAddresses) {
      const {
        FixedPrice,
        Dispenser,
        ERC721Factory,
        OPFCommunityFeeCollector,
        Ocean,
        chainId,
        startBlock,
        veAllocate,
        veOCEAN,
        veDelegation,
        veFeeDistributor,
        veDelegationProxy,
        DFRewards,
        DFStrategyV1,
        veFeeEstimate
      } = customAddresses[network]
      configAddresses = {
        nftFactoryAddress: ERC721Factory,
        opfCommunityFeeCollector: OPFCommunityFeeCollector,
        fixedRateExchangeAddress: FixedPrice,
        dispenserAddress: Dispenser,
        oceanTokenAddress: Ocean,
        chainId,
        startBlock,
        veAllocate,
        veOCEAN,
        veDelegation,
        veFeeDistributor,
        veDelegationProxy,
        DFRewards,
        DFStrategyV1,
        veFeeEstimate,
        ...(process.env.AQUARIUS_URI && { metadataCacheUri: process.env.AQUARIUS_URI })
      }
    } else {
      // no custom addresses structure was passed, trying to load default
      if (DefaultContractsAddresses[network]) {
        const {
          FixedPrice,
          Dispenser,
          OPFCommunityFeeCollector,
          ERC721Factory,
          Ocean,
          chainId,
          startBlock,
          veAllocate,
          veOCEAN,
          veDelegation,
          veFeeDistributor,
          veDelegationProxy,
          DFRewards,
          DFStrategyV1,
          veFeeEstimate
        } = DefaultContractsAddresses[network]
        configAddresses = {
          nftFactoryAddress: ERC721Factory,
          opfCommunityFeeCollector: OPFCommunityFeeCollector,
          fixedRateExchangeAddress: FixedPrice,
          dispenserAddress: Dispenser,
          oceanTokenAddress: Ocean,
          chainId,
          startBlock,
          veAllocate,
          veOCEAN,
          veDelegation,
          veFeeDistributor,
          veDelegationProxy,
          DFRewards,
          DFStrategyV1,
          veFeeEstimate,
          ...(process.env.AQUARIUS_URI && { metadataCacheUri: process.env.AQUARIUS_URI })
        }
      }
    }
    return configAddresses
  }

  /**
   * Returns the config object for a specific network supported by the oceanprotocol stack
   * @param {string | number} network the network's chainId or name
   * @param {string} infuraProjectId optional infura project id that will replace the configs node URI
   * @return {Config} Config obhjedct
   */
  public getConfig(network: string | number, infuraProjectId?: string): Config {
    const filterBy = typeof network === 'string' ? 'network' : 'chainId'
    let config = configHelperNetworks.find((c) => c[filterBy] === network)

    if (!config) {
      LoggerInstance.error(
        `No config found for given network '${network}' filter by '${filterBy}'`
      )
      return null
    }

    const contractAddressesConfig = this.getAddressesFromEnv(config.network)
    config = { ...config, ...contractAddressesConfig }

    const nodeUri = infuraProjectId
      ? `${config.nodeUri}/${infuraProjectId}`
      : config.nodeUri

    return { ...config, nodeUri }
  }
}
