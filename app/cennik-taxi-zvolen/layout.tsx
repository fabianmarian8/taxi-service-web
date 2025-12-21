import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenník Taxi Zvolen | Transparentné ceny prepravy po celom Slovensku",
  description:
    "Kompletný cenník taxi prepravy zo Zvolena do všetkých veľkých miest Slovenska vrátane Bratislavy, Košíc a Žiliny. Transparentné ceny za kilometer a fixné sadzby bez skrytých poplatkov.",
  keywords: [
    "cenník taxi zvolen",
    "zvolen bratislava taxi",
    "zvolen košice taxi",
    "zvolen žilina taxi",
    "zvolen banská bystrica taxi",
    "zvolen nitra taxi",
    "zvolen poprad taxi",
    "zvolen martin taxi",
    "zvolen trenčín taxi",
    "zvolen prešov taxi",
    "zvolen trnava taxi",
    "zvolen liptovský mikuláš taxi",
    "zvolen ružomberok taxi",
    "zvolen lučenec taxi",
    "zvolen brezno taxi",
    "zvolen detva taxi",
    "zvolen krupina taxi",
    "zvolen žiar nad hronom taxi",
    "taxi cena zvolen",
    "preprava zvolen cena",
    "taxi zo zvolena",
    "medzimestská preprava zvolen",
    "diaľková preprava zvolen",
    "taxi ceny slovensko",
  ],
  authors: [{ name: "Taxi Zvolen" }],
  creator: "Taxi Zvolen",
  publisher: "Taxi Zvolen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://zvolen-taxi.sk/cennik-taxi-zvolen",
    siteName: "Taxi Zvolen",
    title: "Cenník Taxi Zvolen | Transparentné ceny prepravy",
    description:
      "Kompletný cenník taxi prepravy zo Zvolena. Zvolen Bratislava taxi, Zvolen Košice taxi, Zvolen Žilina taxi. Transparentné, vopred dohodnuté fixné ceny bez prekvapení.",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cenník Taxi Zvolen - ceny prepravy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenník Taxi Zvolen | Transparentné ceny",
    description: "Kompletný cenník taxi zo Zvolena. Transparentné ceny do všetkých veľkých miest SR.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/cennik-taxi-zvolen",
    languages: {
      "sk-SK": "https://zvolen-taxi.sk/cennik-taxi-zvolen",
    },
  },
  category: "transportation",
  other: {
    "geo.region": "SK-BC",
    "geo.placename": "Zvolen",
    "geo.position": "48.5762;19.1363",
    "ICBM": "48.5762, 19.1363",
  },
};

// 50 najväčších miest Slovenska
const mestaSlovensko = [
  "Bratislava", "Košice", "Prešov", "Žilina", "Banská Bystrica", "Nitra", "Trnava", "Martin", "Trenčín", "Poprad",
  "Prievidza", "Považská Bystrica", "Nové Zámky", "Spišská Nová Ves", "Michalovce", "Komárno", "Levice", "Humenné",
  "Bardejov", "Liptovský Mikuláš", "Ružomberok", "Piešťany", "Lučenec", "Topoľčany", "Čadca", "Dubnica nad Váhom",
  "Dunajská Streda", "Vranov nad Topľou", "Partizánske", "Rimavská Sobota", "Snina", "Dolný Kubín", "Trebišov",
  "Sereď", "Hlohovec", "Šaľa", "Malacky", "Galanta", "Pezinok", "Svidník", "Rožňava", "Detva", "Krupina",
  "Žiar nad Hronom", "Brezno", "Handlová", "Nová Baňa", "Púchov", "Bánovce nad Bebravou", "Stará Ľubovňa"
];

// JSON-LD structured data pre vyhľadávače
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://zvolen-taxi.sk/cennik-taxi-zvolen",
      "url": "https://zvolen-taxi.sk/cennik-taxi-zvolen",
      "name": "Cenník Taxi Zvolen - Ceny prepravy do 50 miest Slovenska",
      "description": "Kompletný cenník taxi prepravy zo Zvolena do všetkých veľkých miest Slovenska vrátane Bratislavy, Košíc, Žiliny a ďalších.",
      "isPartOf": {
        "@id": "https://zvolen-taxi.sk/#website"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Domov",
            "item": "https://zvolen-taxi.sk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cenník Taxi Zvolen",
            "item": "https://zvolen-taxi.sk/cennik-taxi-zvolen"
          }
        ]
      }
    },
    {
      "@type": "TaxiService",
      "@id": "https://zvolen-taxi.sk/#taxiservice",
      "name": "Taxi Zvolen - Medzimestská preprava",
      "description": "Taxislužba Zvolen - špecializovaná preprava osôb do všetkých miest SR.",
      "telephone": "+421902048583",
      "url": "https://zvolen-taxi.sk",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zvolen",
        "addressRegion": "Banskobystrický kraj",
        "postalCode": "960 01",
        "addressCountry": "SK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.5762,
        "longitude": 19.1363
      },
      "areaServed": {
        "@type": "Country",
        "name": "Slovakia"
      },
      "priceRange": "€€",
      "serviceType": "Taxi",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Medzimestská preprava zo Zvolena",
        "itemListElement": mestaSlovensko.map((mesto) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Taxi Zvolen - ${mesto}`,
            "description": `Profesionálna taxi preprava na trase Zvolen - ${mesto} a späť.`
          }
        }))
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+421902048583",
          "contactType": "reservations",
          "availableLanguage": ["Slovak", "English"]
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Poskytujete taxi prepravu zo Zvolena do iných miest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Áno, špecializujeme sa na medzimestskú prepravu zo Zvolena do všetkých 50 najväčších miest Slovenska za transparentné ceny."
          }
        },
        {
          "@type": "Question",
          "name": "Ako si objednám diaľkové taxi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diaľkové taxi si môžete objednať telefonicky alebo cez WhatsApp na čísle +421 902 048 583. Odporúčame rezerváciu aspoň pár hodín vopred."
          }
        },
        {
          "@type": "Question",
          "name": "Môžem v taxi zo Zvolena platiť kartou?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Áno, akceptujeme platbu v hotovosti aj kartou. Pri dlhších trasách je možná aj platba na faktúru."
          }
        }
      ]
    }
  ]
};

export default function CennikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}