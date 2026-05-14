// Top-level mockup view. Lives behind `#mockup` URL hash to keep the
// production gallery untouched. Shows:
//   - sticky toolbar with title + "back to site" CTA + tier-filter chips
//   - 3-column grid of MockupCards
//   - clicking a card opens MockupDetail (modal overlay)

import { useState, useMemo } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'
import MockupCard from './MockupCard'
import MockupDetail from './MockupDetail'
import { SAMPLE_PEPTIDES, TIER_META } from './sampleData'
import { useLang } from '../i18n/LanguageContext'

export default function PepPediaMockup() {
  const { tr } = useLang()
  const [selected, setSelected] = useState(null)
  const [tierFilter, setTierFilter] = useState(null)  // null = all

  const filtered = useMemo(() => {
    if (tierFilter == null) return SAMPLE_PEPTIDES
    return SAMPLE_PEPTIDES.filter(p => p.tier === tierFilter)
  }, [tierFilter])

  return (
    <div className="relative min-h-screen page-root">
      {/* Hero / toolbar */}
      <section className="relative px-4 sm:px-8 pt-14 pb-10 max-w-6xl mx-auto">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.location.hash = ''
          }}
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold mb-6 transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <ArrowLeft size={12} strokeWidth={2.5} />
          Vissza a fő oldalra
        </a>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{
            background: 'rgba(168,85,247,0.10)',
            border: '1px solid rgba(168,85,247,0.30)',
          }}
        >
          <Sparkles size={11} strokeWidth={2.5} style={{ color: '#a78bfa' }} />
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold" style={{ color: '#a78bfa' }}>
            Design preview — pep-pedia inspirált
          </span>
        </div>

        <h1
          className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-3 font-corporea"
          style={{ color: 'var(--text-primary)' }}
        >
          Peptid Adatlap <span className="italic" style={{ color: 'var(--accent)' }}>Mockup</span>
        </h1>
        <p className="text-sm max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Pep-pedia.org browse + detail dizájnlogikájának MolekulaX-szintű átirata.
          Kattints egy kártyára a teljes adatlap nézet megnyitásához. Ez egy{' '}
          <strong style={{ color: 'var(--text-secondary)' }}>elszigetelt preview</strong>
          {' '}— az éles oldal komponensei érintetlenek.
        </p>

        {/* Tier filter chips */}
        <div className="mt-7 flex flex-wrap gap-2">
          <button
            onClick={() => setTierFilter(null)}
            className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all"
            style={{
              background: tierFilter == null ? 'rgba(129,140,248,0.18)' : 'var(--tint-row)',
              border: `1px solid ${tierFilter == null ? 'var(--accent)' : 'var(--border-soft)'}`,
              color: tierFilter == null ? 'var(--accent)' : 'var(--text-muted)',
            }}
          >
            Összes ({SAMPLE_PEPTIDES.length})
          </button>
          {[5, 4, 3, 2, 1].map(lvl => {
            const meta = TIER_META[lvl]
            const count = SAMPLE_PEPTIDES.filter(p => p.tier === lvl).length
            const active = tierFilter === lvl
            return (
              <button
                key={lvl}
                onClick={() => setTierFilter(active ? null : lvl)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all"
                style={{
                  background: active ? meta.bg : 'var(--tint-row)',
                  border: `1px solid ${active ? meta.border : 'var(--border-soft)'}`,
                  color: active ? meta.color : 'var(--text-muted)',
                  boxShadow: active ? `0 0 14px ${meta.color}33` : 'none',
                  opacity: count === 0 ? 0.4 : 1,
                }}
                disabled={count === 0}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
                L{lvl} · {tr(meta.label)}
                {count > 0 && (
                  <span className="font-mono opacity-70">({count})</span>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-8 pb-24 max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
            Nincs ehhez a szinthez tartozó minta-peptid.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <MockupCard key={p.id} peptide={p} onOpen={setSelected} />
            ))}
          </div>
        )}

        {/* Spec / design notes — informative footer */}
        <div
          className="mt-16 p-6 rounded-2xl"
          style={{
            background: 'var(--tint-soft)',
            border: '1px solid var(--tint-soft-border)',
          }}
        >
          <p
            className="text-[10px] tracking-[0.28em] uppercase font-semibold mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Design jegyzetek
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs leading-relaxed"
              style={{ color: 'var(--text-muted)' }}>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Kártya:</strong> ribbon tier-jelölő, half-life + route info-strip, primer + sec chip, "Adatlap" CTA hint</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Hover:</strong> translateY(-6px) + accent + tier-color halo, gradient lighting intenzívebb</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Hero:</strong> nagy név textShadow accent-szín glow-val, FDA badge ikonnal, szinonimák külön chip-soron</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Mechanism:</strong> próza + pathway flow chip-ekkel és ArrowRight separator-okkal</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Dosing:</strong> 4 ikon-kártya (tipikus/range/freq/cycle) + horizontal timeline pulzáló dot-okkal</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Side effects:</strong> 3 severity-szín (common/mild/rare), 2 oszlopos grid</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>Stacks:</strong> peptid-név fő szerepben, accent-mono font, rövid rationale alatta</li>
            <li><strong style={{ color: 'var(--text-secondary)' }}>FAQ:</strong> accordion, nyitott elem accent-glow shadow-val emelkedik ki</li>
          </ul>
        </div>
      </section>

      {selected && (
        <MockupDetail
          peptide={selected}
          onClose={() => setSelected(null)}
          onSelectRelated={setSelected}
        />
      )}
    </div>
  )
}
