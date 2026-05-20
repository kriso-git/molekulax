# Sub-Task 6 — Fat Content (`v0.22-perf-fat`)

> **Parent mega-phase:** [2026-05-19-performance-library-restructure.md](2026-05-19-performance-library-restructure.md)
> **Sub-task:** 6/7 — Fat loss & Stimulants content (14 new RICH entries × HU/EN/PL + 1 retrofit Albuterol-variants)
> **Estimate:** Single-megapush (1 commit + 1 tag) — single working-session (or 2 if context-budget split)
> **Tag:** `v0.22-perf-fat`
> **Ship policy:** Single-megapush per user-choice 2026-05-20 — all 14 RICH entries + Albuterol retrofit + meta-records + validator-PASS in ONE commit, ONE tag, ONE push origin master.

---

## 1. Scope

Add **14 RICH entries** to the Fat loss & Stimulants sub-category (`subCategory: 'fat'`) across 6 sub-sections + **retrofit Albuterol** existing entry with `variants: [oral, inhaled]` schema. Inherits architecture, schema, validator gates, and UI from the master spec — this sub-task is **content-only + 1 variant-retrofit**, no new architecture changes (Sub-Task 1 already shipped Fat sub-section IDs).

### 1.1 Entry roster (14 new + 1 retrofit, 6 sub-sections)

| # | Entry ID | Display name | Sub-section | Tier | Form factors | Image template |
|---|----------|--------------|-------------|------|--------------|----------------|
| 1 | `mirabegron` | Mirabegron (Myrbetriq) | `beta` | 4 | `['oral']` | `tablet-pile-white.png` |
| 2 | `liothyronine` | Liothyronine (T3, Cytomel) | `thyroid` | 4 | `['oral']` | `/pharmaceutical/blister-white-round.png` (cross-folder) |
| 3 | `levothyroxine` | Levothyroxine (T4, Synthroid) | `thyroid` | 4 | `['oral']` | `/pharmaceutical/blister-white-round.png` (cross-folder) |
| 4 | `eca-stack` | ECA-stack (Ephedrine + Caffein + Aspirin) | `stim` | 3 | `['oral']` | `tablet-pile-white.png` |
| 5 | `super-shred` | Super-Shred (multi-stim blend) | `stim` | 3 | `['oral']` | `tablet-pile-white.png` |
| 6 | `l-carnitine` | L-Carnitine | `metabolic` | 4 | `['oral', 'aq']` **variants** | `tablet-pile-white.png` (oral) + `water-vial.png` (inj) |
| 7 | `gw-501516` | GW-501516 (Cardarine) | `metabolic` | 3 | `['oral']` | `tablet-pile-white.png` |
| 8 | `5-amino-1mq` | 5-Amino-1MQ | `metabolic` | 2 | `['oral']` | `tablet-pile-white.png` |
| 9 | `mots-c` | MOTS-c | `mito` | 3 | `['aq']` | `water-vial.png` |
| 10 | `slu-pp-332` | SLU-PP-332 | `mito` | 2 | `['oral']` | `tablet-pile-white.png` (research placeholder) |
| 11 | `bam15` | BAM15 | `mito` | 3 | `['oral']` | `tablet-pile-white.png` (research placeholder) |
| 12 | `tesamorelin-perf` | Tesamorelin (perf-doping) | `gh-axis` | 3 | `['aq']` | `water-vial.png` |
| 13 | `semaglutide-perf` | Semaglutide (perf-doping) | `gh-axis` | 4 | `['aq']` | `water-vial.png` |
| 14 | `retatrutide-perf` | Retatrutide (perf-doping) | `gh-axis` | 4 | `['aq']` | `water-vial.png` |
| — | `albuterol` (**retrofit**) | Albuterol (Ventolin) | `beta` | 3 | `['oral', 'inhaled']` **variants** | `tablet-pile-white.png` (oral) + placeholder `tablet-pile-white.png` (inhaled, Sub-Task 7 → `inhaler-asthma.png`) |

