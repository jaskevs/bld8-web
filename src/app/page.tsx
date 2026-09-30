import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { SystemStudy } from "@/components/SystemStudy";
import { ProjectList } from "@/components/ProjectList";
import { pageMetadata } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata("Software & AI research", "Personal software projects and AI research, from web and mobile interfaces to the services behind them.", "/");

export default function Home() {
  return <div className="container">
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroCopy}>
        <p className={"eyebrow " + styles.heroEyebrow}><span />WEB / MOBILE / AI RESEARCH</p>
        <h1 id="home-title">Software<br /><span>&amp; experiments.</span></h1>
        <p className={styles.heroDescription}>Personal software projects and AI research, from web and mobile interfaces to the services behind them.</p>
        <div className={styles.heroActions}><Link href="/work" className="button">View projects <Arrow diagonal /></Link><Link href="/about" className="text-link">A little context <Arrow /></Link></div>
        <p className={styles.heroLocation}>Independent work · Melbourne, Australia</p>
      </div>
      <SystemStudy />
    </section>
    <section className={`section-rule ${styles.work}`} aria-labelledby="work-title">
      <div className={styles.sectionHead}><div><p className="eyebrow muted">01 / SELECTED WORK</p><h2 id="work-title">Projects, with context.</h2></div><Link className="text-link" href="/work">All projects <Arrow /></Link></div>
      <ProjectList />
    </section>
    <section className={`section-rule ${styles.approach}`} aria-labelledby="approach-title">
      <p className="eyebrow muted">02 / ABOUT BLD8</p>
      <div><h2 id="approach-title">From the interface<br />to what’s underneath.</h2><p>BLD8 is a home for personal software projects and notes to self: how an interface feels, how a service behaves, and what I learn along the way.</p><Link href="/about" className="text-link">About BLD8 <Arrow diagonal /></Link></div>
    </section>
  </div>;
}
