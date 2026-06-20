// Per-entry dose helper for pharmaceutical library entries (Phase 6).
//
// Renders one of four UI variants depending on entry.doseCalc.type:
//   'titration' — read-only titration table (e.g. SSRI start → therapeutic dose)
//   'fixedDose' — 3 dose-level chips (e.g. Atorvastatin low/medium/high intensity)
//   'tshWeight' — weight-based starting dose (Levothyroxin: 1.6 µg/kg/day)
//   'warning'   — no-dose card with explicit "consult your doctor" message
//
// Design tokens shared with PerformanceCalculator: glassmorph container,
// accent-glow shadow, decorative radial orbs, gradient slider track.
//
// All UI strings come from i18n; per-entry note + warning live in doseCalc.

import { useState } from 'react'
import { Calculator, AlertTriangle, TrendingUp, TrendingDown, Activity, Info, Scale, Pill } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

const DEFAULT_WEIGHT = 70 // kg, adult reference

function LevelChip({ label, active, accent, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300"
      style={{
        background: active
          ? `linear-gradient(135deg, ${accent}38, ${accent}18)`
          : 'var(--tint-soft)',
        border: `1px solid ${active ? accent : 'var(--tint-soft-border)'}`,
        color: active ? accent : 'var(--text-muted)',
        boxShadow: active
          ? `0 0 0 1px ${accent}55, 0 8px 24px -8px ${accent}66, inset 0 1px 0 rgba(255,255,255,0.08)`
          : 'inset 0 1px 0 rgba(255,255,255,0.04)',
        transform: active ? 'translateY(-1px)' : 'translateY(0)',
      }}
    >
      {Icon && <Icon size={12} strokeWidth={2.5} />}
      {label}
    </button>
  )
}

