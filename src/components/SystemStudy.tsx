"use client";

import { useState } from "react";
import styles from "./SystemStudy.module.css";

const layers = [
  { name: "Interface", detail: "Pages, components and interactions.", offset: 0 },
  { name: "System", detail: "APIs, data and application logic.", offset: 77 },
  { name: "Evidence", detail: "Sources, traces and test results.", offset: 154 },
];

export function SystemStudy() {
  const [active, setActive] = useState(0);
  return (
    <figure className={styles.study} aria-label="An interactive study of three engineering concerns">
      <div className={styles.studyHeader}><span>ANATOMY OF A BUILD</span></div>
      <svg className={styles.drawing} viewBox="0 0 500 405" fill="none" role="img" aria-label={`${layers[active].name} highlighted in a layered engineering illustration`}>
        <path d="M70 125v154M250 215v154M430 125v154M250 35v154" stroke="#bbbbbb" strokeDasharray="3 6" />
        {[...layers].reverse().map((layer) => {
          const index = layers.indexOf(layer);
          const selected = index === active;
          return (
            <g key={layer.name} transform={`translate(0 ${layer.offset})`} className={styles.layer} opacity={selected ? 1 : 0.63}>
              <path d="m70 125 180-90 180 90-180 90-180-90Z" fill={selected ? "#191919" : "#fafafa"} stroke={selected ? "#191919" : "#999999"} strokeWidth={selected ? 1.6 : 1} />
              <path d="m106 125 144-72 144 72-144 72-144-72Z" stroke={selected ? "#606060" : "#cccccc"} />
              {index === 0 && <><path d="m178 116 63-31 81 40-63 31-81-40Z" fill={selected ? "var(--color-accent-on-dark)" : "#b0b0b0"} /><path d="m194 120 40 20m-25-29 40 20" stroke="#333333" strokeWidth="3" /></>}
              {index === 1 && <><path d="m187 125 63-31 63 31-63 31-63-31Z" stroke="#a0a0a0" /><path d="m219 125 31-15 31 15-31 15-31-15Z" fill={selected ? "var(--color-accent-on-dark)" : "#cccccc"} /></>}
              {index === 2 && <><path d="m207 121 18 9 25-12 18 9 27-13" stroke="#a0a0a0" strokeWidth="2" /><circle cx="207" cy="121" r="3" fill="var(--color-accent-on-dark)" /><circle cx="295" cy="114" r="3" fill="var(--color-accent-on-dark)" /></>}
              <path d="m430 125 22-11" stroke={selected ? "var(--color-accent-text)" : "#999999"} />
              <text x="459" y="117" fill={selected ? "var(--color-accent-text)" : "#777777"} fontFamily="monospace" fontSize="10">0{index + 1}</text>
            </g>
          );
        })}
      </svg>
      <div className={styles.controls} aria-label="Explore the engineering layers">
        {layers.map((layer, index) => <button key={layer.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{layer.name}</button>)}
      </div>
      <figcaption className={styles.caption} aria-live="polite">{layers[active].detail}</figcaption>
    </figure>
  );
}
