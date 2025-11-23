import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Order Taxi Without App | Zvolen Taxi Service",
  description: "Easy taxi booking without apps. Call, SMS, or WhatsApp us at +421 902 048 583. Quick response, fixed prices, professional service 24/7.",
  keywords: [
    "order taxi zvolen",
    "book taxi without app",
    "taxi phone booking",
    "whatsapp taxi zvolen",
    "call taxi",
  ],
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/how-to-order-taxi",
    languages: {
      sk: "https://zvolen-taxi.sk/ako-objednat-taxi-bez-aplikacie",
      en: "https://zvolen-taxi.sk/en/how-to-order-taxi",
    },
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
