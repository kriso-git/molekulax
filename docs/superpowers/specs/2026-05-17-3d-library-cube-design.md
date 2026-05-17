# MolekulaX — 3D Library Cube Navigation (Phase 7) — Design

**Date:** 2026-05-17
**Phase:** 7 (főtask)
**Replaces:** `LibrarySwitcher.jsx` (4-chip horizontális választó)
**Estimated commits:** 3-5
**Estimated effort:** 6-10h

---

## Goal

A jelenlegi `LibrarySwitcher.jsx` 4-chip-tablista cseréje egy 3D forgó kocka navigációra, ahol mind a 4 könyvtár (peptides / nootropics / performance / pharmaceutical) egy-egy kockalap. A user oldalsávos nyíl-gombokkal vagy mobile-on swipe-pal/dots-szal váltja a könyvtárat; a kocka 90°-os spring-rotation-nel pörög át a következő lapra, mialatt a wrapper magassága a target library magasságára animál. A "kocka mint geometria" implicit — csak az aktív lap látszik teljes tartalommal.

---

## Decisions (brainstorming gate-ek alapján)

| # | Kérdés | Választás |
|---|---|---|
| 1 | Paradigma | **Literal 3D Cube** — 4 oldal = 4 library, csak az aktív lap látszik |
| 2 | Kocka-lap scope | **Library-függő minden** — LibraryGallery + EffectsSection + Calculator (peptid esetén) együtt forog |
| 3 | Vezérlők | **Oldalsávos nyíl + szomszéd-name peek + dots alul** (A+C hibrid a brainstorming-mockupokból) |
| 4 | Magasság | **Animált height transition** a forgatás során (Framer Motion `layout` + `auto`) |
| 5 | Mobile | **Nyilak rácsúsztatva** a face szélére + **swipe gesture** + dots alul |
| 6 | Vég-viselkedés | **Loop / wrap-around** (pharma → peptidek és vissza) |
| 7 | Animation | **Spring** physics, ~600ms, stiffness 180 / damping 22 / mass 1.1 |
| 8 | Library sorrend | **peptid → nootro → perf → pharma** (jelenlegi `LIBRARIES` array) |
| 9 | Reduced-motion | **Instant swap + 200ms cross-fade** (3D wrapper kihagyva) |
| 10 | Hash a forgatáson | **NEM változik** — csak `EntryDetail` esetén jön be a hash |
| 11 | Page-refresh perzisztencia | **`sessionStorage.molekulax:libraryId`** — F5 után ugyanaz a library |
| 12 | Keyboard | `←` / `→` (prev/next loop) + `Home` / `End` (jump első/utolsó). Számbillentyű NINCS. |
| 13 | Egér-drag | **Tilos desktop-on** — csak nyíl + dots + keyboard. Swipe csak `pointer: coarse`-on. |

---

## Architecture

### Új függőség

```
framer-motion@^11.x
```

Drag gesture, spring physics, `AnimatePresence`, `useReducedMotion` hook — mind kell. ~40kB gzipped (figyelünk a 650kB total budget-re).

### Új komponensek

Mind az új komponensek `src/components/library/cube-nav/` mappa alatt.

**`LibraryCube.jsx`** (~120-150 sor)
- A 3D wrapper. Outer `motion.div` perspective + height-auto, inner `motion.div` `transform-style: preserve-3d` + Y-rotation.
- Props: `libraries` (Library[]), `currentIndex` (0-3), `rotationDeg` (number, monotonically decreasing/increasing), `isFirstRender` (bool, no-animate flag).
- Renderelteti a 4 `CubeFace`-t, mindegyiknek átadja `faceIndex` + `isActive`.
- Touch-detect (`useMediaQuery('(pointer: coarse)')`) → `drag="x"` a touch device-on, desktop-on false.
- `onDragEnd` callback: threshold 60px vagy 300px/s velocity → `next()` / `prev()`.
- `useReducedMotion()` ág: 3D wrapper helyett `AnimatePresence mode="wait"` cross-fade.

