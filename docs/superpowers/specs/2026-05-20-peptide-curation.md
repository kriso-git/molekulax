# Peptide Library Curation — 5 Adds + 8 Removes + Cross-Frame Reciprocation

**Date:** 2026-05-20
**Type:** Post-Roadmap session (NOT a Phase, NOT a Sub-Task of Roadmap 2026-06)
**Target tag:** `v0.23-peptide-curation`
**Status:** Spec

---

## 1. Purpose

A peptid library (jelenleg 58 entry) curation-frissítése: **5 új RICH entry** hozzáadása (HCG/HMG/FSH-rec fertility-cluster + EPO endurance + GLOW multi-peptide stack), **8 slim/low-evidence entry törlése** (FGL, Larazotide, MGF, Mod-GRF-1-29, P21, Pemvidutide, Pentadeca-Arginate, Thymulin), és **cross-frame related[] reciprokáció** a már shippelt `-perf` counterpart-okra (Tesamorelin, Semaglutide, Retatrutide).

A törlés indoka **product-curation** ("egyszerűen nincs rájuk szükség a könyvtárban"), NEM tudományos diszkreditáció. A 8 deprecated slug deep-link URL-jei NEM 404-eznek: redirect-flash-szel a peptid library tetejére irányítódnak (1.8s flash + library-top hash).

A GLOW egy **multi-peptid stack** (NEM önálló peptid): GHK-Cu + BPC-157 + TB-500 kombináció. Új `composition[]` library-shape mezővel rendereljük, dedikált `CompositionSection.jsx` komponenssel. A meglévő `cjc-1295-ipamorelin` (másik 2-komponens stack-entry) retrofitálódik ugyanezzel a `composition[]`-tel.

---

## 2. Scope

**Net entry count change:** 58 peptid → **55 peptid** (−8 + 5). Total all-library: 196 → **193** (peptides 55 + nootropics 48 + performance 68 + pharmaceutical 22).

### 2.1 Adds (5 RICH entries × HU + EN + PL = 15 body files)

| ID | Display Name | Tier | Categories | `related[]` (max 4) |
|---|---|---|---|---|
| `hcg-peptid` | HCG | T4 | growth-factors, recovery, hpta-fertility | hmg-peptid, fsh-rec-peptid, hcg-perf, gonadorelin |
| `hmg-peptid` | HMG | T4 | growth-factors, hpta-fertility | hcg-peptid, fsh-rec-peptid, hmg-perf, kisspeptin |
| `fsh-rec-peptid` | rFSH | T4 | growth-factors, hpta-fertility | hcg-peptid, hmg-peptid, fsh-rec-perf, kisspeptin |
| `epo` | EPO | T4 | metabolic, recovery, endurance | hgh, igf-1-lr3, tesamorelin, mots-c |
| `glow` | GLOW | T3 | anti-aging, recovery, immune | ghk-cu, bpc-157, tb-500, cjc-1295-ipamorelin |

### 2.2 Removes (8 entries × 3 lang = 24 body files + 8 meta records)

`fgl`, `larazotide`, `mgf`, `mod-grf-1-29`, `p21`, `pemvidutide`, `pentadeca-arginate`, `thymulin`

### 2.3 Cross-Frame Reciprocation (3 existing entries × 3 lang = 9 file edits)

- `tesamorelin` body file × 3 lang — `related[] += ['tesamorelin-perf']`
- `semaglutide` body file × 3 lang — `related[] += ['semaglutide-perf']`
- `retatrutide` body file × 3 lang — `related[] += ['retatrutide-perf']`

### 2.4 Retrofit (1 existing entry × 3 lang = 3 file edits)

- `cjc-1295-ipamorelin` body file × 3 lang — `composition[]` field added with 2 components (CJC-1295 + Ipamorelin)

### 2.5 Out of Scope

- TOP10 grid változatlan (Retatrutide / Tirzepatide / GHK-Cu / Melanotan-2 / BPC-157 / TB-500 / HGH / CJC-1295+Ipa / Tesamorelin / Dihexa). Az új entry-k niche-specific use-case-ek, NEM első-megismerés peptidek.
- Sub-Task 6 (Fat) + Sub-Task 7 (Images) mega-phase tasks — különálló pipeline.
- Sean-anekdota content GLOW-ra/EPO-ra (placeholder marad, anekdota-coverage backlog).
- Image-generálás (placeholder image-eket használunk: cross-folder reference vagy létező vial-PNG).

---

## 3. Architecture

### 3.1 New Library Shape Fields

