import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Nonstop Taxi Service Zvolen | Night & Weekend Available",
  description: "Professional 24/7 nonstop taxi service in Zvolen. Available day and night, weekends and holidays. Call +421 902 048 583 anytime.",
  keywords: ["24/7 taxi zvolen", "nonstop taxi", "night taxi", "weekend taxi", "taxi anytime"],
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/24-7-service",
    languages: {
      sk: "https://zvolen-taxi.sk/nonstop-taxi",
      en: "https://zvolen-taxi.sk/en/24-7-service",
    },
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
