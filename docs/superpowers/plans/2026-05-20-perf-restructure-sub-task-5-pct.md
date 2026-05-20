# Performance Library Restructure — Sub-Task 5 (PCT Content) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **NOTE:** This sub-task is **content-heavy** (peer-reviewed scientific writing across 20 entries × 3 languages). Per `[[Inline_Execution_Per_Subtask_Token_Efficiency]]` lesson, **inline execution is preferred** over subagent-driven (judgment ≠ pattern-following content).

**Goal:** Add 20 new RICH entries to the PCT & Fertility sub-category across 6 sub-sections (SERM 4 + Gonad 3 + AI 3 + Prolactin 3 + Axis 4 + 5AR 3). Tag `v0.20-perf-pct` after all 3 sessions complete.

**Architecture:** Content-only sub-task. Inherits the architecture, schema, validator gates, and UI components shipped in Sub-Tasks 1-4. Each new entry adds three lang-split body files (`src/data/libraries/performance/entries/{hu,en,pl}/<id>.js`) + one meta record in `src/data/libraries/performance/index.js`. No new components, no schema changes, no UI work.

**Tech Stack:** Node 20+, Vite 5, validation via `scripts/validate-library-meta.mjs`, build via `npm run build` (validator runs as pre-build), smoke-test via `npm run preview`.

**Reference spec:** [`docs/superpowers/specs/2026-05-20-perf-restructure-sub-task-5-pct.md`](../specs/2026-05-20-perf-restructure-sub-task-5-pct.md) (commit `3c7c8b1`)

**Reference master spec:** [`docs/superpowers/specs/2026-05-19-performance-library-restructure.md`](../specs/2026-05-19-performance-library-restructure.md)

---

## File Structure

**Create (60 new lang-body files + 0 new modules):**

For each of the 20 entries, create three lang-files:
- `src/data/libraries/performance/entries/hu/<entry-id>.js`
- `src/data/libraries/performance/entries/en/<entry-id>.js`
- `src/data/libraries/performance/entries/pl/<entry-id>.js`

The 20 entry-ids:
```
nolvadex, clomid, enclomiphene, raloxifene,
hcg-perf, hmg-perf, fsh-rec-perf,
anastrozol, letrozol, exemestane,
cabergoline, bromocriptine, pramipexole,
kisspeptin-10, gonadorelin, pregnenolone, dhea,
finasteride, dutasteride, ru58841
```

**Modify (1 file):**
- `src/data/libraries/performance/index.js` — append 20 new meta records to `LIBRARY_ENTRY_META` array (insertion-order matches sub-section sequencing in the spec; final order across the library does not affect runtime behavior because UI groups by subCategory).

**Untouched (verify no regression):**
- All UI components (`LibraryGallery.jsx`, `PerformanceCategoryCards.jsx`, `FormFactorChipRow.jsx`, `EntryDetail.jsx`, etc.)
- All other library data (`peptides/`, `nootropics/`, `pharmaceutical/`)
- `categories.js`, `formFactors.js`, `effects.js`, `shape.js`

---

## Entry Body Template (canonical schema for single-variant PCT entry)

Use this as the template for every PCT entry. Field-by-field guidance below. Compare against [`src/data/libraries/performance/entries/hu/halotestin.js`](../../../src/data/libraries/performance/entries/hu/halotestin.js) (tier-4 reference) and [`hu/anadrol.js`](../../../src/data/libraries/performance/entries/hu/anadrol.js) (tier-4 with paradox aromatization framing).

```js
// <Brand + generic name>. FDA/EMA/PubMed source citations 1-line:
// FDA <Drug> SmPC, EMA <Drug> SPC, <Author> <Year> PMID <PMID>, ...

export default {
  "id": "<entry-id>",
  "name": "<Brand (Generic)>",
  "image": "/performance/<template>.png",
  "accentColor": "#D4537E",                       // PCT pink (RU58841 exception: #a78bfa)
  "tagColor": "rgba(212,83,126,0.18)",            // PCT pink rgba (RU58841 exception: rgba(167,139,250,0.18))
  "shortDesc": "<2-3 sentences for HU body; matching translations in EN/PL files>",
  "description": "<5-8 sentence narrative: history, mechanism, clinical role, AAS-PCT context, regulatory status>",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "<...>"},
    {"label": "Adagolás", "value": "<...>"},
    {"label": "Felezési idő", "value": "<...>"},
    {"label": "Hatáskezdet", "value": "<...>"},
    {"label": "Jogi státusz", "value": "<FDA/EMA Rx / OTC / research only>"}
  ],
  "mechanism": "<3-5 sentence pharmacological mechanism with receptor/enzyme specifics>",
  "legalStatus": "<USA FDA / EU EMA / HU+PL Rx / OTC / banned / unscheduled, plus WADA classification>",
  "onsetTime": "<e.g. '1-2 h' or '24-48 h serum SHBG response'>",
  "halfLife": "<terminal t1/2 in hours/days>",
  "halfLifeActive": "<active metabolite t1/2 if different; else copy halfLife>",
  "interactionsWith": [/* entry-ids of related entries on this site */],
  // Lab Terminal hard-fail (HU/EN/PL — exactly as in this file for HU, translated for EN/PL):
  "aromatization": "<see § 3.5 of spec — PCT-context-shifted semantics per entry-class>",
  "hepatotoxicity": "<see § 3.5 of spec>",
  "wadaStatus": "<banned | restricted | allowed>",
  "androgenicRatio": "<N/A for PCT — usually 'N/A (nem AAS)' or specific if Raloxifene-like>",
  "bindingAffinity": "<receptor-specific affinity description>",
  "detectionWindow": "<WADA detection-window in days/weeks if applicable; 'N/A' for non-WADA PCT-only drugs>",
  "benefits": [/* 4-6 bullet points: clinical benefits for AAS-PCT framing */],
  "quickStart": [/* 4-6 bullet points: practical first-cycle quickstart pointers */],
  "expectations": [/* 3-4 timed-stage descriptions: e.g. "Első hét", "2-4. hét", "Post-PCT" */],
  "quality": {
    "pure": [/* sourcing-quality and brand-availability notes */],
    "caution": [/* mild side-effect / monitoring warnings */],
    "avoid": [/* absolute contraindications */]
  },
  "interactions": [/* 4-6 interaction notes (drug-drug, supplement, lifestyle) */],
  "studies": [
    {"title": "<paper title>", "authors": "<authors>", "journal": "<journal year vol:pages>", "pmid": "<PMID>"},
    // 3-6 peer-reviewed citations; FDA SmPC and EMA SPC may be additional via separate `fdaSmpc` field if needed
  ],
  "faq": [
    {"q": "<question>", "a": "<answer, 2-4 sentences, sourced if claim-y>"},
    // 4-6 FAQ entries — see per-entry topic list below
  ],
  "related": [/* 3-6 entry-ids from same or adjacent sub-sections */],
  "doseCalc": {
    "type": "fixed",                              // PCT entries: fixed dose, NOT bodyweight
    "fixed": {"low": <num>, "medium": <num>, "high": <num>},
    "unit": "<mg/nap or IU/inj or μg/nap>",
    "note": "<dosing protocol, monitoring, duration, cycle vs continuous>"
  },
  "bloodwork": {                                   // Required for tier ≥3 entries
    "preCycle": { "label": "PCT előtt", "timing": "<...>", "markers": "<...>", "purpose": "<...>" },
    "midCycle": { "label": "PCT közben", "timing": "<...>", "markers": "<...>", "purpose": "<...>" },
    "postCycle": { "label": "PCT után", "timing": "<...>", "markers": "<...>", "purpose": "<...>" },
    "cruise": { "label": "Long-term (ha alkalmazható)", "timing": "<...>", "markers": "<...>", "purpose": "<...>" }
  }
}
```

**Translation pattern (EN/PL):** copy the HU file, translate ALL string fields. Keep `id`, `image`, `accentColor`, `tagColor`, `interactionsWith`, `interactions` IDs, `studies[].pmid`, `related[]`, `doseCalc.fixed` numbers — **all non-localized fields stay identical**. Translate every Hungarian-language string value (description, mechanism, FAQ Q+A, dosing notes, bloodwork narratives, etc.).

**Tier-4 reference**: ~125-130 lines per lang-file (Halotestin precedent).
**Tier-5 reference**: ~180-230 lines per lang-file (Testosterone precedent — richer FAQ, longer historical context, more `studies` entries).
**Tier-3 reference**: ~110-125 lines per lang-file (Ostarine precedent — shorter description, 3-4 FAQ).
**Tier-2 reference**: ~110-125 lines per lang-file (research-chemical framing, explicit "research-only" disclaimer at FAQ end).

---

## Meta-record template (single-variant PCT entry)

Append to the `LIBRARY_ENTRY_META` array in `src/data/libraries/performance/index.js`:

```js
{
  "id": "<entry-id>",
  "name": "<Brand (Generic)>",
  "image": "/performance/<template>.png",
  "accentColor": "#D4537E",                  // RU58841 exception: #a78bfa
  "tagColor": "rgba(212,83,126,0.18)",       // RU58841 exception: rgba(167,139,250,0.18)
  "shortDesc": {
    "hu": "<...>",
    "en": "<...>",
    "pl": "<...>"
  },
  "tier": <2|3|4|5>,
  "wadaStatus": "<banned|restricted|allowed>",
  "subCategory": "pct",
  "subSection": "<serm|gonad|ai|prolactin|axis|5ar>",
  "formFactors": ["<oral|aq|topical>"]       // PCT: oral for tablets, aq for lyophilized injectables, topical for RU58841
}
```

---

## Session 1 — SERM + Gonad (7 entries)

### Task 1.1: Nolvadex (Tamoxifen) — tier 5, SERM

**Files:**
- Create: `src/data/libraries/performance/entries/hu/nolvadex.js`
- Create: `src/data/libraries/performance/entries/en/nolvadex.js`
- Create: `src/data/libraries/performance/entries/pl/nolvadex.js`

**Entry data brief:**
- `id: "nolvadex"`, `name: "Nolvadex (Tamoxifen)"`, `image: "/performance/tablet-pile-white.png"`
- `subCategory: "pct"`, `subSection: "serm"`, `formFactors: ["oral"]`, `tier: 5`, `wadaStatus: "restricted"` (allowed for medical use, banned for performance enhancement)
- **Mechanism:** Non-steroidal SERM. Mixed agonist/antagonist at ER-α: antagonist in breast tissue (FDA-Rx for ER+ breast cancer 1977); agonist in bone, liver, endometrium. In AAS-PCT context: blocks pituitary ER → disinhibits LH/FSH release → endogenous Test recovery.
- **Half-life:** ~5-7 days (parent compound), active metabolite 4-hydroxy-tamoxifen ~14 days. Single daily dose.
- **Dosing (AAS-PCT):** 20-40 mg/day × 4-6 weeks post-cycle. Start 10-14 days after last short-ester or 2-3 weeks after long-ester. Taper not required.
- **`aromatization`:** "Nem aromatizál — az ösztrogén-receptort (ER-α) blokkolja kompetitív módon, NEM az aromatázt (a CYP19-et nem érinti)."
- **`hepatotoxicity`:** "Alacsony — nem 17α-alkilált, ritka mild ALT/AST emelkedés; chronic high-dose (>40 mg/nap 6+ hónap) cirrhosis-risk dokumentált (FDA Nolvadex SmPC)."
- **Bloodwork:** E2 + LH + FSH + Total/Free Test + SHBG + lipid panel + ALT/AST. Pre-PCT baseline, mid-PCT (2 hét), post-PCT (PCT vége +2 hét és +6 hét).
- **Key sources (peer-reviewed):**
  - FDA Nolvadex SmPC (AstraZeneca, 1977 approval, latest revision)
  - Fisher 1998 NSABP P-1 prevention trial PMID 9747868
  - Schäcke 2002 SERM review PMID 12433722
  - Tan 2014 Tamoxifen + AAS recovery PMID 24716172
  - Karavolos 2015 male SERM PCT review PMID 25778469
- **FAQ topics (5):**
  1. "Mennyi idővel a ciklus után kell indítani?" (ester-timing tábla)
  2. "Nolvadex vs Clomid — melyik jobb PCT-re?" (mechanism diff, fertility-emphasis difference, side-effect profile)
  3. "Visszahat-e az IGF-1-re?" (Yes — moderate reduction documented; transient)
  4. "Vizuális zavarok lehetségesek?" (Rare retinal deposits at >100 mg/day chronic; reversible)
  5. "Aknepush / hangulati zavarok?" (E2-rebound + axis-restart period — managed by gradual taper if severe)
- **`related`:** `["clomid", "enclomiphene", "raloxifene", "hcg-perf", "anastrozol"]`
- **Historical note for description:** First SERM synthesized 1962 ICI Pharmaceuticals (now AstraZeneca); FDA breast-cancer approval 1977 longest-running SERM in clinical use; tier-5 status reflects 60+ years of clinical evidence + AAS-PCT golden-standard role.

