// One-shot legacy-hash compatibility. Old shared links (Telegram, any indexed
// #entry/... URL) keep working: at startup we translate the hash to the new
// path and replaceState to it, BEFORE React mounts.
import { LIB_SLUGS, entryPath } from '../seo/urls.js'

const KNOWN_LIBS = new Set(Object.keys(LIB_SLUGS))

// Pure: returns the new path for a legacy hash, or null if nothing to do.
export function hashToPath(hash) {
  const clean = (hash || '').replace(/^#/, '')
  if (clean === '' ) return null
  if (clean === 'library') return '/'
  const parts = clean.split('/')
  if (parts[0] !== 'entry' || !parts[1] || !parts[2]) return null
  if (!KNOWN_LIBS.has(parts[1])) return null
  return entryPath(parts[1], parts[2], parts[3] || null)
}

// Side-effectful shim, called once from main.jsx before render.
export function redirectLegacyHash() {
  if (typeof window === 'undefined') return
  const to = hashToPath(window.location.hash)
  if (to && to !== window.location.pathname) {
    window.history.replaceState(null, '', to)
  } else if (window.location.hash) {
    // strip a stray non-entry hash so it can't confuse the path router
    if (hashToPath(window.location.hash) === '/') window.history.replaceState(null, '', '/')
  }
}
