import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Zap, Users, Shield, Plane } from "lucide-react";
import { useState } from "react";
import backgroundVideo from "/background_2k.mp4";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421902048583">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <Phone className="w-5 h-5" />
                +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421919040118">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Sora', sans-serif" }}>
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, name: t.services.airport.name, desc: t.services.airport.description, borderColor: "border-l-4 border-l-accent" },
              { icon: Users, name: t.services.city.name, desc: t.services.city.description, borderColor: "border-l-4 border-l-accent" },
              { icon: Shield, name: t.services.intercity.name, desc: t.services.intercity.description, borderColor: "border-l-4 border-l-accent" },
              { icon: Zap, name: t.services.corporate.name, desc: t.services.corporate.description, borderColor: "border-l-4 border-l-accent" },
            ].map((service, idx) => (
              <Card key={idx} className={`card-hover p-6 scale-in ${service.borderColor}`}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Sora', sans-serif" }}>
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: t.features.feature1, desc: t.features.feature1Desc },
              { title: t.features.feature2, desc: t.features.feature2Desc },
              { title: t.features.feature3, desc: t.features.feature3Desc },
              { title: t.features.feature4, desc: t.features.feature4Desc },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 slide-in-left">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            {t.pricing.title}
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16">
            {t.pricing.subtitle}
          </p>
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.pricing.vienna}</p>
                  <p className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    €250
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.pricing.budapest}</p>
                  <p className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    €170
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.pricing.bratislava}</p>
                  <p className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    €180
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.pricing.sliač}</p>
                  <p className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    €10
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 pt-8 border-t border-border">
              {t.pricing.contact}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Sora', sans-serif" }}>
            {t.faq.title}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-6 text-left hover:bg-muted transition-colors flex items-center justify-between"
                >
                  <h3 className="font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {item.q}
                  </h3>
                  <span className="text-accent text-xl">
                    {openFaqIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 text-muted-foreground border-t border-border">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Sora', sans-serif" }}>
            {t.contact.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center card-hover border-t-4 border-t-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.contact.phone}
              </h3>
              <a href="tel:+421902048583" className="text-accent hover:underline font-medium">
                +421 902 048 583
              </a>
            </Card>
            <Card className="p-8 text-center card-hover border-t-4 border-t-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.contact.whatsapp}
              </h3>
              <a
                href="https://api.whatsapp.com/send?phone=421919040118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                {language === "en" ? "Message us" : "Napíšte nám"}
              </a>
            </Card>
            <Card className="p-8 text-center card-hover border-t-4 border-t-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.contact.address}
              </h3>
              <p className="text-muted-foreground text-sm">{t.contact.addressValue}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.footer.company}
              </h3>
              <p className="text-sm text-background/80">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+421902048583" className="hover:underline">
                    {t.contact.phone}
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=421919040118" className="hover:underline">
                    {t.contact.whatsapp}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.footer.legal}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                {t.contact.hours}
              </h4>
              <p className="text-sm text-background/80">
                {language === "en" ? "Available 24/7" : "Dostupní 24/7"}
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
