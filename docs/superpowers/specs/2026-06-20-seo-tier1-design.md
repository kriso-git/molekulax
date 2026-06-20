# SEO Tier-1 — Crawlable URLs + Prerendering Design

**Date:** 2026-06-20
**Status:** Approved design (pre-implementation)
**Goal (one sentence):** Make MolekulaX's ~191 educational compound pages (and library landings) individually crawlable and indexable — with real per-page URLs, prerendered HTML, per-page SEO metadata, a full multilingual sitemap, and hreflang — WITHOUT breaking the site or changing any visible content/cards.

**Architecture:** Replace client-only hash routing (`#entry/<lib>/<id>`) with real History-API path routing (`/peptidek/bpc-157`), add a build-time Puppeteer prerender step that snapshots the actually-rendered SPA to static HTML per route, generate a build-time sitemap, and inject per-page SEO metadata (title/description in-app; canonical/hreflang/JSON-LD at build). HU at root; EN/PL under `/en/`, `/pl/`. Rolled out in 3 independently-deployed phases.

**Tech Stack:** React 19, Vite 6, Puppeteer (already in stack via render-smoke), Vercel static hosting + enforced CSP. No new runtime framework (NO react-router, NO SSG framework) — a lightweight custom path router extends the existing `useHashRoute` pattern.

---

## Why (problem statement)

Current SEO-blocking facts confirmed in the codebase:

1. Entry pages live in the URL **hash** (`#entry/<library>/<id>/<variantId?>`, parsed in `src/components/library/entryHash.js`). Google does not index hash fragments as separate URLs → all ~191 compound pages collapse to one indexable URL (the homepage).
2. **No SSR/prerender** — pure CSR SPA. Crawlers get an empty `#root` shell; content loads via JS + lazy dynamic import. Non-JS crawlers (Bing partial, social, AI answer engines) see nothing.
3. **`public/sitemap.xml` lists only `https://molekulax.hu/`.**
4. **No per-page title/meta** — one static `<title>` in `index.html` for every view.
5. **Language is `localStorage`-only** (`molekulax-lang`), not in the URL → the 3 languages share one URL and are invisible to crawlers as distinct content.

Net: MolekulaX has ~1 indexable page while its entire SEO value (191 richly-cited compound pages × 3 languages ≈ 585 potential pages) is invisible to search. Competitor shops rank because they have real crawlable product URLs.

## Constraints (hard)

- **MUST NOT break the site** — every phase gated by build + smoke + CSP test + visual screenshot-diff + link-check before deploy.
- **MUST NOT change visible content/cards** — the prerender snapshots the *actual* rendered SPA, so prerendered HTML is the current UI by construction. The only "new text" is `<title>` + `<meta description>` (browser tab + search snippet only — NOT shown in the page body/cards), derived from existing entry data.
- **CSP stays enforced** — injected metadata is `application/ld+json` (data, not executed) + head links; no inline executable scripts.

---

## A. URL scheme, routing, back-compat

### URL patterns

| Page | HU (root) | EN | PL |
|---|---|---|---|
| Home | `/` | `/en` | `/pl` |
| Library landing | `/peptidek` | `/en/peptides` | `/pl/peptydy` |
| Compound | `/peptidek/bpc-157` | `/en/peptides/bpc-157` | `/pl/peptydy/bpc-157` |

### Library slug words (localized)

| lib id | HU | EN | PL |
|---|---|---|---|
| peptides | `peptidek` | `peptides` | `peptydy` |
| nootropics | `nootropikumok` | `nootropics` | `nootropiki` |
| performance | `teljesitmenyfokozok` | `performance` | `wspomaganie` |
| pharmaceutical | `gyogyszerek` | `pharmaceuticals` | `leki` |

- The compound id is identical across languages (`bpc-157`, `5-amino-1mq`, …).
- A single `LIB_SLUGS` map (lib id ↔ `{hu,en,pl}` word) + reverse lookup lives in one module (`src/seo/urls.js`). The PL words are placeholders to be validated by a Polish speaker before Phase 3 ship; this does not block the architecture.

### Multi-variant entries

