import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi with Child Seat Zvolen | Safe Family Transport",
  description: "Safe taxi service with child seats available. Family-friendly transport in Zvolen. Book in advance at +421 902 048 583.",
  keywords: ["taxi child seat", "family taxi zvolen", "child car seat", "safe transport children"],
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/child-seat",
    languages: {
      sk: "https://zvolen-taxi.sk/taxi-s-detskou-sedackou",
      en: "https://zvolen-taxi.sk/en/child-seat",
    },
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
