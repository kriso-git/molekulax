import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLibrary } from '../../../context/LibraryContext'
import { useLang } from '../../../i18n/LanguageContext'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import LibraryGallery from '../../LibraryGallery'
import Calculator from '../../Calculator'
import EffectsSection from '../EffectsSection'
import { useCubeIndex } from './useCubeIndex'
import CubeFace from './CubeFace'
import CubeNavControls from './CubeNavControls'

const LIBRARY_WORD = { hu: 'könyvtár', en: 'library', pl: 'biblioteka' }

// Tween instead of spring for smoothness — spring physics can produce
// micro-jitter from oscillation, tween gives a clean monotonic curve.
// 850ms power3-ease-out feels deliberate without dragging.
const ROTATION_TRANSITION = {
  type: 'tween',
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
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
  const { lang } = useLang()
  const { currentIndex, rotationDeg, isFirstRender, libraries, next, prev, jumpTo } =
    useCubeIndex(libraryId, setLibraryId)

  // Design decision (Phase 7, 2026-05-17): the 3D cube is the primary
  // library navigation paradigm, NOT decorative animation — disabling it
  // under `prefers-reduced-motion` would hide the entire navigation
  // affordance. Smoke iter confirmed users with OS reduce-motion ON still
  // expect the cube to rotate. The cross-fade branch below is kept as
  // dead-code in case we later add an explicit in-app "Reduce motion"
  // toggle that opts into it. WCAG 2.3.3 exemption: every cube rotation
  // is user-input-triggered (swipe/click/keyboard), never autoplay.
  const reduceMotion = false
  const isTouch = useMediaQuery('(pointer: coarse)')
  const wrapperRef = useRef(null)
  const sectionRef = useRef(null)
  const [halfWidth, setHalfWidth] = useState(0)
  const [faceHeights, setFaceHeights] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })

  // True-cube geometry: halfWidth = wrapper_width / 2. Így a face-ek
  // valódi kockaként hinge-elnek a megosztott élnél, NEM keresztezik
  // egymást rotáció közben (face 1 a jobb oldali élről swing-el be).
  // Perspective=16000-rel a max scale ~1.04× (=4% bleed). Eredetileg 8000
  // volt (Phase 7), de az `expanded` accordion-state-en (Top10 + Összes XYZ
  // ki van nyitva) a face content akár 5000px+ magas → 8000 perspective
  // mellett a bleed ~200px lett, ami túlcsúszott a py-48 padding-en és
  // beleharapott a felső "Miért a molekulax?" szekcióba. 16000-rel az
  // expanded bleed ~95-100px → biztosan a padding-en belül marad.
  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width
      if (w) setHalfWidth(Math.round(w / 2))
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

  // useCallback so CubeFace's ResizeObserver useEffect (which has
  // onHeightChange in deps) doesn't recreate on every LibraryCube re-render.
  const handleFaceHeight = useCallback((idx, h) => {
    setFaceHeights((prev) => (prev[idx] === h ? prev : { ...prev, [idx]: h }))
  }, [])

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
        aria-label={library.name[lang]}
        onKeyDown={handleKeyDown}
        className="relative outline-none py-28 px-4 scroll-mt-24"
      >
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {`${library.name[lang]} ${LIBRARY_WORD[lang] || 'könyvtár'}`}
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
      aria-label={library.name[lang]}
      onKeyDown={handleKeyDown}
      className="relative outline-none py-48 px-4 scroll-mt-24"
    >
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`${library.name[lang]} ${LIBRARY_WORD[lang] || 'könyvtár'}`}
      </span>
      {/* CubeNavControls SECTION-szintűen — széles a viewport-on, arrows */}
      {/* a viewport széléhez igazodva, NEM a max-w-6xl wrapperhez */}
      <CubeNavControls
        libraries={libraries}
        currentIndex={currentIndex}
        onPrev={prev}
        onNext={next}
      />
      {/* Nincs overflow:hidden — a perspective scaling (~1.04x @ perspective */}
      {/* 16000px) miatt a face vizuálisan ~40-100px-szel kilóg a wrapper */}
      {/* bounds-án (expanded-en a 100 felé), ezt a section py-48 padding-je */}
      {/* (192px) bőven elnyeli, így nem folyik át sem az Education fenti */}
      {/* szekcióra, sem a Telegram alsóra. */}
      <div
        ref={wrapperRef}
        className="max-w-6xl mx-auto"
        style={{ perspective: '16000px' }}
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
            transition={isFirstRender ? { duration: 0 } : ROTATION_TRANSITION}
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
                libraries={libraries}
                currentIndex={currentIndex}
                onJumpTo={jumpTo}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
