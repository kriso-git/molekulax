# Comparison Route (`/osszehasonlitas`) — Design Spec

**Date:** 2026-06-21
**Status:** Approved (design), pending implementation plan
**Author:** session work (MolekulaX)

## Goal

Add SEO-targeted, trilingual compound-comparison pages that let a reader see two or three
related compounds side by side, derived entirely from existing entry data (no new medical
claims). First three comparisons, all intra-library:

1. `ostarine-vs-rad-140` (performance / SARM)
2. `semaglutide-vs-tirzepatide-vs-retatrutide` (peptides / GLP-1, **3-way**)
3. `bpc-157-vs-tb-500` (peptides / healing)

This is the second of the remaining LLM-Council items, after the privacy page. Targets
long-tail "X vs Y" search demand and strengthens internal linking.

## Non-goals (YAGNI)

- No dynamic any-vs-any comparison UI. Curated registry of comparisons only.
- No cross-library comparison in v1 (every member of each comparison shares a library, so
  data shapes already align). The resolver still keys off entry id → library, so a future
  cross-library comparison is possible without redesign.
- **No new editorial / medical prose.** Content is juxtaposed existing entry data only
  (approved: "lean, derived"). Avoids YMYL risk + PMID-accuracy burden.

## URL design

Language-invariant compound ids in the slug (mirrors entry URLs, where the id is constant
across languages and only the localized prefix/library-word changes). The `-vs-` connector
is kept literally in all languages.

| | HU (root) | EN | PL |
|---|---|---|---|
| Index | `/osszehasonlitas` | `/en/compare` | `/pl/porownanie` |
| Detail | `/osszehasonlitas/<slug>` | `/en/compare/<slug>` | `/pl/porownanie/<slug>` |

`<slug>` = member ids joined by `-vs-`, e.g. `ostarine-vs-rad-140`,
`semaglutide-vs-tirzepatide-vs-retatrutide`. Slug is identical across the 3 languages.

Total new pages: index ×3 + (3 comparisons ×3) = **12 prerendered pages**.

## Data model

New registry in `src/seo/urls.js` (next to `STATIC_PAGES`):

```js
// Base path word per language for the comparison section.
export const COMPARISON_BASE = { hu: 'osszehasonlitas', en: 'compare', pl: 'porownanie' }

// Curated comparisons. `members` are entry ids; `lib` is their shared library. `slug` is
// derived from members (members.join('-vs-')) but stored explicitly so it is the single
// source of truth for routing + sitemap + prerender.
export const COMPARISONS = [
  { slug: 'ostarine-vs-rad-140', lib: 'performance', members: ['ostarine', 'rad-140'] },
  { slug: 'semaglutide-vs-tirzepatide-vs-retatrutide', lib: 'peptides', members: ['semaglutide', 'tirzepatide', 'retatrutide'] },
  { slug: 'bpc-157-vs-tb-500', lib: 'peptides', members: ['bpc-157', 'tb-500'] },
]
```

Helpers: `comparisonBasePath(lang)`, `comparisonPath(slug, lang)`, and a `SLUG_TO_COMPARISON`
reverse map.

## Routing (`parsePath`)

Add a `comparison` branch BEFORE the library lookup. After the language prefix is stripped:

- `parts[0]` === localized `COMPARISON_BASE[lang]` and `parts.length === 1`
  → `{ kind: 'comparison-index', lang }`
- `parts[0]` === base and `parts.length === 2` and `SLUG_TO_COMPARISON[parts[1]]` exists
  → `{ kind: 'comparison', lang, slug: parts[1] }`
- base + unknown slug → `{ kind: 'unknown' }` (soft-404 noindex, existing behavior)

`translatePath` extended: `comparison-index` → `comparisonBasePath(lang)`, `comparison` →
`comparisonPath(route.slug, lang)` (slug is language-invariant). No collision: the base words
(`osszehasonlitas`/`compare`/`porownanie`) are not library slugs and not in `STATIC_PAGES`.

## Content derivation

`buildComparison(members, lang)` (pure helper, new module e.g.
`src/components/comparison/buildComparison.js`):