```js
// src/data/libraries/shape.js
deprecatedIds?: string[]
// Library-level field. List of entry IDs that have been hard-removed.
// EntryDetailRoute renders RedirectFlash before attempting loadEntry.

composition?: Array<{
  id: string,           // MUST reference another entry in this library
  role: string,         // i18n flat string (post-Phase-12 per-lang body)
  typicalDose: string,  // i18n flat string
}>
// Entry-level optional field. Marks the entry as a multi-peptide stack.
// CompositionSection.jsx renders component cards with deep-link clicks.
```

### 3.2 New Modules

**`src/data/libraries/peptides/deprecated.js`** (new file, ~10 lines)
```js
export const DEPRECATED_PEPTIDE_IDS = [
  'fgl', 'larazotide', 'mgf', 'mod-grf-1-29',
  'p21', 'pemvidutide', 'pentadeca-arginate', 'thymulin',
]
```

**`src/components/library/CompositionSection.jsx`** (new file, ~80 lines)
- Receives `composition` prop (array or null) from adapter passthrough.
- Returns null if composition is null or empty.
- Renders GlassCard with:
  - Eyebrow chip (HU/EN/PL: "Összetétel / Composition / Skład")
  - Title (HU/EN/PL: "Ez a stack az alábbi peptideket tartalmazza")
  - Grid of component-cards (3-col desktop, 1-col mobile)
  - Each card: peptide name (looked up from LIBRARY_ENTRY_META), role, typical dose, ChevronRight icon
  - onClick: `window.location.hash = 'entry/peptides/<id>'`

**`src/components/library/RedirectFlash.jsx`** (new file, ~40 lines)
- Receives `deprecatedId` prop.
- Renders full-page GlassCard centered:
  - Eyebrow: `t('entry.deprecated.eyebrow')` ("Elavult entry" / "Deprecated entry" / "Wpis nieaktualny")
  - Title: `t('entry.deprecated.title')` ("Ez az entry már nem elérhető" / "This entry is no longer available" / "Ten wpis nie jest już dostępny")
  - Body: `t('entry.deprecated.body')` ("Ezt a peptidet eltávolítottuk a könyvtárból. Visszairányítunk a peptid könyvtár tetejére…" + 2 lang)
  - Pulsing skeleton spinner
- Timer 1.8s → `window.location.hash = 'library'`

**`scripts/scrub-deprecated-related.mjs`** (new file, ~50 lines, one-shot)
- Reads every `src/data/libraries/peptides/entries/{hu,en,pl}/*.js` file.
- For each, parses via Function-constructor object-eval (Phase 11 anecdote-populate precedens).
- Removes any DEPRECATED_PEPTIDE_IDS from `related[]`.
- Writes back via JSON.stringify round-trip + ES-module wrapper.
- Logs file-count modified + per-file removed-IDs.

### 3.3 EntryDetailRoute.jsx Flow Update

```jsx
useEffect(() => {
  const cancelled = { value: false }

  const lib = getLibrary(parsed.library)
  if (lib?.deprecatedIds?.includes(parsed.id)) {
    setRedirectId(parsed.id)
    const timer = setTimeout(() => {
      if (!cancelled.value) window.location.hash = 'library'
    }, 1800)
    return () => {
      cancelled.value = true
      clearTimeout(timer)
    }
  }

  // ... existing loadEntry logic
}, [hash, lang])

if (redirectId) {
  return <RedirectFlash deprecatedId={redirectId} />
}
```

### 3.4 EntryDetail.jsx Mount

Insert `<CompositionSection composition={entry.composition} />` **post-Hero, pre-Bento** (a stack-overview Bento ELŐTT logikailag helyes: "ez a stack mit tartalmaz" → "részletes áttekintés").

### 3.5 New Categories (`peptides/categories.js`)

```js
{
  id: 'hpta-fertility',
  accent: '#fbbf24',  // gold — fertility/hormonal
  label: { hu: 'Termékenység / HPTA-támogatás', en: 'Fertility / HPTA Support', pl: 'Płodność / wsparcie HPTA' },
},
{
  id: 'endurance',
  accent: '#f87171',  // coral — cardio/performance
  label: { hu: 'Állóképesség / Oxigéntranszport', en: 'Endurance / Oxygen Transport', pl: 'Wytrzymałość / transport tlenu' },
},
```

### 3.6 uiStrings Extension (3 new keys × 3 langs = 9 strings)

