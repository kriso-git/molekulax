# Phase 11 — Mega Design Spec (AVIF + SW/PWA + Full locale-split + Cleanup)

**Date:** 2026-05-18
**Status:** Approved by user, ready for plan
**Predecessor:** Phase 10 (`v0.10-phase10-rebrand-stable`)
**Target tag:** `v0.11-mega-stable`
**Strategy:** Single atomic Phase, risk-ordered task pipeline with explicit gates; live-split fallback to Phase 11a + Phase 11b if any gate goes red.

---

## 1. Background and motivation

The Phase 10 acceptance audit flagged Modafinil with Perf 74 (TBT 690ms) as a Phase 11 candidate. A fresh 10-entry Lighthouse sweep on `molekulax.vercel.app` (HEAD `51d36ea`, no new deploy) returned **all 10 top-density nootropic entries ≥91 Perf**, with Modafinil at **91** (TBT 260ms). The original "Modafinil TBT-fix" was therefore a single-measurement variance, not a reproducible regression — **the Modafinil-fix priority is cancelled**.

Phase 11 instead consolidates the rest of the Phase 9/10 deferred backlog into one atomic mega-Phase:

1. **AVIF picture chain** — last build-time image-transfer optimization (~150-200kB LCP saving)
2. **Service Worker / PWA** — offline read-mode, asset cache, install-prompt manifest
3. **Full locale-split** — UI + all 22 entries become locale-aware lazy chunks (22 × 3 = 66 chunks)
4. **Brain-cleanup** — consolidate all Phase 1-11 spec/plan/smoke files into a single `MolekulaX_Roadmap_2026-05.md`
5. **Site-cleanup** — delete `assets/` (62MB), dead components (`Tanulmanyok.jsx`, `WadaBox.jsx`), 31 orphan `lh-*.json` artifacts at repo root

## 2. Out of scope

- molekulax.com custom domain DNS / Vercel config (user-side, deferred until launch)
- New library features, content additions, design changes (Phase 11 is finalize-only)
- Component-level performance fixes (Modafinil TBT-fix cancelled by Section 1 evidence)
- SSR / Next.js migration (deferred Phase 13+)
- Locale split granular than 3 (no regional dialects)

## 3. Risk-ordered execution pipeline

Task order goes low-risk → high-risk to protect already-shipped work in the working tree:

```
[Task 1] Site-cleanup     → gate: build✓
[Task 2] Brain-cleanup    → no gate (Obsidian-only, zero prod impact)
[Task 3] AVIF picture     → gate: build✓ + 1-URL LH (Home Perf no-regression)
[Task 4] Service Worker   → gate: build✓ + offline-test + cache-invalidation smoke
[Task 5] Full locale-split→ gate: build✓ + 3-URL LH + language-switch UX test
[Task 6] Full smoke       → 10-URL Lighthouse + push + tag v0.11-mega-stable
```

**Live-split fallback rule:** If any gate goes red mid-Phase, halt and decide:
- **Option (a):** Fix in-place, retry the gate.
- **Option (b):** Tag what's green as `v0.11a-<scope>` (e.g. `v0.11a-cleanup-avif`), defer remaining tasks to Phase 11b. **This protects the user from the multi-week ship-cycle compound-failure risk.**

## 4. Task 1 — Site-cleanup

### 4.1 Deletions (verified zero references)

| Path | Size | Why safe |
|---|---|---|
| `assets/` (root) | 62 MB | Zero `import` references from `src/`; duplicate of `public/peptides/` PNGs (smaller variants, pre-Phase-8 leftover) |
| `src/components/Tanulmanyok.jsx` | — | Pre-i18n studies component, replaced by `StudiesPanel` in `EntryDetail.jsx` |
| `src/components/WadaBox.jsx` | — | Pre-Phase-5 WADA section, replaced by per-tile `WadaBadge` in Phase 5 |
| `lh-*.json` (31 files at repo root) | ~30-50 MB | Already in `.gitignore`; old Phase 7-9 artifacts |
| `.lighthouse-phase10/`, `.lighthouse-phase11/` | ~20 MB | Local-only Lighthouse runs; add to `.gitignore` if missing |

### 4.2 Verification

- `npm run build` green
- `grep -rln "Tanulmanyok\|WadaBox" src/` returns 0 hits
- `grep -rln "/assets/" src/` returns 0 hits (no broken imports)
- `du -sh assets/` returns "No such file or directory"

### 4.3 Gate: build✓

If green → proceed to Task 2. If red → revert deletions, investigate, restart Task 1.

## 5. Task 2 — Brain-cleanup

