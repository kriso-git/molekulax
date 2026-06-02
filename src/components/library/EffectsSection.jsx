import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Send, ExternalLink } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

const TELEGRAM_URL = 'https://t.me/molekulaxtra'
const TIKTOK_URL = 'https://www.tiktok.com/@moleculextra'

function TikTokIcon({ size = 15 }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
 </svg>
 )
}

// ── Illustrations (SVG fallback for categories without image) ────────────────
const ILLUSTRATIONS = {
 healing: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs>
 <radialGradient id="rg1a" cx="30%" cy="50%" r="60%"><stop offset="0%" stopColor="rgba(244,63,94,0.25)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient>
 <radialGradient id="rg1b" cx="80%" cy="40%" r="40%"><stop offset="0%" stopColor="rgba(129,140,248,0.15)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient>
 </defs>
 <rect width="480" height="220" fill="url(#rg1a)"/>
 <rect width="480" height="220" fill="url(#rg1b)"/>
 </svg>
 ),
 growth: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg2a" cx="50%" cy="60%" r="55%"><stop offset="0%" stopColor="rgba(16,185,129,0.22)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg2a)"/>
 {[[80,180,20,80],[120,180,20,105],[160,180,20,128],[200,180,20,148],[240,180,20,162],[280,180,20,175]].map(([x,y,w,h],i) => (
 <rect key={i} x={x} y={y-h} width={w} height={h} rx="3" fill={`rgba(16,185,129,${0.2+i*0.08})`} />
 ))}
 <polyline points="90,130 130,105 170,82 210,62 250,48 290,35" stroke="rgba(16,185,129,0.7)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 ),
 muscle: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg3a" cx="45%" cy="50%" r="55%"><stop offset="0%" stopColor="rgba(249,115,22,0.2)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg3a)"/>
 {[55,75,95,115,135,155,175].map((y,i) => (
 <rect key={i} x="60" y={y} width={240+i*8} height="8" rx="4" fill={`rgba(249,115,22,${0.08+i*0.04})`}/>
 ))}
 <circle cx="200" cy="110" r="35" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" fill="rgba(249,115,22,0.05)" />
 <circle cx="200" cy="110" r="18" fill="rgba(249,115,22,0.2)" />
 <circle cx="200" cy="110" r="8" fill="rgba(249,115,22,0.7)" />
 </svg>
 ),
 metabolic: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg4a" cx="50%" cy="50%" r="55%"><stop offset="0%" stopColor="rgba(234,179,8,0.2)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg4a)"/>
 <ellipse cx="160" cy="140" rx="28" ry="50" fill="rgba(234,179,8,0.12)" />
 <ellipse cx="160" cy="145" rx="18" ry="38" fill="rgba(234,179,8,0.2)" />
 <ellipse cx="240" cy="135" rx="22" ry="42" fill="rgba(234,179,8,0.1)" />
 <circle cx="400" cy="100" r="45" stroke="rgba(234,179,8,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
 <circle cx="400" cy="100" r="10" fill="rgba(234,179,8,0.5)" />
 </svg>
 ),
 longevity: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg5a" cx="50%" cy="50%" r="55%"><stop offset="0%" stopColor="rgba(20,184,166,0.2)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg5a)"/>
 <circle cx="200" cy="110" r="60" stroke="rgba(20,184,166,0.15)" strokeWidth="1" fill="none" />
 <circle cx="200" cy="110" r="45" stroke="rgba(20,184,166,0.2)" strokeWidth="1" fill="none" />
 <circle cx="200" cy="110" r="30" stroke="rgba(20,184,166,0.3)" strokeWidth="1.5" fill="none" />
 <circle cx="200" cy="110" r="15" fill="rgba(20,184,166,0.25)" />
 <circle cx="200" cy="110" r="7" fill="rgba(20,184,166,0.7)" />
 </svg>
 ),
 nervous: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg6a" cx="45%" cy="50%" r="55%"><stop offset="0%" stopColor="rgba(168,85,247,0.2)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg6a)"/>
 {[[120,60],[200,40],[280,70],[160,120],[240,100],[320,130],[140,175],[220,160],[300,180],[380,90],[420,140]].map(([x,y],i) => (
 <circle key={i} cx={x} cy={y} r={i%3===0?7:i%2===0?5:4} fill={`rgba(168,85,247,${0.4+i*0.04})`} />
 ))}
 </svg>
 ),
 cosmetic: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg7a" cx="50%" cy="50%" r="55%"><stop offset="0%" stopColor="rgba(236,72,153,0.18)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg7a)"/>
 {[90,75,60,48,36,26,16].map((ry,i) => (
 <ellipse key={i} cx="200" cy="130" rx={160-i*10} ry={ry} stroke={`rgba(236,72,153,${0.08+i*0.04})`} strokeWidth="1" fill="none" />
 ))}
 </svg>
 ),
 immune: () => (
 <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
 <defs><radialGradient id="rg8a" cx="50%" cy="50%" r="55%"><stop offset="0%" stopColor="rgba(59,130,246,0.2)"/><stop offset="100%" stopColor="rgba(7,7,30,0)"/></radialGradient></defs>
 <rect width="480" height="220" fill="url(#rg8a)"/>
 <path d="M200 40 L255 65 L255 120 Q255 160 200 180 Q145 160 145 120 L145 65 Z" stroke="rgba(59,130,246,0.5)" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
 <circle cx="200" cy="112" r="20" fill="rgba(59,130,246,0.25)" />
 <circle cx="200" cy="112" r="10" fill="rgba(59,130,246,0.6)" />
 </svg>
 ),
}

