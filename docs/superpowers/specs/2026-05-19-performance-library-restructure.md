# Performance Library Restructure — Design Spec

**Date:** 2026-05-19
**Status:** Brainstorm completed, ready for implementation plan
**Scope:** Performance library full restructuring — 5 chemistry-based sub-categories, 3+2 CategoryCard grid replacing TOP 10, form-factor filter chips, ~53 new RICH entries added, 15 existing rebucketed.
**Roadmap context:** Post-roadmap-2026-05 mega-phase; will spawn new `MolekulaX_Roadmap_2026-06.md`.

---

## 1. Motivation

The current performance library is a flat 15-entry collection with a TOP 10 sticky-top section and an "Összes" accordion below. As the library grows to ~68 entries (covering AAS, SARMs, PCT compounds, fat-burners, stimulants, GH-axis peptides), this flat structure is no longer navigable. Users browsing performance compounds typically search by **chemistry class** (DHT-derivative vs Nandrolone-derivative vs SERM vs beta-agonist), not by popularity. The HTML reference at `tmp/Szteroid & PED táblázat.html` lays out the chemistry-based taxonomy used industry-wide.

This phase restructures the library around that taxonomy: 5 chemistry-class CategoryCards replace TOP 10, the existing "Összes" accordion stays unchanged (identical to peptide/nootropic/pharma libraries), and form-factor filtering (oil/aq/oral/topical) is added as a top-level multi-select chip-row.

---

## 2. Design decisions (user-approved during brainstorm)

1. **Scope:** HTML reference (~65 entries) + 3 existing non-HTML entries (methylstenbolone → DHT/Klasszikus, DNP → Fat/Mitokondriális, EPO → Fat/Inzulin-GH) — totalling **68 entries**.
2. **Esters/forms of same compound:** 1 entry + `variants[]` array per ester (Phase C leverage), NOT separate entries per ester. Applies to Trenbolone (A/E/Hex), Nandrolone (Deca/NPP), Testosterone (Prop/Enan/Cyp/Sus/Mix), Masteron (Prop/Enan), Primobolan (Ac-oral/Enan-oil), MENT (Ac/En × 2 cross-frames), Winstrol (oral/aq), Superdrol (oral/IM — already exists), Dianabol (oral/oil), Albuterol (oral/inhaled), L-Carnitine (oral/inj). **Total: 12 multi-variant entries.**
3. **Naming policy:** Brand-name primary + generic-name subtext (current pattern). Tile: "Anavar" / subtext: "Oxandrolone".
4. **Cross-listing strategy:** Separate entries per framing column (NOT shared with `secondaryCategories[]`). MENT cross-framed as Trestolone-test (synthetic-androgen frame) + MENT-19nor (progestin frame) = 2 entries. HGH-perf-doping + EPO-perf-doping + Tesamorelin-perf + Semaglutide-perf + Retatrutide-perf as separate perf-library entries from peptide-library counterparts. Cross-link via `related: [...]` field minimum.
5. **Content depth:** All entries RICH (Hero + Bento + QuickStart + Expectations + DosingPanel + QualityGrid + InteractionsOrbit + StudiesPanel + FAQ + Telegram + Disclaimer). No tier-based slim/rich split.
6. **Phase split:** Single mega-phase, internal sub-task checkpoints (`v0.16` → `v0.22`), final mega-PR.
7. **Layout — CategoryCard grid (top):** 3+2 grid. DHT/Test/19-Nor row 1, PCT/Fat row 2. Gradient backgrounds per HTML reference colors.
8. **Drill-down navigation:** NO separate drilldown view. CategoryCard click → smooth-scroll to existing "Összes Teljesítményfokozó" accordion + auto-applied filter chip. Identical to peptide/nootropic/pharma library navigation pattern.
9. **Tile-grid styling:** Reuses existing `PeptideTile` (already library-aware). Same visual layout: square image + accent gradient wash + tier-dot + tier-label + Felhasználás category-chip. WADA-badge + variant-chip stack top-right (Phase 5+C work preserved).
10. **Effects-tile section ("Teljesítményterületek"):** Unchanged — stays after CategoryCard+accordion, like the other 3 libraries.
11. **Form-factor filter:** Top-level chip-row under the search input, multi-select AND-logic combined with subCategory filter.

