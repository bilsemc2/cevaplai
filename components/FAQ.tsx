interface QA {
  q: string;
  a: React.ReactNode;
}

const qas: QA[] = [
  {
    q: "Mail içeriğim güvende mi?",
    a: (
      <>
        Maillerin yalnızca taslak üretmek için Gemini'ye gönderilir, üçüncü
        tarafla paylaşılmaz. Tier 1'de tüm akış senin VPS'inde çalışır; Tier
        2'de bulut kullanılır, depolanan veriler şifrelenir. Hesabını dilediğin
        an silebilirsin.
      </>
    ),
  },
  {
    q: "Hangi mail sağlayıcılarını destekliyor?",
    a: (
      <>
        Gmail, Outlook / Microsoft 365, iCloud, Yandex ve IMAP/SMTP destekleyen
        her kurumsal mail sunucusu. Birden fazla hesabı aynı anda tek
        Cevaplai'ye bağlayabilirsin.
      </>
    ),
  },
  {
    q: "WhatsApp resmi destek mi?",
    a: (
      <>
        Şu anda WhatsApp Web (Multi-Device) yöntemi kullanılır — telefonunun
        online olması gerekir. Resmi <em>WhatsApp Business API</em>{" "}
        entegrasyonu ileride eklenecek. Telegram tarafı ise tamamen resmi Bot
        API üzerinden çalışır.
      </>
    ),
  },
  {
    q: "Telegram bot'unu nasıl alırım?",
    a: (
      <>
        Telegram'da <strong>@BotFather</strong>'a yazıp <code>/newbot</code>{" "}
        komutuyla 1 dakikada ücretsiz token alabilirsin. Onboarding sırasında
        adımları gösteriyoruz; teknik bilgi gerekmiyor.
      </>
    ),
  },
  {
    q: "Otomatik cevap atılıyor mu?",
    a: (
      <>
        Kanala göre değişir.{" "}
        <strong>E-posta cevapları her zaman onayından geçer</strong> — Telegram
        üzerinden ✅ Gönder'e basana kadar hiçbir mail gönderilmez.{" "}
        <strong>WhatsApp ve Telegram DM'leri</strong> ise senin önceden
        verdiğin bilgilerle otomatik cevaplanır. Bu yüzden{" "}
        <em>bilgilendirme</em> adımı önemli — AI ne bilirse onu söyler.
      </>
    ),
  },
  {
    q: "Cevaplar hangi dilde yazılır?",
    a: (
      <>
        Gelen mesajın diline göre otomatik. Türkçe gelene Türkçe, İngilizce
        gelene İngilizce, Almanca'ya Almanca — desteklenen tüm dillerde aynı
        akış.
      </>
    ),
  },
  {
    q: "Fiyat nasıl olacak?",
    a: (
      <>
        Beta süresi boyunca ücretsiz. Fiyatlandırma kanal sayısına ve aylık
        mesaj hacmine göre belirlenecek; beta kullanıcıları erken kuş
        indiriminden yararlanır.
      </>
    ),
  },
  {
    q: "Verilerimi silebilir miyim?",
    a: (
      <>
        Evet, hesabını ve tüm verilerini dilediğin an silebilirsin. Silme
        talebinden sonra 30 gün içinde yedekler dahil her şey kalıcı olarak
        temizlenir.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section
      id="sss"
      aria-labelledby="faq-title"
      className="relative bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            SSS
          </span>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Sık sorulan sorular
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Aklındaki ilk sorulara hızlı cevaplar. Daha fazlası için{" "}
            <a
              href="mailto:destek@cevaplai.com"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              destek@cevaplai.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-sm">
          {qas.map((item, i) => (
            <details
              key={i}
              className="group px-5 py-4 sm:px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink-900 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-brand-500">
                <span>{item.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
