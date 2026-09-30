import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { ProjectVisual } from "@/components/ProjectVisual";
import { pageMetadata, site } from "@/lib/site";
import styles from "@/components/Page.module.css";
import caseStyles from "./page.module.css";

export const metadata = pageMetadata("BLD8 UI", "A React component library with shared design tokens, considered motion and working examples. Notes on the design and engineering of its first edition.", "/work/bld8-ui");

export default function Bld8UI() {
  return <div className="container">
    <Link href="/work" className={styles.back}><Arrow back /> ALL PROJECTS</Link>
    <header className={styles.projectHeader}>
      <p className="eyebrow detail-label">04 / REACT COMPONENT LIBRARY</p>
      <h1>BLD8 UI</h1>
      <p className={styles.projectLead}>A place to work on the details that make an interface feel right. React components, shared foundations and small, purposeful interactions.</p>
      <div className={styles.projectMeta}><span className={styles.projectStatus}>Live showcase · First edition</span><a href={site.uiShowcase} className="text-link">Explore the library <Arrow diagonal /></a><span>Design + frontend engineering</span></div>
    </header>

    <figure className={caseStyles.preview}>
      <ProjectVisual kind="bld8-ui" />
      <figcaption>A small composition from the library’s visual language: neutral surfaces, black actions and yellow accents. Try the working components in the <a href={site.uiShowcase}>live showcase</a>.</figcaption>
    </figure>

    <section className={styles.projectLayout}>
      <h2>01 / Purpose</h2>
      <div className={styles.copy}><h3>The details, in one place.</h3><p>Buttons, forms and overlays are easy to treat as separate pieces. This project brings their spacing, states and behaviour together, so each part feels like it belongs to the same interface.</p><p>The first edition is aimed at React and Next.js work: dashboards, internal tools and early product ideas. The public showcase is a place to try the components and see how they fit together.</p></div>
    </section>
    <section className={styles.projectLayout}>
      <h2>02 / Design</h2>
      <div className={styles.copy}><h3>Quiet surfaces. Clear actions.</h3><p>White panels sit on light grey. Black carries the primary actions; yellow marks selection and emphasis. Shared spacing and type keep forms, menus and larger layouts aligned.</p><p>Motion follows the same approach: a tab indicator moves between choices, a loading button keeps its width, and the navigation gains a soft shadow as the page scrolls. Shared easing gives these small transitions a consistent feel. Reduced-motion settings keep the state changes without the movement.</p></div>
    </section>
    <section className={styles.projectLayout}>
      <h2>03 / Engineering</h2>
      <div className={styles.copy}><h3>A reusable layer over Base UI.</h3><p>Base UI provides the foundation for complex interactions such as dialogs, menus and selection. BLD8 UI adds typed React APIs, original styling and shared colour, spacing and motion tokens. Simpler controls use native HTML.</p><p>The component package uses TypeScript and plain CSS, independently of Next.js. A separate Next.js showcase consumes its public exports for the catalog, motion studies and working examples. The same components drive the demos.</p><p><a className="text-link" href={site.uiShowcase + "/motion"}>Try the motion studies <Arrow diagonal /></a></p></div>
    </section>
    <section className={styles.projectLayout}>
      <h2>04 / First edition</h2>
      <div className={styles.copy}><h3>Working components, with room to improve.</h3><p>The current catalog covers forms, navigation, overlays, feedback and a basic data table, with light and dark themes. Examples use sample data and reset on reload.</p><p>Browser checks cover keyboard behaviour, focus return, responsive layouts, reduced motion and automated accessibility. Manual screen-reader and wider browser review are still ahead. The showcase is live; the package has not been published to npm.</p></div>
    </section>
    <section className={styles.projectLayout}>
      <h2>05 / Notes to self</h2>
      <div className={styles.copy}><h3>Use it before growing it.</h3><p>The next step is to use the components in a real project, see where the APIs get in the way, and refine the states that only show up through use. More components can follow once the foundations hold up.</p></div>
    </section>
    <div className={styles.projectCta}><a className="button" href={site.uiShowcase}>Explore BLD8 UI <Arrow diagonal /></a><Link href="/work" className="text-link">All projects <Arrow /></Link></div>
  </div>;
}
