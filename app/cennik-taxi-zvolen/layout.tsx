import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenník Taxi Zvolen | Ceny prepravy do 50 miest Slovenska | 0,80€/km",
  description:
    "Kompletný cenník taxi prepravy zo Zvolena do všetkých veľkých miest Slovenska. Zvolen Bratislava taxi 156€, Zvolen Košice taxi 170€, Zvolen Žilina taxi 86€. Transparentné ceny 0,80€/km.",
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
    title: "Cenník Taxi Zvolen | Ceny prepravy do 50 miest Slovenska",
    description:
      "Kompletný cenník taxi prepravy zo Zvolena. Zvolen Bratislava taxi, Zvolen Košice taxi, Zvolen Žilina taxi. Cena 0,80€/km, fixné ceny bez prekvapení.",
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
    title: "Cenník Taxi Zvolen | 50 miest Slovenska",
    description: "Kompletný cenník taxi zo Zvolena. Transparentné ceny 0,80€/km do všetkých veľkých miest SR.",
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

// JSON-LD structured data pre vyhľadávače
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://zvolen-taxi.sk/cennik-taxi-zvolen",
      "url": "https://zvolen-taxi.sk/cennik-taxi-zvolen",
      "name": "Cenník Taxi Zvolen - Ceny prepravy do 50 miest Slovenska",
      "description": "Kompletný cenník taxi prepravy zo Zvolena do všetkých veľkých miest Slovenska.",
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
      "name": "Taxi Zvolen",
      "description": "Taxislužba Zvolen - medzimestská a lokálna preprava osôb",
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
      "priceRange": "0,80€/km",
      "serviceType": "Taxi",
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
          "name": "Koľko stojí taxi zo Zvolena do Bratislavy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Taxi zo Zvolena do Bratislavy stojí 156€. Vzdialenosť je 195 km, cena je 0,80€ za kilometer."
          }
        },
        {
          "@type": "Question",
          "name": "Koľko stojí taxi zo Zvolena do Košíc?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Taxi zo Zvolena do Košíc stojí 170€. Vzdialenosť je 212 km, cena je 0,80€ za kilometer."
          }
        },
        {
          "@type": "Question",
          "name": "Ako sa počíta cena taxi zo Zvolena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cena je jednoduchá - 0,80€ za každý kilometer. Žiadne skryté poplatky, príplatky za batožinu ani čakaciu dobu."
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
