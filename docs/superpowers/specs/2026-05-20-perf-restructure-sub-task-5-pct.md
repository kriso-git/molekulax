# Sub-Task 5 — PCT Content (`v0.20-perf-pct`)

> **Parent mega-phase:** [2026-05-19-performance-library-restructure.md](2026-05-19-performance-library-restructure.md)
> **Sub-task:** 5/7 — PCT & Fertility content (20 new RICH entries × HU/EN/PL)
> **Estimate:** 3 sessions
> **Tag:** `v0.20-perf-pct`
> **Branch policy:** Direct-to-master per-session, no preview branch (per `[[Live_Incremental_Production_Push_Mid_Megaphase]]` lesson)

---

## 1. Scope

Add 20 RICH entries to the PCT & Fertility sub-category (`subCategory: 'pct'`) across 6 sub-sections. Inherits architecture, schema, validator gates, and UI from the master spec — this sub-task is **content-only**, no architecture changes.

### 1.1 Entry roster (20 entries, 6 sub-sections)

| # | Entry ID | Display name | Sub-section | Tier | Image template |
|---|----------|--------------|-------------|------|----------------|
| 1 | `nolvadex` | Nolvadex (Tamoxifen) | `serm` | 5 | `tablet-pile-white.png` |
| 2 | `clomid` | Clomid (Clomiphene) | `serm` | 5 | `tablet-pile-white.png` |
| 3 | `enclomiphene` | Enclomiphene (Androxal) | `serm` | 3 | `tablet-pile-white.png` |
| 4 | `raloxifene` | Raloxifene (Evista) | `serm` | 3 | `tablet-pile-white.png` |
| 5 | `hcg-perf` | HCG (Pregnyl) | `gonad` | 4 | `water-vial.png` |
| 6 | `hmg-perf` | HMG (Menopur) | `gonad` | 3 | `water-vial.png` |
| 7 | `fsh-rec-perf` | FSH-rec (Gonal-F) | `gonad` | 3 | `water-vial.png` |
| 8 | `anastrozol` | Anastrozol (Arimidex) | `ai` | 4 | `blister-white-oval.png` |
| 9 | `letrozol` | Letrozol (Femara) | `ai` | 4 | `blister-white-oval.png` |
| 10 | `exemestane` | Exemestane (Aromasin) | `ai` | 4 | `blister-white-oval.png` |
| 11 | `cabergoline` | Cabergoline (Dostinex) | `prolactin` | 4 | `blister-white-oval.png` |
| 12 | `bromocriptine` | Bromocriptine (Parlodel) | `prolactin` | 4 | `blister-white-oval.png` |
| 13 | `pramipexole` | Pramipexole (Mirapex) | `prolactin` | 3 | `blister-white-oval.png` |
| 14 | `kisspeptin-10` | Kisspeptin-10 | `axis` | 3 | `water-vial.png` |
| 15 | `gonadorelin` | Gonadorelin (Factrel) | `axis` | 3 | `water-vial.png` |
| 16 | `pregnenolone` | Pregnenolone | `axis` | 3 | `tablet-pile-white.png` |
| 17 | `dhea` | DHEA | `axis` | 3 | `tablet-pile-white.png` |
| 18 | `finasteride` | Finasteride (Propecia) | `5ar` | 4 | `blister-white-round.png` |
| 19 | `dutasteride` | Dutasteride (Avodart) | `5ar` | 4 | `blister-white-round.png` |
| 20 | `ru58841` | RU58841 | `5ar` | 2 | placeholder `tablet-pile-white.png` (Sub-Task 7 generates `topical-solution-clear.png`) |

### 1.2 Tier distribution

