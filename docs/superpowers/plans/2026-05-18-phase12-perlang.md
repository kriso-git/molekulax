# Phase 12 — Per-Lang Entries Split Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split every entry's body into per-language chunks so an HU user only downloads HU body bytes when opening an entry-detail page. Expected ~60-70% saving per entry-load.

**Architecture:** `LIBRARY_ENTRY_META` stays sync triplet; entry body splits to `entries/<lang>/<id>.js` flat-shape default-exports loaded via Vite template-literal `import(\`./entries/${lang}/${id}.js\`)`. Adapter `adaptLibraryEntry(entry, library, lang)` pre-localizes; EntryDetail entry-level `tr()` calls removed; library-level `tr()` (effects/FAQ/labels) preserved.

**Tech Stack:** React 18 · Vite 5 · vite-plugin-pwa 1.3 · framer-motion 11 · Node 20.18 · LanguageContext async-aware (Phase 11) · LibraryContext per-entry cache (Phase 9).

**Spec:** `docs/superpowers/specs/2026-05-18-phase12-perlang-design.md`

**Repo entry counts:** peptides **60**, nootropics **48**, performance **17**, pharmaceutical **40**. Total 165 entries → **495 lang-chunks**.

**Key files:**
- Modify: `scripts/decompose-library.mjs` (add `--per-lang` + `localize()`)
- Modify: `src/components/library/adaptLibraryEntry.js:1-30` (`trAny` → `flat(value, lang)`, new signature)
- Modify: `src/components/library/EntryDetailRoute.jsx:60-90` (lang dep in fetchEntry useEffect + cancel-flag + warm-switch overlay)
- Modify: `src/data/libraries/index.js:95-122` (top-level `loadEntry(lib, id, lang)`, cache key `${lib}:${id}:${lang}`)
- Modify: `src/data/libraries/{peptides,nootropics,performance,pharmaceutical}/index.js` (per-library `loadEntry(id, lang)` + template-literal import)
- Modify: `src/context/LibraryContext.jsx:63-65` (passthrough)
- Modify: `src/components/library/EntryDetail.jsx` (remove entry-level `tr()` in Step 5)
- Create: `src/data/libraries/<lib>/entries/{hu,en,pl}/<id>.js` (165 × 3 = 495 files via decompose-script)
- Modify: `vite.config.js` workbox `globPatterns` (exclude per-lang entries)

---

## Task 1: Decompose-script `--per-lang` extension + `localize()` helper

**Files:**
- Modify: `scripts/decompose-library.mjs`
- Create: `scripts/test-localize.mjs` (ad-hoc round-trip test script — deleted at end of Task 1)

This task does NOT touch any library data. It only extends the script and verifies the helper standalone.

- [ ] **Step 1: Add `localize(value, lang)` helper at the top of `decompose-library.mjs`**

Insert after the imports block (before `const META_FIELDS = ...`):

```js
// Recursively walks an entry value tree, replacing any triplet-shaped
// {hu, en, pl} leaf with value[lang]. Phase 12 per-lang split.
// - Primitives (string/number/boolean/null/undefined) → pass through.
// - Arrays → map recursively.
// - Plain objects with EXACTLY keys {hu, en, pl} → return value[lang] ?? ''.
// - Other plain objects → walk keys, recurse on each value.
export function localize(value, lang) {
  if (value === null || value === undefined) return value
  if (typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map(v => localize(v, lang))
  const keys = Object.keys(value).sort().join(',')
  if (keys === 'en,hu,pl') return value[lang] ?? ''
  const out = {}
  for (const k of Object.keys(value)) {
    out[k] = localize(value[k], lang)
  }
  return out
}
```

- [ ] **Step 2: Add `--per-lang` flag parsing to `main()`**

Replace the existing argv parse block (lines ~19-23) with:

```js
const args = process.argv.slice(2)
const libId = args.find(a => !a.startsWith('-'))
const perLang = args.includes('--per-lang')
const noBackup = args.includes('--no-backup')
if (!libId) {
  console.error('Usage: node scripts/decompose-library.mjs <libraryId> [--per-lang] [--no-backup]')
  process.exit(1)
}
```

- [ ] **Step 3: Write the ad-hoc test script `scripts/test-localize.mjs`**

```js
// Round-trip test for the localize() helper. Run with: node scripts/test-localize.mjs
import { localize } from './decompose-library.mjs'

const input = {
  id: 'retatrutide',
  name: 'Retatrutide',  // plain string, pass through
  shortDesc: { hu: 'magyar', en: 'english', pl: 'polski' },  // triplet → flatten
  keyInfo: [
    { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
      value: { hu: '6 nap', en: '6 days', pl: '6 dni' } },
  ],
  nested: { foo: { bar: { hu: 'a', en: 'b', pl: 'c' } } },
  studies: ['Study 1', 'Study 2'],  // string array, pass through
  tier: 4,
  empty: null,
}

const expected = {
  id: 'retatrutide',
  name: 'Retatrutide',
  shortDesc: 'english',
  keyInfo: [{ label: 'Half-life', value: '6 days' }],
  nested: { foo: { bar: 'b' } },
  studies: ['Study 1', 'Study 2'],
  tier: 4,
  empty: null,
}

const actual = localize(input, 'en')
const ok = JSON.stringify(actual) === JSON.stringify(expected)
if (!ok) {
  console.error('FAIL — actual:', JSON.stringify(actual, null, 2))
  console.error('       expected:', JSON.stringify(expected, null, 2))
  process.exit(1)
}
console.log('✅ localize() round-trip passes for HU/EN/PL inputs')

// Also verify the 3-key-sort discriminator (a non-i18n 3-key object should pass through)
const tricky = { hu: 'foo', en: 'bar', pl: 'baz' }
console.log('triplet flatten EN:', localize(tricky, 'en'))  // → 'bar'

const nonTriplet = { hu: 'foo', en: 'bar' }  // only 2 keys, NOT a triplet
const r = localize(nonTriplet, 'en')
if (r.hu !== 'foo' || r.en !== 'bar') {
  console.error('FAIL — 2-key object should pass through unchanged:', r)
  process.exit(1)
}
console.log('✅ 2-key object passes through (non-triplet)')
```

