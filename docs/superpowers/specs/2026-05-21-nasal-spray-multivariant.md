# Nasal-spray Multi-Variant — 8 Peptid Phase C Design Spec

> **Spec date:** 2026-05-21 21:54 CEST
> **Target tag:** `v0.26-nasal-spray-multivariant`
> **Scope:** 8 peptid (Semax, Selank, Melanotan-1, Melanotan-2, PT-141, Adamax, NA-Semax-Amidate, Adalank) `variants[]` schema bővítése SC + IN route-tal.
> **Approach:** Hybrid inline anchor (Semax) + 7 parallel subagent (peer-reviewed 4 + grey-zone 3), single megapush.

---

## 1. Cél és scope

A peptid library 8 peptidjéhez hozzáadunk **dual-route variants[]** struktúrát (szubkután injekció + intranazális spray), Albuterol-precedensre alapozva (Phase 5 `variants[]` schema).

**Indok:** A Semax/Selank/MT-1/MT-2/PT-141 mindegyikének valós klinikai/community gyakorlatában létezik mind SC, mind IN route. A 3 grey-zone peptid (Adamax/NA-Semax-Amidate/Adalank) szintén IN-route community-standard, dokumentáljuk per-route információkkal.

**Out of scope:**
- Új peptid entry hozzáadása (mind a 8 már létezik a libben).
- Cross-lib hatás (pharma/nootropics/performance érintetlen).
- Új validator-szabály (variant.image disk-check) — defer.
- Új PWA-asset (mind létező képet használunk).
- UI/komponens-refactor (VariantToggle/EntryDetail/Calculator változatlan).

---

## 2. Architektúra

### 2.1 Entry-shape (példa Semax, mind 8 ugyanezt követi)

> **Megjegyzés:** az alábbi kódblokk **illusztratív schema-példa** — a `"…"` placeholderok helyére Phase A inline írásnál kerül a tényleges peptid-adat (peptid-per-peptid eltérő).

```js
{
  id: "semax",
  defaultVariant: "sc",
  variants: [
    {
      id: "sc",
      routeId: "sc",
      routeLabel: "Szubkután injekció",  // HU per per-lang file
      image: "/peptides/water-vial.png",
      dosing: "0.6–0.9 mg/nap, oszd el 2 dózisra",
      halfLife: "~20 perc plazma",
      halfLifeActive: "~24 óra (központi idegrendszer)",
      bioavailability: "~80–100% SC",
      onsetTime: "15–30 perc",
      indications: ["…", "…"],
      doseCalc: {
        defaultVialMg: 5,
        defaultBacMl: 2,
        defaultDoseMcg: 300,
        notes: "Standard SC reconstitution."
      },
      reconstitute: {
        steps: ["…", "…"]
      }
    },
    {
      id: "in",
      routeId: "in",
      routeLabel: "Intranazális spray",
      image: "/performance/nasal-spray-clear.png",
      dosing: "200–600 μg/nap szippantva (1–3 szippantás per orrlyuk)",
      halfLife: "~5–10 perc plazma",
      halfLifeActive: "~24 óra (központi idegrendszer)",
      bioavailability: "~30–40% IN",
      onsetTime: "5–15 perc",
      indications: ["…", "…"],
      doseCalc: {
        sprayUgPerActuation: 50,
        dailyActuations: 4,
        targetDailyMcg: 200,
        notes: "Pre-mixed Russian pharmaceutical (Semax 0.1%)."
      }
    }
  ],
  // entry-szintű mezők változatlan: name, mechanism, category, research-level,
  // composition, related, FAQ, telegram CTA, disclaimer
}
```

### 2.2 Adapter (`adaptLibraryEntry.js`)

**Allowlist passthrough audit ship előtt kötelező** (`[[feedback_adapter_passthrough]]`). A `resolveVariant` helper által visszaadott objektum allowlist-jébe MIND az alábbi mezőnek bele kell kerülnie, ha még nincs ott:

- `routeLabel`
- `image`
- `dosing`
- `halfLife`
- `halfLifeActive`
- `bioavailability`
- `onsetTime`
- `indications`
- `doseCalc`
- `reconstitute`

A v0.25.1 `id: entry.id` re-assign (post-spread fix) változatlanul érvényes.

