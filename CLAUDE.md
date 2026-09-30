# Website work

Read README.md and docs/site-brief.md first. In the BLD8 local workspace, also
read ../CLAUDE.md and ../bld8-planning/NOW.md. Read docs/site-direction.md,
docs/content-inventory.md and docs/verification.md before changing the site.

## Current local direction — 28 September 2026

The user requested a lighter, brighter, minimal design informed by Linear and
ElevenLabs, keeping the current white, black and bright lime palette. This
refinement and the BLD8 UI case study were deployed directly on 28 September.
The user authorised committing and pushing this release on 30 September; see docs/deployment.md for the release history.

The headline is now “Software & experiments.” Keep the two-column hero and
interactive layered illustration.
The refinement adds softer frames, fine borders and lighter project visuals,
with Workbench spanning the project grid and website/Coffee Docket cards below. The main page canvas is light grey (#f5f5f5), while project cards and their artwork panels are white with fine dividing rules, following the Carl Hauser reference. Keep the surrounding page grey and preserve lime in the actual artwork. Project cards have no outer border; preserve their white fill and internal dividers.
Mobile stacks in reading order. Preserve Manrope/DM Sans, keyboard interactions,
focus indicators, native disclosures and reduced-motion support.

The Home technology strip was rejected as too promotional and removed. Keep
that focus in subtle About-page prose. Controls now have 4 px corners; eased
colour, underline and directional arrow responses share motion tokens. Fine
section rules, tiny endpoint marks and short label rules supply restrained
detail. The temporary cube logo is the earlier line version with its original
proportions. All diagonal arrows have two trailing dots. Use 8 px text/icon gaps in links
and navigation, and 12 px gaps in buttons. Other small icons use the shared DotIcon component with crisp filled dots;
retain readable sizing and the established arrow motion. About mentions React
and Angular component-library maintenance once in its background paragraph.
Keep this concise. See docs/site-direction.md for timing and reduced-motion behaviour.

Colours remain #d1fe17 bright lime, #526600 for small accent text/focus,
#f3ffd1 soft lime, white and #191919 ink. Keep dark ink on lime fills.
The brutalist experiment was rejected; do not restore it.

## Writing and scope

Use “notes to self” naturally in the Home teaser and footer. About states an interest in clean, minimal interfaces; the website project page explains concrete design choices. Keep this emphasis understated and grounded in the work.

Keep copy concise, genuine and factual. Use the name only once in the About
introduction. The focus includes .NET, C#, Angular, React, Next.js, React Native,
NestJS, Python and AI research. Preserve Angular/.NET/C# as the stated background.
Present the broader stack as current focus without invented seniority, completed
work, research publications or results. Project stack details must stay accurate
to their implementation or documented plan.

Home, Work, About and project pages form the site. Coffee Docket is an owned
previous project with a published write-up at /work/coffee-docket. Workbench is
still in planning/documentation. No LinkedIn URL was supplied. Do not publish
empty or coming-soon sections.

## Local editing

Use `npm run dev` at http://127.0.0.1:3117 for automatic refresh on file saves.
Do not replace that server with a production snapshot. `npm run preview` builds
and serves production on 3118; browser checks use a fresh temporary server on
3116. Read docs/local-development.md for file locations and troubleshooting.

## Implementation and release

Keep this repository focused on the website. Workbench application code and
private planning belong in their separate repositories. Use Next.js, React,
TypeScript, handwritten CSS Modules and custom-property tokens. Content and
visual direction come before implementation.

The previous release is live at https://www.bld8.dev. Coffee Docket source
9cf4541 was published on 28 September 2026. HTTPS, Home/Work links, its project
page, sitemap and apex-to-www redirect were verified. The personal Vercel
project links jaskevs/bld8-web; main deploys automatically. See docs/deployment.md.
The earlier network block is resolved. Manual screen-reader review is pending.

Read docs/website-structure.md for file locations and the proposed MDX note
workflow; a post system is not implemented. Preserve fixed roadmap dates and
scope rules. Do not commit, push or deploy without an explicit request. Preserve
the personal repository-local identity and hooks; never change company/global
Git, GitHub CLI or SSH settings. Licence selection remains pending.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commit time restriction

User instruction, 28 September 2026: do not create code commits from 08:00 inclusive
to 17:00 exclusive in Australia/Melbourne time. Apply this every day unless the
user narrows the days. Check the actual local time before any authorised commit.
Do not backdate, override dates or defer a commit automatically to bypass this.
Outside that window, commits still require explicit user authorisation and the
existing personal author/committer identity. Editing and local verification can continue.

## BLD8 UI case study

/work/bld8-ui is published and listed on Home and Work. It covers purpose,
design/motion, the Base UI-backed React package, first-edition scope and notes to
self. Keep the tone concise and factual. Its live links use
https://bld8-ui.vercel.app (site.uiShowcase), not the deferred custom domain.
The package has not been published to npm. Its source is now public at
https://github.com/jaskevs/bld8-ui by the user's 30 September decision.
The second full-width project panel uses the library's own yellow/black artwork;
the portfolio palette stays lime/white/grey. The reusable library code remains
in its separate sibling project. The website only contains its case study.

The 28 September update was deployed directly. The 30 September Git release
includes the same refinements and case study, so the main branch can reproduce
the current website through the existing automatic Vercel deployment.
