import Link from "next/link";
import { projects } from "@/lib/site";
import { Arrow } from "./Arrow";
import { ProjectVisual } from "./ProjectVisual";
import styles from "./Projects.module.css";

export function ProjectList() {
  return <div className={styles.list}>{projects.map((project) => (
    <article key={project.slug} className={styles.project}>
      <ProjectVisual kind={project.slug} />
      <div className={styles.projectBody}>
        <p className={`eyebrow ${styles.category}`}>{project.category}</p>
        <h3>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.status}><span />{project.status}</p>
        <ul className={styles.tags} aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <Link className={`text-link ${styles.projectLink}`} href={project.href}>{project.slug === "workbench" ? "Workbench notes" : "Website notes"} <Arrow diagonal /></Link>
      </div>
    </article>
  ))}</div>;
}