**Total new entries:** 14 RICH (HU/EN/PL bodies + meta-records).
**Albuterol retrofit:** schema-only update — existing 3 lang body files extended with `variants: [{id:'oral',routeId:'oral',...},{id:'inhaled',routeId:'inhaled',...}]`. No new lang body content.

### 1.2 Tier distribution

- **Tier 4 (7):** Mirabegron, Liothyronine, Levothyroxine, L-Carnitine, Semaglutide-perf, Retatrutide-perf, **Albuterol-update** — FDA/EMA Rx, deep clinical evidence (150-180 lines/lang)
- **Tier 3 (5):** ECA-stack, Super-Shred, GW-501516, MOTS-c, Tesamorelin-perf, **BAM15** — well-documented preclinical OR Phase II OR cycled-classical (130-160 lines/lang)
- **Tier 2 (2):** 5-Amino-1MQ, SLU-PP-332 — preclinical-only research-target chemicals (110-140 lines/lang, strongest "no humán evidence" framing)

**Note BAM15 = T3** (NOT T2): Salk 2024 preprint + Garcia-Manyes 2023 Nat Metab small-mammal-evidence → enough preclinical-evidence for T3 niche-tier, but no humán-trial yet.

Tier governs content-depth: T4 entries get richest FAQ/StudiesPanel/PMID-density; T2 entries get shortest body with strongest "research-only / preclinical-only" framing.

---

## 2. Cross-frame naming (Tesamorelin / Semaglutide / Retatrutide)

Per `[[Cross_Framed_Entry_Strategy]]` lesson (originated with MENT-test/MENT-19nor, repeated with HCG-perf/HMG-perf/FSH-rec-perf in Sub-Task 5):

- Entry IDs: `tesamorelin-perf`, `semaglutide-perf`, `retatrutide-perf` (suffix `-perf` reserves the unsuffixed namespace — already used by the peptide-library counterparts `tesamorelin`, `semaglutide`, `retatrutide`)
- Existing peptide-library entries unchanged (HIV-lipodystrophy clinical / T2DM-obesity Rx / TRIUMPH-4 anti-obesity framing remain)
- New perf-framed entries: explicit ill-egitim doping context, athletic cutting-cycle off-label use, blackmarket UGL-vial quality concerns, EMA 2024 Q3 "off-label aesthetic use" alert, pancreatitis/HR/glucose-dysregulation risks
- Body content overlap expected: ~50-60% chemistry/mechanism shared, ~40-50% framing-specific (doping-context vs clinical-context)
- `related: ['<peptid-counterpart>']` cross-link field on each perf-entry; peptide counterparts will be updated to reciprocate in a future session (NOT this sub-task)

---

## 3. Schema (inherits master spec § 3)

### 3.1 Required meta fields per entry

```js
{
  id: '<entry-id>',
  name: '<Brand name (Generic name)>',
  image: '/performance/<template>.png' OR '/pharmaceutical/<template>.png' (cross-folder),
  accentColor: '#f97316',        // Fat orange — exceptions documented below
  tagColor: 'rgba(249,115,22,0.18)',
  shortDesc: { hu: '...', en: '...', pl: '...' },
  tier: <2|3|4>,
  wadaStatus: 'banned' | 'restricted' | 'allowed',
  subCategory: 'fat',
  subSection: '<beta|thyroid|stim|metabolic|mito|gh-axis>',
  formFactors: [/* see § 3.2 */],
}
```

### 3.2 `formFactors` per entry-type

- Oral-tablet (Mirabegron, T3, T4, ECA-stack, Super-Shred, GW-501516, 5-Amino-1MQ, SLU-PP-332, BAM15): `['oral']`
- Aqueous-injectable lyophilized (MOTS-c, Tesa-perf, Sema-perf, Reta-perf): `['aq']`
- Multi-variant: **L-Carnitine** `['oral', 'aq']`; **Albuterol retrofit** `['oral', 'inhaled']`

### 3.3 `accentColor` exceptions

