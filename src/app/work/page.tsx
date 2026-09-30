import { PageIntro } from "@/components/PageIntro";
import { ProjectList } from "@/components/ProjectList";
import { pageMetadata } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("Projects", "BLD8 UI, Coffee Docket, the BLD8 website and Workbench, with notes on design, implementation and technical choices.", "/work");

export default function Work() {
  return <div className="container"><PageIntro label="01 / THE WORK" title="Projects, with context." description="A mix of previous work, current builds and a few ideas taking shape. Each project includes its purpose, technical choices and where it stands today." /><ProjectList /><p className={styles.pageEnd}>The stack follows the project. The notes explain the choices.</p></div>;
}
