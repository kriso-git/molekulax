# Library Cube 3D Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. This is a visual WebGL feature: the verification gates are `npm run build`, `npm run smoke`, headless screenshots, and the localhost preview — not classic unit-TDD. A few pure helpers do get real unit tests.

**Goal:** Replace the laggy CSS-3D library cube with a perf-trivial Three.js WebGL selector cube + a single cross-faded gallery, so switching is smooth no matter how many libraries were visited.

**Architecture:** A small transparent WebGL canvas renders a 4-face box (faces = per-library CanvasTexture covers) that eases its `rotation.y` to the active index; render-on-demand (loop only while easing). Below it, exactly one `LibraryGallery` (active library) cross-fades via `AnimatePresence`. Existing index/controls (`useCubeIndex`, `CubeNavControls`, `DotsIndicator`) are reused; `CubeFace.jsx` is removed.

**Tech Stack:** React 19, three@0.184 (lazy dynamic import), framer-motion 12, Vite 6, Puppeteer smoke runner.

---

## File structure

- Create `src/components/library/cube-nav/webglSupport.js` — `hasWebGL2()` feature-detect (smoke-safety: call before any `new WebGLRenderer`).
- Create `src/components/library/cube-nav/faceCover.js` — `drawFaceCover(ctx, library, lang, size)` draws one library cover on a 2D canvas; pure, testable.
- Create `src/components/library/cube-nav/LibraryCube3D.jsx` — the WebGL canvas + scene (lazy three, ease-to-target rotation, render-on-demand, pointer-drag swipe, dispose).
- Create `src/components/library/cube-nav/LibraryCubeFallback.jsx` — 2D cover/button selector when `!hasWebGL2()` or `prefers-reduced-motion`.
- Modify `src/components/library/cube-nav/LibraryCube.jsx` — drop the CSS-3D cube; render cube (or fallback) + controls + a single active gallery in a cross-fade.
- Delete `src/components/library/cube-nav/CubeFace.jsx` (dead after rewire).
- Test `src/components/library/cube-nav/__tests__/cube-nav.test.js` — unit tests for `hasWebGL2` + `drawFaceCover`.

Reused unchanged: `useCubeIndex.js`, `CubeNavControls.jsx`, `DotsIndicator.jsx`, `LibraryGallery.jsx`, `data/libraries/index.js` (`loadLibrary`, `listLibraries`).

---

## Task 1: WebGL2 feature-detect helper

**Files:**
- Create: `src/components/library/cube-nav/webglSupport.js`
- Test: `src/components/library/cube-nav/__tests__/cube-nav.test.js`

- [ ] **Step 1: Implement the helper**

```js
// src/components/library/cube-nav/webglSupport.js
// Detect WebGL2 BEFORE constructing a THREE.WebGLRenderer. In headless smoke
// (--use-angle=swiftshader) this returns true; in jsdom/node it returns false,
// so callers fall back to the 2D selector instead of logging a GL console.error.
export function hasWebGL2() {
  if (typeof document === 'undefined') return false
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2'))
  } catch {
    return false
  }
}
```

- [ ] **Step 2: Unit test**

```js
// src/components/library/cube-nav/__tests__/cube-nav.test.js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hasWebGL2 } from '../webglSupport.js'

test('hasWebGL2 returns a boolean and is false without a DOM/GL', () => {
  assert.equal(typeof hasWebGL2(), 'boolean')
  assert.equal(hasWebGL2(), false) // node has no document
})
```

- [ ] **Step 3: Run**