- **Default Fat entries:** `accentColor: '#f97316'`, `tagColor: 'rgba(249,115,22,0.18)'` (Fat orange per master spec § 4.1 PerformanceCategoryCards convention)
- **Research-chemical exceptions (5-Amino-1MQ, SLU-PP-332, BAM15):** `accentColor: '#a78bfa'`, `tagColor: 'rgba(167,139,250,0.18)'` (designer-purple, research-chemical signature per `[[SARM_Class_Color_Code_Convention]]` precedent, also applied to RU58841 in Sub-Task 5)

### 3.4 Variants (Phase C leverage extended)

Multi-variant inventory: master spec § 5.3 lists 12; this sub-task extends to **13**:
- **L-Carnitine** (new): `variants: [{id:'oral',routeId:'oral',image:'tablet-pile-white.png',bioavailability:'~15%',halfLife:'15h',dosing:'500-2000 mg/nap split'},{id:'inj',routeId:'aq',image:'water-vial.png',bioavailability:'100%',halfLife:'15h',dosing:'1-2 g IM/SC 2-3x/hét'}]`
- **Albuterol retrofit** (existing entry): `variants: [{id:'oral',routeId:'oral',image:'tablet-pile-white.png',halfLife:'4-6h',dosing:'4-8 mg PO TID'},{id:'inhaled',routeId:'inhaled',image:'tablet-pile-white.png-PLACEHOLDER-task7',halfLife:'2-3h (local)',dosing:'90 mcg/puff PRN MDI'}]` — image placeholder until Sub-Task 7 generates `inhaler-asthma.png`

Validator routeId allow-list (`['oil','aq','oral','topical','inhaled','nasal','im']`) — unchanged, no extensions needed.

### 3.5 Lab Terminal hard-fail compliance (Phase 11)

Required fields per entry, all HU/EN/PL strings (`LAB_FIELD_SOFT_FAIL=false` enforced):

#### `aromatization` semantics per entry-type

- **Non-steroid orals** (Mirabegron, T3, T4, L-Carnitine, ECA-stack, Super-Shred, 5-Amino-1MQ, SLU-PP-332, BAM15): `"Nem aromatizál (nem szteroid hatóanyag)"`
- **GW-501516**: `"Nem aromatizál — PPARδ-agonista, nem AR-binding"`
- **MOTS-c**: `"Nem aromatizál — mitokondriális peptid, nem szteroid-rokon"`
- **GH-axis-doping** (Tesa-perf, Sema-perf, Reta-perf): `"Indirect: GH/IGF-1 emelés → másodlagos Test-aromatizáció lassított zsírvesztés alatt (csekély impact)"`
- **Albuterol** (existing field, retain as `"Nem aromatizál (β2-agonista, nem szteroid)"`)

#### `hepatotoxicity` semantics per entry

- **T3/T4 (Liothyronine, Levothyroxine)**: `"Alacsony — tireoid-overdose hyperthyroid-szindrómát okoz (cardiac arrhythmia, hyperthermia), NEM közvetlen hepatikus"`
- **Mirabegron**: `"Alacsony — DILI ritka, ALT-emelkedés <2% (Khullar 2013 OAB-trial)"`
- **L-Carnitine**: `"Alacsony — endogén-szintetizált, krónikus oral <3 g/nap hepatikusan biztonságos"`
- **ECA-stack / Super-Shred**: `"Közepes — efedrin krónikus cardio-stress + acetaminophen ECA-stack-blend kombináció esetén hepatikus interakció (Yokota 2013)"`
- **GW-501516**: `"⚠️ Magas — Sprague-Dawley rat 2-éves karcinogenitás (intestinal/hepatocellular tumors, GSK 2007 belső, Sprenger 2010 Phase II terminated)"`
- **5-Amino-1MQ / SLU-PP-332 / BAM15**: `"Ismeretlen — research-chemical / preclinical-only, hosszú-távú humán adat hiányzik"`
- **MOTS-c**: `"Alacsony — endogén mitokondriális peptid, supraphysiological dose preclinical-only humán-evidence"`
- **Tesa-perf**: `"Alacsony — DILI ritka, injection-site reaction dominens"`
- **Sema-perf / Reta-perf**: `"Alacsony — DILI ritka, pancreatitis-risk DOMINENS (gastric residence + lipase elevation, EMA 2024 Q3 alert)"`

