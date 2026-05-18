// AffiliateButton — PCTZONE affiliate coupon pill placed at the top-left of
// the page (NOT pinned to the viewport). Sits inside .page-root via
// position:absolute so it scrolls away with the Hero — the user wanted it
// "just placed nicely at the top under the moving label", not following the
// scroll. Localised label via useLang().

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
  const copy = COPY[lang] || COPY.hu

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${copy.title} — ${copy.sub}`}
      className="hidden md:inline-flex group items-center gap-2.5 pl-2.5 pr-3.5 py-2 rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_rgba(0,255,153,0.45)]"
      style={{
        // top:60 clears the Hero's horizontal ticker bar (top-0 + py-2.5 + ~14px text)
        // so the pill sits cleanly UNDER it on the page, not overlapping.
        position: 'absolute',
        top: 60,
        left: 12,
        zIndex: 30,
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
}
