// SideLibrarySwitcher — desktop-only sticky library cycler on BOTH viewport
// edges. Slides in from off-screen as the user scrolls past the library
// section. Click cycles to prev/next library with a cooldown that matches
// the cube's rotation animation so the user can't out-spam the 3D motion.
//
// Visual details:
//   • Smaller pill (60→68px wide), 340px tall — fits comfortably on shorter laptop screens
//   • Two-column vertical label when the library name is longer than ~12
//     chars (Teljesítményfokozók → 'Teljesítmény' + 'fokozók' side-by-side)
//   • Current-library readout (small horizontal text + 4-dot indicator)
//     so the user always knows which library they're on, even when scrolled
//     past the cube
//   • Hidden on mobile; tablet (md..lg) keeps the cube's built-in arrows

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLibrary } from '../context/LibraryContext'
import { useLang } from '../i18n/LanguageContext'

const CHEMICAL_GREEN = '#00ff99'
const SWITCH_COOLDOWN_MS = 750 // matches LibraryCube rotation spring duration

// "Currently active library" caption — localised so the pill follows the
// global language switcher.
const NOW_LABEL = { hu: 'MOST', en: 'NOW', pl: 'TERAZ' }

// Strip the trailing "Könyvtár" / "Library" / leading "Biblioteka …" so the
// label tracks the substance kind, not the word "library".
function trimLabel(fullName) {
  return (fullName || '')
    .replace(/\s*Könyvtár\s*$/i, '')
    .replace(/\s*Library\s*$/i, '')
    .replace(/^Biblioteka\s+środków\s+/i, '')
    .replace(/^Biblioteka\s+/i, '')
    .trim()
}

// Split labels longer than 12 chars into two visual columns. We keep a small
// lookup of preferred natural breaks per locale to avoid splitting mid-syllable
// (Teljesít|mény + fokozók is much nicer than Teljesít|ményfokozók).
const SPLIT_OVERRIDES = {
  // HU
  'Teljesítményfokozók': ['Teljesítmény', 'fokozók'],
  // EN
  'Performance Compounds': ['Performance', 'Compounds'],
  // PL
  'środków wydajnościowych': ['Środków', 'wydajn.'],
}

function splitColumns(label) {
  if (label.length <= 12) return [label]
  if (SPLIT_OVERRIDES[label]) return SPLIT_OVERRIDES[label]
  // Generic fallback: split at midpoint, biased toward consonant boundaries.
  const mid = Math.floor(label.length / 2)
  const vowels = /[aeiouáéíóöőúüű]/i
  for (let offset = 0; offset <= 3; offset++) {
    for (const i of [mid + offset, mid - offset]) {
      if (i >= 4 && i <= label.length - 3 && vowels.test(label[i - 1]) && !vowels.test(label[i])) {
        return [label.slice(0, i), label.slice(i)]
      }
    }
  }
  return [label.slice(0, mid), label.slice(mid)]
}

