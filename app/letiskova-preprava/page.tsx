import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letisková preprava Zvolen | Transfer Viedeň, Budapešť, Bratislava | Taxi",
  description:
    "Individuálny letiskový transfer zo Zvolenu na letiská Viedeň, Budapešť, Bratislava a Sliač. Fixná cena, monitoring letu, pomoc s batožinou. Objednajte na +421 902 048 583.",
  keywords: [
    "letisková preprava zvolen",
    "transfer letisko viedeň",
    "transfer letisko budapešť",
    "transfer letisko bratislava",
    "taxi letisko sliač",
    "odvoz na letisko",
  ],
  openGraph: {
    type: "article",
    url: "https://zvolen-taxi.sk/letiskova-preprava",
    title: "Letisková preprava Zvolen | Transfer Viedeň, Budapešť, Bratislava",
    description:
      "Individuálny letiskový transfer zo Zvolenu na letiská Viedeň, Budapešť, Bratislava a Sliač. Fixná cena, monitoring letu, pomoc s batožinou.",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        alt: "Letisková preprava Taxi Zvolen",
      },
    ],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/letiskova-preprava",
  },
};

export default function LetiskovaPreprava() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Letisková preprava
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Individuálny odvoz na slovenské aj zahraničné letiská. Fixná cena po dohode,
            monitoring letu, pomoc s batožinou.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Čo nahlásiť</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong>Letisko a číslo letu</strong>, plánovaný <strong>čas odletu/príletu</strong>
                </li>
                <li>
                  <strong>Počet osôb a batožiny</strong> (nadrozmerná? športová?)
                </li>
                <li>
                  Preferovanú <strong>platbu</strong> a či chcete <strong>faktúru</strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <CardContent className="pt-6">
              <p className="text-lg">
                <strong>Tip:</strong> Pri letoch objednajte taxi s dostatočným časovým predstihom.
                Odporúčame rezerváciu aspoň deň vopred pre pohodlný nástup na letisko.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <a href="tel:+421902048583" className="w-full sm:w-auto">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Zavolať taxi: +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421902048583" className="w-full sm:w-auto">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp: +421 902 048 583
              </Button>
            </a>
          </div>

          <h3 className="text-xl font-semibold mb-3">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/platba-v-taxiku">
              <Button variant="outline">Platba v taxíku</Button>
            </Link>
            <Link href="/ako-podat-staznost">
              <Button variant="outline">Ako podať sťažnosť</Button>
            </Link>
            <Link href="/taxi-na-vlak-autobus">
              <Button variant="outline">Taxi na vlak a autobus</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