const ILLUSTRATION_BY_INDEX = ['healing', 'growth', 'muscle', 'metabolic', 'longevity', 'nervous', 'cosmetic', 'immune']

function CategoryVisual({ cat, idx }) {
 const { tr } = useLang()
 if (cat.image) {
 const altText = tr(cat.title)
 return (
 <div className="relative w-full h-full overflow-hidden">
 <picture>
   <source
     srcSet={cat.image.replace(/\.png$/i, '.avif')}
     type="image/avif"
   />
   <source
     srcSet={cat.image.replace(/\.png$/i, '.webp')}
     type="image/webp"
   />
   <img
     src={cat.image}
     alt={altText}
     className="absolute inset-0 w-full h-full object-cover"
     loading="lazy"
     draggable="false"
   />
 </picture>
 <div className="absolute inset-0" style={{
 background: `radial-gradient(ellipse at 50% 50%, ${cat.color}14 0%, var(--effect-visual-vignette) 80%)`,
 }} />
 </div>
 )
 }
 const Illu = ILLUSTRATIONS[ILLUSTRATION_BY_INDEX[idx]] || ILLUSTRATIONS.healing
 return <Illu />
}

function openEntryInGallery(libraryId, entryId, onClose) {
 onClose()
 setTimeout(() => {
 window.location.hash = `entry/${libraryId}/${entryId}`
 }, 300)
}

