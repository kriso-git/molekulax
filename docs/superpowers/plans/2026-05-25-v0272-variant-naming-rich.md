# v0.27.2 Variant-naming RICH-shape Standardization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert 4 string-shape multi-variant performance entries (l-carnitine, dianabol-info, testosterone-info, superdrol) to full Albuterol-RICH triplet shape (`{hu,en,pl}`) across 5 per-variant fields, matching the Round 3+4 pattern from v0.27-multi-route-aware.

**Architecture:** Pure data-file shape conversion — 4 entries × 11 variants × 5 fields × 3 lang = 165 string-translations. Each entry exists in 3 separate per-lang files (HU/EN/PL); the triplet `{hu,en,pl}` is duplicated across all 3 files per Phase 12 convention. Adapter additively compatible via the v0.27.1 `flat()` helper. No `EntryDetail.jsx`, no adapter, no validator schema changes.

**Tech Stack:** Node 20.18, fs.readFileSync/writeFileSync bulk scripts (NOT Edit tool, per `[[feedback_edit_tool_quote_corruption]]`), Vite 5, Tailwind 3, git worktree isolation.

**Spec reference:** `docs/superpowers/specs/2026-05-25-v0272-variant-naming-rich.md`

**Base commit:** `8332451` (spec commit on master) / `b6050bd` (v0.27.3-mega-ux-fix tag)

**Worktree:** `.worktrees/feat-v0272-naming-rich` / branch `feat/v0272-naming-rich`

---

## File Structure

### Files to modify (12 total)

```
src/data/libraries/performance/entries/hu/l-carnitine.js
src/data/libraries/performance/entries/hu/dianabol-info.js
src/data/libraries/performance/entries/hu/testosterone-info.js
src/data/libraries/performance/entries/hu/superdrol.js
src/data/libraries/performance/entries/en/l-carnitine.js
src/data/libraries/performance/entries/en/dianabol-info.js
src/data/libraries/performance/entries/en/testosterone-info.js
src/data/libraries/performance/entries/en/superdrol.js
src/data/libraries/performance/entries/pl/l-carnitine.js
src/data/libraries/performance/entries/pl/dianabol-info.js
src/data/libraries/performance/entries/pl/testosterone-info.js
src/data/libraries/performance/entries/pl/superdrol.js
```

### Helper scripts to create (1 total)

```
scripts/v0272-triplet-convert.mjs    # Bulk shape conversion + EN/PL placeholder marker
```

### Files NOT touched (regression-protection)

- All Round 3+4 entries (trenbolone-info, nandrolone-info, masteron, primobolan, ment-19nor, ment-test) in all 3 lang dirs — **0 lines changed**
- `src/data/libraries/performance/index.js` — **0 lines changed**
- `src/data/libraries/performance/categories.js` — **0 lines changed**
- `src/components/library/adaptLibraryEntry.js` — **0 lines changed**
- `src/components/library/EntryDetail.jsx` — **0 lines changed**

---

## Translation Patterns (canonical reference)

### routeLabel — full §3 table from spec

| Entry | Variant | HU | EN | PL |
|---|---|---|---|---|
| l-carnitine | oral | L-Carnitine Tartrate (orális kapszula, lassú-felszívódás ~15%) | L-Carnitine Tartrate (oral capsule, slow absorption ~15%) | L-Karnityna Tartrate (kapsułka doustna, wolne wchłanianie ~15%) |
| l-carnitine | aq | L-Carnitine Tartrate (IM/SC vizes ampulla, 100% bioavailability) | L-Carnitine Tartrate (IM/SC aqueous ampoule, 100% bioavailability) | L-Karnityna Tartrate (IM/SC ampułka wodna, 100% biodostępność) |
| dianabol-info | oral | Methandrostenolone (Dianabol orális tabletta, 17α-metilezett) | Methandrostenolone (Dianabol oral tablet, 17α-methylated) | Methandrostenolon (Dianabol tabletka doustna, 17α-metylowany) |
| dianabol-info | oil | Methandrostenolone (Reforvit-B in-oil IM, UGL depot) | Methandrostenolone (Reforvit-B in-oil IM, UGL depot) | Methandrostenolon (Reforvit-B in-oil IM, depot UGL) |
| testosterone-info | prop | Testosterone Propionate (Test-Prop, gyors észter) | Testosterone Propionate (Test-Prop, fast ester) | Testosteron Propionian (Test-Prop, szybki ester) |
| testosterone-info | enan | Testosterone Enanthate (Test-E, lassú észter) | Testosterone Enanthate (Test-E, slow ester) | Testosteron Enanthate (Test-E, wolny ester) |
| testosterone-info | cyp | Testosterone Cypionate (Test-C, lassú észter, USA-preferált) | Testosterone Cypionate (Test-C, slow ester, USA-preferred) | Testosteron Cypionian (Test-C, wolny ester, preferowany w USA) |
| testosterone-info | sus | Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca) | Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca) | Sustanon-250 (Organon mieszanka 4-estrów: Prop+PhenylProp+Iso+Deca) |
| testosterone-info | aq | Testosterone Suspension (vizes mikrokristály, ultra-gyors) | Testosterone Suspension (aqueous microcrystal, ultra-fast) | Testosteron Suspension (mikrokryształ wodny, ultra-szybki) |
| superdrol | oral | Methyldrostanolone (Superdrol orális tabletta, 17α-metilezett) | Methyldrostanolone (Superdrol oral tablet, 17α-methylated) | Methyldrostanolon (Superdrol tabletka doustna, 17α-metylowany) |
| superdrol | injectable | Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot) | Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot) | Methyldrostanolon (Methyl-Drol in-oil IM, depot UGL) |

### Translation conventions (for routeNote/dosing/onsetTime/doseCalc.note)

The EN+PL translations for these 4 longer fields are **fresh translations** from the existing HU source text. Rules:

1. **Compound names**: PL uses Slavic-cognate (Methandrostenolone→Methandrostenolon, Testosterone→Testosteron, Nandrolone→Nandrolon). EN uses Latin form (Methandrostenolone, Testosterone, Nandrolone).
2. **Brand names**: NOT translated. Loanwords cross all 3 langs (Test-Prop, Reforvit-B, Sustanon-250, Methyl-Drol, Carnitor, Sigma-Tau, etc.).
3. **Pharmacological terms**:
   - HU: észter / felezés / EOD / lassú / gyors / közepes / ultra-gyors
   - EN: ester / half-life / EOD / slow / fast / medium / ultra-fast
   - PL: ester / okres półtrwania / co drugi dzień / wolny / szybki / średni / ultra-szybki
4. **PMID citations**: pass-through unchanged (numeric, lang-agnostic).
5. **Brand-style abbreviations**: TUDCA / NAC / PCT / IM / SC / OTC / Rx / WADA / NADA — pass-through unchanged (international abbreviations).
6. **Hungarian-specific idioms** (Round 3+4 lessons §1 from CLAUDE.md): "lenyeled" → "swallow it" / "połyka się"; "felrázás" → "shaking" / "wstrząsanie"; NO machine-translation autocorrects ("alkotni hagyod" / "priming" tilos).
7. **Unit notation**: numerical mg/μg/IU/mL/g/nap → mg/μg/IU/mL/g/day (EN) / mg/μg/IU/mL/g/dzień (PL).

### Reference patterns (Round 3+4 examples, source-of-truth)

For routeNote/dosing/onsetTime/doseCalc.note translation style, **read these existing files** before writing EN/PL for similar fields:

- `src/data/libraries/performance/entries/{hu,en,pl}/trenbolone-info.js` — 3-ester AAS, anchor for ester-style routeNote
- `src/data/libraries/performance/entries/{hu,en,pl}/primobolan.js` — oral+oil split, anchor for oral vs IM style
- `src/data/libraries/performance/entries/{hu,en,pl}/ment-test.js` — designer mixture, anchor for complex compound style

---

## Task Decomposition

10 tasks total. Phase A = setup + HU triplet-shape (3 tasks). Phase B = EN+PL fill per entry (4 tasks). Phase C = validate + smoke + ship (3 tasks).

---

### Task 1: Worktree setup

**Files:**
- Modify: (none — git operation only)

- [ ] **Step 1: Verify clean master state**

```bash
cd "e:/Website Biz/molekulax"
git status
git log --oneline -3
```

Expected output:
```
On branch master
Your branch is up to date with 'origin/master'.
Untracked files: .claude/
nothing added to commit but untracked files present
8332451 docs(spec): v0.27.2 variant-naming RICH-shape standardization
b6050bd merge: v0.27 mega UX fixes (v0.27.3-v0.27.7)
dd128ce feat(v0.27.7): hide EffectsSection on performance lib only
```

- [ ] **Step 2: Create worktree + feat branch**

```bash
cd "e:/Website Biz/molekulax"
git worktree add .worktrees/feat-v0272-naming-rich -b feat/v0272-naming-rich
```

Expected output: `Preparing worktree (new branch 'feat/v0272-naming-rich')` + `HEAD is now at 8332451`

- [ ] **Step 3: Navigate to worktree + verify**

```bash
cd ".worktrees/feat-v0272-naming-rich"
git branch --show-current
ls src/data/libraries/performance/entries/hu/ | wc -l
```

Expected output:
```
feat/v0272-naming-rich
64
```

- [ ] **Step 4: NO commit yet** (worktree-only setup, nothing to commit)

---

### Task 2: Write helper script `v0272-triplet-convert.mjs`

**Files:**
- Create: `.worktrees/feat-v0272-naming-rich/scripts/v0272-triplet-convert.mjs`

- [ ] **Step 1: Write the helper script**

Create file `scripts/v0272-triplet-convert.mjs` with this exact content:

