import {
  Atom, Clock, ShieldAlert, Zap, Droplet, Tag, Component, Scale,
  Target, Thermometer, ShieldCheck, Hash, FileText, Database, Info,
} from 'lucide-react'

// Neutral icon for a comparison Dimension row, matched by keyword across HU/EN/PL labels.
// First match wins; specific concepts are listed before the generic "status" fallback so
// "Jogi státusz" / "Vény-státusz" do not fall through to the Info icon. No icon (null) when
// nothing matches, so the label still renders cleanly. Purely decorative (aria-hidden).
const RULES = [
  [/mechanizm|hatásmech|mechanism/i, Atom],
  [/felez|half-life|okres|półtrwania/i, Clock],
  [/hatáskezd|onset|początek/i, Zap],
  [/vény|prescription|recept/i, FileText],
  [/jogi|legal|prawny|wada/i, ShieldAlert],
  [/adagol|dosing|dawkow|beadás|route/i, Droplet],
  [/molekulatömeg|molecular|masa/i, Scale],
  [/szerkezet|structure|struktura/i, Component],
  [/célterület|target|obszar/i, Target],
  [/tárolás|storage|przechow/i, Thermometer],
  [/stabil/i, ShieldCheck],
  [/atc/i, Hash],
  [/forrás|source|źród/i, Database],
  [/típus|^type$|typ/i, Tag],
  [/státusz|status/i, Info],
]

export default function DimensionIcon({ label, size = 14, className = '' }) {
  const hit = RULES.find(([re]) => re.test(label || ''))
  if (!hit) return null
  const Icon = hit[1]
  return <Icon size={size} strokeWidth={2} className={className} aria-hidden="true" />
}
