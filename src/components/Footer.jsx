import { Mail } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { pagePath, comparisonBasePath } from '../seo/urls'
import { navigate } from '../router/location'
import TelegramButtons from './TelegramButtons'

// Crawlable internal link (real href so bots follow it + it works JS-off) that also does a
// smooth in-app SPA nav on a plain left-click; modifier/middle clicks fall through to the
// browser so "open in new tab" still works.
function legalNav(e, to) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  navigate(to)
}

const TIKTOK_URL = 'https://www.tiktok.com/@moleculextra'
const EMAIL = 'molekulaxtra@gmail.com'

// Label for the footer legal-links nav landmark (distinct from the other navs on the page).
const LEGAL_NAV_LABEL = { hu: 'Jogi és összehasonlítás', en: 'Legal and comparison', pl: 'Prawne i porównanie' }

function TikTokIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

export default function Footer() {
  const { t, lang } = useLang()
  return (
    <footer className="py-12 px-4 mt-8 border-t border-[rgba(129,140,248,0.08)]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-sm">
        <span className="font-corporea text-white text-base tracking-[0.2em] uppercase">
          MolekulaX
        </span>

        {/* Telegram HU/PL, same component as Hero / TelegramSection */}
        <TelegramButtons variant="compact" label="Telegram" align="center" />

        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-widest uppercase text-xs">
              <TikTokIcon size={13} />
              TikTok
            </a>
          </li>

          <li aria-hidden="true" className="w-1 h-1 rounded-full bg-[rgba(129,140,248,0.3)]" />

          <li>
            <a href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-wide text-xs lowercase">
              <Mail size={13} strokeWidth={1.5} />
              {EMAIL}
            </a>
          </li>
        </ul>

        <nav aria-label={LEGAL_NAV_LABEL[lang] || LEGAL_NAV_LABEL.hu}>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <a href={pagePath('methodology', lang)} onClick={(e) => legalNav(e, pagePath('methodology', lang))}
                className="text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-widest uppercase text-xs">
                {t('footer.legal.methodology')}
              </a>
            </li>

            <li aria-hidden="true" className="w-1 h-1 rounded-full bg-[rgba(129,140,248,0.3)]" />

            <li>
              <a href={pagePath('privacy', lang)} onClick={(e) => legalNav(e, pagePath('privacy', lang))}
                className="text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-widest uppercase text-xs">
                {t('footer.legal.privacy')}
              </a>
            </li>

            <li aria-hidden="true" className="w-1 h-1 rounded-full bg-[rgba(129,140,248,0.3)]" />

            <li>
              <a href={comparisonBasePath(lang)} onClick={(e) => legalNav(e, comparisonBasePath(lang))}
                className="text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-widest uppercase text-xs">
                {t('footer.legal.compare')}
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-gray-700 tracking-wide text-xs">
          {t('footer.rights')}
        </p>

        <p className="max-w-2xl text-center text-gray-700 text-[11px] leading-relaxed">
          {t('footer.disclosure')}
        </p>
        <p className="max-w-2xl text-center text-gray-700 text-[11px] leading-relaxed">
          {t('footer.notice')}
        </p>
      </div>
    </footer>
  )
}