```js
#!/usr/bin/env node
// v0.27.2 triplet-convert helper.
// Usage:
//   node scripts/v0272-triplet-convert.mjs --extract <lang> <entry-id>
//     → prints all 5 variant string-fields per variant from entries/<lang>/<id>.js
//   node scripts/v0272-triplet-convert.mjs --audit <entry-id>
//     → grep-check 0 string-shape remains in all 3 lang files

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES = (lang) => path.join(ROOT, 'src/data/libraries/performance/entries', lang);

const VARIANT_FIELDS = ['routeLabel', 'routeNote', 'dosing', 'onsetTime'];

function extractStrings(lang, id) {
  const file = path.join(ENTRIES(lang), `${id}.js`);
  if (!fs.existsSync(file)) {
    console.error(`File not found: ${file}`);
    process.exit(1);
  }
  const src = fs.readFileSync(file, 'utf8');
  const variantsMatch = src.match(/"variants":\s*\[([\s\S]*?)\]\s*,\s*"mechanism"/);
  if (!variantsMatch) {
    console.error('No variants[] block found');
    process.exit(1);
  }
  const variantsBlock = variantsMatch[1];
  // Naive variant split — every '"id":' starts a new variant block
  const variantStarts = [...variantsBlock.matchAll(/"id":\s*"([^"]+)"/g)];
  console.log(`# ${lang}/${id}.js — ${variantStarts.length} variants`);
  for (const m of variantStarts) {
    const vid = m[1];
    console.log(`\n## variant: ${vid}`);
    for (const f of VARIANT_FIELDS) {
      const re = new RegExp(`"${f}":\\s*"([^"]+(?:\\\\.[^"]*)*)"`);
      const fm = variantsBlock.slice(m.index).match(re);
      if (fm) console.log(`  ${f}: ${fm[1].slice(0, 120)}${fm[1].length > 120 ? '...' : ''}`);
    }
    // doseCalc.note nested
    const noteRe = /"doseCalc":\s*\{[^}]*"note":\s*"([^"]+(?:\\.[^"]*)*)"/;
    const nm = variantsBlock.slice(m.index).match(noteRe);
    if (nm) console.log(`  doseCalc.note: ${nm[1].slice(0, 120)}${nm[1].length > 120 ? '...' : ''}`);
  }
}

function auditEntry(id) {
  let found = 0;
  for (const lang of ['hu', 'en', 'pl']) {
    const file = path.join(ENTRIES(lang), `${id}.js`);
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    for (const f of VARIANT_FIELDS.concat(['note'])) {
      const re = new RegExp(`"${f}":\\s*"`, 'g');
      const matches = src.match(re);
      if (matches) {
        console.log(`  ${lang}/${id}.js — ${f}: ${matches.length} string-shape remain`);
        found += matches.length;
      }
    }
  }
  if (found === 0) console.log(`✅ ${id}: 0 string-shape, all triplet`);
  else console.log(`❌ ${id}: ${found} string-shape remain — FAIL`);
}

const args = process.argv.slice(2);
if (args[0] === '--extract') extractStrings(args[1], args[2]);
else if (args[0] === '--audit') auditEntry(args[1]);
else {
  console.log('Usage: --extract <lang> <id> | --audit <id>');
  process.exit(1);
}
```

- [ ] **Step 2: Test the helper script with l-carnitine**

```bash
cd ".worktrees/feat-v0272-naming-rich"
node scripts/v0272-triplet-convert.mjs --extract hu l-carnitine
```

Expected output:
```
# hu/l-carnitine.js — 2 variants

## variant: oral
  routeLabel: Oral kapszula / tabletta
  routeNote: Napi szintű kényelmes és olcsó beadási forma...
  dosing: Tipikus protokoll: 2-4 g/nap split 3x étkezésekkel...
  onsetTime: 1-2 óra (oral abszorpció); steady-state izom-loading 3-4 hét chronic
  doseCalc.note: Oral 500-4000 mg/nap split 3x étkezésekkel...

## variant: aq
  routeLabel: IM/SC injekció (vízbázisú vial)
  ...
```

- [ ] **Step 3: Test --audit on a Round 3+4 entry (should be 0)**

```bash
node scripts/v0272-triplet-convert.mjs --audit trenbolone-info
```

Expected output: `✅ trenbolone-info: 0 string-shape, all triplet`

- [ ] **Step 4: Test --audit on l-carnitine (should show string-shape remains)**

```bash
node scripts/v0272-triplet-convert.mjs --audit l-carnitine
```

Expected output (something like):
```
  hu/l-carnitine.js — routeLabel: 2 string-shape remain
  hu/l-carnitine.js — routeNote: 2 string-shape remain
  ...
❌ l-carnitine: NN string-shape remain — FAIL
```

- [ ] **Step 5: Commit**

```bash
git add scripts/v0272-triplet-convert.mjs
git commit -m "chore(v0.27.2): add triplet-convert helper script

Usage: --extract <lang> <id> to dump variant string fields,
--audit <id> to grep-check string-shape remaining across 3 lang files."
```

---

### Task 3: l-carnitine triplet conversion (HU+EN+PL together)

**Files:**
- Modify: `src/data/libraries/performance/entries/hu/l-carnitine.js`
- Modify: `src/data/libraries/performance/entries/en/l-carnitine.js`
- Modify: `src/data/libraries/performance/entries/pl/l-carnitine.js`

**Strategy:** This is the smallest entry (2 variants × 5 fields = 10 fields × 3 lang = 30 strings). Hand-edit all 3 lang files together (HU first as source-of-truth, then EN+PL fresh translations). Use Edit tool sparingly (max 5 edits per file) — switch to bulk node script if 5+ edits needed per file.

- [ ] **Step 1: Extract HU source strings**

```bash
node scripts/v0272-triplet-convert.mjs --extract hu l-carnitine > /tmp/v0272-lcar-hu.txt
cat /tmp/v0272-lcar-hu.txt
```

- [ ] **Step 2: Convert HU file — oral variant**

In `src/data/libraries/performance/entries/hu/l-carnitine.js`, find the variant block where `"id": "oral"` (around line 41-82). Replace these 5 string fields with triplet shape using Edit tool ONE FIELD AT A TIME (5 edits total):

**Edit 2.1 — routeLabel:**

Old:
```js
      "routeLabel": "Oral kapszula / tabletta",
```

New:
```js
      "routeLabel": {
        "hu": "L-Carnitine Tartrate (orális kapszula, lassú-felszívódás ~15%)",
        "en": "L-Carnitine Tartrate (oral capsule, slow absorption ~15%)",
        "pl": "L-Karnityna Tartrate (kapsułka doustna, wolne wchłanianie ~15%)"
      },
```

**Edit 2.2 — routeNote:**

Old:
```js
      "routeNote": "Napi szintű kényelmes és olcsó beadási forma. Chronic-loading 3-4 hét alatt 2 g/nap oral + szénhidrát-ko-ingestion éri el az izomszövet steady-state koncentráció-emelkedését. Kezdő és fenntartó protokollok leggyakoribb választása.",
```

New:
```js
      "routeNote": {
        "hu": "Napi szintű kényelmes és olcsó beadási forma. Chronic-loading 3-4 hét alatt 2 g/nap oral + szénhidrát-ko-ingestion éri el az izomszövet steady-state koncentráció-emelkedését. Kezdő és fenntartó protokollok leggyakoribb választása.",
        "en": "Day-to-day convenient and inexpensive administration form. Chronic-loading reaches muscle-tissue steady-state concentration elevation over 3-4 weeks at 2 g/day oral + carbohydrate co-ingestion. Most common choice for beginner and maintenance protocols.",
        "pl": "Codzienna wygodna i niedroga forma podawania. Chronic-loading osiąga podwyższenie stężenia w tkance mięśniowej w stanie stacjonarnym przez 3-4 tygodnie przy 2 g/dzień doustnie + ko-ingestii węglowodanów. Najczęściej wybierany protokół dla początkujących i utrzymania."
      },
```

**Edit 2.3 — onsetTime:**

Old:
```js
      "onsetTime": "1-2 óra (oral abszorpció); steady-state izom-loading 3-4 hét chronic",
```

New:
```js
      "onsetTime": {
        "hu": "1-2 óra (oral abszorpció); steady-state izom-loading 3-4 hét chronic",
        "en": "1-2 hours (oral absorption); steady-state muscle-loading 3-4 weeks chronic",
        "pl": "1-2 godziny (wchłanianie doustne); stan stacjonarny ładowania mięśni 3-4 tygodnie chronic"
      },
```

**Edit 2.4 — dosing:**

Old:
```js
      "dosing": "Tipikus protokoll: 2-4 g/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake érdekében). Kezdő dózis 500-1000 mg/nap, hatékonysági határ chronic-loading-on 2 g/nap.",
```

New:
```js
      "dosing": {
        "hu": "Tipikus protokoll: 2-4 g/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake érdekében). Kezdő dózis 500-1000 mg/nap, hatékonysági határ chronic-loading-on 2 g/nap.",
        "en": "Typical protocol: 2-4 g/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Starting dose 500-1000 mg/day, efficacy plateau on chronic-loading at 2 g/day.",
        "pl": "Typowy protokół: 2-4 g/dzień podzielone 3x z posiłkami (ko-ingestia węglowodanów dla insulino-stymulowanego wychwytu mięśniowego). Dawka początkowa 500-1000 mg/dzień, próg skuteczności na chronic-loading 2 g/dzień."
      },
```

**Edit 2.5 — doseCalc.note:**

Old:
```js
        "note": "Oral 500-4000 mg/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake). Chronic-loading steady-state 3-4 hét. Az oral forma isFixedDose — info-card megjelenítés, MiniCalc nem releváns."
```

New:
```js
        "note": {
          "hu": "Oral 500-4000 mg/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake). Chronic-loading steady-state 3-4 hét. Az oral forma isFixedDose — info-card megjelenítés, MiniCalc nem releváns.",
          "en": "Oral 500-4000 mg/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Chronic-loading steady-state 3-4 weeks. The oral form is isFixedDose — info-card display, MiniCalc not relevant.",
          "pl": "Doustnie 500-4000 mg/dzień podzielone 3x z posiłkami (ko-ingestia węglowodanów dla insulino-stymulowanego wychwytu mięśniowego). Chronic-loading stan stacjonarny 3-4 tygodnie. Forma doustna jest isFixedDose — wyświetlanie info-card, MiniCalc nie ma zastosowania."
        }
