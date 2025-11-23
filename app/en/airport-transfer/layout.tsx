import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Transfer Zvolen - Vienna €250, Budapest €170 | TaxiGO",
  description: "Individual airport transfer from Zvolen to Vienna (€250), Budapest (€170), Bratislava (€180), Sliač (€10). Fixed prices, flight monitoring, luggage assistance. Book in advance.",
  keywords: [
    "airport transfer zvolen",
    "taxi vienna airport",
    "taxi budapest airport",
    "taxi bratislava airport",
    "taxi sliac airport",
    "airport shuttle zvolen",
    "airport taxi",
  ],
  openGraph: {
    title: "Airport Transfer Zvolen - Vienna €250, Budapest €170",
    description: "Fixed prices to all airports. Flight monitoring, luggage assistance.",
    url: "https://zvolen-taxi.sk/en/airport-transfer",
    siteName: "Taxi Zvolen",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Airport Transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airport Transfer Zvolen",
    description: "Transfer to Vienna, Budapest, Bratislava, Sliač airports.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/en/airport-transfer",
    languages: {
      sk: "https://zvolen-taxi.sk/letiskova-preprava",
      en: "https://zvolen-taxi.sk/en/airport-transfer",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AirportTransferLayout({
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
        "name": "Home",
        "item": "https://zvolen-taxi.sk/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Airport Transfer",
        "item": "https://zvolen-taxi.sk/en/airport-transfer"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Airport Transfer",
    "description": "Individual airport transfer to Vienna (€250), Budapest (€170), Bratislava (€180), Sliač (€10). Fixed prices, flight monitoring.",
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
    "dateModified": "2025-11-23"
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
