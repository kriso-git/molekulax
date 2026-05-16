// Bloodwork protocol renderer for performance entries.
// Renders a 4-step Pre / Mid / Post-cycle [/ Cruise] timeline of monitoring tiles.
// Graceful skip when bloodwork prop is missing or empty.
// Cruise tile is rendered only if bloodwork.cruise is non-null.

import { useLang } from '../../i18n/LanguageContext'

const PHASE_ICONS = {
  preCycle:  '🩸',
  midCycle:  '📊',
  postCycle: '🔄',
  cruise:    '🛟',
}

const PHASE_ORDER = ['preCycle', 'midCycle', 'postCycle', 'cruise']

export default function BloodworkProtocol({ bloodwork, accent = '#fbbf24' }) {
  const { t, tr } = useLang()
  if (!bloodwork) return null

  const phases = PHASE_ORDER
    .map(key => (bloodwork[key] ? { key, ...bloodwork[key] } : null))
    .filter(Boolean)

  if (phases.length === 0) return null

  return (
    <section className="bloodwork-protocol my-12">
      <header className="mb-6">
        <p
          className="text-xs uppercase tracking-[0.2em] mb-2"
          style={{ color: `${accent}cc` }}
        >
          {t('entry.bloodwork.label')}
        </p>
        <h2 className="text-2xl font-semibold" style={{ color: accent }}>
          {t('entry.bloodwork.title')}
        </h2>
      </header>

      <div className={`grid gap-4 sm:grid-cols-2 ${phases.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
        {phases.map(phase => (
          <article
            key={phase.key}
            className="rounded-2xl p-5 backdrop-blur border"
            style={{
              background: 'var(--tint-soft, rgba(255,255,255,0.04))',
              borderColor: `${accent}33`,
            }}
          >
            <div className="text-2xl mb-2" aria-hidden>{PHASE_ICONS[phase.key]}</div>
            <h3 className="text-base font-semibold mb-3" style={{ color: accent }}>
              {tr(phase.label)}
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-wider opacity-60 mb-1">
                  {t('entry.bloodwork.timing')}
                </dt>
                <dd className="opacity-95">{tr(phase.timing)}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider opacity-60 mb-1">
                  {t('entry.bloodwork.markers')}
                </dt>
                <dd className="opacity-90">{tr(phase.markers)}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider opacity-60 mb-1">
                  {t('entry.bloodwork.purpose')}
                </dt>
                <dd className="opacity-80">{tr(phase.purpose)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <p className="text-xs opacity-60 mt-6 text-center max-w-3xl mx-auto">
        {t('entry.bloodwork.disclaimer')}
      </p>
    </section>
  )
}
