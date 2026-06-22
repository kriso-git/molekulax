import { GitCompareArrows } from 'lucide-react'
import { comparisonsForEntry, comparisonPath } from '../../seo/urls'
import { navigate } from '../../router/location'

// "Related comparisons" chip row on an entry page: every published comparison this compound
// is a member of, as crawlable + SPA links. Renders nothing when the entry is in none, so it
// never shows an empty band. Surfaces comparisons contextually (not only via the footer link).
const HEADING = {
  hu: 'Kapcsolódó összehasonlítások',
  en: 'Related comparisons',
  pl: 'Powiązane porównania',
}

function navTo(e, to) {
  if (!to || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  navigate(to)
}

export default function RelatedComparisons({ libraryId, entryId, lang = 'hu' }) {
  if (!libraryId || !entryId) return null
  const cmps = comparisonsForEntry(libraryId, entryId)
  if (!cmps.length) return null

  return (
    <section className="px-6 sm:px-10 py-4">
      <div className="rounded-2xl glass p-5">
        <h2 className="text-xs uppercase tracking-[0.2em] mb-3 inline-flex items-center gap-2" style={{ color: '#818cf8' }}>
          <GitCompareArrows size={15} strokeWidth={2} aria-hidden="true" />
          {HEADING[lang] || HEADING.hu}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {cmps.map((cmp) => {
            const href = comparisonPath(cmp.slug, lang)
            return (
              <a
                key={cmp.slug}
                href={href}
                onClick={(e) => navTo(e, href)}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm no-underline transition-all duration-300"
                style={{ background: 'rgba(129,140,248,0.10)', border: '1px solid rgba(129,140,248,0.30)', color: 'var(--text-primary)' }}
              >
                <GitCompareArrows size={14} strokeWidth={2} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: '#818cf8' }} />
                <span className="font-semibold tracking-wide group-hover:text-[#a5b4fc] transition-colors">{cmp.title}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
