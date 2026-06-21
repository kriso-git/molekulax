# MolekulaX

Forrás-igazolt, háromnyelvű (HU/EN/PL) farmakológiai edukációs SPA: négy könyvtár (peptidek, nootropikumok, teljesítményfokozók, gyógyszerek), ~191 vegyület. A tartalom **edukatív, nem orvosi tanács**; minden tudományos hivatkozás (PMID) gépileg verifikált. Élesben: <https://molekulax.hu>.

> A „beszerzés" gombok **harmadik fél** boltjaira mutató, jelölt affiliate-linkek – a MolekulaX nem értékesít és nem vizsgálja a termékminőséget.

## Stack
React 19 · Vite 6 · Tailwind 3 · framer-motion 12 · Three.js 0.184 (lazy, dekoratív DNS-háttér) · Vercel (deploy + Analytics). Egyedi History-API router (nincs react-router); URL-vezérelt i18n. Build-time prerender (SSG) Puppeteerrel.

## Getting started
```bash
npm install
npm run dev            # vite dev szerver
npm run build          # validate + sitemap + llms + vite build
npm run build:prerender # build + a 588 statikus oldal kirenderelése (SSG)
npm run smoke          # render-smoke (7+ route, headless) — a dist ellen
npm test               # node --test (build/SEO unit-tesztek)
```

## Projektstruktúra (kulcsok)
- `src/data/libraries/<lib>/` – könyvtár-meta (`index.js` = `LIBRARY_ENTRY_META`) + `entries/<hu|en|pl>/<id>.js` (per-vegyület, per-nyelv adat). **A peptid library tartalmilag FAGYASZTOTT.**
- `src/seo/urls.js` – `parsePath`/`translatePath`/`LIB_SLUGS` (az i18n forrása az URL).
- `scripts/prerender.mjs` – a build-time SSG: warm-page kliens-nav + inkrementális cache (lásd ADR-0001).
- `scripts/seo-jsonld.mjs` – per-oldal JSON-LD builderek (MedicalWebPage/FAQPage/BreadcrumbList).
- `scripts/gen-og-cards.mjs` – per-vegyület + per-variant social kártyák (`public/og/`).
- `scripts/verify-pmids.mjs` – NCBI-ellenőrzött PMID integritás-gate (husky + CI).
- `docs/adr/` – architektúra-döntések (ADR).

## Deploy — FONTOS szabály (költség)
A Vercel build-időkorlátja **45 perc**, és a build-böngésző (@sparticuz) **single-process** a Standard gépen (4 vCPU). Ezért:

- A `prerender.mjs` **inkrementális cache**-t használ (lásd ADR-0001): csak a **megváltozott** entryket rendereli újra.
- **Kis tartalmi deploy** (pár entry adatfájl változik) → kevés oldal renderel → **Standard gépen gyors, olcsó.**
- **Kód / megosztott adat / UI-szöveg / dependency / `prerender.mjs` változás** → a `shellHash` változik → **full render → Turbo build gép kell** (Settings → Build Machine → Turbo, deploy, majd vissza Standardra).
- Egy deploy „mérete" előre: `git diff --name-only origin/master` → ha minden út `entries/{hu,en,pl}/` alatt van, **kicsi (Standard)**; bármi más **nagy (Turbo)**.
- A build-log `[prerender] cache: X reused / Y to render` sora mutatja, mi történt.

## Quality gate-ek
`npm test` · `npm run smoke` · `node scripts/check-prerender.mjs` (JS-off per-nyelv tartalom) · `node scripts/verify-csp.mjs` · `node scripts/visual-diff.mjs --mode compare` · `node scripts/verify-pmids.mjs`. CI: `.github/workflows/ci.yml` (build+smoke offline + PMID-gate NCBI-vel).

## Konvenciók
- **PMID-ek:** sosem kézzel/AI-val kitalálva – mindig a `verify-pmids` gate ellenőrzi (NCBI).
- **Nincs em-dash (—)** a tartalomban; en-dash (–) vagy vessző (`scripts/strip-emdash.mjs` guard).
- **Kikényszerített CSP** (`vercel.json`): új külső szkript/CDN/font/fetch némán blokkolódik, amíg a megfelelő direktívába nem kerül.
- **Dark-only** téma (nincs light mód).

Részletes döntés-háttér: `docs/adr/`.
