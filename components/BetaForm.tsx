"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface RadioOption {
  value: string;
  label: string;
}

interface CheckboxOption {
  value: string;
  label: string;
  tone: "brand" | "accent";
}

const providers: RadioOption[] = [
  { value: "gmail", label: "Gmail" },
  { value: "outlook", label: "Outlook / Microsoft 365" },
  { value: "icloud", label: "iCloud" },
  { value: "diger", label: "Diğer / Kurumsal" },
];

const channels: CheckboxOption[] = [
  { value: "mail", label: "E-posta", tone: "brand" },
  { value: "whatsapp", label: "WhatsApp", tone: "accent" },
  { value: "telegram", label: "Telegram", tone: "brand" },
];

function encodeFormData(formData: FormData): string {
  const entries: string[] = [];
  formData.forEach((value, key) => {
    if (typeof value === "string") {
      entries.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(value),
      );
    }
  });
  return entries.join("&");
}

export default function BetaForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      router.push("/thanks");
    } catch (err) {
      setSubmitting(false);
      setError(
        "Gönderim başarısız oldu. Lütfen birkaç saniye sonra tekrar dene.",
      );
      console.error("Form submission error:", err);
    }
  }

  return (
    <section
      id="beta"
      aria-labelledby="beta-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/60 to-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Beta
          </span>
          <h2
            id="beta-title"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Sıraya katıl, ilk grupla beraber dene.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Beta süresince ücretsiz. Hesabını birlikte kuruyoruz, ilk
            cevaplarını birlikte test ediyoruz.
          </p>
        </div>

        <form
          name="beta-signup"
          method="POST"
          action="/__forms.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <input type="hidden" name="form-name" value="beta-signup" />
          <p className="hidden">
            <label>
              Doldurma:{" "}
              <input
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </p>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-ink-900"
            >
              E-posta <span className="text-brand-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="ornek@firmaniz.com"
              className="mt-2 block w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-ink-900">
              Hangi mail sağlayıcısını kullanıyorsun?
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {providers.map((p) => (
                <label
                  key={p.value}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-700 shadow-sm transition hover:border-brand-300 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700"
                >
                  <input
                    type="radio"
                    name="provider"
                    value={p.value}
                    className="h-4 w-4 accent-brand-600 focus:outline-none"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-ink-900">
              Hangi kanallarla haberleşiyorsun?{" "}
              <span className="font-normal text-ink-400">
                (birden fazla seçebilirsin)
              </span>
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {channels.map((c) => {
                const accent =
                  c.tone === "accent"
                    ? "has-[:checked]:border-accent-500 has-[:checked]:bg-accent-50 has-[:checked]:text-accent-700"
                    : "has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700";
                return (
                  <label
                    key={c.value}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-700 shadow-sm transition hover:border-brand-300 ${accent}`}
                  >
                    <input
                      type="checkbox"
                      name="channels"
                      value={c.value}
                      className="h-4 w-4 accent-brand-600 focus:outline-none"
                    />
                    {c.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-ink-900"
            >
              Mesaj{" "}
              <span className="font-normal text-ink-400">(opsiyonel)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Kullanım senaryonuzu 1-2 cümleyle yazın — beta erişimini önceliklendirmemize yardımcı olur."
              className="mt-2 block w-full resize-y rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              >
                <path d="M21 12a9 9 0 1 1-6.2-8.6" />
              </svg>
            )}
            {submitting ? "Gönderiliyor…" : "Sıraya katıl"}
          </button>

          <p className="mt-4 text-center text-xs text-ink-400">
            E-posta adresin yalnızca beta erişimi için kullanılır. Spam yok,
            satılmaz.
          </p>
        </form>
      </div>
    </section>
  );
}
