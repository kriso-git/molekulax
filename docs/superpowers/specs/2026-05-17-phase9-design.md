# Phase 9 — Per-entry Data Split & EntryDetail Sub-chunk Lazy Split

**Date:** 2026-05-17
**Status:** Draft for review
**Predecessor:** Phase 8 perf-pass (`v0.8-perf-pass-stable`, commit `fe26ba2`)
**Goal:** Lighthouse mobile Performance ≥ 95 on every EntryDetail page (validated against an 8-entry representative sample).

---

## 1. Problem Statement

After Phase 8, Home mobile Lighthouse Performance reached 89.2 avg (top-50% run 93) and Metformin entry mobile Performance reached 93 (TBT 1750ms). The remaining bottleneck on EntryDetail deep-link landings is the **library-data lazy chunk** loaded on `#entry/<lib>/<id>` route activation.

Current chunk sizes (gzip):
- `pharmaceutical` library chunk: **194 kB gzip** (all 12+ pharmaceutical entries bundled together)
- `peptides`: 105 kB gzip
- `performance`: 70 kB gzip
- `nootropics`: 70 kB gzip

A Metformin deep-link currently downloads and parses the **entire pharmaceutical library** even though only one entry is needed. The `EntryDetail.jsx` component (2165 lines, 85 kB raw / ~25 kB gzip) parses fully before any UI renders, including 6 below-the-fold sub-components that the user may never scroll to.

These two factors compound: the longest-content entries (Metformin in pharmaceutical, Retatrutide in peptides, etc.) consistently land below the 95-Perf threshold on mobile Slow-4G + 4× CPU throttle.

---

## 2. Goal & Non-goals

### Goal
**Lighthouse mobile Performance ≥ 95** on every entry in an 8-entry representative sample-set (2 entries per library, picked as the 1st and 2nd longest content per library), measured under Slow-4G + 4× CPU throttle, 3-run median.

