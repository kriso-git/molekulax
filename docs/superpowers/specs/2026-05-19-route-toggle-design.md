# Route-toggle feature — Design Spec

**Date:** 2026-05-19
**Author:** Claude (brainstormed with user)
**Scope:** Multi-route administration toggle on EntryDetail for Minoxidil + Superdrol
**Tag target:** `v0.16-route-toggle` (after Phase A `v0.14-library-trim` + Phase B `v0.15-library-images`)

---

## 1. Context

A `2026-05-18-library-image-prompts.md` brainstorm során a user 2 entry-nél explicit megfogalmazta hogy **több form factor / adagolási mód** létezik:
- **Minoxidil** — orális blister (5mg pill, off-label hair loss) + topikális amber dropper bottle (5% solution, primary hair-loss indikáció)
- **Superdrol** — scored white tablet pile (oral c17α-methyl, súlyos hepatotoxicitás) + clear-glass oil vial (intramuszkuláris injektábilis methyldrostanolone, lényegesen kisebb hepatic stress)

A user a 2026-05-19 sessionben explicit kérte hogy ezen entry-knél a kártyán (= EntryDetail) **egy gomb a név mellett** váltsa a megjelenített adatot az **egész oldalon**, route-aware módon.

**Scope-decision (user-elfogadva):** csak Minoxidil + Superdrol kapja ebben a körben. A toggle architektúra reusable marad — jövőbeli entry-knél a `variants` shape bekapcsolható.

---

## 2. Feature breakdown — 3 fázis

A munka **3 különálló fázisra** bontódik, **3 commit + 3 opcionális tag**:

| Fázis | Mit csinál | Becsült idő | Commit + Tag |
|---|---|---|---|
| **Phase A** | 21 entry deletion (a már megírt `2026-05-18-library-entry-deletion.md` plan szerint) | ~30-40 min | 1 commit, opcionális `v0.14-library-trim` |
| **Phase B** | Image integration: filename normalizálás, AVIF+WebP konverzió, template-mapping, `image:` path-update | ~30-45 min | 1 commit, opcionális `v0.15-library-images` |
| **Phase C** | Multi-route toggle feature (e spec scope) | ~60-90 min | 1 commit, opcionális `v0.16-route-toggle` |

Phase A és Phase B mechanikus végrehajtás, már specifikálva. Az alábbi szakaszok **csak a Phase C-ről** szólnak.

---

## 3. Data shape — Hybrid (shared base + variants array)

A 3 megvizsgált megközelítés közül a **Hybrid** lett kiválasztva (user-elfogadva).

### 3.1 Mező-határ: SHARED vs VARIANT

Az entry-shape kétfelé bomlik:

**SHARED (top-level entry mező, egyszer írva):**
- `id`, `name` (intrinsically same compound)
- `mechanism` (molekuláris MoA azonos, csak az exposure változik a route-tal)
- `accent`, `categories`, `chemicalFormula`, `researchLevel`
- `faq` (általános kérdések a molekuláról)
- `references` (peer-reviewed cite-ok)
- `body.intro` (rövid kontextus, mindkét route-ra érvényes)
- `disclaimer.*` (jogi nyilatkozat, library-aware)

**VARIANT (route-specifikus override mezők):**
- `routeId` — kulcs (`oral`, `topical`, `injectable`, jövőben `subcutaneous` stb.)
- `routeLabel` — localizált megjelenítendő név (HU/EN/PL minden lang-fájlban)
- `image` — image path
- `bioavailability` — szám/string (pharma library Lab Terminal hard-fail mező)
- `halfLife` — string
- `indications` — string vagy lista (route-specifikus indikációk)
- `dosing` — DosingPanel objekt (protocol/target/duration)
- `quality.avoid` — string lista, route-specifikus contraindikációk
- `quality.notes` — string lista, route-specifikus megjegyzések
- `labTerminal.*` — Lab Terminal cellák (`bioavailability`, performance esetén `aromatization` + `hepatotoxicity` is)
- `body.whatIs` — 2-3 mondatos route-specifikus áttekintés
- `body.expectationsTimeline` — várt-hatás idővonal (topical Minoxidil 12-16 hét vs oral 4-8 hét)
- `interactions` — ha route-tól függ (oral Minoxidil-nél hypertenzív szerekkel; topical-nél nincs)
- `atcCode` — pharma esetén (oral C02DC01 vs topical D11AX01)

