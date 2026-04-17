import { useRef, useEffect } from 'react'

const TEAL_RGB   = '100, 178, 192'
const VIOLET_RGB = '148, 128, 185'

// Module-level clock — survives React StrictMode double-invoke and HMR reruns.
// A local `let t` inside useEffect resets to a new random value on every
// cleanup+remount, causing a visible jump. This persists across re-mounts.
let _t = 0

// Irrational speed constants — guarantee no perceivable loop period
const S2 = 1.41421356237  // √2
const S3 = 1.73205080757  // √3
const S5 = 2.23606797750  // √5
const S7 = 2.64575131106  // √7
const PH = 1.61803398875  // φ golden ratio
const EU = 2.71828182846  // e

function drawPath(ctx, pts, colorRGB, alpha, lw) {
  if (pts.length < 2) return
  ctx.beginPath()
  ctx.moveTo(pts[0].x, pts[0].y)
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y)
  ctx.strokeStyle = `rgba(${colorRGB}, ${alpha.toFixed(3)})`
  ctx.lineWidth = lw
  ctx.stroke()
}

function drawFragment(ctx, frag, phase) {
  const { cx, cy, height, period, amp, opacity, rotateDeg } = frag
  const STEPS = 26
  const numSegs = Math.ceil(height / (period / 2))

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(rotateDeg * Math.PI / 180)

  for (let hp = 0; hp < numSegs; hp++) {
    const y0   = -height / 2 + hp * (period / 2)
    const midY = y0 + period / 4
    const midPhi = 2 * Math.PI * midY / period + phase

    const t    = (midY + height / 2) / height
    const fade = Math.sin(Math.PI * Math.max(0, Math.min(1, t)))
    if (fade < 0.04) continue

    const midZ1       = Math.cos(midPhi)
    const strand1Front = midZ1 > 0

    const pts1 = [], pts2 = []
    for (let i = 0; i <= STEPS; i++) {
      const yp  = y0 + (i / STEPS) * (period / 2)
      const phi = 2 * Math.PI * yp / period + phase
      pts1.push({ x:  amp * Math.sin(phi), y: yp, z:  Math.cos(phi) })
      pts2.push({ x: -amp * Math.sin(phi), y: yp, z: -Math.cos(phi) })
    }

    const backPts  = strand1Front ? pts2 : pts1
    const frontPts = strand1Front ? pts1 : pts2
    const backRGB  = strand1Front ? VIOLET_RGB : TEAL_RGB
    const frontRGB = strand1Front ? TEAL_RGB   : VIOLET_RGB
    const base     = opacity * fade

    drawPath(ctx, backPts, backRGB, base * 0.30, 0.9)

    const rphi = 2 * Math.PI * y0 / period + phase
    const rx1  = amp * Math.sin(rphi)
    const rx2  = -rx1

    const rg = ctx.createLinearGradient(rx1, 0, rx2, 0)
    rg.addColorStop(0, `rgba(${TEAL_RGB},   ${(base * 0.55).toFixed(3)})`)
    rg.addColorStop(1, `rgba(${VIOLET_RGB}, ${(base * 0.55).toFixed(3)})`)
    ctx.beginPath(); ctx.moveTo(rx1, y0); ctx.lineTo(rx2, y0)
    ctx.strokeStyle = rg; ctx.lineWidth = 0.85; ctx.stroke()

    ctx.beginPath(); ctx.arc(rx1, y0, 1.8, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${TEAL_RGB}, ${(base * 0.60).toFixed(3)})`; ctx.fill()
    ctx.beginPath(); ctx.arc(rx2, y0, 1.8, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${VIOLET_RGB}, ${(base * 0.60).toFixed(3)})`; ctx.fill()

    ctx.save()
    ctx.shadowBlur  = 6
    ctx.shadowColor = `rgba(${frontRGB}, ${(base * 0.55).toFixed(3)})`
    drawPath(ctx, frontPts, frontRGB, base * 0.88, 1.7)
    ctx.restore()
  }

  ctx.restore()
}

