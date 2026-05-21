# v0.27 — Multi-Route-Aware Refactor (13 remaining multi-form entries)

> **Created:** 2026-05-22
> **Scope:** 13 remaining multi-form entries get full route-aware UI defaults via 5 explicit route-family branches + IM-ester fallback in `adaptLibraryEntry.js`.
> **Ship target:** Single mega-push, tag `v0.27-multi-route-aware`.
> **Predecessor:** v0.26 nasal-spray multi-variant (`eaf87fd`, 2026-05-21) — 8 peptides got SC + IN route-aware. This phase extends route-awareness to the remaining 13 multi-form entries that still rely on SC-biased defaults.

---

## 1. Goal & Scope

### 1.1 Why now
v0.26 introduced route-aware adapter branching (`activeVariantId === 'in'`), but only for the 8 nasal-spray peptides. The remaining 13 multi-form entries (3 non-injection + 10 AAS) carry SC-biased derived defaults (injection-site bullets, vial+BAC reconstitute, SC-style quickStart) which are wrong for oral tablets, inhalers, topical solutions, and IM-ester injections.

### 1.2 Affected entries (13 total)

**Group A — Non-injection mix (3 entries):**
| Entry | RouteIds | Default |
|-------|----------|---------|
| `albuterol` (performance) | `oral`, `inhaled` | `inhaled` (MDI is primary clinical use) |
| `l-carnitine` (performance) | `oral`, `aq` | `oral` (oral supplement, most common) |
| `minoxidil` (pharmaceutical) | `oral`, `topical` | `topical` (FDA-approved hair loss route) |

**Group B — AAS oral+inject mix (4 entries):**
| Entry | RouteIds | Default |
|-------|----------|---------|
| `dianabol-info` | `oral`, `oil` | `oral` (classic) |
| `superdrol` | `oral`, `injectable` | `oral` (classic) |
| `winstrol-info` | `oral`, `aq` | `oral` (safest form, most common) |
| `primobolan` | `ac-oral`, `enan-oil` | `enan-oil` (depot ester primary) |

**Group C — AAS pure ester variants (6 entries):**
| Entry | RouteIds | Default |
|-------|----------|---------|
| `testosterone-info` | `prop`, `enan`, `cyp`, `sus`, `aq` | `enan` (cheapest, most common) |
| `trenbolone-info` | `ace`, `enan`, `hex` | `ace` (most common) |
| `nandrolone-info` | `deca`, `npp` | `deca` (classic) |
| `masteron` | `prop`, `enan` | `prop` (more common) |
| `ment-19nor` | `ac`, `en` | `ac` |
| `ment-test` | `ac`, `en` | `ac` |

### 1.3 Out of scope
- New images (reuse Sub-Task 7 + v0.26 templates only)
- New library shape fields beyond what's already in `peptides/entries/hu/semax.js` (v0.26 anchor)
- Validator hard-fail changes
- i18n locale-split refactor
- Anekdota coverage, vial-prompt batch (separate backlog items)

---

## 2. Architecture: Route-Family Branching

### 2.1 New helper `getRouteFamily(activeVariantId)` in `adaptLibraryEntry.js`

```js
function getRouteFamily(activeVariantId) {
  if (activeVariantId === 'in') return 'in'
  if (activeVariantId === 'oral' || activeVariantId === 'ac-oral') return 'oral'
  if (activeVariantId === 'inhaled') return 'inhaled'
  if (activeVariantId === 'topical') return 'topical'
  if (activeVariantId === 'sc') return 'sc'
  // Fallback for ester variants + 'injectable' + 'oil' + 'aq' + 'enan-oil':
  //   prop, enan, cyp, sus, aq, ace, hex, deca, npp, ac, en, oil, injectable, enan-oil
  return 'im'
}
```

### 2.2 6 derived fns updated with `switch (family)` branches

`deriveQuickStart`, `deriveQualityIndicators`, `deriveSafetyProfile`, `deriveReconstitute`, `deriveDosing`, `deriveWhatIs` each get a 6-branch switch (`oral` / `inhaled` / `topical` / `sc` / `in` / `im`).

