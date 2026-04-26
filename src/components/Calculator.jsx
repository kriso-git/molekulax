import { useState, useMemo } from 'react'
import { FlaskConical, CalendarDays, BookOpen, ChevronDown, Info } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// Localized half-life / route helpers
const HL = {
  '4h':   { hu: '~4 óra',     en: '~4 h',      pl: '~4 godz.' },
  '3d':   { hu: '~3 nap',     en: '~3 days',   pl: '~3 dni' },
  '5_8d': { hu: '~5–8 nap',   en: '~5–8 days', pl: '~5–8 dni' },
  '2h':   { hu: '~2 óra',     en: '~2 h',      pl: '~2 godz.' },
  '33h':  { hu: '~33 óra',    en: '~33 h',     pl: '~33 godz.' },
  '11m':  { hu: '~11 perc',   en: '~11 min',   pl: '~11 min' },
  '3h':   { hu: '~3 óra',     en: '~3 h',      pl: '~3 godz.' },
  'na':   'N/A',
  'dash': '—',
}
const FREQ = {
  oncetwice:  { hu: '1-2x/nap',         en: '1-2× daily',     pl: '1-2× dziennie' },
  twiceWeek:  { hu: '2x/hét',           en: '2× weekly',      pl: '2× w tyg.' },
  twoThree:   { hu: '2-3x/nap',         en: '2-3× daily',     pl: '2-3× dziennie' },
  onceDay:    { hu: '1x/nap',           en: '1× daily',       pl: '1× dziennie' },
  weekly1_2:  { hu: 'heti 1–2×',        en: '1–2× weekly',    pl: '1–2× w tyg.' },
  asNeeded:   { hu: 'szükség szerint',  en: 'as needed',      pl: 'wg potrzeb' },
}
const ROUTE = {
  scim:    'SC / IM',
  sc:      'SC',
  scin:    'SC / IN',
  sctop:   { hu: 'SC / topikális', en: 'SC / topical', pl: 'SC / miejscowo' },
}

const PEPTIDES = [
  { name: 'BPC-157',     vial: 5,   typDose: 250,  unit: 'mcg', halfLife: HL['4h'] },
  { name: 'TB-500',      vial: 5,   typDose: 2500, unit: 'mcg', halfLife: HL['3d'] },
  { name: 'CJC-1295',    vial: 2,   typDose: 100,  unit: 'mcg', halfLife: HL['5_8d'] },
  { name: 'Ipamorelin',  vial: 2,   typDose: 200,  unit: 'mcg', halfLife: HL['2h'] },
  { name: 'Melanotan-2', vial: 10,  typDose: 500,  unit: 'mcg', halfLife: HL['33h'] },
  { name: 'Sermorelin',  vial: 3,   typDose: 200,  unit: 'mcg', halfLife: HL['11m'] },
  { name: 'GHK-Cu',      vial: 50,  typDose: 1000, unit: 'mcg', halfLife: HL.na },
  { name: 'PT-141',      vial: 10,  typDose: 1000, unit: 'mcg', halfLife: HL['3h'] },
  { name: '__custom',    vial: null, typDose: null, unit: 'mcg', halfLife: HL.dash },
]

