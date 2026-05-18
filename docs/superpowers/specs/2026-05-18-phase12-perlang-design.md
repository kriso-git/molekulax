# Phase 12 — Full entries-data locale-split (per-lang body chunks)

**Date:** 2026-05-18
**Status:** Spec — pending user review → writing-plans
**Source:** Phase 11 deferred Task 5.2-5.5 (live-split fallback rule §8.5 applied during Phase 11 mega-ship)
**Target tag:** `v0.12-perlang-stable`

---

## 1. Goal & Success Metric

**Goal:** Split every entry's body (the full Entry object minus meta fields) into per-language chunks, so a Hungarian-only visitor only downloads HU body bytes — never EN or PL — when opening an entry-detail page.

**Primary success metric: Initial-load bundle-size reduction per entry-load.** Expected saving ~60–70% per opened entry (Retatrutide example: ~22kB gzip triplet → ~7kB gzip HU-only).

**Secondary metric (gate-condition only, not optimization target):** Lighthouse acceptance preserved at Phase 11 levels — ≥85 Perf, ≥95 A11y, ≥96 BP, 100 SEO on all 10 sweep URLs (`molekulax.vercel.app`).

**Non-goals:**
- Splitting library-level i18n (effects, FAQ, labels) — kept triplet, sync-loaded with the library. Small payload, high coupling to library shape.
- Splitting `LIBRARY_ENTRY_META` (tile data — name, shortDesc, image, tier, accent, wadaStatus, prescriptionStatus, atcCode) — stays sync triplet so LibraryGallery / Cube / Switcher render instantly with zero async hops.
- TBT optimization or perf work on top of the body-split. If saving lands and LH stays green, no further perf-pass in Phase 12.
- Server-side rendering or SSR transition. Static SPA stays.

---

## 2. Architecture Overview

```
peptides/index.js          (sync, exports LIBRARY_ENTRY_META triplet + library-level fields)
   └─→ LibraryContext ──→ LibraryGallery (tile-ok), CubeFace, EffectsSection — all unchanged

peptides/entries/en/retatrutide.js     (flat-EN Entry object, default export)
peptides/entries/hu/retatrutide.js     (flat-HU)
peptides/entries/pl/retatrutide.js     (flat-PL)
   └─→ loadEntry(id, lang) — Vite template-literal-import emits 3 chunks per entry
       └─→ adaptLibraryEntry(flatEntry, library, lang) — pre-localizes entry-level fields
           └─→ EntryDetail — entry-level tr() calls REMOVED, library-level tr() KEPT
```

**Five architectural pillars:**

1. **Meta stays sync triplet.** `LIBRARY_ENTRY_META` (name, shortDesc, image, tier, accentColor, tagColor, wadaStatus, prescriptionStatus, atcCode) is unchanged. Tiles and Cube faces render instantly.
2. **Body lang-flat chunks.** Every entry × 3 langs = 3N body chunks per library. Pilot peptides: 60 × 3 = **180 chunks**. Full rollout across 4 libraries: 165 entries × 3 = **495 chunks** (peptides 60, nootropics 48, performance 17, pharmaceutical 40).
3. **`loadEntry(id, lang)` signature.** Replaces Phase 11's `loadEntry(id)`. Internal Vite template-literal: `import(\`./entries/${lang}/${id}.js\`)` — Vite 5 statically infers the glob pattern from the static `./entries/` prefix and emits one chunk per match.
4. **Adapter pre-localizes entry-level.** `adaptLibraryEntry(entry, library, lang)` takes flat-shape input and returns flat-shape output for entry-level fields. EntryDetail's entry-level `tr()` calls are removed. Library-level fields (effects, faq, labels — still triplet) keep their `tr()` calls.
5. **Async loading-skeleton on lang switch.** Warm lang-switch UX: old entry stays mounted with `opacity-50` + center spinner overlay while the new-lang chunk loads (50–800ms depending on cache state). Race-cancel via cleanup-flag in `useEffect`.

---

## 3. File Layout — Option C (lang-folder)

```
src/data/libraries/peptides/
├── index.js                       # sync: LIBRARY_ENTRY_META, loadEntry(id, lang)
├── categories.js                  # unchanged
├── effects.js                     # unchanged (library-level, triplet)
├── researchLevel.js               # unchanged
└── entries/
    ├── hu/
    │   ├── retatrutide.js         # flat-HU default export
    │   ├── bpc-157.js
    │   └── ... (60 files for peptides)
    ├── en/
    │   ├── retatrutide.js         # flat-EN
    │   └── ... (60 files)
    └── pl/
        ├── retatrutide.js         # flat-PL
        └── ... (60 files)
```

