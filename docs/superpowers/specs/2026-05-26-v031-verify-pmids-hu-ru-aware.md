# v0.31 — verify-pmids HU/RU-aware false-positive handling

**Dátum:** 2026-05-26 · **Tag-target:** `v0.31-verify-tooling` · **Becsült ülés:** 1 (single session, post-roadmap mode)

---

## 1. Mit

A `scripts/verify-pmids.mjs` enhanced HU-cited title + Russian-bracketed title detection: ezekre a cited-title-ekre a token-overlap MISMATCH-jelölés helyett új köztes `MAYBE_FP_HU` / `MAYBE_FP_RU` státusz, manual-review-flag-ként. Új `--strict` CLI flag MAYBE_FP-et MISMATCH-nek számolja exit-code szempontjából.

## 2. Miért

A v0.29-v0.30 PMID-mega-fix session-ekben **13+ entry-n** false-MISMATCH-flag jelent meg HU-cited vagy Russian-bracketed PubMed-title-eken, ami **manuális triage-ot követelt minden esetben**:
- HU-cited (bpc-157 × 2, ghk-cu × 3, tb-500, ipamorelin, sermorelin, cjc-1295-ipamorelin, modafinil, phenylpiracetam, semax, bromantane × 2) — `[áéíóöőúüű]`-karakteres cited-title vs. EN PubMed-title token-overlap ratio universally <0.25 (sokszor 0.0)
- Russian-bracketed (selank × 2, semax × 2, bromantane × 2, noopept × 2) — `[Effects of...]` típusú russian-bracketed cited-title szintén <0.25 ratio EN-real-title-lel

A workflow-overhead `~1 perc / entry` triage-volt, fragile (subagent-ek false-flag-et fabrikációnak hihetnek), és context-burning. A `[[feedback_hu_cited_title_false_positive]]` + `[[V030_Token_Overlap_HU_Russian_False_Flags_Universal]]` memóriák már rögzítették hogy ez **systematic**, NEM individual edge-case.

## 3. Hogy

### 3.1 Új helper fn (`isHuRuTitle`) a normalize-pipeline-ban

```js
function isHuRuTitle(s) {
  if (!s || typeof s !== 'string') return null
  if (/[áéíóöőúüű]/i.test(s)) return 'hu'
  if (/^\[.+\]$/.test(s.trim())) return 'ru'
  return null
}
```

- **HU detect:** legalább egy HU-diacritic karakter (`áéíóöőúüű`, case-insensitive). A v0.30 sample-en mind a 13 HU-cited title >1 diacritic-ot tartalmazott; 1-karakter küszöb biztonságos lower-bound.
- **RU detect:** cited-title pontosan `[`-tal kezdődik ÉS `]`-tal végződik (trim után). Részleges bracket (pl. "Effects of [GHK-Cu] in...") NEM trigger — szándékos, hogy ne over-flag-eljen normal EN-titles-on.

### 3.2 5-állapotú status-rendszer

```
✅ OK              — ratio ≥ 0.25 (EN-EN), vagy HU/RU-detect + ratio ≥ 0.10
⚠️  MAYBE_FP_HU    — HU-detect + ratio < 0.10  (manual review needed)
⚠️  MAYBE_FP_RU    — RU-detect + ratio < 0.10  (manual review needed)
❌ MISMATCH        — non-HU/RU cited + ratio < 0.25  (fabrikált)
❌ NOT_FOUND       — PMID nem létezik
```

**Logika a main-loop-ban (line 147 körül):**
```js
const lang = isHuRuTitle(study.title)
const threshold = lang ? 0.10 : 0.25
const ratio = overlapRatio(study.title, result.title)

if (ratio >= threshold) {
  // OK
} else if (lang) {
  // MAYBE_FP_HU / MAYBE_FP_RU
} else {
  // MISMATCH (mint eddig)
}
```

### 3.3 Exit-code szabály

- **Default (no flag):** MISMATCH + NOT_FOUND → exit 1; MAYBE_FP-on → **exit 0** (nem blockol). Az issues-summary-ban szerepel külön szekcióval ("MAYBE_FP_HU/RU items (manual review)").
- **`--strict` flag:** MAYBE_FP_HU + MAYBE_FP_RU → exit 1 is. Build-gate-ek + pre-commit-hooks használhatják.

### 3.4 Új CLI flag

```
node scripts/verify-pmids.mjs [--lib <id>] [--entry <slug>] [--suggest] [--strict]
```

`--strict` opt-in. Backward-compatible: a régi MISMATCH-detect változatlan EN-cited title-eken.

### 3.5 Issues-summary kimenet (line 174-179)

