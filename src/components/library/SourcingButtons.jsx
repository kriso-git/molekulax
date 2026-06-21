import { ArrowRight, Tag } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'
import { getSourcing } from '../../data/sourcingAvailability'

/**
 * Per-entry "where to buy" cards, shown below the Telegram CTA.
 *
 * Renders one card per partner shop confirmed to carry this exact compound (see
 * data/sourcingAvailability.js – every link is verified). Each link already has
 * the referral baked in; shops that need a checkout code (Driada) surface the
 * coupon. When no partner carries the compound, nothing renders – so the
 * absence of a card means "not available".
 */
export default function SourcingButtons({ entryId, variantId, className = '' }) {
  const { t } = useLang()
  const { library } = useLibrary()
  const sources = getSourcing(library?.id, entryId, variantId)
  if (sources.length === 0) return null

  return (
    <div className={className}>
      <div
        className="text-xs tracking-[0.22em] uppercase mb-3"
        style={{ color: 'var(--text-secondary)' }}
      >
        {t('entry.sourcing.label') || 'Beszerezhető'}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {sources.map((s) => (
          <a
            key={s.key}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            aria-label={`${s.name}${s.coupon ? `, -10% ${t('entry.sourcing.coupon')}: ${s.coupon}` : ''}`}
            className="group flex items-center gap-4 p-5 rounded-2xl glass no-underline transition-all duration-300 hover:border-[rgba(129,140,248,0.35)] hover:bg-[rgba(99,102,241,0.07)]"
          >
            <span
              className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl"
              style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.18)' }}
            >
              <img
                src={s.logo}
                alt={`${s.name} logo`}
                className="max-h-10 max-w-10 object-contain"
                loading="lazy"
                draggable="false"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </span>

            <div className="flex flex-col min-w-0">
              <span className="font-bold text-lg tracking-wide" style={{ color: 'var(--text-primary)' }}>
                {s.name}
              </span>
              {s.coupon ? (
                <span
                  className="inline-flex items-center gap-1.5 mt-1 text-xs font-bold uppercase tracking-wider"
                  style={{ color: '#818cf8' }}
                >
                  <Tag size={12} strokeWidth={2.5} className="shrink-0" />
                  {`-10% ${t('entry.sourcing.coupon')}: ${s.coupon}`}
                </span>
              ) : (
                <span className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                  {t('entry.sourcing.product')}
                </span>
              )}
            </div>

            <ArrowRight
              size={20}
              className="ml-auto shrink-0 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
              style={{ color: '#818cf8' }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
