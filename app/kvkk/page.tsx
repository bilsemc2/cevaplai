import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Cevaplai KVKK kapsamında veri sorumlusu olarak kişisel verilerinizin işlenmesine ilişkin aydınlatma metni. Hazırlanıyor.",
  robots: { index: false, follow: false },
};

export default function KvkkPage() {
  return (
    <LegalShell
      title="KVKK Aydınlatma Metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla hazırladığımız aydınlatma metni yakında burada yayınlanacak. Beta süresince kişisel veri işleme uygulamalarımız hakkında bilgi için bizimle iletişime geçebilirsiniz."
    />
  );
}
