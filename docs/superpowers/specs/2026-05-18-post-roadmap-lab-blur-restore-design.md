# Post-Roadmap Mega-PR Design — Lab Terminal + Library Blur + EntryDetail State Restoration

**Date:** 2026-05-18 (post `v0.12-perlang-stable`)
**Scope:** 3-task user-requested UX/data PR, packaged as single mega-PR (Phase 12 stílusban)
**Tag-jelölt:** `v0.13-lab-blur-restore`
**Sorrend:** C → B → A (kicsi → nagy, user-megadott)

## Goal / Success metric

A 2026-05-18 user-requested post-roadmap PR három diszkrét UX/data javítást szállít egy session/PR keretében:
- **C (state-restore):** EntryDetail close-on visszadob a kattintás-pillanatbeli library + scroll + search + filter + sort + cube-face állapotba — user-explicit kérés.
- **B (blur-fix):** LibraryGallery tiles + LibraryCube faces teljes 4-pontos vizuális élesség-audit + fix.
- **A (lab-data-refresh):** Pharma (40 entry) + Performance (17 entry) library Lab Terminal-je nem "-" / "N/A" placeholderre esik, hanem library-specifikus 6-soros release-grade adatot renderel; peptide library változatlan.

**Success metric:** mind 3 task acceptance-checklist-en PASS, build green, 3-URL × 3-lang Lighthouse smoke ≥85/95/96/100, `v0.13-lab-blur-restore` tag push-olva.

## Architecture overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                       Mega-PR (~16-22 commit)                       │
│                                                                     │
│  Step 0: spec + plan docs commit                                    │
│                                                                     │
│  ┌── Task C ──────────────────────────────────────────────────┐    │
│  │  sessionStorage snapshot/restore                            │    │
│  │  - LibraryGallery.openEntry() → snapshot publish            │    │
│  │  - EntryDetailRoute.closeDetail() → restore consume         │    │
│  │  - State persisted: scrollY, libraryId, query, filters,    │    │
│  │    sortMode, expanded, cubeFace, session-token (≤30 min)   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌── Task B ──────────────────────────────────────────────────┐    │
│  │  Full 4-point blur audit + fix sweep                        │    │
│  │  - .glass backdrop-filter strength audit                    │    │
│  │  - image-rendering flag on EntryImage tiles                 │    │
│  │  - Tailwind blur-* utility scan                             │    │
│  │  - LibraryCube transform GPU-layer + integer-degree         │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌── Task A ──────────────────────────────────────────────────┐    │
│  │  Library-aware deriveMolecular() + minimal new fields       │    │
│  │  - A.1: refactor (deriveMolecular(p, lib) branched)        │    │
│  │  - A.2: pharma bioavailability data fill (40×3)            │    │
│  │  - A.3: perf aromatization + hepatotox fill (17×3)         │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  End: live LH 3-URL × 3-lang smoke + tag push                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Task C — EntryDetail close → scroll & state restoration

### Probléma

`closeDetail()` (`src/components/library/EntryDetailRoute.jsx:96-106`) jelenlegi viselkedése: ha `parsed.library` van, `setLibraryId(parsed.library)`-vel beállítja a context-et, majd `window.location.hash = 'library'`-re ugrik. Ez **nem** állítja vissza:
- a kattintás-pillanatbeli scroll-pozíciót,
- a LibraryGallery search query-jét (`query` state),
- az aktív category filtereket (`activeFilters`),
- a research-level filtereket (`levelFilters`),
- a sort módot (`sortMode`),
- az All-accordion expanded állapotát (`expanded`),
- a LibraryCube aktív face-ét (a `setLibraryId` ezt szinkronizálja, de nem a többi UI state-et).

User-explicit kérés (2026-05-18): "ha pedig vissza a könyvtárra kattintok akkor a jelenlegi könyvtárra amiben rákattintottam a kártyára dobjon vissza, ha X-el zárom be a kártyát akkor is oda dobjon vissza ahol tartottam, megjegyzett szűrőkkel keresővel stb".

### Architektúra döntés: sessionStorage snapshot

A `LibraryGallery` lokál state-je (`useState`) **változatlan** marad — nem lift-elünk Context-be. A snapshot–restore pattern egy egyszeri kulcs alatt (`molekulax:returnState`) él a sessionStorage-ben:

```js
{
  token: 1747559104000,                      // Date.now() session-egyedi azonosító
  scrollY: 1843,                              // window.scrollY a kattintás pillanatában
  libraryId: 'pharmaceutical',                // a kattintott library
  query: 'metf',                              // LibraryGallery query state
  activeFilters: ['cardio', 't2dm'],          // category id-k
  levelFilters: [4, 5],                       // research level numbers
  sortMode: 'level',                          // 'az' | 'za' | 'level'
  expanded: true,                             // All-accordion nyitva volt-e
  cubeFace: 'pharmaceutical'                  // melyik LibraryCube face volt aktív
}
```

### Implementation flow

**Snapshot-publisher** (`LibraryGallery.jsx`):

A komponens lokál state-jeit egy `useEffect`-tel publikálja egy `useRef`-be (`stateRef.current = { query, activeFilters, … }`) — ez nem váltja ki a re-rendert. Az `openEntry()` függvény (jelenleg `LibraryGallery.jsx:236-240`) átkerül `PeptideTile.onSelect` callback-be vagy egy függvényreference-be amely **a `stateRef.current`-ből épít snapshot-ot**, plusz `window.scrollY` + `library.id` + esetleg `cubeFace`. A `sessionStorage.setItem('molekulax:returnState', JSON.stringify({token: Date.now(), ...}))` lefut a `window.location.hash` set ELŐTT.

A cubeFace olvasása a `LibraryContext`-ből — a `LibraryProvider` `currentLibrary.id`-t ad. Ha a snapshot a `libraryId !== cubeFace`-t lát (theoretically nem lehet, de defensive), a libraryId nyer.

**Snapshot-consumer** (`EntryDetailRoute.jsx`):

A `closeDetail()` függvény átírva:

```js
const closeDetail = () => {
  if (typeof window === 'undefined') return
  let restoreData = null
  try {
    const raw = sessionStorage.getItem('molekulax:returnState')
    if (raw) {
      const parsed = JSON.parse(raw)
      const ageMs = Date.now() - (parsed.token || 0)
      if (ageMs >= 0 && ageMs < 30 * 60 * 1000) {
        restoreData = parsed
      }
      sessionStorage.removeItem('molekulax:returnState')
    }
  } catch (e) { /* corrupted JSON → fresh landing */ }

  if (restoreData) {
    // expose to LibraryGallery via window.__libraryGalleryPendingRestore__
    window.__libraryGalleryPendingRestore__ = restoreData
    setLibraryId(restoreData.libraryId)
    window.location.hash = 'library'
    // LibraryGallery mount/useEffect picks up window.__libraryGalleryPendingRestore__
  } else {
    // current behavior
    if (parsed?.library) setLibraryId(parsed.library)
    if (window.location.hash === '#library') {
      requestAnimationFrame(() => {
        document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.location.hash = 'library'
    }
  }
}
```

**Restore-consumer** (`LibraryGallery.jsx` `useEffect`):

```js
useEffect(() => {
  const pending = window.__libraryGalleryPendingRestore__
  if (!pending || pending.libraryId !== library.id) return
  // restore state in order
  setQuery(pending.query || '')
  setActiveFilters(pending.activeFilters || [])
  setLevelFilters(pending.levelFilters || [])
  setSortMode(pending.sortMode || 'az')
  setExpanded(pending.expanded || false)
  if (pending.expanded) setHasOpened(true)
  // wait next paint, then scroll
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: pending.scrollY || 0, behavior: 'instant' })
    })
  })
  delete window.__libraryGalleryPendingRestore__
}, [library.id])
```

**Trigger-paths** (mind a 3 ugyanazt csinálja, mert mind `closeDetail`-t hív vagy hash-transition-on keresztül):
1. ESC key → `closeDetail()`
2. X gomb / Vissza gomb az EntryDetail UI-ban → `closeDetail()`
3. Browser back gomb → `popstate` → hash változás `#entry/lib/X` → `#library` → `parsed` null lesz a `EntryDetailRoute`-ban → de a `closeDetail()` nem fut le ebből, hashchange listener kell

⚠️ **Edge-case**: a browser-back path-on a `closeDetail()` nem fut. Megoldás: a `closeDetail` logikáját ki kell emelni egy külön függvénybe (`handleHashTransition`), amit egy hashchange `useEffect` is meghív, ha a hash `#entry/...` → `#library` átmenetet detektál. Implementáció során verifikálandó.

