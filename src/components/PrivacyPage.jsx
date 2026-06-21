import { ArrowLeft, Lock } from 'lucide-react'
import { homePath } from '../seo/urls'
import { navigate } from '../router/location'
import { CONTACT_EMAIL } from '../config/site'
import Footer from './Footer'

// GDPR privacy policy. Static content, trilingual. The text is GROUNDED in what the site
// actually does: cookieless Vercel Analytics + Speed Insights (incl. the anonymous
// sourcing_click event), the `molekulax-lang` localStorage + sessionStorage UI cache + the
// PWA offline cache (all device-local), affiliate outbound links, and Vercel hosting. No
// accounts, no cookies, no personal data sold. Keep it accurate if the data surface changes.
const CONTENT = {
  hu: {
    title: 'Adatvédelmi tájékoztató',
    updated: 'Utolsó frissítés: 2026. június 21.',
    intro: 'A MolekulaX edukatív oldal, amely a magánszférát tiszteletben tartva működik: nincs felhasználói fiók, nincsenek nyomkövető sütik, és nem adunk el személyes adatot. Ez a tájékoztató leírja, milyen kevés adatot kezelünk és miért, összhangban az EU általános adatvédelmi rendeletével (GDPR).',
    sections: [
      { h: 'Adatkezelő', p: 'Az oldalt a MolekulaX üzemeltetője kezeli. Adatvédelmi kérdésekben az alábbi e-mail címen érhetsz el minket. Nem működtetünk regisztrációt, hírlevelet vagy felhasználói fiókot.' },
      { h: 'Milyen adatokat kezelünk', p: 'Sütimentes, anonim látogatottság-mérést használunk (Vercel Analytics és Speed Insights): névtelen oldalmegtekintések, hozzávetőleges régió, eszköztípus és teljesítmény-mutatók, amelyek nem azonosítanak téged és nem követnek más oldalakra. Ehhez tartozik annak anonim, összesített mérése is, hogy mely vegyület mely „beszerzés" (bolt) linkjére kattintanak. A kiszolgáló (tárhelyszolgáltató) a kézbesítéshez átmenetileg naplózhatja az IP-címet és a böngésző-azonosítót. Személyes adatot csak akkor kapunk, ha te magad írsz nekünk e-mailt.' },
      { h: 'Sütik és helyi tárolás', p: 'Nem használunk nyomkövető vagy reklám-sütiket, és nincs süti-sáv, mert nincs mit engedélyeztetni. A böngésződ helyi tárolójában (localStorage/sessionStorage) csak technikai beállítás marad: a választott nyelv (molekulax-lang) és a felület gyorsítótárazott fordításai. A telepíthető (PWA) verzió offline működéshez gyorsítótárazza az oldal fájljait. Ezek mind kizárólag a te eszközödön maradnak, sosem küldjük el szerverre, és bármikor törölheted a böngésződ beállításaiból.' },
      { h: 'Harmadik felek', p: 'Tárhely és anonim mérés: Vercel Inc. (sütimentes, magánszféra-barát megoldás). A „beszerzés" linkek harmadik fél boltjaiba (affiliate, rel=sponsored) vezetnek, amelyeknek saját adatkezelésük van: ha odakattintasz, már az ő szabályzatuk érvényes, mi nem kapunk meg rólad adatot. Ha e-mailt írsz, azt a Google (Gmail) dolgozza fel. A Telegram- és TikTok-gombok külső platformokra mutatnak, saját adatkezeléssel. A Vercel és a Google egyesült államokbeli szolgáltatók, így ezek az adatok az EU-n kívülre is kerülhetnek, a saját adatvédelmi garanciáik szerint.' },
      { h: 'Jogalap és megőrzés', p: 'Az anonim mérés és az oldal kézbesítése a GDPR 6. cikk (1) f) pontja szerinti jogos érdeken alapul: nyomkövető sütik és személyazonosítás nélkül történik. Nem végzünk automatizált döntéshozatalt vagy profilalkotást. Mi magunk nem tárolunk személyes adatot; az anonim, összesített statisztikákat a szolgáltató (Vercel) saját szabályzata szerint őrzi. A hozzánk írt e-maileket csak a megválaszoláshoz szükséges ideig tartjuk meg.' },
      { h: 'A te jogaid', p: 'A GDPR szerint jogod van a hozzáféréshez, helyesbítéshez, törléshez, korlátozáshoz, tiltakozáshoz és adathordozhatósághoz, valamint panaszt tehetsz a felügyeleti hatóságnál (Magyarországon: NAIH, naih.hu). Mivel azonosításra alkalmas adatot nem gyűjtünk, az anonim méréseket általában nem tudjuk hozzád kötni, de bármilyen kérdésben fordulj hozzánk bizalommal.' },
      { h: 'Gyermekek', p: 'A tartalom kizárólag 18 éven felülieknek szól, és nem kiskorúaknak készült. Tudatosan nem kezelünk kiskorúakra vonatkozó adatot.' },
      { h: 'Változások', p: 'A tájékoztatót időről időre frissíthetjük. A fent jelzett dátum mutatja az utolsó módosítást.' },
    ],
    contactH: 'Kapcsolat',
    contactP: 'Adatvédelmi kérdés vagy kérés esetén írj ide:',
    back: 'Vissza a főoldalra',
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: 21 June 2026.',
    intro: 'MolekulaX is an educational site built to respect your privacy: there are no user accounts, no tracking cookies, and we do not sell personal data. This policy describes the little data we process and why, in line with the EU General Data Protection Regulation (GDPR).',
    sections: [
      { h: 'Data controller', p: 'The site is run by the operator of MolekulaX. For privacy questions you can reach us at the email address below. We do not run registration, a newsletter, or user accounts.' },
      { h: 'What data we process', p: 'We use cookieless, anonymous analytics (Vercel Analytics and Speed Insights): anonymous page views, approximate region, device type and performance metrics that do not identify you and do not track you across other sites. This includes anonymous, aggregated measurement of which "sourcing" (compound and shop) link is clicked. The host may transiently log your IP address and browser identifier to deliver the page. We receive personal data only if you choose to email us.' },
      { h: 'Cookies and local storage', p: 'We do not use tracking or advertising cookies, and there is no cookie banner because there is nothing to consent to. Your browser keeps only technical settings in local storage (localStorage/sessionStorage): your chosen language (molekulax-lang) and cached interface translations. The installable (PWA) version caches the site files for offline use. All of this stays solely on your device, is never sent to a server, and can be cleared anytime from your browser settings.' },
      { h: 'Third parties', p: 'Hosting and anonymous measurement: Vercel Inc. (a cookieless, privacy-friendly solution). The "sourcing" links lead to third-party shops (affiliate, rel=sponsored) that have their own data practices: once you click through, their policy applies and we receive no data about you. If you email us, Google (Gmail) processes the message. The Telegram and TikTok buttons point to external platforms with their own data handling. Vercel and Google are US-based providers, so this data may be transferred outside the EU under their own data-protection safeguards.' },
      { h: 'Legal basis and retention', p: 'The anonymous measurement and the delivery of the site rely on legitimate interest under GDPR Article 6(1)(f): they happen without tracking cookies and without identifying you. We do not carry out automated decision-making or profiling. We store no personal data ourselves; the anonymous, aggregated statistics are retained by the provider (Vercel) under its own policy. Emails you send us are kept only as long as needed to reply.' },
      { h: 'Your rights', p: 'Under the GDPR you have the right to access, rectification, erasure, restriction, objection and data portability, and you may lodge a complaint with a supervisory authority (in Hungary: NAIH, naih.hu). Since we collect no identifying data, we usually cannot link the anonymous measurements to you, but you are welcome to contact us with any request.' },
      { h: 'Children', p: 'The content is intended for adults 18 and over only, and is not made for minors. We do not knowingly process data relating to minors.' },
      { h: 'Changes', p: 'We may update this policy from time to time. The date shown above indicates the most recent change.' },
    ],
    contactH: 'Contact',
    contactP: 'For a privacy question or request, write to:',
    back: 'Back to home',
  },
  pl: {
    title: 'Polityka prywatności',
    updated: 'Ostatnia aktualizacja: 21 czerwca 2026.',
    intro: 'MolekulaX to strona edukacyjna stworzona z poszanowaniem prywatności: nie ma kont użytkowników, nie ma śledzących ciasteczek i nie sprzedajemy danych osobowych. Niniejsza polityka opisuje, jak niewiele danych przetwarzamy i dlaczego, zgodnie z unijnym RODO (GDPR).',
    sections: [
      { h: 'Administrator danych', p: 'Stroną zarządza operator MolekulaX. W sprawach prywatności możesz skontaktować się z nami pod adresem e-mail podanym poniżej. Nie prowadzimy rejestracji, newslettera ani kont użytkowników.' },
      { h: 'Jakie dane przetwarzamy', p: 'Korzystamy z analityki bez ciasteczek i anonimowej (Vercel Analytics i Speed Insights): anonimowe odsłony, przybliżony region, typ urządzenia i wskaźniki wydajności, które Cię nie identyfikują i nie śledzą na innych stronach. Obejmuje to anonimowy, zbiorczy pomiar tego, w który link „zaopatrzenie" (sklepu) którego związku kliknięto. Serwer (dostawca hostingu) może tymczasowo zapisywać adres IP i identyfikator przeglądarki w celu dostarczenia strony. Dane osobowe otrzymujemy tylko wtedy, gdy sam napiszesz do nas e-mail.' },
      { h: 'Ciasteczka i pamięć lokalna', p: 'Nie używamy śledzących ani reklamowych ciasteczek i nie ma baneru zgody, bo nie ma na co wyrażać zgody. W pamięci lokalnej przeglądarki (localStorage/sessionStorage) pozostają tylko ustawienia techniczne: wybrany język (molekulax-lang) i zapisane tłumaczenia interfejsu. Wersja instalowalna (PWA) zapisuje pliki strony do działania offline. Wszystko to pozostaje wyłącznie na Twoim urządzeniu, nigdy nie jest wysyłane na serwer i możesz to usunąć w każdej chwili w ustawieniach przeglądarki.' },
      { h: 'Podmioty trzecie', p: 'Hosting i anonimowy pomiar: Vercel Inc. (rozwiązanie bez ciasteczek, przyjazne prywatności). Linki „zaopatrzenie" prowadzą do sklepów osób trzecich (afiliacja, rel=sponsored), które mają własne praktyki przetwarzania danych: po kliknięciu obowiązuje ich polityka, a my nie otrzymujemy żadnych danych o Tobie. Jeśli napiszesz e-mail, wiadomość przetwarza Google (Gmail). Przyciski Telegram i TikTok prowadzą do zewnętrznych platform z własnym przetwarzaniem danych. Vercel i Google to dostawcy z siedzibą w USA, więc dane te mogą być przekazywane poza UE, zgodnie z ich własnymi zabezpieczeniami ochrony danych.' },
      { h: 'Podstawa prawna i przechowywanie', p: 'Anonimowy pomiar i dostarczanie strony opierają się na prawnie uzasadnionym interesie zgodnie z art. 6 ust. 1 lit. f RODO: odbywają się bez śledzących ciasteczek i bez identyfikowania Ciebie. Nie podejmujemy zautomatyzowanych decyzji ani nie profilujemy. Sami nie przechowujemy danych osobowych; anonimowe, zbiorcze statystyki przechowuje dostawca (Vercel) zgodnie z własną polityką. E-maile, które do nas wysyłasz, przechowujemy tylko tak długo, jak to potrzebne do odpowiedzi.' },
      { h: 'Twoje prawa', p: 'Na mocy RODO masz prawo do dostępu, sprostowania, usunięcia, ograniczenia, sprzeciwu i przenoszenia danych, a także możesz złożyć skargę do organu nadzorczego (na Węgrzech: NAIH, naih.hu; w Polsce: PUODO, uodo.gov.pl). Ponieważ nie zbieramy danych identyfikujących, zwykle nie możemy powiązać anonimowych pomiarów z Tobą, ale w każdej sprawie możesz się z nami skontaktować.' },
      { h: 'Dzieci', p: 'Treści są przeznaczone wyłącznie dla osób dorosłych 18+ i nie są tworzone dla nieletnich. Świadomie nie przetwarzamy danych dotyczących osób nieletnich.' },
      { h: 'Zmiany', p: 'Możemy od czasu do czasu aktualizować tę politykę. Data podana powyżej wskazuje ostatnią zmianę.' },
    ],
    contactH: 'Kontakt',
    contactP: 'W sprawie pytania lub żądania dotyczącego prywatności napisz na:',
    back: 'Powrót do strony głównej',
  },
}

export default function PrivacyPage({ lang = 'hu' }) {
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
          <Lock size={18} strokeWidth={2} />
          <span className="text-xs uppercase tracking-[0.2em]">MolekulaX</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{c.title}</h1>
        <p className="text-xs uppercase tracking-widest mb-6 text-gray-500">{c.updated}</p>
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
