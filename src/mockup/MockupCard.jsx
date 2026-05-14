// Pep-pedia-inspired peptide card, MolekulaX skin.
// Compared to the live PeptideTile:
//   - structured info strip (Half-life · Route · Cycle) under the tier label
//   - one primary category chip + one secondary research-use chip
//   - "ribbon" gradient corner accent for tier visual hint
//   - hover: translateY lift + halo from accent + tier color

import { useLang } from '../i18n/LanguageContext'
import { TIER_META } from './sampleData'
import { ShieldCheck, Clock, Syringe, FlaskConical, ArrowUpRight } from 'lucide-react'

export default function MockupCard({ peptide, onOpen }) {
  const { tr } = useLang()
  const meta = TIER_META[peptide.tier]
  const accent = peptide.accentColor

  // Pull a short "Half-life" and "Route" from keyFacts for the info strip.
  const findFact = (matches) =>
    peptide.keyFacts.find(f => matches.some(m =>
      tr(f.label).toLowerCase().includes(m)
    ))
  const halfLife = findFact(['felezési', 'half-life', 'okres'])
  const route    = findFact(['adagolás', 'route', 'podanie'])

  return (
    <button
      onClick={() => onOpen(peptide)}
      className="mockup-card group relative flex flex-col gap-3 p-5 rounded-2xl text-left cursor-pointer"
      style={{
        border: '1px solid var(--tint-soft-border)',
        background: 'var(--tint-soft)',
        boxShadow:
          'inset 0 1px 0 0 rgba(255,255,255,0.05),' +
          ` 0 1px 2px rgba(0,0,0,0.10),` +
          ` 0 12px 28px -18px ${accent}40`,
      }}
      aria-label={peptide.name}
    >
      {/* Tier ribbon — diagonal accent at top-right corner */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-28 h-1.5 origin-top-right -translate-x-2 translate-y-4 rotate-45"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${meta.color}cc 50%, ${meta.color} 100%)`,
            boxShadow: `0 0 12px ${meta.color}88`,
          }}
        />
      </div>

      {/* Gradient lighting wash — top + bottom + diagonal */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-70 group-hover:opacity-100"
        style={{
          background:
            `radial-gradient(140% 80% at 50% 0%, ${accent}1f 0%, transparent 55%),` +
            ` radial-gradient(120% 70% at 50% 100%, ${accent}1a 0%, transparent 70%),` +
            ` linear-gradient(135deg, ${accent}10 0%, transparent 55%)`,
        }}
      />

      {/* Image — uniform square, overflow-hidden so SVG can't stretch tile */}
      <div
        className="w-full self-center relative z-10 overflow-hidden rounded-xl"
        style={{ aspectRatio: '1 / 1', background: 'var(--bg-tile)' }}
      >
        {peptide.image ? (
          <img
            src={peptide.image}
            alt={`${peptide.name} vial`}
            className="w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]"
            loading="lazy"
            draggable="false"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest uppercase"
            style={{ color: 'var(--text-fainter)' }}
          >
            no image
          </div>
        )}
        {/* Soft floor reflection */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1/2 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}55 0%, transparent 70%)`,
            filter: 'blur(3px)',
          }}
        />
      </div>

      {/* Name + tier dot */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <p className="font-bold text-base leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {peptide.name}
        </p>
        <span
          className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full"
          style={{ background: meta.color, boxShadow: `0 0 8px ${meta.color}aa` }}
          title={tr(meta.label)}
        />
      </div>

      {/* Tier label */}
      <p
        className="relative z-10 -mt-2 text-[10px] tracking-[0.18em] uppercase font-semibold flex items-center gap-1.5"
        style={{ color: meta.color }}
      >
        {peptide.tier === 5 && <ShieldCheck size={11} strokeWidth={2.5} />}
        {tr(meta.label)}
      </p>

      {/* Info strip — half-life + route micro-chips */}
      <div className="relative z-10 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px]">
        {halfLife && (
          <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            <Clock size={10} strokeWidth={2.2} />
            <span className="tracking-wide">{tr(halfLife.value)}</span>
          </span>
        )}
        {halfLife && route && (
          <span className="w-px h-3" style={{ background: 'var(--tint-medium-border)' }} />
        )}
        {route && (
          <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            <Syringe size={10} strokeWidth={2.2} />
            <span className="tracking-wide">{tr(route.value)}</span>
          </span>
        )}
      </div>

      {/* Primary category chip + first research-use chip */}
      <div className="relative z-10 flex flex-wrap gap-1.5 pt-1">
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide whitespace-nowrap"
          style={{
            background: `${accent}1a`,
            border: `1px solid ${accent}55`,
            color: accent,
          }}
        >
          {tr(peptide.category)}
        </span>
        {peptide.researchUses?.[0] && (
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide whitespace-nowrap"
            style={{
              background: 'var(--tint-row)',
              border: '1px solid var(--border-soft)',
              color: 'var(--text-muted)',
            }}
          >
            {tr(peptide.researchUses[0].label)}
          </span>
        )}
      </div>

      {/* CTA hint — "View" affordance, only intensifies on hover */}
      <div
        className="relative z-10 inline-flex items-center gap-1.5 mt-1 text-[10px] tracking-[0.22em] uppercase font-semibold opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ color: 'var(--accent)' }}
      >
        <FlaskConical size={10} strokeWidth={2.5} />
        <span>Adatlap</span>
        <ArrowUpRight
          size={11}
          strokeWidth={2.5}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>
    </button>
  )
}
