interface Feature {
  title: string;
  body: string;
  icon: React.ReactNode;
  tone: "brand" | "accent";
}

const iconClass = "h-5 w-5";

const features: Feature[] = [
  {
    title: "3 kanal birden",
    body: "Mail, WhatsApp ve Telegram — tek bir asistan, tüm müşteri trafiği.",
    tone: "brand",
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
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 8l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "VIP listesi",
    body: "Önemli gönderenleri işaretle; onlardan gelen her şey önce sana ulaşır.",
    tone: "accent",
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
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.9L12 3Z" />
      </svg>
    ),
  },
  {
    title: "Otomatik DM cevap",
    body: "WhatsApp ve Telegram'a gelen müşteri sorularını AI senin verdiğin bilgilerle anında yanıtlar.",
    tone: "accent",
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
        <path d="M21 12a8 8 0 1 1-3.1-6.3" />
        <path d="m21 4-4 4M21 12V8h-4" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    ),
  },
  {
    title: "E-posta için onay",
    body: "Mail cevapları Telegram'dan ✅ Gönder ile çıkar. Gönder tuşu daima sende.",
    tone: "brand",
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
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Çoklu hesap",
    body: "Gmail, Outlook, iCloud, Yandex, kurumsal — birden fazla hesap aynı anda.",
    tone: "brand",
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
        <circle cx="9" cy="9" r="3.5" />
        <path d="M2 20c.6-3.4 3.5-5.5 7-5.5s6.4 2.1 7 5.5" />
        <circle cx="17" cy="7" r="2.5" />
        <path d="M14.5 14c1.7-.6 3-.9 4.5-.9 1.7 0 3 .6 3 1.5" />
      </svg>
    ),
  },
  {
    title: "Newsletter sessize",
    body: "Aboneliklerin ve promosyon mailleri otomatik mark_read — kutu sade kalır.",
    tone: "accent",
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
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10 21a2 2 0 0 0 4 0" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    title: "Çoklu dil",
    body: "TR, EN, DE ve fazlası — gelen mesajın diline göre otomatik cevap.",
    tone: "brand",
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
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Tam veri kontrolü",
    body: "Kendi VPS'inde çalıştır (Tier 1) ya da bulutu seç (Tier 2). Hesabını dilediğinde sil.",
    tone: "accent",
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
        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="ozellikler"
      aria-labelledby="features-title"
      className="relative bg-ink-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Özellikler
          </span>
          <h2
            id="features-title"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Bir mail asistanından beklediğin her şey, üç kanalda birden.
          </h2>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const ring =
              feature.tone === "brand"
                ? "bg-brand-50 text-brand-700 ring-brand-100"
                : "bg-accent-50 text-accent-700 ring-accent-300/40";

            return (
              <li
                key={feature.title}
                className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-md"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${ring}`}
                >
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {feature.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
