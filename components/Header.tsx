import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/70 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Cevaplai — ana sayfa"
          className="flex items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <Image
            src="/cevaplai.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-ink-900">
            Cevap<span className="text-brand-600">lai</span>
          </span>
        </Link>

        <Link
          href="#beta"
          className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:px-5"
        >
          Beta&apos;ya katıl
        </Link>
      </div>
    </header>
  );
}
