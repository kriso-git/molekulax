import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../../i18n/LanguageContext'
import DotsIndicator from './DotsIndicator'

// Kontroll-réteg: bal/jobb nyíl + szomszéd library NÉV-LABEL alá-stack-elve
// (text-xs uppercase). Desktop/tablet: 50px arrow + label. Mobile: 40px arrow,
// label rejtett. A pozíció `top-[480px] md:top-[680px]` aligned a Top10 grid
// függőleges közepével (section py-40 + face title block + Top10 fejlec +
// fél grid magasság).
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

  const labelClass =
    'text-xs uppercase tracking-[0.15em] text-[var(--text-tertiary,#94a3b8)] text-center leading-tight max-w-[100px]'

  return (
    <>
      {/* Desktop/tablet (md+): left arrow + label stack */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute top-[480px] md:top-[680px] left-2 lg:left-6 z-20">
        <button
          type="button"
          onClick={onPrev}
          aria-label={`Előző könyvtár: ${prevLib.name[lang]}`}
          className="flex items-center justify-center rounded-full"
          style={{ width: 50, height: 50, ...arrowBase }}
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <span className={`hidden lg:block ${labelClass}`} aria-hidden="true">
          {prevLib.name[lang]}
        </span>
      </div>

      {/* Desktop/tablet (md+): right arrow + label stack */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute top-[480px] md:top-[680px] right-2 lg:right-6 z-20">
        <button
          type="button"
          onClick={onNext}
          aria-label={`Következő könyvtár: ${nextLib.name[lang]}`}
          className="flex items-center justify-center rounded-full"
          style={{ width: 50, height: 50, ...arrowBase }}
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
        <span className={`hidden lg:block ${labelClass}`} aria-hidden="true">
          {nextLib.name[lang]}
        </span>
      </div>

      {/* Mobile (<md): left arrow only, no label */}
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Előző könyvtár: ${prevLib.name[lang]}`}
        className="md:hidden absolute top-[480px] left-2 z-20 flex items-center justify-center rounded-full"
        style={{ width: 40, height: 40, ...arrowBase }}
      >
        <ChevronLeft size={18} strokeWidth={2.5} />
      </button>

      {/* Mobile (<md): right arrow */}
      <button
        type="button"
        onClick={onNext}
        aria-label={`Következő könyvtár: ${nextLib.name[lang]}`}
        className="md:hidden absolute top-[480px] right-2 z-20 flex items-center justify-center rounded-full"
        style={{ width: 40, height: 40, ...arrowBase }}
      >
        <ChevronRight size={18} strokeWidth={2.5} />
      </button>

      <DotsIndicator
        libraries={libraries}
        currentIndex={currentIndex}
        onJumpTo={onJumpTo}
      />
    </>
  )
}
