// Top-level mockup view. Lives behind `#mockup` URL hash to keep the
// production gallery layout intact. Renders the LIVE PeptideGallery
// (so users see the real peptide library exactly as on the main site),
// but swaps the detail modal to the new MockupDetail design via the
// `DetailComponent` prop. A small adapter shapes live peptide data
// into MockupDetail's expected schema.

import { ArrowLeft, Sparkles } from 'lucide-react'
import PeptideGallery from '../components/PeptideGallery'
import MockupDetail from './MockupDetail'
import { adaptLivePeptide } from './adaptLivePeptide'

// Bridge: receives live peptide from PeptideGallery, adapts it, renders
// the mockup detail.
function MockupDetailBridge({ peptide, onClose }) {
  if (!peptide) return null
  const adapted = adaptLivePeptide(peptide)
  return <MockupDetail peptide={adapted} onClose={onClose} />
}

export default function PepPediaMockup() {
  return (
    <div className="relative min-h-screen page-root">
      {/* Preview-mode banner */}
      <section className="relative px-4 sm:px-8 pt-10 pb-2 max-w-6xl mx-auto">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.location.hash = '' }}
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold mb-4 transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <ArrowLeft size={12} strokeWidth={2.5} />
          Vissza a fő oldalra
        </a>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-2xl"
          style={{
            background: 'rgba(168,85,247,0.08)',
            border: '1px solid rgba(168,85,247,0.30)',
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
              style={{ background: 'rgba(168,85,247,0.18)', color: '#a78bfa' }}
            >
              <Sparkles size={13} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-xs font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
                Design preview — pep-pedia inspirált adatlap
              </p>
              <p className="text-[11px] leading-snug mt-0.5" style={{ color: 'var(--text-muted)' }}>
                A peptid könyvtár éles UI-ja, de a kártyára kattintva az új gazdag MockupDetail nyílik meg.
              </p>
            </div>
          </div>
          <p className="text-[10px] tracking-[0.22em] uppercase font-semibold shrink-0" style={{ color: '#a78bfa' }}>
            #mockup
          </p>
        </div>
      </section>

      {/* Live PeptideGallery, MockupDetail-lel beragasztva */}
      <PeptideGallery DetailComponent={MockupDetailBridge} />
    </div>
  )
}
