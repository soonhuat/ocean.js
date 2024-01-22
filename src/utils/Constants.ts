import { ethers } from 'ethers'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const GASLIMIT_DEFAULT = 1000000
export const GASLIMIT = 8000000
export const GAS_PRICE = ethers.utils.parseUnits('0.000001', 'gwei')
export const MAX_UINT_256 =
  '115792089237316195423570985008687907853269984665640564039457584007913129639934'
export const FEE_HISTORY_NOT_SUPPORTED =
  'Returned error: Method eth_feeHistory not supported.'
