# v0.28 — Performance + Pharmaceutical baseline-PMID mega-fix

**Status:** Spec draft (awaiting user review)
**Owner:** kriso + Claude (inline-execution + scripted candidate-finder)
**Spec date:** 2026-05-25
**Target ship-tag:** `v0.28-pmid-mega-fix`
**Estimated effort:** ~6-8 hours net, 2 sessions
**Risk profile:** Low (data-only commits, no adapter/JSX/state-logic change)

---

## 1. Goal

Bring the `performance` and `pharmaceutical` libraries to **100% PASS** on `verify-pmids.mjs` build-gate by replacing the **~330 hallucinated baseline-PMID citations** with NCBI eutils-verified equivalents. Restore scientific citation integrity site-wide.

### Background

The v0.27 Phase C1 baseline-PMID fix established the workflow (verify → WebFetch → replace → re-verify) but was scoped to only 6 entries (Round 3+4 of v0.27 expansion). A full lib-scan revealed:

- **Pharmaceutical:** 66 OK + **32 issues** (22 entries, ~33% bad rate)
- **Performance:** 67 OK + **298 issues** (64 entries, ~81% bad rate)
- **Total:** ~330 bad PMIDs across 47 entries

The hallucinations originate from earlier RICH content-expansion subagent batches (v0.5-v0.10 era pre-`verify-pmids.mjs` build-gate). See `[[feedback_subagent_hallucinated_pmids]]`.

This phase eliminates that tech-debt in a single mega-PR.

---

## 2. Scope

### In scope

- **Performance library** — all 64 entries scanned, **~298 bad PMIDs across ~35 affected entries** (the other ~29 entries already pass verify-pmids; most v0.27 C1-touched entries + minor stim entries are clean).
- **Pharmaceutical library** — all 22 entries scanned, **~32 bad PMIDs across ~12 affected entries**.
- **Total affected:** ~47 entries out of 86 (~55%); ~330 PMID-replacements total. Commits only on affected entries.
- **Cross-library regression check** — peptides + nootropics libs stay 100% PASS (no accidental cross-cutting changes).
- **Tooling extension** — `verify-pmids.mjs --suggest` flag + new `pmid-suggest-batch.mjs` candidate-finder + new `apply-pmid-fix.mjs` atomic file-rewrite helper. Reusable in v0.29+ peptide/nootropic baseline-fix passes.
- **Documentation** — `SKIP_PMIDS.md` for any unresolvable PMIDs (study deleted instead of replaced, last resort).

### Out of scope

- Entry-level content changes (`whatIs`, `mechanism`, `dosing`, `quickStart`, etc.). Only `studies[]` blocks touched.
- Adapter / EntryDetail / Calculator / variant-shape changes. Pure data-only.
- New studies. We replace bad citations with VERIFIED equivalents to the same claim. If a study cannot be verified at all (rare), we DELETE that study entry — we do NOT invent new ones.
- Translation of NCBI titles. PubMed titles stay English-verbatim across HU/EN/PL files (international scientific convention).
- Cite-formatting standardization (`firstAuthor et al.` vs `Author1, Author2` etc.). Keep existing format per-entry; only swap the bad fields.
- Performance/Lighthouse work, image polish, anekdota coverage — separate backlog items.

---

## 3. Architecture

### Three new scripts (all under `scripts/`)

#### 3.1 `verify-pmids.mjs --suggest` (extension to existing build-gate)

**Current behavior:** scans all `studies[]` PMIDs, verifies via NCBI eutils esummary, flags MISMATCH/NOT_FOUND, exits 1 if any.

**New `--suggest` flag:** for each bad PMID found, additionally call NCBI esearch with tokenized `citedTitle` (stopwords removed, ≥4-char tokens), fetch top-8 candidates via esummary-bulk, compute token-overlap ratio for each candidate, sort desc.

**Output:** still per-PMID console line + final summary, but bad-PMIDs get a 5-candidate block printed below them.

```
❌ performance/clenbuterol PMID 18596553 MISMATCH
   cited: "Effects of clenbuterol on skeletal muscle..."
   real:  "Outcomes after pediatric cardiac transplant..."
   candidates:
     PMID 8773451  ratio 0.72  "Clenbuterol effects on skeletal muscle in humans"
     PMID 12047941 ratio 0.58  "Beta-2 agonists and muscle hypertrophy: clenbuterol"
     PMID 9387841  ratio 0.45  "Anabolic effects of clenbuterol in athletes"
     ...
```

#### 3.2 `pmid-suggest-batch.mjs` (new, machine-readable wrapper)

**Purpose:** Same candidate-search as `--suggest`, but writes JSON output to `pmid-candidates/<lib>/<entry>.json` (gitignored) for inline-Claude consumption with warm context.