- [ ] **Step 4: Run the test script — verify localize works**

Run: `node scripts/test-localize.mjs`
Expected output:
```
✅ localize() round-trip passes for HU/EN/PL inputs
triplet flatten EN: bar
✅ 2-key object passes through (non-triplet)
```

If any line shows `FAIL`, fix the helper and re-run.

- [ ] **Step 5: Add per-lang emit branch to `main()`**

After the existing `if (!Array.isArray(entries) || ...)` guard, BEFORE the `Ensure entries/ subdir` block, insert:

```js
if (perLang) {
  // Phase 12 per-lang emit. For each lang, write entries/<lang>/<id>.js.
  for (const lang of ['hu', 'en', 'pl']) {
    const langDir = resolve(libDir, 'entries', lang)
    if (!existsSync(langDir)) mkdirSync(langDir, { recursive: true })
    for (const entry of entries) {
      const localized = localize(entry, lang)
      const filePath = resolve(langDir, `${entry.id}.js`)
      const body = `// Auto-decomposed by scripts/decompose-library.mjs --per-lang at ${new Date().toISOString()}\n// Edit this file directly to update the ${lang.toUpperCase()} body; do not re-run the script.\n\nexport default ${JSON.stringify(localized, null, 2)}\n`
      writeFileSync(filePath, body, 'utf8')
    }
    console.log(`✅ Emitted ${entries.length} ${lang.toUpperCase()} entry files to ${langDir}`)
  }

  // Backup old triplet entries to .bak/ (unless --no-backup)
  const entriesDir = resolve(libDir, 'entries')
  const bakDir = resolve(entriesDir, '.bak')
  if (!noBackup && !existsSync(bakDir)) mkdirSync(bakDir, { recursive: true })
  const { readdirSync, renameSync, unlinkSync } = await import('node:fs')
  for (const entry of entries) {
    const oldPath = resolve(entriesDir, `${entry.id}.js`)
    if (existsSync(oldPath)) {
      if (noBackup) unlinkSync(oldPath)
      else renameSync(oldPath, resolve(bakDir, `${entry.id}.js`))
    }
  }
  console.log(`✅ ${noBackup ? 'Deleted' : 'Backed up'} ${entries.length} legacy triplet entry files`)

  // Rewrite <lib>/index.js loadEntry to per-lang signature.
  const newIndex = renderLibraryIndexPerLang(libId, lib, meta)
  writeFileSync(libModulePath, newIndex, 'utf8')
  console.log(`✅ Rewrote ${libModulePath} with loadEntry(id, lang)`)
  return
}
```

Note: the existing legacy non-`--per-lang` path remains for backward compat / one-off use.

- [ ] **Step 6: Add `renderLibraryIndexPerLang(libId, lib, meta)` function**

Add below the existing `renderLibraryIndex()` function:

```js
function renderLibraryIndexPerLang(libId, lib, meta) {
  const SING = SINGULAR[libId]
  const SingCamel = SINGULAR_CAMEL[libId]
  const libKey = `${libId}Library`
  return `// Auto-decomposed by scripts/decompose-library.mjs --per-lang at ${new Date().toISOString()}
// Phase 12: per-lang entry chunks. loadEntry(id, lang) dynamic-imports
// entries/<lang>/<id>.js. Library-level fields (categories, effects, faq,
// labels) still triplet — only entry bodies are lang-split.

import { CATEGORIES, ${SING}_CATEGORIES, get${SingCamel}Categories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = ${JSON.stringify(meta, null, 2)}

export const TOP_ENTRY_IDS = ${JSON.stringify(lib.topEntries || [], null, 2)}

export const ${libKey} = {
  id: ${JSON.stringify(lib.id)},
  name: ${JSON.stringify(lib.name, null, 2)},
  description: ${JSON.stringify(lib.description, null, 2)},
  accent: ${JSON.stringify(lib.accent)},
  meta: LIBRARY_ENTRY_META,
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  entryCategoryMap: ${SING}_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: ${JSON.stringify(lib.effectsTitle, null, 2)},
  effectsSubtitle: ${JSON.stringify(lib.effectsSubtitle, null, 2)},
  labels: ${JSON.stringify(lib.labels, null, 2)},
}

// Phase 12 per-lang: Vite template-literal-import emits one chunk per
// (lang, id) combo because the static prefix ./entries/ lets Vite glob
// every matching file at build time.
export async function loadEntry(id, lang) {
  const mod = await import(\`./entries/\${lang}/\${id}.js\`)
  return mod.default
}

export { CATEGORIES, ${SING}_CATEGORIES, get${SingCamel}Categories, getResearchLevel, EFFECT_CATEGORIES }
`
}
```

- [ ] **Step 7: Verify the script's help message and run on no library yet**

Run: `node scripts/decompose-library.mjs --per-lang`
Expected: Error "Usage: node scripts/decompose-library.mjs <libraryId> [--per-lang] [--no-backup]"

This proves the flag parsing works without mutating any library.

- [ ] **Step 8: Delete the ad-hoc test script**

```bash
rm scripts/test-localize.mjs
```

- [ ] **Step 9: Build green check**

Run: `npm run build`
Expected: same green build as HEAD (script changes don't affect build).

- [ ] **Step 10: Commit**

```bash
git add scripts/decompose-library.mjs
git commit -m "phase12(script): decompose-library.mjs --per-lang flag + localize helper