function Modal({ cat, idx, libraryId, onClose }) {
 const { t, tr } = useLang()
 useEffect(() => {
 const handleKey = e => { if (e.key === 'Escape') onClose() }
 document.addEventListener('keydown', handleKey)
 document.body.style.overflow = 'hidden'
 return () => {
 document.removeEventListener('keydown', handleKey)
 document.body.style.overflow = ''
 }
 }, [onClose])

 const { color, glow, studies } = cat
 const entryNames = cat.entryNames || cat.peptides || []
 const entryIds = cat.entryIds || cat.peptideIds || []

 // Portal to document.body — a Modal a LibraryCube `transformStyle: preserve-3d`
 // és face `transform: rotateY()` ancestor-aiban ülne ha inline render-elnénk,
 // és a CSS spec szerint a `position: fixed` egy transformed ancestor-ban a
 // transformed-parent containing block-jára pin-elődik, nem a viewport-ra.
 // Portal kiteszi a body-ra → fixed inset-0 valódi viewport-coverage.
 return createPortal(
 <div
 className="fixed inset-0 z-50 flex items-center justify-center p-4"
 style={{ background: 'var(--bg-modal-backdrop)', backdropFilter: 'blur(6px)' }}
 onClick={e => { if (e.target === e.currentTarget) onClose() }}
 >
 <div
 className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
 style={{
 background: 'var(--bg-elevated)',
 border: `1px solid ${color}35`,
 boxShadow: `0 0 40px ${glow}, 0 0 0 1px var(--tint-soft) inset`,
 }}
 >
 <div className="relative h-56 overflow-hidden rounded-t-3xl">
 <CategoryVisual cat={cat} idx={idx} />
 <div className="absolute inset-0" style={{
 background: `radial-gradient(ellipse at 30% 50%, ${color}22 0%, transparent 70%)`,
 }} />
 <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.6 }} />
 <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.4 }} />
 <div className="absolute top-4 right-14 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.6 }} />
 <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.4 }} />
 <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }} />
 <div className="absolute bottom-0 left-0 right-0 h-16"
 style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-modal-fade))' }} />
 <button
 onClick={onClose}
 className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
 style={{ background: 'var(--tint-strong)', border: '1px solid var(--tint-strong-border)' }}
 onMouseEnter={e => e.currentTarget.style.background='var(--tint-medium-border)'}
 onMouseLeave={e => e.currentTarget.style.background='var(--tint-strong)'}
 aria-label={t('modal.close')}
 >
 <X size={15} className="text-gray-400" />
 </button>
 </div>

 <div className="px-8 pb-8">
 <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-1" style={{ color }}>
 {tr(cat.subtitle)}
 </p>
 <h2 className="text-2xl font-bold text-white mb-5 leading-snug">{tr(cat.title)}</h2>

 <p className="text-gray-300 text-sm leading-relaxed mb-8">{tr(cat.detail)}</p>

 <div className="mb-8">
 <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 mb-4 font-semibold">
 {t('pe.refs')}
 </p>
 <div className="flex flex-col gap-3">
 {studies.map((s, i) => (
 <a
 key={i}
 href={`https://pubmed.ncbi.nlm.nih.gov/${s.pmid}/`}
 target="_blank"
 rel="noopener noreferrer"
 className="group flex items-start gap-3 p-4 rounded-xl transition-all duration-200 cursor-pointer"
 style={{
 background: `${color}08`,
 border: `1px solid ${color}20`,
 }}
 onMouseEnter={e => {
 e.currentTarget.style.background=`${color}14`
 e.currentTarget.style.borderColor=`${color}40`
 }}
 onMouseLeave={e => {
 e.currentTarget.style.background=`${color}08`
 e.currentTarget.style.borderColor=`${color}20`
 }}
 >
 <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: `${color}25`, color }}>
 {i + 1}
 </div>
 <div className="flex-1 min-w-0">
 <p className="text-white text-xs font-semibold leading-snug mb-1 group-hover:text-opacity-90">{s.title}</p>
 <p className="text-gray-500 text-[11px]">{s.authors}, <span style={{ color: `${color}cc` }}>{s.journal}</span></p>
 <p className="text-gray-700 text-[10px] mt-0.5 font-mono flex items-center gap-1">
 PMID: {s.pmid}
 <ExternalLink size={9} className="opacity-50 group-hover:opacity-100 transition-opacity" />
 </p>
 </div>
 </a>
 ))}
 </div>
 </div>

 <div className="mb-8">
 <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 mb-3 font-semibold">
 {t('pe.relevant')}
 </p>
 <div className="flex flex-wrap gap-2">
 {entryNames.map((p, i) => {
 const pid = entryIds[i]
 return pid ? (
 <button
 key={i}
 onClick={() => openEntryInGallery(libraryId, pid, onClose)}
 className="group text-[11px] px-3 py-1.5 rounded-full font-mono tracking-wide font-semibold flex items-center gap-1.5 transition-all duration-200"
 style={{ background: `${color}16`, border: `1px solid ${color}40`, color }}
 onMouseEnter={e => { e.currentTarget.style.background=`${color}30`; e.currentTarget.style.borderColor=`${color}70` }}
 onMouseLeave={e => { e.currentTarget.style.background=`${color}16`; e.currentTarget.style.borderColor=`${color}40` }}
 >
 {p}
 <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
 <path d="M5 12h14M12 5l7 7-7 7"/>
 </svg>
 </button>
 ) : (
 <span key={i} className="text-[11px] px-3 py-1.5 rounded-full font-mono tracking-wide font-semibold opacity-60"
 style={{ background: `${color}0d`, border: `1px solid ${color}25`, color }}>
 {p}
 </span>
 )
 })}
 </div>
 </div>

 <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }} />

 <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 mb-4 font-semibold text-center">
 {t('pe.contactPrompt')}
 </p>
 <div className="flex gap-3">
 <a
 href={TELEGRAM_URL}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300"
 style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
 onMouseEnter={e => e.currentTarget.style.boxShadow='0 0 30px rgba(139,92,246,0.4)'}
 onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
 >
 <Send size={14} strokeWidth={2.5} />
 Telegram
 </a>
 <a
 href={TIKTOK_URL}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300"
 style={{ background: 'var(--tint-medium)', border: '1px solid var(--tint-medium-border)', color: 'var(--text-secondary)' }}
 onMouseEnter={e => { e.currentTarget.style.background='var(--tint-strong)'; e.currentTarget.style.borderColor='var(--border-accent)' }}
 onMouseLeave={e => { e.currentTarget.style.background='var(--tint-medium)'; e.currentTarget.style.borderColor='var(--tint-medium-border)' }}
 >
 <TikTokIcon size={14} />
 TikTok
 </a>
 </div>
 </div>
 </div>
 </div>,
 document.body
 )
}