### 3.2 Példa: `entries/hu/minoxidil.js` (rough)

```js
export default {
  id: 'minoxidil',
  name: 'Minoxidil',
  mechanism: 'ATP-érzékeny K+ csatorna nyitó vazodilatátor. Aktív metabolit: minoxidil-szulfát (sulfotransferase SULT1A1 enzim).',
  accent: '#7c3aed',
  categories: ['hair-loss', 'cardiovascular'],
  chemicalFormula: 'C9H15N5O',
  researchLevel: 'L4',
  references: [
    { id: 'olsen-2002', citation: 'Olsen EA et al. J Am Acad Dermatol 2002', pmid: '12196747' },
    { id: 'pirmez-2020', citation: 'Pirmez R et al. Int J Trichology 2020', pmid: '32684687' },
    { id: 'fda-minoxidil-5pct', citation: 'FDA Drug Label — Minoxidil 5% Topical Solution', url: 'https://...' },
  ],
  faq: [/* shared Q&A */],
  body: {
    intro: 'A Minoxidil eredetileg súlyos hipertónia kezelésére fejlesztett vazodilatátor. A hajnövesztő hatást egy szisztémás mellékhatás (hirsutism) megfigyelése után fedezték fel, ami a topikális gyógyszerformulájához vezetett.',
  },
  disclaimer: { pharmaceutical: '...' },

  variants: [
    {
      routeId: 'oral',
      routeLabel: 'Orális',
      image: '/pharmaceutical/minoxidil-oral.png',
      bioavailability: '~95%',
      halfLife: '4,2 óra',
      indications: ['Rezisztens hipertónia (Rx, Loniten 2,5/10 mg)', 'Súlyos androgén alopécia (off-label, alacsony dózis 0,25–5 mg)'],
      dosing: {
        protocol: 'Off-label hair loss: 0,25–5 mg per os napi 1× (low-dose oral minoxidil, LDOM)',
        target: 'Androgén alopécia javulása 12–24 hét',
        duration: 'Krónikus (visszahúzás → 4–6 hónap alatt visszáll az alapállapot)',
      },
      quality: {
        avoid: ['Pheochromocytoma', 'Friss myocardialis infarctus', 'Aktív perikardiális effúzió', 'Súlyos szisztémás vazodilatációval összeegyeztethetetlen állapot'],
        notes: ['Béta-blokkolóval és loop-diuretikummal együtt szokták kombinálni hipertónia-indikációban', 'LDOM dózison a kardiovaszkuláris mellékhatások jellemzően minimálisak'],
      },
      labTerminal: {
        bioavailability: '~95% (gyors GI abszorbció; Cmax 1 óra). Pharmakokinetikája jól dokumentált a Loniten SmPC-ben.',
      },
      atcCode: 'C02DC01',
      body: {
        whatIs: 'Szisztémás vazodilatátor tabletta; off-label használatban androgén alopécia kezelésére alacsony dózison (LDOM). A bőrön át nem alkalmazandó.',
        expectationsTimeline: [
          { period: '0–4 hét', text: 'Lehetséges paradox shed (hajszálkihullás-átmenet)' },
          { period: '12–16 hét', text: 'Korai hairline-density növekedés' },
          { period: '24+ hét', text: 'Mérhető telogén→anagén-arány javulás' },
        ],
      },
      interactions: ['Béta-blokkoló (kombináció gyakran szükséges a tachycardia-prevencióhoz)', 'Loop-diuretikum (edema-prevenció)'],
    },
    {
      routeId: 'topical',
      routeLabel: 'Topikális',
      image: '/pharmaceutical/minoxidil-topical.png',
      bioavailability: '<2% (szisztémás abszorbció)',
      halfLife: '~22 óra (szkalp retenció)',
      indications: ['Androgén alopécia (primer indikáció, Rogaine 2%/5%)'],
      dosing: {
        protocol: '1 ml 5%-os oldat 2× napi, közvetlenül a száraz szkalpra',
        target: 'Hair count növekedés 16–24 hét alatt',
        duration: 'Krónikus (visszahúzás → 3–4 hónap alatt visszáll az alapállapot)',
      },
      quality: {
        avoid: ['Aktív szkalp dermatitis', 'Kontakt-allergiás reakció propilén-glikolra (formulátum-függő)'],
        notes: ['A 2%-os oldat enyhébb mellékhatás-profillal, de lassabb hatás', 'Az 5%-os habformulátum (foam) propilén-glikol nélkül elérhető'],
      },
      labTerminal: {
        bioavailability: '<2% (szisztémás abszorbció a szkalpról; Goren et al. 2014 SULT1A1 enzim-aktivitás non-responder ~40-50% a populációban).',
      },
      atcCode: 'D11AX01',
      body: {
        whatIs: 'Lokálisan alkalmazott vazodilatátor oldat/hab; a szkalp follikulusait stimulálja anagén fázisba. Szisztémás hatás minimális.',
        expectationsTimeline: [
          { period: '2–4 hét', text: 'Paradox shed (gyakoribb mint az orálisnál — anagén-szinkronizáció)' },
          { period: '12–16 hét', text: 'Korai vellus → terminális szőrszál konverzió' },
          { period: '24+ hét', text: 'Mérhető hair density növekedés (Olsen 2002, 5% vs 2% szignifikáns)' },
        ],
      },
      interactions: [], // topical szisztémás interakció minimális
    },
  ],
  defaultVariant: 'oral',
};
```

