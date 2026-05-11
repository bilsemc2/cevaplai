type ChannelTag = "mail" | "whatsapp" | "telegram";

interface UseCase {
  persona: string;
  title: string;
  body: string;
  outcome: string;
  channels: ChannelTag[];
  icon: React.ReactNode;
  tone: "brand" | "accent";
}

const iconClass = "h-6 w-6";

const useCases: UseCase[] = [
  {
    persona: "KOBİ · Müşteri destek",
    title: "info@firmaniz.com sessiz değil, dolu",
    body: "Müşteri \"Sipariş #4821 ne durumda?\" diye e-posta atar — Cevaplai senin verdiğin kargo/iade bilgileriyle taslağı yazar, Telegram'dan onaylarsın, mail çıkar. Aynı soruyu WhatsApp'tan soran müşteriye AI doğrudan cevap verir.",
    outcome: "Aynı bilgi, üç kanalda tutarlı cevap.",
    channels: ["mail", "whatsapp", "telegram"],
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
        <path d="M3 21V10a3 3 0 0 1 3-3h2V4h8v3h2a3 3 0 0 1 3 3v11" />
        <path d="M3 21h18M9 21v-6h6v6M9 11h.01M15 11h.01" />
      </svg>
    ),
  },
  {
    persona: "Avukat · Mali müşavir",
    title: "Müşteriye saatler içinde değil, 30 saniyede cevap",
    body: "Müşteri sözleşme revizyonu için e-posta atar — Cevaplai dosyayı okur, taslak hazırlar; Telegram'da ✅ Gönder'e basarsın. Sık sorulan randevu, fatura, dosya durumu soruları WhatsApp'a düşünce AI senin yerine cevaplar.",
    outcome: "Onay yetkin sende, rutin sorular sırtında değil.",
    channels: ["mail", "whatsapp", "telegram"],
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
        <path d="M6 3h12l-1 6H7L6 3Z" />
        <path d="M12 9v6M9 21h6M12 15v6" />
        <path d="M5 9h14M4 6h16" />
      </svg>
    ),
  },
  {
    persona: "Yorucu inbox",
    title: "10.000 abonelik, 1 önemli mail",
    body: "Newsletter, promosyon, otomatik bildirim — Cevaplai hepsini sessizce mark_read yapar. Gerçek müşteri / iş ortağı maili önce sana ulaşır, Telegram'da taslakla bekler.",
    outcome: "Kutu temiz, dikkatin doğru yerde.",
    channels: ["mail", "telegram"],
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
        <path d="M3 6h18M6 6v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6" />
        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M10 11v6M14 11v6" />
      </svg>
    ),
  },
];

const channelMeta: Record<
  ChannelTag,
  { label: string; class: string }
> = {
  mail: {
    label: "E-posta",
    class: "bg-brand-50 text-brand-700 ring-brand-100",
  },
  whatsapp: {
    label: "WhatsApp",
    class: "bg-accent-50 text-accent-700 ring-accent-300/40",
  },
  telegram: {
    label: "Telegram",
    class: "bg-brand-50 text-brand-700 ring-brand-200",
  },
};

export default function UseCases() {
  return (
    <section
      id="senaryolar"
      aria-labelledby="usecases-title"
      className="relative bg-ink-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Senaryolar
          </span>
          <h2
            id="usecases-title"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Cevaplai kimin işini ne kadar kolaylaştırıyor?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {useCases.map((uc) => {
            const iconRing =
              uc.tone === "brand"
                ? "bg-brand-50 text-brand-700 ring-brand-200"
                : "bg-accent-50 text-accent-700 ring-accent-300/60";

            return (
              <article
                key={uc.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${iconRing}`}
                >
                  {uc.icon}
                </div>

                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                  {uc.persona}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-ink-900">
                  {uc.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  {uc.body}
                </p>

                <div className="mt-5 rounded-xl bg-ink-50 p-3 text-sm font-medium text-ink-700">
                  <span className="mr-2 text-accent-600">→</span>
                  {uc.outcome}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-100 pt-4">
                  {uc.channels.map((tag) => {
                    const meta = channelMeta[tag];
                    return (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${meta.class}`}
                      >
                        {meta.label}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
