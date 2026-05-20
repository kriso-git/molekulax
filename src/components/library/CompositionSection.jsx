import { ChevronRight } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

/**
 * Renders multi-peptide stack composition as clickable component cards.
 * Each card deep-links to the component entry (#entry/peptides/<id>).
 *
 * `composition` is null when the entry is not a stack — return null.
 * Each composition item is {id, role, typicalDose} where id MUST reference
 * an entry in the same library's LIBRARY_ENTRY_META (validator-enforced).
 */
export default function CompositionSection({ composition, accent }) {
  const { t } = useLang()
  const { library } = useLibrary()

  if (!composition || !Array.isArray(composition) || composition.length === 0) {
    return null
  }
  if (!library?.meta) return null

  const metaById = Object.fromEntries(library.meta.map((m) => [m.id, m]))

  const handleClick = (id) => {
    window.location.hash = `entry/${library.id}/${id}`
  }

  return (
    <section className="mt-8 mb-12 px-4">
      <div className="glass rounded-2xl p-6">
        <div className="text-xs uppercase tracking-wider mb-2 opacity-70"
          style={{ color: accent }}>
          {t('entry.composition.eyebrow')}
        </div>
        <h2 className="text-xl font-semibold mb-6">
          {t('entry.composition.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {composition.map((item) => {
            const meta = metaById[item.id]
            const displayName = meta?.name || item.id
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-left p-4 rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  background: 'var(--tint-medium)',
                  border: '1px solid var(--tint-medium-border)',
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-base"
                    style={{ color: meta?.accentColor || accent }}>
                    {displayName}
                  </h3>
                  <ChevronRight className="w-4 h-4 opacity-50 mt-1" />
                </div>
                <div className="text-xs opacity-70 mb-1">
                  <span className="uppercase tracking-wide opacity-60">
                    {t('entry.composition.role')}:
                  </span>{' '}
                  {item.role}
                </div>
                <div className="text-xs font-mono opacity-80">{item.typicalDose}</div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
