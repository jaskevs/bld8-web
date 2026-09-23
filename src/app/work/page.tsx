import { PageIntro } from "@/components/PageIntro";
import { ProjectList } from "@/components/ProjectList";
import { pageMetadata } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("Projects", "The BLD8 website and Workbench, a planned tool for inspecting AI workflows.", "/work");

export default function Work() {
  return <div className="container"><PageIntro label="01 / THE WORK" title="Projects in progress." description="The website and Workbench. Each project has notes on its purpose, current state and technical choices." /><ProjectList /><p className={styles.pageEnd}>Project notes are updated as the work develops.</p></div>;
}
