import { useLang } from '../../../i18n/LanguageContext'

// 4 dot, role="tablist" semantikával. Aktív dot hosszúkás pirula Chemical
// Green-nel; inaktív kis kör. Kattintásra direct-jump az adott library-re
// (a useCubeIndex.jumpTo a rövidebb irányba fogja forgatni a kockát).
export default function DotsIndicator({ libraries, currentIndex, onJumpTo }) {
  const { lang } = useLang()
  return (
    <div
      role="tablist"
      aria-label="Library selector"
      className="flex justify-center gap-2 mt-6"
    >
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
  )
}
