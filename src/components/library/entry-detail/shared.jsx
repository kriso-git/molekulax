// Shared primitives for EntryDetail and its lazy below-fold chunk.
// Extracted from EntryDetail.jsx as part of Phase 9 Task 12 to allow the
// below-fold sub-components (Indications, Interactions, Safety, Related,
// FAQ, Studies) to live in a separate React.lazy chunk while still
// reusing these helpers above the fold.

import { useEffect, useRef, useState } from 'react'
import { Sparkles, ChevronDown } from 'lucide-react'

// ─── 3D mouse-tilt hook ──────────────────────────────────────────────
// Rotates the target around its center based on cursor position. The
// effect is subtle (max ~6deg) and decays smoothly on leave.
export function useTilt(maxDeg = 6) {
 const ref = useRef(null)
 useEffect(() => {
 const el = ref.current
 if (!el) return
 let raf = 0
 const onMove = (e) => {
 const r = el.getBoundingClientRect()
 const x = (e.clientX - r.left) / r.width - 0.5
 const y = (e.clientY - r.top) / r.height - 0.5
 cancelAnimationFrame(raf)
 raf = requestAnimationFrame(() => {
 el.style.transform =
 `perspective(800px) rotateX(${(-y * maxDeg).toFixed(2)}deg) rotateY(${(x * maxDeg).toFixed(2)}deg) translateZ(0)`
 })
 }
 const onLeave = () => {
 cancelAnimationFrame(raf)
 el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
 }
 el.addEventListener('mousemove', onMove)
 el.addEventListener('mouseleave', onLeave)
 return () => {
 cancelAnimationFrame(raf)
 el.removeEventListener('mousemove', onMove)
 el.removeEventListener('mouseleave', onLeave)
 }
 }, [maxDeg])
 return ref
}

// ─── Magnetic CTA hook ───────────────────────────────────────────────
export function useMagnet(strength = 0.35) {
 const ref = useRef(null)
 useEffect(() => {
 const el = ref.current
 if (!el) return
 const onMove = (e) => {
 const r = el.getBoundingClientRect()
 const cx = r.left + r.width / 2
 const cy = r.top + r.height / 2
 el.style.transform = `translate3d(${(e.clientX - cx) * strength}px, ${(e.clientY - cy) * strength}px, 0)`
 }
 const onLeave = () => { el.style.transform = 'translate3d(0,0,0)' }
 el.addEventListener('mousemove', onMove)
 el.addEventListener('mouseleave', onLeave)
 return () => {
 el.removeEventListener('mousemove', onMove)
 el.removeEventListener('mouseleave', onLeave)
 }
 }, [strength])
 return ref
}

// ─── Particle field canvas around the vial ───────────────────────────
export function ParticleField({ color = '#a78bfa', count = 32 }) {
 const ref = useRef(null)
 useEffect(() => {
 const cvs = ref.current
 if (!cvs) return
 const ctx = cvs.getContext('2d')
 let raf = 0
 const dpr = window.devicePixelRatio || 1
 const resize = () => {
 const r = cvs.getBoundingClientRect()
 cvs.width = r.width * dpr
 cvs.height = r.height * dpr
 ctx.scale(dpr, dpr)
 }
 resize()
 const w = () => cvs.width / dpr
 const h = () => cvs.height / dpr
 const ps = Array.from({ length: count }, () => ({
 x: Math.random() * w(),
 y: Math.random() * h(),
 vx: (Math.random() - 0.5) * 0.18,
 vy: (Math.random() - 0.5) * 0.18,
 r: 0.7 + Math.random() * 1.6,
 a: 0.2 + Math.random() * 0.6,
 }))
 const tick = () => {
 ctx.clearRect(0, 0, w(), h())
 ps.forEach(p => {
 p.x += p.vx; p.y += p.vy
 if (p.x < 0 || p.x > w()) p.vx *= -1
 if (p.y < 0 || p.y > h()) p.vy *= -1
 ctx.beginPath()
 ctx.fillStyle = color + Math.round(p.a * 255).toString(16).padStart(2, '0')
 ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
 ctx.fill()
 })
 raf = requestAnimationFrame(tick)
 }
 tick()
 window.addEventListener('resize', resize)
 return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
 }, [color, count])
 return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}