---

## 3. Data shape

### 3.1 Library-level additions (`src/data/libraries/performance/index.js`)

**Note:** All `pl: '...'` placeholders in the code samples below indicate Polish translations to be authored during implementation. Hungarian + English are baseline; Polish is derived per existing translation workflow (DeepL + manual review).

```js
export const SUB_CATEGORIES = [
  { id: 'dht',   name: { hu: 'DHT-derivátumok', en: 'DHT derivatives', pl: '...' },
    sub: { hu: 'Dihydrotestosteron alap', en: 'Dihydrotestosterone base', pl: '...' },
    accent: '#7F77DD' },
  { id: 'test',  name: { hu: 'Testosteron-derivátumok', en: 'Testosterone derivatives', pl: '...' },
    sub: { hu: '19-carbon androgén alap', en: '19-carbon androgen base', pl: '...' },
    accent: '#1D9E75' },
  { id: '19nor', name: { hu: '19-Nortestosteron', en: '19-Nortestosterone', pl: '...' },
    sub: { hu: 'Nandrolon alap', en: 'Nandrolone base', pl: '...' },
    accent: '#D85A30' },
  { id: 'pct',   name: { hu: 'PCT & Fertilitás', en: 'PCT & Fertility', pl: '...' },
    sub: { hu: 'Tengelyhelyreállítás', en: 'Axis recovery', pl: '...' },
    accent: '#D4537E' },
  { id: 'fat',   name: { hu: 'Zsírégetés & Stimulánsok', en: 'Fat loss & Stimulants', pl: '...' },
    sub: { hu: 'Metabolikus accelerátorok', en: 'Metabolic accelerators', pl: '...' },
    accent: '#BA7517' },
]

export const SUB_SECTIONS = {
  dht: [
    { id: 'klasszikus', label: { hu: 'Klasszikus DHT', en: 'Classic DHT', pl: '...' } },
    { id: 'alap-test',  label: { hu: 'Alap: Testosteron → DHT', en: 'Base: Testosterone → DHT', pl: '...' } },
  ],
  test: [
    { id: '17a-alkyl',  label: { hu: 'C17α-alkylált (orális)', en: 'C17α-alkylated (oral)', pl: '...' } },
    { id: 'inj',        label: { hu: 'Injectables', en: 'Injectables', pl: '...' } },
    { id: 'synth',      label: { hu: 'Szintetikus androgének', en: 'Synthetic androgens', pl: '...' } },
  ],
  '19nor': [
    { id: 'nandro',     label: { hu: 'Nandrolon észterei', en: 'Nandrolone esters', pl: '...' } },
    { id: 'tren',       label: { hu: 'Trenbolon', en: 'Trenbolone', pl: '...' } },
    { id: 'progestin',  label: { hu: 'Progestinek / egyéb 19-nor', en: 'Progestins / other 19-nor', pl: '...' } },
    { id: 'sarms',      label: { hu: 'SARMs', en: 'SARMs', pl: '...' } },
  ],
  pct: [
    { id: 'serm',       label: { hu: 'SERMek', en: 'SERMs', pl: '...' } },
    { id: 'gonad',      label: { hu: 'Gonadotropinok', en: 'Gonadotropins', pl: '...' } },
    { id: 'ai',         label: { hu: 'Aromatáz-gátlók (AI)', en: 'Aromatase inhibitors (AI)', pl: '...' } },
    { id: 'prolactin',  label: { hu: 'Prolaktin / dopamin', en: 'Prolactin / dopamine', pl: '...' } },
    { id: 'axis',       label: { hu: 'Hormonhelyre / tengelymodulálás', en: 'Hormone / axis modulation', pl: '...' } },
    { id: '5ar',        label: { hu: '5α-reduktáz gátlók', en: '5α-reductase inhibitors', pl: '...' } },
  ],
  fat: [
    { id: 'beta',       label: { hu: 'Beta-agonisták', en: 'Beta-agonists', pl: '...' } },
    { id: 'thyroid',    label: { hu: 'Tireoid hormonok', en: 'Thyroid hormones', pl: '...' } },
    { id: 'stim',       label: { hu: 'Stimuláns stack-ek', en: 'Stimulant stacks', pl: '...' } },
    { id: 'metabolic',  label: { hu: 'Metabolikus modulátorok', en: 'Metabolic modulators', pl: '...' } },
    { id: 'mito',       label: { hu: 'Mitokondriális / peptid', en: 'Mitochondrial / peptide', pl: '...' } },
    { id: 'gh-axis',    label: { hu: 'Inzulin / GH-tengely', en: 'Insulin / GH axis', pl: '...' } },
  ],
}

export const FORM_FACTORS = [
  { id: 'oil',     label: { hu: 'olajos', en: 'oil-based', pl: 'olejowy' },     color: '#BA7517' },
  { id: 'aq',      label: { hu: 'vizes', en: 'aqueous', pl: 'wodny' },          color: '#0F6E56' },
  { id: 'oral',    label: { hu: 'orális', en: 'oral', pl: 'doustny' },          color: '#534889' },
  { id: 'topical', label: { hu: 'topikális', en: 'topical', pl: 'miejscowy' },  color: '#72243E' },
]
```

