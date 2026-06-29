import { ClipboardList } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import TelegramButtons from './TelegramButtons'
import { COACHING_FORM_URL } from './CoachingFormPanel'

const TIKTOK_URL = 'https://www.tiktok.com/@moleculextra'

function TikTokIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

export default function Hero() {
  const { t } = useLang()
  const tickerText = t('hero.ticker')
  // Clean item list (no empties), so the marquee renders exactly ONE bullet after
  // every item – including at the loop seam (the old split/repeat left a trailing
  // empty segment → a doubled "• •" where the track wrapped).
  const tickerItems = tickerText.split('•').map(s => s.trim()).filter(Boolean)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-0 text-center relative">

      <div className="absolute top-0 left-0 right-0 overflow-hidden py-2.5 border-b border-[rgba(129,140,248,0.08)]"
           style={{ background: 'rgba(99,102,241,0.04)' }}>
        <div className="ticker-track whitespace-nowrap">
          {[0, 1].map(n => (
            <span key={n} className="inline-block">
              {Array.from({ length: 3 }).flatMap((_, r) =>
                tickerItems.map((item, i) => (
                  <span key={`${r}-${i}`}>
                    <span className="text-[11px] text-gray-500 tracking-[0.2em] uppercase">{item}</span>
                    <span className="text-[#818cf8] mx-4 opacity-50">•</span>
                  </span>
                ))
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-6">
          <span className="w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
          <span className="text-xs text-gray-400 tracking-[0.25em] uppercase">
            {t('hero.badge')}
          </span>
        </div>

        <p className="text-[11px] text-gray-600 tracking-[0.18em] uppercase mb-10">
          {t('hero.tagline')}
        </p>

        <h1 className="mb-8">
          <span className="block font-corporea text-white text-5xl md:text-7xl lg:text-8xl tracking-widest">
            MolekulaX
          </span>
          <span className="block font-sans font-semibold italic text-[#818cf8] accent-glow text-2xl md:text-4xl lg:text-5xl mt-3 leading-snug">
            {t('hero.subtitle')}
          </span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          {t('hero.body.start')}
          <span className="text-gray-200">{t('hero.body.bold')}</span>
          {t('hero.body.end')}
        </p>

        <TelegramButtons label={t('hero.cta.telegram')} align="center" />

        {/* 1:1 Coaching - the premium offer, surfaced on arrival as the only solid-accent
            CTA on the page so it draws the eye while staying on-brand (indigo -> violet). */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <a
            href={COACHING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold
                       tracking-widest uppercase transition-all duration-300 active:scale-95
                       hover:-translate-y-0.5 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
              color: '#0b0b14',
              boxShadow: '0 0 30px rgba(129,140,248,0.40)',
            }}
          >
            <ClipboardList size={16} strokeWidth={2.2} />
            {t('hero.cta.coaching')}
          </a>
          <span className="text-[11px] text-gray-500 tracking-wide">{t('hero.cta.coachingSub')}</span>
        </div>

        <div className="mt-5">
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold
                       tracking-widest uppercase transition-all duration-300 active:scale-95
                       hover:shadow-[0_0_28px_rgba(255,255,255,0.08)]"
            style={{
              background: 'var(--tint-medium)',
              border: '1px solid var(--tint-medium-border)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--tint-strong)'
              e.currentTarget.style.borderColor = 'var(--border-accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--tint-medium)'
              e.currentTarget.style.borderColor = 'var(--tint-medium-border)'
            }}
          >
            <TikTokIcon size={15} />
            {t('hero.cta.tiktok')}
          </a>
        </div>
      </div>

      <div className="mt-1 flex flex-col items-center gap-1 opacity-20">
        <div className="w-px h-6 bg-gradient-to-b from-transparent to-[#818cf8]" />
      </div>
    </section>
  )
}
