import { describe, expect, it } from "vitest";
import { pageMetadata, projects, publicRoutes, site } from "../../src/lib/site";
import sitemap from "../../src/app/sitemap";

describe("public content integrity", () => {
  it("keeps project destinations in the public route set and source links under the personal owner", () => {
    for (const project of projects) {
      expect(publicRoutes).toContain(project.href);
      expect(new URL(project.repository).hostname).toBe("github.com");
      expect(new URL(project.repository).pathname).toMatch(/^\/jaskevs\/bld8-(web|workbench)$/);
    }
  });

  it("gives every published route a canonical URL and sitemap entry on the production host", () => {
    const entries = sitemap();
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(publicRoutes.length);
    for (const route of publicRoutes) {
      const meta = pageMetadata("Page", "Description", route);
      const canonical = new URL(meta.alternates!.canonical as string, site.url).href;
      expect(entries.some((entry) => new URL(entry.url).href === canonical)).toBe(true);
      expect(new URL(canonical).origin).toBe("https://www.bld8.dev");
    }
  });
});