**CLI:**
```bash
node scripts/pmid-suggest-batch.mjs --entry <slug>
node scripts/pmid-suggest-batch.mjs --lib <id>     # all entries in lib
```

**Output JSON shape:**
```json
[
  {
    "badPmid": "18596553",
    "citedTitle": "Effects of clenbuterol on skeletal muscle...",
    "citedAuthors": "Maltin et al.",
    "citedFindings": "Hypertrophy seen at 80mcg/day",
    "citedPopulation": "Human, n=12, 4 weeks",
    "candidates": [
      { "pmid": "8773451", "title": "...", "authors": "...", "year": 1996, "ratio": 0.72 },
      { "pmid": "12047941", "title": "...", "authors": "...", "year": 2002, "ratio": 0.58 }
    ]
  }
]
```

**Rate-limit handling:** 100ms sleep between esearch calls, 200ms between esummary bulk-calls (NCBI fair-use without API key: max 3 req/s). Sequential per-entry (no parallel batches).

**Retry policy:** 3 retries with exponential backoff (1s/3s/9s) on network errors. Persistent fail writes `error: "NETWORK"` to JSON.

#### 3.3 `apply-pmid-fix.mjs` (new, atomic per-entry rewrite)

**Purpose:** Apply a list of `(oldPmid → newPmid, newTitle, newAuthors)` replacements to all 3 lang files of one entry, atomically.

**CLI:**
```bash
node scripts/apply-pmid-fix.mjs --entry <slug> \
     --replacements '18596553=8773451:Clenbuterol effects...:Maltin et al.;...'
```

**Algorithm per lang-file:**
1. `fs.readFileSync(entries/<lang>/<slug>.js)` UTF-8.
2. For each replacement:
   - String-replace the `pmid: "<old>"` token with `pmid: "<new>"`.
   - String-replace the cited `title: "..."` value (try-each-lang title-variants if HU/PL).
   - String-replace the cited `authors: "..."` value (lang-agnostic, NCBI verbatim).
3. Validate `before !== after` per replacement; exit 1 if any replacement no-op'd.
4. `fs.writeFileSync` UTF-8 (NO Edit tool — avoids `[[feedback_edit_tool_quote_corruption]]`).

**Triplet shape handling:** Autodetects per-file shape. If `title` is `{hu, en, pl}` triplet, replaces only the active lang key. If flat-string, replaces the string directly. Same for `authors`.

