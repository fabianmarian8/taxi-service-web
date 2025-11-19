import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ako podať sťažnosť alebo reklamáciu - Taxi Zvolen | TaxiGO",
  description: "Neboli ste spokojní s jazdou? Zistite, ako podať sťažnosť na taxi službu vo Zvolene, čo priložiť a ako prebieha vyhodnotenie. Férový prístup ku každej reklamácii.",
  keywords: [
    "sťažnosť taxi zvolen",
    "reklamácia taxi",
    "vrátenie peňazí taxi",
    "ako sa sťažovať taxi",
    "reklamačný poriadok",
    "kompenzácia taxi",
  ],
  openGraph: {
    title: "Ako podať sťažnosť alebo reklamáciu - Taxi Zvolen",
    description: "Postup pre podanie sťažnosti a vrátenie. Férové vyhodnotenie každej reklamácie.",
    url: "https://zvolen-taxi.sk/ako-podat-staznost",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Reklamácia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ako podať sťažnosť - Taxi Zvolen",
    description: "Postup pre podanie reklamácie a vrátenie peňazí.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/ako-podat-staznost",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AkoPodatStaznostLayout({
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
        "name": "Ako podať sťažnosť",
        "item": "https://zvolen-taxi.sk/ako-podat-staznost"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ako podať sťažnosť alebo požiadať o vrátenie",
    "description": "Neboli ste spokojní? Tu je postup, ako podať sťažnosť na taxi službu vo Zvolene, čo priložiť a ako prebieha vyhodnotenie.",
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
