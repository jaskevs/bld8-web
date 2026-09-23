import styles from "./Page.module.css";

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <header className={styles.intro}><p className="eyebrow muted">{label}</p><h1>{title}</h1><p className={styles.introDescription}>{description}</p></header>;
}
