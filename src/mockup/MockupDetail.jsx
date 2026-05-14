// Rich detail view inspired by pep-pedia.org/peptides/<slug>.
// Renders as a full-screen modal over the mockup gallery. Layout blocks:
//   1.  Hero strip (vial + name + tier + status badge)
//   2.  Key-facts grid (6 micro-cards)
//   3.  Quick Start Guide — 4-step horizontal stepper
//   4.  Key Benefits — icon-cards from category mapping
//   5.  What is <peptide> — extended descriptive paragraphs
//   6.  Mechanism summary + pathway flow
//   7.  Research uses chip wall
//   8.  Molecular Information — lab data sheet
//   9.  Dosing protocol
//   10. Side effects + contraindications
//   11. Stacks
//   12. Studies list
//   13. FAQ accordion
//   14. Mini calculator (always present)
//   15. Telegram CTA
//   16. Disclaimer

import { useState, useEffect } from 'react'
import {
  X, ShieldCheck, ShieldAlert, Clock, Syringe, FlaskConical,
  Activity, Pill, Zap, Layers, AlertTriangle, ExternalLink,
  ChevronDown, ArrowRight, BookOpen, Flame, Sprout, Brain,
  Sparkles, Shield, Moon, Heart, Leaf, Atom, Calculator,
  Rocket, Snowflake, Beaker,
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import TelegramButtons from '../components/TelegramButtons'
import MiniCalc from '../components/MiniCalc'
import { TIER_META } from './sampleData'

const BENEFIT_ICONS = {
  flame: Flame, sprout: Sprout, activity: Activity, brain: Brain,
  sparkles: Sparkles, shield: Shield, moon: Moon, heart: Heart, leaf: Leaf,
}

function SectionHeader({ icon: Icon, eyebrow, title, accent }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-md"
            style={{ background: `${accent}22`, color: accent }}
          >
            <Icon size={11} strokeWidth={2.5} />
          </span>
          <p className="text-[10px] tracking-[0.28em] uppercase font-semibold" style={{ color: accent }}>
            {eyebrow}
          </p>
        </div>
        <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
      </div>
      <div className="hidden sm:block h-px flex-1 -mb-2" style={{ background: 'var(--tint-soft-border)' }} />
    </div>
  )
}

