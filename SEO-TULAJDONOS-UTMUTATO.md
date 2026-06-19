# MolekulaX — SEO & mérés beállítási útmutató (tulajdonosi teendők)

> Ez az útmutató azokat a lépéseket írja le, **amelyeket a kódból nem lehet elvégezni**, a tulajdonosnak (a domain és a fiókok birtokosának) kell megcsinálnia.
> A weboldal technikai SEO-alapjai **már készen vannak** (lásd lent). Ezekkel a lépésekkel lesz az oldal **megtalálható** (Google/Bing) és **mérhető** (látogatottság, sebesség).
>
> Domain: **https://molekulax.hu** · Tárhely/hosting: **Vercel** · DNS: **Rackhost**
> Becsült időigény az egészre: **~45–60 perc.**

---

## 0. Amit a fejlesztő már beállított a kódban (nem kell vele foglalkozni)

- `title`, `meta description`, **canonical** URL (`https://molekulax.hu/`)
- **Open Graph** + **Twitter Card** (közösségi megosztáskor szép előnézeti kép — `og-image.png`)
- **Strukturált adat** (JSON‑LD: Organization + WebSite) — a Google így „érti" a márkát
- **robots.txt** (`https://molekulax.hu/robots.txt`) — engedi az indexelést, mutat a sitemapre
- **sitemap.xml** (`https://molekulax.hu/sitemap.xml`)
- **PWA manifest** + ikonok (telefonra menthető app‑ikon)
- **Vercel Analytics + Speed Insights** beépítve (cookie nélküli, GDPR‑barát mérés) — **csak be kell kapcsolni**, lásd 3. pont

Te ezeket fogod elvégezni: Google Search Console, Bing, mérés bekapcsolása, közösségi előnézet ellenőrzése, üzemidő‑figyelés.

---

## 1. Google Search Console (GSC) — hogy a Google indexelje és lásd a forgalmat

**Mire jó:** ez a legfontosabb. Itt jelented be a Google‑nek az oldalt, küldöd be a sitemapet, és látod, milyen kulcsszavakra jönnek be a látogatók.

### 1.1 Property létrehozása (Domain típus — ez a legjobb)
1. Menj ide: **https://search.google.com/search-console** és lépj be Google‑fiókkal.
2. Bal felül a **legördülő menü → „Tulajdon hozzáadása" (Add property)**.
3. Válaszd a **bal oldali „Domain"** dobozt (NE az URL‑előtagot).
4. Írd be: `molekulax.hu` → **Tovább**.
5. A Google ad egy **TXT rekordot**, valami ilyet: `google-site-verification=xxxxxxxxxxxxxxxx`. **Másold ki.**

### 1.2 A TXT rekord felvétele a Rackhostnál (DNS)
1. Lépj be: **https://www.rackhost.hu** → **Belépés** → **Szolgáltatásaim**.
2. Keresd meg a **molekulax.hu** domaint → **DNS beállítások / DNS zóna szerkesztése**.
3. **Új rekord hozzáadása:**
   - **Típus:** `TXT`
   - **Név / Host:** `@` (vagy hagyd üresen / `molekulax.hu` — a Rackhost felületétől függ)
   - **Érték / Cél:** illeszd be a Google‑tól kapott teljes sort (`google-site-verification=...`)
   - **TTL:** maradhat az alapértelmezett (pl. 3600)
4. **Mentés.**
5. Várj **5–30 percet** (DNS terjedés), majd a GSC‑ben kattints **„Ellenőrzés" (Verify)**.
   - Ha „nem sikerült", várj még 1 órát és próbáld újra — a DNS terjedés néha lassú.

### 1.3 Sitemap beküldése
1. A GSC‑ben bal oldalt: **„Webhelytérképek" (Sitemaps)**.
2. Az „Új webhelytérkép" mezőbe írd: `sitemap.xml` → **Beküldés**.
3. Pár perc múlva „Sikeres" állapot jelenik meg.

### 1.4 Indexelés kérése (gyorsítás)
1. Felül a keresősávba írd be: `https://molekulax.hu/` → **Enter**.
2. Ha „Az URL nincs a Google‑ban", kattints **„Indexelés kérése" (Request indexing)**.
3. Ez felgyorsítja, hogy a főoldal bekerüljön (általában 1–7 nap).

> **Megjegyzés a fejlesztőtől:** az oldal egylapos alkalmazás (SPA), ezért elsősorban a **főoldal** indexelődik önálló címként. Ha később az is cél, hogy minden egyes hatóanyag‑aloldal külön találatként jöjjön ki a Google‑ben, ahhoz szerveroldali előrenderelés (prerender/SSR) kell — ez egy külön fejlesztési feladat, szólj, ha kell.

---

## 2. Bing Webmaster Tools — a Bing/DuckDuckGo találatokhoz

**Mire jó:** a Bing (és a rá épülő DuckDuckGo, valamint sok AI‑kereső) indexeléséhez. 5 perc, mert a GSC‑ből importálható.

1. Menj ide: **https://www.bing.com/webmasters** → lépj be (Microsoft vagy Google fiók).
2. A kezdőképernyőn válaszd: **„Import from Google Search Console"** (GSC‑ből importálás).
3. Engedélyezd a hozzáférést → válaszd ki a **molekulax.hu** property‑t → **Import**.
4. Ezzel a verifikáció + a sitemap **automatikusan átkerül**. Kész.
   - Ha az import nem megy: „Add site" → `https://molekulax.hu` → verifikáció szintén DNS TXT‑vel (ugyanúgy, mint a Google‑nál, csak Bing‑es kóddal).