```

- [ ] **Step 3: Convert HU file — aq variant**

Same 5-edit pattern for variant `"id": "aq"` (around line 84-126):

**Edit 3.1 — routeLabel:**

Old:
```js
      "routeLabel": "IM/SC injekció (vízbázisú vial)",
```

New:
```js
      "routeLabel": {
        "hu": "L-Carnitine Tartrate (IM/SC vizes ampulla, 100% bioavailability)",
        "en": "L-Carnitine Tartrate (IM/SC aqueous ampoule, 100% bioavailability)",
        "pl": "L-Karnityna Tartrate (IM/SC ampułka wodna, 100% biodostępność)"
      },
```

**Edit 3.2 — routeNote:**

Old:
```js
      "routeNote": "Maximális bioavailability (100%) — az oral ~15%-ával szemben a teljes dózis bejut. Performance-fókuszú pre-workout protokoll: 500-1000 mg SC injection 30-60 perccel edzés előtt. Dose-equivalent ~4-6x az oralishoz képest, gyorsabb steady-state elérés 1-2 hét alatt.",
```

New:
```js
      "routeNote": {
        "hu": "Maximális bioavailability (100%) — az oral ~15%-ával szemben a teljes dózis bejut. Performance-fókuszú pre-workout protokoll: 500-1000 mg SC injection 30-60 perccel edzés előtt. Dose-equivalent ~4-6x az oralishoz képest, gyorsabb steady-state elérés 1-2 hét alatt.",
        "en": "Maximum bioavailability (100%) — versus oral ~15%, the full dose enters circulation. Performance-focused pre-workout protocol: 500-1000 mg SC injection 30-60 minutes before training. Dose-equivalent ~4-6x oral, faster steady-state reached within 1-2 weeks.",
        "pl": "Maksymalna biodostępność (100%) — w porównaniu do doustnej ~15%, cała dawka trafia do krążenia. Protokół przedtreningowy zorientowany na wydolność: 500-1000 mg iniekcja SC 30-60 minut przed treningiem. Dawka-równoważnik ~4-6x w stosunku do doustnej, szybsze osiągnięcie stanu stacjonarnego w ciągu 1-2 tygodni."
      },
```

**Edit 3.3 — onsetTime:**

Old:
```js
      "onsetTime": "30-60 perc (IM/SC abszorpció)",
```

New:
```js
      "onsetTime": {
        "hu": "30-60 perc (IM/SC abszorpció)",
        "en": "30-60 minutes (IM/SC absorption)",
        "pl": "30-60 minut (wchłanianie IM/SC)"
      },
```

**Edit 3.4 — dosing:**

Old:
```js
      "dosing": "200-1000 mg/injekció IM/SC 2-3x/hét cutting-cycle (8-12 hét cycle-length). Tipikus performance-dose: 500 mg SC pre-workout. Sigma-Tau Carnitor standard ampulla 1 g/5 mL.",
```

New:
```js
      "dosing": {
        "hu": "200-1000 mg/injekció IM/SC 2-3x/hét cutting-cycle (8-12 hét cycle-length). Tipikus performance-dose: 500 mg SC pre-workout. Sigma-Tau Carnitor standard ampulla 1 g/5 mL.",
        "en": "200-1000 mg/injection IM/SC 2-3x/week cutting-cycle (8-12 week cycle length). Typical performance dose: 500 mg SC pre-workout. Sigma-Tau Carnitor standard ampoule 1 g/5 mL.",
        "pl": "200-1000 mg/iniekcja IM/SC 2-3x/tydzień cutting-cycle (długość cyklu 8-12 tygodni). Typowa dawka wydolnościowa: 500 mg SC przed treningiem. Standardowa ampułka Sigma-Tau Carnitor 1 g/5 mL."
      },
```

**Edit 3.5 — doseCalc.note:**

Old:
```js
        "note": "IM/SC 200-1000 mg/injekció 2-3x/hét cutting-cycle (8-12 hét). Tipikus 1 g ampulla (5 mL) — 500 mg = 2.5 mL pre-workout SC. Bioavailability 100%, steady-state gyorsabb mint oral."
```

New:
```js
        "note": {
          "hu": "IM/SC 200-1000 mg/injekció 2-3x/hét cutting-cycle (8-12 hét). Tipikus 1 g ampulla (5 mL) — 500 mg = 2.5 mL pre-workout SC. Bioavailability 100%, steady-state gyorsabb mint oral.",
          "en": "IM/SC 200-1000 mg/injection 2-3x/week cutting-cycle (8-12 weeks). Typical 1 g ampoule (5 mL) — 500 mg = 2.5 mL pre-workout SC. Bioavailability 100%, steady-state faster than oral.",
          "pl": "IM/SC 200-1000 mg/iniekcja 2-3x/tydzień cutting-cycle (8-12 tygodni). Typowa ampułka 1 g (5 mL) — 500 mg = 2.5 mL przed treningiem SC. Biodostępność 100%, stan stacjonarny szybszy niż doustnie."
        }
```

- [ ] **Step 4: Copy HU file content to EN + PL files**

Per Phase 12 per-lang split convention, the triplet `{hu, en, pl}` must be duplicated identically across all 3 lang files. Use this bulk script approach to avoid 30+ Edit tool calls:

```bash
cd ".worktrees/feat-v0272-naming-rich"
node -e "
const fs = require('fs');
const hu = fs.readFileSync('src/data/libraries/performance/entries/hu/l-carnitine.js', 'utf8');
// Read the variants block from HU and inject into EN + PL while preserving their other top-level fields
for (const lang of ['en', 'pl']) {
  const target = 'src/data/libraries/performance/entries/' + lang + '/l-carnitine.js';
  const original = fs.readFileSync(target, 'utf8');
  const huVariants = hu.match(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/)[0];
  const updated = original.replace(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/, huVariants);
  fs.writeFileSync(target, updated);
  console.log(lang + ': written ' + updated.length + 'B');
}
"
```

Expected output:
```
en: written NNNNNNB
pl: written NNNNNNB
```

- [ ] **Step 5: Verify audit pass on l-carnitine**

```bash
node scripts/v0272-triplet-convert.mjs --audit l-carnitine
```

Expected output: `✅ l-carnitine: 0 string-shape, all triplet`

- [ ] **Step 6: Validate library + build**

```bash
node scripts/validate-library-meta.mjs
```

Expected: `PASS 4 libraries × 189 entries` (no error lines).

- [ ] **Step 7: Commit l-carnitine**

```bash
git add src/data/libraries/performance/entries/{hu,en,pl}/l-carnitine.js
git commit -m "feat(v0.27.2): l-carnitine RICH-shape triplet (2 variants × 5 fields)

Oral capsule + IM/SC aqueous ampoule variants converted from string to
{hu,en,pl} triplet across routeLabel/routeNote/dosing/onsetTime/doseCalc.note.
EN + PL fresh translations per Round 3+4 cognate-preservation pattern."
```

---

### Task 4: dianabol-info triplet conversion (2 variants)

**Files:**
- Modify: `src/data/libraries/performance/entries/hu/dianabol-info.js`
- Modify: `src/data/libraries/performance/entries/en/dianabol-info.js`
- Modify: `src/data/libraries/performance/entries/pl/dianabol-info.js`

**Strategy:** Same as Task 3. 2 variants × 5 fields = 10 fields per lang. Hand-edit HU first with Edit tool (max 5 edits per Edit-call series), then bulk-copy variants[] block to EN + PL.

- [ ] **Step 1: Extract HU source**

```bash
node scripts/v0272-triplet-convert.mjs --extract hu dianabol-info > /tmp/v0272-dbol-hu.txt
cat /tmp/v0272-dbol-hu.txt
```

- [ ] **Step 2: Convert HU `oral` variant**

In `src/data/libraries/performance/entries/hu/dianabol-info.js`, find variant `"id": "oral"` (around line 119). Apply these 5 Edits sequentially:

**Edit 2.1 — routeLabel:**

Old:
```js
      "routeLabel": "Methandrostenolone orális (tabletta)",
```

New:
```js
      "routeLabel": {
        "hu": "Methandrostenolone (Dianabol orális tabletta, 17α-metilezett)",
        "en": "Methandrostenolone (Dianabol oral tablet, 17α-methylated)",
        "pl": "Methandrostenolon (Dianabol tabletka doustna, 17α-metylowany)"
      },
```

**Edit 2.2 — routeNote** (HU source: "Klasszikus forma: 17α-metil tabletta..."):

Old (single-line string in `"routeNote": "..."`):
```js
      "routeNote": "Klasszikus forma: 17α-metil tabletta, kb. 3-6 h felezési idő, gyors plazma-csúcs 1-2 órán belül. Naponta 2-3x felosztott adagolás javasolt. Magas hepatikus first-pass stressz — TUDCA + NAC kötelező. Legelterjedtebb és legtöbbet kutatott Dianabol-forma.",
```

New:
```js
      "routeNote": {
        "hu": "Klasszikus forma: 17α-metil tabletta, kb. 3-6 h felezési idő, gyors plazma-csúcs 1-2 órán belül. Naponta 2-3x felosztott adagolás javasolt. Magas hepatikus first-pass stressz — TUDCA + NAC kötelező. Legelterjedtebb és legtöbbet kutatott Dianabol-forma.",
        "en": "Classic form: 17α-methylated tablet, ~3-6 h half-life, fast plasma peak within 1-2 hours. 2-3x split daily dosing recommended. High hepatic first-pass stress — TUDCA + NAC mandatory. Most widespread and most-studied Dianabol form.",
        "pl": "Klasyczna forma: tabletka 17α-metylowana, ~3-6 h okres półtrwania, szybki szczyt osoczowy w ciągu 1-2 godzin. Zalecane podawanie podzielone 2-3x dziennie. Wysoki stres wątrobowy first-pass — TUDCA + NAC obowiązkowe. Najszerzej rozpowszechniona i najlepiej zbadana forma Dianabolu."
      },