Run: `node --test src/components/library/cube-nav/__tests__/cube-nav.test.js`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/library/cube-nav/webglSupport.js src/components/library/cube-nav/__tests__/cube-nav.test.js
git commit -m "feat(cube): WebGL2 feature-detect helper + test"
```

---

## Task 2: Face-cover texture builder

**Files:**
- Create: `src/components/library/cube-nav/faceCover.js`
- Test: `src/components/library/cube-nav/__tests__/cube-nav.test.js` (append)

`drawFaceCover` paints one library cover: dark base, accent radial glow, library
name (site font), accent border + HUD corner brackets. Pure 2D-canvas drawing so
it is unit-testable with a recording mock; the THREE `CanvasTexture` wrapper is
created in the component (Task 3) to keep three out of this module.

- [ ] **Step 1: Implement**

```js
// src/components/library/cube-nav/faceCover.js
// Draw a single library's cover onto a 2D canvas context (size x size).
// accent = library.accent (hex). name = library.name[lang].
export function drawFaceCover(ctx, library, lang, size = 512) {
  const accent = library.accent || '#00ff99'
  const name = (library.name && (library.name[lang] || library.name.hu)) || library.id

  // base
  ctx.fillStyle = '#06080e'
  ctx.fillRect(0, 0, size, size)

  // accent radial glow
  const g = ctx.createRadialGradient(size / 2, size * 0.42, size * 0.05, size / 2, size * 0.42, size * 0.6)
  g.addColorStop(0, hexA(accent, 0.34))
  g.addColorStop(0.5, hexA(accent, 0.08))
  g.addColorStop(1, 'rgba(6,8,14,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)

  // dotted HUD grid (subtle)
  ctx.fillStyle = hexA(accent, 0.06)
  for (let y = 0; y < size; y += 26) for (let x = 0; x < size; x += 26) ctx.fillRect(x, y, 2, 2)

  // accent border + corner brackets
  ctx.strokeStyle = hexA(accent, 0.5); ctx.lineWidth = 3
  const m = 26, L = 54
  ctx.strokeRect(m, m, size - 2 * m, size - 2 * m)
  ctx.strokeStyle = accent; ctx.lineWidth = 5
  corner(ctx, m, m, L, 1, 1); corner(ctx, size - m, m, L, -1, 1)
  corner(ctx, m, size - m, L, 1, -1); corner(ctx, size - m, size - m, L, -1, -1)

  // name
  ctx.fillStyle = '#ffffff'
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.font = `800 ${fitFont(ctx, name, size - 120)}px "Space Grotesk", system-ui, sans-serif`
  ctx.shadowColor = accent; ctx.shadowBlur = 24
  ctx.fillText(name.toUpperCase(), size / 2, size / 2 + 10)
  ctx.shadowBlur = 0
  return ctx
}

function corner(ctx, x, y, L, sx, sy) {
  ctx.beginPath()
  ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y)
  ctx.stroke()
}
function fitFont(ctx, text, maxW) {
  let s = 80
  do { ctx.font = `800 ${s}px "Space Grotesk", system-ui, sans-serif` } while (ctx.measureText(text.toUpperCase()).width > maxW && (s -= 4) > 22)
  return s
}
function hexA(hex, a) {
  const h = (hex || '').replace('#', '')
  if (h.length !== 6) return `rgba(0,255,153,${a})`
  return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`
}
```

- [ ] **Step 2: Append unit test (recording mock 2D ctx)**

```js
import { drawFaceCover } from '../faceCover.js'

test('drawFaceCover paints the library name and uses the accent', () => {
  const calls = []
  const ctx = new Proxy({}, {
    get: (_, k) => {
      if (k === 'measureText') return () => ({ width: 100 })
      if (k === 'createRadialGradient') return () => ({ addColorStop() {} })
      if (typeof k === 'string' && /^(fillRect|strokeRect|fillText|beginPath|moveTo|lineTo|stroke)$/.test(k))
        return (...a) => calls.push([k, ...a])
      return undefined
    },
    set: () => true,
  })
  drawFaceCover(ctx, { id: 'nootropics', accent: '#00ff99', name: { hu: 'Nootropikumok' } }, 'hu', 512)
  const text = calls.find(c => c[0] === 'fillText')
  assert.ok(text && /NOOTROPIKUMOK/.test(text[1]))
})
```

- [ ] **Step 3: Run**

Run: `node --test src/components/library/cube-nav/__tests__/cube-nav.test.js`
Expected: PASS (both tests).

- [ ] **Step 4: Commit**

```bash
git add src/components/library/cube-nav/faceCover.js src/components/library/cube-nav/__tests__/cube-nav.test.js
git commit -m "feat(cube): per-library face-cover canvas painter + test"
```

---

## Task 3: WebGL cube component

**Files:**
- Create: `src/components/library/cube-nav/LibraryCube3D.jsx`

Scene: transparent renderer (`alpha:true`, `setClearColor(0,0)`), `BoxGeometry`,
6 materials (4 side = cover textures in library order, top/bottom = plain dark
accent). Ambient + key + accent point lights. `rotation.y` eases toward
`-currentIndex * π/2` (shortest delta handled by parent via `currentIndex`).
Render-on-demand: a rAF runs only while `|rot - target| > eps`; stops at rest.
Pointer-drag → `onPrev`/`onNext` on release past a threshold. Lazy `import('three')`.
Cleanup on unmount: dispose geometry/materials/textures, `renderer.dispose()`,
`forceContextLoss()`. **Props:** `{ libraries, currentIndex, lang, onPrev, onNext, size }`.

- [ ] **Step 1: Implement** (full component — see code block)

```jsx
// src/components/library/cube-nav/LibraryCube3D.jsx
import { useEffect, useRef } from 'react'
import { drawFaceCover } from './faceCover'

const HALF_PI = Math.PI / 2
const DRAG_SWITCH = 48 // px before a drag counts as a swipe

export default function LibraryCube3D({ libraries, currentIndex, lang, onPrev, onNext, size = 440 }) {
  const mountRef = useRef(null)
  const stateRef = useRef({ target: -currentIndex * HALF_PI })

  // keep the rotation target in sync with the active index (parent drives index)
  useEffect(() => {
    const s = stateRef.current
    if (!s.api) { s.target = -currentIndex * HALF_PI; return }
    // shortest-path target relative to current visual rotation
    const cur = s.api.getRotation()
    let t = -currentIndex * HALF_PI
    while (t - cur > Math.PI) t -= 2 * Math.PI
    while (t - cur < -Math.PI) t += 2 * Math.PI
    s.target = t
    s.api.kick()
  }, [currentIndex])

  useEffect(() => {
    let disposed = false
    const mount = mountRef.current
    const s = stateRef.current
    ;(async () => {
      const THREE = await import('three')
      if (disposed || !mount) return

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(size, size)
      renderer.setClearColor(0x000000, 0)
      mount.appendChild(renderer.domElement)

      const scene = new THREE.Scene()
      const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
      cam.position.set(0, 0, 6.2)

      scene.add(new THREE.AmbientLight(0xffffff, 0.65))
      const key = new THREE.PointLight(0xffffff, 40, 50); key.position.set(4, 5, 7); scene.add(key)

      // side covers in library order: +Z, +X, -Z, -X  (face i faces -i*90deg cube rotation)
      const order = [4, 0, 5, 1] // BoxGeometry material index per visible side, see below
      const textures = []
      const mats = new Array(6)
      const dark = new THREE.MeshStandardMaterial({ color: 0x06080e, roughness: 0.6, metalness: 0.2 })
      mats[2] = dark; mats[3] = dark // top/bottom
      const sideIndex = [4, 5, 0, 1] // +Z, -Z, +X, -X material slots on BoxGeometry
      // map library i -> the face that becomes front at rotation -i*90:
      // i=0 front(+Z, slot4), i=1 right(+X, slot0), i=2 back(-Z, slot5), i=3 left(-X, slot1)
      const slotForLib = [4, 0, 5, 1]
      for (let i = 0; i < 4; i++) {
        const cv = document.createElement('canvas'); cv.width = cv.height = 512
        drawFaceCover(cv.getContext('2d'), libraries[i], lang, 512)
        const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4
        textures.push(tex)
        const accent = parseInt((libraries[i].accent || '#00ff99').replace('#',''), 16)
        mats[slotForLib[i]] = new THREE.MeshStandardMaterial({ map: tex, emissive: accent, emissiveIntensity: 0.18, roughness: 0.35, metalness: 0.25 })
      }
      const cube = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.6, 2.6), mats)
      cube.rotation.y = s.target
      scene.add(cube)

      let raf = 0
      const eps = 0.0009
      const tick = () => {
        cube.rotation.y += (s.target - cube.rotation.y) * 0.16
        cube.rotation.x = 0.12 + Math.sin(Date.now() / 2600) * 0.015 // faint life
        renderer.render(scene, cam)
        if (Math.abs(s.target - cube.rotation.y) > eps) raf = requestAnimationFrame(tick)
        else { renderer.render(scene, cam); raf = 0 }
      }
      s.api = { getRotation: () => cube.rotation.y, kick: () => { if (!raf) raf = requestAnimationFrame(tick) } }
      tick()

      // pointer drag -> swipe
      let down = null
      const el = renderer.domElement
      const onDown = (e) => { down = e.clientX; el.setPointerCapture?.(e.pointerId) }
      const onUp = (e) => {
        if (down == null) return
        const dx = e.clientX - down; down = null
        if (dx <= -DRAG_SWITCH) onNext?.()
        else if (dx >= DRAG_SWITCH) onPrev?.()
      }
      el.addEventListener('pointerdown', onDown)
      el.addEventListener('pointerup', onUp)
      el.addEventListener('pointercancel', () => { down = null })

      s.cleanup = () => {
        cancelAnimationFrame(raf)
        el.removeEventListener('pointerdown', onDown)
        el.removeEventListener('pointerup', onUp)
        cube.geometry.dispose()
        mats.forEach(m => m && m.dispose())
        textures.forEach(t => t.dispose())
        renderer.dispose()
        renderer.forceContextLoss?.()
        if (el.parentNode) el.parentNode.removeChild(el)
        s.api = null
      }
    })()

    return () => { disposed = true; s.cleanup?.(); s.cleanup = null }
  }, [size, lang]) // libraries/currentIndex handled via stateRef + the sync effect

  return <div ref={mountRef} style={{ width: size, height: size, margin: '0 auto' }} aria-hidden="true" />
}
```

- [ ] **Step 2: Build sanity**

Run: `npm run build`
Expected: build succeeds; `three` stays a lazy chunk (verify next).

- [ ] **Step 3: Verify three is NOT in the entry bundle**

Run: `grep -rl "BoxGeometry" dist/assets/index-*.js` (the main entry)
Expected: no match in the entry chunk (three lives in a separate lazy chunk).

- [ ] **Step 4: Commit**

```bash
git add src/components/library/cube-nav/LibraryCube3D.jsx
git commit -m "feat(cube): Three.js WebGL selector cube (lazy, render-on-demand, transparent)"
```

> Note: the `slotForLib` / BoxGeometry material-slot mapping (which face is front
> at each index) is tuned live on localhost in Task 6 — the covers must read
> upright and in the correct library order as the cube rotates.

---

## Task 4: 2D fallback selector

**Files:**
- Create: `src/components/library/cube-nav/LibraryCubeFallback.jsx`

Used when `!hasWebGL2()` or `prefers-reduced-motion`. A single accent cover for
the active library (reusing `drawFaceCover` into an `<img>` is overkill — render
a styled div) with the library name + accent glow; navigation is via the existing
arrows/dots passed through by the parent.

- [ ] **Step 1: Implement**

```jsx
// src/components/library/cube-nav/LibraryCubeFallback.jsx
export default function LibraryCubeFallback({ library, lang, size = 440 }) {
  const accent = library.accent || '#00ff99'
  const name = (library.name && (library.name[lang] || library.name.hu)) || library.id
  return (
    <div
      aria-hidden="true"
      style={{
        width: size, height: size, margin: '0 auto', borderRadius: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        background:
          `radial-gradient(circle at 50% 42%, ${accent}30 0%, transparent 60%), ` +
          `radial-gradient(${accent}10 1px, transparent 1.4px) 0 0 / 26px 26px, #06080e`,
        border: `1px solid ${accent}55`,
        boxShadow: `inset 0 0 60px ${accent}12`,
      }}
    >
      <span style={{
        fontFamily: '"Space Grotesk", system-ui, sans-serif', fontWeight: 800,
        fontSize: 'clamp(1.4rem, 8cqi, 2.4rem)', letterSpacing: '0.06em',
        color: '#fff', textTransform: 'uppercase', padding: 24,
        textShadow: `0 0 24px ${accent}, 0 0 8px ${accent}`,
      }}>{name}</span>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/library/cube-nav/LibraryCubeFallback.jsx
