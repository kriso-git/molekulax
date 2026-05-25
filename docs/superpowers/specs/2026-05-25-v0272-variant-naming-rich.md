# v0.27.2 — Variant-naming RICH-shape Standardization

**Date:** 2026-05-25
**Status:** Spec approved, plan pending
**Ship-tag:** `v0.27.2-naming-rich`
**Base commit:** `b6050bd` (`v0.27.3-mega-ux-fix` on master)
**Worktree:** `.worktrees/feat-v0272-naming-rich` / branch `feat/v0272-naming-rich`

---

## §1 — Goal

Standardize the 4 remaining string-shape multi-variant entries in `src/data/libraries/performance/` to full Albuterol-RICH triplet shape (`{hu,en,pl}`) per the Round 3+4 pattern shipped in `v0.27-multi-route-aware` (commit `d212f8d`). Removes the last 4 entries holding legacy flat-string `routeLabel` + 4 sibling fields, completing the v0.27 multi-route-aware visual+structural consistency arc.

**Non-goal:** No content rewrite. Source-of-truth is the existing HU string text; we are converting *shape* only (`"string"` → `{hu: "string", en: "...", pl: "..."}`). EN+PL are new fresh translations following the Round 3+4 cognate-preservation pattern.

---

## §2 — Scope

**4 entry × 11 variant × 5 field × 3 lang = 165 string-translations.**

### Affected entries

| Entry | Variant count | Variants |
|---|---|---|
| `l-carnitine` | 2 | oral, aq |
| `dianabol-info` | 2 | oral, oil |
| `testosterone-info` | 5 | prop, enan, cyp, sus, aq |
| `superdrol` | 2 | oral, injectable |

### Affected fields per variant

1. `routeLabel` — variant header (see §3 pattern table)
2. `routeNote` — variant subtitle (long-form description ~1-3 sentences)
3. `dosing` — variant dosing string (typical protocols)
4. `onsetTime` — short onset/half-life note
5. `doseCalc.note` — Calculator info-card text (rendered when `library.features.calculator === true` + non-peptide branch)

### Excluded (Round 3+4, already triplet-shape)

`trenbolone-info`, `nandrolone-info`, `masteron`, `primobolan`, `ment-19nor`, `ment-test` — NOT in this phase. Cross-check audit deferred to v0.27.3-backlog.

### Files affected

- `src/data/libraries/performance/entries/hu/{l-carnitine,dianabol-info,testosterone-info,superdrol}.js`
- `src/data/libraries/performance/entries/en/{...}.js` (same 4 files)
- `src/data/libraries/performance/entries/pl/{...}.js` (same 4 files)

**Total: 12 entry files modified.** No new files, no deletions, no LIBRARY_ENTRY_META changes (entry-ids unchanged).

---

## §3 — routeLabel canonical pattern

**Anchor:** `<Compound> <Ester> (<Brand/Alias>, <descriptor>)` — Round 3+4 öröklött.

Per-variant final routeLabel strings (3 lang):

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

**Translation rules:**
- Brand names (Test-Prop, Reforvit-B, Sustanon-250, Methyl-Drol, Parabolan, etc.) are loanwords — NEM fordítandók.
- Compound names PL-en Slavic-cognate conversion: Methandrostenolone→Methandrostenolon, Testosterone→Testosteron, Methyldrostanolone→Methyldrostanolon, L-Carnitine→L-Karnityna.
- Speed-descriptor PL: gyors=szybki, lassú=wolny, közepes=średni, ultra-gyors=ultra-szybki.
- Form-descriptor PL: tabletta=tabletka doustna, kapszula=kapsułka, vizes ampulla=ampułka wodna, in-oil IM=in-oil IM, UGL depot=depot UGL.

---

## §4 — Architecture

### Triplet-shape target

Per variant the 5 fields convert from string to `{hu, en, pl}` triplet:

