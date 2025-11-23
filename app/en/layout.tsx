import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zvolen Taxi | 24/7 Professional Taxi Service & Airport Transfers",
  description:
    "Professional taxi service in Zvolen. 24/7 airport transfers to Vienna, Budapest, Bratislava. English-speaking drivers. Fixed prices. Call +421 902 048 583",
  authors: [{ name: "Taxi Service Zvolen" }],
  keywords: [
    "taxi Zvolen",
    "taxi service",
    "airport transfer",
    "Zvolen taxi service",
    "taxi to Vienna airport",
    "taxi to Budapest airport",
    "taxi Bratislava",
    "Sliač airport taxi",
    "professional taxi",
    "24/7 taxi",
    "English speaking taxi driver",
    "taxi Slovakia",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://zvolen-taxi.sk/en/",
    title: "Zvolen Taxi | 24/7 Professional Taxi & Airport Transfers",
    description:
      "Professional 24/7 taxi service in Zvolen. Airport transfers to Vienna, Budapest, Bratislava with English-speaking drivers and fixed prices.",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        alt: "Taxi Service Zvolen",
      },
    ],
    locale: "en_US",
    alternateLocale: ["sk_SK"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zvolen Taxi | 24/7 Professional Taxi & Airport Transfers",
    description:
      "Professional 24/7 taxi service in Zvolen. Airport transfers to Vienna, Budapest, Bratislava with English-speaking drivers and fixed prices.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/",
    languages: {
      sk: "https://zvolen-taxi.sk/",
      en: "https://zvolen-taxi.sk/en/",
      "x-default": "https://zvolen-taxi.sk/",
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "lQ4KKwYBn_4OAit-CY6Ye57Iwl19XvSjDe4yfLLPSJc",
  },
  other: {
    "geo.region": "SK-BC",
    "geo.placename": "Zvolen",
    "geo.position": "48.5764;19.1251",
    ICBM: "48.5764, 19.1251",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