**Lang-specific title policy:** All 3 lang files get the **original English PubMed title verbatim**. International scientific convention — most PMID citations stay English even in HU/PL contexts. (We don't translate study titles.)

**Dry-run mode:** `--dry-run` flag prints diff to stdout, no file writes. Used for first 3 entries to verify script correctness before bulk-execution.

### Workflow per entry

```
node scripts/verify-pmids.mjs --entry <slug>           # 1. baseline scan
node scripts/pmid-suggest-batch.mjs --entry <slug>     # 2. candidate search
                                                       # 3. inline decision (Claude reads candidates JSON)
node scripts/apply-pmid-fix.mjs --entry <slug> \       # 4. apply atomically
     --replacements '<list>'
node scripts/verify-pmids.mjs --entry <slug>           # 5. verify-gate
git add src/data/libraries/<lib>/entries/{hu,en,pl}/<slug>.js
git commit -m "fix(v0.28): <slug> baseline-PMID fix (N/N)"   # 6. commit
```

### Class-clustering execution order (warm-context preservation)

Per-entry execution proceeds in clusters to maximize warm context for cross-cutting PMID re-use. **The cluster list below shows the EXECUTION-ORDER (which clusters to tackle first/second/etc.), not the affected-entry list — only entries with verify-pmids issues get fix-commits.** Pre-scan `verify-pmids --lib X --entry <slug>` filters affected entries per cluster.

1. **AAS-ester cluster** (~15 entries) — testosterone-info enriched in v0.27 C1 → trenbolone-info, nandrolone-info, masteron, anavar-info, primobolan, dianabol-info, superdrol, methylsten, halotestin, equipoise, deca, npp, turinabol, proviron, dhb, methyltestosterone. Cross-cutting key papers (already verified in v0.27 C1): Bhasin 1996 (PMID 8637535), Pope-Kanayama, Hartgens-Kuipers (PMID 15248788), Schänzer 1996 (PMID 8674183).
2. **SARM + designer cluster** (~11 entries) — yk-11, s4, s23, ostarine, lgd-4033, rad-140, ment-19nor, ment-test, slu-pp-332, gw-501516, thg.
3. **PCT / SERM / AI cluster** (~10 entries) — clomid, nolvadex, raloxifene, exemestane, letrozol, anastrozol, gonadorelin, hcg-perf, hmg-perf, fsh-rec-perf, enclomiphene, kisspeptin-10.
4. **Stim / fat-burner cluster** (~9 entries) — clenbuterol, albuterol, yohimbine, dnp-info, eca-stack, super-shred, mirabegron, l-carnitine, bam15. (`ephedrine` already deleted in v0.27.6, NOT included.)
5. **Other performance** (~15 entries) — hgh-info, epo-info, ru58841, finasteride (perf), dutasteride, pregnenolone, dhea, mots-c, levothyroxine (perf), liothyronine (perf), 5-amino-1mq, cabergoline, bromocriptine, pramipexole, gestrinone.
6. **Pharmaceutical cluster** (last, 22 entries) — atorvastatin, rosuvastatin, bupropion, ciprofloxacin, doxycycline, amoxicillin, escitalopram, fluoxetine, modafinil, methylphenidate, isotretinoin, tretinoin, minoxidil, finasteride (pharma), tamoxifen, hydrocortisone, levothyroxin (pharma), liothyronine (pharma), metformin, empagliflozin, orforglipron, tadalafil.

### Branch + worktree model

- Worktree: `.worktrees/feat-v028-pmid-mega-fix/`
- Branch: `feat/v028-pmid-mega-fix`
- Per-entry commit (target 47, acceptable 40-60).
- End-of-session: `git push origin feat/v028-pmid-mega-fix`.
- Multi-session resume: `git pull`, then `verify-pmids --lib X | tail -1` to identify resume-point.
- Final: merge to master + tag `v0.28-pmid-mega-fix` + push origin master+tags.

---

## 4. Data flow + error handling

(See §3 architecture for the 6-step per-entry flow.)

### Error handling matrix

| Failure mode | Detection | Recovery |
|---|---|---|
| NCBI esearch network err / rate-limit | `pmid-suggest-batch.mjs` catches `fetch` error | Retry 3× exp backoff (1s/3s/9s). Persistent fail → `error: NETWORK` in JSON, skip entry, retry-pass later. |
| No candidate ≥0.3 ratio | Empty candidates array | Mark `INVESTIGATE`. Inline Claude reads cited `findings`+`population` for keyword-augmented WebFetch. Last resort: DELETE the study (document in SKIP_PMIDS.md). |
| Apply-script string-replace fail | `apply-pmid-fix.mjs` checks `before !== after` per replacement | Exit 1, file untouched. Inline Claude inspects entry shape (pmid: 123 vs pmid: "123") and either fixes script regex or hand-edits via Write tool. |
| Triplet shape mismatch | Lang-A flat string, Lang-B triplet `{hu,en,pl}` | Apply-script autodetects shape per-file via `typeof === 'string'`. Triplet branch sets only the active lang key. |
| Verify-gate fails post-apply | Step 5 still shows MISMATCH | `git checkout -- src/data/.../*<slug>*`, mark `RETRY` in candidates JSON, increment retry-counter. After 3 retries → defer to manual investigation. |
| NCBI returns the SAME bad PMID as a "candidate" | Top candidate = oldPmid | Filter out in `pmid-suggest-batch.mjs` (exclusion list = current bad PMIDs). |
| PMID exists but cite-context is wrong (e.g., observational vs RCT) | Inline Claude WebFetch reads abstract | Reject candidate, fall back to next. Update `findings`/`population` strings if needed (rare). |
| Triplet content language drift (HU/PL translated titles) | Lang-files have non-English title strings | Apply-script per-lang policy: all 3 lang files get English PubMed title verbatim. |
| Session-limit hit mid-task | Anthropic Pro session-limit | `git add -A && git commit -m "wip: <slug> <stage>"` + push. Next session: `git pull`, `git log --oneline`, continue from last entry. |

---

## 5. Acceptance gates

### HARD gates (all required)

- ✅ `verify-pmids --lib performance` → 0 issues
- ✅ `verify-pmids --lib pharmaceutical` → 0 issues
- ✅ `verify-pmids --lib peptides` → 0 issues (regression)
- ✅ `verify-pmids --lib nootropics` → 0 issues (regression)
- ✅ `validate-library-meta.mjs` → PASS 4 lib × 189 entries
- ✅ `npm run build` → PASS, bundle vendor-chunk unchanged, PWA precache delta <50KiB
- ✅ Tier-3 lokál smoke 5 entries (testosterone-info, yk-11, clenbuterol, atorvastatin, tadalafil) StudiesPanel render PASS
- ✅ Vercel deploy LIVE confirmed (new bundle-hash + curl spot-check 3-5 known-fixed PMIDs)

### SOFT gates (documented, not ship-blocker)

- 📝 `SKIP_PMIDS.md` final state: 0-3 deleted-study cases acceptable
- 📝 Per-entry commit count: target 47, acceptable 40-60
- 📝 Cross-cutting PMID-replacements (Bhasin/Pope/Hartgens-Kuipers et al.) documented in commit messages

### ZERO-tolerance fail-modes (immediate rollback)

- ❌ Build fail post-commit → `git reset --hard HEAD~1`, debug, retry
- ❌ Validator fail post-commit → same
- ❌ verify-pmids shows MISMATCH on a supposedly-fixed entry → investigate missed lang (apply-script bug)
- ❌ Lang-file byte-size drop >50% (post-commit vs pre-commit, `git diff --stat`) → string-replace catastrophe, rollback + investigate
- ❌ Vendor-chunk size delta >5% → suggests accidental import shift, investigate

---

## 6. Risk register (top 7)

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| NCBI esearch returns 0 candidates for niche topics (ru58841, slu-pp-332, designer compounds) | Medium | Medium | Augmented query: tokenize `findings`+`population` too. Last resort: manual WebFetch search. Document SKIP_PMIDS. |
| Cross-cutting PMID (1 paper cited in 5+ entries) → cascading replace | High | Low | v0.27 C1 precedent. Commit per-entry, same new PMID across cluster. Document in spec §References. |
| Triplet shape regression in HU/EN/PL title-replacement | Low | Medium | `apply-pmid-fix.mjs` autodetects shape. Manual diff-check first 3 entries before bulk-execution. |
| Session-limit hit mid-cluster | Medium | Low | Per-entry commit makes resume trivial. WIP-commit for partial-cluster mid-flight. |
| NCBI eutils rate-limit (3 req/s) | Low | Low | 100ms sleep + sequential per-entry. Worst case ~150 sec total per lib-scan. |
| Apply-script string-replace fail on edge entry | Low | Low | Script exits non-zero, file untouched. Hand-edit via Write tool. |
| Subagent-hallucination risk creeping back via "let me search NCBI for you" temptation | Medium | High | **POLICY: No subagent involvement.** All NCBI calls deterministic via scripts. All Edit decisions inline. Enforce via spec + plan checkpoints. |

---

## 7. Multi-session resume protocol

### End-of-session (required steps)

1. `node scripts/verify-pmids.mjs --lib performance | tail -1` — progress snapshot
2. `node scripts/verify-pmids.mjs --lib pharmaceutical | tail -1` — progress snapshot
3. `git push origin feat/v028-pmid-mega-fix`
4. `/handoff` — Obsidian status update with "v0.28 in progress — X/47 entries done" indicator

### Start-of-session (required steps)

1. Read `MolekulaX_Statusz.md` (top 5 sessions, limit:400)
2. `git fetch origin && git checkout feat/v028-pmid-mega-fix && git pull`
3. `verify-pmids --lib performance | tail -1 && verify-pmids --lib pharmaceutical | tail -1` — resume-point check
4. Resume per-entry loop from last incomplete cluster

---

## 8. References

### v0.27 C1 cross-cutting PMID baseline (already verified, candidates for re-use)

- **Bhasin 1996** PMID **8637535** — testosterone supraphysiologic doses NEJM
- **Hartgens-Kuipers 2004** PMID **15248788** — AAS effects Sports Med (NOT 15233599)
- **Schänzer 1996** PMID **8674183** — AAS metabolism (NOT 8616181)
- **Hartgens BJSM** PMID **15155420** — AAS cardiovascular
- **Rahnema 2014** PMID **24636400** — AAS hypogonadism
- **Bispo 2019** PMID **19533818** — trenbolone cardiomyopathy
- **Baggish 2017** PMID **20424234** — LV function AAS
- **Sundaram 1993** PMID **8489761** — MENT pharmacology
- **Anderson 1999** PMID **10522995** — MENT mood
- **Suvisaari 1997** PMID **9194649** — MENT PK
- **Beri 1998** PMID **9879986** — MENT estrogenic
- **Nomura 1971** PMID **5172404** — Mastisol

### External APIs

- NCBI eutils esearch: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi`
- NCBI eutils esummary: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi`
- Fair-use: 3 req/s without API key, 10 req/s with API key (not needed for this scope).

### Related specs / docs

- v0.27 Phase C1 baseline-PMID fix (12 PMID + 2 cross-cutting, 6 entries) — `4564a0c` precedent commit.
- v0.23.1 PMID-fix (10 hallucinated peptide PMIDs) — original `verify-pmids.mjs` introduction.
- `[[feedback_subagent_hallucinated_pmids]]` — root cause of baseline tech-debt.
- `[[feedback_verify_pmids_build_gate]]` — existing build-gate documentation.
- `[[feedback_edit_tool_quote_corruption]]` — why apply-script uses fs.readFileSync/writeFileSync.

### Obsidian mirror

- `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_v028PmidMegaFix_Spec.md` (this file mirrored)
- Plan will mirror to `MolekulaX_v028PmidMegaFix_Plan.md` after writing-plans skill.
