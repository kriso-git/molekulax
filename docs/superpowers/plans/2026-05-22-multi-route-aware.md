# v0.27 Multi-Route-Aware Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend route-aware adapter branching from v0.26 (sc + in only) to 5 explicit route-families (oral/inhaled/topical/sc/in) + IM-ester fallback, so all 13 remaining multi-form entries get correct UI defaults instead of SC-bias.

**Architecture:** Add `getRouteFamily(activeVariantId)` helper at top of `adaptLibraryEntry.js`; refactor 6 existing derived fns to 6-branch switch (`oral`/`inhaled`/`topical`/`sc`/`in`/`im`); build 1 anchor entry inline (`testosterone-info`, 5 ester variants) to validate adapter behavior; dispatch 12 entries × ~3-5 variants × 3 lang as 4 rounds × 3 parallel subagents with worktree isolation; final controller verify + ship as `v0.27-multi-route-aware`.

**Tech Stack:** React 18, Vite 5, Tailwind 3, Node 20.18, JS-only (no TS), `vite-plugin-pwa`. Existing scripts: `scripts/verify-pmids.mjs` (NCBI eutils API), `npm run validate:meta`, `npm run build`.

---

## File Structure

**Modify (controller, Phase A):**
- `src/components/library/adaptLibraryEntry.js` — add `getRouteFamily()` + refactor 6 derived fns
- `src/components/library/EntryDetail.jsx` — extend Calculator-gate from 2-branch (in/non-in) to family-aware (info-card for oral/inhaled/topical/in; MiniCalc for sc/im)
- `src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js` — anchor entry, 5 ester variants × ~10 RICH fields each

**Modify (subagents, Phase B):**
- `src/data/libraries/performance/entries/{hu,en,pl}/{albuterol,l-carnitine,dianabol-info,superdrol,winstrol-info,trenbolone-info,nandrolone-info,primobolan,masteron,ment-19nor,ment-test}.js` — 11 performance entries (33 lang files)
- `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/minoxidil.js` — 1 pharmaceutical entry (3 lang files)

**No changes:**
- `scripts/verify-pmids.mjs` (already supports `--entry` and `--lib` flags)
- Validator, build config, PWA config

---

## Phase A — Controller-Inline (adapter refactor + anchor)

