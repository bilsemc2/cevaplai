import type { Metadata } from "next";

export const SITE_URL = "https://cevaplai.com";
export const SITE_NAME = "Cevaplai";
export const SITE_DESCRIPTION =
  "Cevaplai, müşteri iletişiminizi yapay zeka ile yöneten asistandır. WhatsApp ve Telegram mesajlarını otomatik cevaplar, e-posta taslaklarını Telegram'dan onayınıza sunar.";

const SITE_TITLE =
  "Cevaplai — Mail, WhatsApp ve Telegram için yapay zeka asistanı";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Cevaplai",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "yapay zeka mail asistanı",
    "AI email asistanı",
    "WhatsApp otomatik cevap",
    "Telegram bot otomatik cevap",
    "müşteri iletişim asistanı",
    "Gemini email",
    "IMAP otomasyonu",
    "müşteri destek AI",
  ],
  authors: [{ name: "Cevaplai" }],
  creator: "Cevaplai",
  publisher: "Cevaplai",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og_cevaplai.png",
        width: 1200,
        height: 630,
        alt: "Cevaplai — mail, WhatsApp ve Telegram için yapay zeka asistanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og_cevaplai.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
