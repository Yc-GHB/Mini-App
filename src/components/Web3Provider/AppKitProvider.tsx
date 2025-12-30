'use client'

import React, { type ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, cookieToInitialState, type Config } from 'wagmi'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, bsc } from '@reown/appkit/networks'
import { wagmiAdapter, projectId } from '@/core/web3/wagmi'

if (!projectId) {
    throw new Error('Project ID is not defined')
}

// Create the modal
createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, bsc],
    metadata: {
        name: 'Unified App',
        description: 'Unified App with Reown',
        url: 'https://example.com',
        icons: []
    },
    features: {
        analytics: true
    }
})

export function AppKitProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const [queryClient] = useState(() => new QueryClient())
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