### 2.3 Family default content (HU canonical; EN/PL parity at write-time)

| Family | quickStart-step | safety-bullet | quality-indicator |
|--------|----------------|---------------|--------------------|
| `oral` | "Vízzel lenyeled éhgyomorra vagy étkezés közben (entry-specifikus)" | Gyomor-bél irritáció, májterhelés (orális AAS-eknél kiemelt) | Tabletta épsége — törésmentes, repedésmentes, eredeti blister-csomagolás |
| `inhaled` | "Inhalátor felrázása + szippants be mélyen, tartsd bent 5-10 másodpercig" | Szájüregi gombásodás (candidiasis), szájszárazság, hangképzési zavar | MDI-flakon nyomása (rázott teszt), lejárati dátum, spacer tisztasága |
| `topical` | "Tiszta, száraz bőrre vékony rétegben, hagyd felszívódni 2-4 percig" | Bőrirritáció, kontakt-dermatitisz, kezelt területen szőrnövekedés | Oldat tisztasága (átlátszó vagy gyártó által megadott szín), lejárat, lezárt pumpa |
| `sc` | (mostani SC default — nem változik) | (mostani SC bullets) | (mostani) |
| `in` | (mostani v0.26 IN nasal — nem változik) | (mostani v0.26 IN safety) | (mostani v0.26 IN quality) |
| `im` | "Gluteus vagy quadriceps izomba, 23-25G tűvel, 90°-os szögben" | Injekciós helyi reakció (csomó, kipirosodás), olajos ester esetén PIP (post-injection pain) | Olaj tisztasága (átlátszó, lebegő részecskék mentes), BA/BB-keverék konzisztenciája |

### 2.4 Calculator gate per family (`EntryDetail.jsx`)

Mostani v0.26 split: `_activeVariantId === 'in'` → info-card; else MiniCalc. Új gate: `family === 'in' || family === 'oral' || family === 'topical' || family === 'inhaled'` → info-card (fix dose / mg/zone / puff/dose). `family === 'sc' || family === 'im'` → MiniCalc (vial+BAC+dose-μg, IM-on ester half-life note added).

### 2.5 `keyFacts` filter (variant Beadás row hidden)
Already in place from v0.26 (`if entry has variants[] hide Beadás/Route row`). No change needed.

---

## 3. Per-Variant Data Shape (Albuterol-level RICH)

### 3.1 Mandatory + optional fields

```js
{
  // 1. identification
  id: "<routeId>",            // duplicates routeId; required for back-compat post v0.25.1 id-spread fix
  routeId: "<oral|inhaled|topical|prop|enan|...>",
  routeLabel: { hu: "Orális tabletta", en: "Oral tablet", pl: "Tabletka doustna" },
  routeNote: { hu: "...", en: "...", pl: "..." },  // 1-2 sentences: when to choose this variant

  // 2. media
  image: "/path/to/image.png",   // Sub-Task 7 / v0.26 template reuse

  // 3. pharmacokinetics
  halfLife: { hu, en, pl },
  halfLifeActive: { hu, en, pl },     // optional; required for ester variants (active vs detection window)
  bioavailability: { hu, en, pl },
  onsetTime: { hu, en, pl },

  // 4. dosing
  dosing: { hu, en, pl },              // FLAT body-text
  doseCalc: {
    type: "fixed" | "calc",
    fixed: { low, medium, high },
    unit: "mg" | "mcg" | "IU" | "spray" | "puff",
    note: { hu, en, pl }
  },

  // 5. derived overrides (optional; missing -> adapter route-family default applies)
  whatIs: { hu, en, pl },
  quickStart: [...],
  reconstitute: { steps: [...] },

  // 6. AAS-specific (optional, AAS variants only)
  hepatotoxicity: { hu, en, pl },     // 17α-methylated orals: high; non-methylated: none/minimal
  aromatization: { hu, en, pl },      // aromatizing AAS (testosterone-ester, dianabol)
  androgenicRatio: "100:100"          // numeric:numeric anabolic:androgenic
}
```