### 3.3 Backward compat

Az entry-knek **opcionális** a `variants` mező. Ha hiányzik, az adapter ugyanúgy működik mint most — a top-level mezők renderelődnek. A 144 másik entry-n **zero diff**.

---

## 4. Adapter változás

### 4.1 Signature
```diff
- adaptLibraryEntry(entry, library, lang)
+ adaptLibraryEntry(entry, library, lang, variantId)
```

### 4.2 Logika (pszeudó-kód)
```js
function adaptLibraryEntry(entry, library, lang, variantId) {
  // Ha nincs variants → mostani logika változatlan
  if (!entry.variants || entry.variants.length === 0) {
    return /* current adapter output */;
  }

  // Resolve variant
  const requestedId = variantId ?? entry.defaultVariant;
  const variant = entry.variants.find(v => v.routeId === requestedId)
                ?? entry.variants.find(v => v.routeId === entry.defaultVariant)
                ?? entry.variants[0]; // ultimate fallback

  // Deep-merge: variant override-olja a base entry mezőket
  const merged = {
    ...entry,
    ...variant, // top-level override
    body: { ...entry.body, ...(variant.body || {}) },
    quality: { ...(entry.quality || {}), ...(variant.quality || {}) },
    labTerminal: { ...(entry.labTerminal || {}), ...(variant.labTerminal || {}) },
    // exposed metadata for UI
    _activeVariantId: variant.routeId,
    _availableVariants: entry.variants.map(v => ({ id: v.routeId, label: v.routeLabel })),
  };

  delete merged.variants; // ne lökjük tovább a teljes variants array-t
  delete merged.defaultVariant;

  return /* current adapter pipeline on merged */;
}
```

A `_activeVariantId` és `_availableVariants` mezők a UI render-rétegnek szólnak (EntryDetail dönti el ezekből, hogy renderel-e VariantToggle-t).

---

## 5. URL routing

### 5.1 Hash séma
```
Single-variant entry (a 142 másik):   #entry/<library>/<id>
Multi-variant entry:                  #entry/<library>/<id>/<variantId>
```

### 5.2 Routing-szabályok (táblázat)

