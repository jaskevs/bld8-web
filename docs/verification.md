# First website implementation - verification

23 September 2026. Local preview: http://127.0.0.1:3108.

## Passed locally

- ESLint and TypeScript checks.
- Two Vitest content integrity checks: public source destinations and canonical/sitemap consistency.
- Next.js production build: all five content routes, 404, favicon, static sharing image, robots and sitemap generated.
- Fourteen Playwright checks using Edge 153 in isolated temporary test profiles.
- Desktop at 1440 x 1000 and mobile at 360 x 800: navigation, project reading, keyboard skip link, keyboard layer selection and 404 recovery.
- All five content pages on both viewport sizes: one h1, correct canonical, no horizontal overflow and no axe WCAG A/AA violations.
- Screenshot review of the desktop Home, Work, About and Workbench pages, mobile Home and the 1200 x 630 sharing image.
- npm installation audit reported zero vulnerabilities. The ESLint major is pinned to 9 because the installed Next.js lint plugins do not yet declare ESLint 10 support; revisit with their next compatible release.

The first axe pass caught low-contrast decorative text. It was replaced with a
non-text geometric motif; the complete browser suite passed after the correction.

## Reproduce browser checks on this PC

The Playwright Chromium download timed out. The installed Edge browser was used
with a separate temporary profile; no Brave or personal browser profile was opened.

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm run build
npm run test:e2e
```

On another environment, the default is Playwright Chromium: install it with
`npx playwright install chromium`, then run the same tests without the channel
override. GitHub Actions installs Chromium on Ubuntu.

## Still required before launch

- User review of the visual design and copy.
- Manual screen-reader review and complete manual keyboard audit.
- Lighthouse performance, accessibility, best-practices and SEO measurements.
- CI execution on GitHub after the changes are committed/pushed.
- Licence selection, deployment, domain/HTTPS/canonical redirect checks.

Automated checks are evidence for this local implementation, not a claim that
manual accessibility review or the production launch is complete. No website
commit, push or deployment was performed in this implementation turn.

## Minimal monochrome revision

The current preview uses white pages, black typography and selective dark panels.
Lint and the production build (including TypeScript) passed again after the visual
revision. All 14 desktop/mobile browser checks passed, including contrast scans
on all five content pages. Desktop/mobile homepage screenshots and the sharing
image were reviewed. This supersedes the visual appearance of the first dark preview.

## Green accent refinement

Muted forest green (#2d684f) and sage (#b8d1ae) now complement the white/black
base. Lint, production build (including TypeScript), and all 14 desktop/mobile
browser checks passed after this change, including the page contrast scans.
Desktop and mobile homepage screenshots were reviewed.


## Minimal brutalist revision - 23 September 2026

The latest user request replaces the previous layout with oversized headings,
square controls, stronger rules, a numbered project list and a black footer.
Forest green and sage accents remain. Public page copy and metadata now use
direct first-person descriptions of the current work and planned work.
The decorative layer study and project illustrations have been removed;
keyboard tests now follow the main project links and native disclosures.

ESLint, both Vitest tests, the production build (including TypeScript), and all
14 desktop/mobile Playwright checks passed after this revision. Automated axe
checks reported no WCAG A/AA violations on the five content routes at the tested
sizes, and the overflow checks passed. Desktop Home, Work, About and Workbench,
mobile Home, and the generated sharing image were reviewed as screenshots.

The local preview is still http://127.0.0.1:3108. Design/copy review and the launch
checks above remain pending. Changes remain uncommitted; nothing was pushed or
deployed. This section supersedes the visual and interaction details above.

## Previous design restored - 23 September 2026

The user preferred the pre-brutalist white-and-black layout with muted green.
The two-column hero, layered illustration, project visual panels, fine rules and
lighter headings are restored. Copy is now shorter and project-focused. The name
appears once in the About introduction, with no repeated name in page metadata,
homepage or footer. Current-state claims remain accurate.

Lint, two content tests, and the production build including TypeScript passed.
All 14 desktop/mobile browser checks passed, including keyboard layer selection,
navigation, native disclosures, automated accessibility and horizontal overflow.
The restored control's test selector was corrected to its actual accessible name.
Desktop and mobile Home, desktop About and the website detail page were visually
reviewed. This supersedes the brutalist revision above. Manual accessibility and
remaining launch work are still pending. No commit, push or deployment was made.

## Bright lime accent - 23 September 2026

The user requested a brighter green like Higgsfield. Its public stylesheet defines
--color-lime as #d1fe17, now used for button fills, illustration accents and the
headline highlight. Dark ink on lime and #526600 for small text/focus on white
preserve contrast. The approved layout and concise copy are retained; the website
project's design description now reflects the palette.

Lint, production build (including TypeScript) and all 14 desktop/mobile browser
checks passed, including automated contrast scans. Desktop/mobile Home and the
sharing image were reviewed. Claude guidance is updated. Changes remain local
and uncommitted; no push or deployment was performed.

## First release preparation - 23 September 2026

The user approved the design and requested push/deployment. Local lint, explicit
typecheck, production build, two content tests and all 14 desktop/mobile browser
checks passed on the release source. The homepage Lighthouse mobile audit scored
97 performance, 100 accessibility, 100 best practices and 100 SEO (local production
server, Lighthouse 13.5.0 / Edge 153). LCP was 2.4 s and TBT 110 ms in that run.
Remaining suggestions concern framework JavaScript and render-blocking resources;
no launch-blocking issue was found by these automated checks. A manual screen-reader
review is still outstanding and is not represented by the Lighthouse score.

The source now uses First release instead of Local preview. Vercel is linked to
bld8-web in the verified personal Hobby team jaskevs-4920s-projects. Credentials
remain outside Git; .env files, .vercel and local build/test outputs are ignored.
See deployment.md for the subsequently verified deployment and domain state.

## Production deployment verified - 23 September 2026

Release 6ac0fb7 was committed and pushed with the required personal author and
committer identity. GitHub Actions run 35826198930 passed. Vercel deployment
dpl_4H54hpWb7MwYjKZynSDDDKizsCZ6 is READY and serves bld8-web.vercel.app.
All five content routes and generated assets returned 200; missing routes return
404. Canonicals target www.bld8.dev. Live keyboard interaction, desktop/mobile
overflow and page-error checks passed. Public repository and all linked ADR and
architecture pages returned 200. The live homepage was visually reviewed.

Both custom hosts are configured in Vercel, with an apex-to-www 308 redirect;
Cloudflare DNS and custom-domain HTTPS verification are pending user action.
The one-time deployment is complete. Automatic Git deployment awaits separate
approval; manual screen-reader review and licence selection remain open.

## Coffee Docket write-up - 23 September 2026

Added a previous-project entry on Home and Work and /work/coffee-docket with
features, stack, architecture, data model and transaction flow, based on the
supplied source repository. Added the route to metadata/sitemap and browser checks.
Lint, two content tests and the production build including TypeScript passed.
All 16 desktop/mobile browser checks passed against a fresh production server on
port 3110, including automated accessibility, canonical and overflow checks.
The pre-existing preview on 3108 returned an old route set; it was left untouched.
The project-list link and desktop/mobile screenshots were checked on port 3111.
Changes remain local: no commit, push or deployment was performed.

## Coffee Docket production release - 28 September 2026

- Source: 9cf454178d3f8705941606f7c96671219069ca52, pushed to main.
- Author and committer: Jaison <26425317+jaskevs@users.noreply.github.com>; no co-authors.
- Vercel deployment: dpl_7g7GwwigSMYrJaWX92AmicHRfiGc, READY / production.
- Live project: https://www.bld8.dev/work/coffee-docket
- Local checks: lint, typecheck, two content tests, build and 16 desktop/mobile browser checks passed.
- Live checks: Home and Work contain the Coffee Docket link; project and sitemap return 200; canonical and repository links match; apex redirects to www with 308.
- GitHub CI: https://github.com/jaskevs/bld8-web/actions/runs/36363895749 (passed).

The missing project was caused by local changes that had never been committed or
deployed. This release was deployed directly using the isolated personal Vercel
configuration. Later on 28 September, the user completed the GitHub connection.
Vercel now links jaskevs/bld8-web with main as its production branch and Git
deployments enabled. No company/global Git, GitHub CLI or SSH settings were changed.