### 3.2 Per-family field requirement matrix

| Field | oral | inhaled | topical | sc | in | im (ester) |
|-------|------|---------|---------|----|----|------------|
| routeId/routeLabel/routeNote | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| image | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| halfLife | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| halfLifeActive | (if short t½) | – | – | – | – | **✓** (ester-specific) |
| bioavailability | ✓ | ✓ | ✓ | – | ✓ | – |
| onsetTime | ✓ | ✓ | (slow local) | ✓ | ✓ | ✓ |
| dosing (string) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| doseCalc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| hepatotoxicity | (17α-methyl only) | – | – | – | – | ✓ (low/none) |
| aromatization | (testosterone-AAS) | – | – | – | – | ✓ (entry-specific) |
| androgenicRatio | (AAS only) | – | – | – | – | (AAS only) |

### 3.3 Image template assignments (reuse Sub-Task 7 + v0.26)

| Family | Template path |
|--------|---------------|
| `oral` (tablet) | `/performance/tablet-pile-white.png` (or softgel-orange.png for soft-gel like l-carnitine) |
| `inhaled` | `/performance/inhaler-asthma.png` |
| `topical` | `/performance/topical-solution-clear.png` |
| `in` | `/performance/nasal-spray-clear.png` (v0.26) |
| `im` oil ester | `/performance/oil-vial-yellow.png` or `oil-vial-orange.png` |
| `im` aq (testosterone-suspension, winstrol-aq) | `/performance/water-vial.png` |
| `sc` peptide | `/peptides/water-vial.png` or entry-specific (v0.26) |

If a needed template is missing, generate ONE new (e.g. `softgel-oval-yellow.png` for l-carnitine-oral). Defer beyond that.

---

## 4. Source Policy (PMID-strict)

### 4.1 Studies array
All 13 entries × all variants — `studies[]` MUST contain ONLY peer-reviewed PMID-verified entries. Per `[[feedback_verify_pmids_build_gate]]`: every subagent runs `node scripts/verify-pmids.mjs --entry <id>` BEFORE its commit. Final controller pass re-runs full `--lib performance` + `--lib pharmaceutical` matrix.

### 4.2 Per-entry source seeds (suggested PubMed anchors)

- **albuterol**: Cazzola 2013 PMID 23103443 (β2-agonist bronchodilation pharmacology); Sears 2000 PMID 11030515 (long-term β2-agonist safety)
- **l-carnitine**: Stephens 2007 PMID 17572471 (skeletal muscle uptake); Wall 2011 PMID 21224234 (carnitine + carbohydrate co-ingestion)
- **minoxidil**: Olsen 1995 PMID 7868972 (topical minoxidil hair loss); Vañó-Galván 2021 PMID 33548397 (oral minoxidil low-dose)
- **dianabol-info**: Hartgens-Kuipers 2004 PMID 15248788 (AAS effects); Schänzer 1996 PMID 8765783 (metandienone metabolism)
- **superdrol**: Parr 2007 PMID 17326073 (methasterone characterization); Cohen 2019 PMID 31085996 (designer steroid hepatotoxicity)
- **winstrol-info**: Hartgens-Kuipers 2004 PMID 15248788 (shared with dianabol); Schänzer 1996 PMID 8765783
- **primobolan**: Llewellyn 2011 (no specific PMID — methenolone clinical use, EMA SmPC fallback)
- **testosterone-info**: Bhasin 2018 PMID 29562364 (testosterone replacement guideline); Snyder 2016 PMID 26886521 (TTrials)
- **trenbolone-info**: Yarrow 2010 PMID 20546861 (trenbolone myotrophic); Neil 2009 PMID 19796108 (designer AAS detection)
- **nandrolone-info**: Hartgens-Kuipers 2004 PMID 15248788 (shared); de Souza 2011 PMID 21496029 (nandrolone cardiac)
- **masteron**: Pope-Kanayama 2017 PMID 27669093 (AAS use review — masteron context)
- **ment-19nor / ment-test**: Sundaram 1995 PMID 7836405 (7α-methyl-19-nortestosterone characterization)

