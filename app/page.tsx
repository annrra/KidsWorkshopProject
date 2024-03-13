import Image from "next/image";
import styles from "./page.module.css";
import { Header } from '@/src/components/Header';
import { SideNav } from '@/src/components/SideNav';
import { AccentBlock } from '@/src/components/AccentBlock';
import { Footer } from '@/src/components/Footer';
import { PartyCards } from "@/src/components/PartyCards";
import { Reviews } from "@/src/components/Reviews";
import { Newsletter } from "@/src/components/Newsletter";

export default function Home() {
  return (
    <div className={styles.reactive}>
      <SideNav />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.core}>
        <div className={styles.container}>
          <AccentBlock />
          <PartyCards />
          <Reviews />
          <Newsletter />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