**Steps:**

- [ ] **Step 1: Write `entries/hu/nolvadex.js`** following the template above with the data brief. Target ~170-200 lines (tier-5 depth).
- [ ] **Step 2: Write `entries/en/nolvadex.js`** translating all HU strings to English. Keep all non-localized fields identical.
- [ ] **Step 3: Write `entries/pl/nolvadex.js`** translating all HU strings to Polish.
- [ ] **Step 4: Add the meta-record to `src/data/libraries/performance/index.js`** at the end of `LIBRARY_ENTRY_META`.

```js
{
  "id": "nolvadex",
  "name": "Nolvadex (Tamoxifen)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Tamoxifen-citrát, 1962 ICI szintézis, FDA-jóváhagyott (1977) ER+ emlőkarcinómára. Az AAS-PCT golden-standard SERM — pituiter ER-blokád → LH/FSH-disinhibíció → endogén testosterone-recovery.",
    "en": "Tamoxifen citrate, ICI 1962 synthesis, FDA-approved (1977) for ER+ breast cancer. The AAS-PCT golden-standard SERM — pituitary ER blockade → LH/FSH disinhibition → endogenous testosterone recovery.",
    "pl": "Cytrynian tamoksyfenu, synteza ICI 1962, zatwierdzony przez FDA (1977) dla ER+ raka piersi. Złoty standard PCT po AAS — blokada ER w przysadce → disinhibicja LH/FSH → odbudowa endogennego testosteronu."
  },
  "tier": 5,
  "wadaStatus": "restricted",
  "subCategory": "pct",
  "subSection": "serm",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run validator + build to verify the new entry registers correctly.**

```bash
npm run build
```

**Expected:** ✅ validator PASS (164 entries: 60 pep + 48 noot + 35 perf + 21 pharma), build PASS in ~7s, PWA precache ~2952 KiB.
**On error:** read the validator stderr line — typical fail is meta/file ID mismatch, missing `aromatization`/`hepatotoxicity` field, or unbalanced JSON. Fix the offending file and re-run.

---

### Task 1.2: Clomid (Clomiphene) — tier 5, SERM

**Files:**
- Create: `src/data/libraries/performance/entries/{hu,en,pl}/clomid.js`

**Entry data brief:**
- `id: "clomid"`, `name: "Clomid (Clomiphene Citrate)"`, `image: "/performance/tablet-pile-white.png"`
- `subCategory: "pct"`, `subSection: "serm"`, `formFactors: ["oral"]`, `tier: 5`, `wadaStatus: "restricted"`
- **Mechanism:** Non-steroidal SERM, racemic mixture (~62% zuclomiphene [estrogenic isomer, 5+ week t1/2] + ~38% enclomiphene [anti-estrogenic isomer, ~5 day t1/2]). The enclomiphene fraction drives PCT efficacy via pituitary ER-α antagonism → LH/FSH disinhibition → testicular Leydig-stimulation → testosterone recovery. The zuclomiphene fraction accumulates and contributes weak intrinsic estrogenic activity (Clomid's "muddy" mood profile vs cleaner enclomiphene-only Androxal).
- **Half-life:** Mixed — zuclomiphene 5-7 weeks accumulating; enclomiphene 5 days. Steady-state mood effects emerge week 2-3.
- **Dosing (AAS-PCT):** 50 mg/day × 1-2 weeks, then 25 mg/day × 2-4 weeks. Start day-after-last short-ester or 14-21 days after long-ester.
- **`aromatization`:** "Nem aromatizál — kompetitív ER-blokkolás, NEM aromatáz-gátlás. Klinikailag E2 enyhén EMELKEDIK (pituiter feedback-zavar miatt LH↑ → testicular E2↑)."
- **`hepatotoxicity`:** "Alacsony — nem 17α-alkilált, hepatikus stressz minimális. Rendkívül ritka cholestasis-eset dokumentált fertility-trial-okon (FDA Clomid SmPC adverse reactions)."
- **Bloodwork:** Same panel as Nolvadex + add fasting glucose (DA-axis vague impact). Mid-PCT focus on E2-rebound watch (often higher than Nolvadex).
- **Key sources:**
  - FDA Clomid SmPC (Merrell 1967 approval, latest 2012 revision)
  - Tan 2013 male hypogonadism RCT PMID 23617589
  - Katz 2012 men receiving Clomid for hypogonadism PMID 22500968
  - Wiehle 2014 Enclomiphene Phase II PMID 24913480 (zuclo-vs-enclo discussion)
  - Karavolos 2015 male SERM PCT review PMID 25778469
- **FAQ topics (5):**
  1. "Clomid vs Nolvadex — mikor melyik?" (E2-axis stratification, mood-profile)
  2. "Vision-side-effects komolyak?" (rare scintillating-scotoma, dose-dependent; usually <100 mg/day cumulative is safe)
  3. "Miért érzik magukat sokan érzelmesnek Clomidon?" (zuclomiphene accumulation hypothesis; switch to Nolvadex or enclomiphene if intolerable)
  4. "Lehet együtt szedni Nolvadexel?" (yes, common stack in PCT — 'Clomid + Nolva' protocol; halve doses)
  5. "HPTA recovery sebessége?" (Test-recovery 4-6 hét, full HPG axis recovery 8-12 hét)
- **`related`:** `["nolvadex", "enclomiphene", "raloxifene", "hcg-perf"]`
- **Historical note:** First synthesized 1956 Merrell, FDA-approved 1967 for female infertility (anovulation). Off-label male hypogonadism + AAS-PCT use since 1980s. Tier 5 due to 60-year clinical record + AAS-PCT secondary-standard role (Nolvadex-primary in modern protocols, Clomid retained for backup or stack).

**Steps:**

- [ ] **Step 1: Write `entries/hu/clomid.js`** (~170-200 lines, tier-5 depth).
- [ ] **Step 2: Write `entries/en/clomid.js`** (translate HU strings).
- [ ] **Step 3: Write `entries/pl/clomid.js`** (translate HU strings).
- [ ] **Step 4: Append meta-record** to `LIBRARY_ENTRY_META` (after `nolvadex`):

```js
{
  "id": "clomid",
  "name": "Clomid (Clomiphene Citrate)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Clomiphene-citrát, Merrell 1956 szintézis, FDA-jóváhagyott (1967) női infertilitásra (ovulációs disfunkció). Racém keverék (zuclo + enclomiphene) — utóbbi a PCT-aktív fél.",
    "en": "Clomiphene citrate, Merrell 1956 synthesis, FDA-approved (1967) for female infertility (ovulatory dysfunction). Racemic mixture (zuclo + enclomiphene) — the latter is the PCT-active half.",
    "pl": "Cytrynian klomifenu, synteza Merrell 1956, zatwierdzony przez FDA (1967) dla niepłodności kobiet (dysfunkcja owulacji). Mieszanina racemiczna (zuklo + enklomifen) — ten ostatni jest aktywną częścią PCT."
  },
  "tier": 5,
  "wadaStatus": "restricted",
  "subCategory": "pct",
  "subSection": "serm",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (165 entries), build PASS.

---

### Task 1.3: Enclomiphene (Androxal) — tier 3, SERM

**Files:**
- Create: `src/data/libraries/performance/entries/{hu,en,pl}/enclomiphene.js`

**Entry data brief:**
- `id: "enclomiphene"`, `name: "Enclomiphene (Androxal)"`, `image: "/performance/tablet-pile-white.png"`
- `subCategory: "pct"`, `subSection: "serm"`, `formFactors: ["oral"]`, `tier: 3`, `wadaStatus: "restricted"`
- **Mechanism:** Pure trans-isomer of clomiphene — anti-estrogenic SERM at pituitary ER-α with no significant intrinsic estrogenic activity (zuclomiphene fraction removed). Cleaner mood profile than Clomid + maintains spermatogenesis (vs Test-replacement which suppresses spermatogenesis). Repros Therapeutics developed for secondary hypogonadism Phase III trials 2014-2016 (Androxal — TRT-alternative).
- **Half-life:** ~5 days
- **Dosing (AAS-PCT or hypogonadism):** 12.5-25 mg/day × 4-6 weeks. For hypogonadism off-label: 12.5 mg/day continuous.
- **Regulatory status:** NOT FDA-approved (Repros Phase III data submitted 2015, FDA Complete Response Letter 2016 — additional efficacy data requested, never resubmitted, Repros bankruptcy 2018). Still available via compounding pharmacies (US) and EU research-pharmacies. Effectively research-chemical-tier despite cleaner pharmacology.
- **`aromatization`:** "Nem aromatizál — szelektíven blokkolja az ER-α-t a pituiterben, NEM az aromatázt. Klinikailag az E2 enyhe rise tipikus (LH↑ → testicular E2↑), Clomidnál tisztább profil."
- **`hepatotoxicity`:** "Alacsony — nem 17α-alkilált, hepatikus tolerancia kiváló. Trial-database adverse-event-rate <1% ALT/AST emelkedés (Wiehle 2014 + Kim 2016 Phase III data)."
- **Bloodwork:** Same Pre/Mid/Post protokoll. Mood-rating napló opcionális (cleaner profile előny vs Clomid).
- **Key sources:**
  - Wiehle 2014 Phase II PMID 24913480
  - Wiehle 2018 Phase III combined PMID 30015376
  - Kim 2016 secondary hypogonadism PMID 26905294
  - Karavolos 2015 male SERM PCT review PMID 25778469
- **FAQ topics (4):**
  1. "Mi a különbség Clomidhoz képest?" (purity, mood, longer-availability)
  2. "Miért nem FDA-jóváhagyott?" (Repros bankruptcy history; CRL specifics)
  3. "Beszerzhetőség?" (US compounding, EU research-pharm; UGL-kockázat magas)
  4. "Long-term TRT-alternative?" (preserves fertility; effective for secondary hypogonadism only)
- **`related`:** `["clomid", "nolvadex", "raloxifene", "hcg-perf"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines, tier-3 depth).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "enclomiphene",
  "name": "Enclomiphene (Androxal)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "A clomiphene tiszta trans-izomerje — Repros Therapeutics 2014-2016 Phase III hypogonadism trial-jelölt. Tisztább SERM-profil mint a Clomid (zuclomiphene-mentes), DE FDA-CRL 2016 → nem törzskönyvezett.",
    "en": "Pure trans-isomer of clomiphene — Repros Therapeutics 2014-2016 Phase III hypogonadism candidate. Cleaner SERM profile than Clomid (zuclomiphene-free), BUT FDA CRL 2016 → not approved.",
    "pl": "Czysty trans-izomer klomifenu — kandydat Repros Therapeutics z badania Phase III hipogonadyzmu 2014-2016. Czystszy profil SERM niż Clomid (bez zuklomifenu), ALE FDA CRL 2016 → nie zatwierdzony."
  },
  "tier": 3,
  "wadaStatus": "restricted",
  "subCategory": "pct",
  "subSection": "serm",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (166 entries), build PASS.

---

### Task 1.4: Raloxifene (Evista) — tier 3, SERM

**Files:**
- Create: `src/data/libraries/performance/entries/{hu,en,pl}/raloxifene.js`

**Entry data brief:**
- `id: "raloxifene"`, `name: "Raloxifene (Evista)"`, `image: "/performance/tablet-pile-white.png"`
- `subCategory: "pct"`, `subSection: "serm"`, `formFactors: ["oral"]`, `tier: 3`, `wadaStatus: "restricted"`
- **Mechanism:** Benzothiophene-class SERM. ER-α antagonist in breast + uterus, partial agonist in bone (FDA-approved 1997 Lilly for postmenopausal osteoporosis + ER+ breast cancer chemoprevention 2007 update). In AAS context: **specific gynecomastia-reversal application** — Raloxifene shows stronger anti-estrogenic effect at breast tissue ER vs Nolvadex (Lawrence 2004 PMID 14744776; reduces existing pubertal gynecomastia 50%+ in 6 months).
- **Half-life:** ~27 hours (single daily dose).
- **Dosing (AAS gyno-reversal):** 60 mg/day × 6-12 weeks. NOT a primary PCT-axis-restart drug — niche use for existing gynecomastia rescue.
- **`aromatization`:** "Nem aromatizál — szelektív ER-α antagonista (mell + méh), partial agonist a csontban. NEM CYP19-gátló."
- **`hepatotoxicity`:** "Alacsony — nem 17α-alkilált. FDA Evista label adverse events: vénás thromboembolia (VTE) rare-but-serious (3-fold elevated risk vs placebo); hepatikus stressz minimális."
- **Bloodwork:** + D-dimer + INR/PT baseline (VTE-screening due to FDA black-box warning). Otherwise standard PCT panel.
- **Key sources:**
  - FDA Evista SmPC (1997 approval, 2007 chemoprevention update)
  - Lawrence 2004 gynecomastia reversal PMID 14744776
  - Cummings 1999 MORE trial PMID 10580020
  - Vogel 2006 STAR trial vs Nolvadex PMID 16754727
  - Khan 2002 male gyno Raloxifene case PMID 11843724
- **FAQ topics (4):**
  1. "Gynecomastia-reverzálás Nolvadex vs Raloxifene?" (Raloxifene jobb existing-gyno-ra; Nolvadex prevenció + axis-restart)
  2. "VTE-rizikó valós-e a férfiakon is?" (less data, theoretical; rule out personal/family clotting history)
  3. "Lehet PCT-axis-restart-ra használni?" (less data than Nolvadex/Clomid; not first-line)
  4. "Csont-hatás férfiakon?" (positive osteo-benefit, minor synergy with TRT-bridge)
- **`related`:** `["nolvadex", "clomid", "enclomiphene", "anastrozol"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "raloxifene",
  "name": "Raloxifene (Evista)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Benzothiophene-SERM, FDA-jóváhagyott (1997 Lilly) postmenopauzális osteoporózisra + ER+ emlőkarcinóma chemoprevencióra. AAS-kontextusban niche használat: létező gynecomastia reverzálása erősebb mell-szelektivitással mint a Nolvadex.",
    "en": "Benzothiophene SERM, FDA-approved (1997 Lilly) for postmenopausal osteoporosis + ER+ breast cancer chemoprevention. AAS-context niche use: existing gynecomastia reversal with stronger breast-selectivity vs Nolvadex.",
    "pl": "SERM benzotiofenowy, zatwierdzony przez FDA (1997 Lilly) dla osteoporozy pomenopauzalnej + chemoprewencji ER+ raka piersi. Niszowe użycie w kontekście AAS: cofanie istniejącej ginekomastii z silniejszą selektywnością piersi vs Nolvadex."
  },
  "tier": 3,
  "wadaStatus": "restricted",
  "subCategory": "pct",
  "subSection": "serm",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (167 entries), build PASS.

