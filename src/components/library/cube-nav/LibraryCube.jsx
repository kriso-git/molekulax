import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
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
  const { lang } = useLang()
  const { currentIndex, rotationDeg, isFirstRender, libraries, next, prev, jumpTo } =
    useCubeIndex(libraryId, setLibraryId)

  // NOTE: useReducedMotion override — Phase 7 smoke showed the cube was
  // entering the reduced-motion branch (cross-fade only, no 3D) even with
  // OS reduce-motion disabled. Forcing the 3D branch to always run until
  // we can verify the framer-motion v11 hook reliably.
  const _reduceMotionRaw = useReducedMotion()
  const reduceMotion = false  // was: _reduceMotionRaw
  const isTouch = useMediaQuery('(pointer: coarse)')
  const wrapperRef = useRef(null)
  const sectionRef = useRef(null)
  const [halfWidth, setHalfWidth] = useState(0)
  const [faceHeights, setFaceHeights] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })

  // Cube depth: a "shallow box" approach. translateZ(halfWidth/2) jó lenne
  // egy igazi kockához, de a face-content magas (gallery+effects+calc, 1500-
  // 2500px), így minden depth perspective-scaling-gel csordultivá teszi a
  // face-t. Fix shallow depth (180px) + perspective 1500px → scale ~1.14×,
  // 3D-rotation látható de a face vizuálisan a wrapper bounds-on belül marad.
  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width
      if (w) setHalfWidth(180)
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
      className="relative outline-none py-28 px-4 scroll-mt-24"
    >
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`${library.name[lang]} ${LIBRARY_WORD[lang] || 'könyvtár'}`}
      </span>
      <div
        ref={wrapperRef}
        className="max-w-6xl mx-auto relative"
        style={{ perspective: '1500px' }}
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
