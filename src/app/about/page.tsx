import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Arrow } from "@/components/Arrow";
import { pageMetadata, site } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("About BLD8", "An independent space for software projects and notes, based in Melbourne.", "/about");

export default function About() {
  return <div className="container">
    <PageIntro label="02 / ABOUT" title="About BLD8." description="I’m Jaison, a senior software engineer based in Melbourne. My background is in web applications and UI platforms, mainly with Angular and .NET." />
    <section className={styles.projectLayout}><h2>01 / This space</h2><div className={styles.copy}><h3>Projects and the notes behind them.</h3><p>BLD8 is a place to work on personal projects, try unfamiliar tools and keep a record of what works. The focus is web development and applied AI.</p></div></section>
    <section className={styles.projectLayout}><h2>02 / Current focus</h2><div className={styles.copy}><h3>From web applications to AI workflows.</h3><p>The current work uses React, Next.js and Node, with Python planned for retrieval. Workbench explores how to follow an AI request from input to answer, including its sources, tool calls and cost.</p></div></section>
    <div className={styles.projectCta}><Link href="/work" className="button">View projects <Arrow /></Link><a href={site.github} className="text-link">GitHub <Arrow diagonal /></a></div>
  </div>;
}
