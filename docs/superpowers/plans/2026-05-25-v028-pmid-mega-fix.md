# v0.28 PMID Mega-Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring `performance` and `pharmaceutical` libraries to 100% PASS on `verify-pmids.mjs` by replacing ~330 hallucinated baseline-PMIDs with NCBI eutils-verified equivalents.

**Architecture:** Three reusable scripts handle the heavy lifting: `verify-pmids.mjs --suggest` (extended build-gate), `pmid-suggest-batch.mjs` (machine-readable candidate JSON), and `apply-pmid-fix.mjs` (atomic per-entry 3-lang rewrite). Inline Claude makes per-PMID accept/reject decisions reading candidate JSON. No subagents, no AI-generated PMIDs, deterministic NCBI esearch only. Per-entry commits inside `feat/v028-pmid-mega-fix` branch, ~47 commits total, multi-session resume via git push/pull.

**Tech Stack:** Node 20.18 (fs.readFileSync/writeFileSync — NO Edit tool), NCBI eutils REST API (esearch + esummary), git worktree, existing Vite/React 18/Vercel deploy pipeline.

**Spec reference:** `docs/superpowers/specs/2026-05-25-v028-pmid-mega-fix.md`

---

## File Structure

### Files to CREATE

```
scripts/
  pmid-suggest-batch.mjs      # NEW — NCBI esearch wrapper, writes JSON candidates
  apply-pmid-fix.mjs          # NEW — atomic per-entry 3-lang rewrite (no Edit tool)
docs/superpowers/
  SKIP_PMIDS.md               # NEW — documented deletes for un-verifiable studies (rare)
pmid-candidates/              # NEW directory (gitignored), holds per-entry candidate JSON
```

### Files to MODIFY

```
scripts/verify-pmids.mjs      # add --suggest flag + JSON snapshot output
.gitignore                    # add pmid-candidates/ + /tmp/v028-baseline/
src/data/libraries/performance/entries/{hu,en,pl}/<slug>.js    # ~35 entries × 3 langs
src/data/libraries/pharmaceutical/entries/{hu,en,pl}/<slug>.js # ~12 entries × 3 langs
```

### Branch + worktree

```
.worktrees/feat-v028-pmid-mega-fix/   # local worktree, gitignored
feat/v028-pmid-mega-fix               # remote branch, push end-of-session
master                                # merge target after all entries done
```

---

## Task 1: Setup — worktree + branch + gitignore

**Files:**
- Modify: `.gitignore`
- Create (via worktree): `.worktrees/feat-v028-pmid-mega-fix/`

- [ ] **Step 1: Create worktree from master**

Run from `e:/Website Biz/molekulax`:
```bash
git worktree add .worktrees/feat-v028-pmid-mega-fix -b feat/v028-pmid-mega-fix master
cd .worktrees/feat-v028-pmid-mega-fix
```

Expected: New branch `feat/v028-pmid-mega-fix` created at `master` (currently `59beddd` spec commit).

- [ ] **Step 2: Add gitignore entries**

Modify `.gitignore` in worktree, add at end:
```
# v0.28 PMID mega-fix transient artifacts
pmid-candidates/
/tmp/v028-baseline/
```

- [ ] **Step 3: Create empty pmid-candidates directory + verify**

```bash
mkdir -p pmid-candidates/performance pmid-candidates/pharmaceutical
ls pmid-candidates/
```

Expected: `performance/  pharmaceutical/` listed.

- [ ] **Step 4: Verify gitignore works**

```bash
git status
```

Expected: Only `.gitignore` shown as modified. `pmid-candidates/` NOT shown.

- [ ] **Step 5: Commit**

```bash
git add .gitignore
git commit -m "chore(v0.28): worktree setup + gitignore for PMID candidates"
```

---

## Task 2: Extend `verify-pmids.mjs` with `--suggest` flag

**Files:**
- Modify: `scripts/verify-pmids.mjs:18-22, 80-115`

- [ ] **Step 1: Add CLI flag + NCBI esearch helper**

Modify `scripts/verify-pmids.mjs` near the top (after line 20, with `entryFilter`), add:

```js
const suggestMode = args.includes('--suggest')
```

Then add this helper function above `lookupPmid`:

```js
async function suggestCandidates(citedTitle, excludePmids = []) {
  const stop = new Set(['this','that','with','from','have','been','were','their','about','which','study','effects','effect','using','versus','among','during'])
  const ts = normalize(citedTitle).split(' ').filter(t => t.length >= 4 && !stop.has(t))
  if (ts.length === 0) return []
  const query = encodeURIComponent(ts.slice(0, 8).join(' '))
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmax=8&retmode=json`
  try {
    const res = await fetch(url)
    if (!res.ok) return []
    const json = await res.json()
    const pmids = (json.esearchresult?.idlist || []).filter(p => !excludePmids.includes(p))
    if (pmids.length === 0) return []
    await new Promise(r => setTimeout(r, 200))
    const sumUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
    const sumRes = await fetch(sumUrl)
    if (!sumRes.ok) return []
    const sumJson = await sumRes.json()
    const results = []
    for (const pmid of pmids) {
      const rec = sumJson.result?.[pmid]
      if (!rec || rec.error) continue
      const title = rec.title || ''
      const authors = (rec.authors || []).slice(0, 3).map(a => a.name).join(', ')
      const year = (rec.pubdate || '').slice(0, 4)
      const ratio = overlapRatio(citedTitle, title)
      results.push({ pmid, title, authors, year, ratio })
    }
    return results.sort((a, b) => b.ratio - a.ratio)
  } catch (err) {
    return []
  }
}
```

- [ ] **Step 2: Hook `--suggest` into the issue-print block**

In the MISMATCH branch (line ~103-106), AND the NOT_FOUND branch (line ~97-98), AFTER the existing issue logging, add:

```js
if (suggestMode) {
  const cands = await suggestCandidates(study.title || '', [pmid])
  if (cands.length === 0) {
    console.log(`     candidates: (none)`)
  } else {
    console.log(`     candidates:`)
    for (const c of cands.slice(0, 5)) {
      console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
    }
  }
  await new Promise(r => setTimeout(r, 300))
}
```

(Insert both in the MISMATCH and NOT_FOUND branches.)

- [ ] **Step 3: Test on one known-bad entry**

```bash
node scripts/verify-pmids.mjs --entry atorvastatin --suggest 2>&1 | head -40
```

Expected: For each MISMATCH PMID in atorvastatin, a `candidates:` block with up to 5 PMID + ratio + year + title preview.

- [ ] **Step 4: Smoke-test on a known-good entry (regression)**

```bash
node scripts/verify-pmids.mjs --entry primobolan
```

Expected: All PMIDs OK (no MISMATCH block). v0.27 C1-touched entry, should still pass.

- [ ] **Step 5: Commit**

```bash
git add scripts/verify-pmids.mjs
git commit -m "feat(v0.28): verify-pmids --suggest flag for NCBI candidate search"
```

---

## Task 3: Create `pmid-suggest-batch.mjs`

**Files:**
- Create: `scripts/pmid-suggest-batch.mjs`

- [ ] **Step 1: Write the full script**

Create `scripts/pmid-suggest-batch.mjs` with:

```js
// Machine-readable PMID candidate finder. Writes pmid-candidates/<lib>/<entry>.json
// per entry with bad PMIDs and top-8 NCBI esearch candidates each.
//
// Run: node scripts/pmid-suggest-batch.mjs [--lib <id>] [--entry <slug>]

import { readdirSync, existsSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null

const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

function normalize(s) {
  return (s || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}
function tokens(s) {
  return new Set(normalize(s).split(' ').filter(t => t.length >= 4))
}
function overlapRatio(a, b) {
  const ta = tokens(a), tb = tokens(b)
  if (ta.size === 0 || tb.size === 0) return 0
  let common = 0
  for (const t of ta) if (tb.has(t)) common++
  return common / Math.min(ta.size, tb.size)
}

async function lookupPmid(pmid) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url)
      if (!res.ok) { await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt))); continue }
      const json = await res.json()
      const rec = json.result?.[pmid]
      if (!rec || rec.error) return { exists: false }
      return { exists: true, title: rec.title || '', authors: (rec.authors || []).map(a => a.name).join(', ') }
    } catch (err) {
      if (attempt === 2) return { networkError: true, error: err.message }
      await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt)))
    }
  }
  return { networkError: true }
}