`performanceLibrary` exports: `subCategories: SUB_CATEGORIES`, `subSections: SUB_SECTIONS`, `formFactors: FORM_FACTORS`.

### 3.2 Entry-meta additions (per `LIBRARY_ENTRY_META` entry)

```js
{
  id: 'anavar-info',
  name: 'Anavar (Oxandrolone)',
  // ... existing fields ...
  subCategory: 'dht',          // REQUIRED — one of SUB_CATEGORIES[].id
  subSection: 'klasszikus',    // OPTIONAL — one of SUB_SECTIONS[subCategory][].id
  formFactors: ['oral'],       // REQUIRED — array of FORM_FACTORS[].id, min 1, no duplicates
}
```

### 3.3 Variants (Phase C leverage)

12 multi-variant entries. Existing Phase C schema unchanged — `variants[]` array on the entry-body with route-specific `image`, `bioavailability`, `halfLife`, `doseCalc`, `quality.avoid`, `indications`, `hepatotoxicity`/`aromatization`, optional `bloodwork`. Variant `routeId` allow-list extended: `oil`, `aq`, `oral`, `topical`, `inhaled`, `nasal`, `im`.

### 3.4 Deletions

- `TOP_ENTRY_IDS` array exported from `performance/index.js` — removed.
- `topEntries: TOP_ENTRY_IDS` field on `performanceLibrary` object — removed.
- `featured` rendering branch in `LibraryGallery.jsx` — perf-only: skip the TOP 10 section entirely. Other libraries (peptide/nootropic/pharma) keep TOP 10 unchanged.

---

## 4. UI components

### 4.1 `src/components/library/PerformanceCategoryCards.jsx` (new)

- 3+2 grid (DHT/Test/19-Nor row 1, PCT/Fat row 2). Tailwind: outer `<div class="grid grid-cols-3 gap-3 mb-3">` + `<div class="grid grid-cols-2 gap-3">`. Mobile: reflow to single column (md breakpoint).
- Each card: `bg-gradient-to-br` from `subCategory.accent` to a darker shade, padding 16-18px, `rounded-2xl`, min-height 110px, hover `-translate-y-0.5` transition.
- Content: `name[lang]` (font-bold), `sub[lang]` (opacity-85, smaller), `{entryCount} hatóanyag →` (bottom-right, opacity-70).
- Props: `onCategorySelect(id: string)`, `activeCategoryId: string | null` (for outline-ring on active card).
- `useLibrary()` for current library; entryCount via `LIBRARY_ENTRY_META.filter(e => e.subCategory === id).length`.

### 4.2 `src/components/library/FormFactorChipRow.jsx` (new)

- 4 chip horizontal flex-row, multi-select AND-logic.
- Inactive chip: `bg-white/5` + `border-white/10`, opacity 0.6.
- Active chip: `bg-{color}/20` + `border-{color}` solid, full opacity.
- Click: `onToggle(id: string)`.
- Props: `selectedFormFactors: string[]`, `onToggle: (id) => void`.
- Label-prefix "Beadási mód:" (HU/EN/PL via uiStrings).

### 4.3 `src/components/LibraryGallery.jsx` (modified)

