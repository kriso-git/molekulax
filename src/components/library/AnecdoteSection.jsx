import { useState } from 'react'
import { Quote, ChevronDown, ChevronUp } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { Eyebrow, GlassCard } from './entry-detail/shared'

// Render anecdote field with paragraph-aware splitting. Anecdote may be a flat
// string (post-Phase-12 per-lang body file) or a {hu,en,pl} triplet (legacy).
// The LanguageContext `tr` helper handles both shapes.
function renderAnecdoteBody(text) {
 if (!text || typeof text !== 'string') return null
 const paras = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
 return paras.map((p, i) => (
 <p
 key={i}
 className="text-[13px] leading-relaxed"
 style={{ color: 'var(--text-secondary)', marginBottom: i < paras.length - 1 ? '0.85rem' : 0 }}
 >
 {p}
 </p>
 ))
}

export default function AnecdoteSection({ peptide, accent }) {
 const { tr, t } = useLang()
 const [isOpen, setIsOpen] = useState(false)

 const hasAnecdote = peptide.anecdote != null
 const anecdoteText = hasAnecdote ? tr(peptide.anecdote) : null
 const hasContent = !!(anecdoteText && anecdoteText.trim().length > 0)

 return (
 <section className="relative px-6 sm:px-10 pb-10">
 <GlassCard accent={accent} className="overflow-hidden">
 <button
 type="button"
 onClick={() => setIsOpen(prev => !prev)}
 aria-expanded={isOpen}
 className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg"
 style={{ '--ring-color': accent }}
 >
 <div className="flex-1 min-w-0">
 <Eyebrow
 icon={Quote}
 label={(t('entry.sec.anecdote.eyebrow') || 'Anekdota').toUpperCase()}
 accent={accent}
 />
 <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
 {t('entry.sec.anecdote.title') || 'Tapasztalati beszámolók'}
 </h3>
 </div>
 <div
 className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform"
 style={{
 background: `linear-gradient(135deg, ${accent}33, ${accent}11)`,
 border: `1px solid ${accent}55`,
 color: accent,
 transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
 }}
 aria-hidden="true"
 >
 <ChevronDown size={18} strokeWidth={2.3} />
 </div>
 </button>

 {isOpen && (
 <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--tint-soft-border)' }}>
 {hasContent ? (
 <>
 <div className="mb-4">{renderAnecdoteBody(anecdoteText)}</div>
 <p
 className="text-[10.5px] tracking-[0.15em] uppercase font-semibold"
 style={{ color: 'var(--text-muted)', opacity: 0.85 }}
 >
 ⚠ {t('entry.sec.anecdote.disclaimer') || 'Nem klinikai bizonyíték — felhasználói tapasztalatokon alapul.'}
 </p>
 </>
 ) : (
 <p className="text-[13px] italic" style={{ color: 'var(--text-muted)' }}>
 {t('entry.sec.anecdote.placeholder') || 'Még nincs anekdota gyűjtésben.'}
 </p>
 )}
 </div>
 )}
 </GlassCard>
 </section>
 )
}
