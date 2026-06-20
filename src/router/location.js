// Minimal History-API location store. navigate() pushes/replaces + notifies;
// useLocationPath() re-renders subscribers on navigate() and browser back/forward.
import { useSyncExternalStore } from 'react'

const listeners = new Set()
function emit() { listeners.forEach((l) => l()) }

export function navigate(to, { replace = false } = {}) {
  if (typeof window === 'undefined') return
  if (to === window.location.pathname + window.location.search) { emit(); return }
  if (replace) window.history.replaceState(null, '', to)
  else window.history.pushState(null, '', to)
  emit()
}

function subscribe(cb) {
  listeners.add(cb)
  window.addEventListener('popstate', cb)
  return () => { listeners.delete(cb); window.removeEventListener('popstate', cb) }
}
function getSnapshot() { return window.location.pathname }
function getServerSnapshot() { return '/' }

export function useLocationPath() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
