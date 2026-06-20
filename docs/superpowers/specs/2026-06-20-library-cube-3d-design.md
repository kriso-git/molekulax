# Library switcher: Three.js WebGL cube — design

**Date:** 2026-06-20
**Branch:** `feat/library-cube-3d`
**Backup tag (rollback point):** `backup/pre-cube3d-20260620`

## Problem

Switching between the 4 libraries lags, and the lag worsens the more libraries
you have visited. Root cause (diagnosed in `LibraryCube.jsx` / `CubeFace.jsx`):

- Each `CubeFace` renders the **full** `LibraryGallery` once it `hasBeenActive`,
  and the gallery renders **all** entry tiles with no virtualization
  (performance ~270, nootropics ~144 tiles).
- During a rotation, `transform-style: preserve-3d` (on the rotating container
  and every face) + the `height` tween force **every visited full gallery onto
  a GPU compositing layer at once**, and the browser animates `rotateY` over
  hundreds of composited tiles (+ images/videos) for 700 ms. That compositing is
  the lag. 1 library visited = smooth; 3–4 visited = janky.

## Chosen approach

Replace the CSS-3D cube with a **persistent Three.js WebGL selector cube**. The
rotation runs in a small GPU canvas (≈12 triangles), so it is **smooth
independent of gallery weight**. Decided over the lighter alternatives because
the user wants it both lag-free and visually impressive, and `three@0.184` is
already in the stack (DNS-network background lazy chunk).

## Architecture

**Layout (library section).** Top: the WebGL selector cube (~440px, responsive,
centered) flanked by the prev/next arrows, with the dots indicator below. Under
it: the **single** active-library `LibraryGallery` as normal HTML. The section
height is no longer driven by the cube (the cube is fixed-size), so the
`height`-tween hack is dropped.

**The cube (WebGL).**
- Small **transparent** (`alpha:true`, clear alpha 0) canvas so the page / DNS
  background shows through and the cube floats. No `EffectComposer`/`UnrealBloom`
  (it renders View/transparent regions opaque — known trap); glow comes from
  emissive materials + additive halo sprites.
- A `BoxGeometry`; the 4 side faces carry the 4 libraries. Each face material is
  a `CanvasTexture` cover drawn per library: dark base, accent radial glow, the
  library name in the site font, a molecule/icon motif, accent border + HUD
  corner brackets. Material: `MeshStandardMaterial` with `map` + accent
  `emissive`, slightly glassy. Top/bottom faces: neutral capped accent.
- Lighting: ambient + key point light + accent rim light.
- Rotation: `cube.rotation.y` eases toward `-currentIndex * (π/2)` (shortest
  signed delta from `useCubeIndex`). Optional faint idle tilt/bob; default off
  to keep it perf-trivial.

**Performance safety (the whole point).**
- Render-on-demand: the rAF loop runs **only while easing to the target**, then
  stops at a static frame (no constant redraw when idle).
- DPR cap (≤2); small canvas; low-poly. Works on mobile (the cube IS the nav, so
  it is NOT desktop-gated — but it is cheap enough for mobile).
- **WebGL2 feature-detect before `new WebGLRenderer`** (else headless smoke logs
  a console.error → smoke RED). SwiftShader flags already in the smoke runner.
- Unmount: dispose geometry / materials / textures, `renderer.dispose()` +
  `forceContextLoss()`. three via **lazy dynamic import** (not the entry bundle),
  matching the DNS-background pattern.

**Gallery + transition.** Exactly **one** `LibraryGallery` in the DOM at a time
(not 4 faces), wrapped in `AnimatePresence` keyed by `libraryId` for a cross-fade
on switch. This alone removes the multi-gallery compositing. Per-library lazy
`loadLibrary` stays: skeleton → fade-in. `EffectsSection` / `Calculator` render
below the gallery, conditioned as today.

**Controls + fallback.** Arrows / dots / keyboard (← → Home End) → `setLibraryId`
(existing `useCubeIndex`, `CubeNavControls`, `DotsIndicator` are reused). Touch:
pointer-drag on the canvas → swipe → prev/next on release (existing thresholds).
**No WebGL2** → a 2D cover-flip / button selector fallback so navigation always
works. `prefers-reduced-motion` → snap rotation (no spin); navigation intact.

## What changes

- `LibraryCube.jsx`: remove the CSS-3D cube (preserve-3d, height-tween, 4×
  `CubeFace` full-render); render the WebGL cube + a single gallery + the
  controls below.
- New: `cube-nav/LibraryCube3D.jsx` (the WebGL canvas + scene), a face-cover
  texture builder, a WebGL2-detect helper, and the 2D fallback selector.
- `CubeFace.jsx`: no longer needed (removed once the new path is verified).
- `useCubeIndex.js`, `CubeNavControls.jsx`, `DotsIndicator.jsx`: kept.

## Verification

- Visual: the rotation stays smooth after visiting all 4 libraries (the original
  failure mode). Localhost preview on the feature branch before any merge.
- `npm run build` + `npm run smoke` (7 routes) green; the home route still
  reports `CubeNavControls`. WebGL2-detect keeps smoke from logging GL errors.
- Lazy chunk: three is NOT in the entry bundle (grep the build output).
- Rollback available at any time via the backup tag.

## Out of scope (later, if wanted)

- Click a partially-visible side face to jump to it.
- Reflective/environment-mapped glass material, particle field around the cube.
- Sticky mini-switcher when the gallery is scrolled far below the cube.
