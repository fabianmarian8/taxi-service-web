import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonstop taxi Zvolen 24/7 - Nočná a víkendová prevádzka | +421 902 048 583",
  description: "Nonstop taxi vo Zvolene k dispozícii 24 hodín denne, 7 dní v týždni. Nočná prevádzka, víkendová služba, sviatky. Vždy k dispozícii pre vašu prepravu.",
  keywords: [
    "nonstop taxi zvolen",
    "taxi 24/7 zvolen",
    "nočné taxi zvolen",
    "víkendové taxi",
    "taxi sviatky",
    "nepretržitá taxislužba",
  ],
  openGraph: {
    title: "Nonstop taxi Zvolen 24/7 - Nočná a víkendová prevádzka",
    description: "K dispozícii nonstop 24/7. Nočná prevádzka, víkendy, sviatky.",
    url: "https://zvolen-taxi.sk/nonstop-taxi",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Nonstop 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonstop taxi Zvolen 24/7",
    description: "Vždy k dispozícii - noc, víkend, sviatky.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/nonstop-taxi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NonstopTaxiLayout({
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
        "name": "Nonstop taxi",
        "item": "https://zvolen-taxi.sk/nonstop-taxi"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Nonstop taxi: čo to znamená v praxi",
    "description": "Nonstop taxi vo Zvolene k dispozícii 24 hodín denne, 7 dní v týždni. Nočná prevádzka, víkendová služba, sviatky.",
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
