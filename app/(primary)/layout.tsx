import styles from './page.module.css';
import { Header } from '@/src/components/Header';
import { SideNav } from '@/src/components/SideNav';
import { Footer } from '@/src/components/Footer';

export default function PrimaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.reactive}>
      <SideNav />
      <Header />
      <div className={styles.core}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
