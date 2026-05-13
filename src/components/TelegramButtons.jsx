import { Send, ArrowRight } from 'lucide-react'

// Shared HU/PL Telegram dual-CTA. Used in TelegramSection, Hero and Footer
// so the contact action stays identical everywhere on the page.
//
// Variants:
//   - "pill"   (default) — full-size pills with label + arrow (TelegramSection, Hero)
//   - "compact"           — tiny pills (footer-grade)

export const TELEGRAM_HU_URL = 'https://t.me/molekulaxtra'
export const TELEGRAM_PL_URL = 'https://t.me/naxxax'

export default function TelegramButtons({
  variant = 'pill',
  label = null,           // optional text rendered before the buttons
  align = 'start',        // 'start' | 'center'
  className = '',
}) {
  const compact = variant === 'compact'

  const alignCls =
    align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${alignCls} ${className}`}>
      {label && (
        <span className={`tracking-[0.25em] uppercase mr-1 ${
          compact ? 'text-[10px] text-[var(--text-muted)]' : 'text-xs text-[var(--text-secondary)]'
        }`}>
          {label}
        </span>
      )}

      <a
        href={TELEGRAM_HU_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram – Magyar tanácsadó (HU)"
        className={`group inline-flex items-center gap-2 rounded-full transition-all duration-300 font-semibold tracking-widest uppercase
          ${compact
            ? 'px-3 py-1 text-[10px]'
            : 'px-5 py-2.5 text-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]'
          }`}
        style={{
          border: '1px solid rgba(129,140,248,0.4)',
          background: 'rgba(99,102,241,0.1)',
          color: 'var(--text-primary)',
        }}
      >
        <Send size={compact ? 11 : 13} strokeWidth={2} />
        HU
        {!compact && (
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </a>

      <a
        href={TELEGRAM_PL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram – Polski doradca (PL)"
        className={`group inline-flex items-center gap-2 rounded-full transition-all duration-300 font-semibold tracking-widest uppercase
          ${compact
            ? 'px-3 py-1 text-[10px]'
            : 'px-5 py-2.5 text-sm hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]'
          }`}
        style={{
          border: '1px solid rgba(236,72,153,0.35)',
          background: 'rgba(236,72,153,0.08)',
          color: 'var(--text-primary)',
        }}
      >
        <Send size={compact ? 11 : 13} strokeWidth={2} />
        PL
        {!compact && (
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </a>
    </div>
  )
}
