import { memo } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

// Performance-library-only multi-select chip row for form-factor (route of
// administration) filtering. Chips toggle independently; AND-combined with
// subCategory filter in LibraryGallery's filteredAll memo.
//
// Controlled component — owner is LibraryGallery.
const FormFactorChipRow = memo(function FormFactorChipRow({
  selectedFormFactors,
  onToggle,
}) {
  const { t, tr } = useLang()
  const { library } = useLibrary()
  const formFactors = library?.formFactors || []

  if (formFactors.length === 0) return null

  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <span
        className="text-[10px] tracking-[0.25em] uppercase font-semibold"
        style={{ color: 'var(--text-fainter)' }}
      >
        {t('perf.formFactor.title')}:
      </span>
      <div className="flex flex-wrap gap-2">
        {formFactors.map(ff => {
          const active = selectedFormFactors.includes(ff.id)
          return (
            <button
              key={ff.id}
              type="button"
              onClick={() => onToggle(ff.id)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
              style={{
                background: active ? `${ff.color}26` : 'var(--tint-row)',
                border: `1px solid ${active ? ff.color : 'var(--border-soft)'}`,
                color: active ? ff.color : 'var(--text-muted)',
                boxShadow: active ? `0 0 10px ${ff.color}44` : 'none',
              }}
              aria-pressed={active}
            >
              {tr(ff.label)}
            </button>
          )
        })}
      </div>
    </div>
  )
})

export default FormFactorChipRow
