import { useState, useRef, useMemo, useEffect, useLayoutEffect } from 'react'
import { useLibrary } from '../context/LibraryContext'
import { getLevelMeta, LEVEL_META, makeSortComparator } from '../data/libraries/shared/researchLevel'
import { useLang } from '../i18n/LanguageContext'
import {
 ChevronDown, Search, Star, SlidersHorizontal, X,
 ArrowDownAZ, ArrowUpAZ, BarChart3,
} from 'lucide-react'
import EntryImage from './EntryImage'
import TelegramButtons from './TelegramButtons'
import DotsIndicator from './library/cube-nav/DotsIndicator'
import { RETURN_STATE_KEY } from './library/returnState'

// ── Tile ─────────────────────────────────────────────────────────────────────
// Tile layout:
// ▸ image (no hover scale)
// ▸ peptide name + research-level dot
// ▸ tier label
// ▸ "Research Uses" eyebrow
// ▸ category chips
// Card lifts on hover via translateY; gradient lighting from accent colour
// provides the soft 3D feel.

function PeptideTile({ peptide, library, featured, onSelect, t, tr, lang }) {
 const isPlaceholder = !peptide.image
 // Phase 9: tier is precomputed in LIBRARY_ENTRY_META so tiles don't need
 // the full entry to render the research-level dot.
 const level = peptide.tier ?? library.getResearchLevel?.(peptide) ?? 1
 const levelMeta = getLevelMeta(level)
 const catIds = (library.entryCategoryMap[peptide.id] || [])
 const accent = peptide.accentColor

 return (
 <button
 onClick={() => onSelect(peptide)}
 data-entry-id={peptide.id}
 className="group peptide-tile relative flex flex-col gap-4 p-5 rounded-2xl text-left cursor-pointer"
 style={{
 '--tile-accent': accent,
 border: '1px solid var(--tint-soft-border)',
 background: 'var(--tint-soft)',
 // Gradient lighting + subtle 3D, the inset highlight gives a "lit
 // edge" while the outer shadow grounds the card on the surface.
 boxShadow:
 `inset 0 1px 0 0 rgba(255,255,255,0.04),` +
 ` 0 1px 2px rgba(0,0,0,0.10),` +
 ` 0 8px 24px -16px ${accent}33`,
 }}
 >
 {/* Accent gradient wash, always visible, intensifies on hover.
 Top wash + diagonal + a softer bottom-up halo so the card looks
 lit from both ends. */}
 <div
 className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
 style={{
 background:
 `radial-gradient(140% 80% at 50% 0%, ${accent}1a 0%, transparent 55%),` +
 ` radial-gradient(120% 70% at 50% 100%, ${accent}1f 0%, ${accent}0a 30%, transparent 70%),` +
 ` linear-gradient(135deg, ${accent}10 0%, transparent 55%)`,
 }}
 />

 {/* TOP 10 badge */}
 {featured && (
 <div
 className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase"
 style={{
 background: `${accent}22`,
 color: accent,
 border: `1px solid ${accent}55`,
 boxShadow: `0 0 10px ${accent}25`,
 }}
 >
 <Star size={9} strokeWidth={2.5} fill="currentColor" />
 {t('gal.top10.badge')}
 </div>
 )}

 {/* Placeholder badge for entries without a real photo */}
 {isPlaceholder && (
 <div
 className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-[8px] tracking-[0.15em] uppercase"
 style={{
 background: 'var(--tint-soft)',
 border: '1px dashed var(--tint-medium-border)',
 color: 'var(--text-muted)',
 }}
 >
 {t('gal.all.placeholder')}
 </div>
 )}

 {/* Image, square frame, fills the tile width so every vial photo
 renders at the same visual size. No hover scale; only the parent
 tile lifts. `overflow-hidden` + explicit aspectRatio bullet-proof
 the SVG-fallback case so its intrinsic 110×200 viewBox can never
 push the box taller than a real-photo tile. */}
 <div
 className="w-full self-center relative z-10 overflow-hidden"
 style={{ aspectRatio: '1 / 1' }}
 >
 <EntryImage
 accentColor={accent}
 name={peptide.name}
 uid={peptide.id}
 image={peptide.image}
 library={library}
 chemicalFormula={peptide.chemicalFormula}
 />
 </div>

 {/* Name + research-level dot
 Force single-line: truncate with ellipsis so long names
 (Magnesium L-Threonate, Centrophenoxine, …) don't push the
 tier label + category chip downward and break tile alignment.
 `title` exposes the full name on hover. */}
 <div className="relative z-10 flex items-start justify-between gap-3 min-w-0">
 <p
 className="font-bold text-sm leading-tight truncate min-w-0 flex-1"
 style={{ color: 'var(--text-primary)' }}
 title={peptide.name}
 >
 {peptide.name}
 </p>
 <span
 aria-label={tr(levelMeta.label)}
 title={tr(levelMeta.label)}
 className="shrink-0 mt-1 w-2.5 h-2.5 rounded-full"
 style={{
 background: levelMeta.color,
 boxShadow: `0 0 8px ${levelMeta.color}88`,
 }}
 />
 </div>

 {/* Tier label */}
 <p
 className="relative z-10 -mt-3 text-[10px] tracking-[0.18em] uppercase font-semibold"
 style={{ color: levelMeta.color }}
 >
 {tr(levelMeta.label)}
 </p>

 {/* Research Uses, single most-relevant category chip. The first
 entry in peptideCategories.js is treated as the primary tag,
 so every tile has exactly one chip (= uniform tile height). */}
 <div className="relative z-10 flex flex-col gap-2">
 <p
 className="text-[9px] tracking-[0.25em] uppercase font-semibold"
 style={{ color: 'var(--text-fainter)' }}
 >
 {t('gal.uses')}
 </p>
 <div className="flex flex-wrap gap-1.5">
 {catIds.length === 0 ? (
 <span
 className="text-[10px] px-2 py-0.5 rounded-full font-mono tracking-wide"
 style={{
 background: 'var(--tint-row)',
 border: '1px solid var(--border-soft)',
 color: 'var(--text-muted)',
 }}
 >
 -
 </span>
 ) : (
 (() => {
 const primaryId = catIds[0]
 const cat = library.categories.find(c => c.id === primaryId)
 if (!cat) return null
 return (
 <span
 key={primaryId}
 className="text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide whitespace-nowrap"
 style={{
 background: `${cat.accent}1a`,
 border: `1px solid ${cat.accent}55`,
 color: cat.accent,
 }}
 >
 {tr(cat.label)}
 </span>
 )
 })()
 )}
 </div>
 </div>
 </button>
 )
}

