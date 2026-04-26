import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { FAQ_CONTENT } from '../data/faqContent'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/[0.05] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-200 leading-snug">
          {item.q}
        </span>
        <span className="shrink-0 mt-0.5 text-[#818cf8]">
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-6">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function Faq() {
  const { lang, t } = useLang()
  const [tab, setTab] = useState(0)
  const [openIdx, setOpenIdx] = useState(null)

  const categories = FAQ_CONTENT[lang] || FAQ_CONTENT.hu

  const handleTab = (i) => {
    setTab(i)
    setOpenIdx(null)
  }

  const safeTab = Math.min(tab, categories.length - 1)
  const items = categories[safeTab].items
  const totalItems = categories.reduce((s, c) => s + c.items.length, 0)

  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            {t('faq.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            {totalItems} {t('faq.subtitle.suffix')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleTab(i)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-200 ${
                safeTab === i
                  ? 'bg-[rgba(129,140,248,0.18)] text-[#818cf8] border border-[rgba(129,140,248,0.30)]'
                  : 'text-gray-600 hover:text-gray-300 border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="glass rounded-2xl px-8 py-2">
          {items.map((item, i) => (
            <AccordionItem
              key={`${lang}-${safeTab}-${i}`}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>

        <p className="text-center text-gray-700 text-[11px] tracking-widest mt-8 uppercase">
          {t('faq.footer')}
        </p>
      </div>
    </section>
  )
}
