# Website deployment

First production deployment: 23 September 2026.

- Live URL: https://bld8-web.vercel.app
- Source: https://github.com/jaskevs/bld8-web
- Release commit: 6ac0fb7b431b8674c60907ac96528d23891a7bac
- GitHub checks: https://github.com/jaskevs/bld8-web/actions/runs/35826198930 (passed).
- Vercel project: bld8-web, personal Hobby team jaskevs-4920s-projects.
- Deployment: dpl_4H54hpWb7MwYjKZynSDDDKizsCZ6, READY / production.
- Build: Next.js, Node 22.x, npm run build. No application secrets required.

All five content routes and the favicon, sharing image, robots and sitemap returned
HTTP 200 on the public deployment. Unknown pages return 404. The layer control
worked by keyboard, desktop/mobile layouts had no horizontal overflow and no
browser page errors were recorded. Public source and architecture/ADR links also
returned HTTP 200. Homepage screenshots were checked against the approved design.

## Custom domain - DNS action pending

www.bld8.dev is the canonical host in page metadata and sitemap. Both www.bld8.dev
and bld8.dev are attached to this Vercel project; the apex has a 308 redirect to
www.bld8.dev. Cloudflare DNS changes and final custom-domain HTTPS verification
are still pending, so the verified live URL above is the Vercel alias for now.

The Vercel-generated Cloudflare Domain Connect links were provided to the user.
Manual equivalent, as recommended by Vercel for this project:

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | www | 85f6d2f2bc9b6753.vercel-dns-017.com | DNS only |
| CNAME | @ | 85f6d2f2bc9b6753.vercel-dns-017.com | DNS only |

Cloudflare flattens the apex CNAME. Keep the existing Cloudflare nameservers.
After applying DNS, verify both hosts and the apex-to-www redirect over HTTPS.

## Deployment isolation

On this PC, Vercel CLI uses an explicit --global-config directory under
../.bld8-local/vercel. Personal credentials are outside every Git repository.
.vercel and .env files are ignored; .vercelignore also excludes local test/build
outputs. Never deploy the parent workspace or private planning repository.

The Git remote uses the isolated personal SSH configuration. Release author and
committer are Jaison <26425317+jaskevs@users.noreply.github.com>, with no co-authors.
Company/global Git, GitHub CLI and SSH settings were not changed.

Automatic deployment from GitHub is not enabled. Separate user approval is
pending because connecting it would make future pushes deploy automatically.
Manual screen-reader review and licence selection also remain outstanding.
See launch-checklist.md and verification.md for the remaining review work.