**`CubeFace.jsx`** (~80-100 sor)
- Egy library tartalmi blokkja. `position: absolute; inset: 0` + face-index-szerinti `transform: rotateY(N*90deg) translateZ(halfWidth)`.
- Props: `library` (Library), `isActive` (bool), `faceIndex` (0-3), `onHeightChange(faceIndex, heightPx)` callback.
- `useResizeObserver`-rel méri a saját content-magasságát, és `onHeightChange`-en jelenti a wrapper-nek hogy a height-animation tudja a target-et.
- **Lazy-mount cache:** belső `hasBeenActiveRef` (useRef). Amint `isActive` először `true` lesz, a ref `true`-ra vált, és onnantól FOLYAMATOSAN renderelteti a teljes tartalmat (akkor is, ha `isActive` később `false` lesz). Ez biztosítja hogy forgás közben a régi face MARAD renderelve (különben a user üres oldalt látna pörögni a `currentIndex` state-frissítés pillanatától).
  - Render-state matrix:
    - `hasBeenActive === false` → minimális skeleton placeholder (`min-height: 600px` library-accent színű empty state, library név látszik)
    - `hasBeenActive === true` → teljes tree (`LibraryGallery` + `EffectsSection` + peptid-only `Calculator`) a library-context-jében, `pointer-events: none` amíg `!isActive`
  - Eredmény: első session-ben csak a default library rendered. Forgatás közben a target face mountol → mind a kettő rendered a 600ms alatt. 4× forgatás után mind a 4 face cached, nincs többé skeleton.

**`CubeNavControls.jsx`** (~100-130 sor)
- Vezérlő-réteg. Két `motion.button` nyíl (bal/jobb) + szomszéd-name peek (`hidden lg:inline`) + alul a `DotsIndicator`.
- Felelős a UI eseményeknek: kattintásra → `onPrev` / `onNext` / `onJumpTo(idx)`.
- Desktop: side-rails layout (`grid-cols-[auto_1fr_auto]`). Mobile: `position: absolute` rácsúsztatva a kocka-face szélére (`left-2 / right-2`).
- A keyboard handler-eket a wrapping `<section>` kapja, NEM ez a komponens (`onKeyDown` a `LibraryCube` outer-én).
- A nyíl-aria-label dinamikusan: `aria-label={\`Előző könyvtár: ${prevLib.name[lang]}\`}`.

**`DotsIndicator.jsx`** (~50 sor)
- 4 dot, `role="tablist"` konténerben, mindegyik `role="tab"` + `aria-selected` + `aria-controls="library-cube-panel"` + `aria-label`.
- Aktív dot: hosszúkás pirula (`width: 20px`, `border-radius: 6px`, `background: #00ff99`, `box-shadow: 0 0 8px #00ff99`).
- Inaktív dot: 7×7 kör, `rgba(255,255,255,0.18)`.
- Click → `onJumpTo(idx)`.

**`useCubeIndex.js`** (custom hook, ~60-80 sor)
- Wrap-around state management.
- Inputs: `libraryId` + `setLibraryId` (a `LibraryContext`-ből).
- Outputs: `{ currentIndex, rotationDeg, next, prev, jumpTo, libraries, isFirstRender }`.
- `signedShortestDelta(from, to)` helper: pl. 3→0 esetén delta=+1 (NEM -3), 0→3 esetén -1. Így a kocka rövidebb irányba forog wrap-around-nál.
- `rotationDeg` monotonically változik (`r - delta * 90`), NEM modulo 360 — így nincs "visszaperdülés" animáció közben.
- First-render no-animate: `isFirstRenderRef` → instant `rotationDeg = -currentIndex * 90`, NEM animáltan.

### Refaktor

**`src/components/LibrarySwitcher.jsx`** → **TÖRÖLVE.** Helyét a kocka maga veszi át.

**`src/components/LibraryGallery.jsx`** — `<LibrarySwitcher />` import + render eltávolítva (line 10 + line eleji `<LibrarySwitcher />` render-call). A Gallery csak a Top10 grid + accordion + szűrőket rendereli most.

**`src/App.jsx`** — a jelenlegi triplett:

```jsx
<LibraryGallery />
<EffectsSection />
<CalculatorGate />
```

helyére jön:

```jsx
<LibraryCube />
```

A `<LibraryCube />` belső `<CubeFace>` per-library rendereli a fent felsorolt 3 komponenst (`CalculatorGate` logika átmegy a `CubeFace`-be: `library.id === 'peptides' && <Calculator />`).

**`src/context/LibraryContext.jsx`** — kiegészítés a sessionStorage perzisztenciához:

