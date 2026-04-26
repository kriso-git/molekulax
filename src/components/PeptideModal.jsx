import { useEffect, useRef } from 'react'
import { X, ExternalLink, BookMarked } from 'lucide-react'
import VialImage from './VialImage'
import MiniCalc from './MiniCalc'
import { useLang } from '../i18n/LanguageContext'

export default function PeptideModal({ peptide, onClose }) {
  const overlayRef = useRef(null)
  const { t, tr } = useLang()

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const { name, accentColor, image, keyInfo, studies,
          defaultVialMg, defaultBacMl, defaultDoseMcg } = peptide

  const description = tr(peptide.description) || ''
  const dosageInfo = tr(peptide.dosageInfo) || ''
  const shortDesc = tr(peptide.shortDesc) || ''

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ background: 'rgba(4,4,20,0.88)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="relative w-full max-w-2xl my-6 mx-4 rounded-3xl flex flex-col"
        style={{
          background: 'rgba(10,10,28,0.97)',
          border: `1px solid ${accentColor}30`,
          boxShadow: `0 0 60px ${accentColor}18, 0 32px 64px rgba(0,0,0,0.7)`,
        }}
        role="dialog"
        aria-modal="true"
        aria-label={name}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-gray-500
                     hover:text-white hover:bg-white/[0.07] transition-colors duration-200"
          aria-label={t('modal.close')}
        >
          <X size={18} />
        </button>

        <div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-8 pt-8 pb-6 rounded-t-3xl"
          style={{ background: `linear-gradient(135deg, ${accentColor}0a 0%, transparent 60%)` }}
        >
          <div className="w-24 h-36 shrink-0">
            <VialImage accentColor={accentColor} name={name} uid={`modal-${peptide.id}`} image={image} />
          </div>

          <div className="flex-1 min-w-0">
            <h2
              className="text-3xl font-bold mb-1"
              style={{ color: accentColor }}
            >
              {name}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {shortDesc}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {keyInfo.map((info, i) => (
                <div key={i}>
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest">{tr(info.label)}: </span>
                  <span className="text-xs text-gray-300">{tr(info.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-8">
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-3">{t('modal.description')}</h3>
            {description.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-300 text-sm leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          <div
            className="rounded-xl p-4"
            style={{ background: `${accentColor}0c`, border: `1px solid ${accentColor}20` }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: accentColor }}>
              {t('modal.dosage')}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{dosageInfo}</p>
          </div>

          {studies && studies.length > 0 && (
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-4">
                {t('modal.studies')}
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
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] tracking-widest uppercase"
                        style={{ background: s.tagColor, color: s.tagText }}
                      >
                        <BookMarked size={8} />
                        {tr(s.tag)}
                      </span>
                      <ExternalLink size={11} className="text-gray-600 group-hover:text-gray-400 shrink-0 transition-colors" />
                    </div>

                    <p className="text-white text-xs font-semibold leading-snug">{s.title}</p>

                    <p className="text-gray-500 text-[11px] leading-relaxed border-l border-[rgba(255,255,255,0.08)] pl-2">
                      {tr(s.finding)}
                    </p>

                    <p className="text-gray-600 text-[10px]">
                      {s.authors} · <em>{s.journal}</em> · {s.year}
                      {s.pmid && ` · PMID ${s.pmid}`}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-4">
              {t('modal.calculator')}
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