#### `bloodwork` protocol per entry (Pre/Mid/Post, tier ≥3 required)

- **T3 / T4**: TSH, free-T3, free-T4, reverse-T3, antibodies (TPO, Tg) — Pre/Mid/Post
- **Mirabegron**: blood pressure home-tracking, EKG-baseline, lipid panel — Pre/Mid (2 hét), Post (8 hét)
- **ECA / Super-Shred**: BP home-tracking 2x/nap, EKG-baseline + 4-week-check, lipid panel, liver enzymes (acetaminophen-blend miatt)
- **GW-501516**: liver enzymes (ALT/AST/ALP), bilirubin, full-CBC, CRP, urine sediment (carcinogenitás-marker monitoring)
- **L-Carnitine**: TMAO baseline (Koeth 2013 Nature, cardiovascular-risk-marker), lipid panel — only if dosing >2 g/nap chronic
- **MOTS-c**: fasting glucose, HbA1c, lactate baseline, IGF-1
- **Tesa-perf / Sema-perf / Reta-perf**: HbA1c, fasting glucose, fasting lipase, amylase, IGF-1, lipid panel; **Reta-perf-spec**: cardiovascular MRI + ECG baseline (HR side-effect documented TRIUMPH-4 Jastreboff 2023)
- **5-Amino-1MQ / SLU-PP-332 / BAM15**: NOT mandatory (tier-2 exception) — optional "evidence-baseline" mention but no clinical protocol (no humán-evidence baseline exists)

---

## 4. Edge-cases

### 4.1 GW-501516 carcinogenicity framing
The Sprague-Dawley rat 2-year carcinogenicity result (GSK 2007 internal, later PMID 28768537) is **mandatorily mentioned** in every entry pillar (whatIs + Quality.avoid + StudiesPanel + FAQ). Tier-3 entry, **NOT** downgradable to T2 — clinical-evidence Phase II (Sprenger 2010 PMID 20189836) available, just terminated. Disclaimer: explicit "research-only, ne használd" in `quality.avoid[]`. WADA S4.5 banned 2009. No dosing-tutorial.

### 4.2 ECA-stack legal status
HU/EN/PL legal-context noted:
- HU: ephedrine ATC R03CA02 → vény-köteles, OTC NEM
- EN/PL: "OTC in some jurisdictions, Rx-only in EU since 2004 FDA ban"
- Historical: Astrup 1992 Lancet obesity-trial (PMID 1346830) + FDA 2004 ban (Heart-Mind-Body, 100+ halál)
NEM tutorial-shape — historical framing + explicit `quality.avoid[]` BP/cardiac contraindications.

### 4.3 Super-Shred = generic stim-blend
NOT single FDA-Rx drug — proprietary blend label (ECA-rokon + yohimbine HCl + synephrine + 1,3-DMAA típusos). Body: blend-component breakdown (each with PMID), Cohen 2014 JAMA (PMID 25406303) "label-claim vs actual-content discrepancy" warning, FDA 2013 1,3-DMAA ban. Tier-3, framing: "DON'T do at home" + explicit `quality.avoid[]`.

### 4.4 SLU-PP-332 / BAM15 ZERO humán-evidence
SLU-PP-332: rat-paper sorozat (Salk 2024 preprint Billon et al., bioRxiv) — ERRα synthetic-agonist, preclinical-only.
BAM15: small-mammal series (Garcia-Manyes 2023 Nat Metab + Alexopoulos 2020 Nat Comms) — mitochondrial uncoupler, DNP-rokon mechanism but safer therapeutic window.
Both: `"preclinical-only"` disclaimer in shortDesc + whatIs + studies, no dosing recommendations, explicit "preclinical-target" framing in Quality.avoid. Tier-2 strictest. Image placeholder `tablet-pile-white.png` — NEM cserélhető Sub-Task 7-ben (oral-research-pill marad).