### Edge cases

| Eset | Behavior |
|---|---|
| Direct deep-link `#entry/lib/X` (nincs snapshot) | `restoreData = null` → fresh #library landing (current behavior) |
| RelatedCard navigation `entry/lib/A` → `entry/lib/B` | `closeDetail()` nem fut; snapshot érintetlen marad |
| Snapshot stale (>30 min) | Token-check fail → fresh landing + sessionStorage clear |
| Snapshot corrupted JSON | `try/catch` → fresh landing + sessionStorage clear |
| User reload `#entry/lib/X`-en | sessionStorage browser-default törlődik → fresh landing closeDetail-kor |
| Cross-library snapshot (snapshot=pharma de jelenleg peptides face) | `setLibraryId(pending.libraryId)` library-t váltja először; useEffect várja a library.id changeet, restore-ol |

### Komponens-érintettség (Task C)

- `src/components/LibraryGallery.jsx`: snapshot publisher (~30 sor) + restore consumer useEffect (~25 sor)
- `src/components/library/EntryDetailRoute.jsx`: `closeDetail` átírás (~25 sor changed) + hashchange listener (~15 sor új)

### Acceptance criteria (Task C)

1. Pharma library kibontva → query "metf" → category filter aktív → tile click → X gomb → vissza a pharma library szekcióhoz, query + filter + scroll-pozíció **mind helyreáll**
2. ESC key path: ugyanaz mint X
3. Browser back path: ugyanaz mint X
4. Cube-face switch (peptides → pharma) → tile click → close → vissza pharma face-en
5. 3 lang (HU/EN/PL switcheléssel entry-detail közben) — close-on a snapshot library + state érintetlen
6. Direct deep-link `#entry/lib/X` (új tab) → close → fresh #library landing (NO restore, nincs snapshot)

## Task B — Library blur / élesség teljes 4-pontos audit + fix

### Probléma

User-explicit (2026-05-18): "a könyvtárak (LibraryGallery tiles + LibraryCube faces) blurry / elmosódottnak tűnnek." Konkrétan a tile szöveg (peptide név, tier label, chip), a vialok / molekula-képek (EntryImage WebP/AVIF), és általában az egész peptid-rész.

A blur-érzés 4 lehetséges okra vezethető vissza, amiket teljes körben audit-olunk:

### Audit + fix scope (4 kandidát)

**1. `.glass` utility class backdrop-filter (likely culprit)**

- Hely: `src/index.css` (Phase 1-2 óta). Használat: `LibraryGallery.jsx:374` (All-accordion button), és potenciálisan más layoutokban.
- Diagnózis: `grep -rn "backdrop-filter|backdrop-blur" src/` + DevTools Computed style pane a tile background-on
- Tipikus érték: `backdrop-filter: blur(12-16px)`. Ha az overlay overlap-ben van a tile content-tel, az alatta lévő tile szöveg/kép **vizuálisan elmosódottnak tűnik**.
- Fix-irány: ha overlap-detection → blur-strength csökkentés `12-16px → 6-8px`, vagy ha pure overlay (nincs alatta content) → érintetlen
- Risk: a `.glass` esztétikai feel része volt a kezdeti dark minimalist design-nak. Ha removal-after a vizualitás sérül, user-confirm szükséges screenshotokkal commit előtt.

**2. `image-rendering` flag az EntryImage WebP/AVIF tile-okon**

- Hely: `src/components/EntryImage.jsx` + a `LibraryGallery.jsx:99-107` square wrapper
- Diagnózis: DevTools Network → Tile-image → "Rendered size vs Intrinsic size" — ha az intrinsic kisebb mint a rendered, browser bilinear upscale = blurry; ha image-rendering nem deklarált, fallback "auto" = bilinear
- Fix-irány: `style={{ imageRendering: '-webkit-optimize-contrast' }}` az img-elemen, VAGY `index.css`-ben `.peptide-tile img { image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; }`. Selector szigorúan a tile img-ekre, NEM all img-en (hogy az EffectsSection / EntryImage Hero variant érintetlen maradjon).
- Verify: zoom 200% DevTools-ban, pixel-edge artifact OK

**3. Tailwind `blur-*` utility ráragadt valahol (alacsony valószínűség)**