### 2.3 Validator

`validate-library-meta.mjs` változatlan. A variants[] opcionális mező Phase 5 óta — 8 új variant-bővítés transzparens a validator-nak.

### 2.4 Cross-lib hatás

**0.** Peptides lib bővül, többi 3 lib (nootropics, performance, pharmaceutical) érintetlen.

---

## 3. Per-peptid forrás-policy

### 3.1 Csoport A — Peer-reviewed primary (5 peptid, PMID kötelező)

| Peptid | Indikatív forrás-példák | Hangsúly |
|---|---|---|
| **Semax** | Gusev 2018 stroke (PMID 29947337); Myasoedov BBB; Volchegorskii anti-anxiety RCT | IN = primary clinical route (RU OTC) |
| **Selank** | Kost 2001 anxiolytic (PMID 11533792); Volchegorskii 2020 RCT | IN = primary; SC research-only |
| **Melanotan-1 (Afamelanotide)** | Scenesse FDA SmPC 2019; Lim 2014 phase 3 EPP | SC = approved Rx (Scenesse implant); IN = research |
| **Melanotan-2** | Hadley & Dorr photoprotection; ED off-label peer-reviewed reports | SC = community standard; IN = experimental |
| **PT-141 (Bremelanotide / Vyleesi)** | Vyleesi FDA SmPC 2019 (HSDD); Diamond 2006 | SC = approved Rx auto-injector; IN = Palatin original research |

**Verify-gate:** `scripts/verify-pmids.mjs` futtatása MINDEN subagent-output után. PMID hibás → manual replace.

### 3.2 Csoport B — Grey-zone (3 peptid, NO PMID)

| Peptid | Forrás | Cite-policy |
|---|---|---|
| **Adamax** | sean's curated notes + RU peptide community lore | Lay-text only, **NO PMID claim**. `"Limited human data, mostly anecdotal reports"` disclaimer minden indications-ban |
| **NA-Semax-Amidate** | sean's notes (Semax-analog N-acetyl mod) | Lay-text, research-chemical jelleg explicit |
| **Adalank** | sean's notes (Selank-analog) | Mint fent |

**Verify-gate:** N/A — cite-string-monitoring only. Subagent NEM írhat `PMID:` mintát ezekre.

### 3.3 Adat-mezők per variant (~10 mező)

**SC kötelező:** `routeLabel`, `image`, `dosing`, `halfLife`, `halfLifeActive`, `bioavailability` (~80–100%), `onsetTime`, `indications[]`, `doseCalc` (vial+BAC+dose-μg), `reconstitute.steps[]`.

**IN kötelező:** `routeLabel`, `image` (mind `nasal-spray-clear.png`), `dosing` (μg/szippantás × szippantások/nap), `halfLife`, `bioavailability` (~30–40%), `onsetTime`, `indications[]`, `doseCalc` (sprayUgPerActuation + dailyActuations + targetDailyMcg).

**IN-opcionális `reconstitute.steps[]`** — három szint:
- **Semax / Selank:** NO recon. Pre-mixed RU pharma (Semax 0.1% nasal drops, Selanco), `reconstitute` mező hiányzik az IN-variantból.
- **Melanotan-1 / Melanotan-2 / PT-141:** spray-vial transfer recon. Egyszerű 2-3 lépés: BAC water + peptid-mass + transfer nasal-sprayerbe. `reconstitute.steps[]` jelen, rövid.
- **NA-Semax-Amidate / Adalank:** full research-chemical recon. Részletes 4-5 lépés (BAC + sterile water + peptid-mass + spray-vial transfer + concentration calc). `reconstitute.steps[]` jelen, részletes.

---

## 4. Variant-image policy

### 4.1 SC variant.image

| Peptid | SC variant.image | Megjegyzés |
|---|---|---|
| Semax | `/peptides/water-vial.png` | generic vial |
| Selank | `/peptides/water-vial.png` | generic vial |
| Melanotan-1 | `/peptides/water-vial.png` | generic vial |
| Melanotan-2 | `/peptides/Melanotan-2.png` | létező saját kép ✅ |
| PT-141 | `/peptides/PT-141.png` | létező saját kép ✅ |
| Adamax | `/peptides/water-vial.png` | generic vial |
| NA-Semax-Amidate | `/peptides/water-vial.png` | generic vial |
| Adalank | `/peptides/water-vial.png` | generic vial |

