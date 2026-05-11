interface Step {
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  accent: "brand" | "accent";
}

const iconClass = "h-6 w-6";

const steps: Step[] = [
  {
    num: "01",
    title: "Bağla",
    body: "Mail (IMAP/SMTP), WhatsApp (Multi-Device) ve Telegram bot'unu birkaç dakikada bağla. Gmail, Outlook, kurumsal — fark etmez.",
    accent: "brand",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 1 0-7.07-7.07l-1.41 1.41" />
        <path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 1 0 7.07 7.07l1.41-1.41" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Bilgilendir",
    body: "VIP gönderenler, sık sorulan müşteri soruları, ürün ve hizmet bilgileri — AI'ın kullanacağı her şeyi tek seferde tanımla.",
    accent: "accent",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M9 7h7M9 11h5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI çalışır",
    body: "Gelen e-postaya gelen dilde taslak yazar. WhatsApp ve Telegram'a gelen müşteri mesajlarını ise anında cevaplar.",
    accent: "brand",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Onayla & gönder",
    body: "E-posta cevapları Telegram'dan ✅ Gönder ile onayınla çıkar. WhatsApp ve Telegram DM cevapları zaten otomatik gitmiştir.",
    accent: "accent",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="m4 12 5 5L20 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      aria-labelledby="how-title"
      className="relative bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Nasıl çalışır
          </span>
          <h2
            id="how-title"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            4 adımda mail kutunuz ve mesajlarınız sizin için çalışır.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Bağla, bilgilendir, gerisini Cevaplai'ye bırak. E-posta cevapları
            her zaman onayından geçer.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block"
          />

          {steps.map((step) => {
            const ringColor =
              step.accent === "brand"
                ? "ring-brand-200 bg-brand-50 text-brand-700"
                : "ring-accent-300/70 bg-accent-50 text-accent-700";
            const numColor =
              step.accent === "brand" ? "text-brand-600" : "text-accent-600";

            return (
              <li key={step.num} className="relative">
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${ringColor} shadow-sm`}
                >
                  {step.icon}
                </div>
                <div className="mt-5">
                  <span
                    className={`text-xs font-semibold tracking-widest ${numColor}`}
                  >
                    {step.num}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