```

**Edit 2.3 — onsetTime:**

Old:
```js
      "onsetTime": "1-2 óra (orális, fast-absorption)",
```

New:
```js
      "onsetTime": {
        "hu": "1-2 óra (orális, fast-absorption)",
        "en": "1-2 hours (oral, fast-absorption)",
        "pl": "1-2 godziny (doustnie, szybkie wchłanianie)"
      },
```

**Edit 2.4 — dosing:**

Old:
```js
      "dosing": "Tipikus adag 20-50 mg/nap, naponta 2-3x felosztva (reggel, ebéd, esetleg edzés előtt). Kezdők: 20-25 mg/nap. Haladók: 30-40 mg/nap. Maximum 50 mg/nap, 6 hétnél tovább nem ajánlott.",
```

New:
```js
      "dosing": {
        "hu": "Tipikus adag 20-50 mg/nap, naponta 2-3x felosztva (reggel, ebéd, esetleg edzés előtt). Kezdők: 20-25 mg/nap. Haladók: 30-40 mg/nap. Maximum 50 mg/nap, 6 hétnél tovább nem ajánlott.",
        "en": "Typical dose 20-50 mg/day, split 2-3x daily (morning, lunch, optionally pre-workout). Beginners: 20-25 mg/day. Advanced: 30-40 mg/day. Max 50 mg/day, not recommended beyond 6 weeks.",
        "pl": "Typowa dawka 20-50 mg/dzień, podzielona 2-3x dziennie (rano, w południe, opcjonalnie przed treningiem). Początkujący: 20-25 mg/dzień. Zaawansowani: 30-40 mg/dzień. Maksymalnie 50 mg/dzień, nie zalecane powyżej 6 tygodni."
      },
```

**Edit 2.5 — doseCalc.note:**

Old:
```js
        "note": "Max 6 hét ciklus. 20-50 mg/nap, 2-3x osztva (3-6h felezés). TUDCA + NAC kötelező. PCT 4 hét."
```

New:
```js
        "note": {
          "hu": "Max 6 hét ciklus. 20-50 mg/nap, 2-3x osztva (3-6h felezés). TUDCA + NAC kötelező. PCT 4 hét.",
          "en": "Max 6 week cycle. 20-50 mg/day, 2-3x split (3-6 h half-life). TUDCA + NAC mandatory. PCT 4 weeks.",
          "pl": "Maksymalnie 6 tygodni cyklu. 20-50 mg/dzień, 2-3x podzielone (okres półtrwania 3-6 h). TUDCA + NAC obowiązkowe. PCT 4 tygodnie."
        }
```

- [ ] **Step 3: Convert HU `oil` variant**

In the same file, find variant `"id": "oil"` (around line 169). Apply these 5 Edits:

**Edit 3.1 — routeLabel:**

Old:
```js
      "routeLabel": "Methandrostenolone in-oil (IM, UGL)",
```

New:
```js
      "routeLabel": {
        "hu": "Methandrostenolone (Reforvit-B in-oil IM, UGL depot)",
        "en": "Methandrostenolone (Reforvit-B in-oil IM, UGL depot)",
        "pl": "Methandrostenolon (Reforvit-B in-oil IM, depot UGL)"
      },
```

**Edit 3.2 — routeNote:**

Old:
```js
      "routeNote": "Ritka, alternatív forma (\"Reforvit-B\" típusú szuszpenzió). Bypass-olja a hepatikus first-pass metabolizmust → valamivel alacsonyabb de NEM nulla hepatotoxicitás (a 17α-metil-csoport intrinsic hepatotoxicitást okoz first-pass nélkül is). Egyenletesebb plazma-szint, EOD (másnap) adagolás. Fájdalmas injekció, kizárólag UGL-forrás.",
```

New:
```js
      "routeNote": {
        "hu": "Ritka, alternatív forma (\"Reforvit-B\" típusú szuszpenzió). Bypass-olja a hepatikus first-pass metabolizmust → valamivel alacsonyabb de NEM nulla hepatotoxicitás (a 17α-metil-csoport intrinsic hepatotoxicitást okoz first-pass nélkül is). Egyenletesebb plazma-szint, EOD (másnap) adagolás. Fájdalmas injekció, kizárólag UGL-forrás.",
        "en": "Rare, alternative form (\"Reforvit-B\"-type suspension). Bypasses hepatic first-pass metabolism → somewhat lower but NOT zero hepatotoxicity (the 17α-methyl group causes intrinsic hepatotoxicity even without first-pass). More stable plasma levels, EOD (every-other-day) dosing. Painful injection, UGL-source only.",
        "pl": "Rzadka, alternatywna forma (zawiesina typu \"Reforvit-B\"). Omija wątrobowy metabolizm first-pass → nieco niższa, ale NIE zerowa hepatotoksyczność (grupa 17α-metylowa powoduje wewnętrzną hepatotoksyczność nawet bez first-pass). Bardziej stabilne poziomy osoczowe, podawanie EOD (co drugi dzień). Bolesna iniekcja, wyłącznie ze źródła UGL."
      },
```

**Edit 3.3 — onsetTime:**

Old:
```js
      "onsetTime": "12-24 óra (IM, depot-kinetika)",
```

New:
```js
      "onsetTime": {
        "hu": "12-24 óra (IM, depot-kinetika)",
        "en": "12-24 hours (IM, depot kinetics)",
        "pl": "12-24 godziny (IM, kinetyka depot)"
      },
```

**Edit 3.4 — dosing:**

Old:
```js
      "dosing": "Tipikus adag 50 mg EOD (másnap), 10 ml-es 50 mg/ml fiolából. Néhány felhasználó 75-100 mg EOD-t alkalmaz. Maximálisan 8 hetes ciklus. Aszeptikus injekciós technika kötelező.",
```

New:
```js
      "dosing": {
        "hu": "Tipikus adag 50 mg EOD (másnap), 10 ml-es 50 mg/ml fiolából. Néhány felhasználó 75-100 mg EOD-t alkalmaz. Maximálisan 8 hetes ciklus. Aszeptikus injekciós technika kötelező.",
        "en": "Typical dose 50 mg EOD (every-other-day), from 10 mL × 50 mg/mL vial. Some users apply 75-100 mg EOD. Maximum 8-week cycle. Aseptic injection technique mandatory.",
        "pl": "Typowa dawka 50 mg EOD (co drugi dzień), z fiolki 10 mL × 50 mg/mL. Niektórzy użytkownicy stosują 75-100 mg EOD. Maksymalnie 8-tygodniowy cykl. Aseptyczna technika iniekcji obowiązkowa."
      },
```

**Edit 3.5 — doseCalc.note:**

Old:
```js
        "note": "Max 8 hét ciklus. 50-100 mg/inj EOD. TUDCA 500-750 mg/nap kötelező. PCT 4 hét, utolsó injekció +5-7 nap."
```

New:
```js
        "note": {
          "hu": "Max 8 hét ciklus. 50-100 mg/inj EOD. TUDCA 500-750 mg/nap kötelező. PCT 4 hét, utolsó injekció +5-7 nap.",
          "en": "Max 8-week cycle. 50-100 mg/injection EOD. TUDCA 500-750 mg/day mandatory. PCT 4 weeks, last injection +5-7 days.",
          "pl": "Maksymalnie 8-tygodniowy cykl. 50-100 mg/iniekcja EOD. TUDCA 500-750 mg/dzień obowiązkowo. PCT 4 tygodnie, ostatnia iniekcja +5-7 dni."
        }
```

- [ ] **Step 4: Bulk-copy variants[] block to EN + PL files**

```bash
cd ".worktrees/feat-v0272-naming-rich"
node -e "
const fs = require('fs');
const hu = fs.readFileSync('src/data/libraries/performance/entries/hu/dianabol-info.js', 'utf8');
for (const lang of ['en', 'pl']) {
  const target = 'src/data/libraries/performance/entries/' + lang + '/dianabol-info.js';
  const original = fs.readFileSync(target, 'utf8');
  const huVariants = hu.match(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/)[0];
  const updated = original.replace(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/, huVariants);
  fs.writeFileSync(target, updated);
  console.log(lang + ': written ' + updated.length + 'B');
}
"
```

- [ ] **Step 5: Audit + validate**

```bash
node scripts/v0272-triplet-convert.mjs --audit dianabol-info
node scripts/validate-library-meta.mjs
```

Expected: `✅ dianabol-info: 0 string-shape` + `PASS 4 libraries × 189 entries`.

- [ ] **Step 6: Commit dianabol-info**

```bash
git add src/data/libraries/performance/entries/{hu,en,pl}/dianabol-info.js
git commit -m "feat(v0.27.2): dianabol-info RICH-shape triplet (2 variants × 5 fields)

Oral tablet + Reforvit-B in-oil IM variants converted to {hu,en,pl} triplet
across routeLabel/routeNote/dosing/onsetTime/doseCalc.note."
```

---

### Task 5: superdrol triplet conversion (2 variants)

**Files:**
- Modify: `src/data/libraries/performance/entries/hu/superdrol.js`
- Modify: `src/data/libraries/performance/entries/en/superdrol.js`
- Modify: `src/data/libraries/performance/entries/pl/superdrol.js`

**Strategy:** Identical to Task 4 pattern. 2 variants × 5 fields × 3 lang.

- [ ] **Step 1: Extract HU source**

```bash
node scripts/v0272-triplet-convert.mjs --extract hu superdrol > /tmp/v0272-sdrol-hu.txt
cat /tmp/v0272-sdrol-hu.txt
```

- [ ] **Step 2: Convert HU `oral` variant (around line 144)**

**Edit 2.1 — routeLabel:**

Old:
```js
      "routeLabel": "Orális (tabletta)",
```

New:
```js
      "routeLabel": {
        "hu": "Methyldrostanolone (Superdrol orális tabletta, 17α-metilezett)",
        "en": "Methyldrostanolone (Superdrol oral tablet, 17α-methylated)",
        "pl": "Methyldrostanolon (Superdrol tabletka doustna, 17α-metylowany)"
      },
