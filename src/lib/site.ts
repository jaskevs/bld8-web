import type { Metadata } from "next";

export const site = {
  name: "BLD8",
  url: "https://www.bld8.dev",
  github: "https://github.com/jaskevs",
  uiShowcase: "https://bld8-ui.vercel.app",
  description: "Personal software projects and AI research, from web and mobile interfaces to the services behind them.",
};

export const publicRoutes = ["/", "/work", "/work/workbench", "/work/bld8-web", "/work/coffee-docket", "/work/bld8-ui", "/about"] as const;

export function pageMetadata(title: string, description: string, path: typeof publicRoutes[number]): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} — BLD8`, description, url: path, siteName: site.name, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BLD8 — Software & experiments." }] },
    twitter: { card: "summary_large_image", title: `${title} — BLD8`, description, images: ["/opengraph-image"] },
  };
}

export const projects = [
  {
    slug: "workbench",
    featured: true,
    linkLabel: "Workbench notes",
    number: "01",
    title: "BLD8 Workbench",
    category: "AI WORKFLOW TOOL",
    status: "Planning",
    description: "A planned workspace for following an AI request through model calls, sources, tools and cost.",
    tags: ["React", "Next.js", "TypeScript"],
    href: "/work/workbench",
    repository: "https://github.com/jaskevs/bld8-workbench",
  },
  {
    slug: "bld8-web",
    featured: false,
    linkLabel: "Website notes",
    number: "02",
    title: "The BLD8 website",
    category: "PERSONAL WEBSITE",
    status: "First release",
    description: "A small home for the projects and their notes. Built with Next.js, React and handwritten CSS.",
    tags: ["Next.js", "TypeScript", "CSS Modules"],
    href: "/work/bld8-web",
    repository: "https://github.com/jaskevs/bld8-web",
  },
  {
    slug: "coffee-docket",
    featured: false,
    linkLabel: "Coffee Docket notes",
    number: "03",
    title: "Coffee Docket",
    category: "COFFEE CREDIT MANAGEMENT",
    status: "Previous project",
    description: "Prepaid coffee credits, from topping up an account to serving the next cup. Separate views for staff and customers.",
    tags: ["Next.js", "React", "Supabase"],
    href: "/work/coffee-docket",
    repository: "https://github.com/jaskevs/coffee-docket",
  },
  {
    slug: "bld8-ui",
    featured: true,
    linkLabel: "BLD8 UI case study",
    number: "04",
    title: "BLD8 UI",
    category: "REACT COMPONENT LIBRARY",
    status: "Live showcase · First edition",
    description: "A React component library built around clear layouts, consistent controls and considered motion. A place to work through the small details.",
    tags: ["React", "TypeScript", "Base UI"],
    href: "/work/bld8-ui",
    repository: null,
  },
] as const;
