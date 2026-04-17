import { useState, useMemo } from 'react'
import { FlaskConical, CalendarDays, BookOpen, ChevronDown, Info } from 'lucide-react'

const PEPTIDES = [
  { name: 'BPC-157',     vial: 5,   typDose: 250,  unit: 'mcg', halfLife: '~4 óra' },
  { name: 'TB-500',      vial: 5,   typDose: 2500, unit: 'mcg', halfLife: '~3 nap' },
  { name: 'CJC-1295',    vial: 2,   typDose: 100,  unit: 'mcg', halfLife: '~5-8 nap' },
  { name: 'Ipamorelin',  vial: 2,   typDose: 200,  unit: 'mcg', halfLife: '~2 óra' },
  { name: 'AOD-9604',    vial: 5,   typDose: 300,  unit: 'mcg', halfLife: '~3 óra' },
  { name: 'Sermorelin',  vial: 3,   typDose: 200,  unit: 'mcg', halfLife: '~11 perc' },
  { name: 'GHK-Cu',      vial: 50,  typDose: 1000, unit: 'mcg', halfLife: 'N/A' },
  { name: 'PT-141',      vial: 10,  typDose: 1000, unit: 'mcg', halfLife: '~3 óra' },
  { name: 'Egyéni',      vial: null, typDose: null, unit: 'mcg', halfLife: '—' },
]

const REF_TABLE = [
  { name: 'BPC-157',    halfLife: '~4 óra',     typDose: '200–500 mcg', freq: '1-2x/nap',   vial: '5 mg',   route: 'SC / IM' },
  { name: 'TB-500',     halfLife: '~3 nap',     typDose: '2–5 mg',      freq: '2x/hét',     vial: '5 mg',   route: 'SC / IM' },
  { name: 'CJC-1295',   halfLife: '5–8 nap',    typDose: '100–300 mcg', freq: '2x/hét',     vial: '2 mg',   route: 'SC' },
  { name: 'Ipamorelin', halfLife: '~2 óra',     typDose: '100–300 mcg', freq: '2-3x/nap',   vial: '2 mg',   route: 'SC' },
  { name: 'AOD-9604',   halfLife: '~3 óra',     typDose: '250–500 mcg', freq: '1x/nap',     vial: '5 mg',   route: 'SC' },
  { name: 'Sermorelin', halfLife: '~11 perc',   typDose: '100–500 mcg', freq: '1x/nap',     vial: '3 mg',   route: 'SC' },
  { name: 'GHK-Cu',     halfLife: 'N/A',        typDose: '0.5–2 mg',    freq: '1x/nap',     vial: '50 mg',  route: 'SC / topikális' },
  { name: 'PT-141',     halfLife: '~3 óra',     typDose: '0.5–2 mg',    freq: 'szükség szerint', vial: '10 mg', route: 'SC / IN' },
]

const TABS = [
  { id: 'recon',  label: 'Rekonstituálás',   Icon: FlaskConical },
  { id: 'cycle',  label: 'Ciklustervező',    Icon: CalendarDays },
  { id: 'ref',    label: 'Referencia',       Icon: BookOpen },
]

function InputField({ label, value, onChange, min, step, suffix, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={min ?? 0}
          step={step ?? 'any'}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-[rgba(129,140,248,0.5)] transition-colors duration-200"
        />
        {suffix && <span className="text-gray-500 text-xs shrink-0 font-semibold">{suffix}</span>}
      </div>
      {hint && <p className="text-gray-600 text-xs">{hint}</p>}
    </div>
  )
}

function ResultRow({ label, value, highlight }) {
  return (
    <div className={`flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0 ${highlight ? 'text-[#818cf8]' : ''}`}>
      <span className="text-gray-400 text-sm">{label}</span>
      <span className={`font-bold text-base ${highlight ? 'text-[#818cf8]' : 'text-white'}`}>{value}</span>
    </div>
  )
}