| Helyzet | Hash | Akció |
|---|---|---|
| Tile-click multi-variant entry-n | — | `location.hash = 'entry/<lib>/<id>/<defaultVariant>'` |
| Toggle-click EntryDetail-en | — | `history.replaceState(null, '', '#entry/<lib>/<id>/<variantId>')` (REPLACE, nem push) |
| Direct hash `#entry/.../minoxidil` (variant nélkül) | landing | **Auto-redirect** `replaceState`-tel → `#entry/.../minoxidil/oral` |
| Direct hash `#entry/.../minoxidil/oral` | landing | Normal render, `oral` variant |
| Direct hash `#entry/.../minoxidil/badvariant` | landing | **Auto-redirect** `defaultVariant`-ra (graceful fallback) |
| Single-variant entry direct hash `#entry/.../metformin/anything` | landing | A 3. segment ignorálva, console.warn, normal render |

**Indok a `replaceState` használatára:** A toggle-click NEM új history-entry — különben a back-gomb a Minoxidil-EntryDetail-en belül variant-ról-variantra ugrálna, ahelyett hogy kivinne a galériába. Az egész entry-detail "egy URL" a history-szempontból.

### 5.3 `EntryDetailRoute.jsx` parser bővítés

A jelenlegi `parseEntryHash` 2-segment (`library/id`) parsert kibővíteni 3-segment-re. Új return-shape:
```js
{ library, id, variantId } // variantId opcionális, lehet null
```

A useEffect dep-array bővítése `[lang, library, id, variantId]`-re — variant-váltáskor új `loadEntry()` call (ugyanaz az id, de a `_activeVariantId` változik, és az adapter újra-merge-eli a megfelelő variant-ot).

**Optimalizáció:** mivel a variant-merge memóriában történik (mindegyik variant ugyanabból az entry-fájlból jön), NEM kell új `import()` a dynamic chunk-ból variant-váltáskor. A jelenleg loadolt entry-objekt megvan, csak az adapter újra-merge-eli a másik variant-tal.

---

## 6. UI Komponens — `VariantToggle.jsx`

### 6.1 Pozíció
A Hero szekción belül, a molekula név alatt és a tier-chip / WadaBadge sor alatt:

```
Hero
├── molekula vizuál (Holosphere / EntryImage)
├── molekula név (h1)
├── tier-chip + (opcionális) WadaBadge
├── [VariantToggle]  ← ITT  (csak ha _availableVariants.length >= 2)
└── intro body text
```

### 6.2 Vizuális: Indigo segmented-control
- **Aktív variant:** `bg-indigo-500/20`, `border-indigo-400`, `text-indigo-50`, `shadow-[0_0_12px_rgba(129,140,248,0.4)]`
- **Inaktív:** `bg-white/5`, `border-white/10`, `text-white/60`, hover `text-white/90`
- Light-mode override: a `var(--tint-medium)` és `var(--tint-strong)` tokenek használata az indigo-overlay-en kívül, hogy a Light-Mode-Inline-Rgba-Trap ne lépjen életbe (lásd `[[Light_Mode_Inline_Rgba_Trap]]`).

### 6.3 a11y
- `role="tablist"` a container-en
- Minden gomb `role="tab"`, `aria-selected={true/false}`, `aria-controls="entry-body"`
- Keyboard: `←`/`→` váltás variant-ok között, `Tab` továbblép a fő tartalomba
- Screen-reader: `aria-live="polite"` egy hidden div-ben hirdeti a route-váltást: pl. "Topikális adagolási mód aktív"

### 6.4 Interakció
- Click → `onVariantChange(variantId)` callback
- Callback → `history.replaceState({}, '', '#entry/<lib>/<id>/<variantId>')` + scroll-position megőrzése + EntryDetail re-render

### 6.5 Image cross-fade
A `EntryImage` komponens kap egy új `key={variantId}` prop-ot, ami trigger-eli a React unmount/mount-ot → opacity 0→1 220ms tween-nel. A többi blokk instant swap (nincs flicker, mert text-content).

### 6.6 Scroll-position megőrzése
A toggle-click `event.preventDefault()` + manual `window.scrollY` snapshot, majd post-render `requestAnimationFrame(() => window.scrollTo(0, snapshotY))`. Más megoldás: CSS-only — a tartalom magasság-változása minimális (csak 1-2 sor diff), így a természetes browser scroll-restore is OK lehet. Implementáció során A/B-ezni.

---

## 7. Gallery tile chip — `2 forma / 2 forms / 2 formy`

A `LibraryGallery.jsx` `PeptideTile` komponensben:

- Ha az entry-meta-ban van `variantCount >= 2` flag → render egy kis chip a tile top-right sarkában (a meglévő tier-chip alá vagy mellé, accent színnel).
- Chip stílus: `text-[10px]`, `bg-indigo-500/20`, `border-indigo-400/30`, `text-indigo-200`, `rounded-full`, `px-2 py-0.5`.
- Szöveg i18n-elve: `t('variant.tile.badge', { n: 2 })`

**META-szintű mező:** a `LIBRARY_ENTRY_META`-ba új opcionális mező `variantCount: 2` Minoxidil + Superdrol esetén. Nem dinamikus (nem kell async-loadolni a full entry-t a chip render-hez).

---

## 8. i18n bővítés

### 8.1 `src/i18n/uiStrings-{hu,en,pl}.js` új kulcsok

| Kulcs | HU | EN | PL |
|---|---|---|---|
| `variant.tile.badge` | `{n} forma` | `{n} forms` | `{n} formy` |
| `variant.toggle.aria` | `Adagolási mód váltása` | `Switch administration route` | `Zmień drogę podania` |
| `variant.toggle.current` | `Aktív: {label}` | `Active: {label}` | `Aktywne: {label}` |
| `variant.sr.changed` | `Adagolási mód váltva: {label}` | `Administration route changed: {label}` | `Zmieniono drogę podania: {label}` |

### 8.2 Entry-data `routeLabel`
Az entry-fájl maga (per-lang) tartalmazza a localized `routeLabel`-t. Pl.:
- `entries/hu/minoxidil.js` → `routeLabel: 'Orális'` / `'Topikális'`
- `entries/en/minoxidil.js` → `routeLabel: 'Oral'` / `'Topical'`
- `entries/pl/minoxidil.js` → `routeLabel: 'Doustny'` / `'Miejscowy'`

Performance Superdrolnál:
- HU: `'Orális (tabletta)'` / `'Intramuszkuláris (injekció)'`
- EN: `'Oral (tablet)'` / `'Intramuscular (injection)'`
- PL: `'Doustny (tabletka)'` / `'Domięśniowy (zastrzyk)'`

---

## 9. Validator bővítés

`scripts/validate-library-meta.mjs` új ellenőrzések:

1. **Variants parity per lang:** Ha az entry-nek HU-fájlja `variants` mezőt definiál, akkor az EN + PL fájljainak is ugyanazokat a `routeId`-ket kell tartalmazniuk, ugyanabban a sorrendben.
2. **Required variant fields:** Minden variant kötelezően tartalmaz: `routeId`, `routeLabel`, `image`, `bioavailability`, `halfLife`, `dosing`.
3. **Performance library extra:** Ha a library `id === 'performance'`, minden variant kötelezően tartalmaz `aromatization` + `hepatotoxicity` mezőket is (a Lab Terminal hard-fail rule miatt — lásd `[[Mega-PR Task A]]`).
4. **defaultVariant validitás:** `defaultVariant` egyezzen az egyik `variants[*].routeId`-vel.
5. **Meta variantCount egyezés:** ha `LIBRARY_ENTRY_META.variantCount === 2`, akkor az entry-fájl `variants.length === 2`. Mismatch → hard-fail.

---

## 10. Content sourcing — peer-reviewed only

A `[[feedback_forbidden_sources]]` rule szerint:

### 10.1 Minoxidil topical (pharma library)
**TILTOTT:** dopamine.club, sean's curated notes (pharma library szigorú).
**MEGENGEDETT:** FDA SmPC + DailyMed + EMA + PubMed + PubChem.

Kötelező citation-ok:
- FDA Drug Label — Minoxidil 5% Topical Solution (openFDA + DailyMed fallback)
- Olsen EA et al. J Am Acad Dermatol 2002 (PMID 12196747) — 5% vs 2% Phase III
- Pirmez R et al. Int J Trichology 2020 (PMID 32684687) — LDOM systematic review
- Goren A et al. Dermatol Ther 2014 — SULT1A1 enzyme assay non-responder
- Olsen EA et al. J Drugs Dermatol 2007 — long-term efficacy