These are **starting suggestions for subagent search**, NOT authoritative — subagents MUST verify each PMID via `verify-pmids.mjs` and replace if hallucinated.

### 4.3 No "sean's notes" or "dopamine.club" in studies array
Body text MAY use general pharmacological knowledge + FDA SmPC + sean's curated notes (consistent with `[[feedback_forbidden_sources]]`), but `studies[]` PMID-strict only.

---

## 5. Implementation Phases

### Phase A — Adapter refactor + anchor entry (controller-inline, ~1h)

A1. Add `getRouteFamily(activeVariantId)` helper in `adaptLibraryEntry.js`.
A2. Refactor 6 derived fns to 6-branch switch:
  - `deriveQuickStart(peptide, library, family)` — replace `if 'in'` with `switch (family)`.
  - `deriveQualityIndicators(family)` — same pattern.
  - `deriveSafetyProfile(peptide, categoryIds, family)` — same pattern.
  - `deriveReconstitute(peptide, library, family)` — `oral`/`inhaled`/`topical` → return `null` (no recon for non-injection); `im` honors `variant.reconstitute` if present, else `null`; `sc`/`in` unchanged.
  - `deriveDosing(peptide, family)` — variant.dosing string preferred (no change v0.26).
  - `deriveWhatIs(peptide, family)` — variant.whatIs preferred (no change v0.26).
A3. Update call-sites to pass `family` (computed once at adapter entry).
A4. Extend `scripts/verify-pmids.mjs` with `--entry <id>` flag for per-entry verify (controller + subagent both use).
A5. Build anchor entry: **testosterone-info** (5 ester variants × 3 lang × ~10 fields = 150 field-fills). Image reuse: oil-vial-yellow (enan/cyp/prop), oil-vial-orange (sus), water-vial (aq). PMID verify-gate PASS.
A6. Commit `feat(adapter): v0.27 route-family branching + testosterone-info anchor`. Push master.
A7. EntryDetail Calculator-gate update (family-aware split section 2.4).

### Phase B — Subagent rounds (5 rounds × 3 parallel, ~2-3h)

**Round 1** (3 parallel): albuterol, l-carnitine, minoxidil
**Round 2** (3 parallel): dianabol-info, superdrol, winstrol-info
**Round 3** (3 parallel): trenbolone-info, nandrolone-info, primobolan
**Round 4** (3 parallel): masteron, ment-19nor, ment-test
**Round 5** (single): (reserve for any retry)

Per-round controller cycle:
1. Dispatch 3 subagents with worktree-isolation
2. Wait for completion notifications
3. Pull each worktree's commits → cherry-pick to feat branch
4. Run `npm run validate:meta` + `node scripts/verify-pmids.mjs --lib <lib>` on feat branch
5. If any FAIL → inline fix; if any subagent partial (session-limit hit) → recovery-cp pattern from v0.26
6. **Immediate merge feat → master** at round end (mitigates account-switch risk)
7. Cleanup worktrees (`git worktree remove --force`)

Subagent prompt template:
```
Task: Build RICH multi-variant body for entry <X> in 3 languages (HU/EN/PL).
Worktree: <path>
Branch: feat/v027-<X>
Anchor reference: src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js (v0.27 anchor) AND src/data/libraries/performance/entries/{hu,en,pl}/albuterol.js (v0.25.1 example)
Per-variant fields required: see spec section 3.1.
Image template assignments: see spec section 3.3.
PMID policy: STRICT peer-reviewed. Run `node scripts/verify-pmids.mjs --entry <X>` BEFORE commit.
If any PMID FAIL → replace with WebFetch-verified eutils API result. Studies array MUST verify-pass.
Default variant: see spec section 1.2.
Output: Edit 3 entry-body files (hu/en/pl), commit with message "feat(<lib>): v0.27 multi-variant for <X>"
Do NOT modify adapter, validator, scripts. Stay in entry-body scope.
```

