'use client';

import { TonConnectButton } from '@tonconnect/ui-react';
import { ConnectButton as SuiConnectButton } from '@mysten/dapp-kit';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { Button, List, Section, Cell, Text } from '@telegram-apps/telegram-ui';

export function MultiChainConnect() {
    const { connectors, connect } = useConnect();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    return (
        <List>
            <Section header="TON Network">
                <Cell>
                    <TonConnectButton />
                </Cell>
            </Section>

            <Section header="Sui Network">
                <Cell>
                    <div className="sui-connect-wrapper">
                        <SuiConnectButton />
                    </div>
                </Cell>
            </Section>

            <Section header="EVM Networks (ETH, BSC)">
                <Cell multiline>
                    {isConnected ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Text>Connected: {address?.slice(0, 6)}...{address?.slice(-4)}</Text>
                            <Button onClick={() => disconnect()} size="s" mode="bezeled">
                                Disconnect EVM
                            </Button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {connectors.map((connector) => (
                                <Button
                                    key={connector.uid}
                                    onClick={() => connect({ connector })}
                                    size="s"
                                >
                                    {connector.name}
                                </Button>
                            ))}
                        </div>
                    )}
                </Cell>
            </Section>
        </List>
    )
}
