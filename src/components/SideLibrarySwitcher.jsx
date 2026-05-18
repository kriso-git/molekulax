// SideLibrarySwitcher — desktop-only sticky library cycler that lives on the
// right edge of the viewport once the user has scrolled past the LibraryCube.
// Lets them switch libraries without scrolling all the way back up to the
// cube's built-in arrows. Hidden on mobile (the cube has on-card touch swipe
// + arrows there) and hidden above the library section (where the cube is
// already the primary nav).

import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useLibrary } from '../context/LibraryContext'
import { useLang } from '../i18n/LanguageContext'

export default function SideLibrarySwitcher() {
  const { libraryId, setLibraryId, availableLibraries } = useLibrary()
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const flashTimerRef = useRef(null)
  const [flashing, setFlashing] = useState(false)

  // Show once the user has scrolled past the top of the library section.
  // We observe #library (the cube wrapper sets this id when mounted) plus a
  // scroll fallback for the first paint before any IO callback fires.
  useEffect(() => {
    const update = () => {
      const target = document.getElementById('library')
      if (!target) { setVisible(false); return }
      const rect = target.getBoundingClientRect()
      // Visible from when the library's top has scrolled past the viewport
      // top by ~30% of viewport height — i.e. user is "inside or past" it.
      const threshold = window.innerHeight * 0.3
      setVisible(rect.top < threshold)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const currentIdx = availableLibraries.findIndex(l => l.id === libraryId)
  if (currentIdx < 0 || availableLibraries.length < 2) return null
  const nextIdx = (currentIdx + 1) % availableLibraries.length
  const nextLib = availableLibraries[nextIdx]
  const accent = '#00ff99'

  const handleClick = () => {
    setLibraryId(nextLib.id)
    setFlashing(true)
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    flashTimerRef.current = setTimeout(() => setFlashing(false), 800)
  }

  // Localised "next library" name. Strip the trailing "Könyvtár"/"Library"/
  // "Biblioteka …" so the vertical label stays tight.
  const fullName = nextLib.name?.[lang] || nextLib.name?.hu || nextLib.id
  const shortName = fullName
    .replace(/\s*Könyvtár\s*$/i, '')
    .replace(/\s*Library\s*$/i, '')
    .replace(/^Biblioteka\s+/i, '')

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Switch to ${fullName}`}
      title={fullName}
      className={`
        hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40
        flex-col items-center justify-between
        py-6 px-3 rounded-l-2xl
        border border-r-0
        backdrop-blur-md
        cursor-pointer select-none
        transition-all duration-300 ease-out
        will-change-transform
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        ${hovered ? '-translate-x-1' : ''}
      `}
      style={{
        height: 220,
        width: hovered ? 56 : 48,
        background: `linear-gradient(180deg, ${accent}18 0%, rgba(5,5,5,0.85) 50%, ${accent}18 100%)`,
        borderColor: hovered ? `${accent}cc` : `${accent}55`,
        boxShadow: hovered
          ? `0 0 32px ${accent}55, inset 0 0 24px ${accent}22, -8px 0 24px -8px ${accent}66`
          : `0 0 16px ${accent}22, inset 0 0 12px ${accent}11, -4px 0 16px -8px ${accent}33`,
        color: accent,
      }}
    >
      {/* Top chevron — points right (toward the next library on the cube) */}
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full"
        style={{
          width: 28,
          height: 28,
          background: `${accent}1f`,
          border: `1px solid ${accent}66`,
          boxShadow: hovered ? `0 0 12px ${accent}aa` : `0 0 6px ${accent}44`,
          transition: 'all 220ms ease-out',
        }}
      >
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          style={{
            transform: hovered ? 'translateX(2px)' : 'translateX(0)',
            transition: 'transform 220ms ease-out',
            filter: `drop-shadow(0 0 4px ${accent})`,
          }}
        />
      </span>

      {/* Vertical label — short name of the NEXT library */}
      <span
        className="font-bold tracking-[0.25em] uppercase whitespace-nowrap text-[10px]"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          textShadow: `0 0 6px ${accent}cc, 0 0 12px ${accent}66`,
          color: accent,
          letterSpacing: '0.32em',
        }}
      >
        {shortName}
      </span>

      {/* Bottom dots — current vs total libraries */}
      <span aria-hidden="true" className="flex flex-col gap-1.5">
        {availableLibraries.map((lib, i) => (
          <span
            key={lib.id}
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              background: i === currentIdx ? accent : `${accent}33`,
              boxShadow: i === currentIdx ? `0 0 8px ${accent}aa` : 'none',
              transition: 'all 220ms ease-out',
            }}
          />
        ))}
      </span>

      {/* Click-flash accent — pulses once on activation */}
      {flashing && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-l-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${accent}55, transparent 70%)`,
            animation: 'slsFlash 0.8s ease-out forwards',
          }}
        />
      )}
      <style>{`
        @keyframes slsFlash {
          0%   { opacity: 0; transform: scale(0.8); }
          30%  { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0; transform: scale(1.2); }
        }
      `}</style>
    </button>
  )
}
