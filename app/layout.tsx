import type { Metadata } from "next";
import { Beiruti, Rajdhani } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import { siteConfig, getFullAddress } from "@/lib/config";
import "./globals.css";

// Optimalizované fonty pre lepšie Core Web Vitals
// Redukované weight-y pre menšiu veľkosť a rýchlejšie načítanie
const beiruti = Beiruti({
  subsets: ["latin"],
  weight: ["400", "700"], // Redukované z 6 na 2 weight-y
  variable: "--font-beiruti",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Rajdhani - pre nadpisy
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "700"], // Redukované z 5 na 2 weight-y
  variable: "--font-rajdhani",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Fira Mono odstránené - používame system monospace

export const metadata: Metadata = {
  title: "Taxi Zvolen 24/7 | Spoľahlivá preprava a letiskové transfery",
  description:
    `Profesionálna taxislužba vo Zvolene a okolí. Rýchle pristavenie, platba kartou a komfortné transfery na letiská Viedeň, Bratislava či Budapešť. Volajte nonstop na ${siteConfig.contact.phone}`,
  authors: [{ name: siteConfig.brand.name }],
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
    url: `${siteConfig.brand.url}/`,
    title: "Taxi Zvolen 24/7 | Spoľahlivá preprava a letiskové transfery",
    description:
      "Profesionálna taxislužba vo Zvolene a okolí. Rýchle pristavenie, platba kartou a komfortné transfery na letiská Viedeň, Bratislava či Budapešť.",
    images: [
      {
        url: `${siteConfig.brand.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} - Taxi Zvolen`,
      },
    ],
    locale: "sk_SK",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Zvolen 24/7 | Spoľahlivá preprava a letiskové transfery",
    description:
      "Profesionálna taxislužba vo Zvolene a okolí. Rýchle pristavenie, platba kartou a komfortné transfery.",
    images: [`${siteConfig.brand.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.brand.url}/`,
    languages: {
      sk: `${siteConfig.brand.url}/`,
      en: `${siteConfig.brand.url}/en/`,
      "x-default": `${siteConfig.brand.url}/`,
    },
  },
  icons: {
    icon: siteConfig.brand.logo,
    apple: siteConfig.brand.logo,
  },
  verification: {
    google: siteConfig.analytics.googleVerification,
  },
  other: {
    "geo.region": siteConfig.geo.region,
    "geo.placename": siteConfig.address.city,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`dark ${beiruti.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <head>

        {/* JSON-LD Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": siteConfig.brand.url,
              name: siteConfig.brand.name,
              alternateName: siteConfig.brand.alternateNames,
              description:
                "Professional 24/7 taxi service in Zvolen and surrounding areas. Airport transfers to Sliač, Vienna, Bratislava, Budapest. English-speaking drivers.",
              url: siteConfig.brand.url,
              telephone: siteConfig.contact.phoneRaw,
              priceRange: "€€",
              image: `${siteConfig.brand.url}/og-image.jpg`,
              logo: `${siteConfig.brand.url}${siteConfig.brand.logo}`,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: siteConfig.rating.value,
                reviewCount: siteConfig.rating.count,
                bestRating: siteConfig.rating.bestRating,
                worstRating: siteConfig.rating.worstRating,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                postalCode: siteConfig.address.postalCode,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.geo.latitude,
                longitude: siteConfig.geo.longitude,
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
              sameAs: [siteConfig.social.whatsappUrl],
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `tel:${siteConfig.contact.phoneRaw}`,
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
                    text: `Môžete nám zavolať na ${siteConfig.contact.phone} alebo nám napísať na WhatsApp. Potvrdíme vašu objednávku a poskytneme fixnú cenu.`,
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

      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>

        {/* Google Analytics - lazyOnload pre lepší LCP */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleId}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.analytics.googleId}');
          `}
        </Script>

        {/* Microsoft Clarity - lazyOnload */}
        <Script id="clarity-tracking" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${siteConfig.analytics.clarityId}");
          `}
        </Script>
      </body>
    </html>
  );
}