- Diagnózis: `grep -rn "class.*blur-" src/components/LibraryGallery.jsx src/components/library/cube-nav/`
- Várt finding: nincs (csak gradient-radial `filter: 'blur(0.5px)'` a tier-halo-n shared.jsx:127, ami szándékos)
- Ha találunk: remove, kivéve ha decorative/halo

**4. LibraryCube transform half-pixel rounding + GPU-layer hiány**

- Hely: `src/components/library/cube-nav/LibraryCube.jsx` + `CubeFace.jsx`
- Diagnózis: DevTools Layers pane → minden face külön layer? Performance pane → rotation-onerede paint event-ek
- Fix-irány:
  - `transform-style: preserve-3d` cube container-en (ha hiányzik)
  - `backface-visibility: hidden` minden face-en
  - `transform: translateZ(0)` GPU-layer promotion a face wrapper-eken (rendering crisper)
  - `will-change: transform` csak rotation-időben (ha mindig rajta van, memory-pressure; Phase 7 best-practice szerint dinamikus)
  - Integer-degree rotations (90/180/270, nem 89.5/90.5)
- Verify: rotation közben a `<span>peptide-name</span>` szöveg crisp marad, NEM smudges

### Fix-commitokra bontva (Task B)

| Commit | Scope | Fájlok |
|---|---|---|
| B.1 | `.glass` blur-strength audit + szelekt csökkentés | `src/index.css` |
| B.2 | image-rendering flag az EntryImage tile-okra | `src/index.css` (selector) vagy `EntryImage.jsx` |
| B.3 | LibraryCube transform stabilization | `LibraryCube.jsx`, `CubeFace.jsx` |
| B.4 (opt) | Tailwind blur-* utility removal | per-finding |

### Acceptance criteria (Task B)

1. `npm run dev` → DevTools Computed style pane → tile background-on backdrop-filter strength ≤8px VAGY removed
2. Tile képek (Metformin vial, BPC-157 vial) zoom 200% — pixel-edge crisp
3. LibraryCube rotation 4 face-en végig — text + image crisp minden frame-en
4. 3 lang (HU/EN/PL) switch — lang-change után nincs flicker / blur-jump
5. Before/after screenshot mellékelve a commit message-hez B.1 / B.3-nál (esztétikai user-confirm)

### Risk-flag (Task B)

- `.glass` removal-after design-grade érzés sérülhet. Mitigation: B.1 előtt before/after screenshot, ha kérdéses → user-confirm commit előtt.
- `image-rendering: crisp-edges` nem támogatott minden browser-en (csak Firefox); a `-webkit-optimize-contrast` Chrome/Edge/Safari-n megy. Mindkettő deklarálva.

## Task A — Lab Terminal library-aware data refresh

### Probléma

`LabTerminal` komponens (`src/components/library/entry-detail/shared.jsx:143-199`) `peptide.molecular` array-t renderel. Az array-t az adapter `deriveMolecular(peptide)` adja (`src/components/library/adaptLibraryEntry.js:221-236`), ami **peptide-specifikus** `keyInfo` label-fragmenseket keres (`'típus'`, `'szerkezet'`, `'molekulatömeg'`, `'célterület'`, `'tárolás'`, `'stabilitás'`). Pharmaceutical + performance entry-knek NINCS ilyen label-jük (ott `'ATC kód'`, `'Vény-státusz'`, `'Hatásmechanizmus'`, `'Felezési idő'`, `'Hatáskezdet'` stb. szerepel), így a Lab Terminal "-" / "N/A" placeholdereket renderel mindenhol → nem hasznos a usernek.

### Felfedezés: a legtöbb adat MÁR ott van

Brainstorming során az fs-grep megerősítette, hogy:

**Pharma entry példa (Metformin)** — már megvan top-level fieldként:
- `atcCode: "A10BA02"`
- `prescriptionStatus: "Vényköteles (Rx)"`
- `mechanism: "AMPK-aktivátor, hepatikus glukoneogenezis-gátló"`
- `halfLife: "4-9 h (plasma), ~17 h (erythrocyte compartment)"`
- `onsetTime: "1-3 h (single dose), 4-7 days (steady-state HbA1c)"`
- **HIÁNYZIK**: `bioavailability`