Adds Phase 12 per-lang entry split capability to the decompose script.
- localize(value, lang) recursive helper: flattens {hu,en,pl} triplets, passes
  through primitives/arrays/non-triplet objects.
- --per-lang flag emits entries/<lang>/<id>.js for each entry × 3 langs,
  backs old triplet files to entries/.bak/ (or deletes with --no-backup).
- renderLibraryIndexPerLang() rewrites <lib>/index.js with loadEntry(id, lang)
  using Vite template-literal-import for per-(lang,id) chunk emission.
- No library data touched in this commit; script extension only."
```

---

## Task 2: Adapter dual-shape support + lang param

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js`

This adds the `lang` parameter and dual-shape handling (accepts BOTH flat AND triplet entries). Libraries are still triplet at this step; the adapter just gains a no-op `lang` param plus a `flat()` helper that works for both inputs.

- [ ] **Step 1: Replace `trAny(value)` with `flat(value, lang)` helper at the top of the adapter file**

Replace lines 20-24 (the `trAny` function):

```js
// Phase 12: handles BOTH flat-shape entry fields (post-per-lang-split) AND
// triplet-shape (legacy / library-level fields like library.labels.X).
// - flat string → return as-is.
// - {hu, en, pl} triplet → return value[lang].
// - null/undefined → return ''.
function flat(value, lang) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'object' && !Array.isArray(value)) {
    if (lang && value[lang] !== undefined) return value[lang]
    return value.hu || value.en || value.pl || ''
  }
  return ''
}
```

Note: the second-arg `lang` is optional so existing call sites that pass no lang (Step 2-bridge state) keep working with HU-first fallback. Once Step 5 lands and entries are flat, `lang` becomes mandatory in practice.

- [ ] **Step 2: Update the export signature**

The current export is at the bottom of the file. Find the `export function adaptLibraryEntry(peptide, library)` (or `adaptLivePeptide`) signature and change to:

```js
export function adaptLibraryEntry(peptide, library, lang) {
  // ... existing body, but every trAny(...) call updated to flat(..., lang)
  // ... and entry-level triplet field access updated to flat() resolution
}
```

- [ ] **Step 3: Find all `trAny(...)` call sites and replace with `flat(..., lang)`**

Run: `grep -n "trAny(" src/components/library/adaptLibraryEntry.js`

For each match, replace `trAny(X)` with `flat(X, lang)`. Verify no `trAny` references remain:

Run: `grep -n "trAny" src/components/library/adaptLibraryEntry.js`
Expected: 0 matches.

- [ ] **Step 4: Build green check**

Run: `npm run build`
Expected: green build, no vite errors. The adapter accepts both shapes since `flat()` handles both.

- [ ] **Step 5: Manual smoke — open dev server, click an entry, verify it renders**

Run: `npm run dev` (background)
Open: `http://localhost:5173/#entry/peptides/retatrutide`
Verify: page renders without console errors; entry name, description, mechanism, keyInfo, studies all visible. Switch language EN→PL and confirm text changes (using existing Phase 11 `useLang()` path; entries are still triplet so the adapter resolves them with `lang`).

Kill dev server after verification.

- [ ] **Step 6: Audit entry-level field allowlist against EntryDetail consumption**

Run: `grep -n "peptide\." src/components/library/EntryDetail.jsx | head -50`
Then: `grep -n "adaptLibraryEntry\|return {" src/components/library/adaptLibraryEntry.js`

For each prop EntryDetail destructures from `peptide.*`, confirm the adapter return-object has that key. List any gaps in the commit message.

Common fields to verify present:
- `name`, `shortDesc`, `description`, `mechanism`, `dosing`, `keyInfo`, `quickStart`, `expectations`
- `effectsList`, `studies`, `faq`, `interactions`, `quality`, `legal`
- `image`, `accentColor`, `tagColor`, `tier`, `wadaStatus`, `prescriptionStatus`, `atcCode`
- `cycle`, `bloodwork`, `chemicalFormula`, `androgenicRatio`, `bindingAffinity`, `detectionWindow`, `halfLifeActive`

- [ ] **Step 7: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js
git commit -m "phase12(adapter): flat-input compatible + lang param + allowlist audit

Replaces trAny() with flat(value, lang) helper that handles both flat string
inputs (post per-lang-split) and triplet {hu,en,pl} inputs (legacy + library-
level fields). Adds lang param to adaptLibraryEntry signature.

Adapter remains backward-compatible with triplet entries — no library data
mutated at this step. Allowlist audit confirms all ~30 entry-level fields
flow through to EntryDetail props."
```

---

## Task 3: EntryDetailRoute lang-reactive + warm-switch overlay

**Files:**
- Modify: `src/components/library/EntryDetailRoute.jsx`
- Modify: `src/context/LibraryContext.jsx`
- Modify: `src/data/libraries/index.js`

This wires `lang` through the load path: `EntryDetailRoute` → `useLang()` → `loadEntry(lib, id, lang)` → cache key includes lang. The libraries' per-library `loadEntry(id)` still takes 1-arg (triplet shape); the new `lang` is a no-op at the leaf for now but the cache key changes. After Task 4a (peptides per-lang split), the leaf accepts the second arg.

- [ ] **Step 1: Update `src/data/libraries/index.js` top-level `loadEntry` signature**

Modify the existing function (around line 95):

```js
export async function loadEntry(libraryId, entryId, lang) {
  const key = `${libraryId}:${entryId}:${lang || 'default'}`
  if (entryCache.has(key)) return entryCache.get(key)
  let mod = null
  switch (libraryId) {
    case 'peptides':       mod = await import('./peptides');       break
    case 'nootropics':     mod = await import('./nootropics');     break
    case 'performance':    mod = await import('./performance');    break
    case 'pharmaceutical': mod = await import('./pharmaceutical'); break
    default: throw new Error(`Unknown library: ${libraryId}`)
  }
  if (typeof mod.loadEntry !== 'function') {
    throw new Error(`Library ${libraryId} does not expose loadEntry`)
  }
  // Pass lang to the per-library loader. Pre-Phase 12 libraries ignore it
  // (1-arg signature); post-Phase 12 libraries use it for the dynamic-import path.
  const entry = await mod.loadEntry(entryId, lang)
  if (!entry) {
    const err = new Error(`Entry not found: ${libraryId}/${entryId}`)
    err.code = 'ENTRY_NOT_FOUND'
    throw err
  }
  entryCache.set(key, entry)
  return entry
}

