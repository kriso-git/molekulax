import { useEffect, useRef } from 'react'
import { X, ExternalLink, BookMarked } from 'lucide-react'
import VialImage from './VialImage'
import MiniCalc from './MiniCalc'

export default function PeptideModal({ peptide, onClose }) {
  const overlayRef = useRef(null)

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Close on overlay click (not content click)
  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const { name, accentColor, description, keyInfo, dosageInfo, studies,
          defaultVialMg, defaultBacMl, defaultDoseMcg } = peptide

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ background: 'rgba(4,4,20,0.88)', backdropFilter: 'blur(8px)' }}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-2xl my-6 mx-4 rounded-3xl flex flex-col"
        style={{
          background: 'rgba(10,10,28,0.97)',
          border: `1px solid ${accentColor}30`,
          boxShadow: `0 0 60px ${accentColor}18, 0 32px 64px rgba(0,0,0,0.7)`,
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`${name} részletei`}
      >
        {/* ── Close button ──────────────────────────────────────────── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-gray-500
                     hover:text-white hover:bg-white/[0.07] transition-colors duration-200"
          aria-label="Bezár"
        >
          <X size={18} />
        </button>

        {/* ── Hero header ───────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-8 pt-8 pb-6 rounded-t-3xl"
          style={{ background: `linear-gradient(135deg, ${accentColor}0a 0%, transparent 60%)` }}
        >
          {/* Vial illustration */}
          <div className="w-20 h-36 shrink-0">
            <VialImage accentColor={accentColor} name={name} uid={`modal-${peptide.id}`} />
          </div>

          <div className="flex-1 min-w-0">
            {/* Name */}
            <h2
              className="text-3xl font-bold mb-1"
              style={{ color: accentColor }}
            >
              {name}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {peptide.shortDesc}
            </p>

            {/* Key info grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {keyInfo.map(({ label, value }) => (
                <div key={label}>
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest">{label}: </span>
                  <span className="text-xs text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-8">
          {/* ── Description ─────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-3">Leírás</h3>
            {description.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-300 text-sm leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* ── Dosage info ──────────────────────────────────────────── */}
          <div
            className="rounded-xl p-4"
            style={{ background: `${accentColor}0c`, border: `1px solid ${accentColor}20` }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: accentColor }}>
              Adagolási információk
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{dosageInfo}</p>
          </div>

          {/* ── Releváns Tanulmányok ─────────────────────────────────── */}
          {studies && studies.length > 0 && (
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-4">
                Releváns Tanulmányok
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {studies.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 p-4 rounded-xl transition-all duration-300
                               hover:scale-[1.02]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${accentColor}40`
                      e.currentTarget.style.background  = `${accentColor}08`
                      e.currentTarget.style.boxShadow   = `0 0 20px ${accentColor}12`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.background  = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.boxShadow   = 'none'
                    }}
                  >
                    {/* Tag row */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] tracking-widest uppercase"
                        style={{ background: s.tagColor, color: s.tagText }}
                      >
                        <BookMarked size={8} />
                        {s.tag}
                      </span>
                      <ExternalLink size={11} className="text-gray-600 group-hover:text-gray-400 shrink-0 transition-colors" />
                    </div>

                    {/* Title */}
                    <p className="text-white text-xs font-semibold leading-snug">{s.title}</p>

                    {/* Finding */}
                    <p className="text-gray-500 text-[11px] leading-relaxed border-l border-[rgba(255,255,255,0.08)] pl-2">
                      {s.finding}
                    </p>

                    {/* Meta */}
                    <p className="text-gray-600 text-[10px]">
                      {s.authors} · <em>{s.journal}</em> · {s.year}
                      {s.pmid && ` · PMID ${s.pmid}`}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* ── Integrated calculator ────────────────────────────────── */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-4">
              Beépített Kalkulátor
            </h3>
            <MiniCalc
              defaultVialMg={defaultVialMg}
              defaultBacMl={defaultBacMl}
              defaultDoseMcg={defaultDoseMcg}
              accentColor={accentColor}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