**Perf entry példa (Testosterone)** — már megvan top-level fieldként:
- `androgenicRatio: "100:100"`
- `bindingAffinity: "AR-affinitás referencia 100% (minden más AAS ehhez viszonyítva)."`
- `halfLifeActive: "~24 h free testosterone after ester hydrolysis"`
- `detectionWindow: "Injektált észter: 3-4 hónap vizeletből. T/E arány (karbon-izotóp, IRMS) akár 6 hónap."`
- **HIÁNYZIK**: `aromatization`, `hepatotoxicity`

Tehát a Statusz.md eredeti "~1000 lang-cell" becslése **~78%-kal csökkent** — realisztikusan ~222 új cell × 3 lang ≈ várt feladat. Refactor-csapás + minimális új-data fill.

### Architektúra döntés: library-aware DERIVED + 1-3 új top-level field

`deriveMolecular(peptide, library)` library.id-alapján branchel:

```js
function deriveMolecular(peptide, library) {
  if (library.id === 'pharmaceutical') return derivePharmaMolecular(peptide)
  if (library.id === 'performance')    return derivePerfMolecular(peptide)
  return derivePeptideMolecular(peptide)   // unchanged
}
```

### Pharma row-set (40 entry)

| Row | Forrás (peptide field) | Példa (Metformin) |
|---|---|---|
| ATC kód | `peptide.atcCode` | `A10BA02` |
| Vény-státusz | `peptide.prescriptionStatus` | `Vényköteles (Rx)` |
| Hatásmechanizmus | `peptide.mechanism` (truncate 60 char) | `AMPK-aktivátor, hepatikus glukoneogenezis-gátló` |
| Felezési idő | `peptide.halfLife` | `4-9 h (plasma), 17 h (RBC)` |
| Hatáskezdet | `peptide.onsetTime` | `1-3 h (single dose)` |
| **Biológiai hasznosulás** ⭐ ÚJ | `peptide.bioavailability` | `~50-60% (oral)` |

⭐ = új field per entry × 3 lang = 40 × 1 × 3 = **120 új cell**

### Perf row-set (17 entry)

| Row | Forrás (peptide field) | Példa (Testosterone) |
|---|---|---|
| Androgenic:Anabolic | `peptide.androgenicRatio` | `100:100` |
| Binding affinity (AR) | `peptide.bindingAffinity` (truncate 60 char) | `100% reference` |
| Aktív felezési idő | `peptide.halfLifeActive ?? peptide.halfLife` | `~24 h free T` |
| Detection window | `peptide.detectionWindow` | `3-4 hó (injektált)` |
| **Aromatization** ⭐ ÚJ | `peptide.aromatization` | `Igen (CYP19→E2)` |
| **Hepatotoxicity tier** ⭐ ÚJ | `peptide.hepatotoxicity` (`low\|medium\|high\|severe`) | `Low (non-17α-alkilált)` |

⭐ = 2 új field × 17 × 3 lang = **102 új cell**

### Peptid row-set (60 entry)

**VÁLTOZATLAN** — jelenlegi 6 sor: Típus/Szerkezet/MW/Célterület/Tárolás/Stabilitás. A `derivePeptideMolecular(peptide)` az új névre keresztelt függvény, identikus a régi `deriveMolecular(peptide)` logikával (`findFactByLabel(keyInfo, …)` minta).

### Adapter passthrough + shape.js bővítés

`src/data/libraries/shape.js` (Entry typedef):

```js
/**
 * @property {I18nString} [bioavailability]    pharma only
 * @property {I18nString} [aromatization]      performance only
 * @property {'low'|'medium'|'high'|'severe'} [hepatotoxicity]   performance only
 */
```

⚠️ **`adaptLibraryEntry.js` allowlist** ([[feedback_adapter_passthrough]] szerint kritikus): a return-object explicit kibővítendő:

```js
return {
  // ... existing 30+ fields ...
  bioavailability: peptide.bioavailability,
  aromatization: peptide.aromatization,
  hepatotoxicity: peptide.hepatotoxicity,
  // ... rest ...
}
```

Build-validator (`scripts/validate-library-meta.mjs`) bővítés:
- Pharma library: SOFT-WARNING ha `bioavailability` hiányzik (40-ből pilot fázisban várhatóan 37 missing)
- Perf library: SOFT-WARNING ha `aromatization` vagy `hepatotoxicity` hiányzik
- Peptid library: NINCS check (változatlan)
- Soft-fail vs hard-fail: pilot 3-2 entry után, mire a tömeges fill kész → ⚠️ → automatikusan hard-fail-re vált

