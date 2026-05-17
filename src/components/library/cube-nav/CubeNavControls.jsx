import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../../i18n/LanguageContext'
import DotsIndicator from './DotsIndicator'

// Kontroll-réteg: bal/jobb nyíl + szomszéd-name peek (csak ≥1024px) +
// alul DotsIndicator. Desktop/tablet (md+) nyilak az oldalsávon (44/40px),
// mobile (<md) nyilak rácsúsztatva a kockalap szélére (36px). A peek-szöveg
// csak lg+ jelenik meg (vertikálisan írva, [writing-mode]).
export default function CubeNavControls({
  libraries,
  currentIndex,
  onPrev,
  onNext,
  onJumpTo,
}) {
  const { lang } = useLang()
  const count = libraries.length
  const prevLib = libraries[(currentIndex + count - 1) % count]
  const nextLib = libraries[(currentIndex + 1) % count]

  const arrowBase = {
    background: 'rgba(0,255,153,0.18)',
    border: '1px solid rgba(0,255,153,0.5)',
    color: '#00ff99',
  }

  return (
    <>
      {/* Desktop/tablet left arrow + peek */}
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Előző könyvtár: ${prevLib.name[lang]}`}
        className="hidden md:flex absolute top-28 left-2 lg:left-4 z-20 items-center justify-center rounded-full"
        style={{ width: 44, height: 44, ...arrowBase }}
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>
      <span
        className="hidden lg:block absolute top-28 left-16 z-20 text-[10px] uppercase tracking-[0.15em] text-[var(--text-tertiary,#94a3b8)]"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        aria-hidden="true"
      >
        ‹ {prevLib.name[lang]}
      </span>

      {/* Desktop/tablet right arrow + peek */}
      <button
        type="button"
        onClick={onNext}
        aria-label={`Következő könyvtár: ${nextLib.name[lang]}`}
        className="hidden md:flex absolute top-28 right-2 lg:right-4 z-20 items-center justify-center rounded-full"
        style={{ width: 44, height: 44, ...arrowBase }}
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
      <span
        className="hidden lg:block absolute top-28 right-16 z-20 text-[10px] uppercase tracking-[0.15em] text-[var(--text-tertiary,#94a3b8)]"
        style={{ writingMode: 'vertical-rl' }}
        aria-hidden="true"
      >
        {nextLib.name[lang]} ›
      </span>

      {/* Mobile (<md) left arrow — rácsúszva a face szélére */}
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Előző könyvtár: ${prevLib.name[lang]}`}
        className="md:hidden absolute top-28 left-2 z-20 flex items-center justify-center rounded-full"
        style={{ width: 36, height: 36, ...arrowBase }}
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>

      {/* Mobile (<md) right arrow */}
      <button
        type="button"
        onClick={onNext}
        aria-label={`Következő könyvtár: ${nextLib.name[lang]}`}
        className="md:hidden absolute top-28 right-2 z-20 flex items-center justify-center rounded-full"
        style={{ width: 36, height: 36, ...arrowBase }}
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>

      <DotsIndicator
        libraries={libraries}
        currentIndex={currentIndex}
        onJumpTo={onJumpTo}
      />
    </>
  )
}
