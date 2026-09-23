import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { SystemStudy } from "@/components/SystemStudy";
import { ProjectList } from "@/components/ProjectList";
import { pageMetadata } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata("Web development & applied AI", "Personal projects in web development and applied AI, with notes on how they are built.", "/");

export default function Home() {
  return <div className="container">
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroCopy}>
        <p className={`eyebrow ${styles.heroEyebrow}`}><span />WEB DEVELOPMENT / APPLIED AI</p>
        <h1 id="home-title">Engineering,<br /><span>in the open.</span></h1>
        <p className={styles.heroDescription}>Personal projects in web development and AI, with notes on how they’re built.</p>
        <Link href="/work" className="button">View projects <Arrow diagonal /></Link>
        <p className={styles.heroLocation}>Independent work · Melbourne, Australia</p>
      </div>
      <SystemStudy />
    </section>
    <section className={styles.work} aria-labelledby="work-title">
      <div className={styles.sectionHead}><div><p className="eyebrow muted">01 / THE WORK</p><h2 id="work-title">Projects in progress.</h2></div><Link className="text-link" href="/work">View all work <Arrow /></Link></div>
      <ProjectList />
    </section>
    <section className={styles.approach} aria-labelledby="approach-title">
      <p className="eyebrow muted">02 / ABOUT BLD8</p>
      <div><h2 id="approach-title">A place for<br />the work and notes.</h2><p>BLD8 brings together small software projects, experiments with unfamiliar tools and the decisions made along the way.</p><Link className="text-link" href="/about">About BLD8 <Arrow diagonal /></Link></div>
    </section>
  </div>;
}