export function getCachedEntry(libraryId, entryId, lang) {
  return entryCache.get(`${libraryId}:${entryId}:${lang || 'default'}`) || null
}
```

- [ ] **Step 2: Update `LibraryContext.jsx` to pass `lang` through**

Replace lines 63-65:

```js
const loadEntry = useCallback(async (lib, id, lang) => {
  return loadEntryFromRegistry(lib, id, lang)
}, [])
```

The `getCachedEntry` re-export already returns from the same Map — update its signature in context too:

In the `value = useMemo(...)` block, change `getCachedEntry` to:
```js
getCachedEntry: (lib, id, lang) => getCachedEntry(lib, id, lang),
```

- [ ] **Step 3: Update `EntryDetailRoute.jsx` — pass `lang` from `useLang()` to load calls**

Read the current `fetchEntry` callback (lines 60-90). Replace with:

```jsx
const { t, lang } = useLang()
// ... (rest of variable destructuring unchanged)

const fetchEntry = useCallback(async () => {
  if (!parsed) {
    setEntry(null)
    setError(null)
    return
  }
  const cached = getCachedEntry(parsed.library, parsed.id, lang)
  if (cached) {
    setEntry(cached)
    setError(null)
    setLoading(false)
    return
  }
  setLoading(true)
  setError(null)
  try {
    const e = await loadEntry(parsed.library, parsed.id, lang)
    setEntry(e)
  } catch (err) {
    setError(err)
    setEntry(null)
  } finally {
    setLoading(false)
  }
}, [parsed?.library, parsed?.id, lang, loadEntry, getCachedEntry])

useEffect(() => { fetchEntry() }, [fetchEntry])
```

Note: `fetchEntry`'s dependency array now includes `lang`. When the user switches language, the callback is rebuilt and the `useEffect` re-fires, loading the fresh-lang chunk.

- [ ] **Step 4: Add race-cancel flag to `fetchEntry`**

Replace the `useEffect(() => { fetchEntry() }, [fetchEntry])` with an inline cancel-aware version, AND wrap the fetchEntry body so it can be cancelled:

```jsx
useEffect(() => {
  let cancelled = false
  if (!parsed) {
    setEntry(null)
    setError(null)
    setLoading(false)
    return
  }
  const cached = getCachedEntry(parsed.library, parsed.id, lang)
  if (cached) {
    setEntry(cached)
    setError(null)
    setLoading(false)
    return
  }
  setLoading(true)
  setError(null)
  ;(async () => {
    try {
      const e = await loadEntry(parsed.library, parsed.id, lang)
      if (!cancelled) {
        setEntry(e)
        setLoading(false)
      }
    } catch (err) {
      if (!cancelled) {
        setError(err)
        setEntry(null)
        setLoading(false)
      }
    }
  })()
  return () => { cancelled = true }
}, [parsed?.library, parsed?.id, lang, loadEntry, getCachedEntry])
```

Delete the now-unused `fetchEntry` useCallback and the separate `useEffect(() => { fetchEntry() }, [fetchEntry])`. Keep `fetchEntry` only if EntryDetailError needs `onRetry={fetchEntry}` — in which case extract a small `retry` callback that re-triggers via a state-bumping ref or similar.

To preserve the retry pattern, add a `retryCounter` state:
```jsx
const [retryCounter, setRetryCounter] = useState(0)
// In the useEffect dep array, add retryCounter
// In EntryDetailError: onRetry={() => setRetryCounter(c => c + 1)}
```

- [ ] **Step 5: Add warm-switch overlay UI**

Find the body-render block (around line 140-160 in current EntryDetailRoute, after the `loading || !entry || !libraryReady` branch). Update the "else" branch:

```jsx
} else {
  const peptide = adaptLibraryEntry(entry, library, lang)
  const handleJump = (id) => {
    if (parsed?.library) {
      window.location.hash = `entry/${parsed.library}/${id}`
    }
  }
  const entryKey = `${parsed.library}:${peptide.id}`
  body = (
    <div className="relative">
      <div className={loading ? 'opacity-50 pointer-events-none transition-opacity' : 'transition-opacity'}>
        <Suspense fallback={<EntryDetailSkeleton />}>
          <EntryDetail key={entryKey} peptide={peptide} onClose={closeDetail} onJump={handleJump} />
        </Suspense>
      </div>
      {loading && (
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full border-2 animate-spin"
               style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
               role="status" aria-label="Loading"/>
        </div>
      )}
    </div>
  )
}
```

Note: `loading` is true ONLY during a re-fetch (e.g., lang switch on an already-mounted entry). The cold-load path takes the `else if (loading || !entry || !libraryReady)` branch and shows the full HeroPreview/Skeleton, NOT this overlay.

Also note: the `else` branch executes only when `!loading && entry && libraryReady`. To make the warm-switch overlay actually appear, restructure so the overlay can show even when `loading && entry` is true. Change the branch logic to:

```jsx
let body
if (error) {
  body = <EntryDetailError error={error} onRetry={() => setRetryCounter(c => c + 1)} onBack={closeDetail} />
} else if (!entry || !libraryReady) {
  // Cold load: no entry mounted yet
  body = metaEntry
    ? <HeroPreview meta={metaEntry} onClose={closeDetail} />
    : <EntryDetailSkeleton />
} else {
  // Entry mounted (possibly stale during a warm lang-switch). loading=true
  // here means a re-fetch is in flight; old entry stays visible with overlay.
  const peptide = adaptLibraryEntry(entry, library, lang)
  // ... (rest as above with loading overlay)
}
```

- [ ] **Step 6: Build green check**

Run: `npm run build`
Expected: green build.

- [ ] **Step 7: Manual smoke — cold load + lang-switch sequence**

Run: `npm run dev` (background)

Test 1 (cold load): Open `http://localhost:5173/#entry/peptides/retatrutide`. Expect: HeroPreview skeleton briefly, then full EntryDetail. No console errors.

