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
    label: "X",
    href: "#",
    path: (
      <path d="m4 4 16 16M20 4 4 20" />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2.5 2.5 0 0 1 5 0v4M11 10v7" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    path: (
      <path d="M9 19c-4 1.5-4-2-6-2m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
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
