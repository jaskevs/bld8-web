import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { pageMetadata } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("Coffee Docket", "Prepaid coffee credit management with Next.js, React and Supabase. Features, architecture and data flow across staff and customer portals.", "/work/coffee-docket");

export default function CoffeeDocket() {
  return <div className="container">
    <Link href="/work" className={styles.back}><span aria-hidden="true">←</span> ALL PROJECTS</Link>
    <header className={styles.projectHeader}>
      <p className="eyebrow">03 / COFFEE CREDIT MANAGEMENT</p>
      <h1>Coffee Docket</h1>
      <p className={styles.projectLead}>A web application for managing prepaid coffee credits, customer accounts and café transactions. Separate views support staff operations and customer balance checks.</p>
      <div className={styles.projectMeta}><span className={styles.projectStatus}>Previous project</span><a href="https://github.com/jaskevs/coffee-docket" className="text-link">Repository <Arrow diagonal /></a></div>
    </header>

    <section className={styles.projectLayout}>
      <h2>01 / Features</h2>
      <div className={styles.copy}>
        <h3>From top-up to coffee served.</h3>
        <p>Staff manage customer accounts, add prepaid credits and deduct a credit when serving a coffee. Customers can view their remaining balance and transaction history.</p>
        <ul className={styles.taskList}>
          <li>Customer search, profile creation and account updates.</li>
          <li>Bulk top-ups with drink, size, add-on and discount selection.</li>
          <li>Configurable menu items, sizes, add-ons and prices.</li>
          <li>Transaction histories and dashboard summaries of customer activity, outstanding credits and daily top-up revenue.</li>
          <li>Responsive layouts, pull-to-refresh and progressive web app support.</li>
        </ul>
      </div>
    </section>

    <section className={styles.projectLayout}>
      <h2>02 / Architecture</h2>
      <div className={styles.copy}>
        <h3>A React interface over a managed backend.</h3>
        <p>Next.js provides the application shell. React components handle the staff and customer workflows, while a shared TypeScript service centralises database access through the Supabase JavaScript client.</p>
        <figure className={styles.architecture}>
          <ol className={styles.architectureSteps}>
            <li>Interface<span>Next.js + React<br />Staff / customer views</span></li>
            <li>Data access<span>Shared service<br />Supabase client</span></li>
            <li>Persistence<span>Supabase PostgreSQL<br />Customers / transactions / menu</span></li>
          </ol>
          <figcaption>Data path: browser interface → shared service → Supabase → PostgreSQL.</figcaption>
        </figure>
        <p>An authentication context manages session state and role-based navigation, integrating with Supabase Auth. Database requests originate from the browser through the shared service; Supabase provides the backend API and persistence.</p>
      </div>
    </section>

    <section className={styles.projectLayout}>
      <h2>03 / Data model &amp; flow</h2>
      <div className={styles.copy}>
        <h3>Coffee credits and purchase amounts.</h3>
        <p>Customer records hold coffee balances. Transactions link to customers and record credit quantities, monetary amounts and drink details. Separate menu tables define drinks, sizes and add-ons.</p>
        <p>Balances count coffees rather than currency. Pricing is calculated from the selected drink, size and add-ons, multiplied by quantity and adjusted for any discount.</p>
        <p>A top-up records a transaction and increases the balance. Serving a coffee records a serving transaction and reduces the balance. The interface refreshes the relevant customer and activity views after the operation.</p>
      </div>
    </section>

    <section className={styles.projectLayout}>
      <h2>04 / Technology</h2>
      <div className={styles.copy}>
        <h3>TypeScript across the interface and service layer.</h3>
        <ul className={styles.taskList}>
          <li>Next.js 15, React 19 and TypeScript for the application.</li>
          <li>Tailwind CSS, shadcn/ui and Radix UI for styling and interface components.</li>
          <li>Supabase Auth and PostgreSQL for authentication and stored data.</li>
          <li>A web app manifest and service worker for PWA support.</li>
        </ul>
        <p>Mobile interactions include touch gestures and pull-to-refresh. iOS modal handling adjusts focus and available height when the keyboard appears, keeping forms usable on smaller screens and in landscape orientation.</p>
      </div>
    </section>
    <div className={styles.projectCta}><a className="button" href="https://github.com/jaskevs/coffee-docket">View repository <Arrow diagonal /></a><Link href="/work" className="text-link">All projects <Arrow /></Link></div>
  </div>;
}
