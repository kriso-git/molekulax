// Per-entry dose helper for performance library entries.
//
// Renders one of four UI variants depending on entry.doseCalc.type:
//   'bodyweight' — body-weight slider + 3 dose-level chips, computed mg/mcg/IU output
//   'fixed'      — 3 dose-level chips, fixed mg/mcg/IU output (no slider)
//   'titration'  — read-only titration table (e.g. Clenbuterol weekly ramp)
//   'warning'    — no-dose card (e.g. DNP) with explicit "do not use" message
//
// All UI strings come from i18n; per-entry note + warning live in doseCalc.

import { useState } from 'react'
import { Calculator, AlertTriangle } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

const DEFAULT_BODYWEIGHT = 80 // kg

function LevelChip({ label, active, accent, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border"
      style={{
        background: active ? `${accent}28` : 'var(--tint-soft)',
        borderColor: active ? accent : 'var(--tint-soft-border)',
        color: active ? accent : 'var(--text-muted)',
        boxShadow: active ? `0 0 16px -4px ${accent}55` : 'none',
      }}
    >
      {label}
    </button>
  )
}

function formatNumber(n, unit) {
  // mg/IU/mcg with sensible precision
  if (n >= 100) return `${Math.round(n)} ${unit}`
  if (n >= 10) return `${n.toFixed(1)} ${unit}`
  return `${n.toFixed(2)} ${unit}`
}

export default function PerformanceCalculator({ doseCalc, accent = '#10b981' }) {
  const { t, tr } = useLang()
  const [level, setLevel] = useState('medium')
  const [bw, setBw] = useState(DEFAULT_BODYWEIGHT)

  if (!doseCalc) return null

  // Variant: warning (no dose)
  if (doseCalc.type === 'warning') {
    return (
      <section className="relative px-6 sm:px-10 pb-10">
        <header className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: '#fca5a5' }}>
            {t('entry.calc.eyebrow')}
          </p>
          <h2 className="text-2xl font-semibold" style={{ color: '#fca5a5' }}>
            {t('entry.calc.warning.title')}
          </h2>
        </header>
        <div
          className="rounded-2xl p-6 border flex items-start gap-4"
          style={{
            background: 'rgba(220,38,38,0.12)',
            borderColor: '#dc2626',
            color: '#fecaca',
          }}
        >
          <AlertTriangle size={28} strokeWidth={2} className="shrink-0 mt-1" />
          <p className="text-sm leading-relaxed">{tr(doseCalc.warning)}</p>
        </div>
      </section>
    )
  }

  // Variant: titration (read-only table)
  if (doseCalc.type === 'titration') {
    return (
      <section className="relative px-6 sm:px-10 pb-10">
        <header className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: `${accent}cc` }}>
            {t('entry.calc.eyebrow')}
          </p>
          <h2 className="text-2xl font-semibold" style={{ color: accent }}>
            {t('entry.calc.titration')}
          </h2>
        </header>
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: `${accent}33`, background: 'var(--tint-soft)' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: `${accent}14`, color: accent }}>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wider">
                  {t('entry.calc.phase')}
                </th>
                <th className="text-right px-4 py-3 text-xs uppercase tracking-wider">
                  {t('entry.calc.dose')}
                </th>
              </tr>
            </thead>
            <tbody>
              {doseCalc.titration.map((row, i) => (
                <tr key={i} className="border-t" style={{ borderColor: `${accent}22` }}>
                  <td className="px-4 py-3">{tr(row.phase)}</td>
                  <td className="px-4 py-3 text-right font-mono font-semibold" style={{ color: accent }}>
                    {row.dose} {doseCalc.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {doseCalc.note && (
          <p className="text-xs opacity-70 mt-4 leading-relaxed">{tr(doseCalc.note)}</p>
        )}
        <p className="text-xs opacity-60 mt-3">{t('entry.calc.disclaimer')}</p>
      </section>
    )
  }

  // Variant: bodyweight OR fixed
  const isBw = doseCalc.type === 'bodyweight'
  const ranges = isBw ? doseCalc.perKg : doseCalc.fixed
  const selectedRange = ranges[level]
  const computed = isBw ? selectedRange * bw : selectedRange
  const unit = doseCalc.unit

  return (
    <section className="relative px-6 sm:px-10 pb-10">
      <header className="mb-5">
        <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: `${accent}cc` }}>
          {t('entry.calc.eyebrow')}
        </p>
        <h2 className="text-2xl font-semibold flex items-center gap-2" style={{ color: accent }}>
          <Calculator size={20} strokeWidth={2.5} />
          {t('entry.calc.title')}
        </h2>
      </header>

      <div
        className="rounded-2xl p-6 border space-y-5"
        style={{ background: 'var(--tint-soft)', borderColor: `${accent}33` }}
      >
        {/* Level chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          <LevelChip label={t('entry.calc.low')} active={level === 'low'} accent={accent} onClick={() => setLevel('low')} />
          <LevelChip label={t('entry.calc.medium')} active={level === 'medium'} accent={accent} onClick={() => setLevel('medium')} />
          <LevelChip label={t('entry.calc.high')} active={level === 'high'} accent={accent} onClick={() => setLevel('high')} />
        </div>

        {/* Bodyweight slider (only for bodyweight type) */}
        {isBw && (
          <div>
            <div className="flex justify-between text-xs uppercase tracking-wider opacity-70 mb-2">
              <span>{t('entry.calc.bodyweight')}</span>
              <span className="font-mono font-semibold" style={{ color: accent }}>{bw} kg</span>
            </div>
            <input
              type="range"
              min={40}
              max={150}
              step={1}
              value={bw}
              onChange={e => setBw(parseInt(e.target.value, 10))}
              className="w-full"
              style={{ accentColor: accent }}
            />
            <div className="flex justify-between text-[10px] opacity-50 mt-1">
              <span>40 kg</span>
              <span>150 kg</span>
            </div>
          </div>
        )}

        {/* Computed result */}
        <div
          className="rounded-xl p-5 text-center border-2"
          style={{ background: `${accent}11`, borderColor: `${accent}55` }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 mb-1">
            {t('entry.calc.result')}
          </p>
          <p className="text-3xl font-bold font-mono" style={{ color: accent }}>
            {formatNumber(computed, unit)}
          </p>
          {isBw && (
            <p className="text-xs opacity-60 mt-1 font-mono">
              {selectedRange} × {bw} kg
            </p>
          )}
        </div>

        {/* Per-entry note */}
        {doseCalc.note && (
          <p className="text-xs opacity-80 leading-relaxed">{tr(doseCalc.note)}</p>
        )}
      </div>

      <p className="text-xs opacity-60 mt-4 text-center max-w-3xl mx-auto">
        {t('entry.calc.disclaimer')}
      </p>
    </section>
  )
}