```js
// BEFORE (v0.27.1 state)
{
  id: "prop",
  routeId: "prop",
  routeLabel: "Testosterone Propionát (IM, gyors)",
  routeNote: "Gyors észter (~19h), EOD ütemezés...",
  onsetTime: "24-48 óra (IM, fast-acting propionát)",
  dosing: "300–700 mg/hét IM, 3× EOD osztva...",
  doseCalc: {
    type: "fixed",
    fixed: 100,
    unit: "mg",
    note: "300-700 mg/hét, 3x EOD osztott (Mon/Wed/Fri). PCT utolsó injekció +3-5 nap."
  }
}

// AFTER (v0.27.2 target)
{
  id: "prop",
  routeId: "prop",
  routeLabel: {
    hu: "Testosterone Propionate (Test-Prop, gyors észter)",
    en: "Testosterone Propionate (Test-Prop, fast ester)",
    pl: "Testosteron Propionian (Test-Prop, szybki ester)"
  },
  routeNote: { hu: "...", en: "...", pl: "..." },
  onsetTime: { hu: "...", en: "...", pl: "..." },
  dosing: { hu: "...", en: "...", pl: "..." },
  doseCalc: {
    type: "fixed",
    fixed: 100,
    unit: "mg",
    note: { hu: "...", en: "...", pl: "..." }
  }
}
```

### Adapter compatibility

The `adaptLibraryEntry.js` adapter (post-v0.27.1 hotfix) consumes both shape forms via the `flat(value, lang)` helper:
- `flat("string")` → returns the string
- `flat({hu,en,pl}, lang)` → returns the lang-specific string

**Therefore the triplet upgrade is additively compatible** — no adapter signature changes, no derived-fn signature changes, no `EntryDetail.jsx` consumer changes. Pure data-file shape conversion.

### Per-lang file content split

Each entry exists in 3 separate files (per Phase 12 per-lang split):
- `entries/hu/<id>.js` — HU triplet-key contains the canonical HU text
- `entries/en/<id>.js` — EN triplet-key contains the EN text
- `entries/pl/<id>.js` — PL triplet-key contains the PL text

The triplet `{hu, en, pl}` is **duplicated across all 3 files** for each variant field — this is the Phase 12 per-lang split convention. The HU file contains the HU text in the `hu` key (matches expected lang), and the EN+PL files contain their respective texts in the `en`/`pl` keys (also matching expected lang). The redundancy is intentional and validator-checked.

---

## §5 — Implementation phases

### Phase A — Worktree setup + HU triplet-conversion
- A1: `git worktree add .worktrees/feat-v0272-naming-rich -b feat/v0272-naming-rich` from master `b6050bd`
- A2: HU files: 4 × `entries/hu/<id>.js` triplet-shape conversion using node bulk-script (`scripts/v0272-hu-triplet-convert.mjs`) — read existing string, write `{hu: "<existing>", en: "[TODO_EN]", pl: "[TODO_PL]"}` placeholders
- A3: HU file routeLabel field override with §3 table strings (5 × HU values per testosterone-info, 2 × HU per others)

### Phase B — EN + PL inline kitöltés
- B1: `entries/en/<id>.js` × 4: replace placeholder `"[TODO_EN]"` with §3 table EN values (routeLabel) + Round 3+4-pattern fresh EN translation for routeNote/dosing/onsetTime/doseCalc.note. Source-of-truth: HU string content.
- B2: `entries/pl/<id>.js` × 4: same as B1, PL values with Slavic-cognate brand preservation per §3 translation rules.
- **Bulk file write** (node fs.writeFileSync, NOT Edit tool) per `[[feedback_edit_tool_quote_corruption]]` — 55+ edits per file would trigger curly-quote corruption with the Edit tool.

### Phase C — Validate + smoke + ship
- C1: `node scripts/validate-library-meta.mjs` → PASS 4 lib × 189 entries
- C2: `npm run build` → PASS, vendor chunk unchanged, PWA precache <5120 KiB
- C3: Triplet-shape audit grep: 0 string-shape maradvány a 11 variant × 5 field mátrixban
- C4: Lokál smoke `npm run dev -- --port 5174` → 4 entry × variant-toggle × lang-toggle browser-smoke (lásd §6)
- C5: Merge `feat/v0272-naming-rich` → master (single merge commit), tag `v0.27.2-naming-rich`, push origin master+tags
- C6: Vercel auto-deploy + bundle-inspect verify (curl + grep, v0.27.3-mega-ux-fix precedens)

---

## §6 — Acceptance criteria

