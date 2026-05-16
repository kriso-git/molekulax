import { useLibrary } from '../context/LibraryContext'
import { useLang } from '../i18n/LanguageContext'

export default function LibrarySwitcher() {
  const { library, setLibraryId, availableLibraries } = useLibrary()
  const { lang } = useLang()
  if (!availableLibraries || availableLibraries.length < 2) return null

  return (
    <div
      role="tablist"
      aria-label="Library selector"
      className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
    >
      {availableLibraries.map((lib) => {
        const active = lib.id === library.id
        return (
          <button
            key={lib.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setLibraryId(lib.id)}
            className={[
              'px-6 py-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] text-sm tracking-wide',
              active
                ? 'bg-[#00ff99] text-[#050505] shadow-[0_0_24px_rgba(0,255,153,0.35)]'
                : 'border border-[var(--tint-medium-border,rgba(255,255,255,0.12))] text-[var(--text-secondary,#cbd5e1)] hover:border-[#00ff99]/40 hover:text-white',
            ].join(' ')}
            style={!active ? { background: 'var(--tint-soft)' } : undefined}
          >
            {lib.name[lang]}
          </button>
        )
      })}
    </div>
  )
}
