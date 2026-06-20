import { useEffect, useReducer, useRef } from 'react'
import { flushSync } from 'react-dom'
import { LibraryContext, useLibrary } from '../../../context/LibraryContext'
import { useLang } from '../../../i18n/LanguageContext'
import { listLibraries, loadLibrary, getLibrary } from '../../../data/libraries'
import LibraryGallery from '../../LibraryGallery'
import Calculator from '../../Calculator'
import EffectsSection from '../EffectsSection'
import CubeNavControls from './CubeNavControls'

const LIBRARY_WORD = { hu: 'könyvtár', en: 'library', pl: 'biblioteka' }

// View Transitions API: on switch, the browser natively snapshots the old + new
// library states as GPU images and we animate the two flat snapshots as a 3D cube
// rotation (CSS in index.css, ::view-transition-old/new(library-view)). Because it
// transforms cached images — not the live DOM — the turn is smooth regardless of
// how heavy the galleries are. Falls back to an instant swap where unsupported.
const supportsVT =
  typeof document !== 'undefined' && typeof document.startViewTransition === 'function'

export default function LibraryCube() {
  const { library, libraryId, setLibraryId } = useLibrary()
  const { lang } = useLang()
  const libraries = listLibraries()
  const count = libraries.length
  const currentIndex = Math.max(0, libraries.findIndex((l) => l.id === libraryId))
  const sectionRef = useRef(null)
  const cubeRef = useRef(null)
  const busyRef = useRef(false)
  const [, force] = useReducer((x) => x + 1, 0)

  // Render straight from the synchronous cache (getLibrary) so that, inside the
  // transition's flushSync, the NEW snapshot is the real gallery — not the async
  // skeleton an effect would still be loading.
  const data = getLibrary(libraryId)
  const ready = !!(data && data.categories) // full library (not just meta) is loaded

  useEffect(() => {
    if (!ready) loadLibrary(libraryId).then(() => force())
  }, [libraryId, ready])

  // Warm the other libraries on idle so switching is instant — no async load
  // delay before the view transition (the snapshot would otherwise be a skeleton).
  useEffect(() => {
    const warm = () => libraries.forEach((l) => loadLibrary(l.id))
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(warm, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(warm, 2000)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Hash-scroll-restore: scroll the section into view when the hash returns to
  // #library (e.g. EntryDetail close), unless the gallery owns the restore.
  useEffect(() => {
    const scrollIfLibrary = () => {
      if (window.location.hash !== '#library' || !sectionRef.current) return
      if (window.__libraryGalleryPendingRestore__) return
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
    scrollIfLibrary()
    window.addEventListener('hashchange', scrollIfLibrary)
    return () => window.removeEventListener('hashchange', scrollIfLibrary)
  }, [])

  const targetId = (i) => libraries[((i % count) + count) % count].id

  const switchTo = async (dir, idx) => {
    const id = targetId(idx)
    if (id === libraryId || busyRef.current) return // ignore clicks mid-rotation
    busyRef.current = true
    try {
      await loadLibrary(id) // preload so the new snapshot is the real gallery
      if (!supportsVT) { setLibraryId(id); return }
      const root = document.documentElement
      // Put the two snapshots on real cube faces: half = cube width / 2 (translateZ
      // in the keyframes); comp cancels the perspective enlargement at the front so
      // the face stays 1:1 (P must match the perspective() in index.css).
      const P = 16000
      const half = Math.round((cubeRef.current?.getBoundingClientRect().width || 1100) / 2)
      root.style.setProperty('--vt-half', half + 'px')
      root.style.setProperty('--vt-comp', String((P - half) / P))
      // data-vt-dir on <html> drives the rotation direction (CSS) without React
      // clobbering an element class during flushSync.
      root.dataset.vtDir = dir
      const t = document.startViewTransition(() => flushSync(() => setLibraryId(id)))
      // Wait for the turn, but never stay "busy" longer than 1.2s — a safety net so
      // an interrupted/non-resolving t.finished can't permanently lock switching.
      await Promise.race([t.finished.catch(() => {}), new Promise((r) => setTimeout(r, 1200))])
      delete root.dataset.vtDir
    } finally {
      busyRef.current = false
    }
  }

  const goNext = () => switchTo('fwd', currentIndex + 1)
  const goPrev = () => switchTo('back', currentIndex - 1)
  const goJump = (i) => switchTo(i >= currentIndex ? 'fwd' : 'back', i)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goNext() }
    else if (e.key === 'Home') { e.preventDefault(); goJump(0) }
    else if (e.key === 'End') { e.preventDefault(); goJump(count - 1) }
  }

  return (
    <section
      id="library"
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="Library selector"
      aria-label={library.name[lang]}
      onKeyDown={handleKeyDown}
      className="relative outline-none py-28 px-4 scroll-mt-24"
    >
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`${library.name[lang]} ${LIBRARY_WORD[lang] || 'könyvtár'}`}
      </span>

      <CubeNavControls
        libraries={libraries}
        currentIndex={currentIndex}
        onPrev={goPrev}
        onNext={goNext}
      />

      <div
        ref={cubeRef}
        className="vt-cube max-w-6xl mx-auto"
        id="library-cube-panel"
        role="tabpanel"
        aria-labelledby={`lib-tab-${library.id}`}
      >
        {ready ? (
          <LibraryContext.Provider
            value={{
              library: data,
              libraryId,
              setLibraryId,
              availableLibraries: libraries,
              isLoading: false,
            }}
          >
            <LibraryGallery
              dotsLibraries={libraries}
              dotsCurrentIndex={currentIndex}
              onDotsJumpTo={goJump}
            />
            {data.id !== 'performance' && <EffectsSection />}
            {data.id === 'peptides' && <Calculator />}
          </LibraryContext.Provider>
        ) : (
          <div
            className="flex items-center justify-center text-2xl font-black tracking-[0.2em] uppercase"
            style={{ minHeight: 600, color: library.accent }}
          >
            {library.name[lang]}
          </div>
        )}
      </div>
    </section>
  )
}
