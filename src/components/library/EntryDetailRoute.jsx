import { useEffect } from 'react'
import { X } from 'lucide-react'
import { getLibrary } from '../../data/libraries'
import { adaptLibraryEntry } from './adaptLibraryEntry'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLang } from '../../i18n/LanguageContext'
import EntryDetail from './EntryDetail'

export function parseEntryHash(hash) {
  if (!hash) return null
  const clean = hash.replace(/^#/, '')
  const parts = clean.split('/')
  if (parts[0] !== 'entry' || !parts[1] || !parts[2]) return null
  if (!getLibrary(parts[1])) return null
  return { library: parts[1], id: parts[2] }
}

export function isEntryDetailHash(hash) {
  return parseEntryHash(hash) !== null
}

function closeDetail() {
  if (typeof window === 'undefined') return
  // Land back on the library section instead of jumping to the top of the
  // page. The hashchange triggers App.jsx to render the landing, and the
  // browser auto-scrolls to the #library anchor on LibraryGallery.
  window.location.hash = 'library'
}

export default function EntryDetailRoute({ hash }) {
  const parsed = parseEntryHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t } = useLang()

  const library = parsed ? getLibrary(parsed.library) : null
  const liveEntry = parsed && library ? library.entries.find(e => e.id === parsed.id) : null
  const peptide = liveEntry ? adaptLibraryEntry(liveEntry, library) : null

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
    if (parsed && !liveEntry) closeDetail()
  }, [parsed, liveEntry])

  if (!peptide) return null

  const handleJump = (id) => {
    window.location.hash = `entry/${library.id}/${id}`
  }

  if (isDesktop) {
    return <EntryDetail peptide={peptide} onClose={closeDetail} onJump={handleJump} />
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
