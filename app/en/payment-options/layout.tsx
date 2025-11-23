import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Options | Taxi Zvolen - Card, Cash, Invoice",
  description: "Flexible payment options: cash, bank transfer, or invoice for companies. Transparent pricing with no hidden fees. Contact +421 902 048 583.",
  keywords: ["taxi payment", "card payment taxi", "invoice taxi", "cash payment", "bank transfer"],
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/payment-options",
    languages: {
      sk: "https://zvolen-taxi.sk/platba-v-taxiku",
      en: "https://zvolen-taxi.sk/en/payment-options",
    },
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
