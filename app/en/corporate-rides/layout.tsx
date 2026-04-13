import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Rides Zvolen | Invoice Taxi for Companies and Hotels",
  description:
    "Corporate taxi rides in Zvolen with invoice billing. For companies, hotels, and offices we can arrange recurring rides, clear B2B terms, and a 25% discount on approved corporate transport.",
  keywords: [
    "corporate taxi zvolen",
    "invoice taxi zvolen",
    "business taxi zvolen",
    "hotel transfer zvolen",
    "b2b taxi slovakia",
  ],
  openGraph: {
    title: "Corporate Rides Zvolen | Invoice Taxi for Companies",
    description:
      "Invoice billing, recurring rides, and 25% discount on approved corporate taxi transport in Zvolen.",
    url: "https://zvolen-taxi.sk/en/corporate-rides",
    siteName: "Taxi Zvolen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate rides Taxi Zvolen",
      },
    ],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/corporate-rides",
    languages: {
      sk: "https://zvolen-taxi.sk/firemne-jazdy",
      en: "https://zvolen-taxi.sk/en/corporate-rides",
    },
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