Add perf-only branch at the TOP 10 section render-point:

```jsx
{library.id === 'performance' ? (
  <PerformanceCategoryCards
    onCategorySelect={handleSubCategoryClick}
    activeCategoryId={selectedSubCategory}
  />
) : (
  /* existing TOP 10 grid */
)}
```

New state:
- `selectedSubCategory: string | null` (defaults `null`)
- `selectedFormFactors: string[]` (defaults `[]`)

New handler:
```jsx
const handleSubCategoryClick = (id) => {
  setSelectedSubCategory(prev => prev === id ? null : id)  // toggle off if same
  setTimeout(() => searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
}
```

Filter-logic extension (perf-only):
```jsx
const filteredEntries = library.id === 'performance'
  ? entries.filter(e =>
      (!selectedSubCategory || e.subCategory === selectedSubCategory) &&
      selectedFormFactors.every(f => e.formFactors?.includes(f))
    )
  : /* existing filter */
```

Active filter-chip display above search-input:
```jsx
{selectedSubCategory && (
  <ActiveFilterChip
    label={subCategoryName[lang]}
    onRemove={() => setSelectedSubCategory(null)}
    accent={subCategory.accent}
  />
)}
```

`FormFactorChipRow` mounted between search-input and entry-grid (perf-only).

### 4.4 `PeptideTile` (unchanged)

No code change. Already library-aware via `library` prop. The `featured` prop is `false` for all perf-entries (TOP_ENTRY_IDS removed → no entry has `featured: true` in perf), so the TOP 10 badge never renders. Existing `WadaBadge` + variant-chip stack works as-is.

### 4.5 `EffectsSection` (unchanged)

Renders after the LibraryGallery accordion, identical to nootropic/pharma libraries. The 8 "Teljesítményterületek" tiles stay (Izomtömeg / Erő / Zsírvesztés / Anti-katabolizmus / Recovery / Endurance / Hormon-HPTA / Metabolizmus-BMR).

---

## 5. Content scope (68 entries)

### 5.1 Rebucket — 15 existing entries (meta-only edit, content body unchanged)

**Note on variants[] column:** "NEW" entries indicate variants[] will be added in a later sub-task (NOT sub-task 1). Sub-task 1 rebucket touches `subCategory` + `subSection` + `formFactors` meta-fields only; variant additions ship with content sub-tasks 2-6.

| Entry ID | subCategory | subSection | formFactors | variants |
|---|---|---|---|---|
| testosterone-info | dht | alap-test | `[oil, aq]` | LATER (sub-task 2): 5 variants (Prop/Enan/Cyp/Sus/Mix) |
| trenbolone-info | 19nor | tren | `[oil]` | LATER (sub-task 4): 3 variants (A/E/Hex) |
| anavar-info | dht | klasszikus | `[oral]` | — |
| superdrol | dht | klasszikus | `[oral, oil]` | EXISTS (oral/IM) |
| ephedrine | fat | stim | `[oral]` | — |
| yohimbine | fat | stim | `[oral]` | — |
| clenbuterol | fat | beta | `[oral]` | — |
| albuterol | fat | beta | `[oral, aq]` | LATER: 2 variants (oral/inhaled) |
| winstrol-info | dht | klasszikus | `[oral, aq]` | LATER: 2 variants (oral/aq) |
| nandrolone-info | 19nor | nandro | `[oil]` | LATER: 2 variants (Deca/NPP) |
| dianabol-info | test | 17a-alkyl | `[oral, oil]` | LATER: 2 variants (oral/oil) |
| methylstenbolone | dht | klasszikus | `[oral]` | — |
| hgh-info | fat | gh-axis | `[aq]` | — |
| epo-info | fat | gh-axis | `[aq]` | — |
| dnp-info | fat | mito | `[oral]` | — |

### 5.2 New entries (53 total — RICH content, HU/EN/PL, peer-reviewed sources)

**DHT (5 new):** Masteron (+variants prop/enan), Primobolan (+variants ac-oral/enan-oil), Anadrol, Proviron, DHB (Dihydroboldenone)

**Test (6 new):** Halotestin, Turinabol, Equipoise, Tetrahydrogestrinone (THG), MENT-test-frame (+variants ac/en), Methyltestosterone

