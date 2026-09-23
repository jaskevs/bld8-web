# BLD8 website

Public website for BLD8 at `https://www.bld8.dev`.

**Status:** documentation and directory scaffold only. Design and implementation
have not started; no application dependencies, CI runs or deployment exist yet.

## Scope

Home, Work and About at launch. Add Engineering and Lab only when content exists.
The site is a separate repository from BLD8 Workbench and will deploy to Vercel.

## Planned implementation

- Next.js App Router and TypeScript.
- CSS Modules and custom-property tokens; no speculative shared component package.
- Responsive layouts, keyboard and screen-reader checks, restrained motion.
- Metadata, a static sharing image, sitemap and robots configuration.

## Start

1. Complete [content inventory](docs/content-inventory.md).
2. Decide the [visual direction](docs/site-direction.md).
3. Implement the [site brief](docs/site-brief.md) in the reserved `src/` structure.
4. Use the [launch checklist](docs/launch-checklist.md) before publication.

There is no install/build command yet. Generate the Next.js package and lockfile
when implementation begins, preserving the documentation and original CSS direction.
Add CI for actual commands once those commands exist; do not advertise passing checks now.

**Licence:** choose and add a licence before publishing the source repository.
