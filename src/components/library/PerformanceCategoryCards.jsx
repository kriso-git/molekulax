import { memo } from 'react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'
import { useTilt } from './entry-detail/shared'
import { hasCardMotif } from './cardMotifMap'
import MotifVideo from './MotifVideo'

// Performance-library-only CategoryCard grid: 3+2 layout.
// Replaces the TOP 10 block on the perf face. Click → propagates the
// subCategory id up to LibraryGallery, which sets filter state + scrolls to
// the library accordion section.
//
// Visual language matches EntryDetail's GlassCard: 3D mouse-tilt (perspective
// + rotateX/Y based on cursor position, max 5deg) + glass-dark background +
// accent-tinted border + top-left accent radial wash + inner translateZ(24px)
// parallax for content. The accent color (per chemistry-class) drives the wash
// + glow + text accent.
//
// Layout: 3-column grid for DHT/Test/19-Nor row 1, 2-column grid for PCT/Fat
// row 2. On mobile (< md), each grid reflows to single-column. The tilt effect
// requires mousemove events so it gracefully degrades to a static glass card
// on touch devices.
const ORDER_1 = ['dht', 'test', '19nor']
const ORDER_2 = ['pct', 'fat']

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
  const row1 = ORDER_1.flatMap(id => {
    const cat = subCategories.find(c => c.id === id)
    return cat ? [cat] : []
  })
  const row2 = ORDER_2.flatMap(id => {
    const cat = subCategories.find(c => c.id === id)
    return cat ? [cat] : []
  })

  return (
    <div className="mb-10 [perspective:1000px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
  const accent = cat.accent
  const tiltRef = useTilt(5)
  const countLabel = (t('perf.cat.entryCount') || '{n} →').replace('{n}', count)
  const showMotif = hasCardMotif('performance', cat.id)

  return (
    <button
      ref={tiltRef}
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden text-left rounded-2xl p-6 min-h-[150px] flex flex-col justify-between transition-transform duration-300 cursor-pointer will-change-transform"
      style={{
        background: 'linear-gradient(135deg, var(--tint-soft), var(--tint-soft))',
        border: `1px solid ${active ? `${accent}88` : 'var(--tint-soft-border)'}`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: active
          ? `0 24px 60px -28px ${accent}aa, inset 0 1px 0 var(--tint-medium), 0 0 0 1px ${accent}55, 0 0 32px ${accent}33`
          : `0 24px 60px -28px ${accent}55, inset 0 1px 0 var(--tint-medium)`,
        transformStyle: 'preserve-3d',
      }}
      aria-pressed={active}
    >
      {/* Motif loop backdrop (relevance per chemistry class) — kept subtle behind
          a dark gradient so the label/count stay fully legible. */}
      {showMotif && (
        <>
          <MotifVideo libId="performance" catId={cat.id} label={tr(cat.label)} className="absolute inset-0 w-full h-full object-cover opacity-[0.55]" />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `linear-gradient(160deg, rgba(var(--scrim-rgb),0.55) 0%, rgba(var(--scrim-rgb),0.74) 60%, rgba(var(--scrim-rgb),0.9) 100%)`,
          }} />
        </>
      )}

      {/* Top-left accent radial wash — matches GlassCard pattern */}
      <div
        className={`absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-500 ${
          active ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'
        }`}
        style={{
          background: `radial-gradient(120% 80% at 0% 0%, ${accent}33, transparent 50%)`,
        }}
      />

      {/* Bottom-right accent glow halo — adds depth + chemistry-identity */}
      <div
        className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full pointer-events-none transition-all duration-500 opacity-30 group-hover:opacity-60 blur-3xl"
        style={{ background: accent }}
      />

      {/* Header section, lifted in 3D */}
      <div className="relative" style={{ transform: 'translateZ(24px)' }}>
        <div
          className="font-bold text-lg md:text-xl leading-tight tracking-tight"
          style={{
            color: 'var(--text-primary)',
            textShadow: `0 0 24px ${accent}66`,
          }}
        >
          {tr(cat.label)}
        </div>
        <div
          className="text-[11px] mt-2 leading-snug font-medium tracking-wide"
          style={{ color: 'var(--text-muted)' }}
        >
          {tr(cat.sub)}
        </div>
      </div>

      {/* Footer row, lifted further in 3D for parallax separation */}
      <div
        className="relative flex items-end justify-between gap-2 pt-3"
        style={{ transform: 'translateZ(32px)' }}
      >
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase"
          style={{
            background: `${accent}1f`,
            border: `1px solid ${accent}55`,
            color: accent,
            boxShadow: `0 0 12px ${accent}44`,
          }}
        >
          {countLabel}
        </div>
        <div
          className="text-[14px] tracking-[0.2em] uppercase font-semibold transition-transform duration-300 group-hover:translate-x-1.5"
          style={{ color: accent, textShadow: `0 0 12px ${accent}aa` }}
        >
          →
        </div>
      </div>
    </button>
  )
}

export default PerformanceCategoryCards