### 5.1 Consolidate Phase 1-11 into one roadmap file

**Target:** `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_Roadmap_2026-05.md` (overwrite the existing file).

**New structure:**
- Title: `MolekulaX — Roadmap 2026-05 (11-Phase consolidated)`
- One section per Phase 1-11, each containing:
  - Phase header (Phase N — Name, date, commit-range, tag)
  - **What shipped** (3-5 bullets, distilled from spec + plan + smoke checklist)
  - **Why it mattered** (1-2 sentences)
  - **Lessons learned** (any "Megoldott_Problemak" cross-link)
- Final section: "Phase 12 backlog" (deferred work)

### 5.2 Files to delete from `Projekt_Tudasbazis/`

After roadmap is written and visually checked:

```
MolekulaX_Phase1_Plan.md
MolekulaX_Phase1_Spec.md
MolekulaX_Phase2_Spec.md
MolekulaX_Phase3_Spec.md
MolekulaX_Phase4_Plan.md
MolekulaX_Phase4_Spec.md
MolekulaX_Phase5_Plan.md
MolekulaX_Phase5_Spec.md
MolekulaX_Phase6_Plan.md
MolekulaX_Phase6_Spec.md
MolekulaX_Phase6_Smoke_Checklist.md
MolekulaX_Phase7_Plan.md
MolekulaX_Phase7_Spec.md
MolekulaX_Phase7_Smoke_Checklist.md
MolekulaX_Phase8_Plan.md
MolekulaX_Phase8_Spec.md
MolekulaX_Phase9_Plan.md
MolekulaX_Phase9_Spec.md
MolekulaX_Phase10_Plan.md
MolekulaX_Phase10_Spec.md
MolekulaX_Phase10_Smoke_Checklist.md
MolekulaX_Phase11_Spec.md      ← will be created in Task 0 then deleted after Task 5
MolekulaX_Phase11_Plan.md      ← will be created in Task 0 then deleted after Task 5
MolekulaX_Phase11_Smoke_Checklist.md ← will be created during Task 6 then deleted after roadmap update
```

**Files to KEEP in `Projekt_Tudasbazis/`:**
- `MolekulaX_Statusz.md` (session-status, live document)
- `MolekulaX_Roadmap_2026-05.md` (the new consolidated roadmap)

### 5.3 Update the `feedback_phase_specs_obsidian` memory file

The existing memory rule says "Phase spec/plan files always get copied to Projekt_Tudasbazis/". After Phase 11 this rule is **superseded**: only the Statusz + consolidated Roadmap remain. Update the memory file to reflect the new policy: spec/plan files stay in `docs/superpowers/specs/` (repo) only; roadmap absorbs the high-level summary.

### 5.4 No gate

Obsidian-only changes, zero prod-impact. Proceed directly to Task 3.

## 6. Task 3 — AVIF picture chain

### 6.1 Extend `scripts/convert-images.mjs`

Add AVIF output alongside the existing WebP output. Sharp natively supports `.avif()` — same source PNG produces both.

```js
// New constants
const AVIF_QUALITY = 60       // AVIF quality ~60 ≈ WebP quality ~80
const AVIF_EFFORT = 4         // 0-9, 4 is good speed/size balance

// Per-file loop additions
const avifPath = inPath.replace(/\.png$/i, '.avif')
// Idempotent mtime-check on avifPath
// pipeline.clone().avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT }).toFile(avifPath)
```

After the script run, every `public/peptides/<name>.png` has matching `.webp` + `.avif`.

### 6.2 Markup migration: `<picture>` 3-source chain

Find every `<picture>` element in the codebase and add an `<source type="image/avif">` as the first source:

```jsx
<picture>
  <source srcSet={imageBase + '.avif'} type="image/avif" />
  <source srcSet={imageBase + '.webp'} type="image/webp" />
  <img src={imageBase + '.png'} alt={...} />
</picture>
```

Touched components (Phase 8 inventory):
- `src/components/library/LibraryGallery.jsx` (tile images)
- `src/components/library/EntryImage.jsx` (Hero / tile entry image)
- `src/components/library/EntryDetail.jsx` (`Holosphere`)
- `src/components/PeptideEffects.jsx` (effects-tile category images, 8 categories)

### 6.3 Gate: build✓ + 1-URL Lighthouse

After AVIF deploy:
- `npm run build` green
- 1-URL Lighthouse on `https://molekulax.vercel.app/` mobile: **Home Perf ≥ 89** (Phase 8 baseline, no regression)
- Transfer-size check: Home `<img>`+`<source>` total bytes ≤ 450kB (from ~580kB Phase 8 baseline)

