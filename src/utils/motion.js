// Single source of truth for "should ambient looping motion play?".
// WCAG 2.2.2 (Pause, Stop, Hide): auto-playing, indefinitely-looping motion must
// be stoppable. We honor the OS `prefers-reduced-motion: reduce` by NOT starting
// the loop — the still poster shows instead, so reduced-motion users lose the
// motion but keep the visual.
//
// Owner override: the site owner's OS has "reduce motion" ON, so without an escape
// hatch they would never see the motif/molecule loops. forceMotion() re-enables
// them in DEV always, or on any build by running in the browser console:
//   localStorage.setItem('mlx_force_motion', '1')   // then reload
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function forceMotion() {
  if (import.meta.env && import.meta.env.DEV) return true
  try {
    return typeof window !== 'undefined' && window.localStorage?.getItem('mlx_force_motion') === '1'
  } catch {
    return false
  }
}

export function shouldPlayAmbientMotion() {
  return forceMotion() || !prefersReducedMotion()
}