### Adat-gyűjtés protocol (HYBRID forrás)

Per missing cell, ebben a sorrendben ([[feedback_forbidden_sources]] szerint):

1. **Peer-reviewed (elsőbbség):**
   - Pharma `bioavailability`: FDA SmPC (accessdata.fda.gov, label szekció 12.3) → EMA EPAR → PubChem → DrugBank
   - Perf `aromatization`: PubMed (Bhasin, Schänzer, Hartgens-Kuipers AAS review-k)
   - Perf `hepatotoxicity` tier: Pope-Kanayama AAS review + PubChem MeSH + Snapchat-grade WADA prohibited list note
2. **Secondary fallback (csak ha peer-reviewed nem elérhető):**
   - Drugs.com → RxList → MedlinePlus → AustralianPI → Examine.com (utóbbi csak supplement-adatra)
3. **Forrás-jegyzet a commit-comment-ben** (pl. `metformin bioavailability: ~50-60% (FDA SmPC 2017, Glucophage label, Section 12.3, accessdata.fda.gov)`)

### Rollout per-entry kötegre bontva (Task A)

**A.1: `deriveMolecular` refactor + shape.js + adapter allowlist** (1 commit, low risk)
- Library-aware branch implementálva, shape.js + allowlist + build-validator soft-warning
- Build green minden entry-n (missing fieldek `'-'` / `'N/A'` placeholderre esnek)

**A.2: pharma `bioavailability` data fill — 40 entry × 3 lang = 120 cell** (5-8 commit, medium risk)
- Script-based ([[feedback_edit_tool_quote_corruption]] miatt NEM Edit tool!): `scripts/add-pharma-bioavailability.mjs` Node fs.readFileSync + writeFileSync mintát alkalmaz, ami a JSON-payloadot mergel-i
- Risk-ordered pilot: 3 entry (metformin, amlodipine, apixaban — eltérő ATC-osztály) → user-gate → többi 37 batched commitokban (kötegenként 8-10 entry × 3 lang)
- Forrás-jegyzet minden commit-message-ben

**A.3: perf `aromatization` + `hepatotoxicity` data fill — 17 entry × 3 lang × 2 field = 102 cell** (3-4 commit, medium-high risk)
- Ugyanaz a script-based pattern
- Risk-ordered pilot: 2 entry (testosterone-info, anavar-info — eltérő hepatotox profil) → user-gate → többi 15 batched 5-8 entry/commit
- Forrás-jegyzet minden commit-message-ben

### Acceptance criteria (Task A)

1. Pharma metformin nyit (3 lang váltva) → Lab Terminal 6 sor: ATC + Rx + AMPK + 4-9h + 1-3h + bioavailability mind látszik, nincs `-` / `N/A`
2. Pharma amlodipine + apixaban: Lab Terminal 6/6 row nem placeholder mind HU/EN/PL
3. Perf testosterone-info: 100:100 + AR-ref + ~24h + 3-4hó + Aromatizes + Low tier mind 3 lang
4. Perf anavar-info: 24:322 + AR-low + 8h + 3 hét + No-aromatization + Severe-tier (17α-alkilált) — eltérő profil
5. Peptid bpc-157: Lab Terminal ugyanaz (Típus/Szerkezet/MW/Célterület/Tárolás/Stabilitás) — **regression-check kritikus**
6. Build validator zöld: pharma 40/40 entry has `bioavailability`, perf 17/17 has `aromatization` + `hepatotoxicity`
7. Adapter passthrough audit: minden új mező a return-object-ben szerepel ([[feedback_adapter_passthrough]] verify)

### Risk-flag (Task A)