// ─── Conic-gradient halo ring around the vial ────────────────────────
export function HoloRing({ color, tierColor, isLight }) {
 // In light mode, dial down ring alpha so it complements the cream backdrop
 // instead of fighting it.
 const o = isLight ? { strong: '99', medium: '66', light: '44', faint: '33' }
 : { strong: 'cc', medium: 'aa', light: '66', faint: '55' }
 return (
 <>
 <div
 className="absolute inset-0 rounded-full animate-[spin_18s_linear_infinite] pointer-events-none"
 style={{
 background: `conic-gradient(from 0deg, ${color}00, ${color}${o.strong}, ${tierColor}${o.strong}, ${color}00 60%, ${color}${o.medium}, ${color}00)`,
 mask: 'radial-gradient(circle, transparent 58%, black 60%, black 80%, transparent 82%)',
 WebkitMask: 'radial-gradient(circle, transparent 58%, black 60%, black 80%, transparent 82%)',
 filter: 'blur(0.5px)',
 }}
 />
 <div
 className="absolute inset-4 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none"
 style={{
 background: `conic-gradient(from 90deg, ${tierColor}00, ${tierColor}${o.faint} 25%, ${tierColor}00 50%, ${color}${o.light} 75%, ${tierColor}00)`,
 mask: 'radial-gradient(circle, transparent 70%, black 72%, black 88%, transparent 90%)',
 WebkitMask: 'radial-gradient(circle, transparent 70%, black 72%, black 88%, transparent 90%)',
 }}
 />
 </>
 )
}

// ─── Lab terminal: typewriter-style molecular info ───────────────────
export function LabTerminal({ rows, accent, tr }) {
 const [shown, setShown] = useState(0)
 useEffect(() => {
 setShown(0)
 let i = 0
 const id = setInterval(() => {
 i += 1
 setShown(i)
 if (i >= rows.length) clearInterval(id)
 }, 140)
 return () => clearInterval(id)
 }, [rows])
 return (
 <div
 className="relative p-5 rounded-2xl overflow-hidden"
 style={{
 // Always-dark terminal aesthetic (NOT var(--bg-tile)) so the monospace data +
 // the light row text stay readable in light mode too — a dark code/terminal
 // panel reads as intentional on a light page.
 background: '#0b0e1a',
 border: `1px solid ${accent}44`,
 boxShadow: `0 0 32px -10px ${accent}55, inset 0 0 60px rgba(0,0,0,0.4)`,
 fontFamily: 'ui-monospace, "SF Mono", "Cascadia Mono", Consolas, monospace',
 }}
 >
 {/* Scanlines overlay */}
 <div
 className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
 style={{
 backgroundImage: `repeating-linear-gradient(0deg, ${accent}10 0px, ${accent}10 1px, transparent 1px, transparent 3px)`,
 }}
 />
 <div className="flex items-center gap-1.5 mb-4 relative">
 <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f87171' }} />
 <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#fbbf24' }} />
 <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34d399' }} />
 <span className="ml-3 text-[10px] tracking-widest uppercase" style={{ color: accent }}>
 /lab/molecular-data.json
 </span>
 <span className="ml-auto text-[10px] tracking-widest uppercase opacity-60" style={{ color: accent }}>
 LIVE
 </span>
 </div>
 <div className="space-y-2 relative">
 {rows.slice(0, shown).map((r, i) => (
 <div
 key={i}
 className="flex flex-col sm:grid sm:grid-cols-[max-content_1fr] sm:gap-x-4 gap-y-0.5 text-[12px]"
 style={{ color: '#cbd5e1' }}
 >
 <span className="whitespace-nowrap" style={{ color: accent }}>{'>'} {tr(r.key)}</span>
 <span className="opacity-90 break-words sm:pl-0 pl-3">{tr(r.value)}</span>
 </div>
 ))}
 {shown < rows.length && (
 <span
 className="inline-block w-2 h-3.5 align-middle animate-pulse"
 style={{ background: accent }}
 />
 )}
 </div>
 </div>
 )
}

// ─── Section eyebrow ────────────────────────────────────────────────
export function Eyebrow({ icon: Icon, label, accent }) {
 return (
 <div className="flex items-center gap-2 mb-3">
 <span
 className="inline-flex items-center justify-center w-6 h-6 rounded-md"
 style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
 >
 <Icon size={12} strokeWidth={2.5} />
 </span>
 <p className="text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: accent }}>
 {label}
 </p>
 </div>
 )
}

// ─── 3D-tilt glass card wrapper ─────────────────────────────────────
export function GlassCard({ children, accent, className = '', style = {}, area, tilt = true }) {
 const tiltRef = useTilt(tilt ? 5 : 0)
 return (
 <div
 ref={tilt ? tiltRef : null}
 className={`relative p-5 rounded-2xl transition-transform duration-300 will-change-transform ${className}`}
 style={{
 gridArea: area,
 background: 'linear-gradient(135deg, var(--tint-soft), var(--tint-soft))',
 border: '1px solid var(--tint-soft-border)',
 backdropFilter: 'blur(20px)',
 WebkitBackdropFilter: 'blur(20px)',
 boxShadow: `0 24px 60px -28px ${accent}55, inset 0 1px 0 var(--tint-medium)`,
 transformStyle: 'preserve-3d',
 ...style,
 }}
 >
 <div
 className="absolute -inset-px rounded-2xl pointer-events-none opacity-60"
 style={{
 background: `radial-gradient(120% 80% at 0% 0%, ${accent}26, transparent 50%)`,
 maskImage: 'linear-gradient(black, black)',
 }}
 />
 <div className="relative" style={{ transform: 'translateZ(24px)' }}>{children}</div>
 </div>
 )
}