**19-Nor (8 new):** MENT-19nor-frame (+variants ac/en), Gestrinone, RAD-140 (Testolone), LGD-4033 (Ligandrol), S4 (Andarine), S23, YK-11, MK-2866 (Ostarine)

**PCT (20 new):** Nolvadex (Tamoxifen), Clomid (Clomiphene), Enclomiphene, Raloxifene, HCG, HMG (Menotropin), FSH-rekombináns (Gonal-F), Anastrozol (Arimidex), Letrozol (Femara), Exemestane (Aromasin), Cabergoline (Dostinex), Pramipexole (Mirapex), Bromocriptine, Kisspeptin-10, Gonadorelin, Pregnenolone, DHEA, Finasteride (Propecia), Dutasteride (Avodart), RU58841

**Fat (14 new):** Mirabegron, T3 (Liothyronine), T4 (Levothyroxine), ECA-stack, Super-Shred, L-Carnitine (+variants oral/inj), GW-501516 (Cardarine), 5-amino-1MQ, MOTS-c, SLU-PP-332, BAM15, Tesamorelin-perf-doping, Semaglutide-perf-doping, Retatrutide-perf-doping

### 5.3 Multi-variant inventory (12 entries)

1. Testosterone — 5 variants (Prop/Enan/Cyp/Sus/Mix)
2. Trenbolone — 3 variants (A/E/Hex)
3. Nandrolone — 2 variants (Deca/NPP)
4. Masteron — 2 variants (Prop/Enan)
5. Primobolan — 2 variants (Ac-oral / Enan-oil)
6. MENT-test — 2 variants (Ac/En)
7. MENT-19nor — 2 variants (Ac/En)
8. Winstrol — 2 variants (oral/aq)
9. Superdrol — 2 variants (oral/IM) — already exists
10. Dianabol — 2 variants (oral/oil)
11. Albuterol — 2 variants (oral/inhaled)
12. L-Carnitine — 2 variants (oral/inj)

### 5.4 Lab Terminal hard-fail fields

`LAB_FIELD_SOFT_FAIL=false` stays. Every new perf-entry requires `aromatization` + `hepatotoxicity` fields HU/EN/PL. AAS entries + 17α-alkylated prohormones additionally require `bloodwork` block (Pre/Mid/Post/Cruise protocol, PubMed-sourced per-priority panel).

### 5.5 Image-pipeline (template-reuse)

Existing templates cover most new entries:
- `tablet-pile-white.png` → ~25 oral entries (SARMs, oral AAS, PCT-oral, Mirabegron, T3, T4 tablets, stim-oral)
- `tablet-pile-yellow.png` → DNP-style warning entries
- `oil-vial-yellow.png` / `oil-vial-orange.png` → ~15 oil-AAS (Masteron, Primo-enan, MENT, Equipoise, Tren-esters, etc.)
- `water-vial.png` → ~10 aqueous (HCG, HMG, FSH-rec, Kisspeptin-10, Gonadorelin, MOTS-c, Tesa, Sema, Reta)
- `blister-white-oval.png` / `blister-white-round.png` → ~10 pharma-style PCT (Cabergoline, Pramipexole, Finasteride, Dutasteride, etc.)
- `minoxidil-topical-unique.png` reuse → RU58841 topical

**New templates required (Sub-task 7 — Gemini batch + rembg pipeline):**
- `nasal-spray-clear.png` — clear plastic spray bottle (placeholder for Kisspeptin-10 if available in nasal form)
- `inhaler-asthma.png` — MDI/DPI inhaler (Albuterol-inhaled variant)
- `oral-syringe.png` — oral suspension dispenser (Stanozolol-aq if oral-suspension)
- `transdermal-patch.png` — adhesive patch (future-proof)
- `ampoule-glass.png` — break-neck glass ampoule (future-proof)

### 5.6 i18n keys (new)

`src/i18n/uiStrings-{hu,en,pl}.js` additions:
- `perf.cat.{dht,test,19nor,pct,fat}` — CategoryCard titles (5 keys × 3 lang)
- `perf.cat.{...}.sub` — CategoryCard subtitles (5 keys × 3 lang)
- `perf.formFactor.{oil,aq,oral,topical}` — chip labels (4 keys × 3 lang)
- `perf.formFactor.title` — "Beadási mód" / "Form of administration" / "Forma podania"
- `perf.filter.active` — "Aktív szűrő:" / "Active filter:" / "Aktywny filtr:"
- `perf.cat.entryCount` — "{n} hatóanyag →" template