export default function PharmaceuticalCalculator({ doseCalc, accent = '#10b981' }) {
  const { t, tr } = useLang()
  const [level, setLevel] = useState('medium')
  const [weight, setWeight] = useState(DEFAULT_WEIGHT)

  if (!doseCalc) return null

  // ─── Variant: warning (no dose, "consult doctor" framing) ───
  if (doseCalc.type === 'warning') {
    return (
      <section className="relative px-6 sm:px-10 pb-10">
        <header className="mb-5">
          <p className="text-xs uppercase tracking-[0.22em] mb-2 inline-flex items-center gap-2" style={{ color: 'var(--danger-fg)' }}>
            <AlertTriangle size={12} strokeWidth={2.5} />
            {t('entry.calc.eyebrow')}
          </p>
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--danger-fg)' }}>
            {t('entry.calc.warning.title')}
          </h2>
        </header>
        <div
          className="relative rounded-3xl p-7 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(220,38,38,0.18), rgba(127,29,29,0.08))',
            border: '1px solid rgba(220,38,38,0.55)',
            boxShadow: '0 24px 60px -20px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #dc2626, transparent 70%)' }}
          />
          <div className="relative flex items-start gap-4">
            <div
              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(220,38,38,0.25)', border: '1px solid #dc2626' }}
            >
              <AlertTriangle size={22} strokeWidth={2.25} color="var(--danger-fg)" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--danger-fg)' }}>
              {tr(doseCalc.warning)}
            </p>
          </div>
        </div>
        <p className="text-[11px] opacity-55 mt-3 text-center max-w-3xl mx-auto leading-relaxed">
          {t('entry.calc.consultDoctor')}
        </p>
      </section>
    )
  }

  // ─── Variant: titration (read-only table, e.g. SSRI ramp-up) ───
  if (doseCalc.type === 'titration') {
    return (
      <section className="relative px-6 sm:px-10 pb-10">
        <header className="mb-5">
          <p className="text-xs uppercase tracking-[0.22em] mb-2 inline-flex items-center gap-2" style={{ color: `${accent}cc` }}>
            <Activity size={12} strokeWidth={2.5} />
            {t('entry.calc.eyebrow')}
          </p>
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: accent }}>
            {t('entry.calc.titration')}
          </h2>
        </header>
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--tint-row), var(--tint-soft))',
            border: `1px solid ${accent}44`,
            boxShadow: `0 18px 48px -16px ${accent}33, inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: `radial-gradient(circle at 100% 0%, ${accent}22, transparent 50%)` }}
          />
          <table className="relative w-full text-sm">
            <thead>
              <tr style={{ background: `${accent}1c` }}>
                <th className="text-left px-6 py-4 text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: accent }}>
                  {t('entry.calc.phase')}
                </th>
                <th className="text-right px-6 py-4 text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: accent }}>
                  {t('entry.calc.dose')}
                </th>
              </tr>
            </thead>
            <tbody>
              {doseCalc.titration.map((row, i) => {
                const isLast = i === doseCalc.titration.length - 1
                return (
                  <tr
                    key={i}
                    className="border-t transition-colors hover:bg-white/[0.03]"
                    style={{ borderColor: `${accent}1f` }}
                  >
                    <td className="px-6 py-3.5 text-[13px]" style={{ color: 'var(--text-primary)' }}>
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{
                            background: isLast ? accent : `${accent}88`,
                            boxShadow: isLast ? `0 0 8px ${accent}` : 'none',
                          }}
                        />
                        {tr(row.phase)}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right font-mono font-bold text-base" style={{ color: isLast ? accent : `${accent}dd` }}>
                      {row.dose} <span className="text-[10px] opacity-70">{doseCalc.unit}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {doseCalc.note && (
          <div
            className="mt-4 p-4 rounded-2xl text-xs leading-relaxed flex items-start gap-3"
            style={{ background: 'var(--tint-soft)', border: '1px solid var(--tint-soft-border)', color: 'var(--text-secondary)' }}
          >
            <Info size={14} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: accent }} />
            <p>{tr(doseCalc.note)}</p>
          </div>
        )}
        <p className="text-[11px] opacity-55 mt-3 text-center max-w-3xl mx-auto leading-relaxed">
          {t('entry.calc.consultDoctor')}
        </p>
      </section>
    )
  }

  // ─── Variant: tshWeight (Levothyroxin-style weight-based start) ───
  if (doseCalc.type === 'tshWeight') {
    const cfg = doseCalc.tshWeight || { kgFactor: 1.6, unitsPerKg: 'µg' }
    const fillPct = ((weight - 40) / (150 - 40)) * 100
    const dose = Math.round(weight * cfg.kgFactor)
    const isElderly = weight && cfg.adjustForAgeOver65

    return (
      <section className="relative px-6 sm:px-10 pb-10">
        <header className="mb-5">
          <p className="text-xs uppercase tracking-[0.22em] mb-2 inline-flex items-center gap-2" style={{ color: `${accent}cc` }}>
            <Scale size={12} strokeWidth={2.5} />
            {t('entry.calc.eyebrow')}
          </p>
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: accent }}>
            {t('entry.calc.tshWeight.title')}
          </h2>
        </header>
        <div
          className="relative rounded-3xl p-7 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--tint-row), var(--tint-soft))',
            border: `1px solid ${accent}44`,
            boxShadow: `0 24px 60px -20px ${accent}33, inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-25 pointer-events-none"
               style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />

          <div className="relative space-y-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('entry.calc.tshWeight.intro')}
            </p>

            <div className="rounded-2xl p-5" style={{ background: 'var(--tint-soft)', border: '1px solid var(--tint-soft-border)' }}>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-70">
                  {t('entry.calc.bodyweight')}
                </span>
                <span className="font-mono font-bold text-2xl tabular-nums"
                      style={{ color: accent, textShadow: `0 0 18px ${accent}66` }}>
                  {weight}<span className="text-xs opacity-70 ml-1">kg</span>
                </span>
              </div>

              <div className="relative h-8 flex items-center">
                <style>{`
                  .mlx-tsh-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 999px;
                    background: linear-gradient(
                      to right,
                      ${accent} 0%,
                      ${accent} ${fillPct}%,
                      rgba(255,255,255,0.08) ${fillPct}%,
                      rgba(255,255,255,0.08) 100%
                    );
                    outline: none;
                  }
                  .mlx-tsh-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, #ffffff, ${accent} 60%);
                    border: 2px solid ${accent};
                    box-shadow: 0 0 0 4px ${accent}22, 0 8px 18px -4px ${accent}88, inset 0 1px 0 rgba(255,255,255,0.4);
                    cursor: pointer;
                    transition: transform 0.15s ease;
                  }
                  .mlx-tsh-slider::-webkit-slider-thumb:hover { transform: scale(1.12); }
                  .mlx-tsh-slider::-moz-range-thumb {
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, #ffffff, ${accent} 60%);
                    border: 2px solid ${accent};
                    box-shadow: 0 0 0 4px ${accent}22, 0 8px 18px -4px ${accent}88;
                    cursor: pointer;
                  }
                `}</style>
                <input
                  type="range"
                  min={40}
                  max={150}
                  step={1}
                  value={weight}
                  onChange={e => setWeight(parseInt(e.target.value, 10))}
                  className="mlx-tsh-slider"
                  aria-label={t('entry.calc.bodyweight')}
                />
              </div>

              <div className="flex justify-between text-[10px] opacity-50 mt-2 font-mono">
                <span>40 kg</span><span>95 kg</span><span>150 kg</span>
              </div>
            </div>

            <div
              className="relative rounded-2xl p-7 text-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${accent}18, ${accent}08)`,
                border: `1.5px solid ${accent}66`,
                boxShadow: `0 0 0 1px ${accent}33, inset 0 1px 0 rgba(255,255,255,0.06)`,
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-2 opacity-70">
                {t('entry.calc.result')}
              </p>
              <p className="font-mono font-bold tabular-nums leading-[1.1] pb-1"
                 style={{ color: accent, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textShadow: `0 0 30px ${accent}55` }}>
                {dose}
                <span className="text-base ml-2 opacity-80">{cfg.unitsPerKg}/nap</span>
              </p>
            </div>

            {isElderly && (
              <div
                className="p-4 rounded-2xl text-xs leading-relaxed flex items-start gap-3"
                style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)', color: '#fcd34d' }}
              >
                <Info size={14} strokeWidth={2} className="shrink-0 mt-0.5" />
                <p>{t('entry.calc.tshWeight.elderly')}</p>
              </div>
            )}

            {doseCalc.note && (
              <div
                className="p-4 rounded-2xl text-xs leading-relaxed flex items-start gap-3"
                style={{ background: 'var(--tint-soft)', border: '1px solid var(--tint-soft-border)', color: 'var(--text-secondary)' }}
              >
                <Info size={14} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: accent }} />
                <p>{tr(doseCalc.note)}</p>
              </div>
            )}
          </div>
        </div>
        <p className="text-[11px] opacity-55 mt-3 text-center max-w-3xl mx-auto leading-relaxed">
          {t('entry.calc.consultDoctor')}
        </p>
      </section>
    )
  }

  // ─── Variant: fixedDose (3 dose-level chips, no slider) ───
  // Fallback: any type other than the 3 above is treated as fixedDose.
  const ranges = doseCalc.fixed || doseCalc.fixedDose || { low: 0, medium: 0, high: 0 }
  const selectedDose = ranges[level] ?? 0

  return (
    <section className="relative px-6 sm:px-10 pb-10">
      <header className="mb-5">
        <p className="text-xs uppercase tracking-[0.22em] mb-2 inline-flex items-center gap-2" style={{ color: `${accent}cc` }}>
          <Pill size={12} strokeWidth={2.5} />
          {t('entry.calc.eyebrow')}
        </p>
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2" style={{ color: accent }}>
          {t('entry.calc.fixedDose.title')}
        </h2>
      </header>

      <div
        className="relative rounded-3xl p-7 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--tint-row), var(--tint-soft))',
          border: `1px solid ${accent}44`,
          boxShadow: `0 24px 60px -20px ${accent}33, inset 0 1px 0 rgba(255,255,255,0.05)`,
        }}
      >
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-25 pointer-events-none"
             style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15 pointer-events-none"
             style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />

        <div className="relative space-y-6">
          <p className="text-sm leading-relaxed text-center" style={{ color: 'var(--text-secondary)' }}>
            {t('entry.calc.fixedDose.intro')}
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            <LevelChip label={t('entry.calc.low')}    active={level === 'low'}    accent={accent} onClick={() => setLevel('low')}    icon={TrendingDown} />
            <LevelChip label={t('entry.calc.medium')} active={level === 'medium'} accent={accent} onClick={() => setLevel('medium')} icon={Activity} />
            <LevelChip label={t('entry.calc.high')}   active={level === 'high'}   accent={accent} onClick={() => setLevel('high')}   icon={TrendingUp} />
          </div>

          <div
            className="relative rounded-2xl p-7 text-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${accent}18, ${accent}08)`,
              border: `1.5px solid ${accent}66`,
              boxShadow: `0 0 0 1px ${accent}33, inset 0 1px 0 rgba(255,255,255,0.06)`,
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-2 opacity-70">
              {t('entry.calc.result')}
            </p>
            <p className="font-mono font-bold tabular-nums leading-[1.1] pb-1"
               style={{ color: accent, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textShadow: `0 0 30px ${accent}55` }}>
              {selectedDose}
              <span className="text-base ml-2 opacity-80">{doseCalc.unit}</span>
            </p>
          </div>

          {doseCalc.note && (
            <div
              className="p-4 rounded-2xl text-xs leading-relaxed flex items-start gap-3"
              style={{ background: 'var(--tint-soft)', border: '1px solid var(--tint-soft-border)', color: 'var(--text-secondary)' }}
            >
              <Info size={14} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: accent }} />
              <p>{tr(doseCalc.note)}</p>
            </div>
          )}
        </div>
      </div>

      <p className="text-[11px] opacity-55 mt-3 text-center max-w-3xl mx-auto leading-relaxed">
        {t('entry.calc.consultDoctor')}
      </p>
    </section>
  )
}
