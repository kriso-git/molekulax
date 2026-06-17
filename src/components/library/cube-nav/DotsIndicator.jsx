import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../../i18n/LanguageContext'

// Library selector under the gallery.
//   mobile (<lg): 4 dots (active = Chemical Green pill).
//   desktop (lg+): a horizontal "◄  [active library name]  ►" pager.
// Both drive the same onJumpTo — jumpTo rotates the cube the short way.
const ARROW = {
  width: 40,
  height: 40,
  background: 'rgba(0,255,153,0.12)',
  border: '1px solid rgba(0,255,153,0.45)',
  color: '#00ff99',
}

export default function DotsIndicator({ libraries, currentIndex, onJumpTo, className = '' }) {
  const { lang } = useLang()
  const n = libraries.length
  const prevIdx = (currentIndex - 1 + n) % n
  const nextIdx = (currentIndex + 1) % n
  const active = libraries[currentIndex]

  return (
    <div className={className}>
      {/* mobile: dots */}
      <div role="tablist" aria-label="Library selector" className="flex lg:hidden justify-center gap-2">
        {libraries.map((lib, idx) => {
          const isActive = idx === currentIndex
          return (
            <button
              key={lib.id}
              type="button"
              role="tab"
              id={`lib-tab-${lib.id}`}
              aria-selected={isActive}
              aria-controls="library-cube-panel"
              aria-label={lib.name[lang]}
              onClick={() => onJumpTo(idx)}
              className="inline-flex items-center justify-center min-h-[24px] min-w-[24px]"
            >
              <span
                style={{
                  display: 'block',
                  height: 7,
                  width: isActive ? 20 : 7,
                  borderRadius: isActive ? 6 : '50%',
                  background: isActive ? '#00ff99' : 'rgba(255,255,255,0.18)',
                  boxShadow: isActive ? '0 0 8px #00ff99' : 'none',
                  transition: 'width 200ms ease, border-radius 200ms ease, background 200ms ease',
                }}
              />
            </button>
          )
        })}
      </div>

      {/* desktop: ◄  active library name  ► */}
      <div className="hidden lg:flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => onJumpTo(prevIdx)}
          aria-label={libraries[prevIdx].name[lang]}
          className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:-translate-x-0.5"
          style={ARROW}
        >
          <ChevronLeft size={20} strokeWidth={2.2} />
        </button>
        <span
          aria-live="polite"
          className="text-sm font-bold uppercase tracking-[0.18em] text-center"
          style={{ color: '#fff', minWidth: 200 }}
        >
          {active.name[lang]}
        </span>
        <button
          type="button"
          onClick={() => onJumpTo(nextIdx)}
          aria-label={libraries[nextIdx].name[lang]}
          className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:translate-x-0.5"
          style={ARROW}
        >
          <ChevronRight size={20} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  )
}
