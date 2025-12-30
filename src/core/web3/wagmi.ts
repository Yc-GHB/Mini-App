import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, bsc, sepolia } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { createAppKit } from '@reown/appkit/react'

export const projectId = 'be81b1f73b7c7618c87bbda75004c0a7'; // Get project ID from https://cloud.reown.com

export const networks = [mainnet, bsc, sepolia]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig

// Initialize AppKit
createAppKit({
  adapters: [wagmiAdapter],
  networks: networks,
  projectId,
  features: {
    analytics: true,
    email: false,
    socials: [],
  },
  themeMode: 'light',
})
