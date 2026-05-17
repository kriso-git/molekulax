# MolekulaX — 3D Library Cube Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A jelenlegi 4-chip `LibrarySwitcher`-t lecseréljük 3D forgó kocka navigációra (4 oldal = 4 könyvtár), Framer Motion spring physics-szel, oldalsávos nyilakkal és touch swipe-pal, sessionStorage F5-persistence-szel, reduced-motion fallback-kel.

**Architecture:** Új `src/components/library/cube-nav/` mappa (LibraryCube + CubeFace + CubeNavControls + DotsIndicator + useCubeIndex hook). A 4 face mindegyike saját nested `LibraryContext`-tel rendereli a saját LibraryGallery + EffectsSection + Calculator tree-jét; minden face `hasBeenActive` lazy-mount cache-szel — első mount-kor csak a default library rendel, a többi skeleton, és csak első aktiválás után kerülnek véglegesen DOM-ba. A wrapper height transition + Y-tengely spring rotation; `signedShortestDelta` matek wrap-around-hoz, hogy a kocka mindig a rövidebb irányba forogjon.

**Tech Stack:** React 18, Vite 5, Tailwind 3, **új: framer-motion ^11.x**, lucide-react (meglévő), Hungarian i18n (HU/EN/PL).

**Spec:** [docs/superpowers/specs/2026-05-17-3d-library-cube-design.md](../specs/2026-05-17-3d-library-cube-design.md)

---

## File structure

**Új fájlok (mind `src/components/library/cube-nav/` alatt):**
| Fájl | Felelősség |
|---|---|
| `useCubeIndex.js` | Wrap-around index state, signed-shortest-delta rotation math, next/prev/jumpTo, isFirstRender flag |
| `DotsIndicator.jsx` | 4 dot `role="tablist"` semantikával, direct-jump callback |
| `CubeNavControls.jsx` | Oldalsávos nyilak (desktop) + face-szélre csúsztatott nyilak (mobile) + DotsIndicator alul |
| `CubeFace.jsx` | Egyetlen kockalap: nested `LibraryContext.Provider` a face library-jével, lazy-mount cache, ResizeObserver height-reporting, 3D transform |
| `LibraryCube.jsx` | A 3D wrapper: perspective + animate height + animate rotateY + drag gesture + keyboard + reduced-motion fallback ág |

**Módosított fájlok:**
| Fájl | Mit |
|---|---|
| `package.json` | + framer-motion dep |
| `src/context/LibraryContext.jsx` | export `LibraryContext` is + sessionStorage perzisztencia + hash/storage/default prioritás |
| `src/components/LibraryGallery.jsx` | `<LibrarySwitcher />` import + render eltávolítása; `<section id="library">` wrapper + `sectionRef` + 2 hash-scroll-restore useEffect + library-change reset-useEffect eltávolítása (mindezeket a LibraryCube veszi át) |
| `src/App.jsx` | `LibraryGallery` + `EffectsSection` + `CalculatorGate` triplett → `<LibraryCube />`; `CalculatorGate` lokális komponens törlése |

**Törlés:**
| Fájl | Indok |
|---|---|
| `src/components/LibrarySwitcher.jsx` | A kocka maga A switcher; ez a komponens már nem kell |

---

## Verification model

A MolekulaX-nek **nincs automated test infrastructure**. A verifikáció task-onként:

1. **`npm run build`** → 0 error, 0 warning. Ez fogja kapni a TDD szerepét.
2. **Code review** — a step-ekben megírt kódot a step után átfutva ellenőrzöd.
3. **Integration smoke** — csak a Task 8 (App.jsx integráció) UTÁN működik vizuálisan a dev server. Az 1-7 tasknak nincs futtatható UI-smoke (alkatrészek standalone).
4. **Lighthouse + bundle audit** — Task 9-ben, a befejezés gate-jeként.

---

### Task 1: Setup (framer-motion + mappa)

**Files:**
- Modify: `e:/Website Biz/molekulax/package.json`
- Create: `e:/Website Biz/molekulax/src/components/library/cube-nav/` (üres mappa)

- [ ] **Step 1: Telepítsd a framer-motion dependency-t**

Futtasd (a `e:/Website Biz/molekulax/` mappából):

```bash
npm install framer-motion@^11
```

Várható: `package.json` `dependencies`-be bekerül `"framer-motion": "^11.x.x"`, `package-lock.json` frissül, `node_modules/framer-motion/` létrejön. Hiba nélkül lefut.

- [ ] **Step 2: Verify build clean a függőség hozzáadása után**

```bash
npm run build
```

Várható: `✓ built in X.XXs`, 0 error, 0 warning. A bundle méret lehet ~640kB gzip (current 601 + ~40 framer-motion). Ha ennél nagyobb, állj meg és jelezd.

- [ ] **Step 3: Hozz létre üres mappát az új komponenseknek**

```bash
mkdir -p src/components/library/cube-nav
```

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "$(cat <<'EOF'
chore(deps): add framer-motion for Phase 7 3D cube nav

EOF
)"
```

Várható: 2 file changed, `package.json` + `package-lock.json`. Új mappa még üres → nem kerül commitba.

---

### Task 2: useCubeIndex hook (wrap-around state)

**Files:**
- Create: `e:/Website Biz/molekulax/src/components/library/cube-nav/useCubeIndex.js`

- [ ] **Step 1: Hozd létre a hook-ot**

Tartalom:

```js
import { useEffect, useRef, useState } from 'react'
import { listLibraries } from '../../../data/libraries'

const LIBRARY_COUNT = 4

// Wrap-around rövidebb irányt választó delta.
// pl. 3→0 (jobb-nyíl pharma→peptid): delta = +1 (NEM -3)
// pl. 0→3 (bal-nyíl peptid→pharma):  delta = -1 (NEM +3)
function signedShortestDelta(from, to) {
  let d = to - from
  if (d > 2) d -= LIBRARY_COUNT
  if (d < -2) d += LIBRARY_COUNT
  return d
}