```jsx
const STORAGE_KEY = 'molekulax:libraryId'

export function LibraryProvider({ children, defaultId = DEFAULT_LIBRARY_ID }) {
  const [libraryId, setLibraryId] = useState(() => {
    if (typeof window === 'undefined') return defaultId
    // Priority: hash deep-link > sessionStorage > defaultId
    const hash = window.location.hash.replace(/^#/, '')
    const m = hash.match(/^entry\/([a-z-]+)\//)
    if (m && getLibrary(m[1])) return m[1]
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored && getLibrary(stored)) return stored
    return defaultId
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, libraryId)
    }
  }, [libraryId])

  // ...rest unchanged
}
```

---

## Animation system

### Spring config

```js
const ROTATION_SPRING = {
  type: 'spring',
  stiffness: 180,
  damping: 22,
  mass: 1.1,
  restDelta: 0.001,
}

const HEIGHT_TWEEN = {
  type: 'tween',
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],   // power3-out
}
```

Élesben tweakelhető.

### Rotation matek (Y-tengely)

```
rotationDeg monoton csökken/növekszik:
  next():  rotationDeg -= 90 * signedShortestDelta(prev, next)
  prev():  rotationDeg += 90 * signedShortestDelta(prev, next)

Wrap-around példák:
  3 → 0  (jobb-nyíl pharma-ról peptidre): delta = +1, rotation -= 90 (egy lépés jobbra)
  0 → 3  (bal-nyíl peptidről pharma-ra):  delta = -1, rotation += 90 (egy lépés balra)

A rotationDeg sosem reset-elődik 0-ra. Mindig a current value-ból delta-zódik.
```

### Wrapper struktúra

```jsx
<motion.div                       // OUTER: perspective + height-auto
  id="library"
  className="page-section relative"
  layout
  transition={{ height: HEIGHT_TWEEN }}
  style={{ perspective: '1800px' }}
>
  <motion.div                     // INNER: transform-style + Y-rotate
    style={{ transformStyle: 'preserve-3d', position: 'relative' }}
    animate={{ rotateY: rotationDeg }}
    transition={isFirstRender ? { duration: 0 } : ROTATION_SPRING}
    drag={isTouch ? 'x' : false}
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.15}
    onDragEnd={handleDragEnd}
  >
    {libraries.map((lib, idx) => (
      <CubeFace
        key={lib.id}
        library={lib}
        isActive={idx === currentIndex}
        faceIndex={idx}
        onHeightChange={handleFaceHeight}
      />
    ))}
  </motion.div>
  <CubeNavControls
    onPrev={prev} onNext={next} onJumpTo={jumpTo}
    currentIndex={currentIndex}
    libraries={libraries}
  />
</motion.div>
```

### Reduced-motion ág

```jsx
const reduceMotion = useReducedMotion()

if (reduceMotion) {
  return (
    <section id="library" className="page-section relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={library.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <LibraryGallery />
          <EffectsSection />
          {library.id === 'peptides' && <Calculator />}
        </motion.div>
      </AnimatePresence>
      <CubeNavControls .../>   {/* dolgozik, de swipe nélkül */}
    </section>
  )
}
```

A swipe gesture sem aktív ebben az ágban (nincs `drag` motion.div).

---

## Navigation state, hash sync, keyboard

### `useCubeIndex.js`

```jsx
export function useCubeIndex(libraryId, setLibraryId) {
  const libraries = listLibraries()
  const currentIndex = Math.max(0, libraries.findIndex(l => l.id === libraryId))
  const [rotationDeg, setRotationDeg] = useState(() => -currentIndex * 90)
  const prevIndexRef = useRef(currentIndex)
  const isFirstRenderRef = useRef(true)

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      setRotationDeg(-currentIndex * 90)
      prevIndexRef.current = currentIndex
      return
    }
    if (prevIndexRef.current === currentIndex) return
    const delta = signedShortestDelta(prevIndexRef.current, currentIndex)
    setRotationDeg(r => r - delta * 90)
    prevIndexRef.current = currentIndex
  }, [currentIndex])

  return {
    currentIndex,
    rotationDeg,
    isFirstRender: isFirstRenderRef.current,
    libraries,
    next:   () => setLibraryId(libraries[(currentIndex + 1) % 4].id),
    prev:   () => setLibraryId(libraries[(currentIndex + 3) % 4].id),
    jumpTo: (idx) => setLibraryId(libraries[idx].id),
  }
}

function signedShortestDelta(from, to) {
  let d = to - from
  if (d > 2) d -= 4
  if (d < -2) d += 4
  return d
}
```

### Hash deep-link & sessionStorage prioritás