git commit -m "feat(cube): 2D fallback selector (no-WebGL2 / reduced-motion)"
```

---

## Task 5: Rewire `LibraryCube.jsx`

**Files:**
- Modify: `src/components/library/cube-nav/LibraryCube.jsx` (replace the 3D-cube body)

Render: cube (or fallback) + `CubeNavControls` + dots at top; below it, a SINGLE
active-library `LibraryGallery` in `AnimatePresence` (key = `library.id`) with a
cross-fade; per-library full-data via `loadLibrary` with a skeleton until ready;
`EffectsSection` / `Calculator` below, conditioned as before. Keep `useCubeIndex`,
`handleKeyDown`, `sectionRef`/hash-scroll, the `#library` id and a11y attributes.

- [ ] **Step 1: Implement the new render body** (replace lines 35–264 body; keep imports + add the new ones)

```jsx
// key parts of the rewritten LibraryCube.jsx (default 3D branch)
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLibrary } from '../../../context/LibraryContext'
import { useLang } from '../../../i18n/LanguageContext'
import { loadLibrary, listLibraries } from '../../../data/libraries'
import { LibraryContext } from '../../../context/LibraryContext'
import LibraryGallery from '../../LibraryGallery'
import Calculator from '../../Calculator'
import EffectsSection from '../EffectsSection'
import { useCubeIndex } from './useCubeIndex'
import CubeNavControls from './CubeNavControls'
import LibraryCube3D from './LibraryCube3D'
import LibraryCubeFallback from './LibraryCubeFallback'
import { hasWebGL2 } from './webglSupport'

// inside the component:
// const { library, libraryId, setLibraryId } = useLibrary()
// const { lang } = useLang()
// const { currentIndex, libraries, next, prev, jumpTo } = useCubeIndex(libraryId, setLibraryId)
// const [webgl] = useState(() => hasWebGL2() && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
// const [fullData, setFullData] = useState(null)
// useEffect(() => { let ok = true; setFullData(null); loadLibrary(libraryId).then(d => { if (ok && d) setFullData(d) }); return () => { ok = false } }, [libraryId])
```

