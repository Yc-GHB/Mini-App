'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuiClientProvider, WalletProvider as SuiWalletProvider } from '@mysten/dapp-kit';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { PropsWithChildren, useState } from 'react';
import { wagmiConfig } from '@/core/web3/wagmi';
import { networkConfig } from '@/core/web3/sui';
import '@mysten/dapp-kit/dist/index.css';
import '@rainbow-me/rainbowkit/styles.css';

export function UnifiedWeb3Provider({ children }: PropsWithChildren) {
    // Use state to ensure queryClient is stable across re-renders
    const [queryClient] = useState(() => new QueryClient());

    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
                        <SuiWalletProvider>
                            <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
                                {children}
                            </TonConnectUIProvider>
                        </SuiWalletProvider>
                    </SuiClientProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