If green → proceed to Task 4. If red → either fix-in-place or live-split (tag v0.11a-cleanup-avif, defer SW/locale).

## 7. Task 4 — Service Worker / PWA

### 7.1 Approach

Use **vite-plugin-pwa** (Workbox under the hood, standard in Vite ecosystem). Adds:
- Service worker auto-registration on production builds
- `manifest.webmanifest` generated at build
- Automatic precache of build assets
- Runtime cache strategies (network-first for HTML, cache-first for fonts/images, stale-while-revalidate for JS/CSS)

### 7.2 `vite.config.js` additions

```js
import { VitePWA } from 'vite-plugin-pwa'

VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,svg,png,webp,avif,woff2}'],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|webp|avif)$/,
        handler: 'CacheFirst',
        options: { cacheName: 'images', expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 } },
      },
      {
        urlPattern: /\.woff2$/,
        handler: 'CacheFirst',
        options: { cacheName: 'fonts', expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 } },
      },
    ],
  },
  manifest: {
    name: 'MolekulaX — Farmakológiai edukáció',
    short_name: 'MolekulaX',
    description: 'Peptidek, nootropikumok, teljesítményfokozók és gyógyszerek tudományos alapon',
    theme_color: '#050505',
    background_color: '#050505',
    display: 'standalone',
    start_url: '/',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  },
})
```

### 7.3 Icon assets

Create `public/icon-192.png`, `public/icon-512.png`, `public/icon-maskable.png` from a single source SVG (MolekulaX logo glyph on dark background) using sharp. Maskable variant has 20% safe-zone padding.

### 7.4 No install-prompt UI (deferred)

The browser's native install-prompt is enough for v1; no in-app banner. The manifest + valid icons + HTTPS + service worker satisfy Chrome's installability criteria.

### 7.5 Gate: build✓ + offline-test + cache-invalidation smoke

- `npm run build` green
- After deploy + first visit, take browser offline → Home + 1 entry deep-link still navigable (asset cache hit)
- Bump `package.json` version → next deploy → first visit shows new content within 1 reload (workbox autoUpdate)
- Lighthouse PWA category audit: ≥80 (installable, manifest valid, SW registered)

If green → Task 5. If red → either fix-in-place or live-split (tag v0.11b-avif-sw, defer locale).

## 8. Task 5 — Full locale-split

### 8.1 Current state

- `src/i18n/uiStrings.js` exports `UI = { hu: {...}, en: {...}, pl: {...} }` (722 lines, ~22kB raw)
- Every entry-file `src/data/libraries/<lib>/entries/<id>.js` has HU/EN/PL inline triplets on every field (~5-15 nested triplet groups per entry)
- `LanguageContext.jsx` exposes `lang` state + `t(key)` helper from `uiStrings.UI[lang][key]`
- Default locale: HU (sync mounted)

### 8.2 Target state — true full split (UI + entries)

**UI side:**
- Split `uiStrings.js` into `uiStrings-hu.js`, `uiStrings-en.js`, `uiStrings-pl.js` (one export per file: `export const UI_HU = {...}` etc., flat key-value)
- `LanguageContext.jsx` becomes async-aware: on mount sync-loads default HU; on `setLang('en' | 'pl')` dynamic-imports the matching file, swaps state.

**Entry-data side (full split):**
- Each entry-file `<id>.js` is **split into 3 locale-files** `<id>-hu.js`, `<id>-en.js`, `<id>-pl.js` via an extended `scripts/decompose-library.mjs`. The current entry file's HU/EN/PL inline triplets are extracted into 3 parallel exports.
- Each `entries/index.js` (per library) exports a **lang-aware loader**: `loadEntry(id, lang) => Promise<Entry>` that dynamic-imports `<id>-<lang>.js`.
- `adaptLibraryEntry.js` becomes async or takes a pre-loaded entry; the function signature changes from `adaptLibraryEntry(entry, library)` to `adaptLibraryEntry(entry, library)` where `entry` is already the lang-flat shape (no triplets).
- `EntryDetailRoute.jsx` is updated to await `loadEntry(id, lang)` on mount and on `lang` change; shows a 1-second `EntryLoading` skeleton if dynamic-import is slow.
- `LibraryGallery.jsx` consumes the same loader for tile metadata (`shortDesc`, `name`) — but tile metadata is small enough to live in a single `entries-meta-<lang>.js` (one per locale) for fast gallery-rendering.

**Total emitted chunks for entries:** 22 entries × 3 locales = **66 entry-chunks** + 3 entries-meta chunks (one per locale) = 69 lazy chunks for entry data.