```

**Edit 2.2 — routeNote:**

Old:
```js
      "routeNote": "Klasszikus Superdrol-formátum: 17α-metilezett tabletta, ~6-8 óra felezési idő. Drámai izomtömeg-növekedés és erőnövekedés, DE ez a leghepatotoxikusabb mainstream orális AAS. Rövid ciklushoz (max 4 hét) és kötelező máj-monitoringhoz tartsd magad.",
```

New:
```js
      "routeNote": {
        "hu": "Klasszikus Superdrol-formátum: 17α-metilezett tabletta, ~6-8 óra felezési idő. Drámai izomtömeg-növekedés és erőnövekedés, DE ez a leghepatotoxikusabb mainstream orális AAS. Rövid ciklushoz (max 4 hét) és kötelező máj-monitoringhoz tartsd magad.",
        "en": "Classic Superdrol format: 17α-methylated tablet, ~6-8 hour half-life. Dramatic muscle mass and strength gains, BUT this is the most hepatotoxic mainstream oral AAS. Stick to short cycles (max 4 weeks) and mandatory liver monitoring.",
        "pl": "Klasyczny format Superdrolu: tabletka 17α-metylowana, ~6-8 godzin okres półtrwania. Dramatyczny przyrost masy mięśniowej i siły, ALE to najbardziej hepatotoksyczny mainstreamowy doustny AAS. Trzymaj się krótkich cykli (maksymalnie 4 tygodnie) i obowiązkowego monitorowania wątroby."
      },
```

**Edit 2.3 — onsetTime:**

Old:
```js
      "onsetTime": "7-14 nap (izomtömeg)",
```

New:
```js
      "onsetTime": {
        "hu": "7-14 nap (izomtömeg)",
        "en": "7-14 days (muscle mass)",
        "pl": "7-14 dni (masa mięśniowa)"
      },
```

**Edit 2.4 — dosing:**

Old:
```js
      "dosing": "10-30 mg/nap orálisan, napi 1-2 osztott dózisban. Maximum 4-6 hét ciklus — a hepatotoxicitás kumulatív. Étvágyvesztés és \"Superdrol-flu\" tünetek gyakoriak 20 mg felett. TUDCA 500-750 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
```

New:
```js
      "dosing": {
        "hu": "10-30 mg/nap orálisan, napi 1-2 osztott dózisban. Maximum 4-6 hét ciklus — a hepatotoxicitás kumulatív. Étvágyvesztés és \"Superdrol-flu\" tünetek gyakoriak 20 mg felett. TUDCA 500-750 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
        "en": "10-30 mg/day orally, 1-2 split doses per day. Maximum 4-6 week cycle — hepatotoxicity is cumulative. Appetite loss and \"Superdrol flu\" symptoms common above 20 mg. TUDCA 500-750 mg/day + NAC 1200 mg/day mandatory throughout the cycle.",
        "pl": "10-30 mg/dzień doustnie, 1-2 dawki podzielone dziennie. Maksymalnie 4-6 tygodni cyklu — hepatotoksyczność jest kumulacyjna. Utrata apetytu i objawy \"Superdrol flu\" częste powyżej 20 mg. TUDCA 500-750 mg/dzień + NAC 1200 mg/dzień obowiązkowo przez cały cykl."
      },
```

**Edit 2.5 — doseCalc.note:**

Old:
```js
        "note": "MAXIMUM 4 hét ciklus — NIKADA tovább. TUDCA 500-750 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt. ALT/AST 3x felső normál esetén AZONNAL leállítás + máj-labor 2 héten belül. PCT (Clomid + Nolvadex 4 hét) kötelező. Vérnyomás naponta."
```

New:
```js
        "note": {
          "hu": "MAXIMUM 4 hét ciklus — NIKADA tovább. TUDCA 500-750 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt. ALT/AST 3x felső normál esetén AZONNAL leállítás + máj-labor 2 héten belül. PCT (Clomid + Nolvadex 4 hét) kötelező. Vérnyomás naponta.",
          "en": "MAXIMUM 4-week cycle — NEVER longer. TUDCA 500-750 mg/day + NAC 1200 mg/day throughout the cycle. If ALT/AST 3x upper normal, STOP IMMEDIATELY + liver labs within 2 weeks. PCT (Clomid + Nolvadex 4 weeks) mandatory. Blood pressure daily.",
          "pl": "MAKSYMALNIE 4-tygodniowy cykl — NIGDY dłużej. TUDCA 500-750 mg/dzień + NAC 1200 mg/dzień przez cały cykl. Jeśli ALT/AST 3x górna granica normy, NATYCHMIASTOWE PRZERWANIE + badania wątroby w ciągu 2 tygodni. PCT (Clomid + Nolvadex 4 tygodnie) obowiązkowo. Ciśnienie krwi codziennie."
        }
```

- [ ] **Step 3: Convert HU `injectable` variant (around line 199)**

**Edit 3.1 — routeLabel:**

Old:
```js
      "routeLabel": "Intramuszkuláris (injekció)",
```

New:
```js
      "routeLabel": {
        "hu": "Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot)",
        "en": "Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot)",
        "pl": "Methyldrostanolon (Methyl-Drol in-oil IM, depot UGL)"
      },
```

**Edit 3.2 — routeNote:**

Old:
```js
      "routeNote": "Ritka UGL \"Methyl-Drol\" in-oil formátum: a hepatikus first-pass megkerülésével a máj-stressz csökken, de NEM tűnik el — a 17α-metil-csoport az IM-route-nál is hepatotoxikus. Lassabb felfutás (depot-kinetika), hosszabb detekciós ablak. Akkor érdemes, ha az orális hepatotoxicitás intolerabilis, DE a kockázat nem nulla.",
```

New:
```js
      "routeNote": {
        "hu": "Ritka UGL \"Methyl-Drol\" in-oil formátum: a hepatikus first-pass megkerülésével a máj-stressz csökken, de NEM tűnik el — a 17α-metil-csoport az IM-route-nál is hepatotoxikus. Lassabb felfutás (depot-kinetika), hosszabb detekciós ablak. Akkor érdemes, ha az orális hepatotoxicitás intolerabilis, DE a kockázat nem nulla.",
        "en": "Rare UGL \"Methyl-Drol\" in-oil format: bypassing hepatic first-pass reduces liver stress but does NOT eliminate it — the 17α-methyl group remains hepatotoxic even via IM route. Slower onset (depot kinetics), longer detection window. Worth considering if oral hepatotoxicity is intolerable, BUT the risk is not zero.",
        "pl": "Rzadki format UGL \"Methyl-Drol\" in-oil: ominięcie wątrobowego first-pass zmniejsza stres wątrobowy, ale NIE eliminuje go — grupa 17α-metylowa pozostaje hepatotoksyczna nawet drogą IM. Wolniejsze rozpoczęcie (kinetyka depot), dłuższe okno detekcji. Warto rozważyć, jeśli hepatotoksyczność doustna jest nie do zniesienia, ALE ryzyko nie jest zerowe."
      },
```

**Edit 3.3 — onsetTime:**

Old:
```js
      "onsetTime": "10-21 nap (lassabb felfutás mint orálnál, depot-kinetika miatt)",
```

New:
```js
      "onsetTime": {
        "hu": "10-21 nap (lassabb felfutás mint orálnál, depot-kinetika miatt)",
        "en": "10-21 days (slower onset than oral due to depot kinetics)",
        "pl": "10-21 dni (wolniejsze rozpoczęcie niż doustnie z powodu kinetyki depot)"
      },
```

**Edit 3.4 — dosing:**

Old:
```js
      "dosing": "50 mg EOD (minden második nap) IM, tipikusan vastus lateralis vagy ventrogluteal. UGL standard: 50 mg/ml × 10 ml fiola. Maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
```

New:
```js
      "dosing": {
        "hu": "50 mg EOD (minden második nap) IM, tipikusan vastus lateralis vagy ventrogluteal. UGL standard: 50 mg/ml × 10 ml fiola. Maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
        "en": "50 mg EOD (every-other-day) IM, typically vastus lateralis or ventrogluteal. UGL standard: 50 mg/mL × 10 mL vial. Maximum 6-week cycle. TUDCA 500 mg/day + NAC 1200 mg/day mandatory throughout the cycle.",
        "pl": "50 mg EOD (co drugi dzień) IM, typowo vastus lateralis lub ventrogluteal. Standard UGL: 50 mg/mL × 10 mL fiolka. Maksymalnie 6-tygodniowy cykl. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowo przez cały cykl."
      },
```

**Edit 3.5 — doseCalc.note:**

Old:
```js
        "note": "50 mg EOD (minden második nap) IM — maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező (a 17α-metil miatt máj-támogatás IM-nál is szükséges). ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4-6 hét) kötelező. Vérnyomás naponta."
```

New:
```js
        "note": {
          "hu": "50 mg EOD (minden második nap) IM — maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező (a 17α-metil miatt máj-támogatás IM-nál is szükséges). ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4-6 hét) kötelező. Vérnyomás naponta.",
          "en": "50 mg EOD (every-other-day) IM — maximum 6-week cycle. TUDCA 500 mg/day + NAC 1200 mg/day mandatory (liver support needed even IM due to 17α-methyl group). If ALT/AST 3x upper normal, STOP IMMEDIATELY. PCT (Clomid + Nolvadex 4-6 weeks) mandatory. Blood pressure daily.",
          "pl": "50 mg EOD (co drugi dzień) IM — maksymalnie 6-tygodniowy cykl. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowo (wsparcie wątroby potrzebne nawet IM z powodu grupy 17α-metylowej). Jeśli ALT/AST 3x górna granica normy, NATYCHMIASTOWE PRZERWANIE. PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowo. Ciśnienie krwi codziennie."
        }
