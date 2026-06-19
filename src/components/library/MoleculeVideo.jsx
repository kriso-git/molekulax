import { useEffect, useRef } from 'react'

// Pre-rendered rotating 3D chemical-structure loop for a nootropic entry.
// Same proven IO-gated lazy-src pattern as MotifVideo: the webm `src` is attached
// only on first intersection (a <source>+preload="none" combo freezes at
// readyState 0 in real browsers), then we play on `loadeddata`. The .jpg poster
// (a still frame of the same render) shows until the loop is fetched, so there is
// no blank flash. Asset convention: /mol-viz/<entryId>.webm (+ .jpg).
export default function MoleculeVideo({ entryId, name, className = 'absolute inset-0 w-full h-full object-cover' }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const src = `/mol-viz/${entryId}.webm`
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
  }, [entryId])
  return (
    <video
      ref={ref}
      className={className}
      loop
      muted
      playsInline
      preload="none"
      poster={`/mol-viz/${entryId}.jpg`}
      aria-label={`${name} 3D kémiai szerkezet`}
    />
  )
}
