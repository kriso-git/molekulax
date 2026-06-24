import { useEffect, useRef } from 'react'
import { shouldPlayAmbientMotion } from '../../utils/motion'

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
    // Reduced-motion (WCAG 2.2.2): never start the loop; the still poster (same molecule frame) shows. Owner override in utils/motion.js.
    if (!shouldPlayAmbientMotion()) return
    // iOS: make this a pure decorative background, never a player. The muted
    // ATTRIBUTE (not just React's prop, which React doesn't reliably reflect to
    // the attribute) is required for inline autoplay; without it iOS shows native
    // controls and lets the video open in a fullscreen / Picture-in-Picture player
    // that can even stick on the home screen. Also kill PiP and remote playback.
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    v.setAttribute('x-webkit-airplay', 'deny')
    v.disablePictureInPicture = true
    try { v.disableRemotePlayback = true } catch { /* not supported everywhere */ }
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
      // Renders on pure black; `screen` drops the black out so only the glowing
      // molecule composites over the page. pointerEvents:none so a tap goes to the
      // card (open the entry), never to the video (which could open a player).
      style={{ mixBlendMode: 'screen', pointerEvents: 'none' }}
      loop
      muted
      playsInline
      disablePictureInPicture
      preload="none"
      tabIndex={-1}
      poster={`/mol-viz/${entryId}.jpg`}
      aria-hidden="true"
    />
  )
}