Entry-level `subSection.label` per-lang strings: shipped within entries' per-lang body files (Phase 12 flat-string convention).

---

## 6. Validator extensions (`scripts/validate-library-meta.mjs`)

1. **`subCategory` required + parity** — every perf-entry must have `subCategory` field, must match a `library.subCategories[].id`. Hard-fail.
2. **`formFactors[]` parity** — array, min 1 element, each ID matches `library.formFactors[].id`, no duplicates. Hard-fail.
3. **`subSection` optional but parity-checked** — if present, must match `library.subSections[subCategory][].id`. Hard-fail.
4. **5 sub-categories presence** — exactly DHT/Test/19-Nor/PCT/Fat IDs present in `library.subCategories`. Hard-fail.
5. **`variants[].routeId` allow-list** — extended to `[oil, aq, oral, topical, inhaled, nasal, im]`. Hard-fail.
6. **TOP_ENTRY_IDS removal-check** — warning if anyone re-adds (not hard-fail, since intentional restoration may happen).
7. **Lab Terminal hard-fail** — `aromatization` + `hepatotoxicity` mandatory for every perf-entry (already in Phase 11). `bloodwork` mandatory for AAS + 17α-alkylated prohormones (subCategory=dht|test|19nor AND tier>=3).

---

## 7. URL routing

**Phase 1 (this mega-phase):** No URL state. In-memory filter state only. CategoryCard click → `setSelectedSubCategory` + scroll. Page reload resets filter.

**Phase 2 (backlog):** `#library/performance?cat=dht&form=oral,aq` query-syntax. `LibraryContext` hash-parser extended, `LibraryCube` propagates initial state to Perf-face. Deep-linkable filters.

Decision: Phase 1 sufficient for MVP. Phase 2 deferred to post-mega-phase backlog.

---

## 8. Mega-phase sub-task split

| Sub-task | Content | Sessions | Tag-checkpoint |
|---|---|---|---|
| 1 — Architecture + rebucket | Data shape additions, `PerformanceCategoryCards`, `FormFactorChipRow`, `LibraryGallery` perf-branch, validator extensions, i18n, rebucket 15 existing entries (subCategory + formFactors meta-add, body untouched). | 1-2 | `v0.16-perf-arch` |
| 2 — DHT content | 5 new entries (Masteron, Primobolan, Anadrol, Proviron, DHB) + variants on Masteron/Primobolan/Test/Winstrol-rebucketed. | 1-2 | `v0.17-perf-dht` |
| 3 — Test content | 6 new entries (Halotestin, Turinabol, Equipoise, THG, MENT-test, Methyltestosterone) + Dianabol variants. | 1-2 | `v0.18-perf-test` |
| 4 — 19-Nor content | 8 new entries (MENT-19nor, Gestrinone, RAD-140, LGD-4033, S4, S23, YK-11, MK-2866) + Nandrolone/Trenbolone variants. | 2 | `v0.19-perf-19nor` |
| 5 — PCT content | 20 new entries (SERMs + Gonadotropins + AI + Prolactin + Hormone-axis + 5AR). | 3 | `v0.20-perf-pct` |
| 6 — Fat content | 14 new entries (Beta + Thyroid + Stim-stacks + Metabolic + Mitochondrial + GH-axis-doping). + Albuterol/L-Carnitine variants. | 2 | `v0.21-perf-fat` |
| 7 — Images + polish | Gemini-batch new templates (nasal/inhaler/oral-syringe/patch/ampoule), rembg pipeline, mass-image-path-update Node script, validator final, live LH 10-URL sweep, final mega-PR. | 1 | `v0.22-perf-restructure-complete` |

**Total: ~10-12 sessions** (~30-40 hours real content + dev time). Final ship: single mega-PR from `perf-restructure-2026-05` branch → master squash-merge, all sub-task commit-hashes referenced in PR description.

