import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi s detskou sedačkou Zvolen - Bezpečná preprava detí | +421 902 048 583",
  description: "Taxi s detskou sedačkou vo Zvolene. Objednajte taxi s vhodnou autosedačkou pre vaše dieťa. Bezpečná a pohodlná preprava detí všetkých vekových kategórií.",
  keywords: [
    "taxi detská sedačka zvolen",
    "taxi s autosedačkou",
    "preprava detí taxi",
    "detská sedačka taxi zvolen",
    "bezpečná preprava detí",
    "taxi pre rodiny",
  ],
  openGraph: {
    title: "Taxi s detskou sedačkou Zvolen - Bezpečná preprava detí",
    description: "Objednajte taxi s vhodnou detskou sedačkou pre vaše dieťa. Bezpečná preprava.",
    url: "https://zvolen-taxi.sk/taxi-s-detskou-sedackou",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Detská sedačka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi s detskou sedačkou Zvolen",
    description: "Bezpečná preprava detí s vhodnou autosedačkou.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/taxi-s-detskou-sedackou",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TaxiSDetskouSedackouLayout({
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
        "name": "Taxi s detskou sedačkou",
        "item": "https://zvolen-taxi.sk/taxi-s-detskou-sedackou"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Taxi s detskou sedačkou",
    "description": "Taxi s detskou sedačkou vo Zvolene. Objednajte taxi s vhodnou autosedačkou pre vaše dieťa. Bezpečná a pohodlná preprava detí.",
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