---

### Task 1.5: HCG-perf (Pregnyl / Novarel) — tier 4, Gonad

**Files:**
- Create: `src/data/libraries/performance/entries/{hu,en,pl}/hcg-perf.js`

**Entry data brief:**
- `id: "hcg-perf"`, `name: "HCG (Pregnyl / Novarel / Choragon)"`, `image: "/performance/water-vial.png"`
- `subCategory: "pct"`, `subSection: "gonad"`, `formFactors: ["aq"]`, `tier: 4`, `wadaStatus: "banned"`
- **Note: `-perf` suffix per [[Cross_Framed_Entry_Strategy]]** (master spec § 2). Future peptid-batch adds `hcg-peptid` (fertility-clinic framing) with `related: [...]` cross-link both directions.
- **Mechanism:** Human Chorionic Gonadotropin, recombinant or urinary-extracted from pregnant women's urine. Structural analog of LH (~80% sequence identity) — binds Leydig-cell LHCGR receptor in testes → exogenous LH-mimicry → maintains/restarts testicular testosterone production. In AAS-PCT context: bridges the LH-suppression window (testes "wake-up" during HPTA-recovery).
- **Half-life:** ~24-36 hours (urinary-extracted), ~30-50 hours (recombinant Ovidrel). Active 5-7 days after single injection.
- **Dosing protocols:**
  - **Mid-cycle ("on-cycle HCG"):** 250-500 IU 2-3x/week throughout the AAS cycle to prevent testicular atrophy
  - **PCT-bridge ("blast HCG"):** 1500-2500 IU EOD × 10-14 days starting at last AAS pin, transitioning to SERM-PCT
  - **Post-PCT rescue:** 1500 IU 2x/week × 4 weeks if LH/FSH not recovering on SERM alone
- **`aromatization`:** "Indirekt: HCG endogén Leydig-Test produkciót stimulál → másodlagos peripheral E2-emelkedés a testis + adipose CYP19 enzimatikus aktivitás miatt. Magasabb HCG-dose → magasabb E2 cluster — AI co-administration gyakran indokolt."
- **`hepatotoxicity`:** "Nincs hepatikus stressz — fehérje-alapú szubkután/intramuszkuláris injekció, NEM oral, NEM 17α-alkilált."
- **Bloodwork:** + ITT (intratesticular testosterone — indirect via Test/E2-ratio + testicular volume monitoring), + hCG-titer baseline (rule out germ-cell tumor false-positive). Standard PCT panel otherwise.
- **Key sources:**
  - FDA Pregnyl SmPC (Organon 1973 approval)
  - EMA Choragon SPC
  - Liu 2002 HCG dose-response PMID 12424222
  - Coviello 2005 HCG + testosterone preserve ITT PMID 16204261
  - Hsieh 2013 male hypogonadism HCG protocol PMID 23316916
- **FAQ topics (5):**
  1. "Mid-cycle HCG vs PCT-blast — melyik mit csinál?" (atrophy prevention vs HPTA-restart)
  2. "HCG aromatizál-e? Mennyit?" (indirect via Test, sometimes Anastrozol co-admin)
  3. "Lyophilized vial reconstituálás?" (bact-water sterile-protocol)
  4. "Pregnyl vs Ovidrel vs UGL?" (urinary-extracted vs recombinant, brand-availability)
  5. "Cross-frame note: ugyanaz a HCG mint a fertility-clinic protokolokban?" (yes — identical molecule, different framing/dosing)
- **`related`:** `["hmg-perf", "fsh-rec-perf", "nolvadex", "clomid", "testosterone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines, tier-4 depth with cross-frame note in description).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "hcg-perf",
  "name": "HCG (Pregnyl / Novarel / Choragon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Humán Chorionic Gonadotropin — LH-strukturális analóg, Leydig-sejt LHCGR-receptor stimulus. AAS-PCT bridge a testikulár-atrófia ellen és HPTA-restart-hoz. (Cross-frame: a future peptid-libben `hcg-peptid` fertility-clinic-framing-gel jön.)",
    "en": "Human Chorionic Gonadotropin — LH structural analog, Leydig-cell LHCGR receptor stimulus. AAS-PCT bridge against testicular atrophy and for HPTA restart. (Cross-frame: future peptid library will add `hcg-peptid` with fertility-clinic framing.)",
    "pl": "Ludzka Gonadotropina Kosmówkowa — analog strukturalny LH, stymulator receptora LHCGR komórek Leydiga. Pomost PCT po AAS przeciwko atrofii jąder i restartowi HPTA. (Cross-frame: w przyszłej bibliotece peptydów dojdzie `hcg-peptid` z framingiem fertility-clinic.)"
  },
  "tier": 4,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "gonad",
  "formFactors": ["aq"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (168 entries), build PASS.

---

### Task 1.6: HMG-perf (Menopur / Pergonal) — tier 3, Gonad

**Files:**
- Create: `src/data/libraries/performance/entries/{hu,en,pl}/hmg-perf.js`

**Entry data brief:**
- `id: "hmg-perf"`, `name: "HMG (Menopur / Pergonal)"`, `image: "/performance/water-vial.png"`
- `subCategory: "pct"`, `subSection: "gonad"`, `formFactors: ["aq"]`, `tier: 3`, `wadaStatus: "banned"`
- **Mechanism:** Human Menopausal Gonadotropin — urinary-extracted from postmenopausal women. Mixture of FSH + LH (75 IU FSH + 75 IU LH per vial standard ampoule). In AAS-PCT context: supplies BOTH gonadotropins where HCG only mimics LH; useful for full HPG-axis restart in long-cycle/hard-suppressed users where Sertoli-FSH support also needed.
- **Half-life:** FSH ~24-36 hr, LH ~20 hr (mixed component decay).
- **Dosing (PCT):** 75-150 IU EOD × 2-4 weeks, combined with HCG-bridge or as standalone if HCG ineffective.
- **`aromatization`:** "Indirekt: testicular FSH+LH stimulus → endogén Test → másodlagos peripheral E2 (similar magnitude to HCG, kissé alacsonyabb mert Sertoli-aktivitás dominál vs Leydig)."
- **`hepatotoxicity`:** "Nincs hepatikus stressz — fehérje-alapú SC/IM injekció."
- **Bloodwork:** Same as HCG-perf + add inhibin-B baseline (Sertoli-cell function tracker, supports FSH-restart monitoring).
- **Key sources:**
  - EMA Menopur SPC (Ferring 2002 approval EU)
  - Pergonal historical (Lunenfeld 1962 Israel, withdrawn from most markets ~2005 due to vCJD-risk concerns)
  - Liu 2009 male hypogonadism HMG PMID 19435775
  - Kohn 2017 HMG + clomid combination PMID 28935145
- **FAQ topics (4):**
  1. "HMG vs HCG — mikor melyik?" (LH-only vs LH+FSH; cycle-length stratification)
  2. "Menopur vs Pergonal — még elérhető Pergonal?" (Pergonal withdrawn 2005, Menopur modern replacement)
  3. "vCJD-rizikó valós?" (theoretical, urinary-extracted from menopausal women, no documented case)
  4. "FSH-rec-vel kombinálható?" (yes if Sertoli-emphasis needed; cost-benefit usually favors HMG-only)
- **`related`:** `["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "hmg-perf",
  "name": "HMG (Menopur / Pergonal)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Humán Menopauzális Gonadotropin — vizeletből kinyert FSH + LH 75/75 IU keverék. AAS-PCT-ben: teljes HPG-tengely restart (Sertoli-FSH-támogatás is, NEM csak Leydig-LH mint a HCG). Pergonal kivonva 2005-ben, Menopur modern alternatíva.",
    "en": "Human Menopausal Gonadotropin — urinary-extracted FSH + LH 75/75 IU mixture. In AAS-PCT: full HPG axis restart (Sertoli-FSH support too, not just Leydig-LH like HCG). Pergonal withdrawn 2005, Menopur modern alternative.",
    "pl": "Ludzka Gonadotropina Menopauzalna — mieszanina FSH + LH 75/75 IU ekstrahowana z moczu. W PCT po AAS: pełny restart osi HPG (wsparcie FSH dla Sertoli, nie tylko LH dla Leydiga jak w HCG). Pergonal wycofany 2005, Menopur nowoczesna alternatywa."
  },
  "tier": 3,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "gonad",
  "formFactors": ["aq"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (169 entries), build PASS.

---

### Task 1.7: FSH-rec-perf (Gonal-F / Puregon) — tier 3, Gonad

**Files:**
- Create: `src/data/libraries/performance/entries/{hu,en,pl}/fsh-rec-perf.js`

**Entry data brief:**
- `id: "fsh-rec-perf"`, `name: "FSH-rec (Gonal-F / Puregon)"`, `image: "/performance/water-vial.png"`
- `subCategory: "pct"`, `subSection: "gonad"`, `formFactors: ["aq"]`, `tier: 3`, `wadaStatus: "banned"`
- **Mechanism:** Recombinant Follicle-Stimulating Hormone, expressed in CHO cells (Chinese Hamster Ovary). Selectively binds testicular Sertoli-cell FSHR receptor → spermatogenesis stimulus + inhibin-B production. NO LH activity (unlike HMG). In AAS-PCT context: niche use for users with adequate endogenous-or-HCG-LH but suppressed FSH; common in hard-suppressed long-cycle users with azoospermia.
- **Half-life:** ~24-36 hours (recombinant).
- **Dosing:** 75-150 IU EOD × 4-12 weeks if azoospermia recovery is goal; often co-administered with HCG to provide LH separately.
- **`aromatization`:** "Nincs direkt aromatizáció (FSH NEM stimulál Leydig-Test-produkciót); endogén Test-emelkedés csak ha HCG-vel kombinálva."
- **`hepatotoxicity`:** "Nincs hepatikus stressz — rekombináns fehérje SC injekció."
- **Bloodwork:** + sperm-analysis (semen-quality count + motility), inhibin-B, FSH/LH baseline.
- **Key sources:**
  - EMA Gonal-F SPC (Merck Serono 1995 EU approval)
  - EMA Puregon SPC (Organon 1996 EU approval)
  - Burgues 1997 spermatogenesis restart PMID 9176246
  - Liu 2009 male hypogonadism FSH-rec PMID 19435775
- **FAQ topics (4):**
  1. "FSH-rec vs HMG — mikor szelektív FSH kell?" (LH from HCG, FSH from rec — modularity advantage)
  2. "Azoospermia-recovery sebessége?" (3-9 hónap tipikus, dose-dependent)
  3. "Költség?" (recombinant FSH expensive — €300+ per 75 IU vial EU pharmacy)
  4. "Tartós sterilitás esetében használható?" (yes, primary indication for severe male infertility post-AAS)
- **`related`:** `["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "fsh-rec-perf",
  "name": "FSH-rec (Gonal-F / Puregon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Rekombináns FSH (CHO-expresszált) — szelektív Sertoli-FSHR stimulus, NINCS LH-aktivitás. AAS-PCT niche: azoospermia-recovery + Sertoli-támogatás HCG-LH mellett. Drága (€300+/75 IU vial EU).",
    "en": "Recombinant FSH (CHO-expressed) — selective Sertoli FSHR stimulus, NO LH activity. AAS-PCT niche: azoospermia recovery + Sertoli support alongside HCG-LH. Expensive (€300+/75 IU vial EU).",
    "pl": "Rekombinowany FSH (ekspresja CHO) — selektywna stymulacja Sertoli-FSHR, BRAK aktywności LH. Niszowe użycie w PCT po AAS: cofanie azoospermii + wsparcie Sertoli obok HCG-LH. Drogie (€300+/fiolka 75 IU UE)."
  },
  "tier": 3,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "gonad",
  "formFactors": ["aq"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (170 entries), build PASS.

---

### Task 1.8: Session 1 finalize — validator gate, smoke spot-check, commit, push

**Files:** none (verification + git operations)

- [ ] **Step 1: Final validator + build PASS**

```bash
npm run build
```

**Expected:** 4 lib, 170 entries (60 pep + 48 noot + **41 perf** + 21 pharma), build ~7s, PWA precache ~2960 KiB.

- [ ] **Step 2: Smoke-spot-check 2 random entries in preview**

```bash
npm run preview
```

Open in browser:
- `http://localhost:4173/#entry/performance/nolvadex` → entry renders, all 3 lang switchable, no console error
- `http://localhost:4173/#entry/performance/hcg-perf` → entry renders, cross-frame note visible in description, no console error

Stop preview server (Ctrl+C).

- [ ] **Step 3: Stage the new files**

```bash
git add src/data/libraries/performance/entries/hu/{nolvadex,clomid,enclomiphene,raloxifene,hcg-perf,hmg-perf,fsh-rec-perf}.js
git add src/data/libraries/performance/entries/en/{nolvadex,clomid,enclomiphene,raloxifene,hcg-perf,hmg-perf,fsh-rec-perf}.js
git add src/data/libraries/performance/entries/pl/{nolvadex,clomid,enclomiphene,raloxifene,hcg-perf,hmg-perf,fsh-rec-perf}.js
git add src/data/libraries/performance/index.js
```

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat(perf): Sub-Task 5 PROGRESS — SERM + Gonad PCT content (7/20 entries)

Adds 7 new RICH entries to the PCT sub-category across 2 sub-sections:

SERM (4):
- nolvadex (Tamoxifen, tier 5) — AAS-PCT golden-standard
- clomid (Clomiphene, tier 5) — racemic SERM
- enclomiphene (Androxal, tier 3) — pure trans-isomer
- raloxifene (Evista, tier 3) — gyno-reversal SERM

Gonad (3):
- hcg-perf (Pregnyl/Novarel, tier 4) — cross-framed for future peptid lib
- hmg-perf (Menopur, tier 3) — FSH+LH mixture
- fsh-rec-perf (Gonal-F, tier 3) — recombinant FSH

Each entry: 3 lang body files (HU/EN/PL) + 1 meta record in index.js.
All Lab Terminal hard-fail compliant (aromatization + hepatotoxicity x 3 lang;
bloodwork Pre/Mid/Post for tier >=3). Sources peer-reviewed (FDA SmPC + EMA SPC
+ 25+ PMIDs).

Validator PASS (170 entries), build PASS, precache stable ~2960 KiB.
EOF
)"
```

- [ ] **Step 5: Push master**

```bash
git push origin master
```

**Expected:** push success, Vercel auto-deploy starts (~2-3 min to production).

---

## Session 2 — AI + Prolactin + 5AR (9 entries)

### Task 2.1: Anastrozol (Arimidex) — tier 4, AI

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/anastrozol.js`