```js
'entry.deprecated.eyebrow': 'Elavult entry' / 'Deprecated entry' / 'Wpis nieaktualny'
'entry.deprecated.title':   'Ez az entry már nem elérhető' / 'This entry is no longer available' / 'Ten wpis nie jest już dostępny'
'entry.deprecated.body':    'Ezt a peptidet eltávolítottuk a könyvtárból. Visszairányítunk a peptid könyvtár tetejére…' / 'We've removed this peptide from the library. Redirecting you to the peptide library top…' / 'Usunęliśmy ten peptyd z biblioteki. Przekierowujemy do góry biblioteki peptydów…'
```

Plus 3 CompositionSection-keys:
```js
'entry.composition.eyebrow': 'Összetétel' / 'Composition' / 'Skład'
'entry.composition.title':   'Ez a stack az alábbi peptideket tartalmazza' / 'This stack contains the following peptides' / 'Ten stack zawiera następujące peptydy'
'entry.composition.role':    'Szerep' / 'Role' / 'Rola'
```

### 3.7 Validator Extensions (`scripts/validate-library-meta.mjs`)

**New rule 1 — dangling related-id warning** (warn, not fail):
- For every entry's `related[]`, check if each ID exists in any library's `LIBRARY_ENTRY_META`.
- Cross-library lookups allowed (peptide → performance allowed).
- Print warning per dangling ID.

**New rule 2 — composition-id existence check** (hard-fail):
- For every entry with `composition[]`, check each `composition[*].id` exists in the SAME library's `LIBRARY_ENTRY_META`.
- Cross-library composition NOT allowed (stack must be self-contained).
- Fail validator if any composition-id missing.

### 3.8 Adapter Passthrough (`adaptLibraryEntry.js`)

Add to allowlist (per `[[feedback_adapter_passthrough]]` rule):
```js
composition: peptide.composition || null,
```

### 3.9 Library Object Extension (`peptides/index.js`)

```js
import { DEPRECATED_PEPTIDE_IDS } from './deprecated.js'

export default {
  id: 'peptides',
  // ... existing fields
  deprecatedIds: DEPRECATED_PEPTIDE_IDS,
}
```

---

## 4. Content Specifications

### 4.1 HCG (Humán Choriogonadotropin) — `hcg-peptid` — T4

- **Mechanism:** LH-receptor agonist glycoprotein (alpha+beta subunits); 38h half-life; stimulates testicular Leydig cell testosterone production + intra-testicular T (ITT) maintenance.
- **Clinical use:** Fertility/PCT bridge (HPTA recovery), female ovulation induction, cryptorchidism, hypogonadotropic hypogonadism.
- **Dosing:** 250-500 IU subQ EOD (PCT-bridge); 1500-5000 IU 2× weekly (TRT-cycle ITT preservation); fertility doses up to 10000 IU.
- **Half-life:** ~38 hours (recombinant), ~24-36 hours (urinary).
- **Legal status:** Rx in HU/EU/USA. WADA: prohibited (S2 hormones & growth factors, in-competition for males).
- **Differentiation from `hcg-perf`:** This entry is **fertility/HPTA-recovery framing** (clinical-Rx, PCT bridge); `hcg-perf` is **doping-cycle ITT-preservation framing** (cycle-support context).
- **Body length:** ~210 lines/lang (matches Liothyronine/Mirabegron T4 precedent).
- **Anchor source files:** FDA SmPC Pregnyl/Novarel/Ovidrel, EMA Ovitrelle SmPC, PubMed Hill 2018, Crosnoe-Shroff 2013.

### 4.2 HMG (Humán Menopauzális Gonadotropin) — `hmg-peptid` — T4

- **Mechanism:** 1:1 FSH+LH activity glycoprotein (urinary postmenopausal extract OR recombinant menotropin); stimulates both Leydig + Sertoli cells.
- **Clinical use:** Spermatogenesis induction (hypogonadotropic hypogonadism), female superovulation (IVF).
- **Dosing:** 75-150 IU subQ 3× weekly (male fertility); 75-300 IU/day (female IVF cycles).
- **Half-life:** 12-20 hours (FSH component), 8-12 hours (LH).
- **Legal status:** Rx in HU/EU/USA (Menopur, Pergonal). WADA: prohibited (S2).
- **Differentiation from `hmg-perf`:** Fertility/spermatogenesis framing; `hmg-perf` is doping-PCT framing.
- **Body length:** ~200 lines/lang.
- **Anchor sources:** Menopur SmPC, PubMed Liu 2009 spermatogenesis, ESHRE 2024 guidelines.

