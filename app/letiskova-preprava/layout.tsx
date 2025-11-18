import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letisková preprava Zvolen - Transfer Viedeň €250, Budapešť €170 | TaxiGO",
  description: "Individuálny odvoz na letiská Viedeň (€250), Budapešť (€170), Bratislava (€180), Sliač (€10). Fixné ceny, monitoring letu, pomoc s batožinou. Rezervujte transfer vopred.",
  keywords: [
    "letisková preprava zvolen",
    "taxi letisko viedeň",
    "taxi letisko budapešť",
    "taxi letisko bratislava",
    "taxi letisko sliač",
    "airport transfer zvolen",
    "transfer letisko",
  ],
  openGraph: {
    title: "Letisková preprava Zvolen - Transfer Viedeň €250, Budapešť €170",
    description: "Fixné ceny na všetky letiská. Monitoring letu, pomoc s batožinou.",
    url: "https://zvolen-taxi.sk/letiskova-preprava",
    siteName: "Taxi Zvolen",
    locale: "sk_SK",
    type: "article",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Taxi Zvolen - Letisková preprava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letisková preprava Zvolen",
    description: "Transfer na letiská Viedeň, Budapešť, Bratislava, Sliač.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/letiskova-preprava",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LetiskovaPrepravaLayout({
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
        "name": "Letisková preprava",
        "item": "https://zvolen-taxi.sk/letiskova-preprava"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Letisková preprava",
    "description": "Individuálny odvoz na letiská Viedeň (€250), Budapešť (€170), Bratislava (€180), Sliač (€10). Fixné ceny, monitoring letu.",
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
