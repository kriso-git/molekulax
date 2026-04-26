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
  // Hungarian is the default. We only honour an explicit user choice from a
  // previous visit — the browser language is intentionally NOT used.
  if (typeof window === 'undefined') return 'hu'
  try {
    const stored = localStorage.getItem('molekulax-lang')
    if (stored && SUPPORTED.includes(stored)) return stored
  } catch {}
  return 'hu'
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