**Rationale (vs. Option A flat `<id>.<lang>.js` and Option B folder-per-entry):**
- Content-team can dump or edit a single language in isolation (open one folder).
- Translation tooling friendlier (one folder = one locale).
- Trade-off accepted: cross-lang diff for a single entry spans 3 folders. Mitigated by IDE's "Open files containing X" and the existing decompose-script being the authoring source-of-truth (entries are auto-generated, not hand-edited per-lang).

---

## 4. Adapter & EntryDetail Data-Flow

### 4.1 Adapter changes (`src/components/library/adaptLibraryEntry.js`)

- **Signature:** `adaptLibraryEntry(entry, library)` → `adaptLibraryEntry(entry, library, lang)`.
- **`trAny(value)` helper replaced by `flat(value, lang)`:** if `value` is a flat string, return as-is; if `value` is a triplet `{hu, en, pl}` (library-level field that bled into adapter scope), return `value[lang]`. Convergent helper that handles both inputs.
- **Allowlist audit:** all ~30 entry-level passthrough fields (`description`, `mechanism`, `dosageInfo`, `keyInfo`, `sideEffects`, `studies`, `faq`, `quickStart`, `effectsList`, `interactionsWith`, `cycle`, `bloodwork`, `expectations`, `quality`, etc.) verified for flat-shape compatibility. Nested structs that previously carried triplets (e.g., `keyInfo: [{label: {hu,en,pl}, value: {hu,en,pl}}]`) become flat after decompose-script localization (`keyInfo: [{label: "Half-life", value: "..."}]`), so the adapter's destructuring continues to work unchanged once flat-input is in.
- **Allowlist-trap mitigation ([[feedback_adapter_passthrough]]):** every entry-level field added since Phase 10 audited. If a field is missing from the explicit allowlist, EntryDetail receives `undefined` and the section silently skips. Step 2 commit includes a grep-based audit log in the commit message.

### 4.2 EntryDetail changes (`src/components/library/EntryDetail.jsx`)

EntryDetail's `tr()` calls partition into two groups:

| Group | Source | Phase 12 action |
|---|---|---|
| **Entry-level `tr()`** | `tr(adaptedEntry.X)` for any field derived from the entry | Removed — adapter pre-localizes |
| **Library-level `tr()`** | `tr(library.faq[i].q)`, `tr(library.effects[j].label)`, `tr(library.labels.relatedTitle)` | KEPT — library-level stays triplet |
| **shared/researchLevel.js triplet labels** | `tr(getLevelMeta(tier).description)` etc. | KEPT — small (~6 strings), library-level scope |

Concrete grep target: in EntryDetail.jsx, identify every `tr(` call site, classify by argument source (does the value path start with `adaptedEntry.` / `entry.` → entry-level → remove; or `library.` / `getLevelMeta()` → library-level → keep).

### 4.3 Library-level fields (NOT split)

Stay triplet, sync-loaded with the library `index.js`:
- `library.effects[]` (EffectsSection)
- `library.faq` (FAQ component, Phase 6 pharmaceutical)
- `library.labels` (relatedTitle, FAQ heading, etc., per Phase 10 dynamic-label work)
- `library.effectsTitle`, `library.effectsSubtitle`
- `shared/researchLevel.js` `RESEARCH_LEVELS` array

EntryDetail's existing `tr()` calls on these continue to work — `useLang()` provides `lang`, `tr()` reads `triplet[lang]`.

---

## 5. Loading Flow & Lang-Switch Skeleton

### 5.1 `EntryDetailRoute.jsx` state machine

```js
const { lang } = useLang()
const [entry, setEntry] = useState(null)
const [loading, setLoading] = useState(false)

useEffect(() => {
  let cancelled = false
  ;(async () => {
    setLoading(true)
    try {
      const fresh = await loadEntry(parsed.id, lang)
      if (!cancelled) {
        setEntry(fresh)
        setLoading(false)
      }
    } catch (err) {
      if (!cancelled) {
        setLoading(false)
        // entry stays null → fall back to "entry not found" path
      }
    }
  })()
  return () => { cancelled = true }
}, [hash, lang])
```

Race-cancel via `cancelled` flag prevents fast HU→EN→HU clicks from resolving in arrival order rather than user-intent order.