- The **default variant is the canonical URL** (`/teljesitmenyfokozok/testosterone-info`).
- Variant deep-links work (`/teljesitmenyfokozok/testosterone-info/<variantId>`) but carry `<link rel="canonical">` pointing to the default URL (no duplicate-content penalty).
- Only the default variant is prerendered.

### Language detection

- Determined by URL path prefix: `/en/...` → EN, `/pl/...` → PL, else HU. URL wins over `localStorage` on these pages.
- The language switcher navigates to the translated URL (e.g. `/peptidek/bpc-157` → `/en/peptides/bpc-157`). `localStorage` still records the user's manual preference for the homepage entry.
- This is a navigation behavior change only; the displayed content is unchanged.

### Back-compat (old hash links)

On app load, a one-shot `history.replaceState` maps old hash URLs to new paths:

- `#entry/peptides/bpc-157` → `/peptidek/bpc-157`
- `#entry/<lib>/<id>/<variant>` → `/<localized-lib>/<id>/<variant>`
- `#library` → `/`

Preserves Telegram-shared links and any externally-linked hash URLs. Single replaceState → no redirect loop.

### Routing mechanics

- Extend the existing lightweight `useHashRoute` into a path router: parse `window.location.pathname`, listen to `popstate`, navigate via `pushState`.
- NO react-router. Display components (`LibraryCube`, `EntryDetail`, `EntryDetailRoute`) are unchanged — only the source of "which entry/library/lang" switches from hash to path.
- Internal navigation (tile click in `LibraryGallery.openEntry`, `RelatedCard`, close/back) uses `pushState` to the path equivalents instead of setting `window.location.hash`.

---

## B. SEO metadata, prerender, sitemap, Vercel

### 1. In-app per-page head (minimal, no new dependency)

A `useDocumentHead(route, lang)` effect sets, per route:

- `document.title` — e.g. `BPC-157 – hatás, adagolás, biztonság | MolekulaX` (localized template per lang; the compound name + category + brand).
- `<meta name="description">` — derived from the entry's existing `oneLiner`/`shortDesc` (no new copy authored).

Runs in dev + the live SPA so JS-rendered views also get correct titles; the prerender captures the final `<head>`. These appear only in the browser tab + search snippet, never in the page body.

### 2. Build-time SEO injection (done by the prerender script, into static HTML `<head>`)

- `<link rel="canonical">` — self-canonical; variants → default.
- `<link rel="alternate" hreflang="hu|en|pl|x-default">` — language alternates per page.
- Per-compound JSON-LD (`MedicalWebPage` with an embedded `Drug`/`ChemicalSubstance` `mainEntity`) built from existing entry data (name, description, citation PMIDs).

Injected only into the static `<head>`, not the runtime bundle → runtime app stays minimal and content-identical. JSON-LD is `type="application/ld+json"` (non-executable data) → allowed by the enforced CSP.

### 3. Prerender pipeline (`scripts/prerender.mjs`)