**New Roadmap document:** `MolekulaX_Roadmap_2026-06.md` will own this mega-phase. The 2026-05 Roadmap stays CLOSED.

---

## 9. Risk-flags

1. **Cross-library duplication** (HGH/EPO/Sema/Reta/Tesa in peptide-lib too): dual-framing policy explicit — perf-frame = "doping/banned/WADA", peptide-frame = "therapeutic/clinical". `related: [...]` cross-link minimum on both sides.
2. **Content sourcing load** (53 new RICH entries, peer-reviewed): hybrid policy per `[[feedback_forbidden_sources]]` — Studies/Lab Terminal cells strict (PubMed/FDA SmPC/EMA/PubChem), body-content `description`/`mechanism`/`shortDesc` may use dopamine.club + sean's curated notes (no citation back).
3. **Lab Terminal hard-fail** (LAB_FIELD_SOFT_FAIL=false): temp-flip to `true` during dev-loop per sub-task, flip back to `false` before ship.
4. **SARMs library re-introduction**: 6 SARMs (RAD/LGD/S4/S23/YK-11/MK-2866) were USER-DISCARDED in Phase 5. Re-introduced here in the 19-Nor column per HTML reference (chemistry classification). Framing: educational with WADA-banned + tier-2/3 research-level. **User confirmed during 2026-05-19 brainstorm.**
5. **MENT cross-frame two entries**: separate URLs `#entry/performance/ment-test` vs `/ment-19nor`. `related: ['ment-19nor']` ↔ `related: ['ment-test']` cross-links mandatory.
6. **PWA Workbox precache** ~4500 KiB expected (159 new lang-chunks × ~25 KiB raw) — 500 KiB margin under 5 MB cap. OK.
7. **Build-time** current 9.97s → ~12-15s with 159 new chunks. Acceptable, no `globIgnores` tuning needed yet.

---

## 10. Out-of-scope (backlog, NOT this phase)

- URL deep-link `?cat=&form=` query-state (Phase 2 of this restructure, separate session)
- Anekdota section feature (separate /handoff-todo, mentioned in 2026-05-19 status)
- Peptide library add/remove batch (HCG/HMG/GLOW + 8 nasal-variant) — separate phase
- molekulax.com custom domain DNS / Vercel Settings
- Phase 13 cleanup (drop dual-shape `flat()`+`tr()` legacy)
- 3-run Lighthouse median GitHub Action
- AVIF Q-tuning per asset-class

---

## 11. Acceptance criteria

**Sub-task 1 (Architecture):**
- Validator PASS with 15 entry-meta records (existing entries only, no shells for new entries yet)
- Build PASS
- Live: 5 CategoryCards render in 3+2 grid with correct entry-counts (DHT=4, Test=1, 19-Nor=2, PCT=0, Fat=8). Click scrolls + applies filter, 4 form-factor chips multi-select toggle works
- PCT CategoryCard renders with 0 count + empty entry-grid below when selected — handled gracefully (empty-state message)
- 15 existing entries display in correct categories (rebucket verified by deep-link smoke-test)
- Variants[] additions are NOT in scope for sub-task 1 — added incrementally in sub-tasks 2-6 alongside relevant new entries (e.g., Trenbolone variants ship in sub-task 4 with new 19-Nor entries; Testosterone variants ship in sub-task 2 with DHT content; Dianabol variants in sub-task 3 with Test content; etc.)
- Other 3 libraries (peptide/nootropic/pharma) unchanged in UI and behavior

**Sub-tasks 2-6 (content):**
- Per sub-task: all new entries have RICH content HU/EN/PL, validator PASS (subCategory + formFactors + Lab Terminal fields), build PASS, smoke-test entry-route deep-link works
- Live LH per-category-URL ≥ 85 Perf / ≥ 95 A11y / ≥ 96 BP / 100 SEO

**Sub-task 7 (final polish):**
- All 68 entries have non-null `image` field pointing to existing public asset
- Live LH 10-URL sweep (mix of new + existing entries across all 4 libraries) PASS thresholds
- No regression in peptide/nootropic/pharma deep-links

---

## 12. Open questions (none — all resolved in brainstorm)

All design decisions confirmed by user during 2026-05-19 brainstorm session. No outstanding TBD items.