export function useCubeIndex(libraryId, setLibraryId) {
  const libraries = listLibraries()
  const currentIndex = Math.max(0, libraries.findIndex((l) => l.id === libraryId))
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
    setRotationDeg((r) => r - delta * 90)
    prevIndexRef.current = currentIndex
  }, [currentIndex])

  return {
    currentIndex,
    rotationDeg,
    isFirstRender: isFirstRenderRef.current,
    libraries,
    next:   () => setLibraryId(libraries[(currentIndex + 1) % LIBRARY_COUNT].id),
    prev:   () => setLibraryId(libraries[(currentIndex + LIBRARY_COUNT - 1) % LIBRARY_COUNT].id),
    jumpTo: (idx) => setLibraryId(libraries[idx].id),
  }
}
```

- [ ] **Step 2: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning. A hook még nincs használva sehol, de a Vite tree-shakingnek tisztának kell lennie.

- [ ] **Step 3: Sanity check a delta matekra (mental)**

Olvasd át a `signedShortestDelta` 4 esetét: `(0,1)=+1`, `(3,0)=+1` (mert `0-3=-3 < -2` → `-3+4=+1`), `(0,3)=-1` (mert `3-0=3 > 2` → `3-4=-1`), `(0,2)=+2` (direct-jump 180° forward). Mindenhol a rövidebb irány nyer.

- [ ] **Step 4: Commit**

```bash
git add src/components/library/cube-nav/useCubeIndex.js
git commit -m "$(cat <<'EOF'
feat(cube-nav): useCubeIndex hook with wrap-around rotation math

Manages currentIndex + monotonically changing rotationDeg state.
signedShortestDelta picks the shorter rotation direction at wrap-around
boundaries (3->0 forward, 0->3 backward) so the cube never spins the
long way. isFirstRender flag prepared for no-animate initial mount.

EOF
)"
```

---

### Task 3: LibraryContext — export Context + sessionStorage + hash priority

**Files:**
- Modify: `e:/Website Biz/molekulax/src/context/LibraryContext.jsx`

- [ ] **Step 1: Cseréld le a fájl teljes tartalmát**

Tartalom:

```jsx
// LibraryContext — Phase 3 abstraction that exposes the active library to
// gallery + detail components. Phase 7 added sessionStorage persistence
// (F5 keeps you on the same library) and hash-deep-link priority. The
// LibraryContext itself is also exported so CubeFace can render per-face
// nested providers.

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getLibrary, listLibraries, DEFAULT_LIBRARY_ID } from '../data/libraries'

const STORAGE_KEY = 'molekulax:libraryId'

export const LibraryContext = createContext({
  library: null,
  libraryId: DEFAULT_LIBRARY_ID,
  setLibraryId: () => {},
  availableLibraries: [],
})

// Priority on mount: hash deep-link > sessionStorage > defaultId.
function readInitialLibraryId(defaultId) {
  if (typeof window === 'undefined') return defaultId
  const hash = window.location.hash.replace(/^#/, '')
  const m = hash.match(/^entry\/([a-z-]+)\//)
  if (m && getLibrary(m[1])) return m[1]
  const stored = sessionStorage.getItem(STORAGE_KEY)
  if (stored && getLibrary(stored)) return stored
  return defaultId
}

export function LibraryProvider({ children, defaultId = DEFAULT_LIBRARY_ID }) {
  const [libraryId, setLibraryId] = useState(() => readInitialLibraryId(defaultId))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, libraryId)
    }
  }, [libraryId])

  const value = useMemo(() => ({
    library: getLibrary(libraryId),
    libraryId,
    setLibraryId,
    availableLibraries: listLibraries(),
  }), [libraryId])

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  )
}

export function useLibrary() {
  return useContext(LibraryContext)
}
```

- [ ] **Step 2: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning. Csak 1 új export (`LibraryContext`) jött hozzá, a meglévő `LibraryProvider` + `useLibrary` API változatlan.

- [ ] **Step 3: Manual sanity test sessionStorage logikára**

Indítsd a dev servert és nyisd meg DevTools console-ban:

```bash
npm run dev
```

A böngészőben (`http://localhost:5173/`) DevTools → Application → Session Storage → `http://localhost:5173`-on látnod kell `molekulax:libraryId = "peptides"` kulcsot. Ezt **csak ellenőrzöd**, NEM mész tovább a UI-on (a switcher még a régi 4-chip, könyvtárt nem tudsz váltani). Állítsd le a dev servert (`Ctrl+C`).

- [ ] **Step 4: Commit**

```bash
git add src/context/LibraryContext.jsx
git commit -m "$(cat <<'EOF'
feat(library-context): sessionStorage persistence + hash deep-link priority

LibraryContext is now exported so CubeFace can wrap nested providers
per face (each face renders its own library content, not the global one).

Mount-time library resolution priority:
  1. URL hash #entry/<libid>/... (deep-link to detail)
  2. sessionStorage molekulax:libraryId (survives F5 in same tab)
  3. DEFAULT_LIBRARY_ID (peptides)

setLibraryId writes through to sessionStorage on every change.

EOF
)"
```

---

### Task 4: DotsIndicator komponens

**Files:**
- Create: `e:/Website Biz/molekulax/src/components/library/cube-nav/DotsIndicator.jsx`

- [ ] **Step 1: Hozd létre a komponenst**

Tartalom:

```jsx
import { useLang } from '../../../i18n/LanguageContext'

// 4 dot, role="tablist" semantikával. Aktív dot hosszúkás pirula Chemical
// Green-nel; inaktív kis kör. Kattintásra direct-jump az adott library-re
// (a useCubeIndex.jumpTo a rövidebb irányba fogja forgatni a kockát).
export default function DotsIndicator({ libraries, currentIndex, onJumpTo }) {
  const { lang } = useLang()
  return (
    <div
      role="tablist"
      aria-label="Library selector"
      className="flex justify-center gap-2 mt-6"
    >
      {libraries.map((lib, idx) => {
        const isActive = idx === currentIndex
        return (
          <button
            key={lib.id}
            type="button"
            role="tab"
            id={`lib-tab-${lib.id}`}
            aria-selected={isActive}
            aria-controls="library-cube-panel"
            aria-label={lib.name[lang]}
            onClick={() => onJumpTo(idx)}
            className="inline-flex items-center justify-center min-h-[24px] min-w-[24px]"
          >
            <span
              style={{
                display: 'block',
                height: 7,
                width: isActive ? 20 : 7,
                borderRadius: isActive ? 6 : '50%',
                background: isActive ? '#00ff99' : 'rgba(255,255,255,0.18)',
                boxShadow: isActive ? '0 0 8px #00ff99' : 'none',
                transition: 'width 200ms ease, border-radius 200ms ease, background 200ms ease',
              }}
            />
          </button>
        )
      })}
    </div>
  )
}
```

