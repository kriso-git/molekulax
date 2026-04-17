import { ShieldCheck, ExternalLink } from 'lucide-react'

export default function WadaBox() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className="flex flex-col sm:flex-row items-start gap-5 px-7 py-6 rounded-2xl"
          style={{
            background: 'rgba(16,185,129,0.04)',
            border: '1px solid rgba(16,185,129,0.12)',
          }}
        >
          <ShieldCheck
            size={22}
            className="shrink-0 mt-0.5"
            style={{ color: '#6ee7b7' }}
            strokeWidth={1.5}
          />

          <div className="flex-1">
            <p
              className="text-xs uppercase tracking-[0.22em] mb-2 font-semibold"
              style={{ color: '#6ee7b7' }}
            >
              WADA Ellenőrzés — Sportolóknak
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Számos peptid — köztük a GH-szekretórium peptidek (CJC-1295, ipamorelin, GHRP-2),
              a Thymosin β4 (TB-500) és mások — szerepel a{' '}
              <strong className="text-gray-300">WADA tiltólistáján</strong>.
              Versenyző sportolóknak kötelező az aktuális lista ellenőrzése minden anyag alkalmazása előtt.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.wada-ama.org/en/prohibited-list"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase
                           transition-colors duration-200 hover:opacity-80"
                style={{ color: '#6ee7b7' }}
              >
                <ExternalLink size={11} />
                WADA Tiltólista (wada-ama.org)
              </a>

              <span className="text-gray-700 text-xs self-center">·</span>

              <a
                href="https://www.globaldro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase
                           transition-colors duration-200 hover:opacity-80"
                style={{ color: '#6ee7b7' }}
              >
                <ExternalLink size={11} />
                Global DRO ellenőrzés
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
