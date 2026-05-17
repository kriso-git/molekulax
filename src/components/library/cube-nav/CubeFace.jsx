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
