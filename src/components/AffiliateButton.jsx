// AffiliateButton — static top-left pill linking to the PCTZONE affiliate
// coupon. Mounted via React Portal directly under document.body so no parent
// CSS (overflow:hidden, transform, filter, etc. — any of which can create a
// new containing block for position:fixed) can drag it with scroll. The
// inline `position: fixed` is also set explicitly to override the class chain.

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Tag } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const COPY = {
  hu: { title: 'MOLEKULAX kupon', sub: 'Kedvezmény a PCTZONE-on →' },
  en: { title: 'MOLEKULAX coupon', sub: 'Discount at PCTZONE →' },
  pl: { title: 'Kupon MOLEKULAX', sub: 'Zniżka w PCTZONE →' },
}

const HREF = 'https://pctzone.su/?coupon=molekulax'

export default function AffiliateButton() {
  const { lang } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || typeof document === 'undefined') return null
  const copy = COPY[lang] || COPY.hu

  const button = (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${copy.title} — ${copy.sub}`}
      className="hidden md:inline-flex group items-center gap-2.5 pl-2.5 pr-3.5 py-2 rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_rgba(0,255,153,0.45)]"
      style={{
        position: 'fixed',
        top: 12,
        left: 12,
        zIndex: 60,
        background: 'linear-gradient(135deg, rgba(0,255,153,0.10), rgba(99,102,241,0.06))',
        border: '1px solid rgba(0,255,153,0.35)',
        boxShadow: '0 0 12px rgba(0,255,153,0.18), inset 0 0 8px rgba(0,255,153,0.06)',
      }}
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 26,
          height: 26,
          background: 'rgba(0,255,153,0.18)',
          border: '1px solid rgba(0,255,153,0.55)',
          color: '#00ff99',
          boxShadow: '0 0 8px rgba(0,255,153,0.5)',
        }}
      >
        <Tag size={13} strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span
          className="text-[11px] font-bold tracking-[0.18em] uppercase"
          style={{ color: '#00ff99', textShadow: '0 0 6px rgba(0,255,153,0.5)' }}
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

  return createPortal(button, document.body)
}
