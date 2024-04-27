import styles from './page.module.css';
import type { Metadata } from 'next';
import 'normalize.css/normalize.css';
import './globals.css';
import localFont from 'next/font/local';
import { ThemeContextProvider } from '@/src/context';

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

export const metadata: Metadata = {
  title: "Шареното парти",
  description: "Различното парти за твоето дете",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilroy.variable}>
        <ThemeContextProvider>
          <div className={styles.mode}>{children}</div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
