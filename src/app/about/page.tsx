import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Arrow } from "@/components/Arrow";
import { pageMetadata, site } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("About BLD8", "Background in Angular, .NET and C#, with a broader focus on web, mobile, services and AI research.", "/about");

export default function About() {
  return <div className="container">
    <PageIntro label="02 / ABOUT" title="About BLD8." description="I’m Jaison, a senior software engineer based in Melbourne. I’m interested in the whole application: the interface people use, the services behind it, and how the pieces fit together." />
    <section className={styles.projectLayout}>
      <h2>01 / Background</h2>
      <div className={styles.copy}><h3>Starting with the interface.<br />Following the detail.</h3><p>My background is in web applications and UI platforms, including maintaining React and Angular component libraries and working with .NET and C# services.</p><p>I’m drawn to clean, minimal interfaces: clear typography, balanced spacing and small details that make an application feel good to use.</p></div>
    </section>
    <section className={styles.projectLayout}>
      <h2>02 / Current focus</h2>
      <div className={styles.copy}><h3>Web, mobile and the systems behind them.</h3><p>Current interests include Next.js for the web, React Native for mobile, and NestJS and Python for services and AI experiments.</p>
        <dl className={styles.focusAreas}>
          <div><dt>Interfaces</dt><dd>Components, navigation and the small interactions that make an application easier to use.</dd></div>
          <div><dt>Services</dt><dd>APIs, application logic and clear boundaries between the parts of a system.</dd></div>
          <div><dt>AI research</dt><dd>Exploring retrieval, model behaviour and evaluation through reading, experiments and practical applications.</dd></div>
        </dl>
        <p>Workbench is the next planned build: a way to follow an AI request through its sources, model calls, tools and cost. The project notes separate what exists today from what comes next.</p>
      </div>
    </section>
    <div className={styles.projectCta}><Link href="/work" className="button">View projects <Arrow /></Link><a href={site.github} className="text-link">Follow the code on GitHub <Arrow diagonal /></a></div>
  </div>;
}
