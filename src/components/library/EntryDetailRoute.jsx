// Hash-driven route that mounts EntryDetail in the right form factor
// (desktop full-page, mobile modal). Phase 9: fetches the entry data via
// loadEntry() so deep-link landings download only the requested entry,
// not the full library. Reacts to loading/error states with skeleton +
// retry CTA.

import { useCallback, useEffect, useState, lazy, Suspense } from 'react'
import { X } from 'lucide-react'
import { getLibrary } from '../../data/libraries'
import { adaptLibraryEntry } from './adaptLibraryEntry'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'
import { EntryDetailSkeleton, EntryDetailError } from './entry-detail/skeleton'
import HeroPreview from './HeroPreview'

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
  const { library, libraryId, setLibraryId, loadEntry, getCachedEntry } = useLibrary()

  const [entry, setEntry] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Sync the active library context with the hash. If a visitor deep-links
  // to #entry/nootropics/<id> while the in-memory library is still the
  // default 'peptides', closeDetail() would land on the wrong gallery.
  useEffect(() => {
    if (parsed?.library && parsed.library !== libraryId) {
      setLibraryId(parsed.library)
    }
  }, [parsed?.library, libraryId, setLibraryId])

  // Phase 9: async per-entry loader. Each deep-link only pulls one entry's
  // chunk, not the whole library.
  const fetchEntry = useCallback(async () => {
    if (!parsed) {
      setEntry(null)
      setError(null)
      return
    }
    const cached = getCachedEntry(parsed.library, parsed.id)
    if (cached) {
      setEntry(cached)
      setError(null)
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const e = await loadEntry(parsed.library, parsed.id)
      setEntry(e)
    } catch (err) {
      setError(err)
      setEntry(null)
    } finally {
      setLoading(false)
    }
  }, [parsed?.library, parsed?.id, loadEntry, getCachedEntry])

  useEffect(() => { fetchEntry() }, [fetchEntry])

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
    if (isDesktop || !parsed) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isDesktop, parsed])

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

  if (!parsed) return null

  // Loading / error states render BEFORE the heavy EntryDetail chunk loads.
  // Wait for BOTH the entry AND the library (so adaptLibraryEntry can read
  // library.meta + library.entryCategoryMap + library.categories) before
  // rendering the detail.
  //
  // Phase 9 LCP optimization: if the library meta is loaded but the full
  // entry chunk hasn't arrived yet, render <HeroPreview /> from the meta
  // record. The Hero h1 (entry name) becomes the LCP element and fires as
  // soon as the small meta chunk loads (~1.9s on Slow 4G), instead of
  // waiting for the EntryDetail chunk + per-entry chunk (~3.1s).
  const libraryReady = library && library.id === parsed.library
  const metaEntry = libraryReady ? (library.meta || []).find(m => m.id === parsed.id) : null
  let body
  if (error) {
    body = <EntryDetailError error={error} onRetry={fetchEntry} onBack={closeDetail} />
  } else if (loading || !entry || !libraryReady) {
    body = metaEntry
      ? <HeroPreview meta={metaEntry} onClose={closeDetail} />
      : <EntryDetailSkeleton />
  } else {
    const peptide = adaptLibraryEntry(entry, library)
    const handleJump = (id) => {
      if (parsed?.library) {
        window.location.hash = `entry/${parsed.library}/${id}`
      }
    }
    // Keying on library:id forces React to fully remount EntryDetail when the
    // user navigates to a different entry. This prevents the stale name/title
    // flash that occurred when only props changed in-place during hashchange.
    const entryKey = `${parsed.library}:${peptide.id}`
    body = (
      <Suspense fallback={<EntryDetailSkeleton />}>
        <EntryDetail key={entryKey} peptide={peptide} onClose={closeDetail} onJump={handleJump} />
      </Suspense>
    )
  }

  if (isDesktop) return body

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={entry?.name || 'Entry'}
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
        {body}
      </div>
    </div>
  )
}
