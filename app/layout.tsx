import styles from './page.module.css';
import type { Metadata } from 'next';
import 'normalize.css/normalize.css';
import './globals.css';
import localFont from 'next/font/local';
import { ThemeContextProvider } from '@/src/context';
import PiwikProProvider from '@piwikpro/next-piwik-pro';

export const metadata: Metadata = {
  title: {
    template: '%s | Шареното парти',
    default: 'Шареното парти',
  },
  description: 'Различното парти за твоето дете. Организиране на детски рождени дни, работилнички за приложни изкуства и други забавления за малки и големи.',
  metadataBase: new URL('https://sharenotoparty.com'),
};

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-ExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containerUrl = process.env.NEXT_PUBLIC_CONTAINER_URL || 'container-url';
  const containerId = process.env.NEXT_PUBLIC_CONTAINER_ID || 'container-id';

  return (
    <html lang="en">
      <body className={gilroy.variable}>
        <ThemeContextProvider>
          <div className={styles.mode}>
            <PiwikProProvider containerUrl={containerUrl} containerId={containerId}>
              {children}
            </PiwikProProvider>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
