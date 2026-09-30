import { Arrow } from "./Arrow";
import { DotIcon } from "./DotIcon";
import styles from "./Projects.module.css";

export function ProjectVisual({ kind }: { kind: "workbench" | "bld8-web" | "coffee-docket" | "bld8-ui" }) {
  if (kind === "bld8-ui") return (
    <div className={styles.visual + " " + styles.uiVisual} aria-hidden="true">
      <div className={styles.visualLabel}><span>COMPONENTS + MOTION</span><span>04 / UI</span></div>
      <div className={styles.uiStudy}>
        <div className={styles.uiStudyHead}><span className={styles.uiMark}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6" /></svg></span><strong>BLD8 <span>/ ui</span></strong><span className={styles.uiEdition}>01</span></div>
        <div className={styles.uiTabs}><span>Overview</span><span>Settings</span><span>Activity</span></div>
        <div className={styles.uiField}><span>Project name</span><div>Interface studies <span>↵</span></div></div>
        <div className={styles.uiControlRow}><span>Keep me updated</span><span className={styles.uiSwitch} /></div>
        <div className={styles.uiActions}><span>Save changes <Arrow /></span><span>Preview <Arrow diagonal /></span></div>
      </div>
      <div className={styles.visualFoot}><span>FORM / STATE / INTERACTION</span><span>REACT</span></div>
    </div>
  );
  if (kind === "coffee-docket") return (
    <div className={`${styles.visual} ${styles.coffeeVisual}`} aria-hidden="true">
      <div className={styles.visualLabel}><span>PREPAID COFFEE CREDITS</span><span>03 / WEB</span></div>
      <div className={styles.coffeeSketch}>
        <div className={styles.receipt}><span>COFFEE DOCKET</span><p>Top up <DotIcon name="plus" size={12} /></p><p>Serve <DotIcon name="minus" size={12} /></p><p>Keep track <Arrow diagonal /></p></div>
        <div className={styles.cup}><DotIcon name="coffee" size={44} /></div>
      </div>
      <div className={styles.visualFoot}><span>STAFF + CUSTOMER PORTALS</span></div>
    </div>
  );
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
        <div className={styles.flowNode}>Request<span>INPUT</span></div><span className={styles.connector}><Arrow /></span>
        <div className={`${styles.flowNode} ${styles.flowCore}`}>Orchestrate<span>MODEL + TOOLS</span></div><span className={styles.connector}><Arrow /></span>
        <div className={styles.flowNode}>Inspect<span>TRACE + EVIDENCE</span></div>
      </div>
      <div className={styles.visualFoot}><span>ARCHITECTURE SKETCH</span></div>
    </div>
  );
}
