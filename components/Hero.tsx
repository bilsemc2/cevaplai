import Image from "next/image";
import Link from "next/link";

interface MockupProps {
  src: string;
  alt: string;
  channel: string;
  role: string;
  tone: "brand" | "accent";
  rotate: string;
}

function Mockup({ src, alt, channel, role, tone, rotate }: MockupProps) {
  const ring =
    tone === "brand"
      ? "ring-brand-200 bg-brand-50"
      : "ring-accent-300/60 bg-accent-50";
  const badge =
    tone === "brand"
      ? "bg-brand-600 text-white"
      : "bg-accent-600 text-white";

  return (
    <div className={`relative ${rotate}`}>
      <div
        className={`relative aspect-[480/620] w-full rounded-3xl ring-1 ${ring} p-2 shadow-xl`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 320px, 45vw"
          className="object-contain"
        />
        <div
          className={`absolute -top-3 left-4 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge} shadow-sm`}
        >
          <span className="uppercase tracking-wide">{channel}</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="font-medium normal-case opacity-90">{role}</span>
        </div>
      </div>
    </div>
  );
}

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
                href="mailto:destek@cevaplai.com?subject=Cevaplai%20—%20İletişim"
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

          <div className="relative mx-auto w-full max-w-xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Mockup
                src="/mockup-whatsapp.svg"
                alt="WhatsApp'ta müşterinin sorduğu soruya Cevaplai'nin önceden verilmiş bilgilerle yazdığı otomatik cevap"
                channel="WhatsApp"
                role="otomatik"
                tone="accent"
                rotate="lg:-rotate-2"
              />
              <Mockup
                src="/mockup-telegram.svg"
                alt="Telegram'da gelen e-posta için Cevaplai'nin yazdığı taslak ve Gönder, Düzelt, Skip onay butonları"
                channel="Telegram"
                role="mail onayı"
                tone="brand"
                rotate="lg:rotate-2 lg:translate-y-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