### 4.5 Levothyroxine vs Liothyronine athletic-doping nuance
- T4 Levothyroxine: `wadaStatus: 'allowed'` BUT documented diagnosis required (hypothyroidism); athlete TUE-process WADA 2024 explicit
- T3 Liothyronine: `wadaStatus: 'banned'` (NADA Switzerland 2023, USADA 2024 update: "in-competition banned for non-Rx athletes")
HU/EN/PL warning szövegszinten: `quality.avoid[]` "klinikai-Rx legitim hypothyroidism diagnózissal, sportoló-cutting-cycle off-label NEM legitim + WADA-violation".

### 4.6 GLP-1 perf-doping framing (Sema-perf, Reta-perf)
Body content **NEM** klinikai-obesity dose-tutorial (peptide-counterpart entry handles that). Body fókusz:
- Athletic cutting-cycle off-label 6-12 hét framing
- Pancreatitis-risk DOMINENS (EMA 2024 Q3 alert "off-label aesthetic use")
- Blackmarket UGL-vial quality concerns
- Lean-mass-loss concern (Wilding 2021 SURMOUNT-1: ~40% weight-loss from lean-mass without resistance-training)
- Reta-perf cardiovascular MRI concern (Jastreboff 2023 TRIUMPH-4 HR-elevation)
Tier-4 mert FDA-Rx-history (Wegovy 2021 / Lilly LY3437943 Phase 3) → klinikai-evidence-rich, but framing is doping-context. `related: ['semaglutide', 'retatrutide']` cross-link to peptide counterparts.

### 4.7 Cross-references intra-Fat library
Body section "Stack-references" via `related: [...]` field — intra-library cross-links (e.g., `5-amino-1mq.related = ['l-carnitine', 'mots-c', 'gw-501516']`), NOT tutorial-shape stack-protocols. Stack-mentions are evidence-status notes, NOT dosing-combinations. Hard-rule: ZERO cross-stack-dosing-tutorial.

### 4.8 Cross-folder image references (T3/T4 → pharmaceutical/)
Liothyronine + Levothyroxine: image path `'/pharmaceutical/blister-white-round.png'` (cross-folder reuse pattern per Sub-Task 5 PCT precedent, `[[Cross_Folder_Image_Reference_Pattern]]`). NO image duplication. Sub-Task 7 mass-edit script may optionally migrate to `/performance/blister-white-round.png` namespace.

---

## 5. Source-policy (per `[[feedback_forbidden_sources]]`)

### 5.1 Strict peer-reviewed (StudiesPanel, FAQ, key claim citations)
- **PubMed** (PMID required for every claim): Mirabegron Khullar 2013 OAB-trial, T3/T4 Stott 2017 TRUST NEJM + Bunevicius 1999 NEJM, ECA Astrup 1992 Lancet, GW-501516 Sprenger 2010 Phase II + Wei 2017 PMID 28768537 carcinogenicity, MOTS-c Lee 2015 Cell Metab, Sema SURMOUNT-1 Wilding 2021 NEJM, Reta Jastreboff 2023 TRIUMPH-4 NEJM, Tesa Falutz 2007 NEJM HIV-lipodystrophy
- **FDA Drug Label**: openFDA Drug Label API + DailyMed fallback (per `[[OpenFDA_API_Truncates_Long_Labels]]`)
- **EMA SmPC**: Mirabegron Betmiga, Semaglutide Wegovy, Retatrutide (preliminary 2025 EMA filing pending)
- **PubChem**: SMILES, molecular weight, chemical structure for all 14 entries
- **WADA 2025 prohibited list**: cross-reference for `wadaStatus`

### 5.2 Sean's curated notes + dopamine.club (body content only, no citation)
ALLOWED for whatIs + mechanism-narrative + practical-anecdote framing (NOT for FAQ Q&A claims or StudiesPanel — those stay PubMed-only). Hard-rule: every pharmacological claim must be PubMed-cross-validated before inclusion, even if the phrasing came from Sean's notes.

### 5.3 Sources expected per tier
- **T4 (7 entries)**: 5-7 PMID per entry, FDA/EMA SmPC reference, full mechanism + clinical-trial narrative
- **T3 (5 entries)**: 3-5 PMID per entry, preclinical OR Phase II evidence sufficient
- **T2 (2 entries)**: 1-2 preclinical paper per entry + explicit "preclinical-only / no humán-evidence" framing