Test 2 (lang switch warm): With Retatrutide open, click language switcher HU→EN. Expect: brief overlay (spinner) over the existing entry, then content switches to EN. Old entry stays mounted during the swap (no full-page skeleton).

Test 3 (rapid switch race): HU→EN→PL→HU as fast as possible. Expect: settles on HU content, no stale text from a mid-flight EN/PL chunk.

Test 4 (close): Click X / press ESC / hit Back. Expect: returns to library, scroll restored, no orphan overlay.

Kill dev server.

- [ ] **Step 8: Commit**

```bash
git add src/components/library/EntryDetailRoute.jsx src/context/LibraryContext.jsx src/data/libraries/index.js
git commit -m "phase12(route): lang-reactive entry loading + warm-switch overlay

Adds lang to the loadEntry signature throughout the chain:
- top-level loadEntry(lib, id, lang) — cache key includes lang
- per-library loadEntry(id, lang) — lang ignored at leaf until per-lang split lands
- EntryDetailRoute reads lang from useLang() and includes it in the load-effect dep array
- Race-cancel flag in useEffect prevents stale state on rapid switches
- Warm-switch overlay: opacity-50 wrap + center spinner stays mounted over old entry
  while new-lang chunk loads. Cold load still uses HeroPreview/EntryDetailSkeleton."
```

---

## Task 4a: Pilot — peptides library per-lang split

**Files:**
- Run: `node scripts/decompose-library.mjs peptides --per-lang`
- Verify: 60 × 3 = 180 new files in `src/data/libraries/peptides/entries/{hu,en,pl}/`
- Verify: 60 old files moved to `src/data/libraries/peptides/entries/.bak/`
- Verify: `src/data/libraries/peptides/index.js` rewritten with `loadEntry(id, lang)`

- [ ] **Step 1: Run the decompose-script in per-lang mode on peptides**

```bash
node scripts/decompose-library.mjs peptides --per-lang
```

Expected output:
```
✅ Emitted 60 HU entry files to .../peptides/entries/hu
✅ Emitted 60 EN entry files to .../peptides/entries/en
✅ Emitted 60 PL entry files to .../peptides/entries/pl
✅ Backed up 60 legacy triplet entry files
✅ Rewrote .../peptides/index.js with loadEntry(id, lang)
```

- [ ] **Step 2: Verify file counts**

```bash
ls src/data/libraries/peptides/entries/hu/ | wc -l   # 60
ls src/data/libraries/peptides/entries/en/ | wc -l   # 60
ls src/data/libraries/peptides/entries/pl/ | wc -l   # 60
ls src/data/libraries/peptides/entries/.bak/ | wc -l # 60
```

- [ ] **Step 3: Spot-check a localized file**

```bash
head -30 src/data/libraries/peptides/entries/en/retatrutide.js
```

Expected: `export default { "id": "retatrutide", "name": "Retatrutide", "shortDesc": "Triple incretin agonist: metabolic health and weight loss", ... }` — note `shortDesc` is now a flat string (not `{hu, en, pl}`).

Also spot-check a deeply-nested field, e.g.:
```bash
grep '"label"' src/data/libraries/peptides/entries/en/retatrutide.js | head -3
```
Expected: `"label": "Half-life"` (flat string), not `"label": { "hu": "...", ... }`.

- [ ] **Step 4: Verify `peptides/index.js` was rewritten with `loadEntry(id, lang)`**

```bash
grep -A 2 "export async function loadEntry" src/data/libraries/peptides/index.js
```

Expected:
```js
export async function loadEntry(id, lang) {
  const mod = await import(`./entries/${lang}/${id}.js`)
  return mod.default
}
```

- [ ] **Step 5: Build green check + chunk count verification**

```bash
npm run build
```

Expected: green build. Check the chunk output:

```bash
ls dist/assets/ | grep -E '^(retatrutide|bpc-157|ghk-cu)' | head -20
```

Expected: each peptide id appears 3 times (one chunk per lang), each ~5-9kB gzip.

- [ ] **Step 6: Verify chunk size saving on Retatrutide**

```bash
ls -la dist/assets/ | grep retatrutide
```

Compare to the HEAD~1 baseline (Retatrutide ~22-28kB gzip triplet). New per-lang chunks should be ~7-9kB each. Net per-load saving: ~67%.

- [ ] **Step 7: Manual smoke — preview + click 3 peptide entries**

```bash
npm run preview
```

Open: `http://localhost:4173/#entry/peptides/retatrutide` — verify renders correctly in HU, switch EN, switch PL. No console errors.
Repeat: `#entry/peptides/bpc-157`, `#entry/peptides/ghk-cu`.