### 4.2 IN variant.image (mind 8 ugyanaz)

- `/performance/nasal-spray-clear.png` — Sub-Task 7 (`v0.25-perf-restructure-complete`) + v0.25.1 transparent-fix (`f3ad2dd`) óta tisztult.

### 4.3 Entry top-level `image`

- Marad változatlan. Top-level = SC variant.image (mert `defaultVariant === "sc"`).
- Melanotan-2 → `Melanotan-2.png`, PT-141 → `PT-141.png`, többi → `water-vial.png`.

### 4.4 `VARIANT_IMAGE_OVERRIDES`

**NEM kell.** Mind a 8 peptid `variant.image` direkt inline a per-lang entry-fájlban, no placeholder-replace step. (Az override-helper Sub-Task 7-ben azt a use-case-t fedte amikor 2 variant ugyanazon placeholder-en ült — itt minden variant explicit image-stringet kap.)

### 4.5 Pre-check ship előtt

- Glob `/peptides/water-vial.png` (létező Phase 5 óta) ✅
- Glob `/peptides/Melanotan-2.png` + `/peptides/PT-141.png` ✅
- Glob `/performance/nasal-spray-clear.{png,webp,avif}` (mind 3 derived format létező Sub-Task 7 óta) ✅

---

## 5. UI flow + a11y

### 5.1 VariantToggle (változatlan, Phase 5 óta)

- Segmented control 2-gomb (SC | IN), Chemical Green active state.
- Helye: `EntryDetail.jsx` Hero alatt, képkártya felett (Albuterol-precedens).
- Click → `setActiveVariantId(variantId)` local state → `resolveVariant(entry, activeVariantId)` cseréli a renderelt mezőket.
- URL: `#entry/peptides/<id>/<routeId>` deep-link (Phase 5 schema).

### 5.2 Variant-aware mezők (resolveVariant felülírja)

`image`, `dosing`, `halfLife`, `halfLifeActive`, `bioavailability`, `onsetTime`, `indications[]`, `doseCalc`, `reconstitute`.

### 5.3 Variant-NEM-aware mezők (entry-szintű marad)

`name`, `mechanism`, `category`, `researchLevel`, `related[]`, `composition[]`, FAQ, Telegram CTA, disclaimer.

### 5.4 Calculator

- `CalculatorGate` `library.id === 'peptides'` ágon renderel → 8 peptid mind peptid-lib → Calculator élesben.
- `DoseCalculator.jsx` `entry.doseCalc`-ból olvas → variant-csere után automatikus.
- IN variant `doseCalc` **az Albuterol Phase 5 precedens shape-jét használja** (`{ type: "fixed", fixed: { low, medium, high }, unit, note }`), csak μg-értékekkel. Pl. Semax IN: `{ type: "fixed", fixed: { low: 100, medium: 300, high: 600 }, unit: "μg IN/nap", note: "Pre-mixed RU pharma..." }`. Mivel a shape egyezik Albuterol oral+inhaled variant-jával, a Calculator generic renderer **alaplogikán** támogatja. Phase A anchor smoke (Task 1.6) erősíti meg konkrétan, ha bug jelenne meg → Calculator-extend separate task. **Megjegyzés:** a spec §2.1 illusztratív kódblokkjában szereplő `sprayUgPerActuation/dailyActuations` shape **NEM kerül a tényleges entry-kbe** — az Albuterol-style `fixed` shape az implementation source-of-truth (lásd plan Task 1.3).

### 5.5 A11y

- VariantToggle `role="tablist"` + `aria-selected` + ArrowLeft/Right keyboard (Phase 5).
- ScreenReader announce: `"Selected route: Subcutaneous injection"` / `"Selected route: Intranasal spray"` HU/EN/PL.
- Tile-szinten NO variant-indicator (Albuterol-precedens).

### 5.6 Edge-case-védelem (v0.25.1)

`id: entry.id` re-assign (`adaptLibraryEntry.js:977`) post-spread fix érvényes — 8 új peptid mind ezen a fix-en megy keresztül, silent-regression-risk 0.

