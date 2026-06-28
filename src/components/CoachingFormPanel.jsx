import { ClipboardList, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// 1:1 coaching intake form ("Anamnézis Lap"). Sits BELOW the quick Telegram CTA as
// the deeper, data-based step: Telegram = quick question, this form = a detailed,
// personalized consultation prepared from the visitor's own goals/health/training data.
// External Google Form: opens in a new tab (CSP allows the navigation, not an iframe),
// so no embedding and no new fetch/script source. Kept brand-consistent (indigo accent)
// across every surface rather than themed per-compound.
export const COACHING_FORM_URL = 'https://docs.google.com/forms/d/19JlLHaWfiMm8nf--HMz9QxXeWaZ0jj7FGNAEmpfdR60/viewform'

export default function CoachingFormPanel({ variant = 'panel', className = '' }) {
  const { t } = useLang()

  // Inline one-liner for tight spots (gallery help banner).
  if (variant === 'inline') {
    return (
      <a
        href={COACHING_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${className}`}
        style={{ color: 'var(--accent)' }}
      >
        <ClipboardList size={13} strokeWidth={2} className="shrink-0" />
        <span className="underline-offset-4 group-hover:underline">{t('form.inline')}</span>
        <ArrowUpRight
          size={13}
          strokeWidth={2}
          className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    )
  }

  // Full panel: a recessed sub-block under the Telegram CTA, divided by a thin rule.
  return (
    <div className={`mt-6 pt-6 ${className}`} style={{ borderTop: '1px solid var(--border-accent)' }}>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
        {t('form.eyebrow')}
      </p>
      <div className="flex items-start gap-3">
        <ClipboardList size={20} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
        <div className="min-w-0">
          <h4 className="mb-1.5 text-base font-bold leading-snug md:text-lg" style={{ color: 'var(--text-primary)' }}>
            {t('form.title')}
          </h4>
          <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('form.body')}
          </p>
          <a
            href={COACHING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(129,140,248,0.35)]"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))', color: '#0b0b1e' }}
          >
            <ClipboardList size={15} strokeWidth={2.5} />
            {t('form.cta')}
            <ArrowUpRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <p className="mt-2.5 text-[11px]" style={{ color: 'var(--text-fainter)' }}>
            {t('form.note')}
          </p>
        </div>
      </div>
    </div>
  )
}
