import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, bsc, sepolia } from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'Mini App',
  projectId: 'be81b1f73b7c7618c87bbda75004c0a7', 
  chains: [mainnet, bsc, sepolia],
  ssr: true,
});