```

- [ ] **Step 4: Bulk-copy variants[] to EN + PL**

```bash
cd ".worktrees/feat-v0272-naming-rich"
node -e "
const fs = require('fs');
const hu = fs.readFileSync('src/data/libraries/performance/entries/hu/superdrol.js', 'utf8');
for (const lang of ['en', 'pl']) {
  const target = 'src/data/libraries/performance/entries/' + lang + '/superdrol.js';
  const original = fs.readFileSync(target, 'utf8');
  const huVariants = hu.match(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/)[0];
  const updated = original.replace(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/, huVariants);
  fs.writeFileSync(target, updated);
  console.log(lang + ': written ' + updated.length + 'B');
}
"
```

- [ ] **Step 5: Audit + validate**

```bash
node scripts/v0272-triplet-convert.mjs --audit superdrol
node scripts/validate-library-meta.mjs
```

Expected: `✅ superdrol: 0 string-shape` + `PASS 4 libraries × 189 entries`.

- [ ] **Step 6: Commit superdrol**

```bash
git add src/data/libraries/performance/entries/{hu,en,pl}/superdrol.js
git commit -m "feat(v0.27.2): superdrol RICH-shape triplet (2 variants × 5 fields)

Oral tablet + Methyl-Drol in-oil IM variants converted to {hu,en,pl} triplet
across routeLabel/routeNote/dosing/onsetTime/doseCalc.note."
```

---

### Task 6: testosterone-info triplet conversion (5 variants — LARGEST entry)

**Files:**
- Modify: `src/data/libraries/performance/entries/hu/testosterone-info.js`
- Modify: `src/data/libraries/performance/entries/en/testosterone-info.js`
- Modify: `src/data/libraries/performance/entries/pl/testosterone-info.js`

**Strategy:** 5 variants × 5 fields = 25 fields per lang × 3 lang = 75 strings. Largest task. Hand-edit HU per-variant (5 Edits per variant block = 25 Edits total in HU file — careful, Edit tool 5-edit-per-file softlimit, may need to use bulk-script for some variant blocks).

**Mitigation:** Split HU editing into 2 commits: variants 1-3 (prop+enan+cyp) + variants 4-5 (sus+aq). Bulk-copy to EN+PL at the end.

- [ ] **Step 1: Extract HU source**

```bash
node scripts/v0272-triplet-convert.mjs --extract hu testosterone-info > /tmp/v0272-test-hu.txt
cat /tmp/v0272-test-hu.txt
```

- [ ] **Step 2: Convert HU `prop` variant (around line 215)**

Apply 5 Edits using the exact translations below. For brevity, only routeLabel pattern from §3 — full routeNote/dosing/onsetTime/doseCalc.note translations follow the same Round 3+4 cognate-preservation pattern from Task 3 conventions.

**Edit 2.1 — routeLabel:**

Old:
```js
      "routeLabel": "Testosterone Propionát (IM, gyors)",
```

New:
```js
      "routeLabel": {
        "hu": "Testosterone Propionate (Test-Prop, gyors észter)",
        "en": "Testosterone Propionate (Test-Prop, fast ester)",
        "pl": "Testosteron Propionian (Test-Prop, szybki ester)"
      },
```

**Edit 2.2 — routeNote:**

Old:
```js
      "routeNote": "Gyors észter (~19h), EOD ütemezés szükséges; gyors PCT-átmenet (utolsó injekció +3-5 nap).",
```

New:
```js
      "routeNote": {
        "hu": "Gyors észter (~19h), EOD ütemezés szükséges; gyors PCT-átmenet (utolsó injekció +3-5 nap).",
        "en": "Fast ester (~19h), EOD scheduling required; fast PCT transition (last injection +3-5 days).",
        "pl": "Szybki ester (~19h), wymagany harmonogram EOD; szybkie przejście PCT (ostatnia iniekcja +3-5 dni)."
      },
```

**Edit 2.3 — onsetTime:**

Old:
```js
      "onsetTime": "24-48 óra (IM, fast-acting propionát)",
```

New:
```js
      "onsetTime": {
        "hu": "24-48 óra (IM, fast-acting propionát)",
        "en": "24-48 hours (IM, fast-acting propionate)",
        "pl": "24-48 godzin (IM, szybko działający propionian)"
      },
```

**Edit 2.4 — dosing:**

Old:
```js
      "dosing": "300–700 mg/hét IM, 3× EOD osztva (hétfő/szerda/péntek). Standard TRT-felett bodybuilding-doseban.",
```

New:
```js
      "dosing": {
        "hu": "300–700 mg/hét IM, 3× EOD osztva (hétfő/szerda/péntek). Standard TRT-felett bodybuilding-doseban.",
        "en": "300–700 mg/week IM, split 3x EOD (Mon/Wed/Fri). Standard above-TRT bodybuilding dose.",
        "pl": "300–700 mg/tydzień IM, podzielone 3x EOD (pon/śr/pt). Standardowa dawka kulturystyczna powyżej TRT."
      },
```

**Edit 2.5 — doseCalc.note:**

Old:
```js
        "note": "300-700 mg/hét, 3x EOD osztott (Mon/Wed/Fri). PCT utolsó injekció +3-5 nap."
```

New:
```js
        "note": {
          "hu": "300-700 mg/hét, 3x EOD osztott (Mon/Wed/Fri). PCT utolsó injekció +3-5 nap.",
          "en": "300-700 mg/week, split 3x EOD (Mon/Wed/Fri). PCT last injection +3-5 days.",
          "pl": "300-700 mg/tydzień, podzielone 3x EOD (pon/śr/pt). PCT ostatnia iniekcja +3-5 dni."
        }
```

- [ ] **Step 3: Convert HU `enan` variant (around line 259)**

**Edit 3.1 — routeLabel:**

Old:
```js
      "routeLabel": "Testosterone Enantát (IM, lassú)",
```

New:
```js
      "routeLabel": {
        "hu": "Testosterone Enanthate (Test-E, lassú észter)",
        "en": "Testosterone Enanthate (Test-E, slow ester)",
        "pl": "Testosteron Enanthate (Test-E, wolny ester)"
      },
```

**Edit 3.2 — routeNote:**

Old:
```js
      "routeNote": "Közepes észter (10,5 nap), heti 1-2× elég; steady-state 4-5 hét után. EU-preferált TRT és bulk-ciklus standard.",
```

New:
```js
      "routeNote": {
        "hu": "Közepes észter (10,5 nap), heti 1-2× elég; steady-state 4-5 hét után. EU-preferált TRT és bulk-ciklus standard.",
        "en": "Medium ester (10.5 days), 1-2x weekly suffices; steady-state after 4-5 weeks. EU-preferred TRT and bulk-cycle standard.",
        "pl": "Średni ester (10,5 dnia), wystarczy 1-2x tygodniowo; stan stacjonarny po 4-5 tygodniach. Standard TRT preferowany w UE i cyklach bulk."
      },
```

**Edit 3.3 — onsetTime:**

Old:
```js
      "onsetTime": "48-72 óra (IM, steady-state 4-5 hét)",
```

New:
```js
      "onsetTime": {
        "hu": "48-72 óra (IM, steady-state 4-5 hét)",
        "en": "48-72 hours (IM, steady-state 4-5 weeks)",
        "pl": "48-72 godziny (IM, stan stacjonarny 4-5 tygodni)"
      },
```

**Edit 3.4 — dosing:**

Old:
```js
      "dosing": "250–750 mg/hét IM, heti 1-2× osztva (Mon vagy Mon+Thu). 4-6 hét alatti ciklus NEM hatékony.",
```

New:
```js
      "dosing": {
        "hu": "250–750 mg/hét IM, heti 1-2× osztva (Mon vagy Mon+Thu). 4-6 hét alatti ciklus NEM hatékony.",
        "en": "250–750 mg/week IM, split 1-2x weekly (Mon or Mon+Thu). Cycles shorter than 4-6 weeks are NOT effective.",
        "pl": "250–750 mg/tydzień IM, podzielone 1-2x tygodniowo (pon lub pon+czw). Cykle krótsze niż 4-6 tygodni NIE są skuteczne."
      },
```

**Edit 3.5 — doseCalc.note:**

Old:
```js
        "note": "250-750 mg/hét, heti 1-2x. PCT utolsó injekció +14-21 nap."
```

New:
```js
        "note": {
          "hu": "250-750 mg/hét, heti 1-2x. PCT utolsó injekció +14-21 nap.",
          "en": "250-750 mg/week, 1-2x weekly. PCT last injection +14-21 days.",
          "pl": "250-750 mg/tydzień, 1-2x tygodniowo. PCT ostatnia iniekcja +14-21 dni."
        }
```

- [ ] **Step 4: Convert HU `cyp` variant (around line 303)**

**Edit 4.1 — routeLabel:**

Old:
```js
      "routeLabel": "Testosterone Cypionát (IM, lassú, USA-preferált)",
```

New:
```js
      "routeLabel": {
        "hu": "Testosterone Cypionate (Test-C, lassú észter, USA-preferált)",
        "en": "Testosterone Cypionate (Test-C, slow ester, USA-preferred)",
        "pl": "Testosteron Cypionian (Test-C, wolny ester, preferowany w USA)"
      },
```

**Edit 4.2 — routeNote:**

Old:
```js
      "routeNote": "Közepes észter (~8 nap), USA piaci dominancia; klinikailag ≈ Enantát (~2 nap eltérés minimális gyakorlatban). PCT utolsó injekció +14-21 nap.",
```

New:
```js
      "routeNote": {
        "hu": "Közepes észter (~8 nap), USA piaci dominancia; klinikailag ≈ Enantát (~2 nap eltérés minimális gyakorlatban). PCT utolsó injekció +14-21 nap.",
        "en": "Medium ester (~8 days), USA market dominance; clinically ≈ Enanthate (~2 day difference minimal in practice). PCT last injection +14-21 days.",
        "pl": "Średni ester (~8 dni), dominacja na rynku USA; klinicznie ≈ Enanthate (~2 dni różnicy minimalne w praktyce). PCT ostatnia iniekcja +14-21 dni."
      },
```

**Edit 4.3 — onsetTime:**

Old:
```js
      "onsetTime": "48-72 óra (IM, steady-state 4-5 hét)",
