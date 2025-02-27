import { IS_MAINNET } from 'data/constants';
import { polygon, polygonMumbai } from 'wagmi/chains';

// Web3
export const POLYGON_MAINNET = {
  ...polygon,
  name: 'Polygon Mainnet',
  rpcUrls: { default: 'https://polygon-rpc.com' }
};
export const POLYGON_MUMBAI = {
  ...polygonMumbai,
  name: 'Polygon Mumbai',
  rpcUrls: { default: 'https://rpc-mumbai.maticvigil.com' }
};
export const CHAIN_ID = IS_MAINNET ? POLYGON_MAINNET.id : POLYGON_MUMBAI.id;
export const SIMPLEANALYTICS_API_ENDPOINT =
  'https://simpleanalytics.com/lenster.xyz.json';

export const MATCH_BOT_ADDRESS = IS_MAINNET
  ? '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'
  : '0x42032e50DDc86E91C71F94E7C1158E5b047419dF';

export const MATCH_BOT_ID = IS_MAINNET ? '0x21f3' : '0x8046';
