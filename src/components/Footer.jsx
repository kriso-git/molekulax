import { Send, Mail } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/molekulaxtra'
const TIKTOK_URL   = 'https://www.tiktok.com/@moleculextra'
const EMAIL        = 'molekulaxtra@gmail.com'

function TikTokIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="py-12 px-4 mt-8 border-t border-[rgba(129,140,248,0.08)]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-sm">

        {/* Logo */}
        <span className="font-corporea text-white text-base tracking-[0.2em] uppercase">
          MolekulaX
        </span>

        {/* Contact links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-widest uppercase text-xs"
          >
            <Send size={13} strokeWidth={1.5} />
            Telegram
          </a>

          <span className="w-1 h-1 rounded-full bg-[rgba(129,140,248,0.3)]" />

          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-widest uppercase text-xs"
          >
            <TikTokIcon size={13} />
            TikTok
          </a>

          <span className="w-1 h-1 rounded-full bg-[rgba(129,140,248,0.3)]" />

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#818cf8] transition-colors duration-300 tracking-wide text-xs lowercase"
          >
            <Mail size={13} strokeWidth={1.5} />
            {EMAIL}
          </a>
        </div>

        <p className="text-gray-700 tracking-wide text-xs">
          © 2026 MolekulaX. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  )
}