```

New:
```js
      "onsetTime": {
        "hu": "48-72 óra (IM, steady-state 4-5 hét)",
        "en": "48-72 hours (IM, steady-state 4-5 weeks)",
        "pl": "48-72 godziny (IM, stan stacjonarny 4-5 tygodni)"
      },
```

**Edit 4.4 — dosing:**

Old:
```js
      "dosing": "250–750 mg/hét IM, heti 1-2× osztva. USA-preferált TRT és bodybuilding standard.",
```

New:
```js
      "dosing": {
        "hu": "250–750 mg/hét IM, heti 1-2× osztva. USA-preferált TRT és bodybuilding standard.",
        "en": "250–750 mg/week IM, split 1-2x weekly. USA-preferred TRT and bodybuilding standard.",
        "pl": "250–750 mg/tydzień IM, podzielone 1-2x tygodniowo. Standard TRT preferowany w USA i kulturystyce."
      },
```

**Edit 4.5 — doseCalc.note:**

Old:
```js
        "note": "250-750 mg/hét, heti 1-2x. PCT utolsó injekció +14-21 nap."
```

New:
```js
        "note": {
          "hu": "250-750 mg/hét, heti 1-2x. PCT utolsó injekció +14-21 nap.",
          "en": "250-750 mg/week, 1-2x weekly. PCT last injection +14-21 days.",
          "pl": "250-750 mg/tydzień, 1-2x tygodniowo. PCT ostatnia iniekcja +14-21 dni."
        }
```

- [ ] **Step 5: Commit checkpoint (variants 1-3 done)**

```bash
node scripts/validate-library-meta.mjs   # PASS expected
git add src/data/libraries/performance/entries/hu/testosterone-info.js
git commit -m "feat(v0.27.2): testosterone-info variants 1-3 (prop+enan+cyp) HU triplet"
```

- [ ] **Step 6: Convert HU `sus` variant (around line 346)**

**Edit 6.1 — routeLabel:**

Old:
```js
      "routeLabel": "Sustanon-250 (Organon 4-ester blend)",
```

New:
```js
      "routeLabel": {
        "hu": "Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca)",
        "en": "Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca)",
        "pl": "Sustanon-250 (Organon mieszanka 4-estrów: Prop+PhenylProp+Iso+Deca)"
      },
```

**Edit 6.2 — routeNote:**

Old:
```js
      "routeNote": "4-ester keverék (Prop+PhenylProp+Isocaproate+Decanoate); peak-management komplexebb mint single-ester. PCT utolsó injekció +18-21 nap (Decanoate slow-clearance).",
```

New:
```js
      "routeNote": {
        "hu": "4-ester keverék (Prop+PhenylProp+Isocaproate+Decanoate); peak-management komplexebb mint single-ester. PCT utolsó injekció +18-21 nap (Decanoate slow-clearance).",
        "en": "4-ester blend (Prop+PhenylProp+Isocaproate+Decanoate); peak-management more complex than single-ester. PCT last injection +18-21 days (Decanoate slow-clearance).",
        "pl": "Mieszanka 4-estrów (Prop+PhenylProp+Izokapronian+Dekanian); zarządzanie szczytami bardziej złożone niż single-ester. PCT ostatnia iniekcja +18-21 dni (wolny klirens Dekanianu)."
      },
```

**Edit 6.3 — onsetTime:**

Old:
```js
      "onsetTime": "24-48 óra (Propionát-komponens fast-acting, Decanoate slow-acting)",
```

New:
```js
      "onsetTime": {
        "hu": "24-48 óra (Propionát-komponens fast-acting, Decanoate slow-acting)",
        "en": "24-48 hours (Propionate component fast-acting, Decanoate slow-acting)",
        "pl": "24-48 godzin (komponent Propionian szybko działający, Dekanian wolno działający)"
      },
```

**Edit 6.4 — dosing:**

Old:
```js
      "dosing": "250–750 mg/hét IM, heti 1-2× osztva (NEM havi 1× mint TRT). Bodybuilding-doseban single-ester alternatíva.",
```

New:
```js
      "dosing": {
        "hu": "250–750 mg/hét IM, heti 1-2× osztva (NEM havi 1× mint TRT). Bodybuilding-doseban single-ester alternatíva.",
        "en": "250–750 mg/week IM, split 1-2x weekly (NOT monthly 1x as for TRT). Single-ester alternative in bodybuilding doses.",
        "pl": "250–750 mg/tydzień IM, podzielone 1-2x tygodniowo (NIE 1x miesięcznie jak przy TRT). Alternatywa single-ester w dawkach kulturystycznych."
      },
```

**Edit 6.5 — doseCalc.note:**

Old:
```js
        "note": "250-750 mg/hét, heti 1-2x ajánlott (NEM havi 1x mint TRT). PCT utolsó injekció +18-21 nap."
```

New:
```js
        "note": {
          "hu": "250-750 mg/hét, heti 1-2x ajánlott (NEM havi 1x mint TRT). PCT utolsó injekció +18-21 nap.",
          "en": "250-750 mg/week, 1-2x weekly recommended (NOT monthly 1x as for TRT). PCT last injection +18-21 days.",
          "pl": "250-750 mg/tydzień, zalecane 1-2x tygodniowo (NIE 1x miesięcznie jak przy TRT). PCT ostatnia iniekcja +18-21 dni."
        }
```

- [ ] **Step 7: Convert HU `aq` variant (around line 390)**

Apply same 5-edit pattern for routeLabel + routeNote + onsetTime + dosing + doseCalc.note. Use these translations:

**Edit 7.1 — routeLabel:**

Old:
```js
      "routeLabel": "Testosterone Suspension (vizes, ultra-gyors)",
```

New:
```js
      "routeLabel": {
        "hu": "Testosterone Suspension (vizes mikrokristály, ultra-gyors)",
        "en": "Testosterone Suspension (aqueous microcrystal, ultra-fast)",
        "pl": "Testosteron Suspension (mikrokryształ wodny, ultra-szybki)"
      },
```

**Edit 7.2 — routeNote:**

Old:
```js
      "routeNote": "Parent T (NEM észter), 1-3 órás onset; pre-workout boost. EXTRA fájdalmas injekció (kristályok PIP). Napi/EOD ütemezés.",
```

New:
```js
      "routeNote": {
        "hu": "Parent T (NEM észter), 1-3 órás onset; pre-workout boost. EXTRA fájdalmas injekció (kristályok PIP). Napi/EOD ütemezés.",
        "en": "Parent T (NOT esterified), 1-3 hour onset; pre-workout boost. EXTRA painful injection (microcrystal PIP). Daily/EOD scheduling.",
        "pl": "Macierzysty T (NIE estryfikowany), 1-3 godzinny początek; przedtreningowy boost. EKSTRA bolesna iniekcja (PIP mikrokryształu). Codzienny/EOD harmonogram."
      },
```

**Edit 7.3 — onsetTime:**

Old:
```js
      "onsetTime": "1-3 óra (IM, ultra-gyors, NEM észteresített)",
```

New:
```js
      "onsetTime": {
        "hu": "1-3 óra (IM, ultra-gyors, NEM észteresített)",
        "en": "1-3 hours (IM, ultra-fast, NOT esterified)",
        "pl": "1-3 godziny (IM, ultra-szybki, NIE estryfikowany)"
      },
```

**Edit 7.4 — dosing:**

Old:
```js
      "dosing": "50–200 mg/injekció IM napi vagy EOD. Pre-workout boost-ra 50-100 mg edzés előtt 1-2 órával.",
```

New:
```js
      "dosing": {
        "hu": "50–200 mg/injekció IM napi vagy EOD. Pre-workout boost-ra 50-100 mg edzés előtt 1-2 órával.",
        "en": "50–200 mg/injection IM daily or EOD. For pre-workout boost 50-100 mg 1-2 hours before training.",
        "pl": "50–200 mg/iniekcja IM codziennie lub EOD. Dla przedtreningowego boostu 50-100 mg 1-2 godziny przed treningiem."
      },
```

**Edit 7.5 — doseCalc.note:**

Old:
```js
        "note": "50-200 mg/injekció napi vagy EOD. Pre-workout boost-ra 50-100 mg 1-2 órával edzés előtt. PCT utolsó injekció +24-48 óra."
```

New:
```js
        "note": {
          "hu": "50-200 mg/injekció napi vagy EOD. Pre-workout boost-ra 50-100 mg 1-2 órával edzés előtt. PCT utolsó injekció +24-48 óra.",
          "en": "50-200 mg/injection daily or EOD. For pre-workout boost 50-100 mg 1-2 hours before training. PCT last injection +24-48 hours.",
          "pl": "50-200 mg/iniekcja codziennie lub EOD. Dla przedtreningowego boostu 50-100 mg 1-2 godziny przed treningiem. PCT ostatnia iniekcja +24-48 godzin."
        }