### Phase C — Final verify + ship (controller-inline, ~30 min)

C1. Pull all 13 entries' work to master.
C2. Full `node scripts/verify-pmids.mjs --lib performance --lib pharmaceutical` run.
C3. `npm run validate:meta` PASS.
C4. `npm run build` PASS, target <8s, PWA precache <5MB.
C5. `npm run dev` local smoke: 13 entries × all variants × Calculator-gate matrix (~30-40 manual toggles).
C6. Merge feat → master with squash or single merge commit.
C7. Tag `v0.27-multi-route-aware` with detailed release notes.
C8. `git push origin master --tags` → Vercel auto-deploy.

---

## 6. Acceptance Criteria

- ✅ Validator PASS (4 lib × 193 entry stable)
- ✅ Build PASS (<8s)
- ✅ PWA precache <5MB (currently 3299 KiB, +100-200 KiB expected — well within budget)
- ✅ `verify-pmids.mjs --lib performance --lib pharmaceutical` PASS, ZERO hallucinated PMIDs
- ✅ Local smoke: all 13 entries × all variants click-through PASS, Calculator-gate per family correct (MiniCalc for sc/im; info-card for oral/inhaled/topical/in)
- ✅ VariantToggle URL correct (`#entry/<lib>/<entry>/<routeId>`, NOT `<routeId>/<routeId>` — v0.25.1 fix holds)
- ✅ Per-variant images load (no 404, transparent PNG renders correctly on `#07071e` site bg)
- ✅ HU/EN/PL parity (no missing translations on rendered variants)

---

## 7. Risk Register

| Risk | Probability | Mitigation |
|------|-------------|------------|
| Account session-limit hit mid-round | HIGH (v0.26 precedent) | 3-max parallel; immediate master merge per round; account-switch state-block in handoff |
| Subagent hallucinated PMIDs | MEDIUM (`[[feedback_subagent_hallucinated_pmids]]`) | `verify-pmids.mjs --entry` in subagent prompt; controller final-pass full re-run |
| Worktree Windows file-lock | LOW | v0.26 precedent: `--force` + accept residue; restart cleanup |
| Subagent shape divergence | MEDIUM | Anchor entry (testosterone-info) as canonical template in prompt |
| Adapter `getRouteFamily` regression on 8 v0.26 peptides | LOW | sc/in branches unchanged; smoke 1 peptide post-Phase-A (semax IN deep-link) |
| Build size cross 5MB precache cap | LOW | No new images planned; +100-200 KiB text-only |
| Group A entry has unexpected routeIds | LOW | Phase A discovery checked all 13 entries' actual `routeId` values; l-carnitine = oral+aq (NOT just oral); albuterol = oral+inhaled; minoxidil = oral+topical. All confirmed pre-spec |

---

## 8. References

- v0.26 spec: `docs/superpowers/specs/2026-05-21-nasal-spray-multivariant.md`
- v0.26 plan: `docs/superpowers/plans/2026-05-21-nasal-spray-multivariant.md`
- Adapter: `src/components/library/adaptLibraryEntry.js` (1216 LOC post-v0.26)
- Verify gate: `scripts/verify-pmids.mjs`
- Anchor entry post-A5: `src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js`
- Albuterol reference (v0.25.1 dual-route): `src/data/libraries/performance/entries/{hu,en,pl}/albuterol.js`
- Memory rules in play:
  - `[[feedback_subagent_hallucinated_pmids]]`
  - `[[feedback_verify_pmids_build_gate]]`
  - `[[feedback_adapter_passthrough]]`
  - `[[Variant_Spread_Id_Collision_Silent_Bug]]`
  - `[[Adapter_Route_Aware_Default_Pattern]]` (v0.26 origin)

---

## 9. Obsidian Mirror

This spec mirrors to: `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_MultiRouteAware_Spec.md`
Plan will mirror to: `MolekulaX_MultiRouteAware_Plan.md` (after writing-plans skill runs).
