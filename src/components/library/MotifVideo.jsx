import { useEffect, useRef } from 'react'

// Pre-rendered 3D motif loop, shared by EffectsSection cards and the performance
// chemistry-class cards. Plays only while in the viewport (IntersectionObserver)
// and never under prefers-reduced-motion (the poster still frame shows instead).
// preload="none" so off-screen / inactive-face cards don't fetch until they play.
//
// Asset convention: /card-viz/<libId>/<catId>.webm (+ .jpg poster).
export default function MotifVideo({ libId, catId, label, className = 'absolute inset-0 w-full h-full object-cover' }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return // leave paused → poster shows
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() })
    }, { threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
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
    >
      <source src={`/card-viz/${libId}/${catId}.webm`} type="video/webm" />
    </video>
  )
}
