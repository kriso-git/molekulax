import { useState, useMemo } from 'react'
import { Calculator } from 'lucide-react'

export default function MiniCalc({ defaultVialMg = 5, defaultBacMl = 2, defaultDoseMcg = 250, accentColor = '#818cf8' }) {
  const [vialMg,   setVialMg]   = useState(String(defaultVialMg))
  const [bacMl,    setBacMl]    = useState(String(defaultBacMl))
  const [doseMcg,  setDoseMcg]  = useState(String(defaultDoseMcg))

  const result = useMemo(() => {
    const vial = parseFloat(vialMg)
    const bac  = parseFloat(bacMl)
    const dose = parseFloat(doseMcg)
    if (!vial || !bac || !dose || vial <= 0 || bac <= 0 || dose <= 0) return null

    const concMcgPerMl = (vial * 1000) / bac      // mcg/ml
    const syringeIU    = (dose / concMcgPerMl) * 100 // U-100
    const syringeMl    = dose / concMcgPerMl
    const doses        = Math.floor((vial * 1000) / dose)

    return { concMcgPerMl, syringeIU, syringeMl, doses }
  }, [vialMg, bacMl, doseMcg])

  const field = (label, value, setter, unit, step = 'any') => (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</label>
      <div className="flex items-center gap-1.5">
        <input
          type="number"
          value={value}
          onChange={e => setter(e.target.value)}
          step={step}
          min="0"
          className="w-full bg-[rgba(0,0,0,0.35)] border border-white/[0.08] rounded-lg px-3 py-2
                     text-white text-sm focus:outline-none focus:border-[rgba(129,140,248,0.4)]
                     transition-colors"
        />
        <span className="text-gray-500 text-xs shrink-0 w-8">{unit}</span>
      </div>
    </div>
  )

  return (
    <div className="rounded-xl border border-white/[0.07] bg-[rgba(0,0,0,0.25)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={14} style={{ color: accentColor }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: accentColor }}>
          Peptid Kalkulátor
        </span>
      </div>

      {/* Inputs — 3 columns */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {field('Fiola', vialMg,   setVialMg,  'mg')}
        {field('BAC víz', bacMl,  setBacMl,   'ml')}
        {field('Adag', doseMcg,   setDoseMcg, 'mcg')}
      </div>

      {/* Result */}
      {result ? (
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Koncentráció', value: `${result.concMcgPerMl.toFixed(1)} mcg/ml` },
            { label: 'Fecskendő (IU)', value: `${result.syringeIU.toFixed(1)} IU` },
            { label: 'Fecskendő (ml)', value: `${result.syringeMl.toFixed(3)} ml` },
            { label: 'Adagok száma', value: `${result.doses} adag` },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-lg px-3 py-2"
              style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}22` }}
            >
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
              <p className="text-white font-bold text-sm">{value}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xs py-3">
          Add meg az adatokat a számításhoz.
        </p>
      )}

      <p className="text-[10px] text-gray-700 mt-3 text-center">
        Kizárólag tájékoztató — nem helyettesíti az orvosi tanácsadást.
      </p>
    </div>
  )
}
