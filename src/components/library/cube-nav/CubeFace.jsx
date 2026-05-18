import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { LibraryContext } from '../../../context/LibraryContext'
import { listLibraries, loadLibrary } from '../../../data/libraries'
import LibraryGallery from '../../LibraryGallery'
import Calculator from '../../Calculator'
import EffectsSection from '../EffectsSection'

// Per-face context override: each face renders its OWN library content
// with its own loaded full-data. The setLibraryId no-op on this provider
// (face does not re-route itself; the outer cube handles deep-linking).
// Memoize the value so children (LibraryGallery / EffectsSection) don't
// re-read context on every CubeFace re-render — the provider's `value`
// identity drives context-consumer re-renders.
function FaceLibraryProvider({ library, children }) {
  const value = useMemo(() => ({
    library,
    libraryId: library.id,
    setLibraryId: () => {},
    availableLibraries: listLibraries(),
    isLoading: false,
  }), [library])
  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  )
}

// Phase 8: each face lazy-loads its own full library data the first time
// it becomes active. hasBeenActive cache combined with the full-data
// load means the face renders the skeleton until BOTH conditions hold:
// (1) the face has been activated at least once, AND (2) the library
// data fetch has resolved. Subsequent face transitions keep the cached
// data via the singleton fullLibraryCache in src/data/libraries/index.js.
function CubeFaceInner({
  library,         // META (id + name + accent + description)
  isActive,
  faceIndex,
  halfWidth,
  onHeightChange,
  libraries,       // META[]
  currentIndex,
  onJumpTo,
  is3DActive,      // false post-settle: active face transform:none, inactive faces display:none
}) {
  const hasBeenActiveRef = useRef(false)
  const elRef = useRef(null)
  const [fullData, setFullData] = useState(null)
  const [loadStarted, setLoadStarted] = useState(false)

  if (isActive) hasBeenActiveRef.current = true
  const hasBeenActive = hasBeenActiveRef.current

  // Trigger the full-data load the first time the face becomes active.
  useEffect(() => {
    if (hasBeenActive && !loadStarted) {
      setLoadStarted(true)
      loadLibrary(library.id).then((data) => {
        if (data) setFullData(data)
      })
    }
  }, [hasBeenActive, loadStarted, library.id])

  const renderFull = hasBeenActive && fullData !== null

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

  // Post-settle (is3DActive=false): active face renders 2D (transform:none) for
  // crisp text/imagery; inactive faces are display:none so they don't ghost-layer
  // on top of each other in flat mode. During rotation: classic 3D-cube transform.
  const transform3D = `rotateY(${faceIndex * 90}deg) translateZ(${halfWidth}px)`

  // content-visibility lets the browser skip layout/paint for non-active faces
  // when they're hidden. `auto` would still render off-screen; `hidden` is
  // explicit and combined with display:none gives the strongest skip. We only
  // apply it during 2D (post-settle) — during rotation the faces need to paint.
  const isHidden = !is3DActive && !isActive

  return (
    <div
      ref={elRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        transform: is3DActive ? transform3D : 'none',
        display: isHidden ? 'none' : undefined,
        contentVisibility: isHidden ? 'hidden' : 'visible',
        backfaceVisibility: is3DActive ? 'hidden' : 'visible',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      aria-hidden={!isActive}
    >
      {renderFull ? (
        <FaceLibraryProvider library={fullData}>
          <LibraryGallery
            dotsLibraries={libraries}
            dotsCurrentIndex={currentIndex}
            onDotsJumpTo={onJumpTo}
          />
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

// React.memo: when the cube rotates only `isActive` / `currentIndex` /
// `is3DActive` flip on the inactive faces — props like `library` (meta) and
// `libraries` (listLibraries result) are stable across renders. Without memo,
// every parent-state change re-rendered all 4 faces (each face is a big
// subtree: full LibraryGallery + EffectsSection + maybe Calculator).
const CubeFace = memo(CubeFaceInner)
export default CubeFace
