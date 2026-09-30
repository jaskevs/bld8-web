import { Arrow } from "./Arrow";
import { Wordmark } from "./Wordmark";
import { site } from "@/lib/site";
import styles from "./Shell.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}><div className="container">
      <div className={styles.footerTop}>
        <div><Wordmark /><p className={styles.footerIntro}>Software, AI research and notes to self.</p></div>
        <a className="text-link" href={site.github}>GitHub <Arrow diagonal /></a>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} BLD8</span>
        <span>Melbourne, Australia</span>
      </div>
    </div></footer>
  );
}
