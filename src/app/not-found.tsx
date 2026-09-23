import Link from "next/link";
import styles from "@/components/Page.module.css";

export default function NotFound() {
  return <div className={`container ${styles.notFound}`}><span className="eyebrow">404 / NOT FOUND</span><h1>No page here.</h1><p>This address doesn’t point to a page on the site.</p><Link className="button" href="/work">View projects <span aria-hidden="true">→</span></Link></div>;
}
