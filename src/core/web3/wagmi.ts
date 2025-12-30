import { http, createConfig } from 'wagmi'
import { mainnet, bsc, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const wagmiConfig = createConfig({
  chains: [mainnet, bsc, sepolia],
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected(),
  ],
})
