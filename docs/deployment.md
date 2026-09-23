# Website deployment

The user approved the current design and requested publication on 23 September
2026. Target: Vercel, with www.bld8.dev as the canonical domain and Cloudflare DNS.
Initial deployment is being prepared; a successful live URL is not yet verified.

The website needs no application secrets or external services. Node 22.x matches
CI. Vercel detects Next.js and runs npm run build. Deploy only this repository;
never upload the parent workspace, private planning repository or .bld8-local.

On this PC, Vercel credentials use the explicit --global-config directory under
../.bld8-local/vercel. This keeps personal deployment authentication separate
from any company setup. Do not print or commit its contents.

The Git remote uses the isolated personal SSH configuration. Every commit must
use Jaison <26425317+jaskevs@users.noreply.github.com> for author and committer.

Manual screen-reader review remains outstanding. See launch-checklist.md and
verification.md for evidence and the remaining launch work.