### 5.2 Skeleton UX

**Cold load (`entry === null && loading`):** full skeleton screen — Hero placeholder + 3 row shimmer. Reuses existing skeleton at `src/components/library/entry-detail/skeleton.jsx` (already used in EntryDetailRoute today for library-loading state).

**Warm lang-switch (`entry !== null && loading`):** the rendered EntryDetail stays mounted, wrapped in:
```jsx
<div className={loading ? 'opacity-50 pointer-events-none' : ''}>
  {entry && <EntryDetail entry={adaptedEntry} ... />}
</div>
{loading && entry && <CenterSpinnerOverlay />}
```
Old-lang content remains visible during the swap — UX feels like a soft refresh, not a blanking screen.

### 5.3 In-memory cache

```js
const entryCache = new Map()  // key: `${libId}/${id}/${lang}`, value: EntryObject

export async function loadEntry(id, lang) {  // libId closed over by index.js
  const key = `${LIBRARY_ID}/${id}/${lang}`
  if (entryCache.has(key)) return entryCache.get(key)
  const mod = await import(`./entries/${lang}/${id}.js`)
  entryCache.set(key, mod.default)
  return mod.default
}
```

Cache is session-lifetime, no eviction. Worst-case footprint: 165 entries × 3 langs = 495 cached objects (only those actually opened by the user — realistic upper bound ~30–50 per session). Estimated <5MB raw at realistic usage.

### 5.4 No SW-precache for entries

`vite-plugin-pwa` workbox `globPatterns` audit at Step 5: per-lang entry chunks excluded from precache (would 3× the precache size). Runtime CacheFirst pattern (Phase 11 already in place for JS) handles repeat visits.

### 5.5 Consumers unchanged

- **LibraryGallery.jsx (633 lines):** renders from sync `LIBRARY_ENTRY_META` (triplet `tr()`) — 0 changes.
- **LibraryContext.jsx (86 lines):** no lang-loading state added; library load remains lang-agnostic — 0 changes.
- **CubeFace.jsx (121 lines):** per-face library scope only — 0 changes.
- **LanguageContext.jsx (99 lines):** Phase 11 async-aware structure unchanged; `lang` value propagates to EntryDetailRoute via context — 0 changes.

**Only `EntryDetailRoute.jsx` is touched for lang-reactivity.** Minimal blast radius.

---

## 6. Build Pipeline — `decompose-library.mjs --per-lang`

### 6.1 Script extension

New flag: `node scripts/decompose-library.mjs <libId> --per-lang`.

**Behavior:**
1. **Input detection:** reads current state — either `entries/<id>.js` triplet files (Phase 11 state) or legacy monolith `data.js`. Errors if both present.
2. **Recursive `localize(value, lang)` helper:**
   - Primitives (string/number/boolean/null) → pass through.
   - Arrays → map recursive.
   - Plain objects with EXACTLY the keys `hu`, `en`, `pl` (3-key triplet shape) → return `value[lang]`. Empty-string fallback if missing.
   - Other plain objects → walk keys, recurse on each value.
3. **Emit:** for each `lang ∈ [hu, en, pl]`, write `entries/<lang>/<id>.js` with `export default <flat-object>`. Stable JSON formatting, 2-space indent.
4. **Old-file handling:** triplet `entries/<id>.js` files moved to `entries/.bak/<id>.js` (idempotent across re-runs). `--no-backup` flag deletes outright. Default: backup.
5. **`<lib>/index.js` rewrite:** updates the auto-generated header timestamp + replaces `loadEntry(id)` body with `import(\`./entries/${lang}/${id}.js\`)`. Existing exports (`LIBRARY_ENTRY_META`, `<libId>Library`, convenience re-exports) preserved verbatim.

### 6.2 Triplet-detection heuristic

A node is treated as a triplet if and only if `Object.keys(node).sort().join(',') === 'en,hu,pl'`. Edge cases:
- An object that legitimately has all three keys for a non-i18n reason (extremely unlikely in current schema, but auditable) — risk accepted, audit at Step 2.
- An i18n field with only 1–2 langs filled — current `trAny()` already tolerates missing-lang fallback; the new `localize` helper uses `value[lang] ?? ''`.

### 6.3 Verification per library after script run

