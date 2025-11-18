import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi na vlak a autobus Zvolen - Transfer na stanicu načas | +421 902 048 583",
  description: "Potrebujete stihnúť vlak alebo autobus vo Zvolene? Objednajte si taxi s časovou rezervou a dorazte na stanicu načas, bez stresu. Transfer na autobusovú a železničnú stanicu.",
  keywords: [
    "taxi na stanicu zvolen",
    "taxi na vlak zvolen",
    "taxi autobus zvolen",
    "transfer stanica",
    "taxi železničná stanica",
    "taxi autobusová stanica",
  ],
  openGraph: {
    title: "Taxi na vlak a autobus Zvolen - Transfer na stanicu načas",
    description: "Stihnite vlak aj autobus. Taxi na stanicu s časovou rezervou.",
    url: "https://zvolen-taxi.sk/taxi-na-vlak-autobus",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Transfer na stanicu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi na vlak a autobus Zvolen",
    description: "Dorazte na stanicu načas s naším taxi.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/taxi-na-vlak-autobus",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TaxiNaVlakAutobusLayout({
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
        "name": "Taxi na vlak a autobus",
        "item": "https://zvolen-taxi.sk/taxi-na-vlak-autobus"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Taxi na vlak a autobus",
    "description": "Potrebujete stihnúť vlak alebo autobus vo Zvolene? Objednajte si taxi s časovou rezervou a dorazte na stanicu načas.",
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