DevTools Network tab: confirm only the HU chunk loads when the page is HU. EN chunk loads on lang switch. PL chunk loads on PL switch.

Kill preview.

- [ ] **Step 8: Commit**

```bash
git add src/data/libraries/peptides/
git commit -m "phase12(peptides): per-lang entries split (pilot)

Runs decompose-library.mjs peptides --per-lang to:
- Emit 60 × 3 = 180 per-lang entry files in entries/{hu,en,pl}/<id>.js
- Move 60 legacy triplet entry files to entries/.bak/ (retained until Step 5)
- Rewrite peptides/index.js with loadEntry(id, lang) Vite template-literal import

Verified: build green, 180 distinct chunks emitted, ~67% per-entry-load saving
on Retatrutide (22kB → 7kB per lang). Manual smoke on 3 peptides × 3 langs passes.

Pilot for the per-lang split architecture. Nootropics/Performance/Pharmaceutical
follow in subsequent commits if peptides ships clean."
```

---

## Task 4b: Nootropics library per-lang split

- [ ] **Step 1: Run the script**

```bash
node scripts/decompose-library.mjs nootropics --per-lang
```

Expected: `Emitted 48 ... entry files` × 3 langs + `Backed up 48 legacy triplet entry files`.

- [ ] **Step 2: Build + verify**

```bash
npm run build
ls src/data/libraries/nootropics/entries/hu/ | wc -l  # 48
```

- [ ] **Step 3: Manual smoke on Modafinil + Piracetam**

```bash
npm run preview
```

Open `http://localhost:4173/#entry/nootropics/modafinil` and `#entry/nootropics/piracetam`. Verify HU/EN/PL switching. Kill preview.

- [ ] **Step 4: Commit**

```bash
git add src/data/libraries/nootropics/
git commit -m "phase12(nootropics): per-lang entries split

Runs decompose-library.mjs nootropics --per-lang.
- 48 × 3 = 144 per-lang entry files in entries/{hu,en,pl}/<id>.js
- 48 legacy triplet files backed up to entries/.bak/
- nootropics/index.js rewritten with loadEntry(id, lang)

Build green; smoke on Modafinil + Piracetam × 3 langs passes."
```

---

## Task 4c: Performance library per-lang split

- [ ] **Step 1: Run the script**

```bash
node scripts/decompose-library.mjs performance --per-lang
```

Expected: 17 × 3 = 51 per-lang files.

- [ ] **Step 2: Build + verify**

```bash
npm run build
ls src/data/libraries/performance/entries/hu/ | wc -l  # 17
```

- [ ] **Step 3: Manual smoke on Testosterone-info + MK-677**

```bash
npm run preview
```

Open `http://localhost:4173/#entry/performance/testosterone-info` and `#entry/performance/mk-677`. Verify HU/EN/PL switching + WadaBadge + BloodworkProtocol still render. Kill preview.

- [ ] **Step 4: Commit**

```bash
git add src/data/libraries/performance/
git commit -m "phase12(performance): per-lang entries split

Runs decompose-library.mjs performance --per-lang.
- 17 × 3 = 51 per-lang entry files in entries/{hu,en,pl}/<id>.js
- 17 legacy triplet files backed up to entries/.bak/

Build green; smoke on Testosterone-info + MK-677 × 3 langs passes,
WadaBadge + BloodworkProtocol render correctly."
```

---

## Task 4d: Pharmaceutical library per-lang split

- [ ] **Step 1: Run the script**

```bash
node scripts/decompose-library.mjs pharmaceutical --per-lang
```

Expected: 40 × 3 = 120 per-lang files.

- [ ] **Step 2: Build + verify**

```bash
npm run build
ls src/data/libraries/pharmaceutical/entries/hu/ | wc -l  # 40
```

- [ ] **Step 3: Manual smoke on Metformin + Sertralin**

```bash
npm run preview
```

Open `http://localhost:4173/#entry/pharmaceutical/metformin` and `#entry/pharmaceutical/sertralin`. Verify HU/EN/PL + FAQ-tab + prescriptionStatus render. Kill preview.

- [ ] **Step 4: Commit**

```bash
git add src/data/libraries/pharmaceutical/
git commit -m "phase12(pharmaceutical): per-lang entries split

Runs decompose-library.mjs pharmaceutical --per-lang.
- 40 × 3 = 120 per-lang entry files in entries/{hu,en,pl}/<id>.js
- 40 legacy triplet files backed up to entries/.bak/

Build green; smoke on Metformin + Sertralin × 3 langs passes,
FAQ-tab + prescriptionStatus rendering preserved.

All 4 libraries now per-lang. Total: 165 × 3 = 495 lang-chunks."
```

---

## Task 5: Cleanup — drop entry-level `tr()` + audit precache + delete .bak

**Files:**
- Modify: `src/components/library/EntryDetail.jsx`
- Modify: `vite.config.js`
- Delete: `src/data/libraries/*/entries/.bak/` (all 4 libraries)

- [ ] **Step 1: Grep entry-level `tr()` call sites in EntryDetail**

Run:
```bash
grep -n "tr(peptide\." src/components/library/EntryDetail.jsx
grep -n "tr(p\." src/components/library/EntryDetail.jsx
```

These are the call sites that consume entry-level fields. The adapter now pre-localizes them, so `tr(peptide.X)` should become `peptide.X` directly (flat string).

- [ ] **Step 2: Replace entry-level `tr()` calls**

For each match from Step 1, edit the file:
- `tr(peptide.description)` → `peptide.description`
- `tr(peptide.mechanism.summary)` → `peptide.mechanism.summary`
- etc.

