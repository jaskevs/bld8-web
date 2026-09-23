import type { MetadataRoute } from "next";
import { site, publicRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
