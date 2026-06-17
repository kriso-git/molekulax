import { useEffect, useRef } from 'react'

// React wrapper around the framework-agnostic Three.js DNA field.
// Three.js is dynamically imported so it lands in this component's own chunk
// (only loaded where DnaBackground is actually mounted — currently the hidden
// #dna-preview route).
//
// Props (all optional, live-tunable): count, size, glow, rough, speed, palette.
export default function DnaBackground(props) {
  const canvasRef = useRef(null)
  const apiRef = useRef(null)
  // keep latest props in a ref so the create-once effect can read initial values
  const initialRef = useRef(props)

  useEffect(() => {
    let disposed = false
    let api = null
    import('../three/dnaField')
      .then(({ createDnaField }) => {
        if (disposed || !canvasRef.current) return
        try {
          api = createDnaField(canvasRef.current, initialRef.current)
          apiRef.current = api
        } catch (err) {
          // No WebGL / GL context failure → degrade gracefully (page background shows).
          console.warn('[DnaBackground] WebGL unavailable, skipping 3D background:', err?.message || err)
        }
      })
      .catch((err) => console.warn('[DnaBackground] failed to load three.js chunk:', err?.message || err))
    return () => {
      disposed = true
      if (api) api.dispose()
      apiRef.current = null
    }
  }, [])

  // live param updates without remounting the GL context
  useEffect(() => {
    if (apiRef.current) {
      apiRef.current.setParams({
        count: props.count,
        size: props.size,
        glow: props.glow,
        rough: props.rough,
        speed: props.speed,
        palette: props.palette,
      })
    }
  }, [props.count, props.size, props.glow, props.rough, props.speed, props.palette])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