// ── Sort segmented control ───────────────────────────────────────────────────
function SortControl({ value, onChange, t }) {
 const items = [
 { id: 'az', label: t('gal.sort.az'), Icon: ArrowDownAZ },
 { id: 'za', label: t('gal.sort.za'), Icon: ArrowUpAZ },
 { id: 'level', label: t('gal.sort.level'), Icon: BarChart3 },
 ]
 return (
 <div
 className="inline-flex p-1 rounded-xl gap-1"
 style={{
 background: 'var(--tint-row)',
 border: '1px solid var(--border-soft)',
 }}
 role="radiogroup"
 aria-label={t('gal.sort.title')}
 >
 {items.map(({ id, label, Icon }) => {
 const active = value === id
 return (
 <button
 key={id}
 type="button"
 role="radio"
 aria-checked={active}
 aria-label={label}
 onClick={() => onChange(id)}
 className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
 style={{
 background: active ? 'rgba(129,140,248,0.18)' : 'transparent',
 border: `1px solid ${active ? 'rgba(129,140,248,0.45)' : 'transparent'}`,
 color: active ? 'var(--accent)' : 'var(--text-muted)',
 }}
 >
 <Icon size={13} strokeWidth={2.2} />
 <span className="hidden sm:inline">{label}</span>
 </button>
 )
 })}
 </div>
 )
}

