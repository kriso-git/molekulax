import { useState, useEffect, useRef, useMemo } from 'react'
import { PEPTIDES, TOP10_ORDER } from '../data/peptides'
import { CATEGORIES, getPeptideCategories } from '../data/peptideCategories'
import { useLang } from '../i18n/LanguageContext'
import { ChevronDown, Search, Star, SlidersHorizontal, X } from 'lucide-react'
import VialImage from './VialImage'
import PeptideModal from './PeptideModal'

// Single tile component — reused by both Top 10 and All Peptides sections.
function PeptideTile({ peptide, featured, onSelect, t, tr }) {
  const shortDesc = tr(peptide.shortDesc) || ''
  const isPlaceholder = !peptide.image

  return (
    <button
      onClick={() => onSelect(peptide)}
      className="group relative flex flex-col items-center gap-4 p-5 rounded-2xl glass
                 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.03)]
                 transition-all duration-300 cursor-pointer text-left"
      aria-label={peptide.name}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${peptide.accentColor}18 0%, transparent 70%)`,
        }}
      />

      {featured && (
        <div
          className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase"
          style={{
            background: `${peptide.accentColor}22`,
            color: peptide.accentColor,
            border: `1px solid ${peptide.accentColor}55`,
            boxShadow: `0 0 10px ${peptide.accentColor}25`,
          }}
        >
          <Star size={9} strokeWidth={2.5} fill="currentColor" />
          {t('gal.top10.badge')}
        </div>
      )}

      {isPlaceholder && (
        <div
          className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-[8px] tracking-[0.15em] uppercase text-gray-500"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px dashed rgba(255,255,255,0.12)',
          }}
        >
          {t('gal.all.placeholder')}
        </div>
      )}

      <div className="w-40 h-56 sm:w-44 sm:h-64 relative z-10 group-hover:scale-105 transition-transform duration-300">
        <VialImage
          accentColor={peptide.accentColor}
          name={peptide.name}
          uid={peptide.id}
          image={peptide.image}
        />
      </div>

      <div className="relative z-10 text-center">
        <p className="text-white font-bold text-sm leading-tight group-hover:text-white transition-colors">
          {peptide.name}
        </p>
        <p
          className="text-[10px] mt-1 leading-snug line-clamp-2"
          style={{ color: peptide.accentColor, opacity: 0.8 }}
        >
          {shortDesc.split('—')[0].trim()}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 rounded-full transition-all duration-300"
        style={{ background: peptide.accentColor, opacity: 0.5 }}
      />
    </button>
  )
}

export default function PeptideGallery() {
  const [selected, setSelected] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState([])      // category id list
  const sectionRef = useRef(null)
  const allSectionRef = useRef(null)
  const { t, tr, lang } = useLang()

  const top10 = useMemo(
    () => TOP10_ORDER.map(id => PEPTIDES.find(p => p.id === id)).filter(Boolean),
    []
  )

  // Apply both name search + category filter.
  const filteredAll = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PEPTIDES.filter(p => {
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
      return true
    })
  }, [query, lang, activeFilters])

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

  const clearFilters = () => setActiveFilters([])

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
                {/* Search + Filter toggle row */}
                <div className="mb-4 flex flex-col sm:flex-row gap-3">
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
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>

                  <button
                    onClick={() => setShowFilters(v => !v)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                    style={{
                      background: showFilters || activeFilters.length > 0
                        ? 'rgba(129,140,248,0.12)'
                        : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${
                        showFilters || activeFilters.length > 0
                          ? 'rgba(129,140,248,0.5)'
                          : 'rgba(255,255,255,0.08)'
                      }`,
                    }}
                    aria-expanded={showFilters}
                  >
                    <SlidersHorizontal size={14} />
                    {t('gal.filter.toggle')}
                    {activeFilters.length > 0 && (
                      <span
                        className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                        style={{ background: '#818cf8', color: '#0a0a1c' }}
                      >
                        {activeFilters.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Filter chips panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    showFilters ? 'grid-rows-[1fr] mb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="p-5 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[#818cf8] text-[11px] font-semibold tracking-[0.25em] uppercase">
                          {t('gal.filter.title')}
                        </p>
                        {activeFilters.length > 0 && (
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
                            background: activeFilters.length === 0 ? 'rgba(129,140,248,0.18)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${activeFilters.length === 0 ? '#818cf8' : 'rgba(255,255,255,0.08)'}`,
                            color: activeFilters.length === 0 ? '#818cf8' : '#9ca3af',
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
                                background: active ? `${cat.accent}22` : 'rgba(255,255,255,0.03)',
                                border: `1px solid ${active ? cat.accent : 'rgba(255,255,255,0.08)'}`,
                                color: active ? cat.accent : '#9ca3af',
                                boxShadow: active ? `0 0 12px ${cat.accent}30` : 'none',
                              }}
                            >
                              {tr(cat.label)}
                            </button>
                          )
                        })}
                      </div>

                      {activeFilters.length > 0 && (
                        <p className="text-gray-600 text-[10px] mt-3 tracking-wider">
                          {activeFilters.length} {t('gal.filter.activeCount')} · {filteredAll.length} {t('gal.all.count')}
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
