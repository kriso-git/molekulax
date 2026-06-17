import { useEffect, useRef } from 'react'

// Hidden demo page (route: #card-preview or /card-preview) for validating the
// per-category 3D card visuals with the owner. Not linked from anywhere.
// Renders the 5 nootropics "cognitive" categories, each with its relevant motif.

const CARDS = [
  { motif: 'neural', hex: '#fbbf24', sub: '4 vegyület · AMPA / mGluR moduláció', title: 'Racetamok', desc: 'AMPA-glutamát és metabotrop glutamát receptorok modulációja, fokozott kolinerg transzmisszió és LTP.', chips: ['Phenylpiracetam', 'Aniracetam', 'Oxiracetam', 'Piracetam'] },
  { motif: 'plasma', hex: '#7dd3fc', sub: '4 vegyület · eugeroikum stimulánsok', title: 'Modafinil típusok', desc: 'Ébrenléti (eugeroikum) szerek a dopamin-transzporter és a hisztamin H3-receptor rendszerén keresztül.', chips: ['Modafinil', 'Armodafinil', 'Flmodafinil', 'Adrafinil'] },
  { motif: 'molecule', hex: '#fb923c', sub: 'dopaminerg · motiváció', title: 'Dopamin / Motiváció', desc: 'A dopamin-rendszer modulációja, motiváció és hangulat támogatása.', chips: ['9-Me-BC', 'Paraxanthine', 'Bromantane', 'Sulbutiamine'] },
  { motif: 'dna', hex: '#a78bfa', sub: 'neurotrofikus · neurogenezis', title: 'BDNF / Neuroplaszticitás', desc: 'BDNF-jelátvitel, neuroplaszticitás és memóriakonszolidáció támogatása.', chips: ['J-147', 'Semax', 'Dihexa', 'AF710B'] },
  { motif: 'atom', hex: '#5eead4', sub: 'acetilkolin-rendszer', title: 'Kolinerg boosterek', desc: 'A kolinerg transzmisszió erősítése acetilkolin-prekurzorokkal és AChE-modulációval.', chips: ['Citicoline', 'Alpha-GPC', 'Huperzine A', 'Centrophenoxine'] },
]

function MotifCanvas({ motif, hex }) {
  const ref = useRef(null)
  useEffect(() => {
    let api = null, disposed = false
    import('../three/cardMotifs').then(({ createCardMotif }) => {
      if (disposed || !ref.current) return
      try { api = createCardMotif(ref.current, motif, hex) } catch (e) { console.warn('[CardViz] WebGL unavailable:', e?.message || e) }
    }).catch((e) => console.warn('[CardViz] chunk load failed:', e?.message || e))
    return () => { disposed = true; if (api) api.dispose() }
  }, [motif, hex])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
}

export default function CardVizPreview() {
  return (
    <div style={{ minHeight: '100vh', background: '#070914', color: '#e7e9f3', fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif', padding: '0 0 60px' }}>
      <div style={{ position: 'fixed', top: 14, left: 16, zIndex: 20, pointerEvents: 'none' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.35)', borderRadius: 20, padding: '5px 12px' }}>
          ● Preview — kártya-vizuál (nem éles)
        </span>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '70px 24px 0' }}>
        <p style={{ color: '#818cf8', fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Kognitív hatásterületek</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, fontStyle: 'italic', textAlign: 'center', marginBottom: 12 }}>Three.js kártya-vizuálok</h1>
        <p style={{ color: '#9aa0bb', fontSize: 14, textAlign: 'center', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.6 }}>
          Minden kategória a jelentéséhez illő, „releváns" 3D motívumot kap (a kép helyén), a saját színével. Demó / nem végleges minőség.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
          {CARDS.map((c) => (
            <div key={c.title} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden', background: 'rgba(13,16,32,0.55)', backdropFilter: 'blur(8px)' }}>
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <MotifCanvas motif={c.motif} hex={c.hex} />
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse at 50% 50%, ${c.hex}14 0%, rgba(7,9,20,.55) 80%)` }} />
              </div>
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8, color: c.hex }}>{c.sub}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 9 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#9aa0bb', lineHeight: 1.55, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {c.chips.map((x) => (
                    <span key={x} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)', color: '#cfd4ea', background: 'rgba(255,255,255,0.04)' }}>{x}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