- **Plan-reference data accuracy** ([[feedback_plan_reference_accuracy]]) — a fenti adattáblák ("Metformin 50-60%", "Testosterone Aromatizes", "Anavar Severe-tier") **NEM ground truth**. A `code-quality-reviewer` subagent vagy egy dedikált verifier-agent minden cella-szintű adatot WebFetch-csel verifikál PubChem/FDA SmPC/PubMed-en commit előtt.
- **Edit-tool curly-quote trap** ([[feedback_edit_tool_quote_corruption]]) — 17+40 = 57 fájl × 3 lang = 171 file edit. Tilos Edit tool, csak script-based fs.readFileSync/writeFileSync.
- **Build-validator soft → hard fail flip timing** — ha túl korán váltunk hard-fail-re, a pilot kötegek után buildet törhetjük a többi entry mégis hiányzik. Soft → hard csak akkor, amikor mind 40 pharma + 17 perf befejeződött.

## Mega-PR teljes csomagolás

### Task sorrend (C → B → A user-megadott)

| Lépés | Commit-szám | Risk |
|---|---|---|
| Step 0: spec + plan docs commit | 1 | none |
| **C**: state-restore (snapshot + restore + hashchange listener + smoke) | 2-3 | medium (LibraryGallery state-snapshot risk) |
| **B**: blur 4-pontos audit + fix | 3-4 | low-medium (esztétikai screenshot-confirm B.1-B.3-nál) |
| **A.1**: `deriveMolecular` refactor + allowlist + shape.js | 1 | low |
| **A.2**: pharma `bioavailability` (40 × 3, script-based, pilot 3 → többi 37) | 5-8 | medium (data accuracy) |
| **A.3**: perf `aromatization` + `hepatotox` (17 × 3 × 2, pilot 2 → többi 15) | 3-4 | medium-high (data accuracy) |
| **End**: live LH 3-URL × 3-lang smoke + tag push `v0.13-lab-blur-restore` | 1 | low |
| **Total** | **16-22 commit** | |

### Smoke / acceptance gate (per task + final)

- Build green minden commit után (`npm run build`)
- Manual smoke per task végén (a fenti checklist-ek)
- Final Lighthouse mobile 3-URL × 3-lang smoke (home + metformin + testosterone-info × HU/EN/PL = 9 LH-run): ≥85 Perf / ≥95 A11y / ≥96 BP / 100 SEO
- NEM 10-URL sweep mint Phase 12 — task-szintű PR, kisebb scope, túlzott lenne

### Új tag-javaslat

`v0.13-lab-blur-restore` — a v0.12 utáni első task-szintű post-roadmap PR. Tag-megerősítés implementation előtt vagy után user-call.

### Memory + Obsidian sync (post-implementation)

- `project_molekulax.md` memóriában új bullet a v0.13-tag-szakasz alá
- `MolekulaX_Roadmap_2026-05.md` Roadmap fájlban új "Post-roadmap items" alatti completed-szekció (vagy a 🔮 lista ezeket eltávolítja, ahogy elkészültek)
- Új feedback memo, ha új tanulság születik (pl. sessionStorage snapshot pattern általánosítása más oldalakra)
- `MolekulaX_Statusz.md` új session-blokk a tetejére `/handoff`-fal

### Out-of-scope (NEM ebben a PR-ben — sem most, sem később)

- ❌ **`molekulax.com` custom domain** — user-discarded 2026-05-18, véglegesen kivéve a Roadmap + Statusz + memory backlog-okból
- ❌ **SARMs library** — user-discarded 2026-05-18, véglegesen kivéve

### Out-of-scope (külön session / külön PR)

- Phase 13 backlog: `flat()` dual-shape drop + entry-level `tr()` removal (külön session, 1-2 hét stabilitás után)
- Prefetch on hover
- Install-prompt in-app banner UX
- SSR / Next.js migration
- AVIF Q-tuning per asset-class
- 3-run Lighthouse median GH Action
- Workbox `globIgnores` preemptive defense

## Brain references (cross-link)

- [[feedback_adapter_passthrough]] — adapter return-object allowlist explicit kibővítés (Task A kritikus)
- [[feedback_forbidden_sources]] — Studies/StudiesPanel peer-reviewed only, content-body HYBRID (Task A adat-forrás)
- [[feedback_edit_tool_quote_corruption]] — bulk-edit JSON-style files curly-quote bug (Task A script-based fill mandatory)
- [[feedback_plan_reference_accuracy]] — spec adattáblák NEM ground truth, verifier-szakasz (Task A)
- [[feedback_status_file_read_limit]] — Statusz.md max 5 session read-limit
- [[MolekulaX_Roadmap_2026-05]] — 12-Phase closed roadmap, Post-roadmap items szekció
