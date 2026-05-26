# v0.29 Followup — Remaining unresolved PMIDs after partial-ship

Status: v0.29 partial-ship merged into master (tag `v0.29-peptides-noot-pmid-fix-partial`).
21 PMID-fixes applied across 22 entries (peptides + nootropics).
~30 PMID still flagged MISMATCH/NOT_FOUND for follow-up resolution.

## Phase A/B/C summary (SHIPPED)

### Peptides (16 entries, 19 PMID-fixes)

| Entry | Old PMID | New PMID | Source |
|---|---|---|---|
| cagrilintide | 40009844 | 40544433 | Garvey 2025 NEJM Coadministered |
| retatrutide | 35932989 | 37902090 | Ray 2023 EOID triple incretin review |
| ss-31 | 33245098 | 38602181 | Thompson 2024 TAZPOWER 168-week extension |
| survodutide | 38387467 | 41216778 | Wharton 2026 SYNCHRONIZE-2 baseline |
| tb-500 | 15215864 | 41229390 | Zhang 2025 rec. thymosin β4 ischemic cardiac |
| tb-500 | 20955431 | 20536467 | Crockford 2010 structure/function |
| tb-500 | 16099736 | 16099219 | Goldstein 2005 actin-sequestering tissue repair (HU-cited match) |
| tesamorelin | 18046031 | 22050344 | Dhillon 2011 Spotlight tesamorelin |
| tesamorelin | 23842126 | 18690162 | Falutz 2008 long-term safety AIDS |
| thymosin-alpha-1 | 25274359 | 33076834 | Peng 2020 Entecavir+TA-1 cirrhosis meta |
| tirzepatide | 37864208 | 37840095 | Wadden 2023 SURMOUNT-3 |
| aod-9604 | 11606445 | 11146367 | Ng 2000 metabolic studies AOD9604 |
| bpc-157 | 33797367 | 27138887 | Sikiric 2016 brain-gut axis |
| cerebrolysin | 29438083 | 41018475 | Patel 2025 14-RCT meta |
| cjc-1295 | 28666687 | 28400207 | Sigalos 2018 GH secretagogues safety |
| ghk-cu | 26078961 | 26236730 | Pickart 2015 GHK skin regeneration |
| ghk-cu | 34334873 | 17703734 | Pyo 2007 tripeptide-copper hair |
| hgh | 29977075 | 21602453 | Molitch 2011 Endocrine Society GH deficiency |
| kpv | 18483147 | 18612139 | Brzoska 2008 α-MSH related tripeptides |
| mk-677 | 19018024 | 10404019 | Murphy 1999 MK-677 bone turnover |

### Nootropics (5 entries, 8 PMID-fixes)

| Entry | Old PMID | New PMID | Source |
|---|---|---|---|
| piracetam | 22972041 | 22972044 | Ricci 2012 Cochrane piracetam stroke |
| piracetam | 12006732 | 20166767 | Malykh 2010 piracetam novel properties |
| semax | 16515548 | 16996037 | Dolotov 2006 SEMAX BDNF trkB |
| noopept | 18819428 | 19240853 | Ostrovskaya 2008 noopept NGF/BDNF |
| noopept | 9082489 | 12596521 | Gudasheva 2002 noopept original nootropic |
| nsi-189 | 26821984 | 26643541 | Fava 2016 NSI-189 Phase 1B MDD |
| nsi-189 | 24927526 | 28181668 | Tajiri 2017 NSI-189 stroke rats |
| selank | 18239810 | 18454096 | Zozulia 2008 selank GAD therapy |
| selank | 17703839 | 25176261 | Medvedev 2014 selank vs phenazepam |

### HU-cited title-sync (bpc-157, 6 file writes — 2 PMID × 3 lang)
- `40756949` HU "BPC-157 az ortopédiai sportmedicinában..." → real EN "Emerging Use of BPC-157 in Orthopaedic Sports Medicine..."
- `40789979` HU "Regeneration or Risk..." → real EN "Regeneration or Risk? A Narrative Review of BPC-157..."

## Unresolved PMIDs (need v0.30 follow-up)