- **Tier 5 (2):** Nolvadex, Clomid — AAS-PCT golden-standard, 60+ years FDA Rx, deepest content
- **Tier 4 (8):** HCG-perf, Anastrozol, Letrozol, Exemestane, Cabergoline, Bromocriptine, Finasteride, Dutasteride — FDA/EMA Rx, well-documented clinical use
- **Tier 3 (9):** Enclomiphene, Raloxifene, Pramipexole, Pregnenolone, DHEA, Kisspeptin-10, Gonadorelin, HMG-perf, FSH-rec-perf — niche-but-documented or research-emerging
- **Tier 2 (1):** RU58841 — research chemical, no clinical Rx, topical-only

Tier governs content-depth: tier 5 entries have richest FAQ/StudiesPanel/historical-context; tier 2 entries have shortest body with stronger "research-only" framing.

---

## 2. Cross-frame naming (HCG/HMG/FSH-rec)

Per `[[Cross_Framed_Entry_Strategy]]` lesson (originated with MENT-test/MENT-19nor):

- Entry IDs: `hcg-perf`, `hmg-perf`, `fsh-rec-perf` (suffix `-perf` reserves the unsuffixed namespace for the future peptid-library batch)
- Future peptid-batch will add: `hcg-peptid`, `hmg-peptid`, `fsh-rec-peptid` (fertility-clinic framing) with `related: [...]` cross-link both directions
- Body content overlap expected: ~70-80%; framing emphasis differs (PCT-context post-AAS-cycle recovery here; clinical fertility-restoration there)
- The 3 perf-framed entries here are self-contained; the cross-link sections are added when the peptid counterparts ship

---

## 3. Schema (inherits master spec § 3)

### 3.1 Required meta fields per entry

```js
{
  id: '<entry-id>',
  name: '<Brand name (Generic name)>',
  image: '/performance/<template>.png',
  accentColor: '#D4537E',        // PCT pink — exceptions documented below
  tagColor: 'rgba(212,83,126,0.18)',
  shortDesc: { hu: '...', en: '...', pl: '...' },
  tier: <2|3|4|5>,
  wadaStatus: 'banned' | 'restricted' | 'allowed',
  subCategory: 'pct',
  subSection: '<serm|gonad|ai|prolactin|axis|5ar>',
  formFactors: [/* see § 3.2 */],
}
```

### 3.2 `formFactors` per entry-type

- Oral tablet entries (SERMs, AIs, Cabergoline, Bromocriptine, Pramipexole, Finasteride, Dutasteride, Pregnenolone, DHEA): `['oral']`
- Lyophilized injectables (HCG-perf, HMG-perf, FSH-rec-perf, Kisspeptin-10, Gonadorelin): `['aq']` (reconstituted with bacteriostatic water → aqueous SC/IM)
- RU58841: `['topical']` (alcohol-based hairloss solution)

### 3.3 `accentColor` exceptions

- **Default PCT entries**: `accentColor: '#D4537E'`, `tagColor: 'rgba(212,83,126,0.18)'`
- **RU58841**: `accentColor: '#a78bfa'`, `tagColor: 'rgba(167,139,250,0.18)'` (designer-purple, research-chemical signature — `[[SARM_Class_Color_Code_Convention]]` precedent)

### 3.4 No variants

All PCT entries are single-route. Multi-vial-brand differences (HMG: Pergonal historical vs Menopur modern; HCG: Pregnyl vs Novarel vs Choragon) are noted in `shortDesc` and body content **without** using the `variants[]` schema. Rationale: pharmacokinetic + clinical-protocol differences between brands are negligible vs the ester-route differences in AAS entries.

### 3.5 Lab Terminal hard-fail compliance (Phase 11)

Required fields per entry, all HU/EN/PL:

- **`aromatization`** — PCT-context-shifted semantics:
  - AI entries (Anastrozol, Letrozol, Exemestane): `"Nem aromatizál — gátolja a CYP19-aromatázt (IC50: ...)"`
  - SERM entries (Nolvadex, Clomid, Enclomiphene, Raloxifene): `"Nem aromatizál — az ösztrogén-receptort blokkolja, NEM az enzimet"`
  - HCG-perf: `"Endogén Test-emelést indukál → másodlagos aromatizáció a herékben"`
  - DHEA, Pregnenolone: `"Aromatizál (Test → E2 perifériás konverzió)"`
  - Cabergoline/Pramipexole/Bromocriptine/Finasteride/Dutasteride/RU58841: `"Nincs"` vagy context-megfelelő