### 10.2 Superdrol injectable (performance library)
**HYBRID rule:** body content (whatIs, expectationsTimeline) lehet sean's notes + dopamine.club alapú (no citation back), **DE** a Lab Terminal cellák (`aromatization` + `hepatotoxicity`) hard-fail validátoron mennek → ezekhez peer-reviewed kell:
- Bhasin S et al. JAMA 1996 (testosterone supraphysiologic) — methylated AAS hepatotoxicity baseline
- Pope HG, Kanayama G PubMed reviews — AAS-induced liver injury
- Hartgens F, Kuipers H. Sports Med 2004 — AAS effects review
- Schänzer W. Clin Chem 1996 — AAS metabolism / detection windows
- Methyldrostanolone-specifikus: ha nincs peer-reviewed (rare compound), akkor a hepatotoxicity-szövegben "extrapolált a c17α-methyl AAS-csoport adataiból" framing + cite a csoport-szintű forrásokra.

### 10.3 Content-volumen becslés
- Minoxidil topical variant: ~80-100 sor `entries/<lang>/minoxidil.js` × 3 lang = ~250-300 sor új tartalom
- Superdrol injectable variant: ~80-100 sor × 3 lang = ~250-300 sor új tartalom
- Plusz a SHARED mezők átstrukturálása (kihúzni a jelenlegi route-specifikus szövegekből a top-level shared mezőket): ~50-80 sor diff per entry
- **Total:** ~600-700 sor új/módosított content

---

## 11. Acceptance criteria

### 11.1 Build & validation
- [ ] `node scripts/validate-library-meta.mjs` PASS (új variant-checkekkel)
- [ ] `npm run build` PASS (Vite, zero error/warning)
- [ ] PWA precache ≤ 5 MB (új 2 image + AVIF+WebP variants beleszámolva)

### 11.2 Funkcionális smoke test
- [ ] `#entry/pharmaceutical/minoxidil` → auto-redirect `#entry/pharmaceutical/minoxidil/oral` (verify URL bar)
- [ ] Minoxidil EntryDetail-en a VariantToggle látszik, az `Orális` aktív
- [ ] Toggle click `Topikális`-ra → URL `replaceState` `#entry/pharmaceutical/minoxidil/topical`, kép cross-fade-el, dosing/bioavailability/quality.avoid/halfLife/atcCode/expectationsTimeline minden mező update-elt
- [ ] Browser back gomb → kivisz a galériából (nem variant-back ugrik)
- [ ] Direct hash `#entry/pharmaceutical/minoxidil/topical` → topical-on landol
- [ ] Direct hash `#entry/pharmaceutical/minoxidil/badroute` → auto-redirect default-ra
- [ ] Superdrol ugyanezek a tesztek `oral`/`injectable` variant-okkal
- [ ] Gallery tile-on Minoxidil + Superdrol kapnak `2 forma` chip-et (HU), `2 forms` (EN), `2 formy` (PL)
- [ ] A 142 másik entry-n nincs vizuális változás, sem toggle, sem chip
- [ ] Language-switch HU → EN → PL → HU közben a VariantToggle label-jei lokalizálódnak, az aktív variant megőrződik

### 11.3 Accessibility
- [ ] `role="tablist"` / `role="tab"` / `aria-selected` szerkezet helyes
- [ ] Keyboard ←/→ váltás működik
- [ ] Screen-reader `aria-live` announce a váltást
- [ ] Light-mode override-ok megfelelően renderelnek (`var(--tint-*)` tokeneken keresztül)

### 11.4 Performance
- [ ] Variant-váltás render-time < 100ms (nincs új `import()`, csak adapter re-merge + React re-render)
- [ ] Image cross-fade 220ms tween smooth, nincs CLS (`<picture>` AVIF+WebP+PNG chain mindkét variant-on)
- [ ] Lighthouse mobile sweep Minoxidil-en — Perf ≥85, A11y ≥95, BP ≥96

---

## 12. Risk register