### 4.3 rFSH (Rekombináns FSH) — `fsh-rec-peptid` — T4

- **Mechanism:** Pure recombinant FSH (no LH activity); selective Sertoli cell stimulation; spermatogenesis-only stack-partner.
- **Clinical use:** Male fertility (stack with HCG for HPTA-complete restoration), female IVF.
- **Dosing:** 75-150 IU subQ 3× weekly (male, stacked with HCG); 75-450 IU/day (IVF).
- **Half-life:** 24-36 hours (longer than urinary FSH).
- **Legal status:** Rx in HU/EU/USA (Gonal-F, Puregon, Follistim). WADA: prohibited (S2).
- **Differentiation from `fsh-rec-perf`:** Fertility framing; `fsh-rec-perf` is doping-PCT framing.
- **Body length:** ~200 lines/lang.
- **Anchor sources:** Gonal-F SmPC, Follistim SmPC, PubMed Bouloux 2002 spermatogenesis.

### 4.4 EPO (Eritropoietin) — `epo` — T4

- **Mechanism:** 165-AA glycoprotein cytokine; EPO-R agonist on erythroid progenitors → increased RBC mass + hematocrit + oxygen-carrying capacity.
- **Clinical use:** Anemia (CKD, chemotherapy-induced); endurance-doping (banned).
- **Dosing (clinical):** 50-100 IU/kg subQ 3× weekly (CKD anemia, target Hb 10-12 g/dL).
- **Half-life:** 4-13 hours subQ (Epoetin-alpha), 70-138 hours (Darbepoetin), micro-dosing protocols 100-300 IU/kg/week endurance contexts.
- **Legal status:** Rx in HU/EU/USA (Epogen, Procrit, Aranesp, Mircera). WADA: **strictly prohibited** (S2.1 erythropoietin-mimetic agents, in + out-of-competition).
- **Differentiation:** No `-perf` counterpart in performance lib (yet). EPO is endurance/oxygen-transport unique; this peptide-lib entry frames clinical anemia primarily, doping context secondary.
- **Body length:** ~220 lines/lang.
- **Anchor sources:** Epogen FDA label, KDIGO 2024 anemia guidelines, WADA 2025 Prohibited List, Lundby 2008 micro-dosing pharmacokinetics, Lippi 2006 EPO doping detection.
- **Bloodwork mandatory:** Hb, Hct, ferritin, transferrin saturation, reticulocyte count, BP (hypertension risk).

### 4.5 GLOW Protocol — `glow` — T3 (multi-peptide stack)

- **Composition:**
  - `ghk-cu` — Skin regeneration anchor — 1-3 mg subQ daily
  - `bpc-157` — Gastric pentadecapeptide healer — 250-500 µg subQ daily
  - `tb-500` — Thymosin β4 actin-binder — 2-2.5 mg subQ 2× weekly
