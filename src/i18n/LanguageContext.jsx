import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { UI_HU } from './uiStrings-hu'

const LanguageContext = createContext({
  lang: 'hu',
  setLang: () => {},
  t: (k) => k,
  tr: (v) => v,
  loadingLang: false,
})

const SUPPORTED = ['hu', 'en', 'pl']

function detectInitial() {
  // The URL is the single source of truth for language: an /en or /pl prefix => that
  // language, otherwise Hungarian (the root is HU). We deliberately do NOT read a stored
  // preference here: on a prefix-less URL it would disagree with the (HU) path and the
  // prerendered HU HTML, then get force-corrected by LanguageRouteSync -> a first-paint
  // flicker. Language is chosen by navigating to the localized URL. Browser language is
  // intentionally not used.
  if (typeof window === 'undefined') return 'hu'
  const m = window.location.pathname.match(/^\/(en|pl)(\/|$)/)
  return m ? m[1] : 'hu'
}

// Phase 11: per-locale dynamic-import. HU is sync-bundled as the default;
// EN/PL fetch on first switch and stay cached in-memory + sessionStorage.
const localeCache = new Map([['hu', UI_HU]])

async function loadLocale(lang) {
  if (localeCache.has(lang)) return localeCache.get(lang)
  try {
    const sessionKey = `molekulax:ui:${lang}`
    const cached = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(sessionKey) : null
    if (cached) {
      const parsed = JSON.parse(cached)
      localeCache.set(lang, parsed)
      return parsed
    }
  } catch {}
  const mod = await import(`./uiStrings-${lang}.js`)
  const obj = mod[`UI_${lang.toUpperCase()}`]
  localeCache.set(lang, obj)
  try {
    sessionStorage.setItem(`molekulax:ui:${lang}`, JSON.stringify(obj))
  } catch {}
  return obj
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)
  const [uiMap, setUiMap] = useState(UI_HU)
  const [loadingLang, setLoadingLang] = useState(false)

  useEffect(() => {
    try { localStorage.setItem('molekulax-lang', lang) } catch {}
    document.documentElement.lang = lang
    if (localeCache.has(lang)) {
      setUiMap(localeCache.get(lang))
      return
    }
    let cancelled = false
    setLoadingLang(true)
    loadLocale(lang)
      .then(obj => {
        if (cancelled) return
        setUiMap(obj)
        setLoadingLang(false)
      })
      .catch(err => {
        if (cancelled) return
        console.error('Failed to load locale', lang, err)
        setLoadingLang(false)
      })
    return () => { cancelled = true }
  }, [lang])

  const t = useCallback((key) => uiMap[key] ?? UI_HU[key] ?? key, [uiMap])

  // tr: localizes a value that may be a plain string OR an object {hu, en, pl}.
  // Entry data still ships full triplets (entries-data locale-split deferred
  // to a later Phase per spec §11 backlog) — tr handles both shapes.
  const tr = useCallback((value) => {
    if (value == null) return value
    if (typeof value === 'string') return value
    if (typeof value === 'object' && (value.hu || value.en || value.pl)) {
      return value[lang] ?? value.hu ?? value.en ?? value.pl ?? ''
    }
    return value
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t, tr, loadingLang }),
    [lang, loadingLang, t, tr]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
export const SUPPORTED_LANGS = SUPPORTED
