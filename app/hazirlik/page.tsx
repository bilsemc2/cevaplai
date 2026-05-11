import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beta Hazırlık Listesi",
  description:
    "Cevaplai onboarding'i için hazırlamanız gereken bilgilerin tam listesi: Telegram bot token, Gemini API key, mail hesap bilgileri, kişiselleştirme tercihleri.",
  robots: { index: false, follow: false },
};

const tocItems = [
  { id: "telegram", n: "1", label: "Telegram (zorunlu)" },
  { id: "gemini", n: "2", label: "Gemini API Key (zorunlu)" },
  { id: "eposta", n: "3", label: "E-posta Hesabı (zorunlu)" },
  { id: "whatsapp", n: "4", label: "WhatsApp (Tier 2)" },
  { id: "kisisellestirme", n: "5", label: "Kişiselleştirme" },
  { id: "iletisim", n: "6", label: "İletişim & gizlilik" },
  { id: "checklist", n: "7", label: "Checklist (kopyala-cevapla)" },
  { id: "sonra", n: "8", label: "Sonraki adım" },
];

function Callout({
  tone,
  title,
  children,
}: {
  tone: "info" | "warn";
  title?: string;
  children: React.ReactNode;
}) {
  const palette =
    tone === "warn"
      ? "border-amber-200 bg-amber-50"
      : "border-brand-200 bg-brand-50/60";
  const iconColor = tone === "warn" ? "text-amber-600" : "text-brand-600";
  return (
    <div className={`my-5 rounded-xl border ${palette} p-4 sm:p-5`}>
      <div className="flex items-start gap-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 shrink-0 ${iconColor}`}
          aria-hidden="true"
        >
          {tone === "warn" ? (
            <>
              <path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4M12 17h0" />
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h0" />
            </>
          )}
        </svg>
        <div className="min-w-0 text-[14.5px] leading-relaxed text-ink-700">
          {title && (
            <p className="mb-1 font-semibold text-ink-900">{title}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

function StepList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="ml-5 list-decimal space-y-2 text-[15px] leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-600">
      {children}
    </ol>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-ink-100 px-1.5 py-0.5 font-mono text-[0.85em] text-ink-900">
      {children}
    </code>
  );
}

function Provider({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group mt-3 rounded-xl border border-ink-100 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-ink-900 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-500">
        <span>{name}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-ink-400 transition-transform group-open:rotate-180"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="mt-3 text-[15px] leading-relaxed text-ink-700">
        {children}
      </div>
    </details>
  );
}

const checklist = `TELEGRAM
[ ] Bot token: ...
[ ] Bot username: @..._bot
[ ] Chat ID: ...

GEMINI
[ ] API key: AIzaSy...

E-POSTA HESABI #1
[ ] Mail adresi: ...@...
[ ] Sağlayıcı: Gmail / Outlook / iCloud / Yandex / Kurumsal: ...
[ ] App password / şifre: ...
[ ] (Kurumsal ise) IMAP host: ..., port: 993
[ ] (Kurumsal ise) SMTP host: ..., port: 587

E-POSTA HESABI #2 (varsa)
... aynı format

KİŞİSELLEŞTİRME (opsiyonel)
[ ] Firma / iş özeti: ...
[ ] Cevap tarzı: ...
[ ] Yasak konular: ...
[ ] VIP adresler: ...`;

export default function HazirlikPage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-brand-50/40 via-white to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Ana sayfa
        </Link>

        <header className="mt-6 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Onboarding
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Cevaplai · Yeni Kullanıcı Hazırlık Listesi
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Aşağıdaki bilgileri tek bir güvenli kanaldan (Signal, WhatsApp gizli
            mesaj, KeePass paylaşım, vb.) bana yollayın. Hazırlığınız ne kadar
            tam olursa kurulumunuz o kadar hızlı biter.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          {/* TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="İçindekiler" className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                İçindekiler
              </p>
              <ol className="mt-3 space-y-2 text-sm">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-start gap-2.5 text-ink-700 transition hover:text-brand-700"
                    >
                      <span className="font-semibold text-brand-600">
                        {item.n}.
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Main content */}
          <article className="min-w-0">
            {/* SECTION 1 — Telegram */}
            <section id="telegram" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                1. Telegram <span className="text-base font-medium text-ink-400">(zorunlu)</span>
              </h2>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                1a. Telegram bot
              </h3>
              <StepList>
                <li>
                  Telegram&apos;da <Code>@BotFather</Code>&apos;ı aç
                </li>
                <li>
                  <Code>/newbot</Code> yaz
                </li>
                <li>
                  Bot için bir isim belirle (örn. <em>&quot;Ahmet Mail
                  Asistanı&quot;</em>)
                </li>
                <li>
                  Bot için bir username belirle (sonu <Code>_bot</Code> ile
                  bitmek zorunda, örn. <Code>ahmet_mail_bot</Code>)
                </li>
                <li>
                  BotFather sana bir <strong>token</strong> verir, format:{" "}
                  <Code>8795854265:AAFNkxwky4St09ZDTh_CLWf2kvOIg7KQBU4</Code>
                </li>
                <li>
                  ✅ Token&apos;ı kopyalayıp bana yolla
                </li>
              </StepList>
              <Callout tone="warn" title="Güvenlik">
                Token&apos;ı bana yolladıktan sonra hiçbir yerde paylaşma.
                Sızdığını düşünürsen BotFather&apos;da <Code>/revoke</Code> ile
                yenisini al.
              </Callout>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                1b. Telegram Chat ID
              </h3>
              <StepList>
                <li>
                  Bot&apos;unu Telegram&apos;da ara, <Code>/start</Code>{" "}
                  komutuyla sohbeti aç
                </li>
                <li>
                  Telegram&apos;da <Code>@userinfobot</Code>&apos;a{" "}
                  <Code>/start</Code> yaz
                </li>
                <li>
                  Sana 9-10 haneli bir chat ID verir (örn.{" "}
                  <Code>1826468478</Code>)
                </li>
                <li>✅ Chat ID&apos;yi bana yolla</li>
              </StepList>
              <p className="mt-4 text-[14.5px] text-ink-500">
                Bu ID seninle bot&apos;un sohbet kanalını tanımlar. Mail
                onayları bu chat&apos;e düşecek.
              </p>
            </section>

            {/* SECTION 2 — Gemini */}
            <section id="gemini" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                2. Gemini API Key{" "}
                <span className="text-base font-medium text-ink-400">
                  (zorunlu)
                </span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                LLM cevap taslağı için. Ücretsiz tier günde 250 mail için
                yeter, küçük işletmede sınır görmezsiniz.
              </p>
              <StepList>
                <li>
                  <a
                    href="https://aistudio.google.com/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                  >
                    aistudio.google.com/apikey
                  </a>{" "}
                  aç, Google hesabınla giriş yap
                </li>
                <li>
                  <strong>&quot;Create API key&quot;</strong> butonuna bas
                </li>
                <li>
                  <strong>&quot;Create API key in new project&quot;</strong> seç
                  (yeni Google Cloud projesi otomatik kurulur)
                </li>
                <li>
                  Sana bir key verir, format: <Code>AIzaSy...</Code> (39
                  karakter)
                </li>
                <li>✅ Key&apos;i kopyalayıp bana yolla</li>
              </StepList>
              <Callout tone="warn" title="Önemli">
                Bu key kullanım kotalı. Aşırı kullanım olursa Google fatura
                keser. Ücretsiz tier&apos;da kalmak için günde 250 mail sınırını
                aşma. Aşacağını düşünüyorsan ödeme yöntemi <strong>ekleme</strong>.
              </Callout>
            </section>

            {/* SECTION 3 — E-posta */}
            <section id="eposta" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                3. E-posta Hesabı{" "}
                <span className="text-base font-medium text-ink-400">
                  (zorunlu, en az 1)
                </span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Cevaplai&apos;a bağlanacak her hesap için aşağıdaki bilgiler
                gerekir.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                3a. E-posta adresi
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                Hangi mail kutusunu yöneteceğim? Örnek:{" "}
                <Code>destek@firmaniz.com</Code>,{" "}
                <Code>info@mali-musavirlik.com</Code>,{" "}
                <Code>ahmet@gmail.com</Code>
              </p>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                3b. App password{" "}
                <span className="font-normal text-ink-500">
                  (asıl şifre değil!)
                </span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                Sağlayıcına göre aşağıdan seç:
              </p>

              <Provider name="Gmail / Google Workspace">
                <StepList>
                  <li>
                    <a
                      href="https://myaccount.google.com/security"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                    >
                      myaccount.google.com/security
                    </a>{" "}
                    aç
                  </li>
                  <li>
                    <strong>2-Step Verification</strong> açık olmalı (değilse
                    önce onu aç)
                  </li>
                  <li>
                    Aynı sayfada <strong>&quot;App passwords&quot;</strong>{" "}
                    linki → tıkla
                  </li>
                  <li>
                    &quot;App&quot;: <Code>Mail</Code>, &quot;Device&quot;:{" "}
                    <Code>Other (custom name)</Code>, ad: <Code>Cevaplai</Code>
                  </li>
                  <li>
                    Google sana 16-karakterli şifre verir, format:{" "}
                    <Code>xxxx yyyy zzzz wwww</Code>
                  </li>
                  <li>
                    ✅ Şifreyi bana yolla (boşluklu hâliyle yeter)
                  </li>
                </StepList>
              </Provider>

              <Provider name="Outlook / Microsoft 365">
                <StepList>
                  <li>
                    <a
                      href="https://account.microsoft.com/security"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                    >
                      account.microsoft.com/security
                    </a>{" "}
                    aç
                  </li>
                  <li>
                    <strong>Advanced security options → App passwords</strong>
                  </li>
                  <li>
                    &quot;Yeni app password oluştur&quot; → kopyala
                  </li>
                  <li>✅ Şifreyi bana yolla</li>
                </StepList>
              </Provider>

              <Provider name="iCloud Mail (Apple)">
                <StepList>
                  <li>
                    <a
                      href="https://appleid.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                    >
                      appleid.apple.com
                    </a>{" "}
                    → <strong>Sign-In Security → App-Specific Passwords</strong>
                  </li>
                  <li>
                    <strong>Generate Password</strong> → ad: <Code>Cevaplai</Code> → kopyala
                  </li>
                  <li>✅ Şifreyi bana yolla</li>
                </StepList>
              </Provider>

              <Provider name="Yandex">
                <StepList>
                  <li>
                    <a
                      href="https://passport.yandex.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                    >
                      passport.yandex.com
                    </a>{" "}
                    → <strong>Login security → App passwords</strong>
                  </li>
                  <li>
                    <strong>Mail</strong> için yeni → kopyala
                  </li>
                  <li>✅ Şifreyi bana yolla</li>
                </StepList>
              </Provider>

              <Provider name="Kurumsal mail (firmaniz.com, kurumsaleposta.com, vb.)">
                <p>
                  Mail provider&apos;ın panelinden veya IT admin&apos;inden
                  iste:
                </p>
                <ul className="mt-3 ml-5 list-disc space-y-1.5">
                  <li>
                    IMAP host (örn. <Code>mail.kurumsaleposta.com</Code>)
                  </li>
                  <li>IMAP port (genelde <Code>993</Code>)</li>
                  <li>SMTP host (genelde aynı)</li>
                  <li>
                    SMTP port: <Code>587</Code>{" "}
                    <span className="text-ink-500">
                      — Hetzner VPS port 465&apos;i bloke ediyor, 587 olmalı
                    </span>
                  </li>
                  <li>
                    App password destekliyorsa onu kullan; yoksa asıl mail
                    şifresini kullan
                  </li>
                </ul>
                <p className="mt-3">
                  ✅ Tüm bilgileri bana yolla (host + port + şifre)
                </p>
              </Provider>

              <Callout tone="info" title="Birden fazla hesap">
                Yukarıdaki tüm bilgileri her hesap için ayrı ayrı yolla.
                Cevaplai 3-5 hesabı aynı anda yönetebilir.
              </Callout>
            </section>

            {/* SECTION 4 — WhatsApp */}
            <section id="whatsapp" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                4. WhatsApp{" "}
                <span className="text-base font-medium text-ink-400">
                  (opsiyonel — Tier 2&apos;de gelecek)
                </span>
              </h2>
              <Callout tone="info">
                Şu an WhatsApp tek kullanıcılıdır (Tier 1). Tier 2&apos;de her
                kullanıcı kendi WhatsApp&apos;ını bağlayabilecek.{" "}
                <strong>Bu adımı şimdilik atla.</strong> Tier 2 hazır olduğunda
                haber veririz.
              </Callout>
            </section>

            {/* SECTION 5 — Kişiselleştirme */}
            <section id="kisisellestirme" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                5. Kişiselleştirme{" "}
                <span className="text-base font-medium text-ink-400">
                  (opsiyonel ama ÇOK önerilir)
                </span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Asistanın taslakları nasıl yazsın diye kısa bir brief ver.
                Bunlar olmadan generic Türkçe taslaklar çıkar.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                5a. Kişiliğin / firmanın özeti (2-5 cümle)
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                Örnek: <em>&quot;Firmamız Ankara merkezli bir özel eğitim
                kurumudur. BİLSEM sınavına hazırlanan ilkokul çocuklarına online
                dersler ve uygulamalar sunarız. Hedef kitlemiz veliler ve
                öğretmenlerdir.&quot;</em>
              </p>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                5b. Cevap tarzı
              </h3>
              <ul className="mt-2 ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-ink-700">
                <li>&quot;Siz&quot; mi &quot;sen&quot; mi kullanılacak?</li>
                <li>
                  Resmi mi samimi mi? (avukat = çok resmi, eğitmen =
                  sıcak-resmi)
                </li>
                <li>
                  Emoji kullanılsın mı? (kurumsal = hayır, kişisel = az)
                </li>
                <li>Ortalama uzunluk: kısa mı, detaylı mı?</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                5c. Yasak / hassas konular
              </h3>
              <ul className="mt-2 ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-ink-700">
                <li>
                  Fiyat söylensin mi yoksa &quot;fiyat için iletişime
                  geç&quot; diye yönlendirilsin mi?
                </li>
                <li>
                  Söz verme tonu (kesin garantili vs. çekingen) hangisi?
                </li>
                <li>
                  Müşteri verilerinin gizli kalmasını gerektiren bir kural var
                  mı?
                </li>
                <li>
                  Hukuki sorumluluk yaratan ifadelerden kaçınılsın mı?
                </li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                5d. Sık karşılaşılan mail türleri
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                En çok hangi konular gelir? (ödeme problemleri, randevu talebi,
                ürün sorusu, şikayet, vb.) Bu türler için örnek bir cevap
                şablonu varsa yolla → Cevaplai onu temel alır.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-ink-900">
                5e. VIP gönderenler{" "}
                <span className="font-normal text-ink-500">(en az 0)</span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                Hangi e-posta adresleri &quot;öncelikli müşteri / patron /
                sürekli iş ortağı&quot;? Cevaplai bu kişilerin maillerine
                otomatik taslak yazar, atlamaz.
              </p>
              <p className="mt-3 text-[15px] text-ink-500">
                Örnek: <Code>boss@kurum.com</Code>,{" "}
                <Code>@onemlimusterimiz.com</Code> (domain bazlı),{" "}
                <Code>avukatim@hukukfirmasi.com</Code>
              </p>
            </section>

            {/* SECTION 6 — İletişim & gizlilik */}
            <section id="iletisim" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                6. İletişim & gizlilik
              </h2>
              <ul className="mt-4 ml-5 list-disc space-y-2 text-[15px] leading-relaxed text-ink-700">
                <li>
                  Cevaplai&apos;da hesabını silmek istediğinde nasıl haber
                  vereceksin? (e-posta, Signal, vb.)
                </li>
                <li>
                  Bot&apos;a erişimin başkalarına geçer mi? (örn. ofis ekibi
                  paylaşıyor mu?)
                </li>
                <li>
                  Spesifik bir saatten sonra (örn. mesai dışı) otomasyon kapansın
                  mı?
                </li>
              </ul>
            </section>

            {/* SECTION 7 — Checklist */}
            <section id="checklist" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                7. Checklist{" "}
                <span className="text-base font-medium text-ink-400">
                  (kopyala-cevapla)
                </span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Aşağıdaki bloğu olduğu gibi kopyala, boşlukları doldur, tek
                mesajla bana gönder:
              </p>
              <pre className="mt-5 overflow-x-auto rounded-2xl border border-ink-200 bg-ink-900 p-5 text-[13.5px] leading-relaxed text-ink-100 sm:p-6">
                <code className="font-mono">{checklist}</code>
              </pre>
            </section>

            {/* SECTION 8 — Sonraki adım */}
            <section id="sonra" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                8. Sonraki adım
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Bilgileri yolladıktan sonra ben:
              </p>
              <ol className="mt-4 ml-5 list-decimal space-y-2 text-[15px] leading-relaxed text-ink-700 marker:font-semibold marker:text-brand-600">
                <li>
                  VPS&apos;te{" "}
                  <Code>./scripts/onboard.sh &lt;kullanıcı_adın&gt;</Code> ile
                  asistanı kuracağım <em className="text-ink-500">(~5 dakika)</em>
                </li>
                <li>
                  Mail hesabını bağlayacağım{" "}
                  <em className="text-ink-500">(~2 dakika)</em>
                </li>
                <li>
                  <Code>IDENTITY.md</Code>&apos;yi kişiselleştireceğim{" "}
                  <em className="text-ink-500">(~5 dakika)</em>
                </li>
                <li>
                  Sana Telegram bot username + test mail talimatını
                  yollayacağım
                </li>
                <li>
                  İlk gerçek mail geldiğinde Telegram&apos;da onay mesajı
                  düşecek, sen butonla onaylayıp gönder
                </li>
              </ol>
              <Callout tone="info">
                <strong>Süre özeti:</strong> Sende: 30–45 dk (hesap açma + bilgi
                toplama). Bende: ~15 dk (sistem kurulumu).
              </Callout>

              <div className="mt-10 flex flex-col items-start gap-3 border-t border-ink-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-500">
                  Bilgileri yollamak için:
                </p>
                <a
                  href="mailto:destek@bilsemc2.com?subject=Cevaplai%20Onboarding%20—%20Hazırlık%20Bilgileri"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  destek@bilsemc2.com&apos;a yaz
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
