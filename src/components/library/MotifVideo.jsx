import { useEffect, useRef } from 'react'
import { shouldPlayAmbientMotion } from '../../utils/motion'

// Pre-rendered 3D motif loop, shared by EffectsSection cards and the performance
// chemistry-class cards. Plays while in the viewport (IntersectionObserver-gated
// for perf). Honors `prefers-reduced-motion: reduce` (WCAG 2.2.2): on reduced
// motion we skip the loop and leave the still poster showing. The owner's OS has
// reduce-motion on, so an override (DEV always, or localStorage 'mlx_force_motion'
// = '1' on any build) keeps the loops previewable — see utils/motion.js.
//
// Lazy source: the webm `src` is attached only on first intersection (NOT a
// <source> child with preload="none" – that combo leaves the element frozen at
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
    // Reduced-motion (WCAG 2.2.2): never start the loop; the still poster shows. Owner override in utils/motion.js.
    if (!shouldPlayAmbientMotion()) return
    // iOS: pure decorative background, never a player. The muted ATTRIBUTE (not
    // just React's prop) is required for inline autoplay; without it iOS shows
    // native controls and lets it open in a fullscreen / PiP player. Kill PiP +
    // remote playback too.
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    v.setAttribute('x-webkit-airplay', 'deny')
    v.disablePictureInPicture = true
    try { v.disableRemotePlayback = true } catch { /* not supported everywhere */ }
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
      // pointerEvents:none so a tap goes to the card, never to the video (which
      // could otherwise open a fullscreen/PiP player on iOS).
      style={{ pointerEvents: 'none' }}
      loop
      muted
      playsInline
      disablePictureInPicture
      preload="none"
      tabIndex={-1}
      poster={`/card-viz/${libId}/${catId}.jpg`}
      aria-hidden="true"
    />
  )
}