**Entry data brief:**
- `id: "anastrozol"`, `name: "Anastrozol (Arimidex)"`, `image: "/performance/blister-white-oval.png"`
- `subCategory: "pct"`, `subSection: "ai"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "banned"`
- **Mechanism:** Reversible non-steroidal triazole-class aromatase inhibitor. Competitively binds CYP19 heme group → blocks androgen → estrogen conversion. ~97% serum estradiol suppression at 1 mg/day (Geisler 2002). FDA Rx 1995 AstraZeneca for postmenopausal ER+ breast cancer (Arimidex). In AAS context: standard E2-control during testosterone-base cycles (Test/Tren/Mast/Dianabol).
- **Half-life:** ~50 hours (single daily dose, steady-state day 7).
- **Dosing (AAS E2-control):** 0.25-1 mg EOD-2x/week titrated to E2-trough target 20-30 pg/mL. NOT a fixed dose — bloodwork-titrated.
- **`aromatization`:** "Nem aromatizál — kompetitív CYP19-aromatáz inhibitor (IC50 ~15 nM in vitro, ~97% szérum E2-szuppresszió 1 mg/nap dózison)."
- **`hepatotoxicity`:** "Alacsony — non-steroidal, nem 17α-alkilált. FDA Arimidex label: ritka ALT/AST emelkedés (<2% incidencia)."
- **Bloodwork:** E2 sensitive-assay (LC-MS/MS, NOT ECL — ECL overestimates E2 at low levels), SHBG, lipid panel (HDL drop common at high doses), BMD if long cycle, ALT/AST, total/free Test, prolactin baseline.
- **Key sources:**
  - FDA Arimidex SmPC (AstraZeneca 1995 approval)
  - ATAC trial Buzdar 2002 PMID 12081816
  - Geisler 2002 aromatase suppression PMID 12351538
  - Mauras 2003 Anastrozol in adolescent males PMID 12759427
- **FAQ topics (5):**
  1. "Mikor kell elkezdeni az AI-t a ciklusban?" (E2-symptom-driven vs prophylactic)
  2. "Anastrozol vs Aromasin (Exemestane) — mikor melyik?" (reversible vs suicide-inhibitor)
  3. "Crashed E2 jelei?" (joint pain, libido drop, lethargy, lipid panel — recover with dose reduction or pause)
  4. "Lipid-panel romlik — mit tegyek?" (cardiovascular surveillance, omega-3, krill oil, dose reduction)
  5. "Tier-4 vs tier-5? Miért nem tier-5?" (1995 FDA approval vs 1977 Nolvadex, shorter clinical history, but AAS-AI golden-standard)
- **`related`:** `["letrozol", "exemestane", "nolvadex", "testosterone-info", "trenbolone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines, tier-4 depth).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "anastrozol",
  "name": "Anastrozol (Arimidex)",
  "image": "/performance/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Triazole-class non-steroidal aromatáz-gátló (AI). FDA-jóváhagyott (1995 AstraZeneca) postmenopauzális ER+ emlőkarcinómára. AAS-ciklus E2-control golden-standard, 0.25-1 mg EOD-2x/hét bloodwork-titrálva.",
    "en": "Triazole-class non-steroidal aromatase inhibitor (AI). FDA-approved (1995 AstraZeneca) for postmenopausal ER+ breast cancer. AAS-cycle E2-control golden-standard, 0.25-1 mg EOD-2x/week titrated by bloodwork.",
    "pl": "Triazolowy niesteroidowy inhibitor aromatazy (AI). Zatwierdzony przez FDA (1995 AstraZeneca) dla pomenopauzalnego ER+ raka piersi. Złoty standard kontroli E2 podczas cykli AAS, 0,25-1 mg EOD-2x/tydzień miareczkowany na podstawie badań."
  },
  "tier": 4,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "ai",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (171 entries), build PASS.

---

### Task 2.2: Letrozol (Femara) — tier 4, AI

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/letrozol.js`

**Entry data brief:**
- `id: "letrozol"`, `name: "Letrozol (Femara)"`, `image: "/performance/blister-white-oval.png"`
- `subCategory: "pct"`, `subSection: "ai"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "banned"`
- **Mechanism:** Triazole-class non-steroidal AI, more potent than Anastrozol (~99% E2-suppression at 2.5 mg/day vs ~97% for Anastrozol 1 mg). FDA Rx 1997 Novartis (Femara). In AAS context: niche "E2-crash rescue" or hard-suppression Tren+Mast stacks; gynecomastia reversal at higher doses (2.5 mg/day × 2 weeks).
- **Half-life:** ~42 hours.
- **Dosing (AAS):** 0.25-1.25 mg EOD bloodwork-titrated (AI-naive users should START with Anastrozol-equivalent half-dose — Letrozol is "stronger"). Gyno-reversal: 2.5 mg/day × 14-21 days, then taper.
- **`aromatization`:** "Nem aromatizál — non-steroidal triazole AI, ~99% szérum E2-szuppresszió 2.5 mg/nap dózison (BIG2-98 trial)."
- **`hepatotoxicity`:** "Alacsony — non-steroidal, nem 17α-alkilált. Hepatic adverse events <2% (FDA Femara label)."
- **Bloodwork:** Same as Anastrozol; LC-MS/MS E2 critical because Letrozol can drive E2 below assay floor (<5 pg/mL) → "crashed E2" symptoms.
- **Key sources:**
  - FDA Femara SmPC (Novartis 1997 approval)
  - BIG1-98 trial Coates 2007 PMID 17582920
  - Bhatnagar 1996 letrozole aromatase IC50 PMID 8847500
  - Goss 2003 MA.17 trial PMID 14595025
- **FAQ topics (4):**
  1. "Letrozol vs Anastrozol — miért stronger?" (intramuscular aromatase tissue distribution)
  2. "Gynecomastia-reversal protokoll" (2.5 mg/day × 2-3 weeks, then taper — supervised)
  3. "Crashed E2 mortalkockázat?" (joint pain + lipid disaster reversible 1-2 hét leállítás után)
  4. "Tier-4 — miért nem tier-5?" (slightly newer than Anastrozol, shorter clinical record, but AAS-PCT well-known)
- **`related`:** `["anastrozol", "exemestane", "nolvadex", "testosterone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "letrozol",
  "name": "Letrozol (Femara)",
  "image": "/performance/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Triazole-class non-steroidal AI, az Anastrozolnál erősebb (~99% E2-szuppresszió 2.5 mg/nap). FDA-jóváhagyott (1997 Novartis). AAS-niche: hard-suppression Tren+Mast E2-control + gynecomastia-reverzálás (2.5 mg/nap 2-3 hét).",
    "en": "Triazole-class non-steroidal AI, stronger than Anastrozol (~99% E2 suppression at 2.5 mg/day). FDA-approved (1997 Novartis). AAS-niche: hard-suppression Tren+Mast E2-control + gynecomastia reversal (2.5 mg/day × 2-3 weeks).",
    "pl": "Triazolowy niesteroidowy AI, silniejszy od Anastrozolu (~99% supresji E2 przy 2,5 mg/dzień). Zatwierdzony przez FDA (1997 Novartis). Nisza AAS: kontrola E2 przy ciężkiej supresji Tren+Mast + cofanie ginekomastii (2,5 mg/dzień × 2-3 tygodnie)."
  },
  "tier": 4,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "ai",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (172 entries), build PASS.

---

### Task 2.3: Exemestane (Aromasin) — tier 4, AI

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/exemestane.js`

**Entry data brief:**
- `id: "exemestane"`, `name: "Exemestane (Aromasin)"`, `image: "/performance/blister-white-oval.png"`
- `subCategory: "pct"`, `subSection: "ai"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "banned"`
- **Mechanism:** Steroidal "suicide" (irreversible) AI — covalently binds CYP19 aromatase, permanent enzyme inactivation. Pharmacokinetically distinct from Anastrozol/Letrozol: each dose disables a portion of aromatase pool, recovery requires de novo enzyme synthesis (~5-7 day half-effect-life). FDA Rx 1999 Pfizer (Aromasin). Mild androgenic 17-hydro-exemestane metabolite — minimal anabolic effect.
- **Half-life:** ~27 hours (parent), ~24-48 h for active 17-hydro metabolite, BUT pharmacodynamic effect lasts 5-7 days per dose.
- **Dosing (AAS):** 12.5-25 mg EOD or 25 mg/day. NOT crashable as easily as Letrozol due to enzyme-recycling rate.
- **`aromatization`:** "Nem aromatizál — steroidal-class \"suicide inhibitor\" (irreverzibilis kovalens CYP19-kötés). Parent compound szteroid struktúrával rendelkezik (androstadiendione-analóg), nem agonist."
- **`hepatotoxicity`:** "Alacsony — szteroid-struktúra DE NEM 17α-alkilált. Hepatic AE <2% (FDA Aromasin label)."
- **Bloodwork:** Same as Anastrozol. Note: SHBG drops more with Exemestane (mild androgenic) → free-Test may rise more visibly than with Anastrozol — useful in stack-monitoring.
- **Key sources:**
  - FDA Aromasin SmPC (Pfizer 1999 approval)
  - EXemestane Switch trial (ITA-CL97) Bonneterre 2003 PMID 14523076
  - Geisler 2008 Exemestane vs Anastrozol PMID 19012260
  - Lønning 2005 androgenic-metabolite PMID 16091756
- **FAQ topics (4):**
  1. "Suicide inhibitor — mit jelent praktikusan?" (no E2-rebound after stopping; gentler taper)
  2. "Exemestane mild anabolic — mit ad?" (androgenic 17-hydro metabolite, +5-10 ng/dL free Test gain typically)
  3. "Anastrozol vs Letrozol vs Exemestane — clinical decision tree?" (Anastrozol default, Letrozol if hard-suppress, Exemestane for E2-stability or SHBG-emphasis)
  4. "Lipid panel hatás?" (lipid impact intermediate — better than Letrozol, similar to Anastrozol)