- **`hepatotoxicity`** — most PCT drugs are non-17α: `"Alacsony"` baseline; exceptions:
  - Cabergoline: `"Ritka cardiac valvulopathy magas dózison (DA-agonista, NEM hepatikus)"`
  - Pramipexole: `"Alacsony hepatikus, ritka impulzus-kontroll zavar"`
  - DHEA at very high doses: `"Alacsony-közepes hosszú használat mellett (>50 mg/nap 6+ hónap)"`
- **`bloodwork`** — tier ≥3 entries require Pre/Mid/Post protocol with PCT-specific markers:
  - **Pre**: E2, total/free Testosterone, LH, FSH, SHBG, Prolactin, lipid panel, liver enzymes
  - **Mid** (4-6 weeks into PCT): same panel, focus on recovery trajectory
  - **Post** (8-12 weeks): confirm hormonal axis restoration
  - Specific extras: AI entries → E2-trough timing critical; HCG → ITT (intratesticular Test, indirect via E2/Test ratio); Pramipexole → no specific markers required

---

## 4. Edge-cases

### 4.1 RU58841 mechanism clarification

- Categorized in `5ar` sub-section by **use-case** (hairloss prevention during AAS cycles), not by mechanism
- Body content + FAQ explicitly clarify: RU58841 is a **peripheral non-steroidal AR antagonist** (topical-only, locally inactivated by serum esterases → minimal systemic absorption). **NOT** a 5α-reductase inhibitor
- Mechanism-explainer in `mechanism` field + dedicated FAQ entry ("Why is RU58841 listed under 5α-reductase inhibitors if it's an AR antagonist?")
- Precedent: `[[YK11_Steroid_SARM_Borderline_Compound]]` (similar mechanism-clarification pattern for misleadingly-named compounds)

### 4.2 DHEA / Pregnenolone scope

- Full RICH treatment at tier 3 (NOT supplement-stub)
- `shortDesc` explicitly flags OTC supplement status + weak PCT clinical evidence
- Sources prioritize peer-reviewed (Wiehle 2014 DHEA Phase II PMID 24913480, Mosconi 2017 Pregnenolone review PMID 28259555); body content may also reference HYBRID per `[[feedback_forbidden_sources]]`
- Lab Terminal compliance same as other tier 3 entries (bloodwork Pre/Mid/Post, full HU/EN/PL)

### 4.3 HMG vs FSH-rec distinction

- HMG (Menopur, Pergonal) = urinary-extracted FSH + LH mixture (~75 IU each per vial)
- FSH-rec (Gonal-F, Puregon) = recombinant FSH only (no LH activity)
- Body content explains use-case difference: HMG for full HPG-axis restart (provides both gonadotropins); FSH-rec for isolated spermatogenesis maintenance when LH is sufficient endogenously or via HCG co-administration

---

## 5. Source policy

Per `[[feedback_forbidden_sources]]` HYBRID rule:

- **Studies / StudiesPanel sections**: peer-reviewed ONLY (PubMed PMIDs + FDA SmPC + EMA SPC + PubChem CIDs)
- **Body content** (mechanism, dosing, FAQ, historical context, anekdota): MAY use dopamine.club + sean's curated notes (no citation back to them) + peer-reviewed
- Peer-reviewed sources MUST be linked (PMID/DOI/FDA-label-URL) in StudiesPanel; body content links optional

Priority sources per entry-class:

