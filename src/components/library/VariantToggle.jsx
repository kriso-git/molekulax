// Phase C — Multi-variant route toggle. Mounted in EntryDetail's Hero section
// when the entry has 2+ variants (administration routes). Clicks `replaceState`
// the URL hash to `#entry/<lib>/<id>/<routeId>` and dispatches a `hashchange`
// event so the App-level listener re-parses without history pollution.
//
// Visual: Indigo segmented-control, theme-aware via var(--tint-*) overlays
// (avoids the Light-Mode-Inline-Rgba-Trap — see [[Light_Mode_Inline_Rgba_Trap]]).
// a11y: role="tablist" container, role="tab" buttons, aria-selected; keyboard
// left/right cycle, plus an aria-live announce for screen readers.

import { useEffect, useRef } from 'react'
import { useLang } from '../../i18n/LanguageContext'

const INDIGO_PRIMARY = '#818cf8'
const INDIGO_SOFT = 'rgba(129,140,248,0.20)'
const INDIGO_BORDER = 'rgba(129,140,248,0.55)'
const INDIGO_GLOW = '0 0 12px rgba(129,140,248,0.40)'

export default function VariantToggle({ libraryId, entryId, availableVariants, activeVariantId }) {
  const { t, tr } = useLang()
  const tablistRef = useRef(null)
  const announceRef = useRef(null)

  if (!Array.isArray(availableVariants) || availableVariants.length < 2) return null

  const navigateTo = (routeId) => {
    if (typeof window === 'undefined') return
    if (routeId === activeVariantId) return
    window.history.replaceState(null, '', `#entry/${libraryId}/${entryId}/${routeId}`)
    window.dispatchEvent(new Event('hashchange'))
    const variant = availableVariants.find(v => v.routeId === routeId)
    const label = variant ? tr(variant.routeLabel) : routeId
    if (announceRef.current) {
      const tpl = t('variant.sr.changed') || 'Administration route changed: {label}'
      announceRef.current.textContent = tpl.replace('{label}', label)
    }
  }

  const onKeyDown = (e, idx) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' ? 1 : -1
    const nextIdx = (idx + dir + availableVariants.length) % availableVariants.length
    const buttons = tablistRef.current?.querySelectorAll('[role="tab"]')
    if (buttons?.[nextIdx]) {
      buttons[nextIdx].focus()
      navigateTo(availableVariants[nextIdx].routeId)
    }
  }

  return (
    <div className="mb-5">
      <div
        ref={tablistRef}
        role="tablist"
        aria-label={t('variant.toggle.aria') || 'Switch administration route'}
        className="inline-flex items-center gap-1 p-1 rounded-full"
        style={{
          background: 'var(--tint-soft)',
          border: '1px solid var(--tint-soft-border)',
        }}
      >
        {availableVariants.map((v, idx) => {
          const isActive = v.routeId === activeVariantId
          const label = tr(v.routeLabel) || v.routeId
          return (
            <button
              key={v.routeId}
              role="tab"
              aria-selected={isActive}
              aria-controls={`entry-body-${entryId}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => navigateTo(v.routeId)}
              onKeyDown={(e) => onKeyDown(e, idx)}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-bold transition-all"
              style={
                isActive
                  ? {
                      background: INDIGO_SOFT,
                      border: `1px solid ${INDIGO_BORDER}`,
                      color: INDIGO_PRIMARY,
                      boxShadow: INDIGO_GLOW,
                    }
                  : {
                      background: 'transparent',
                      border: '1px solid transparent',
                      color: 'var(--text-muted)',
                    }
              }
            >
              {label}
            </button>
          )
        })}
      </div>
      {/* SR-only live region for route-change announcements */}
      <div
        ref={announceRef}
        aria-live="polite"
        className="sr-only"
        style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}
      />
    </div>
  )
}
