import { Send, ArrowRight } from 'lucide-react'

// Shared Telegram CTA (single advisor, HU channel). Used in TelegramSection,
// Hero and Footer so the contact action stays identical everywhere.
//
// Variants:
//   - "pill"   (default) – full-size pill with label + arrow (TelegramSection, Hero)
//   - "compact"           – tiny pill (footer-grade)

export const TELEGRAM_HU_URL = 'https://t.me/molekulaxtra'

export default function TelegramButtons({
  variant = 'pill',
  label = null,           // optional text rendered before the button
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
        aria-label="Telegram – tanácsadó"
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
        Telegram
        {!compact && (
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </a>
    </div>
  )
}
