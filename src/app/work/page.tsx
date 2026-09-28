import { PageIntro } from "@/components/PageIntro";
import { ProjectList } from "@/components/ProjectList";
import { pageMetadata } from "@/lib/site";
import styles from "@/components/Page.module.css";

export const metadata = pageMetadata("Projects", "Coffee Docket, the BLD8 website and Workbench, with notes on their purpose and technical choices.", "/work");

export default function Work() {
  return <div className="container"><PageIntro label="01 / THE WORK" title="Projects." description="Personal projects with notes on their purpose, current state and technical choices." /><ProjectList /><p className={styles.pageEnd}>Project notes are updated as the work develops.</p></div>;
}
