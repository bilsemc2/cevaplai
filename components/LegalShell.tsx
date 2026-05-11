import Link from "next/link";

interface LegalShellProps {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

export default function LegalShell({
  title,
  intro,
  children,
}: LegalShellProps) {
  return (
    <main className="flex-1 bg-gradient-to-b from-brand-50/40 via-white to-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
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

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          {title}
        </h1>

        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-brand-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 8v4M12 16h0" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold text-ink-900">
                Bu sayfa hazırlanıyor.
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                {intro ??
                  "Yasal metnin son hâli yakında burada yayınlanacak. Beta süresince geçerli koşullarımız ve veri uygulamalarımız hakkında daha fazla bilgiyi e-posta üzerinden iletebiliriz."}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Sorularınız için:{" "}
                <a
                  href="mailto:destek@bilsemc2.com"
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  destek@bilsemc2.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {children && (
          <div className="prose prose-ink mt-10 max-w-none text-[15px] leading-relaxed text-ink-700">
            {children}
          </div>
        )}

        <div className="mt-12 border-t border-ink-100 pt-6 text-sm text-ink-400">
          Cevaplai · bilsemc2 tarafından geliştirilen bağımsız bir projedir.
          Türkiye merkezli.
        </div>
      </div>
    </main>
  );
}