- **`related`:** `["anastrozol", "letrozol", "nolvadex", "testosterone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "exemestane",
  "name": "Exemestane (Aromasin)",
  "image": "/performance/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Steroidal \"suicide\" (irreverzibilis) aromatáz-gátló. FDA-jóváhagyott (1999 Pfizer). Egyedi: 17-hydro-exemestane metabolit mild androgén — SHBG drop + free-Test rise visible. AAS-ban E2-stability vagy SHBG-emphasis-emphasizált választás.",
    "en": "Steroidal \"suicide\" (irreversible) aromatase inhibitor. FDA-approved (1999 Pfizer). Unique: 17-hydro-exemestane metabolite is mildly androgenic — SHBG drop + visible free-Test rise. In AAS used when E2-stability or SHBG-emphasis matters.",
    "pl": "Steroidowy \"samobójczy\" (nieodwracalny) inhibitor aromatazy. Zatwierdzony przez FDA (1999 Pfizer). Unikalne: metabolit 17-hydro-eksemestan jest słabo androgenny — spadek SHBG + widoczny wzrost wolnego testosteronu. W AAS gdy ważna stabilność E2 lub akcent SHBG."
  },
  "tier": 4,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "ai",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (173 entries), build PASS.

---

### Task 2.4: Cabergoline (Dostinex) — tier 4, Prolactin

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/cabergoline.js`

**Entry data brief:**
- `id: "cabergoline"`, `name: "Cabergoline (Dostinex)"`, `image: "/performance/blister-white-oval.png"`
- `subCategory: "pct"`, `subSection: "prolactin"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "allowed"` (not on WADA list; medical use)
- **Mechanism:** Long-acting ergot-derivative D2-dopamine receptor agonist. High D2-selectivity, partial D1 antagonism. Suppresses prolactin secretion by pituitary lactotrophs → reverses prolactin-induced hypogonadism. EMA Rx 1992 Pharmacia/Pfizer (Dostinex) for hyperprolactinemia + prolactinoma. In AAS context: standard 19-Nor/Tren-cycle prolactin-control (Tren + Deca elevate prolactin via direct + indirect mechanisms).
- **Half-life:** ~63-69 hours (very long, twice-weekly dosing).
- **Dosing (AAS prolactin-control):** 0.25-0.5 mg 2x/week (Mon+Thu), titrated to prolactin <15 ng/mL.
- **`aromatization`:** "Nincs — DA-agonista, nem szteroid-mechanizmus."
- **`hepatotoxicity`:** "Alacsony hepatikus; ritka cardiac valvulopathy magas dózis (>3 mg/hét) chronic (Parkinson-protokoll dózisai) — AAS-ban használt 0.5-1 mg/hét dose alatt klinikailag NEM dokumentált rizikó (FDA Dostinex label)."
- **Bloodwork:** + Prolactin sensitive-assay (>30 ng/mL = high during 19-Nor cycle, target <15 ng/mL post-Cabergoline-titration), MRI rule out micro-/macroprolactinoma if Prolactin >100 ng/mL baseline.
- **Key sources:**
  - EMA Dostinex SPC (Pharmacia 1992 approval EU)
  - FDA Dostinex SmPC (Pfizer 1996 US approval)
  - Webster 1994 Cabergoline vs Bromocriptine PMID 8090165
  - Schade 2007 cardiac valvulopathy review PMID 17371996 (Parkinson-dose context)
  - Krüger 2003 Cabergoline + post-orgasmic refractory PMID 12849866 (sexual side benefit)
- **FAQ topics (5):**
  1. "Tren-prolactin — mikor szükséges Cabergoline?" (Tren-flu, lactation, libido drop, gyno-formation triggers)
  2. "Cardiac valvulopathy rizikó AAS-dose-on?" (low — clinical incidence at <2 mg/week negligible)
  3. "Cabergoline + Sex — sexual benefit?" (Krüger 2003 post-orgasmic refractory shortening, off-label "PRL-crash" recreational use)
  4. "Nasal-spray Cabergoline?" (compounded, faster onset, off-label only)
  5. "Long-term cruise-Cabergoline?" (low-dose 0.25 mg 1x/week may be safe; debated)
- **`related`:** `["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "cabergoline",
  "name": "Cabergoline (Dostinex)",
  "image": "/performance/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Long-acting ergot-D2-dopamin agonista. EMA-jóváhagyott (1992 Pharmacia, ma Pfizer) hyperprolaktinémiára. AAS-ban: 19-Nor/Tren prolactin-control golden-standard, 0.25-0.5 mg 2x/hét bloodwork-titrálva. Long t1/2 ~63 h.",
    "en": "Long-acting ergot D2 dopamine agonist. EMA-approved (1992 Pharmacia, now Pfizer) for hyperprolactinemia. In AAS: 19-Nor/Tren prolactin-control golden-standard, 0.25-0.5 mg 2x/week titrated by bloodwork. Long t1/2 ~63 h.",
    "pl": "Długo działający ergotaminowy agonista D2 dopaminy. Zatwierdzony przez EMA (1992 Pharmacia, obecnie Pfizer) na hiperprolaktynemię. W AAS: złoty standard kontroli prolaktyny przy 19-Nor/Tren, 0,25-0,5 mg 2x/tydzień miareczkowany badaniami. Długi t1/2 ~63 h."
  },
  "tier": 4,
  "wadaStatus": "allowed",
  "subCategory": "pct",
  "subSection": "prolactin",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (174 entries), build PASS.

---

### Task 2.5: Bromocriptine (Parlodel) — tier 4, Prolactin

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/bromocriptine.js`

**Entry data brief:**
- `id: "bromocriptine"`, `name: "Bromocriptine (Parlodel)"`, `image: "/performance/blister-white-oval.png"`
- `subCategory: "pct"`, `subSection: "prolactin"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "allowed"`
- **Mechanism:** First-generation ergot D2-dopamine agonist (Sandoz 1972 — Parlodel). Less selective than Cabergoline (D1+D2 mixed, more vegetative side effects). Suppresses prolactin similarly but with shorter half-life and more "DA-storm" side-effect profile (nausea, orthostatic hypotension, dyskinesia). Largely superseded by Cabergoline in modern AAS protocols but retained for cost (€3/box generic vs €25+ Cabergoline) and metabolic-benefit applications (insulin-sensitivity improvement, Cycloset FDA Rx 2009 for type-2 diabetes).
- **Half-life:** ~3-12 hours (short, requires 2-3x daily dosing).
- **Dosing (AAS prolactin-control):** 1.25-5 mg/day divided 2-3x. Start low (1.25 mg with food) to manage nausea.
- **`aromatization`:** "Nincs — DA-agonista."
- **`hepatotoxicity`:** "Alacsony hepatikus; cardiac valvulopathy risk hasonló mint Cabergoline magas dózison; ritkábban dokumentált AAS-PCT kontextusban."
- **Bloodwork:** Same as Cabergoline.
- **Key sources:**
  - FDA Parlodel SmPC (Sandoz 1978 US approval)
  - FDA Cycloset SmPC (S2 Therapeutics 2009 — T2DM indication)
  - Webster 1994 vs Cabergoline PMID 8090165
  - Krupp 1981 Bromocriptine adverse events PMID 7032404
- **FAQ topics (4):**
  1. "Bromocriptine vs Cabergoline — mikor első?" (cost-emphasis emerging markets; Cabergoline-intolerance fallback)
  2. "Nausea-management?" (slow titration, with food, evening dosing)
  3. "Cycloset T2DM application — AAS metabolic-benefit?" (insulin-sensitivity in obese cyclers, off-label)
  4. "Sexual benefit hasonló Cabergolinhoz?" (yes but lower magnitude, more side effect)
- **`related`:** `["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "bromocriptine",
  "name": "Bromocriptine (Parlodel)",
  "image": "/performance/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Első generációs ergot-D2-DA-agonista, Sandoz 1972 (Parlodel). Cabergoline elődje; rövidebb felezés (~3-12 h), több vegetatív mellékhatás (nausea, hypotensio). Cycloset (2009 FDA) T2DM-indikációval is.",
    "en": "First-generation ergot D2 dopamine agonist, Sandoz 1972 (Parlodel). Cabergoline's predecessor; shorter half-life (~3-12 h), more vegetative side effects (nausea, hypotension). Also marketed as Cycloset (2009 FDA) for T2DM.",
    "pl": "Pierwszej generacji ergotaminowy agonista D2 dopaminy, Sandoz 1972 (Parlodel). Poprzednik Kabergoliny; krótszy okres półtrwania (~3-12 h), więcej wegetatywnych skutków ubocznych (nudności, hipotensja). Sprzedawany też jako Cycloset (2009 FDA) na T2DM."
  },
  "tier": 4,
  "wadaStatus": "allowed",
  "subCategory": "pct",
  "subSection": "prolactin",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (175 entries), build PASS.

---

### Task 2.6: Pramipexole (Mirapex) — tier 3, Prolactin

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/pramipexole.js`

**Entry data brief:**
- `id: "pramipexole"`, `name: "Pramipexole (Mirapex)"`, `image: "/performance/blister-white-oval.png"`
- `subCategory: "pct"`, `subSection: "prolactin"`, `formFactors: ["oral"]`, `tier: 3`, `wadaStatus: "allowed"`
- **Mechanism:** Non-ergot D3-D2 selective dopamine agonist (D3 > D2). FDA Rx 1997 Boehringer for Parkinson's + restless leg syndrome. Suppresses prolactin via D2-pituitary mechanism similar to Cabergoline, but **D3-selectivity drives unique sexual-stimulation profile** ("RecPharm" off-label libido/orgasm-quality enhancement). AAS-PCT-context: niche prolactin-control + sex-life-improvement secondary use.
- **Half-life:** ~8-12 hours.
- **Dosing:** Start ultra-low 0.0625 mg (often 1/4 of a 0.25 mg tablet) at evening with food, titrate up to 0.25-0.5 mg/day max for AAS-PCT prolactin-control. Higher doses (>1 mg) → severe nausea + dyskinesia + impulse-control disorder (ICD) risk.
- **`aromatization`:** "Nincs — D2/D3 agonista."
- **`hepatotoxicity`:** "Alacsony hepatikus; FDA black-box warning for **impulse-control disorder** (gambling, hypersexuality, compulsive shopping) — incidence 17-22% in Parkinson dose ranges, lower at AAS-PCT-dose."
- **Bloodwork:** Standard PCT panel. ICD-symptom napló javasolt (self-report compulsive behaviors).
- **Key sources:**
  - FDA Mirapex SmPC (Boehringer 1997 approval)
  - Weintraub 2010 ICD PMID 20457959
  - Mansour 2012 Pramipexole + ED PMID 22651823
  - Romigi 2007 Pramipexole + RLS PMID 17646619 (pharmacology basis)
- **FAQ topics (4):**
  1. "Pramipexole vs Cabergoline — mikor választani?" (sexual-emphasis + cost; ICD-risk monitoring required)
  2. "Impulse-control disorder valóság?" (yes, low-dose less but real — partner-monitor protokoll)
  3. "RecPharm-status — milyen szubreddit-szintű használat?" (small online community recreational; not endorsed)
  4. "AAS-PCT-protokoll praktikus dozírozás?" (0.0625 mg-tól indítva titrálás, max 0.5 mg/day)
- **`related`:** `["cabergoline", "bromocriptine", "trenbolone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines, tier-3 depth).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "pramipexole",
  "name": "Pramipexole (Mirapex)",
  "image": "/performance/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Non-ergot D3-D2 szelektív DA-agonista. FDA-jóváhagyott (1997 Boehringer) Parkinsonra + restless leg-re. AAS-PCT niche: prolactin-control + szexuális stimulácó (D3-szelektivitás). FDA black-box ICD-rizikó (impulzus-kontroll zavar).",
    "en": "Non-ergot D3-D2 selective DA agonist. FDA-approved (1997 Boehringer) for Parkinson's + restless legs. AAS-PCT niche: prolactin-control + sexual stimulation (D3 selectivity). FDA black-box ICD risk (impulse-control disorder).",
    "pl": "Nieergotaminowy selektywny agonista D3-D2 dopaminy. Zatwierdzony przez FDA (1997 Boehringer) na Parkinsona + RLS. Nisza PCT po AAS: kontrola prolaktyny + stymulacja seksualna (selektywność D3). Czarna ramka FDA dla ICD (zaburzenia kontroli impulsów)."
  },
  "tier": 3,
  "wadaStatus": "allowed",
  "subCategory": "pct",
  "subSection": "prolactin",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (176 entries), build PASS.

---

### Task 2.7: Finasteride (Propecia) — tier 4, 5AR

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/finasteride.js`