Mount-time `LibraryProvider`:
1. Ha `window.location.hash` formátuma `#entry/<libid>/<id>` → `libid` library lesz az aktív
2. Egyébként `sessionStorage.getItem('molekulax:libraryId')` ha létezik és érvényes
3. Egyébként `DEFAULT_LIBRARY_ID` (peptides)

Forgatáskor a hash **NEM** változik (csak `EntryDetail` átkapcsolásnál). Minden `setLibraryId` szinkron sessionStorage-ba ír.

### Keyboard

A `<section id="library">` wrapper-en `tabIndex={0}` + `onKeyDown`:

| Key | Action |
|---|---|
| `←` / `ArrowLeft` | `prev()` (loop) |
| `→` / `ArrowRight` | `next()` (loop) |
| `Home` | `jumpTo(0)` (peptidek) |
| `End` | `jumpTo(3)` (pharma) |
| egyéb | passthrough (`Enter`/`Space` a fókuszált tile-on dolgozik) |

### Swipe touch handler

```js
function handleDragEnd(_, info) {
  const SWIPE_DIST = 60
  const SWIPE_VELOCITY = 300
  if (info.offset.x < -SWIPE_DIST || info.velocity.x < -SWIPE_VELOCITY) next()
  else if (info.offset.x > SWIPE_DIST || info.velocity.x > SWIPE_VELOCITY) prev()
  // Különben Framer Motion auto-snap visszaperdüli (elasticity 0.15)
}
```

---

## Accessibility (WCAG 2.1 AA)

### Semantika

- Cube wrapper: `<section id="library" role="region" aria-roledescription="Library selector" aria-label={library.name[lang]}>`
- Cube content area: `<div id="library-cube-panel" role="tabpanel" aria-labelledby={\`lib-tab-\${library.id}\`}>`
- Nyíl-gombok: `<button aria-label={\`Előző könyvtár: \${prevLib.name[lang]}\`}>` — peek-szöveg vizuálisan redundáns, de NEM az aria-label szövege (kerüljük a Phase 7 Round 1 `label-content-name-mismatch` audit-failure-t).
- Dots indicator: `role="tablist"` konténer, minden dot `role="tab"` + `aria-selected={isActive}` + `aria-controls="library-cube-panel"` + `id={\`lib-tab-\${library.id}\`}`.

### Live region

A cube wrapper-ben rejtett:

```jsx
<span className="sr-only" aria-live="polite" aria-atomic="true">
  {`${library.name[lang]} könyvtár`}
</span>
```

Library-váltáskor a screen-reader politely bemondja az új library nevét.

### Focus management

- Forgatás közben (~600ms): `pointer-events: none` a kocka-wrapper-en, hogy ne kattintható a content. A nyíl-gombok és dots maradnak interaktívak.
- Forgatás végén a fókusz NEM ugrik máshová — az utolsó interakció helyén marad (nyíl-gomb / dot / wrapper).
- Tab-order: cube-wrapper → balnyíl → dots[0..3] → jobbnyíl → cube-panel tartalom (Top10 grid → accordion → EffectsSection → Calculator ha aktív).

### Reduced motion

`useReducedMotion()` → `prefers-reduced-motion: reduce` esetén:
- 3D wrapper teljes kihagyva → `AnimatePresence` cross-fade 200ms
- Swipe gesture nem aktív
- Minden más (nyíl-click, dot-click, keyboard) változatlanul dolgozik

### Kontraszt (Phase 7 baseline tartása)

| Element | FG | BG | Ratio | Status |
|---|---|---|---|---|
| Peek-szöveg dark | `#94a3b8` | `#07071e` | 7.2:1 | AAA ✅ |
| Peek-szöveg light | `#64748b` | `#f1f5f9` | 4.9:1 | AA ✅ |
| Nyíl ikon | `#00ff99` | `#07071e` | 19:1 | AAA ✅ |
| Aktív dot | `#00ff99` | `#07071e` | 19:1 | AAA ✅ |
| Inaktív dot | `rgba(255,255,255,0.18)` | `#07071e` | <3:1 | ⚠️ Nem információhordozó (csak indikátor) — az aktív állapot 19:1 elegendő |

### Touch target (WCAG 2.5.5)

- Desktop nyíl: 44×44 (visual 36×36 + 4px belső padding rejtett hit-area-val)
- Mobile nyíl: 36×36 (face szélére csúszva — a 8px outer body-tartomány a kockán kívül is hit-area-ként megy)
- Dots: 24×24 hit-area (visible dot 7-8px középen)

