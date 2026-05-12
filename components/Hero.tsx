import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-accent-100/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-medium text-brand-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Beta · Türkçe · 3 kanal
            </span>

            <h1
              id="hero-title"
              className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              <span className="text-brand-600">Mail</span>,{" "}
              <span className="text-accent-600">WhatsApp</span> ve{" "}
              <span className="text-brand-600">Telegram</span>
              &apos;a gelen her mesaj için yapay zeka asistanı.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-ink-500 sm:text-xl">
              Cevaplai 3 kanaldaki müşteri trafiğinizi tek yerden yönetir.{" "}
              <span className="font-semibold text-accent-700">WhatsApp</span> ve{" "}
              <span className="font-semibold text-brand-700">Telegram</span>{" "}
              mesajlarını sizin verdiğiniz bilgilerle anında cevaplar.
              E-posta cevaplarını Telegram&apos;dan onayınıza sunar.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#beta"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Beta&apos;ya katıl
              </Link>
              <a
                href="mailto:destek@bilsemc2.com?subject=Cevaplai%20—%20İletişim"
                className="inline-flex w-full items-center justify-center rounded-xl border border-ink-200 bg-white px-6 py-3 text-base font-semibold text-ink-700 transition hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                İletişime geç
              </a>
            </div>

            <p className="mt-6 text-sm text-ink-400">
              WhatsApp ve Telegram&apos;da AI sizin için konuşur. E-posta
              cevaplarında gönder tuşu daima sizde.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative rounded-3xl bg-brand-50 ring-1 ring-brand-200 shadow-2xl">
              <div className="overflow-hidden rounded-3xl">
                <video
                  src="/lai.webm"
                  poster="/lai-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Cevaplai tanıtım videosu"
                  className="block aspect-[1080/1500] h-full w-full object-cover"
                >
                  Tarayıcınız videoyu oynatamıyor.{" "}
                  <a href="/lai.webm">Videoyu indir.</a>
                </video>
              </div>

              <span className="absolute -top-3 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-300 animate-pulse" />
                Cevaplai · canlı
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
