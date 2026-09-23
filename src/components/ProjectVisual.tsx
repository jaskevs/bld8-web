import styles from "./Projects.module.css";

export function ProjectVisual({ kind }: { kind: "workbench" | "bld8-web" }) {
  if (kind === "bld8-web") return (
    <div className={`${styles.visual} ${styles.siteVisual}`} aria-hidden="true">
      <div className={styles.visualLabel}><span>DESIGN + ENGINEERING</span><span>02 / WEB</span></div>
      <div className={styles.typeStudy}>BLD8<span>.</span></div>
      <div className={styles.typeRule}><span>Aa</span><span>TYPE / COLOUR<br />LAYOUT</span><span className={styles.swatches}><i /><i /><i /></span></div>
    </div>
  );
  return (
    <div className={`${styles.visual} ${styles.workbenchVisual}`} aria-hidden="true">
      <div className={styles.visualLabel}><span>PLANNED REQUEST FLOW</span><span>01 / AI</span></div>
      <div className={styles.workflow}>
        <div className={styles.flowNode}>Request<span>INPUT</span></div><span className={styles.connector}>→</span>
        <div className={`${styles.flowNode} ${styles.flowCore}`}>Orchestrate<span>MODEL + TOOLS</span></div><span className={styles.connector}>→</span>
        <div className={styles.flowNode}>Inspect<span>TRACE + EVIDENCE</span></div>
      </div>
      <div className={styles.visualFoot}><span>ARCHITECTURE SKETCH</span></div>
    </div>
  );
}
