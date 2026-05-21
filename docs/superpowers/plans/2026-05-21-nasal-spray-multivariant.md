# Nasal-spray Multi-Variant Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add dual-route `variants[]` (SC + IN) to 8 peptides in the peptide library — Semax, Selank, Melanotan-1, Melanotan-2, PT-141 (peer-reviewed group) + Adamax, NA-Semax-Amidate, Adalank (grey-zone group). Single megapush, tag `v0.26-nasal-spray-multivariant`.

**Architecture:** Albuterol Phase 5 `variants[]` precedens. `resolveVariant` helper (`adaptLibraryEntry.js:967`) `{...entry, ...variant}` spread — variant mezők automatikusan felülírják az entry-szintűeket, no adapter allowlist needed. Phase 12 per-lang split-architektúra: `entries/{hu,en,pl}/<id>.js` flat-string body per lang. Variant-image: létező assets, no new PNG.

**Tech Stack:** React 18 + Vite 5 + Tailwind 3 + Node 20.18. Verify-gate: `scripts/verify-pmids.mjs` (NCBI eutils API). Subagent isolation via `Agent` tool with `isolation: "worktree"` parameter.

---

## File Structure

**Modified files (24 entry-body + opt. 1 adapter + opt. 1 calc):**

- `src/data/libraries/peptides/entries/hu/{semax,selank,melanotan-1,melanotan-2,pt-141,adamax,na-semax-amidate,adalank}.js` (8 fájl, HU body)
- `src/data/libraries/peptides/entries/en/{...}.js` (8 fájl, EN body)
- `src/data/libraries/peptides/entries/pl/{...}.js` (8 fájl, PL body)

**Audit-only (no change unless gap found):**

- `src/components/library/adaptLibraryEntry.js` — `resolveVariant` line 967 spread already handles passthrough; no edit needed unless smoke fang-ol mező-hiányt
- `src/components/library/DoseCalculator.jsx` — only if Phase A smoke shows IN-variant doseCalc render-bug

**Created files:**

- `docs/superpowers/plans/2026-05-21-nasal-spray-multivariant.md` (ez a fájl)

**No-touch files:**

- `validate-library-meta.mjs` (validator)
- `LIBRARY_META` (`src/data/libraries/peptides/index.js`) — entry-ek létező IDs, no meta-change
- PWA precache config, vite.config.js, package.json

---

## Task 1: Phase A — Semax Anchor Implementation

**Files:**
- Read: `src/data/libraries/peptides/entries/hu/semax.js` (existing body)
- Read: `src/data/libraries/peptides/entries/en/semax.js`
- Read: `src/data/libraries/peptides/entries/pl/semax.js`
- Modify: same 3 files (add `variants[]` + `defaultVariant`)
- Verify: `scripts/verify-pmids.mjs`

### Step 1.1: Read existing Semax bodies

- [ ] **Step:** Read all 3 Semax body files

Run:
```bash
Read src/data/libraries/peptides/entries/hu/semax.js
Read src/data/libraries/peptides/entries/en/semax.js
Read src/data/libraries/peptides/entries/pl/semax.js
```

Expected: 3 default-export objektum, `id: "semax"`, mindegyik flat-string lang-specifikus values. Megjegyzés: jelenleg NINCS `variants[]` (single-route entry, SC-default).

### Step 1.2: WebFetch + verify 3 Semax PMIDs

- [ ] **Step:** WebFetch each PMID for title-truth + token-overlap check

PMIDs to verify (use `scripts/verify-pmids.mjs` pattern — NCBI eutils API):
- `29947337` — Gusev 2018 stroke (Semax intranasal cerebral ischemia)
- Alternative: search PubMed for `Selank kost 2001` and `Volchegorskii semax anxiety` to find real PMIDs

Run:
```bash
node scripts/verify-pmids.mjs --pmids 29947337
```

Expected: PASS with title containing "Semax" or "ACTH(4-7)" or "stroke" / "cerebral ischemia".
If FAIL: WebFetch `https://pubmed.ncbi.nlm.nih.gov/29947337/` and inspect title manually.

**Fallback if PMID dead:** search PubMed for a verified replacement (`Semax intranasal stroke 2018-2024`), grab a different PMID, re-verify.

### Step 1.3: Draft Semax HU body with variants[]

- [ ] **Step:** Edit `src/data/libraries/peptides/entries/hu/semax.js` — add `variants[]` block

Insert immediately BEFORE the closing `}` of the default-export object:

```js
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/water-vial.png",
      "dosing": "200-600 μg SC/nap (research-protokoll)",
      "halfLife": "~20 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer)",
      "bioavailability": "~80-100% (SC)",
      "onsetTime": "15-30 perc",
      "indications": "Research-only kontextus: BBB-átjutás, BDNF-modulálás, kognitív teljesítmény-tanulmányok",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/nap",
        "note": "SC research-dose. Standard 5 mg vial + 2 ml BAC water = 2500 μg/ml = 80 μl per 200 μg dose."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 2 ml bakteriosztatikus víz",
          "Lassan az üvegfalra injektáld a vizet, NE direkt a porra",
          "Várj 30 másodpercet, óvatosan forgasd (NE rázd)",
          "Tárolás: hűtőben, max 28 nap"
        ]
      }
    },
    {
      "id": "in",
      "routeId": "in",
      "routeLabel": "Intranazális spray",
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "200-600 μg/nap szippantva (1-3 szippantás per orrlyuk, 50 μg/szippantás)",
      "halfLife": "~5-10 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer)",
      "bioavailability": "~30-40% (IN)",
      "onsetTime": "5-15 perc",
      "indications": "Orosz klinikai gyakorlat: stroke akut-fázis BBB-direct delivery (Gusev 2018, PMID 29947337); cognitive enhancement off-label",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 300, "high": 600 },
        "unit": "μg IN/nap",
        "note": "Pre-mixed RU pharma (Semax 0.1% nasal drops, 50 μg/csepp). 2-12 csepp/nap, oszd el 2 dózisra."
      }
    }
  ],
  "defaultVariant": "sc"
```

### Step 1.4: Mirror EN + PL bodies

- [ ] **Step:** Edit `src/data/libraries/peptides/entries/en/semax.js` — same structure, EN translation

```js
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/water-vial.png",
      "dosing": "200-600 μg SC/day (research protocol)",
      "halfLife": "~20 min plasma",
      "halfLifeActive": "~24 h (CNS)",
      "bioavailability": "~80-100% (SC)",
      "onsetTime": "15-30 min",
      "indications": "Research context: BBB penetration, BDNF modulation, cognitive performance studies",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/day",
        "note": "SC research dose. Standard 5 mg vial + 2 ml BAC water = 2500 μg/ml = 80 μl per 200 μg dose."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 2 ml bacteriostatic water",
          "Inject slowly onto vial wall, NOT directly onto powder",
          "Wait 30 seconds, swirl gently (DO NOT shake)",
          "Storage: refrigerated, max 28 days"
        ]
      }
    },
    {
      "id": "in",
      "routeId": "in",
      "routeLabel": "Intranasal spray",
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "200-600 μg/day intranasal (1-3 sprays per nostril, 50 μg/spray)",
      "halfLife": "~5-10 min plasma",
      "halfLifeActive": "~24 h (CNS)",
      "bioavailability": "~30-40% (IN)",
      "onsetTime": "5-15 min",
      "indications": "Russian clinical practice: acute stroke BBB-direct delivery (Gusev 2018, PMID 29947337); cognitive enhancement off-label",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 300, "high": 600 },
        "unit": "μg IN/day",
        "note": "Pre-mixed RU pharma (Semax 0.1% nasal drops, 50 μg/drop). 2-12 drops/day split into 2 doses."
      }
    }
  ],
  "defaultVariant": "sc"
```

- [ ] **Step:** Edit `src/data/libraries/peptides/entries/pl/semax.js` — same structure, PL translation

```js
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/water-vial.png",
      "dosing": "200-600 μg SC/dzień (protokół badawczy)",
      "halfLife": "~20 min w osoczu",
      "halfLifeActive": "~24 h (OUN)",
      "bioavailability": "~80-100% (SC)",
      "onsetTime": "15-30 min",
      "indications": "Kontekst badawczy: przenikanie BBB, modulacja BDNF, badania nad wydajnością poznawczą",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/dzień",
        "note": "Dawka badawcza SC. Standardowa fiolka 5 mg + 2 ml wody BAC = 2500 μg/ml = 80 μl na dawkę 200 μg."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 5 mg + 2 ml wody bakteriostatycznej",
          "Powoli wstrzyknąć wodę na ściankę fiolki, NIE bezpośrednio na proszek",
          "Odczekać 30 sekund, delikatnie zakręcić (NIE potrząsać)",
          "Przechowywanie: w lodówce, maks. 28 dni"
        ]
      }
    },
    {
      "id": "in",
      "routeId": "in",
      "routeLabel": "Spray donosowy",
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "200-600 μg/dzień donosowo (1-3 spraye na nozdrze, 50 μg/spray)",
      "halfLife": "~5-10 min w osoczu",
      "halfLifeActive": "~24 h (OUN)",
      "bioavailability": "~30-40% (IN)",
      "onsetTime": "5-15 min",
      "indications": "Rosyjska praktyka kliniczna: ostry udar BBB-direct delivery (Gusev 2018, PMID 29947337); wzmocnienie poznawcze off-label",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 300, "high": 600 },
        "unit": "μg IN/dzień",
        "note": "Pre-mieszany RU pharma (Semax 0.1% krople donosowe, 50 μg/kropla). 2-12 kropli/dzień, podzielone na 2 dawki."
      }
    }
  ],
  "defaultVariant": "sc"
```

### Step 1.5: Validator + build check

- [ ] **Step:** Run validator

