import { TonConnectButton } from '@tonconnect/ui-react';
import { ConnectButton as SuiConnectButton } from '@mysten/dapp-kit';
import { Button, List, Section, Cell } from '@telegram-apps/telegram-ui';

export function MultiChainConnect() {
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
                <Cell>
                    <div className="evm-connect-wrapper">
                        {/* @ts-ignore */}
                        <appkit-button />
                    </div>
                </Cell>
            </Section>
        </List>
    )
}
