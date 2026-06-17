import { useState } from 'react'
import DnaBackground from './DnaBackground'

// Hidden preview page (route: #dna-preview) for validating the 3D DNA
// background direction with the site owner. Not linked from anywhere.
// Renders the real DnaBackground behind sample content + live tuning sliders.

const PALETTES = [
  { id: 'mixed', label: 'Vegyes' },
  { id: 'green', label: 'Zöld' },
  { id: 'cool', label: 'Teal / violet' },
]

function Slider({ label, value, min, max, step = 1, onChange, fmt }) {
  return (
    <label style={{ display: 'block', marginBottom: 14 }}>
      <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#aab0cc', marginBottom: 5 }}>
        <span>{label}</span>
        <b style={{ color: '#00ff99', fontWeight: 600 }}>{fmt ? fmt(value) : value}</b>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: '#00ff99' }}
      />
    </label>
  )
}

export default function DnaPreview() {
  const [p, setP] = useState({ count: 16, size: 0.72, glow: 0.34, rough: 0.6, speed: 2.0, palette: 'cool' })
  const set = (k) => (v) => setP((s) => ({ ...s, [k]: v }))

  // matches the live site backdrop: #07071e base + teal (top-left) & violet
  // (bottom-right) radial glows (same colors as the current MoleculeBackground)
  const siteBg =
    'radial-gradient(55vw 55vw at 2% 2%, rgba(28,130,155,0.20), transparent 70%),' +
    'radial-gradient(52vw 52vw at 98% 98%, rgba(75,38,120,0.26), transparent 70%),' +
    '#07071e'

  return (
    <div style={{ position: 'fixed', inset: 0, background: siteBg, overflow: 'hidden', fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif' }}>
      <DnaBackground {...p} />

      {/* PREVIEW banner */}
      <div style={{ position: 'fixed', top: 14, left: 16, zIndex: 20, pointerEvents: 'none' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00ff99', background: 'rgba(0,255,153,0.1)', border: '1px solid rgba(0,255,153,0.35)', borderRadius: 20, padding: '5px 12px' }}>
          ● Preview — DNS háttér (nem éles)
        </span>
      </div>

      {/* sample content overlay — shows legibility over the animated background */}
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', pointerEvents: 'none' }}>
        <p style={{ color: '#818cf8', fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>Tudásbázis</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 6vw, 64px)', fontWeight: 800, fontStyle: 'italic', marginBottom: 18 }}>Miért a MolekulaX?</h1>
        <p style={{ color: '#c3c8e0', fontSize: 17, maxWidth: 620, lineHeight: 1.6, marginBottom: 30 }}>
          Így néz ki egy szövegblokk a 3D DNS háttér felett — ellenőrizd, hogy jól olvasható-e, és hogy a háttér mozgása nem zavaró-e.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 760 }}>
          {['Tudományos farmakológia', 'Klinikai kutatások', 'Tanácsadó elérhetősége'].map((t) => (
            <div key={t} style={{ width: 220, background: 'rgba(13,16,32,0.55)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '22px 18px', textAlign: 'left' }}>
              <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{t}</h3>
              <p style={{ color: '#9aa0bb', fontSize: 13, lineHeight: 1.5 }}>Minta kártya, hogy lásd, hogyan ül meg a tartalom a háttéren.</p>
            </div>
          ))}
        </div>
      </div>

      {/* live tuning panel */}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 20, width: 232, background: 'rgba(10,12,24,0.84)', backdropFilter: 'blur(8px)', border: '1px solid #232a44', borderRadius: 12, padding: '14px 16px' }}>
        <Slider label="Spirálok száma" value={p.count} min={3} max={16} onChange={set('count')} />
        <Slider label="Méret" value={p.size} min={0.25} max={1.1} step={0.01} onChange={set('size')} fmt={(v) => v.toFixed(2)} />
        <Slider label="Ragyogás (glow)" value={p.glow} min={0} max={2.2} step={0.01} onChange={set('glow')} fmt={(v) => v.toFixed(2)} />
        <Slider label="Fényes ↔ Matt" value={p.rough} min={0.05} max={0.7} step={0.01} onChange={set('rough')} fmt={(v) => (v < 0.25 ? 'fényes' : v < 0.5 ? 'félfényes' : 'matt')} />
        <Slider label="Forgás-sebesség" value={p.speed} min={0} max={2} step={0.01} onChange={set('speed')} fmt={(v) => v.toFixed(2)} />
        <div style={{ fontSize: 12, color: '#aab0cc', marginBottom: 6 }}>Színvilág</div>
        <div style={{ display: 'flex', gap: 7 }}>
          {PALETTES.map((pal) => (
            <button
              key={pal.id}
              onClick={() => setP((s) => ({ ...s, palette: pal.id }))}
              style={{
                flex: 1, cursor: 'pointer', fontSize: 11, padding: '6px 0', borderRadius: 7,
                border: `1.5px solid ${p.palette === pal.id ? '#00ff99' : '#2a3050'}`,
                color: p.palette === pal.id ? '#00ff99' : '#cfd4ea',
                background: p.palette === pal.id ? 'rgba(0,255,153,0.12)' : 'transparent',
              }}
            >
              {pal.label}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 10.5, color: '#6a7090', marginTop: 12, lineHeight: 1.4 }}>
          Jelenlegi: {p.count} spirál · méret {p.size.toFixed(2)} · glow {p.glow.toFixed(2)} · {p.rough < 0.25 ? 'fényes' : p.rough < 0.5 ? 'félfényes' : 'matt'} · {p.palette}
        </p>
      </div>
    </div>
  )
}