// ─── Indications Accordion, color-rail per category ───────────────
// Layout: vertical stack; each indication has a left "energy bar" rail
// colored by category accent. Active state expands a content panel with
// 2-4 sub-mechanisms rendered as data-points with mini connector lines.
// Lives in shared.jsx because Indications renders above the fold but the
// component is also listed in the Task 12 below-fold extraction set.
export function IndicationsAccordion({ items, tr, t }) {
 const [open, setOpen] = useState(0)
 if (!items?.length) return null
 return (
 <div className="space-y-2">
 {items.map((it, i) => {
 const isOpen = i === open
 return (
 <div
 key={it.id}
 className="relative rounded-2xl overflow-hidden transition-all duration-300"
 style={{
 background: isOpen
 ? `linear-gradient(135deg, ${it.accent}14, ${it.accent}04 60%, transparent)`
 : 'var(--tint-soft)',
 border: `1px solid ${isOpen ? it.accent + '55' : 'var(--tint-soft-border)'}`,
 boxShadow: isOpen ? `0 24px 60px -28px ${it.accent}66` : 'none',
 }}
 >
 {/* Left energy rail */}
 <div
 className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500"
 style={{
 background: isOpen
 ? `linear-gradient(180deg, transparent, ${it.accent}, transparent)`
 : `${it.accent}33`,
 boxShadow: isOpen ? `0 0 12px ${it.accent}` : 'none',
 }}
 />
 <button
 onClick={() => setOpen(isOpen ? -1 : i)}
 className="relative w-full flex items-center gap-3 px-5 py-4 text-left"
 >
 <span
 className="w-2.5 h-2.5 rounded-full shrink-0"
 style={{ background: it.accent, boxShadow: `0 0 12px ${it.accent}cc` }}
 />
 <span className="flex-1 font-bold text-[13px] tracking-wide" style={{ color: 'var(--text-primary)' }}>
 {tr(it.label)}
 </span>
 {i === 0 && (
 <span
 className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] tracking-[0.22em] uppercase font-bold"
 style={{
 background: `${it.accent}22`,
 border: `1px solid ${it.accent}66`,
 color: it.accent,
 }}
 >
 <Sparkles size={9} />
 {t('entry.ind.most') || 'Most studied'}
 </span>
 )}
 <ChevronDown
 size={16}
 strokeWidth={2.5}
 style={{ color: it.accent, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
 />
 </button>
 {isOpen && (
 <div className="relative px-5 pb-5 pt-1 grid sm:grid-cols-2 gap-3">
 {it.items.map((sub, j) => (
 <div
 key={j}
 className="relative pl-4 py-2"
 >
 <span
 className="absolute left-0 top-3.5 w-2 h-2 rounded-full"
 style={{ background: it.accent, boxShadow: `0 0 8px ${it.accent}` }}
 />
 <span
 className="absolute left-1 top-5 bottom-2 w-px"
 style={{ background: `linear-gradient(180deg, ${it.accent}88, transparent)` }}
 />
 <p className="text-[12px] font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
 {tr(sub.title)}
 </p>
 <p className="text-[11.5px] leading-snug" style={{ color: 'var(--text-muted)' }}>
 {tr(sub.desc)}
 </p>
 </div>
 ))}
 </div>
 )}
 </div>
 )
 })}
 </div>
 )
}

// ─── Tab pill toggle for the right-rail data view ──────────────────
export function TabPills({ tabs, active, onChange, accent }) {
 return (
 <div
 className="inline-flex p-1 rounded-full"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 {tabs.map(t => (
 <button
 key={t.id}
 onClick={() => onChange(t.id)}
 className="px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase font-bold rounded-full transition-all"
 style={{
 color: active === t.id ? '#fff' : 'var(--text-muted)',
 background: active === t.id
 ? `linear-gradient(135deg, ${accent}cc, ${accent}77)`
 : 'transparent',
 boxShadow: active === t.id ? `0 0 16px -4px ${accent}aa` : 'none',
 }}
 >
 {t.label}
 </button>
 ))}
 </div>
 )
}
