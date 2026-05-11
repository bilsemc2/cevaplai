import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teşekkürler",
  description: "Cevaplai beta sırasına katıldığınız için teşekkürler.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-brand-50 via-white to-white px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 ring-1 ring-accent-300/60">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-accent-600"
            aria-hidden="true"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Teşekkürler, kaydın bize ulaştı.
        </h1>

        <p className="mt-4 text-lg text-ink-500">
          Beta sıran geldiğinde{" "}
          <strong className="text-ink-900">destek@bilsemc2.com</strong>{" "}
          üzerinden sana yazacağız. Bağlantı kurulumunu birlikte yapacağız.
        </p>

        <p className="mt-3 text-sm text-ink-400">
          E-posta birkaç dakika içinde gelmezse, spam klasörünü kontrol
          etmeyi unutma.
        </p>

        <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50/60 p-5 text-left sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Hazırlık önerisi
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
            Sıran gelmeden, onboarding görüşmesi için ihtiyacın olacak
            bilgileri (Telegram bot, Gemini API key, mail hesap bilgileri,
            kişiselleştirme tercihleri) önceden hazırlamak istersen{" "}
            <Link
              href="/hazirlik"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              hazırlık listesine bak
            </Link>
            . Kurulum 30-45 dk sürer, hazırsan hızlıca tamamlanır.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/hazirlik"
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            Hazırlık listesini aç
          </Link>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-xl border border-ink-200 bg-white px-6 py-3 text-base font-semibold text-ink-700 transition hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    </main>
  );
}
