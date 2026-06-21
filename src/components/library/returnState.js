// Snapshot/restore handoff for the library state-restoration pipeline.
//
// Pipeline:
// - Publisher (LibraryGallery.openEntry): sessionStorage.setItem on tile click.
// - Consumer (EntryDetailRoute.closeDetail + LibraryContext popstate listener): consumeReturnState()
//   reads + clears the snapshot, returns the parsed object (or null on miss/stale/error).
// - Restore site (LibraryGallery useEffect on library.id, Task C.3): reads
//   window.__libraryGalleryPendingRestore__ which the consumer publishes.
//
// removeItem runs unconditionally after a successful getItem, so corrupted JSON
// or stale tokens never leave debris in sessionStorage.

export const RETURN_STATE_KEY = 'molekulax:returnState'
const RETURN_STATE_TTL_MS = 30 * 60 * 1000   // 30 minutes

export function consumeReturnState() {
  if (typeof window === 'undefined') return null
  let raw = null
  try {
    raw = sessionStorage.getItem(RETURN_STATE_KEY)
  } catch (e) { /* storage disabled – treat as miss */ }
  if (!raw) return null

  // Always remove – even on parse failure or stale TTL, the key should not
  // persist across the rest of the session.
  try { sessionStorage.removeItem(RETURN_STATE_KEY) } catch (e) { /* ignore */ }

  let snapshot
  try {
    snapshot = JSON.parse(raw)
  } catch (e) {
    return null   // corrupted JSON – bad key already cleared above
  }

  const ageMs = Date.now() - (snapshot?.token || 0)
  if (ageMs < 0 || ageMs >= RETURN_STATE_TTL_MS) return null

  return snapshot
}
