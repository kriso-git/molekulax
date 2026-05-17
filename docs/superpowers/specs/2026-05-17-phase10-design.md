# Phase 10 — Design Spec

**Date:** 2026-05-17
**Status:** Implemented and tagged v0.10-phase10-rebrand-stable
**Predecessor:** Phase 9 (`v0.9-perentry-stable`)
**Target tag:** `v0.10-phase10-rebrand-stable`
**Strategy:** Atomic single push (~20-task plan, single commit-series)

---

## 1. Goals and scope

Phase 10 is a content + UX refactor that:

1. Adds a library-config **feature-flag** system so per-section conditional rendering in `EntryDetail` is data-driven, not hard-coded.
2. Restructures the nootropic library's "Kognitív Hatásterületek" section from 8 ungroupable tiles to **5 cognitive cluster cards**, each with **in-card clickable entry chips**.
3. Adds **4 new nootropic entries** (Paraxanthine, J-147, AF710B, Adamax) required by the new clusters.
4. Replaces the nootropic placeholder image with a **CSS/SVG neon chemical-formula tile** using the self-hosted **Doto** font, HUD-frame corners, scanline background, and a pulsing radial glow.
5. Removes all "Pep-Pedia" brand mentions site-wide (keeps the underlying research data).
6. Renames category filters across 3 libraries (Hungarian copy update).
7. Globally removes per-entry FAQ and dose recommendations from `EntryDetail`.
8. Rewrites peptide library's QuickStart Guide texts and the nootropic Telegram card text.
9. Adds dynamic "Releváns ${library.name[lang]}" label in `EntryDetail` related section.
10. Audits and rewrites safety/contraindications content for non-peptide entries (~100 entries × 3 fields) using peer-reviewed sources.

**Out of scope:** SARMs library, Service Worker / PWA cache, AVIF chain, SSR (deferred Phase 11+).

## 2. Architecture: library feature-flag system

### 2.1 Library shape extension

Add new `features` object to every library's exported `LIBRARY_META`:

```js
// src/data/libraries/<libId>/index.js
export const LIBRARY_META = {
  id: 'peptides',
  name: { hu: 'Peptidek', en: 'Peptides', pl: 'Peptydy' },
  accent: '#00ff99',
  // ...
  features: {
    faq: false,
    doseRecommendations: false,
    calculator: true,
    qualityGrid: true,
    interactions: true,
    quickStart: true,
    labTerminal: true,
    chemicalFormulaPlaceholder: false,
  },
};
```

### 2.2 Feature flag values per library

| Flag | peptides | nootropics | performance | pharmaceutical |
|---|---|---|---|---|
| `faq` | `false` | `false` | `false` | `false` |
| `doseRecommendations` | `false` | `false` | `false` | `false` |
| `calculator` | `true` | `false` | `false` | `false` |
| `qualityGrid` | `true` | `false` | `false` | `false` |
| `interactions` | `true` | `false` | `false` | `false` |
| `quickStart` | `true` | `false` | `false` | `false` |
| `labTerminal` | `true` | `false` | `true` | `true` |
| `chemicalFormulaPlaceholder` | `false` | `true` | `false` | `false` |

Note: `faq` and `doseRecommendations` are uniformly `false` post-Phase-10. The flag exists for forward compatibility — the JSX for these sections is *removed*, not gated, but the flag stays in the shape typedef.

### 2.3 Usage pattern

`EntryDetail.jsx` reads from `library.features`:

```jsx
{library.features.calculator && <CalculatorGate ... />}
{library.features.qualityGrid && <QualityGrid ... />}
{library.features.labTerminal && <LabTerminal ... />}
```

`App.jsx` `CalculatorGate` checks `library.features.calculator`. **No `library.id === 'X'` checks anywhere** — flag-driven only. Existing `library.id === 'peptides'` checks in `EntryDetail` lines around 2073 (performance disclaimer ternary) stay because they switch *content*, not *visibility*.

### 2.4 Shape typedef update

