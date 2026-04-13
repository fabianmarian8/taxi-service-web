import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platba v taxíku Zvolen: Karta, Hotovosť, Faktúra | TaxiGO",
  description: "Zaplaťte v taxi Zvolen hotovosťou, prevodom alebo na faktúru. Firemní zákazníci môžu pri schválených jazdách získať zľavu 25%.",
  keywords: [
    "platba taxi zvolen",
    "platba kartou taxi",
    "taxi faktúra",
    "platba v taxíku",
    "apple pay taxi",
    "google pay taxi",
    "faktúra B2B taxi",
  ],
  openGraph: {
    title: "Platba v taxíku Zvolen: Karta, Hotovosť, Faktúra",
    description: "Platba hotovosťou, prevodom alebo na faktúru. Firemní zákazníci môžu jazdiť na faktúru so zľavou 25%.",
    url: "https://zvolen-taxi.sk/platba-v-taxiku",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Platobné možnosti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platba v taxíku Zvolen",
    description: "Hotovosť, prevod alebo faktúra pre firmy so zľavou 25%.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/platba-v-taxiku",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlatbaVTaxikuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domov",
        "item": "https://zvolen-taxi.sk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Platba v taxíku",
        "item": "https://zvolen-taxi.sk/platba-v-taxiku"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Platba v taxíku: karta, hotovosť, faktúra",
    "description": "Zaplaťte v taxi Zvolen hotovosťou, prevodom alebo na faktúru. Firemní zákazníci môžu jazdiť na faktúru so zľavou 25%.",
    "image": "https://zvolen-taxi.sk/og-image.svg",
    "author": {
      "@type": "Organization",
      "name": "Taxi Zvolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Taxi Zvolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zvolen-taxi.sk/taxigo-logo.webp"
      }
    },
    "datePublished": "2025-11-18",
    "dateModified": "2025-11-18"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
