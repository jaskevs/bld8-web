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

## Brighter design and broader focus — 28 September 2026

This local refinement follows the requested lighter, minimal Linear/ElevenLabs
references while preserving the existing white, black and bright lime palette.
The two-column hero and interactive layer study remain. Softer framing, lighter
project illustrations, a featured Workbench card and paired website/Coffee
Docket cards replace the earlier project rows.

Home, About, project summaries, metadata and the sharing image use the broader
focus. .NET, C# and Angular remain in the stated background; current focus also
includes React, Next.js, React Native, NestJS, Python and AI research. Project
stack descriptions stay tied to their actual implementation or documented plan.

Validation on the final source:
- ESLint, two Vitest content checks and the Next.js production build passed,
  including TypeScript. All six content routes and generated assets were built.
- All 16 existing Playwright desktop/mobile checks passed against a fresh local
  production server, including keyboard navigation, layer selection, disclosures,
  canonical URLs, missing-page handling and automated axe accessibility scans.
- Additional layout checks at 1440, 820, 390 and 320 px passed for Home, Work,
  About and Coffee Docket: no horizontal overflow, browser errors or project
  content extending beyond its card. A desktop card-height issue found during
  screenshot review was corrected before the final checks.
- Desktop Home, tablet hero, narrow-phone Home, mobile About, Coffee Docket and
  the generated sharing image were visually reviewed. The README screenshot
  now shows this local refinement.

Preview: http://127.0.0.1:3117. The preview uses an isolated local server;
existing browser profiles and company/global Git settings are unchanged.
Design review remains open, and manual screen-reader review is not represented
by the automated checks. No commit, push or deployment was made for this revision.
The previous approved release remains live at https://www.bld8.dev.

## Quieter content and interaction detail — 28 September 2026

Removed the Home technology strip following user feedback. About now carries the
broader technology focus in natural prose, preserving Angular/.NET/C# background
and AI research. Home moves directly from its introduction to selected projects.

Controls now use 4 px corners. Shared easing controls hover colours, link
underlines and directional arrows, with a 2 px button lift and stable hover area.
The skip link and focus outline remain immediate. Pointer movement is limited to
fine-pointer devices; reduced-motion preferences disable transitions and movement.
Fine section rules, small endpoint marks and short label rules add restrained detail.

Validation: lint, two content checks, the production build including TypeScript,
and all 16 existing desktop/mobile browser checks passed. Responsive checks at
1440, 820, 390 and 320 px passed with no overflow or card-content overlap.
Additional browser inspection verified normal hover and return states, stable
hover at the lower button edge, directional arrows, link underlines and disabled
motion under reduced-motion settings. The technology strip is absent from Home;
all requested focus areas remain in About. Desktop Home, mobile hero and desktop
About screenshots were reviewed. The README screenshot is updated.

Local preview remains http://127.0.0.1:3117. No commit, push or deployment was
performed. Manual screen-reader review remains outstanding.

## Dotted icons and component-library experience — 28 September 2026

Added a shared DotIcon SVG component with individually placed, filled circles.
Navigation/action arrows, the cube mark, project connectors, receipt symbols
and coffee cup now use dotted icons. Small arrows use a more open five-dot grid
and heavier dots; navigation arrows stay at least 16 px. The coffee icon is
upright. Icons use inherited colours and no raster assets or blur filters.
Directional hover motion and decorative accessibility semantics are preserved.
The favicon retains its solid form for legibility at browser-tab sizes.

About now mentions maintaining React and Angular component libraries in one
background sentence. The current-interests paragraph is shorter; no new skills
section or promotional strip was added.

Lint, the production build including TypeScript, two content tests and all 16
existing desktop/mobile browser checks passed. Responsive checks at 1440, 820,
390 and 320 px passed. Icon details were inspected at 1x and 2x pixel density;
small arrow weight was increased after that review. Existing hover and
reduced-motion behaviour was verified with the new SVG icons. About and the
updated project icon artwork were visually reviewed.

Preview: http://127.0.0.1:3117. No commit, push or deployment was performed.

## Plain headline, line logo and live editing — 28 September 2026

The headline is now “Software & experiments.” on Home and the sharing image,
with matching image alt text. The original line cube is restored at its natural
25:28 proportions. GitHub profile links use a compact diagonal icon with two
tail dots; other dotted icons and hover behaviour remain. Existing user edits
to the footer content were preserved.

