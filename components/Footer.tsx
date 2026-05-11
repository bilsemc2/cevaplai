import Image from "next/image";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const productLinks: FooterLink[] = [
  { label: "Nasıl çalışır", href: "/#nasil-calisir" },
  { label: "Özellikler", href: "/#ozellikler" },
  { label: "Kanallar", href: "/#kanallar" },
  { label: "Senaryolar", href: "/#senaryolar" },
  { label: "SSS", href: "/#sss" },
  { label: "Beta'ya katıl", href: "/#beta" },
];

const contactLinks: FooterLink[] = [
  {
    label: "destek@bilsemc2.com",
    href: "mailto:destek@bilsemc2.com",
    external: true,
  },
];

const legalLinks: FooterLink[] = [
  { label: "KVKK Aydınlatma Metni", href: "#" },
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Kullanım Koşulları", href: "#" },
];

interface SocialIcon {
  label: string;
  href: string;
  path: React.ReactNode;
}

const socials: SocialIcon[] = [
  {
    label: "X (Twitter)",
    href: "https://x.com/bilsemsinavi",
    path: (
      <path d="M18 2h3l-7.5 8.5L22.5 22h-6l-5-6.5L5.5 22H2l8-9L2 2h6l4.5 6Z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ersanicoz",
    path: (
      <>
        <path d="M22.5 7.5a3 3 0 0 0-2.1-2.1C18.4 5 12 5 12 5s-6.4 0-8.4.4A3 3 0 0 0 1.5 7.5C1.1 9.4 1.1 12 1.1 12s0 2.6.4 4.5a3 3 0 0 0 2.1 2.1C5.6 19 12 19 12 19s6.4 0 8.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5Z" />
        <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bilsemc2/",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

function LinkList({ items }: { items: FooterLink[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          {item.external ? (
            <a
              href={item.href}
              className="text-sm text-ink-500 transition hover:text-brand-700"
            >
              {item.label}
            </a>
          ) : (
            <Link
              href={item.href}
              className="text-sm text-ink-500 transition hover:text-brand-700"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Cevaplai — ana sayfa"
              className="inline-flex items-center"
            >
              <Image
                src="/cevaplai.png"
                alt="Cevaplai"
                width={112}
                height={112}
                className="h-28 w-28 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              Mail, WhatsApp ve Telegram için yapay zeka iletişim asistanı.
              Cevaplai, <strong className="text-ink-700">bilsemc2</strong>{" "}
              tarafından geliştirilen bağımsız bir projedir. Türkiye merkezli.
            </p>

            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Ürün">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Ürün
            </h3>
            <LinkList items={productLinks} />
          </nav>

          <nav aria-label="İletişim">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              İletişim
            </h3>
            <LinkList items={contactLinks} />
          </nav>

          <nav aria-label="Yasal">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Yasal
            </h3>
            <LinkList items={legalLinks} />
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {CURRENT_YEAR} Cevaplai · Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-ink-400">
            Made in <span className="font-semibold text-ink-700">Türkiye</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