// Irrational rotSpd and floatS values → period is effectively infinite
const FRAGS = [
  { relX: 0.07, relY: 0.22, height: 200, period: 70, amp: 22, opacity: 0.38, rotateDeg: -12, rotSpd: 0.2*S2,  floatA: 12, floatS: 0.15*S5  },
  { relX: 0.22, relY: 0.71, height: 162, period: 60, amp: 18, opacity: 0.28, rotateDeg:  25, rotSpd: 0.15*S3, floatA: 10, floatS: 0.2*S2   },
  { relX: 0.40, relY: 0.12, height: 215, period: 80, amp: 24, opacity: 0.24, rotateDeg:   8, rotSpd: 0.1*S5,  floatA: 14, floatS: 0.1*S7   },
  { relX: 0.52, relY: 0.55, height: 182, period: 65, amp: 20, opacity: 0.32, rotateDeg: -20, rotSpd: 0.2*PH,  floatA:  9, floatS: 0.2*S3   },
  { relX: 0.68, relY: 0.19, height: 155, period: 56, amp: 17, opacity: 0.27, rotateDeg:  15, rotSpd: 0.25*S2, floatA: 11, floatS: 0.15*S7  },
  { relX: 0.82, relY: 0.76, height: 210, period: 75, amp: 23, opacity: 0.35, rotateDeg:  -8, rotSpd: 0.2*S3,  floatA: 13, floatS: 0.2*S5   },
  { relX: 0.93, relY: 0.37, height: 190, period: 68, amp: 21, opacity: 0.32, rotateDeg:  18, rotSpd: 0.15*S5, floatA: 10, floatS: 0.25*S2  },
  { relX: 0.14, relY: 0.88, height: 148, period: 58, amp: 16, opacity: 0.22, rotateDeg: -30, rotSpd: 0.1*EU,  floatA:  8, floatS: 0.1*Math.PI },
  { relX: 0.47, relY: 0.86, height: 165, period: 62, amp: 19, opacity: 0.25, rotateDeg:  12, rotSpd: 0.25*S3, floatA: 11, floatS: 0.3*PH   },
]

const PHASE_OFFSETS = FRAGS.map((_, i) => (i * Math.PI * 2) / FRAGS.length)

export default function MoleculeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = 0, H = 0
    const setSize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    let lastTs = null
    let rafId

    const draw = (ts) => {
      if (lastTs === null) lastTs = ts
      const dt = Math.min((ts - lastTs) / 1000, 0.05)
      lastTs = ts
      _t += dt                         // advance the shared clock

      ctx.clearRect(0, 0, W, H)

      ctx.fillStyle = '#07071e'
      ctx.fillRect(0, 0, W, H)

      const g1 = ctx.createRadialGradient(W * 0.02, H * 0.02, 0, W * 0.02, H * 0.02, W * 0.55)
      g1.addColorStop(0, 'rgba(28, 130, 155, 0.20)')
      g1.addColorStop(1, 'rgba(28, 130, 155, 0)')
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H)

      const g2 = ctx.createRadialGradient(W * 0.98, H * 0.98, 0, W * 0.98, H * 0.98, W * 0.52)
      g2.addColorStop(0, 'rgba(75, 38, 120, 0.26)')
      g2.addColorStop(1, 'rgba(75, 38, 120, 0)')
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H)

      FRAGS.forEach((frag, i) => {
        const phase  = _t * frag.rotSpd + PHASE_OFFSETS[i]
        // Composite float: two sinusoids with irrational ratio (×√2) so the
        // vertical motion never visibly repeats within a typical session.
        const floatY = Math.sin(_t * frag.floatS        + i * 1.3) * frag.floatA * 0.62
                     + Math.sin(_t * frag.floatS * S2   + i * 2.7) * frag.floatA * 0.38
        const scale  = H / 900

        drawFragment(ctx, {
          ...frag,
          cx:     W * frag.relX,
          cy:     H * frag.relY + floatY,
          height: frag.height * scale,
          amp:    frag.amp * scale,
          period: frag.period * scale,
        }, phase)
      })

      rafId = requestAnimationFrame(draw)
    }

    // Reset lastTs when tab becomes visible to avoid a dt spike
    const onVisibility = () => { if (!document.hidden) lastTs = null }
    document.addEventListener('visibilitychange', onVisibility)

    rafId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', setSize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
