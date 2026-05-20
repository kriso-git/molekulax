# MolekulaX — Mac Resume Pack

> **Cél:** ez a fájl mindent tartalmaz, ami szükséges hogy a holnapi munkamenetet Mac laptopon zökkenőmentesen folytasd a Windows-on hagyott állapotból.
> **Generálva:** 2026-05-20 23:28 CEST · **master HEAD:** `afdd3f7`
> **Forrás:** Windows desktop (`E:\Website Biz\molekulax\`) · **Cél:** Mac laptop

---

## 0. TL;DR — 3 lépés Mac-en

```bash
# 1. Clone
git clone https://github.com/kriso-git/molekulax.git
cd molekulax

# 2. Node 20.18.x via nvm (a Windows-os env-pontosan ez)
nvm install 20.18.0 && nvm use 20.18.0

# 3. Install + smoke
npm install
npm run build   # validator + vite build; PASS jelzi hogy a setup OK
```

Ha mind 3 PASS, indítható: `npm run dev` → `http://localhost:5173`.

**Folytatandó task:** nasal-spray multi-variant Phase C brainstorm, Q6-nál tartottunk (lásd §6 lentebb).

---

## 1. Aktuális live állapot (2026-05-20 23:28 CEST)

| Mező | Érték |
|---|---|
| **GitHub** | https://github.com/kriso-git/molekulax (master branch, auto-deploy Vercel-re) |
| **Live** | https://molekulax.vercel.app |
| **Master HEAD** | `afdd3f7` (this commit = tracking the untracked spec) |
| **Latest tag** | `v0.25.1-variant-id-fix` on `5f6bf00` (2026-05-20 22:40 CEST) |
| **Roadmap 2026-05** | 🟢 CLOSED 2026-05-18 (12 phase) |
| **Roadmap 2026-06** | 🟢 CLOSED 2026-05-20 22:18 CEST (Performance Library Restructure mega-phase, Sub-Task 1-7 SHIPPED) |
| **Aktuális in-flight** | Nasal-spray multi-variant Phase C — brainstorm 6/8 kérdés kész, spec MD még NEM íródott |
| **Total entry** | 193 stabil (peptides 55 + nootropics 48 + performance 68 + pharmaceutical 22) |
| **Build state** | validator PASS / build PASS 5.55s / PWA precache 105 entries / 3292 KiB |

**Last 7 commit (legfrissebb felül):**
```
afdd3f7 docs(specs): track peptide-vial-prompts spec from 2026-05-19
f3ad2dd fix(performance): truly transparent ampoule + nasal-spray via magenta chroma-key
144cfb4 fix(performance): strip fake-checker rendering from ampoule + nasal-spray
b4e34a5 feat(affiliate): smooth glide to corner once past announcement ribbon
7b9eb23 fix(affiliate): pin coupon pill to viewport on scroll
5f6bf00 fix(variants): preserve entry.id after variant spread + i18n error screen  [TAG: v0.25.1-variant-id-fix]
aa2e7aa feat(performance): Sub-Task 7 — 6 new image templates + 3 live rebinds      [TAG: v0.25-perf-restructure-complete]
```

---

## 2. Tech stack + dev-env (kötelező a Mac-en)

| Eszköz | Verzió | Megjegyzés |
|---|---|---|
| **Node.js** | **20.18.0** | Hard constraint — vite + sharp + rembg-compat |
| **npm** | 10.8.2 (Node 20.18-cal jön) | — |
| **Python** | 3.10+ | Csak ha image-bg-removal kell (`rembg` cli) |
| **rembg** | 2.0.69 | Optional: `pip install rembg` — csak image-fix workflow-hoz |
| **Vite** | 5.x | package.json-ban pinned |
| **Tailwind** | 3.x | — |
| **Framer Motion** | ^11.18.2 | LibraryCube 3D nav |
| **Vite PWA Plugin** | 1.3.0 | Workbox precache |

**npm scripts (package.json):**
```
dev                Vite dev-server (port 5173)
build              validator + vite build (validator MUST pass before build)
preview            Vite preview a build-output-on
validate:meta      csak a library-meta validator (validate-library-meta.mjs)
convert-images     PNG → WebP + AVIF sweep public/-en (Q80 / Q60)
normalize-vials    legacy peptide-vial data-fix script
pipeline:*         legacy data-pipeline lépések (sean-notes extract, dopamine.club scrape, merge-diff, apply)
```

**Build-gate scripts (lokálban futtatni ship előtt):**
- `node scripts/validate-library-meta.mjs` — 4 lib × 193 entry validáció (composition[] check, related[] dangling-id warning, deprecatedIds dual-export check stb.)
- `node scripts/verify-pmids.mjs` — NCBI eutils API + token-overlap; KÖTELEZŐ peer-reviewed-cite content ship előtt (`[[feedback_verify_pmids_build_gate]]`)

---

## 3. Aktuális in-flight munka — Nasal-spray Multi-variant Phase C

**Cél:** 8 peptid (Semax, Selank, Melanotan-1, Melanotan-2, PT-141, Adamax, NA-Semax-Amidate, Adalank) kap `variants[]` shape-et SC + IN route-tal. Sub-Task 7-ben már elkészült `nasal-spray-clear.png` template + tisztult (chroma-key cleaned) az `f3ad2dd` commit-ban.

**Brainstorm állása: 6/~8 kérdés megválaszolva. Spec MD még NINCS írva.**

### Eddig megválaszolt design-kérdések

| # | Kérdés | Válasz |
|---|---|---|
| Q1 | Scope | Mind 8 peptid dual-route (SC + IN) |
| Q2 | Variant mélység | Albuterol-szintű RICH (~10 mező/variant: routeLabel, image, dosing, halfLife, halfLifeActive, bioavailability, onsetTime, indications, doseCalc, opcionális hepatotoxicity/aromatization/recon-step) |
| Q3 | Forrás-policy | **HYBRID:** peer-reviewed PMID elsőként (Semax/Selank/MT-1/MT-2/PT-141 — pl. Gusev 2018 Semax stroke PMID 29947337), sean's notes secondary lay-text-re (Adamax/NA-Semax-Amidate/Adalank — RU szürke-zóna, NO PMID). Lásd `[[feedback_forbidden_sources]]` |
| Q4 | SC variant.image | Meglévő PNG ha van: MT-2=`/peptides/Melanotan-2.png`, PT-141=`/peptides/PT-141.png`. 6 peptid (Semax/Selank/MT-1/Adamax/NA-Semax-Amidate/Adalank) = `/peptides/water-vial.png`. **IN variant.image mindenkin** `/performance/nasal-spray-clear.png` (Sub-Task 7-óta tisztult, `f3ad2dd`-után fully transparent) |
| Q5 | defaultVariant | Mind 8 peptid `defaultVariant: "sc"` (injekt-first UX, Albuterol-precedens) |
| Q6 | Recon + doseCalc | **Mindkettő per-variant split.** SC: hagyományos vial+BAC mix + dose-calc (jelenlegi `defaultVialMg`/`defaultBacMl`/`defaultDoseMcg`). IN: μg/szippantás fixed-type calc + spray-recon step (csak gyártáshoz kötött peptidek esetén) |

### Hátralévő clarifying-questions (Q7-Q8)

**Q7 — Acceptance + smoke-test scope:**
- (A) Build-only: validator + build + PWA precache <5MB
- (B) Build + lokál smoke 8 entry × 2 variant (16 toggle-click) + Calculator-check per variant
- (C) Build + lokál + Vercel live LH-sweep (1-2 representative: semax + melanotan-2)

**Q8 — Ship-kadencia:**
- (A) Single megapush (Sub-Task 6/7 precedens) — minden 8 peptid + adapter no-touch + 1 commit + `v0.26-nasal-spray-multivariant` tag
- (B) Phase-szakaszolt: Phase A anchor (semax, mint Sub-Task 6 mintára) → ellenőrzés → Phase B maradék 7 → final tag
- (C) Per-peptid (8 commit) — kerülendő, kadencia-zaj

### Brainstorm-skill hátralevő lépések

7. Propose 2-3 approaches with trade-offs (Q7+Q8 után):
   - A: pure-inline (~240 manual edit)
   - B: subagent-driven (1 inline anchor + 7 subagent parallel, **recommended** `[[Hybrid_Inline_Subagent_For_Content_Plans]]` precedens szerint, wall-clock ~8 perc)
   - C: script-driven (`scripts/add-nasal-variants.mjs` mass-edit, deterministikus)
8. Present design sections (architektúra + per-peptid variant data + UI flow + validator/i18n impact)
9. Write spec MD: `docs/superpowers/specs/2026-05-21-nasal-spray-multivariant.md` + Obsidian mirror `MolekulaX_NasalSpray_Spec.md`
10. Spec self-review (placeholder/contradiction/scope/ambiguity)
11. User reviews spec → wait for approval
12. Invoke writing-plans skill → bite-sized step-by-step plan
13. Execute per Q8 ship-kadencia

### Implementation plan skeleton (pre-decided)

- **Phase A:** ID-konvenció + `variants[]` schema per peptid (8 entry × routeId konfig, defaultVariant=sc, IN routeId=in)
- **Phase B:** SC variant body = jelenlegi `dosageInfo`/`keyInfo` áttranszformálás → SC-specifikus mezők
- **Phase C:** IN variant body = új mezők (spray dose-per-actuation, intranasal bioavailability, faster onset)
- **Phase D:** Adapter passthrough check (`[[feedback_adapter_passthrough]]`)
- **Phase E:** UI smoke per Q7
- **Phase F:** Ship per Q8

### Subagent execution risks

- **`[[feedback_subagent_hallucinated_pmids]]` KRITIKUS** — RICH content-task subagent-ek PMID-fabrikációja v0.23-ban 10/13 hibás. **Build-gate KÖTELEZŐ:** `node scripts/verify-pmids.mjs` futtatása MINDEN peer-reviewed-cite-task subagent után
- Hybrid forrás-policy split:
  - 5 peptid PMID-tartalmaz (Semax/Selank/MT-1/MT-2/PT-141) → verify-pmids gate KÖTELEZŐ
  - 3 peptid NO PMID (Adamax/NA-Semax-Amidate/Adalank) → cite-string monitoring only

### Kritikus precedensek emlékeztetők

- **`[[Variant_Spread_Id_Collision_Silent_Bug]]`** — most fixálva (`5f6bf00`), de új `variants[]`-shape design előtt MIND a field-overlap audit kell (route-id-nek NE adj `id` field-nevet, vagy expliciten überschoold meg a base-en, ahogy az adapter most teszi)
- `[[VARIANT_IMAGE_OVERRIDES_Regex_Anchored]]` — ha multi-variant entry-k megosztanak image-et, regex-anchored override helper kell
- `[[Edit_Tool_Quote_Corruption]]` — bulk-edit >5 fájl-on Node `fs.readFileSync+writeFileSync`, NEM Edit-tool (ASCII→Unicode quote bug)
- `[[feedback_phase_specs_obsidian]]` — spec/plan repo-only, Obsidian = Statusz + Roadmap

### Resume-prompt copy-paste

> "Folytasd a nasal-spray multi-variant Phase C brainstorm-ot. Q1-Q6 megválaszolva (lásd `MAC_RESUME.md` §3 vagy a Statusz utolsó session-blokkja). Q7 (acceptance) + Q8 (ship-kadencia) hátra, majd approach-választás (subagent-driven javasolt), spec MD, self-review, plan, execute."

---

## 4. Last 5 session digest

### Session 5 — 2026-05-20 22:30→23:22 CEST — Post-roadmap hotfix-batch + nasal-spray brainstorm partial

**5 commit + 1 tag.** Silent prod-bug (variant.id collision EntryDetail-on, 13 multi-variant entry érintett) + i18n raw-key fix + affiliate-pill smooth-glide + ampoule/nasal-spray transparent-fix.

**Commit-ok:**
- `5f6bf00` fix(variants): preserve entry.id after variant spread + i18n error screen [TAG: `v0.25.1-variant-id-fix`]
- `7b9eb23` fix(affiliate): pin coupon pill to viewport on scroll
- `b4e34a5` feat(affiliate): smooth glide to corner once past announcement ribbon
- `144cfb4` fix(performance): strip fake-checker rendering from ampoule + nasal-spray
- `f3ad2dd` fix(performance): truly transparent ampoule + nasal-spray via magenta chroma-key

**Lessons learned:**
- `[[Variant_Spread_Id_Collision_Silent_Bug]]` — object spread `{...entry, ...variant}` field-overlap silent corruption; explicit re-assign kell. NULLA test fang-olta.
- `[[i18n_t_Fn_Raw_Key_Fallback_Trap]]` — `t()` raw-string fallback miatt `t('missing.key') || 'fallback'` SOHA nem ad fallback-et (truthy raw string). Tri-lingual literal vagy bundle-check kell.
- `[[Aggressive_Demagenta_Pass_Pattern]]` — sharp pixel-pass 2-szintű threshold (alpha-kill delta>60 + alpha>200 esetén; desaturate egyébként). Sealed-tip clearer mint a mild 80%-pull.

### Session 4 — 2026-05-20 21:15→22:21 CEST — Sub-Task 7 SHIPPED (`v0.25-perf-restructure-complete`)

**Roadmap 2026-06 100% LEZÁRVA.** Phase B-G inline pipeline (~50 perc): rembg bg-removal + sharp demagenta + convert-images + script-extend.

**6 új PNG template** (`public/performance/`-ben): nasal-spray-clear / inhaler-asthma / oral-syringe / transdermal-patch / topical-solution-clear / ampoule-glass (mind transparent PNG + WebP + AVIF derived).

**3 live entry-rebind:** Albuterol inhaled, L-Carnitine inj, RU58841 default.

**Új helper:** `applyVariantImageOverrides` regex-anchored a `scripts/update-library-images.mjs`-ben.

**Tag:** `v0.25-perf-restructure-complete` on `aa2e7aa`.

**Lessons learned:**
- `[[Read_Tool_Alpha_Channel_Misleading]]` — Read-tool image-mode fehér canvas-on rendereli transparent PNG-ket. Spec-eknél sharp `metadata()` `hasAlpha`/`channels` check kötelező.
- `[[Magenta_Chroma_Key_Workaround_For_Clear_Glass]]` — clear-glass/plastic image-gen Gemini-vel transparent-bg-vel megbízhatatlan (fake-checker). Workaround: solid `#ff00ff` request → rembg `isnet-general-use` → sharp custom demagenta pass.
- `[[VARIANT_IMAGE_OVERRIDES_Spec_vs_Actual_ID_Audit]]` — Spec-ben rögzített variant-ID-k (`l-carnitine.aq`) NEM mindig egyeznek az entry body-fájlokban használt id-vel (`l-carnitine.inj` — routeId-vs-id konfúzió). Plan/spec ELŐTT grep-audit kötelező.
- `[[Phase_B_Manual_Node_Script_For_Filled_String_Rebind]]` — `update-library-images.mjs` regex `"image":\s*null`-only mintára illeszkedik. Már stringes path-szal rendelkező entry-k rebind-jénél manuális Node script kell.

### Session 3 — 2026-05-20 19:30→21:10 CEST — Sub-Task 7 spec + plan SHIPPED LOCALLY (no ship yet)

**Brainstorm + writing-plans gate, kód NEM ment ki.** Phase A user-side Gemini-generálás blocking. Spec: `docs/superpowers/specs/2026-05-20-sub-task-7-images.md` (10 szekció). Plan: `docs/superpowers/plans/2026-05-20-sub-task-7-images.md` (7 phase × 30+ step).

**🚨 Kritikus spec-revízió közben:** a 2-style-family rule (white-bg vs black-bg) HIBÁS volt — a meglévő 9 referenciakép közül csak 2 solid-bg outlier, a többi mind transparent PNG. Read-tool composit-fehér-canvas félrevezetett. Spec rewrite + új memory entry `[[feedback_read_tool_alpha_misleading]]`.

**Lessons learned:**
- `[[Visual_Style_Verify_Before_Prompt_Spec]]` — image-asset spec ELŐTT vizuálisan ellenőrizd a meglévő referenciaképeket, NEM csak textuálisan rögzített style-leírás alapján.
- `[[Spec_Plan_NoShip_Pause_Pattern]]` — ha implementation plan első phase-e external-blocking (user-action/third-party), spec + plan LOCAL ONLY (NEM commit + push), elkerülve a "half-shipped state" zavart a master-en.

### Session 2 — 2026-05-20 17:40→19:12 CEST — Post-curation polish + cross-link batch

**3 commit + 2 tag.** Orphan tier cleanup (`v0.23.2-orphan-cleanup` on `2cc2226`), minor code-reviewer fixek (commit `0f5b8a5`), cross-frame related[] reciprokáció (`v0.24-cross-link-reciprocation` on `2c6a7a5`).

**Phase 13 cleanup audit:** DEFER permanent — `tr()`/`flat()` dual-shape drop félrevezető backlog-item; valójában 369 adapter-literal + 28 fn signature change kellene, 0 user-facing benefit. Memory frissítve.

**Lessons learned:**
- `[[Backlog_Wording_Verify_Before_Execute]]` — backlog-item-execute ELŐTT mindig pre-audit-step. WORDING-ja gyakran félrevezető (tagged-claim, NEM audit-confirmed).
- `[[Phase_13_Adapter_Defer_Permanent]]` — adapter rewrite önmagában nem indokolt cél.

### Session 1 — 2026-05-20 15:30→17:37 CEST — Peptide Curation SHIPPED (`v0.23-peptide-curation` + `v0.23.1-pmid-fix`)

**20 task / 6 phase / subagent-driven hybrid.** 5 RICH new entry (HCG/HMG/FSH-rec fertility + EPO endurance + GLOW multi-peptide stack) + 8 deprecated removed + cross-frame related[] reciprokáció + új `composition[]` shape field + `RedirectFlash.jsx` (1.8s flash + library-top redirect) + 10 hamis subagent-fabrikált PMID javítva + `scripts/verify-pmids.mjs` build-gate (NCBI eutils API).

**Tag-ek:** `v0.23-peptide-curation` on `630935b`, `v0.23.1-pmid-fix` on `6c7f356`.

**Peptid lib most: 55 entry** (volt 58 → −8 + 5).

**Lessons learned (KRITIKUSOK):**
- **`[[Subagent_Hallucinated_PMIDs_Critical]]`** — RICH content-task subagent-ek 10/13 PMID-ot fabrikáltak (training-data-pattern-matching, NEM valódi lookup). **General rule:** external-API-verifikáció build-gate KÖTELEZŐ minden RICH peer-reviewed-cite content-task után.
- `[[Cold_DeepLink_LIBRARY_META_Sync_Fields]]` — új library-szintű field-ek (deprecatedIds stb.) MIND LIBRARY_META + full lib export-ban duplikálva kell legyenek (cold-deep-link).
- `[[Composition_Field_New_Schema]]` — `composition: [{id, role, typicalDose}][]` library-shape field + `CompositionSection.jsx` clickable component-cards. Validator hard-fail composition-id existence check (same-lib only).
- `[[Deprecation_Redirect_Flash_Pattern]]` — `library.deprecatedIds: string[]` + `RedirectFlash` (1.8s flash overlay HU/EN/PL i18n) + setTimeout cancel-flag. SEO-graceful.

---

## 5. Memory pack (essential context)

> Ezek a `C:\Users\trolo\.claude\projects\e--Website-Biz\memory\` mappából exportált legfontosabb memory-entry-k. Mac-en a megfelelő ekvivalens lokáció: `~/.claude/projects/<this-repo-path>/memory/` ha auto-memory rendszer fut, vagy szimplán reference-ként használhatóak innen.

### Recovery protocols (read FIRST every session)

- **Loop recovery — "No response requested." protocol** — Recognize empty-reply loop early, never send a second one; restart with TodoWrite + concrete tool-call immediately.
- **Status-file read limit — max 5 sessions** — When opening `[Projekt]_Statusz.md`, use Read with `limit:400` (max 1200); never load the entire file (75k tokens waste on 300k-char doc).

### Active projects (workspace overview)

- **MolekulaX** (this) — 4-library farmakológiai edukáció `e:/Website Biz/molekulax/`, Chemical Green `#00ff99`, HU/EN/PL i18n. Roadmap 2026-05 + 2026-06 CLOSED, in-flight: nasal-spray Phase C brainstorm.
- **Donna Pizza** — React/Vite 5/Tailwind 3 site, all-Hungarian text, Node 20.18 constraint.
- **F3XYKEE Terminal** — Next.js 16 + Supabase military-HUD data network, Hungarian, neon green.
- **PTRK Systems** — Marathon-inspired design engineering portfolio, Next.js 15 + Tailwind v4, 8 custom fonts, 4-tab SPA.

### MolekulaX architecture essentials

- **Repo:** https://github.com/kriso-git/molekulax (master → Vercel auto-deploy)
- **Stack:** React 18 + Vite 5 + Tailwind 3, all-Hungarian primary + EN/PL i18n via `LanguageContext.jsx`
- **Tech tokens:** background `#050505`, accent `#00ff99` (Chemical Green), font Corporea (self-hosted `public/fonts/CORPOREA.TTF`)
- **4 library:** peptides (55), nootropics (48), performance (68), pharmaceutical (22) = 193 entry × 3 lang = 579 lang-chunk
- **Phase 12 architecture:** per-lang entries split — `LIBRARY_ENTRY_META` sync triplet + `entries/<lang>/<id>.js` flat-shape default-exports + Vite template-literal `import(\`./entries/${lang}/${id}.js\`)`
- **3D Library Cube nav:** 4-face cube (1 lib/face), Framer Motion rotateY-spring, wrap-around `signedShortestDelta` math, `useCubeIndex.js` hook
- **EntryDetail:** 2036 sor, `src/components/library/EntryDetail.jsx`, hybrid form factor (desktop full-page, mobil modal via `useMediaQuery`)
- **Adapter passthrough trap:** `adaptLibraryEntry.js` (1085 sor) explicit allowlist (NEM spread). Új optional Entry field-ek MUST be added to adapter return is.
- **Variants[] schema:** Phase 5 óta a performance-libben Albuterol/L-Carnitine-en, most fix `5f6bf00`-óta `id: entry.id` re-assign a spread után — KRITIKUS minden új variants[]-design-on figyelni hogy a variant `id` ne legyen field-overlap-ban az entry `id`-vel.

### Workflow feedback (must-follow rules)

1. **Always include tutorials for manual steps** — When a step needs to be done outside code, always add short inline tutorial with exact clicks/URLs.
2. **Forrás-policy HYBRID** — Studies/StudiesPanel = peer-reviewed only (PubMed/FDA/EMA/PubChem). Body content nootropic/performance/pharma = sean's curated notes + dopamine.club OK (no citation back). Peptid library FROZEN.
3. **Adapter passthrough** — explicit allowlist, nem spread; minden új optional Entry field MUST appear in adapter return.
4. **Mirror phase specs/plans to Obsidian** — `Projekt_Tudasbazis/` mappa, `MolekulaX_PhaseN_{Spec,Plan}.md` naming. Repo-only most már (lásd Phase 11 cleanup), DE Statusz + Roadmap mindig Obsidianban.
5. **Edit tool curly-quote conversion bug** — bulk-edit (>5 fájl) JSON-style data files-on Node `fs.readFileSync+writeFileSync` használat, NEM Edit-tool. ASCII→Unicode quote corruption.
6. **Plan-reference data accuracy** — Scientific/medical data tables in plans NEM ground truth. code-quality-reviewer independent verify (PubChem/FDA SmPC/PubMed) via WebFetch.
7. **Subagent-hallucinated PMIDs — KRITIKUS** — RICH content-task subagent-ek 10/13 PMID-ot fabrikáltak v0.23-ban. `scripts/verify-pmids.mjs` build-gate KÖTELEZŐ minden peer-reviewed-cite ship előtt.
8. **Cold deep-link LIBRARY_META sync fields** — új library-szintű field MIND a sync `LIBRARY_META`-ban ÉS a full library export-ban.
9. **Read-tool alpha-channel misleading** — Read-tool composit-fehér-canvas; alpha-state ellenőrzés sharp `metadata()` `hasAlpha`/`channels`, vagy `file <path>`, vagy real-application overlay.

### Production-ready precedensek

- **Phase 11/12 PWA + locale-split:** vite-plugin-pwa@1.3.0 Workbox precache + `LanguageContext` async-aware (HU sync-default, EN/PL dynamic-import).
- **Per-entry code-splitting (Phase 9):** mind 22 entry külön JS-file (5-32 KiB gzip).
- **Per-lang entries (Phase 12):** 165 entry × 3 lang = 495 lang-chunk (~2.6-3.3 KiB raw single-lang vs ~22 KiB combined triplet).
- **Inline CSS plugin (Phase 8):** custom 27-soros Vite plugin `transformIndexHtml` hookkal, CSS asset → `<style>` tag inline-ba.
- **AVIF + WebP picture-chain:** `scripts/convert-images.mjs` AVIF Q60 + WebP Q80, 95.6 MB → 1.19 MB total assets.

---

## 6. Working tree state (most-pre-push)

```
Branch: master  → tracks origin/master
HEAD:   afdd3f7
Status: 1 untracked dir (none) — committed peptide-vial-prompts spec
```

**Build verify (last run, 2026-05-20 23:22 CEST):**
- validator: PASS — 4 lib × 193 entry stable
- build: PASS 5.55s
- PWA precache: 105 entries / 3292 KiB (margin 1828 KiB az 5120 cap-ig)
- bundle vendor: 165.76 KiB

---

## 7. Mac setup — extra megfontolások

### 7.1 SSH/HTTPS GitHub auth

Ha SSH-key-t használsz Mac-en (ajánlott), `gh auth login` után `git remote -v` mutassa `git@github.com:kriso-git/molekulax.git`. Ha HTTPS, akkor `gh auth login --web` Personal Access Token-nel.

### 7.2 Node.js — nvm vs Homebrew

```bash
# nvm preferált (verzió-szabadság a többi projekthez)
brew install nvm
mkdir -p ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && \. "$(brew --prefix)/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc

nvm install 20.18.0
nvm use 20.18.0
nvm alias default 20.18.0
```

### 7.3 Python + rembg (csak ha image-fix workflow kell)

```bash
brew install python@3.10
pip3 install rembg
# Első futtatáskor letölti az isnet-general-use modellt (~179 MB)
rembg --version  # 2.0.69+ kell
```

### 7.4 Obsidian sync (Statusz fájl elérhetősége)

A `/handoff` command **abszolút útvonalat** vár az Obsidian Brain-re:
- Windows: `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/`
- Mac: `~/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/` (vagy `/Volumes/...`)

**Mac-CLAUDE.md update KELL** a `/handoff`-hoz! A globális szabályok abszolút path-t várnak, Mac-en ez `~/...` lesz. Vagy szimlinkkel: `ln -s /path/to/obsidian-mount ~/Obsidian` és működik a Windows-megfelelő struktúra. Vagy egyszerűbb: Windows-on a `~/.claude/CLAUDE.md`-ben átírni a 3 path-t Mac-megfelelőre (vagy egy környezetfüggő conditional-lal).

### 7.5 Sub-Task 7 image-fix workflow (ha újra szükséges)

```bash
# 1. Gemini-vel generálsz solid #ff00ff bg-vel
# 2. Backup
cp public/performance/<file>.png /tmp/<file>-magenta-src.png

# 3. rembg chroma-key
rembg i -m isnet-general-use /tmp/<file>-magenta-src.png public/performance/<file>.png

# 4. Sharp aggressive demagenta-pass (lásd session 5 logok a részletekért)
node -e "/* demagenta-pass script — see this MD §4 session 5 */"

# 5. WebP/AVIF regen
rm -f public/performance/<file>.webp public/performance/<file>.avif
npm run convert-images

# 6. Build + commit + push
npm run build && git add public/performance/ && git commit -m "..." && git push
```

---

## 8. Vercel + GitHub state

- **Vercel project:** `molekulax` (auto-deploy master branch, ~3 perc deploy time)
- **Vercel live URL:** https://molekulax.vercel.app
- **Custom domain:** `molekulax.com` HTTP 000 (DNS / Vercel Settings issue, backlog item — NEM prio)
- **Dependabot:** 2 moderate vulnerability (backlog item, GitHub Security tab-on)

---

## 9. Quick smoke-test plan a Mac-clone után

1. `git log --oneline -7` — első 7 commit egyezzen ezzel a fájllal §1 sectionnel
2. `npm install` — fail-mentes (Node 20.18.x kell)
3. `npm run build` — validator PASS + vite build PASS
4. `npm run dev` → http://localhost:5173
5. Manual smoke:
   - Home page betölt, kupon-pill bal-felül, oldal-tetejétől sarokba görgéskor smooth-glide-ol
   - LibraryCube rotate (4 face)
   - L-Carnitine card-on variant-toggle: `oral` → `inj` (várt URL: `#entry/performance/l-carnitine/inj`, NEM `oral/inj` — bug fix-ed `5f6bf00`)
   - Error-screen: `#entry/performance/foo` → "Nincs ilyen entry" + "Vissza a könyvtárhoz" HU (nyelvváltó EN/PL)
   - Ampoule-glass image L-Carnitine inj-variant-on: tiszta clear-glass szilhuett, NEM checker, NEM magenta

---

## 10. Kérdéseid esetén

A teljes session-archív + lessons + memory-pack itt él:
- **GitHub repo** (kód + spec/plan MD-k): https://github.com/kriso-git/molekulax/tree/master/docs/superpowers/
- **Obsidian Brain** (Statusz + Roadmap + memory):
  - `MolekulaX_Statusz.md` — utolsó 5+ session részletesen
  - `MolekulaX_Roadmap_2026-05.md` — 12 fázis archív
  - `Megoldott_Problemak/` — `[[Light_Mode_Inline_Rgba_Trap]]`, `[[Animated_Filter_Brightness_Paint_Storm]]`, `[[Context_Value_Identity_Cascade]]`, `[[Permanent_Will_Change_GPU_Pressure]]`, stb.
- **Auto-memory** (Windows-only ATM): `C:\Users\trolo\.claude\projects\e--Website-Biz\memory\` — Mac-ekvivalens az auto-memory-rendszer Mac-installa után jön létre

**Resume-prompt next session-be (másold be):**
> "Folytasd a nasal-spray multi-variant Phase C brainstorm-ot. Q1-Q6 megválaszolva (lásd `MAC_RESUME.md` §3). Q7 (acceptance) + Q8 (ship-kadencia) hátra, majd approach-választás, spec MD, plan, execute."

---

*Generálva 2026-05-20 23:28 CEST Windows desktop → Mac laptop átállás kontextusában. Ha módosul a master, ez a fájl is frissítendő.*