The old local URL on 3117 served a production snapshot and could not refresh
source edits. That known BLD8 process was replaced with a development server.
`npm run dev` now uses 3117, `npm start` uses 3118, and `npm run preview` builds
before starting the production preview. Browser tests use 3116 and always start
a fresh server, avoiding accidental use of a stale preview or development server.
See local-development.md for commands, file locations and troubleshooting.

Fast Refresh was verified with a real requested edit: the Home headline was
changed in its source file while the browser was open, and the displayed text
updated without manual navigation or reload. The new headline fits its column.
Lint, two content checks, the production build including TypeScript and all 16
browser checks passed. Desktop/tablet/phone layout checks passed at 1440, 820,
390 and 320 px. The narrow-phone headline, restored logo, compact GitHub icon
and sharing image were visually reviewed. The separate production preview on
3118 returned the current page; its screenshot updates the README.

The live development server remains available at http://127.0.0.1:3117.
No commit, push, deployment or repository-visibility change was made.

## Consistent arrow details — 28 September 2026

All diagonal arrows now use the same compact two-tail-dot shape. Link,
navigation and back-link text/icon gaps are 8 px; button gaps are 12 px.
The text-link underline length follows the revised gap. Existing colours,
icon weight and hover movement are preserved.

TypeScript and browser checks passed across all six routes at 1440 and 320 px:
matching diagonal icons, expected gaps, no horizontal overflow or browser errors.
Desktop action links and mobile navigation screenshots were visually reviewed.
The changes remain local in the live development preview on port 3117.

## White project artwork - 28 September 2026

Reviewed https://www.carlhauser.com/projects as a visual reference. Workbench,
website and Coffee Docket artwork now sit on white canvases, separated from
copy by fine rules. Lime remains on the central workflow node and coffee mark.
Removed the coloured washes and reduced decorative shadows. Existing project
content, grid and arrow details are preserved.

Home and Work were checked at 1440, 820, 390 and 320 px: all three canvases have
white backgrounds, no background images/gradients and no horizontal overflow.
Desktop and mobile artwork were visually reviewed. The README screenshot is
updated. Changes remain local; no commit, push or deployment was performed.

## Grey page canvas and white panels - 28 September 2026

Following the user's clarification, the page background is now #f5f5f5 while
project cards and artwork remain #ffffff. Lime accents and fine rules remain.
Home and Work were checked at 1440, 390 and 320 px: computed page/card colours
match the intended contrast, with no horizontal overflow. The desktop screenshot
was reviewed and the README preview refreshed. No commit, push or deployment.
## BLD8 UI case study and website publication — 28 September 2026

Added /work/bld8-ui, its metadata/canonical/sitemap entry, and a shared project
entry on Home and Work. The case study covers purpose, design/motion, the Base UI
foundation, initial scope, validation and next steps. It links to the live Vercel
showcase and motion studies. No npm availability, public source repository,
adoption or production-readiness claims were added.

A code-based component composition provides the artwork. White outer panels and
the portfolio's lime palette remain; yellow and black identify the UI library
inside its own artwork. Both Workbench and BLD8 UI use explicit featured layout.

Validation:
- ESLint, both content checks and the production build (including TypeScript)
  passed; the build generates 13 routes, including seven content pages.
- All 18 desktop/mobile Playwright checks passed, covering keyboard navigation,
  404 recovery, canonical metadata, horizontal overflow and automated axe scans.
- Additional Home/Work link and case-study checks passed at 1440, 820, 390 and
  320 px. The panel stays white; no horizontal overflow or browser errors.
- Desktop panel and mobile case-study screenshots reviewed.
- Production deployment and live checks are recorded in deployment.md.

No commit or push was made. The current website refinements and new case study
were deployed directly to the existing personal Vercel project. Manual
screen-reader review remains pending. Development stays on port 3117.

Live browser checks passed on https://bld8-web.vercel.app at 1440, 820, 390 and 320 px. This PC could not verify the custom domain because its connection reset. Vercel reports the domain assigned to the new release; see deployment.md.

## Git release checks - 30 September 2026

Before committing the pending design/copy and BLD8 UI case study, lint, both
content tests, the production build including TypeScript and all 18 desktop/mobile
browser checks passed. The staged release contains no .env, .vercel, generated
build/test files or detected credential patterns. The release uses the existing
personal identity and hooks, outside the 08:00-17:00 Melbourne commit window.
