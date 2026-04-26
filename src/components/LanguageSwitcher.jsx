import { useEffect, useRef, useState } from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { useLang, SUPPORTED_LANGS } from '../i18n/LanguageContext'

const LANG_META = {
  hu: { label: 'Magyar', short: 'HU', flag: '🇭🇺' },
  en: { label: 'English', short: 'EN', flag: '🇬🇧' },
  pl: { label: 'Polski', short: 'PL', flag: '🇵🇱' },
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const esc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', esc)
    }
  }, [])

  const meta = LANG_META[lang] || LANG_META.hu

  return (
    <div ref={ref} className="fixed top-3 right-3 z-[60]">
      <button
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-1.5 pl-2.5 pr-2 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200"
        style={{
          background: 'rgba(10,10,30,0.7)',
          border: '1px solid rgba(129,140,248,0.25)',
          backdropFilter: 'blur(10px)',
          color: '#e5e7eb',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(129,140,248,0.55)'; e.currentTarget.style.boxShadow = '0 0 18px rgba(129,140,248,0.18)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(129,140,248,0.25)'; e.currentTarget.style.boxShadow = 'none' }}
        aria-label="Language"
      >
        <Globe size={12} className="text-[#818cf8]" />
        <span className="leading-none">{meta.short}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 min-w-[150px] rounded-xl overflow-hidden"
          style={{
            background: 'rgba(8,8,24,0.95)',
            border: '1px solid rgba(129,140,248,0.25)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.6), 0 0 30px rgba(129,140,248,0.12)',
          }}
        >
          {SUPPORTED_LANGS.map((code) => {
            const m = LANG_META[code]
            const active = code === lang
            return (
              <button
                key={code}
                onClick={() => { setLang(code); setOpen(false) }}
                className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 text-left transition-colors duration-150"
                style={{
                  color: active ? '#818cf8' : '#d1d5db',
                  background: active ? 'rgba(129,140,248,0.08)' : 'transparent',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent' }}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{m.flag}</span>
                  <span className="text-xs font-semibold tracking-wider">{m.label}</span>
                </span>
                {active && <Check size={13} className="text-[#818cf8]" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
