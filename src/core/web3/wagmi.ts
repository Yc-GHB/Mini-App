
import { cookieStorage, createStorage, createConfig } from 'wagmi'
import { mainnet, bsc } from 'wagmi/chains'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Get projectId from https://cloud.reown.com
export const projectId = 'ab7ef5ef0be6d6e1ada8554df0dcf37d' 

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, bsc]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig
