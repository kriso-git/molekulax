# Performance Library Restructure — Sub-Task 1 (Architecture + Rebucket) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace TOP 10 grid + 6 use-categories with 5 chemistry-based CategoryCards (DHT/Test/19-Nor/PCT/Fat) and 4 form-factor filter chips (oil/aq/oral/topical) on the performance-library face. Rebucket 15 existing entries into the new taxonomy. No new entry content. Ship as `v0.16-perf-arch`.

**Architecture:** New `subCategories` + `subSections` + `formFactors` arrays on `performanceLibrary`. New `PerformanceCategoryCards.jsx` (3+2 grid) + `FormFactorChipRow.jsx` (4 toggle chips). `LibraryGallery.jsx` gets a perf-only branch that swaps the TOP 10 block for the CategoryCards and adds the FormFactorChipRow under the search input. Click on a CategoryCard auto-applies the subCategory filter chip and smooth-scrolls to the search input. Other 3 libraries (peptide/nootropic/pharma) are untouched.

**Tech Stack:** React 18, Vite 5, Tailwind 3, lucide-react icons, framer-motion (already used). No new dependencies. Validation via `scripts/validate-library-meta.mjs` (Node ESM script), build via `npm run build` (includes validator), smoke-test via `npm run dev`.

**Reference spec:** `docs/superpowers/specs/2026-05-19-performance-library-restructure.md`

---

## File Structure

**Create:**
- `src/components/library/PerformanceCategoryCards.jsx` — 3+2 grid of 5 CategoryCards. Pure presentational, gets data via props.
- `src/components/library/FormFactorChipRow.jsx` — Horizontal flex-row of 4 multi-select toggle chips. Controlled component.

**Modify:**
- `src/data/libraries/performance/categories.js` — Replace 6 use-categories with 5 chemistry-classes; replace `PERFORMANCE_CATEGORIES` use-id-array map with `PERFORMANCE_SUB_CATEGORIES` single-id map; export new `SUB_SECTIONS` map.
- `src/data/libraries/performance/index.js` — Import `FORM_FACTORS` from new module; add `subSections` + `formFactors` fields to `performanceLibrary` export; update all 15 `LIBRARY_ENTRY_META` records with `subCategory` + optional `subSection` + `formFactors`; remove `TOP_ENTRY_IDS` array + `topEntries` library-level field.
- `src/data/libraries/performance/formFactors.js` — NEW small module exporting `FORM_FACTORS` array (kept separate so the categories module stays focused on taxonomy).
- `src/data/libraries/shared/researchLevel.js` — No change (the existing perf entries already have `tier` in meta — sort still works).
- `src/components/LibraryGallery.jsx` — Add perf-only conditional rendering branch for the TOP 10 zone (swap to CategoryCards), add FormFactorChipRow under the search input, extend filter logic to AND-combine new subCategory + formFactors state with the existing search/level filters. Remove the existing "TOP 10 grid" rendering branch from the perf-face path.
- `src/i18n/uiStrings-hu.js` / `uiStrings-en.js` / `uiStrings-pl.js` — Add `perf.cat.{dht,test,19nor,pct,fat}.{name,sub}`, `perf.formFactor.{title,oil,aq,oral,topical}`, `perf.cat.entryCount`, `perf.filter.subCategory.active`.
- `scripts/validate-library-meta.mjs` — Add Sub-Task 1 validation block: subCategory required + valid, subSection optional + valid if present, formFactors required (min 1, valid IDs, no dupes), 5 expected subCategories present in library export. Continue to honor existing Lab Terminal hard-fail + Phase C variant checks.

**Untouched (verify no regression):**
- `src/components/library/EntryDetail.jsx` (entry detail page — unchanged)
- `src/components/library/cube-nav/*` (cube navigation — unchanged)
- `src/components/library/EntryImage.jsx` (image rendering — unchanged)
- `src/data/libraries/{peptides,nootropics,pharmaceutical}/*` (other libraries — unchanged)

---

## Task 1: Replace `performance/categories.js` content with new taxonomy

**Files:**
- Modify: `src/data/libraries/performance/categories.js` (rewrite)

- [ ] **Step 1: Read the current file to capture exact entry IDs in the map**

Run: read `src/data/libraries/performance/categories.js`
Note the 15 entry IDs (`testosterone-info`, `trenbolone-info`, `anavar-info`, `superdrol`, `ephedrine`, `yohimbine`, `clenbuterol`, `albuterol`, `winstrol-info`, `nandrolone-info`, `dianabol-info`, `methylstenbolone`, `hgh-info`, `epo-info`, `dnp-info`).

- [ ] **Step 2: Rewrite the file with the new 5-class taxonomy + sub-sections + per-entry subCategory map**

Replace the entire file contents with:

```js
// Performance library — 5 chemistry-based sub-categories per Sub-Task 1 of the
// 2026-05-19 perf-restructure mega-phase. Replaces the previous 6 use-category
// taxonomy (Prohormonok, AAS-info, Stimulánsok, Növekedés és Helyreállítás,
// Bronchodilatátorok, Doppingok). The new taxonomy maps directly to the HTML
// reference at tmp/Szteroid & PED táblázat.html.

// Each subCategory exposes a stable id, accent color (HTML reference), and HU/EN/PL labels.
export const CATEGORIES = [
  {
    id: 'dht',
    accent: '#7F77DD',
    label: { hu: 'DHT-derivátumok',          en: 'DHT derivatives',          pl: 'Pochodne DHT' },
    sub:   { hu: 'Dihydrotestosteron alap',   en: 'Dihydrotestosterone base', pl: 'Baza dihydrotestosteronu' },
  },
  {
    id: 'test',
    accent: '#1D9E75',
    label: { hu: 'Testosteron-derivátumok',   en: 'Testosterone derivatives', pl: 'Pochodne testosteronu' },
    sub:   { hu: '19-carbon androgén alap',   en: '19-carbon androgen base',  pl: 'Baza 19-węglowych androgenów' },
  },
  {
    id: '19nor',
    accent: '#D85A30',
    label: { hu: '19-Nortestosteron',         en: '19-Nortestosterone',       pl: '19-Nortestosteron' },
    sub:   { hu: 'Nandrolon alap',            en: 'Nandrolone base',          pl: 'Baza nandrolonu' },
  },
  {
    id: 'pct',
    accent: '#D4537E',
    label: { hu: 'PCT & Fertilitás',          en: 'PCT & Fertility',          pl: 'PCT i płodność' },
    sub:   { hu: 'Tengelyhelyreállítás',      en: 'Axis recovery',            pl: 'Przywracanie osi' },
  },
  {
    id: 'fat',
    accent: '#BA7517',
    label: { hu: 'Zsírégetés & Stimulánsok',  en: 'Fat loss & Stimulants',    pl: 'Spalanie i stymulanty' },
    sub:   { hu: 'Metabolikus accelerátorok', en: 'Metabolic accelerators',   pl: 'Akceleratory metaboliczne' },
  },
]

// Sub-sections within each subCategory. Used by entry-meta `subSection` field
// to group entries within a category (e.g., DHT/Klasszikus vs DHT/Alap-Test).
// Sub-Task 1 ships these labels but only a subset of entries reference them;
// future sub-tasks (2-6) fill in the gaps as new entries land.
export const SUB_SECTIONS = {
  dht: [
    { id: 'klasszikus', label: { hu: 'Klasszikus DHT',                en: 'Classic DHT',                  pl: 'Klasyczne DHT' } },
    { id: 'alap-test',  label: { hu: 'Alap: Testosteron → DHT',       en: 'Base: Testosterone → DHT',     pl: 'Baza: Testosteron → DHT' } },
  ],
  test: [
    { id: '17a-alkyl',  label: { hu: 'C17α-alkylált (orális)',        en: 'C17α-alkylated (oral)',        pl: 'C17α-alkilowane (doustne)' } },
    { id: 'inj',        label: { hu: 'Injectables',                    en: 'Injectables',                  pl: 'Iniekcyjne' } },
    { id: 'synth',      label: { hu: 'Szintetikus androgének',         en: 'Synthetic androgens',          pl: 'Syntetyczne androgeny' } },
  ],
  '19nor': [
    { id: 'nandro',     label: { hu: 'Nandrolon észterei',             en: 'Nandrolone esters',            pl: 'Estry nandrolonu' } },
    { id: 'tren',       label: { hu: 'Trenbolon',                      en: 'Trenbolone',                   pl: 'Trenbolon' } },
    { id: 'progestin',  label: { hu: 'Progestinek / egyéb 19-nor',     en: 'Progestins / other 19-nor',    pl: 'Progestyny / inne 19-nor' } },
    { id: 'sarms',      label: { hu: 'SARMs',                          en: 'SARMs',                        pl: 'SARM-y' } },
  ],
  pct: [
    { id: 'serm',       label: { hu: 'SERMek',                         en: 'SERMs',                        pl: 'SERM-y' } },
    { id: 'gonad',      label: { hu: 'Gonadotropinok',                 en: 'Gonadotropins',                pl: 'Gonadotropiny' } },
    { id: 'ai',         label: { hu: 'Aromatáz-gátlók (AI)',           en: 'Aromatase inhibitors (AI)',    pl: 'Inhibitory aromatazy (AI)' } },
    { id: 'prolactin',  label: { hu: 'Prolaktin / dopamin',            en: 'Prolactin / dopamine',         pl: 'Prolaktyna / dopamina' } },
    { id: 'axis',       label: { hu: 'Hormonhelyre / tengelymodulálás',en: 'Hormone / axis modulation',    pl: 'Hormony / modulacja osi' } },
    { id: '5ar',        label: { hu: '5α-reduktáz gátlók',             en: '5α-reductase inhibitors',      pl: 'Inhibitory 5α-reduktazy' } },
  ],
  fat: [
    { id: 'beta',       label: { hu: 'Beta-agonisták',                 en: 'Beta-agonists',                pl: 'Beta-agoniści' } },
    { id: 'thyroid',    label: { hu: 'Tireoid hormonok',               en: 'Thyroid hormones',             pl: 'Hormony tarczycy' } },
    { id: 'stim',       label: { hu: 'Stimuláns stack-ek',             en: 'Stimulant stacks',             pl: 'Stosy stymulujące' } },
    { id: 'metabolic',  label: { hu: 'Metabolikus modulátorok',        en: 'Metabolic modulators',         pl: 'Modulatory metaboliczne' } },
    { id: 'mito',       label: { hu: 'Mitokondriális / peptid',        en: 'Mitochondrial / peptide',      pl: 'Mitochondrialne / peptydy' } },
    { id: 'gh-axis',    label: { hu: 'Inzulin / GH-tengely',           en: 'Insulin / GH axis',            pl: 'Oś insuliny / GH' } },
  ],
}

// Map: entry-id → { subCategory, subSection } per Sub-Task 1 rebucket of the 15
// existing entries. Sub-tasks 2-6 will populate this map for the 53 new entries.
// PERFORMANCE_CATEGORIES (use-array map) from the old taxonomy is removed.
export const PERFORMANCE_SUB_CATEGORIES = {
  'testosterone-info': { subCategory: 'dht',   subSection: 'alap-test'  },
  'trenbolone-info':   { subCategory: '19nor', subSection: 'tren'       },
  'anavar-info':       { subCategory: 'dht',   subSection: 'klasszikus' },
  'superdrol':         { subCategory: 'dht',   subSection: 'klasszikus' },
  'ephedrine':         { subCategory: 'fat',   subSection: 'stim'       },
  'yohimbine':         { subCategory: 'fat',   subSection: 'stim'       },
  'clenbuterol':       { subCategory: 'fat',   subSection: 'beta'       },
  'albuterol':         { subCategory: 'fat',   subSection: 'beta'       },
  'winstrol-info':     { subCategory: 'dht',   subSection: 'klasszikus' },
  'nandrolone-info':   { subCategory: '19nor', subSection: 'nandro'     },
  'dianabol-info':     { subCategory: 'test',  subSection: '17a-alkyl'  },
  'methylstenbolone':  { subCategory: 'dht',   subSection: 'klasszikus' },
  'hgh-info':          { subCategory: 'fat',   subSection: 'gh-axis'    },
  'epo-info':          { subCategory: 'fat',   subSection: 'gh-axis'    },
  'dnp-info':          { subCategory: 'fat',   subSection: 'mito'       },
}

export function getPerformanceSubCategory(entryId) {
  return PERFORMANCE_SUB_CATEGORIES[entryId] || null
}

// Back-compat shim — LibraryGallery's filter loop still calls
// library.entryCategoryMap[id] expecting an array of category-ids. Return a
// single-element array containing the subCategory id so the existing AND-logic
// (cats.includes(f)) keeps working without a parallel code path. The legacy
// multi-category mapping is gone; perf-entries belong to exactly one
// subCategory under the new taxonomy.
export const PERFORMANCE_CATEGORIES = Object.fromEntries(
  Object.entries(PERFORMANCE_SUB_CATEGORIES).map(([id, { subCategory }]) => [id, [subCategory]])
)

export function getPerformanceCategories(entryId) {
  return PERFORMANCE_CATEGORIES[entryId] || []
}
```

- [ ] **Step 3: Run the validator to verify the new file loads without syntax errors**

Run: `npm run validate:meta`
Expected: The validator will now fail with new errors about missing `subCategory` field on LIBRARY_ENTRY_META records — that's expected and gets fixed in Task 2. The category-file itself should load (no `SyntaxError`). If you see `SyntaxError` in the output, fix it before continuing.

- [ ] **Step 4: Commit Task 1**

```bash
git add src/data/libraries/performance/categories.js
git commit -m "feat(perf): replace 6 use-categories with 5 chemistry-class taxonomy (Sub-Task 1)"
```

---

## Task 2: Create `performance/formFactors.js` module

**Files:**
- Create: `src/data/libraries/performance/formFactors.js`

- [ ] **Step 1: Write the new module**

Create `src/data/libraries/performance/formFactors.js` with:

```js
// Performance library — 4 form-factor (route-of-administration) tags per
// Sub-Task 1 of the 2026-05-19 perf-restructure mega-phase. Kept in a separate
// module from categories.js so the taxonomy file stays focused.
//
// Each form-factor exposes a stable id, accent color (HTML reference), and
// HU/EN/PL label. Used by FormFactorChipRow as the multi-select chip list AND
// by entry-meta `formFactors: ['oral']` array field (validator-enforced).

export const FORM_FACTORS = [
  { id: 'oil',     color: '#BA7517', label: { hu: 'olajos',    en: 'oil-based', pl: 'olejowy'   } },
  { id: 'aq',      color: '#0F6E56', label: { hu: 'vizes',     en: 'aqueous',   pl: 'wodny'     } },
  { id: 'oral',    color: '#534889', label: { hu: 'orális',    en: 'oral',      pl: 'doustny'   } },
  { id: 'topical', color: '#72243E', label: { hu: 'topikális', en: 'topical',   pl: 'miejscowy' } },
]

export const FORM_FACTOR_IDS = new Set(FORM_FACTORS.map(f => f.id))

export function isFormFactorId(id) {
  return FORM_FACTOR_IDS.has(id)
}
```

- [ ] **Step 2: Smoke-import in a one-line Node test to confirm the module loads**

Run: `node -e "import('./src/data/libraries/performance/formFactors.js').then(m => console.log('OK', m.FORM_FACTORS.length))"`
Expected: `OK 4`

- [ ] **Step 3: Commit Task 2**

```bash
git add src/data/libraries/performance/formFactors.js
git commit -m "feat(perf): add FORM_FACTORS module (oil/aq/oral/topical) for Sub-Task 1"
```

---

## Task 3: Update `performance/index.js` — meta records + library exports + removals

**Files:**
- Modify: `src/data/libraries/performance/index.js`

- [ ] **Step 1: Add subCategory + subSection + formFactors fields to each LIBRARY_ENTRY_META record**

For each of the 15 records in `LIBRARY_ENTRY_META`, add three new top-level keys after the existing `wadaStatus` field. Use exact values:

| id | subCategory | subSection | formFactors |
|---|---|---|---|
| testosterone-info | "dht" | "alap-test" | ["oil","aq"] |
| trenbolone-info | "19nor" | "tren" | ["oil"] |
| anavar-info | "dht" | "klasszikus" | ["oral"] |
| superdrol | "dht" | "klasszikus" | ["oral","oil"] |
| ephedrine | "fat" | "stim" | ["oral"] |
| yohimbine | "fat" | "stim" | ["oral"] |
| clenbuterol | "fat" | "beta" | ["oral"] |
| albuterol | "fat" | "beta" | ["oral","aq"] |
| winstrol-info | "dht" | "klasszikus" | ["oral","aq"] |
| nandrolone-info | "19nor" | "nandro" | ["oil"] |
| dianabol-info | "test" | "17a-alkyl" | ["oral","oil"] |
| methylstenbolone | "dht" | "klasszikus" | ["oral"] |
| hgh-info | "fat" | "gh-axis" | ["aq"] |
| epo-info | "fat" | "gh-axis" | ["aq"] |
| dnp-info | "fat" | "mito" | ["oral"] |

Example (Anavar):

```js
{
  "id": "anavar-info",
  "name": "Anavar (Oxandrolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": { /* unchanged HU/EN/PL */ },
  "tier": 4,
  "wadaStatus": "banned",
  "subCategory": "dht",
  "subSection": "klasszikus",
  "formFactors": ["oral"]
},
```

**Important:** Use the Edit tool with `replace_all: false` and one Edit per entry, OR write a Node script that programmatically inserts the fields. Do NOT use Edit-tool for bulk text replacement on shortDesc fields — they contain curly quotes and the Edit tool can corrupt them (see `[[feedback_edit_tool_quote_corruption]]`). The safe pattern is one Edit per `wadaStatus` line, anchoring on the unique `"id": "<entryid>"` field above it for uniqueness.

Sample Edit (for albuterol — note the `},\n {` boundary makes the old_string unique per entry):

```
old_string:
    "id": "albuterol",
    "name": "Albuterol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "FDA-approved szelektív β2-agonist asztma-Rx (Ventolin). Rövidebb felezésű, biztonságosabb Clenbuterol-alternatíva.",
      "en": "FDA-approved selective β2-agonist asthma Rx (Ventolin). Shorter half-life, safer Clenbuterol alternative.",
      "pl": "Selektywny agonista β2 dla astmy zatwierdzony przez FDA (Ventolin). Krótszy okres półtrwania, bezpieczniejsza alternatywa."
    },
    "tier": 5,
    "wadaStatus": "monitored"
  },

new_string:
    "id": "albuterol",
    "name": "Albuterol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "FDA-approved szelektív β2-agonist asztma-Rx (Ventolin). Rövidebb felezésű, biztonságosabb Clenbuterol-alternatíva.",
      "en": "FDA-approved selective β2-agonist asthma Rx (Ventolin). Shorter half-life, safer Clenbuterol alternative.",
      "pl": "Selektywny agonista β2 dla astmy zatwierdzony przez FDA (Ventolin). Krótszy okres półtrwania, bezpieczniejsza alternatywa."
    },
    "tier": 5,
    "wadaStatus": "monitored",
    "subCategory": "fat",
    "subSection": "beta",
    "formFactors": ["oral", "aq"]
  },
```

Repeat the same anchored pattern for the other 14 entries.

- [ ] **Step 2: Remove `TOP_ENTRY_IDS` array + `topEntries` library-field**

Delete the entire `export const TOP_ENTRY_IDS = [...]` block (around line 225-236).

In the `performanceLibrary` export, remove the line `topEntries: TOP_ENTRY_IDS,`.

Replace `export { CATEGORIES, PERFORMANCE_CATEGORIES, getPerformanceCategories, getResearchLevel, EFFECT_CATEGORIES }` (the last line of file) with:

```js
export { CATEGORIES, PERFORMANCE_CATEGORIES, PERFORMANCE_SUB_CATEGORIES, SUB_SECTIONS, getPerformanceCategories, getPerformanceSubCategory, getResearchLevel, EFFECT_CATEGORIES, FORM_FACTORS }
```

- [ ] **Step 3: Add `subCategories`, `subSections`, `formFactors` to the library export**

In the `performanceLibrary` object (around line 238-310), add three new fields after `categories: CATEGORIES,`:

```js
  subCategories: CATEGORIES,           // alias — chemistry-class is now the primary taxonomy
  subSections: SUB_SECTIONS,
  formFactors: FORM_FACTORS,
```

And add the imports at the top of the file (after the existing `import` block):

```js
import { CATEGORIES, PERFORMANCE_CATEGORIES, PERFORMANCE_SUB_CATEGORIES, SUB_SECTIONS, getPerformanceCategories, getPerformanceSubCategory } from './categories.js'
import { FORM_FACTORS } from './formFactors.js'
```

(Replace the existing `import { CATEGORIES, PERFORMANCE_CATEGORIES, getPerformanceCategories } from './categories.js'` with the line above.)

- [ ] **Step 4: Verify no stray `topEntries` references remain in the file**

Run: `grep -n "topEntries\|TOP_ENTRY_IDS" src/data/libraries/performance/index.js`
Expected: empty output (no matches)

- [ ] **Step 5: Run the validator — must PASS**

Run: `npm run validate:meta`
Expected: `✅ performance: 15 entries validated` (and same for other libs). If the validator complains about a missing field on an entry, fix the corresponding LIBRARY_ENTRY_META record. If you see "TypeError: Cannot read properties of undefined" — that's a downstream consumer (probably LibraryGallery accessing `library.topEntries`); leave it for Task 6 to fix.

- [ ] **Step 6: Try the build — expected to fail at LibraryGallery (consumer of `topEntries`)**

Run: `npm run build`
Expected: Either a runtime crash about `topEntries` undefined, or the build succeeds but `library.topEntries.map` fails at SSR. **Either is fine** — this proves the consumer needs the Task 6 update. Note the exact error in your terminal scratchpad; you'll reference it during Task 6 verification.

- [ ] **Step 7: Commit Task 3**

```bash
git add src/data/libraries/performance/index.js
git commit -m "feat(perf): rebucket 15 entries into 5 chemistry subCategories + add formFactors meta (Sub-Task 1)"
```

---

## Task 4: Extend validator with subCategory + subSection + formFactors checks

**Files:**
- Modify: `scripts/validate-library-meta.mjs`

- [ ] **Step 1: Add subCategory + subSection + formFactors parity check block**

Insert the new validation block AFTER the existing Phase C variant validation block (after line 231 — right before the `console.log(\`✅ ${libId}: ${meta.length} entries validated\`)` line).

Code to insert:

```js
  // Sub-Task 1 (2026-05-19 perf-restructure) — performance library only:
  // subCategory required + valid (must match one of library.subCategories[].id),
  // subSection optional + valid (must match library.subSections[subCategory][].id),
  // formFactors required (array of valid IDs, min 1, no duplicates), and
  // FORM_FACTORS allow-list comes from the library's own formFactors export.
  if (libId === 'performance') {
    const libCats = (libExport?.subCategories || []).map(c => c.id)
    const subSectionMap = libExport?.subSections || {}
    const allowedFormFactors = new Set((libExport?.formFactors || []).map(f => f.id))

    if (libCats.length !== 5) {
      console.error(`❌ ${libId}: expected 5 subCategories, got ${libCats.length}`)
      errors++
    } else {
      const expected = ['dht', 'test', '19nor', 'pct', 'fat']
      for (const exp of expected) {
        if (!libCats.includes(exp)) {
          console.error(`❌ ${libId}: missing required subCategory "${exp}"`)
          errors++
        }
      }
    }

    if (allowedFormFactors.size === 0) {
      console.error(`❌ ${libId}: library.formFactors export is empty or missing`)
      errors++
    }

    for (const m of meta) {
      // subCategory required
      if (!m.subCategory) {
        console.error(`❌ ${libId}/${m.id}: missing required field "subCategory"`)
        errors++
      } else if (!libCats.includes(m.subCategory)) {
        console.error(`❌ ${libId}/${m.id}: subCategory "${m.subCategory}" not in library.subCategories`)
        errors++
      }

      // subSection optional but must be valid if present
      if (m.subSection !== undefined) {
        const validSections = (subSectionMap[m.subCategory] || []).map(s => s.id)
        if (!validSections.includes(m.subSection)) {
          console.error(`❌ ${libId}/${m.id}: subSection "${m.subSection}" not valid for subCategory "${m.subCategory}" (allowed: ${validSections.join(',')})`)
          errors++
        }
      }

      // formFactors required, array of valid IDs, min 1, no duplicates
      if (!Array.isArray(m.formFactors)) {
        console.error(`❌ ${libId}/${m.id}: missing required field "formFactors" (must be array)`)
        errors++
      } else if (m.formFactors.length === 0) {
        console.error(`❌ ${libId}/${m.id}: formFactors array is empty (need ≥1)`)
        errors++
      } else {
        const seen = new Set()
        for (const ff of m.formFactors) {
          if (!allowedFormFactors.has(ff)) {
            console.error(`❌ ${libId}/${m.id}: formFactor "${ff}" not in library.formFactors`)
            errors++
          }
          if (seen.has(ff)) {
            console.error(`❌ ${libId}/${m.id}: duplicate formFactor "${ff}"`)
            errors++
          }
          seen.add(ff)
        }
      }
    }
  }
```

- [ ] **Step 2: Run the validator — must PASS with the new checks active**

Run: `npm run validate:meta`
Expected: `✅ performance: 15 entries validated` AND the new Sub-Task 1 block does not log any errors. If it logs an error like `❌ performance/yohimbine: missing required field "subCategory"`, you skipped that entry in Task 3 — go back and add it.

- [ ] **Step 3: Negative-test the validator — temporarily break one entry and confirm the validator catches it**

Modify `src/data/libraries/performance/index.js`: change `albuterol`'s `formFactors: ["oral","aq"]` temporarily to `formFactors: ["oral","invalid-id"]`.
Run: `npm run validate:meta`
Expected: `❌ performance/albuterol: formFactor "invalid-id" not in library.formFactors`
Restore: change back to `["oral","aq"]`.
Re-run: `npm run validate:meta`
Expected: PASS again.

- [ ] **Step 4: Commit Task 4**

```bash
git add scripts/validate-library-meta.mjs
git commit -m "feat(validator): subCategory + subSection + formFactors parity checks for perf-library (Sub-Task 1)"
```

---

## Task 5: Add i18n keys for category cards + form-factor chips

**Files:**
- Modify: `src/i18n/uiStrings-hu.js`
- Modify: `src/i18n/uiStrings-en.js`
- Modify: `src/i18n/uiStrings-pl.js`

- [ ] **Step 1: Add new keys to `uiStrings-hu.js`**

Find the existing `"gal.*"` cluster (around line 28-47) and add the following keys at the END of the cluster (right before the next semantic cluster like `"theme.*"`). Use Edit-tool, anchoring on the unique line just before the insertion point.

Keys to add (HU):

```js
  "perf.cat.dht.name": "DHT-derivátumok",
  "perf.cat.dht.sub": "Dihydrotestosteron alap",
  "perf.cat.test.name": "Testosteron-derivátumok",
  "perf.cat.test.sub": "19-carbon androgén alap",
  "perf.cat.19nor.name": "19-Nortestosteron",
  "perf.cat.19nor.sub": "Nandrolon alap",
  "perf.cat.pct.name": "PCT & Fertilitás",
  "perf.cat.pct.sub": "Tengelyhelyreállítás",
  "perf.cat.fat.name": "Zsírégetés & Stimulánsok",
  "perf.cat.fat.sub": "Metabolikus accelerátorok",
  "perf.cat.entryCount": "{n} hatóanyag →",
  "perf.cat.empty": "Nincs még hatóanyag ebben a kategóriában.",
  "perf.formFactor.title": "Beadási mód",
  "perf.formFactor.oil": "olajos",
  "perf.formFactor.aq": "vizes",
  "perf.formFactor.oral": "orális",
  "perf.formFactor.topical": "topikális",
  "perf.filter.subCategory.active": "Aktív szűrő:",
```

**Note:** The `name` + `sub` strings are duplicated between this file and `categories.js` intentionally — `categories.js` is the source-of-truth for in-tile chip rendering (which uses `library.tr(cat.label)`), while `uiStrings-*.js` provides the labels for the CategoryCards component which doesn't have a `library.tr()` context in some places (it gets them via `t()`). Keep them in sync when edits happen later.

- [ ] **Step 2: Add corresponding keys to `uiStrings-en.js`**

```js
  "perf.cat.dht.name": "DHT derivatives",
  "perf.cat.dht.sub": "Dihydrotestosterone base",
  "perf.cat.test.name": "Testosterone derivatives",
  "perf.cat.test.sub": "19-carbon androgen base",
  "perf.cat.19nor.name": "19-Nortestosterone",
  "perf.cat.19nor.sub": "Nandrolone base",
  "perf.cat.pct.name": "PCT & Fertility",
  "perf.cat.pct.sub": "Axis recovery",
  "perf.cat.fat.name": "Fat loss & Stimulants",
  "perf.cat.fat.sub": "Metabolic accelerators",
  "perf.cat.entryCount": "{n} compounds →",
  "perf.cat.empty": "No compounds in this category yet.",
  "perf.formFactor.title": "Form of administration",
  "perf.formFactor.oil": "oil-based",
  "perf.formFactor.aq": "aqueous",
  "perf.formFactor.oral": "oral",
  "perf.formFactor.topical": "topical",
  "perf.filter.subCategory.active": "Active filter:",
```

- [ ] **Step 3: Add corresponding keys to `uiStrings-pl.js`**

```js
  "perf.cat.dht.name": "Pochodne DHT",
  "perf.cat.dht.sub": "Baza dihydrotestosteronu",
  "perf.cat.test.name": "Pochodne testosteronu",
  "perf.cat.test.sub": "Baza 19-węglowych androgenów",
  "perf.cat.19nor.name": "19-Nortestosteron",
  "perf.cat.19nor.sub": "Baza nandrolonu",
  "perf.cat.pct.name": "PCT i płodność",
  "perf.cat.pct.sub": "Przywracanie osi",
  "perf.cat.fat.name": "Spalanie i stymulanty",
  "perf.cat.fat.sub": "Akceleratory metaboliczne",
  "perf.cat.entryCount": "{n} substancji →",
  "perf.cat.empty": "Brak substancji w tej kategorii.",
  "perf.formFactor.title": "Forma podania",
  "perf.formFactor.oil": "olejowy",
  "perf.formFactor.aq": "wodny",
  "perf.formFactor.oral": "doustny",
  "perf.formFactor.topical": "miejscowy",
  "perf.filter.subCategory.active": "Aktywny filtr:",
```

- [ ] **Step 4: Verify all 3 files have parity — same 18 keys**

Run: `node -e "const hu=require('./src/i18n/uiStrings-hu.js'); const en=require('./src/i18n/uiStrings-en.js'); const pl=require('./src/i18n/uiStrings-pl.js'); const ks=k=>Object.keys(k).filter(x=>x.startsWith('perf.')).length; console.log('hu', ks(hu.UI_HU), 'en', ks(en.UI_EN), 'pl', ks(pl.UI_PL));"`

If the require shim doesn't work because of ESM, use this instead:

```bash
node --input-type=module -e "import('./src/i18n/uiStrings-hu.js').then(m=>console.log('hu perf.* keys:', Object.keys(m.UI_HU).filter(k=>k.startsWith('perf.')).length))"
node --input-type=module -e "import('./src/i18n/uiStrings-en.js').then(m=>console.log('en perf.* keys:', Object.keys(m.UI_EN).filter(k=>k.startsWith('perf.')).length))"
node --input-type=module -e "import('./src/i18n/uiStrings-pl.js').then(m=>console.log('pl perf.* keys:', Object.keys(m.UI_PL).filter(k=>k.startsWith('perf.')).length))"
```

Expected: `18` for each of the 3 files.

- [ ] **Step 5: Commit Task 5**

```bash
git add src/i18n/uiStrings-hu.js src/i18n/uiStrings-en.js src/i18n/uiStrings-pl.js
git commit -m "feat(i18n): add perf.cat.* + perf.formFactor.* keys HU/EN/PL (Sub-Task 1)"
```

---

## Task 6: Create `PerformanceCategoryCards.jsx` component

**Files:**
- Create: `src/components/library/PerformanceCategoryCards.jsx`

- [ ] **Step 1: Write the component**

Create `src/components/library/PerformanceCategoryCards.jsx`:

```jsx
import { memo } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

// Performance-library-only CategoryCard grid: 3+2 layout.
// Replaces the TOP 10 block on the perf face. Click → propagates the
// subCategory id up to LibraryGallery, which sets filter state + scrolls to
// the search input.
//
// Pure presentational. No internal state. Counts are derived from the live
// library.meta + subCategory field per Sub-Task 1 rebucket.
//
// Layout: 3-column grid for DHT/Test/19-Nor row 1, 2-column grid for PCT/Fat
// row 2. On mobile (< md), each grid reflows to single-column.
const PerformanceCategoryCards = memo(function PerformanceCategoryCards({
  onCategorySelect,
  activeCategoryId,
}) {
  const { t, tr } = useLang()
  const { library } = useLibrary()
  const subCategories = library?.subCategories || []
  const meta = library?.meta || []

  if (subCategories.length === 0) return null

  const counts = subCategories.reduce((acc, c) => {
    acc[c.id] = meta.filter(m => m.subCategory === c.id).length
    return acc
  }, {})

  const order1 = ['dht', 'test', '19nor']
  const order2 = ['pct', 'fat']
  const row1 = order1.map(id => subCategories.find(c => c.id === id)).filter(Boolean)
  const row2 = order2.map(id => subCategories.find(c => c.id === id)).filter(Boolean)

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {row1.map(cat => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            count={counts[cat.id]}
            active={activeCategoryId === cat.id}
            t={t}
            tr={tr}
            onClick={() => onCategorySelect(cat.id)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {row2.map(cat => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            count={counts[cat.id]}
            active={activeCategoryId === cat.id}
            t={t}
            tr={tr}
            onClick={() => onCategorySelect(cat.id)}
          />
        ))}
      </div>
    </div>
  )
})

function CategoryCard({ cat, count, active, t, tr, onClick }) {
  // Darker shade for gradient bottom-right: shave 25% off each RGB channel.
  const dark = darken(cat.accent, 0.25)
  const countLabel = (t('perf.cat.entryCount') || '{n} →').replace('{n}', count)

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative text-left rounded-2xl p-5 min-h-[110px] flex flex-col justify-between text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${cat.accent} 0%, ${dark} 100%)`,
        outline: active ? `2px solid rgba(255,255,255,0.9)` : 'none',
        outlineOffset: active ? '2px' : '0',
        boxShadow: active
          ? `0 0 24px ${cat.accent}66, 0 0 0 1px rgba(255,255,255,0.15)`
          : `0 1px 2px rgba(0,0,0,0.15), 0 8px 22px -16px ${cat.accent}55`,
      }}
      aria-pressed={active}
    >
      <div>
        <div className="font-bold text-[15px] leading-tight">
          {tr(cat.label)}
        </div>
        <div className="text-[10px] mt-1 opacity-85 leading-tight">
          {tr(cat.sub)}
        </div>
      </div>
      <div className="text-[10px] opacity-75 font-medium pt-2">
        {countLabel}
      </div>
    </button>
  )
}

function darken(hex, amount) {
  const h = hex.replace('#', '')
  const r = Math.max(0, parseInt(h.slice(0, 2), 16) * (1 - amount))
  const g = Math.max(0, parseInt(h.slice(2, 4), 16) * (1 - amount))
  const b = Math.max(0, parseInt(h.slice(4, 6), 16) * (1 - amount))
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
}

export default PerformanceCategoryCards
```

- [ ] **Step 2: Smoke-import the component to confirm no syntax error**

Run: `node --input-type=module -e "import('./src/components/library/PerformanceCategoryCards.jsx').then(()=>console.log('OK')).catch(e=>{console.error('FAIL', e.message); process.exit(1)})"`
Expected: `FAIL Unknown file extension ".jsx"` — that's fine, the file is valid; Node can't import JSX directly without Vite. The smoke proves the module-resolution path is correct. The real verification is in Task 8 (build + dev).

- [ ] **Step 3: Commit Task 6**

```bash
git add src/components/library/PerformanceCategoryCards.jsx
git commit -m "feat(perf): add PerformanceCategoryCards component (3+2 grid, Sub-Task 1)"
```

---

## Task 7: Create `FormFactorChipRow.jsx` component

**Files:**
- Create: `src/components/library/FormFactorChipRow.jsx`

- [ ] **Step 1: Write the component**

Create `src/components/library/FormFactorChipRow.jsx`:

```jsx
import { memo } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

// Performance-library-only multi-select chip row for form-factor (route of
// administration) filtering. Chips toggle independently; AND-combined with
// subCategory filter in LibraryGallery's filteredAll memo.
//
// Controlled component — owner is LibraryGallery.
const FormFactorChipRow = memo(function FormFactorChipRow({
  selectedFormFactors,
  onToggle,
}) {
  const { t, tr } = useLang()
  const { library } = useLibrary()
  const formFactors = library?.formFactors || []

  if (formFactors.length === 0) return null

  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <span
        className="text-[10px] tracking-[0.25em] uppercase font-semibold"
        style={{ color: 'var(--text-fainter)' }}
      >
        {t('perf.formFactor.title')}:
      </span>
      <div className="flex flex-wrap gap-2">
        {formFactors.map(ff => {
          const active = selectedFormFactors.includes(ff.id)
          return (
            <button
              key={ff.id}
              type="button"
              onClick={() => onToggle(ff.id)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
              style={{
                background: active ? `${ff.color}26` : 'var(--tint-row)',
                border: `1px solid ${active ? ff.color : 'var(--border-soft)'}`,
                color: active ? ff.color : 'var(--text-muted)',
                boxShadow: active ? `0 0 10px ${ff.color}44` : 'none',
              }}
              aria-pressed={active}
            >
              {tr(ff.label)}
            </button>
          )
        })}
      </div>
    </div>
  )
})

