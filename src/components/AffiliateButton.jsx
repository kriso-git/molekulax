// AffiliateButton — PCTZONE affiliate coupon pill pinned to the top-left of
// the viewport. At the very top it sits below the announcement ribbon
// (top:60) so it doesn't overlap; once the user scrolls past the ribbon it
// glides up to the corner (top:12) with a smooth CSS transition. Uses the
// site's indigo/purple UI palette (#818cf8 / #6366f1), matching
// ThemeSwitcher + LanguageSwitcher + Hero's pulsing dot. Chemical green is
// reserved for actual chemistry content (molecule placeholders).

import { useEffect, useState } from 'react'
import { Tag } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const COPY = {
  hu: { title: 'MOLEKULAX kupon', sub: 'Kedvezmény a PCTZONE-on →' },
  en: { title: 'MOLEKULAX coupon', sub: 'Discount at PCTZONE →' },
  pl: { title: 'Kupon MOLEKULAX', sub: 'Zniżka w PCTZONE →' },
}

const HREF = 'https://pctzone.su/?coupon=molekulax'
const INDIGO = '#818cf8'
// Ribbon is ~40px tall; switch once the user has clearly scrolled past it.
const SCROLL_THRESHOLD = 40

export default function AffiliateButton() {
  const { lang } = useLang()
  const copy = COPY[lang] || COPY.hu
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${copy.title} — ${copy.sub}`}
      className="hidden md:inline-flex group items-center gap-2.5 pl-2.5 pr-3.5 py-2 rounded-full backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_rgba(129,140,248,0.45)]"
      style={{
        position: 'fixed',
        top: scrolled ? 12 : 60,
        left: 12,
        zIndex: 30,
        background: 'linear-gradient(135deg, rgba(129,140,248,0.10), rgba(99,102,241,0.06))',
        border: '1px solid rgba(129,140,248,0.35)',
        boxShadow: '0 0 12px rgba(129,140,248,0.18), inset 0 0 8px rgba(129,140,248,0.06)',
      }}
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 26,
          height: 26,
          background: 'rgba(129,140,248,0.18)',
          border: '1px solid rgba(129,140,248,0.55)',
          color: INDIGO,
          boxShadow: '0 0 8px rgba(129,140,248,0.5)',
        }}
      >
        <Tag size={13} strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span
          className="text-[11px] font-bold tracking-[0.18em] uppercase"
          style={{ color: INDIGO, textShadow: '0 0 6px rgba(129,140,248,0.5)' }}
        >
          {copy.title}
        </span>
        <span
          className="text-[10px] tracking-wide"
          style={{ color: 'var(--text-secondary, #cbd5e1)' }}
        >
          {copy.sub}
        </span>
      </span>
    </a>
  )
}