**Bundle size expectations:**
- `uiStrings-<lang>.js`: ~7-8kB raw (was 22kB combined)
- `<entry>-<lang>.js`: ~2-8kB raw each (was 5-32kB combined per-entry chunk)
- Main bundle parse time drops further; default-locale (HU) user only downloads HU strings.

**High regression-blast acknowledgement:** This task touches `adaptLibraryEntry.js`, `EntryDetailRoute.jsx`, `LibraryGallery.jsx`, `LibraryContext.jsx`, every per-entry file, and the build's `decompose-library.mjs` script. The gate in §8.5 is the protection: if anything goes red, **live-split to Phase 11d (defer locale-split)** is the documented escape hatch.

### 8.3 LanguageContext refactor

```jsx
// Before:
import { UI } from './uiStrings'
const t = (key) => UI[lang][key] || key

// After:
const [uiMap, setUiMap] = useState(() => UI_HU) // synchronous default
const t = (key) => uiMap[key] || key

useEffect(() => {
  if (lang === 'hu') { setUiMap(UI_HU); return }
  const cached = sessionStorage.getItem(`molekulax:ui:${lang}`)
  if (cached) { setUiMap(JSON.parse(cached)); return }
  import(`./uiStrings-${lang}.js`).then(mod => {
    const m = mod[`UI_${lang.toUpperCase()}`]
    sessionStorage.setItem(`molekulax:ui:${lang}`, JSON.stringify(m))
    setUiMap(m)
  })
}, [lang])
```

### 8.4 LanguageSwitcher loading UX

Add a 200ms grace-period: if dynamic-import resolves within 200ms, no spinner. If slower, show a 1px progress-line under the language chip.

### 8.5 Gate: build✓ + 3-URL Lighthouse + language-switch UX test

- `npm run build` green
- 3-URL Lighthouse mobile sweep (Home + 1 entry + Modafinil): mind ≥85 Perf, NO regression vs Phase 10 baseline
- Manual UX test: switch HU → EN → PL → HU on Home + 1 entry; each switch < 500ms on simulated 4G; no FOUC (flash of HU-text while EN loads)

If green → Task 6. If red → live-split (tag v0.11c-avif-sw, defer locale-split to Phase 11d).

## 9. Task 6 — Full smoke + push + tag

### 9.1 Build + push

- `npm run build` green
- `git push origin master`
- `git tag -a v0.11-mega-stable -m "<deliverables>"`
- `git push origin v0.11-mega-stable`

### 9.2 Live deploy smoke

After Vercel auto-deploy completes:
- 10-URL Lighthouse mobile sweep (Home + 9 representative entries)
- Targets: Perf ≥85, A11y ≥95, BP=100, SEO ≥91 (matching Phase 10 baseline)
- PWA category: ≥80 (Service Worker installable)

### 9.3 Update `MolekulaX_Roadmap_2026-05.md`

Add Phase 11 section with shipped deliverables, lessons learned, commit-range. Then delete Phase 11 Spec/Plan/Smoke files per Section 5.2.

## 10. Acceptance criteria summary

| Area | Target | Verification |
|---|---|---|
| AVIF | 3-source `<picture>` chain in all image-rendering components | grep `type="image/avif"` count = picture-count |
| AVIF transfer | Home `<img>`+`<source>` ≤ 450 kB | Lighthouse network-payload |
| SW/PWA | Installable, offline navigable, manifest valid | Lighthouse PWA category ≥80 |
| Locale-split | 3 separate UI bundles, async load on switch | `dist/assets/uiStrings-*.js` 3 files |
| Brain-cleanup | Only 2 MolekulaX files in `Projekt_Tudasbazis/` | `ls Projekt_Tudasbazis/MolekulaX_*` returns Statusz + Roadmap only |
| Site-cleanup | `assets/`, `Tanulmanyok.jsx`, `WadaBox.jsx`, `lh-*.json` all gone | `ls` checks |
| Live LH 10-URL | Mind ≥85 Perf, ≥95 A11y, 100 BP, ≥91 SEO | `.lighthouse-phase11-final/` sweep |
| Memory updated | `feedback_phase_specs_obsidian` reflects new "Statusz+Roadmap-only" policy | grep memory file |

## 11. Phase 12 backlog (deferred)

- molekulax.com custom domain DNS / Vercel config
- Full entry-data locale-split (architectural rewrite, 22 × 3 = 66 chunk)
- Install-prompt in-app banner UX
- SARMs library
- SSR / Next.js migration
- AVIF quality fine-tuning per asset class (cover vs. tile vs. icon)
