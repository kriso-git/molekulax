# ADR-0001: Build-time prerender (SSG) with an incremental cache, under Vercel's 45-min limit

**Status:** Accepted (2026-06)

## Context
MolekulaX is a client-rendered SPA, but SEO + AI answer engines need real HTML content per compound (the shop competitors ship blank SPAs). We prerender every route in a headless browser at build time and bake the rendered `#root` into a static `index.html` per URL (588 trilingual pages). The client then re-renders the identical SPA over it (no hydration mismatch).

Two hard constraints shaped the design:
1. **Vercel's build container can't launch normal Chromium** → we use `@sparticuz/chromium` + `puppeteer-core` when `process.env.VERCEL`. @sparticuz forces `--single-process`, so one browser ≈ one core regardless of tab concurrency.
2. **Vercel's build time limit is 45 minutes** (fixed on Hobby/Pro). A naive cold-boot-per-page render of 588 pages exceeds it on the cheap 4-core "Standard" machine.

## Decision
- **One browser per worker** (N OS processes = N cores) instead of N tabs in one browser, to beat the single-process limit.
- **Warm-page client navigation:** reuse one page per worker and drive the app's own History router (`pushState` + `popstate`) within a language, instead of a full reload per page. Identical DOM to a real user click; skips re-parsing the bundle each page. Language is fixed at SPA mount, so warm nav stays within one language (the queue is sorted by language).
- **Incremental cache:** `shellHash` covers every rendering input EXCEPT per-entry data files; `contentHash` is one entry's per-lang data file. Unchanged routes write their cached `#root` straight to disk (no browser); the `<head>` is rebuilt fresh every build (head-only inputs never go stale) and the fresh template supplies current asset-hashed `<script>` tags. Cache lives in `node_modules/.cache` (a Vercel-persisted build-cache dir). `PRERENDER_NO_CACHE=1` forces a full render.

## Consequences
- **Small content deploys** (a few entry data files) re-render only those entries → fast on Standard, ~$0.
- **Any code / shared-data / UI-string / dependency / `prerender.mjs` change** bumps `shellHash` → full render → needs the Turbo build machine (then switch back to Standard).
- The cache's Standard-fast payoff depends on Vercel restoring `node_modules/.cache`; the `[prerender] cache: X reused` build-log line confirms it.
- A failed/timed-out build never breaks the live site (the prior deploy stays up).
