// HeroPreview — Phase 9 LCP optimization. Renders the entry Hero h1 + tier
// chip immediately from LIBRARY_ENTRY_META, so the LCP element (entry name)
// fires as soon as the small meta chunk loads. Without this, the heavy
// EntryDetail.jsx chunk + per-entry chunk had to load before LCP could fire
// (3.1-3.4s on Slow 4G). With this, LCP fires at FCP+~200ms (~1.9-2.2s).
//
// Visual MUST match EntryDetail.jsx's Hero so the swap is seamless when the
// full EntryDetail mounts. Sync component, NO framer-motion / NO lazy imports
// — every byte counts on the LCP path.

import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/ThemeContext'
import { LEVEL_META } from '../../data/libraries/shared/researchLevel'

export default function HeroPreview({ meta, onClose }) {
  const { t, tr } = useLang()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const tier = meta.tier ?? 1
  const tierMeta = LEVEL_META[tier] || LEVEL_META[1]
  const tierColor = tierMeta.color
  const accent = meta.accentColor || '#00ff99'
  const isApproved = tier === 5

  return (
    <article
      className="relative mx-auto max-w-6xl pt-6"
      style={{ background: 'var(--bg-base)', minHeight: '100vh' }}
    >
      {/* Back button row */}
      <div className="flex items-center justify-between px-6 sm:px-10 mb-6">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] tracking-[0.22em] uppercase font-bold transition-all hover:gap-3"
          style={{
            background: 'var(--tint-medium)',
            border: '1px solid var(--tint-soft-border)',
            color: 'var(--text-primary)',
          }}
          aria-label={t('entry.back') || 'Vissza a könyvtárba'}
        >
          <ArrowLeft size={12} strokeWidth={2.5} />
          {t('entry.back') || 'Vissza a könyvtárba'}
        </button>
      </div>

      {/* Hero grid: matches EntryDetail layout */}
      <section className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 px-6 sm:px-10 pb-10">
        <div className="relative flex flex-col justify-center order-2 lg:order-1">
          {/* Chips row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold"
              style={{
                background: `${tierColor}1a`,
                border: `1px solid ${tierColor}55`,
                color: tierColor,
              }}
            >
              {isApproved && <ShieldCheck size={11} strokeWidth={2.5} />}
              {tr(tierMeta.label)}
            </span>
            {meta.atcCode && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-mono font-semibold"
                style={{
                  background: 'var(--tint-soft)',
                  border: '1px solid var(--tint-soft-border)',
                  color: 'var(--text-muted)',
                }}
              >
                ATC · {meta.atcCode}
              </span>
            )}
            {meta.prescriptionStatus && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-semibold"
                style={{
                  background: `${accent}1a`,
                  border: `1px solid ${accent}55`,
                  color: accent,
                }}
              >
                Rx · {tr(meta.prescriptionStatus)}
              </span>
            )}
          </div>

          {/* THE LCP ELEMENT — entry name h1, same gradient as EntryDetail.jsx */}
          <h1
            className="font-black tracking-tight leading-[1.1] pb-2 text-5xl sm:text-6xl lg:text-7xl mb-3"
            style={{
              whiteSpace: 'nowrap',
              background: isLight
                ? `linear-gradient(135deg, #0f172a 0%, ${accent} 55%, ${tierColor} 100%)`
                : `linear-gradient(135deg, #fff 0%, ${accent} 60%, ${tierColor} 100%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: isLight
                ? `drop-shadow(0 2px 8px ${accent}33)`
                : `drop-shadow(0 4px 24px ${accent}55)`,
            }}
          >
            {meta.name?.replace(/-/g, '‑')}
          </h1>

          {/* Short description from meta — gives the user readable content
              even before the full entry loads. */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {tr(meta.shortDesc) || ''}
          </p>
        </div>

        {/* Right side: simple accent ring placeholder (Holosphere is heavy
            and lives in the EntryDetail chunk; here we render a CSS-only
            stand-in that occupies the same visual space). */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${accent}22 0%, ${accent}08 40%, transparent 70%)`,
              border: `1px solid ${accent}44`,
              boxShadow: `inset 0 0 60px ${accent}22, 0 0 80px -20px ${accent}55`,
            }}
            aria-hidden="true"
          />
        </div>
      </section>
    </article>
  )
}
