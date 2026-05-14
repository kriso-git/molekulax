import { useState, useEffect, useRef, useMemo } from 'react'
import { PEPTIDES, TOP10_ORDER } from '../data/peptides'
import { CATEGORIES, getPeptideCategories } from '../data/peptideCategories'
import { getResearchLevel, getLevelMeta, LEVEL_META, makeSortComparator } from '../data/researchLevel'
import { useLang } from '../i18n/LanguageContext'
import {
  ChevronDown, Search, Star, SlidersHorizontal, X,
  ArrowDownAZ, ArrowUpAZ, BarChart3,
} from 'lucide-react'
import VialImage from './VialImage'
import PeptideModal from './PeptideModal'
import TelegramButtons from './TelegramButtons'

// ── Tile ─────────────────────────────────────────────────────────────────────
// New layout (inspired by pep-pedia.org/browse):
//   ▸ image (no hover scale)
//   ▸ peptide name + research-level dot
//   ▸ tier label
//   ▸ "Research Uses" eyebrow
//   ▸ category chips
// Card lifts on hover via translateY; gradient lighting from accent colour
// provides the soft 3D feel.

function PeptideTile({ peptide, featured, onSelect, t, tr, lang }) {
  const isPlaceholder = !peptide.image
  const level = getResearchLevel(peptide)
  const levelMeta = getLevelMeta(level)
  const catIds = getPeptideCategories(peptide.id)
  const accent = peptide.accentColor

  return (
    <button
      onClick={() => onSelect(peptide)}
      className="group peptide-tile relative flex flex-col gap-4 p-5 rounded-2xl text-left cursor-pointer"
      style={{
        border: '1px solid var(--tint-soft-border)',
        background: 'var(--tint-soft)',
        // Gradient lighting + subtle 3D — the inset highlight gives a "lit
        // edge" while the outer shadow grounds the card on the surface.
        boxShadow:
          `inset 0 1px 0 0 rgba(255,255,255,0.04),` +
          ` 0 1px 2px rgba(0,0,0,0.10),` +
          ` 0 8px 24px -16px ${accent}33`,
      }}
      aria-label={peptide.name}
    >
      {/* Accent gradient wash — always visible, intensifies on hover. */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{
          background:
            `radial-gradient(140% 80% at 50% 0%, ${accent}1a 0%, transparent 55%),` +
            ` linear-gradient(135deg, ${accent}10 0%, transparent 55%)`,
        }}
      />

      {/* TOP 10 badge */}
      {featured && (
        <div
          className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase"
          style={{
            background: `${accent}22`,
            color: accent,
            border: `1px solid ${accent}55`,
            boxShadow: `0 0 10px ${accent}25`,
          }}
        >
          <Star size={9} strokeWidth={2.5} fill="currentColor" />
          {t('gal.top10.badge')}
        </div>
      )}

      {/* Placeholder badge for peptides without a real photo */}
      {isPlaceholder && (
        <div
          className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-[8px] tracking-[0.15em] uppercase"
          style={{
            background: 'var(--tint-soft)',
            border: '1px dashed var(--tint-medium-border)',
            color: 'var(--text-muted)',
          }}
        >
          {t('gal.all.placeholder')}
        </div>
      )}

      {/* Image — no scale on hover; only the parent tile lifts. */}
      <div className="w-40 h-56 sm:w-44 sm:h-64 self-center relative z-10">
        <VialImage
          accentColor={accent}
          name={peptide.name}
          uid={peptide.id}
          image={peptide.image}
        />
      </div>

      {/* Name + research-level dot */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <p className="font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
          {peptide.name}
        </p>
        <span
          aria-label={tr(levelMeta.label)}
          title={tr(levelMeta.label)}
          className="shrink-0 mt-1 w-2.5 h-2.5 rounded-full"
          style={{
            background: levelMeta.color,
            boxShadow: `0 0 8px ${levelMeta.color}88`,
          }}
        />
      </div>

      {/* Tier label */}
      <p
        className="relative z-10 -mt-3 text-[10px] tracking-[0.18em] uppercase font-semibold"
        style={{ color: levelMeta.color }}
      >
        {tr(levelMeta.label)}
      </p>

      {/* Research Uses chips */}
      <div className="relative z-10 flex flex-col gap-2">
        <p
          className="text-[9px] tracking-[0.25em] uppercase font-semibold"
          style={{ color: 'var(--text-fainter)' }}
        >
          {t('gal.uses')}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {catIds.length === 0 ? (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-mono tracking-wide"
              style={{
                background: 'var(--tint-row)',
                border: '1px solid var(--border-soft)',
                color: 'var(--text-muted)',
              }}
            >
              —
            </span>
          ) : (
            catIds.map(catId => {
              const cat = CATEGORIES.find(c => c.id === catId)
              if (!cat) return null
              return (
                <span
                  key={catId}
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide whitespace-nowrap"
                  style={{
                    background: `${cat.accent}1a`,
                    border: `1px solid ${cat.accent}55`,
                    color: cat.accent,
                  }}
                >
                  {tr(cat.label)}
                </span>
              )
            })
          )}
        </div>
      </div>
    </button>
  )
}

// ── Sort segmented control ───────────────────────────────────────────────────
function SortControl({ value, onChange, t }) {
  const items = [
    { id: 'az',    label: t('gal.sort.az'),    Icon: ArrowDownAZ },
    { id: 'za',    label: t('gal.sort.za'),    Icon: ArrowUpAZ },
    { id: 'level', label: t('gal.sort.level'), Icon: BarChart3 },
  ]
  return (
    <div
      className="inline-flex p-1 rounded-xl gap-1"
      style={{
        background: 'var(--tint-row)',
        border: '1px solid var(--border-soft)',
      }}
      role="radiogroup"
      aria-label={t('gal.sort.title')}
    >
      {items.map(({ id, label, Icon }) => {
        const active = value === id
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
            style={{
              background: active ? 'rgba(129,140,248,0.18)' : 'transparent',
              border: `1px solid ${active ? 'rgba(129,140,248,0.45)' : 'transparent'}`,
              color: active ? 'var(--accent)' : 'var(--text-muted)',
            }}
          >
            <Icon size={13} strokeWidth={2.2} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function PeptideGallery() {
  const [selected, setSelected] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState([])      // category id list
  const [levelFilters, setLevelFilters] = useState([])        // research level numbers
  const [sortMode, setSortMode] = useState('az')              // 'az' | 'za' | 'level'
  const sectionRef = useRef(null)
  const allSectionRef = useRef(null)
  const { t, tr, lang } = useLang()

  const top10 = useMemo(
    () => TOP10_ORDER.map(id => PEPTIDES.find(p => p.id === id)).filter(Boolean),
    []
  )

  // Apply search + category filter + research-level filter, then sort.
  const filteredAll = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matched = PEPTIDES.filter(p => {
      if (q) {
        const name = p.name.toLowerCase()
        const short = (tr(p.shortDesc) || '').toLowerCase()
        if (!name.includes(q) && !short.includes(q)) return false
      }
      if (activeFilters.length > 0) {
        const cats = getPeptideCategories(p.id)
        const hasMatch = activeFilters.some(f => cats.includes(f))
        if (!hasMatch) return false
      }
      if (levelFilters.length > 0) {
        const lvl = getResearchLevel(p)
        if (!levelFilters.includes(lvl)) return false
      }
      return true
    })
    return matched.sort(makeSortComparator(sortMode))
  }, [query, lang, activeFilters, levelFilters, sortMode])

  useEffect(() => {
    const handler = (e) => {
      const peptide = PEPTIDES.find(p => p.id === e.detail.id)
      if (!peptide) return
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => setSelected(peptide), 500)
    }
    window.addEventListener('open-peptide', handler)
    return () => window.removeEventListener('open-peptide', handler)
  }, [])

  const toggleExpanded = () => {
    setExpanded(prev => {
      const next = !prev
      if (next) {
        setTimeout(() => {
          allSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 200)
      }
      return next
    })
  }

  const toggleFilter = (catId) => {
    setActiveFilters(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    )
  }
  const toggleLevel = (lvl) => {
    setLevelFilters(prev =>
      prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]
    )
  }
  const clearFilters = () => { setActiveFilters([]); setLevelFilters([]) }
  const totalActive = activeFilters.length + levelFilters.length

  return (
    <>
      <section ref={sectionRef} className="py-28 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
              {t('gal.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
              {t('gal.title')}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              {t('gal.subtitle')}
            </p>
          </div>

          {/* ── Block A: Top 10 ─────────────────────────────────────────────── */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
            <h3 className="text-[#818cf8] text-[11px] font-semibold tracking-[0.3em] uppercase flex items-center gap-2">
              <Star size={11} strokeWidth={2.5} className="text-[#818cf8]" fill="currentColor" />
              {t('gal.top10.title')}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {top10.map(peptide => (
              <PeptideTile
                key={peptide.id}
                peptide={peptide}
                featured
                onSelect={setSelected}
                t={t}
                tr={tr}
                lang={lang}
              />
            ))}
          </div>

          {/* ── Block B: All peptides accordion ────────────────────────────── */}
          <div ref={allSectionRef} className="mt-20">
            <button
              onClick={toggleExpanded}
              className="group w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl glass
                         hover:border-[rgba(255,255,255,0.18)] transition-all duration-300"
              aria-expanded={expanded}
              aria-controls="all-peptides-panel"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.3)' }}
                >
                  <ChevronDown
                    size={18}
                    className={`text-[#818cf8] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-white text-base md:text-lg font-bold italic">
                    {t('gal.all.title')}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {PEPTIDES.length} {t('gal.all.count')}
                  </p>
                </div>
              </div>

              <span className="text-[#818cf8] text-[11px] tracking-[0.25em] uppercase">
                {expanded ? t('gal.all.hide') : t('gal.all.show')}
              </span>
            </button>

            <div
              id="all-peptides-panel"
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                expanded ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">

                {/* ── Help callout — Telegram CTA above the search ─────── */}
                <div
                  className="mb-5 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(129,140,248,0.10) 0%, rgba(236,72,153,0.08) 100%)',
                    border: '1px solid rgba(129,140,248,0.30)',
                    boxShadow: '0 0 30px rgba(129,140,248,0.10)',
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-base md:text-lg font-semibold italic leading-snug"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t('gal.help.title')}
                    </p>
                    <p
                      className="text-xs mt-1 leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {t('gal.help.body')}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <TelegramButtons variant="pill" align="start" />
                  </div>
                </div>

                {/* ── Search + Sort + Filter toggle row ────────────────── */}
                <div className="mb-4 flex flex-col lg:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search
                      size={15}
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={t('gal.all.search')}
                      className="w-full pl-11 pr-4 py-3 rounded-xl text-white text-sm placeholder:text-gray-600
                                 focus:outline-none focus:border-[#818cf8]/50 transition-colors"
                      style={{
                        background: 'var(--tint-row)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <SortControl value={sortMode} onChange={setSortMode} t={t} />

                  <button
                    onClick={() => setShowFilters(v => !v)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                    style={{
                      background: showFilters || totalActive > 0
                        ? 'rgba(129,140,248,0.12)'
                        : 'var(--tint-row)',
                      border: `1px solid ${
                        showFilters || totalActive > 0
                          ? 'rgba(129,140,248,0.5)'
                          : 'var(--border-soft)'
                      }`,
                      color: 'var(--text-primary)',
                    }}
                    aria-expanded={showFilters}
                  >
                    <SlidersHorizontal size={14} />
                    {t('gal.filter.toggle')}
                    {totalActive > 0 && (
                      <span
                        className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                        style={{ background: '#818cf8', color: '#0a0a1c' }}
                      >
                        {totalActive}
                      </span>
                    )}
                  </button>
                </div>

                {/* Filter chips panel — categories + research level */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    showFilters ? 'grid-rows-[1fr] mb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="p-5 rounded-xl flex flex-col gap-5"
                      style={{
                        background: 'var(--tint-soft)',
                        border: '1px solid var(--tint-soft-border)',
                      }}
                    >
                      {/* Category row */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[#818cf8] text-[11px] font-semibold tracking-[0.25em] uppercase">
                            {t('gal.filter.title')}
                          </p>
                          {totalActive > 0 && (
                            <button
                              onClick={clearFilters}
                              className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-[10px] tracking-widest uppercase"
                            >
                              <X size={11} />
                              {t('gal.filter.clear')}
                            </button>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={clearFilters}
                            className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
                            style={{
                              background: totalActive === 0 ? 'rgba(129,140,248,0.18)' : 'var(--tint-row)',
                              border: `1px solid ${totalActive === 0 ? 'var(--accent)' : 'var(--border-soft)'}`,
                              color: totalActive === 0 ? 'var(--accent)' : 'var(--text-muted)',
                            }}
                          >
                            {t('gal.filter.all')}
                          </button>

                          {CATEGORIES.map((cat) => {
                            const active = activeFilters.includes(cat.id)
                            return (
                              <button
                                key={cat.id}
                                onClick={() => toggleFilter(cat.id)}
                                className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
                                style={{
                                  background: active ? `${cat.accent}22` : 'var(--tint-row)',
                                  border: `1px solid ${active ? cat.accent : 'var(--border-soft)'}`,
                                  color: active ? cat.accent : 'var(--text-muted)',
                                  boxShadow: active ? `0 0 12px ${cat.accent}30` : 'none',
                                }}
                              >
                                {tr(cat.label)}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Research level row */}
                      <div>
                        <p className="text-[#818cf8] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">
                          {t('gal.filter.level')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[5, 4, 3, 2, 1].map(lvl => {
                            const active = levelFilters.includes(lvl)
                            const meta = LEVEL_META[lvl]
                            return (
                              <button
                                key={lvl}
                                onClick={() => toggleLevel(lvl)}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
                                style={{
                                  background: active ? meta.bg : 'var(--tint-row)',
                                  border: `1px solid ${active ? meta.border : 'var(--border-soft)'}`,
                                  color: active ? meta.color : 'var(--text-muted)',
                                  boxShadow: active ? `0 0 12px ${meta.color}30` : 'none',
                                }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ background: meta.color }}
                                />
                                L{lvl} · {tr(meta.label)}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {totalActive > 0 && (
                        <p className="text-gray-600 text-[10px] tracking-wider">
                          {totalActive} {t('gal.filter.activeCount')} · {filteredAll.length} {t('gal.all.count')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* All peptides grid */}
                {filteredAll.length === 0 ? (
                  <div className="text-center py-16 text-gray-500 text-sm">
                    {t('gal.all.empty')}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {filteredAll.map(peptide => (
                      <PeptideTile
                        key={peptide.id}
                        peptide={peptide}
                        featured={false}
                        onSelect={setSelected}
                        t={t}
                        tr={tr}
                        lang={lang}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {selected && (
        <PeptideModal peptide={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