```bash
npm run build
ls dist/assets/retatrutide-*.js                # expect 3 distinct hashes per entry
gzip -c dist/assets/retatrutide-en-*.js | wc -c  # ~7-9kB
diff <(node -e "import('./src/data/libraries/peptides/entries/en/retatrutide.js').then(m=>console.log(JSON.stringify(m.default,null,2)))") \
     <(git show HEAD~1:src/data/libraries/peptides/entries/retatrutide.js | node -e "...localize EN...")
# Round-trip: localizing the old triplet → flat should equal the new flat file
```

---

## 7. Rollout Plan (Risk-Ordered)

Five logical steps, each its own commit. Live-split fallback rule §8.5 applies if any library hits a regression-blast wall.

| Step | Task | Commit msg | Risk | Gate |
|---|---|---|---|---|
| **1** | `decompose-library.mjs --per-lang` extension + `localize()` helper. NOT executed against any library yet. Unit-test the helper standalone (Node script with sample triplet input). | `phase12(script): decompose-library.mjs --per-lang flag + localize helper` | Low | Helper round-trip-test passes for a synthetic input |
| **2** | Adapter `adaptLibraryEntry(entry, library, lang)` signature + flat-input handling + 30+ field allowlist audit. **Adapter still receives triplet entries** at this step (peptides not decomposed yet). Adapter accepts BOTH flat AND triplet input via type-check (`typeof value === 'string'` vs object). | `phase12(adapter): flat-input compatible + lang param + allowlist audit` | Medium | Build green, all entries still render correctly with triplet input |
| **3** | `EntryDetailRoute` `lang`-dependency `useEffect` + cancel-flag + skeleton/overlay UX. Adapter signature already updated → just pass `lang` through. | `phase12(route): lang-reactive entry loading + warm-switch skeleton` | Medium | Manual lang-switch on a Phase 11 entry works; overlay shown; no stale-state |
| **4a** | **Pilot: peptides library.** Run `decompose-library.mjs peptides --per-lang`. Verify 180 chunks emitted (60 × 3). Build green. Local LH on Retatrutide + BPC-157. | `phase12(peptides): per-lang entries split (pilot)` | High | LH ≥85 Perf, network-tab shows only HU chunk loaded for HU-user |
| **4b** | Nootropics (48 entries × 3 = 144 chunks). | `phase12(nootropics): per-lang entries split` | Medium-low | Same as 4a (smoke URL: Modafinil + Piracetam) |
| **4c** | Performance (17 × 3 = 51 chunks). | `phase12(performance): per-lang entries split` | Medium-low | Same (smoke: Testosterone-info + MK-677) |
| **4d** | Pharmaceutical (40 × 3 = 120 chunks). | `phase12(pharmaceutical): per-lang entries split` | Medium-low | Same (smoke: Metformin + Sertralin) |
| **5** | Drop entry-level `tr()` from EntryDetail (now redundant since adapter pre-localizes). Workbox `globPatterns` audit — per-lang chunks NOT precached. Drop the dual-shape compatibility from the adapter (Step 2 leftover). | `phase12(cleanup): drop entry-level tr(), audit precache, drop triplet-input compat` | Medium | Live 10-URL LH sweep ≥85 Perf, 0 entry-level `tr(` remaining grep-able in EntryDetail.jsx |

### 7.1 Per-step gate-conditions

- Build green after every step (`npm run build` zero warnings, vite-plugin-pwa precache count within budget).
- Per-step manual smoke: navigate to one representative entry, verify render parity with HEAD before step.
- **Live Lighthouse sweep only after Step 5** on `molekulax.vercel.app`, 10-URL Phase 11 baseline preserved (≥85 Perf, ≥95 A11y, ≥96 BP, 100 SEO each).
- **Per-entry-load saving verify (Step 5):** DevTools Network tab — open Retatrutide as HU user → assert only `retatrutide-hu-*.js` chunk in transfer list, no `-en-` or `-pl-`.

### 7.2 Live-split fallback rule (§8.5 reuse)

If during Step 4b–4d a library hits a regression-blast or context-budget wall (e.g., Pharmaceutical library has unforeseen non-triplet i18n shape), the remaining library/libraries deferred to a Phase 12.1 patch. Phase 12 ships with the libraries that landed cleanly + pilot peptides as the architectural proof.

### 7.3 Tag

`v0.12-perlang-stable` on master after Step 5 live-LH gate passes. Annotated tag message includes per-library chunk counts, savings table (before/after gzip per representative entry × 3 langs), and Phase 13 backlog pointer.

---

## 8. Risks & Mitigations

