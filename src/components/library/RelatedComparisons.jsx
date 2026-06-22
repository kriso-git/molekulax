import { GitCompareArrows } from 'lucide-react'
import { comparisonsForEntry, comparisonPath } from '../../seo/urls'
import { navigate } from '../../router/location'

// "Related comparisons" chip row on an entry page: every published comparison this compound
// is a member of, as crawlable + SPA links. Renders nothing when the entry is in none.
// Compact inline layout (label + chips on one wrapping line, no full-width box) so a single
// small chip does not sit in a large empty band. Surfaces comparisons contextually.
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
    <section className="relative z-30 px-6 sm:px-10 py-4">
      {/* Compact, content-width panel (NOT full-width) so it reads as a distinct, visible block
          instead of bare text floating in the dark gap between the hero and the body. The
          relative z-index lifts it above the hero's decorative (pointer-events-none) overlays
          that otherwise visually dim this band. */}
      <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 max-w-full rounded-xl px-4 py-3" style={{ background: 'rgba(129,140,248,0.11)', border: '1px solid rgba(129,140,248,0.32)' }}>
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-2 shrink-0" style={{ color: '#c7d2fe' }}>
          <GitCompareArrows size={15} strokeWidth={2.25} aria-hidden="true" />
          {HEADING[lang] || HEADING.hu}
        </h2>
        {cmps.map((cmp) => {
          const href = comparisonPath(cmp.slug, lang)
          return (
            <a
              key={cmp.slug}
              href={href}
              onClick={(e) => navTo(e, href)}
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] no-underline transition-all duration-300 hover:bg-[rgba(129,140,248,0.22)]"
              style={{ background: 'rgba(129,140,248,0.16)', border: '1px solid rgba(129,140,248,0.42)', color: 'var(--text-primary)' }}
            >
              <GitCompareArrows size={13} strokeWidth={2} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: '#818cf8' }} />
              <span className="font-semibold tracking-wide group-hover:text-[#a5b4fc] transition-colors">{cmp.title}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