// ── Main component ───────────────────────────────────────────────────────────
// Tile clicks update the URL hash to #entry/<library>/<id>; the App-level
// EntryDetailRoute observes the hash and renders the detail view (modal on
// mobile, full page on desktop).
export default function LibraryGallery({
  library: libraryProp,
  dotsLibraries,
  dotsCurrentIndex,
  onDotsJumpTo,
} = {}) {
 const [expanded, setExpanded] = useState(false)
 const [hasOpened, setHasOpened] = useState(false)
 const [showFilters, setShowFilters] = useState(false)
 const [query, setQuery] = useState('')
 const [activeFilters, setActiveFilters] = useState([]) // category id list
 const [levelFilters, setLevelFilters] = useState([]) // research level numbers
 const [sortMode, setSortMode] = useState('az') // 'az' | 'za' | 'level'

 // Snapshot publisher for Task C state-restoration. Publishes current state
 // into a ref (no re-render) so openEntry() can read it synchronously.
 const stateRef = useRef({})
 stateRef.current = {
  query, activeFilters, levelFilters, sortMode, expanded,
 }

 const allSectionRef = useRef(null)
 const { t, tr, lang } = useLang()
 const { library: ctxLibrary } = useLibrary()
 const library = libraryProp || ctxLibrary

 // Phase 9: meta-only iteration. library.meta is the synchronous
 // LIBRARY_ENTRY_META array — full entries are loaded on demand via
 // useLibrary().loadEntry(libraryId, entryId) when a tile is clicked.
 const metaList = library.meta || library.entries || []

 const top10 = useMemo(
 () => library.topEntries.map(id => metaList.find(p => p.id === id)).filter(Boolean),
 [library, metaList]
 )

 // Apply search + category filter + research-level filter, then sort.
 const filteredAll = useMemo(() => {
 const q = query.trim().toLowerCase()
 const matched = metaList.filter(p => {
 if (q) {
 const name = p.name.toLowerCase()
 const short = (tr(p.shortDesc) || '').toLowerCase()
 if (!name.includes(q) && !short.includes(q)) return false
 }
 if (activeFilters.length > 0) {
 const cats = (library.entryCategoryMap[p.id] || [])
 const hasMatch = activeFilters.some(f => cats.includes(f))
 if (!hasMatch) return false
 }
 if (levelFilters.length > 0) {
 const lvl = p.tier ?? library.getResearchLevel?.(p) ?? 1
 if (!levelFilters.includes(lvl)) return false
 }
 return true
 })
 return matched.sort(makeSortComparator(m => m.tier ?? library.getResearchLevel?.(m) ?? 1, sortMode))
 }, [library, metaList, query, lang, activeFilters, levelFilters, sortMode])

 // Restore consumer for Task C. Reads window.__libraryGalleryPendingRestore__
 // (set by EntryDetailRoute closeDetail or hashchange listener) and restores
 // state when the library.id matches the snapshot. Idempotent — clears the
 // pending object after consumption.
 //
 // useLayoutEffect (NOT useEffect) so setState fires BEFORE the browser paint —
 // otherwise the user sees one flickered frame of default state before the
 // restored state shows up. The rAF chain below is still needed for scrollTo,
 // since the CSS grid-template-rows accordion transition needs a layout pass.
 useLayoutEffect(() => {
  if (typeof window === 'undefined') return
  const pending = window.__libraryGalleryPendingRestore__
  if (!pending || pending.libraryId !== library.id) return

  // Pre-snap SYNCHRONOUSLY a library section tetejére, MIELŐTT a böngésző
  // bármit fest. useLayoutEffect commit után-paint előtt fut → ha itt scrollTo,
  // a következő paint már a library start-ról rajzol, NEM látszik 1-2 frame
  // Hero/Education flicker top:0-n. (rAF-en belül a pre-snap legalább 1 paint-et
  // csúszik → flicker visszajön.) targetY-csak-alatt-snap branch megtartva
  // hogy felfelé-scroll esetén ne ugorjunk át a természetes irányon.
  const targetY = pending.scrollY || 0
  const librarySection = document.getElementById('library')
  if (librarySection) {
   const libraryTopY = librarySection.getBoundingClientRect().top + window.scrollY
   if (targetY > libraryTopY + 4) window.scrollTo(0, libraryTopY)
  }

  setQuery(pending.query || '')
  setActiveFilters(Array.isArray(pending.activeFilters) ? pending.activeFilters : [])
  setLevelFilters(Array.isArray(pending.levelFilters) ? pending.levelFilters : [])
  setSortMode(pending.sortMode || 'az')
  if (pending.expanded) {
   setExpanded(true)
   setHasOpened(true)
  }
  // Wait two paints for accordion expansion + filter render, then animate
  // scroll with explicit duration. Native `behavior: 'smooth'` is ~300-500ms
  // depending on browser; this 900ms easeInOutCubic feels deliberate rather
  // than abrupt when restoring a deep mid-list position.
  //
  // After the scroll completes, briefly highlight the tile that was clicked
  // so the user sees exactly where they came from (data-entry-id selector +
  // .peptide-tile--restored CSS class triggers a 1.8s accent-color ring fade).
  const highlightTile = () => {
   if (!pending.entryId) return
   const tiles = document.querySelectorAll(`[data-entry-id="${pending.entryId}"]`)
   tiles.forEach((t) => {
    t.classList.add('peptide-tile--restored')
    setTimeout(() => t.classList.remove('peptide-tile--restored'), 1800)
   })
  }
  requestAnimationFrame(() => {
   requestAnimationFrame(() => {
    const startY = window.scrollY
    const distance = targetY - startY
    if (Math.abs(distance) < 2) {
     window.scrollTo(0, targetY)
     highlightTile()
     return
    }
    const duration = 900
    const startTime = performance.now()
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const step = (now) => {
     const elapsed = now - startTime
     const progress = Math.min(elapsed / duration, 1)
     window.scrollTo(0, startY + distance * easeInOutCubic(progress))
     if (progress < 1) requestAnimationFrame(step)
     else highlightTile()
    }
    requestAnimationFrame(step)
   })
  })
  delete window.__libraryGalleryPendingRestore__
 }, [library.id])

 const toggleExpanded = () => {
 setExpanded(prev => {
 const next = !prev
 if (next) {
 setHasOpened(true)
 setTimeout(() => {
 allSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
 }, 200)
 }
 return next
 })
 }

 const toggleFilter = (catId) => {
 setActiveFilters(prev =>
 prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
 )
 }
 const toggleLevel = (lvl) => {
 setLevelFilters(prev =>
 prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]
 )
 }
 const clearFilters = () => { setActiveFilters([]); setLevelFilters([]) }
 const totalActive = activeFilters.length + levelFilters.length

 const openEntry = (entry) => {
  if (typeof window === 'undefined') return
  try {
   const snapshot = {
    token: Date.now(),
    scrollY: window.scrollY,
    libraryId: library.id,
    entryId: entry.id,
    query: stateRef.current.query || '',
    activeFilters: stateRef.current.activeFilters || [],
    levelFilters: stateRef.current.levelFilters || [],
    sortMode: stateRef.current.sortMode || 'az',
    expanded: stateRef.current.expanded || false,
   }
   sessionStorage.setItem(RETURN_STATE_KEY, JSON.stringify(snapshot))
  } catch (e) {
   // sessionStorage full / disabled — silently skip, falls back to fresh landing
  }
  window.location.hash = `entry/${library.id}/${entry.id}`
 }

 return (
 <>
 <div className="max-w-6xl mx-auto">

 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-6xl font-bold italic text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
 {library.name ? tr(library.name) : t('gal.title')}
 </h2>
 <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
 {library.description ? tr(library.description) : t('gal.subtitle')}
 </p>
 </div>

 {/* Library-selector dots — a könyvtár cím/leírás ÉS a Top10 fejléc közé,
 így minden face-en stabilan ugyanazon a vizuális helyen van. */}
 {dotsLibraries && onDotsJumpTo && (
 <div className="flex justify-center mb-10">
 <DotsIndicator
 libraries={dotsLibraries}
 currentIndex={dotsCurrentIndex}
 onJumpTo={onDotsJumpTo}
 />
 </div>
 )}

 {/* ── Block A: Top 10 ─────────────────────────────────────────────── */}
 <div className="mb-6 flex items-center gap-3">
 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
 <h3 className="text-[#818cf8] text-[11px] font-semibold tracking-[0.3em] uppercase flex items-center gap-2">
 <Star size={11} strokeWidth={2.5} className="text-[#818cf8]" fill="currentColor" />
 {library.labels?.topTitle ? tr(library.labels.topTitle) : t('gal.top10.title')}
 </h3>
 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
 </div>

 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
 {top10.map(peptide => (
 <PeptideTile
 key={peptide.id}
 library={library}
 peptide={peptide}
 featured
 onSelect={openEntry}
 t={t}
 tr={tr}
 lang={lang}
 />
 ))}
 </div>

 {/* ── Block B: All peptides accordion ────────────────────────────── */}
 <div ref={allSectionRef} className="mt-20">
 <button
 onClick={toggleExpanded}
 className="group w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl glass
 hover:border-[rgba(255,255,255,0.18)] transition-all duration-300"
 aria-expanded={expanded}
 aria-controls="all-peptides-panel"
 >
 <div className="flex items-center gap-4">
 <div
 className="w-10 h-10 rounded-full flex items-center justify-center"
 style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.3)' }}
 >
 <ChevronDown
 size={18}
 className={`text-[#818cf8] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
 />
 </div>
 <div className="text-left">
 <h3 className="text-white text-base md:text-lg font-bold italic">
 {library.labels?.allTitle ? tr(library.labels.allTitle) : t('gal.all.title')}
 </h3>
 <p className="text-gray-500 text-xs mt-0.5">
 {metaList.length} {library.labels?.allCount ? tr(library.labels.allCount) : t('gal.all.count')}
 </p>
 </div>
 </div>

 <span className="text-[#818cf8] text-[11px] tracking-[0.25em] uppercase">
 {expanded ? t('gal.all.hide') : t('gal.all.show')}
 </span>
 </button>

 <div
 id="all-peptides-panel"
 className={`grid transition-[grid-template-rows] duration-500 ease-out ${
 expanded ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'
 }`}
 >
 <div className="overflow-hidden">
 {hasOpened && (
 <>

 {/* ── Help callout, Telegram CTA above the search ─────── */}
 <div
 className="mb-5 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
 style={{
 background:
 'linear-gradient(135deg, rgba(129,140,248,0.10) 0%, rgba(236,72,153,0.08) 100%)',
 border: '1px solid rgba(129,140,248,0.30)',
 boxShadow: '0 0 30px rgba(129,140,248,0.10)',
 }}
 >
 <div className="flex-1 min-w-0">
 <p
 className="text-base md:text-lg font-semibold italic leading-snug"
 style={{ color: 'var(--text-primary)' }}
 >
 {t('gal.help.title')}
 </p>
 <p
 className="text-xs mt-1 leading-relaxed"
 style={{ color: 'var(--text-muted)' }}
 >
 {library.labels?.helpBody ? tr(library.labels.helpBody) : t('gal.help.body')}
 </p>
 </div>
 <div className="shrink-0">
 <TelegramButtons variant="pill" align="start" />
 </div>
 </div>

 {/* ── Search + Sort + Filter toggle row ────────────────── */}
 <div className="mb-4 flex flex-col lg:flex-row gap-3">
 <div className="relative flex-1">
 <Search
 size={15}
 className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 pointer-events-none"
 />
 <input
 type="text"
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 placeholder={t('gal.all.search')}
 className="w-full pl-11 pr-4 py-3 rounded-xl text-white text-sm placeholder:text-gray-600
 focus:outline-none focus:border-[#818cf8]/50 transition-colors"
 style={{
 background: 'var(--tint-row)',
 border: '1px solid var(--border-soft)',
 color: 'var(--text-primary)',
 }}
 />
 </div>

 <SortControl value={sortMode} onChange={setSortMode} t={t} />

 <button
 onClick={() => setShowFilters(v => !v)}
 className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300"
 style={{
 background: showFilters || totalActive > 0
 ? 'rgba(129,140,248,0.12)'
 : 'var(--tint-row)',
 border: `1px solid ${
 showFilters || totalActive > 0
 ? 'rgba(129,140,248,0.5)'
 : 'var(--border-soft)'
 }`,
 color: 'var(--text-primary)',
 }}
 aria-expanded={showFilters}
 >
 <SlidersHorizontal size={14} />
 {t('gal.filter.toggle')}
 {totalActive > 0 && (
 <span
 className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
 style={{ background: '#818cf8', color: '#0a0a1c' }}
 >
 {totalActive}
 </span>
 )}
 </button>
 </div>

 {/* Filter chips panel, categories + research level */}
 <div
 className={`grid transition-[grid-template-rows] duration-300 ease-out ${
 showFilters ? 'grid-rows-[1fr] mb-6' : 'grid-rows-[0fr]'
 }`}
 >
 <div className="overflow-hidden">
 <div
 className="p-5 rounded-xl flex flex-col gap-5"
 style={{
 background: 'var(--tint-soft)',
 border: '1px solid var(--tint-soft-border)',
 }}
 >
 {/* Category row */}
 <div>
 <div className="flex items-center justify-between mb-3">
 <p className="text-[#818cf8] text-[11px] font-semibold tracking-[0.25em] uppercase">
 {t('gal.filter.title')}
 </p>
 {totalActive > 0 && (
 <button
 onClick={clearFilters}
 className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-[10px] tracking-widest uppercase"
 >
 <X size={11} />
 {t('gal.filter.clear')}
 </button>
 )}
 </div>

 <div className="flex flex-wrap gap-2">
 <button
 onClick={clearFilters}
 className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
 style={{
 background: totalActive === 0 ? 'rgba(129,140,248,0.18)' : 'var(--tint-row)',
 border: `1px solid ${totalActive === 0 ? 'var(--accent)' : 'var(--border-soft)'}`,
 color: totalActive === 0 ? 'var(--accent)' : 'var(--text-muted)',
 }}
 >
 {t('gal.filter.all')}
 </button>

 {library.categories.map((cat) => {
 const active = activeFilters.includes(cat.id)
 return (
 <button
 key={cat.id}
 onClick={() => toggleFilter(cat.id)}
 className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
 style={{
 background: active ? `${cat.accent}22` : 'var(--tint-row)',
 border: `1px solid ${active ? cat.accent : 'var(--border-soft)'}`,
 color: active ? cat.accent : 'var(--text-muted)',
 boxShadow: active ? `0 0 12px ${cat.accent}30` : 'none',
 }}
 >
 {tr(cat.label)}
 </button>
 )
 })}
 </div>
 </div>

 {/* Research level row */}
 <div>
 <p className="text-[#818cf8] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">
 {t('gal.filter.level')}
 </p>
 <div className="flex flex-wrap gap-2">
 {[5, 4, 3, 2, 1].map(lvl => {
 const active = levelFilters.includes(lvl)
 const meta = LEVEL_META[lvl]
 return (
 <button
 key={lvl}
 onClick={() => toggleLevel(lvl)}
 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200"
 style={{
 background: active ? meta.bg : 'var(--tint-row)',
 border: `1px solid ${active ? meta.border : 'var(--border-soft)'}`,
 color: active ? meta.color : 'var(--text-muted)',
 boxShadow: active ? `0 0 12px ${meta.color}30` : 'none',
 }}
 >
 <span
 className="w-1.5 h-1.5 rounded-full"
 style={{ background: meta.color }}
 />
 L{lvl} · {tr(meta.label)}
 </button>
 )
 })}
 </div>
 </div>

 {totalActive > 0 && (
 <p className="text-gray-600 text-[10px] tracking-wider">
 {totalActive} {t('gal.filter.activeCount')} · {filteredAll.length} {t('gal.all.count')}
 </p>
 )}
 </div>
 </div>
 </div>

 {/* All peptides grid */}
 {filteredAll.length === 0 ? (
 <div className="text-center py-16 text-gray-500 text-sm">
 {t('gal.all.empty')}
 </div>
 ) : (
 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
 {filteredAll.map(peptide => (
 <PeptideTile
 key={peptide.id}
 library={library}
 peptide={peptide}
 featured={false}
 onSelect={openEntry}
 t={t}
 tr={tr}
 lang={lang}
 />
 ))}
 </div>
 )}
 </>
 )}
 </div>
 </div>
 </div>

 </div>

 </>
 )
}
