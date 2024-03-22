import styles from "./page.module.css";
import { AccentBlock } from '@/src/components/AccentBlock';
import { PartyCards } from "@/src/components/PartyCards";
import { Reviews } from "@/src/components/Reviews";
import { Newsletter } from "@/src/components/Newsletter";

export default function Home() {
  return (
    <div className={styles.container}>
      <AccentBlock />
      <PartyCards />
      <Reviews />
      <Newsletter />
    </div>
  );
}
