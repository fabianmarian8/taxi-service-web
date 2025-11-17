"use client";

import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Zap,
  Users,
  Shield,
  Plane,
  Star,
  CheckCircle,
  AlertCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Video Background - Addison Lee Style */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background with darker overlay */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5)" }}
            aria-label={
              language === "en"
                ? "Taxi service background video"
                : "Video pozadie taxislužby"
            }
          >
            <source src="/background_2k.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white fade-in px-4">
          <h1 className="text-7xl font-bold mb-4 text-shadow-strong tracking-tight leading-7">
            <span className="text-accent">
              TaxiGO
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-12 max-w-3xl mx-auto text-shadow text-white leading-7">
            {language === "en"
              ? "Quick, reliable and professional taxi service. Available 24/7 for airport transfers, city transport and intercity journeys."
              : "Rýchla, spoľahlivá a profesionálna taxislužba v meste Zvolen. Dostupné 24/7 pre letiskové transfery, mestskú dopravu a medzimiestne cesty."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+421902048583" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="btn-yellow text-lg px-10 py-6 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                +421 902 048 583
              </Button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=421919040118"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="btn-outline-white text-lg px-10 py-6 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="pt-6 pb-24 md:pt-12 md:pb-24 bg-background"
        aria-label={language === "en" ? "Our services" : "Naše služby"}
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
            {language === "en" ? "OUR SERVICES" : "NAŠE SLUŽBY"}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            {language === "en"
              ? "Professional taxi services for all your transportation needs"
              : "Profesionálne taxi služby pre všetky vaše prepravné potreby"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Airport Transfer Card */}
            <div className="service-card h-[400px] md:h-[400px] scale-in">
              <img
                src="/images/processed/airport-transfer.png"
                alt={
                  language === "en"
                    ? "Professional airport transfer service to Vienna, Budapest, Bratislava and Sliač airports"
                    : "Profesionálny letiskový transfer na letiská Viedeň, Budapešť, Bratislava a Sliač"
                }
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="service-card-content">
                <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 float-animation">
                  <Plane className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.services.airport.name}
                </h3>
                <p className="text-white/90 text-lg">{t.services.airport.description}</p>
              </div>
            </div>

            {/* Family Transfer Card */}
            <div className="service-card h-[400px] md:h-[400px] scale-in">
              <img
                src="/images/processed/family-transfer.png"
                alt={
                  language === "en"
                    ? "City taxi service in Lešť, Zvolen, Banská Bystrica and surrounding areas"
                    : "Mestská taxislužba v Lešti, Zvolene, Banskej Bystrici a okolí"
                }
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="service-card-content">
                <div
                  className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 float-animation"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Users className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.services.city.name}
                </h3>
                <p className="text-white/90 text-lg">{t.services.city.description}</p>
              </div>
            </div>

            {/* Luxury Interior Card */}
            <div className="service-card h-[400px] md:h-[400px] scale-in">
              <img
                src="/images/processed/car-interior.png"
                alt={
                  language === "en"
                    ? "Spacious intercity transfer service with professional vehicles"
                    : "Priestranný medzimiestny transfer s profesionálnymi vozidlami"
                }
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="service-card-content">
                <div
                  className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 float-animation"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Shield className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.services.intercity.name}
                </h3>
                <p className="text-white/90 text-lg">{t.services.intercity.description}</p>
              </div>
            </div>

            {/* Night Service Card */}
            <div className="service-card h-[400px] md:h-[400px] scale-in">
              <img
                src="/images/processed/hotel-night.png"
                alt={
                  language === "en"
                    ? "Hotel Polana pickup service - vehicle pickup in front of your hotel"
                    : "Služba Hotel Polana - pristavenie vozidla pred váš hotel"
                }
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="service-card-content">
                <div
                  className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 float-animation"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Zap className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.services.corporate.name}
                </h3>
                <p className="text-white/90 text-lg">{t.services.corporate.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - What Sets Us Apart */}
      <section
        className="py-24 bg-card/50"
        aria-label={language === "en" ? "What sets us apart" : "Čo nás odlišuje"}
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
            {language === "en" ? "WHAT SETS US APART" : "ČO NÁS ODLIŠUJE"}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            {language === "en" ? "Excellence in every journey" : "Dokonalosť v každej ceste"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: language === "en" ? "Trusted" : "Dôveryhodní",
                desc:
                  language === "en"
                    ? "Years of exceptional service and satisfied customers"
                    : "Roky výnimočných služieb a spokojných zákazníkov",
              },
              {
                icon: Clock,
                title: language === "en" ? "Reliable" : "Spoľahliví",
                desc:
                  language === "en"
                    ? "Always on time, day or night, rain or shine"
                    : "Vždy načas, vo dne v noci, za každého počasia",
              },
              {
                icon: Shield,
                title: language === "en" ? "Safe" : "Bezpeční",
                desc:
                  language === "en"
                    ? "Professional drivers and secure vehicles"
                    : "Profesionálni vodiči a bezpečné vozidlá",
              },
              {
                icon: Zap,
                title: language === "en" ? "Fast" : "Rýchli",
                desc:
                  language === "en"
                    ? "Quick response and efficient routes"
                    : "Rýchla odpoveď a efektívne trasy",
              },
              {
                icon: CheckCircle,
                title: language === "en" ? "Quality" : "Kvalita",
                desc:
                  language === "en"
                    ? "Premium vehicles and excellent service"
                    : "Prémiové vozidlá a vynikajúce služby",
              },
              {
                icon: Users,
                title: language === "en" ? "Personal" : "Osobní",
                desc:
                  language === "en"
                    ? "Tailored service for your needs"
                    : "Služby prispôsobené vašim potrebám",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="card-hover p-8 text-center bg-card border-border group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon
                    className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Scrolling Banner */}
      <section
        className="py-16 bg-background border-y border-border overflow-hidden"
        aria-label={language === "en" ? "Our partners" : "Naši partneri"}
      >
        <div className="container mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            {language === "en" ? "OUR PARTNERS" : "NAŠI PARTNERI"}
          </h2>
        </div>
        <div className="relative">
          <div className="flex gap-8 md:gap-16 animate-scroll">
            {/* Duplicate logos for seamless loop - 2x for infinite scroll effect */}
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 h-20 md:w-48 md:h-24 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={
                    language === "en"
                      ? `${logo.name} partner logo`
                      : `Logo partnera ${logo.name}`
                  }
                  className="max-w-full max-h-full object-contain"
                  style={{ filter: "none" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 bg-card/50"
        aria-label={language === "en" ? "Pricing" : "Cenník"}
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
            {t.pricing.title}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-6 p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.pricing.vienna}</p>
                  <p className="text-3xl font-bold text-accent">€250</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.pricing.budapest}</p>
                  <p className="text-3xl font-bold text-accent">€170</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.pricing.bratislava}</p>
                  <p className="text-3xl font-bold text-accent">€180</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.pricing.sliač}</p>
                  <p className="text-3xl font-bold text-accent">€10</p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-10 pt-8 border-t border-border text-lg">
              {t.pricing.contact}
            </p>
          </div>
        </div>
      </section>

      {/* Blog/Info Section */}
      <section
        className="py-24 bg-background border-t border-border"
        aria-label={language === "en" ? "Useful information" : "Užitočné informácie"}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-10 h-10 text-accent" aria-hidden="true" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {language === "en" ? "USEFUL INFORMATION" : "UŽITOČNÉ INFORMÁCIE"}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "en"
                ? "Everything you need to know about our taxi service"
                : "Všetko, čo potrebujete vedieť o našej taxislužbe"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/ako-objednat-taxi-bez-aplikacie">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <MessageCircle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "How to Order Taxi" : "Ako objednať taxi"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Order by phone, SMS or WhatsApp without app"
                      : "Objednajte telefonicky, SMS alebo WhatsApp bez aplikácie"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/kedy-volat-taxi-vopred">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Clock className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "When to Book in Advance" : "Kedy volať vopred"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Tips for rush hours, weekends and events"
                      : "Tipy pre špičky, víkendy a podujatia"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/platba-v-taxiku">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <CheckCircle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "Payment Options" : "Platba v taxíku"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Card, cash or invoice for companies"
                      : "Kartou, hotovosť alebo faktúra pre firmy"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/taxi-s-detskou-sedackou">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Users className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "Child Seat" : "Detská sedačka"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Safe travel with children"
                      : "Bezpečná preprava s deťmi"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/taxi-na-vlak-autobus">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <MapPin className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "Station Transfer" : "Transfer na stanicu"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "On time to train or bus"
                      : "Načas na vlak alebo autobus"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/letiskova-preprava">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Plane className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "Airport Transfer" : "Letisková preprava"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "To Vienna, Budapest, Bratislava"
                      : "Do Viedne, Budapešti, Bratislavy"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/ako-podat-staznost">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <AlertCircle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "Complaints" : "Reklamácia"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "How to file a complaint"
                      : "Ako podať sťažnosť"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/nonstop-taxi">
              <Card className="p-6 card-hover cursor-pointer h-full bg-card border-border group">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Clock className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
                    {language === "en" ? "24/7 Service" : "Nonstop služba"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Night and weekend service"
                      : "Nočná a víkendová prevádzka"}
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    {language === "en" ? "Read more" : "Čítať viac"}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 bg-card/50"
        aria-label={
          language === "en" ? "Frequently asked questions" : "Často kladené otázky"
        }
      >
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
            {t.faq.title}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            {language === "en"
              ? "Find answers to common questions"
              : "Nájdite odpovede na časté otázky"}
          </p>
          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const questionId = `faq-question-${idx}`;
              const answerId = `faq-answer-${idx}`;
              return (
                <div
                  key={idx}
                  className="border border-border rounded-lg overflow-hidden bg-card"
                >
                  <button
                    id={questionId}
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-8 text-left hover:bg-muted/30 transition-colors flex items-center justify-between"
                    aria-expanded={openFaqIndex === idx}
                    aria-controls={answerId}
                  >
                    <h3 className="font-bold text-lg text-white pr-4">{item.q}</h3>
                    <span
                      className="text-accent text-3xl font-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div
                      id={answerId}
                      className="px-8 pb-8 text-muted-foreground border-t border-border pt-6 text-base leading-relaxed"
                      role="region"
                      aria-labelledby={questionId}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-card/50"
        aria-label={language === "en" ? "Contact us" : "Kontaktujte nás"}
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-white">
            {t.contact.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-10 text-center card-hover bg-card border-t-4 border-t-accent group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300 pulse-glow">
                <Phone
                  className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-bold mb-4 text-xl text-white">{t.contact.phone}</h3>
              <a
                href="tel:+421902048583"
                className="text-accent hover:text-yellow-400 font-medium text-lg transition-colors"
              >
                +421 902 048 583
              </a>
            </Card>
            <Card className="p-10 text-center card-hover bg-card border-t-4 border-t-accent group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300 pulse-glow">
                <MessageCircle
                  className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-bold mb-4 text-xl text-white">{t.contact.whatsapp}</h3>
              <a
                href="https://api.whatsapp.com/send?phone=421919040118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-yellow-400 font-medium text-lg transition-colors"
              >
                {language === "en" ? "Message us" : "Napíšte nám"}
              </a>
            </Card>
            <Card className="p-10 text-center card-hover bg-card border-t-4 border-t-accent group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300 pulse-glow">
                <Clock
                  className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-bold mb-4 text-xl text-white">
                {language === "en" ? "24/7 Service" : "Služba 24/7"}
              </h3>
              <p className="text-muted-foreground text-lg">
                {language === "en" ? "Always available" : "Vždy k dispozícii"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-border">
        <div className="container text-center">
          {/* Discreet cross-linking for SEO */}
          <p className="text-xs text-muted-foreground/50 mb-2">
            Pôsobíme aj v týchto lokalitách:{" "}
            <a
              href="https://www.lesttaxi.com"
              className="hover:text-muted-foreground/70 transition-colors"
            >
              Lešť
            </a>
            {" | "}
            <a
              href="https://zvolen-taxi.sk"
              className="hover:text-muted-foreground/70 transition-colors"
            >
              Zvolen
            </a>
            {" | "}
            <a
              href="https://lest-slavia-taxi.com"
              className="hover:text-muted-foreground/70 transition-colors"
            >
              Slavia
            </a>
          </p>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Zvolen Taxi Service.{" "}
            {language === "en" ? "All rights reserved." : "Všetky práva vyhradené."}
          </p>
        </div>
      </footer>
    </div>
  );
}
