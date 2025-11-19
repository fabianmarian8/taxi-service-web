import type { Metadata } from "next";
import { Beiruti, Fira_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

// Nakonfigurujeme Beiruti font
const beiruti = Beiruti({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-beiruti",
});

// Nakonfigurujeme Fira Mono - strojový, technický font
const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
});

export const metadata: Metadata = {
  title: "Taxi Zvolen Nonstop 24/7 od €10 ⚡ Transfer Viedeň €250 | +421 902 048 583",
  description:
    "Taxi Zvolen nonstop 24/7 ⚡ Fixné ceny: Viedeň €250, Budapešť €170, Bratislava €180, Sliač €10. Monitoring letov, platba kartou. Rezervujte cez WhatsApp +421 902 048 583.",
  authors: [{ name: "Taxi Service Zvolen" }],
  keywords: [
    "taxi zvolen",
    "taxislužba zvolen",
    "transfer letisko",
    "taxi viedeň",
    "taxi budapešť",
    "taxi bratislava",
    "taxi sliač",
    "nonstop taxi",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://zvolen-taxi.sk/",
    title: "Taxi Zvolen Nonstop 24/7 od €10 ⚡ Transfer Viedeň €250",
    description:
      "Taxi Zvolen nonstop 24/7 ⚡ Fixné ceny: Viedeň €250, Budapešť €170, Bratislava €180, Sliač €10. Monitoring letov, platba kartou. Rezervujte cez WhatsApp +421 902 048 583.",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        alt: "Taxi Service Zvolen",
      },
    ],
    locale: "sk_SK",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Zvolen Nonstop 24/7 od €10 ⚡ Transfer Viedeň €250",
    description:
      "Taxi Zvolen nonstop 24/7 ⚡ Fixné ceny: Viedeň €250, Budapešť €170, Bratislava €180, Sliač €10. Monitoring letov, platba kartou. Rezervujte cez WhatsApp +421 902 048 583.",
    images: ["https://zvolen-taxi.sk/og-image.svg"],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/",
    languages: {
      sk: "https://zvolen-taxi.sk/",
      en: "https://zvolen-taxi.sk/",
      "x-default": "https://zvolen-taxi.sk/",
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "lQ4KKwYBn_4OAit-CY6Ye57Iwl19XvSjDe4yfLLPSJc",
  },
  other: {
    "geo.region": "SK-BC",
    "geo.placename": "Zvolen",
    "geo.position": "48.5764;19.1251",
    ICBM: "48.5764, 19.1251",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`dark ${beiruti.variable} ${firaMono.variable}`}>
      <head>

        {/* JSON-LD Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://zvolen-taxi.sk",
              name: "Taxi Service Zvolen",
              alternateName: ["Zvolen Taxi", "ZV Taxi", "Taxi Zvolen"],
              description:
                "Professional 24/7 taxi service in Zvolen and surrounding areas. Airport transfers to Sliač, Vienna, Bratislava, Budapest. English-speaking drivers.",
              url: "https://zvolen-taxi.sk",
              telephone: "+421902048583",
              priceRange: "€€",
              image: "https://zvolen-taxi.sk/og-image.svg",
              logo: "https://zvolen-taxi.sk/favicon.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Námestie SNP 63",
                postalCode: "960 01",
                addressLocality: "Zvolen",
                addressRegion: "Banskobystrický kraj",
                addressCountry: "SK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.5764,
                longitude: 19.1251,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              areaServed: [
                { "@type": "City", name: "Zvolen" },
                { "@type": "City", name: "Banská Bystrica" },
                { "@type": "City", name: "Sliač" },
                { "@type": "City", name: "Lešť" },
                { "@type": "City", name: "Vienna" },
                { "@type": "City", name: "Bratislava" },
                { "@type": "City", name: "Budapest" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Taxi Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Airport Transfer to Sliač Airport",
                      description:
                        "Fixed price transfer to Sliač Airport with flight monitoring",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Airport Transfer to Vienna Airport",
                      description:
                        "Professional airport transfer to Vienna International Airport (VIE)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Airport Transfer to Budapest Airport",
                      description:
                        "Reliable transfer to Budapest Ferenc Liszt Airport (BUD)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Airport Transfer to Bratislava Airport",
                      description:
                        "Transfer to Bratislava M. R. Štefánik Airport (BTS)",
                    },
                  },
                ],
              },
              knowsLanguage: ["English", "Slovak"],
              sameAs: ["https://api.whatsapp.com/send?phone=421919040118"],
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "tel:+421902048583",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
                result: {
                  "@type": "Reservation",
                  name: "Taxi Reservation",
                },
              },
            }),
          }}
        />

        {/* JSON-LD Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Ako si objednám taxi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Môžete nám zavolať na +421 919 040 118 alebo nám napísať na WhatsApp. Potvrdíme vašu objednávku a poskytneme fixnú cenu.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Monitorujete lety?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Áno! Pri letiskových transferoch sledujeme váš let a prispôsobujeme čas vyzdvihnutia pri oneskoreniach.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Aké spôsoby platby akceptujete?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Akceptujeme hotovosť a bankové prevody. Firemní klienti môžu používať faktúry.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Sú vaše vozidlá priestranné?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Áno, naše vozidlá pojmú štandardný kufor a vybavenie. Pomôžeme vám s batožinou pri vyzdvihnutí a vysadení.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Slúžite aj v iných mestách?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primárne slúžime v Lešti, Zvolene, Banskej Bystrici a okolí. Kontaktujte nás na vlastné trasy.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u32b6wmhp2");
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
