// Hash-driven route that mounts EntryDetail in the right form factor
// (desktop full-page, mobile modal). Phase 9: fetches the entry data via
// loadEntry() so deep-link landings download only the requested entry,
// not the full library. Reacts to loading/error states with skeleton +
// retry CTA.

import { useEffect, useState, lazy, Suspense } from 'react'
import { X } from 'lucide-react'
import { getLibrary } from '../../data/libraries'
import { adaptLibraryEntry } from './adaptLibraryEntry'
import { consumeReturnState } from './returnState'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'
import { EntryDetailSkeleton, EntryDetailError } from './entry-detail/skeleton'
import HeroPreview from './HeroPreview'
import RedirectFlash from './RedirectFlash'

const EntryDetail = lazy(() => import('./EntryDetail'))

// Phase C: 3-segment hash `#entry/<library>/<id>/<variantId?>` for multi-variant
// entries. `variantId` is optional in the parser — the EntryDetailRoute applies
// auto-redirect rules below (single-variant → ignore segment; multi-variant
// missing/bad segment → replaceState to defaultVariant).
export function parseEntryHash(hash) {
  if (!hash) return null
  const clean = hash.replace(/^#/, '')
  const parts = clean.split('/')
  if (parts[0] !== 'entry' || !parts[1] || !parts[2]) return null
  if (!getLibrary(parts[1])) return null
  return { library: parts[1], id: parts[2], variantId: parts[3] || null }
}

export function isEntryDetailHash(hash) {
  return parseEntryHash(hash) !== null
}

export default function EntryDetailRoute({ hash }) {
  const parsed = parseEntryHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t, lang } = useLang()
  const { library, libraryId, setLibraryId, loadEntry, getCachedEntry } = useLibrary()

  const [entry, setEntry] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [retryCounter, setRetryCounter] = useState(0)
  const [redirectId, setRedirectId] = useState(null)

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
  // Phase 12: lang in dep-array — language switch re-fires the load with the
  // fresh-lang chunk. Inline cancel-flag prevents stale state on rapid switches
  // (HU→EN→PL→HU before the EN chunk resolves).
  useEffect(() => {
    let cancelled = false
    if (!parsed) {
      setEntry(null)
      setError(null)
      setLoading(false)
      setRedirectId(null)
      return
    }

    // Deprecated entry redirect-flash (post-roadmap 2026-05-20).
    // Library.deprecatedIds is set in LIBRARY_META (sync, deep-link-ready)
    // and on the full peptidesLibrary object. EntryDetailRoute shows
    // RedirectFlash for 1.8s, then hash-navs to library top.
    const lib = getLibrary(parsed.library)
    if (lib?.deprecatedIds?.includes(parsed.id)) {
      setRedirectId(parsed.id)
      setEntry(null)
      setError(null)
      setLoading(false)
      const timer = setTimeout(() => {
        if (!cancelled) {
          window.location.hash = 'library'
        }
      }, 1800)
      return () => {
        cancelled = true
        clearTimeout(timer)
      }
    }
    setRedirectId(null)

    const cached = getCachedEntry(parsed.library, parsed.id, lang)
    if (cached) {
      setEntry(cached)
      setError(null)
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const e = await loadEntry(parsed.library, parsed.id, lang)
        if (!cancelled) {
          setEntry(e)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err)
          setEntry(null)
          setLoading(false)
        }
      }
    })()
    return () => { cancelled = true }
  }, [parsed?.library, parsed?.id, lang, loadEntry, getCachedEntry, retryCounter])

  // Library-aware close: snap the LibraryContext to the current library
  // BEFORE the hash change re-renders the landing, then nav to #library.
  // If the hash already equals '#library' (e.g. user pressed Back twice),
  // fall back to a manual scrollIntoView so the user still moves.
  const closeDetail = () => {
    if (typeof window === 'undefined') return
    const restoreData = consumeReturnState()

    if (restoreData) {
      // Pipeline handoff: LibraryGallery's library.id useEffect (Task C.3) reads
      // and deletes this on next mount. Ephemeral, single-consumer, single-shot.
      window.__libraryGalleryPendingRestore__ = restoreData
      if (restoreData.libraryId) setLibraryId(restoreData.libraryId)
      window.location.hash = 'library'
      return
    }

    // Original fallback behavior (no snapshot or stale/corrupted)
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
  // NOTE: variantId change does NOT scroll — staying in place is the desired
  // UX when toggling between oral/topical on the same compound.
  useEffect(() => {
    if (!parsed?.id) return
    if (typeof window === 'undefined') return
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [parsed?.library, parsed?.id])

  // Phase C — Variant auto-redirect. Once the entry has loaded, check whether
  // the hash carries a valid variantId. Rules:
  //   - Entry has `variants` array AND parsed.variantId is missing → redirect to defaultVariant.
  //   - Entry has `variants` array AND parsed.variantId is unknown → redirect to defaultVariant.
  //   - Entry has no `variants` AND parsed.variantId is set → console.warn, leave hash alone.
  // Uses replaceState so the redirect doesn't pollute browser history.
  useEffect(() => {
    if (!parsed || !entry || typeof window === 'undefined') return
    const variants = Array.isArray(entry.variants) ? entry.variants : null
    if (!variants || variants.length === 0) {
      if (parsed.variantId) {
        console.warn(`[EntryDetailRoute] Entry ${parsed.library}/${parsed.id} has no variants but hash carries '/${parsed.variantId}'. Ignoring segment.`)
      }
      return
    }
    const validId = (id) => variants.some(v => v.routeId === id)
    if (!parsed.variantId || !validId(parsed.variantId)) {
      const fallback = validId(entry.defaultVariant) ? entry.defaultVariant : variants[0].routeId
      window.history.replaceState(null, '', `#entry/${parsed.library}/${parsed.id}/${fallback}`)
      // replaceState alone doesn't reliably fire `hashchange` across browsers
      // (Chrome+Firefox do, but the contract is fuzzy). Dispatch manually so
      // the App-level hash listener re-parses immediately.
      window.dispatchEvent(new Event('hashchange'))
    }
  }, [parsed?.library, parsed?.id, parsed?.variantId, entry])

  // Browser-back path: if hash transitions from #entry/... to #library or
  // empty (popstate), closeDetail() is NOT called automatically. We consume
  // the snapshot here too so browser-back also restores. Double-consume across
  // closeDetail → hashchange is safe — consumeReturnState removes-and-returns
  // atomically per sessionStorage call.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onHashChange = () => {
      const newHash = window.location.hash
      if (newHash === '#library' || newHash === '' || newHash === '#') {
        const snapshot = consumeReturnState()
        if (snapshot) {
          window.__libraryGalleryPendingRestore__ = snapshot
          if (snapshot.libraryId) setLibraryId(snapshot.libraryId)
        }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [setLibraryId])

  if (!parsed) return null

  // Deprecated entry deep-link: render RedirectFlash for 1.8s (timer set in
  // the useEffect above). Return-early BEFORE any entry/library state work.
  if (redirectId) {
    return <RedirectFlash deprecatedId={redirectId} />
  }

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
    body = <EntryDetailError error={error} onRetry={() => setRetryCounter(c => c + 1)} onBack={closeDetail} />
  } else if (!entry || !libraryReady) {
    // Cold load: no entry mounted yet, show HeroPreview from meta if possible.
    body = metaEntry
      ? <HeroPreview meta={metaEntry} onClose={closeDetail} />
      : <EntryDetailSkeleton />
  } else {
    // Entry mounted (possibly stale during a warm lang-switch). loading=true
    // here means a re-fetch is in flight (e.g. lang switch); old entry stays
    // visible with an opacity-50 + spinner overlay instead of a full skeleton.
    const peptide = adaptLibraryEntry(entry, library, lang, parsed.variantId)
    const handleJump = (id) => {
      if (parsed?.library) {
        window.location.hash = `entry/${parsed.library}/${id}`
      }
    }
    // entryKey excludes variantId on purpose — EntryDetail stays mounted across
    // variant toggles; internal state (scroll, magnet, nameRef) survives the
    // swap, only the prop-driven body re-renders.
    const entryKey = `${parsed.library}:${peptide.id}`
    body = (
      <div className="relative">
        <div className={loading ? 'opacity-50 pointer-events-none transition-opacity' : 'transition-opacity'}>
          <Suspense fallback={<EntryDetailSkeleton />}>
            <EntryDetail key={entryKey} peptide={peptide} onClose={closeDetail} onJump={handleJump} />
          </Suspense>
        </div>
        {loading && (
          <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div
              className="w-10 h-10 rounded-full border-2 animate-spin"
              style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
              role="status"
              aria-label={t('common.loading') || 'Loading'}
            />
          </div>
        )}
      </div>
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
