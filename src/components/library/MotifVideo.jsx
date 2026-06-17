import { useEffect, useRef } from 'react'

// Pre-rendered 3D motif loop, shared by EffectsSection cards and the performance
// chemistry-class cards. Plays while in the viewport (IntersectionObserver-gated
// for perf). It does NOT short-circuit on prefers-reduced-motion: these subtle,
// muted, looping backdrops are part of the site's visual identity and the
// full-page DNA background already animates regardless of that setting, so
// gating only these would be inconsistent (and hid the motion from the owner,
// whose OS has "reduce motion" on).
//
// Lazy source: the webm `src` is attached only on first intersection (NOT a
// <source> child with preload="none" — that combo leaves the element frozen at
// readyState 0 / networkState IDLE in real browsers, so play() never starts the
// fetch and only the poster shows). Setting `src` on intersect kicks off the
// load; we then play on `loadeddata` (plus an eager attempt) for reliability.
//
// Asset convention: /card-viz/<libId>/<catId>.webm (+ .jpg poster).
export default function MotifVideo({ libId, catId, label, className = 'absolute inset-0 w-full h-full object-cover' }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const src = `/card-viz/${libId}/${catId}.webm`
    const play = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}) }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!v.getAttribute('src')) {
          v.addEventListener('loadeddata', play, { once: true })
          v.setAttribute('src', src) // lazy fetch starts here
          v.load()
        }
        play()
      } else {
        v.pause()
      }
    }, { threshold: 0.1 })
    io.observe(v)
    return () => io.disconnect()
  }, [libId, catId])
  return (
    <video
      ref={ref}
      className={className}
      loop
      muted
      playsInline
      preload="none"
      poster={`/card-viz/${libId}/${catId}.jpg`}
      aria-label={label}
    />
  )
}
