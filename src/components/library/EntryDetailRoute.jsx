import { useEffect } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { PEPTIDES } from '../../data/peptides'
import { adaptLivePeptide } from './adaptLivePeptide'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLang } from '../../i18n/LanguageContext'
import EntryDetail from './EntryDetail'

export function parseEntryHash(hash) {
  if (!hash) return null
  const clean = hash.replace(/^#/, '')
  const parts = clean.split('/')
  if (parts[0] !== 'entry' || parts[1] !== 'peptides' || !parts[2]) return null
  return { library: parts[1], id: parts[2] }
}

export function isEntryDetailHash(hash) {
  return parseEntryHash(hash) !== null
}

function closeDetail() {
  if (typeof window === 'undefined') return
  window.location.hash = ''
}

export default function EntryDetailRoute({ hash }) {
  const parsed = parseEntryHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t } = useLang()

  const livePeptide = parsed ? PEPTIDES.find(p => p.id === parsed.id) : null
  const peptide = livePeptide ? adaptLivePeptide(livePeptide) : null

  useEffect(() => {
    if (isDesktop) return
    const onKey = (e) => { if (e.key === 'Escape') closeDetail() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isDesktop])

  useEffect(() => {
    if (isDesktop) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isDesktop])

  useEffect(() => {
    if (parsed && !livePeptide) closeDetail()
  }, [parsed, livePeptide])

  if (!peptide) return null

  const handleJump = (id) => {
    window.location.hash = `entry/peptides/${id}`
  }

  if (isDesktop) {
    return (
      <div className="relative">
        <button
          onClick={(e) => { e.preventDefault(); closeDetail() }}
          className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors"
          style={{
            background: 'var(--tint-soft)',
            border: '1px solid var(--tint-soft-border)',
            color: 'var(--text-primary)',
          }}
          aria-label={t('entry.back') || 'Vissza a könyvtárba'}
        >
          <ArrowLeft size={14} strokeWidth={2.5} />
          {t('entry.back') || 'Vissza a könyvtárba'}
        </button>
        <EntryDetail peptide={peptide} onClose={closeDetail} onJump={handleJump} />
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={peptide.name}
    >
      <div
        onClick={closeDetail}
        className="fixed inset-0 z-0"
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
      />
      <div className="relative z-10 min-h-full">
        <button
          onClick={closeDetail}
          className="fixed top-4 right-4 z-50 p-2 rounded-full transition-colors"
          style={{
            background: 'var(--tint-medium)',
            border: '1px solid var(--tint-soft-border)',
            color: 'var(--text-primary)',
          }}
          aria-label={t('modal.close') || 'Bezárás'}
        >
          <X size={18} strokeWidth={2.5} />
        </button>
        <EntryDetail peptide={peptide} onClose={closeDetail} onJump={handleJump} />
      </div>
    </div>
  )
}
