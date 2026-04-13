import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firemné jazdy Zvolen | Taxi na faktúru, B2B pre firmy a hotely",
  description:
    "Firemné taxi jazdy vo Zvolene na faktúru. Pre firmy, hotely a kancelárie nastavíme B2B spoluprácu, pravidelné jazdy a zľavu 25% na schválené firemné transfery.",
  keywords: [
    "firemné taxi zvolen",
    "taxi na faktúru zvolen",
    "b2b taxi zvolen",
    "firemné jazdy zvolen",
    "hotel taxi zvolen",
  ],
  openGraph: {
    title: "Firemné jazdy Zvolen | Taxi na faktúru",
    description:
      "Jazdy na faktúru pre firmy, hotely a kancelárie. Zľava 25% na schválené firemné jazdy a pravidelnú spoluprácu.",
    url: "https://zvolen-taxi.sk/firemne-jazdy",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Firemné jazdy Taxi Zvolen",
      },
    ],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/firemne-jazdy",
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