### WCAG 2.3.3 (Animation from Interactions)

Minden 3D-motion user-input által triggerelt (swipe / nyíl-click / dot-click / keyboard) → exempt. Az `aria-live="polite"` nem szakítja meg az aktív flow-t.

---

## Mobile responsive

### Breakpointok

```
Desktop (lg, ≥1024px):
  - Side rails látszanak peek-szöveggel
  - Nyíl 44×44
  - Layout: grid-cols-[auto_1fr_auto]

Tablet (sm-md, 640-1023px):
  - Side rails megmaradnak peek-szöveg nélkül (hidden lg:inline)
  - Nyíl 40×40
  - Layout: grid-cols-[auto_1fr_auto]

Mobile (<640px):
  - Nyilak rácsúsztatva a kockalap szélére (absolute, left-2 / right-2)
  - Nyíl 36×36
  - Swipe gesture aktív (drag="x")
  - Dots indicator alul
  - Layout: relative cube + absolute arrows
```

### Touch-only swipe

```jsx
const isTouch = useMediaQuery('(pointer: coarse)')
<motion.div drag={isTouch ? 'x' : false} ... />
```

Egér-drag desktop-on EXPLICITEN tilos. Csak nyíl + dots + keyboard.

---

## Edge cases

| Eset | Viselkedés |
|---|---|
| Gyors duplakatt a nyíl-gombon | Framer Motion interrupt-olja az előző animációt, +1 lépés hozzáadódik. 2× kattintás = 180° forgás folyamatosan. |
| Window resize forgatás közben | `useResizeObserver` átszámolja a `halfWidth` translateZ-t, a transform interpoláció folytatódik az új értékkel. |
| Mid-rotation F5 | sessionStorage már az új library-id-t tartja → reload → first-render no-animate → instant új face. |
| Mid-rotation entry-click | `window.location.hash = 'entry/...'` → App hideLanding → cube unmount közepén. Framer Motion clean-up jól kezeli. |
| Section anchor `#library` scroll | `id="library"` átkerül a cube-wrapper outer divre, `scrollIntoView` változatlan. |
| Első session (üres sessionStorage) | Fallback `DEFAULT_LIBRARY_ID = 'peptides'`. No-animate first render. |
| 4 face egyszerre image+animation heavy | `hasBeenActive` lazy-mount cache (CubeFace internal): első session-ben csak a default library rendered, a többi 3 skeleton. Forgás közben a target mountol → 2 face cached. Csak 4 váltás után érjük el a "mind 4 rendered" állapotot. |
| Deep-link pharma → bezárás | `EntryDetail` close → vissza galériára pharma face-en, animation nélkül (first-render no-animate). |

---

## Verification

### Automatizált (CI-szerű, én futtatom)

| # | Check | Tool | Acceptance |
|---|---|---|---|
| A1 | Production build clean | `npm run build` | 0 warning, 0 error |
| A2 | Bundle size | build output | ≤650kB gzip (current 601kB + ~40kB framer-motion) |
| A3 | Lighthouse Home A11y mobile | `npx lighthouse https://molekulax.vercel.app/ --preset=mobile` | **100/100** (regression-tilalom) |
| A4 | Lighthouse Home Perf mobile | ugyanaz | ≥90 |
| A5 | Lighthouse Home Perf desktop | `--preset=desktop` | ≥95 |
| A6 | Lighthouse Metformin A11y mobile | `https://molekulax.vercel.app/#entry/pharmaceutical/metformin` | ≥95 |

### Humán-igényű smoke checklist (`MolekulaX_Phase7_Smoke_Checklist.md`)