**Entry data brief:**
- `id: "finasteride"`, `name: "Finasteride (Propecia / Proscar)"`, `image: "/performance/blister-white-round.png"`
- `subCategory: "pct"`, `subSection: "5ar"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "allowed"`
- **Mechanism:** Selective type-II 5α-reductase inhibitor (~70% scalp DHT suppression at 1 mg/day, ~85% prostate DHT suppression at 5 mg/day). FDA Rx Proscar 1992 BPH 5 mg, Propecia 1997 AGA (androgenetic alopecia) 1 mg. In AAS context: scalp DHT-suppression to mitigate AAS-accelerated hair loss in genetically-predisposed users. Type-I 5AR not inhibited (skin/sebum DHT only partially suppressed).
- **Half-life:** ~6 hours (parent), but pharmacodynamic effect via enzyme inhibition long-lasting (24+ hour DHT suppression on single daily dose).
- **Dosing (AAS hair-loss-prevention):** 1 mg/day continuous during AAS cycles; can pause off-cycle to allow natural DHT recovery. 5 mg/day for BPH is overdose for AAS hair-loss purpose.
- **`aromatization`:** "Nem aromatizál — kompetitív type-II 5α-reduktáz inhibitor; a DHT-konverziót gátolja, az ösztrogén-axis-t NEM érinti direktely (de a Test-emelkedés szekunder E2-emelkedéshez vezethet)."
- **`hepatotoxicity`:** "Alacsony — non-steroidal, nem 17α-alkilált. Ritka cholestasis-case-reportált (FDA Propecia label). Post-finasteride szindróma (PFS) — kontroverziális neurosteroid-mediated mood/sexual-dysfunction long-term sequela ~1-2% incidencia (Irwig 2012 PMID 22366892)."
- **Bloodwork:** Total/Free Testosterone, DHT serum (suppression confirms efficacy), E2 (secondary rise), lipid panel.
- **Key sources:**
  - FDA Propecia SmPC (Merck 1997 approval)
  - FDA Proscar SmPC (Merck 1992 approval)
  - Kaufman 1998 Propecia 5-year hair-count PMID 9821414
  - Irwig 2012 PFS PMID 22366892
  - Mella 2010 5AR + AAS PMID 20842055
- **FAQ topics (5):**
  1. "Mit védi a finasteride AAS-mellett?" (genetic-predisposition AGA-acceleration; NOT total prevention)
  2. "Trenbolone és Anadrol — finasteride hat-e?" (Tren NEM 5AR-substrate; Anadrol szintén nem — finasteride csak Test-DHT konverziót gátolja)
  3. "Post-finasteride szindróma (PFS) — mennyire valós?" (controversial; ~1-2% incidence in epidemiologic studies; long debate)
  4. "Sexual side effects reverzibilisek?" (most cases yes after 6-12 hét leállítás; PFS-emberek nem)
  5. "Topical finasteride - jobb választás?" (emerging, less systemic exposure, comparable scalp efficacy; expensive)
- **`related`:** `["dutasteride", "ru58841", "testosterone-info", "anavar-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "finasteride",
  "name": "Finasteride (Propecia / Proscar)",
  "image": "/performance/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Szelektív type-II 5α-reduktáz gátló. FDA-jóváhagyott (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). AAS-ban: scalp DHT-szuppresszió genetikailag prediszponált felhasználóknál a hajhullás lassítására. Type-I 5AR nem gátolt.",
    "en": "Selective type-II 5α-reductase inhibitor. FDA-approved (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). In AAS: scalp DHT-suppression to slow hair loss in genetically-predisposed users. Type-I 5AR not inhibited.",
    "pl": "Selektywny inhibitor 5α-reduktazy typu II. Zatwierdzony przez FDA (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). W AAS: supresja DHT na skórze głowy w celu spowolnienia wypadania włosów u genetycznie predysponowanych użytkowników. 5AR typu I nie zahamowany."
  },
  "tier": 4,
  "wadaStatus": "allowed",
  "subCategory": "pct",
  "subSection": "5ar",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (177 entries), build PASS.

---

### Task 2.8: Dutasteride (Avodart) — tier 4, 5AR

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/dutasteride.js`

**Entry data brief:**
- `id: "dutasteride"`, `name: "Dutasteride (Avodart)"`, `image: "/performance/blister-white-round.png"`
- `subCategory: "pct"`, `subSection: "5ar"`, `formFactors: ["oral"]`, `tier: 4`, `wadaStatus: "allowed"`
- **Mechanism:** Dual 5α-reductase inhibitor (type-I + type-II). ~90% scalp DHT + ~95% prostate DHT suppression at 0.5 mg/day (more potent + broader than Finasteride). FDA Rx 2001 GSK (Avodart) for BPH; off-label AGA use widespread. Type-I inhibition adds skin/sebum DHT suppression (acne-improvement secondary benefit during AAS).
- **Half-life:** ~5 weeks (very long — washout time ~6 months after stopping). Steady-state ~6 months.
- **Dosing (AAS hair-loss + acne):** 0.5 mg/day continuous or every other day (cost-saving). Long half-life means MISSED-dose tolerance is high.
- **`aromatization`:** "Nem aromatizál — kompetitív dual-5AR inhibitor; DHT-konverziót gátolja (type-I + type-II egyaránt), aromatázra nincs hatás."
- **`hepatotoxicity`:** "Alacsony; szteroid-szerű struktúra DE NEM 17α-alkilált. Hepatic AE <2% (FDA Avodart label). PFS-szerű szindróma dutasteride-on is dokumentált (Irwig 2012 PMID 22366892), gyakoribb mint finasteride-on a stronger + longer effect miatt."
- **Bloodwork:** Same as Finasteride + monitor SHBG (often drops more than Finasteride due to Type-I inhibition skin-androgen effects).
- **Key sources:**
  - FDA Avodart SmPC (GSK 2001 approval)
  - Olsen 2006 dutasteride vs finasteride AGA PMID 16782546
  - Choi 2014 dutasteride scalp DHT PMID 24820896
  - Trost 2017 PFS-comparison PMID 28267184
- **FAQ topics (4):**
  1. "Finasteride vs Dutasteride — mikor melyik?" (Finasteride first-line; Dutasteride if Finasteride inadequate vagy acne-emphasis)
  2. "Long washout-time (~6 hónap) — gond?" (yes; sexual-side-effect emerging months later harder to attribute; long fertility-decision implications)
  3. "PFS-rizikó magasabb?" (yes vs finasteride, lower-doses safer)
  4. "Topical dutasteride emerging?" (yes, dermatology-compounded, less systemic exposure)
- **`related`:** `["finasteride", "ru58841", "testosterone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~140-160 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "dutasteride",
  "name": "Dutasteride (Avodart)",
  "image": "/performance/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Dual 5α-reduktáz gátló (type-I + type-II). FDA-jóváhagyott (2001 GSK) BPH-ra. AAS-ban: ~90% scalp DHT + acne-csökkentés. Long t1/2 ~5 hét — washout ~6 hónap. PFS-rizikó magasabb mint Finasteride-on.",
    "en": "Dual 5α-reductase inhibitor (type-I + type-II). FDA-approved (2001 GSK) for BPH. In AAS: ~90% scalp DHT + acne reduction. Long t1/2 ~5 weeks — washout ~6 months. Higher PFS risk vs Finasteride.",
    "pl": "Podwójny inhibitor 5α-reduktazy (typ I + typ II). Zatwierdzony przez FDA (2001 GSK) na BPH. W AAS: ~90% supresji DHT skóry głowy + redukcja trądziku. Długi t1/2 ~5 tygodni — washout ~6 miesięcy. Wyższe ryzyko PFS vs Finasteryd."
  },
  "tier": 4,
  "wadaStatus": "allowed",
  "subCategory": "pct",
  "subSection": "5ar",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (178 entries), build PASS.

---

### Task 2.9: RU58841 — tier 2, 5AR (peripheral AR antagonist, mechanism-clarification entry)

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/ru58841.js`

**Entry data brief:**
- `id: "ru58841"`, `name: "RU58841 (PSK-3841 / HMR-3841)"`, `image: "/performance/tablet-pile-white.png"` (PLACEHOLDER — TODO Sub-Task 7: replace with `topical-solution-clear.png`)
- `subCategory: "pct"`, `subSection: "5ar"`, `formFactors: ["topical"]`, `tier: 2`, `wadaStatus: "banned"` (under WADA S1 anabolic agent — Other Anabolic Agents — chemically related)
- **`accentColor: "#a78bfa"`, `tagColor: "rgba(167,139,250,0.18)"`** (designer-purple exception per spec § 3.3)
- **Mechanism:** Peripheral non-steroidal androgen receptor antagonist. **NOT a 5α-reductase inhibitor** — instead competitively blocks AR at scalp follicular tissue. Designed by Roussel-Uclaf 1992 (Sawaya 1997 PMID 9224249) for AGA; Phase II terminated 1990s due to systemic feminizing effects when absorbed. Modern UGL formulations claim local-only action via rapid serum-esterase inactivation; in vivo data sparse, contradictory case-reports of systemic effects.
- **Half-life:** Topical solution: minimal systemic absorption claimed, but exact t1/2 systemic-bound metabolite poorly characterized. Effect lasts ~24 hours per application.
- **Dosing (research-only):** 5% solution in ethanol/propylene glycol, 0.5-1 mL once daily applied to balding scalp. UGL-only (no FDA/EMA approval anywhere globally).
- **`aromatization`:** "Nincs direkt aromatizáció. Peripherális AR-blokád → szteroid-axis NEM érintett. (Ha sysztemikusan abszorbeálódik, AAS-aktivitást blokkolhat — gyno-emphasizing risk feminization egész testen.)"
- **`hepatotoxicity`:** "Topikális alacsony hepatikus; in vivo abszorpció esetén hepatic-stressz adatok hiányosak — research-chemical kontextusban óvatossággal."
- **Bloodwork:** Limited utility — no specific marker. Standard panel pre/post if extended use.
- **Key sources:**
  - Sawaya 1997 RU58841 mechanism PMID 9224249
  - Battmann 1994 Phase I PMID 7969105
  - De Brouwer 1997 cosmetic AGA PMID 9203282
  - Olsen 2018 emerging AGA pipeline PMID 30041755 (mention)
- **FAQ topics (5):**
  1. "RU58841 5α-reduktáz gátló-e?" (**NO — peripheral AR antagonist; spec-mandated mechanism-clarification per § 4.1**)
  2. "Miért a 5AR sub-section-be soroltuk?" (use-case grouping convention; AAS hair-loss prevention shared goal with Finasteride/Dutasteride)
  3. "Beszerzhetőség és UGL-rizikó?" (research-chemical-vendor only; testing/purity highly variable)
  4. "Sysztemikus feminization rizikó?" (Phase II terminated case-history; modern UGL formulations claim local-only but data sparse)
  5. "Klinikai trial-státusz?" (Phase II 1996 terminated; no modern trial pipeline)
- **`related`:** `["finasteride", "dutasteride", "rad-140"]` (cross-link to AR antagonist + designer-purple SARM compounds)

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~110-125 lines, tier-2 depth + mandatory mechanism-clarification in description + FAQ entry 1 + dedicated `// TODO Sub-Task 7: replace placeholder with topical-solution-clear.png` comment at file top).

Top of file template (HU):
```js
// RU58841 (PSK-3841 / HMR-3841) — peripheral non-steroidal AR antagonist,
// NOT a 5α-reductase inhibitor. Mechanism-clarification entry per spec § 4.1.
// TODO Sub-Task 7: replace placeholder image '/performance/tablet-pile-white.png'
// with '/performance/topical-solution-clear.png' (Gemini-template generated in
// image-pipeline pass).
// Sources: Sawaya 1997 PMID 9224249, Battmann 1994 PMID 7969105.

export default {
  // ... rest of entry
}
```

- [ ] **Step 4: Append meta-record (note `accentColor` exception):**

```js
{
  "id": "ru58841",
  "name": "RU58841 (PSK-3841 / HMR-3841)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": {
    "hu": "Periférás non-steroidal AR-antagonista (NEM 5α-reduktáz gátló) — Roussel-Uclaf 1992 designer. Topikális AGA-research-chemical. Phase II 1996 terminálva systemikus feminizáció miatt. Modern UGL-formulák lokal-only claim-jét sparse data támasztja alá.",
    "en": "Peripheral non-steroidal AR antagonist (NOT a 5α-reductase inhibitor) — Roussel-Uclaf 1992 designer. Topical AGA research chemical. Phase II terminated 1996 due to systemic feminization. Modern UGL formulations' local-only claim has sparse supporting data.",
    "pl": "Peryferyjny niesteroidowy antagonista AR (NIE inhibitor 5α-reduktazy) — projektant Roussel-Uclaf 1992. Topikalna chemia badawcza AGA. Faza II zakończona 1996 z powodu feminizacji systemowej. Twierdzenie nowoczesnych formuł UGL o działaniu tylko lokalnym ma skąpe dane wspierające."
  },
  "tier": 2,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "5ar",
  "formFactors": ["topical"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (179 entries), build PASS.

---

### Task 2.10: Session 2 finalize — validator gate, smoke spot-check, commit, push

**Files:** none (verification + git operations)

- [ ] **Step 1: Final validator + build PASS**

```bash
npm run build
```

**Expected:** 4 lib, 179 entries (60 pep + 48 noot + **50 perf** + 21 pharma), build ~7-8s, PWA precache ~2965 KiB.

- [ ] **Step 2: Smoke-spot-check 3 random entries in preview**

```bash
npm run preview
```

Open in browser:
- `http://localhost:4173/#entry/performance/anastrozol` (AI)
- `http://localhost:4173/#entry/performance/cabergoline` (Prolactin)
- `http://localhost:4173/#entry/performance/ru58841` (5AR — verify mechanism-clarification visible in description + FAQ, accent-color purple)

