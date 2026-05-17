// MockupDetailV2, "Spatial Bento Lab"
// 2026-style formabontó peptid detail view. Inspirations: Apple Vision Pro
// spatial UI, holographic conic rings, glassmorphism bento grids, lab-
// terminal CRT typewriters, magnetic CTAs, 3D mouse-tilt cards.
//
// Same data contract as V1 (consumes adaptLibraryEntry output), but the
// layout, motion, and visualizations are intentionally radical.

import { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react'
import {
 X, ShieldCheck, ShieldAlert, Atom, Sparkles, Flame, Sprout, Brain,
 Shield, Moon, Heart, Leaf, Activity, Beaker, Rocket, FlaskConical,
 ArrowLeft, ArrowUpRight, ChevronRight, Calculator, ExternalLink, Zap, Plus, Minus,
 Check, AlertTriangle, XCircle, ChevronDown, Layers, Link as LinkIcon,
 CircleDot, Droplets, ClipboardList, TimerReset, Network, HelpCircle,
 Clock, BookOpen, Syringe, Pill, CalendarClock, CheckCircle2, Ban,
} from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/ThemeContext'
import { useLibrary } from '../../context/LibraryContext'
import TelegramButtons from '../TelegramButtons'
import MiniCalc from '../MiniCalc'
import BloodworkProtocol from './BloodworkProtocol'
import PerformanceCalculator from './PerformanceCalculator'
import PharmaceuticalCalculator from './PharmaceuticalCalculator'
import { useTilt, useMagnet, ParticleField, HoloRing, LabTerminal, Eyebrow, GlassCard, TabPills } from './entry-detail/shared'

const TIER_META = {
 5: { label: { hu: 'Engedélyezett', en: 'Approved', pl: 'Zatwierdzony' },
 color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.5)' },
 4: { label: { hu: 'Késői fázisú', en: 'Late-Stage', pl: 'Faza późna' },
 color: '#84cc16', bg: 'rgba(132,204,22,0.12)', border: 'rgba(132,204,22,0.5)' },
 3: { label: { hu: 'Klinikai kutatás', en: 'Clinical Research', pl: 'Badania kliniczne' },
 color: '#eab308', bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.5)' },
 2: { label: { hu: 'Preklinikai', en: 'Preclinical', pl: 'Przedkliniczne' },
 color: '#f97316', bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.5)' },
 1: { label: { hu: 'Korai kutatás', en: 'Emerging', pl: 'Wczesna faza' },
 color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.5)' },
}

const BENEFIT_ICONS = {
 flame: Flame, sprout: Sprout, activity: Activity, brain: Brain,
 sparkles: Sparkles, shield: Shield, moon: Moon, heart: Heart, leaf: Leaf,
}

// ─── Indications Accordion, color-rail per category ───────────────
// Layout: vertical stack; each indication has a left "energy bar" rail
// colored by category accent. Active state expands a content panel with
// 2-4 sub-mechanisms rendered as data-points with mini connector lines.
function IndicationsAccordion({ items, tr, t }) {
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

// ─── Reconstitute Path, clean numbered rail with animated trace ────
// Single vertical gradient line connects glass-chip numbers. A traveling
// pulse runs the rail to suggest direction, and each chip has a subtle
// breath animation on hover.
function ReconstitutePath({ steps, accent, tr }) {
 return (
 <div className="relative">
 {/* Solid gradient rail */}
 <div
 className="absolute left-[23px] top-5 bottom-5 w-[2px] rounded-full"
 style={{
 background: `linear-gradient(180deg, ${accent}00 0%, ${accent}66 8%, ${accent}88 50%, ${accent}66 92%, ${accent}00 100%)`,
 }}
 />
 {/* Animated traveling pulse along the rail */}
 <div
 className="absolute left-[20px] w-2 h-2 rounded-full pointer-events-none"
 style={{
 top: '0',
 background: accent,
 boxShadow: `0 0 14px ${accent}, 0 0 28px ${accent}aa`,
 animation: 'mlxRailPulse 3.4s ease-in-out infinite',
 }}
 />
 <style>{`
 @keyframes mlxRailPulse {
 0% { top: 8px; opacity: 0; transform: scale(0.6); }
 15% { opacity: 1; transform: scale(1); }
 85% { opacity: 1; transform: scale(1); }
 100% { top: calc(100% - 16px); opacity: 0; transform: scale(0.6); }
 }
 @keyframes mlxChipBreath {
 0%, 100% { box-shadow: 0 6px 18px -8px var(--mlx-chip-glow), inset 0 1px 0 var(--tint-medium-border); }
 50% { box-shadow: 0 6px 26px -6px var(--mlx-chip-glow), inset 0 1px 0 var(--tint-strong-border); }
 }
 `}</style>
 <ol className="space-y-3">
 {steps.map((s, i) => (
 <li
 key={i}
 className="relative flex items-start gap-4 pl-1 group"
 >
 <span
 className="relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-[13px] tracking-tight z-10"
 style={{
 background: `radial-gradient(circle at 30% 30%, ${accent}3a, ${accent}10)`,
 border: `1px solid ${accent}66`,
 color: accent,
 boxShadow: `0 6px 18px -8px ${accent}cc, inset 0 1px 0 var(--tint-medium-border)`,
 animation: `mlxChipBreath 4.5s ease-in-out ${i * 0.35}s infinite`,
 '--mlx-chip-glow': `${accent}cc`,
 backdropFilter: 'blur(6px)',
 }}
 >
 {String(i + 1).padStart(2, '0')}
 {/* Tick connector from chip to text */}
 <span
 className="absolute left-full top-1/2 -translate-y-1/2 h-px w-3"
 style={{ background: `linear-gradient(90deg, ${accent}88, transparent)` }}
 />
 </span>
 <p className="flex-1 text-[13px] leading-relaxed pt-3 pr-2" style={{ color: 'var(--text-secondary)' }}>
 {tr(s)}
 </p>
 </li>
 ))}
 </ol>
 </div>
 )
}

// ─── Quality grid, grouped pass/warn/fail columns ─────────────────
// Groups by status: green PASS column (positive markers), amber WARN
// column (caution markers), red FAIL column (do-not-use markers). Each
// column has a tinted header with a count chip.
function QualityGrid({ items, tr, t }) {
 const GROUPS = [
 { key: 'PASS', color: '#34d399', icon: CheckCircle2,
 title: { hu: 'Tisztaság jelei', en: 'Purity markers', pl: 'Oznaki czystości' } },
 { key: 'WARN', color: '#fbbf24', icon: AlertTriangle,
 title: { hu: 'Óvatosan', en: 'Use caution', pl: 'Z ostrożnością' } },
 { key: 'FAIL', color: '#f87171', icon: XCircle,
 title: { hu: 'Ne használd', en: 'Do not use', pl: 'Nie używaj' } },
 ]
 return (
 <div className="grid md:grid-cols-3 gap-3">
 {GROUPS.map(group => {
 const groupItems = items.filter(i => i.status === group.key)
 if (!groupItems.length) return null
 const GroupIcon = group.icon
 return (
 <div
 key={group.key}
 className="relative rounded-2xl overflow-hidden flex flex-col"
 style={{
 background: `linear-gradient(180deg, ${group.color}14, transparent 80%)`,
 border: `1px solid ${group.color}33`,
 }}
 >
 <div
 className="absolute top-0 left-0 right-0 h-[2px]"
 style={{ background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }}
 />
 {/* Column header */}
 <div className="relative flex items-center gap-2.5 px-4 py-3 border-b" style={{ borderColor: `${group.color}22` }}>
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
 style={{
 background: `${group.color}22`,
 border: `1px solid ${group.color}55`,
 color: group.color,
 boxShadow: `0 0 18px -4px ${group.color}99`,
 }}
 >
 <GroupIcon size={15} strokeWidth={2.5} />
 </span>
 <p className="text-[11px] tracking-[0.22em] uppercase font-bold flex-1" style={{ color: group.color }}>
 {tr(group.title)}
 </p>
 <span
 className="text-[10px] font-black px-2 py-0.5 rounded-full"
 style={{
 background: `${group.color}1a`,
 border: `1px solid ${group.color}44`,
 color: group.color,
 }}
 >
 {groupItems.length}
 </span>
 </div>
 {/* Items list */}
 <ul className="relative p-3 space-y-2 flex-1">
 {groupItems.map((q, i) => (
 <li
 key={i}
 className="relative flex items-start gap-2.5 p-2.5 rounded-lg"
 style={{
 background: 'var(--tint-soft)',
 border: `1px solid ${group.color}1f`,
 }}
 >
 <span
 className="shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center"
 style={{
 background: `${group.color}26`,
 color: group.color,
 }}
 >
 <GroupIcon size={11} strokeWidth={3} />
 </span>
 <div className="flex-1 min-w-0">
 <p className="text-[12px] font-bold leading-tight mb-0.5" style={{ color: 'var(--text-primary)' }}>
 {tr(q.title)}
 </p>
 <p className="text-[10.5px] leading-snug" style={{ color: 'var(--text-muted)' }}>
 {tr(q.desc)}
 </p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 )
 })}
 </div>
 )
}

// ─── Expectations timeline, horizontal rail with animated milestone orbs ─
function ExpectationsTimeline({ items, accent, tr }) {
 return (
 <div className="relative">
 <style>{`
 @keyframes mlxOrbPulse {
 0%, 100% { transform: scale(1); opacity: 0.55; }
 50% { transform: scale(1.6); opacity: 0; }
 }
 @keyframes mlxOrbHalo {
 0%, 100% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
 }
 @keyframes mlxOrbCore {
 0%, 100% { transform: scale(1); filter: brightness(1); }
 50% { transform: scale(1.08); filter: brightness(1.25); }
 }
 @keyframes mlxRailFlow {
 0% { background-position: 200% 0%; }
 100% { background-position: 0% 0%; }
 }
 `}</style>
 <div
 className="relative grid gap-4 sm:gap-0"
 style={{
 gridTemplateColumns: `repeat(${items.length}, minmax(180px, 1fr))`,
 }}
 >
 {/* Flowing connecting line */}
 <div
 className="hidden sm:block absolute top-7 left-8 right-8 h-[2px] rounded-full"
 style={{
 background: `linear-gradient(90deg, ${accent}00 0%, ${accent}aa 25%, ${accent}55 50%, ${accent}aa 75%, ${accent}00 100%)`,
 backgroundSize: '200% 100%',
 animation: 'mlxRailFlow 6s linear infinite',
 }}
 />
 {items.map((it, i) => (
 <div key={i} className="relative flex flex-col items-center text-center px-2">
 {/* Orb container with rotating halo + pulse + core */}
 <div className="relative w-14 h-14 mb-3 z-10 flex items-center justify-center">
 {/* Rotating conic halo */}
 <span
 className="absolute inset-0 rounded-full"
 style={{
 background: `conic-gradient(from 0deg, ${accent}00, ${accent}cc, ${accent}33 60%, ${accent}aa, ${accent}00)`,
 mask: 'radial-gradient(circle, transparent 56%, black 58%, black 96%, transparent 100%)',
 WebkitMask: 'radial-gradient(circle, transparent 56%, black 58%, black 96%, transparent 100%)',
 animation: `mlxOrbHalo ${8 + i}s linear infinite`,
 filter: 'blur(0.4px)',
 }}
 />
 {/* Outer pulse ring */}
 <span
 className="absolute inset-1.5 rounded-full pointer-events-none"
 style={{
 border: `1px solid ${accent}88`,
 animation: `mlxOrbPulse 2.8s ease-out ${i * 0.35}s infinite`,
 }}
 />
 {/* Core glass orb */}
 <span
 className="relative w-9 h-9 rounded-full flex items-center justify-center"
 style={{
 background: `radial-gradient(circle at 30% 30%, #ffffffd0, ${accent} 55%, ${accent}66 100%)`,
 border: `1px solid ${accent}`,
 boxShadow: `0 0 22px -2px ${accent}cc, inset 0 1px 0 rgba(255,255,255,0.5)`,
 animation: `mlxOrbCore 3.6s ease-in-out ${i * 0.25}s infinite`,
 }}
 >
 <span
 className="text-[10px] font-black"
 style={{
 color: '#0a0a1a',
 textShadow: '0 1px 2px rgba(255,255,255,0.5)',
 }}
 >
 {String(i + 1).padStart(2, '0')}
 </span>
 </span>
 </div>
 <p className="text-[10px] tracking-[0.22em] uppercase font-bold mb-2" style={{ color: accent }}>
 {tr(it.when)}
 </p>
 <p className="text-[11.5px] leading-snug" style={{ color: 'var(--text-secondary)' }}>
 {tr(it.text)}
 </p>
 </div>
 ))}
 </div>
 </div>
 )
}

// ─── Interactions Orbit, synergy/avoid table with status edge ─────
const INTERACTION_PALETTE = {
 SYNERGISTIC: { color: '#10b981', icon: CheckCircle2, label: { hu: 'Szinergikus', en: 'Synergistic', pl: 'Synergistyczna' } },
 COMPLEMENTARY: { color: '#22d3ee', icon: Plus, label: { hu: 'Kiegészítő', en: 'Complementary', pl: 'Uzupełniająca' } },
 COMPATIBLE: { color: '#a78bfa', icon: Check, label: { hu: 'Kompatibilis', en: 'Compatible', pl: 'Kompatybilna' } },
 TIMING: { color: '#fbbf24', icon: Clock, label: { hu: 'Időzítés kell', en: 'Requires timing', pl: 'Wymaga timingu' } },
 CAUTION: { color: '#fb923c', icon: AlertTriangle, label: { hu: 'Óvatosan', en: 'Use caution', pl: 'Z ostrożnością' } },
 AVOID: { color: '#f87171', icon: Ban, label: { hu: 'Kerülendő', en: 'Avoid', pl: 'Unikać' } },
}
// Priority order for interactions display: positives first, then timing,
// caution, then strictly-avoid at the bottom.
const INTERACTION_ORDER = ['SYNERGISTIC', 'COMPLEMENTARY', 'COMPATIBLE', 'TIMING', 'CAUTION', 'AVOID']
function InteractionsOrbit({ items, tr }) {
 if (!items?.length) return null
 const sorted = [...items].sort((a, b) => {
 const ai = INTERACTION_ORDER.indexOf(a.status); const bi = INTERACTION_ORDER.indexOf(b.status)
 return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
 })
 return (
 <div className="grid sm:grid-cols-2 gap-2.5">
 {sorted.map((it, i) => {
 const palette = INTERACTION_PALETTE[it.status] || INTERACTION_PALETTE.COMPATIBLE
 const color = palette.color
 const StatusIcon = palette.icon || Check
 return (
 <div
 key={i}
 className="relative p-3.5 rounded-xl overflow-hidden group transition-all hover:translate-y-[-1px]"
 style={{
 background: `linear-gradient(135deg, ${color}0a, var(--tint-soft))`,
 border: `1px solid ${color}33`,
 }}
 >
 {/* Left status edge */}
 <div
 className="absolute left-0 top-0 bottom-0 w-1"
 style={{
 background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
 boxShadow: `0 0 16px ${color}`,
 }}
 />
 <div className="relative pl-3 flex items-start gap-3">
 <span
 className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
 style={{
 background: `linear-gradient(135deg, ${color}26, ${color}0d)`,
 border: `1px solid ${color}55`,
 color,
 boxShadow: `0 0 18px -6px ${color}aa, inset 0 1px 0 var(--tint-strong)`,
 }}
 >
 <StatusIcon size={16} strokeWidth={2.4} />
 </span>
 <div className="flex-1 min-w-0">
 <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
 <p className="text-[12.5px] font-bold" style={{ color: 'var(--text-primary)' }}>
 {it.name}
 </p>
 <span
 className="inline-flex items-center gap-1 text-[9px] tracking-[0.22em] uppercase font-black px-2 py-0.5 rounded-full whitespace-nowrap"
 style={{
 background: `${color}1a`,
 border: `1px solid ${color}55`,
 color,
 }}
 >
 <StatusIcon size={10} strokeWidth={2.6} />
 {tr(palette.label)}
 </span>
 </div>
 <p className="text-[11px] leading-snug" style={{ color: 'var(--text-muted)' }}>
 {tr(it.note)}
 </p>
 </div>
 </div>
 </div>
 )
 })}
 </div>
 )
}

// ─── Safety triptych, three glass columns ─────────────────────────
function SafetyTriptych({ profile, accent, tr, t }) {
 if (!profile) return null
 const cols = [
 { id: 'side', color: '#fbbf24', icon: AlertTriangle, items: profile.sideEffects,
 heading: t('entry.safe.side') || 'Mellékhatások' },
 { id: 'stop', color: '#f87171', icon: XCircle, items: profile.whenToStop,
 heading: t('entry.safe.stop') || 'Mikor hagyd abba a használatot' },
 { id: 'contra', color: '#a78bfa', icon: Shield, items: profile.contraindications,
 heading: t('entry.safe.contra') || 'Ellenjavallatok' },
 ]
 return (
 <div className="grid md:grid-cols-3 gap-3">
 {cols.map(col => {
 const Icon = col.icon
 return (
 <div
 key={col.id}
 className="relative p-5 rounded-2xl overflow-hidden"
 style={{
 background: `linear-gradient(180deg, ${col.color}10, transparent 70%)`,
 border: `1px solid ${col.color}33`,
 }}
 >
 <div
 className="absolute top-0 left-0 right-0 h-[2px]"
 style={{ background: `linear-gradient(90deg, transparent, ${col.color}, transparent)` }}
 />
 <div className="flex items-center gap-2.5 mb-4">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center"
 style={{
 background: `${col.color}22`,
 border: `1px solid ${col.color}55`,
 color: col.color,
 boxShadow: `0 0 18px -4px ${col.color}99`,
 }}
 >
 <Icon size={14} strokeWidth={2.5} />
 </span>
 <p className="text-[11px] tracking-[0.24em] uppercase font-bold" style={{ color: col.color }}>
 {col.heading} <span className="opacity-60">· {col.items.length}</span>
 </p>
 </div>
 <ul className="space-y-2">
 {col.items.map((item, i) => (
 <li key={i} className="flex items-start gap-2.5 text-[12px] leading-snug" style={{ color: 'var(--text-secondary)' }}>
 <span
 className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
 style={{ background: col.color, boxShadow: `0 0 6px ${col.color}` }}
 />
 <span>{tr(item)}</span>
 </li>
 ))}
 </ul>
 </div>
 )
 })}
 </div>
 )
}

// ─── Related Peptides, fixed-corner layout, click jumps to peptide ─
function RelatedCard({ peptide, onJump, tr, t }) {
 if (!peptide) return null
 const tiltRef = useTilt(10)
 return (
 <button
 ref={tiltRef}
 onClick={() => onJump(peptide.id)}
 className="mlx-related-card group relative rounded-2xl text-left min-h-[180px] overflow-hidden transition-transform duration-300 will-change-transform"
 style={{
 background: 'linear-gradient(135deg, var(--tint-soft), var(--tint-soft))',
 border: '1px solid var(--tint-soft-border)',
 boxShadow: `0 24px 60px -28px ${peptide.accentColor}66`,
 transformStyle: 'preserve-3d',
 '--mlx-accent': peptide.accentColor,
 }}
 >
 {/* Ambient accent glow, bottom-right, brightens on hover */}
 <div
 className="mlx-related-glow absolute -inset-px rounded-2xl pointer-events-none"
 style={{ background: `radial-gradient(120% 80% at 100% 0%, ${peptide.accentColor}26, transparent 50%)` }}
 />
 {/* Diagonal sheen, sweeps across on hover */}
 <div
 className="mlx-related-sheen absolute inset-0 pointer-events-none rounded-2xl"
 style={{
 background: `linear-gradient(115deg, transparent 30%, ${peptide.accentColor}1f 50%, transparent 70%)`,
 }}
 />
 {/* Accent ring, fades in on hover */}
 <div
 className="mlx-related-ring absolute inset-0 rounded-2xl pointer-events-none"
 style={{ boxShadow: `inset 0 0 0 1px ${peptide.accentColor}66` }}
 />

 {/* Floating 3D content layer, lifts above card plane */}
 <div className="absolute inset-0" style={{ transform: 'translateZ(28px)', transformStyle: 'preserve-3d' }}>
 {/* Top-left: tier tag */}
 <span
 className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] tracking-[0.22em] uppercase font-bold z-10"
 style={{
 background: `${peptide.tierColor}1a`,
 border: `1px solid ${peptide.tierColor}55`,
 color: peptide.tierColor,
 }}
 >
 {peptide.tier >= 5 && <ShieldCheck size={9} />}
 {tr(peptide.tierLabel)}
 </span>

 {/* Universal middle band, name (single line, slightly above center) + chips below */}
 <div
 className="absolute left-4 right-4 z-10"
 style={{ top: '44%', transform: 'translateY(-50%)' }}
 >
 <p
 className="mlx-related-name font-black text-lg tracking-tight leading-tight mb-2.5 whitespace-nowrap overflow-hidden text-ellipsis"
 style={{ color: peptide.accentColor }}
 >
 {peptide.name}
 </p>
 <div className="flex flex-wrap gap-1.5">
 {peptide.chips.map((c, i) => (
 <span
 key={i}
 className="text-[9px] px-2 py-0.5 rounded-full font-semibold tracking-wide"
 style={{
 background: `${peptide.accentColor}14`,
 border: `1px solid ${peptide.accentColor}44`,
 color: peptide.accentColor,
 }}
 >
 {tr(c)}
 </span>
 ))}
 </div>
 </div>

 {/* Bottom-left: "Részletek" link */}
 <div
 className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase font-bold opacity-70 group-hover:opacity-100 transition-opacity z-10"
 style={{ color: peptide.accentColor }}
 >
 {t('entry.related.cta') || 'Részletek'}
 <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
 </div>
 </div>
 </button>
 )
}

// ─── FAQ Console, terminal-prompt style accordion ─────────────────
function FaqConsole({ items, accent, tr }) {
 const [open, setOpen] = useState(0)
 if (!items?.length) return null
 return (
 <div className="space-y-1">
 {items.map((f, i) => {
 const isOpen = i === open
 return (
 <div
 key={i}
 className="rounded-xl overflow-hidden transition-all"
 style={{
 background: isOpen ? `${accent}0a` : 'transparent',
 border: `1px solid ${isOpen ? accent + '44' : 'var(--tint-soft-border)'}`,
 }}
 >
 <button
 onClick={() => setOpen(isOpen ? -1 : i)}
 className="w-full flex items-center gap-3 px-4 py-3 text-left"
 style={{ fontFamily: 'ui-monospace, "SF Mono", Consolas, monospace' }}
 >
 <span style={{ color: accent }}>{isOpen ? '▼' : '▶'}</span>
 <span className="flex-1 text-[12.5px] font-semibold" style={{ color: 'var(--text-primary)' }}>
 <span style={{ color: accent, opacity: 0.7 }}>{String(i + 1).padStart(2, '0')}_</span>{' '}
 {tr(f.q)}
 </span>
 </button>
 {isOpen && (
 <div className="px-4 pb-3 pl-10">
 <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {tr(f.a)}
 </p>
 </div>
 )}
 </div>
 )
 })}
 </div>
 )
}

// ─── Pathway constellation, quick-start as connected nodes ────────
function Constellation({ steps, accent, tr }) {
 return (
 <div className="relative">
 <style>{`
 @keyframes mlxOrbPulse {
 0%, 100% { transform: scale(1); opacity: 0.55; }
 50% { transform: scale(1.6); opacity: 0; }
 }
 @keyframes mlxOrbHalo {
 0%, 100% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
 }
 @keyframes mlxOrbCore {
 0%, 100% { transform: scale(1); filter: brightness(1); }
 50% { transform: scale(1.08); filter: brightness(1.25); }
 }
 @keyframes mlxRailFlow {
 0% { background-position: 200% 0%; }
 100% { background-position: 0% 0%; }
 }
 `}</style>
 <style>{`
 .mlx-step-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; position: relative; }
 @media (min-width: 640px) {
 .mlx-step-grid { grid-template-columns: repeat(var(--mlx-step-cols, 4), minmax(0, 1fr)); gap: 0; }
 }
 `}</style>
 <div
 className="mlx-step-grid"
 style={{ '--mlx-step-cols': steps.length }}
 >
 {/* Flowing connecting line */}
 <div
 className="hidden sm:block absolute top-7 left-8 right-8 h-[2px] rounded-full"
 style={{
 background: `linear-gradient(90deg, ${accent}00 0%, ${accent}aa 25%, ${accent}55 50%, ${accent}aa 75%, ${accent}00 100%)`,
 backgroundSize: '200% 100%',
 animation: 'mlxRailFlow 6s linear infinite',
 }}
 />
 {steps.map((s, i) => (
 <div key={i} className="relative flex flex-col items-center text-center px-2">
 {/* Orb container with rotating halo + pulse + core */}
 <div className="relative w-14 h-14 mb-3 z-10 flex items-center justify-center">
 {/* Rotating conic halo */}
 <span
 className="absolute inset-0 rounded-full"
 style={{
 background: `conic-gradient(from 0deg, ${accent}00, ${accent}cc, ${accent}33 60%, ${accent}aa, ${accent}00)`,
 mask: 'radial-gradient(circle, transparent 56%, black 58%, black 96%, transparent 100%)',
 WebkitMask: 'radial-gradient(circle, transparent 56%, black 58%, black 96%, transparent 100%)',
 animation: `mlxOrbHalo ${8 + i}s linear infinite`,
 filter: 'blur(0.4px)',
 }}
 />
 {/* Outer pulse ring */}
 <span
 className="absolute inset-1.5 rounded-full pointer-events-none"
 style={{
 border: `1px solid ${accent}88`,
 animation: `mlxOrbPulse 2.8s ease-out ${i * 0.35}s infinite`,
 }}
 />
 {/* Core glass orb */}
 <span
 className="relative w-9 h-9 rounded-full flex items-center justify-center"
 style={{
 background: `radial-gradient(circle at 30% 30%, #ffffffd0, ${accent} 55%, ${accent}66 100%)`,
 border: `1px solid ${accent}`,
 boxShadow: `0 0 22px -2px ${accent}cc, inset 0 1px 0 rgba(255,255,255,0.5)`,
 animation: `mlxOrbCore 3.6s ease-in-out ${i * 0.25}s infinite`,
 }}
 >
 <span
 className="text-[10px] font-black"
 style={{
 color: '#0a0a1a',
 textShadow: '0 1px 2px rgba(255,255,255,0.5)',
 }}
 >
 {String(s.step ?? i + 1).padStart(2, '0')}
 </span>
 </span>
 </div>
 <p className="text-[10px] tracking-[0.22em] uppercase font-bold mb-2" style={{ color: accent }}>
 {tr(s.title)}
 </p>
 <p className="text-[11.5px] leading-snug" style={{ color: 'var(--text-secondary)' }}>
 {tr(s.detail)}
 </p>
 </div>
 ))}
 </div>
 </div>
 )
}

// ─── Vial Holosphere, center hero element ─────────────────────────
function Holosphere({ image, name, accent, tierColor, isLight }) {
 return (
 <div className="relative w-full aspect-square max-w-[420px] mx-auto">
 {/* Outer glow */}
 <div
 className="absolute inset-0 rounded-full pointer-events-none"
 style={{
 background: isLight
 ? `radial-gradient(circle at 50% 50%, ${accent}1a 0%, transparent 60%)`
 : `radial-gradient(circle at 50% 50%, ${accent}30 0%, transparent 60%)`,
 filter: 'blur(20px)',
 }}
 />
 <ParticleField color={accent} count={42} />
 <HoloRing color={accent} tierColor={tierColor} isLight={isLight} />
 {/* Vial */}
 <div className="absolute inset-[18%] flex items-center justify-center">
 {image ? (
 <picture>
   <source
     srcSet={image.replace(/\.png$/i, '.webp')}
     type="image/webp"
   />
   <img
     src={image}
     alt={`${name} vial`}
     className={isLight
     ? "w-full h-full object-contain drop-shadow-[0_10px_24px_rgba(15,23,42,0.25)]"
     : "w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"}
     style={{ filter: `drop-shadow(0 0 ${isLight ? '18px' : '30px'} ${accent}${isLight ? '33' : '66'})` }}
     draggable="false"
   />
 </picture>
 ) : (
 <Atom size={120} color={accent} strokeWidth={1.2} />
 )}
 </div>
 {/* Pedestal reflection */}
 <div
 className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-4 rounded-full"
 style={{
 background: isLight
 ? `radial-gradient(ellipse at center, ${accent}33 0%, transparent 70%)`
 : `radial-gradient(ellipse at center, ${accent}66 0%, transparent 70%)`,
 filter: 'blur(8px)',
 }}
 />
 </div>
 )
}

// ─── Dosing Panel, typical / range / frequency / cycle + notes + timeline ─
function DosingPanel({ dosing, accent, tr, t }) {
 if (!dosing) return null
 const stats = [
 { id: 'typical', icon: Syringe, label: t('entry.dose.typical') || 'Tipikus dózis', value: dosing.typical },
 { id: 'range', icon: Pill, label: t('entry.dose.range') || 'Tartomány', value: dosing.range },
 { id: 'frequency', icon: CalendarClock, label: t('entry.dose.frequency') || 'Gyakoriság', value: dosing.frequency },
 { id: 'cycle', icon: TimerReset, label: t('entry.dose.cycle') || 'Ciklus', value: dosing.cycle },
 ]
 const filled = stats.filter(s => {
 const v = s.value
 if (!v) return false
 if (typeof v === 'string') return v.trim().length > 0
 if (typeof v === 'object') return Object.values(v).some(x => typeof x === 'string' && x.trim().length > 0)
 return false
 })
 return (
 <div
 className="relative p-5 rounded-2xl overflow-hidden"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 <div
 className="absolute top-0 left-0 right-0 h-[2px]"
 style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }}
 />

 {filled.length > 0 && (
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
 {filled.map(s => {
 const SIcon = s.icon
 const displayValue = typeof s.value === 'string' ? s.value : tr(s.value)
 return (
 <div
 key={s.id}
 className="relative p-3 rounded-xl overflow-hidden"
 style={{
 background: `linear-gradient(135deg, ${accent}10, var(--tint-soft))`,
 border: `1px solid ${accent}33`,
 }}
 >
 <div className="flex items-center gap-2 mb-2">
 <span
 className="w-7 h-7 rounded-lg flex items-center justify-center"
 style={{
 background: `${accent}22`,
 border: `1px solid ${accent}55`,
 color: accent,
 }}
 >
 <SIcon size={13} strokeWidth={2.5} />
 </span>
 <p className="text-[9px] tracking-[0.22em] uppercase font-bold" style={{ color: accent }}>
 {s.label}
 </p>
 </div>
 <p className="text-[13px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
 {displayValue}
 </p>
 </div>
 )
 })}
 </div>
 )}

 {dosing.notes && (
 <div className="flex items-start gap-3 mb-4">
 <AlertTriangle size={15} color={accent} className="shrink-0 mt-0.5" />
 <p className="text-[12px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {tr(dosing.notes)}
 </p>
 </div>
 )}

 {dosing.timeline?.length > 0 && (
 <div>
 <p className="text-[10px] tracking-[0.22em] uppercase font-bold mb-3" style={{ color: accent }}>
 {t('entry.dose.timeline') || 'Titrálási ütemterv'}
 </p>
 <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
 {dosing.timeline.map((tl, i) => (
 <li
 key={i}
 className="relative p-3 rounded-xl"
 style={{
 background: 'var(--tint-row)',
 border: `1px solid ${accent}26`,
 }}
 >
 <span
 className="inline-flex items-center justify-center text-[9px] font-black px-2 py-0.5 rounded-full mb-1.5"
 style={{
 background: `${accent}22`,
 border: `1px solid ${accent}55`,
 color: accent,
 }}
 >
 {tl.week ? `${t('entry.dose.week') || 'Hét'} ${tl.week}` : `#${i + 1}`}
 </span>
 <p className="text-[12px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
 {typeof tl.label === 'string' ? tl.label : tr(tl.label)}
 </p>
 </li>
 ))}
 </ol>
 </div>
 )}
 </div>
 )
}

// ─── Studies Panel, clinical study cards with tag, finding, source link ─
function StudiesPanel({ studies, accent, tr, t }) {
 if (!studies?.length) return null
 return (
 <>
 <style>{`
 .mlx-study-card {
 transition: box-shadow 480ms cubic-bezier(.22,1,.36,1),
 border-color 360ms ease;
 }
 .mlx-study-card:hover {
 border-color: color-mix(in srgb, var(--mlx-accent) 55%, transparent);
 box-shadow:
 0 40px 70px -22px color-mix(in srgb, var(--mlx-accent) 80%, transparent),
 0 0 0 1px color-mix(in srgb, var(--mlx-accent) 22%, transparent);
 }
 .mlx-study-rail {
 opacity: .85;
 transform: scaleX(.72);
 transform-origin: center;
 transition: transform 520ms cubic-bezier(.22,1,.36,1), opacity 380ms ease, filter 380ms ease;
 }
 .mlx-study-card:hover .mlx-study-rail {
 opacity: 1;
 transform: scaleX(1);
 filter: drop-shadow(0 0 6px color-mix(in srgb, var(--mlx-tag) 80%, transparent));
 }
 .mlx-study-glow {
 opacity: 0;
 transition: opacity 480ms ease;
 }
 .mlx-study-card:hover .mlx-study-glow { opacity: 1; }
 @media (prefers-reduced-motion: reduce) {
 .mlx-study-card,
 .mlx-study-card:hover,
 .mlx-study-rail,
 .mlx-study-glow { transition: none; transform: none; }
 }
 `}</style>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {studies.map((s, i) => (
 <StudyCard key={i} s={s} accent={accent} tr={tr} t={t} />
 ))}
 </div>
 </>
 )
}

function StudyCard({ s, accent, tr, t }) {
 const tiltRef = useTilt(8)
 const title = typeof s.title === 'string' ? s.title : tr(s.title)
 const finding = s.finding ? (typeof s.finding === 'string' ? s.finding : tr(s.finding)) : null
 const tagText = s.tag ? (typeof s.tag === 'string' ? s.tag : tr(s.tag)) : null
 const tagColor = s.tagText || accent
 // Auto-derive PubMed URL from PMID if no explicit URL provided.
 const studyUrl = s.url || (s.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${s.pmid}/` : null)
 // The card itself is a link when we have a URL, keep the inner layout untouched.
 const CardTag = studyUrl ? 'a' : 'article'
 const cardLinkProps = studyUrl
 ? { href: studyUrl, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${title}, PubMed` }
 : {}
 return (
 <CardTag
 ref={tiltRef}
 {...cardLinkProps}
 className="mlx-study-card group relative p-4 rounded-2xl overflow-hidden transition-transform duration-300 will-change-transform block no-underline"
 style={{
 background: `linear-gradient(180deg, var(--tint-row), var(--tint-soft))`,
 border: `1px solid ${accent}33`,
 boxShadow: `0 12px 32px -20px ${accent}55`,
 transformStyle: 'preserve-3d',
 cursor: studyUrl ? 'pointer' : 'default',
 '--mlx-accent': accent,
 '--mlx-tag': tagColor,
 }}
 >
 <div
 className="mlx-study-rail absolute top-0 left-0 right-0 h-[2px]"
 style={{ background: `linear-gradient(90deg, transparent, ${tagColor}aa, transparent)` }}
 />
 <div
 className="mlx-study-glow absolute inset-0 pointer-events-none rounded-2xl"
 style={{ background: `radial-gradient(80% 60% at 50% 0%, ${accent}22, transparent 70%)` }}
 />
 <div className="relative" style={{ transform: 'translateZ(24px)', transformStyle: 'preserve-3d' }}>
 <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
 <div className="flex items-center gap-2">
 <span
 className="w-7 h-7 rounded-lg flex items-center justify-center"
 style={{
 background: `${tagColor}1a`,
 border: `1px solid ${tagColor}55`,
 color: tagColor,
 }}
 >
 <BookOpen size={13} strokeWidth={2.5} />
 </span>
 {tagText && (
 <span
 className="text-[9px] tracking-[0.22em] uppercase font-black px-2 py-0.5 rounded-full"
 style={{
 background: `${tagColor}1a`,
 border: `1px solid ${tagColor}55`,
 color: tagColor,
 }}
 >
 {tagText}
 </span>
 )}
 </div>
 {(s.year || s.journal) && (
 <span className="text-[10px] tracking-wide" style={{ color: 'var(--text-muted)' }}>
 {[s.journal, s.year].filter(Boolean).join(' · ')}
 </span>
 )}
 </div>

 <h4 className="text-[13.5px] font-bold leading-tight mb-1.5" style={{ color: 'var(--text-primary)' }}>
 {title}
 </h4>
 {s.authors && (
 <p className="text-[11px] leading-snug mb-2" style={{ color: 'var(--text-muted)' }}>
 {s.authors}
 </p>
 )}
 {finding && (
 <p className="text-[12px] leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
 {finding}
 </p>
 )}
 <div className="flex items-center gap-3 flex-wrap">
 {s.pmid && (
 <span className="text-[10px] tracking-wider" style={{ color: 'var(--text-fainter)' }}>
 PMID: {s.pmid}
 </span>
 )}
 {studyUrl && (
 <span
 className="inline-flex items-center gap-1 text-[10px] tracking-[0.22em] uppercase font-bold ml-auto"
 style={{ color: accent }}
 >
 {t('entry.studies.view') || 'Megnyitás'}
 <ExternalLink size={11} />
 </span>
 )}
 </div>
 </div>
 </CardTag>
 )
}

export default function EntryDetail({ peptide, onClose, onJump }) {
 const { t, tr } = useLang()
 const { theme } = useTheme()
 const { library } = useLibrary()
 const isLight = theme === 'light'
 // Phase 10: calculator only on libraries with features.calculator (peptides).
 const hasCalc = !!(library?.features?.calculator
 && peptide.miniCalc?.vialMg
 && peptide.miniCalc?.bacMl
 && peptide.miniCalc?.doseMcg)
 const relatedLabel = library?.labels?.relatedLabel ? tr(library.labels.relatedLabel) : (t('entry.rel.label') || 'Kapcsolódó peptidek')
 const [tab, setTab] = useState('molecular')
 const [entered, setEntered] = useState(false)
 const magnetRef = useMagnet(0.25)

 useEffect(() => {
 const timer = requestAnimationFrame(() => setEntered(true))
 const onKey = (e) => { if (e.key === 'Escape') onClose() }
 window.addEventListener('keydown', onKey)
 document.body.style.overflow = 'hidden'
 return () => {
 cancelAnimationFrame(timer)
 window.removeEventListener('keydown', onKey)
 document.body.style.overflow = ''
 }
 }, [onClose])

 // Auto-fit H1 name to one line: measure overflow against parent and shrink font-size proportionally.
 const nameRef = useRef(null)
 useLayoutEffect(() => {
 const el = nameRef.current
 if (!el) return
 const parent = el.parentElement
 if (!parent) return
 const fit = () => {
 el.style.fontSize = ''
 const measured = el.scrollWidth
 const available = parent.clientWidth
 if (measured > available && available > 0) {
 const baseSize = parseFloat(getComputedStyle(el).fontSize)
 el.style.fontSize = `${Math.max(baseSize * (available / measured) * 0.97, 16)}px`
 }
 }
 fit()
 const ro = new ResizeObserver(fit)
 ro.observe(parent)
 return () => ro.disconnect()
 }, [peptide.name])

 if (!peptide) return null

 const accent = peptide.accentColor || '#a78bfa'
 const tierMeta = TIER_META[peptide.tier] || TIER_META[1]
 const tierColor = tierMeta.color
 const isApproved = peptide.tier >= 5

 const tabs = useMemo(() => [
 { id: 'molecular', label: t('entry.tab.molecular') || 'Molekula' },
 { id: 'citations', label: t('entry.tab.citations') || 'Hivatkozások' },
 ], [t])

 return (
 <div
 className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
 style={{
 background: 'var(--bg-modal-fade)',
 backdropFilter: 'blur(20px)',
 WebkitBackdropFilter: 'blur(20px)',
 }}
 onClick={onClose}
 >
 <div
 className="relative w-full max-w-7xl my-6 mx-3 sm:mx-6"
 style={{
 clipPath: entered ? 'inset(0% 0% 0% 0% round 28px)' : 'inset(40% 40% 40% 40% round 28px)',
 transition: 'clip-path 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s',
 opacity: entered ? 1 : 0,
 }}
 onClick={e => e.stopPropagation()}
 >
 {/* ─── Backdrop gradient stack ─── */}
 <div
 className="absolute inset-0 rounded-[28px] pointer-events-none"
 style={{
 background: `
 radial-gradient(110% 60% at 0% 0%, ${accent}26, transparent 50%),
 radial-gradient(80% 50% at 100% 0%, ${tierColor}22, transparent 60%),
 radial-gradient(120% 80% at 50% 100%, ${accent}18, transparent 60%),
 linear-gradient(180deg, var(--bg-modal-fade), var(--bg-tile-fade))
 `,
 border: '1px solid var(--tint-strong)',
 boxShadow: `0 80px 200px -40px ${accent}33, 0 30px 80px -30px rgba(0,0,0,0.7)`,
 }}
 />

 {/* ─── Top chrome bar ─── */}
 <div className="relative flex items-center justify-between gap-4 px-6 sm:px-10 pt-6 pb-3">
 <button
 onClick={onClose}
 className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] tracking-[0.22em] uppercase font-bold transition-all hover:gap-3"
 style={{
 background: 'var(--tint-medium)',
 border: '1px solid var(--tint-soft-border)',
 color: 'var(--text-primary)',
 }}
 aria-label={t('entry.back') || 'Vissza a könyvtárba'}
 >
 <ArrowLeft size={12} strokeWidth={2.5} />
 {t('entry.back') || 'Vissza a könyvtárba'}
 </button>
 <button
 onClick={onClose}
 className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
 style={{
 background: 'var(--tint-medium)',
 border: '1px solid var(--tint-soft-border)',
 color: 'var(--text-primary)',
 }}
 aria-label="Close"
 >
 <X size={16} />
 </button>
 </div>

 {/* ─── HERO: spatial vial + headline grid ─── */}
 <section className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 px-6 sm:px-10 pb-10">
 {/* Headline */}
 <div className="relative flex flex-col justify-center order-2 lg:order-1">
 <div className="flex flex-wrap items-center gap-2 mb-4">
 <span
 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold"
 style={{
 background: `${tierColor}1a`,
 border: `1px solid ${tierColor}55`,
 color: tierColor,
 }}
 >
 {isApproved && <ShieldCheck size={11} strokeWidth={2.5} />}
 {tr(tierMeta.label)}
 </span>
 {peptide.legalStatus && (
 <span
 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-semibold"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 color: 'var(--text-muted)',
 }}
 >
 {peptide.legalStatus.fda ? <ShieldCheck size={10} /> : <ShieldAlert size={10} />}
 {tr(peptide.legalStatus.tag)}
 </span>
 )}
 {library?.id === 'pharmaceutical' && peptide.pharma?.atcCode && (
 <span
 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-mono font-semibold"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 color: 'var(--text-muted)',
 }}
 >
 ATC · {peptide.pharma.atcCode}
 </span>
 )}
 {library?.id === 'pharmaceutical' && peptide.pharma?.prescriptionStatus && (
 <span
 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-semibold"
 style={{
 background: `${accent}1a`,
 border: `1px solid ${accent}55`,
 color: accent,
 }}
 >
 Rx · {tr(peptide.pharma.prescriptionStatus)}
 </span>
 )}
 </div>

 <h1
 ref={nameRef}
 className="font-black tracking-tight leading-[1.1] pb-2 text-5xl sm:text-6xl lg:text-7xl mb-3"
 style={{
 whiteSpace: 'nowrap',
 background: isLight
 ? `linear-gradient(135deg, #0f172a 0%, ${accent} 55%, ${tierColor} 100%)`
 : `linear-gradient(135deg, #fff 0%, ${accent} 60%, ${tierColor} 100%)`,
 WebkitBackgroundClip: 'text',
 backgroundClip: 'text',
 color: 'transparent',
 filter: isLight
 ? `drop-shadow(0 2px 8px ${accent}33)`
 : `drop-shadow(0 4px 24px ${accent}55)`,
 }}
 >
 {peptide.name?.replace(/-/g, '‑')}
 </h1>

 {peptide.fullName && peptide.fullName !== peptide.name && (
 <p className="text-sm tracking-wide mb-4" style={{ color: 'var(--text-muted)' }}>
 {peptide.fullName}
 </p>
 )}

 <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-6" style={{ color: 'var(--text-secondary)' }}>
 {tr(peptide.oneLiner)}
 </p>

 {peptide.synonyms?.length > 0 && (
 <div className="flex flex-wrap gap-1.5 mb-6">
 {peptide.synonyms.slice(0, 5).map((s, i) => (
 <span
 key={i}
 className="text-[10px] px-2 py-0.5 rounded-full tracking-wide"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 color: 'var(--text-muted)',
 }}
 >
 {s}
 </span>
 ))}
 </div>
 )}

 {/* Primary CTA + Telegram HU/PL pair */}
 <div className="flex flex-wrap items-center gap-3">
 {hasCalc && (
 <button
 ref={magnetRef}
 onClick={() => {
 const calc = document.getElementById('v2-calc')
 if (calc) calc.scrollIntoView({ behavior: 'smooth', block: 'center' })
 }}
 className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm tracking-wide transition-transform"
 style={{
 background: isLight
 ? `linear-gradient(135deg, ${accent}ee, ${tierColor}ee)`
 : `linear-gradient(135deg, ${accent}, ${tierColor})`,
 color: '#ffffff',
 textShadow: '0 1px 2px rgba(0,0,0,0.25)',
 boxShadow: isLight
 ? `0 8px 24px -8px ${accent}88, inset 0 1px 0 rgba(255,255,255,0.4)`
 : `0 12px 40px -10px ${accent}cc, inset 0 1px 0 rgba(255,255,255,0.4)`,
 }}
 >
 <Calculator size={15} strokeWidth={2.5} />
 {t('entry.cta.calc') || 'Dózis kalkulátor'}
 <ChevronRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
 </button>
 )}
 <TelegramButtons />
 </div>
 </div>

 {/* Holosphere */}
 <div className="order-1 lg:order-2 flex items-center justify-center">
 <Holosphere image={peptide.image} name={peptide.name} accent={accent} tierColor={tierColor} isLight={isLight} />
 </div>
 </section>

 {/* ─── BENTO GRID: key facts + benefits + mechanism ─── */}
 <section className="relative px-6 sm:px-10 pb-10">
 {/* Top row: whatIs (left) + keyFacts (right, fills column height) */}
 <div className="grid gap-4 lg:grid-cols-[7fr_5fr] items-stretch">
 {/* What is */}
 {peptide.whatIs && (
 <GlassCard accent={accent} className="h-full">
 <Eyebrow
 icon={Beaker}
 label={(t('entry.sec.whatis.eyebrow') || 'Mi az a {name}?').replace('{name}', peptide.name).toUpperCase()}
 accent={accent}
 />
 <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
 {(t('entry.sec.whatis.title') || 'Mi az a {name}?').replace('{name}', peptide.name)}
 </h3>
 <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {tr(peptide.whatIs)}
 </p>
 </GlassCard>
 )}

 {/* Right column: keyFacts grid stretches to match whatIs height */}
 {peptide.keyFacts?.length > 0 && (
 <div className="grid grid-cols-2 gap-3 auto-rows-fr">
 {peptide.keyFacts.slice(0, 6).map((f, i) => (
 <div
 key={i}
 className="relative p-3 rounded-xl overflow-hidden"
 style={{
 background: 'var(--tint-row)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 <div
 className="absolute top-0 left-0 right-0 h-px"
 style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }}
 />
 <p className="text-[9px] tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: accent }}>
 {tr(f.label)}
 </p>
 <p className="text-[12px] font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
 {tr(f.value)}
 </p>
 </div>
 ))}
 </div>
 )}
 </div>

 {/* Benefits, all in a single balanced equal-height grid */}
 {peptide.keyBenefits?.length > 0 && (() => {
 const benefits = peptide.keyBenefits.slice(0, 4)
 const cols = benefits.length === 1 ? 'grid-cols-1'
 : benefits.length === 2 ? 'grid-cols-1 sm:grid-cols-2'
 : benefits.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
 : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
 return (
 <div className={`grid ${cols} gap-4 mt-4 auto-rows-fr`}>
 {benefits.map((b) => {
 const Icon = BENEFIT_ICONS[b.icon] || Sparkles
 return (
 <GlassCard key={b.id} accent={accent} className="h-full min-h-[200px]">
 <div
 className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
 style={{
 background: `linear-gradient(135deg, ${accent}33, ${accent}11)`,
 border: `1px solid ${accent}55`,
 color: accent,
 }}
 >
 <Icon size={18} strokeWidth={2.3} />
 </div>
 <p className="text-[13px] font-bold leading-tight mb-2" style={{ color: 'var(--text-primary)' }}>
 {tr(b.title)}
 </p>
 <p className="text-[11.5px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
 {tr(b.desc)}
 </p>
 </GlassCard>
 )
 })}
 </div>
 )
 })()}
 </section>

 {/* ─── QUICK START: constellation ─── */}
 {peptide.quickStart?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={Rocket} label={t('entry.sec.quickstart.eyebrow') || 'Quick Start'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {(t('entry.sec.quickstart.title.template') || '{n} lépésben az indulásig').replace('{n}', peptide.quickStart.length)}
 </h3>
 <div
 className="relative p-6 rounded-2xl"
 style={{
 background: 'linear-gradient(135deg, var(--tint-row), var(--tint-soft))',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 <Constellation steps={peptide.quickStart} accent={accent} tr={tr} />
 </div>
 </section>
 )}

 {/* ─── MECHANISM ─── */}
 {peptide.mechanism?.summary && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={Zap} label={t('entry.sec.mechanism.eyebrow') || 'Hatásmechanizmus'} accent={accent} />
 <div
 className="relative p-6 rounded-2xl overflow-hidden"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 {/* Decorative animated grid */}
 <div
 className="absolute inset-0 opacity-30 pointer-events-none"
 style={{
 backgroundImage:
 `linear-gradient(${accent}11 1px, transparent 1px), linear-gradient(90deg, ${accent}11 1px, transparent 1px)`,
 backgroundSize: '24px 24px',
 maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
 WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
 }}
 />
 <p className="relative text-[14px] leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
 {tr(peptide.mechanism.summary)}
 </p>
 </div>
 </section>
 )}

 {/* ─── TABBED RAIL: molecular / dosing / studies ─── Phase 10 flag-gated ─── */}
 {library?.features?.labTerminal && (
 <section className="relative px-6 sm:px-10 pb-10">
 <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
 <div>
 <Eyebrow icon={Atom} label={t('entry.rail.label') || 'Data Console'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
 {t('entry.rail.title') || 'Lab adatok'}
 </h3>
 </div>
 <TabPills tabs={tabs} active={tab} onChange={setTab} accent={accent} />
 </div>

 {tab === 'molecular' && peptide.molecular?.length > 0 && (
 <LabTerminal rows={peptide.molecular} accent={accent} tr={tr} />
 )}

 {tab === 'citations' && peptide.citations?.length > 0 && (
 <div
 className="relative p-5 rounded-2xl overflow-hidden"
 style={{
 background: 'var(--bg-tile)',
 border: `1px solid ${accent}44`,
 fontFamily: 'ui-monospace, "SF Mono", Consolas, monospace',
 }}
 >
 <div
 className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
 style={{
 backgroundImage: `repeating-linear-gradient(0deg, ${accent}10 0 1px, transparent 1px 3px)`,
 }}
 />
 <div className="relative space-y-3">
 {peptide.citations.map((c, i) => (
 <div
 key={i}
 className="flex items-start gap-3 pl-3 py-2"
 style={{ borderLeft: `2px solid ${accent}55` }}
 >
 <span className="shrink-0 text-[11px] font-bold pt-0.5" style={{ color: accent }}>
 [{String(i + 1).padStart(2, '0')}]
 </span>
 <div className="flex-1 min-w-0">
 <p className="text-[12px] leading-relaxed break-words" style={{ color: 'var(--text-secondary)' }}>
 {c.apa}
 </p>
 <div className="flex flex-wrap items-center gap-3 mt-1.5">
 {c.ref && (
 <span className="text-[10px] tracking-wider opacity-70" style={{ color: accent }}>
 {c.ref}
 </span>
 )}
 {c.url && (
 <a
 href={c.url}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase font-bold hover:underline"
 style={{ color: accent }}
 >
 {t('entry.cite.view') || 'Megnyitás'}
 <ExternalLink size={10} />
 </a>
 )}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 )}
 </section>
 )}

 {/* ─── RESEARCH INDICATIONS (deep accordion with sub-mechanisms) ─── */}
 {peptide.indications?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
 <div>
 <Eyebrow icon={FlaskConical} label={t('entry.ind.label') || 'Kutatási indikációk'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
 {t('entry.ind.title') || 'Vizsgált alkalmazások és mechanizmusok'}
 </h3>
 </div>
 {peptide.researchUses?.length > 0 && (
 <div className="hidden lg:flex flex-wrap gap-1.5">
 {peptide.researchUses.map((u, i) => (
 <span
 key={u.id || i}
 className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide"
 style={{
 background: `${accent}14`,
 border: `1px solid ${accent}44`,
 color: accent,
 }}
 >
 {tr(u.label)}
 </span>
 ))}
 </div>
 )}
 </div>
 <IndicationsAccordion items={peptide.indications} tr={tr} t={t} />
 </section>
 )}

 {/* ─── RECONSTITUTE PROTOCOL (DNA-strand numbered list) ─── Phase 10 flag-gated ─── */}
 {library?.features?.quickStart && peptide.reconstitute?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
 <div>
 <Eyebrow icon={Droplets} label={t('entry.rec.label') || 'Rekonstitúció'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
 {t('entry.rec.title') || 'Hogyan készítsd elő, lépésről lépésre'}
 </h3>
 </div>
 {hasCalc && (
 <button
 onClick={() => {
 const calc = document.getElementById('v2-calc')
 if (calc) calc.scrollIntoView({ behavior: 'smooth', block: 'center' })
 }}
 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] tracking-[0.22em] uppercase font-bold transition-all hover:scale-105"
 style={{
 background: `${accent}14`,
 border: `1px solid ${accent}55`,
 color: accent,
 }}
 >
 <Calculator size={11} strokeWidth={2.5} />
 {t('entry.cta.calc') || 'Kalkulátor'}
 </button>
 )}
 </div>
 <div
 className="relative p-5 rounded-2xl mb-3 flex items-start gap-3"
 style={{
 background: `${accent}10`,
 border: `1px solid ${accent}44`,
 }}
 >
 <AlertTriangle size={16} color={accent} className="shrink-0 mt-0.5" />
 <div>
 <p className="text-[10px] tracking-[0.24em] uppercase font-bold mb-1" style={{ color: accent }}>
 {t('entry.rec.important') || 'Fontos'}
 </p>
 <p className="text-[12px] leading-snug" style={{ color: 'var(--text-secondary)' }}>
 {t('entry.rec.note') || 'Steril technika kötelező. Csak bakteriostatikus vizet (BAC) használj, desztillált vagy csapvizet soha.'}
 </p>
 </div>
 </div>
 <div
 className="relative p-5 rounded-2xl"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 <ReconstitutePath steps={peptide.reconstitute} accent={accent} tr={tr} />
 </div>
 </section>
 )}

 {/* ─── EXPECTATIONS TIMELINE ─── */}
 {peptide.expectations?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={TimerReset} label={t('entry.exp.label') || 'Mire számíts'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.exp.title') || 'Időzítés és várható hatások'}
 </h3>
 <div
 className="relative p-6 rounded-2xl overflow-x-auto"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 <ExpectationsTimeline items={peptide.expectations} accent={accent} tr={tr} />
 </div>
 </section>
 )}

 {/* ─── DOSING (separate section) ─── Phase 10 flag-gated ─── */}
 {library?.features?.doseRecommendations && peptide.dosing && (peptide.dosing.notes || peptide.dosing.typical || peptide.dosing.range || peptide.dosing.timeline?.length > 0) && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={Syringe} label={t('entry.dose.label') || 'Adagolás'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.dose.title') || 'Adagolási protokoll'}
 </h3>
 <DosingPanel dosing={peptide.dosing} accent={accent} tr={tr} t={t} />
 </section>
 )}

 {/* ─── QUALITY INDICATORS ─── Phase 10 flag-gated ─── */}
 {library?.features?.qualityGrid && peptide.qualityIndicators?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={ClipboardList} label={t('entry.qua.label') || 'Minőségi jelzők'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.qua.title') || 'Hogyan ismerd fel a tiszta peptidet'}
 </h3>
 <QualityGrid items={peptide.qualityIndicators} tr={tr} t={t} />
 </section>
 )}

 {/* ─── BLOODWORK PROTOCOL (Phase 5, performance entries) ─── */}
 {peptide.bloodwork && (
 <section className="relative px-6 sm:px-10 pb-10">
 <BloodworkProtocol bloodwork={peptide.bloodwork} accent={accent} />
 </section>
 )}

 {/* ─── INTERACTIONS / STACKS ─── Phase 10 flag-gated ─── */}
 {library?.features?.interactions && peptide.interactions?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={Network} label={t('entry.int.label') || 'Interakciók és stack-ek'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.int.title') || 'Mivel kombinálható és mivel ne'}
 </h3>
 <InteractionsOrbit items={peptide.interactions} tr={tr} />
 </section>
 )}

 {/* ─── SAFETY TRIPTYCH ─── */}
 {peptide.safetyProfile && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={ShieldAlert} label={t('entry.safe.label') || 'Biztonság'} accent="#fbbf24" />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.safe.title') || 'Mellékhatások, leállítási jelek, ellenjavallatok'}
 </h3>
 <SafetyTriptych profile={peptide.safetyProfile} accent={accent} tr={tr} t={t} />
 </section>
 )}

 {/* ─── RELATED PEPTIDES (3D tilt cards) ─── */}
 {peptide.related?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <style>{`
 .mlx-related-card {
 transition: box-shadow 420ms cubic-bezier(.22,1,.36,1),
 border-color 320ms ease;
 }
 .mlx-related-card:hover {
 border-color: color-mix(in srgb, var(--mlx-accent) 42%, transparent);
 box-shadow:
 0 48px 90px -22px color-mix(in srgb, var(--mlx-accent) 85%, transparent),
 0 0 0 1px color-mix(in srgb, var(--mlx-accent) 25%, transparent);
 }
 .mlx-related-glow {
 opacity: .55;
 transition: opacity 380ms ease;
 }
 .mlx-related-card:hover .mlx-related-glow { opacity: 1; }
 .mlx-related-ring {
 opacity: 0;
 transition: opacity 360ms ease;
 }
 .mlx-related-card:hover .mlx-related-ring { opacity: 1; }
 .mlx-related-sheen {
 opacity: 0;
 transform: translateX(-25%);
 transition: opacity 520ms ease, transform 720ms cubic-bezier(.22,1,.36,1);
 }
 .mlx-related-card:hover .mlx-related-sheen {
 opacity: 1;
 transform: translateX(25%);
 }
 .mlx-related-name {
 display: inline-block;
 transform-origin: left center;
 transform: scale(1);
 backface-visibility: hidden;
 will-change: transform, filter;
 transition: letter-spacing 480ms cubic-bezier(.4,0,.2,1),
 text-shadow 480ms cubic-bezier(.4,0,.2,1),
 filter 520ms cubic-bezier(.4,0,.2,1),
 transform 600ms cubic-bezier(.4,0,.2,1);
 }
 .mlx-related-card:hover .mlx-related-name {
 letter-spacing: 0.012em;
 text-shadow: 0 0 22px color-mix(in srgb, var(--mlx-accent) 65%, transparent);
 filter: brightness(1.15);
 transform: scale(1.08);
 }
 @media (prefers-reduced-motion: reduce) {
 .mlx-related-card,
 .mlx-related-card:hover,
 .mlx-related-glow,
 .mlx-related-ring,
 .mlx-related-sheen,
 .mlx-related-name {
 transition: none;
 transform: none;
 }
 }
 `}</style>
 <Eyebrow icon={Layers} label={relatedLabel} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.rel.title') || 'Hasonló terápiás kategóriában'}
 </h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
 {peptide.related.map(r => (
 <RelatedCard
 key={r.id}
 peptide={r}
 tr={tr}
 t={t}
 onJump={onJump}
 />
 ))}
 </div>
 </section>
 )}

 {/* ─── STUDIES (separate section, above FAQ) ─── */}
 {peptide.studies?.length > 0 && (
 <section className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={BookOpen} label={t('entry.studies.label') || 'Tanulmányok'} accent={accent} />
 <h3 className="text-xl font-bold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
 {t('entry.studies.title') || 'Kapcsolódó kutatások és klinikai eredmények'}
 </h3>
 <StudiesPanel studies={peptide.studies} accent={accent} tr={tr} t={t} />
 </section>
 )}

 {/* ─── FAQ CONSOLE ─── Phase 10: removed entirely (features.faq is false across all libraries) ─── */}

 {/* ─── CALCULATOR ─── Phase 10 flag-gated, peptide MiniCalc only ─── */}
 {library?.features?.calculator && peptide.miniCalc?.vialMg && peptide.miniCalc?.bacMl && peptide.miniCalc?.doseMcg && (
 <section id="v2-calc" className="relative px-6 sm:px-10 pb-10">
 <Eyebrow icon={Calculator} label={t('entry.sec.calc.eyebrow') || 'Dózis kalkulátor'} accent={accent} />
 <div
 className="relative p-2 rounded-2xl"
 style={{
 background: `linear-gradient(135deg, ${accent}22, transparent 70%)`,
 border: `1px solid ${accent}44`,
 }}
 >
 <MiniCalc
 defaultVialMg={peptide.miniCalc.vialMg}
 defaultBacMl={peptide.miniCalc.bacMl}
 defaultDoseMcg={peptide.miniCalc.doseMcg}
 />
 </div>
 </section>
 )}

 {/* ─── Telegram CTA ─── */}
 <section id="v2-tg" className="relative px-6 sm:px-10 pb-10">
 <div
 className="relative p-6 sm:p-8 rounded-3xl overflow-hidden"
 style={{
 background: `linear-gradient(135deg, ${accent}22, ${tierColor}11)`,
 border: `1px solid ${accent}55`,
 }}
 >
 <div
 className="absolute inset-0 opacity-50 pointer-events-none"
 style={{
 background: `radial-gradient(circle at 80% 0%, ${accent}66, transparent 50%)`,
 }}
 />
 <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
 <div className="max-w-md">
 <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: accent }}>
 Telegram
 </p>
 <h3 className="text-2xl font-bold tracking-tight mb-1.5 text-balance" style={{ color: 'var(--text-primary)' }}>
 {(t('entry.cta.title') || 'Kérdésed van a {name}-ről?').replace('{name}', peptide.name).replace(/-/g, '‑')}
 </h3>
 <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {t('entry.cta.body') || 'Lépj kapcsolatba egy tanácsadóval Telegramon. Szívesen segítünk.'}
 </p>
 </div>
 <TelegramButtons />
 </div>
 </div>
 </section>

 {/* ─── Disclaimer ─── */}
 <section className="relative px-6 sm:px-10 pb-10">
 <p className="text-[11px] leading-relaxed text-center" style={{ color: 'var(--text-fainter)' }}>
 {(library.id === 'pharmaceutical'
 ? t('entry.disclaimer.pharmaceutical')
 : library.id === 'performance'
 ? t('entry.disclaimer.performance')
 : t('entry.disclaimer')) || 'A weboldal kizárólag oktatási és tájékoztatási célokat szolgál.'}
 </p>
 </section>
 </div>
 </div>
 )
}