Run:
```bash
npm run validate
```

Expected: PASS — `4 libraries, 193 entries, 0 warnings, 0 errors`.

- [ ] **Step:** Run build

Run:
```bash
npm run build
```

Expected: PASS in ~5-6s, vendor bundle stable ~165 KiB, PWA precache **<5120 KiB**.

### Step 1.6: Local smoke test (Semax anchor)

- [ ] **Step:** Start dev server

Run:
```bash
npm run dev
```

Expected: Vite dev server listens on `http://localhost:5173` (or similar).

- [ ] **Step:** Manual browser smoke

In browser at `http://localhost:5173/#entry/peptides/semax`:
1. Hero image = water-vial.png (default SC variant)
2. VariantToggle visible: 2 chips "Szubkután injekció" | "Intranazális spray"
3. Click "Intranazális spray" → image cseréje nasal-spray-clear.png-re, URL → `#entry/peptides/semax/in`, dosing label "200-600 μg/nap szippantva"
4. Calculator panel: IN-variant `doseCalc.fixed` (100/300/600 μg) megjelenik, no console-error
5. Click back "Szubkután injekció" → SC restore, URL `/sc`, Calculator (200/400/600 μg)
6. Test EN: language-switch chip EN → all labels EN ("Subcutaneous injection" / "Intranasal spray")
7. Test PL: same

- [ ] **Step:** Document smoke result

If smoke PASSES: continue to Step 1.7.
If smoke FAILS (variant mező hiányzik, Calculator crashes, URL helytelen): STOP, diagnose, fix, re-smoke. Do NOT proceed to Phase B.

### Step 1.7: Commit Phase A anchor

- [ ] **Step:** Commit anchor (no tag yet)

Run:
```bash
git add src/data/libraries/peptides/entries/hu/semax.js src/data/libraries/peptides/entries/en/semax.js src/data/libraries/peptides/entries/pl/semax.js
git commit -m "feat(peptides): add nasal-spray multi-variant to Semax (anchor)

Semax SC + IN variants[] per Albuterol Phase 5 schema:
- SC: 200-600 μg/day, water-vial.png, full reconstitute steps
- IN: 200-600 μg/day, nasal-spray-clear.png, RU pharma 0.1% nasal drops
- PMID 29947337 (Gusev 2018 stroke) cited in IN indications

defaultVariant: sc. No adapter/validator/calculator change required."
```

Expected: Commit succeeds. Working tree clean except 3 new files (added).

### Step 1.8: STOP gate — user review

- [ ] **Step:** Report Semax anchor result to user

Text:
> "Phase A anchor SHIPPED (commit `<sha>`). Semax SC + IN variants live locally. Smoke PASSED for 3 langs × 2 variants × Calculator. Ready for Phase B subagent batch (7 peptides). Approve?"

Wait for user GO before proceeding to Task 2.

---

## Task 2: Phase B — Subagent Batch (7 Peptides Parallel)

**Files:**
- 7 peptides × 3 langs = 21 entry-body files
- All edited by subagent in isolated git worktrees

### Step 2.1: Dispatch 4 peer-reviewed subagents (parallel)

- [ ] **Step:** Send all 4 subagent dispatches in ONE message (parallel execution)

Each subagent gets:
1. Full path to Semax anchor file (HU + EN + PL) as **template-of-truth**
2. Peptide-specific PMID list (peer-reviewed)
3. Mandate to verify each PMID via NCBI eutils call BEFORE writing it
4. Worktree isolation

**Subagent #1 — Selank (parallel):**

```
Agent({
  description: "Add Selank nasal-spray variants",
  subagent_type: "general-purpose",
  isolation: "worktree",
  prompt: `
You are adding dual-route variants[] (SC + IN) to the Selank peptide entry in the MolekulaX repo.

WORKING DIRECTORY: This worktree is at the molekulax repo root.

TEMPLATE-OF-TRUTH: Read src/data/libraries/peptides/entries/hu/semax.js, en/semax.js, pl/semax.js — the variants[] + defaultVariant block at the END of each file is the EXACT pattern you must follow. Copy structure, mező-names, indentation. Only the VALUES change per peptide.

PEPTIDE: Selank
TARGET FILES (edit each, add variants[] + defaultVariant before closing }):
- src/data/libraries/peptides/entries/hu/selank.js
- src/data/libraries/peptides/entries/en/selank.js
- src/data/libraries/peptides/entries/pl/selank.js