Strukturált per-status grouping:
```
❌ 3 issue(s) found:
  MISMATCH (1):
    peptides/example PMID 12345678
  NOT_FOUND (1):
    nootropics/example2 PMID 99999999

⚠️  2 MAYBE_FP item(s) — manual review:
  MAYBE_FP_HU (1):
    peptides/<example> PMID <NNNN>  (HU-cited title, ratio 0.05)
  MAYBE_FP_RU (1):
    nootropics/<example> PMID <NNNN>  (RU-bracketed, ratio 0.08)
```

### 3.6 `--suggest` mode interaction

A `suggestMode` ágban (line 133-144, 153-164) MAYBE_FP-on **NE adjon candidate listát**, mert ezek nem fabrikáltak — csak HU-title. Suggest mode csak MISMATCH+NOT_FOUND-on dolgozik.

## 4. Acceptance gates

- **Lib-wide verify-pmids run PASS**: v0.30 final-state-en (4 lib × 189 entry × 0 MISMATCH/NOT_FOUND) ne adjon NEW issue-t. Várt MAYBE_FP-count: 0-2 (v0.30 már fix-elte mind), de ha a HU-sync nem 100% (pl. 1-2 cjc-1295-ipamorelin/modafinil entry-n maradt HU-cited title), kapunk pár MAYBE_FP-jelölést — ez normál, NEM hiba.
- **Build PASS** (`npm run build`): scripts-only change, no build impact.
- **Smoke test 3 entry × 1 lib:** bpc-157 HU-test (HU-cited title-en MAYBE_FP_HU helyett MISMATCH), selank RU-test, retatrutide EN-test (továbbra is OK / MISMATCH normal).
- **`--strict` exit-code teszt:** ha MAYBE_FP van, `--strict`-tel exit 1, nélküle exit 0.

## 5. Ship cadence

Single session. Commit-séma:
1. `feat(scripts): verify-pmids HU/RU-aware false-positive detection + --strict flag`
2. Optional: `docs(superpowers): v0.31 spec + plan documents`

Master push, tag `v0.31-verify-tooling`.

## 6. Risks

- **Loose-threshold-en is átcsúszhat fabrikált HU-cited title:** elméletileg igen, gyakorlatilag a v0.30 13 HU-cited entry mindegyike valódi paper volt. A subagent-fabrikáció jellemzően EN-cited title-eket gyárt (training data EN-dominant). Ha mégis HU-fabrikáció történik, `--strict` flag-gel CI-on elcsípjük.
- **RU-detect over-flag:** `[Effects of...]` regex túl szűk (csak teljesen-bracketed). Részleges-bracket cited (pl. "GHK-Cu and [collagen synthesis] in skin") NEM trigger — ezek továbbra is normal MISMATCH-detect alá esnek. Tudatos compromise: jobb under-flag, mint over-flag.
- **Backward-compatibility:** régi run-ok ugyanazt a kimenetet adják EN-cited title-eken. Default exit-code változás csak HU/RU-cited title MISMATCH-en — ez intended behavior shift.
- **Spec szerint v0.30 lezárta a `verify-pmids 0 issues lib-wide`-ot**, ezért v0.31 elsősorban future-PMID-mega-fix sessions-ekben mutatja értékét, NEM regression-detect on current state.

## 7. Out of scope (deferred to v0.32+)

- NCBI batch-esummary recheck (transient false-NOT_FOUND elimination) — külön feature, separate scope
- Build-gate / pre-commit hook integration — külön CI-config feladat, `.husky/` vagy `lefthook` config
- LLM-based title-translation (HU → EN before comparison) — új dependency, post-MVP
- Per-lang body file reading EN-language-en (script line 102 lang='hu' → 'en') — orthogonal, érdemes külön ülésben mérlegelni
- Russian-bracketed normalizer body-content-ben (script-en kívül, entry-data-ban `[...]` strip) — szépségpolitika, nem error-source

## 8. Implementation outline

A `scripts/verify-pmids.mjs` 5 ponton változik (~30 sor net diff):

1. **Line 18-22:** új `--strict` CLI flag parse
2. **Line 26-41 utáni új helper:** `isHuRuTitle(s)` fn (5 sor)
3. **Line 147 körül (overlap check):** `lang = isHuRuTitle(study.title); threshold = lang ? 0.10 : 0.25;` + 3-állapotú branch (MAYBE_FP_HU/RU vs MISMATCH)
4. **Line 132-145 (NOT_FOUND suggest):** változatlan
5. **Line 174-181 (summary):** per-status grouping, exit-code szabály (MAYBE_FP exit 0 default, --strict-en exit 1)

Várható diff: +25-35 sor, -5 sor (status-grouping refactor). Tests: smoke-test 3 fixture title-en (HU-detect, RU-detect, EN-default).
