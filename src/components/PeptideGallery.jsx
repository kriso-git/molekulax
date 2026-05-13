import { useState, useEffect, useRef, useMemo } from 'react'
import { PEPTIDES, TOP10_ORDER } from '../data/peptides'
import { useLang } from '../i18n/LanguageContext'
import { ChevronDown, Search, Star } from 'lucide-react'
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
      {/* Hover accent glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${peptide.accentColor}18 0%, transparent 70%)`,
        }}
      />

      {/* TOP 10 badge — visible only for featured tiles */}
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

      {/* Placeholder badge — for entries without a real vial image */}
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

      {/* Vial visual — enlarged for the new bigger size */}
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

      {/* Underline accent on hover */}
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
  const [query, setQuery] = useState('')
  const sectionRef = useRef(null)
  const allSectionRef = useRef(null)
  const { t, tr, lang } = useLang()

  // Top 10 — preserve the exact order given by the marketing brief.
  const top10 = useMemo(
    () => TOP10_ORDER.map(id => PEPTIDES.find(p => p.id === id)).filter(Boolean),
    []
  )

  // All peptides — full library; filtered by name + short description (current language).
  const filteredAll = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return PEPTIDES
    return PEPTIDES.filter(p => {
      const name = p.name.toLowerCase()
      const short = (tr(p.shortDesc) || '').toLowerCase()
      return name.includes(q) || short.includes(q)
    })
  }, [query, lang])

  // External "open-peptide" events still scroll + open as before.
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

  return (
    <>
      <section ref={sectionRef} className="py-28 px-4">
        <div className="max-w-6xl mx-auto">

          {/* ── Section header ────────────────────────────────────────────── */}
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

          {/* ── Block A: Top 10 — fixed 2×5 grid in marketing order ────────── */}
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

            {/* Accordion panel — animated open */}
            <div
              id="all-peptides-panel"
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                expanded ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                {/* Search input */}
                <div className="relative mb-6">
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