---

## 6. Validator + i18n impact

### 6.1 Validator

- `validate-library-meta.mjs` változatlan, 0 új szabály.
- Soft-fail mezők (`bioavailability` perf-only, `aromatization`/`hepatotoxicity` perf-only) — peptid lib érintetlen.

### 6.2 i18n

- **0 új UI-string kulcs.** RouteLabel + minden variant-szintű string **per-lang flat-string** a `entries/{hu,en,pl}/<id>.js` fájlokban (Phase 12 architektúra).
- 8 peptid × 3 lang = **24 entry-fájl edit**, saját nyelvi literállal.
- VariantToggle UI-i18n (`variant.sr.changed` HU/EN/PL) már létezik Phase 5 óta.

### 6.3 PWA precache

- 0 új PNG asset → precache változatlan 105 entries / 3292 KiB.
- Entry-bodies bővülése (~2-3 KB raw/fájl × 24 = ~60 KB raw / ~15 KB gzip) — per-entry chunkok (Phase 9), NEM precache.

### 6.4 Bundle-perf

- 8 entry-chunk mérete ~3 KB → ~5 KB gzip (gyenge növekedés).
- Cube-rotation perf stabil (`[[Permanent_Will_Change_GPU_Pressure]]` + `React.memo`) — no regression-risk.

---

## 7. Execution plan (Approach B — Hybrid)

### Phase A — Anchor peptid (Semax) inline ~30 perc

1. WebFetch 3 PMID Semax-ra (Gusev 2018 stroke 29947337 + Myasoedov BBB + Volchegorskii anxiolytic) → adat-tábla.
2. Schema decision-snapshot: 3 entry-fájl (`entries/{hu,en,pl}/semax.js`) — defaultVariant + variants[sc, in] + 10 mező/variant.
3. WebFetch verify minden PMID NCBI eutils + token-overlap.
4. Inline Edit-tool írás (3 fájl, ~50-60 sor edit/fájl).
5. `npm run validate` PASS + `npm run build` PASS.
6. Local smoke: `npm run dev` → Semax entry → variant-toggle SC↔IN click → Calculator render check.
7. **STOP gate:** user-review az anchor-template-ről mielőtt subagent-batch fut.

### Phase B — 7 subagent parallel (peer-reviewed 4 + grey-zone 3) ~60-90 perc

- **4 peer-reviewed subagent** (Selank, Melanotan-1, Melanotan-2, PT-141): anchor-template + peptid-specific PMID-lista + kötelező cite-formátum (`PMID: XXXXXXXX`).
- **3 grey-zone subagent** (Adamax, NA-Semax-Amidate, Adalank): anchor-template + sean's notes hivatkozás + **TILTÁS: NO `PMID:` cite** + `"Limited human data"` disclaimer.
- **Mind 7 subagent isolation: worktree** — külön git worktree-ben, parallel safe.

### Phase C — Verify-gate ~10 perc

1. `node scripts/verify-pmids.mjs` — minden új PMID-cite NCBI eutils + token-overlap.
2. Ha PMID-bukás → manual replace WebFetch-csel (én csinálom). Failsafe: ha 2+ PMID hibás egy peptiden, az adott peptidet inline újraírom.
3. Re-run verify amíg PASS.

### Phase D — Adapter passthrough audit ~5 perc

1. `adaptLibraryEntry.js` variant-allowlist-ben minden új mező jelen? Hiányzik → hozzáadás.
2. Grep-check.

### Phase E — Validator + build + lokál smoke ~10 perc

1. `npm run validate` PASS (4 lib 193 entry stabil).
2. `npm run build` PASS, bundle delta-check (~+20 KB gzip várt).
3. `npm run dev` lokál smoke: **8 entry × 2 variant = 16 toggle-click**, Calculator-render check, dose-calc field-shape OK.
4. PWA precache `<5MB` cap-check.

### Phase F — Ship ~5 perc

1. `git add -A` + commit: `feat(peptides): add nasal-spray multi-variant to 8 peptides`
2. `git tag v0.26-nasal-spray-multivariant`
3. `git push origin master --tags` → Vercel ~3 perc.
4. Vercel live smoke (semax + melanotan-2) — variant-toggle URL helyes, deep-link `#entry/peptides/semax/in` működik.

