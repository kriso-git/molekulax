import { useEffect, useRef, useState } from 'react'
import { listLibraries } from '../../../data/libraries'

const LIBRARY_COUNT = 4

// Wrap-around delta that picks the shorter rotation direction.
// e.g. 3→0 (right-arrow pharma→peptid): delta = +1 (NOT -3)
// e.g. 0→3 (left-arrow peptid→pharma):  delta = -1 (NOT +3)
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
