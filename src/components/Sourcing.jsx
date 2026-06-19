import { ArrowRight, Tag } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// "Beszerzés" — partner sourcing section (under Education). Affiliate links with
// coupons. Indigo/purple accent (green is reserved for chemistry content).
// URLs are constants; copy comes from besz.* i18n keys. This section replaced the
// old top-left floating PCTZONE coupon pill.
const PARTNERS = [
  {
    id: 'limitless',
    name: 'LIMITLESS',
    href: 'https://www.limitlessbiochem.com/?ref=molekulax',
    logo: '/sourcing/limitless.png',
    descKey: 'besz.limitless.desc',
    couponKey: 'besz.limitless.coupon',
    ctaKey: 'besz.limitless.cta',
  },
  {
    id: 'pctzone',
    name: 'PCTZONE',
    href: 'https://pctzone.su/?coupon=molekulax',
    logo: '/sourcing/pctzone.png',
    descKey: 'besz.pctzone.desc',
    couponKey: 'besz.pctzone.coupon',
    ctaKey: 'besz.pctzone.cta',
  },
  {
    // Driada has NO referral link in the URL — the discount only applies if the
    // visitor enters the MOLEKULAX coupon at checkout (emphasised in besz.driada.coupon).
    id: 'driada',
    name: 'DRIADA SHOP',
    href: 'https://driadashop.to/',
    logo: '/sourcing/driada.png',
    descKey: 'besz.driada.desc',
    couponKey: 'besz.driada.coupon',
    ctaKey: 'besz.driada.cta',
  },
]

export default function Sourcing() {
  const { t } = useLang()
  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold italic text-white">{t('besz.title')}</h2>
          <p className="text-gray-400 text-sm mt-4">{t('besz.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERS.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group flex flex-col md:flex-row md:items-stretch gap-5 md:gap-7 p-8 rounded-2xl glass no-underline hover:border-[rgba(129,140,248,0.3)] hover:bg-[rgba(99,102,241,0.07)] transition-all duration-300"
            >
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-xl font-extrabold tracking-wide text-white">{p.name}</h3>
                <p className="text-gray-400 text-sm mt-2 mb-5 flex-1">{t(p.descKey)}</p>

              <div
                className="inline-flex items-center gap-2 self-start mb-6 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
                style={{
                  background: 'rgba(129,140,248,0.12)',
                  border: '1px solid rgba(129,140,248,0.4)',
                  color: '#818cf8',
                }}
              >
                <Tag size={12} strokeWidth={2.5} className="shrink-0" />
                {t(p.couponKey)}
              </div>

              <span
                className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-widest"
                style={{ color: '#818cf8' }}
              >
                {t(p.ctaKey)}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              </div>
              <div className="order-first md:order-none shrink-0 flex items-center justify-center md:justify-end md:w-[34%]">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-[120px] md:max-h-[124px] w-auto max-w-[180px] md:max-w-[210px] object-contain opacity-95 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  draggable="false"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
