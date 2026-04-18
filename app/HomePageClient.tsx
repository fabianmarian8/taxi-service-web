"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";
import { getLocalizedUrl } from "@/lib/routes";
import { getTranslation } from "@/lib/translations";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BadgePercent,
  BookOpen,
  Building2,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ReceiptText,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";

export default function HomePageClient() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
  ];

  const partnerLogos = [
    { name: "Bratislava Airport", src: "/images/processed/bratislava-airport.png" },
    { name: "Budapest Airport", src: "/images/processed/budapest-airport.png" },
    { name: "Europa Shopping", src: "/images/processed/europa-shopping.png" },
    { name: "Hotel Poľana", src: "/images/processed/polana-hotel.jpg" },
    { name: "Ministry of Fun", src: "/images/processed/ministry-of-fun.png" },
    { name: "Ministry of Fun White", src: "/images/processed/ministry-of-fun-white.png" },
  ];

  const localizedHref = (href: string) => getLocalizedUrl(href, language);
  const invoiceSubject =
    language === "en" ? "Corporate rides and invoice billing" : "Firemné jazdy a platba na faktúru";

  const heroChips = [
    {
      label: language === "en" ? "Open 24/7" : "Nonstop · 24/7",
      bullet: true,
    },
    {
      label: language === "en" ? "Fixed prices from €3" : "Fixné ceny od 3€",
    },
    {
      label: language === "en" ? "Pickup in 5 minutes" : "Pristavenie do 5 min",
    },
  ];

  const serviceCards = [
    {
      icon: Plane,
      image: "/images/processed/airport-transfer.png",
      title: t.services.airport.name,
      description: t.services.airport.description,
      alt:
        language === "en"
          ? "Professional airport transfer service to Vienna, Budapest, Bratislava and Sliač airports"
          : "Profesionálny letiskový transfer na letiská Viedeň, Budapešť, Bratislava a Sliač",
    },
    {
      icon: Users,
      image: "/images/processed/family-transfer.png",
      title: t.services.city.name,
      description: t.services.city.description,
      alt:
        language === "en"
          ? "City taxi service in Lešť, Zvolen, Banská Bystrica and surrounding areas"
          : "Mestská taxislužba v Lešti, Zvolene, Banskej Bystrici a okolí",
    },
    {
      icon: Shield,
      image: "/images/processed/car-interior.png",
      title: t.services.intercity.name,
      description: t.services.intercity.description,
      alt:
        language === "en"
          ? "Spacious intercity transfer service with professional vehicles"
          : "Priestranný medzimestský transfer s profesionálnymi vozidlami",
    },
    {
      icon: Building2,
      image: "/images/processed/hotel-night.png",
      title: t.services.corporate.name,
      description: t.services.corporate.description,
      alt:
        language === "en"
          ? "Corporate taxi rides for hotels, offices, and company clients"
          : "Firemné taxi jazdy pre hotely, kancelárie a firemných klientov",
    },
  ];

  const differentiators = [
    {
      icon: Star,
      title: language === "en" ? "4.8 Rating" : "4.8 hodnotenie",
      description:
        language === "en"
          ? "127 reviews from satisfied customers"
          : "127 hodnotení od spokojných zákazníkov",
    },
    {
      icon: Clock,
      title: language === "en" ? "24/7 Nonstop" : "24/7 nonstop",
      description:
        language === "en"
          ? "Day, night, weekends, and holidays"
          : "Deň, noc, víkendy aj sviatky",
    },
    {
      icon: Shield,
      title: language === "en" ? "Fixed Prices" : "Fixné ceny",
      description:
        language === "en"
          ? "Clear quote agreed before the ride"
          : "Jasná cena dohodnutá vopred",
    },
    {
      icon: Zap,
      title: language === "en" ? "5 min Pickup" : "Pristavenie do 5 min",
      description:
        language === "en"
          ? "Fast dispatch inside Zvolen"
          : "Rýchle pristavenie v rámci Zvolena",
    },
    {
      icon: ReceiptText,
      title: language === "en" ? "Invoice Billing" : "Platba na faktúru",
      description:
        language === "en"
          ? "Suitable for companies, hotels, and offices"
          : "Vhodné pre firmy, hotely aj kancelárie",
    },
    {
      icon: BadgePercent,
      title: language === "en" ? "25% for Companies" : "25% pre firmy",
      description:
        language === "en"
          ? "On approved corporate rides"
          : "Na schválené firemné jazdy",
    },
  ];

  const pricingCards = [
    {
      icon: MapPin,
      label: language === "en" ? "Within the city from" : "V rámci mesta od",
      value: "3€",
    },
    {
      icon: Plane,
      label: t.pricing.sliač,
      value: "10€",
    },
    {
      icon: Plane,
      label: t.pricing.budapest,
      value: "170€",
    },
    {
      icon: MapPin,
      label: t.pricing.bratislava,
      value: "195€",
    },
    {
      icon: Plane,
      label: t.pricing.vienna,
      value: "250€",
    },
    {
      icon: Building2,
      label: t.pricing.business,
      value: t.pricing.discount,
      highlight: true,
    },
  ];

  const businessBenefits = [
    {
      icon: ReceiptText,
      title: t.business.benefit1Title,
      description: t.business.benefit1Desc,
    },
    {
      icon: Clock,
      title: t.business.benefit2Title,
      description: t.business.benefit2Desc,
    },
    {
      icon: MapPin,
      title: t.business.benefit3Title,
      description: t.business.benefit3Desc,
    },
  ];

  const blogCards = [
    {
      href: "/firemne-jazdy",
      icon: Building2,
      title: language === "en" ? "Corporate Rides" : "Firemné jazdy",
      description:
        language === "en"
          ? "Invoice billing, recurring rides, and 25% company discount"
          : "Faktúra, pravidelné jazdy a 25% zľava pre firmy",
    },
    {
      href: "/ako-objednat-taxi-bez-aplikacie",
      icon: MessageCircle,
      title: language === "en" ? "How to Order Taxi" : "Ako objednať taxi",
      description:
        language === "en"
          ? "Order by phone, SMS, or WhatsApp without an app"
          : "Objednajte telefonicky, SMS alebo cez WhatsApp bez aplikácie",
    },
    {
      href: "/kedy-volat-taxi-vopred",
      icon: Clock,
      title: language === "en" ? "When to Book in Advance" : "Kedy volať vopred",
      description:
        language === "en"
          ? "Tips for rush hours, weekends, and events"
          : "Tipy pre špičky, víkendy a podujatia",
    },
    {
      href: "/platba-v-taxiku",
      icon: CheckCircle,
      title: language === "en" ? "Payment Options" : "Platba v taxíku",
      description:
        language === "en"
          ? "Cash, transfer, or invoice for companies"
          : "Hotovosť, prevod alebo faktúra pre firmy",
    },
    {
      href: "/taxi-s-detskou-sedackou",
      icon: Users,
      title: language === "en" ? "Child Seat" : "Detská sedačka",
      description:
        language === "en" ? "Safe travel with children" : "Bezpečná preprava s deťmi",
    },
    {
      href: "/taxi-na-vlak-autobus",
      icon: MapPin,
      title: language === "en" ? "Station Transfer" : "Transfer na stanicu",
      description:
        language === "en" ? "Arrive on time for train or bus" : "Načas na vlak alebo autobus",
    },
    {
      href: "/letiskova-preprava",
      icon: Plane,
      title: language === "en" ? "Airport Transfer" : "Letisková preprava",
      description:
        language === "en"
          ? "To Vienna, Budapest, and Bratislava"
          : "Do Viedne, Budapešti a Bratislavy",
    },
    {
      href: "/ako-podat-staznost",
      icon: AlertCircle,
      title: language === "en" ? "Complaints" : "Reklamácia",
      description:
        language === "en" ? "How to file a complaint" : "Ako podať sťažnosť",
    },
    {
      href: "/nonstop-taxi",
      icon: Clock,
      title: language === "en" ? "24/7 Service" : "Nonstop služba",
      description:
        language === "en" ? "Night and weekend operation" : "Nočná a víkendová prevádzka",
    },
  ];

  const contactCards = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phoneRaw}`,
    },
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      value: siteConfig.contact.whatsapp,
      href: siteConfig.social.whatsappUrl,
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Clock,
      title: t.contact.hours,
      value: language === "en" ? "Immediate response for booked rides" : "Rýchla odpoveď pri objednaných jazdách",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative flex w-full items-start justify-center overflow-hidden pt-4 md:min-h-[82vh] md:items-center md:pt-24">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/lexi-anderson-G8wPrJyNqWQ-unsplash.webp"
            alt={language === "en" ? "Taxi service background" : "Pozadie taxislužby"}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.62)", objectPosition: "75% 60%" }}
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />

        <div className="relative z-10 container px-8 py-6 text-left text-white md:px-12 md:py-16 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-center">
            <div className="max-w-4xl">
              <div className="mb-5 flex flex-wrap gap-2.5">
                {heroChips.map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm md:text-xs"
                  >
                    {chip.bullet && (
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]"
                        style={{ boxShadow: "0 0 10px #25D366" }}
                        aria-hidden="true"
                      />
                    )}
                    {chip.label}
                  </span>
                ))}
              </div>

              <h1 className="mb-2 text-3xl font-medium uppercase leading-none tracking-wider drop-shadow-lg md:text-5xl lg:text-6xl">
                <span className="font-semibold text-[#f9b101]">{t.hero.title}</span>
              </h1>
              <h2 className="mt-3 mb-4 text-2xl font-medium uppercase leading-none tracking-wider text-white drop-shadow-lg md:text-3xl lg:text-4xl">
                {t.hero.subtitle}
              </h2>

              <p className="mb-8 max-w-2xl text-base leading-7 text-white text-shadow md:text-lg">
                {t.hero.description}
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full sm:w-auto">
                  <span className="w-full text-lg sm:w-auto btn-call">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    {siteConfig.contact.phone}
                  </span>
                </a>
                <a
                  href={siteConfig.social.whatsappUrl}
                  className="btn-wa w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  {language === "en" ? "Message on WhatsApp" : "Napísať na WhatsApp"}
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-sm text-white/85">
                <span className="inline-flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-[#FFD700]"
                      fill="#FFD700"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  ))}
                </span>
                {language === "en"
                  ? `${siteConfig.rating.value} / 5 · 2,300+ rides`
                  : `${siteConfig.rating.value} / 5 · 2 300+ jázd`}
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
                {t.business.note}
              </p>

              <div className="relative mt-6 block h-[160px] w-[220px] md:hidden">
                <Image
                  src="/Snimka-obrazovky-2022-07-12-o-14.51.55.webp"
                  alt={language === "en" ? "Payment methods" : "Platobné metódy"}
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0.65)" }}
                  quality={85}
                  sizes="220px"
                />
              </div>
            </div>

            <div className="hidden justify-self-end text-right lg:block">
              <div className="kicker" style={{ color: "#f9b101" }}>
                {language === "en" ? "Call us 24/7" : "Volajte 24/7"}
              </div>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="mt-3 block text-5xl font-bold leading-none text-white no-underline drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] transition-colors hover:text-[#f9b101] xl:text-6xl 2xl:text-7xl"
                style={{ fontFamily: "var(--font-beiruti), sans-serif" }}
                aria-label={`${language === "en" ? "Call" : "Zavolať"} ${siteConfig.contact.phone}`}
              >
                +421 902
                <br />
                048 583
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-background pt-8 pb-20 md:pt-12 md:pb-24"
        aria-label={language === "en" ? "Our services" : "Naše služby"}
      >
        <div className="container">
          <h2 className="mb-3 text-center text-xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
            {language === "en" ? "OUR SERVICES" : "NAŠE SLUŽBY"}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xs text-muted-foreground md:mb-16 md:text-base">
            {language === "en"
              ? "Transport for private clients, airport transfers, and company accounts."
              : "Preprava pre súkromných klientov, letiskové transfery aj firemné účty."}
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {serviceCards.map((card, index) => (
              <div key={card.title} className="service-card h-[190px] scale-in md:h-[260px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="service-card-content">
                  <div
                    className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent md:mb-2 md:h-9 md:w-9 float-animation"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <card.icon className="h-4 w-4 text-accent-foreground md:h-5 md:w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-white md:mb-3 md:text-lg">{card.title}</h3>
                  <p className="text-xs text-white/90 md:text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why"
        className="bg-card/50 py-12"
        aria-label={language === "en" ? "What sets us apart" : "Čo nás odlišuje"}
      >
        <div className="container">
          <h2 className="mb-3 text-center text-xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            {language === "en" ? "WHAT SETS US APART" : "ČO NÁS ODLIŠUJE"}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xs text-muted-foreground md:mb-16 md:text-lg">
            {language === "en" ? "Built for reliable daily rides and business transport." : "Nastavené pre spoľahlivé denné jazdy aj firemnú prepravu."}
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
            {differentiators.map((feature) => (
              <Card key={feature.title} className="card-hover group border-border bg-card p-4 text-center md:p-8">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20 md:mb-6 md:h-16 md:w-16">
                  <feature.icon
                    className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white md:mb-4 md:text-2xl">{feature.title}</h3>
                <p className="hidden text-xs leading-relaxed text-muted-foreground md:block md:text-base">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="overflow-hidden border-y border-border bg-background py-10"
        aria-label={language === "en" ? "Our partners" : "Naši partneri"}
      >
        <div className="container mb-3 md:mb-5">
          <h2 className="text-center text-base font-bold text-white md:text-2xl">
            {language === "en" ? "OUR PARTNERS" : "NAŠI PARTNERI"}
          </h2>
        </div>
        <div className="relative partners-mask">
          <div className="animate-scroll flex gap-5 md:gap-10">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="relative h-12 w-24 flex-shrink-0 md:h-14 md:w-28">
                <Image
                  src={logo.src}
                  alt={language === "en" ? `${logo.name} partner logo` : `Logo partnera ${logo.name}`}
                  fill
                  className="object-contain"
                  quality={75}
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-card/50 py-12" aria-label={language === "en" ? "Pricing" : "Cenník"}>
        <div className="container">
          <h2 className="mb-2 text-center text-lg font-bold text-white md:mb-3 md:text-3xl lg:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-center text-xs text-muted-foreground md:mb-8 md:text-sm">
            {t.pricing.subtitle}
          </p>
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-4 md:p-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
              {pricingCards.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-xl p-4 transition-all ${
                    item.highlight
                      ? "border border-accent/35 bg-accent/10 hover:bg-accent/15"
                      : "bg-background/50 hover:bg-background/80"
                  }`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-bold text-accent">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-medium text-accent">{t.pricing.note}</p>
            <p className="mt-4 border-t border-border pt-4 text-center text-sm text-muted-foreground">
              {t.pricing.contact}
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-t border-border bg-background py-14"
        aria-label={language === "en" ? "Corporate rides" : "Firemné jazdy"}
      >
        <div className="container">
          <div className="overflow-hidden rounded-[28px] border border-accent/20 bg-[radial-gradient(circle_at_top_left,rgba(249,177,1,0.18),transparent_38%),linear-gradient(135deg,rgba(10,10,10,0.98),rgba(5,5,5,0.94))] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  {t.business.kicker}
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">{t.business.title}</h2>
                <p className="mb-8 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
                  {t.business.description}
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  {businessBenefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <benefit.icon className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
                      <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm leading-6 text-white/70">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-accent/25 bg-black/45 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <h3 className="mb-6 text-2xl font-bold text-white">{t.business.summaryTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="text-sm uppercase tracking-[0.18em] text-white/50">
                      {t.business.summaryDiscountLabel}
                    </span>
                    <span className="text-right text-lg font-semibold text-accent">
                      {t.business.summaryDiscountValue}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="text-sm uppercase tracking-[0.18em] text-white/50">
                      {t.business.summaryInvoiceLabel}
                    </span>
                    <span className="text-right text-base font-medium text-white">
                      {t.business.summaryInvoiceValue}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="text-sm uppercase tracking-[0.18em] text-white/50">
                      {t.business.summaryAvailabilityLabel}
                    </span>
                    <span className="text-right text-base font-medium text-white">
                      {t.business.summaryAvailabilityValue}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full">
                    <span className="w-full btn-call">
                      <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                      {t.business.ctaPrimary}
                    </span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(invoiceSubject)}`}
                    className="w-full"
                  >
                    <Button size="lg" variant="outline" className="w-full border-white/25 bg-white/5 text-white hover:bg-white hover:text-black">
                      <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                      {t.business.ctaSecondary}
                    </Button>
                  </a>
                  <Link href={localizedHref("/firemne-jazdy")}>
                    <Button size="lg" variant="outline" className="w-full border-accent/30 bg-accent/10 text-accent hover:bg-accent hover:text-black">
                      <Building2 className="mr-2 h-5 w-5" aria-hidden="true" />
                      {language === "en" ? "Open corporate page" : "Otvoriť firemnú stránku"}
                    </Button>
                  </Link>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/65">{t.business.note}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-card/50 py-12" aria-label={t.faq.title}>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-center text-2xl font-bold text-white md:mb-4 md:text-4xl">
              {t.faq.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:mb-10 md:text-base">
              {language === "en"
                ? "Clear answers before you order, including company invoicing."
                : "Jasné odpovede pred objednávkou, vrátane firemnej fakturácie."}
            </p>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <Card key={item.q} className="overflow-hidden border-border bg-card">
                    <button
                      type="button"
                      className="w-full px-5 py-5 text-left md:px-6"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-base font-semibold text-white md:text-lg">{item.q}</span>
                        <span
                          className={`mt-0.5 text-2xl font-light text-accent transition-transform ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </div>
                      {isOpen && (
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                          {item.a}
                        </p>
                      )}
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-border bg-background py-12"
        aria-label={language === "en" ? "Useful information" : "Užitočné informácie"}
      >
        <div className="container">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <BookOpen className="h-10 w-10 text-accent" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                {language === "en" ? "USEFUL INFORMATION" : "UŽITOČNÉ INFORMÁCIE"}
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              {language === "en"
                ? "Everything you need to know about our taxi service"
                : "Všetko, čo potrebujete vedieť o našej taxislužbe"}
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {blogCards.map((card) => (
              <Link key={card.href} href={localizedHref(card.href)}>
                <Card className="card-hover group h-full cursor-pointer border-border bg-card p-6">
                  <div className="flex h-full flex-col">
                    <div className="mb-4">
                      <card.icon className="h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent">
                      {card.title}
                    </h3>
                    <p className="mb-4 flex-grow text-sm text-muted-foreground">{card.description}</p>
                    <div className="flex items-center text-sm font-medium text-accent">
                      {language === "en" ? "Read more" : "Čítať viac"}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-card/50 py-14" aria-label={t.contact.title}>
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {language === "en" ? "Fast contact" : "Rýchly kontakt"}
              </p>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">{t.contact.title}</h2>
              <p className="mb-8 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                {language === "en"
                  ? "Call, WhatsApp, or email us. For companies, we can arrange invoice billing and individual pricing for regular rides."
                  : "Zavolajte, napíšte na WhatsApp alebo email. Pre firmy vieme nastaviť platbu na faktúru a individuálne ceny pri pravidelných jazdách."}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full sm:w-auto">
                  <span className="w-full sm:w-auto btn-call">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    {siteConfig.contact.phone}
                  </span>
                </a>
                <a href={siteConfig.social.whatsappUrl} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full px-8 py-6 text-black sm:w-auto"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => (
                <Card key={item.title} className="border-border bg-card p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-base font-semibold text-white transition-colors hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-white">{item.value}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-black py-12">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Zvolen Taxi Service.{" "}
            {language === "en" ? "All rights reserved." : "Všetky práva vyhradené."}
          </p>
        </div>
      </footer>
    </div>
  );
}
