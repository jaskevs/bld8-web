import { ImageResponse } from "next/og";

export const alt = "BLD8 — Software & experiments. Software and AI research.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", background: "#ffffff", color: "#191919", padding: "60px 72px", flexDirection: "column", fontFamily: "sans-serif" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #dedede", paddingBottom: 25 }}><span style={{ fontSize: 34, fontWeight: 700 }}>BLD8.</span><span style={{ fontSize: 15, color: "#626262" }}>WEB / MOBILE / AI RESEARCH</span></div><div style={{ display: "flex", flexDirection: "column", marginTop: 56, fontSize: 96, letterSpacing: "-5px", lineHeight: 1.1 }}><span>Software</span><span style={{ color: "#191919", background: "#d1fe17", alignSelf: "flex-start", padding: "0 12px 8px" }}>&amp; experiments.</span></div><div style={{ display: "flex", marginTop: "auto", justifyContent: "space-between", color: "#626262", fontSize: 18 }}><span>Software, AI research and the notes in between.</span><span>www.bld8.dev</span></div></div>, size);
}
