import { useEffect, lazy, Suspense } from 'react'
import { X } from 'lucide-react'
import { getLibrary } from '../../data/libraries'
import { adaptLibraryEntry } from './adaptLibraryEntry'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'
const EntryDetail = lazy(() => import('./EntryDetail'))

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

export default function EntryDetailRoute({ hash }) {
  const parsed = parseEntryHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t } = useLang()
  const { libraryId, setLibraryId } = useLibrary()

  const library = parsed ? getLibrary(parsed.library) : null
  const liveEntry = parsed && library ? library.entries.find(e => e.id === parsed.id) : null
  const peptide = liveEntry ? adaptLibraryEntry(liveEntry, library) : null

  // Sync the active library context with the hash. If a visitor deep-links
  // to #entry/nootropics/<id> while the in-memory library is still the
  // default 'peptides', closeDetail() would land on the wrong gallery.
  useEffect(() => {
    if (parsed?.library && parsed.library !== libraryId) {
      setLibraryId(parsed.library)
    }
  }, [parsed?.library, libraryId, setLibraryId])

  // Library-aware close: snap the LibraryContext to the current library
  // BEFORE the hash change re-renders the landing, then nav to #library.
  // If the hash already equals '#library' (e.g. user pressed Back twice),
  // fall back to a manual scrollIntoView so the user still moves.
  const closeDetail = () => {
    if (typeof window === 'undefined') return
    if (parsed?.library) setLibraryId(parsed.library)
    if (window.location.hash === '#library') {
      requestAnimationFrame(() => {
        document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.location.hash = 'library'
    }
  }

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

  // Smooth-scroll to top whenever the active entry changes (e.g. clicking a
  // RelatedCard navigates from #entry/.../A to #entry/.../B). Without this,
  // the user lands mid-page on the new entry.
  useEffect(() => {
    if (!parsed?.id) return
    if (typeof window === 'undefined') return
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [parsed?.library, parsed?.id])

  if (!peptide) return null

  const handleJump = (id) => {
    window.location.hash = `entry/${library.id}/${id}`
  }

  // Keying on library:id forces React to fully remount EntryDetail when the
  // user navigates to a different entry. This prevents the stale name/title
  // flash that occurred when only props changed in-place during hashchange.
  const entryKey = `${library.id}:${peptide.id}`

  if (isDesktop) {
    return (
      <Suspense fallback={<div style={{ minHeight: 600 }} aria-hidden="true" />}>
        <EntryDetail key={entryKey} peptide={peptide} onClose={closeDetail} onJump={handleJump} />
      </Suspense>
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
        <Suspense fallback={<div style={{ minHeight: 600 }} aria-hidden="true" />}>
          <EntryDetail key={entryKey} peptide={peptide} onClose={closeDetail} onJump={handleJump} />
        </Suspense>
      </div>
    </div>
  )
}
