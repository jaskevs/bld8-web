import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "@/styles/tokens.css";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/motion.css";

const display = localFont({ src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2", variable: "--font-display", display: "swap", fallback: ["Arial", "sans-serif"] });
const body = localFont({ src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2", variable: "--font-body", display: "swap", fallback: ["Arial", "sans-serif"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "BLD8 — Web development & applied AI", template: "%s — BLD8" },
  description: site.description,
  applicationName: site.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-AU" className={`${display.variable} ${body.variable}`}><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </body></html>;
}
