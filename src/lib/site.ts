import type { Metadata } from "next";

export const site = {
  name: "BLD8",
  url: "https://www.bld8.dev",
  github: "https://github.com/jaskevs",
  description: "Personal projects in web development and applied AI, with notes on how they are built.",
};

export const publicRoutes = ["/", "/work", "/work/workbench", "/work/bld8-web", "/about"] as const;

export function pageMetadata(title: string, description: string, path: typeof publicRoutes[number]): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} — BLD8`, description, url: path, siteName: site.name, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BLD8 — Engineering, in the open." }] },
    twitter: { card: "summary_large_image", title: `${title} — BLD8`, description, images: ["/opengraph-image"] },
  };
}

export const projects = [
  {
    slug: "workbench",
    number: "01",
    title: "BLD8 Workbench",
    category: "AI WORKFLOW TOOL",
    status: "Planning",
    description: "A planned tool for inspecting AI requests: model calls, sources, tools and cost.",
    tags: ["TypeScript", "Next.js", "Applied AI"],
    href: "/work/workbench",
    repository: "https://github.com/jaskevs/bld8-workbench",
  },
  {
    slug: "bld8-web",
    number: "02",
    title: "The BLD8 website",
    category: "PERSONAL WEBSITE",
    status: "First release",
    description: "This portfolio, built with Next.js, TypeScript and CSS Modules.",
    tags: ["Next.js", "TypeScript", "CSS Modules"],
    href: "/work/bld8-web",
    repository: "https://github.com/jaskevs/bld8-web",
  },
] as const;