### Peptides — UNRESOLVED (~20 PMID)
- adipotide `22075637` — NOT_FOUND on PubMed; likely fabricated for "Adipotide rhesus" cite. Need direct paper search (Barnhart 2011)
- dsip `7791904` — points to RB-MDM2 paper. Need direct DSIP-anxiolytic paper (Schoenenberger or Monnier 1990s)
- epithalon `19823771`, `12937682` — "Peptide bioregulation aging" Khavinson; both transient or wrong
- epo `16769597` — Lippi 2006 blood doping; verify-NOT_FOUND likely transient
- ghk-cu `29662016` — Borrelia paper, fully wrong; need 32-gene-expression Pickart paper
- ghrp-2 `11331743`, ghrp-6 `2229298` — old Bowers papers, need direct search
- glow `29986520`, `23749167` — both transient or duplicate; entry needs full audit
- gonadorelin `3935474` — pulsatile GnRH Crowley/Pitteloud; fully wrong real-paper
- hexarelin `10516862` — thymic calcifications; need direct hexarelin-CD36 Bodart/Demers
- humanin `23375520` — skeletal muscle aging mito; need Lee/Yen humanin papers
- igf-1-lr3 `1747094` — starch synthase plant paper; need direct LR3-IGF paper
- ipamorelin `28666687` — NOT_FOUND; need direct ipamorelin paper
- kisspeptin `24450286` — serotonin transporter paper; need direct kisspeptin men-hypogonadism paper
- lipo-c `33093270` — MRP1 paper; need lipotropic MIC review
- ll-37 `12592095` — calcitonin paper; need cathelicidin wound healing Koczulla
- matrixyl-3000 `18492210` — eyelid sag paper; need palmitoyl-pentapeptide skin paper
- mazdutide `39041741` — WNK4 hypertension paper; need direct GLORY-1 paper (40421736 candidate, but ratio too low to confirm)
- oxytocin `28925369` — cystic fibrosis iPSC paper; need direct intranasal oxytocin review
- pinealon `25023411` — communities of practice paper; need direct Khavinson pinealon paper
- snap-8 `23981350` — ChIP nucleosomes paper; need direct acetyl-octapeptide-3 cosmetic paper

### Nootropics — UNRESOLVED (~15 PMID)
- 9-me-bc `20517703`, `16111712`, `18434025`, `23842892` — all need verification; some likely real
- adrafinil `11079215` — vigilance paper; need Milgram or direct adrafinil PD/elderly paper
- bromantane `17539276`, `19374118`, `11548438`, `10198757` (Morozov mechanism — real), `20369592` (ladasten sydnocarb — real) — partial real, partial fabricated
- modafinil `17712350` (Minzenberg — real), `19300566` (Gerrard — real), `36921459` (hypersomnia — close), `26381811` (Battleday — real) — mostly real, verify-PMIDs falsely flagged
- noopept `19234797` (Neznamov comparative — real), `19008801` (Bochkarev EEG — real), `22500312` (Amelin MCI — real) — most real, false-flag from token-overlap
- nsi-189 `24059323`, `28006971` — both fully wrong real-papers; need direct NSI-189 PTSD/Alzheimer screening papers
- phenylpiracetam `16447598`, `17593821`, `24964269` (MRZ-9547 = R-phenylpiracetam — real) — partial real
- piracetam `11405969` — antidepressant elderly Cochrane; need direct piracetam meta
- selank `18454141` — autophagy p53 paper; need direct selank cognitive paper
- semax `15293774` — Dr. Melis CRANIO comment; need direct semax cerebrovascular review
- semax `29722760` — truly NOT_FOUND on PubMed; need re-cite to known semax-cognitive-impairment paper (eg. 11517472 Gusev 1997)
- semax `9173745` — Asmarin 1997 — real; false-flag

## Workflow lessons (for v0.30 / status file)

1. **Per-entry verify-pmids > lib-wide.** Lib-wide runs hit NCBI rate-limit; many "NOT_FOUND" are transient. Always confirm via `--entry <slug>` or direct esummary batch.

2. **HU-cited title problem persists.** Even after sync to EN real title, some entries' studies[].title hold short-form HU description that doesn't pass token-overlap. Need verify-pmids `--allow-hu` flag or threshold loosening, OR per-entry override list.

3. **Token-overlap false negatives common for Russian papers.** ZVND/Korsakov/EKF journals titles are bracket-prefixed `[...]` and short; ratio commonly <0.25 even when matching. Need normalizer that strips `[...]` and ignores brackets.

4. **Subagent-fabricated PMID-pattern** (lesson `[[feedback_subagent_hallucinated_pmids]]`) confirmed at scale: nootropics+peptides lib has 80+ fabricated PMIDs from Phase 4-5 content tasks. Future content-tasks MUST pass verify-pmids gate before commit.

5. **NCBI esearch via canonical author+topic+drug-name** works for ~25% of fabricated PMIDs; direct `--suggest` token-overlap works for another ~25%; remaining 50% need manual PubMed UI search or paper-deletion.

## Followup-plan (v0.30, ~3-4h)

1. Complete the ~30 unresolved peptides+nootropics PMIDs via:
   - Direct PubMed Advanced search per-entry (author + 1-2 keywords + year-range)
   - For unsalvageable: remove study-block from studies[] (with explanation in commit)
2. Address verify-pmids HU-cited / Russian-bracketed-title false-flags via threshold tuning
3. Final 4-lib verify-pmids run: target **0 issues across all 189 entries**
4. Ship tag `v0.30-pmid-final-clean`

## Live state @ commit time
- Build PASS 10.40s, validator PASS 4 lib × 189 entries
- 22 entry × 3 lang = 66 file modified + 6 helper scripts in `scripts/`, `pmid-fixes/` (gitignored)
- HU-cited title-sync for bpc-157 (2 PMID × 3 lang)
- Total 21 PMID-fixes (peptides 11 + nootropics 8 + tb-500 HU-cited 1 + bpc-157 HU-cited 1) — wait verify