For each member, load its localized entry data (same import path the prerender + EntryDetail
use: `src/data/libraries/<lib>/entries/<lang>/<id>.js`). Build:

- **Header row:** `name` + localized library/category tag.
- **"What it is" row:** `shortDesc` (universal, 7/7).
- **keyInfo rows:** UNION of `keyInfo` labels across members; for each label, each member's
  value or `—`. (Verified: BPC/TB share all 6 labels; GLP-1 trio shares Típus/Szerkezet/Tárolás
  and the gaps — e.g. semaglutide's FDA "Státusz" — are themselves informative; SARM pair shares
  Hatásmechanizmus/Felezési idő/Hatáskezdet/Jogi státusz.)
- **Footer row:** "Read the full entry" link to each member's `entryPath(lib, id, null, lang)`.

No library-specific branching, no curated dimension lists. Label order = first-seen order
across members (stable). Missing entry data (failed import) → that member column shows `—`
for all rows but the page still renders (graceful).

## Components

- `src/components/comparison/ComparisonPage.jsx` — detail page. Renders title
  (`A vs B [vs C]`), a one-line derived intro (member names + shared category), and a
  responsive side-by-side glass table (2–3 columns) reusing the existing entry-page
  aesthetic (`var(--text-primary/secondary)`, glass, accent `#818cf8`). Back link + `<Footer />`.
  Mobile (<640px): the side-by-side table collapses to stacked per-dimension blocks (each
  dimension = a small card listing each member's value), avoiding horizontal scroll on 390px.
- `src/components/comparison/ComparisonIndex.jsx` — lists the 3 comparisons as cards linking
  to each detail page. Back link + `<Footer />`.
- Both take a `lang` prop and key into a small `CONTENT[lang]` map for the few UI labels
  (title template, "what it is", "read full entry", index heading) — no new body prose.

## Head / SEO

- `useDocumentHead`: handle `comparison-index` + `comparison` kinds. Titles/descs derived:
  detail title = `"<A> vs <B> – összehasonlítás | MolekulaX"` (localized template), desc from
  member names + category. Index has a static localized title/desc (PAGE_HEAD-style block).
- `prerender.mjs`: enumerate COMPARISON index (×3 langs) + each comparison (×3 langs). Reuse
  the existing non-entry route path (no name-guard; wait for `#root > 2000` chars). Add
  reciprocal hreflang via `altMap`. BreadcrumbList JSON-LD: Home > Comparisons (index) > this
  comparison.
- `gen-sitemap.mjs`: add comparison groups (index + 3 details) to `buildSitemapGroups`, type
  `page` priority 0.5. Sitemap 594 → **606** (12 new locs).
- `check-prerender.mjs`: add a HU index check + one detail check (HU + an EN langMust) to keep
  the JS-off gate meaningful for the new route.

## Discovery

Footer gains a third legal/nav link "Összehasonlítás" → `comparisonBasePath(lang)` (next to
Methodology + Privacy), crawlable `<a href>` + SPA `legalNav` (same pattern just shipped). The
index page lists all comparisons. (No per-entry cross-links in v1 — YAGNI.)

## Verification (same gate chain as privacy)

`npm test` · `npm run build:prerender` (full, shell changes) · `check-prerender` (incl. new
comparison checks) · `npm run smoke` · `visual-diff --mode compare` (home/entry surfaces must
stay 0.000%; footer change is below the fold; new comparison pages are not in SURFACES) ·
`verify-csp` · then prebuilt deploy + live curl verify (12 URLs 200, EN/PL correct language,
sitemap 606). i18n keys added to all 3 uiStrings files (no entry-data touched → PMID hook skips).

## Risk / edge cases

- 3-way table width on mobile → stacked per-dimension blocks (<640px), decided above.
- keyInfo union row order across 3 members with differing labels → first-seen order, stable.
- A future 4th comparison only needs a `COMPARISONS` entry + (optionally) an index card; routing
  / prerender / sitemap pick it up generically.
- Variant entries: members are base ids only; no variant handling needed in the slug.