| Risk | Mitigation |
|---|---|
| Adapter merge regression a 142 másik entry-n | Backward-compat ág: `if (!entry.variants) return /* current logic */`. Spot-check 5 random entry build-után. |
| Validator false-positive single-variant entry-n | `variantCount` strict mező, nincs implicit detection — explicit flag a metaban. |
| Lang-fájl szerkezet drift (HU `variants[0].routeId='oral'`, EN `variants[0].routeId='Oral'` casing) | Validator hard-fail a parity-check-en. |
| Topical Minoxidil content peer-review escape (dopamine.club leak) | Code-review gate: forrás-citáció minden új paragrafusnál; reviewer WebFetch-elje a PMID-t. Lásd `[[feedback_plan_reference_accuracy]]`. |
| Hash collision: jövőbeli `<id>/dose-calc` route ütközik a `<id>/<variantId>`-vel | Route-namespace policy: `variantId`-knek tilos `dose`, `calc`, `info`, `back` szavakat tartalmazniuk. Documentation a `LIBRARY_SHAPE.md`-be (ha létezik). |
| Light-mode-inline-rgba-trap a VariantToggle-on | `var(--tint-*)` tokenek + tesztelés mindkét theme-en, lásd `[[Light_Mode_Inline_Rgba_Trap]]`. |
| Edit-tool quote-corruption a 6 új lang-fájlnál | Curly-quote-tartalmú JSON-fájloknál Node `fs.readFileSync` + `writeFileSync`, NEM Edit tool, lásd `[[feedback_edit_tool_quote_corruption]]`. |

---

## 13. Out of scope

- Variant 3+ darab. Csak `oral` + `topical` (Minoxidil) és `oral` + `injectable` (Superdrol) — a shape természetesen 3+ variant-ot is támogat, de jelen iteráción minden entry max 2.
- Variant-specifikus FAQ. A FAQ shared marad mindkét variant-on; ha valamelyik kérdés CSAK egyik route-ra érvényes, override-olható lenne — de jelen scope nem támogatja, beépíthető később.
- Variant-specifikus interactions kibővített logikája. Most a `variant.interactions` ha definiált, akkor felülír; ha nincs definiálva, base entry `interactions` érvényes. NEM merge két lista. (Mert pl. Minoxidil topikálisnál a sysztémás interakciók irrelevánsak, csak a topikális kontextust akarjuk látni.)
- Variant-specifikus mechanism vagy chemicalFormula. A molekula azonos, csak az exposure változik — ezeket shared-en kötjük.
- Gallery tile click-handler variant-választással. A tile MINDIG a `defaultVariant`-ra navigál; user a toggle-vel vált a detail-en.
- Variant-specifikus tier vagy researchLevel. A meta a base entry-é, csak az adat-megjelenítés route-specifikus.

---

## 14. Sequencing — végrehajtási sorrend

**Phase A (deletion) → Phase B (image integration) → Phase C (route-toggle).**

Indok:
- Phase A tisztítja a 21 entry-t, így a Phase B image-pipeline csak a megmaradó 36-ra fut → tisztább state.
- Phase B integrálja a Minoxidil oral + topical képeket (mindkettő szükséges a toggle UX-hoz) → Phase C-nek kész image-asset-ek kellenek.
- Phase C csak a route-toggle architektúrát + content-et szállítja, az image-pipeline-tól független.

**Mindegyik fázis külön commit + opcionális tag.** Build + validator + smoke-test minden fázis után.

---

## 15. Post-implementation: Statusz update

A `/handoff` parancs futtatása után új session-block a `MolekulaX_Statusz.md` tetején:
- 3 commit hash (Phase A, B, C)
- Új tag-ek (`v0.14-library-trim`, `v0.15-library-images`, `v0.16-route-toggle`)
- Tanulság (ha közben felmerül új lesson)
- Live deploy Vercel URL spot-check (Minoxidil + Superdrol mindkét variant)

A `[[feedback_phase_specs_obsidian]]` rule szerint **NINCS Obsidian mirror** ennek a spec-fájlnak — repo-only.

---

*Brainstorm refs: `2026-05-18-library-image-prompts.md` (image specs) · `2026-05-18-library-entry-deletion.md` (Phase A plan) · Visual companion preview: `.superpowers/brainstorm/1348-1779134284/content/simplified-v3.html`*
