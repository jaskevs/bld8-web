"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./Arrow";
import { Wordmark } from "./Wordmark";
import { site } from "@/lib/site";
import styles from "./Shell.module.css";

export function Header() {
  const pathname = usePathname();
  return (
    <header className={`container ${styles.header}`}>
      <Link href="/" aria-label="BLD8 home" className={styles.logo}><Wordmark /></Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        <Link href="/work" aria-current={pathname.startsWith("/work") ? "page" : undefined}>Work</Link>
        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</Link>
        <a href={site.github}>GitHub <Arrow diagonal /></a>
      </nav>
    </header>
  );
}