async function searchCandidates(citedTitle, excludePmids) {
  const stop = new Set(['this','that','with','from','have','been','were','their','about','which','study','effects','effect','using','versus','among','during'])
  const ts = normalize(citedTitle).split(' ').filter(t => t.length >= 4 && !stop.has(t))
  if (ts.length === 0) return []
  const query = encodeURIComponent(ts.slice(0, 8).join(' '))
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmax=8&retmode=json`
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(searchUrl)
      if (!res.ok) { await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt))); continue }
      const json = await res.json()
      const pmids = (json.esearchresult?.idlist || []).filter(p => !excludePmids.includes(p))
      if (pmids.length === 0) return []
      await new Promise(r => setTimeout(r, 200))
      const sumUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
      const sumRes = await fetch(sumUrl)
      if (!sumRes.ok) return []
      const sumJson = await sumRes.json()
      const results = []
      for (const pmid of pmids) {
        const rec = sumJson.result?.[pmid]
        if (!rec || rec.error) continue
        const title = rec.title || ''
        const authors = (rec.authors || []).slice(0, 3).map(a => a.name).join(', ')
        const year = (rec.pubdate || '').slice(0, 4)
        const ratio = overlapRatio(citedTitle, title)
        results.push({ pmid, title, authors, year, ratio })
      }
      return results.sort((a, b) => b.ratio - a.ratio)
    } catch (err) {
      if (attempt === 2) return []
      await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt)))
    }
  }
  return []
}

async function processEntry(libId, slug) {
  const entryPath = resolve(repoRoot, 'src/data/libraries', libId, 'entries/hu', `${slug}.js`)
  if (!existsSync(entryPath)) return null
  const mod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
  const entry = mod.default
  const studies = Array.isArray(entry?.studies) ? entry.studies : []

  const badEntries = []
  for (const study of studies) {
    if (!study?.pmid) continue
    const pmid = String(study.pmid).trim()
    if (!/^\d+$/.test(pmid)) continue
    const result = await lookupPmid(pmid)
    await new Promise(r => setTimeout(r, 300))
    if (result.networkError) {
      badEntries.push({ badPmid: pmid, citedTitle: study.title, citedAuthors: study.authors, citedFindings: study.findings, citedPopulation: study.population, error: 'NETWORK' })
      continue
    }
    if (!result.exists) {
      const cands = await searchCandidates(study.title || '', [pmid])
      await new Promise(r => setTimeout(r, 300))
      badEntries.push({ badPmid: pmid, status: 'NOT_FOUND', citedTitle: study.title, citedAuthors: study.authors, citedFindings: study.findings, citedPopulation: study.population, candidates: cands.slice(0, 8) })
      continue
    }
    const ratio = overlapRatio(study.title, result.title)
    if (ratio < 0.25) {
      const cands = await searchCandidates(study.title || '', [pmid])
      await new Promise(r => setTimeout(r, 300))
      badEntries.push({ badPmid: pmid, status: 'MISMATCH', citedTitle: study.title, realTitle: result.title, citedAuthors: study.authors, citedFindings: study.findings, citedPopulation: study.population, candidates: cands.slice(0, 8) })
    }
  }
  return badEntries
}

async function main() {
  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries/hu')
    if (!existsSync(entriesDir)) continue
    const files = readdirSync(entriesDir).filter(f => f.endsWith('.js'))
    const outDir = resolve(repoRoot, 'pmid-candidates', libId)
    mkdirSync(outDir, { recursive: true })

    for (const file of files) {
      const slug = file.replace(/\.js$/, '')
      if (entryFilter && slug !== entryFilter) continue
      console.log(`Processing ${libId}/${slug}...`)
      const bad = await processEntry(libId, slug)
      if (bad === null) continue
      const outPath = resolve(outDir, `${slug}.json`)
      writeFileSync(outPath, JSON.stringify(bad, null, 2), 'utf-8')
      console.log(`  → ${bad.length} bad PMID(s), wrote ${outPath}`)
    }
  }
}

main().catch(err => { console.error('Suggest-batch failed:', err); process.exit(1) })
```

- [ ] **Step 2: Run on atorvastatin first (smallest test)**

```bash
node scripts/pmid-suggest-batch.mjs --entry atorvastatin
```

Expected: 
- Console: `Processing pharmaceutical/atorvastatin...` + `→ 1 bad PMID(s), wrote ...`
- File `pmid-candidates/pharmaceutical/atorvastatin.json` created.

- [ ] **Step 3: Inspect JSON shape**

```bash
cat pmid-candidates/pharmaceutical/atorvastatin.json
```

Expected: Array with 1 object containing `badPmid`, `status`, `citedTitle`, `candidates` array with up to 8 entries each with `pmid`, `title`, `authors`, `year`, `ratio`.

- [ ] **Step 4: Commit**

```bash
git add scripts/pmid-suggest-batch.mjs
git commit -m "feat(v0.28): pmid-suggest-batch.mjs candidate-finder script"
```

---

## Task 4: Create `apply-pmid-fix.mjs`

**Files:**
- Create: `scripts/apply-pmid-fix.mjs`

- [ ] **Step 1: Write the script**

Create `scripts/apply-pmid-fix.mjs`:

```js
// Atomic per-entry PMID-replace across all 3 lang files. No Edit tool (avoids
// curly-quote corruption). Uses fs.readFileSync/writeFileSync UTF-8.
//
// Run: node scripts/apply-pmid-fix.mjs --entry <slug> --replacements '<old>=<new>:<title>:<authors>;...'
//      node scripts/apply-pmid-fix.mjs --entry <slug> --lib <id> --replacements ... --dry-run

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const args = process.argv.slice(2)
const entry = args[args.indexOf('--entry') + 1]
const replArg = args[args.indexOf('--replacements') + 1]
const libArg = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const dryRun = args.includes('--dry-run')

if (!entry || !replArg) {
  console.error('Usage: --entry <slug> [--lib <id>] --replacements "old=new:title:authors;old2=new2:..." [--dry-run]')
  process.exit(2)
}

// Parse replacements: oldPmid=newPmid:newTitle:newAuthors;oldPmid2=...
// title/authors may contain colons; split only on the FIRST two colons of each replacement
const replacements = replArg.split(';').map(s => s.trim()).filter(Boolean).map(s => {
  const eqIdx = s.indexOf('=')
  if (eqIdx < 0) throw new Error(`Bad replacement: ${s}`)
  const oldPmid = s.slice(0, eqIdx).trim()
  const rest = s.slice(eqIdx + 1)
  const colon1 = rest.indexOf(':')
  const colon2 = rest.indexOf(':', colon1 + 1)
  if (colon1 < 0 || colon2 < 0) throw new Error(`Bad replacement (need 2 colons): ${s}`)
  const newPmid = rest.slice(0, colon1).trim()
  const newTitle = rest.slice(colon1 + 1, colon2).trim()
  const newAuthors = rest.slice(colon2 + 1).trim()
  return { oldPmid, newPmid, newTitle, newAuthors }
})

console.log(`Applying ${replacements.length} replacement(s) to ${entry} (${dryRun ? 'DRY-RUN' : 'WRITE'})`)

const LIBS = ['performance', 'pharmaceutical', 'peptides', 'nootropics']
let targetLib = null
if (libArg) {
  const path = resolve(repoRoot, 'src/data/libraries', libArg, 'entries/hu', `${entry}.js`)
  if (existsSync(path)) targetLib = libArg
} else {
  for (const lib of LIBS) {
    const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries/hu', `${entry}.js`)
    if (existsSync(path)) { targetLib = lib; break }
  }
}
if (!targetLib) { console.error(`Entry not found in any lib: ${entry}`); process.exit(1) }
console.log(`Target lib: ${targetLib}`)

let anyFail = false
for (const lang of ['hu', 'en', 'pl']) {
  const path = resolve(repoRoot, 'src/data/libraries', targetLib, 'entries', lang, `${entry}.js`)
  if (!existsSync(path)) { console.log(`  ${lang}: file missing, skip`); continue }
  let content = readFileSync(path, 'utf-8')
  const original = content

  for (const { oldPmid, newPmid, newTitle, newAuthors } of replacements) {
    // 1. Replace pmid string. Match: pmid: "12345"  with optional surrounding whitespace
    const pmidRe = new RegExp(`("pmid"\\s*:\\s*"|pmid:\\s*")${oldPmid}(")`, 'g')
    const beforePmid = content
    content = content.replace(pmidRe, `$1${newPmid}$2`)
    if (content === beforePmid) {
      console.log(`  ${lang}: ❌ PMID ${oldPmid} not found in file`)
      anyFail = true
      continue
    }

    // 2. Replace title. Find the studies-block entry whose pmid is now newPmid, and update title.
    // Strategy: find the `{ ... "pmid": "newPmid" ... }` object block and replace title key inside it.
    // We use a focused regex on the previous-line title since studies arrays have stable shape.
    const blockRe = new RegExp(
      `("title"\\s*:\\s*")[^"]*(",\\s*"authors"\\s*:\\s*")[^"]*(",[^}]*"pmid"\\s*:\\s*"${newPmid}")`,
      'g'
    )
    const beforeBlock = content
    const escTitle = newTitle.replace(/"/g, '\\"')
    const escAuthors = newAuthors.replace(/"/g, '\\"')
    content = content.replace(blockRe, `$1${escTitle}$2${escAuthors}$3`)
    if (content === beforeBlock) {
      console.log(`  ${lang}: ⚠ title/authors not replaced for new PMID ${newPmid} (block-regex didn't match — manual inspection needed)`)
      // Not a hard fail — pmid was replaced, title/authors can be hand-edited
    }
  }

  if (content === original) {
    console.log(`  ${lang}: no-op (no changes)`)
  } else if (dryRun) {
    console.log(`  ${lang}: would change ${original.length} → ${content.length} bytes`)
  } else {
    writeFileSync(path, content, 'utf-8')
    console.log(`  ${lang}: ✅ wrote ${content.length} bytes`)
  }
}

if (anyFail) { console.error('\n❌ Some replacements failed — investigate before commit'); process.exit(1) }
console.log('\n✅ All replacements applied' + (dryRun ? ' (dry-run, no writes)' : ''))
```

- [ ] **Step 2: Smoke-test dry-run on a fake replacement (atorvastatin)**

The atorvastatin known-bad PMID is `11268233` (MIRACL paper, real PMID is `11279053`). For dry-run, use that as the example fix:

```bash
node scripts/apply-pmid-fix.mjs --entry atorvastatin --replacements '11268233=11279053:Effects of atorvastatin on early recurrent ischemic events in acute coronary syndromes: the MIRACL study:Schwartz GG, Olsson AG, Ezekowitz MD et al.' --dry-run
```

Expected: 
- Console: `Target lib: pharmaceutical`
- 3 lang lines, each showing `would change N → M bytes`.

- [ ] **Step 3: Verify no actual writes occurred**

```bash
git status
```

Expected: working tree clean for the entry-files (only ignored / created scripts shown).

- [ ] **Step 4: Commit script**

```bash
git add scripts/apply-pmid-fix.mjs
git commit -m "feat(v0.28): apply-pmid-fix.mjs atomic 3-lang rewrite script"
```

---

## Task 5: Create SKIP_PMIDS.md template

**Files:**
- Create: `docs/superpowers/SKIP_PMIDS.md`

- [ ] **Step 1: Write the template**

Create `docs/superpowers/SKIP_PMIDS.md`:

```markdown
# v0.28 SKIP_PMIDS — Un-verifiable studies deleted, not replaced

> **Policy:** If a baseline-PMID is bad AND NCBI esearch returns 0 candidates ≥0.3 ratio AND augmented `findings`+`population` query also fails AND manual WebFetch yields no plausible paper for the claim → DELETE the study entry entirely. Document the deletion here with reason.

## Format

For each deleted study, log:

```
### <lib>/<entry> — PMID <bad-pmid> DELETED

**Original cite:** <citedTitle>
**Reason:** <why no candidate found — niche topic / very old paper / non-English source / claim is uncitable>
**Commit:** <hash>
**Date:** YYYY-MM-DD
```

## Entries

_(none yet — populate during execution)_
```

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/SKIP_PMIDS.md
git commit -m "docs(v0.28): SKIP_PMIDS.md template for un-verifiable studies"
```

---

## Task 6: Batch-generate candidates JSON for cluster 1 (AAS-ester, performance)

**Files:**
- Create (auto): `pmid-candidates/performance/<entry>.json` × ~15 entries

- [ ] **Step 1: Run batch on the AAS-ester cluster**

This cluster has ~15 entries; v0.27 C1 already cleaned 6 of them (trenbolone, nandrolone, masteron, primobolan, ment-19nor, ment-test). Remaining ~9 likely-affected: testosterone-info, anavar-info, dianabol-info, superdrol, methylsten, halotestin, equipoise, turinabol, proviron, dhb, methyltestosterone.

Run for each entry sequentially:

```bash
node scripts/pmid-suggest-batch.mjs --entry testosterone-info
node scripts/pmid-suggest-batch.mjs --entry anavar-info
node scripts/pmid-suggest-batch.mjs --entry dianabol-info
node scripts/pmid-suggest-batch.mjs --entry superdrol
node scripts/pmid-suggest-batch.mjs --entry methylstenbolone
node scripts/pmid-suggest-batch.mjs --entry halotestin
node scripts/pmid-suggest-batch.mjs --entry equipoise
node scripts/pmid-suggest-batch.mjs --entry turinabol
node scripts/pmid-suggest-batch.mjs --entry proviron
node scripts/pmid-suggest-batch.mjs --entry dhb
node scripts/pmid-suggest-batch.mjs --entry methyltestosterone
```

Expected: Each entry creates `pmid-candidates/performance/<slug>.json` with bad-PMID list + candidates. Entries with 0 bad PMIDs get an empty array `[]`.

- [ ] **Step 2: Inventory which entries actually have bad PMIDs**

```bash
for f in pmid-candidates/performance/*.json; do
  count=$(jq 'length' "$f")
  echo "$(basename $f .json): $count bad"
done
```

Expected: Per-entry bad-count printout. Entries with 0 can be skipped in Task 7.

(If `jq` is missing on Windows, use:
```bash
for f in pmid-candidates/performance/*.json; do node -e "console.log(require('./$f').length + ' bad in ' + process.argv[1])" "$(basename $f .json)"; done
```

- [ ] **Step 3: No commit (candidates are gitignored)**

```bash
git status
```

Expected: working tree clean of pmid-candidates/. Only any leftover changes from prior tasks.

---

## Task 7: Per-entry fix loop — AAS-ester cluster (~9 entries)

**Files:**
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/<each-entry>.js`

**FOR EACH AFFECTED ENTRY in cluster 1, repeat steps 1-5 below. Use the candidates JSON from Task 6 as input.**

- [ ] **Step 1: Read candidates JSON + entry file (per entry)**

For `testosterone-info` (example — repeat for each entry):

```bash
cat pmid-candidates/performance/testosterone-info.json
cat src/data/libraries/performance/entries/hu/testosterone-info.js | grep -A 4 "studies"
```

- [ ] **Step 2: Inline Claude makes per-PMID decisions (per entry)**

For each bad PMID in the JSON:
- If top candidate ratio ≥0.5 AND topic match obvious → ACCEPT (record as `oldPmid=newPmid:newTitle:newAuthors`)
- If multiple ≥0.3 ratio plausible → WebFetch top-2 abstracts via NCBI to disambiguate, then ACCEPT one
- If all candidates <0.3 ratio OR none topic-matching → augment query with `findings`+`population` tokens, re-run suggest. If still 0 → mark for INVESTIGATE.
- If INVESTIGATE still yields nothing → propose DELETE the study (add to SKIP_PMIDS.md in Task 11).

Build the `--replacements` string for the entry.

- [ ] **Step 3: Dry-run apply (per entry)**

```bash
node scripts/apply-pmid-fix.mjs --entry testosterone-info --replacements '<built-string>' --dry-run
```

Expected: 3 lang lines, each `would change N → M bytes` (byte-delta small, <500 per replacement).

- [ ] **Step 4: Apply for real + verify**

```bash
node scripts/apply-pmid-fix.mjs --entry testosterone-info --replacements '<built-string>'
node scripts/verify-pmids.mjs --entry testosterone-info
```

Expected: 
- apply script: `✅ All replacements applied`
- verify-pmids: `✅ All PMIDs verified.` for that entry.

- [ ] **Step 5: Commit per entry**

```bash
git add src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js
git commit -m "fix(v0.28): testosterone-info baseline-PMID fix (N/N)"
```

Replace `N/N` with the actual replacement count, e.g., `(3/3)` for 3 PMIDs fixed.

- [ ] **Step 6: Repeat for all remaining AAS-ester cluster entries**

Loop through: anavar-info, dianabol-info, superdrol, methylstenbolone, halotestin, equipoise, turinabol, proviron, dhb, methyltestosterone.

Skip any that have 0 bad PMIDs (already PASS).

After cluster done, end-of-session checkpoint:
```bash
git push origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib performance | tail -1
```

Expected: progress snapshot e.g., `❌ 250 issue(s) found.` (was 298).

---

## Task 8: Cluster 2 — SARM + designer (~11 entries)

**Files:**
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/<each>.js`

- [ ] **Step 1: Batch-generate candidates**

```bash
node scripts/pmid-suggest-batch.mjs --entry yk-11
node scripts/pmid-suggest-batch.mjs --entry s4
node scripts/pmid-suggest-batch.mjs --entry s23
node scripts/pmid-suggest-batch.mjs --entry ostarine
node scripts/pmid-suggest-batch.mjs --entry lgd-4033
node scripts/pmid-suggest-batch.mjs --entry rad-140
node scripts/pmid-suggest-batch.mjs --entry slu-pp-332
node scripts/pmid-suggest-batch.mjs --entry gw-501516
node scripts/pmid-suggest-batch.mjs --entry thg
```

(Skip `ment-19nor` and `ment-test` — already verified in v0.27 C1.)

- [ ] **Step 2: Inventory bad counts**

```bash
for f in pmid-candidates/performance/{yk-11,s4,s23,ostarine,lgd-4033,rad-140,slu-pp-332,gw-501516,thg}.json; do
  count=$(jq 'length' "$f")
  echo "$(basename $f .json): $count bad"
done
```

- [ ] **Step 3: Per-entry fix loop**

For each affected entry in this cluster, repeat the **5-step per-entry pattern from Task 7 Step 1-5** (read candidates JSON → inline decisions → dry-run → apply+verify → commit), swapping the entry slug.

Commit message pattern: `fix(v0.28): <slug> baseline-PMID fix (N/N)`

- [ ] **Step 4: End-of-cluster checkpoint**

```bash
git push origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib performance | tail -1
```

---

## Task 9: Cluster 3 — PCT/SERM/AI (~12 entries)

**Files:**
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/<each>.js`

- [ ] **Step 1: Batch-generate candidates**

```bash
node scripts/pmid-suggest-batch.mjs --entry clomid
node scripts/pmid-suggest-batch.mjs --entry nolvadex
node scripts/pmid-suggest-batch.mjs --entry raloxifene
node scripts/pmid-suggest-batch.mjs --entry exemestane
node scripts/pmid-suggest-batch.mjs --entry letrozol
node scripts/pmid-suggest-batch.mjs --entry anastrozol
node scripts/pmid-suggest-batch.mjs --entry gonadorelin
node scripts/pmid-suggest-batch.mjs --entry hcg-perf
node scripts/pmid-suggest-batch.mjs --entry hmg-perf
node scripts/pmid-suggest-batch.mjs --entry fsh-rec-perf
node scripts/pmid-suggest-batch.mjs --entry enclomiphene
node scripts/pmid-suggest-batch.mjs --entry kisspeptin-10
```

- [ ] **Step 2: Inventory + per-entry fix loop** (same pattern as Task 7-8)

- [ ] **Step 3: End-of-cluster checkpoint**

```bash
git push origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib performance | tail -1
```

---

## Task 10: Cluster 4-5 — Stim/fat-burner + Other performance (~24 entries)

**Files:**
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/<each>.js`

- [ ] **Step 1: Batch-generate cluster 4 (stim/fat-burner, 9 entries)**

```bash
node scripts/pmid-suggest-batch.mjs --entry clenbuterol
node scripts/pmid-suggest-batch.mjs --entry albuterol
node scripts/pmid-suggest-batch.mjs --entry yohimbine
node scripts/pmid-suggest-batch.mjs --entry dnp-info
node scripts/pmid-suggest-batch.mjs --entry eca-stack
node scripts/pmid-suggest-batch.mjs --entry super-shred
node scripts/pmid-suggest-batch.mjs --entry mirabegron
node scripts/pmid-suggest-batch.mjs --entry l-carnitine
node scripts/pmid-suggest-batch.mjs --entry bam15
```

- [ ] **Step 2: Per-entry fix loop for cluster 4** (swap entry slug, repeat Task 7 Step 1-5 per-entry pattern)

- [ ] **Step 3: Batch-generate cluster 5 (other performance, ~14 entries)**

```bash
node scripts/pmid-suggest-batch.mjs --entry hgh-info
node scripts/pmid-suggest-batch.mjs --entry epo-info
node scripts/pmid-suggest-batch.mjs --entry ru58841
node scripts/pmid-suggest-batch.mjs --entry finasteride
node scripts/pmid-suggest-batch.mjs --entry dutasteride
node scripts/pmid-suggest-batch.mjs --entry pregnenolone
node scripts/pmid-suggest-batch.mjs --entry dhea
node scripts/pmid-suggest-batch.mjs --entry mots-c
node scripts/pmid-suggest-batch.mjs --entry levothyroxine
node scripts/pmid-suggest-batch.mjs --entry liothyronine
node scripts/pmid-suggest-batch.mjs --entry 5-amino-1mq
node scripts/pmid-suggest-batch.mjs --entry cabergoline
node scripts/pmid-suggest-batch.mjs --entry bromocriptine
node scripts/pmid-suggest-batch.mjs --entry pramipexole
node scripts/pmid-suggest-batch.mjs --entry gestrinone
```

- [ ] **Step 4: Per-entry fix loop for cluster 5** (swap entry slug, repeat Task 7 Step 1-5 per-entry pattern)

- [ ] **Step 5: End-of-cluster checkpoint — performance lib should now be 100% PASS**

```bash
git push origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib performance
```

Expected: `✅ All PMIDs verified.` (lib-wide PASS).

If any entries still show issues, identify them and re-loop with Task 7 pattern.

---

## Task 11: Cluster 6 — Pharmaceutical lib (~12 affected entries)

**Files:**
- Modify: `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/<each>.js`

- [ ] **Step 1: Batch-generate candidates**

```bash
node scripts/pmid-suggest-batch.mjs --entry atorvastatin
node scripts/pmid-suggest-batch.mjs --entry rosuvastatin
node scripts/pmid-suggest-batch.mjs --entry bupropion
node scripts/pmid-suggest-batch.mjs --entry ciprofloxacin
node scripts/pmid-suggest-batch.mjs --entry doxycycline
node scripts/pmid-suggest-batch.mjs --entry amoxicillin
node scripts/pmid-suggest-batch.mjs --entry escitalopram
node scripts/pmid-suggest-batch.mjs --entry fluoxetine
node scripts/pmid-suggest-batch.mjs --entry modafinil
node scripts/pmid-suggest-batch.mjs --entry methylphenidate
node scripts/pmid-suggest-batch.mjs --entry isotretinoin
node scripts/pmid-suggest-batch.mjs --entry tretinoin
node scripts/pmid-suggest-batch.mjs --entry minoxidil
node scripts/pmid-suggest-batch.mjs --entry finasteride
node scripts/pmid-suggest-batch.mjs --entry tamoxifen
node scripts/pmid-suggest-batch.mjs --entry hydrocortisone
node scripts/pmid-suggest-batch.mjs --entry levothyroxin
node scripts/pmid-suggest-batch.mjs --entry liothyronine
node scripts/pmid-suggest-batch.mjs --entry metformin
node scripts/pmid-suggest-batch.mjs --entry empagliflozin
node scripts/pmid-suggest-batch.mjs --entry orforglipron
node scripts/pmid-suggest-batch.mjs --entry tadalafil
```

NOTE: `finasteride` and `liothyronine` exist in BOTH performance and pharmaceutical libs. `pmid-suggest-batch.mjs` checks the entry filter against ALL libs and writes to the lib-specific subfolder. Run twice with explicit lib filter if needed:
```bash
node scripts/pmid-suggest-batch.mjs --lib pharmaceutical --entry finasteride
node scripts/pmid-suggest-batch.mjs --lib pharmaceutical --entry liothyronine
```

- [ ] **Step 2: Per-entry fix loop** (swap entry slug, repeat Task 7 Step 1-5 per-entry pattern)

For each entry: read candidates JSON → decide → dry-run → apply → verify → commit.

NOTE for ambiguous entries (`finasteride`, `liothyronine`) that exist in BOTH pharmaceutical and performance libs: use the `--lib` flag explicitly with `apply-pmid-fix.mjs`:

```bash
node scripts/apply-pmid-fix.mjs --entry finasteride --lib pharmaceutical --replacements '<built>'
node scripts/apply-pmid-fix.mjs --entry liothyronine --lib pharmaceutical --replacements '<built>'
```

(`pmid-suggest-batch.mjs` also accepts `--lib --entry` together — the JSON output goes to `pmid-candidates/<lib>/<entry>.json`, so HU-search picks the right lib too.)

- [ ] **Step 3: SKIP_PMIDS.md updates (if any deletions occurred during cluster 1-6)**

If any DELETE-the-study cases happened, add entries to `docs/superpowers/SKIP_PMIDS.md` following the template format:

```markdown
### performance/<entry> — PMID <bad-pmid> DELETED

**Original cite:** <citedTitle>
**Reason:** <why>
**Commit:** <hash>
**Date:** 2026-05-25
```

Commit: `docs(v0.28): SKIP_PMIDS log for deleted studies`

- [ ] **Step 4: End-of-cluster checkpoint — both libs should now be 100% PASS**

```bash
git push origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib pharmaceutical
node scripts/verify-pmids.mjs --lib performance
```

Expected: Both `✅ All PMIDs verified.`

---

## Task 12: Pre-ship verification — full audit

**Files:** none modified, only verify scripts run.

- [ ] **Step 1: Run full verify-pmids on all 4 libs**

```bash
node scripts/verify-pmids.mjs --lib peptides
node scripts/verify-pmids.mjs --lib nootropics
node scripts/verify-pmids.mjs --lib performance
node scripts/verify-pmids.mjs --lib pharmaceutical
```

Expected: All 4 lines `✅ All PMIDs verified.` Exit codes all 0.

If peptides or nootropics show new issues → regression bug, investigate (apply-pmid-fix.mjs likely touched wrong lib).

- [ ] **Step 2: Validator + build**

```bash
node scripts/validate-library-meta.mjs
npm run build
```

Expected: 
- Validator PASS 4 lib × 189 entries.
- Build PASS, vendor chunk size unchanged (~165 KiB), PWA precache size delta <50 KiB.

- [ ] **Step 3: Bundle-size compare**

```bash
ls -la dist/assets/ | grep "index-" | head -5
```

Expected: Per-entry chunk sizes within ±5% of pre-task baseline.

- [ ] **Step 4: Lokál smoke (5 entries)**

Start dev server in background:
```bash
npm run dev &
sleep 4
```

Then in browser (or via curl HTML-only spot-check):
- http://localhost:5173/#entry/performance/testosterone-info → StudiesPanel: 8 studies render, each chip click-able, PubMed link valid
- http://localhost:5173/#entry/performance/yk-11 → StudiesPanel renders
- http://localhost:5173/#entry/performance/clenbuterol → StudiesPanel renders
- http://localhost:5173/#entry/pharmaceutical/atorvastatin → StudiesPanel: 7 studies render
- http://localhost:5173/#entry/pharmaceutical/tadalafil → StudiesPanel: 4 studies render

Verify each: no empty study card, no broken anchor, no 404 console error.

Kill dev server:
```bash
kill %1
```

(User may also verify in actual browser if preferred — this is the Tier-3 acceptance gate per spec §5.)

---

## Task 13: Merge, tag, push, verify Vercel deploy

**Files:**
- Modify: `master` branch via merge

- [ ] **Step 1: Switch to master and merge**

From main repo dir `e:/Website Biz/molekulax` (NOT the worktree):

```bash
git checkout master
git merge feat/v028-pmid-mega-fix --no-ff -m "merge: v0.28 PMID mega-fix (~330 baseline-PMID restored, 100% verify-pmids PASS)"
```

Expected: merge commit created. `git log --oneline | head -5` shows merge commit + feat-branch commits.

- [ ] **Step 2: Tag + push**

```bash
git tag v0.28-pmid-mega-fix
git push origin master --tags
```

Expected: push succeeds, tag `v0.28-pmid-mega-fix` on the merge commit.

- [ ] **Step 3: Poll Vercel for new bundle hash**

```bash
PREV_HASH=$(curl -s https://molekulax.vercel.app/ | grep -oE 'index-[A-Za-z0-9-]{8,}\.js' | head -1)
echo "Previous bundle: $PREV_HASH"
until [ "$(curl -s https://molekulax.vercel.app/ | grep -oE 'index-[A-Za-z0-9-]{8,}\.js' | head -1)" != "$PREV_HASH" ]; do
  sleep 15
  echo "Still old bundle, waiting..."
done
echo "New bundle live: $(curl -s https://molekulax.vercel.app/ | grep -oE 'index-[A-Za-z0-9-]{8,}\.js' | head -1)"
```

Expected: Loop exits within ~3-5 min when Vercel build completes. New bundle hash printed.

- [ ] **Step 4: Spot-check 3 known-fixed PMIDs in the live bundle**

Pick 3 PMIDs you replaced (e.g., atorvastatin MIRACL `11279053`, testosterone-info baseline-cross-cutting Bhasin `8637535`, yk-11 SARM safety review):

```bash
# Find the relevant per-entry chunk hash
curl -s https://molekulax.vercel.app/ | grep -oE 'assets/[^"]+\.js' | head -20

# Curl the specific chunk and grep for the new PMID
curl -s https://molekulax.vercel.app/assets/<atorvastatin-chunk>.js | grep -o '11279053' | head -3
```

Expected: Each new PMID present in the live bundle.

- [ ] **Step 5: Live entry smoke (5 entries via HTTP HEAD)**

```bash
for url in \
  https://molekulax.vercel.app/#entry/performance/testosterone-info \
  https://molekulax.vercel.app/#entry/performance/yk-11 \
  https://molekulax.vercel.app/#entry/performance/clenbuterol \
  https://molekulax.vercel.app/#entry/pharmaceutical/atorvastatin \
  https://molekulax.vercel.app/#entry/pharmaceutical/tadalafil; do
  echo "$url: $(curl -s -o /dev/null -w '%{http_code}' "$url")"
done
```

Expected: All 5 return `200`.

- [ ] **Step 6: Cleanup worktree**

```bash
git worktree remove .worktrees/feat-v028-pmid-mega-fix --force 2>&1 || echo "Windows file-lock OK — gitignored, next restart can rm -rf"
```

Expected: Either clean removal or Windows file-lock error (gitignored anyway — same pattern as v0.26, v0.27, v0.27.2).

---

## Task 14: Status + memory update + /handoff

**Files:**
- Modify: `MolekulaX_Statusz.md` (Obsidian, via /handoff)
- Modify: `MEMORY.md` + relevant `project_*.md` (auto-memory)
- Mirror plan: `MolekulaX_v028PmidMegaFix_Plan.md` (Obsidian)

- [ ] **Step 1: Mirror plan to Obsidian**

```bash
cp docs/superpowers/plans/2026-05-25-v028-pmid-mega-fix.md \
   "E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_v028PmidMegaFix_Plan.md"
```

(Already done during plan-writing if mirror was done early; re-copy ensures final state.)

- [ ] **Step 2: Update `project_molekulax.md` (auto-memory)**

Add a `🟢 v0.28 PMID Mega-Fix CLOSED 2026-05-25` line at the top status block. Update the `🔴 v0.28 backlog (KÖVETKEZŐ)` paragraph to reflect closure. Add new lessons:
- `[[Scripted_Candidate_Finder_Beats_Subagent_For_PMID]]` — NCBI esearch deterministic candidate-list eliminates hallucination risk entirely
- `[[Cluster_Order_Warm_Context_PMID_Reuse]]` — class-clustered execution allows cross-cutting PMID re-use (Bhasin/Pope/Hartgens-Kuipers re-cited 10+ times)

- [ ] **Step 3: Run /handoff**

This triggers the global slash command from `~/.claude/commands/handoff.md` and writes the session-block to `MolekulaX_Statusz.md`.

Expected: New session block at top of status file with:
- Session timestamp
- Summary of v0.28 ship (commit count, tag, bundle-inspect evidence)
- Technical changes (3 new scripts + ~47 entry updates)
- Lessons learned
- Next steps (Anekdota coverage + post-roadmap backlog unchanged)

- [ ] **Step 4: Final verify — live state matches status file**

```bash
git log --oneline | head -5
git tag | grep v0.28
node scripts/verify-pmids.mjs --lib performance | tail -1
node scripts/verify-pmids.mjs --lib pharmaceutical | tail -1
```

Expected: 
- Tag `v0.28-pmid-mega-fix` exists.
- Both libs `✅ All PMIDs verified.`
- Status file references the correct commit hash.

---

## Acceptance Gates (recap from spec §5)

**HARD (all required for ship):**
- ✅ verify-pmids 4 libs all `✅ All PMIDs verified.`
- ✅ validate-library-meta.mjs PASS 4 lib × 189 entries
- ✅ npm run build PASS, bundle size delta <50KiB
- ✅ 5-entry lokál smoke StudiesPanel render PASS
- ✅ Vercel deploy LIVE confirmed (new bundle hash + 3-PMID curl spot-check)

**SOFT (documented, not blocker):**
- 📝 SKIP_PMIDS.md final state (0-3 entries acceptable)
- 📝 Per-entry commit count ~47 (acceptable 40-60)
- 📝 Cross-cutting PMID replacements documented in commit messages

---

## Multi-Session Resume Protocol

**End-of-session:**
```bash
git push origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib performance | tail -1
node scripts/verify-pmids.mjs --lib pharmaceutical | tail -1
# Run /handoff
```

**Start-of-session:**
```bash
cd .worktrees/feat-v028-pmid-mega-fix/
git pull origin feat/v028-pmid-mega-fix
node scripts/verify-pmids.mjs --lib performance | tail -1
node scripts/verify-pmids.mjs --lib pharmaceutical | tail -1
git log --oneline | head -10   # find last completed entry
```

Resume from the next cluster/entry where the last commit left off.