| Risk | Probability | Mitigation |
|---|---|---|
| Vite 5 template-literal `${lang}/${id}` glob fails (2-variable interpolation) | Low | Pilot Step 4a verifies. If fail: switch Layout C → Layout A (`entries/${id}-${lang}.js`) which uses a single-variable interpolation pattern proven in Phase 9. |
| Adapter passthrough trap on missed field | Medium | Step 2 explicit grep-audit over EntryDetail's prop access on `adaptedEntry.*`. Audit log included in commit message. |
| Race-cancel bug → stale entry rendered | Medium | Test plan: HU→EN→HU rapid clicks, verify final entry matches lang at settle. Manual smoke in Step 3. |
| Workbox precache budget exceeded by 495 small chunks | Medium | Phase 11 precounted 229 entries / 3.6MB. Adding 495 chunks × avg 5kB ≈ 2.5MB more would put precache near 6MB — over Workbox default 5MB cap. **Mitigation: per-lang entry chunks EXCLUDED from `globPatterns` from the start of Step 4a.** Runtime CacheFirst pattern handles them on first hit. |
| Lighthouse single-shot variance flag (Phase 11 lesson [[Lighthouse_Single_Measurement_Variance]]) | Medium | Step 5 live LH sweep — if any URL falls below threshold, run confirm-sweep before flagging regression. |
| Triplet-detection false positive (3-key non-i18n object) | Very low | Audit current schema in Step 1 unit-test development; flag any `{hu, en, pl}` field that isn't actually i18n. Currently none known. |
| Old `.bak/` clutter | Low | Step 5 cleanup removes `entries/.bak/` after Phase 12 lands and rollback window closes (1 week post-tag). |

---

## 9. Open Questions / Phase 13 Backlog

- **Library-level i18n split** — `library.effects`, `library.faq`, `library.labels` still triplet; small payload (~5–10kB triplet per library) but technically the same pattern could apply. Deferred to Phase 13 if measurement shows it's worth the additional complexity.
- **Prefetch on hover** — `<a onMouseEnter>` triggers `loadEntry(id, lang)` early. Would mask cold-load latency on intent-clear interactions. Phase 13 candidate, NOT in Phase 12 scope.
- **`useLang()` `tr()` deprecation path** — once library-level i18n is also split, `tr()` becomes unused. Today Phase 12 KEEPS `tr()` for library-level. Phase 13.
- **3-run Lighthouse median GH Action** — separately tracked Phase 11 backlog item, runs orthogonally.

---

## 10. Acceptance Criteria

A Phase 12 ship is acceptable iff ALL of:

1. ✅ `decompose-library.mjs --per-lang` runs successfully on all 4 libraries.
2. ✅ Each library emits `<entries/{hu,en,pl}/<id>.js>` files; old triplet `entries/<id>.js` moved to `.bak/` and then deleted in Step 5.
3. ✅ Build green throughout — zero vite warnings, no chunk-size regressions on main bundle.
4. ✅ Network-tab verify: HU user opening any entry loads ONLY the HU body chunk for that entry (no EN/PL).
5. ✅ Manual smoke: HU→EN→PL→HU lang switch sequence on an open entry renders correctly with no race-condition stale state. Overlay/spinner visible during each switch.
6. ✅ Live Lighthouse 10-URL sweep on `molekulax.vercel.app`: ≥85 Perf, ≥95 A11y, ≥96 BP, 100 SEO on each.
7. ✅ Per-entry-load saving measured ≥50% on at least 5 representative entries (target 60-70%, accept ≥50% as success).
8. ✅ Tag `v0.12-perlang-stable` pushed.
9. ✅ Memory + Obsidian Statusz + Roadmap updated with Phase 12 ship summary.

---

## 11. Memory & Obsidian Sync

- **`project_molekulax.md`** — append Phase 12 bullet with deliverables + savings table + tag.
- **`feedback_adapter_passthrough.md`** — update with the new `(entry, library, lang)` adapter signature + flat-input handling pattern.
- **`MolekulaX_Statusz.md`** — new session block at file top documenting Phase 12 ship.
- **`MolekulaX_Roadmap_2026-05.md`** — Phase 12 entry transitions from "in-progress" → "shipped" with commit-range and lessons-learned block.

---

## 12. Out of Scope (Explicitly)

- SSR / Next.js migration.
- New libraries (SARMs etc.).
- molekulax.com custom domain DNS (separate small task).
- AVIF Q-tuning per asset class.
- Install-prompt in-app banner.
- 3-run LH median GH Action (orthogonal Phase 11 backlog item).
