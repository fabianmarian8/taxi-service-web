import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ako si objednať taxi bez aplikácie vo Zvolene | +421 902 048 583",
  description: "Naučte sa ako si objednať taxi vo Zvolene telefonicky, cez SMS alebo WhatsApp bez potreby aplikácie. Jednoduché a rýchle objednanie taxi služby nonstop 24/7.",
  keywords: [
    "taxi zvolen bez aplikácie",
    "objednať taxi telefonicky",
    "taxi SMS",
    "taxi WhatsApp",
    "zvolen taxislužba",
    "objednávka taxi",
  ],
  openGraph: {
    title: "Ako si objednať taxi bez aplikácie vo Zvolene",
    description: "Telefonát, SMS alebo WhatsApp - objednajte si taxi vo Zvolene jednoducho a rýchlo bez aplikácie.",
    url: "https://zvolen-taxi.sk/ako-objednat-taxi-bez-aplikacie",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Objednanie bez aplikácie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ako si objednať taxi bez aplikácie vo Zvolene",
    description: "Telefonát, SMS alebo WhatsApp - objednajte si taxi jednoducho bez aplikácie.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/ako-objednat-taxi-bez-aplikacie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AkoObjednatTaxiBezAplikacieLayout({
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
        "name": "Ako si objednať taxi bez aplikácie",
        "item": "https://zvolen-taxi.sk/ako-objednat-taxi-bez-aplikacie"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ako si objednať taxi bez aplikácie vo Zvolene",
    "description": "Naučte sa ako si objednať taxi vo Zvolene telefonicky, cez SMS alebo WhatsApp bez potreby aplikácie.",
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