function KeyFactCard({ fact, accent, tr }) {
  return (
    <div
      className="relative p-3 rounded-xl overflow-hidden"
      style={{
        background: 'var(--tint-soft)',
        border: '1px solid var(--tint-soft-border)',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
      />
      <p
        className="text-[9px] tracking-[0.22em] uppercase font-semibold mb-1"
        style={{ color: 'var(--text-fainter)' }}
      >
        {tr(fact.label)}
      </p>
      <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--text-secondary)' }}>
        {tr(fact.value)}
      </p>
    </div>
  )
}

function PathwayFlow({ steps, accent }) {
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <div key={i} className="inline-flex items-center gap-2">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium font-mono"
              style={{
                background: `${accent}10`,
                border: `1px solid ${accent}40`,
                color: 'var(--text-secondary)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accent, boxShadow: `0 0 6px ${accent}aa` }}
              />
              {step}
            </span>
            {i < steps.length - 1 && (
              <ArrowRight size={12} strokeWidth={2.5} style={{ color: `${accent}aa` }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function DosingTimeline({ timeline, accent, tr }) {
  return (
    <div className="relative pt-3 pb-2">
      <div
        className="absolute left-2 right-2 top-7 h-px"
        style={{
          background: `linear-gradient(90deg, ${accent}55 0%, ${accent}aa 50%, ${accent}55 100%)`,
        }}
      />
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3">
        {timeline.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            <div
              className="relative z-10 w-4 h-4 rounded-full flex items-center justify-center mb-2"
              style={{
                background: accent,
                boxShadow: `0 0 12px ${accent}aa, 0 0 0 4px var(--bg-base)`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold" style={{ color: accent }}>
              {step.week === '0' ? 'Hét 0' : `Hét ${step.week}`}
            </p>
            <p className="text-[11px] leading-snug mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {tr(step.label)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SideEffectsList({ effects, tr }) {
  const tint = {
    common: { color: '#fb923c', label: { hu: 'Gyakori',  en: 'Common', pl: 'Częste' } },
    mild:   { color: '#fde047', label: { hu: 'Enyhe',    en: 'Mild',   pl: 'Łagodne' } },
    rare:   { color: '#94a3b8', label: { hu: 'Ritka',    en: 'Rare',   pl: 'Rzadkie' } },
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {effects.map((eff, i) => {
        const t = tint[eff.severity] || tint.rare
        return (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg"
            style={{
              background: 'var(--tint-row)',
              border: '1px solid var(--border-soft)',
            }}
          >
            <span
              className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full"
              style={{ background: t.color, boxShadow: `0 0 6px ${t.color}aa` }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {tr(eff.name)}
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: t.color }}>{tr(t.label)}</span> · {tr(eff.when)}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function FaqAccordion({ faqs, accent, tr }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: 'var(--tint-soft)',
              border: `1px solid ${isOpen ? `${accent}55` : 'var(--tint-soft-border)'}`,
              boxShadow: isOpen ? `0 0 24px ${accent}1f` : 'none',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {tr(faq.q)}
              </p>
              <ChevronDown
                size={16}
                strokeWidth={2.2}
                className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                style={{ color: accent }}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="px-4 pb-4 pt-1 text-xs leading-relaxed"
                  style={{ color: 'var(--text-muted)', borderTop: `1px solid ${accent}1a` }}
                >
                  {tr(faq.a)}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function MockupDetail({ peptide, onClose, onSelectRelated }) {
  const { t, tr } = useLang()
  const meta = TIER_META[peptide.tier]
  const accent = peptide.accentColor

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-6 px-3 sm:px-6"
      style={{ background: 'var(--bg-modal-backdrop)', backdropFilter: 'blur(14px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
        style={{
          background: 'var(--bg-elevated)',
          border: `1px solid ${accent}30`,
          boxShadow:
            `0 0 80px ${accent}22,` +
            ` 0 32px 64px rgba(0,0,0,0.4),` +
            ` 0 0 0 1px rgba(255,255,255,0.04) inset`,
        }}
      >
        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <div
          className="relative pt-6 pb-7 px-6 sm:px-9"
          style={{
            background:
              `radial-gradient(120% 80% at 20% 0%, ${accent}26 0%, transparent 50%),` +
              ` radial-gradient(100% 70% at 80% 100%, ${meta.color}1a 0%, transparent 60%)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-all"
            style={{
              background: 'var(--tint-medium)',
              border: '1px solid var(--tint-medium-border)',
              color: 'var(--text-secondary)',
            }}
            aria-label={t('modal.close') || 'Bezár'}
          >
            <X size={16} strokeWidth={2.2} />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Vial */}
            <div
              className="relative shrink-0 w-32 h-44 sm:w-36 sm:h-48 rounded-2xl overflow-hidden"
              style={{
                background: 'var(--bg-tile)',
                border: `1px solid ${accent}30`,
              }}
            >
              {peptide.image && (
                <img
                  src={peptide.image}
                  alt={`${peptide.name} vial`}
                  className="w-full h-full object-contain p-2 drop-shadow-[0_10px_22px_rgba(0,0,0,0.5)]"
                />
              )}
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1/2 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${accent}55, transparent 70%)`, filter: 'blur(3px)' }}
              />
            </div>

            {/* Title + status */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              {/* Tier badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                style={{
                  background: meta.bg,
                  border: `1px solid ${meta.border}`,
                  color: meta.color,
                }}>
                {peptide.tier === 5
                  ? <ShieldCheck size={11} strokeWidth={2.5} />
                  : <Activity size={11} strokeWidth={2.5} />}
                <span className="text-[10px] tracking-[0.22em] uppercase font-bold">
                  L{peptide.tier} · {tr(meta.label)}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl font-black tracking-tight leading-none mb-1"
                style={{
                  color: 'var(--text-primary)',
                  textShadow: `0 0 30px ${accent}55`,
                }}
              >
                {peptide.name}
              </h1>
              <p className="text-xs tracking-wide italic mb-3" style={{ color: 'var(--text-muted)' }}>
                {peptide.fullName}
              </p>

              {peptide.synonyms?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start mb-3">
                  {peptide.synonyms.map(s => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded font-mono tracking-wide"
                      style={{
                        background: 'var(--tint-row)',
                        border: '1px solid var(--border-soft)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                {tr(peptide.oneLiner)}
              </p>

              {/* Legal status pill */}
              <div className="mt-4 inline-flex items-center gap-2">
                {peptide.legalStatus.fda
                  ? <ShieldCheck size={13} strokeWidth={2.5} style={{ color: '#10b981' }} />
                  : <ShieldAlert size={13} strokeWidth={2.5} style={{ color: '#fb923c' }} />}
                <span
                  className="text-[11px] font-semibold tracking-wide"
                  style={{ color: peptide.legalStatus.fda ? '#10b981' : '#fb923c' }}
                >
                  {tr(peptide.legalStatus.tag)}
                </span>
                <span className="text-[10px]" style={{ color: 'var(--text-fainter)' }}>·</span>
                <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  {tr(peptide.legalStatus.detail)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ───────────────────────────────────────────────────── */}
        <div className="px-6 sm:px-9 pb-10 pt-2 flex flex-col gap-10">

          {/* 2. Key facts grid */}
          <section>
            <SectionHeader icon={FlaskConical} eyebrow="Adatlap" title="Kulcs jellemzők" accent={accent} />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {peptide.keyFacts.map((fact, i) => (
                <KeyFactCard key={i} fact={fact} accent={accent} tr={tr} />
              ))}
            </div>
          </section>

          {/* 3. Quick Start Guide — 4-step horizontal stepper */}
          {peptide.quickStart?.length > 0 && (
            <section>
              <SectionHeader icon={Rocket} eyebrow="Quick Start Guide" title="4 lépésben az indulásig" accent={accent} />
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Connector rail behind the step circles (desktop only) */}
                <div
                  className="hidden lg:block absolute top-9 left-12 right-12 h-px pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${accent}55 0%, ${accent}aa 50%, ${accent}55 100%)` }}
                />
                {peptide.quickStart.map((s) => (
                  <div
                    key={s.step}
                    className="relative flex flex-col items-start gap-3 p-5 rounded-2xl"
                    style={{
                      background: 'var(--tint-soft)',
                      border: '1px solid var(--tint-soft-border)',
                      boxShadow: `0 12px 32px -22px ${accent}66`,
                    }}
                  >
                    <span
                      className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl font-black text-base font-mono"
                      style={{
                        background: `linear-gradient(135deg, ${accent} 0%, ${accent}aa 100%)`,
                        color: '#0a0a1c',
                        boxShadow: `0 0 18px ${accent}66, inset 0 1px 0 rgba(255,255,255,0.25)`,
                      }}
                    >
                      {s.step}
                    </span>
                    <p
                      className="text-xs tracking-[0.18em] uppercase font-bold"
                      style={{ color: accent }}
                    >
                      {tr(s.title)}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {tr(s.detail)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Key Benefits — icon cards from category mapping */}
          {peptide.keyBenefits?.length > 0 && (
            <section>
              <SectionHeader icon={Sparkles} eyebrow="Key Benefits" title="Kulcs előnyök" accent={accent} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {peptide.keyBenefits.map((b, i) => {
                  const Icon = BENEFIT_ICONS[b.icon] || Sparkles
                  return (
                    <div
                      key={i}
                      className="relative p-4 rounded-2xl overflow-hidden"
                      style={{
                        background: 'var(--tint-soft)',
                        border: '1px solid var(--tint-soft-border)',
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${accent}cc, transparent)` }}
                      />
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3"
                        style={{
                          background: `${accent}1a`,
                          border: `1px solid ${accent}40`,
                          color: accent,
                        }}
                      >
                        <Icon size={16} strokeWidth={2.2} />
                      </span>
                      <p className="text-sm font-bold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        {tr(b.title)}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {tr(b.desc)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* 5. What is <peptide> — extended descriptive paragraphs */}
          {peptide.whatIs && (
            <section>
              <SectionHeader
                icon={BookOpen}
                eyebrow={`Mi az a ${peptide.name}?`}
                title="Részletes áttekintés"
                accent={accent}
              />
              <div
                className="relative p-5 sm:p-6 rounded-2xl"
                style={{
                  background: 'var(--tint-soft)',
                  border: '1px solid var(--tint-soft-border)',
                }}
              >
                {/* Side rail */}
                <div
                  className="absolute top-4 bottom-4 left-0 w-0.5 rounded-r-full"
                  style={{ background: `linear-gradient(180deg, ${accent}cc, ${accent}33)` }}
                />
                <div className="pl-3 flex flex-col gap-3">
                  {tr(peptide.whatIs).split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 6. Mechanism */}
          {peptide.mechanism && (
            <section>
              <SectionHeader icon={Zap} eyebrow="Hatásmechanizmus" title="Hogyan működik" accent={accent} />
              {peptide.mechanism.summary && (
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {tr(peptide.mechanism.summary)}
                </p>
              )}
              {peptide.mechanism.pathway?.length > 0 && (
                <PathwayFlow steps={peptide.mechanism.pathway} accent={accent} />
              )}
            </section>
          )}

          {/* 4. Research uses — multi-tag wall (unlike outer card which caps at 1) */}
          {peptide.researchUses?.length > 0 && (
            <section>
              <SectionHeader icon={Layers} eyebrow="Kutatási irányok" title="Vizsgált alkalmazások" accent={accent} />
              <div className="flex flex-wrap gap-2">
                {peptide.researchUses.map(use => (
                  <span
                    key={use.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                    style={{
                      background: `${accent}10`,
                      border: `1px solid ${accent}40`,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                    {tr(use.label)}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 4b. Molecular Information — lab data sheet */}
          {peptide.molecular?.length > 0 && (
            <section>
              <SectionHeader icon={Atom} eyebrow="Molekuláris információ" title="Adatlap" accent={accent} />
              <div
                className="relative rounded-2xl overflow-hidden font-mono"
                style={{
                  background:
                    `linear-gradient(135deg, rgba(15,23,42,0.45) 0%, transparent 100%), var(--tint-soft)`,
                  border: '1px solid var(--tint-soft-border)',
                }}
              >
                {/* Header band */}
                <div
                  className="flex items-center gap-2 px-4 py-2 border-b"
                  style={{ borderColor: 'var(--tint-soft-border)', background: 'rgba(0,0,0,0.18)' }}
                >
                  <Beaker size={11} strokeWidth={2.2} style={{ color: accent }} />
                  <span className="text-[9px] tracking-[0.28em] uppercase font-bold" style={{ color: accent }}>
                    /lab/molecular-data.json
                  </span>
                  <span className="ml-auto flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ef4444aa' }} />
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#eab308aa' }} />
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55eaa' }} />
                  </span>
                </div>
                <dl className="divide-y" style={{ borderColor: 'var(--tint-soft-border)' }}>
                  {peptide.molecular.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 sm:grid-cols-5 gap-2 px-4 py-3 text-xs"
                      style={{ borderTop: i === 0 ? 'none' : '1px solid var(--tint-soft-border)' }}
                    >
                      <dt
                        className="col-span-1 sm:col-span-2 text-[10px] tracking-[0.18em] uppercase"
                        style={{ color: 'var(--text-fainter)' }}
                      >
                        {tr(row.key)}
                      </dt>
                      <dd
                        className="col-span-2 sm:col-span-3 font-bold"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {tr(row.value)}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* Bottom accent line */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}aa, transparent)` }}
                />
              </div>
            </section>
          )}

          {/* 5. Dosing */}
          {peptide.dosing && (() => {
            const cells = [
              { label: 'Tipikus',    value: peptide.dosing.typical,         icon: Pill },
              { label: 'Tartomány',  value: peptide.dosing.range,           icon: Activity },
              { label: 'Gyakoriság', value: tr(peptide.dosing.frequency),   icon: Clock },
              { label: 'Ciklus',     value: tr(peptide.dosing.cycle),       icon: Layers },
            ].filter(c => c.value && String(c.value).trim().length > 0)
            const notes = tr(peptide.dosing.notes)
            if (cells.length === 0 && !notes && !peptide.dosing.timeline?.length) return null
            return (
              <section>
                <SectionHeader icon={Pill} eyebrow="Dózis protokoll" title="Adagolási irányelvek" accent={accent} />
                {cells.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {cells.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl flex items-start gap-2.5"
                        style={{
                          background: 'var(--tint-row)',
                          border: '1px solid var(--border-soft)',
                        }}
                      >
                        <span
                          className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg mt-0.5"
                          style={{ background: `${accent}1a`, color: accent }}
                        >
                          <item.icon size={13} strokeWidth={2.2} />
                        </span>
                        <div>
                          <p className="text-[9px] tracking-[0.22em] uppercase font-semibold mb-0.5"
                             style={{ color: 'var(--text-fainter)' }}>
                            {item.label}
                          </p>
                          <p className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {notes && (
                  <div
                    className="relative p-4 mb-5 rounded-xl flex items-start gap-3"
                    style={{
                      background: `${accent}10`,
                      border: `1px solid ${accent}40`,
                    }}
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg mt-0.5"
                      style={{ background: accent, color: '#0a0a1c' }}
                    >
                      <Pill size={13} strokeWidth={2.5} />
                    </span>
                    <p
                      className="text-sm leading-relaxed font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {notes}
                    </p>
                  </div>
                )}
                {peptide.dosing.timeline?.length > 0 && (
                  <DosingTimeline timeline={peptide.dosing.timeline} accent={accent} tr={tr} />
                )}
              </section>
            )
          })()}

          {/* 6. Stacks */}
          {peptide.stacks?.length > 0 && (
            <section>
              <SectionHeader icon={Layers} eyebrow="Stack ajánlások" title="Gyakran használt kombinációk" accent={accent} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {peptide.stacks.map(stack => (
                  <div
                    key={stack.id}
                    className="p-4 rounded-xl"
                    style={{
                      background: 'var(--tint-soft)',
                      border: '1px solid var(--tint-soft-border)',
                    }}
                  >
                    <p
                      className="text-base font-bold font-mono tracking-tight mb-1"
                      style={{ color: accent }}
                    >
                      + {stack.name}
                    </p>
                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {tr(stack.rationale)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7-8. Side effects + Contraindications */}
          {(peptide.sideEffects?.length > 0 || peptide.contraindications?.length > 0) && (
            <section>
              <SectionHeader
                icon={AlertTriangle}
                eyebrow="Biztonsági profil"
                title="Mellékhatások és kontraindikációk"
                accent="#f97316"
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {peptide.sideEffects?.length > 0 && (
                  <div>
                    <p
                      className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3"
                      style={{ color: 'var(--text-fainter)' }}
                    >
                      Mellékhatások
                    </p>
                    <SideEffectsList effects={peptide.sideEffects} tr={tr} />
                  </div>
                )}
                {peptide.contraindications?.length > 0 && (
                  <div>
                    <p
                      className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3"
                      style={{ color: 'var(--text-fainter)' }}
                    >
                      Kontraindikációk
                    </p>
                    <ul className="flex flex-col gap-2">
                      {peptide.contraindications.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 p-3 rounded-lg text-xs"
                          style={{
                            background: 'rgba(249,115,22,0.06)',
                            border: '1px solid rgba(249,115,22,0.25)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <AlertTriangle size={12} strokeWidth={2.2} className="shrink-0 mt-0.5" style={{ color: '#fb923c' }} />
                          <span>{tr(c)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 9. Studies */}
          {peptide.studies?.length > 0 && (
          <section>
            <SectionHeader icon={FlaskConical} eyebrow="Tudományos hivatkozások" title="Klinikai és preklinikai bizonyítékok" accent={accent} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {peptide.studies.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'var(--tint-soft)',
                    border: '1px solid var(--tint-soft-border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${accent}55`
                    e.currentTarget.style.background  = `${accent}0a`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--tint-soft-border)'
                    e.currentTarget.style.background  = 'var(--tint-soft)'
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] tracking-widest uppercase font-bold"
                      style={{ background: `${accent}22`, color: accent }}
                    >
                      {s.year}
                    </span>
                    <ExternalLink size={11} strokeWidth={2} className="opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <p className="text-xs font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {s.title}
                  </p>
                  <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {tr(s.finding)}
                  </p>
                  <p className="text-[10px] mt-1 font-mono" style={{ color: 'var(--text-fainter)' }}>
                    {s.authors} · <em>{s.journal}</em> {s.pmid && `· PMID ${s.pmid}`}
                  </p>
                </a>
              ))}
            </div>
          </section>
          )}

          {/* 10. FAQ */}
          {peptide.faqs?.length > 0 && (
            <section>
              <SectionHeader icon={Pill} eyebrow="Gyakori kérdések" title="FAQ" accent={accent} />
              <FaqAccordion faqs={peptide.faqs} accent={accent} tr={tr} />
            </section>
          )}

          {/* 11. Mini Calculator — always present, pre-filled with the
              peptide's default vial / BAC / dose values. */}
          {peptide.miniCalc && (
            <section>
              <SectionHeader
                icon={Calculator}
                eyebrow="Beépített kalkulátor"
                title={`Adagolási segéd — ${peptide.name}`}
                accent={accent}
              />
              <MiniCalc
                defaultVialMg={peptide.miniCalc.vialMg ?? 5}
                defaultBacMl={peptide.miniCalc.bacMl ?? 2}
                defaultDoseMcg={peptide.miniCalc.doseMcg ?? 250}
                accentColor={accent}
              />
            </section>
          )}

          {/* 12. Telegram CTA */}
          <section
            className="p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-5"
            style={{
              background:
                'linear-gradient(135deg, rgba(129,140,248,0.10) 0%, rgba(236,72,153,0.08) 100%)',
              border: '1px solid rgba(129,140,248,0.30)',
            }}
          >
            <div className="flex-1">
              <p className="text-base font-semibold italic mb-1" style={{ color: 'var(--text-primary)' }}>
                Kérdésed van a {peptide.name}-ről?
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Lépj kapcsolatba egy tanácsadóval Telegramon — szívesen segítünk.
              </p>
            </div>
            <TelegramButtons variant="pill" align="start" />
          </section>

          {/* 12. Disclaimer */}
          <p
            className="text-[10px] italic text-center leading-relaxed"
            style={{ color: 'var(--text-fainter)' }}
          >
            ⚠ Az itt található információ kizárólag edukatív és tudományos célt szolgál.
            Nem helyettesíti az orvosi szakvéleményt vagy a klinikai tanácsadást.
          </p>
        </div>
      </div>
    </div>
  )
}
