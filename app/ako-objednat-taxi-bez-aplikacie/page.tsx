"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export default function AkoObjednatTaxiBezAplikacie() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Ako si objednať taxi vo Zvolene bez aplikácie
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prečo je to stále veľmi jednoduché</h2>
          <p className="text-lg mb-6">
            Priame zavolanie na taxislužbu je vo Zvolene rýchla cesta k autu – bez technických problémov,
            s <strong>okamžitou komunikáciou</strong> s dispečerom a priestorom na dohodu (trasa, zastávky, platba).
          </p>

          <h2 className="text-2xl font-semibold mb-4">Spôsoby objednania</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">1) Telefonát</h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Vyhľadajte číslo na taxislužbu (napr. „Taxi Zvolen", „Zvolen Nonstop Taxi", „lokálne taxi").</li>
                <li>Oznámte <strong>svoju polohu</strong> (ulica, orientačný bod).</li>
                <li>Povedzte <strong>cieľ</strong> a <strong>čas</strong>, kedy potrebujete auto.</li>
                <li>Počkajte na potvrdenie príchodu a <strong>SPZ/farbu</strong> vozidla.</li>
              </ol>
              <p className="text-sm text-muted-foreground">
                <strong>Výhody:</strong> rýchlosť, jasné dohody, možnosť otázok v reálnom čase.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">2) SMS</h3>
              <p className="mb-3">
                Napíšte: <em>"Prosím taxi na [adresa/miesto] → [cieľ] o [čas]. Meno: [vaše]. Platba: [karta/hotovosť]."</em>
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tip:</strong> pri zmene času napíšte novú SMS, nech sa auto nepošle zbytočne.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">3) WhatsApp</h3>
              <p className="mb-3">
                Formát je rovnaký ako pri SMS. Výhoda: vidíte históriu, môžete poslať PIN polohu.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Čo pomáha dispečerovi</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>presná ulica + orientačný bod (<em>"pri Pošte 2, zelená lavička"</em>)</li>
            <li>počet osôb a batožina</li>
            <li>detská sedačka / zložiteľný kočík / domáce zviera</li>
            <li>preferovaná platba</li>
          </ul>

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
            <Link href="/taxi-s-detskou-sedackou">
              <Button variant="outline">Taxi s detskou sedačkou</Button>
            </Link>
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať taxi vopred</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