---

## 3. Mérés (Analytics) — hogy lásd, mit csinálnak a látogatók

A kódban **már be van építve a Vercel Analytics + Speed Insights** (cookie nélküli, GDPR‑barát → **nem kell süti‑elfogadó sáv**). Csak **be kell kapcsolni** a Vercel felületén:

### 3.1 Vercel Web Analytics bekapcsolása (ajánlott, ingyenes)
1. Lépj be: **https://vercel.com** → válaszd ki a **molekulax** projektet.
2. Felső menü: **Analytics** fül → **„Enable"** gomb.
3. Felső menü: **Speed Insights** fül → **„Enable"** gomb.
4. Ennyi. Pár óra múlva jönnek az adatok: látogatószám, top oldalak, honnan jönnek (referrer), eszköz, ország, és a valós sebesség (Core Web Vitals).

> Ingyenes Hobby csomagon havi adatpont‑limit van, de egy induló oldalhoz bőven elég. Ha kinövi, a Pro csomag feloldja.

### 3.2 (Opcionális) Google Analytics 4 — ha részletesebb mérés kell
Ha a Vercelnél részletesebb elemzést szeretnél (események, célok, tölcsérek), GA4‑et is tudunk tenni:
1. Menj ide: **https://analytics.google.com** → **Admin (fogaskerék) → Tulajdon létrehozása**.
2. Add meg a nevet (MolekulaX), időzóna: Budapest, pénznem: HUF.
3. Hozz létre egy **Webes adatfolyamot (Web data stream)**: URL = `https://molekulax.hu`.
4. Másold ki a **Mérési azonosítót (Measurement ID)**, ami így néz ki: **`G-XXXXXXXXXX`**.
5. **Küldd át nekem ezt a `G-...` azonosítót**, és beépítem a kódba.
   - ⚠️ Fontos: a GA4 sütiket használ, ezért **EU‑ban süti‑elfogadó sáv (cookie consent)** is kell hozzá — ezt is meg tudom csinálni, csak szólj. (A Vercel Analytics‑hez NEM kell.)

---

## 4. Közösségi megosztás előnézet ellenőrzése (Open Graph)

**Mire jó:** hogy amikor valaki megosztja a linket (Messenger, Facebook, LinkedIn, X), szép kép + cím jelenjen meg.

1. **Facebook/Messenger:** https://developers.facebook.com/tools/debug/ → írd be `https://molekulax.hu` → **Debug**. Ha régi adatot mutat: **„Scrape Again"**.
2. **LinkedIn:** https://www.linkedin.com/post-inspector/ → írd be a linket → **Inspect**.
3. Mindkettőn látnod kell a MolekulaX előnézeti képet + címet. (Ha üres: nyomj „újra‑beolvasást", mert a közösségi oldalak cache‑elnek.)

---

## 5. Strukturált adat (rich results) ellenőrzése

1. Menj ide: **https://search.google.com/test/rich-results**
2. Írd be: `https://molekulax.hu` → **Teszt**.
3. Hibátlanul fel kell ismernie az **Organization** és **WebSite** adatokat.

---

## 6. Üzemidő‑figyelés (uptime) — hogy szóljon, ha leáll az oldal

**Mire jó:** e‑mailt kapsz, ha az oldal valamiért elérhetetlen.
1. Regisztrálj: **https://uptimerobot.com** (ingyenes).
2. **„Add New Monitor"** → Type: `HTTPS` → URL: `https://molekulax.hu` → Interval: 5 perc.
3. Add meg az e‑mailed értesítéshez → **Create Monitor**.

---

## 7. Teljesítmény ellenőrzés (Core Web Vitals)

1. Menj ide: **https://pagespeed.web.dev**
2. Írd be: `https://molekulax.hu` → **Analyze**.
3. Mobil + Desktop pontszámot is mutat. (A technikai alap optimalizált; ha valami pirosba megy, szólj és nézzük.)

---

## 8. Ellenőrző lista (pipáld ki sorban)

- [ ] GSC Domain property létrehozva + DNS TXT felvéve Rackhostnál + **Verify** sikeres
- [ ] GSC‑ben sitemap (`sitemap.xml`) beküldve
- [ ] GSC‑ben főoldal indexelés kérve
- [ ] Bing Webmaster Tools — GSC‑ből importálva
- [ ] Vercel **Analytics** + **Speed Insights** bekapcsolva
- [ ] (Opcionális) GA4 `G-...` azonosító elküldve a fejlesztőnek
- [ ] Facebook + LinkedIn megosztás‑előnézet ellenőrizve
- [ ] Rich Results teszt zöld
- [ ] UptimeRobot figyelő beállítva
- [ ] PageSpeed Insights lefuttatva

---

## 9. Mit küldj vissza a fejlesztőnek (ha kell)

- Ha GA4‑et szeretnél: a **`G-XXXXXXXXXX`** mérési azonosítót (+ jelezd, hogy kell a süti‑sáv).
- Ha a GSC verifikáció HTML‑meta módszerrel egyszerűbb (nem DNS‑sel): küldd át a `google-site-verification=...` kódot, és beteszem a kódba helyetted.
- Bármilyen hibát, amit a fenti tesztek (rich results / PageSpeed / OG debugger) jeleznek.

---

*Készült: 2026‑06‑19 · MolekulaX SEO alap (canonical, OG, JSON‑LD, sitemap, robots, manifest, Vercel Analytics) a kódban már él.*