function SidePill({ direction, libLabel, libraries, currentIdx, currentLabel, onClick, disabled, slideIn, nowLabel }) {
  const [hovered, setHovered] = useState(false)
  const [flashing, setFlashing] = useState(false)
  const flashRef = useRef(null)
  const isLeft = direction === 'prev'
  const Chevron = isLeft ? ChevronLeft : ChevronRight
  const columns = splitColumns(trimLabel(libLabel))
  const accent = CHEMICAL_GREEN

  const handleClick = () => {
    if (disabled) return
    onClick()
    setFlashing(true)
    if (flashRef.current) clearTimeout(flashRef.current)
    flashRef.current = setTimeout(() => setFlashing(false), 800)
  }

  // Slide-in transform: pill starts fully off-screen and translates in.
  // When disabled (cooldown), we don't change position, just dim slightly.
  let translateX
  if (!slideIn) translateX = isLeft ? '-100%' : '100%'
  else if (hovered && !disabled) translateX = isLeft ? '4px' : '-4px'
  else translateX = '0%'

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${isLeft ? 'Previous' : 'Next'} library: ${libLabel}`}
      title={libLabel}
      disabled={disabled}
      className={`
        fixed top-1/2 z-40
        flex flex-col items-center
        pt-4 pb-3 select-none
        backdrop-blur-md
        transition-all duration-500 ease-out will-change-transform
        ${isLeft ? 'left-0 rounded-r-2xl border-l-0' : 'right-0 rounded-l-2xl border-r-0'}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{
        border: `1px solid ${hovered && !disabled ? accent + 'cc' : accent + '55'}`,
        height: 340,
        width: hovered && !disabled ? 76 : 68,
        background: `linear-gradient(180deg, ${accent}1c 0%, rgba(5,5,5,0.88) 50%, ${accent}1c 100%)`,
        boxShadow: hovered && !disabled
          ? `0 0 32px ${accent}55, inset 0 0 24px ${accent}22, ${isLeft ? '' : '-'}10px 0 24px -10px ${accent}88`
          : `0 0 16px ${accent}22, inset 0 0 12px ${accent}11, ${isLeft ? '' : '-'}4px 0 16px -10px ${accent}33`,
        color: accent,
        // Compose two transforms: vertical-center + horizontal slide-in.
        transform: `translateY(-50%) translateX(${translateX})`,
        opacity: disabled ? 0.55 : 1,
      }}
    >
      {/* Chevron HUD */}
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full"
        style={{
          width: 36,
          height: 36,
          background: `${accent}22`,
          border: `1.5px solid ${accent}88`,
          boxShadow: hovered && !disabled
            ? `0 0 14px ${accent}cc, inset 0 0 6px ${accent}66`
            : `0 0 6px ${accent}55, inset 0 0 3px ${accent}33`,
          transition: 'all 220ms ease-out',
          flexShrink: 0,
        }}
      >
        <Chevron
          size={20}
          strokeWidth={2.75}
          style={{
            transform: hovered && !disabled ? (isLeft ? 'translateX(-2px)' : 'translateX(2px)') : 'translateX(0)',
            transition: 'transform 220ms ease-out',
            filter: `drop-shadow(0 0 4px ${accent})`,
          }}
        />
      </span>

      {/* Vertical label — 1 or 2 columns depending on length */}
      <span
        className="flex-1 flex items-center justify-center gap-0.5 py-2 overflow-hidden w-full"
      >
        {columns.map((col, idx) => (
          <span
            key={idx}
            className="font-bold uppercase whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: columns.length > 1 ? '11px' : '13px',
              letterSpacing: '0.16em',
              textShadow: `0 0 8px ${accent}cc, 0 0 16px ${accent}77, 0 0 28px ${accent}44`,
              color: idx === 0 ? accent : `${accent}cc`,
              lineHeight: 1,
            }}
          >
            {col}
          </span>
        ))}
      </span>

      {/* Active-library readout. Horizontal small text + dots so the user
          always knows which library they're currently on, even far below
          the cube. */}
      <span
        className="flex flex-col items-center gap-1 pt-1 w-full px-1"
        aria-hidden="true"
      >
        <span
          className="text-[7px] font-bold tracking-[0.32em] uppercase opacity-60 whitespace-nowrap"
          style={{ color: accent }}
        >
          {nowLabel}
        </span>
        <span
          className="text-[9px] font-bold tracking-[0.10em] uppercase whitespace-nowrap"
          style={{
            color: accent,
            textShadow: `0 0 6px ${accent}99`,
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {trimLabel(currentLabel)}
        </span>
        <span className="flex gap-1.5 mt-1">
          {libraries.map((_, i) => (
            <span
              key={i}
              className="rounded-full"
              style={{
                width: 6,
                height: 6,
                background: i === currentIdx ? accent : `${accent}33`,
                boxShadow: i === currentIdx ? `0 0 8px ${accent}cc` : 'none',
                transition: 'all 220ms ease-out',
              }}
            />
          ))}
        </span>
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
  const [cooldown, setCooldown] = useState(false)
  const cooldownRef = useRef(null)

  useEffect(() => {
    // Use a plain scroll-Y threshold instead of probing #library — the cube
    // is lazy-loaded so the element doesn't exist during the first render
    // pass, and that previously left visible=false even when the user was
    // well past Hero. ~40% of the viewport height roughly places the trigger
    // somewhere in the Education section, just before the library.
    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0
      setVisible(scrollY > window.innerHeight * 0.4)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Reset cooldown whenever the library actually changes (cube, swipe, pill).
  // Skip the initial mount so pills aren't dimmed on first paint.
  const firstMount = useRef(true)
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false
      return
    }
    setCooldown(true)
    if (cooldownRef.current) clearTimeout(cooldownRef.current)
    cooldownRef.current = setTimeout(() => setCooldown(false), SWITCH_COOLDOWN_MS)
    return () => { if (cooldownRef.current) clearTimeout(cooldownRef.current) }
  }, [libraryId])

  const currentIdx = availableLibraries.findIndex(l => l.id === libraryId)
  if (currentIdx < 0 || availableLibraries.length < 2) return null
  const count = availableLibraries.length
  const prevLib = availableLibraries[(currentIdx + count - 1) % count]
  const nextLib = availableLibraries[(currentIdx + 1) % count]
  const currentLib = availableLibraries[currentIdx]

  const localised = (lib) => lib.name?.[lang] || lib.name?.hu || lib.id

  return (
    <div className="hidden lg:block" aria-hidden={!visible}>
      <SidePill
        direction="prev"
        libLabel={localised(prevLib)}
        currentLabel={localised(currentLib)}
        libraries={availableLibraries}
        currentIdx={currentIdx}
        onClick={() => setLibraryId(prevLib.id)}
        disabled={cooldown}
        slideIn={visible}
        nowLabel={NOW_LABEL[lang] || NOW_LABEL.hu}
      />
      <SidePill
        direction="next"
        libLabel={localised(nextLib)}
        currentLabel={localised(currentLib)}
        libraries={availableLibraries}
        currentIdx={currentIdx}
        onClick={() => setLibraryId(nextLib.id)}
        disabled={cooldown}
        slideIn={visible}
        nowLabel={NOW_LABEL[lang] || NOW_LABEL.hu}
      />
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
