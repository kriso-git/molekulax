import { ShoppingBag, ArrowRight, Tag } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'
import { getSourcing } from '../../data/sourcingAvailability'

/**
 * Per-entry "where to buy" pills, shown next to the Telegram CTA.
 *
 * Renders one pill per partner shop that is confirmed to carry this exact
 * compound (see data/sourcingAvailability.js — every link is verified). Each
 * link already has the referral baked in; for shops that need a checkout code
 * (Driada) the coupon is surfaced on the pill. When no partner carries the
 * compound, nothing renders — so the absence of a button means "not available".
 */
export default function SourcingButtons({ entryId, className = '' }) {
  const { t } = useLang()
  const { library } = useLibrary()
  const sources = getSourcing(library?.id, entryId)
  if (sources.length === 0) return null

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <span
        className="tracking-[0.22em] uppercase text-[11px] mr-0.5"
        style={{ color: 'var(--text-secondary)' }}
      >
        {t('entry.sourcing.label') || 'Beszerezhető'}
      </span>

      {sources.map((s) => (
        <a
          key={s.key}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`${s.name}${s.coupon ? ` – ${t('entry.sourcing.coupon')}: ${s.coupon}` : ''}`}
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_22px_rgba(129,140,248,0.3)]"
          style={{
            border: '1px solid rgba(129,140,248,0.4)',
            background: 'rgba(99,102,241,0.1)',
            color: 'var(--text-primary)',
          }}
        >
          <ShoppingBag size={14} strokeWidth={2} className="shrink-0" />
          {s.name}
          {s.coupon && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
              style={{ background: 'rgba(129,140,248,0.16)', color: '#818cf8' }}
            >
              <Tag size={9} strokeWidth={2.5} className="shrink-0" />
              {t('entry.sourcing.coupon')}: {s.coupon}
            </span>
          )}
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      ))}
    </div>
  )
}
