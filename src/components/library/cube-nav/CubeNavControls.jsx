import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../../i18n/LanguageContext'

// Big, obvious library prev/next arrows flanking the grid (the "table"). Shown on
// ALL breakpoints (earlier they were lg:hidden, so first-time desktop visitors
// never saw a switch affordance — only the small centred pager). Each arrow shows
// the neighbour library name and a gentle attention pulse (`.cube-nav-arrow` in
// index.css). Positioned absolute within the library <section>, vertically aligned
// to the Top10 / category grid, horizontally just outside the max-w-6xl cube.
const ARROW_STYLE = {
  background: 'rgba(0,255,153,0.16)',
  border: '1.5px solid rgba(0,255,153,0.55)',
  color: '#00ff99',
  boxShadow: '0 0 26px rgba(0,255,153,0.28), inset 0 0 14px rgba(0,255,153,0.12)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
}

function NavArrow({ dir, lib, onClick, lang }) {
  const isLeft = dir === 'left'
  const Icon = isLeft ? ChevronLeft : ChevronRight
  const pos = isLeft ? 'left-1 sm:left-3 lg:left-4 xl:left-8' : 'right-1 sm:right-3 lg:right-4 xl:right-8'
  return (
    <div className={`absolute z-30 top-[440px] md:top-[620px] lg:top-[700px] ${pos} flex flex-col items-center gap-2.5`}>
      <button
        type="button"
        onClick={onClick}
        aria-label={`${isLeft ? 'Előző' : 'Következő'} könyvtár: ${lib.name[lang]}`}
        className="cube-nav-arrow flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 w-12 h-12 md:w-[60px] md:h-[60px] lg:w-[68px] lg:h-[68px]"
        style={ARROW_STYLE}
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" strokeWidth={2.5} />
      </button>
      <span
        className="hidden md:block text-[11px] font-semibold uppercase tracking-[0.1em] text-center leading-tight max-w-[120px]"
        style={{ color: 'rgba(0,255,153,0.85)' }}
        aria-hidden="true"
      >
        {lib.name[lang]}
      </span>
    </div>
  )
}

export default function CubeNavControls({ libraries, currentIndex, onPrev, onNext }) {
  const { lang } = useLang()
  const count = libraries.length
  const prevLib = libraries[(currentIndex + count - 1) % count]
  const nextLib = libraries[(currentIndex + 1) % count]

  return (
    <>
      <NavArrow dir="left" lib={prevLib} onClick={onPrev} lang={lang} />
      <NavArrow dir="right" lib={nextLib} onClick={onNext} lang={lang} />
    </>
  )
}
