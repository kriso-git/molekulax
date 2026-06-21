import { ArrowLeft, ArrowRight, GitCompareArrows } from 'lucide-react'
import { COMPARISONS, comparisonPath, homePath } from '../../seo/urls'
import { listLibraries } from '../../data/libraries'
import { navigate } from '../../router/location'
import Footer from '../Footer'

const CONTENT = {
  hu: { back: 'Vissza a főoldalra', title: 'Összehasonlítások', intro: 'Hasonló vegyületek legfontosabb adatai egymás mellett, a meglévő adatlapok alapján. Edukatív tartalom, nem orvosi tanács.' },
  en: { back: 'Back to home', title: 'Comparisons', intro: 'Key data of related compounds side by side, based on their existing entry pages. Educational content, not medical advice.' },
  pl: { back: 'Powrót do strony głównej', title: 'Porównania', intro: 'Najważniejsze dane powiązanych związków obok siebie, na podstawie ich kart. Treści edukacyjne, nie porada medyczna.' },
}

function navTo(e, to) {
  if (!to || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  navigate(to)
}

export default function ComparisonIndex({ lang = 'hu' }) {
  const c = CONTENT[lang] || CONTENT.hu
  const libs = listLibraries()
  const libName = (id) => { const l = libs.find((x) => x.id === id); return l ? (l.name[lang] || l.name.hu) : '' }

  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <button
          onClick={() => navigate(homePath(lang))}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 text-gray-500 hover:text-[#818cf8] transition-colors"
        >
          <ArrowLeft size={14} /> {c.back}
        </button>

        <div className="inline-flex items-center gap-2 mb-4 text-[#818cf8]">
          <GitCompareArrows size={18} strokeWidth={2} />
          <span className="text-xs uppercase tracking-[0.2em]">MolekulaX</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{c.title}</h1>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>{c.intro}</p>

        <div className="grid grid-cols-1 gap-4">
          {COMPARISONS.map((cmp) => {
            const href = comparisonPath(cmp.slug, lang)
            return (
              <a
                key={cmp.slug}
                href={href}
                onClick={(e) => navTo(e, href)}
                className="group flex items-center gap-4 p-5 rounded-2xl glass no-underline transition-all duration-300 hover:border-[rgba(129,140,248,0.35)] hover:bg-[rgba(99,102,241,0.07)]"
              >
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-lg tracking-wide" style={{ color: 'var(--text-primary)' }}>{cmp.title}</span>
                  <span className="mt-1 text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{libName(cmp.lib)}</span>
                </div>
                <ArrowRight
                  size={20}
                  className="ml-auto shrink-0 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: '#818cf8' }}
                />
              </a>
            )
          })}
        </div>
      </article>
      <Footer />
    </div>
  )
}