---

## 6. Ship cadence & execution strategy

### 6.1 Single-megapush per user-choice 2026-05-20

ALL 14 RICH entries + Albuterol retrofit + meta-records + validator-PASS in:
- **ONE commit** (`feat(perf): Sub-Task 6 COMPLETE — Fat content (14 entries + Albuterol-variants)`)
- **ONE tag** (`v0.22-perf-fat`)
- **ONE push** (`git push origin master --follow-tags`)

NO per-sub-section partial commits, NO per-tier partial commits, NO preview branch. Working-tree may stay dirty across multiple working-sessions if context-budget requires split — `git stash` between sessions OR `git commit --amend` against a WIP commit then squash on final push.

### 6.2 Hybrid Z-shape execution (option A per brainstorm)

**Inline batch (deepest-first precedens-anchor, 6 new entries + 1 retrofit, ~150-180 sor/lang each except Albuterol-retrofit which is schema-only):**
1. **Mirabegron** (T4, β3-agonist, ~150 sor/lang)
2. **Liothyronine** (T4, T3, ~165 sor/lang)
3. **Levothyroxine** (T4, T4, ~155 sor/lang)
4. **L-Carnitine** (T4, variants, ~170 sor/lang including variants[] detail)
5. **Semaglutide-perf** (T4, GLP-1, ~180 sor/lang — strongest doping-context)
6. **Retatrutide-perf** (T4, triple-agonist, ~180 sor/lang — strongest cardiovascular concern)
7. **Albuterol retrofit** (existing entry, schema-update only — variants[] added to 3 lang body files, minimal new content)

**Subagent batch (2 parallel `general-purpose` subagents, ~10-15 min wall-clock, run_in_background:true):**
- **Subagent 1 — Stim + Metabolic-niche (4 entries):**
  - `eca-stack` (T3, ~140 sor/lang)
  - `super-shred` (T3, ~140 sor/lang)
  - `gw-501516` (T3, ~155 sor/lang — carcinogenicity framing dominent)
  - `5-amino-1mq` (T2, ~125 sor/lang)
- **Subagent 2 — Mito + GH-axis (4 entries):**
  - `mots-c` (T3, ~150 sor/lang)
  - `slu-pp-332` (T2, ~115 sor/lang)
  - `bam15` (T3, ~135 sor/lang)
  - `tesamorelin-perf` (T3, ~150 sor/lang)

**Subagent prompt-template** (each subagent receives):
- Plan-section with 4-entry detailed brief (chemistry, t1/2, dosing, PMID list, WADA-status, Lab Terminal field values, FAQ topics)
- Reference: `mirabegron.js` HU body file (precedens-anchor)
- Lab Terminal hard-fail field-formátum (aromatization + hepatotoxicity + bloodwork)
- Tier-depth target per-entry
- Source-PMID-list per entry
- Return contract: 12 new lang body file paths + 4 meta-record JSON snippets

### 6.3 Token-cost estimate

- Inline batch: ~280K main-context tokens (6 entries × ~45K/entry HU+EN+PL + retrofit ~10K)
- Subagent batch: ~150K total (2 subagents × ~75K cold-paste + body-output)
- Finalize (validator + build + commit + push): ~30K
- **Total estimate: ~460K tokens** across single working-session or 2-session split

### 6.4 Wall-clock estimate

- Inline batch: ~30-35 min
- Subagent batch: ~12-15 min (parallel)
- Finalize: ~5-10 min
- **Total: ~50-60 min** single working-session (assuming no context-split needed)

---

## 7. Validator extensions

No new validator rules. All existing Phase 11 + Sub-Task 1 rules apply unchanged:

1. `subCategory: 'fat'` required + parity with `library.subCategories[].id`
2. `formFactors[]` parity with `library.formFactors[].id`, min 1 element, no duplicates
3. `subSection` parity with `library.subSections.fat[].id` (one of `beta|thyroid|stim|metabolic|mito|gh-axis`)
4. 5 sub-categories present in `library.subCategories` (DHT/Test/19-Nor/PCT/Fat) — already passes since Sub-Task 1
5. `variants[].routeId` allow-list extended to `['oil','aq','oral','topical','inhaled','nasal','im']` — already present in validator
6. Lab Terminal hard-fail: `aromatization` + `hepatotoxicity` mandatory HU/EN/PL; `bloodwork` mandatory for tier ≥3 with sub-category fat-context exception (5-Amino-1MQ + SLU-PP-332 T2 exempt; BAM15 T3 IS required)
7. Per-lang body file parity: every meta-entry's id must have `entries/{hu,en,pl}/<id>.js` file

**Per-task validator gate command** (run after every inline entry + after each subagent return):
```bash
node scripts/validate-library-meta.mjs
```

Expected final state: `✅ 4 lib, 196 entry (58 pep + 48 noot + 68 perf + 22 pharma)` — perf goes from 54 → 68 (+14 new entries; Albuterol retrofit is existing).

**Per-task build gate** (run before commit):
```bash
npm run build
```

Expected: PASS, bundle size unchanged for main/vendor (entries are lazy-loaded per-entry chunks), PWA precache stays under 5MB cap (~3000-3200 KiB target).

---

## 8. Risks & mitigations

### 8.1 Risk: Subagent pattern divergence
**Risk:** 2 parallel subagents may produce schema-inconsistent outputs (different FAQ-shape, different StudiesPanel structure, missing Lab Terminal fields).
**Mitigation:** Inline 6+1 entries FIRST so precedens-anchor `mirabegron.js` is fully written before subagent kickoff. Each subagent receives `mirabegron.js` HU as reference + Lab Terminal field-formátum guide. Validator runs after each subagent return.

### 8.2 Risk: Context-budget exhaustion (single session)
**Risk:** ~460K total tokens may exceed single-session main-context if conversation history accumulates.
**Mitigation:** Single-megapush policy does NOT require single-session execution. Working-tree can stay dirty across sessions via `git stash` OR WIP-commit-amend pattern. If split: Session A = inline 6+1 entries + Subagent 1 dispatch; Session B = Subagent 2 dispatch + finalize + push.

### 8.3 Risk: GW-501516 carcinogenicity claim accuracy
**Risk:** PMID 28768537 (Wei 2017) may not be the canonical carcinogenicity reference — Sprenger 2010 Phase II termination citation needs verification.
**Mitigation:** WebFetch verify PMID + GSK Form 10-K 2007 mention before writing entry body. If PMID 28768537 doesn't match, substitute correct primary source.

### 8.4 Risk: Retatrutide Phase 3 publication date
**Risk:** TRIUMPH-4 may be Phase 3 ongoing (no full publication yet); Jastreboff 2023 NEJM is Phase 2 (PMID 37356866). Final Phase 3 NEJM publication may be 2026.
**Mitigation:** Cite Phase 2 (Jastreboff 2023 NEJM Phase 2 PMID 37356866) AND status-mention Phase 3 TRIUMPH-4 ongoing 2025-2026. Update post-publication.

### 8.5 Risk: PWA precache breach near 5MB cap
**Risk:** 14 new entries × 3 lang = 42 new chunks (~2-3 KiB each gzip). Current precache 2976 KiB / 5120 KiB cap. Estimate +120 KiB → ~3100 KiB (well under cap). LOW RISK.
**Mitigation:** PWA precache split (Sub-Task 5 unblocker `v0.19.1-pwa-precache-split`) already separates entry-body chunks from precache. Entry-body chunks go to `assets/entry-data/` runtime cache. No additional precache pressure expected.

### 8.6 Risk: Albuterol retrofit breaks existing entry
**Risk:** Adding `variants[]` to existing single-route entry may shift EntryDetail rendering (VariantToggle activation).
**Mitigation:** VariantToggle conditional-layout (post-Anecdote `f0e5a95`+`3661ea4`) handles 2-variant case as `inline-flex` pill-row. Smoke-test Albuterol after retrofit: variants render correctly, existing oral-route content displays in oral-variant, inhaled-variant has minimal new content (just dosing/halfLife/image differences).

---

## 9. Acceptance criteria