### Pre-ship gates
- [ ] Validator PASS 4 lib × 189 entries (unchanged count)
- [ ] Build PASS, vendor chunk size unchanged (~165 KiB), PWA precache <5120 KiB
- [ ] Triplet-shape grep audit: `grep -rE '"routeLabel": "|"routeNote": "|"dosing": "|"onsetTime": "' src/data/libraries/performance/entries/*/{l-carnitine,dianabol-info,testosterone-info,superdrol}.js` → 0 matches
- [ ] Round 3+4 érintetlenség: `git diff --stat master..feat/v0272-naming-rich -- src/data/libraries/performance/entries/*/{trenbolone-info,nandrolone-info,masteron,primobolan,ment-19nor,ment-test}.js` → 0 fájl
- [ ] No LIBRARY_ENTRY_META changes: `git diff master..feat/v0272-naming-rich -- src/data/libraries/performance/index.js` → 0 lines

### Lokál smoke gates (dev server `:5174`)
- [ ] `localhost:5174/#entry/performance/testosterone-info` → 5 variant-chip routeLabel látható (HU), lang-toggle EN/PL → §3 tábla
- [ ] `localhost:5174/#entry/performance/dianabol-info` → 2 variant: oral tablet vs Reforvit-B in-oil IM
- [ ] `localhost:5174/#entry/performance/l-carnitine` → oral kapszula vs aq ampulla
- [ ] `localhost:5174/#entry/performance/superdrol` → oral tablet vs Methyl-Drol IM oil
- [ ] Regression-smoke: `localhost:5174/#entry/performance/trenbolone-info` (Round 3+4 anchor) → változatlan

### Post-ship verify
- [ ] Vercel deploy live (~3 perc post-push): bundle-inspect grep `"Testosteron Propionian"` a performance meta-chunkban → present (PL routeLabel deployolva)
- [ ] No Sentry/console errors lang-toggle közben (manual browser-smoke)

---

## §7 — Risk register

| Risk | Severity | Mitigation |
|---|---|---|
| Edit-tool curly-quote bug 55+ edit-en | HIGH | Bulk node `fs.writeFileSync` script EN+PL kitöltéshez, NEM Edit-tool. Max 5 Edit-tool-edit per file. Lásd `[[feedback_edit_tool_quote_corruption]]`. |
| EN/PL fordítás minőség (orvosi-szakszöveg) | MEDIUM | Round 3+4-precedens pattern öröklés. §3 brand-preservation rule + PL Slavic-cognate. Spec self-review post-write. |
| Triplet-shape adapter regression | LOW | v0.27.1 `flat()` helper graceful pass-through-ot ad mind a string- mind a triplet-shape-re. Additíven kompatibilis. |
| Worktree Windows file-lock residue | LOW | v0.26+v0.27+v0.27.3 precedens: `.worktrees/` gitignored, next-restart-ra törölhető. |
| Build cache-invalidation | LOW | `npm run build` 5-6s, vendor unchanged, csak per-entry chunkok rebuilden. |
| Cross-lib reference regression (related[]/interactionsWith[]) | LOW | Csak per-variant mezők változnak, entry-id nem mozdul. |
| Scope-creep Round 3+4 audit-be | MEDIUM | EXPLICIT non-goal §2: Round 3+4 NEM része. Inkonzisztenciát v0.27.3-backlog-ba. |

---

## §8 — References

- **Lessons:** `[[feedback_edit_tool_quote_corruption]]`, `[[feedback_triplet_shape_adapter_flatten]]`, `[[feedback_subagent_session_limit_handling]]`
- **Precedents:** Round 3+4 6-entry triplet pattern in `v0.27-multi-route-aware` (commit `d212f8d`, files `entries/hu/{trenbolone-info,nandrolone-info,masteron,primobolan,ment-19nor,ment-test}.js`)
- **Architecture:** `MolekulaX_Statusz.md` v0.27.1 hotfix session (2026-05-25 00:30 CEST) `[[Triplet_Shape_Adapter_Flatten_Pattern]]` lesson
- **Adapter:** `src/components/library/adaptLibraryEntry.js` `flat(value, lang)` helper (post-v0.27.1)

---

## §9 — Obsidian mirror

Spec mirror copy: `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_v0272NamingRich_Spec.md`