```jsx
// render:
<section id="library" ref={sectionRef} tabIndex={0} onKeyDown={handleKeyDown}
  aria-roledescription="Library selector" aria-label={library.name[lang]}
  className="relative outline-none py-28 px-4 scroll-mt-24">
  <span className="sr-only" aria-live="polite" aria-atomic="true">
    {`${library.name[lang]} ${LIBRARY_WORD[lang] || 'könyvtár'}`}
  </span>

  <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 mb-10">
    {webgl
      ? <LibraryCube3D libraries={libraries} currentIndex={currentIndex} lang={lang} onPrev={prev} onNext={next} />
      : <LibraryCubeFallback library={library} lang={lang} />}
    <CubeNavControls libraries={libraries} currentIndex={currentIndex} onPrev={prev} onNext={next} onJumpTo={jumpTo} />
  </div>

  <div className="max-w-6xl mx-auto" id="library-cube-panel" role="tabpanel" aria-labelledby={`lib-tab-${library.id}`}>
    <AnimatePresence mode="wait">
      <motion.div key={library.id}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
        {fullData ? (
          <LibraryContext.Provider value={{ library: fullData, libraryId, setLibraryId, availableLibraries: listLibraries(), isLoading: false }}>
            <LibraryGallery dotsLibraries={libraries} dotsCurrentIndex={currentIndex} onDotsJumpTo={jumpTo} />
            {fullData.id !== 'performance' && <EffectsSection />}
            {fullData.id === 'peptides' && <Calculator />}
          </LibraryContext.Provider>
        ) : (
          <div style={{ minHeight: 600 }} className="flex items-center justify-center text-2xl font-black tracking-widest"
            style={{ color: library.accent }}>{library.name[lang]}</div>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
</section>
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 3: Smoke**

Run: `npm run smoke`
Expected: ALL ROUTES PASS; home route still reports `CubeNavControls`.

- [ ] **Step 4: Screenshot the home/library section (headless)**

Reuse `tmp/shot.mjs` pattern against `dist`, route `#library` (or home), 1440×1200.
Expected: the cube canvas is present, a gallery renders below, no console errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/library/cube-nav/LibraryCube.jsx
git commit -m "feat(cube): render WebGL cube + single cross-faded gallery (kills multi-gallery compositing)"
```

---

## Task 6: Live tuning on localhost + remove dead `CubeFace`

**Files:**
- Delete: `src/components/library/cube-nav/CubeFace.jsx`

- [ ] **Step 1: Run the dev server**

Run: `npm run dev` (user previews at the printed localhost URL)
Tune live: cover-face order/upright, rotation easing (`0.16`), cube size, idle
tilt amount, emissive intensity, light positions. Iterate with the user until the
rotation reads correctly and looks good; confirm switching is smooth after
visiting all 4 libraries (the original failure mode).

- [ ] **Step 2: Remove the now-dead CubeFace**

Run: `git rm src/components/library/cube-nav/CubeFace.jsx`
Verify no remaining import: `grep -rn "CubeFace" src/` → only `cube-nav/` internals gone.

- [ ] **Step 3: Re-verify**

Run: `npm run build && npm run smoke`
Expected: both green.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore(cube): remove dead CubeFace + live-tuned cube visuals"
```