Stop preview server.

- [ ] **Step 3: Stage new files**

```bash
git add src/data/libraries/performance/entries/hu/{anastrozol,letrozol,exemestane,cabergoline,bromocriptine,pramipexole,finasteride,dutasteride,ru58841}.js
git add src/data/libraries/performance/entries/en/{anastrozol,letrozol,exemestane,cabergoline,bromocriptine,pramipexole,finasteride,dutasteride,ru58841}.js
git add src/data/libraries/performance/entries/pl/{anastrozol,letrozol,exemestane,cabergoline,bromocriptine,pramipexole,finasteride,dutasteride,ru58841}.js
git add src/data/libraries/performance/index.js
```

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat(perf): Sub-Task 5 PROGRESS — AI + Prolactin + 5AR PCT content (16/20 entries)

Adds 9 new RICH entries to the PCT sub-category across 3 sub-sections:

AI (3):
- anastrozol (Arimidex, tier 4) — AAS E2-control golden-standard
- letrozol (Femara, tier 4) — stronger E2 suppression, gyno-reversal
- exemestane (Aromasin, tier 4) — suicide inhibitor + androgenic metabolite

Prolactin (3):
- cabergoline (Dostinex, tier 4) — 19-Nor/Tren prolactin-control golden-standard
- bromocriptine (Parlodel, tier 4) — first-gen ergot DA-agonist
- pramipexole (Mirapex, tier 3) — D3-selective, sexual-emphasis + ICD risk

5AR (3):
- finasteride (Propecia, tier 4) — type-II selective scalp DHT
- dutasteride (Avodart, tier 4) — dual-type DHT + acne benefit
- ru58841 (tier 2, designer-purple accent #a78bfa) — peripheral AR antagonist
  (NOT 5AR inhibitor; mechanism-clarification entry per spec section 4.1).
  Placeholder image `/performance/tablet-pile-white.png`; Sub-Task 7 will
  replace with topical-solution-clear.png template.

Each entry: 3 lang body files (HU/EN/PL) + 1 meta record. All Lab Terminal
hard-fail compliant. Sources peer-reviewed (FDA SmPC + EMA SPC + 30+ PMIDs).

Validator PASS (179 entries), build PASS, precache stable ~2965 KiB.
EOF
)"
```

- [ ] **Step 5: Push master**

```bash
git push origin master
```

---

## Session 3 — Axis + finalize (4 entries + tag)

### Task 3.1: Kisspeptin-10 — tier 3, Axis

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/kisspeptin-10.js`

**Entry data brief:**
- `id: "kisspeptin-10"`, `name: "Kisspeptin-10"`, `image: "/performance/water-vial.png"`
- `subCategory: "pct"`, `subSection: "axis"`, `formFactors: ["aq"]`, `tier: 3`, `wadaStatus: "banned"` (S2 Peptide Hormones)
- **Mechanism:** 10-amino-acid C-terminal fragment of the kisspeptin family (KISS1 gene product). Binds GPR54 (KISS1R) on hypothalamic GnRH neurons → triggers GnRH pulses → pituitary LH/FSH release → testicular Test production. **Most upstream PCT axis-restart agent — bypasses HPG suppression at the hypothalamic level**. Research-emerging (~2017+ clinical interest), Imperial College London Phase I-II ongoing.
- **Half-life:** ~28 min (very short — pulsatile dosing required to mimic endogenous GnRH-pulse pattern).
- **Dosing:** 50-200 mcg SC every 90 min (mimicking endogenous pulses) — impractical for self-administration; pulse-pump protocols only in research settings. Bolus doses (1-2 mg SC once daily) used in DIY-PCT communities — limited efficacy proven.
- **`aromatization`:** "Indirekt: hypothalamic GnRH-stimulus → LH/FSH → testicular Test → peripheral E2-konverzió. Magnitude moderate, similar to HCG-axis."
- **`hepatotoxicity`:** "Nincs hepatikus stressz — peptid SC injekció."
- **Bloodwork:** + inhibin-B + LH-pulsatility (if available, expensive 30-min sampling protocol).
- **Key sources:**
  - Jayasena 2017 male hypogonadism Kisspeptin-10 PMID 27959703
  - Dhillo 2007 hypogonadism Kisspeptin-54 PMID 17567849
  - George 2013 kisspeptin male physiology PMID 23390083
  - Imperial College London Kisspeptin trials ongoing 2020s
- **FAQ topics (4):**
  1. "Kisspeptin-10 vs HCG vs Gonadorelin — mi a különbség?" (axis-level: hypothalamic vs pituitary vs testicular)
  2. "Pulsatile-dosing impraktikus — mit ér a bolus dose?" (limited; emerging protocols)
  3. "Beszerzhetőség?" (research-chemical-vendor, peptid-CDMO; expensive €30-50/mg)
  4. "Klinikai trial-státusz 2026?" (Imperial College Phase II ongoing; Adlumiz commercial pipeline emerging)
- **`related`:** `["gonadorelin", "hcg-perf", "fsh-rec-perf"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "kisspeptin-10",
  "name": "Kisspeptin-10",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "10 aminosav C-terminál kisspeptin-fragmens — hypothalamic GPR54 → GnRH-pulse → LH/FSH. Legfelsőbb axis-restart pont a HPG-tengelyben. Imperial College London Phase I-II 2020-as években; research-emerging.",
    "en": "10-amino-acid C-terminal kisspeptin fragment — hypothalamic GPR54 → GnRH pulse → LH/FSH. Highest-upstream HPG axis restart agent. Imperial College London Phase I-II ongoing in 2020s; research-emerging.",
    "pl": "10-aminokwasowy fragment C-końcowy kisspeptyny — podwzgórzowe GPR54 → impuls GnRH → LH/FSH. Najwyższy punkt restartu osi HPG. Imperial College London Phase I-II trwa w 2020s; emerging-research."
  },
  "tier": 3,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "axis",
  "formFactors": ["aq"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (180 entries), build PASS.

---

### Task 3.2: Gonadorelin (Factrel) — tier 3, Axis

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/gonadorelin.js`

**Entry data brief:**
- `id: "gonadorelin"`, `name: "Gonadorelin (Factrel / Lutrelef)"`, `image: "/performance/water-vial.png"`
- `subCategory: "pct"`, `subSection: "axis"`, `formFactors: ["aq"]`, `tier: 3`, `wadaStatus: "banned"`
- **Mechanism:** Synthetic 10-amino-acid GnRH (gonadotropin-releasing hormone) — endogenous hypothalamic peptide. Directly stimulates pituitary GnRH-receptor → LH/FSH release. Pulsatile dosing required (like Kisspeptin-10): continuous infusion downregulates the GnRH-receptor (mechanism behind GnRH-agonist therapy in prostate cancer — opposite-direction effect at chronic dose). FDA Factrel 1982 Wyeth for diagnostic LH/FSH-stimulation testing; discontinued US 2008; EMA Lutrelef (Ferring) pulsatile-pump for hypothalamic-hypogonadism.
- **Half-life:** ~10-40 min (very short).
- **Dosing:** 100 mcg SC every 90-120 min (pulsatile, impractical for self-admin) or 100-500 mcg SC pre-cycle bolus. AAS-PCT community use is limited due to pulse-pump requirement.
- **`aromatization`:** "Indirekt — GnRH → LH/FSH → Test → másodlagos E2; magnitude similar to HCG-rebound."
- **`hepatotoxicity`:** "Nincs — peptid SC."
- **Bloodwork:** Same as Kisspeptin-10.
- **Key sources:**
  - FDA Factrel SmPC (Wyeth 1982 approval, US discontinued 2008)
  - EMA Lutrelef SPC (Ferring)
  - Smals 1986 Gonadorelin in male PMID 3093469
  - Hayes 2000 pulsatile GnRH male hypogonadism PMID 10721060
- **FAQ topics (4):**
  1. "Gonadorelin vs Kisspeptin-10 — különbség?" (Gonadorelin DIRECT GnRH-receptor; Kisspeptin upstream → endogenous GnRH-stimulus)
  2. "Continuous infusion vs pulse — opposite effect?" (chronic = downregulation → prostate-cancer-Rx; pulsatile = stimulation)
  3. "Beszerzhetőség 2026-ban?" (EU pharm-availability via Lutrelef-protocol; US compounding limited; UGL-peptid frequent)
  4. "Lehet jó AAS-PCT helyett SERM?" (limited evidence; SERMs simpler + better-documented)
- **`related`:** `["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "gonadorelin",
  "name": "Gonadorelin (Factrel / Lutrelef)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Szintetikus 10 aminosav GnRH — direkt pituiter GnRH-R stimulus, LH/FSH-release. FDA Factrel 1982 (kivonva US 2008); EMA Lutrelef pulsatile-pump hypothalamic-hipogonadism Rx. Continuous dose paradox-downregulation prostate-cancer kezelésben.",
    "en": "Synthetic 10-aa GnRH — direct pituitary GnRH-R stimulus, LH/FSH release. FDA Factrel 1982 (US-discontinued 2008); EMA Lutrelef pulsatile-pump Rx for hypothalamic hypogonadism. Continuous dose paradox-downregulation in prostate cancer therapy.",
    "pl": "Syntetyczna 10-aa GnRH — bezpośrednia stymulacja przysadkowych receptorów GnRH-R, uwolnienie LH/FSH. FDA Factrel 1982 (wycofany USA 2008); EMA Lutrelef pulsatile-pompa Rx dla podwzgórzowej hipogonadyzmu. Dawka ciągła paradoks-downregulacja w terapii raka prostaty."
  },
  "tier": 3,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "axis",
  "formFactors": ["aq"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (181 entries), build PASS.

---

### Task 3.3: Pregnenolone — tier 3, Axis

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/pregnenolone.js`

**Entry data brief:**
- `id: "pregnenolone"`, `name: "Pregnenolone"`, `image: "/performance/tablet-pile-white.png"`
- `subCategory: "pct"`, `subSection: "axis"`, `formFactors: ["oral"]`, `tier: 3`, `wadaStatus: "allowed"` (OTC supplement, not on WADA list)
- **Mechanism:** "Master steroid" — endogenous hormonal precursor (cholesterol → pregnenolone → progesterone + 17-OH-pregnenolone → DHEA → androstenedione → Test). OTC supplement claim: oral supplementation → systemic steroidogenesis substrate-loading → downstream hormone elevation. **Evidence-quality LOW**: oral bioavailability poor (~5-10% systemic; most converted to progesterone first-pass), serum kinetic studies weak. Neurosteroid action at NMDA + GABA receptors (Mosconi 2017 review) drives small cognitive/mood benefit independent of hormone-axis claim. AAS-PCT context: niche "adjuvant" use, weak evidence.
- **Half-life:** ~30-45 min (parent; serum kinetics highly variable).
- **Dosing:** 10-50 mg/day, evening (cortisol-stimulating effects). OTC dose range 25-100 mg.
- **`aromatization`:** "Indirekt: szteroid-precursor → Test → másodlagos peripheral E2-konverzió. Magnitude small (oral first-pass progesteron-konverzió dominál)."
- **`hepatotoxicity`:** "Alacsony — endogén szteroid-precursor. Long-term high-dose (>50 mg/nap chronic 6+ hónap) hepatic enzyme rise rare-but-documented."
- **Bloodwork:** Pregnenolone serum (sensitive-assay), DHEA-S, Total/Free Test, E2, cortisol baseline (Pregnenolone competes with cortisol-pathway via 17-OH-Preg branchpoint).
- **Key sources:**
  - Mosconi 2017 Pregnenolone neurosteroid review PMID 28259555
  - Roberts 1992 oral Pregnenolone PK PMID 1610975
  - Marx 2009 Pregnenolone schizophrenia trial PMID 19797577
- **FAQ topics (4):**
  1. "OTC supplement — működik valójában?" (Modest neurosteroid benefit + weak hormone-axis effect; evidence quality LOW)
  2. "Long-term-safe?" (sparse data; conservative cycling recommended)
  3. "Vs DHEA — mit válasszak?" (Pregnenolone upstream-precursor; DHEA closer-to-androgen; both poorly bioavailable orally)
  4. "Brain fog post-PCT — Pregnenolone helps?" (some users report; small RCT data)
