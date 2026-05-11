import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Cevaplai gizlilik politikası: e-posta, WhatsApp ve Telegram verilerinizin nasıl işlendiğine dair açıklama. Hazırlanıyor.",
  robots: { index: false, follow: false },
};

export default function GizlilikPage() {
  return (
    <LegalShell
      title="Gizlilik Politikası"
      intro="Mail, WhatsApp ve Telegram üzerinden işlediğimiz verilerin nasıl saklandığı, kimlerle paylaşıldığı (paylaşılmadığı) ve haklarınız ile ilgili politikamız yakında burada yayınlanacak."
    />
  );
}