### Task A1: Add `getRouteFamily` helper

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js:1-30` (file header / before first derived fn)

- [ ] **Step 1: Open the file and locate the first derived fn**

Run: `grep -n "function deriveQuickStart" src/components/library/adaptLibraryEntry.js`
Expected: a line number around 116.

- [ ] **Step 2: Insert helper before `deriveQuickStart`**

Edit `src/components/library/adaptLibraryEntry.js`, add this block ABOVE the line `function deriveQuickStart(peptide, library, activeVariantId) {`:

```js
// Returns the route-family for a given variant.routeId.
// 5 explicit families + 'im' fallback for ester/oil/aq injections.
// v0.27: oral / inhaled / topical introduced; sc / in unchanged from v0.26.
function getRouteFamily(activeVariantId) {
  if (activeVariantId === 'in') return 'in'
  if (activeVariantId === 'oral' || activeVariantId === 'ac-oral') return 'oral'
  if (activeVariantId === 'inhaled') return 'inhaled'
  if (activeVariantId === 'topical') return 'topical'
  if (activeVariantId === 'sc') return 'sc'
  // Fallback for ester variants + 'injectable' + 'oil' + 'aq' + 'enan-oil':
  //   prop, enan, cyp, sus, aq, ace, hex, deca, npp, ac, en, oil, injectable, enan-oil
  return 'im'
}
```

- [ ] **Step 3: Verify no syntax errors**

Run: `node -c src/components/library/adaptLibraryEntry.js`
Expected: silent (no output = success).

- [ ] **Step 4: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js
git commit -m "feat(adapter): add getRouteFamily helper for v0.27 multi-route"
```

---

### Task A2: Refactor `deriveQuickStart` to 6-branch switch

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js:116-212` (existing `deriveQuickStart` body)

- [ ] **Step 1: Replace the `if (activeVariantId === 'in')` block + default SC return with switch**

Locate the existing `deriveQuickStart` body (line ~116-212). Replace the section from `if (library?.id !== 'peptides')` through the end of the SC-default return statement with this switch-based dispatch:

```js
function deriveQuickStart(peptide, library, activeVariantId) {
  if (Array.isArray(peptide.quickStart) && peptide.quickStart.length > 0) {
    return peptide.quickStart.map((s, i) => {
      if (s && s.title && s.detail) return s
      return {
        step: i + 1,
        title: { hu: `${i + 1}. lépés`, en: `Step ${i + 1}`, pl: `Krok ${i + 1}` },
        detail: s,
      }
    })
  }
  const family = getRouteFamily(activeVariantId)

  // Non-peptide libraries: only return defaults for non-injection families.
  // Pre-v0.27 behavior: non-peptide libs returned null. v0.27: oral/inhaled/topical
  // get their own defaults; sc/im fall back to peptide SC default; in unchanged.
  if (library?.id !== 'peptides' && family !== 'oral' && family !== 'inhaled' && family !== 'topical') {
    return null
  }

  switch (family) {
    case 'oral':
      return [
        { step: 1, title: { hu: 'Adag bevétele', en: 'Take the dose', pl: 'Przyjęcie dawki' },
          detail: { hu: 'Vízzel lenyeled éhgyomorra vagy étkezés közben (entry-specifikus, lásd dosing-szöveg).', en: 'Swallow with water on empty stomach or with food (entry-specific, see dosing note).', pl: 'Połknij z wodą na czczo lub z posiłkiem (zależnie od preparatu, patrz dawkowanie).' } },
        { step: 2, title: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' },
          detail: { hu: 'Eredeti blisterben, szobahőmérsékleten, fénytől védve.', en: 'Original blister, room temperature, protected from light.', pl: 'W oryginalnym blistrze, w temperaturze pokojowej, chronić przed światłem.' } },
        { step: 3, title: { hu: 'Monitorozás', en: 'Monitoring', pl: 'Monitorowanie' },
          detail: { hu: 'GI-tünetek (hányinger, gyomorégés), májfunkció (orális AAS esetén 4-6 hetente AST/ALT/GGT/bilirubin).', en: 'GI symptoms (nausea, heartburn), liver function (oral AAS: AST/ALT/GGT/bilirubin every 4-6 weeks).', pl: 'Objawy GI (nudności, zgaga), funkcja wątroby (przy doustnych AAS: AST/ALT/GGT/bilirubina co 4-6 tygodni).' } },
        { step: 4, title: { hu: 'Időzítés', en: 'Timing', pl: 'Timing' },
          detail: { hu: 'A felezési idő szerint napi 1-3 részre osztva; konzisztens időzítés a stabil plazmaszintért.', en: 'Split into 1-3 daily doses based on half-life; consistent timing for stable plasma levels.', pl: 'Podzielić na 1-3 dawki dziennie wg okresu półtrwania; stałe godziny dla stabilnego poziomu w osoczu.' } },
      ]

    case 'inhaled':
      return [
        { step: 1, title: { hu: 'Inhalátor előkészítése', en: 'Inhaler preparation', pl: 'Przygotowanie inhalatora' },
          detail: { hu: 'Inhalátor felrázása 5-10 másodpercig, kupak levétele. Új vagy 2 hete nem használt inhalátornál 2 próba-szippantás a levegőbe.', en: 'Shake inhaler 5-10 seconds, remove cap. For new or unused (>2 weeks) inhalers: 2 test sprays into air first.', pl: 'Wstrząsnąć inhalator 5-10 sekund, zdjąć nasadkę. Przy nowym lub nieużywanym (>2 tyg.) inhalatorze: 2 spraye próbne w powietrze.' } },
        { step: 2, title: { hu: 'Beadás', en: 'Administration', pl: 'Podanie' },
          detail: { hu: 'Mély kilégzés, szájdarab a fogak között, szippants be lassan és mélyen miközben megnyomod a flakont. Tartsd bent 5-10 másodpercig.', en: 'Full exhale, mouthpiece between teeth, inhale slowly and deeply while pressing the canister. Hold breath 5-10 seconds.', pl: 'Pełny wydech, ustnik między zębami, wdychaj powoli i głęboko naciskając kanister. Wstrzymaj oddech 5-10 sekund.' } },
        { step: 3, title: { hu: 'Szájöblítés', en: 'Mouth rinse', pl: 'Płukanie ust' },
          detail: { hu: 'Vízzel öblítsd ki a szádat és köpd ki (gombásodás-prevenció, főleg ICS-tartalmú inhalátoroknál).', en: 'Rinse mouth with water and spit out (anti-candidiasis, especially for ICS-containing inhalers).', pl: 'Przepłucz usta wodą i wypluj (zapobieganie kandydozie, szczególnie dla inhalatorów z GKS).' } },
        { step: 4, title: { hu: 'Monitorozás', en: 'Monitoring', pl: 'Monitorowanie' },
          detail: { hu: 'Tremor, tachycardia, szájüregi gombásodás. PEF-mérés (peak expiratory flow) heti 1x ajánlott.', en: 'Tremor, tachycardia, oral candidiasis. Weekly peak expiratory flow (PEF) monitoring recommended.', pl: 'Drżenie, tachykardia, kandydoza jamy ustnej. Cotygodniowy pomiar PEF zalecany.' } },
      ]

    case 'topical':
      return [
        { step: 1, title: { hu: 'Bőr előkészítése', en: 'Skin preparation', pl: 'Przygotowanie skóry' },
          detail: { hu: 'Tiszta, száraz bőrre. Fürdés/zuhanyzás után 10-15 perc várakozás, hogy a bőr teljesen megszáradjon.', en: 'Apply to clean, dry skin. Wait 10-15 min after bathing/showering for full drying.', pl: 'Aplikuj na czystą, suchą skórę. Odczekaj 10-15 min po kąpieli/prysznicu na całkowite osuszenie.' } },
        { step: 2, title: { hu: 'Felvitel', en: 'Application', pl: 'Aplikacja' },
          detail: { hu: 'Vékony rétegben az érintett területre, körkörös mozdulatokkal masszírozd be 30-60 másodpercig. Hagyd felszívódni 2-4 percig, mielőtt ruhával érintkezne.', en: 'Thin layer to affected area, massage in circular motions 30-60 seconds. Let absorb 2-4 minutes before clothing contact.', pl: 'Cienką warstwą na obszar dotknięty, wmasuj okrężnymi ruchami 30-60 sekund. Pozostaw do wchłonięcia 2-4 minuty przed kontaktem z odzieżą.' } },
        { step: 3, title: { hu: 'Kézmosás', en: 'Hand washing', pl: 'Mycie rąk' },
          detail: { hu: 'Beadás után alaposan moss kezet szappannal (transzfer-prevenció, főleg minoxidil-nél akcidentális arc/szem-érintés).', en: 'Wash hands thoroughly with soap after application (transfer prevention, especially minoxidil to face/eyes).', pl: 'Po aplikacji dokładnie umyj ręce mydłem (zapobieganie transferowi, szczególnie minoxidilu na twarz/oczy).' } },
        { step: 4, title: { hu: 'Monitorozás', en: 'Monitoring', pl: 'Monitorowanie' },
          detail: { hu: 'Bőrirritáció (vörösség, viszketés, hámlás), kontakt-dermatitisz, kezelt területen nem kívánt szőrnövekedés.', en: 'Skin irritation (redness, itching, peeling), contact dermatitis, unwanted hair growth at treated site.', pl: 'Podrażnienie skóry (zaczerwienienie, świąd, łuszczenie), kontaktowe zapalenie skóry, niepożądany wzrost włosów w miejscu aplikacji.' } },
      ]

    case 'in':
      return [
        { step: 1, title: { hu: 'Spray előkészítés', en: 'Spray priming', pl: 'Przygotowanie sprayu' },
          detail: { hu: 'Pre-mixed RU pharma esetén: 2–3 leszorítás a levegőbe első használat előtt. Research-chemical recon esetén: vial-tartalom átöntése spray-bottle-be.', en: 'Pre-mixed RU pharma: 2–3 priming sprays into air before first use. Research-chemical recon: transfer reconstituted vial contents to a sterile nasal spray bottle.', pl: 'Pre-mieszany RU pharma: 2–3 spraye próbne do powietrza przed pierwszym użyciem. Research-chemical: przenieść zawartość fiolki do sterylnej butelki sprayu.' } },
        { step: 2, title: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' },
          detail: { hu: 'Hűtőszekrényben (2–8°C), eredeti pumpás flakonban. Mindennapi adagoláshoz szobahőre meleg ítendő.', en: 'Refrigerated (2–8°C) in the original pump bottle. Bring to room temperature before daily dosing.', pl: 'W lodówce (2–8°C) w oryginalnej butelce z pompką. Doprowadzić do temperatury pokojowej przed dawkowaniem.' } },
        { step: 3, title: { hu: 'Beadás', en: 'Administration', pl: 'Podanie' },
          detail: { hu: 'Intranazális spray: 1–3 szippantás per orrlyuk, fej kissé előre döntve. Beadás után 1–2 percig ne fújd ki az orrod.', en: 'Intranasal spray: 1–3 sprays per nostril, head tilted slightly forward. Avoid blowing your nose for 1–2 minutes after.', pl: 'Spray donosowy: 1–3 spraye na nozdrze, głowa lekko pochylona do przodu. Nie wydmuchiwać nosa przez 1–2 min po podaniu.' } },
        { step: 4, title: { hu: 'Monitorozás', en: 'Monitoring', pl: 'Monitorowanie' },
          detail: { hu: 'Orr-irritáció, szárazság vagy szubjektív hatáshiány esetén dózis-csökkentés vagy szünet.', en: 'Reduce dose or pause if nasal irritation, dryness, or lack of subjective effect occurs.', pl: 'Zmniejsz dawkę lub przerwij w przypadku podrażnienia, suchości nosa lub braku efektu.' } },
      ]

    case 'im':
      return [
        { step: 1, title: { hu: 'Ampulla előkészítése', en: 'Vial preparation', pl: 'Przygotowanie fiolki' },
          detail: { hu: 'Olajos esterek: szobahőmérsékletre meleg (10-15 perc kézben), gentle swirl. Aqueous (suspension): jól rázd fel előtte.', en: 'Oil-based esters: warm to room temp (10-15 min in hand), gentle swirl. Aqueous suspension: shake well before drawing.', pl: 'Estry olejowe: ogrzej do temperatury pokojowej (10-15 min w dłoni), delikatnie obróć. Zawiesina wodna: dobrze wstrząsnąć przed pobraniem.' } },
        { step: 2, title: { hu: 'Felszívás', en: 'Drawing', pl: 'Nabieranie' },
          detail: { hu: 'Steril fecskendő (3-5 ml) + felszívó tű (18-21G). Felszívás után tű cseréje injekciós tűre (23-25G, 1-1.5"). Levegőbuborékok eltávolítása.', en: 'Sterile syringe (3-5 ml) + drawing needle (18-21G). After drawing, swap to injection needle (23-25G, 1-1.5"). Expel air bubbles.', pl: 'Sterylna strzykawka (3-5 ml) + igła do nabierania (18-21G). Po nabraniu wymień igłę na iniekcyjną (23-25G, 1-1.5"). Usuń pęcherzyki powietrza.' } },
        { step: 3, title: { hu: 'Beadás', en: 'Administration', pl: 'Podanie' },
          detail: { hu: 'Gluteus medius (felső külső kvadráns) vagy quadriceps lateralis. Alkohollal fertőtlenítve, 90°-os szögben szúrva, aspiráció után lassú befecskendezés (~10 másodperc/ml).', en: 'Gluteus medius (upper outer quadrant) or vastus lateralis (quadriceps). Alcohol-cleaned, 90° angle, aspirate then inject slowly (~10 sec/ml).', pl: 'Gluteus medius (górny zewnętrzny kwadrant) lub vastus lateralis (quadriceps). Dezynfekcja alkoholem, kąt 90°, aspiracja, powolne wstrzykiwanie (~10 sek./ml).' } },
        { step: 4, title: { hu: 'Monitorozás', en: 'Monitoring', pl: 'Monitorowanie' },
          detail: { hu: 'Injekciós helyi reakció (csomó, vörösség), PIP (post-injection pain, főleg propionát/trenbolone), allergiás reakció. Hely rotálása (bal/jobb gluteus váltogatva).', en: 'Injection-site reactions (lumps, redness), PIP (post-injection pain, especially propionate/trenbolone), allergic reactions. Rotate sites (left/right gluteus).', pl: 'Reakcje miejscowe (guzki, zaczerwienienie), PIP (ból po iniekcji, szczególnie propionian/trenbolon), reakcje alergiczne. Rotuj miejsca (lewy/prawy gluteus).' } },
      ]

    case 'sc':
    default:
      // Original v0.13+ SC-vial reconstitution path. Preserved as v0.26 shipped.
      return [
        { step: 1, title: { hu: 'Rekonstituálás', en: 'Reconstitution', pl: 'Rekonstytucja' },
          detail: { hu: 'Hideg szárított por hígítása bakteriostatikus vízzel.', en: 'Dilute the lyophilized powder with bacteriostatic water.', pl: 'Rozcieńcz liofilizowany proszek wodą bakteriostatyczną.' } },
        { step: 2, title: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' },
          detail: { hu: '2–8 °C-on, fénytől védve. Rekonstituálva 25–30 napig stabil.', en: '2–8 °C, protected from light. Stable 25–30 days after reconstitution.', pl: '2–8 °C, chronić przed światłem. Po rozpuszczeniu stabilny 25–30 dni.' } },
        { step: 3, title: { hu: 'Beadás', en: 'Administration', pl: 'Podanie' },
          detail: { hu: 'Szubkután injekció majd titrálás tolerancia szerint.', en: 'Subcutaneous injection, titrate to tolerance.', pl: 'Iniekcja podskórna, dawkowanie do tolerancji.' } },
        { step: 4, title: { hu: 'Monitorozás', en: 'Monitoring', pl: 'Monitorowanie' },
          detail: { hu: 'Mellékhatás esetén dózis-csökkentés.', en: 'Dose reduction if side effects occur.', pl: 'Redukcja dawki w razie działań niepożądanych.' } },
      ]
  }
}
```

- [ ] **Step 2: Syntax check**

Run: `node -c src/components/library/adaptLibraryEntry.js`
Expected: silent.

- [ ] **Step 3: Smoke build to ensure no regression**

Run: `npm run build`
Expected: PASS, validator OK, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js
git commit -m "feat(adapter): deriveQuickStart 6-branch route-family switch"
```

---

### Task A3: Refactor `deriveQualityIndicators` to 6-branch switch

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js:713-` (existing `deriveQualityIndicators` body)

- [ ] **Step 1: Locate the existing function**

Run: `grep -n "function deriveQualityIndicators" src/components/library/adaptLibraryEntry.js`
Expected: a line number around 713.

- [ ] **Step 2: Read the surrounding ~40 lines to see the current body**

Read: lines 710-770 of `src/components/library/adaptLibraryEntry.js`

- [ ] **Step 3: Replace the body**

Replace the entire `deriveQualityIndicators` function body with this 6-branch switch:

```js
function deriveQualityIndicators(activeVariantId) {
  const family = getRouteFamily(activeVariantId)

  switch (family) {
    case 'oral':
      return [
        { label: { hu: 'Tabletta épsége', en: 'Tablet integrity', pl: 'Stan tabletki' },
          desc: { hu: 'Törésmentes, repedésmentes felület. Színe egyenletes, nincs foltosodás.', en: 'No cracks, smooth surface. Even color, no spotting.', pl: 'Bez pęknięć, gładka powierzchnia. Równy kolor, bez plam.' } },
        { label: { hu: 'Csomagolás', en: 'Packaging', pl: 'Opakowanie' },
          desc: { hu: 'Eredeti blister-csomagolás, sértetlen fólia. Lejárati dátum + gyártási tétel látszik.', en: 'Original blister pack, intact foil. Expiry date and lot number visible.', pl: 'Oryginalny blister, nieuszkodzona folia. Widoczna data ważności i numer serii.' } },
        { label: { hu: 'Lejárat', en: 'Expiry', pl: 'Termin ważności' },
          desc: { hu: 'Lejárati dátum a csomagoláson, betartva. Lejárt tablettát ne használj — hatékonyság csökkenhet.', en: 'Expiry date on package, respected. Don\'t use expired tablets — potency may degrade.', pl: 'Termin ważności na opakowaniu, przestrzegany. Nie używaj przeterminowanych — moc może spaść.' } },
      ]

    case 'inhaled':
      return [
        { label: { hu: 'MDI-flakon nyomása', en: 'MDI canister pressure', pl: 'Ciśnienie kanistra MDI' },
          desc: { hu: 'Rázott teszt: enyhe folyadékhang. Üres flakon nehezebbnek érződik. Dose-counter (ha van) >10 maradt.', en: 'Shake test: light liquid sound. Empty canister feels heavier. Dose counter (if present) >10 remaining.', pl: 'Test wstrząsania: lekki dźwięk cieczy. Pusty kanister cięższy. Licznik dawek (jeśli jest) >10.' } },
        { label: { hu: 'Lejárati dátum', en: 'Expiry date', pl: 'Data ważności' },
          desc: { hu: 'Flakon-alján vagy dobozon. Lejárt MDI propellán-szivárgásra hajlamos, dose nem konzisztens.', en: 'Bottom of canister or on box. Expired MDI prone to propellant leak, inconsistent dosing.', pl: 'Spód kanistra lub na pudełku. Przeterminowany MDI podatny na wyciek propelantu, niespójne dawkowanie.' } },
        { label: { hu: 'Spacer tisztasága', en: 'Spacer cleanliness', pl: 'Czystość spacera' },
          desc: { hu: 'Spacer használat (gyerek/idős): heti 1x mosogatószeres víz, levegőn száradni hagyni. Műanyag-elektrosztatika minimalizálva.', en: 'Spacer use (child/elderly): weekly soap-water wash, air-dry. Minimizes plastic electrostatic build-up.', pl: 'Użycie spacera (dziecko/osoba starsza): cotygodniowe mycie wodą z mydłem, suszenie na powietrzu. Minimalizuje elektrostatykę plastiku.' } },
      ]

    case 'topical':
      return [
        { label: { hu: 'Oldat tisztasága', en: 'Solution clarity', pl: 'Klarowność roztworu' },
          desc: { hu: 'Átlátszó vagy gyártó által megadott szín. Csapadék, zavarosodás vagy színváltozás esetén ne használd.', en: 'Clear or manufacturer-specified color. Don\'t use if precipitate, cloudiness, or color shift.', pl: 'Klarowny lub kolor wg producenta. Nie używaj przy osadzie, mętności lub zmianie koloru.' } },
        { label: { hu: 'Lezárt pumpa', en: 'Sealed pump', pl: 'Uszczelniona pompka' },
          desc: { hu: 'Eredeti pumpás flakon, sértetlen zár. Pumpa egyenletesen ad le adagot, nem szakadozik.', en: 'Original pump bottle, intact seal. Pump delivers dose evenly, no sputtering.', pl: 'Oryginalna butelka z pompką, nieuszkodzona pieczęć. Pompka podaje równomierną dawkę, bez przerywania.' } },
        { label: { hu: 'Lejárat', en: 'Expiry', pl: 'Termin ważności' },
          desc: { hu: 'Felbontás után 6-12 hónap (gyártó-függő). Lejárt topikális oldat irritáció-rizikóra hajlamos.', en: '6-12 months after opening (manufacturer-dependent). Expired topical solution prone to irritation.', pl: '6-12 miesięcy po otwarciu (zależnie od producenta). Przeterminowany roztwór podatny na podrażnienia.' } },
      ]

    case 'in':
      return [
        { label: { hu: 'Oldat tisztasága', en: 'Solution clarity', pl: 'Klarowność roztworu' },
          desc: { hu: 'Átlátszó, részecskementes. Zavarosodás esetén ne használd.', en: 'Clear, particle-free. Don\'t use if cloudy.', pl: 'Klarowny, bez cząstek. Nie używaj, jeśli mętny.' } },
        { label: { hu: 'Pumpás flakon', en: 'Pump bottle', pl: 'Butelka z pompką' },
          desc: { hu: 'Eredeti pumpa, nem szakadozó adagolás. Üres flakon nem fújja a sprayt.', en: 'Original pump, no sputtering dose. Empty bottle won\'t spray.', pl: 'Oryginalna pompka, bez przerywania dawki. Pusta butelka nie spryskuje.' } },
        { label: { hu: 'Spray-konzisztencia', en: 'Spray consistency', pl: 'Konsystencja sprayu' },
          desc: { hu: 'Egyenletes finom köd, nem cseppfolyós. Pumpás priming után stabil.', en: 'Even fine mist, not drippy. Stable after pump priming.', pl: 'Równomierna delikatna mgiełka, nie kapie. Stabilny po przygotowaniu pompki.' } },
      ]

    case 'im':
      return [
        { label: { hu: 'Olaj tisztasága', en: 'Oil clarity', pl: 'Klarowność oleju' },
          desc: { hu: 'Átlátszó vagy enyhén sárgás (MCT/sezame/ricinusolaj). Lebegő részecskék, zavarosodás vagy üledék KEMÉNY no-go.', en: 'Clear or slightly yellow (MCT/sesame/castor oil). Floating particles, cloudiness, or sediment = HARD NO.', pl: 'Klarowny lub lekko żółtawy (MCT/sezamowy/rycynowy). Pływające cząstki, mętność, osad = TWARDE NIE.' } },
        { label: { hu: 'Ampulla integritás', en: 'Vial integrity', pl: 'Integralność fiolki' },
          desc: { hu: 'Üveg ép, gumi-dugó sértetlen, alumínium gallér feszesen ül. Címke olvasható, gyártó + LOT + lejárat látszik.', en: 'Glass intact, rubber stopper undamaged, aluminum crimp tight. Label legible, manufacturer + LOT + expiry visible.', pl: 'Szkło nienaruszone, korek gumowy nieuszkodzony, aluminiowy uszczelniacz ścisły. Etykieta czytelna, producent + LOT + termin ważności widoczne.' } },
        { label: { hu: 'BA/BB-keverék konzisztencia', en: 'BA/BB carrier consistency', pl: 'Konsystencja BA/BB' },
          desc: { hu: 'Benzyl-alkohol (BA) + benzyl-benzoát (BB) carrier-blend. Túl magas BA% (>3%) PIP-rizikó; UGL gyártóknál ellenőrizendő.', en: 'Benzyl alcohol (BA) + benzyl benzoate (BB) carrier blend. Excessive BA (>3%) raises PIP risk; verify with UGL manufacturers.', pl: 'Mieszanka nośnika BA (alkohol benzylowy) + BB (benzoesan benzylu). Nadmiar BA (>3%) zwiększa ryzyko PIP; weryfikuj u producentów UGL.' } },
      ]

    case 'sc':
    default:
      // Original v0.13+ SC-vial markers. Preserved as v0.26 shipped.
      return [
        { label: { hu: 'Por minősége', en: 'Powder quality', pl: 'Jakość proszku' },
          desc: { hu: 'Fehér / törtfehér por, szabályos lyofilizált korong vagy törmelék.', en: 'White / off-white powder, regular lyophilized disc or fragments.', pl: 'Biały / złamany biały proszek, regularny dysk liofilizowany lub fragmenty.' } },
        { label: { hu: 'Vial-integritás', en: 'Vial integrity', pl: 'Integralność fiolki' },
          desc: { hu: 'Üveg ép, gumi-dugó sértetlen, alumínium gallér feszesen ül.', en: 'Glass intact, rubber stopper undamaged, aluminum crimp tight.', pl: 'Szkło nienaruszone, korek gumowy nieuszkodzony, aluminiowy uszczelniacz ścisły.' } },
        { label: { hu: 'Reconstitute-clarity', en: 'Reconstitute clarity', pl: 'Klarowność po rekonstytucji' },
          desc: { hu: 'BAC-vízzel rekonstituálva tiszta, részecskementes oldat.', en: 'After BAC-water reconstitution: clear, particle-free solution.', pl: 'Po rekonstytucji wodą BAC: klarowny, bez cząstek roztwór.' } },
      ]
  }
}
```

- [ ] **Step 4: Syntax check**

Run: `node -c src/components/library/adaptLibraryEntry.js`
Expected: silent.

- [ ] **Step 5: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js
git commit -m "feat(adapter): deriveQualityIndicators 6-branch route-family switch"
```

---

### Task A4: Refactor `deriveSafetyProfile` to 6-branch family-filter

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js:511-` (existing `deriveSafetyProfile` body)

- [ ] **Step 1: Locate the function**

Run: `grep -n "function deriveSafetyProfile" src/components/library/adaptLibraryEntry.js`
Expected: a line number around 511.

- [ ] **Step 2: Read the surrounding ~80 lines**

Read: lines 505-600 of `src/components/library/adaptLibraryEntry.js`

- [ ] **Step 3: Update the signature + add family-aware filter logic**

Replace the function signature line and the `if (activeVariantId === 'in')` block with the following pattern (keep the rest of the body intact, since safetyProfile mostly draws from `peptide.safety` data):

```js
function deriveSafetyProfile(peptide, categoryIds, activeVariantId) {
  const family = getRouteFamily(activeVariantId)

  // Family-specific bullet additions (NOT replacements — appended to category-derived list).
  const familyBullets = (() => {
    switch (family) {
      case 'oral':
        return [
          { kind: 'caution', text: { hu: 'Gyomor-bél irritáció (hányinger, gyomorégés, hasmenés).', en: 'GI irritation (nausea, heartburn, diarrhea).', pl: 'Podrażnienie GI (nudności, zgaga, biegunka).' } },
          { kind: 'caution', text: { hu: 'Májterhelés — orális 17α-methylated AAS-eknél AST/ALT/GGT 4-6 hetente.', en: 'Hepatic load — for oral 17α-methylated AAS: AST/ALT/GGT every 4-6 weeks.', pl: 'Obciążenie wątroby — przy doustnych 17α-metylowanych AAS: AST/ALT/GGT co 4-6 tygodni.' } },
        ]
      case 'inhaled':
        return [
          { kind: 'caution', text: { hu: 'Szájüregi gombásodás (candidiasis) — szájöblítés használat után KÖTELEZŐ.', en: 'Oral candidiasis — mouth rinse after use MANDATORY.', pl: 'Kandydoza jamy ustnej — płukanie ust po użyciu OBOWIĄZKOWE.' } },
          { kind: 'caution', text: { hu: 'Szájszárazság, hangképzési zavar (dysphonia), torokfájás.', en: 'Dry mouth, voice changes (dysphonia), sore throat.', pl: 'Suchość ust, zmiany głosu (dysfonia), ból gardła.' } },
          { kind: 'caution', text: { hu: 'Tremor, tachycardia (β2-agonista hatás), palpitáció.', en: 'Tremor, tachycardia (β2-agonist effect), palpitations.', pl: 'Drżenie, tachykardia (działanie β2-agonisty), kołatanie serca.' } },
        ]
      case 'topical':
        return [
          { kind: 'caution', text: { hu: 'Bőrirritáció, kontakt-dermatitisz, viszketés a kezelt területen.', en: 'Skin irritation, contact dermatitis, itching at application site.', pl: 'Podrażnienie skóry, kontaktowe zapalenie skóry, świąd w miejscu aplikacji.' } },
          { kind: 'caution', text: { hu: 'Nem kívánt szőrnövekedés a kezelt területen (minoxidil-specifikus).', en: 'Unwanted hair growth at treatment site (minoxidil-specific).', pl: 'Niepożądany wzrost włosów w miejscu aplikacji (specyficzne dla minoxidilu).' } },
          { kind: 'avoid', text: { hu: 'Akcidentális arc/szem-kontaktus — alapos kézmosás kötelező felvitel után.', en: 'Accidental face/eye contact — thorough hand wash after application mandatory.', pl: 'Przypadkowy kontakt z twarzą/oczami — dokładne mycie rąk po aplikacji obowiązkowe.' } },
        ]
      case 'im':
        return [
          { kind: 'caution', text: { hu: 'Injekciós helyi reakció: csomó, vörösség, melegség, érzékenység.', en: 'Injection-site reaction: lumps, redness, warmth, tenderness.', pl: 'Reakcja w miejscu iniekcji: guzki, zaczerwienienie, ciepło, tkliwość.' } },
          { kind: 'caution', text: { hu: 'PIP (post-injection pain) — főleg propionát, trenbolone-ace, vagy magas BA%-os UGL-keverékeknél.', en: 'PIP (post-injection pain) — especially propionate, trenbolone-ace, or high-BA UGL blends.', pl: 'PIP (ból po iniekcji) — szczególnie propionian, trenbolon-ace, mieszanki UGL z wysokim BA.' } },
          { kind: 'avoid', text: { hu: 'Steril technika hiányában: cellulitisz, abszcessz, vér-bone fertőzés rizikó.', en: 'Without sterile technique: cellulitis, abscess, bloodborne infection risk.', pl: 'Bez techniki sterylnej: ryzyko cellulitis, ropnia, infekcji krwiopochodnej.' } },
        ]
      case 'in':
        return [
          { kind: 'caution', text: { hu: 'Orr-irritáció, száraz nyálkahártya, ízérzet-zavar.', en: 'Nasal irritation, dry mucosa, taste disturbance.', pl: 'Podrażnienie nosa, sucha błona śluzowa, zaburzenia smaku.' } },
          { kind: 'caution', text: { hu: 'Orrvérzés — fej hátradöntésével és orrnyomással állítható; gyakori orrvérzés esetén dózis-csökkentés.', en: 'Nosebleeds — manage with head tilt and nasal pressure; reduce dose if frequent.', pl: 'Krwawienia z nosa — odchylić głowę i ucisnąć nos; zmniejszyć dawkę przy częstych.' } },
        ]
      case 'sc':
      default:
        return [] // SC bullets come from category-derived list, no family-specific append
    }
  })()

  // ... rest of existing body that processes peptide.safety + categoryIds ...
  // (KEEP everything below this point as-is)
```

**IMPORTANT**: The existing body after the original `if (activeVariantId === 'in')` block processes `peptide.safety`, `categoryIds`, and returns a merged array. After this refactor, **append `familyBullets`** to the returned array. Locate the return statement at end of fn and change it to:

```js
  return [...familyBullets, ...existingDerivedBullets]
```

(`existingDerivedBullets` = whatever name the existing array variable is at the return site — read the function body first to identify it.)

- [ ] **Step 4: Syntax check + smoke build**

Run: `node -c src/components/library/adaptLibraryEntry.js && npm run build`
Expected: build PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js
git commit -m "feat(adapter): deriveSafetyProfile family-aware bullet append"
```

---

### Task A5: Refactor `deriveReconstitute` to family-aware

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js` (existing `deriveReconstitute` body)

- [ ] **Step 1: Locate**

Run: `grep -n "function deriveReconstitute" src/components/library/adaptLibraryEntry.js`

- [ ] **Step 2: Update to skip reconstitute for non-injection families**

Wrap the existing function body with:

```js
function deriveReconstitute(peptide, library, activeVariantId) {
  const family = getRouteFamily(activeVariantId)
  // Non-injection families: no reconstitute step needed (pre-formulated tablet/inhaler/cream/spray).
  if (family === 'oral' || family === 'inhaled' || family === 'topical') {
    return null
  }
  // ... existing body for sc / in / im ...
}
```

If `variant.reconstitute.steps[]` is present (e.g. user explicitly defined one), honor it regardless of family (existing v0.26 behavior).

- [ ] **Step 3: Update call-site in `adaptLibraryEntry`** (around line 1145)

Find the call `reconstitute: deriveReconstitute(peptide, library)` and add `activeVariantId`:

```js
reconstitute: deriveReconstitute(peptide, library, activeVariantId),
```

- [ ] **Step 4: Syntax check + commit**

```bash
node -c src/components/library/adaptLibraryEntry.js
git add src/components/library/adaptLibraryEntry.js
git commit -m "feat(adapter): deriveReconstitute family-aware null for non-injection"
```

---

### Task A6: Refactor `deriveDosing` + `deriveWhatIs` (already variant-aware, sanity check only)

**Files:**
- Inspect: `src/components/library/adaptLibraryEntry.js` (`deriveDosing` + `deriveWhatIs`)

- [ ] **Step 1: Verify deriveDosing prefers variant.dosing**

Run: `grep -n "function deriveDosing\|function deriveWhatIs" src/components/library/adaptLibraryEntry.js`

Read the bodies; confirm they already short-circuit to `peptide.dosing` / `peptide.whatIs` when variant-resolved (v0.26 behavior). No change needed if these are already variant-honoring.

- [ ] **Step 2: If a change is needed (e.g. missing fallback)**

If a change is needed, refactor the same pattern as Task A2 (`switch (family)` + family-specific defaults). Otherwise skip to A7.

- [ ] **Step 3: No commit if no changes**

---

### Task A7: Update Calculator-gate in `EntryDetail.jsx`

**Files:**
- Modify: `src/components/library/EntryDetail.jsx` (Calculator section, search for `_activeVariantId === 'in'`)

- [ ] **Step 1: Locate the gate**

Run: `grep -n "_activeVariantId" src/components/library/EntryDetail.jsx`

- [ ] **Step 2: Read context (~30 lines)**

Read the gate region (likely around the Calculator/MiniCalc render).

- [ ] **Step 3: Replace 2-branch gate with family-aware 5-branch**

Find the existing pattern (something like):
```jsx
{peptide._activeVariantId === 'in' ? (
  <InfoCard ... />
) : (
  <MiniCalc ... />
)}
```

Replace with:
```jsx
{(() => {
  const family = (() => {
    const id = peptide._activeVariantId
    if (id === 'in') return 'in'
    if (id === 'oral' || id === 'ac-oral') return 'oral'
    if (id === 'inhaled') return 'inhaled'
    if (id === 'topical') return 'topical'
    if (id === 'sc') return 'sc'
    if (!id) return null // no variants[]: keep existing MiniCalc default
    return 'im'
  })()
  // Info-card families: fixed dose, no vial/BAC calc needed
  if (family === 'in' || family === 'oral' || family === 'inhaled' || family === 'topical') {
    return <RecommendedDoseCard peptide={peptide} />
  }
  // MiniCalc families (sc / im / null): vial-BAC-dose calc
  return <MiniCalc peptide={peptide} />
})()}
```

(If `RecommendedDoseCard` is the existing v0.26 info-card component, reuse it directly. If it has a different name, use that name. Confirm via grep first.)

- [ ] **Step 4: Smoke build**

Run: `npm run build`
Expected: PASS, no React/JSX errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/library/EntryDetail.jsx
git commit -m "feat(EntryDetail): Calculator-gate family-aware (info-card vs MiniCalc)"
```

---

### Task A8: Build anchor entry `testosterone-info` (5 ester variants × 3 lang)

**Files:**
- Modify: `src/data/libraries/performance/entries/hu/testosterone-info.js`
- Modify: `src/data/libraries/performance/entries/en/testosterone-info.js`
- Modify: `src/data/libraries/performance/entries/pl/testosterone-info.js`

**Per variant** (5 variants: prop, enan, cyp, sus, aq) **× per lang** (HU/EN/PL):
- routeLabel: e.g. "Testosterone Propionate (rövid ester)"
- routeNote: 1-2 sentences when-to-choose
- image: oil-vial-yellow (enan/cyp/prop), oil-vial-orange (sus), water-vial (aq)
- halfLife + halfLifeActive (per-ester different)
- bioavailability (typically `–` for IM testosterone-ester, can omit or "100% IM bioavailable")
- onsetTime (per-ester different: prop ~12h, enan ~48h, cyp ~48h, sus ~6h, aq ~6h)
- dosing (FLAT body string per ester)
- doseCalc (type:"calc" for IM, vial-aware)
- hepatotoxicity: "None — IM testosterone-ester, hepatic-first-pass bypassed" (all 5 variants)
- aromatization: "High — testosterone aromatizes to estradiol via CYP19; AI co-cycling needed at >100 mg/wk supraphysiologic" (all 5)
- androgenicRatio: "100:100" (testosterone baseline, all 5)

- [ ] **Step 1: Read existing testosterone-info HU entry**

Read: `src/data/libraries/performance/entries/hu/testosterone-info.js` (full file)

- [ ] **Step 2: Identify the existing `variants[]` block**

Look for `"variants": [` and the 5 variant objects already present (currently they have `routeId` but minimal RICH content).

- [ ] **Step 3: Expand each variant to Albuterol-level RICH (HU first)**

For each of the 5 variants (prop, enan, cyp, sus, aq), add/update these fields (use real testosterone-ester pharmacology data from Bhasin 2018 PMID 29562364 + Snyder 2016 PMID 26886521 + Schänzer 1996 PMID 8765783):

Per-ester defaults to use (sourced PubChem + clinical literature):

| Ester | halfLife | halfLifeActive | onsetTime | routeLabel.hu |
|-------|----------|----------------|-----------|----------------|
| prop | 0.8-1.5 nap | ~2 nap | 12-24 óra | Testosterone Propionate (rövid ester) |
| enan | 4.5 nap | ~8-10 nap | 24-48 óra | Testosterone Enanthate (közepes ester) |
| cyp | 5-8 nap | ~8-12 nap | 24-48 óra | Testosterone Cypionate (közepes ester) |
| sus | 2-8 nap (vegyes) | ~12-15 nap | 6-12 óra | Sustanon 250 (4-ester keverék) |
| aq | 1-2 óra | 1-2 óra | <1 óra | Testosterone Suspension (vízbázisú) |

Each variant gets a full Albuterol-style block with 10 fields × 3 lang. **This is ~150 field-fills total — substantial inline work.**

- [ ] **Step 4: Repeat for EN + PL**

Write the corresponding EN + PL variant blocks (translate `routeLabel`, `routeNote`, `dosing`, `doseCalc.note`, `hepatotoxicity`, `aromatization` to EN/PL).

- [ ] **Step 5: Add/update `studies[]` array with PMID-verified entries**

Add 3-5 studies per entry, e.g.:
- Bhasin 2018 PMID 29562364 "Testosterone Therapy in Men With Hypogonadism"
- Snyder 2016 PMID 26886521 "Effects of Testosterone Treatment in Older Men" (TTrials)
- Schänzer 1996 PMID 8765783 "Metabolism of anabolic androgenic steroids"

- [ ] **Step 6: Run verify-pmids gate**

Run: `node scripts/verify-pmids.mjs --entry testosterone-info`
Expected: ALL PASS, zero MISMATCH/NOT_FOUND.

If any FAIL: use WebFetch with `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=<pmid>&retmode=json` to find replacement.

- [ ] **Step 7: Set `defaultVariant: "enan"` at entry level**

Find the entry's top-level `defaultVariant` field (or add if missing): `"defaultVariant": "enan"`.

- [ ] **Step 8: Validator + build smoke**

Run: `npm run validate:meta && npm run build`
Expected: both PASS.

- [ ] **Step 9: Lokál smoke (1 min)**

Run: `npm run dev`
Manually open `http://localhost:5173/#entry/performance/testosterone-info` in browser. Toggle through all 5 variants. Verify:
- Each variant shows its own routeLabel + routeNote
- Calculator section shows MiniCalc (im family → no info-card)
- safetyProfile shows IM-specific bullets (PIP, injection-site)
- quickStart shows IM-specific 4-step (gluteus/quad injection)
- qualityIndicators shows oil-clarity + vial-integrity + BA/BB markers

- [ ] **Step 10: Commit anchor**

```bash
git add src/data/libraries/performance/entries/hu/testosterone-info.js src/data/libraries/performance/entries/en/testosterone-info.js src/data/libraries/performance/entries/pl/testosterone-info.js
git commit -m "feat(performance): v0.27 anchor — testosterone-info 5-ester RICH multi-variant"
```

- [ ] **Step 11: Push master + verify v0.26 peptides regression-free**

```bash
git push origin master
```

Open `http://localhost:5173/#entry/peptides/semax` and toggle SC→IN; verify v0.26 nasal-spray UI still works (regression-check on `sc` and `in` family branches that should be unchanged).

---

## Phase B — Subagent Rounds (4 rounds × 3 parallel)

### Task B-Common: Subagent prompt template

Use this exact prompt for each subagent dispatch (substitute `<X>`, `<LIB>`, `<WORKTREE>`, `<ROUTEIDS>`, `<DEFAULT>`, `<IMG_MAP>`):

```
Task: Build RICH multi-variant body for entry `<X>` in 3 languages (HU/EN/PL).

Worktree: <WORKTREE>
Branch: feat/v027-<X>

Anchor reference (master branch, latest): src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js
Also reference: src/data/libraries/performance/entries/{hu,en,pl}/albuterol.js (v0.25.1 example, 2-variant oral+inhaled)

Entry routeIds: <ROUTEIDS>
Default variant: <DEFAULT>
Image template assignments (per variant):
<IMG_MAP>

Per-variant fields required (Albuterol-level RICH, ~10 fields):
- id (= routeId), routeId, routeLabel ({hu,en,pl}), routeNote ({hu,en,pl})
- image (path from IMG_MAP)
- halfLife, halfLifeActive (if applicable), bioavailability, onsetTime ({hu,en,pl} each)
- dosing (FLAT body string, {hu,en,pl})
- doseCalc { type, fixed:{low,medium,high}, unit, note:{hu,en,pl} }
- AAS-specific (if AAS variant): hepatotoxicity, aromatization, androgenicRatio
- Optional: whatIs override (variant-specific 1-2 sentence override)

PMID policy: STRICT peer-reviewed for studies[] array ONLY.
- Run `node scripts/verify-pmids.mjs --entry <X>` BEFORE commit.
- If any PMID FAIL → replace via WebFetch to `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=<pmid>&retmode=json`
- Body text MAY use general pharmacology + FDA SmPC + sean's curated notes (no citation back) — but studies[] PMID-only.
- Suggested PubMed search anchors (verify each before adding!):
  - Hartgens-Kuipers 2004 PMID 15248788 (AAS effects general)
  - Pope-Kanayama 2017 PMID 27669093 (AAS use review)
  - Schänzer 1996 PMID 8765783 (AAS metabolism)
  - Cohen 2019 PMID 31085996 (designer steroid hepatotoxicity)

DO NOT modify: adapter, validator, scripts, EntryDetail.jsx, package.json.
DO modify: 3 entry-body files in src/data/libraries/<LIB>/entries/{hu,en,pl}/<X>.js

Output:
1. Edit 3 entry-body files (HU, EN, PL).
2. Run `node scripts/verify-pmids.mjs --entry <X>` until PASS.
3. Run `npm run validate:meta` until PASS.
4. Commit with message: "feat(<LIB>): v0.27 multi-variant for <X>"
5. Report back: commit hash + verify-pmids output + any issues encountered.

If session-limit hit mid-task: commit partial work with message "WIP v0.27 <X> partial — <state>".
```

### Task B-Round-1: Group A (3 parallel subagents)

**Subagents to dispatch in parallel** (single message, 3 Agent tool calls):

- [ ] **Step 1: Dispatch subagent for `albuterol`**

Worktree: `.worktrees/feat-v027-albuterol`
RouteIds: `["oral", "inhaled"]`, Default: `inhaled`
Img map: `oral → /performance/tablet-pile-white.png`, `inhaled → /performance/inhaler-asthma.png`
NOTE: albuterol already has v0.25.1 variant body — subagent should expand to v0.27 RICH (add halfLifeActive, expand routeNote/dosing/doseCalc.note, add PMID-verified studies if missing).

- [ ] **Step 2: Dispatch subagent for `l-carnitine`**

Worktree: `.worktrees/feat-v027-l-carnitine`
RouteIds: `["oral", "aq"]`, Default: `oral`
Img map: `oral → /performance/softgel-orange.png` (or tablet-pile if no softgel), `aq → /performance/water-vial.png`
PMID anchors: Stephens 2007 PMID 17572471, Wall 2011 PMID 21224234

- [ ] **Step 3: Dispatch subagent for `minoxidil`**

Worktree: `.worktrees/feat-v027-minoxidil`
Library: `pharmaceutical` (not performance!)
RouteIds: `["oral", "topical"]`, Default: `topical`
Img map: `oral → /performance/tablet-pile-white.png`, `topical → /performance/topical-solution-clear.png`
PMID anchors: Olsen 1995 PMID 7868972, Vañó-Galván 2021 PMID 33548397

- [ ] **Step 4: Wait for all 3 subagents to complete**

Notification arrives automatically. Do NOT poll.

- [ ] **Step 5: Pull each worktree's commits**

For each worktree:
```bash
cd .worktrees/feat-v027-<X>
git log --oneline -5
# Note the commit hash
cd ../..
git cherry-pick <commit-hash>
```

- [ ] **Step 6: Run validator + verify-pmids on feat branch**

```bash
git checkout -b feat/v027-route-aware  # if not already
npm run validate:meta
node scripts/verify-pmids.mjs --lib performance
node scripts/verify-pmids.mjs --lib pharmaceutical
```

Expected: all PASS.

- [ ] **Step 7: Immediate merge to master (account-switch safety)**

```bash
git checkout master
git merge feat/v027-route-aware --no-ff -m "feat: v0.27 Round 1 — albuterol + l-carnitine + minoxidil"
git push origin master
```

- [ ] **Step 8: Cleanup worktrees**

```bash
git worktree remove --force .worktrees/feat-v027-albuterol
git worktree remove --force .worktrees/feat-v027-l-carnitine
git worktree remove --force .worktrees/feat-v027-minoxidil
git branch -D feat/v027-albuterol feat/v027-l-carnitine feat/v027-minoxidil
```

### Task B-Round-2: Group B mid (3 parallel subagents)

Entries: **dianabol-info**, **superdrol**, **winstrol-info**

Per-entry params (use B-Common prompt template + substitute):

- **dianabol-info** (performance): RouteIds `["oral", "oil"]`, Default `oral`, Img `oral → tablet-pile-white.png`, `oil → oil-vial-yellow.png`, AAS-specific (17α-methyl orals → high hepatotoxicity, aromatizes)
- **superdrol** (performance): RouteIds `["oral", "injectable"]`, Default `oral`, Img `oral → tablet-pile-white.png`, `injectable → oil-vial-orange.png`, AAS (17α-methyl → very high hepatotoxicity, NON-aromatizing)
- **winstrol-info** (performance): RouteIds `["oral", "aq"]`, Default `oral`, Img `oral → tablet-pile-white.png`, `aq → water-vial.png`, AAS (17α-methyl → moderate-high hepatotoxicity, NON-aromatizing)

- [ ] **Step 1: Dispatch 3 subagents in parallel** (single message, 3 Agent tool calls)
- [ ] **Step 2: Wait for completion notifications**
- [ ] **Step 3: Pull + cherry-pick each worktree** (same pattern as B-Round-1 Step 5)
- [ ] **Step 4: Validator + verify-pmids** (same as B-Round-1 Step 6)
- [ ] **Step 5: Merge to master + push** (same as B-Round-1 Step 7)
- [ ] **Step 6: Cleanup worktrees** (same as B-Round-1 Step 8)

### Task B-Round-3: Group C first half (3 parallel subagents)

Entries: **trenbolone-info**, **nandrolone-info**, **primobolan**

Per-entry params:

- **trenbolone-info** (performance): RouteIds `["ace", "enan", "hex"]`, Default `ace`, Img all → `oil-vial-orange.png`, AAS (NON-aromatizing, PIP-rizikó, kardiorenális stress); PMID anchor Yarrow 2010 PMID 20546861
- **nandrolone-info** (performance): RouteIds `["deca", "npp"]`, Default `deca`, Img all → `oil-vial-yellow.png`, AAS (low-aromatization but PROGESTOGENIC → prolactin risk); PMID anchor Hartgens-Kuipers 2004 PMID 15248788 + de Souza 2011 PMID 21496029
- **primobolan** (performance): RouteIds `["ac-oral", "enan-oil"]`, Default `enan-oil`, Img `ac-oral → tablet-pile-white.png`, `enan-oil → oil-vial-yellow.png`, AAS (NON-aromatizing, NON-progestogenic, low-androgenic — cosmetic AAS)

Same 6 steps as B-Round-2.

### Task B-Round-4: Group C second half (3 parallel subagents)

Entries: **masteron**, **ment-19nor**, **ment-test**

Per-entry params:

- **masteron** (performance): RouteIds `["prop", "enan"]`, Default `prop`, Img all → `oil-vial-yellow.png`, AAS (NON-aromatizing, DHT-derivative → cosmetic + libido, anti-aromatase secondary); PMID anchor Pope-Kanayama 2017 PMID 27669093
- **ment-19nor** (performance): RouteIds `["ac", "en"]`, Default `ac`, Img all → `oil-vial-orange.png`, designer AAS (7α-methyl-19-nortestosterone, very high anabolic); PMID anchor Sundaram 1995 PMID 7836405
- **ment-test** (performance): RouteIds `["ac", "en"]`, Default `ac`, Img all → `oil-vial-orange.png`, designer AAS (MENT + Test mixture); same PMID anchor as ment-19nor + Bhasin 2018 if testosterone-ester component referenced

Same 6 steps as B-Round-2.

---

## Phase C — Final Verify + Ship (controller-inline)

### Task C1: Full verify-pmids matrix

- [ ] **Step 1: Full performance lib verify**

```bash
node scripts/verify-pmids.mjs --lib performance
```

Expected: ALL PASS. If any FAIL, replace PMID via WebFetch eutils. Re-run until clean.

- [ ] **Step 2: Full pharmaceutical lib verify**

```bash
node scripts/verify-pmids.mjs --lib pharmaceutical
```

Expected: ALL PASS.

- [ ] **Step 3: Full peptides + nootropics regression check** (sanity)

```bash
node scripts/verify-pmids.mjs --lib peptides
node scripts/verify-pmids.mjs --lib nootropics
```

Expected: same as before v0.27, no new failures.

### Task C2: Validator + build

- [ ] **Step 1: Validator**

```bash
npm run validate:meta
```

Expected: PASS, 4 libs × 193 entries stable.

- [ ] **Step 2: Build**

```bash
npm run build
```

Expected: PASS, build <8s, PWA precache <5120 KiB. Note actual precache count + size.

### Task C3: Lokál smoke matrix

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Smoke each of 13 entries × all variants**

For each entry, in a browser:

| Entry | URL | Toggle through |
|-------|-----|----------------|
| albuterol | `http://localhost:5173/#entry/performance/albuterol` | oral ↔ inhaled |
| l-carnitine | `http://localhost:5173/#entry/performance/l-carnitine` | oral ↔ aq |
| minoxidil | `http://localhost:5173/#entry/pharmaceutical/minoxidil` | oral ↔ topical |
| testosterone-info | `http://localhost:5173/#entry/performance/testosterone-info` | prop ↔ enan ↔ cyp ↔ sus ↔ aq |
| trenbolone-info | `http://localhost:5173/#entry/performance/trenbolone-info` | ace ↔ enan ↔ hex |
| nandrolone-info | `http://localhost:5173/#entry/performance/nandrolone-info` | deca ↔ npp |
| dianabol-info | `http://localhost:5173/#entry/performance/dianabol-info` | oral ↔ oil |
| superdrol | `http://localhost:5173/#entry/performance/superdrol` | oral ↔ injectable |
| winstrol-info | `http://localhost:5173/#entry/performance/winstrol-info` | oral ↔ aq |
| primobolan | `http://localhost:5173/#entry/performance/primobolan` | ac-oral ↔ enan-oil |
| masteron | `http://localhost:5173/#entry/performance/masteron` | prop ↔ enan |
| ment-19nor | `http://localhost:5173/#entry/performance/ment-19nor` | ac ↔ en |
| ment-test | `http://localhost:5173/#entry/performance/ment-test` | ac ↔ en |

Per variant, verify:
- ✓ Variant image loads (no 404, transparent PNG renders on dark bg)
- ✓ routeLabel + routeNote visible in VariantToggle
- ✓ Calculator section: info-card for oral/inhaled/topical/in; MiniCalc for sc/im
- ✓ quickStart shows family-specific 4-step (e.g. oral: blister/lenyel; im: gluteus/quad; inhaled: MDI-shake/inhale)
- ✓ qualityIndicators shows family-specific markers
- ✓ safetyProfile shows family-specific bullets (oral: GI/hepatic; inhaled: candidiasis; topical: skin/transfer; im: PIP/injection-site)
- ✓ VariantToggle URL changes correctly (`#entry/<lib>/<entry>/<routeId>`, NOT `<routeId>/<routeId>`)

- [ ] **Step 3: Regression check on v0.26 peptide entries**

Open `http://localhost:5173/#entry/peptides/semax` and toggle SC↔IN. Verify v0.26 nasal-spray UI unchanged.

- [ ] **Step 4: Stop dev server** (Ctrl+C)

### Task C4: Tag + push

- [ ] **Step 1: Confirm clean working tree**

```bash
git status
```

Expected: nothing to commit, working tree clean (all Phase B rounds already merged).

- [ ] **Step 2: Tag**

```bash
git tag -a v0.27-multi-route-aware -m "$(cat <<'EOF'
v0.27 — Multi-Route-Aware Refactor

Adapter route-family branching extended from 2 (sc/in, v0.26) to 5 (oral/inhaled/topical/sc/in) + IM-ester fallback.

13 multi-form entries get RICH route-aware UI defaults:
- Group A (non-injection, 3): albuterol, l-carnitine, minoxidil
- Group B (AAS oral+inject mix, 4): dianabol-info, superdrol, winstrol-info, primobolan
- Group C (AAS pure ester, 6): testosterone-info, trenbolone-info, nandrolone-info, masteron, ment-19nor, ment-test

Anchor entry: testosterone-info (5 ester variants, im-fallback validation).
Source policy: peer-reviewed PMID-strict on studies[]; body text general pharmacology + FDA SmPC.
verify-pmids.mjs gate PASS for all entries.

Build: validator PASS / build PASS / PWA precache <5MB.
Local smoke: 13 entries × 30+ variants × Calculator-gate matrix verified.

Precedent: v0.26 nasal-spray multi-variant (eaf87fd).
EOF
)"
```

- [ ] **Step 3: Push tag**

```bash
git push origin v0.27-multi-route-aware
```

- [ ] **Step 4: Vercel auto-deploy** (no action — Vercel watches master + tags)

Wait ~3 minutes for deploy. Then live-verify 2 entries:
- `https://molekulax.vercel.app/#entry/performance/testosterone-info` (anchor, 5-variant matrix)
- `https://molekulax.vercel.app/#entry/performance/albuterol` (Group A, 2-variant + family-toggle)

---

## Self-Review (controller, post-plan)

After this plan is committed (Task pre-Phase-A), I will run a self-review:
1. **Spec coverage**: every numbered section in spec is addressed (§1 scope → Tasks B-Round-1..4 + A8 anchor; §2 architecture → Tasks A1-A7; §3 data shape → Tasks A8 + B subagent prompt; §4 source policy → A8 step 6 + B-Common verify-pmids; §5 phases → A/B/C structure; §6 acceptance → C3 smoke + C2 build; §7 risks → addressed inline in B steps; §8 references → linked).
2. **Placeholder scan**: no "TBD", "implement later" in steps.
3. **Type consistency**: `family` variable name consistent across A1-A7; `_activeVariantId` consistent with v0.26.

---

## Obsidian Mirror

After commit, mirror this plan to: `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_MultiRouteAware_Plan.md`

```bash
cp docs/superpowers/plans/2026-05-22-multi-route-aware.md "/e/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_MultiRouteAware_Plan.md"
```
