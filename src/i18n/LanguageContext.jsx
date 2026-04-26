import { createContext, useContext, useEffect, useState } from 'react'
import { UI } from './uiStrings'

const LanguageContext = createContext({
  lang: 'hu',
  setLang: () => {},
  t: (k) => k,
  tr: (v) => v,
})

const SUPPORTED = ['hu', 'en', 'pl']

function detectInitial() {
  if (typeof window === 'undefined') return 'hu'
  const stored = localStorage.getItem('molekulax-lang')
  if (stored && SUPPORTED.includes(stored)) return stored
  const nav = (navigator.language || 'hu').slice(0, 2).toLowerCase()
  return SUPPORTED.includes(nav) ? nav : 'hu'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)

  useEffect(() => {
    try { localStorage.setItem('molekulax-lang', lang) } catch {}
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => {
    const dict = UI[lang] || UI.hu
    return dict[key] ?? UI.hu[key] ?? key
  }

  // tr: localizes a value that may be a plain string OR an object {hu, en, pl}
  const tr = (value) => {
    if (value == null) return value
    if (typeof value === 'string') return value
    if (typeof value === 'object' && (value.hu || value.en || value.pl)) {
      return value[lang] ?? value.hu ?? value.en ?? value.pl ?? ''
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
export const SUPPORTED_LANGS = SUPPORTED