const REF_TABLE = [
  { name: 'BPC-157',    halfLife: HL['4h'],    typDose: '200–500 mcg', freq: FREQ.oncetwice, vial: '5 mg',   route: ROUTE.scim },
  { name: 'TB-500',     halfLife: HL['3d'],    typDose: '2–5 mg',      freq: FREQ.twiceWeek, vial: '5 mg',   route: ROUTE.scim },
  { name: 'CJC-1295',   halfLife: HL['5_8d'],  typDose: '100–300 mcg', freq: FREQ.twiceWeek, vial: '2 mg',   route: ROUTE.sc },
  { name: 'Ipamorelin', halfLife: HL['2h'],    typDose: '100–300 mcg', freq: FREQ.twoThree,  vial: '2 mg',   route: ROUTE.sc },
  { name: 'Melanotan-2',halfLife: HL['33h'],   typDose: '250–1000 mcg',freq: FREQ.weekly1_2, vial: '10 mg',  route: ROUTE.sc },
  { name: 'Sermorelin', halfLife: HL['11m'],   typDose: '100–500 mcg', freq: FREQ.onceDay,   vial: '3 mg',   route: ROUTE.sc },
  { name: 'GHK-Cu',     halfLife: HL.na,       typDose: '0.5–2 mg',    freq: FREQ.onceDay,   vial: '50 mg',  route: ROUTE.sctop },
  { name: 'PT-141',     halfLife: HL['3h'],    typDose: '0.5–2 mg',    freq: FREQ.asNeeded,  vial: '10 mg',  route: ROUTE.scin },
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
  const { t } = useLang()
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

  const uNoteParts = t('calc.uNote').split('{U}')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
            {t('calc.peptide')}
          </label>
          <div className="relative">
            <select
              value={peptideIdx}
              onChange={e => handlePeptideChange(Number(e.target.value))}
              className="w-full appearance-none bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-[rgba(129,140,248,0.5)] transition-colors duration-200 cursor-pointer"
            >
              {PEPTIDES.map((p, i) => (
                <option key={i} value={i} className="bg-[#0f0f0f]">
                  {p.name === '__custom' ? t('calc.custom') : p.name}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <InputField
          label={t('calc.vialSize')}
          value={vialMg}
          onChange={setVialMg}
          min={0.1}
          step={0.1}
          suffix="mg"
          hint={t('calc.vialHint')}
        />
        <InputField
          label={t('calc.bac')}
          value={bacMl}
          onChange={setBacMl}
          min={0.1}
          step={0.1}
          suffix="mL"
          hint={t('calc.bacHint')}
        />
        <InputField
          label={t('calc.dose')}
          value={doseMcg}
          onChange={setDoseMcg}
          min={1}
          step={1}
          suffix="mcg"
          hint={peptide.typDose ? `${t('calc.doseHint')}: ${peptide.typDose} mcg` : ''}
        />
      </div>

      <div className="flex flex-col justify-between">
        <div
          className="rounded-2xl p-6 flex flex-col"
          style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(129,140,248,0.14)' }}
        >
          <p className="text-[#818cf8] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            {t('calc.result')}
          </p>
          {results ? (
            <>
              <ResultRow label={t('calc.conc')} value={`${results.conc} mcg/mL`} />
              <ResultRow label={t('calc.volume')} value={`${results.volumeMl} mL`} />
              <ResultRow label={t('calc.iu')} value={`${results.syringeIU} IU`} highlight />
            </>
          ) : (
            <p className="text-gray-600 text-sm">{t('calc.empty')}</p>
          )}
        </div>

        <div
          className="mt-4 rounded-xl p-4 flex items-start gap-3"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <Info size={14} className="text-gray-600 shrink-0 mt-0.5" />
          <p className="text-gray-600 text-xs leading-relaxed">
            {uNoteParts[0]}
            <strong className="text-gray-500">{t('calc.uNote.bold')}</strong>
            {uNoteParts[1]}
          </p>
        </div>
      </div>
    </div>
  )
}

function CycleTab() {
  const { t } = useLang()
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
        <InputField label={t('calc.cycleDose')} value={doseMcg} onChange={setDoseMcg} min={1} step={1} suffix="mcg" />
        <InputField label={t('calc.cycleInjectsPerDay')} value={injectPerDay} onChange={setInjectPerDay} min={1} step={1} />
        <InputField label={t('calc.cycleActiveDays')} value={daysPerWeek} onChange={setDaysPerWeek} min={1} step={1} hint={t('calc.cycleActiveHint')} />
        <InputField label={t('calc.cycleLength')} value={weeks} onChange={setWeeks} min={1} step={1} suffix={t('calc.weeks')} />
        <InputField label={t('calc.cycleVial')} value={vialMg} onChange={setVialMg} min={0.1} step={0.1} suffix="mg" />
      </div>

      <div>
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(129,140,248,0.14)' }}
        >
          <p className="text-[#818cf8] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            {t('calc.cycleTitle')}
          </p>
          {results ? (
            <>
              <ResultRow label={t('calc.totalInj')} value={`${results.injectTotal} ${t('calc.pcs')}`} />
              <ResultRow label={t('calc.totalDose')} value={`${results.totalMcg.toLocaleString()} mcg`} />
              <ResultRow label={t('calc.totalAmount')} value={`${results.totalMg} mg`} />
              <ResultRow label={t('calc.vialsNeeded')} value={`${results.vialsNeeded} ${t('calc.pcs')}`} highlight />
            </>
          ) : (
            <p className="text-gray-600 text-sm">{t('calc.cycleEmpty')}</p>
          )}
        </div>
      </div>
    </div>
  )
}

function RefTab() {
  const { t, tr } = useLang()
  const cols = t('calc.refCols').split('|')
  return (
    <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
      <table className="w-full text-sm min-w-[600px]">
        <thead>
          <tr style={{ background: 'rgba(99,102,241,0.07)' }}>
            {cols.map(h => (
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
              <td className="px-5 py-4 text-gray-400">{tr(r.halfLife)}</td>
              <td className="px-5 py-4 text-gray-400">{r.typDose}</td>
              <td className="px-5 py-4 text-gray-400">{tr(r.freq)}</td>
              <td className="px-5 py-4 text-gray-400">{r.vial}</td>
              <td className="px-5 py-4 text-gray-500 italic text-xs">{tr(r.route)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-gray-700 text-xs px-5 py-4 border-t border-white/[0.04]">
        {t('calc.refFootnote')}
      </p>
    </div>
  )
}

export default function Calculator() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState('recon')

  const TABS = [
    { id: 'recon',  label: t('calc.tab.recon'), Icon: FlaskConical },
    { id: 'cycle',  label: t('calc.tab.cycle'), Icon: CalendarDays },
    { id: 'ref',    label: t('calc.tab.ref'),   Icon: BookOpen },
  ]

  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            {t('calc.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
            {t('calc.title')}
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            {t('calc.subtitle')}
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