1. After `vite build`, start a static server over `dist/` (reusing the smoke harness's server, with the CSP header for parity).
2. Enumerate routes from library data: homepage + 4 library landings + 191 default-variant compound pages, per in-scope language (Phase 2 = HU; Phase 3 = HU+EN+PL).
3. For each route: a Puppeteer page-pool (like `smoke-render.mjs`) navigates, waits for a deterministic render-ready signal (`#root` has children + an explicit `window.__APP_READY__` marker set after first paint of the route), then captures `document.documentElement.outerHTML`.
4. Post-process: inject §2 metadata into `<head>`; ensure the app-set `<title>`/`<meta description>` are present; write to `dist/<path>/index.html` (e.g. `dist/peptidek/bpc-157/index.html`).
5. **Content-identical by construction:** it snapshots exactly what the SPA renders. On client load React mounts into `#root` and takes over (CSR, no hydration mismatch concept); content matches → no visible change/flash.
6. Parallelized; target ≤ ~2 min added build time for HU (×3 in Phase 3).

### 4. Sitemap + robots (`scripts/gen-sitemap.mjs`)

- Build-time: enumerate all in-scope URLs (library × entry × language) → `dist/sitemap.xml` with `<xhtml:link rel="alternate" hreflang>` per URL group and `<lastmod>`.
- Ensure `public/robots.txt` has a `Sitemap: https://molekulax.hu/sitemap.xml` line.

### 5. Vercel interplay (verification point)

- Today: `vercel.json` rewrite `"/(.*)" → "/index.html"` serves the shell for all paths.
- After prerender, real static files exist (`dist/peptidek/bpc-157/index.html`). Vercel serves an existing static file before applying a rewrite, so prerendered pages win and unknown paths fall through to the SPA shell.
- This precedence is **explicitly verified live in Phase 2** (curl a prerendered URL, confirm it returns baked HTML, not the bare shell); if the catch-all rewrite clobbers static files, switch to `cleanUrls`/`trailingSlash` config or scope the rewrite to exclude existing files. The CSP/security headers (added 2026-06-20, master `1df4056`) remain applied to all responses.

---

## C. Testing/gates, phasing, risks

### Gates (every phase must pass before deploy)

1. `npm run build` green.
2. `npm run smoke` (extended to also hit new path URLs).
3. CSP enforce test (dist + CSP-header static server + Puppeteer `securitypolicyviolation` capture) → 0 violations.
4. **Visual screenshot-diff** — home, a gallery, 2–3 entries, mobile, captured before/after, pixel-compared → proves the UI is identical (the "cards/content don't change" guarantee).
5. **Link/route check** — every prerendered URL returns its own content (no 404 / redirect loop); old `#hash` links redirect correctly.
6. Post-deploy: live `curl` (headers present) + live render check + Google Search Console sitemap submission.

### Phases (independently deployed)

**Phase 1 — Path routing + meta + sitemap (HU)** — the unlock
- Lightweight path router; `App.jsx` + `entryHash` → path-based; internal nav via `pushState`.
- Back-compat: old `#entry`/`#library` → `replaceState` to new path.
- `useDocumentHead` (HU title + meta description).
- Library landing pages (`/peptidek` etc.) open the site at that library.
- Build-time HU sitemap + robots `Sitemap:` line.
- Result: ~195 indexable HU URLs with correct meta (Google can JS-render them).

**Phase 2 — Prerender (SSG) + structured data (HU)** — full HTML for all crawlers/AI
- `scripts/prerender.mjs` snapshots all HU routes → static HTML + injects canonical + per-compound JSON-LD.
- Wire into `build`: `validate-library-meta && vite build && prerender && gen-sitemap`.
- Verify Vercel static-file precedence live.
- Result: every HU page is full HTML — Bing, social, ChatGPT/Perplexity/AI Overview see content.

**Phase 3 — EN/PL language URLs + hreflang** — multilingual SEO
- `/en/`, `/pl/` prefix routing + language-from-path; switcher navigates to translated URL.
- Prerender all 3 languages; sitemap + hreflang for all; validate PL slug words.
- Result: ~585 indexable URLs across 3 languages.

### Risks & mitigations

| Risk | Mitigation |
|---|---|
| Visible UI change / flash | screenshot-diff gate each phase; prerender snapshots the real SPA → identical by construction; CSR takeover is content-identical → no flash |
| Vercel rewrite clobbers prerendered files | explicit live verification in Phase 2; adjust cleanUrls/rewrite scope so static files win |
| Redirect loop / broken deep-link | link-check gate + back-compat is one-shot `replaceState` (no loop) |
| CSP breakage from injected metadata | JSON-LD is non-executable data; CSP test gate each phase |
| Build-time growth | Puppeteer page-pool parallelism (~1–2 min) |
| Multi-variant duplicate content | variants `rel=canonical` to default; only default prerendered |
| Stale prerender | prerender runs on every build → always regenerated from current data |
| Lost hash-link SEO equity | hash URLs were not separately indexed anyway; redirect preserves user-shared links |

## Out of scope (future SEO Tier-2/3, not this spec)

- E-E-A-T author/medical-reviewer bylines + "last updated" dates.
- Backlink/outreach, partner reciprocal links, Google Business.
- Keyword-targeted new editorial content.
- Per-page Open Graph image generation.

These are tracked as follow-ups; this spec is strictly the technical indexability foundation (Tier-1).