export default FormFactorChipRow
```

- [ ] **Step 2: Commit Task 7**

```bash
git add src/components/library/FormFactorChipRow.jsx
git commit -m "feat(perf): add FormFactorChipRow component (4 toggle chips, Sub-Task 1)"
```

---

## Task 8: Wire perf-only branch into `LibraryGallery.jsx`

**Files:**
- Modify: `src/components/LibraryGallery.jsx`

- [ ] **Step 1: Add imports for the two new components**

In the existing import block at the top of the file (around line 1-13), add after the `import DotsIndicator` line:

```js
import PerformanceCategoryCards from './library/PerformanceCategoryCards'
import FormFactorChipRow from './library/FormFactorChipRow'
```

- [ ] **Step 2: Add new state + handler for perf subCategory + formFactors**

Inside the `LibraryGallery` function (around line 270, after the existing `useState` calls), add:

```js
 // Sub-Task 1 (perf-restructure) — perf-only filter state.
 // subCategory is single-select (one chip active at a time); formFactors is
 // multi-select (AND-combined). Both apply only when library.id === 'performance'.
 const [selectedSubCategory, setSelectedSubCategory] = useState(null)
 const [selectedFormFactors, setSelectedFormFactors] = useState([])

 const searchInputRef = useRef(null)

 const handleSubCategoryClick = useCallback((id) => {
  setSelectedSubCategory(prev => (prev === id ? null : id))
  setExpanded(true)
  setHasOpened(true)
  // Wait one frame for the accordion to start expanding, then scroll.
  setTimeout(() => {
   searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 50)
 }, [])

 const toggleFormFactor = useCallback((id) => {
  setSelectedFormFactors(prev =>
   prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
  )
 }, [])

 const clearPerfFilters = useCallback(() => {
  setSelectedSubCategory(null)
  setSelectedFormFactors([])
 }, [])
```

- [ ] **Step 3: Extend the `filteredAll` useMemo to AND-filter on subCategory + formFactors (perf-only)**

Locate the existing `filteredAll` useMemo (around line 302-322). Inside the `.filter()` callback, after the existing `levelFilters` block, add:

```js
    // Sub-Task 1 — perf-only chemistry-class subCategory + form-factor filters.
    if (library.id === 'performance') {
     if (selectedSubCategory && p.subCategory !== selectedSubCategory) return false
     if (selectedFormFactors.length > 0) {
      const factors = p.formFactors || []
      const allMatch = selectedFormFactors.every(f => factors.includes(f))
      if (!allMatch) return false
     }
    }
```

Also extend the dependency array of the useMemo: append `, selectedSubCategory, selectedFormFactors` to the existing dependency list.

- [ ] **Step 4: Add the searchInputRef to the existing search `<input>` element**

Locate the existing `<input type="text"` (around line 584-596). Add `ref={searchInputRef}` to the input element.

- [ ] **Step 5: Conditionally render `PerformanceCategoryCards` instead of TOP 10 for perf-library**

Locate the existing TOP 10 block — the `<div className="mb-6 flex items-center gap-3">` divider + `<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">` tile-grid (around lines 479-502). Wrap them in a conditional:

```jsx
 {library.id === 'performance' ? (
  <PerformanceCategoryCards
   onCategorySelect={handleSubCategoryClick}
   activeCategoryId={selectedSubCategory}
  />
 ) : (
  <>
   {/* ── Block A: Top 10 ─────────────────────────────────────────────── */}
   <div className="mb-6 flex items-center gap-3">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
    <h3 className="text-[#818cf8] text-[11px] font-semibold tracking-[0.3em] uppercase flex items-center gap-2">
     <Star size={11} strokeWidth={2.5} className="text-[#818cf8]" fill="currentColor" />
     {library.labels?.topTitle ? tr(library.labels.topTitle) : t('gal.top10.title')}
    </h3>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
   </div>

   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
    {top10.map(peptide => (
     <PeptideTile
      key={peptide.id}
      library={library}
      peptide={peptide}
      featured
      onSelect={openEntry}
      t={t}
      tr={tr}
      lang={lang}
     />
    ))}
   </div>
  </>
 )}
```

**Important:** The `top10` useMemo (around line 296-299) accesses `library.topEntries` — for the perf library, `topEntries` is now undefined (removed in Task 3). Modify the `top10` useMemo to handle the undefined case:

```js
 const top10 = useMemo(
  () => (library.topEntries || []).map(id => metaList.find(p => p.id === id)).filter(Boolean),
  [library, metaList]
 )
```

- [ ] **Step 6: Render `FormFactorChipRow` inside the accordion, between the help-callout and the search-bar (perf-only)**

Locate the help callout `<div className="mb-5 p-5 sm:p-6 rounded-2xl flex flex-col …">` (around line 549-575). AFTER its closing `</div>` and BEFORE the `<div className="mb-4 flex flex-col lg:flex-row gap-3">` (search + sort + filter row), insert:

```jsx
 {library.id === 'performance' && (selectedSubCategory || selectedFormFactors.length > 0) && (
  <div className="mb-3 flex flex-wrap items-center gap-2">
   <span
    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
    style={{ color: 'var(--text-fainter)' }}
   >
    {t('perf.filter.subCategory.active')}
   </span>
   {selectedSubCategory && (() => {
    const cat = library.subCategories?.find(c => c.id === selectedSubCategory)
    if (!cat) return null
    return (
     <button
      type="button"
      onClick={() => setSelectedSubCategory(null)}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all"
      style={{
       background: `${cat.accent}26`,
       border: `1px solid ${cat.accent}`,
       color: '#fff',
      }}
     >
      {tr(cat.label)}
      <X size={11} />
     </button>
    )
   })()}
   {selectedFormFactors.map(ffId => {
    const ff = library.formFactors?.find(f => f.id === ffId)
    if (!ff) return null
    return (
     <button
      key={ffId}
      type="button"
      onClick={() => toggleFormFactor(ffId)}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all"
      style={{
       background: `${ff.color}26`,
       border: `1px solid ${ff.color}`,
       color: '#fff',
      }}
     >
      {tr(ff.label)}
      <X size={11} />
     </button>
    )
   })}
   <button
    type="button"
    onClick={clearPerfFilters}
    className="text-[10px] tracking-wider uppercase"
    style={{ color: 'var(--text-muted)' }}
   >
    {t('gal.filter.clear')}
   </button>
  </div>
 )}

 {library.id === 'performance' && (
  <FormFactorChipRow
   selectedFormFactors={selectedFormFactors}
   onToggle={toggleFormFactor}
  />
 )}
```

- [ ] **Step 7: Build + smoke-test — the full UI must render**

Run: `npm run build`
Expected: `✓ built` with no errors. Bundle output around 600 KiB (similar to current).

Run: `npm run dev`
Open: `http://localhost:5173` (or the Vite-printed URL).

Smoke checklist:
1. Hero/Education page loads, no console errors.
2. Cube nav appears; click DOTS to navigate between libraries.
3. **Peptide face**: TOP 10 (10 peptide tiles with star-badge) renders ABOVE the accordion. Same as before — no regression.
4. **Nootropic face**: same TOP 10 + accordion pattern. No regression.
5. **Pharmaceutical face**: same. No regression.
6. **Performance face**:
   - 5 CategoryCards render in 3+2 grid (DHT/Test/19-Nor top, PCT/Fat bottom)
   - DHT count = 5, Test count = 1, 19-Nor count = 2, PCT count = 0, Fat count = 7
   - No TOP 10 / no star-badge
   - "Összes Teljesítményfokozó" accordion below
   - Click "DHT-derivátumok" card → accordion expands (if not already), page smooth-scrolls to search input, an active-filter chip "DHT-derivátumok" appears with X button, only 5 entries display (anavar, superdrol, winstrol-info, methylstenbolone, testosterone-info... wait testosterone-info is `alap-test` subSection within DHT, count=5 ✓)
   - Click another card "Fat" → DHT chip swaps to Fat chip, 7 entries display
   - Click X on the active filter chip → all 15 entries display
   - Click form-factor chip "olajos" (oil) → 5 entries that have `oil` in their formFactors display (testosterone-info/trenbolone-info/superdrol/dianabol-info/nandrolone-info)
   - Combined: click "DHT" + "oral" → only entries that are DHT AND oral display (anavar/superdrol/winstrol-info/methylstenbolone — should be 4; testosterone-info has `[oil,aq]` no oral so excluded)
   - Click entry tile → entry detail opens correctly (existing behavior preserved)
7. Refresh the page on perf-face — filters reset to none, 5 CategoryCards display, no errors.

If any check fails, fix it and re-test. The most likely failure: TypeError because `library.subCategories` is undefined on a non-perf library. The components have early-return safety but the LibraryGallery branch may not — verify the `library.id === 'performance'` guard wraps every new render.

- [ ] **Step 8: Commit Task 8**

```bash
git add src/components/LibraryGallery.jsx
git commit -m "feat(perf): wire CategoryCards + FormFactorChipRow into LibraryGallery (Sub-Task 1)"
```

---

## Task 9: Final validation + tag + push

**Files:** (no file changes — verification + git operations only)

- [ ] **Step 1: Run validator standalone — must PASS**

Run: `npm run validate:meta`
Expected: `✅ peptides: 60 entries validated` / `✅ nootropics: 48 entries validated` / `✅ performance: 15 entries validated` / `✅ pharmaceutical: 21 entries validated` / `✅ All libraries validated.`

- [ ] **Step 2: Run full build — must PASS**

Run: `npm run build`
Expected: validator PASS + Vite build success. Bundle around 600 KiB main + small chunks per per-entry. No new warnings.

- [ ] **Step 3: Inspect git log for the sub-task**

Run: `git log --oneline -10`
Expected: 8 commits from Tasks 1-8, all prefixed `feat(perf):`, `feat(perf):`, `feat(validator):`, `feat(i18n):`, `feat(perf):`, `feat(perf):`, `feat(perf):`. The 9th commit is the prior `0899291 docs: brainstorm spec`.

- [ ] **Step 4: Verify working tree is clean**

Run: `git status`
Expected: `nothing to commit, working tree clean`. If anything is uncommitted, decide whether it should be part of Sub-Task 1 (commit it) or stashed (will likely indicate a missed step).

- [ ] **Step 5: Tag the checkpoint**

Run:
```bash
git tag -a v0.16-perf-arch -m "Performance restructure Sub-Task 1: architecture + 15-entry rebucket (no new content)"
```

- [ ] **Step 6: Push branch + tag to origin**

Run:
```bash
git push origin master
git push origin v0.16-perf-arch
```

Expected: Successful push. Vercel will auto-deploy the new master HEAD within ~3-5 minutes.

- [ ] **Step 7: Live smoke-check on Vercel**

Wait ~5 minutes for the Vercel deploy to land. Open `https://molekulax.vercel.app` (or the preview URL printed by Vercel) and repeat the smoke checklist from Task 8 Step 7 on the live build. Focus checks:
- Performance face renders 5 CategoryCards
- DHT card click filters to 5 entries
- Form-factor "oral" filters to oral-only entries
- Other 3 libraries (peptide/nootropic/pharma) unchanged
- Existing 15 entry deep-links still resolve (e.g., `/#entry/performance/anavar-info`)

- [ ] **Step 8: Done — handoff back to user**

Sub-Task 1 complete. Report to user: validator PASS, build PASS, tag `v0.16-perf-arch` pushed, live smoke OK. Ready for Sub-Task 2 (DHT-col content — 5 new entries) when user is ready.

---

## Verification summary

After all 9 tasks complete, you have:
- 5 new `subCategories` (DHT/Test/19-Nor/PCT/Fat) on `performanceLibrary` export
- 4 new `formFactors` (oil/aq/oral/topical) on `performanceLibrary` export
- 15 existing entries each tagged with `subCategory`, `subSection` (optional), `formFactors` array
- `TOP_ENTRY_IDS` removed from perf-library
- 5-card 3+2 grid replaces TOP 10 on perf-face
- 4-chip form-factor row appears in the accordion under search
- Click card → smooth-scroll to search + auto-applied filter chip
- AND-logic between subCategory + formFactor + existing search/level filters
- 3 other libraries (peptide/nootropic/pharma) unchanged
- Validator extended with subCategory/subSection/formFactors parity checks
- i18n keys `perf.cat.*` + `perf.formFactor.*` shipped HU/EN/PL
- Tag `v0.16-perf-arch` on master

**Out of scope (next sub-tasks):**
- Sub-Task 2 (`v0.17-perf-dht`): 5 new DHT entries (Masteron, Primobolan, Anadrol, Proviron, DHB) + variants on existing Test/Winstrol/Masteron/Primobolan
- Sub-Tasks 3-7: Test/19-Nor/PCT/Fat content + final image polish