| Sub-section | Primary peer-reviewed sources |
|---|---|
| **SERM** | FDA Nolvadex SmPC, FDA Clomid SmPC, Wiehle 2014 (Enclomiphene PMID 24913480), Cummings 1999 (Raloxifene MORE trial PMID 10580020) |
| **Gonad** | FDA Pregnyl SmPC, EMA Menopur SPC, EMA Gonal-F SPC, Liu 2002 (HCG dosing PMID 12424222) |
| **AI** | FDA Arimidex SmPC, FDA Femara SmPC, FDA Aromasin SmPC, ATAC trial 2002 (Buzdar PMID 12081816) |
| **Prolactin** | EMA Dostinex SPC, EMA Parlodel SPC, FDA Mirapex SmPC, Webster 1994 (Cabergoline vs Bromocriptine PMID 8090165) |
| **Axis** | Jayasena 2017 (Kisspeptin-10 PMID 27959703), Smals 1986 (Gonadorelin PMID 3093469), Wiehle 2014 (DHEA), Mosconi 2017 (Pregnenolone) |
| **5AR** | FDA Propecia SmPC, FDA Avodart SmPC, Sawaya 1997 (RU58841 PMID 9224249) |

---

## 6. Ship cadence (Approach A: sub-section sequential)

Per `[[Live_Incremental_Production_Push_Mid_Megaphase]]` lesson — push directly to master each session, tag only at sub-task completion.

### Session 1 — SERM + Gonad (7 entries)
- 4 SERM entries: Nolvadex, Clomid, Enclomiphene, Raloxifene
- 3 Gonad entries: hcg-perf, hmg-perf, fsh-rec-perf
- Meta-update in `src/data/libraries/performance/index.js` (+7 meta records)
- Validator PASS + build PASS gate
- Commit: `feat(perf): Sub-Task 5 PROGRESS — SERM + Gonad PCT content (7/20 entries)`
- Push: `git push origin master`

### Session 2 — AI + Prolactin + 5AR (9 entries)
- 3 AI entries: Anastrozol, Letrozol, Exemestane
- 3 Prolactin entries: Cabergoline, Bromocriptine, Pramipexole
- 3 5AR entries: Finasteride, Dutasteride, RU58841
- Meta-update (+9 meta records, RU58841 with TODO for image-template)
- Validator PASS + build PASS gate
- Commit: `feat(perf): Sub-Task 5 PROGRESS — AI + Prolactin + 5AR PCT content (16/20 entries)`
- Push: `git push origin master`

### Session 3 — Axis + finalize (4 entries + tag)
- 4 Axis entries: Kisspeptin-10, Gonadorelin, Pregnenolone, DHEA
- Meta-update (+4 meta records)
- Final validator PASS + build PASS gate
- Commit: `feat(perf): Sub-Task 5 COMPLETE — PCT content (20/20 entries)`
- Tag: `v0.20-perf-pct`
- Push: `git push origin master && git push origin v0.20-perf-pct`

---

## 7. Validation gates

### 7.1 Per-session gate (mandatory)
1. **Validator PASS** — `node scripts/validate-library-meta.mjs` exits 0
2. **Build PASS** — `npm run build` succeeds (validator runs as pre-build)
3. **Lab Terminal soft/hard-fail PASS** — all new entries include `aromatization` + `hepatotoxicity` HU/EN/PL; tier ≥3 entries include `bloodwork` Pre/Mid/Post HU/EN/PL
4. **No console errors** in `npm run preview` for `/entry/performance/<new-id>` URLs (smoke-spot-check 2 random per session)

### 7.2 Post-sub-task gate (Session 3 only)
1. Entry count: validator reports **183 entries** total (60 pep + 48 noot + **54 perf** + 21 pharma)
2. PWA precache size: `<3100 KiB` (post `v0.19.1-pwa-precache-split` baseline 2948 KiB; entry bodies live in runtime cache, so only the main index chunk grows by ~5 KiB compressed for +20 meta records; ample headroom for Sub-Task 6 + 7)
3. All 5 sub-section CategoryCards on `/library/performance` render correct entry-counts (PCT now shows 20)
4. Form-factor chip-row filtering works correctly with new entries (oral / aq / topical)

---

