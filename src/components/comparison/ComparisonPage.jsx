import { useEffect, useState } from 'react'
import { ArrowLeft, GitCompareArrows } from 'lucide-react'
import { COMPARISONS, homePath } from '../../seo/urls'
import { loadEntry, listLibraries } from '../../data/libraries'
import { buildComparison } from './buildComparison'
import { navigate } from '../../router/location'
import Footer from '../Footer'

const DASH = '—'

// UI labels only (no body / medical prose — content is the juxtaposed entry data).
const CONTENT = {
  hu: {
    back: 'Vissza a főoldalra',
    whatIs: 'Mi ez',
    fullEntry: 'Teljes leírás',
    open: 'Megnyitás',
    intro: 'A táblázat a vegyületek legfontosabb adatait veti össze az adatlapjaik alapján. A részletekért nyisd meg az egyes vegyületek teljes leírását. Edukatív tartalom, nem orvosi tanács.',
  },
  en: {
    back: 'Back to home',
    whatIs: 'What it is',
    fullEntry: 'Full entry',
    open: 'Open',
    intro: 'The table compares the compounds’ key data from their entry pages. Open each compound’s full entry for details. Educational content, not medical advice.',
  },
  pl: {
    back: 'Powrót do strony głównej',
    whatIs: 'Co to jest',
    fullEntry: 'Pełny opis',
    open: 'Otwórz',
    intro: 'Tabela porównuje najważniejsze dane związków na podstawie ich kart. Otwórz pełny opis każdego związku, aby poznać szczegóły. Treści edukacyjne, nie porada medyczna.',
  },
}

// Crawlable internal link (real href, works JS-off + bots follow) that also does a smooth
// in-app SPA nav on a plain left-click; modifier/middle clicks fall through to the browser.
function navTo(e, to) {
  if (!to || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  navigate(to)
}

export default function ComparisonPage({ lang = 'hu', slug }) {
  const c = CONTENT[lang] || CONTENT.hu
  const cmp = COMPARISONS.find((x) => x.slug === slug)
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    if (!cmp) return
    let cancelled = false
    setEntries(null)
    Promise.all(cmp.members.map((m) => loadEntry(m.lib, m.id, lang).catch(() => null)))
      .then((res) => { if (!cancelled) setEntries(res) })
    return () => { cancelled = true }
  }, [cmp, lang])

  if (!cmp) return null

  // Chip label: the curated topic if present (required for cross-lib, which has no single
  // library name), else the shared library's name (all same-lib members share one).
  const sharedLibId = cmp.members.every((m) => m.lib === cmp.members[0].lib) ? cmp.members[0].lib : null
  const sharedLib = sharedLibId ? listLibraries().find((l) => l.id === sharedLibId) : null
  const libName = cmp.topic ? (cmp.topic[lang] || cmp.topic.hu) : (sharedLib ? (sharedLib.name[lang] || sharedLib.name.hu) : 'MolekulaX')
  const data = entries ? buildComparison(entries, cmp, lang) : null

  return (
    <div className="min-h-screen">
      <article className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <button
          onClick={() => navigate(homePath(lang))}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 text-gray-500 hover:text-[#818cf8] transition-colors"
        >
          <ArrowLeft size={14} /> {c.back}
        </button>

        <div className="inline-flex items-center gap-2 mb-4 text-[#818cf8]">
          <GitCompareArrows size={18} strokeWidth={2} />
          <span className="text-xs uppercase tracking-[0.2em]">{libName}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{cmp.title}</h1>
        <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>{c.intro}</p>

        {!data && (
          <div className="animate-pulse space-y-3" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 rounded-lg" style={{ background: 'rgba(129,140,248,0.06)' }} />
            ))}
          </div>
        )}

        {data && (
          <>
            {/* Desktop: side-by-side table */}
            <div className="hidden sm:block overflow-x-auto rounded-2xl glass">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-xs uppercase tracking-widest font-semibold align-bottom" style={{ color: 'var(--text-muted)' }}></th>
                    {data.members.map((m, i) => (
                      <th key={i} className="p-4 align-bottom" style={{ color: 'var(--text-primary)' }}>
                        {m
                          ? <a href={m.href} onClick={(e) => navTo(e, m.href)} className="text-lg font-bold tracking-wide hover:text-[#818cf8] transition-colors">{m.name}</a>
                          : <span className="text-lg font-bold">{DASH}</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[rgba(129,140,248,0.10)]">
                    <th className="p-4 text-xs uppercase tracking-widest font-semibold align-top whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{c.whatIs}</th>
                    {data.members.map((m, i) => (
                      <td key={i} className="p-4 text-sm leading-relaxed align-top" style={{ color: 'var(--text-secondary)' }}>{m?.shortDesc || DASH}</td>
                    ))}
                  </tr>
                  {data.rows.map((row, ri) => (
                    <tr key={ri} className="border-t border-[rgba(129,140,248,0.10)]">
                      <th className="p-4 text-xs uppercase tracking-widest font-semibold align-top whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{row.label}</th>
                      {row.values.map((v, vi) => (
                        <td key={vi} className="p-4 text-sm leading-relaxed align-top" style={{ color: 'var(--text-secondary)' }}>{v || DASH}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-[rgba(129,140,248,0.10)]">
                    <th className="p-4 text-xs uppercase tracking-widest font-semibold align-top whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{c.fullEntry}</th>
                    {data.members.map((m, i) => (
                      <td key={i} className="p-4 align-top">
                        {m?.href
                          ? <a href={m.href} onClick={(e) => navTo(e, m.href)} className="text-sm text-[#818cf8] hover:underline">{c.open} →</a>
                          : DASH}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile: stacked per-dimension cards (avoid horizontal scroll on 390px) */}
            <div className="sm:hidden space-y-4">
              {[{ label: c.whatIs, values: data.members.map((m) => m?.shortDesc || null) }, ...data.rows].map((row, ri) => (
                <div key={ri} className="rounded-2xl glass p-4">
                  <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>{row.label}</div>
                  <div className="space-y-2">
                    {data.members.map((m, vi) => (
                      <div key={vi} className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>{m?.name || DASH}</span>
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{row.values[vi] || DASH}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="rounded-2xl glass p-4">
                <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>{c.fullEntry}</div>
                <div className="flex flex-col gap-2">
                  {data.members.map((m, i) => m?.href && (
                    <a key={i} href={m.href} onClick={(e) => navTo(e, m.href)} className="text-sm text-[#818cf8] hover:underline">{m.name}: {c.open} →</a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </article>
      <Footer />
    </div>
  )
}