---

## Task 7: Final gate before merge

- [ ] `npm run build` green.
- [ ] `npm run smoke` green (7 routes), home reports `CubeNavControls`.
- [ ] three NOT in entry bundle (Task 3 Step 3).
- [ ] Localhost: switch all 4 libraries repeatedly — smooth, no lag, no GL console errors; mobile-emulation drag works; reduced-motion / no-WebGL2 fallback shows the 2D selector.
- [ ] User approves on localhost → merge `feat/library-cube-3d` into `master` (deploys). Rollback remains `git checkout backup/pre-cube3d-20260620`.

---

## Self-review

- **Spec coverage:** persistent selector cube (T3/T5), transparent + no-bloom glow (T3), CanvasTexture covers (T2/T3), render-on-demand + dispose + WebGL2-detect + lazy three (T1/T3), single cross-faded gallery (T5), controls reused (T5), no-WebGL2 / reduced-motion fallback (T4/T5), remove CubeFace (T6), build/smoke/lazy-chunk/localhost verification (T5/T7). All covered.
- **Placeholders:** none — helper + cover + fallback have full code; the cube has a full component with a flagged live-tuning point (material-slot mapping) that is inherently visual and cannot be finalized headlessly.
- **Type consistency:** `LibraryCube3D` props `{ libraries, currentIndex, lang, onPrev, onNext, size }` match the call site in T5; `drawFaceCover(ctx, library, lang, size)` signature matches T2 test and T3 usage; `hasWebGL2()` matches T5 usage.
