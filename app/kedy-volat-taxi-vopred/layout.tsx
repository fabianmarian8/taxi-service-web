import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kedy volať taxi vopred vo Zvolene - Tipy pre špičky a víkendy | TaxiGO",
  description: "Zistite, kedy vo Zvolene objednať taxi vopred a kedy stačí zavolať na poslednú chvíľu. Ranné špičky, víkendy, nádražia a podujatia - praktické rady pre bezproblémovú prepravu.",
  keywords: [
    "taxi zvolen vopred",
    "objednať taxi vopred zvolen",
    "taxi ranné špičky",
    "taxi víkend zvolen",
    "rezervácia taxi",
    "taxi na podujatie",
  ],
  openGraph: {
    title: "Kedy volať taxi vopred vo Zvolene - Tipy pre špičky a víkendy",
    description: "Ranné špičky, víkendy, nádražia a podujatia - zistite, kedy objednať taxi vopred.",
    url: "https://zvolen-taxi.sk/kedy-volat-taxi-vopred",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Rezervácia vopred",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedy volať taxi vopred vo Zvolene",
    description: "Praktické rady pre rezerváciu taxi počas špičiek a víkendov.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/kedy-volat-taxi-vopred",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KedyVolatTaxiVopredLayout({
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
        "name": "Kedy volať taxi vopred",
        "item": "https://zvolen-taxi.sk/kedy-volat-taxi-vopred"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kedy volať taxi vopred a kedy hneď",
    "description": "Zistite, kedy vo Zvolene objednať taxi vopred a kedy stačí zavolať na poslednú chvíľu. Ranné špičky, víkendy, nádražia a podujatia.",
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