### Phase G — `/handoff` ~5 perc

- Új session-blokk Statusz.md tetejére.
- Memory candidates: `[[Hybrid_Inline_Subagent_Anchor_Pattern]]`, `[[NCBI_eutils_PMID_Verify_Gate]]`.

**Becsült wall-clock:** ~2-3 óra Phase A-F.

---

## 8. Acceptance criteria (Q7 — Build + lokál smoke)

- ✅ Validator PASS 4 lib × 193 entry stabil (8 peptid `variants[]` opcionális, nem hard-fail).
- ✅ Build PASS, vendor bundle <200 KiB, no Vite warning.
- ✅ PWA precache `<5120 KB` cap (várt: ~3300 KB, no asset-add).
- ✅ Lokál smoke: 8 entry × 2 variant = 16 toggle-click, mind 16 helyes URL-hash + képcsere + Calculator-render.
- ✅ Mind 5 peer-reviewed peptid PMID-cite-jei `verify-pmids.mjs` PASS.
- ✅ Mind 3 grey-zone peptid 0 `PMID:` mintával (cite-string monitoring).
- ✅ Adapter passthrough audit: variant-allowlist minden új mezőre lefedve.
- ✅ Vercel live deploy ~3 perc múlva PASS, deep-link `#entry/peptides/semax/in` működik.

---

## 9. Risk register + rollback

### Risk

| Sev | Risk | Mitigation |
|---|---|---|
| 🔴 | Subagent PMID-hallucinálás (v0.23 10/13 rate) | `verify-pmids.mjs` kötelező post-subagent; 3 grey-zone peptid NO PMID = no vector |
| 🟡 | Subagent stylistic-divergence (anchor-template-től eltérés) | utolsó-mile sed-normalizálás vagy manual review |
| 🟡 | Calculator IN-variant doseCalc-shape renderelési bug | Phase A anchor smoke fang-olja Semax-on, mielőtt subagent-batch indul |
| 🟢 | Adapter passthrough miss | Phase D audit fang-olja |
| 🟢 | Adapter spread-collision (v0.25.1 ismétlés) | `id: entry.id` re-assign már él, regresszió-test Phase E smoke-ban |

### Rollback

- **Phase A failure:** anchor-template újragondolás, no commit yet.
- **Phase B failure egy peptiden:** inline újraírás csak az érintett peptidre (3 fájl).
- **Phase C verify-gate failure:** manual PMID-replace WebFetch + re-verify.
- **Phase F ship-after revert:** `git revert v0.26-nasal-spray-multivariant` egy commit, Vercel auto-revert ~3 perc.
- **Last-resort:** `git reset --hard v0.25.1-variant-id-fix` + force-push (csak user-explicit jóváhagyással).

---

## 10. References

- **Precedens code:** Albuterol Phase 5 variants[] schema (`src/data/libraries/performance/entries/hu/albuterol.js`)
- **Adapter:** `src/components/library/adaptLibraryEntry.js` (`resolveVariant` line 977 + variant-allowlist)
- **Verify-script:** `scripts/verify-pmids.mjs` (NCBI eutils API + token-overlap)
- **Existing images:** `public/peptides/{water-vial,Melanotan-2,PT-141}.png` + `public/performance/nasal-spray-clear.{png,webp,avif}`
- **Memory rules:**
  - `[[feedback_adapter_passthrough]]` — variant-allowlist passthrough audit kötelező
  - `[[feedback_subagent_hallucinated_pmids]]` — subagent PMID-hallucinálás verify-gate-tel ellensúlyozva
  - `[[feedback_verify_pmids_build_gate]]` — `verify-pmids.mjs` canonical
  - `[[feedback_forbidden_sources]]` — hybrid policy peer-reviewed + sean's notes
  - `[[feedback_edit_tool_quote_corruption]]` — bulk-edit >5 fájl Node fs-szel (subagent worktree-isolation védi ezt)
  - `[[feedback_phase_specs_obsidian]]` — spec/plan mirror Obsidian-be

---

## 11. Mirror

Obsidian mirror: `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_NasalSpray_Spec.md`
