// SideLibrarySwitcher — desktop-only sticky library cycler on BOTH viewport
// edges. Replaces the cube's built-in arrow controls on lg+ screens (those
// are hidden via lg:hidden in CubeNavControls). Mobile keeps swipe + cube
// arrows; tablet (md..lg) keeps the cube's own arrows; lg+ gets these pills.
//
// The pills are sized to read the longest Hungarian library label
// ("TELJESÍTMÉNYFOKOZÓK") cleanly without overflow, with a large readable
// chevron and a 4-dot library indicator at the far end.

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLibrary } from '../context/LibraryContext'
import { useLang } from '../i18n/LanguageContext'

function shortenName(fullName) {
  let s = (fullName || '')
    .replace(/\s*Könyvtár\s*$/i, '')
    .replace(/\s*Library\s*$/i, '')
    .replace(/^Biblioteka\s+środków\s+/i, '')
    .replace(/^Biblioteka\s+/i, '')
    .trim()
  // Side pill is sized for ~12 vertical chars. Cap longer locale variants
  // (Teljesítményfokozók, Performance Compounds, …) with an ellipsis so
  // the text never overflows the pill height.
  if (s.length > 12) return s.slice(0, 11) + '…'
  return s
}

function SidePill({ direction, lib, libraries, currentIdx, onClick }) {
  const [hovered, setHovered] = useState(false)
  const [flashing, setFlashing] = useState(false)
  const flashRef = useRef(null)
  const accent = '#00ff99'
  const isLeft = direction === 'prev'
  const Chevron = isLeft ? ChevronLeft : ChevronRight
  const shortName = shortenName(lib.label)

  const handleClick = () => {
    onClick()
    setFlashing(true)
    if (flashRef.current) clearTimeout(flashRef.current)
    flashRef.current = setTimeout(() => setFlashing(false), 800)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${isLeft ? 'Previous' : 'Next'} library: ${lib.label}`}
      title={lib.label}
      className={`
        fixed top-1/2 -translate-y-1/2 z-40
        flex flex-col items-center
        py-7 cursor-pointer select-none
        backdrop-blur-md
        transition-all duration-300 ease-out will-change-transform
        ${isLeft ? 'left-0 rounded-r-2xl border-l-0' : 'right-0 rounded-l-2xl border-r-0'}
        ${hovered ? (isLeft ? 'translate-x-1' : '-translate-x-1') : ''}
      `}
      style={{
        border: `1px solid ${hovered ? accent + 'cc' : accent + '55'}`,
        height: 360,
        width: hovered ? 84 : 76,
        background: `linear-gradient(180deg, ${accent}1f 0%, rgba(5,5,5,0.88) 50%, ${accent}1f 100%)`,
        boxShadow: hovered
          ? `0 0 36px ${accent}55, inset 0 0 28px ${accent}22, ${isLeft ? '' : '-'}10px 0 28px -10px ${accent}88`
          : `0 0 18px ${accent}22, inset 0 0 14px ${accent}11, ${isLeft ? '' : '-'}4px 0 18px -10px ${accent}33`,
        color: accent,
      }}
    >
      {/* Chevron HUD */}
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full mb-5"
        style={{
          width: 40,
          height: 40,
          background: `${accent}22`,
          border: `1.5px solid ${accent}88`,
          boxShadow: hovered ? `0 0 16px ${accent}cc, inset 0 0 8px ${accent}66` : `0 0 8px ${accent}55, inset 0 0 4px ${accent}33`,
          transition: 'all 220ms ease-out',
          flexShrink: 0,
        }}
      >
        <Chevron
          size={24}
          strokeWidth={2.75}
          style={{
            transform: hovered ? (isLeft ? 'translateX(-2px)' : 'translateX(2px)') : 'translateX(0)',
            transition: 'transform 220ms ease-out',
            filter: `drop-shadow(0 0 6px ${accent})`,
          }}
        />
      </span>

      {/* Vertical label — flex-1 fills the remaining height between chevron
          and dots, overflow-hidden as a safety net for unusually long
          locale labels (those also go through shortenName + ellipsis). */}
      <span
        className="flex-1 flex items-center justify-center font-bold uppercase whitespace-nowrap overflow-hidden"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: '13px',
          letterSpacing: '0.18em',
          textShadow: `0 0 8px ${accent}cc, 0 0 16px ${accent}77, 0 0 28px ${accent}44`,
          color: accent,
          lineHeight: 1,
        }}
      >
        {shortName}
      </span>

      {/* Dots indicator — current vs total libraries */}
      <span aria-hidden="true" className="flex flex-col gap-2 mt-5">
        {libraries.map((_, i) => (
          <span
            key={i}
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: i === currentIdx ? accent : `${accent}33`,
              boxShadow: i === currentIdx ? `0 0 10px ${accent}cc` : 'none',
              transition: 'all 220ms ease-out',
            }}
          />
        ))}
      </span>

      {/* Click-flash accent */}
      {flashing && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none ${isLeft ? 'rounded-r-2xl' : 'rounded-l-2xl'}`}
          style={{
            background: `radial-gradient(circle at center, ${accent}55, transparent 70%)`,
            animation: 'slsFlash 0.8s ease-out forwards',
          }}
        />
      )}
    </button>
  )
}

export default function SideLibrarySwitcher() {
  const { libraryId, setLibraryId, availableLibraries } = useLibrary()
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const target = document.getElementById('library')
      if (!target) { setVisible(false); return }
      const rect = target.getBoundingClientRect()
      // Show once the library top has scrolled past ~30% of viewport height.
      setVisible(rect.top < window.innerHeight * 0.3)
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
  const count = availableLibraries.length
  const prevLib = availableLibraries[(currentIdx + count - 1) % count]
  const nextLib = availableLibraries[(currentIdx + 1) % count]

  const libs = availableLibraries.map(l => ({ id: l.id, label: l.name?.[lang] || l.name?.hu || l.id }))

  return (
    <div
      className={`hidden lg:block pointer-events-none transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden={!visible}
    >
      <div className={visible ? 'pointer-events-auto' : 'pointer-events-none'}>
        <SidePill
          direction="prev"
          lib={{ id: prevLib.id, label: prevLib.name?.[lang] || prevLib.name?.hu || prevLib.id }}
          libraries={libs}
          currentIdx={currentIdx}
          onClick={() => setLibraryId(prevLib.id)}
        />
        <SidePill
          direction="next"
          lib={{ id: nextLib.id, label: nextLib.name?.[lang] || nextLib.name?.hu || nextLib.id }}
          libraries={libs}
          currentIdx={currentIdx}
          onClick={() => setLibraryId(nextLib.id)}
        />
      </div>
      <style>{`
        @keyframes slsFlash {
          0%   { opacity: 0; transform: scale(0.85); }
          30%  { opacity: 1; transform: scale(1.04); }
          100% { opacity: 0; transform: scale(1.18); }
        }
      `}</style>
    </div>
  )
}