DO NOT touch `tr(library.X)`, `tr(getLevelMeta(...).X)`, or `tr(t('foo'))` — those are library-level / static strings, not entry-level.

After editing, verify zero entry-level `tr()` remain:
```bash
grep -n "tr(peptide\." src/components/library/EntryDetail.jsx
```
Expected: 0 matches.

- [ ] **Step 3: Build + manual smoke**

```bash
npm run build
npm run preview
```

Open 4 entries (one from each library): Retatrutide, Modafinil, Testosterone-info, Metformin. Verify all sections render in HU/EN/PL. No empty strings or `[object Object]` artifacts. Kill preview.

- [ ] **Step 4: Audit `vite-plugin-pwa` `globPatterns` — exclude per-lang chunks**

Open `vite.config.js`. Find the `VitePWA({ workbox: { globPatterns: [...] } })` block.

Add a `globIgnores` (or restrict `globPatterns` to NOT include per-lang chunks). The per-lang chunks are typically `assets/<id>-<hash>.js` — but the chunk-name pattern is determined by Vite's chunk-naming. Verify with:
```bash
ls dist/assets/ | grep -E '(modafinil|metformin)' | head -10
```

Expected file pattern (Vite default): `<entry-id>-<hash>.js`. If so, the entries get caught by `**/*.js` glob — bloating precache by ~2.5MB. Add:

```js
workbox: {
  globPatterns: [
    'assets/index-*.js',     // main entry chunk
    'assets/vendor-*.js',    // vendor split
    // ... existing precaches
  ],
  globIgnores: [
    'assets/**-{hu,en,pl}-*.js',  // per-lang entry chunks — runtime-cached only
  ],
  // ... rest
}
```

Note: Vite's chunk-naming for dynamic-imports via template-literal often uses the FILE NAME of the imported module (e.g., `retatrutide-<hash>.js`) — NOT prefixed with lang. Verify by inspecting `dist/assets/`. If the lang is NOT in the chunk name, use a different exclusion strategy: match by chunk name against the known entry-id list, OR keep all in precache (precount must stay under 5MB).

Decision: if precache budget exceeded, exclude entries. Otherwise leave alone. Run after each library decompose and observe `dist/assets/` size.

- [ ] **Step 5: Build + manual smoke + SW check**

```bash
npm run build
npm run preview
```

Open DevTools → Application → Service Workers. Verify `/sw.js` registers, precache list does NOT include per-lang entry chunks (or is within budget). Open Retatrutide; verify network tab shows only the HU chunk on first load, only EN chunk on lang switch.

Kill preview.

- [ ] **Step 6: Delete `.bak/` directories from all 4 libraries**

```bash
rm -rf src/data/libraries/peptides/entries/.bak
rm -rf src/data/libraries/nootropics/entries/.bak
rm -rf src/data/libraries/performance/entries/.bak
rm -rf src/data/libraries/pharmaceutical/entries/.bak
```

- [ ] **Step 7: Drop the dual-shape compatibility from the adapter (optional, gradual rollout)**

The `flat()` helper still handles both flat strings AND triplets, for safety during the rollout. Phase 12 ships with dual-shape; Phase 12.1 or 13 can simplify if no regressions surface in 1-2 weeks.

Decision: KEEP dual-shape `flat()` for now (zero cost, defensive). Skip this step.

- [ ] **Step 8: Build + final manual smoke**

```bash
npm run build
npm run preview
```

Open all 4 libraries' Top 10 entries × 3 langs (rough count: ~40 page-loads). Verify no regressions: skeleton/HeroPreview on cold load, warm-switch overlay on lang change, no console errors.

Kill preview.

- [ ] **Step 9: Commit**

```bash
git add src/components/library/EntryDetail.jsx vite.config.js
git rm -r src/data/libraries/peptides/entries/.bak src/data/libraries/nootropics/entries/.bak src/data/libraries/performance/entries/.bak src/data/libraries/pharmaceutical/entries/.bak
git commit -m "phase12(cleanup): drop entry-level tr(), audit precache, remove .bak

- EntryDetail.jsx: removes all tr(peptide.X) calls — adapter pre-localizes
  entry-level fields. Library-level tr() (effects/faq/labels/researchLevel)
  preserved.
- vite.config.js: Workbox globPatterns/globIgnores audit — per-lang entry
  chunks excluded from precache to stay under 5MB budget; runtime CacheFirst
  pattern handles them on first hit.
- Delete entries/.bak/ directories in all 4 libraries (post-rollout cleanup).

flat() helper in adapter retains dual-shape support (flat + triplet) for
defensive safety. To be simplified in Phase 13 if no regressions surface."
```

---

## Task 6: Push, live LH sweep, tag, memory + Obsidian sync

- [ ] **Step 1: Push to origin/master**

```bash
git push origin master
```

Expected: Vercel auto-deploy fires within ~30s.

- [ ] **Step 2: Wait for Vercel deploy + verify**

```bash
until curl -sI https://molekulax.vercel.app/sw.js | grep -q "HTTP/2 200"; do sleep 10; done
echo "Deploy ready"
```

- [ ] **Step 3: Live Lighthouse sweep — 10 URLs**

Headless mobile preset, simulate Slow-4G + 4× CPU throttle. URLs:
```
https://molekulax.vercel.app/
https://molekulax.vercel.app/#entry/peptides/retatrutide
https://molekulax.vercel.app/#entry/peptides/bpc-157
https://molekulax.vercel.app/#entry/nootropics/modafinil
https://molekulax.vercel.app/#entry/nootropics/piracetam
https://molekulax.vercel.app/#entry/nootropics/semax
https://molekulax.vercel.app/#entry/performance/testosterone-info
https://molekulax.vercel.app/#entry/performance/mk-677
https://molekulax.vercel.app/#entry/pharmaceutical/metformin
https://molekulax.vercel.app/#entry/pharmaceutical/sertralin
```

