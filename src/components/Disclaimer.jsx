import { Info } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

export default function Disclaimer() {
  const { t } = useLang()
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div
          className="flex items-start gap-4 px-8 py-7 rounded-2xl"
          style={{
            background: 'rgba(99,102,241,0.03)',
            border: '1px solid rgba(129,140,248,0.07)',
          }}
        >
          <Info size={18} className="text-gray-600 shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-2.5">
              {t('dc.eyebrow')}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('dc.body')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