export default function EffectsSection() {
 const { t, tr } = useLang()
 const { library } = useLibrary()
 const [active, setActive] = useState(null)

 if (!library?.effects?.length) return null

 const categories = library.effects
 const sectionTitle = library.effectsTitle ? tr(library.effectsTitle) : t('pe.title')
 const sectionSubtitle = library.effectsSubtitle ? tr(library.effectsSubtitle) : t('pe.subtitle')

 return (
 <>
 <section className="py-20 px-4">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-5">
 {sectionTitle}
 </h2>
 <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed mb-5">
 {sectionSubtitle}
 </p>
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
 style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.3)' }}>
 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M15 15l6 6M11 5a6 6 0 100 12 6 6 0 000-12z"/>
 </svg>
 <span className="text-[#818cf8] text-xs tracking-[0.2em] uppercase font-semibold">{t('pe.hint')}</span>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {categories.map((cat, i) => {
 const entryNames = cat.entryNames || cat.peptides || []
 return (
 <div
 key={i}
 className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 select-none"
 style={{ border: '1px solid var(--tint-soft-border)', background: 'var(--tint-soft)' }}
 role="button"
 tabIndex={0}
 onClick={() => setActive({ cat, idx: i })}
 onKeyDown={(e) => {
 if (e.key === 'Enter' || e.key === ' ') {
 e.preventDefault()
 setActive({ cat, idx: i })
 }
 }}
 onMouseEnter={e => {
 e.currentTarget.style.border = `1px solid ${cat.color}40`
 e.currentTarget.style.boxShadow = `0 0 40px ${cat.glow}`
 e.currentTarget.style.transform = 'translateY(-2px)'
 }}
 onMouseLeave={e => {
 e.currentTarget.style.border = '1px solid var(--tint-soft-border)'
 e.currentTarget.style.boxShadow = 'none'
 e.currentTarget.style.transform = 'translateY(0)'
 }}
 >
 <div className="relative h-52 overflow-hidden" style={{ background: 'var(--bg-tile)' }}>
 <CategoryVisual cat={cat} idx={i} />
 <div className="absolute bottom-0 left-0 right-0 h-10"
 style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-tile-fade))' }} />
 <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
 <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold"
 style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}40`, color: cat.color }}>
 {t('pe.details')}
 </div>
 </div>
 </div>

 <div className="p-7">
 <p className="text-[10px] tracking-[0.25em] uppercase mb-2 font-semibold" style={{ color: cat.color }}>
 {tr(cat.subtitle)}
 </p>
 <h3 className="text-xl font-bold text-white mb-4 leading-snug">{tr(cat.title)}</h3>
 <p className="text-gray-400 text-sm leading-relaxed mb-5">{tr(cat.description)}</p>
 {(cat.entryIds?.length || cat.peptideIds?.length) > 0 ? (
 <div className="flex flex-wrap gap-2">
 {entryNames.map((p, j) => {
 const pid = (cat.entryIds || cat.peptideIds || [])[j]
 if (!pid) {
 return (
 <span key={j} className="text-[11px] px-3 py-1 rounded-full font-mono tracking-wide opacity-70"
 style={{ background: `${cat.color}14`, border: `1px solid ${cat.color}35`, color: cat.color }}>
 {p}
 </span>
 )
 }
 return (
 <button
 key={j}
 type="button"
 onClick={e => {
 e.stopPropagation()
 window.location.hash = `entry/${library.id}/${pid}`
 }}
 className="text-[11px] px-3 py-1 rounded-full font-mono tracking-wide font-semibold transition-all duration-200 hover:scale-105"
 style={{ background: `${cat.color}14`, border: `1px solid ${cat.color}35`, color: cat.color }}
 onMouseEnter={e => {
 e.currentTarget.style.background = `${cat.color}28`
 e.currentTarget.style.borderColor = `${cat.color}70`
 e.currentTarget.style.boxShadow = `0 0 12px ${cat.glow}`
 }}
 onMouseLeave={e => {
 e.currentTarget.style.background = `${cat.color}14`
 e.currentTarget.style.borderColor = `${cat.color}35`
 e.currentTarget.style.boxShadow = 'none'
 }}
 >
 {p}
 </button>
 )
 })}
 </div>
 ) : null}
 </div>
 </div>
 )
 })}
 </div>
 </div>
 </section>

 {active && <Modal cat={active.cat} idx={active.idx} libraryId={library.id} onClose={() => setActive(null)} />}
 </>
 )
}
