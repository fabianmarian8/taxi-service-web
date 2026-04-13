import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, ReceiptText, BadgePercent, Building2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Platba v taxíku Zvolen | Karta, Hotovosť, Faktúra | Taxi Payment",
  description:
    "Ako zaplatiť za taxi vo Zvolene? Akceptujeme hotovosť, bankový prevod aj faktúry pre firmy (B2B). Firemné jazdy môžu získať zľavu 25%.",
  keywords: [
    "platba v taxíku",
    "platba kartou taxi",
    "apple pay taxi",
    "google pay taxi",
    "faktúra taxi",
    "b2b taxi zvolen",
  ],
  openGraph: {
    type: "article",
    url: "https://zvolen-taxi.sk/platba-v-taxiku",
    title: "Platba v taxíku Zvolen | Karta, Hotovosť, Faktúra",
    description:
      "Ako zaplatiť za taxi vo Zvolene? Akceptujeme hotovosť, bankový prevod aj faktúry pre firmy (B2B). Firemné jazdy môžu získať zľavu 25%.",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        alt: "Platobné možnosti Taxi Zvolen",
      },
    ],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/platba-v-taxiku",
  },
};

export default function PlatbaVTaxiku() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Platba v taxíku: karta, hotovosť, faktúra
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Zaplaťte hotovosťou, prevodom alebo na faktúru. Firemní zákazníci vo Zvolene môžu
            získať jednoduché B2B nastavenie a zľavu 25% na schválené firemné jazdy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Možnosti platby</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong>Bankový prevod</strong> – vhodný pri objednaných jazdách a transferoch.
                </li>
                <li>
                  <strong>Hotovosť</strong> – vhodné pri menších sumách.
                </li>
                <li>
                  <strong>Faktúra (B2B)</strong> – po registrácii firemného účtu s IČO a fakturačnými údajmi.
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">Ako fungujú firemné jazdy na faktúru</h2>
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card>
              <CardContent className="pt-6">
                <ReceiptText className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">1. Nastavenie firmy</h3>
                <p className="text-muted-foreground text-base">
                  Pošlete IČO, fakturačné údaje a kontakt zodpovednej osoby.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Building2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">2. Objednávka jázd</h3>
                <p className="text-muted-foreground text-base">
                  Jazdy objednáte telefonicky alebo cez WhatsApp, jednorazovo aj pravidelne.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BadgePercent className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">3. Zľava 25%</h3>
                <p className="text-muted-foreground text-base">
                  Pri schválených firemných jazdách a pravidelnej spolupráci vieme nastaviť zľavu 25%.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Doklad a kontrola ceny</h2>
          <p className="text-lg mb-6">
            Po každej jazde dostanete doklad. Cenu ovplyvňuje <strong>nástupné</strong>,{" "}
            <strong>kilometre</strong>, prípadne <strong>čakanie</strong> na želanie zákazníka.
          </p>

          <Card className="mb-8 border-accent/30 bg-accent/5">
            <CardContent className="pt-6">
              <p className="text-lg">
                <strong>Tip pre firmy:</strong> Ak potrebujete pravidelný odvoz pre hostí, zamestnancov
                alebo manažment, ozvite sa. Nastavíme vám fakturačný režim a podmienky spolupráce.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full sm:w-auto">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Zavolať taxi: {siteConfig.contact.phone}
              </Button>
            </a>
            <a href={siteConfig.social.whatsappUrl} className="w-full sm:w-auto">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </Button>
            </a>
          </div>

          <h3 className="text-xl font-semibold mb-3">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať vopred</Button>
            </Link>
            <Link href="/ako-podat-staznost">
              <Button variant="outline">Reklamácia jazdy</Button>
            </Link>
            <Link href="/ako-objednat-taxi-bez-aplikacie">
              <Button variant="outline">Ako objednať bez aplikácie</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