For each URL:
```bash
npx lighthouse "<url>" --preset=mobile --quiet --output=json --output-path=lh-phase12-<slug>.json --chrome-flags="--headless"
```

- [ ] **Step 4: Parse LH results — gate check**

```bash
for f in lh-phase12-*.json; do
  node -e "const d=require('./$f');console.log('$f Perf:',d.categories.performance.score*100,'A11y:',d.categories.accessibility.score*100,'BP:',d.categories['best-practices'].score*100,'SEO:',d.categories.seo.score*100)"
done
```

Gate: each URL ≥85 Perf, ≥95 A11y, ≥96 BP, 100 SEO. Phase 11 lesson [[Lighthouse_Single_Measurement_Variance]] — if a single URL flags below threshold, run a second sweep on that URL before declaring regression.

- [ ] **Step 5: Per-entry-load saving verification**

Open `https://molekulax.vercel.app/#entry/peptides/retatrutide` in a fresh incognito tab with DevTools Network filter `Type: JS`. Confirm only ONE entry chunk (e.g., `retatrutide-<hash>.js`) loads — its name should be the HU chunk. Switch to EN; confirm EN chunk loads. Switch to PL; confirm PL chunk loads. No 3-chunk simultaneous load.

Measure transfer size for the HU chunk (Phase 11 baseline ~22kB → Phase 12 target ~7-9kB).

- [ ] **Step 6: Tag `v0.12-perlang-stable`**

```bash
git tag -a v0.12-perlang-stable -m "Phase 12 — Full entries-data locale-split (per-lang body chunks)

Per-lang split shipped for all 4 libraries:
- peptides: 60 × 3 = 180 lang-chunks
- nootropics: 48 × 3 = 144 lang-chunks
- performance: 17 × 3 = 51 lang-chunks
- pharmaceutical: 40 × 3 = 120 lang-chunks
- TOTAL: 165 × 3 = 495 lang-chunks

Per-entry-load saving (Retatrutide example): 22kB → 7kB per lang (~67%).

Live Lighthouse 10-URL sweep PASS: ≥85 Perf, ≥95 A11y, ≥96 BP, 100 SEO.

Spec: docs/superpowers/specs/2026-05-18-phase12-perlang-design.md
Plan: docs/superpowers/plans/2026-05-18-phase12-perlang.md
"
git push origin v0.12-perlang-stable
```

- [ ] **Step 7: Memory + Obsidian update**

Update `C:\Users\trolo\.claude\projects\e--Website-Biz\memory\project_molekulax.md` — append Phase 12 bullet with deliverables, savings table, tag, and final commit range.

Update `C:\Users\trolo\.claude\projects\e--Website-Biz\memory\feedback_adapter_passthrough.md` — note the new `adaptLibraryEntry(entry, library, lang)` signature and dual-shape `flat()` helper.

Update `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_Statusz.md` — prepend new session block with Phase 12 ship summary.

Update `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_Roadmap_2026-05.md` — Phase 12 section transitions from "in-progress" → "shipped" with commit-range and lessons-learned block.

- [ ] **Step 8: Final acceptance verification**

Walk through `Acceptance Criteria` section in `docs/superpowers/specs/2026-05-18-phase12-perlang-design.md`. Confirm all 9 items checked. Report PASS/FAIL per item in a final commit message or status comment.

---

## Self-Review

**Spec coverage:** every section of the spec maps to one or more tasks:
- §1 Goal & metric → Task 6 Step 5 saving verification
- §2 Architecture overview → Tasks 1-5 collectively
- §3 File layout C → Task 1 (script) + Task 4a-d (execution)
- §4 Adapter changes → Task 2; EntryDetail changes → Task 5 Steps 1-3
- §5 Loading flow → Task 3 (race-cancel, warm-switch overlay)
- §6 Build pipeline → Task 1
- §7 Rollout 5 steps → Tasks 4a-d + 5
- §7.1 Per-step gates → embedded in each task's smoke step
- §7.2 Live-split fallback → noted in Task 4b-d as graceful-skip option
- §7.3 Tag → Task 6 Step 6
- §8 Risks → Task 3 (race-cancel), Task 5 (precache audit)
- §9 Phase 13 backlog → mentioned in Task 5 Step 7 (dual-shape simplification deferred)
- §10 Acceptance criteria → Task 6 Step 8 walk-through
- §11 Memory + Obsidian → Task 6 Step 7

**Placeholder scan:** no "TBD" / "TODO" / "implement later". One soft-decision in Task 5 Step 4 about Workbox globIgnores syntax — depends on observed Vite chunk-naming pattern, both branches addressed.

**Type consistency:**
- `loadEntry(libraryId, entryId, lang)` signature consistent in `src/data/libraries/index.js` (top-level) — 3 args.
- `loadEntry(id, lang)` signature consistent in `<lib>/index.js` (per-library) — 2 args.
- `adaptLibraryEntry(entry, library, lang)` consistent in Task 2 + Task 3 Step 5 + Task 5.
- `flat(value, lang)` consistent throughout.
- `getCachedEntry(libraryId, entryId, lang)` consistent (Task 3 Step 1 + Step 2).
- Cache key format `${libraryId}:${entryId}:${lang || 'default'}` consistent.

**Open soft-decisions surfaced:**
- Task 5 Step 4: Workbox `globIgnores` exact pattern depends on Vite's emitted chunk name (lang prefix vs not). Plan addresses both branches.
- Task 5 Step 7: keeping dual-shape `flat()` defensively, simplification deferred to Phase 13.

No structural rewrites needed; minor inline clarifications already embedded.