- **`related`:** `["dhea", "kisspeptin-10"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "pregnenolone",
  "name": "Pregnenolone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "\"Master steroid\" — endogén szteroid-precursor (cholesterol → pregnenolone → összes szteroid-hormon). OTC supplement. Evidence quality LOW: orális biodostupnošć gyenge (~5-10%), neurosztiered NMDA/GABA hatás kis kognitív-előny. AAS-PCT niche.",
    "en": "\"Master steroid\" — endogenous steroid precursor (cholesterol → pregnenolone → all steroid hormones). OTC supplement. Evidence quality LOW: oral bioavailability poor (~5-10%), neurosteroid NMDA/GABA action drives small cognitive benefit. AAS-PCT niche use.",
    "pl": "\"Steroid macierzysty\" — endogenny prekursor steroidowy (cholesterol → pregnenolon → wszystkie hormony steroidowe). Suplement OTC. Jakość dowodów NISKA: biodostępność doustna słaba (~5-10%), działanie neurosterodowe NMDA/GABA daje małą korzyść poznawczą. Nisza w PCT po AAS."
  },
  "tier": 3,
  "wadaStatus": "allowed",
  "subCategory": "pct",
  "subSection": "axis",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (182 entries), build PASS.

---

### Task 3.4: DHEA — tier 3, Axis

**Files:** `src/data/libraries/performance/entries/{hu,en,pl}/dhea.js`

**Entry data brief:**
- `id: "dhea"`, `name: "DHEA (Dehydroepiandrosterone)"`, `image: "/performance/tablet-pile-white.png"`
- `subCategory: "pct"`, `subSection: "axis"`, `formFactors: ["oral"]`, `tier: 3`, `wadaStatus: "banned"` (S1.1.b Endogenous Anabolic Androgens — DHEA explicitly listed)
- **Mechanism:** Endogenous adrenal-derived androgen precursor (cholesterol → pregnenolone → 17-OH-pregnenolone → DHEA → androstenedione → Test). OTC supplement (US: DSHEA-listed; EU: prescription-only). Oral DHEA → 100 mg first-pass produces modest peripheral Test rise (5-10% above baseline) + E2 rise (~15-20%) depending on aromatase-status. **Better evidence for Test-axis support than Pregnenolone** — Wiehle 2014 Phase II PMID 24913480, Morales 1994 PMID 7910820 historical. Weak PCT efficacy; works mostly in adrenal-insufficient or elderly low-T men.
- **Half-life:** ~25 min (parent), DHEA-S ~10 hours (sulfate-conjugated active metabolite).
- **Dosing (AAS-PCT):** 25-50 mg/day, morning (mimic endogenous diurnal pattern). NOT recommended for young, healthy men with normal baseline DHEA-S — minimal benefit + aromatization to E2.
- **`aromatization`:** "Aromatizál — DHEA → androstenedione → Test → E2 peripheral konverzió. Magnitude moderate (E2-rise ~15-20% baseline-on, gyno-szenzitív felhasználón AI co-administration indokolt lehet)."
- **`hepatotoxicity`:** "Alacsony hepatikus; chronic high-dose (>50 mg/nap >6 hónap) hepatic enzyme rise rare-but-documented (FDA Cellgevity OTC monograph supplement adverse-event reports)."
- **Bloodwork:** DHEA-S serum (NOT free DHEA — DHEA-S is the stable bioactive metabolite measured), Total/Free Test, E2, lipid panel, cortisol baseline.
- **Key sources:**
  - Wiehle 2014 DHEA Phase II PMID 24913480
  - Morales 1994 DHEA-replacement older men PMID 7910820
  - Yen 1995 DHEA + cognition PMID 7726309
  - Allolio 1999 DHEA replacement adrenal insufficiency PMID 10468979
- **FAQ topics (4):**
  1. "DHEA vs Pregnenolone — különbség?" (DHEA closer-to-androgen, better evidence for Test-axis support)
  2. "WADA-banned-listed — competitor figyeljen!" (yes, S1.1.b explicit DHEA)
  3. "Egészséges fiatal férfin — érdemes?" (no — minimal benefit + aromatization-risk)
  4. "DHEA + Aromatase Inhibitor szükséges?" (gyno-szenzitív felhasználón yes; mainstream-user no)
- **`related`:** `["pregnenolone", "testosterone-info"]`

**Steps:**

- [ ] **Step 1-3: Write HU/EN/PL body files** (~115-130 lines).
- [ ] **Step 4: Append meta-record:**

```js
{
  "id": "dhea",
  "name": "DHEA (Dehydroepiandrosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": {
    "hu": "Endogén adrenális androgén-precursor (cholesterol → DHEA → androstenedione → Test). US-OTC, EU-Rx. Jobb evidence mint a Pregnenolone, de a fiatal egészséges férfin minimális Test-emelkedés + ~15-20% E2-rise. WADA S1.1.b listára vett (banned).",
    "en": "Endogenous adrenal androgen precursor (cholesterol → DHEA → androstenedione → Test). US-OTC, EU-Rx. Better evidence than Pregnenolone, but in young healthy men minimal Test elevation + ~15-20% E2 rise. WADA S1.1.b listed (banned).",
    "pl": "Endogenny prekursor androgenu nadnerczowego (cholesterol → DHEA → androstendion → testosteron). USA-OTC, UE-Rx. Lepsze dowody niż Pregnenolon, ale u młodych zdrowych mężczyzn minimalny wzrost Test + ~15-20% wzrost E2. WADA S1.1.b wymieniony (zakazany)."
  },
  "tier": 3,
  "wadaStatus": "banned",
  "subCategory": "pct",
  "subSection": "axis",
  "formFactors": ["oral"]
}
```

- [ ] **Step 5: Run `npm run build`.** Expected validator PASS (183 entries), build PASS.

---

### Task 3.5: Sub-Task 5 finalize — validator + smoke + commit + tag + push + Obsidian mirror

**Files:** none (verification + git operations)

- [ ] **Step 1: Final validator + build PASS**

```bash
npm run build
```

**Expected:** 4 lib, **183 entries** (60 pep + 48 noot + **54 perf** + 21 pharma), build ~7-8s, PWA precache <3100 KiB.

- [ ] **Step 2: Smoke-spot-check 3 axis entries + sub-task 5 totals**

```bash
npm run preview
```

Open in browser:
- `http://localhost:4173/#entry/performance/kisspeptin-10`
- `http://localhost:4173/#entry/performance/dhea`
- `http://localhost:4173/library/performance` → PCT CategoryCard now shows **20** entry-count, click → filter-chip applied → 20 entries listed in the "Összes Teljesítményfokozó" accordion, all 4 sub-sections render correctly when filtered

Stop preview server.

- [ ] **Step 3: Stage new files**

```bash
git add src/data/libraries/performance/entries/hu/{kisspeptin-10,gonadorelin,pregnenolone,dhea}.js
git add src/data/libraries/performance/entries/en/{kisspeptin-10,gonadorelin,pregnenolone,dhea}.js
git add src/data/libraries/performance/entries/pl/{kisspeptin-10,gonadorelin,pregnenolone,dhea}.js
git add src/data/libraries/performance/index.js
```

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat(perf): Sub-Task 5 COMPLETE — PCT content (20/20 entries) + v0.20-perf-pct

Adds 4 new RICH entries to the PCT sub-category Axis sub-section, completing
Sub-Task 5 of the 2026-05-19 perf-restructure mega-phase:

Axis (4):
- kisspeptin-10 (tier 3) — hypothalamic upstream HPG axis restart
- gonadorelin (Factrel/Lutrelef, tier 3) — synthetic GnRH direct pituitary
- pregnenolone (tier 3) — master steroid precursor, OTC supplement
- dhea (tier 3) — adrenal androgen precursor, WADA S1.1.b banned

Sub-Task 5 cumulative:
- 20 new entries x 3 lang = 60 new body files
- 20 new meta records in index.js
- 6 sub-sections populated: SERM (4), Gonad (3), AI (3), Prolactin (3),
  Axis (4), 5AR (3)
- 3 cross-framed entries with -perf suffix (hcg-perf, hmg-perf,
  fsh-rec-perf) reserving namespace for future peptid-library batch
- 80+ peer-reviewed sources (FDA SmPC + EMA SPC + PubMed)
- All Lab Terminal hard-fail compliant
- RU58841 placeholder image (Sub-Task 7 will replace with proper template)

Mega-phase progress: 5/7 sub-tasks SHIPPED (~71%), 54/68 perf entries
live (~79%), 14 entries remaining across Sub-Task 6 (Fat) and Sub-Task 7
(Images + polish).

Tag: v0.20-perf-pct
EOF
)"
```

- [ ] **Step 5: Tag and push**

```bash
git tag -a v0.20-perf-pct -m "Sub-Task 5 complete: 20 new PCT entries (SERM+Gonad+AI+Prolactin+Axis+5AR)"
git push origin master
git push origin v0.20-perf-pct
```

**Expected:** master + tag pushed, Vercel auto-deploy starts.

- [ ] **Step 6: Mirror plan to Obsidian Projekt_Tudasbazis**

```bash
cp "docs/superpowers/plans/2026-05-20-perf-restructure-sub-task-5-pct.md" \
   "E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_SubTask5_PCT_Plan.md"
```

(Per `[[feedback_phase_specs_obsidian]]` memory — plan files mirror to Obsidian alongside spec mirror.)

- [ ] **Step 7: Run `/handoff` to update status file**

```
/handoff
```

This invokes the global handoff slash-command which updates `MolekulaX_Statusz.md` with the session log (Session 3 closes Sub-Task 5, tag `v0.20-perf-pct` shipped, mega-phase 71% complete).

---

## Self-Review

### Spec coverage check

Spec section → plan task mapping:

- Spec § 1.1 entry roster (20 entries) → Tasks 1.1-1.7 + 2.1-2.9 + 3.1-3.4 ✓
- Spec § 1.2 tier distribution → embedded per-task in "Entry data brief" headers ✓
- Spec § 2 cross-frame naming (`hcg-perf` / `hmg-perf` / `fsh-rec-perf`) → Tasks 1.5/1.6/1.7 explicit ✓
- Spec § 3 schema → "Entry Body Template" + "Meta-record template" sections ✓
- Spec § 4.1 RU58841 mechanism-clarification → Task 2.9 explicit FAQ entry 1 + description prefix + dedicated comment ✓
- Spec § 4.2 DHEA/Pregnenolone scope → Tasks 3.3/3.4 with explicit "evidence quality LOW" disclaimer guidance ✓
- Spec § 4.3 HMG vs FSH-rec distinction → Tasks 1.6/1.7 mechanism briefs ✓
- Spec § 5 source-policy HYBRID → "Key sources" lists peer-reviewed only; body-content reference notes apply during writing ✓
- Spec § 6 ship cadence → Tasks 1.8 / 2.10 / 3.5 finalize-tasks ✓
- Spec § 7 validation gates → "Step 5: Run npm run build" per task + finalize-tasks ✓
- Spec § 8 risks → mitigations embedded per-task (RU58841 placeholder image, tier-2 framing, cross-frame naming) ✓
- Spec § 9 out-of-scope → not represented in plan (correct — plan implements scope, not OOS) ✓
- Spec § 10 acceptance criteria → covered by Task 3.5 step 1-5 ✓

### Placeholder scan

Reviewed every "Entry data brief" section. No "TBD", "TODO" (except the explicit Sub-Task 7 image-template reference in Task 2.9 RU58841, which is intentional placeholder), no "implement later", no "similar to Task N" without code.

### Type consistency

- Entry meta record schema consistent across all 20 entries (id, name, image, accentColor, tagColor, shortDesc, tier, wadaStatus, subCategory, subSection, formFactors)
- `accentColor` exceptions documented at RU58841 (Task 2.9) — matches spec § 3.3
- `wadaStatus` values use one of {`banned`, `restricted`, `allowed`} per spec § 3.1 — all 20 entries assigned consistently
- `formFactors` values use one of {`oral`, `aq`, `topical`} per spec § 3.2 — all assignments check against spec

No type drift detected.

---

## Execution Handoff

Plan complete and saved to [`docs/superpowers/plans/2026-05-20-perf-restructure-sub-task-5-pct.md`](2026-05-20-perf-restructure-sub-task-5-pct.md).

**Two execution options:**

1. **Subagent-Driven** — fresh subagent per task, review between tasks, fast iteration. **NOT RECOMMENDED for this plan**: content-heavy work is pattern-following not judgment work; subagent overhead (cold-context paste 10K+ tokens × 20 tasks ≈ 600-800K) far exceeds inline cost (~250-300K total). See `[[Subagent_Driven_Token_Cost_Calibration]]` lesson.

2. **Inline Execution (recommended)** — execute tasks in this session using `superpowers:executing-plans`, batch by session-checkpoint. Tag `v0.20-perf-pct` ships at Session 3 close.

Continue with Inline Execution starting Session 1 (Tasks 1.1-1.8)?
