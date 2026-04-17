import { useState, useEffect, useRef } from 'react'
import { PEPTIDES } from '../data/peptides'
import VialImage from './VialImage'
import PeptideModal from './PeptideModal'

export default function PeptideGallery() {
  const [selected, setSelected] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      const peptide = PEPTIDES.find(p => p.id === e.detail.id)
      if (!peptide) return
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => setSelected(peptide), 500)
    }
    window.addEventListener('open-peptide', handler)
    return () => window.removeEventListener('open-peptide', handler)
  }, [])

  return (
    <>
      <section ref={sectionRef} className="py-28 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
              Peptid Könyvtár
            </p>
            <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
              Peptidek
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Kattints egy peptidre a részletes leírásért, releváns kutatásokért és a beépített kalkulátorért.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {PEPTIDES.map((peptide) => (
              <button
                key={peptide.id}
                onClick={() => setSelected(peptide)}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl glass
                           hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.03)]
                           transition-all duration-300 cursor-pointer text-left"
                aria-label={`${peptide.name} részletei`}
              >
                {/* Accent glow behind vial */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 40%, ${peptide.accentColor}18 0%, transparent 70%)`,
                  }}
                />

                {/* Vial */}
                <div className="w-16 h-28 relative z-10 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <VialImage
                    accentColor={peptide.accentColor}
                    name={peptide.name}
                    uid={peptide.id}
                  />
                </div>

                {/* Name */}
                <div className="relative z-10 text-center">
                  <p className="text-white font-bold text-sm leading-tight group-hover:text-white transition-colors">
                    {peptide.name}
                  </p>
                  <p
                    className="text-[10px] mt-1 leading-snug line-clamp-2"
                    style={{ color: peptide.accentColor, opacity: 0.8 }}
                  >
                    {peptide.shortDesc.split('—')[0].trim()}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 rounded-full transition-all duration-300"
                  style={{ background: peptide.accentColor, opacity: 0.5 }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <PeptideModal peptide={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