`src/data/libraries/shape.js` gets a new `LibraryFeatureFlags` typedef and `LIBRARY_META.features` becomes required. Build-time validator (Phase 9's `scripts/validate-library-meta.mjs`) extends to assert all 8 flags are present per library.

## 3. The 5 cognitive cluster cards

### 3.1 Data shape

`src/data/libraries/nootropics/index.js` — `library.effects[]` shrinks 8 → 5, gains `entries[]`:

```js
effects: [
  {
    id: 'racetams',
    title: { hu: 'Racetamok', en: 'Racetams', pl: 'Racetamy' },
    subtitle: { hu: '4 vegyület', en: '4 compounds', pl: '4 związki' },
    image: '/nootropics/effects/racetams.webp',
    entries: ['phenylpiracetam', 'aniracetam', 'oxiracetam', 'piracetam'],
  },
  {
    id: 'modafinil-types',
    title: { hu: 'Modafinil típusok', en: 'Modafinil-types', pl: 'Typy modafinilu' },
    subtitle: { hu: '4 vegyület', en: '4 compounds', pl: '4 związki' },
    image: '/nootropics/effects/modafinil-types.webp',
    entries: ['modafinil', 'armodafinil', 'flmodafinil', 'adrafinil'],
  },
  {
    id: 'dopamine-motivation',
    title: { hu: 'Dopamin / Motiváció', en: 'Dopamine / Motivation', pl: 'Dopamina / Motywacja' },
    subtitle: { hu: '4 vegyület', en: '4 compounds', pl: '4 związki' },
    image: '/nootropics/effects/dopamine-motivation.webp',
    entries: ['9-me-bc', 'bromantane', 'selegiline', 'paraxanthine'],
  },
  {
    id: 'bdnf-neuroplasticity',
    title: { hu: 'BDNF / Neuroplaszticitás', en: 'BDNF / Neuroplasticity', pl: 'BDNF / Neuroplastyczność' },
    subtitle: { hu: '4 vegyület', en: '4 compounds', pl: '4 związki' },
    image: '/nootropics/effects/bdnf-neuroplasticity.webp',
    entries: ['dihexa', 'nsi-189', 'j-147', 'semax', 'adamax'],
  },
  {
    id: 'cholinergic-boosters',
    title: { hu: 'Kolinerg boosterek', en: 'Cholinergic Boosters', pl: 'Wzmacniacze cholinergiczne' },
    subtitle: { hu: '4 vegyület', en: '4 compounds', pl: '4 związki' },
    image: '/nootropics/effects/cholinergic-boosters.webp',
    entries: ['cdp-choline', 'alpha-gpc', 'pramiracetam', 'af710b'],
  },
],
```

Note: BDNF cluster has 5 entries (semax + adamax as related but distinct). Other clusters have 4.

### 3.2 `EffectsSection.jsx` mini-chip row

Each cluster card renders the existing image+title+subtitle layout PLUS a chip row beneath the subtitle. Chips list entry display names (resolved via `LIBRARY_ENTRY_META` lookup by id), styled as small pill buttons. Click → `window.location.hash = 'entry/nootropics/<id>'`. Hover: subtle Chemical Green glow + scale 1.02. Layout: flex-wrap, gap 0.4rem. The cluster card itself is NOT clickable as a whole — only the chips inside are interactive.

For peptide library and the others where effects exist but without per-card entries (current 8-tile shape), `entries` field is optional. Mini-chip row only renders if `entries?.length > 0`.

### 3.3 New tile images

5 new `.webp` files at `public/nootropics/effects/`. AI-generated or curated lab-themed images, 768×768px, matching the peptide effects style. Image-task is part of plan.

## 4. Four new nootropic entries

### 4.1 Entry list

| ID | Name | Cluster | Reason |
|---|---|---|---|
| `paraxanthine` | Paraxanthine | dopamine-motivation | Coffeine metabolite, growing supplement use, PubMed ~80 papers |
| `j-147` | J-147 | bdnf-neuroplasticity | Curcumin derivative, Alzheimer's neuroprotective candidate, Salk Institute |
| `af710b` | AF710B (Trapaxin) | cholinergic-boosters | M1 muscarinic + σ1 dual agonist, Alzheimer's clinical candidate |
| `adamax` | Adamax | bdnf-neuroplasticity | Semax-Pro peptide variant (Pro-Gly-Pro-Asp-Ala extended), Russian nootropic |

### 4.2 Entry shape (slim)

Same shape as other slim nootropic entries (BPAP, Sunifiram, Unifiram pattern):
- `id` (kebab-case, matches filename)
- `name` (HU/EN/PL)
- `category` (the existing 7 categories — these are SEPARATE from the 5 cognitive clusters; the entry still has its old-category membership for the filter chips)
- `tier` (L1-L5 research-level)
- `description` (HU/EN/PL, 2-3 sentences)
- `mechanism` (HU/EN/PL, technical)
- `effects` (HU/EN/PL array)
- `legalStatus` (HU/EN/PL)
- `halfLife` (HU/EN/PL)
- `researchLevel` (1-5)
- `chemicalFormula` (string, e.g., `'C8H10N4O2'`)
- `image: null` → triggers ChemicalFormulaPlaceholder
- `sideEffects`, `contraindications` (HU/EN/PL, peer-reviewed)
- Sources: PubMed citations array

Categories for these 4 entries (existing nootropic categories):
- paraxanthine → `dopaminergic-motivation`
- j-147 → `neuroprotective-peptides`
- af710b → `cholinergic`
- adamax → `peptide-nootropics`

### 4.3 Content sources

Peer-reviewed only — PubMed PMIDs, no Pep-Pedia, no aggregator sites. Forbidden sources per [[feedback_forbidden_sources]] memory apply.

## 5. ChemicalFormulaPlaceholder component

### 5.1 Component contract

```jsx
<ChemicalFormulaPlaceholder
  formula="C15H15NO2S"           // raw atomic-formula string
  className="..."                 // sizing from parent (tile container)
/>
```

Component is library-agnostic. Switching logic lives in `EntryImage.jsx`:

```jsx
if (library.features.chemicalFormulaPlaceholder && !entry.image && entry.chemicalFormula) {
  return <ChemicalFormulaPlaceholder formula={entry.chemicalFormula} />;
}
// existing fallback paths...
```

### 5.2 Parse and render logic

Input `"C15H15NO2S"` is parsed into atom-blocks via regex `/([A-Z][a-z]?)(\d*)/g` → `[['C','15'],['H','15'],['N',''],['O','2'],['S','']]`. Each block renders as `<span>C<sub>15</sub></span>`.

Wrap rule based on block count:
- ≤4 blocks → single row, font-size 2.3rem
- 5-6 blocks → 2 rows, font-size 1.9rem, break-point at midpoint
- 7+ blocks → 2 rows, font-size 1.55rem, break-point at midpoint

Optional override: `chemicalFormula` may be an array `['C14H26N4', 'O11P2']` for explicit row split.

### 5.3 Visual design (locked)

- **Background:** scanline gradient (4px stripe pattern) + radial glow centered + `#050505` base.
- **HUD corners:** 4× 22px brackets, 1.5px stroke, Chemical Green at 0.6 opacity, no top/bottom border lines around the formula text (user-requested).
- **Pulse glow ring:** absolute-positioned radial-gradient pseudo-element, animates 3.5s `ease-in-out` infinite (opacity 0.4→1 + scale 0.88→1.08).
- **Formula text:** Doto 900 weight, color `#00ff99`, 4-layer text-shadow (4px / 12px / 28px / 56px blur cascading), 3.5s `pulse-text` brightness animation in sync with ring.
- **Hover:** glow intensity +25%, scale 1.02, 0.3s transition (applied at tile-level by `LibraryGallery` hover styles).
- **No name text** in the placeholder — formula only.

### 5.4 prefers-reduced-motion

Phase 7 decision applies: the formula placeholder is decorative, NOT a navigation element. We DO honor `prefers-reduced-motion: reduce` here — animation disables, high-glow static state remains.

## 6. Doto font self-host

Phase 8 Quicksand pattern:
1. Download Doto-Black.woff2 (weight 900, latin only — formulas are pure ASCII) from Google Fonts CSS API.
2. Save to `public/fonts/Doto-Black.woff2`.
3. `@font-face` declaration in `src/index.css`.
4. `<link rel="preload" as="font" type="font/woff2" crossorigin>` in `index.html`.

Single weight, single subset — ~12 kB. Loaded only on nootropic library views (`EntryImage` mounts ChemicalFormulaPlaceholder, which triggers font request via `font-family: 'Doto'`). Phase 8's vite-plugin-inline-css does NOT need changes — `@font-face` URL is `/fonts/Doto-Black.woff2` which works inlined.

## 7. Conditional rendering rules (flag-driven)

See section 2.2 table for the full matrix. JSX changes:

| Section | Action | Location |
|---|---|---|
| FAQ block | Remove JSX entirely (kept landing-page FAQ separate) | `EntryDetail.jsx` |
| Dose recommendations block | Remove JSX entirely | `EntryDetail.jsx` |
| Calculator gate | Gate on `library.features.calculator` | `App.jsx` |
| QualityGrid | Gate on `library.features.qualityGrid` | `EntryDetail.jsx` |
| InteractionsOrbit | Gate on `library.features.interactions` | `EntryDetail.jsx` |
| ReconstitutePath + QuickStart | Gate on `library.features.quickStart` | `EntryDetail.jsx` |
| LabTerminal | Gate on `library.features.labTerminal` | `EntryDetail.jsx` |

The existing `library.id === 'peptides'` ternary for the performance-disclaimer at line ~2073 stays (it switches text content, not visibility).

## 8. Text and copy changes

| # | Location | Old | New |
|---|---|---|---|
| 1 | Nootropic category filter | Eugeroikumok | Modafinil típusok |
| 2 | Nootropic category filter | Cholinergikus | Kolinergiumok |
| 3 | Nootropic category filter | Dopaminerg | Dopaminok |
| 4 | Nootropic category filter | Anxiolítikus | Szorongás csökkentők |
| 5 | Peptide category filter | Kognitív / Nootróp | Kognitív |
| 6 | Peptide category filter | Anti-aging / Hosszú élet | Anti-aging |
| 7 | Pharma category filter | Antiinfektívumok | Fertőzésellenes szerek |
| 8 | EntryDetail Related label | "Releváns Peptidek" hardcoded | `Releváns ${library.name[lang]}` dynamic via i18n template |
| 9 | EntryDetail Telegram card (nootropic only) | "Lépj kapcsolatba egy tanácsadóval Telegramon. Szívesen segítünk." | "Személyre szabott stackért vedd fel velünk a kapcsolatot Telegramon. Szívesen segítünk." |
| 10 | QuickStart Rekonstituálás body | (current) | "Hideg szárított por hígítása bakteriostatikus vízzel" |
| 11 | QuickStart Dózis & beadás title | "Dózis & beadás" | "Beadás" |
| 12 | QuickStart Beadás body | (current) | "Szubkután injekció majd titrálás tolerancia szerint." |
| 13 | QuickStart Monitorozás body | (current) | "Mellékhatás esetén dózis-csökkentés" |
| 14 | QuickStart Tárolás body | (current — keep) | (keep) |

All renames cover HU/EN/PL where applicable. Rename map applied via i18n key updates in `src/i18n/uiStrings.js` or per-library category objects depending on current source-of-truth location.

## 9. "Pep-Pedia" brand removal

### 9.1 Current state

`scripts/strip-peppedia-refs.mjs` exists from a prior partial cleanup. 5 files still reference the brand:

- `src/components/library/adaptLibraryEntry.js`
- `src/components/LibraryGallery.jsx`
- `src/data/libraries/peptides/researchLevel.js`
- `src/data/libraries/peptides/categories.js`
- `scripts/strip-peppedia-refs.mjs` (the script itself — leave as-is or delete after run)

### 9.2 Removal rules

- **Strict:** every "Pep-Pedia" / "Pep Pedia" / "PepPedia" string mention removed from JSX, JSON, comments, source comments, and i18n strings.
- **Preserve:** the underlying research data, indication lists, source citations remain. Only the brand label is stripped.
- **Verify after:** repo-wide grep for `[Pp]ep[-\s]?[Pp]edia` returns 0 results (excluding the script file if kept).

### 9.3 Specific in-UI artifact

EntryDetail's GHK-Cu card "Kutatási indikációk" link below shows "Pep-Pedia" hyperlinked text — remove the link wrapping and the text, keep the indication list itself.

## 10. Safety / contraindications content audit

### 10.1 Scope

Non-peptide libraries — nootropics (~48 entries post-Phase 10 with new 4), performance (17), pharmaceutical (40) = ~105 entries.

Per entry, 3 fields to review:
- `sideEffects` (HU/EN/PL)
- `contraindications` (HU/EN/PL)
- `discontinuationSigns` (HU/EN/PL) where present

### 10.2 Process

For each non-peptide entry:
1. Read current text in all 3 languages.
2. Identify peptide-specific leftover (injection-site reactions, reconstitution residue, SC-bolus references, etc.) — flag and remove.
3. Generate replacement content from peer-reviewed sources (PubMed PMID, FDA SmPC, EMA, NIH PubChem) tailored to the compound class.
4. Cross-reference with the original mechanism + halfLife data to ensure internal consistency.

### 10.3 Effort estimate

~105 entries × 3 fields × 3 languages × ~5 min/entry = ~4-6 hours of focused content work. Plan task is parallelizable per library — 3 subagent dispatches (one per non-peptide library).

## 11. Plan structure (atomic single push)

Target: 1 implementation plan (~20 tasks), 1 commit-series on master, deploy verification, then git tag `v0.10-phase10-rebrand-stable`.

Tentative task order (final plan in next phase):

1. Doto font self-host (preload + @font-face)
2. `LibraryFeatureFlags` typedef + shape.js update + meta validator extension
3. Library-meta `features` populated in all 4 libraries
4. `chemicalFormula` field added to all 44 existing nootropic entries (the 4 new entries from task 7 include `chemicalFormula` at creation time)
5. ChemicalFormulaPlaceholder component + parse logic
6. EntryImage refactor (nootropic path → ChemicalFormulaPlaceholder)
7. 4 new nootropic entries (paraxanthine, j-147, af710b, adamax)
8. Nootropic `library.effects` 8 → 5 + per-card `entries[]` + new tile images
9. EffectsSection mini-chip row + chip-click routing
10. EntryDetail conditional render refactor (gate FAQ/Calc/Quality/Interactions/QuickStart/LabTerminal)
11. App.jsx CalculatorGate flag-check
12. Category filter rename map (peptides, nootropics, pharmaceutical)
13. "Releváns ${library}" dynamic label
14. Nootropic Telegram card text rewrite
15. QuickStart 4 tile copy update
16. Pep-Pedia removal script run + manual 5-file cleanup
17. Safety/contraindications audit — nootropic library
18. Safety/contraindications audit — performance library
19. Safety/contraindications audit — pharmaceutical library
20. Build + Lighthouse smoke + manual smoke checklist + git tag `v0.10-phase10-rebrand-stable`

## 12. Acceptance criteria

- Build passes (`npm run build` green, validator passes).
- Lighthouse Home mobile Perf ≥ 85 (no regression from Phase 9's 87-88 baseline).
- Lighthouse entry-detail mobile Perf ≥ 88 (no regression from Phase 9 baseline).
- 0 repo-wide hits for `[Pp]ep[-\s]?[Pp]edia` (excluding script file).
- All 5 nootropic cognitive cluster cards render with mini-chip rows.
- Click on each cluster chip opens the correct EntryDetail.
- ChemicalFormulaPlaceholder renders on all 48 nootropic entries.
- Calculator visible ONLY on peptide library entries.
- QualityGrid, InteractionsOrbit, QuickStart visible ONLY on peptide entries.
- LabTerminal visible on peptide, performance, pharmaceutical — hidden on nootropic.
- FAQ section absent from all EntryDetail pages.
- Dose recommendations absent from all EntryDetail pages.
- All category filter renames applied HU/EN/PL.
- "Releváns ${library}" renders correctly per library context.
- Telegram card text updated on nootropic entries (only).
- QuickStart copy updated on peptide entries.
- Safety/contraindications audit: 0 peptide-specific leftover strings in non-peptide entries (manual sample-check 5 entries per library).

## 13. Non-goals (deferred)

- SARMs library expansion (user previously rejected).
- Service Worker / PWA cache.
- AVIF format addition.
- SSR / static HTML hero.
- i18n locale-split.
- Performance score 95+ stabilization (Phase 10b backlog).
- A11y regression fix on image-bearing entries.

## 14. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Doto font 12 kB extra payload regresses Home mobile Perf | Font loaded only on EntryImage mount, not on Home — should be near-zero impact. Measure in task 20 smoke. |
| 4 new entries' content quality slipped | Each entry reviewed against PubMed PMIDs, slim shape (10-15 sentences) limits surface area for errors. |
| Safety audit content quality | 3 parallel subagent tasks per non-peptide library, each followed by spec-compliance review per Phase 9 pattern. |
| Pep-Pedia leftover refs in dynamic content (i18n template strings) | Plan task 16 ends with `grep -ri "pep[-\s]?pedia"` verification, blocks tag until 0 hits. |
| Effects mini-chip row breaks mobile layout | Validate on 320px viewport during task 9 implementation review. |
| Flag system + hardcoded `library.id` checks coexist | Acceptance includes manual grep `library\.id\s*===\s*'` across `EntryDetail.jsx` and `App.jsx` to flag any visibility check (content checks OK). |

---

**End of spec.**
