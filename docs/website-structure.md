# Website structure and publishing

Updated on 28 September 2026. This document distinguishes the current implementation
from the proposed file-based engineering notes. It does not change the master roadmap.

## Current implementation

The website is its own repository, `bld8-web`. Workbench application code and private
planning live in sibling repositories and are not deployed with the website.

```text
bld8-web/
  src/
    app/
      layout.tsx                   Shared shell, fonts and base metadata
      page.tsx                     Home: /
      about/page.tsx               About: /about
      work/page.tsx                Project list: /work
      work/workbench/page.tsx       Workbench project notes
      work/bld8-web/page.tsx        Website project notes
      work/coffee-docket/page.tsx   Coffee Docket project notes (published)
      sitemap.ts                   Public route sitemap
      robots.ts                    Crawler rules
      opengraph-image.tsx           Sharing image
      icon.svg                     Favicon
      not-found.tsx                Missing-page view
    components/                    Header, footer, project panels, layer study
    lib/site.ts                    Site identity, project summaries, route list
    styles/                        Colours, typography, spacing and global CSS
  public/                          Static assets
  docs/                            Design, content, verification and deployment notes
  tests/                           Content and browser checks
  .github/workflows/ci.yml          Lint, types, unit tests, build and browser checks
```

Page copy is written directly in the React/TypeScript `page.tsx` files. Shared
project-card text and the public route list are in `src/lib/site.ts`. Colours and
other visual tokens are in `src/styles/tokens.css`; component styles use CSS Modules.

There is no blog/engineering index, dynamic post route, MDX configuration or content
loader yet. Adding a project today requires a page, project/route metadata and any
necessary visual/test updates. A standalone Markdown file is not published today.

Coffee Docket was initially local work. It was committed and pushed as 9cf4541
and published on 28 September 2026, including Home and Work project entries.

## Recommended next content feature (not implemented)

Use one local MDX file per engineering note, matching the roadmap's planned
`/engineering` section. MDX supports ordinary Markdown and optional React components.
Keep the existing designed project pages for now; posts and project case studies
serve different purposes.

```text
content/engineering/why-i-built-bld8.mdx  One file per note
src/app/engineering/page.tsx            Generated list of published notes
src/app/engineering/[slug]/page.tsx     Shared note layout
src/lib/content.ts                      Loading, metadata validation and draft filtering
public/images/engineering/              Optional local note images
```

Example future post (illustrative, not published):

```mdx
---
title: "Why I built the BLD8 website"
date: "2026-09-23"
summary: "A short record of the layout, tooling and deployment choices."
tags: ["Next.js", "Design"]
draft: true
---

Write the actual problem, decisions and what was learned here.
```

The one-time implementation should:

- Parse and validate metadata (frontmatter is not built into `@next/mdx` by default).
- Derive the URL slug from the filename and generate the list, page metadata and sitemap.
- Exclude drafts from public routes, listings and sitemap; unknown slugs return 404.
- Reuse the site's typography, code-block styling and accessible heading structure.
- Add focused checks for malformed metadata, draft exclusion and route generation.
- Add Engineering to navigation only when the first real note is ready.

After that setup, a new text-only post needs only one MDX file. Images are separate
assets when needed. Preview locally, commit and push; the connected Vercel production
branch then builds and publishes it. No database or CMS is needed for this workflow.

Keep writing factual: describe real decisions and evidence, avoid invented outcomes,
repetitive self-introduction and hype. Do not publish an empty notes section.

References: [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx),
[Vercel Git deployments](https://vercel.com/docs/git).

## Deployment workflow

See [deployment.md](deployment.md) for the verified connection state and DNS steps.
The intended flow is feature branch -> preview + GitHub checks -> merge to main ->
production deployment. A direct main push also deploys once Git integration is active.

GitHub Actions checks and Vercel builds are separate. Connecting Vercel alone does
not make production wait for GitHub Actions; review CI before merging, and configure
branch protection separately if an enforced merge gate is wanted.

Use the existing repository-local personal Git identity and SSH remote. Do not use
company credentials or change global Git/GitHub/SSH settings.
