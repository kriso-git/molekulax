import { useLang } from '../../../i18n/LanguageContext'
import NavArrowButton from './NavArrowButton'

// Big, obvious library prev/next arrows flanking the grid (the "table"), shown on
// sm+ (desktop/tablet). On phones the switch affordance is the arrows flanking the
// dots pager (LibraryGallery, sm:hidden) + swipe. Each arrow names the neighbour
// library and gently pulses (`.cube-nav-arrow` in index.css). Positioned absolute
// within the library <section>, vertically aligned to the Top10 / category grid.
const PREV = { hu: 'Előző', en: 'Previous', pl: 'Poprzednia' }
const NEXT = { hu: 'Következő', en: 'Next', pl: 'Następna' }

function NavArrow({ dir, lib, onClick, lang }) {
  const isLeft = dir === 'left'
  const pos = isLeft ? 'left-1 sm:left-3 lg:left-4 xl:left-8' : 'right-1 sm:right-3 lg:right-4 xl:right-8'
  const word = isLeft ? (PREV[lang] || PREV.hu) : (NEXT[lang] || NEXT.hu)
  return (
    <div className={`hidden sm:block absolute z-30 top-[460px] md:top-[640px] lg:top-[720px] ${pos}`}>
      <NavArrowButton
        dir={dir}
        onClick={onClick}
        ariaLabel={`${word} könyvtár: ${lib.name[lang]}`}
        pulse
        className="w-12 h-12 md:w-[60px] md:h-[60px] lg:w-[68px] lg:h-[68px]"
        iconClassName="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
      />
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