### Non-goals
- AVIF image format (Phase 9 candidate scope #2, deferred)
- Service Worker / PWA cache (deferred)
- i18n locale-split (deferred — low ROI)
- Dependabot vulnerability fix (separate small task, may be bundled at Phase 9 start)
- Visual / UX changes — purely architectural

---

## 3. Architecture

Two independent optimization layers, combined in one phase:

### Layer 1 — Per-entry data split
Each library's monolithic `data.js` is decomposed:

- `src/data/libraries/<lib>/index.js` exports `LIBRARY_ENTRY_META[]` — an array of meta-only objects (one per entry) containing exactly the fields needed for: gallery tiles, library switcher, cube faces, and category grouping.
- `src/data/libraries/<lib>/entries/<id>.js` (one file per entry) exports the full entry object as the default export.
- `src/data/libraries/index.js` adds `loadEntry(libraryId, entryId): Promise<Entry>` next to existing `loadLibrary(id)`.

### Layer 2 — EntryDetail sub-chunk lazy split
The 2165-line `EntryDetail.jsx` component is split into two chunks:

- **Above-the-fold (stays in `EntryDetail.jsx`):** Hero, Holosphere, Bento (whatIs / keyFacts / benefits), Constellation, DosingPanel, QualityGrid, ReconstitutePath, ExpectationsTimeline. Plus the shared visual primitives (GlassCard, Eyebrow, HoloRing, ParticleField, LabTerminal, useTilt, useMagnet, TabPills).
- **Below-the-fold (new `EntryDetailBelowFold.jsx` lazy chunk):** StudiesPanel, StudyCard, FaqConsole, IndicationsAccordion, SafetyTriptych, InteractionsOrbit, RelatedCard. Loaded via `React.lazy` + `Suspense`, triggered by IntersectionObserver firing 200px before the section enters viewport. Fallback prefetch via `requestIdleCallback` after 1s of inactivity, so scroll never blocks on a network round-trip.

---

## 4. File-Structure Changes

### New files (~84)
```
src/data/libraries/peptides/index.js          — meta-only export
src/data/libraries/peptides/entries/<id>.js   — ~15 files (CORE_PEPTIDES + EXTRA)
src/data/libraries/nootropics/index.js
src/data/libraries/nootropics/entries/<id>.js — ~44 files (10 CORE + 34 EXTRA)
src/data/libraries/performance/index.js
src/data/libraries/performance/entries/<id>.js — 17 files (10 CORE + 7 EXTRA)
src/data/libraries/pharmaceutical/index.js
src/data/libraries/pharmaceutical/entries/<id>.js — ~12 files
src/components/library/EntryDetailBelowFold.jsx
```

### Modified
- `src/data/libraries/<lib>/data.js` — **deleted**, content decomposed into per-entry files
- `src/data/libraries/index.js` — `LIBRARY_META` stays, `loadLibrary(id)` stays (now returns meta-array + `loadEntry` helper), new `loadEntry(libraryId, entryId)` export
- `src/context/LibraryContext.jsx` — adds `entryCache: Map<string, Entry>` and `loadEntryIntoCache(lib, id)` method
- `src/components/library/EntryDetail.jsx` — drops 6 sub-components (~700 lines extracted to BelowFold), stays at ~1465 lines
- `src/components/library/EntryDetailRoute.jsx` — async `loadEntry` effect (chained with existing `loadLibrary`); loading skeleton until entry resolves
- `src/components/LibraryGallery.jsx` — consumes `LIBRARY_ENTRY_META[]` instead of `library.entries`
- `src/components/library/cube-nav/CubeFace.jsx` — consumes meta for tile rendering, no full-data dependency

### Unchanged
- Hash URL scheme: `#entry/<lib>/<id>` — backward compatible
- i18n keys (`entry.*`, `library.*`)
- All visual / theme / animation behavior
- LibraryCube, Calculator, TelegramSection, Faq, Disclaimer, Footer

---

## 5. Data Flow — Metformin Deep-link

```
1. Initial HTML + main + vendor + CSS + Quicksand-400/600 preload
   → ~85 kB gzip transferred

2. App mounts → EntryDetailRoute reads hash → setEntryLoading(true)

3. Parallel async:
   a. loadLibrary('pharmaceutical') → pharmaceutical/index.js (~10 kB gzip meta-only)
   b. loadEntry('pharmaceutical', 'metformin')
      → pharmaceutical/entries/metformin.js (~35 kB gzip)

4. EntryDetail.jsx lazy chunk fetch (~25 kB gzip)

5. Above-the-fold render: Hero / Bento / Constellation / Dosing / Quality
   → LCP fires on Hero h1 ("Metformin")

6. IntersectionObserver (or requestIdleCallback at 1s) → EntryDetailBelowFold.jsx fetch (~30 kB gzip)

7. Below-fold sections render: Studies / FAQ / Indications / Safety / Interactions / Related
```

**Estimated total transfer to LCP:** ~85 + 10 + 35 + 25 = **~155 kB gzip** (vs current ~85 + 194 + 25 = ~304 kB).
**Estimated total transfer when scrolled to bottom:** ~185 kB gzip (vs current ~304 kB).
**Below-fold parse + render shifted off the main thread blocking window** → TBT drop expected from 1750ms → < 500ms target.

---

## 6. Edge Cases & Error Handling

| Scenario | Behavior |
|---|---|
| Loading state | `EntryDetailRoute` renders skeleton (Hero shape + Holosphere spinner, accent-coloured per library) until `loadEntry` resolves. |
| Network failure on `loadEntry` | Error view with "Kapcsolódási hiba" / "Connection error" / "Błąd połączenia" (HU/EN/PL), retry-button calls `loadEntry` again. |
| Invalid entry-id deep-link | `loadEntry` rejects with `EntryNotFoundError` → "Az entry nem található" view + "Vissza a könyvtárhoz" CTA that resets the hash to `#library`. |
| Below-fold prefetch jank | If user has not scrolled within 1s of LCP, `requestIdleCallback` schedules the BelowFold chunk fetch in the background so the chunk is already cached when IntersectionObserver fires. |
| Library-switch mid-load | Entry-cache is keyed by `<lib>:<id>`, persists across library switches on the cube; returning to a previously-visited entry is instant. |
| Repeated deep-link to same entry | `entryCache.has(key)` short-circuits — no re-fetch. |
| `loadEntry` race on rapid hash-change | The latest hash wins; older promises resolve into cache but are not rendered (current-hash check in setState). |

---

## 7. Acceptance Criteria

| ID | Criterion | Target |
|---|---|---|
| A1 | Build clean | 0 errors, build time ≤ 12s |
| A2 | Main entry chunk size | ≤ 100 kB gzip (currently 75) |
| A3 | Vendor chunk size | ≤ 55 kB gzip (unchanged from Phase 8) |
| A4 | Per-entry chunk size | ≤ 50 kB gzip for the longest entry across ALL 4 libraries (measured by character-count of string fields in the entry object) |
| A5 | Library meta chunk size | ≤ 15 kB gzip per library |
| A6 | **Mobile Lighthouse Perf ≥ 95** on EVERY entry in sample-set (Slow-4G + 4× CPU, 3-run median) | All 8 entries pass |
| A7 | Home mobile Perf no regression | ≥ 87 (Phase 8 was 89.2 avg) |
| A8 | A11y mobile = 100 | Home + all sample entries |
| A9 | TBT < 500ms | All 8 sample entries on Slow-4G + 4× CPU |
| A10 | Total build-output chunks | < 120 (~84 new + current) |
| A11 | Console clean on entry-page load | 0 React errors / warnings; pre-existing Rollup "chunk size" warning at build-time is permitted; Vite HMR notices are permitted in dev |
| A12 | Hash routing behavior unchanged | All existing deep-links work |

### Sample-set (8 entries)

| Library | Entry 1 (worst-case) | Entry 2 (control) |
|---|---|---|
| pharmaceutical | Metformin | Atorvastatin |
| peptides | Retatrutide | Tirzepatide |
| performance | MK-677 | Testosterone-info |
| nootropics | Phenibut | Noopept |

Worst-case = entry with the highest character-count across all string fields in its data object; control = second-highest in the same library, used to confirm the result is not entry-specific noise. The sample list above is the **provisional** pick based on the current content; if a different entry within a library proves to be the heaviest after measurement, the heavier one replaces the sample-slot at validation time.

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| ~84 new chunks may overwhelm HTTP/2 multiplexing on cold cache | Vercel CDN is HTTP/2; chunks are small enough that this is well within typical browser concurrent-fetch limits (~6 parallel). LCP path needs only 3 chunks. |
| Splitting `data.js` may introduce content-drift between meta and entry files | Build-time validator script `scripts/validate-library-meta.mjs` that asserts every entry-file's exported `id` matches its corresponding meta-array entry and that no meta-only fields conflict with entry-data fields. Run as part of `npm run build` via a Vite plugin or pre-build npm-script. |
| EntryDetail BelowFold split may break shared-state with above-the-fold (e.g. shared accent, tier color) | All shared values passed as props from EntryDetail parent; BelowFold component takes a single `detail` prop object containing everything it needs. No context sharing across the lazy boundary. |
| Per-entry chunk file overhead (Rollup chunk preamble ~200 bytes each) | Acceptable: 84 × 200 = ~17 kB additional total gzip, but per-load only the requested entry's preamble counts (~200 bytes). Net win is enormous (-150 kB per deep-link). |
| Sample-set 8 entries may pass while non-sampled entries fail | If the worst-case (#1 in each library) passes 95, all shorter entries in the same library WILL pass (smaller payload, smaller render tree). Acceptance is therefore mathematically defensible from the sample. |
| Meta-field selection misses a field needed by gallery (regression) | Visual smoke-check against the live `master` build after the refactor: each library gallery renders identically (tiles, accents, badges, WADA chips, tier indicators). |

---

## 9. Out of Scope (Phase 9)

- AVIF format `<picture>` 3-source chain — deferred to a later phase
- Service Worker / PWA cache — deferred
- i18n locale-split (HU/EN/PL chunks) — low ROI, deferred
- Any visual or UX change
- New entries or content updates
- Calculator, TelegramSection, FAQ home, Footer, Disclaimer
- Cross-library entry references (e.g., Semax in both peptides and nootropics) — these stay duplicated in each library's entries folder, no de-duplication attempted

---

## 10. Open Questions

None at design time. The implementation plan (separate document, written by the `superpowers:writing-plans` skill) will decompose this spec into ordered tasks.