| # | Check | Hogyan |
|---|---|---|
| H1 | 3D forgatás 4 face-en | Jobb-nyíl 4× peptid→nootro→perf→pharma→peptid (loop), bal-nyíl 4× visszafelé. Mindegyik ~600ms spring, no flicker. |
| H2 | Height animation | peptid→nootro váltás közben a wrapper magassága szépen csökken, Telegram/FAQ/Footer felcsúszik. |
| H3 | Side rails responsive | ≥1024px peek látszik, 640-1023px peek elrejtett, <640px nyilak rácsúsztak. |
| H4 | Swipe gesture mobil | iPhone Safari + Android Chrome: bal/jobb swipe → next/prev, threshold 60px / 300px/s. |
| H5 | Dots indicator | 4 dot, aktív pirula `#00ff99`, click bármelyikre direct-jump (rövidebb irányba forog). |
| H6 | Keyboard | Tab → wrapper → balnyíl → 4 dot → jobbnyíl. ←/→ rotál, Home/End jump. Enter/Space tile-on dolgozik. |
| H7 | sessionStorage F5 | Nootropikra váltás → F5 → még mindig nootro face, no induló-forgás. |
| H8 | Deep-link entry | `#entry/pharmaceutical/metformin` → bezárás → pharma face, NEM peptid. |
| H9 | Reduced-motion | OS reduce-motion ON → 3D kihagyva, 200ms cross-fade. Swipe nem aktív. |
| H10 | Screen-reader | VoiceOver/NVDA: library-váltáskor "Peptidek könyvtár" announce. `role="tablist"` a dots-on. |
| H11 | Light/dark theme | Theme-váltás közben kocka NE forogjon, csak színek. Peek-szöveg light `#64748b` / dark `#94a3b8`. |
| H12 | 3 nyelv HU/EN/PL | Peek-szöveg `library.name[lang]` shorthand. Dots aria-label minden nyelven. |

### Acceptance criteria a Phase 7 főtask zárásához

- [ ] A1-A6 mind átment
- [ ] H1-H12 mind ✅ a smoke-checklist-en
- [ ] `LibrarySwitcher.jsx` törölve
- [ ] `LibraryGallery.jsx` -1 import + -1 render-call
- [ ] `App.jsx` library-section triplettje `<LibraryCube />`-bal cserélve
- [ ] 0 console error / warning a production buildben
- [ ] Vercel auto-deploy zöld

---

## Out of scope (NEM ebben a Phase 7-ben)

- Új library hozzáadása (5. könyvtár → akkor a wrap-around math 5-re skálázódik, dots 5 db lesz, de a kocka geometria akkor "pentagonal prism" kell hogy legyen — külön spec ha valaha kell)
- Cube face háttér-textúra (radial gradient accent szín a face-en) — opcionális polish-pass, ha idő van
- "Library tartalom preview a peek mellett" (pl. szomszéd library top entry-ne miniatúra) — későbbi enhancement
- Auto-rotate / passive demo mode → NEM kell (user-driven only)

---

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Framer Motion bundle bloat (~40kB) → perf regression | Code-splitting: a `LibraryCube` lazy-loaded route? **NEM** — túl korán a fold-ban van, hero után rögtön. A 40kB elfogadható, monitor with Lighthouse. |
| 3D transform GPU-cost low-end mobile | "Csak aktív face renderelteti a tartalmat" optimization. Reduced-motion fallback van. Spring kiegyenesíthető tween-re ha kell. |
| Wrap-around math hiba (off-by-one) | `signedShortestDelta` helper egységnyi tesztelhetőség, smoke-checklist H1 fedi. |
| sessionStorage SSR-mismatch | Vite SPA, no SSR → `typeof window === 'undefined'` guard elég. |
| Height-animation jank ha a face content lazy-loaded | A 4 face egy-egy ResizeObserver-rel önmagát méri, callback `onHeightChange`-en. Container height target updateel. |

---

## Implementation order (preview a writing-plans skill-nek)

1. **Setup**: `npm install framer-motion`, `cube-nav/` mappa létrehozása
2. **`useCubeIndex` hook** + `signedShortestDelta` helper (izolálható, könnyen tesztelhető)
3. **`LibraryContext` kiegészítés** sessionStorage perzisztenciával
4. **`DotsIndicator.jsx`** (legkisebb komponens, standalone)
5. **`CubeNavControls.jsx`** (a peek-szöveggel + nyilakkal, responsive)
6. **`CubeFace.jsx`** (a transform + ResizeObserver + per-library content renderelése)
7. **`LibraryCube.jsx`** (a wrapper, drag, spring, reduced-motion ág)
8. **`App.jsx` integráció** — Library section triplett cseréje, `LibrarySwitcher` import törlése
9. **`LibraryGallery.jsx` cleanup** — `<LibrarySwitcher />` render-call eltávolítása
10. **`LibrarySwitcher.jsx` törlés**
11. **Smoke + Lighthouse audit, finomítások**

Becsült commit-szám: **5-7** (lépésenként 1-2 commit, az 1-3 kötegelhető, 4-7 egyenként, 8-10 egy commitban).
