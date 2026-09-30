import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { pageMetadata } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("The BLD8 website", "Notes on building this site with Next.js, TypeScript and CSS Modules. A portfolio for software projects and their supporting notes.", "/work/bld8-web");

export default function Website() {
  return <div className="container">
    <Link href="/work" className={styles.back}><Arrow back /> ALL PROJECTS</Link>
    <header className={styles.projectHeader}><p className="eyebrow detail-label">02 / WEBSITE</p><h1>The BLD8 website</h1><p className={styles.projectLead}>A home for personal software projects and the decisions behind them. Built with Next.js, React, TypeScript and CSS Modules.</p><div className={styles.projectMeta}><span className={styles.projectStatus}>First release</span><a href="https://github.com/jaskevs/bld8-web" className="text-link">Repository <Arrow diagonal /></a></div></header>
    <section className={styles.projectLayout}><h2>01 / Current state</h2><div className={styles.copy}><h3>First release.</h3><p>The first release includes Home, Work, About and a page for each project.</p><p>The source and project notes are available on GitHub.</p></div></section>
    <section className={styles.projectLayout}><h2>02 / Design</h2><div className={styles.copy}><h3>White, black and lime green.</h3><p>Light pages keep the focus on the projects. Fine borders separate sections, while lime green marks the main actions and selected states.</p><p>Manrope headings and DM Sans body text give each page a clear reading order. Spacing is shared across pages, and subtle hover responses respect reduced-motion settings.</p></div></section>
    <section className={styles.projectLayout}><h2>03 / Implementation</h2><div className={styles.copy}><h3>Next.js, TypeScript and CSS.</h3><p>Next.js renders the project pages from content in the repository. React handles the interactive layer study, while CSS Modules keep layout and component styles close to the code.</p><p>Checks cover types, builds, navigation and automated accessibility at desktop and mobile sizes. Manual accessibility review is still pending.</p></div></section>
    <div className={styles.projectCta}><a className="button" href="https://github.com/jaskevs/bld8-web">View repository <Arrow diagonal /></a><Link href="/work/workbench" className="text-link">Workbench notes <Arrow /></Link></div>
  </div>;
}