- [ ] **Step 2: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning. Még nincs használva, de a Vite a komponens szintaxisát validálja.

- [ ] **Step 3: Commit**

```bash
git add src/components/library/cube-nav/DotsIndicator.jsx
git commit -m "$(cat <<'EOF'
feat(cube-nav): DotsIndicator component (4-dot tablist)

Active dot is an elongated chemical-green pill (20x7, glow shadow),
inactive dots are 7x7 white-alpha circles. role=tablist + aria-selected
+ aria-controls preserves Phase 7 a11y baseline; aria-label per-dot
gets the library name in the active language.

EOF
)"
```

---

### Task 5: CubeNavControls komponens (oldalsávos nyilak + dots)

**Files:**
- Create: `e:/Website Biz/molekulax/src/components/library/cube-nav/CubeNavControls.jsx`

- [ ] **Step 1: Hozd létre a komponenst**

Tartalom:

```jsx
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../../i18n/LanguageContext'
import DotsIndicator from './DotsIndicator'

// Kontroll-réteg: bal/jobb nyíl + szomszéd-name peek (csak ≥1024px) +
// alul DotsIndicator. Desktop/tablet (md+) nyilak az oldalsávon (44/40px),
// mobile (<md) nyilak rácsúsztatva a kockalap szélére (36px). A peek-szöveg
// csak lg+ jelenik meg (vertikálisan írva, [writing-mode]).
export default function CubeNavControls({
  libraries,
  currentIndex,
  onPrev,
  onNext,
  onJumpTo,
}) {
  const { lang } = useLang()
  const count = libraries.length
  const prevLib = libraries[(currentIndex + count - 1) % count]
  const nextLib = libraries[(currentIndex + 1) % count]

  const arrowBase = {
    background: 'rgba(0,255,153,0.18)',
    border: '1px solid rgba(0,255,153,0.5)',
    color: '#00ff99',
  }

  return (
    <>
      {/* Desktop/tablet left arrow + peek */}
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Előző könyvtár: ${prevLib.name[lang]}`}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 lg:left-4 z-20 items-center justify-center rounded-full"
        style={{ width: 44, height: 44, ...arrowBase }}
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>
      <span
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-16 z-20 text-[10px] uppercase tracking-[0.15em] text-[var(--text-tertiary,#94a3b8)]"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
        aria-hidden="true"
      >
        ‹ {prevLib.name[lang]}
      </span>

      {/* Desktop/tablet right arrow + peek */}
      <button
        type="button"
        onClick={onNext}
        aria-label={`Következő könyvtár: ${nextLib.name[lang]}`}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 lg:right-4 z-20 items-center justify-center rounded-full"
        style={{ width: 44, height: 44, ...arrowBase }}
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
      <span
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-16 z-20 text-[10px] uppercase tracking-[0.15em] text-[var(--text-tertiary,#94a3b8)]"
        style={{ writingMode: 'vertical-rl' }}
        aria-hidden="true"
      >
        {nextLib.name[lang]} ›
      </span>

      {/* Mobile (<md) left arrow — rácsúszva a face szélére */}
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Előző könyvtár: ${prevLib.name[lang]}`}
        className="md:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20 flex items-center justify-center rounded-full"
        style={{ width: 36, height: 36, ...arrowBase }}
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>

      {/* Mobile (<md) right arrow */}
      <button
        type="button"
        onClick={onNext}
        aria-label={`Következő könyvtár: ${nextLib.name[lang]}`}
        className="md:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20 flex items-center justify-center rounded-full"
        style={{ width: 36, height: 36, ...arrowBase }}
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>

      <DotsIndicator
        libraries={libraries}
        currentIndex={currentIndex}
        onJumpTo={onJumpTo}
      />
    </>
  )
}
```

- [ ] **Step 2: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning.

- [ ] **Step 3: Commit**

```bash
git add src/components/library/cube-nav/CubeNavControls.jsx
git commit -m "$(cat <<'EOF'
feat(cube-nav): CubeNavControls — side arrows + peek + dots

Desktop/tablet (md+): 44/40px arrow buttons on side rails, with
prev/next library name peek vertically rendered next to the arrows
(lg+ only). Mobile (<md): 36px arrows hugged to the cube face edges.
Peek text is aria-hidden because the arrow's aria-label already names
the target library (avoids label-content-name-mismatch a11y audit).
Bottom dots indicator nested via DotsIndicator.

EOF
)"
```

---

### Task 6: CubeFace komponens (nested context + lazy-mount cache)

**Files:**
- Create: `e:/Website Biz/molekulax/src/components/library/cube-nav/CubeFace.jsx`

- [ ] **Step 1: Hozd létre a komponenst**

Tartalom:

```jsx
import { useEffect, useRef } from 'react'
import { LibraryContext } from '../../../context/LibraryContext'
import { listLibraries } from '../../../data/libraries'
import LibraryGallery from '../../LibraryGallery'
import Calculator from '../../Calculator'
import EffectsSection from '../EffectsSection'

// Per-face context override: each face renders its OWN library content
// (a teljes LibraryGallery + EffectsSection + Calculator tree), nem a
// globális aktív library-t. setLibraryId no-op a face-en belül (a face
// nem önmagát váltja); a deep-link / dots-jump a külső kockán keresztül
// megy. availableLibraries listLibraries() — fontos hogy nem üres tömb,
// különben downstream komponensek (pl. EntryDetail Related-link) hibára
// futna.
function FaceLibraryProvider({ library, children }) {
  const value = {
    library,
    libraryId: library.id,
    setLibraryId: () => {},
    availableLibraries: listLibraries(),
  }
  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  )
}

// Egy kockalap. Lazy-mount cache: amint isActive először true lesz,
// hasBeenActiveRef bekapcsol és onnantól FOLYAMATOSAN renderel teljes
// tartalmat (akkor is ha isActive később false). Ez biztosítja hogy
// forgás közben a régi face MARAD renderelve, különben üres oldalt
// látna pörögni a user a state-frissítés pillanatától.
//
// 3D transform: faceIndex * 90° Y-rotation + translateZ(halfWidth).
// backfaceVisibility: hidden — csak az előre néző face látszik a
// kocka belső struktúrája miatt.
export default function CubeFace({
  library,
  isActive,
  faceIndex,
  halfWidth,
  onHeightChange,
}) {
  const hasBeenActiveRef = useRef(false)
  const elRef = useRef(null)

  if (isActive) hasBeenActiveRef.current = true
  const renderFull = hasBeenActiveRef.current

  useEffect(() => {
    if (!renderFull || !elRef.current) return
    const el = elRef.current
    const ro = new ResizeObserver((entries) => {
      const h = entries[0]?.contentRect?.height
      if (h && onHeightChange) onHeightChange(faceIndex, h)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [renderFull, faceIndex, onHeightChange])

  const transform = `rotateY(${faceIndex * 90}deg) translateZ(${halfWidth}px)`

  return (
    <div
      ref={elRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        transform,
        backfaceVisibility: 'hidden',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      aria-hidden={!isActive}
    >
      {renderFull ? (
        <FaceLibraryProvider library={library}>
          <LibraryGallery />
          <EffectsSection />
          {library.id === 'peptides' && <Calculator />}
        </FaceLibraryProvider>
      ) : (
        <div
          style={{
            minHeight: 600,
            margin: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(180deg, ${library.accent}0a, transparent)`,
            border: `1px dashed ${library.accent}30`,
            borderRadius: 16,
            color: library.accent,
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: '0.1em',
          }}
        >
          {library.name.hu}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning. Megjegyzés: `LibraryGallery` még tartalmaz `<LibrarySwitcher />` import-ot — ez most még nem hiba, csak a Task 9-ben távolítjuk el. Egyelőre a CubeFace renderelt LibraryGallery még megjeleníti a régi 4-chip switcher-t — vizuálisan furcsa lesz, de a build OK.

- [ ] **Step 3: Commit**

```bash
git add src/components/library/cube-nav/CubeFace.jsx
git commit -m "$(cat <<'EOF'
feat(cube-nav): CubeFace with nested LibraryContext + lazy-mount cache

Each face wraps its content in a FaceLibraryProvider so downstream
components (LibraryGallery, EffectsSection, Calculator) read THIS face's
library via useLibrary(), not the global active one. setLibraryId is a
no-op inside a face (the cube controls library switching).

hasBeenActive cache: skeleton placeholder until first activation, then
full content stays mounted even when the face rotates away. Prevents
the "empty cube spinning" race condition where the new currentIndex
arrives before the rotation animation completes.

backface-visibility: hidden + pointer-events: none on inactive faces
prevent overlap interactions during rotation.

EOF
)"
```

---

### Task 7: LibraryCube komponens (3D wrapper + drag + keyboard + reduced-motion)

**Files:**
- Create: `e:/Website Biz/molekulax/src/components/library/cube-nav/LibraryCube.jsx`

- [ ] **Step 1: Hozd létre a komponenst**

Tartalom:

```jsx
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLibrary } from '../../../context/LibraryContext'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import LibraryGallery from '../../LibraryGallery'
import Calculator from '../../Calculator'
import EffectsSection from '../EffectsSection'
import { useCubeIndex } from './useCubeIndex'
import CubeFace from './CubeFace'
import CubeNavControls from './CubeNavControls'

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
  ease: [0.16, 1, 0.3, 1],
}

const SWIPE_DIST = 60
const SWIPE_VELOCITY = 300

export default function LibraryCube() {
  const { library, libraryId, setLibraryId } = useLibrary()
  const { currentIndex, rotationDeg, isFirstRender, libraries, next, prev, jumpTo } =
    useCubeIndex(libraryId, setLibraryId)

  const reduceMotion = useReducedMotion()
  const isTouch = useMediaQuery('(pointer: coarse)')
  const wrapperRef = useRef(null)
  const sectionRef = useRef(null)
  const [halfWidth, setHalfWidth] = useState(0)
  const [faceHeights, setFaceHeights] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })

  // Méri a wrapper szélességét a translateZ-hez (cube depth = width/2).
  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width
      if (w) setHalfWidth(w / 2)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Hash-scroll-restore: ha a hash #library-re vált (pl. EntryDetail bezárás),
  // ide scrollolunk. (Korábban a LibraryGallery-ben volt — átkerült ide a
  // section refactor miatt.)
  useEffect(() => {
    const scrollIfLibrary = () => {
      if (window.location.hash === '#library' && sectionRef.current) {
        requestAnimationFrame(() => {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    }
    scrollIfLibrary()
    window.addEventListener('hashchange', scrollIfLibrary)
    return () => window.removeEventListener('hashchange', scrollIfLibrary)
  }, [])

  const handleFaceHeight = (idx, h) => {
    setFaceHeights((prev) => (prev[idx] === h ? prev : { ...prev, [idx]: h }))
  }

  const activeHeight = faceHeights[currentIndex] || 600

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_DIST || info.velocity.x < -SWIPE_VELOCITY) next()
    else if (info.offset.x > SWIPE_DIST || info.velocity.x > SWIPE_VELOCITY) prev()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    else if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    else if (e.key === 'Home') { e.preventDefault(); jumpTo(0) }
    else if (e.key === 'End') { e.preventDefault(); jumpTo(libraries.length - 1) }
  }

  // Reduced-motion ág: 3D wrapper kihagyva, csak cross-fade.
  if (reduceMotion) {
    return (
      <section
        id="library"
        ref={sectionRef}
        tabIndex={0}
        role="region"
        aria-roledescription="Library selector"
        aria-label={library.name.hu}
        onKeyDown={handleKeyDown}
        className="relative outline-none py-28 px-4 scroll-mt-24"
      >
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {`${library.name.hu} könyvtár`}
        </span>
        <div
          id="library-cube-panel"
          role="tabpanel"
          aria-labelledby={`lib-tab-${library.id}`}
          className="max-w-6xl mx-auto relative"
        >
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
        </div>
        <CubeNavControls
          libraries={libraries}
          currentIndex={currentIndex}
          onPrev={prev}
          onNext={next}
          onJumpTo={jumpTo}
        />
      </section>
    )
  }

  // Default ág: full 3D cube
  return (
    <section
      id="library"
      ref={sectionRef}
      tabIndex={0}
      role="region"
      aria-roledescription="Library selector"
      aria-label={library.name.hu}
      onKeyDown={handleKeyDown}
      className="relative outline-none py-28 px-4 scroll-mt-24"
    >
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`${library.name.hu} könyvtár`}
      </span>
      <div
        ref={wrapperRef}
        className="max-w-6xl mx-auto relative"
        style={{ perspective: '1800px' }}
      >
        <motion.div
          id="library-cube-panel"
          role="tabpanel"
          aria-labelledby={`lib-tab-${library.id}`}
          animate={{ height: activeHeight }}
          transition={isFirstRender ? { duration: 0 } : { height: HEIGHT_TWEEN }}
          style={{
            position: 'relative',
            transformStyle: 'preserve-3d',
            width: '100%',
            overflow: 'visible',
          }}
        >
          <motion.div
            animate={{ rotateY: rotationDeg }}
            transition={isFirstRender ? { duration: 0 } : ROTATION_SPRING}
            drag={isTouch ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
            }}
          >
            {libraries.map((lib, idx) => (
              <CubeFace
                key={lib.id}
                library={lib}
                isActive={idx === currentIndex}
                faceIndex={idx}
                halfWidth={halfWidth}
                onHeightChange={handleFaceHeight}
              />
            ))}
          </motion.div>
        </motion.div>
        <CubeNavControls
          libraries={libraries}
          currentIndex={currentIndex}
          onPrev={prev}
          onNext={next}
          onJumpTo={jumpTo}
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning. A bundle nőhet ~640kB gzip körül (framer-motion belekerült a use-graph-ba).

- [ ] **Step 3: Commit**

```bash
git add src/components/library/cube-nav/LibraryCube.jsx
git commit -m "$(cat <<'EOF'
feat(cube-nav): LibraryCube 3D wrapper with spring rotation + drag

Outer <section id="library"> with tabIndex + role=region + arrow/Home/End
keyboard handler + sr-only aria-live announce on library change.

Inner motion.div has perspective 1800px + animated height (HEIGHT_TWEEN,
power3-out 500ms) tracking the active face's measured height via
ResizeObserver. Innermost motion.div animates rotateY via ROTATION_SPRING
(stiffness 180 / damping 22 / mass 1.1, ~600ms settle). drag="x" only
on coarse pointers (touch); desktop relies on arrow buttons + dots +
keyboard. onDragEnd threshold: 60px offset OR 300px/s velocity.

useReducedMotion branch: skips 3D entirely, falls back to 200ms
AnimatePresence cross-fade. Same CubeNavControls + announce.

isFirstRender flag: rotation + height transitions set to {duration: 0}
on initial mount so deep-links to non-default library land instantly
without an artifical N*90 deg spin-up.

EOF
)"
```

---

### Task 8: App.jsx integration + LibraryGallery cleanup + delete LibrarySwitcher

**Files:**
- Modify: `e:/Website Biz/molekulax/src/App.jsx`
- Modify: `e:/Website Biz/molekulax/src/components/LibraryGallery.jsx`
- Delete: `e:/Website Biz/molekulax/src/components/LibrarySwitcher.jsx`

- [ ] **Step 1: Cseréld le App.jsx tartalmát**

Tartalom:

```jsx
import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import LibraryCube from './components/library/cube-nav/LibraryCube'
import TelegramSection from './components/TelegramSection'
import Faq from './components/Faq'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import MoleculeBackground from './components/MoleculeBackground'
import FloatingScientific from './components/FloatingScientific'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeSwitcher from './components/ThemeSwitcher'
import EntryDetailRoute, { isEntryDetailHash } from './components/library/EntryDetailRoute'
import { useMediaQuery } from './hooks/useMediaQuery'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import { LibraryProvider } from './context/LibraryContext'

function useHashRoute() {
  const read = () => (typeof window === 'undefined' ? '' : window.location.hash.replace(/^#/, ''))
  const [hash, setHash] = useState(read)
  useEffect(() => {
    const onChange = () => setHash(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const isEntryDetail = isEntryDetailHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const hideLanding = isEntryDetail && isDesktop

  return (
    <ThemeProvider>
      <LanguageProvider>
        <LibraryProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          <MoleculeBackground />
          <FloatingScientific />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="relative z-10">
            {!hideLanding && (
              <>
                <Hero />
                <Education />
                <LibraryCube />
                <TelegramSection />
                <Faq />
                <Disclaimer />
                <Footer />
              </>
            )}
            {isEntryDetail && <EntryDetailRoute hash={hash} />}
          </div>
        </div>
        </LibraryProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
```

A változás: 3 import (`LibraryGallery`, `EffectsSection`, `Calculator`) törölve, helyettük 1 import (`LibraryCube`). A `CalculatorGate` lokális komponens + `useLibrary` import törölve. A `<LibraryGallery /><EffectsSection /><CalculatorGate />` triplett helyett `<LibraryCube />`.

- [ ] **Step 2: Töröld a LibrarySwitcher fájlt**

```bash
git rm src/components/LibrarySwitcher.jsx
```

Várható: `rm 'src/components/LibrarySwitcher.jsx'`.

- [ ] **Step 3: Töröld a LibrarySwitcher import-ot és render-call-t a LibraryGallery-ből**

A `src/components/LibraryGallery.jsx`:

Sor 10:
```jsx
import LibrarySwitcher from './LibrarySwitcher'
```
→ TÖRÖLD ezt a sort teljesen.

Sor ~348 ("<LibrarySwitcher />"):
```jsx
 <LibrarySwitcher />
```
→ TÖRÖLD ezt a sort teljesen.

- [ ] **Step 4: Csere a LibraryGallery `<section>` wrapper-en**

A LibraryGallery már NEM saját section, hanem a CubeFace renderelt tartalom. A `<section id="library" ...>` wrapper-t cseréld le egyszerű fragment + div-re. Találd meg a sor 345 körül:

```jsx
 return (
 <>
 <section id="library" ref={sectionRef} className="py-28 px-4 scroll-mt-24">
 <div className="max-w-6xl mx-auto">

 <LibrarySwitcher />

 <div className="text-center mb-16">
```

Cseréld erre:

```jsx
 return (
 <>
 <div className="max-w-6xl mx-auto">

 <div className="text-center mb-16">
```

A `<LibrarySwitcher />` sor szintén kiszedve (Step 3-ban). Az `id="library"`, `ref={sectionRef}`, `py-28 px-4 scroll-mt-24` mind a `<LibraryCube>`-ban van már (Task 7 Step 1).

A megfelelő záró tag-eket is keresd meg a file alján. A `<section>` nyitó eltűnik → a megfelelő `</section>` záró is el kell tűnjön. Ez a függvény-return végén van, ~sor 600-700 között. Csak EGY `</section>` van a function-ban.

- [ ] **Step 5: Töröld a `sectionRef`-tárolós + scroll-restore useEffect-ek a LibraryGallery-ből**

A LibraryGallery-ből töröljük:

Sor 246: `const sectionRef = useRef(null)` → TÖRÖLD ezt a sort.

Sor 280-294 useEffect ("Scroll the gallery into view when the URL hash..."):
```jsx
 // Scroll the gallery into view when the URL hash becomes #library (e.g. the
 // user closes an entry-detail view). The browser's native anchor-scroll only
 // fires on initial load, so we handle it here for in-app navigation too.
 useEffect(() => {
 const scrollIfLibrary = () => {
 if (window.location.hash === '#library' && sectionRef.current) {
 requestAnimationFrame(() => {
 sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
 })
 }
 }
 scrollIfLibrary()
 window.addEventListener('hashchange', scrollIfLibrary)
 return () => window.removeEventListener('hashchange', scrollIfLibrary)
 }, [])
```
→ TÖRÖLD a teljes useEffect-et. Ez most a LibraryCube-ben van.

Sor 296-318 második useEffect ("Reset search/filter/sort state and scroll back..."):
```jsx
 // Reset search/filter/sort state and scroll back to the section when the
 // active library changes (e.g. user toggles the LibrarySwitcher).
 // useRef guard avoids running on the initial mount.
 const isFirstLibraryEffect = useRef(true)
 useEffect(() => {
 if (isFirstLibraryEffect.current) {
 isFirstLibraryEffect.current = false
 return
 }
 setQuery('')
 setActiveFilters([])
 setLevelFilters([])
 setSortMode('az')
 setExpanded(false)
 setShowFilters(false)
 if (sectionRef.current) {
 requestAnimationFrame(() => {
 sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
 })
 }
 }, [library.id])
```
→ TÖRÖLD a teljes blokkot (a `const isFirstLibraryEffect` + a useEffect-et együtt). Indok: a CubeFace-ben minden face SAJÁT LibraryGallery instance, saját state-tel. Library-váltás = kocka-rotation, NEM gallery-state-reset. A user akár visszaforoghat egy library-re és az ottani szűrői megmaradnak (UX-tudatos design).

Ellenőrizd hogy a `useRef` import még szükséges-e — ha más `useRef` használat nincs, az import-ot is törölheted (különben hagyd meg).

- [ ] **Step 6: Verify build clean**

```bash
npm run build
```

Várható: 0 error, 0 warning. Ha "sectionRef is not defined" hibát látsz → maradt egy referencia, keresd ki és töröld. Ha "LibrarySwitcher is not defined" → import maradt, töröld.

- [ ] **Step 7: Dev server smoke teszt — első integráció UI vizsgálata**

```bash
npm run dev
```

Nyisd meg `http://localhost:5173/`. Ellenőrizd vizuálisan:

- [ ] Az oldal betöltődik hiba nélkül (a browser DevTools Console-ban 0 piros error).
- [ ] A library section (Hero + Education után) látszik mint peptid library.
- [ ] **Bal/jobb nyilak** látszanak az oldalsávon (asztali nézet ≥1024px) + vertikális peek-szöveg ("‹ Pharmaceutical" / "Nootropikumok ›").
- [ ] **Dots** alul: 4 dot, az első (peptidek) hosszúkás pirula.
- [ ] **Jobb nyíl click** → kocka 90°-ot forog jobbra, megjelenik a Nootropikumok face (skeleton ELŐSZÖR — accent zöld háttér + "Nootropikumok" felirat), majd lazy-mount-olódik a teljes tartalom és a wrapper height animálódik.
- [ ] További 3 jobb-nyíl click végigviszi mind a 4 face-en, és visszatér peptidekre (wrap-around).
- [ ] Bal-nyíl click visszafelé.
- [ ] Dots egy random dot-click → rövidebb irányba forog.
- [ ] **F5 reload** egy nem-default library-n → ugyanazon a library-n marad (sessionStorage perzisztencia).

Ha bármi nem működik, dokumentáld a problémát, állj meg, és kérdezz vissza.

- [ ] **Step 8: Állítsd le a dev servert (Ctrl+C) és commit**

```bash
git add src/App.jsx src/components/LibraryGallery.jsx src/components/LibrarySwitcher.jsx
git commit -m "$(cat <<'EOF'
feat(library): wire LibraryCube into App, delete LibrarySwitcher

App.jsx: the LibraryGallery + EffectsSection + CalculatorGate triplet
is replaced by a single <LibraryCube/>. The cube internally renders all
three components per face (Calculator only on peptides face).

LibraryGallery.jsx is now a pure content component — no <section>
wrapper, no LibrarySwitcher import, no sectionRef, no scroll-restore
or filter-reset useEffects. Those concerns moved to LibraryCube (which
hosts the section + ref) or are intentionally dropped (each face has
its own gallery instance with its own search/filter/sort state, so
library-change is a cube rotation, not a state reset).

LibrarySwitcher.jsx deleted — the cube IS the switcher now.

EOF
)"
```

---

### Task 9: Smoke verification + Lighthouse audit + finomítások

**Files:**
- Create (Obsidian, NEM commit): `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_Phase7_Smoke_Checklist.md`
- Potential: bármi a fenti komponensekből amit finomítani kell

- [ ] **Step 1: Hozd létre a Phase 7 Smoke Checklist fájlt az Obsidian Projekt_Tudasbazis-ban**

Path: `E:/Obsidian/personal_biz_brain/P&B Brain/AI_Arch/Projekt_Tudasbazis/MolekulaX_Phase7_Smoke_Checklist.md`

Tartalom (a spec Section "Verification" alapján, 12 humán-item):

```markdown
# MolekulaX — Phase 7 (3D Library Cube) Smoke Checklist

> **Spec:** [docs/superpowers/specs/2026-05-17-3d-library-cube-design.md](e:/Website Biz/molekulax/docs/superpowers/specs/2026-05-17-3d-library-cube-design.md)
> **Staging:** https://molekulax.vercel.app/
> **Local dev:** http://localhost:5173/

## Humán smoke items

- [ ] **H1: 3D forgatás 4 face-en.** Jobb-nyíl 4× peptid→nootro→perf→pharma→peptid (loop), bal-nyíl 4× visszafelé. Mindegyik ~600ms spring, no flicker.
- [ ] **H2: Height animation.** peptid→nootro váltás közben a wrapper magassága szépen csökken, Telegram/FAQ/Footer felcsúszik.
- [ ] **H3: Side rails responsive.** ≥1024px peek látszik, 640-1023px peek elrejtett, <640px nyilak rácsúsztak a face-szélére.
- [ ] **H4: Swipe gesture mobil.** iPhone Safari + Android Chrome: bal/jobb swipe → next/prev, threshold 60px / 300px/s.
- [ ] **H5: Dots indicator.** 4 dot, aktív pirula #00ff99, click bármelyikre direct-jump (rövidebb irányba forog).
- [ ] **H6: Keyboard.** Tab → wrapper → balnyíl → 4 dot → jobbnyíl. ←/→ rotál, Home/End jump. Enter/Space tile-on dolgozik.
- [ ] **H7: sessionStorage F5.** Nootropikra váltás → F5 → még mindig nootro face, no induló-forgás.
- [ ] **H8: Deep-link entry.** `#entry/pharmaceutical/metformin` → bezárás → pharma face, NEM peptid.
- [ ] **H9: Reduced-motion.** OS reduce-motion ON → 3D kihagyva, 200ms cross-fade. Swipe nem aktív.
- [ ] **H10: Screen-reader.** VoiceOver/NVDA: library-váltáskor "Peptidek könyvtár" announce. role=tablist a dots-on.
- [ ] **H11: Light/dark theme.** Theme-váltás közben kocka NE forogjon, csak színek. Peek-szöveg light #64748b / dark #94a3b8.
- [ ] **H12: 3 nyelv HU/EN/PL.** Peek-szöveg library.name[lang] shorthand. Dots aria-label minden nyelven.

## Automatizált audit

- [ ] **A1: `npm run build` clean.** 0 error, 0 warning.
- [ ] **A2: Bundle size ≤650kB gzip.** `npm run build` output utolsó sora a `dist/assets/index-XXX.js │ ... │ ZZZ kB │ gzip: YYY kB` — Y ≤ 650.
- [ ] **A3: Lighthouse Home A11y mobile = 100/100.** `npx lighthouse https://molekulax.vercel.app/ --preset=mobile --quiet --chrome-flags="--headless" --output=json --output-path=lh-home-a11y-phase7.json` — `.categories.accessibility.score * 100 === 100`.
- [ ] **A4: Lighthouse Home Perf mobile ≥90.** Ugyanaz a JSON, `.categories.performance.score * 100 >= 90`.
- [ ] **A5: Lighthouse Home Perf desktop ≥95.** `--preset=desktop`.
- [ ] **A6: Lighthouse Metformin A11y mobile ≥95.** `https://molekulax.vercel.app/#entry/pharmaceutical/metformin`.
```

- [ ] **Step 2: Futtasd a `npm run build`-et és olvasd ki a bundle-méretet (A1 + A2)**

```bash
npm run build
```

Várható kimenet:
```
dist/index.html                   X.XX kB │ gzip:  X.XX kB
dist/assets/index-XXXXXX.css     XX.XX kB │ gzip: XX.XX kB
dist/assets/index-XXXXXX.js     XXX.XX kB │ gzip: XXX.XX kB
✓ built in X.XXs
```

Pipáld H1 + A1 + A2 a smoke checklist-ben (ha a gzip ≤650kB).

- [ ] **Step 3: Vercel deploy → várj amíg ZÖLD lesz a production deploy**

```bash
git push origin master
```

Várj 60-90 másodpercet a Vercel build-re. Ellenőrizd a deploy státuszt a Vercel dashboard-on, vagy:

```bash
curl -sI https://molekulax.vercel.app/ | grep -i x-vercel-cache
```

Ha 200-as visszajön, mehet a Lighthouse.

- [ ] **Step 4: Lighthouse audit Home mobile (A3 + A4)**

```bash
npx lighthouse https://molekulax.vercel.app/ \
  --preset=mobile --quiet \
  --chrome-flags="--headless" \
  --output=json --output-path=lh-home-a11y-phase7.json
```

Várható: futás ~30-60s. A `lh-home-a11y-phase7.json` létrejön (`.gitignore` már ignore-olja az `lh-*.json` pattern-t).

Olvasd ki a score-okat:

```bash
node -e "const d=require('./lh-home-a11y-phase7.json'); console.log('A11y:',Math.round(d.categories.accessibility.score*100),'Perf:',Math.round(d.categories.performance.score*100))"
```

Várható: `A11y: 100 Perf: 90` (vagy magasabb mindkettőn). Ha bármi alacsonyabb, dokumentáld melyik audit failed és állj meg.

- [ ] **Step 5: Lighthouse audit Home desktop (A5) + Metformin mobile (A6)**

```bash
npx lighthouse https://molekulax.vercel.app/ \
  --preset=desktop --quiet \
  --chrome-flags="--headless" \
  --output=json --output-path=lh-home-desktop-phase7.json

npx lighthouse https://molekulax.vercel.app/#entry/pharmaceutical/metformin \
  --preset=mobile --quiet \
  --chrome-flags="--headless" \
  --output=json --output-path=lh-metformin-a11y-phase7.json
```

```bash
node -e "
const home=require('./lh-home-desktop-phase7.json');
const met=require('./lh-metformin-a11y-phase7.json');
console.log('Home desktop Perf:', Math.round(home.categories.performance.score*100));
console.log('Metformin mobile A11y:', Math.round(met.categories.accessibility.score*100));
"
```

Várható: `Home desktop Perf: 95` (vagy magasabb), `Metformin mobile A11y: 95` (vagy magasabb).

- [ ] **Step 6: Humán smoke (H1-H12) futtatása staging URL-en**

Nyisd meg a staging URL-t (`https://molekulax.vercel.app/`) és menj végig a 12 H-item-en a smoke checklist-ben. Pipáld ki minden item-et az Obsidian fájlban.

Speciális instrukciók:
- **H4 mobile swipe**: nyiss DevTools → device emulation → iPhone vagy Android → simulate touch gestures (`Shift+drag` macOS-en).
- **H9 reduced-motion**: macOS → System Settings → Accessibility → Display → "Reduce motion" ON. Windows → Settings → Accessibility → Visual effects → "Animation effects" OFF. Frissítsd a staging-et.
- **H10 screen-reader**: macOS VoiceOver `Cmd+F5`, Windows NVDA install kell.

- [ ] **Step 7: Ha bármi item ❌, fixáld + commit + push + re-audit**

Példa hibák és fix-ek:
- "Wrapper height ugrik forgás közben" → ellenőrizd `HEIGHT_TWEEN.duration` érték, lehet hogy a spring-rotation hossza (~600ms) hosszabb mint a height-tween (500ms), állítsd ugyanazra.
- "Light-mode-ban a peek-szöveg láthatatlan" → CSS overrides hiányoznak `[data-theme="light"]`-re; adj hozzá [data-theme="light"] `.text-[var(--text-tertiary)] { color: #64748b }` override-ot (vagy direkt `[data-theme="light"]` selector-os style-t a span-ekre).
- "Mobile-on a nyíl rátakar a tile-okra" → emeld a tile padding-et vagy csökkentsd a nyíl méretét 32px-re.

Commit + push + re-audit cycle-ig amíg minden item zöld.

- [ ] **Step 8: Frissítsd a memory project_molekulax.md fájlt + MolekulaX_Statusz.md handoff-szal**

Két frissítés:

(a) `C:/Users/trolo/.claude/projects/e--Website-Biz/memory/project_molekulax.md` — adj egy új Phase 7 ✅ sort az alábbi formátumban (a már létező Phase 4-5 mintáját követve):

```markdown
- ✅ **Phase 7 — 3D Library Cube nav** (2026-05-17, commits `XXX..YYY`, N commit): a 4-chip `LibrarySwitcher` lecserélve egy 3D forgó kockára (4 oldal = 4 library, csak az aktív lap látszik). [...rövid összefoglaló kb. 4-6 mondatban: új komponensek, framer-motion, hash+sessionStorage, kocka geometria + lazy-mount cache, reduced-motion + a11y állapot...]
```

(b) `MolekulaX_Statusz.md` aktuális handoff session-blokk (Obsidian Projekt_Tudasbazis) — használhatod erre a `/handoff` slash command-ot.

NOTE: a Phase 7 ✅ csak akkor kerüljön be, ha MIND a 12 H-item + 6 A-item zöld.

- [ ] **Step 9: Final commit a smoke checklist-tel + memory update-tel**

```bash
git add docs/superpowers/  # ha bármi update kellett a spec/plan-en
git status
# ha van változás:
git commit -m "$(cat <<'EOF'
chore(phase-7): smoke checklist passed, all 12 humán + 6 automated items green

Smoke checklist saved to Obsidian (MolekulaX_Phase7_Smoke_Checklist.md).
Lighthouse: Home mobile A11y 100, Perf 90+; Desktop Perf 95+; Metformin
mobile A11y 95+. Bundle: <650kB gzip.

EOF
)"
# ha nincs új commit-need, csak push:
git push origin master
```

---

## Acceptance criteria (Phase 7 főtask zárás)

- [ ] Task 1-9 mind ✅
- [ ] 12 humán smoke item + 6 automated item mind ✅
- [ ] `LibrarySwitcher.jsx` törölve a repo-ból
- [ ] `LibraryGallery.jsx` -1 import + -1 render-call + -1 sectionRef + -2 useEffect
- [ ] `App.jsx` library-section triplettje `<LibraryCube />`-bal cserélve
- [ ] 0 console error / warning a production build-ben (smoke H1 visual)
- [ ] Vercel auto-deploy zöld
- [ ] Memory project_molekulax.md Phase 7 ✅ sora bekerült
- [ ] MolekulaX_Statusz.md új session-blokkja a tetején

---

## Estimated effort

- Task 1-3: ~30 perc együtt (setup + 2 izolált kód-fájl)
- Task 4-5: ~30 perc együtt (két kis UI komponens)
- Task 6: ~30-45 perc (nested context + lazy-mount megfogalmazás)
- Task 7: ~60-90 perc (a fő integratőr komponens, framer-motion + drag + keyboard + reduced-motion ág)
- Task 8: ~60-90 perc (integráció + LibraryGallery refactor + első UI smoke)
- Task 9: ~60-120 perc (smoke checklist + Lighthouse + esetleges fix-iteráció)

**Total: 4-7 óra**, ami egybevág a spec "6-10 óra" becslésével (a felső sávban ha fix-iteráció kell).

**Commit count:** 8-9 (mind a 9 task egy-egy commit, plus Task 9-ben esetleg 1-2 további fix commit).