1. ✅ 14 new RICH entries in `src/data/libraries/performance/entries/{hu,en,pl}/<id>.js` (42 new lang body files)
2. ✅ 14 new meta-records appended to `src/data/libraries/performance/index.js` `LIBRARY_ENTRY_META`
3. ✅ Albuterol retrofit: `variants[]` added to existing 3 lang body files; meta-record `formFactors` updated to `['oral','inhaled']`
4. ✅ Validator PASS: `node scripts/validate-library-meta.mjs` → `4 lib, 196 entry (58 + 48 + 68 + 22)`
5. ✅ Build PASS: `npm run build` → no errors, PWA precache <3300 KiB
6. ✅ Lab Terminal hard-fail compliance: every new entry has `aromatization` + `hepatotoxicity` HU/EN/PL; tier ≥3 entries have `bloodwork` (exceptions: 5-Amino-1MQ + SLU-PP-332 T2-exempt)
7. ✅ All PMID citations valid (WebFetch verification for high-stakes claims: GW-501516 carcinogenicity, Sema/Reta-perf Phase 2/3 trials)
8. ✅ `accentColor: '#f97316'` on 11 default Fat entries; `'#a78bfa'` on 3 research-chemicals (5-Amino-1MQ, SLU-PP-332, BAM15)
9. ✅ Cross-frame `related: [...]` field on Tesa-perf / Sema-perf / Reta-perf pointing to peptide counterparts
10. ✅ Cross-folder image reference `/pharmaceutical/blister-white-round.png` used by Liothyronine + Levothyroxine
11. ✅ Single commit + single tag `v0.22-perf-fat` + single push origin master
12. ✅ Vercel deploy live, post-deploy smoke check: 14 new entries render correctly in EntryDetail, Albuterol VariantToggle works (oral/inhaled toggle)
13. ✅ Status memory + Obsidian Statusz updated with session summary
14. ✅ Plan-file mirrored to `MolekulaX_SubTask6_Fat_Plan.md` in Obsidian Projekt_Tudasbazis (per `[[feedback_phase_specs_obsidian]]`)

---

## 10. Mega-phase progress after this sub-task

| Sub-task | Status | Entries shipped |
|---|---|---|
| 1 — Architecture + rebucket | ✅ SHIPPED (`v0.16-perf-arch`) | rebucket only |
| 2 — DHT content | ✅ SHIPPED (`v0.17-perf-dht`) | 5 new |
| 3 — Test content | ✅ SHIPPED (`v0.18-perf-test`) | 6 new |
| 4 — 19-Nor content | ✅ SHIPPED (`v0.19-perf-19nor`) | 8 new |
| 5 — PCT content | ✅ SHIPPED (`v0.20-perf-pct`) | 20 new |
| **6 — Fat content** | **🟢 THIS** (`v0.22-perf-fat`) | **14 new + Albuterol retrofit** |
| 7 — Images + polish | 🔵 PENDING (`v0.23-perf-restructure-complete`) | 0 new (image-pipeline only) |

After Sub-Task 6: **6/7 sub-task SHIPPED (~86%), 68/68 perf entries live (~100%)**. Only Sub-Task 7 (Gemini-template generation + mass-image-update script + final LH sweep + mega-PR consolidation) remains.

---

## 11. Out-of-scope (deferred to Sub-Task 7 or backlog)

- New Gemini-image templates (`inhaler-asthma.png`, `oral-syringe.png`, `transdermal-patch.png`, `ampoule-glass.png`) — Sub-Task 7
- Mass-image-path-update script (`update-library-images.mjs`) — Sub-Task 7
- Cross-folder image migration (`/pharmaceutical/blister-...` → `/performance/blister-...` namespace) — Sub-Task 7 optional
- Albuterol inhaled-variant image placeholder → real `inhaler-asthma.png` swap — Sub-Task 7
- Peptide-library counterpart reciprocal cross-links (`tesamorelin.related += ['tesamorelin-perf']`) — separate session (peptid library add/remove batch backlog item)
- Live Lighthouse 10-URL sweep with new Fat-entries — final mega-PR validation Sub-Task 7
