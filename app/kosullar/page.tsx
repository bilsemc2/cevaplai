import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "Cevaplai kullanım koşulları: hizmet kapsamı, kullanıcı sorumlulukları, fesih ve sınırlar. Hazırlanıyor.",
  robots: { index: false, follow: false },
};

export default function KosullarPage() {
  return (
    <LegalShell
      title="Kullanım Koşulları"
      intro="Cevaplai hizmetinin kullanım koşulları (kapsam, kullanıcı sorumlulukları, hesap askıya alma ve fesih, mesul olmadığımız durumlar) yakında burada yayınlanacak. Beta dönemi koşullarımız e-posta üzerinden bildirilmiştir."
    />
  );
}
