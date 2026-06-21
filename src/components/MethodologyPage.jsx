import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { homePath } from '../seo/urls'
import { navigate } from '../router/location'
import { CONTACT_EMAIL } from '../config/site'
import Footer from './Footer'

// E-E-A-T methodology / source-policy page (substitutes for a named medical author by
// openly documenting HOW the content is sourced + verified). Static content, trilingual.
const CONTENT = {
  hu: {
    title: 'Módszertan és forrás-politika',
    intro: 'Ez az oldal leírja, hogyan készül és hogyan ellenőrzött a MolekulaX tartalma. A MolekulaX edukatív oldal: nem értékesít termékeket, nem nyújt orvosi tanácsadást, és nem ösztönöz illegális szer- vagy gyógyszerhasználatra. A tartalom tudományos forrásokra épül, de nem helyettesíti az orvosi szakvéleményt.',
    sections: [
      { h: 'Forrás-hierarchia', p: 'A tudományos állításokat rangsorolt források támasztják alá: elsődlegesen lektorált (peer-reviewed) PubMed-publikációk, majd szabályozói dokumentumok (FDA, EMA termékjellemzők), végül kémiai adatbázisok (PubChem). A hivatkozott tanulmányok közvetlenül linkeltek a forráshoz.' },
      { h: 'Forrás-verifikáció', p: 'Minden tudományos hivatkozás (PMID) gépileg ellenőrzött az NCBI/PubMed adatbázisa ellen, mielőtt megjelenik. Egy automata integritás-kapu visszautasítja a nem létező vagy a címmel nem illeszkedő hivatkozásokat, így kizárjuk a hibás vagy kitalált forrásokat.' },
      { h: 'Szerkesztőség és frissítés', p: 'A tartalmat a MolekulaX Szerkesztőség gondozza, ártalomcsökkentő (harm-reduction) szemlélettel: a mellékhatásokat és kockázatokat őszintén, nem bagatellizálva mutatjuk be. Minden vegyület-oldal feltünteti az utolsó frissítés dátumát.' },
      { h: 'Amit NEM csinálunk', p: 'Nem értékesítünk termékeket. A „beszerzés" linkek harmadik fél boltjaira mutató, jelölt affiliate-linkek; a MolekulaX nem vizsgálja a termékminőséget. Nem adunk személyre szabott orvosi vagy adagolási tanácsot, és nem ösztönzünk jogszabályba ütköző használatra. Csak 18 éven felülieknek.' },
    ],
    contactH: 'Kapcsolat',
    contactP: 'Tartalmi pontatlanságot vagy forrás-problémát ide jelezhetsz:',
    back: 'Vissza a főoldalra',
  },
  en: {
    title: 'Methodology and source policy',
    intro: 'This page describes how MolekulaX content is produced and verified. MolekulaX is an educational resource: it does not sell products, does not provide medical advice, and does not encourage illegal substance or medication use. The content is based on scientific sources, but does not replace professional medical opinion.',
    sections: [
      { h: 'Source hierarchy', p: 'Scientific claims are backed by ranked sources: primarily peer-reviewed PubMed publications, then regulatory documents (FDA, EMA product information), and finally chemical databases (PubChem). Cited studies link directly to the source.' },
      { h: 'Source verification', p: 'Every scientific citation (PMID) is machine-checked against the NCBI/PubMed database before it is published. An automated integrity gate rejects citations that do not exist or do not match their title, so fabricated or incorrect sources are excluded.' },
      { h: 'Editorial and updates', p: 'Content is maintained by the MolekulaX Editorial Team with a harm-reduction approach: side effects and risks are presented honestly, not downplayed. Every compound page shows the date it was last updated.' },
      { h: 'What we do NOT do', p: 'We do not sell products. The "sourcing" links are labelled third-party affiliate links; MolekulaX does not verify product quality. We do not give personalised medical or dosing advice, and we do not encourage unlawful use. For adults 18+ only.' },
    ],
    contactH: 'Contact',
    contactP: 'Report a content inaccuracy or a source problem here:',
    back: 'Back to home',
  },
  pl: {
    title: 'Metodologia i polityka źródeł',
    intro: 'Ta strona opisuje, jak powstają i są weryfikowane treści MolekulaX. MolekulaX to zasób edukacyjny: nie sprzedaje produktów, nie udziela porad medycznych i nie zachęca do nielegalnego stosowania substancji ani leków. Treści opierają się na źródłach naukowych, ale nie zastępują profesjonalnej opinii medycznej.',
    sections: [
      { h: 'Hierarchia źródeł', p: 'Twierdzenia naukowe są poparte uszeregowanymi źródłami: przede wszystkim recenzowane publikacje PubMed, następnie dokumenty regulacyjne (informacje o produkcie FDA, EMA), a na końcu bazy chemiczne (PubChem). Cytowane badania linkują bezpośrednio do źródła.' },
      { h: 'Weryfikacja źródeł', p: 'Każde cytowanie naukowe (PMID) jest maszynowo sprawdzane w bazie NCBI/PubMed przed publikacją. Automatyczna bramka integralności odrzuca cytowania, które nie istnieją lub nie pasują do tytułu, dzięki czemu wykluczamy sfabrykowane lub błędne źródła.' },
      { h: 'Redakcja i aktualizacje', p: 'Treści prowadzi Redakcja MolekulaX w podejściu redukcji szkód: skutki uboczne i ryzyka przedstawiamy uczciwie, nie bagatelizując ich. Każda strona związku pokazuje datę ostatniej aktualizacji.' },
      { h: 'Czego NIE robimy', p: 'Nie sprzedajemy produktów. Linki „zaopatrzenie" to oznaczone linki afiliacyjne do sklepów osób trzecich; MolekulaX nie weryfikuje jakości produktów. Nie udzielamy spersonalizowanych porad medycznych ani dawkowania i nie zachęcamy do niezgodnego z prawem stosowania. Tylko dla dorosłych 18+.' },
    ],
    contactH: 'Kontakt',
    contactP: 'Zgłoś nieścisłość w treści lub problem ze źródłem tutaj:',
    back: 'Powrót do strony głównej',
  },
}

export default function MethodologyPage({ lang = 'hu' }) {
  const c = CONTENT[lang] || CONTENT.hu
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <button
          onClick={() => navigate(homePath(lang))}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 text-gray-500 hover:text-[#818cf8] transition-colors"
        >
          <ArrowLeft size={14} /> {c.back}
        </button>

        <div className="inline-flex items-center gap-2 mb-4 text-[#818cf8]">
          <ShieldCheck size={18} strokeWidth={2} />
          <span className="text-xs uppercase tracking-[0.2em]">MolekulaX</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{c.title}</h1>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>{c.intro}</p>

        {c.sections.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{s.h}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.p}</p>
          </section>
        ))}

        <section className="mt-10 pt-6 border-t border-[rgba(129,140,248,0.12)]">
          <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{c.contactH}</h2>
          <p className="text-sm leading-relaxed mb-1" style={{ color: 'var(--text-secondary)' }}>{c.contactP}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-[#818cf8] hover:underline">{CONTACT_EMAIL}</a>
        </section>
      </article>
      <Footer />
    </div>
  )
}
