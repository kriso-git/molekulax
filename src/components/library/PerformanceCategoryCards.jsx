import { memo } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

// Performance-library-only CategoryCard grid: 3+2 layout.
// Replaces the TOP 10 block on the perf face. Click → propagates the
// subCategory id up to LibraryGallery, which sets filter state + scrolls to
// the search input.
//
// Pure presentational. No internal state. Counts are derived from the live
// library.meta + subCategory field per Sub-Task 1 rebucket.
//
// Layout: 3-column grid for DHT/Test/19-Nor row 1, 2-column grid for PCT/Fat
// row 2. On mobile (< md), each grid reflows to single-column.
const PerformanceCategoryCards = memo(function PerformanceCategoryCards({
  onCategorySelect,
  activeCategoryId,
}) {
  const { t, tr } = useLang()
  const { library } = useLibrary()
  const subCategories = library?.subCategories || []
  const meta = library?.meta || []

  if (subCategories.length === 0) return null

  const counts = subCategories.reduce((acc, c) => {
    acc[c.id] = meta.filter(m => m.subCategory === c.id).length
    return acc
  }, {})

  const order1 = ['dht', 'test', '19nor']
  const order2 = ['pct', 'fat']
  const row1 = order1.map(id => subCategories.find(c => c.id === id)).filter(Boolean)
  const row2 = order2.map(id => subCategories.find(c => c.id === id)).filter(Boolean)

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {row1.map(cat => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            count={counts[cat.id]}
            active={activeCategoryId === cat.id}
            t={t}
            tr={tr}
            onClick={() => onCategorySelect(cat.id)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {row2.map(cat => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            count={counts[cat.id]}
            active={activeCategoryId === cat.id}
            t={t}
            tr={tr}
            onClick={() => onCategorySelect(cat.id)}
          />
        ))}
      </div>
    </div>
  )
})

function CategoryCard({ cat, count, active, t, tr, onClick }) {
  const dark = darken(cat.accent, 0.25)
  const countLabel = (t('perf.cat.entryCount') || '{n} →').replace('{n}', count)

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative text-left rounded-2xl p-5 min-h-[110px] flex flex-col justify-between text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${cat.accent} 0%, ${dark} 100%)`,
        outline: active ? `2px solid rgba(255,255,255,0.9)` : 'none',
        outlineOffset: active ? '2px' : '0',
        boxShadow: active
          ? `0 0 24px ${cat.accent}66, 0 0 0 1px rgba(255,255,255,0.15)`
          : `0 1px 2px rgba(0,0,0,0.15), 0 8px 22px -16px ${cat.accent}55`,
      }}
      aria-pressed={active}
    >
      <div>
        <div className="font-bold text-[15px] leading-tight">
          {tr(cat.label)}
        </div>
        <div className="text-[10px] mt-1 opacity-85 leading-tight">
          {tr(cat.sub)}
        </div>
      </div>
      <div className="text-[10px] opacity-75 font-medium pt-2">
        {countLabel}
      </div>
    </button>
  )
}

function darken(hex, amount) {
  const h = hex.replace('#', '')
  const r = Math.max(0, parseInt(h.slice(0, 2), 16) * (1 - amount))
  const g = Math.max(0, parseInt(h.slice(2, 4), 16) * (1 - amount))
  const b = Math.max(0, parseInt(h.slice(4, 6), 16) * (1 - amount))
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
}

export default PerformanceCategoryCards
