# Website deployment

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


## First production deployment - 23 September 2026

- Live URL: https://bld8-web.vercel.app
- Source: https://github.com/jaskevs/bld8-web
- First release commit: 6ac0fb7b431b8674c60907ac96528d23891a7bac
- GitHub checks: https://github.com/jaskevs/bld8-web/actions/runs/35826198930 (passed).
- Vercel project: bld8-web, personal Hobby team jaskevs-4920s-projects.
- Deployment: dpl_4H54hpWb7MwYjKZynSDDDKizsCZ6, READY / production.
- Build: Next.js, Node 22.x, npm run build. No application secrets required.

All five content routes and the favicon, sharing image, robots and sitemap returned
HTTP 200 on the public deployment. Unknown pages return 404. The layer control
worked by keyboard, desktop/mobile layouts had no horizontal overflow and no
browser page errors were recorded. Public source and architecture/ADR links also
returned HTTP 200. Homepage screenshots were checked against the approved design.

## Custom domain - DNS and certificate setup verified

On 23 September 2026, Vercel reported both www.bld8.dev and bld8.dev as
configured_correctly. Both Cloudflare CNAME records use DNS only and point to
85f6d2f2bc9b6753.vercel-dns-017.com. Existing Cloudflare nameservers and the
_vercel TXT verification record are retained. Cloudflare flattens the apex CNAME.

On 23 September, alias records confirmed both domains pointed to the initial deployment
dpl_4H54hpWb7MwYjKZynSDDDKizsCZ6, with bld8.dev redirecting to www.bld8.dev
(308 configured in project domain settings). The www certificate exists and
renews automatically. The missing apex certificate was successfully issued
with vercel certs issue bld8.dev on 23 September.

The initial custom-domain HTTPS check was blocked by a managed network filter
classifying the domain as unknown. On 28 September, the user confirmed access
both on and off the VPN. Automated checks from this environment now pass for
Home, Work, Coffee Docket, the sitemap and the HTTPS apex-to-www redirect.

## Deployment isolation

On this PC, Vercel CLI uses an explicit --global-config directory under
../.bld8-local/vercel. Personal credentials are outside every Git repository.
.vercel and .env files are ignored; .vercelignore also excludes local test/build
outputs. Never deploy the parent workspace or private planning repository.

The Git remote uses the isolated personal SSH configuration. Release author and
committer are Jaison <26425317+jaskevs@users.noreply.github.com>, with no co-authors.
Company/global Git, GitHub CLI and SSH settings were not changed.

## Automatic Git deployment

The user approved automatic deployment on future pushes on 23 September 2026.
The GitHub app connection was completed and verified on 28 September 2026:

- Repository: jaskevs/bld8-web (GitHub repository ID 1382672227).
- Vercel project: bld8-web, personal team jaskevs-4920s-projects.
- Production branch: main.
- Git deployments: enabled.
- Pushes to main build and deploy production; other branches receive previews.

The earlier repo_not_found problem is resolved. No CLI deployment is needed
for normal future pushes. Keep the existing isolated personal Git identity.

GitHub Actions and Vercel builds run independently. The Git integration does
not itself make production wait for CI. Prefer a branch/preview, check CI,
then merge to main; branch protection can enforce that review separately.

Manual screen-reader review and licence selection remain outstanding.
See launch-checklist.md and verification.md for the remaining review work.

## BLD8 UI case study release — 28 September 2026

- Live case study: https://www.bld8.dev/work/bld8-ui.
- Vercel deployment: dpl_5KgcRgPgWH5885tCRWMmUqoicD4x, READY / production.
- Scope: new case study, Home/Work project entry, HTML/CSS/SVG artwork and sitemap;
  includes the current user-requested minimal design and copy refinements.
- Deployment used the existing personal project prj_k9ps7R7aNsyVst9t1ALZYr7DXc8e
  in team jaskevs-4920s-projects. No DNS or Git-connection settings changed.
- Vercel built an allowlist of 40 runtime files (src, root package manifests,
  Next and TypeScript configuration). No .env, private planning, credentials,
  parent workspace, node_modules or local artifacts were uploaded.
- PowerShell HTTPS used normal certificate verification. No TLS bypass.
- Local lint, both content checks, production build and all 18 browser checks
  passed. Extra responsive checks cover desktop, tablet and 390/320 px phones.

This was a direct source deployment; no commit or push was made. The release has
no new Git SHA. Existing main still points to the prior committed website, so
retain the local refinements and case study when making the next authorised
commit/push. Automatic main deployment remains enabled. All future commits must
use the personal author/committer identity and obey the Melbourne work-hour rule.

The linked library showcase is https://bld8-ui.vercel.app. Its custom domain and
npm publication remain deferred. The source repository is not linked publicly.

Live verification: https://bld8-web.vercel.app passed browser checks at 1440,
820, 390 and 320 px, including both listing links, the new page, its canonical,
showcase links, white panels, no overflow and no browser errors. Library Home
and /motion both returned 200. The public sitemap includes /work/bld8-ui.

The production deployment lists www.bld8.dev among its assigned aliases, but
this PC's connection to that host reset during verification; the external web
reader also could not retrieve it. The Vercel address serves the verified new
release. No VPN, proxy, firewall, certificate or DNS settings were changed.

## Source release - 30 September 2026

The user requested all pending repository changes be committed and pushed.
This release includes the refined website design/copy, crisp dotted icons,
file-watching local development workflow, white project panels and BLD8 UI case
study. Earlier notes stating that these files are uncommitted describe the
28 September direct deployment; this Git release brings that source into main.

The personal repository-local SSH identity and commit guards remain in place.
Commits are restricted to outside 08:00-17:00 Australia/Melbourne. No company or
global Git, GitHub CLI or SSH settings are changed. Existing main pushes trigger
Vercel production deployments. See verification.md for local release checks.

Git release verified, 30 September: implementation commit b3a1179 is pushed.
GitHub Actions run 36689861713 passed, and Vercel's commit status reported
success / Deployment has completed for this exact commit. The separate BLD8 UI
source is now public at https://github.com/jaskevs/bld8-ui by user choice;
its source push does not yet trigger its own Vercel deployment.
