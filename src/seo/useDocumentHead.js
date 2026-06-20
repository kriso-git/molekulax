// Sets document.title + <meta name="description"> for the active route (HU).
// Entry titles are owned by the caller that has the loaded entry (EntryDetailRoute);
// home/library titles by App. Derived from existing data only — no new copy. These
// appear only in the browser tab + search snippet, never in the page body.
import { useEffect } from 'react'

const DEFAULT_TITLE = 'MolekulaX · Farmakológiai edukáció tudományos alapon'
const DEFAULT_DESC = 'MolekulaX · Farmakológiai edukáció. Peptidek, nootropikumok, teljesítményfokozók és gyógyszerek biológiai hatásai tudományos, forrás-igazolt alapon. Edukatív tartalom négy könyvtárban.'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

// route: parsePath() result. libraryName: localized library name string (or null).
// entry: the loaded entry { name, shortDesc } or null.
export function useDocumentHead(route, libraryName, entry) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (route?.kind === 'entry') {
      // Owned by EntryDetailRoute once the entry is loaded. While loading (entry
      // null), do nothing so App's parallel call for the same route doesn't reset it.
      if (!entry) return
      const sd = typeof entry.shortDesc === 'string' ? entry.shortDesc : (entry.shortDesc?.hu || '')
      document.title = `${entry.name} – hatás, adagolás, biztonság | MolekulaX`
      setMeta('description', sd || `${entry.name} | MolekulaX`)
      return
    }
    if (route?.kind === 'library' && libraryName) {
      document.title = `${libraryName} | MolekulaX`
      setMeta('description', `${libraryName} – tudományosan dokumentált vegyületek, hatásmechanizmus, adagolás és biztonság, forrásokkal. | MolekulaX`)
      return
    }
    document.title = DEFAULT_TITLE
    setMeta('description', DEFAULT_DESC)
  }, [route?.kind, route?.library, route?.id, libraryName, entry])
}