function ReconTab() {
  const [peptideIdx, setPeptideIdx] = useState(0)
  const [vialMg, setVialMg] = useState(PEPTIDES[0].vial ?? 5)
  const [bacMl, setBacMl] = useState(2)
  const [doseMcg, setDoseMcg] = useState(PEPTIDES[0].typDose ?? 250)

  const peptide = PEPTIDES[peptideIdx]

  const handlePeptideChange = (idx) => {
    setPeptideIdx(idx)
    const p = PEPTIDES[idx]
    if (p.vial) setVialMg(p.vial)
    if (p.typDose) setDoseMcg(p.typDose)
  }

  const results = useMemo(() => {
    const v = parseFloat(vialMg)
    const b = parseFloat(bacMl)
    const d = parseFloat(doseMcg)
    if (!v || !b || !d || b <= 0) return null
    const concMcgPerMl = (v * 1000) / b
    const volumeMl = d / concMcgPerMl
    const syringeIU = volumeMl * 100
    return {
      conc: concMcgPerMl.toFixed(0),
      volumeMl: volumeMl.toFixed(3),
      syringeIU: syringeIU.toFixed(1),
    }
  }, [vialMg, bacMl, doseMcg])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
            Peptid
          </label>
          <div className="relative">
            <select
              value={peptideIdx}
              onChange={e => handlePeptideChange(Number(e.target.value))}
              className="w-full appearance-none bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-[rgba(129,140,248,0.5)] transition-colors duration-200 cursor-pointer"
            >
              {PEPTIDES.map((p, i) => (
                <option key={i} value={i} className="bg-[#0f0f0f]">{p.name}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <InputField
          label="Injekciós üveg mérete"
          value={vialMg}
          onChange={setVialMg}
          min={0.1}
          step={0.1}
          suffix="mg"
          hint="Általában 2 mg, 5 mg vagy 10 mg"
        />
        <InputField
          label="Hozzáadott bakteriostatikus víz"
          value={bacMl}
          onChange={setBacMl}
          min={0.1}
          step={0.1}
          suffix="mL"
          hint="Jellemzően 1–2 mL"
        />
        <InputField
          label="Kívánt dózis"
          value={doseMcg}
          onChange={setDoseMcg}
          min={1}
          step={1}
          suffix="mcg"
          hint={peptide.typDose ? `Tipikus tartomány: ${peptide.typDose} mcg` : ''}
        />
      </div>

      <div className="flex flex-col justify-between">
        <div
          className="rounded-2xl p-6 flex flex-col"
          style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(129,140,248,0.14)' }}
        >
          <p className="text-[#818cf8] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            Eredmény
          </p>
          {results ? (
            <>
              <ResultRow label="Koncentráció" value={`${results.conc} mcg/mL`} />
              <ResultRow label="Felszívandó mennyiség" value={`${results.volumeMl} mL`} />
              <ResultRow label="Inzulinfecskendő egység" value={`${results.syringeIU} IU`} highlight />
            </>
          ) : (
            <p className="text-gray-600 text-sm">Add meg az adatokat az eredményhez.</p>
          )}
        </div>

        <div
          className="mt-4 rounded-xl p-4 flex items-start gap-3"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <Info size={14} className="text-gray-600 shrink-0 mt-0.5" />
          <p className="text-gray-600 text-xs leading-relaxed">
            Az inzulinfecskendő <strong className="text-gray-500">U-100</strong> skálán értendő
            (100 IU = 1 mL). Ha U-40 fecskendőt használsz, az eredményt osztd 2,5-tel.
          </p>
        </div>
      </div>
    </div>
  )
}

function CycleTab() {
  const [doseMcg, setDoseMcg] = useState(250)
  const [injectPerDay, setInjectPerDay] = useState(1)
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  const [weeks, setWeeks] = useState(4)
  const [vialMg, setVialMg] = useState(5)

  const results = useMemo(() => {
    const d = parseFloat(doseMcg)
    const ipd = parseFloat(injectPerDay)
    const dpw = parseFloat(daysPerWeek)
    const w = parseFloat(weeks)
    const vm = parseFloat(vialMg)
    if (!d || !ipd || !dpw || !w || !vm) return null
    const totalMcg = d * ipd * dpw * w
    const totalMg = totalMcg / 1000
    const vialsNeeded = Math.ceil(totalMg / vm)
    const injectTotal = ipd * dpw * w
    return { totalMcg, totalMg: totalMg.toFixed(2), vialsNeeded, injectTotal }
  }, [doseMcg, injectPerDay, daysPerWeek, weeks, vialMg])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-5">
        <InputField label="Dózis / injekció" value={doseMcg} onChange={setDoseMcg} min={1} step={1} suffix="mcg" />
        <InputField label="Injekció / nap" value={injectPerDay} onChange={setInjectPerDay} min={1} step={1} />
        <InputField label="Aktív nap / hét" value={daysPerWeek} onChange={setDaysPerWeek} min={1} step={1} hint="Max. 7" />
        <InputField label="Ciklus hossza" value={weeks} onChange={setWeeks} min={1} step={1} suffix="hét" />
        <InputField label="Üveg mérete" value={vialMg} onChange={setVialMg} min={0.1} step={0.1} suffix="mg" />
      </div>

      <div>
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(129,140,248,0.14)' }}
        >
          <p className="text-[#818cf8] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            Ciklus összesítő
          </p>
          {results ? (
            <>
              <ResultRow label="Összes injekció" value={`${results.injectTotal} db`} />
              <ResultRow label="Összes dózis" value={`${results.totalMcg.toLocaleString('hu-HU')} mcg`} />
              <ResultRow label="Összes mennyiség" value={`${results.totalMg} mg`} />
              <ResultRow label="Szükséges injekciós üveg" value={`${results.vialsNeeded} db`} highlight />
            </>
          ) : (
            <p className="text-gray-600 text-sm">Add meg az adatokat az összesítőhöz.</p>
          )}
        </div>
      </div>
    </div>
  )
}

function RefTab() {
  return (
    <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
      <table className="w-full text-sm min-w-[600px]">
        <thead>
          <tr style={{ background: 'rgba(99,102,241,0.07)' }}>
            {['Peptid', 'Félelevidő', 'Tipikus dózis', 'Frekvencia', 'Üveg', 'Beadás'].map(h => (
              <th key={h} className="text-left px-5 py-4 text-[#818cf8] text-xs tracking-widest uppercase font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {REF_TABLE.map((r, i) => (
            <tr
              key={i}
              className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-150"
            >
              <td className="px-5 py-4 text-white font-bold">{r.name}</td>
              <td className="px-5 py-4 text-gray-400">{r.halfLife}</td>
              <td className="px-5 py-4 text-gray-400">{r.typDose}</td>
              <td className="px-5 py-4 text-gray-400">{r.freq}</td>
              <td className="px-5 py-4 text-gray-400">{r.vial}</td>
              <td className="px-5 py-4 text-gray-500 italic text-xs">{r.route}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-gray-700 text-xs px-5 py-4 border-t border-white/[0.04]">
        SC = szubkután · IM = intramuszkuláris · IN = intranazális · A fenti értékek tájékoztató jellegűek.
      </p>
    </div>
  )
}

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('recon')

  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            Eszközök
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
            Peptid Számológép
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Rekonstituálási arányok, ciklustervezés és referencia adatok — egy helyen.
          </p>
        </div>

        <div className="glass rounded-3xl p-2 mb-2">
          <div className="flex gap-1">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={15} strokeWidth={2} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-7 md:p-10">
          {activeTab === 'recon' && <ReconTab />}
          {activeTab === 'cycle' && <CycleTab />}
          {activeTab === 'ref'   && <RefTab />}
        </div>
      </div>
    </section>
  )
}
