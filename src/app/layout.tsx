import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { headers } from 'next/headers';

import { AppKitProvider } from '@/components/Web3Provider/AppKitProvider';

import { Root } from '@/components/Root/Root';
import { I18nProvider } from '@/core/i18n/provider';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  const cookies = (await headers()).get('cookie');

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <I18nProvider>
          <AppKitProvider cookies={cookies}>
            <Root>{children}</Root>
          </AppKitProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
