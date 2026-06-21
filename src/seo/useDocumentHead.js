// Sets document.title + <meta name="description"> for the active route, per language.
// Entry titles are owned by the caller that has the loaded entry (EntryDetailRoute);
// home/library titles by App. Derived from existing data only – no new body copy. These
// appear only in the browser tab + search snippet, never in the page body.
import { useEffect } from 'react'

// Per-language head templates. HU values are verbatim copies of the Phase 1/2 strings
// (so HU output is byte-identical – the visual/meta baseline must not move).
const T = {
  hu: {
    defTitle: 'MolekulaX · Farmakológiai edukáció tudományos alapon',
    defDesc: 'MolekulaX · Farmakológiai edukáció. Peptidek, nootropikumok, teljesítményfokozók és gyógyszerek biológiai hatásai tudományos, forrás-igazolt alapon. Edukatív tartalom négy könyvtárban.',
    entrySuffix: (n) => `${n} – hatás, adagolás, biztonság | MolekulaX`,
    libTitle: (n) => `${n} | MolekulaX`,
    libDesc: (n) => `${n} – tudományosan dokumentált vegyületek, hatásmechanizmus, adagolás és biztonság, forrásokkal. | MolekulaX`,
    entryFallbackDesc: (n) => `${n} | MolekulaX`,
  },
  en: {
    defTitle: 'MolekulaX · Pharmacology education on a scientific basis',
    defDesc: 'MolekulaX · Pharmacology education. The biological effects of peptides, nootropics, performance enhancers and pharmaceuticals on a scientific, source-verified basis. Educational content across four libraries.',
    entrySuffix: (n) => `${n} – effects, dosage, safety | MolekulaX`,
    libTitle: (n) => `${n} | MolekulaX`,
    libDesc: (n) => `${n} – scientifically documented compounds: mechanism of action, dosage and safety, with sources. | MolekulaX`,
    entryFallbackDesc: (n) => `${n} | MolekulaX`,
  },
  pl: {
    defTitle: 'MolekulaX · Edukacja farmakologiczna na podstawach naukowych',
    defDesc: 'MolekulaX · Edukacja farmakologiczna. Biologiczne działanie peptydów, nootropików, środków wspomagających i leków na naukowych, potwierdzonych źródłowo podstawach. Treści edukacyjne w czterech bibliotekach.',
    entrySuffix: (n) => `${n} – działanie, dawkowanie, bezpieczeństwo | MolekulaX`,
    libTitle: (n) => `${n} | MolekulaX`,
    libDesc: (n) => `${n} – udokumentowane naukowo związki: mechanizm działania, dawkowanie i bezpieczeństwo, ze źródłami. | MolekulaX`,
    entryFallbackDesc: (n) => `${n} | MolekulaX`,
  },
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

// route: parsePath() result (carries `lang`). libraryName: localized library name (or null).
// entry: the loaded, localized entry { name, shortDesc } or null.
export function useDocumentHead(route, libraryName, entry) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    const t = T[route?.lang] || T.hu
    // soft-404: an unknown path is served the SPA shell (catch-all rewrite) and renders
    // the home, so mark it noindex to avoid indexing a garbage URL as a home duplicate.
    setMeta('robots', route?.kind === 'unknown'
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    if (route?.kind === 'entry') {
      // Owned by EntryDetailRoute once the entry is loaded. While loading (entry null),
      // do nothing so App's parallel call for the same route doesn't reset it.
      if (!entry) return
      const sd = typeof entry.shortDesc === 'string'
        ? entry.shortDesc
        : (entry.shortDesc?.[route.lang] || entry.shortDesc?.hu || '')
      document.title = t.entrySuffix(entry.name)
      setMeta('description', sd || t.entryFallbackDesc(entry.name))
      return
    }
    if (route?.kind === 'library' && libraryName) {
      document.title = t.libTitle(libraryName)
      setMeta('description', t.libDesc(libraryName))
      return
    }
    document.title = t.defTitle
    setMeta('description', t.defDesc)
  }, [route?.kind, route?.library, route?.id, route?.lang, libraryName, entry])
}