## 8. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Cross-frame naming drift if future peptid-batch uses different IDs | Spec explicitly fixes `hcg-perf` / `hmg-perf` / `fsh-rec-perf` IDs; peptid-batch spec MUST adopt `-peptid` suffix |
| 5AR sub-section semantic stretch for RU58841 | Body + FAQ transparent mechanism-clarification (precedent: YK-11 in Sub-Task 4) |
| Lab Terminal PCT-field-semantics drift across 20 entries | Session 1 first entry (Nolvadex) writes inline-review the `aromatization`/`hepatotoxicity` semantics template; subsequent entries follow established pattern |
| Content-write velocity 7-9 entries/session aggressive | Per `[[Inline_Execution_Per_Subtask_Token_Efficiency]]` achievable; if Session 1 overruns, defer last entry to Session 2 |
| Image template for RU58841 unavailable in Sub-Task 5 | Use placeholder `tablet-pile-white.png` + explicit `// TODO Sub-Task 7: replace with topical-solution-clear.png` meta-comment; Sub-Task 7 image-pipeline generates the proper template |
| DHEA/Pregnenolone weak PCT evidence may bloat content with weak claims | Disclaimer in `shortDesc` + StudiesPanel limited to high-quality reviews only; body content honest about evidence quality |

---

## 9. Out of scope (deferred)

The following are explicitly NOT in Sub-Task 5:

- Peptid-library counterpart entries (`hcg-peptid`, `hmg-peptid`, `fsh-rec-peptid`) → future peptid add/remove batch
- Sub-Task 6 (Fat content) and Sub-Task 7 (Images + final polish) → future sub-tasks
- `topical-solution-clear.png` image template generation → Sub-Task 7
- Anekdota collapse feature → separate post-mega-phase brainstorm
- Library_Entry_Meta script automation refactor → not needed (manual edits work)

---

## 10. Acceptance criteria (Sub-Task 5 complete)

- [ ] 20 new entry body files × HU/EN/PL = 60 new files under `src/data/libraries/performance/entries/{hu,en,pl}/`
- [ ] 20 new meta records in `src/data/libraries/performance/index.js`
- [ ] Validator PASS: 4 lib, 183 entries (54 perf)
- [ ] Build PASS: ~7-8s, PWA precache <3700 KiB
- [ ] All entries Lab Terminal hard-fail compliant (aromatization + hepatotoxicity HU/EN/PL; bloodwork tier ≥3)
- [ ] All 20 entries WADA-status set correctly
- [ ] All 3 cross-frame entries (`hcg-perf`, `hmg-perf`, `fsh-rec-perf`) use `-perf` suffix and document future cross-link plan
- [ ] RU58841 mechanism clarification present in body + FAQ
- [ ] Tag `v0.20-perf-pct` pushed to origin
- [ ] Master HEAD pushed to origin (live production)
- [ ] `/handoff` status file updated with session log

---

## 11. References

- **Master spec:** [2026-05-19-performance-library-restructure.md](2026-05-19-performance-library-restructure.md)
- **Master plan:** [2026-05-19-perf-restructure-sub-task-1-architecture.md](../plans/2026-05-19-perf-restructure-sub-task-1-architecture.md)
- **Phase 11 Lab Terminal:** [2026-05-18-phase11-mega-design.md](2026-05-18-phase11-mega-design.md)
- **Phase 12 per-lang:** [2026-05-18-phase12-perlang-design.md](2026-05-18-phase12-perlang-design.md)
- **PWA precache split (unblocks this sub-task):** commit `3d841ef`, tag `v0.19.1-pwa-precache-split`
- **Lessons referenced:**
  - `[[Cross_Framed_Entry_Strategy]]`
  - `[[Live_Incremental_Production_Push_Mid_Megaphase]]`
  - `[[Inline_Execution_Per_Subtask_Token_Efficiency]]`
  - `[[SARM_Class_Color_Code_Convention]]`
  - `[[YK11_Steroid_SARM_Borderline_Compound]]`
  - `[[feedback_forbidden_sources]]` (HYBRID source policy)