```

- [ ] **Step 8: Bulk-copy HU variants[] block to EN + PL**

```bash
cd ".worktrees/feat-v0272-naming-rich"
node -e "
const fs = require('fs');
const hu = fs.readFileSync('src/data/libraries/performance/entries/hu/testosterone-info.js', 'utf8');
for (const lang of ['en', 'pl']) {
  const target = 'src/data/libraries/performance/entries/' + lang + '/testosterone-info.js';
  const original = fs.readFileSync(target, 'utf8');
  const huVariants = hu.match(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/)[0];
  const updated = original.replace(/\"variants\":\s*\[[\s\S]*?\]\s*,\s*\"mechanism\"/, huVariants);
  fs.writeFileSync(target, updated);
  console.log(lang + ': written ' + updated.length + 'B');
}
"
```

- [ ] **Step 9: Audit + validate**

```bash
node scripts/v0272-triplet-convert.mjs --audit testosterone-info
node scripts/validate-library-meta.mjs
```

Expected: `✅ testosterone-info: 0 string-shape` + `PASS 4 libraries × 189 entries`.

- [ ] **Step 10: Commit testosterone-info finalization**

```bash
git add src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js
git commit -m "feat(v0.27.2): testosterone-info variants 4-5 (sus+aq) + EN+PL fanout

5 variants × 5 fields triplet-shape complete (prop+enan+cyp+sus+aq).
Sustanon-250 explicit 4-ester blend specification in routeLabel.
Suspension aqueous microcrystal ultra-fast onset variant."
```

---

### Task 7: Pre-ship audit + build verification

**Files:**
- (verification only — no file changes)

- [ ] **Step 1: Audit all 4 entries**

```bash
cd ".worktrees/feat-v0272-naming-rich"
for id in l-carnitine dianabol-info testosterone-info superdrol; do
  node scripts/v0272-triplet-convert.mjs --audit $id
done
```

Expected: All 4 → `✅ <id>: 0 string-shape, all triplet`.

- [ ] **Step 2: Round 3+4 regression-check**

```bash
git diff --stat master..feat/v0272-naming-rich -- \
  'src/data/libraries/performance/entries/*/trenbolone-info.js' \
  'src/data/libraries/performance/entries/*/nandrolone-info.js' \
  'src/data/libraries/performance/entries/*/masteron.js' \
  'src/data/libraries/performance/entries/*/primobolan.js' \
  'src/data/libraries/performance/entries/*/ment-19nor.js' \
  'src/data/libraries/performance/entries/*/ment-test.js'
```

Expected: 0 files / 0 changes.

- [ ] **Step 3: LIBRARY_ENTRY_META + categories regression-check**

```bash
git diff --stat master..feat/v0272-naming-rich -- \
  src/data/libraries/performance/index.js \
  src/data/libraries/performance/categories.js \
  src/components/library/adaptLibraryEntry.js \
  src/components/library/EntryDetail.jsx
```

Expected: 0 files / 0 changes.

- [ ] **Step 4: Validator final pass**

```bash
node scripts/validate-library-meta.mjs
```

Expected: `PASS 4 libraries × 189 entries` (unchanged count, no warnings).

- [ ] **Step 5: Production build**

```bash
npm run build
```

Expected: PASS in 5-7 seconds. Vendor chunk ~165 KiB unchanged. PWA precache <5120 KiB cap. No errors.

- [ ] **Step 6: NO commit** (audit-only step, no file changes)

---

### Task 8: Lokál smoke test

**Files:**
- (smoke only — no file changes)

- [ ] **Step 1: Start dev server on port 5174**

```bash
cd ".worktrees/feat-v0272-naming-rich"
npm run dev -- --port 5174
```

Run in background. Expected: `VITE v5.x.x ready in NNNms ➜ Local: http://localhost:5174/`.

- [ ] **Step 2: Smoke testosterone-info (5 variants)**

Open `http://localhost:5174/#entry/performance/testosterone-info` in browser. Verify:
- 5 variant chips visible in header: "Testosterone Propionate (Test-Prop, gyors észter)" / "Testosterone Enanthate (Test-E, lassú észter)" / "Testosterone Cypionate (Test-C, lassú észter, USA-preferált)" / "Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca)" / "Testosterone Suspension (vizes mikrokristály, ultra-gyors)"
- Variant-toggle changes routeNote subtitle
- Calculator info-card renders the variant's `doseCalc.note` text
- Lang-toggle EN/PL → §3 table values appear

- [ ] **Step 3: Smoke dianabol-info (2 variants)**

`http://localhost:5174/#entry/performance/dianabol-info`:
- 2 variants: "Methandrostenolone (Dianabol orális tabletta, 17α-metilezett)" / "Methandrostenolone (Reforvit-B in-oil IM, UGL depot)"
- Lang-toggle works

- [ ] **Step 4: Smoke l-carnitine (2 variants)**

`http://localhost:5174/#entry/performance/l-carnitine`:
- 2 variants: "L-Carnitine Tartrate (orális kapszula, lassú-felszívódás ~15%)" / "L-Carnitine Tartrate (IM/SC vizes ampulla, 100% bioavailability)"
- Calculator info-card renders correctly

- [ ] **Step 5: Smoke superdrol (2 variants)**

`http://localhost:5174/#entry/performance/superdrol`:
- 2 variants: "Methyldrostanolone (Superdrol orális tabletta, 17α-metilezett)" / "Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot)"

- [ ] **Step 6: Regression-smoke Round 3+4 (trenbolone-info)**

`http://localhost:5174/#entry/performance/trenbolone-info`:
- 3 variants ace+enan+hex unchanged ("Trenbolone Acetate (Tren-Ace, gyors észter)" etc.)
- No console errors, no missing fields

- [ ] **Step 7: Stop dev server**

```bash
# Ctrl-C the npm run dev process
```

- [ ] **Step 8: NO commit** (smoke-only step)

---

### Task 9: Merge to master + tag

**Files:**
- (git operations only)

- [ ] **Step 1: Navigate back to main repo**

```bash
cd "e:/Website Biz/molekulax"
git checkout master
git status
```

Expected: `On branch master` + clean working tree.

- [ ] **Step 2: Merge feat branch with no-ff**

```bash
git merge --no-ff feat/v0272-naming-rich -m "merge: v0.27.2 variant-naming RICH-shape standardization

4 entries × 11 variants × 5 fields × 3 lang = 165 string-translations.
l-carnitine + dianabol-info + testosterone-info + superdrol converted
from string-shape to {hu,en,pl} triplet matching Round 3+4 pattern.
Adapter additively compatible via v0.27.1 flat() helper."
```

Expected: merge commit created.

- [ ] **Step 3: Tag**

```bash
git tag v0.27.2-naming-rich -m "v0.27.2: 4 entry × 11 variant × 5 field triplet-upgrade

Closes last v0.27 multi-route-aware naming-standardization arc.
Pattern: <Compound> <Ester> (<Brand/Alias>, <descriptor>) per Round 3+4 anchor."
```

- [ ] **Step 4: Push origin master + tags**

```bash
git push origin master --tags
```

Expected: Push to `origin/master` + new tag `v0.27.2-naming-rich` pushed.

- [ ] **Step 5: Verify push**

```bash
git log --oneline -3
git tag | tail -3
```

Expected:
```
<merge-hash> merge: v0.27.2 variant-naming RICH-shape standardization
<task6-hash> feat(v0.27.2): testosterone-info variants 4-5 (sus+aq) + EN+PL fanout
...
v0.27.1-hotfix
v0.27.3-mega-ux-fix
v0.27.2-naming-rich
```

---

### Task 10: Post-deploy verify (Vercel)

**Files:**
- (verification only)

- [ ] **Step 1: Wait ~3 minutes for Vercel auto-deploy**

(Vercel auto-builds on push origin master, deployment URL `molekulax.vercel.app`.)

- [ ] **Step 2: Fetch live index.html + bundle metadata**

```bash
curl -sL https://molekulax.vercel.app/ | head -30 | grep -E "assets/index-"
```

Expected: New `/assets/index-*.js` hash visible (different from pre-v0.27.2).

- [ ] **Step 3: Identify + download performance lib meta chunk + verify**

```bash
mkdir -p /tmp/v0272-verify
# Step 3a: get the main bundle entry
curl -sL https://molekulax.vercel.app/ -o /tmp/v0272-verify/index.html
MAIN=$(grep -oE 'src="/assets/index-[A-Za-z0-9_-]+\.js"' /tmp/v0272-verify/index.html | head -1 | sed 's/src="//;s/"$//')
curl -sL "https://molekulax.vercel.app${MAIN}" -o /tmp/v0272-verify/main.js
# Step 3b: enumerate all index-* chunks from main bundle
CHUNKS=$(grep -oE 'index-[A-Za-z0-9_-]+\.js' /tmp/v0272-verify/main.js | sort -u)
# Step 3c: download each and identify the perf lib meta chunk by SARM string presence
for h in $CHUNKS; do
  curl -sL "https://molekulax.vercel.app/assets/$h" -o "/tmp/v0272-verify/chunk-$h"
  if grep -q '"sarm"' "/tmp/v0272-verify/chunk-$h"; then
    PERF_CHUNK="/tmp/v0272-verify/chunk-$h"
    echo "Perf lib meta chunk: $h"
    break
  fi
done
echo "=== v0.27.2 routeLabel deploys (3-lang evidence) ==="
grep -o "Test-Prop, gyors észter\|Test-E, slow ester\|Test-C, preferowany w USA\|Methyl-Drol\|Reforvit-B" "$PERF_CHUNK" | sort -u
```

Expected: All 5 strings present in the bundle (HU + EN + PL evidence of triplet deployment).

- [ ] **Step 4: Manual browser smoke (optional)**

Open `https://molekulax.vercel.app/#entry/performance/testosterone-info` in browser. Visual verify 5 variant chips match §3 table.

- [ ] **Step 5: Worktree cleanup (NON-DESTRUCTIVE, defer if locked)**

```bash
cd "e:/Website Biz/molekulax"
git worktree list
git worktree remove .worktrees/feat-v0272-naming-rich --force 2>/dev/null || echo "Worktree locked (Windows file lock) — gitignored, defer to next restart"
```

(Worktree residue is expected per `[[Subagent_Auto_Worktree_Isolation]]` + Windows file-lock pattern — gitignored, harmless.)

- [ ] **Step 6: NO commit** (verify-only step)

---

## Acceptance summary (post-ship)

- [ ] All 4 entries (l-carnitine, dianabol-info, testosterone-info, superdrol) have 0 string-shape per-variant fields (audit script confirms `✅` × 4)
- [ ] Validator PASS 4 libraries × 189 entries (unchanged count)
- [ ] Build PASS, PWA precache <5120 KiB
- [ ] Round 3+4 entries (6) untouched (0 lines diff)
- [ ] adaptLibraryEntry.js / EntryDetail.jsx / index.js / categories.js untouched (0 lines diff)
- [ ] Lokál smoke (4 entries × variant-toggle × lang-toggle) PASS
- [ ] Tag `v0.27.2-naming-rich` pushed
- [ ] Vercel deploy live with deployed routeLabel strings verified via bundle-inspect

---

## Obsidian mirror

After plan-doc commit:
```bash
cp docs/superpowers/plans/2026-05-25-v0272-variant-naming-rich.md \
   "E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_v0272NamingRich_Plan.md"
```
