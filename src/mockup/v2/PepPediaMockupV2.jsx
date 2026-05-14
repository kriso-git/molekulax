// Second mockup environment — accessible via #mockup2.
// Reuses the LIVE PeptideGallery (so the listing UI stays identical), but
// swaps the detail modal to MockupDetailV2 (the new "Spatial Bento Lab"
// design). The v1 mockup at #mockup remains unchanged.

import { ArrowLeft, Sparkles } from 'lucide-react'
import PeptideGallery from '../../components/PeptideGallery'
import MockupDetailV2 from './MockupDetailV2'
import { adaptLivePeptide } from '../adaptLivePeptide'
import { useLang } from '../../i18n/LanguageContext'

function MockupDetailV2Bridge({ peptide, onClose }) {
  if (!peptide) return null
  const adapted = adaptLivePeptide(peptide)
  return <MockupDetailV2 peptide={adapted} onClose={onClose} />
}

export default function PepPediaMockupV2() {
  const { t } = useLang()
  return (
    <div className="relative min-h-screen page-root">
      <section className="relative px-4 sm:px-8 pt-10 pb-2 max-w-6xl mx-auto">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.location.hash = '' }}
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-semibold mb-4 transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <ArrowLeft size={12} strokeWidth={2.5} />
          {t('mockup.back') || 'Vissza a fő oldalra'}
        </a>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(34,211,238,0.10), rgba(167,139,250,0.10))',
            border: '1px solid rgba(34,211,238,0.30)',
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
              style={{ background: 'rgba(34,211,238,0.18)', color: '#67e8f9' }}
            >
              <Sparkles size={13} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-xs font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
                {t('mockup.v2.preview.title') || 'Spatial Bento Lab — Experimental Preview'}
              </p>
              <p className="text-[11px] leading-snug mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {t('mockup.v2.preview.body') || '2026 trendekkel: 3D mouse-tilt, holografikus gyűrű, particle-mező, lab-terminál. Kattints egy peptidre.'}
              </p>
            </div>
          </div>
          <p className="text-[10px] tracking-[0.22em] uppercase font-semibold shrink-0" style={{ color: '#67e8f9' }}>
            #mockup2
          </p>
        </div>
      </section>

      <PeptideGallery DetailComponent={MockupDetailV2Bridge} />
    </div>
  )
}