SELANK SPECIFICS:
- defaultVariant: "sc"
- SC variant.image: /peptides/water-vial.png
- IN variant.image: /performance/nasal-spray-clear.png
- SC dosing: ~150-450 μg SC/day (Kost research-protocol range)
- IN dosing: 75-300 μg/day intranasal (Russian 0.15% Selanco nasal drops)
- SC half-life plasma: ~5-7 min (very short, like Semax)
- SC half-life active: ~24 h (CNS persistence via downstream BDNF/serotonergic effects)
- SC bioavailability: ~80-100%
- IN bioavailability: ~30-40%
- onsetTime SC: 15-30 min, IN: 5-15 min
- Indications: anxiolytic GABAergic/serotonergic modulation, anti-anxiety RCTs
- IN doseCalc.note: "Pre-mixed RU pharma (Selanco 0.15% nasal drops, 75 μg/drop). 1-4 drops/day."
- SC reconstitute.steps: standard lyophilized peptide protocol (5 mg vial + 2 ml BAC water + slow injection + 30 sec wait + swirl + 28 days fridge storage)
- IN: NO reconstitute (pre-mixed RU pharma)

PEER-REVIEWED SOURCES (cite in IN indications):
Search PubMed via WebFetch (https://pubmed.ncbi.nlm.nih.gov/?term=selank+anxiolytic) for at MOST 2 verified PMIDs. Recommended candidates to check:
- PMID 11533792 (Kost 2001 anxiolytic) — VERIFY this is real before citing
- A 2018-2024 Volchegorskii or Selank RCT

PMID VERIFICATION RULE (KRITIKUS):
For EVERY PMID you write, FIRST run:
  node scripts/verify-pmids.mjs --pmids <pmid>
The script returns PASS/FAIL with NCBI title vs your expected token overlap. If FAIL, search PubMed for a real alternative and re-verify. NEVER ship a PMID you haven't verified — see [[feedback_subagent_hallucinated_pmids]] for context (10/13 PMID hallucination rate in v0.23).

ACCEPTANCE for your task:
1. 3 files edited (hu, en, pl) with variants[] block matching Semax structure exactly
2. defaultVariant: "sc" added to each
3. All cited PMIDs verified via verify-pmids.mjs (run the script + paste output in your final report)
4. npm run validate PASSES (run from worktree root)
5. npm run build PASSES (run from worktree root)
6. Report back: list of files changed, PMIDs cited (with verify-output), commit hash

DO NOT touch any other file. DO NOT modify adapter, calculator, or validator. DO NOT add new images.
DO NOT ship if any PMID is unverified.
`
})
```

**Subagent #2 — Melanotan-1 (Afamelanotide):** Same template, peptide-specifics:
- defaultVariant: "sc" (Scenesse-approved Rx route)
- SC image: /peptides/water-vial.png
- IN image: /performance/nasal-spray-clear.png
- SC dosing: 16 mg Scenesse implant (approved Rx) OR research SC 0.16 mg/kg
- IN dosing: 1 mg/day intranasal (Hadley early research)
- Half-lives: SC ~1 h plasma + ~hours-days α-MSH receptor downstream; IN very short plasma
- Indications: EPP (erythropoietic protoporphyria, FDA-approved); photoprotection research
- PMIDs to verify: Scenesse FDA SmPC 2019 + Lim 2014 phase 3 — search PubMed
- IN reconstitute: spray-vial transfer (10 mg vial + 5 ml BAC + transfer to spray)

**Subagent #3 — Melanotan-2:** Same template, peptide-specifics:
- defaultVariant: "sc"
- SC image: /peptides/Melanotan-2.png (EXISTING image, use this exact path)
- IN image: /performance/nasal-spray-clear.png
- SC dosing: 0.5-1 mg SC every 1-3 days (community standard, loading + maintenance)
- IN dosing: 0.5-1 mg/day intranasal (less efficient, requires higher doses)
- Indications: tanning + libido (off-label); skin pigment + sexual function research
- PMIDs: Hadley/Dorr photoprotection — search PubMed for real PMIDs
- IN reconstitute: spray-vial transfer recon (10 mg vial + BAC + transfer)

**Subagent #4 — PT-141 (Bremelanotide / Vyleesi):** Same template, peptide-specifics:
- defaultVariant: "sc"
- SC image: /peptides/PT-141.png (EXISTING image)
- IN image: /performance/nasal-spray-clear.png
- SC dosing: 1.75 mg SC PRN (Vyleesi auto-injector FDA-approved for HSDD)
- IN dosing: 4-20 mg/day intranasal (original Palatin research route)
- Indications: HSDD (FDA Vyleesi 2019); sexual arousal female + erectile function research
- PMIDs to verify: Vyleesi FDA approval 2019 + Diamond 2006 PubMed
- IN reconstitute: spray-vial transfer (10 mg vial + 5 ml BAC + transfer)

Expected output: 4 parallel subagent reports, each with files changed + PMID-verify-output + commit hash.

### Step 2.2: Dispatch 3 grey-zone subagents (parallel)

- [ ] **Step:** Send all 3 grey-zone subagent dispatches in ONE message

**Subagent #5 — Adamax (parallel):**

```
Agent({
  description: "Add Adamax nasal-spray variants",
  subagent_type: "general-purpose",
  isolation: "worktree",
  prompt: `
You are adding dual-route variants[] (SC + IN) to the Adamax peptide entry in the MolekulaX repo.

WORKING DIRECTORY: molekulax repo root in worktree.

TEMPLATE-OF-TRUTH: Read src/data/libraries/peptides/entries/hu/semax.js + en/semax.js + pl/semax.js — variants[] block pattern. Copy structure exactly, values change per peptide.

PEPTIDE: Adamax (Semax-analog / Adamantyl-modified)
TARGET FILES:
- src/data/libraries/peptides/entries/hu/adamax.js
- src/data/libraries/peptides/entries/en/adamax.js
- src/data/libraries/peptides/entries/pl/adamax.js

ADAMAX SPECIFICS:
- defaultVariant: "sc"
- SC variant.image: /peptides/water-vial.png
- IN variant.image: /performance/nasal-spray-clear.png
- SC dosing: 100-300 μg/day (research-chemical anecdotal range)
- IN dosing: 100-300 μg/day intranasal (community route)
- Half-lives: ~30 min plasma SC, ~5-10 min IN; ~24 h CNS active
- Bioavailability: SC ~80-100%, IN ~30-40%
- Indications HU/EN/PL: "Korlátozott humán adat, anekdotális kísérleti research-chemical, Semax-analog feltételezett BBB-penetrációval" / "Limited human data, anecdotal research-chemical, Semax-analog with hypothesized BBB penetration" / "Ograniczone dane humanitarne, anegdotyczny research chemical, analog Semax z hipotetyczną penetracją BBB"
- IN reconstitute.steps: full research-chemical recon (4-5 steps: 5 mg vial + sterile water + BAC + transfer to spray bottle + concentration calc)

CITATION POLICY — KRITIKUS:
- DO NOT cite any PMID. NO "PMID: ..." pattern anywhere in your edits.
- Use language like "Limited human data, anecdotal reports" / "Research chemical with no peer-reviewed clinical trials" / "Community-sourced protocol".
- The grey-zone disclaimer is REQUIRED in BOTH variant.indications fields (SC and IN).

ACCEPTANCE:
1. 3 files edited (hu, en, pl) with variants[] block matching Semax structure
2. defaultVariant: "sc" added
3. ZERO "PMID:" strings in your edits (run: grep -c "PMID" src/data/libraries/peptides/entries/{hu,en,pl}/adamax.js — must show 0 0 0)
4. npm run validate PASSES
5. npm run build PASSES
6. Report files changed + grep-result + commit hash

DO NOT touch other files.
`
})
```

**Subagent #6 — NA-Semax-Amidate:** Same template, peptide-specifics:
- defaultVariant: "sc"
- SC image: /peptides/water-vial.png
- IN image: /performance/nasal-spray-clear.png
- SC dosing: 200-600 μg/day (anecdotal)
- IN dosing: 200-600 μg/day (community route)
- Half-lives: longer than Semax (N-acetyl + amidation = enzymatic stability)
- Indications: "N-acetyl-Semax-amide modification, hypothesized prolonged half-life vs Semax — research-chemical only, no clinical trials" + grey-zone disclaimer
- Recon: full research-chemical recon (4-5 steps)
- NO PMID citations

**Subagent #7 — Adalank:** Same template, peptide-specifics:
- defaultVariant: "sc"
- SC image: /peptides/water-vial.png
- IN image: /performance/nasal-spray-clear.png
- SC dosing: 100-300 μg/day (anecdotal Selank-analog)
- IN dosing: 100-300 μg/day
- Half-lives: longer than Selank (modified residues)
- Indications: "Selank-analog research chemical, anecdotal anxiolytic claims — no peer-reviewed data" + grey-zone disclaimer
- Recon: full research-chemical recon
- NO PMID citations

Expected: 3 parallel reports, each with files + grep-zero-PMID-check + commit hash.

### Step 2.3: Wait for all 7 subagent reports

- [ ] **Step:** Collect all 7 subagent return-messages

Each report should contain:
- List of files changed (3 per peptide)
- Verification output (verify-pmids for peer-reviewed; grep-zero for grey-zone)
- Worktree path + commit hash

### Step 2.4: Merge worktrees back to master

- [ ] **Step:** For each subagent worktree, merge into master

For each of 7 worktrees (sequential, NOT parallel — to avoid merge conflicts on `package-lock.json` etc.):

Run:
```bash
cd <main-repo-root>
git merge --no-ff <worktree-branch-name> -m "merge: <peptide> nasal-spray variants from subagent worktree"
```

Expected: Clean merge, 0 conflicts (each subagent touches different peptide files).

If conflict: investigate which file conflicts. If `package-lock.json` or non-peptide file: reset that file from master (`git checkout master -- <file>`), re-resolve, commit.

- [ ] **Step:** Clean up worktrees

Run for each:
```bash
git worktree remove <worktree-path>
git branch -d <worktree-branch-name>
```

---

## Task 3: Phase C — Verify-Gate (Re-Run + Manual Replace)

**Files:**
- `scripts/verify-pmids.mjs` (no edit, just run)
- Any peptide entry with hallucinated PMID → manual replace

### Step 3.1: Aggregate all new PMIDs

- [ ] **Step:** Grep all new `PMID:` instances in the 5 peer-reviewed peptides

Run:
```bash
grep -hE "PMID: ?[0-9]+" src/data/libraries/peptides/entries/{hu,en,pl}/{semax,selank,melanotan-1,melanotan-2,pt-141}.js | grep -oE "PMID: ?[0-9]+" | sort -u
```

Expected: Unique PMID list, ~5-15 PMIDs total across 5 peptides × 3 langs.

### Step 3.2: Re-verify all PMIDs

- [ ] **Step:** Run verify-pmids.mjs on the aggregated list

Run:
```bash
node scripts/verify-pmids.mjs --pmids <pmid1>,<pmid2>,...
```

Expected: All PASS. Output like `[OK] 29947337 — token-overlap 0.72 — "Effect of Semax on stroke..."`.

### Step 3.3: Fix any FAIL

- [ ] **Step:** For each FAIL PMID:

1. WebFetch `https://pubmed.ncbi.nlm.nih.gov/<pmid>/` to confirm.
2. If real but token-overlap low: review the entry's cite-context — maybe wrong citation, replace.
3. If 404 / dead: search PubMed for verified alternative covering the same claim, replace.
4. Edit the entry file(s) where this PMID appeared.
5. Re-run `npm run validate` after each fix.

**Failsafe:** if 2+ PMIDs in one peptide fail, inline-rewrite that peptide manually (don't trust the subagent output for that peptide).

### Step 3.4: Verify zero PMIDs in grey-zone

- [ ] **Step:** Check 3 grey-zone peptides have zero PMID

Run:
```bash
grep -c "PMID" src/data/libraries/peptides/entries/{hu,en,pl}/{adamax,na-semax-amidate,adalank}.js
```

Expected: All show `:0` (9 files × 0 PMIDs).

If any non-zero: open the file, find the PMID, replace with non-PMID lay-text citation.

### Step 3.5: Commit verify-gate fixes (if any)

- [ ] **Step:** If any PMIDs were replaced, commit

Run:
```bash
git add src/data/libraries/peptides/entries/
git commit -m "fix(peptides): replace unverified PMIDs in nasal-spray variants"
```

---

## Task 4: Phase D — Adapter Passthrough Audit

**Files:**
- `src/components/library/adaptLibraryEntry.js` (audit-only; edit only if gap found)

### Step 4.1: Confirm spread-passthrough works

- [ ] **Step:** Read `adaptLibraryEntry.js:967-995` (`resolveVariant` function)

Run:
```bash
Read src/components/library/adaptLibraryEntry.js (offset:965, limit:35)
```

Expected: Function body uses `{...entry, ...variant, id: entry.id, body: ..., quality: ..., labTerminal: ...}` spread. Every variant.* field automatically lands on the resolved peptide object — NO explicit allowlist gate.

**Implication:** All new variant fields (`routeLabel`, `image`, `dosing`, `halfLife`, `halfLifeActive`, `bioavailability`, `onsetTime`, `indications`, `doseCalc`, `reconstitute`) pass through automatically. No adapter edit needed.

### Step 4.2: Sanity check downstream derivers

- [ ] **Step:** Grep for variant-relevant derivers

Run:
```bash
grep -nE "^function (deriveDosing|deriveStudies|deriveReconstitute|deriveIndications)" src/components/library/adaptLibraryEntry.js
```

Expected: 4 functions defined. Each reads from `peptide.dosing` / `peptide.studies` / etc. — since `resolveVariant` already merged variant fields onto peptide, these derivers automatically see the variant values.

- [ ] **Step:** Confirm `peptide.image` (top-level) override works

Read `adaptLibraryEntry.js` line ~1013:
```
image: peptide.image,
```

Expected: After spread, `peptide.image` = variant.image (e.g. `/performance/nasal-spray-clear.png` when IN variant active). Confirmed.

**No adapter edit required. Move to Task 5.**

---

## Task 5: Phase E — Validator + Build + Local Smoke (8 entries × 2 variants)

**Files:**
- None modified (verify-only phase)

### Step 5.1: Validator pass

- [ ] **Step:** Run validator

Run:
```bash
npm run validate
```

Expected: PASS `4 libraries, 193 entries, 0 warnings, 0 errors`.

### Step 5.2: Build pass

- [ ] **Step:** Run production build

Run:
```bash
npm run build
```

Expected:
- Build PASS in ~5-6s
- Bundle vendor ≤200 KiB gzipped
- PWA precache `<5120 KiB` (target: ~3300-3350 KiB; growth from ~3292 KiB by ~10-30 KiB for 24 entry-bodies)
- No Vite errors/warnings

### Step 5.3: Bundle delta inspection

- [ ] **Step:** Inspect dist/ output

Run:
```bash
ls -la dist/assets/ | grep -E "(semax|selank|melanotan|pt-141|adamax|na-semax|adalank)" | head -30
```

Expected: 8 peptides × ~3 langs × per-entry chunk = ~24+ chunk-files. Sizes ~3-5 KB gzip each.

### Step 5.4: Local smoke — full 8 × 2 toggle matrix

- [ ] **Step:** Start dev server

Run:
```bash
npm run dev
```

- [ ] **Step:** For EACH of 8 peptides, browser-test:

For each ID in `[semax, selank, melanotan-1, melanotan-2, pt-141, adamax, na-semax-amidate, adalank]`:

1. Navigate to `http://localhost:5173/#entry/peptides/<id>`
2. Verify default SC variant loads (image = water-vial.png OR Melanotan-2.png OR PT-141.png)
3. Click "Intranazális spray" toggle
4. Verify:
   - Image swaps to nasal-spray-clear.png
   - URL hash: `#entry/peptides/<id>/in`
   - Dosing text updates (μg/day intranasal)
   - bioavailability badge: ~30-40%
   - Calculator panel renders with IN doseCalc.fixed values (no console error)
5. Click back "Szubkután injekció"
6. Verify:
   - Image restores
   - URL hash: `#entry/peptides/<id>/sc`
   - Calculator restores

Total: 8 entries × 2 toggles + Calculator-check = 16 toggle interactions + 8 Calculator-render-checks.

- [ ] **Step:** Test deep-link reload

For 2 random peptides (e.g. semax + pt-141):
1. Navigate directly to `http://localhost:5173/#entry/peptides/semax/in`
2. Verify IN variant loads on cold reload (no SC flash)
3. Click VariantToggle "SC" → URL `/sc`, restore works

- [ ] **Step:** Test 3 languages

For Semax (anchor + most thoroughly tested):
1. Switch language EN → routeLabels become "Subcutaneous injection" / "Intranasal spray"
2. Switch language PL → "Iniekcja podskórna" / "Spray donosowy"

### Step 5.5: Document smoke result

- [ ] **Step:** Pass/fail decision

If ALL smokes PASS: continue to Task 6 (Phase F ship).

If ANY smoke FAILS:
- Variant mező missing → check that subagent edit was complete; re-edit if needed
- Calculator crashes → IN doseCalc shape incompatible; convert IN doseCalc to SC-shape (note in spec §5.4 fallback)
- URL hash wrong → verify `resolveVariant` `id: entry.id` re-assign still present
- Image 404 → verify path matches existing asset (Glob `/public/peptides/<file>` and `/public/performance/nasal-spray-clear.png`)

Re-fix, re-smoke. Do NOT proceed to ship.

---

## Task 6: Phase F — Ship (Single Megapush + Tag)

**Files:**
- No new files; commit + push aggregated changes

### Step 6.1: Git status sanity-check

- [ ] **Step:** Confirm working tree state

Run:
```bash
git status --short
git log --oneline -10
```

Expected:
- Working tree clean (all changes committed in Tasks 1-3)
- HEAD ahead of origin/master by N commits (1 anchor + 7 subagent-merges + 0-1 verify-fix)

### Step 6.2: Final pre-ship check

- [ ] **Step:** Confirm validator + build PASS one last time

Run:
```bash
npm run validate && npm run build
```

Expected: Both PASS.

### Step 6.3: Create tag

- [ ] **Step:** Tag the HEAD

Run:
```bash
git tag -a v0.26-nasal-spray-multivariant -m "v0.26: Nasal-spray multi-variant — 8 peptides dual-route

Added SC + IN variants[] to 8 peptides:
- Peer-reviewed (5): Semax, Selank, Melanotan-1, Melanotan-2, PT-141
- Grey-zone (3): Adamax, NA-Semax-Amidate, Adalank

All variant fields use Albuterol Phase 5 schema. No adapter or validator change required (resolveVariant spread handles passthrough). Existing image assets reused (water-vial.png, Melanotan-2.png, PT-141.png, nasal-spray-clear.png).

Verify-gate: scripts/verify-pmids.mjs PASS on all peer-reviewed PMIDs. Grey-zone peptides cite-free (lay-text only).

Local smoke: 8 × 2 toggle + Calculator-render PASS across HU/EN/PL.
"
```

### Step 6.4: Push master + tag

- [ ] **Step:** Push to origin

Run:
```bash
git push origin master --tags
```

Expected: Push succeeds. Vercel auto-deploy triggers (~3 min to live).

### Step 6.5: Vercel live smoke (2 representative peptides)

- [ ] **Step:** Wait ~3 minutes for Vercel deploy

After deploy, browser-test:

1. `https://molekulax.vercel.app/#entry/peptides/semax`
   - SC default loads
   - VariantToggle works
   - Deep-link `/in` cold-loads correctly
2. `https://molekulax.vercel.app/#entry/peptides/melanotan-2`
   - SC default (Melanotan-2.png)
   - IN variant (nasal-spray-clear.png)
3. Check 1 grey-zone:
   - `https://molekulax.vercel.app/#entry/peptides/adamax/in`
   - Verify no "PMID:" string anywhere on the page

If all 3 live smokes PASS: ship complete. Proceed to handoff.

If live smoke FAILS: investigate (Vercel build log via `vercel inspect` or dashboard). If critical bug, revert via `git revert v0.26-nasal-spray-multivariant`.

---

## Task 7: Phase G — Handoff

**Files:**
- `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_Statusz.md`
- Memory candidates in `C:/Users/trolo/.claude/projects/e--Website-Biz/memory/`

### Step 7.1: Update MolekulaX_Statusz.md

- [ ] **Step:** Prepend new session block to top of Statusz.md

Run the `/handoff` slash command, OR manually prepend session block following the template at the top of the existing Statusz.md:

```markdown
## 🟢 Session: <START>→<END> CEST — Nasal-spray multi-variant SHIPPED (`v0.26-nasal-spray-multivariant`)

### Utolsó session összefoglalója
[8 peptid SC + IN variants[] addition, hybrid inline anchor (Semax) + 7 subagent parallel, single megapush, verify-gate PASS]

### Technikai változások
- Commits: <anchor-sha>, <merge-shas...>, <verify-fix-sha?>
- Tag: v0.26-nasal-spray-multivariant
- 24 entry-body files modified
- 0 adapter/validator/calculator change

### Tanulság
- [[Hybrid_Inline_Subagent_Anchor_Pattern]] — confirmed: anchor-first single-peptid inline + 7-parallel subagent worktree
- [[NCBI_eutils_PMID_Verify_Gate]] — confirmed canonical

### Következő lépések
[...]
```

### Step 7.2: Write/update memory entries

- [ ] **Step:** Update MEMORY.md or create new memory file

If `[[Hybrid_Inline_Subagent_Anchor_Pattern]]` doesn't exist yet, create:

```
C:/Users/trolo/.claude/projects/e--Website-Biz/memory/feedback_hybrid_inline_subagent_anchor.md
```

With pattern documentation. Then add to MEMORY.md index.

---

## Self-Review

### Spec coverage check

| Spec section | Plan task coverage |
|---|---|
| §1 Cél + scope | Task 1-6 cover 8 peptides, single megapush, tag v0.26 |
| §2 Architektúra (variants[] schema) | Task 1.3-1.4 anchor + Task 2 subagent template-of-truth |
| §2.2 Adapter audit | Task 4 (confirmed no edit needed) |
| §3 Source policy | Task 2.1 (peer-reviewed) + Task 2.2 (grey-zone) explicit prompts |
| §4 Variant-image policy | Task 1.3 + Task 2 subagent prompts include exact image paths |
| §5 UI flow + a11y | Task 5.4 smoke covers VariantToggle + URL + Calculator |
| §5.4 Calculator IN-shape concern | Task 1.6 anchor smoke fang-olja (Semax IN doseCalc test); Task 5.4 8×2 matrix re-verifies |
| §6 Validator + i18n + PWA | Task 5.1-5.3 |
| §7 Execution plan A-G | Tasks 1-7 directly map (A=1, B=2, C=3, D=4, E=5, F=6, G=7) |
| §8 Acceptance criteria | Task 5 (smoke) + Task 6 (ship + Vercel smoke) cover all 8 criteria |
| §9 Risk register | Task 1.8 user-gate (anchor risk), Task 3 verify-gate (PMID risk), Task 5.4 smoke (Calculator risk), Task 6.5 Vercel smoke (regression risk) |

**No gaps.**

### Placeholder scan

- No "TBD", "TODO", "fill in later" — all steps have concrete commands + code.
- §1.2 PMID list has named candidates with fallback instruction (search if dead).
- §2 Subagent prompts contain full peptide-specific data (peptide-by-peptide).
- §7 Phase G handoff template is illustrative (the actual session-block is filled at handoff-time with actual SHA/timestamp); this is acceptable because `/handoff` skill handles the templating.

### Type/name consistency

- `variants[]` schema field-names consistent across Task 1.3-1.4 and Task 2 prompts (routeId, routeLabel, image, dosing, halfLife, halfLifeActive, bioavailability, onsetTime, indications, doseCalc, reconstitute).
- `defaultVariant: "sc"` consistent across all 8 peptides.
- `routeId: "sc"` and `routeId: "in"` consistent (NOT `aq`, NOT `intranasal` — short tokens for URL).
- doseCalc shape `{ type: "fixed", fixed: {low, medium, high}, unit, note }` consistent with Albuterol Phase 5 precedens (corrected from spec §2.1 illustrative which used different shape).

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-21-nasal-spray-multivariant.md`. Two execution options:

**1. Subagent-Driven (recommended)** — Dispatch fresh subagent per task with two-stage review. Best for the 7-peptide parallel batch in Task 2.

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch with checkpoints.

Which approach?