- **Mechanism (combined):** GHK-Cu = epigenetic + collagen synthesis; BPC-157 = pleiotropic angiogenesis + tissue healing; TB-500 = systemic actin-binding + cell migration. Synergy: comprehensive skin + tissue regeneration across cosmetic + systemic axes.
- **Protocol:** 4-6 hetes ciklus, mindennap subQ injekció ugyanabban a periódusban, rotating injection sites. Off-cycle 2-4 weeks.
- **Sources:** Community-protocol (Sean's curated notes + dopamine.club anecdotal); supporting individual-component PubMed refs already in component entries.
- **Tier 3 rationale:** Single-component evidence robust (T4), stack-specific RCT/clinical evidence non-existent (T3 cap).
- **Body length:** ~180 lines/lang (shorter — composition[] handles per-component info DRY).
- **Bloodwork:** optional (low-priority, Tier 3 stack).
- **Anecdote:** integrate Sean-content if mapper found, else placeholder.
- **Differentiation from `cjc-1295-ipamorelin`:** Multi-axis (skin + systemic) stack vs single-axis (GH-pulse synergy) stack.
- **Quality.avoid:** Active cancer history, autoimmune flare, active infection, pregnancy/lactation.

### 4.6 cjc-1295-ipamorelin Retrofit (`composition[]` added)

```js
composition: [
  { id: 'cjc-1295', role: 'GHRH analog — sustained GH pulse base', typicalDose: '100-200 µg subQ daily' },
  { id: 'ipamorelin', role: 'Selective GH secretagogue — pulse amplifier', typicalDose: '100-200 µg subQ daily' },
]
```
(Existing entry body fields NOT changed; only this field added.)

---

## 5. Execution Pipeline (Hybrid Z-shape)

### Phase A — Infra preparation (inline, ~10 min)
1. Create `peptides/deprecated.js`.
2. Extend `peptides/categories.js` with 2 new categories.
3. Extend `peptides/index.js` library object with `deprecatedIds`.
4. Extend `shape.js` with `deprecatedIds` + `composition`.
5. Extend `adaptLibraryEntry.js` passthrough allowlist.
6. Extend `uiStrings-{hu,en,pl}.js` with 6 new keys (3 deprecated + 3 composition).
7. Create `RedirectFlash.jsx`.
8. Create `CompositionSection.jsx`.
9. Extend `EntryDetailRoute.jsx` with deprecation check + RedirectFlash render.
10. Mount `CompositionSection` in `EntryDetail.jsx` post-Hero, pre-Bento.
11. Extend `validate-library-meta.mjs` with 2 new rules.

### Phase B — Inline anchor entry (inline, ~15 min)
12. Write `hcg-peptid` body files × HU + EN + PL (3 files, precedent anchor for subagents).

### Phase C — Hard removal + cross-link (inline, ~10 min)
13. Create `scripts/scrub-deprecated-related.mjs`.
14. Run script (sweeps peptid entry body files for deprecated IDs in `related[]`).
15. Delete 24 body files (`fgl/larazotide/mgf/mod-grf-1-29/p21/pemvidutide/pentadeca-arginate/thymulin` × {hu,en,pl}).
16. Remove 8 meta records from `peptides/index.js LIBRARY_ENTRY_META`.
17. Cross-link reciprocation: 9 file edits (tesamorelin/semaglutide/retatrutide × 3 lang).
18. `cjc-1295-ipamorelin` retrofit: 3 file edits.
19. Validator + build gate PASS check.

### Phase D — 4 parallel subagent dispatch (background)
- **Subagent A:** `hmg-peptid` HU + EN + PL (3 files) + meta-record append-spec.
- **Subagent B:** `fsh-rec-peptid` HU + EN + PL (3 files) + meta-record append-spec.
- **Subagent C:** `epo` HU + EN + PL (3 files) + meta-record append-spec.
- **Subagent D:** `glow` HU + EN + PL (3 files, stack-shape composition[]) + meta-record append-spec.

Subagent prompt-templates self-contained:
- `hcg-peptid` body-file path as precedent anchor citation.
- Schema conventions explicit (flat-string per lang, related[] max 4, categories array, tier int).
- Validate-fields explicit list (name, shortDesc, mechanism, dosing, halfLife, legalStatus, onsetTime, interactionsWith, wadaStatus, related[], composition[] for GLOW only).

Wall-clock ~20-25 min parallel; token-cost ~300-400K total.

### Phase E — Post-subagent reconciliation (inline, ~10 min)
20. Append 4 new meta records to `peptides/index.js LIBRARY_ENTRY_META`.
21. Validator + dangling-related warning sweep.
22. Build gate (precache size check).
23. Validator schema-drift fix-loop if needed.

### Phase F — Ship (inline, ~3 min)
24. Git stage 47-55 files (15 new body + 24 deleted + 12 modified + 4 new components/scripts).
25. Single commit (HEREDOC message per section 6).
26. Tag `v0.23-peptide-curation` on master HEAD.
27. `git push origin master --tags`.

**Recovery:** Subagent schema-drift → 1 fix-subagent dispatch (~190K tokens), then revalidate.

---

## 6. Commit Message Template

```
feat(peptides): library curation — 5 RICH adds + 8 removes + cross-frame reciprocation

ADD (5 RICH entries × HU+EN+PL = 15 body files):
- hcg-peptid, hmg-peptid, fsh-rec-peptid: fertility/HPTA T4 cluster
- epo: erythropoietin endurance/recovery T4
- glow: GHK-Cu + BPC-157 + TB-500 multi-peptide stack T3 (composition[])

REMOVE (8 entries × 3 lang = 24 body files + 8 meta records):
- fgl, larazotide, mgf, mod-grf-1-29, p21, pemvidutide,
  pentadeca-arginate, thymulin

CROSS-FRAME RECIPROCATION:
- tesamorelin/semaglutide/retatrutide peptid.related[] +=
  ['{...}-perf'] (was perf→peptid only)
- 5 new entries born with related[] cross-links

INFRA:
- shape.js: +composition[], +deprecatedIds[]
- categories.js: +hpta-fertility, +endurance
- EntryDetailRoute.jsx + RedirectFlash.jsx: deprecated-id → library-top
  redirect (1.8s flash, HU/EN/PL)
- CompositionSection.jsx new (multi-peptide stack render)
- validate-library-meta.mjs: dangling-related warning +
  composition-id existence check
- scripts/scrub-deprecated-related.mjs: one-shot cleanup

RETROFIT:
- cjc-1295-ipamorelin: composition[] added (2-component stack)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
```

---

## 7. Acceptance Criteria

### 7.1 Build Gate
- ✅ Validator PASS: 4 lib × 193 entry (55 peptides + 48 nootropics + 68 performance + 22 pharmaceutical)
- ✅ Build PASS ≤7s (expected ~5.7-6.0s)
- ✅ PWA precache <3050 KiB (≥2070 KiB margin under 5120 KiB cap; expected ~3030 KiB)
- ✅ 0 broken JSON output from subagent body files
- ✅ 0 missing-lang chunks on new entries
- ✅ 0 dangling related-id warnings (post-scrub)
- ✅ Composition-id existence check PASS on GLOW + cjc-1295-ipamorelin

### 7.2 Live Deploy Acceptance (Vercel ~3 min auto-deploy)
- ✅ 5 new entries render OK across 3 langs (sample 1 per lang per entry = 15 smoke-clicks)
- ✅ 8 deprecated slugs redirect-flash to library-top (sample 2-3 per lang)
- ✅ GLOW `composition[]` section renders with 3 component-cards; clicks deep-link to GHK-Cu/BPC-157/TB-500
- ✅ TOP10 grid unchanged (10-tile order identical)
- ✅ New category filter chips appear (`Termékenység/HPTA-támogatás` + `Állóképesség/Oxigéntranszport`) in all 3 langs
- ✅ Cross-link reciprocation works: Tesamorelin entry's related-grid shows tesamorelin-perf, click navigates to performance lib

---

## 8. Risks + Mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| Subagent schema-drift (Sub-Task 6 precedent: 2 drifts caught by validator) | Medium | Validator-gate pre-commit mandatory; fix-subagent recovery |
| GLOW composition[] schema not prod-tested (new field) | Medium | HCG-peptid inline-anchor before subagent dispatch; cjc-1295-ipamorelin retrofit pre-Subagent — 2 precedents for composition[] before Subagent D works |
| Dangling related-id miss on the 8 deprecated targets | Low | `scrub-deprecated-related.mjs` automated + validator warning gate + manual grep double-check |
| Redirect-flash timer race condition (user hash-navigates mid-flash) | Low | EntryDetailRoute useEffect cancel-flag (Phase 12 precedent), clearTimeout in cleanup |
| Workbox precache cap (5120 KiB) breach | Very Low | Post-build precache report; expected ~3030 KiB (well under) |
| Sean-content absent for GLOW/EPO anecdote → placeholder render | Acceptable | 101 placeholder entries already exist; consistent UX |
| EPO endurance-cat label confusion (perf lib lacks this cat) | Low | Cat labels HU/EN/PL clear; peptide-lib `endurance` = oxygen-transport (EPO-only on this lib), distinct from perf-stim-recovery |
| Phase-12 dual-shape `flat()`+`tr()` regressions on new entries | Low | flat-string default-export per lang (Phase 12 standard) |

---

## 9. Post-Ship Memory Writes

- `feedback_*`: `[[Subagent_Schema_Drift_Validator_Catches]]` reinforced (another mega-batch validation)
- `feedback_*`: `[[Composition_Field_New_Schema]]` new lesson (stack-entry-pattern precedent)
- `feedback_*`: `[[Deprecation_Redirect_Flash_Pattern]]` new lesson (hard-removal SEO-graceful pattern)
- `MEMORY.md` index update
- `project_molekulax.md` update (peptid lib new count + curation event)
- Status file: new session block at top per `/handoff` protocol
- Obsidian mirror: this spec + plan in `Projekt_Tudasbazis/`

---

## 10. Live State Final (Expected @ Ship)

- master HEAD `<new-hash>` PUSHED origin
- Tag `v0.23-peptide-curation` on master HEAD
- Validator PASS 4 lib **193 entry**
- Build PASS ~6s, PWA precache ~3030 KiB / 5120 KiB cap (~2090 KiB margin)
- Anecdote coverage: 81 entries on 193-total ~42% (was 81/182 ~44.5%, net dip because 5 new entries born as placeholders)
- Mega-phase 2026-06 progress unchanged: Sub-Task 7 (Images) still pending
