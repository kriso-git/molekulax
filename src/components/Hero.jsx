import { Send } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const TELEGRAM_URL = 'https://t.me/molekulaxtra'
const TIKTOK_URL   = 'https://www.tiktok.com/@moleculextra'

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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-0 text-center relative">

      <div className="absolute top-0 left-0 right-0 overflow-hidden py-2.5 border-b border-[rgba(129,140,248,0.08)]"
           style={{ background: 'rgba(99,102,241,0.04)' }}>
        <div className="ticker-track whitespace-nowrap">
          {[0, 1].map(n => (
            <span key={n} className="inline-block">
              {tickerText.repeat(3).split('•').map((seg, i) => (
                <span key={i}>
                  <span className="text-[11px] text-gray-500 tracking-[0.2em] uppercase">{seg.trim()}</span>
                  <span className="text-[#818cf8] mx-4 opacity-50">•</span>
                </span>
              ))}
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

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-full
                     text-base md:text-lg transition-all duration-300 active:scale-95 tracking-widest
                     uppercase hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
        >
          <Send size={18} strokeWidth={2.5} />
          {t('hero.cta.telegram')}
        </a>

        <div className="mt-3">
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold
                       tracking-widest uppercase transition-all duration-300 active:scale-95
                       hover:shadow-[0_0_28px_rgba(255,255,255,0.08)]"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: '#e5e7eb',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
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
