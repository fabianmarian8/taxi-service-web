import Header from "@/components/Header";
import CorporateRideForm from "@/components/CorporateRideForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import {
  BadgePercent,
  Building2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  Route,
} from "lucide-react";
import Link from "next/link";

export default function FiremneJazdyPage() {
  const benefits = [
    {
      icon: ReceiptText,
      title: "Platba na faktúru",
      description: "Nastavíme jednoduché B2B podmienky po zaslaní IČO a fakturačných údajov.",
    },
    {
      icon: BadgePercent,
      title: "Zľava 25%",
      description: "Pre schválené firemné jazdy a pravidelnú spoluprácu vieme nastaviť zvýhodnené podmienky.",
    },
    {
      icon: Clock,
      title: "Prednostné pristavenie",
      description: "Pravidelné trasy a firemné objednávky riešime rýchlejšie a prehľadnejšie.",
    },
    {
      icon: Route,
      title: "Mestské aj letiskové jazdy",
      description: "Vhodné pre transfery hostí, manažmentu, zamestnancov aj klientov.",
    },
  ];

  const audiences = [
    "Hotely, penzióny a recepcie",
    "Kancelárie, obchodné tímy a manažment",
    "Výrobné firmy a zmenové prevádzky",
    "Pravidelná preprava hostí na letisko alebo stanicu",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto max-w-6xl px-4 py-12">
        <header className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Pre firmy a hotely
          </p>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Firemné jazdy na faktúru so zľavou 25%
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Ak potrebujete spoľahlivú prepravu pre hostí, zamestnancov alebo pravidelné business
            jazdy, nastavíme vám jednoduchý firemný režim. Volanie, WhatsApp alebo email, bez
            zložitého systému.
          </p>
        </header>

        <section className="mb-10 flex flex-col gap-4 sm:flex-row">
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full sm:w-auto">
            <span className="w-full sm:w-auto btn-call">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              {siteConfig.contact.phone}
            </span>
          </a>
          <a href={siteConfig.social.whatsappUrl} className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-black sm:w-auto" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp
            </Button>
          </a>
        </section>

        <section className="mb-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-border bg-card p-5">
              <benefit.icon className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">{benefit.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Ako spolupráca funguje</h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">1. Zadanie firmy</p>
                  <p className="text-muted-foreground">
                    Pošlete názov firmy, IČO, fakturačné údaje a kontaktnú osobu.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">2. Typ jázd</p>
                  <p className="text-muted-foreground">
                    Dohodneme mestské jazdy, transfery na stanicu, letiskové trasy alebo pravidelné odvozy.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">3. Fakturácia a zľava</p>
                  <p className="text-muted-foreground">
                    Pri schválených firemných jazdách nastavíme fakturačný režim a zľavu 25%.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Pre koho je služba vhodná</h2>
              <div className="space-y-3">
                {audiences.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Prakticky</p>
                <p className="mt-2 text-lg text-white">
                  Riešime aj neskoré príchody hostí, skoré odchody na letisko a pravidelné ranné jazdy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="corporate-form" className="mb-14 scroll-mt-28">
          <CorporateRideForm language="sk" />
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/cennik-taxi-zvolen">
            <Card className="card-hover h-full border-border bg-card p-6">
              <MapPin className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">Cenník jázd</h2>
              <p className="text-sm text-muted-foreground">
                Pozrite si orientačné ceny a mestské aj medzimestské trasy zo Zvolena.
              </p>
            </Card>
          </Link>
          <Link href="/platba-v-taxiku">
            <Card className="card-hover h-full border-border bg-card p-6">
              <ReceiptText className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">Platba a fakturácia</h2>
              <p className="text-sm text-muted-foreground">
                Prehľad možností platby, faktúr a firemných podmienok.
              </p>
            </Card>
          </Link>
          <Link href="/">
            <Card className="card-hover h-full border-border bg-card p-6">
              <Building2 className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">Späť na hlavnú stránku</h2>
              <p className="text-sm text-muted-foreground">
                Nájdete tam rýchly kontakt, služby, FAQ aj prehľad firemných výhod.
              </p>
            </Card>
          </Link>
        </section>
      </article>
    </div>
  );
}
