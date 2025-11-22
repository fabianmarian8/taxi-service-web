import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi na vlak a autobus Zvolen | Transfer na stanicu načas | +421 902 048 583",
  description:
    "Taxi na železničnú a autobusovú stanicu vo Zvolene. Stihnite vlak alebo autobus načas. Monitoring vlakov, presné vyzdvihnutie. Zavolajte +421 902 048 583.",
  keywords: [
    "taxi na stanicu zvolen",
    "taxi na vlak",
    "taxi na autobus",
    "železničná stanica zvolen",
    "autobusová stanica zvolen",
    "transfer stanica",
  ],
  openGraph: {
    type: "article",
    url: "https://zvolen-taxi.sk/taxi-na-vlak-autobus",
    title: "Taxi na vlak a autobus Zvolen | Transfer na stanicu načas",
    description:
      "Taxi na železničnú a autobusovú stanicu vo Zvolene. Stihnite vlak alebo autobus načas. Monitoring vlakov, presné vyzdvihnutie.",
    images: [
      {
        url: "https://zvolen-taxi.sk/og-image.svg",
        alt: "Taxi na stanicu Zvolen",
      },
    ],
  },
  alternates: {
    canonical: "https://zvolen-taxi.sk/taxi-na-vlak-autobus",
  },
};

export default function TaxiNaVlakAutobus() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Taxi na vlak a autobus
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Potrebujete stihnúť vlak alebo autobus? Poradíme, čo nahlásiť dispečerovi,
            aby ste dorazili načas, bez stresu.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Ako na presné vyzdvihnutie</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  Napíšte <strong>odchod/čas nástupu</strong> dopravy, nie len „na stanicu"
                </li>
                <li>
                  Uveďte <strong>nástupište</strong> alebo smer (východ/západ), ak ho viete
                </li>
                <li>
                  Pri príjazde vlakom pošlite <strong>číslo vlaku</strong> – sledujeme meškanie
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <CardContent className="pt-6">
              <p className="text-lg">
                <strong>Tip:</strong> Pri dôležitých spojoch objednajte taxi s časovou rezervou.
                Dispečer vie odhadnúť, koľko času je potrebné na cestu.
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
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať vopred</Button>
            </Link>
            <Link href="/letiskova-preprava">
              <Button variant="outline">Letisková preprava</Button>
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
