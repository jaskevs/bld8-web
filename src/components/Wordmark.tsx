import styles from "./Shell.module.css";

export function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <svg width="25" height="28" viewBox="0 0 25 28" fill="none" aria-hidden="true">
        <path d="m12.5 1 11 6.5v13l-11 6.5L1.5 20.5v-13L12.5 1Z" stroke="currentColor" />
        <path d="m1.5 7.5 11 6.5 11-6.5M12.5 14v13M1.5 20.5 12.5 14l11 6.5" stroke="currentColor" />
      </svg>
      <span>BLD8<span className={styles.wordmarkDot}>.</span></span>
    </span>
  );
}
