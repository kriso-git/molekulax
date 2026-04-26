import { FlaskConical, BookOpen, MessageSquare } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const FEATURES = [
  { Icon: FlaskConical,   titleKey: 'edu.f1.title', descKey: 'edu.f1.desc' },
  { Icon: BookOpen,       titleKey: 'edu.f2.title', descKey: 'edu.f2.desc' },
  { Icon: MessageSquare,  titleKey: 'edu.f3.title', descKey: 'edu.f3.desc' },
]

export default function Education() {
  const { t } = useLang()
  return (
    <section className="pt-0 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            {t('edu.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white">
            {t('edu.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map(({ Icon, titleKey, descKey }, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl glass hover:border-[rgba(129,140,248,0.22)] hover:bg-[rgba(99,102,241,0.07)] transition-all duration-500 cursor-default"
            >
              <div className="mb-7">
                <Icon
                  size={30}
                  className="text-[#818cf8] group-hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.7)] transition-all duration-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{t(titleKey)}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
