# Edit and preview locally

Use this repository: `D:\work\Lab\bld8\bld8-web`.

## Live editing

Run in a terminal:

```powershell
cd D:\work\Lab\bld8\bld8-web
npm run dev
```

Open http://127.0.0.1:3117 and leave the terminal running. Save a source file to
see the change through Next.js Fast Refresh. A full reload can happen for some
edits. Use Ctrl+C in that terminal to stop the server. After a restart of the PC,
run the same command again. Install dependencies with `npm ci` on a fresh checkout.

The local URL previously ran `next start`, which serves the last production
build and does not watch source files. As of 28 September it is reserved for
`next dev`. Production preview and browser tests use different ports.

| Purpose | Command | URL |
|---|---|---|
| Edit with automatic refresh | `npm run dev` | http://127.0.0.1:3117 |
| Preview a fresh production build | `npm run preview` | http://127.0.0.1:3118 |
| Browser regression checks | `npm run test:e2e` after building | http://127.0.0.1:3116 (temporary) |

`npm start` only serves the existing build on 3118; `npm run preview` builds it
first. Browser tests always start a fresh server and never reuse the live editor.
All servers bind to the local loopback address. Nothing is published by these
commands; only an explicitly authorised push to main triggers the Vercel release.

## Files to edit

| Content | File |
|---|---|
| Home headline, introduction and sections | `src/app/page.tsx` |
| About copy and current interests | `src/app/about/page.tsx` |
| Project cards and descriptions | `src/lib/site.ts` |
| Individual project write-ups | `src/app/work/<project>/page.tsx` |
| Navigation, footer and temporary line logo | `src/components/Header.tsx`, `Footer.tsx`, `Wordmark.tsx` |
| Small dotted icons and arrow variants | `src/components/DotIcon.tsx`, `Arrow.tsx` |
| Colours, radii and motion timing | `src/styles/tokens.css` |
| Home layout | `src/app/page.module.css` |
| Sharing image headline | `src/app/opengraph-image.tsx` |

Keep the Home headline, sharing image and image alt text in `src/lib/site.ts`
consistent. Files remain the source of truth; there is no CMS or post loader yet.

If a change does not appear, check that the URL is **3117**, the development
terminal is still running, and the edited file is in this repository. Refresh
once if the browser was already open when switching server modes. A syntax error
appears in the browser or terminal and must be fixed before updates resume.

If the port is already occupied, check whether the existing BLD8 development
server is running before starting another. Do not kill unrelated Node processes.

References: [Next.js Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh)
and [Next.js CLI](https://nextjs.org/docs/app/api-reference/cli/next).
