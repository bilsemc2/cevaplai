type BulletType = "check" | "warn" | "info";

interface Bullet {
  type: BulletType;
  text: string;
}

interface Channel {
  name: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  bullets: Bullet[];
  tone: "brand" | "accent" | "brand-strong";
  badge?: string;
}

const channels: Channel[] = [
  {
    name: "E-posta",
    role: "Onaylı cevap",
    description:
      "Gelen mailleri tarar, dilini algılar, taslak yazar — son söz hep sende.",
    tone: "brand",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 8l9 6 9-6" />
      </svg>
    ),
    bullets: [
      {
        type: "check",
        text: "IMAP/SMTP — Gmail, Outlook, iCloud, Yandex, kurumsal",
      },
      {
        type: "check",
        text: "VIP / newsletter / promosyon otomatik sınıflandırma",
      },
      { type: "check", text: "Taslak gelen mailin diliyle eşleşir" },
      {
        type: "check",
        text: "Onay verince SMTP üzerinden gerçek mail olarak çıkar",
      },
    ],
  },
  {
    name: "WhatsApp",
    role: "Otomatik yanıt",
    description:
      "Müşterilerinden gelen WhatsApp mesajlarına AI senin verdiğin bilgilerle anında cevap yazar.",
    tone: "accent",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.4A9 9 0 0 1 21 12Z" />
        <path d="M8 10c0 4 4 8 8 8l1.5-2.5a1 1 0 0 0-.5-1.4l-2-.8a1 1 0 0 0-1.2.3l-.4.5c-1.6-.7-2.9-2-3.6-3.6l.5-.4a1 1 0 0 0 .3-1.2l-.8-2A1 1 0 0 0 8.4 8.5L6 10" />
      </svg>
    ),
    bullets: [
      { type: "check", text: "Türkiye'de en yaygın mesajlaşma uygulaması" },
      { type: "check", text: "Telefonundan ayrılmadan tüm trafik tek yerde" },
      { type: "check", text: "Mesaj geçmişin değişmez, sohbet doğal görünür" },
      {
        type: "warn",
        text: "WhatsApp Web (Multi-Device) — telefonun online olması gerekir",
      },
      {
        type: "info",
        text: "Resmi WhatsApp Business API entegrasyonu ileride",
      },
    ],
  },
  {
    name: "Telegram",
    role: "İki görev birden",
    description:
      "Hem müşteri DM'lerini otomatik cevaplar, hem de e-posta taslaklarını onayına sunar.",
    tone: "brand-strong",
    badge: "Hem DM hem mail onayı",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M21 4 3 11l6 2 2 6 4-4 5 4Z" />
        <path d="m9 13 8-6" />
      </svg>
    ),
    bullets: [
      { type: "check", text: "Müşteri DM'lerine WhatsApp gibi otomatik cevap" },
      {
        type: "check",
        text: "Mail onay merkezi: ✅ Gönder / ✏️ Düzelt / 🗑️ Skip butonları",
      },
      {
        type: "check",
        text: "Doğal dil komutları — “VIP listesine X ekle”",
      },
      { type: "check", text: "Çoklu cihaz senkron, grup desteği var" },
      { type: "check", text: "BotFather'dan 1 dakikada ücretsiz token" },
    ],
  },
];

function BulletIcon({ type }: { type: BulletType }) {
  if (type === "check") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 h-4 w-4 shrink-0 text-accent-600"
        aria-hidden="true"
      >
        <path d="m4 10 4 4 8-9" />
      </svg>
    );
  }
  if (type === "warn") {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
        aria-hidden="true"
      >
        <path d="M10 2 2 17h16L10 2Z" />
        <path d="M10 8v4M10 15h0" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-4 w-4 shrink-0 text-ink-400"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="M10 9v5M10 6h0" />
    </svg>
  );
}

export default function Channels() {
  return (
    <section
      id="kanallar"
      aria-labelledby="channels-title"
      className="relative bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Kanallar
          </span>
          <h2
            id="channels-title"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            3 kanal, 3 farklı görev.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Cevaplai her kanalda farklı bir iş yapar. Üçünü birden bağlayabilir,
            sadece birini de seçebilirsin.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {channels.map((channel) => {
            const isHighlight = channel.tone === "brand-strong";
            const iconTone =
              channel.tone === "accent"
                ? "bg-accent-50 text-accent-700 ring-accent-300/60"
                : "bg-brand-50 text-brand-700 ring-brand-200";
            const cardClass = isHighlight
              ? "border-brand-200 bg-gradient-to-b from-brand-50/60 to-white shadow-md ring-1 ring-brand-100"
              : "border-ink-100 bg-white shadow-sm";
            const roleClass =
              channel.tone === "accent"
                ? "text-accent-700 bg-accent-50"
                : "text-brand-700 bg-brand-50";

            return (
              <article
                key={channel.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-md sm:p-7 ${cardClass}`}
              >
                {channel.badge && (
                  <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
                    <span className="h-1 w-1 rounded-full bg-white/80" />
                    {channel.badge}
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${iconTone}`}
                  >
                    {channel.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink-900">
                      {channel.name}
                    </h3>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${roleClass}`}
                    >
                      {channel.role}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                  {channel.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {channel.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <BulletIcon type={bullet.type} />
                      <span className="text-ink-700">{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-400">
          Üç kanal birlikte çalıştığında en hızlı sonuç: e-posta trafiğini onayla
          yönet, müşteri DM'lerini AI'a bırak.
        </p>
      </div>
    </section>
  );
}
