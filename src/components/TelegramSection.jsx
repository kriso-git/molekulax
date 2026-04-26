import { Send, ArrowRight, MessageCircle } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const TELEGRAM_URL = 'https://t.me/molekulaxtra'

export default function TelegramSection() {
  const { t } = useLang()
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative p-10 md:p-14 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 100%)',
            border: '1px solid rgba(129,140,248,0.18)',
          }}
        >
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-8">
              {t('tg.eyebrow')}
            </p>

            <div className="flex items-start gap-4 mb-4">
              <MessageCircle size={26} className="text-[#818cf8] mt-1 shrink-0" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl text-white font-bold italic leading-snug">
                {t('tg.title')}
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed mb-10 ml-10 text-sm md:text-base">
              {t('tg.body')}
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full transition-all duration-300 text-white text-sm group tracking-widest uppercase hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
              style={{ border: '1px solid rgba(129,140,248,0.4)', background: 'rgba(99,102,241,0.1)' }}
            >
              <Send size={14} strokeWidth={2} />
              {t('tg.cta')}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
