"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export default function AkoPodatStaznost() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Ako podať sťažnosť alebo požiadať o vrátenie
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Neboli ste spokojní? Tu je postup, ako podať sťažnosť, čo priložiť
            a ako prebieha vyhodnotenie.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Postup</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Napíšte <strong>dátum/čas</strong>, trasu, dôvod sťažnosti.
                </li>
                <li>
                  Priložte <strong>fotku/blok</strong> alebo iné podklady.
                </li>
                <li>
                  Po vyhodnotení navrhneme riešenie – vysvetlenie, úpravu ceny, prípadne vrátenie.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <CardContent className="pt-6">
              <p className="text-lg">
                <strong>Tip:</strong> Čím viac podrobností a dôkazov poskytnete, tým rýchlejšie
                dokážeme vašu situáciu vyriešiť spravodlivo.
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
            <Link href="/ako-objednat-taxi-bez-aplikacie">
              <Button variant="outline">Ako objednať bez aplikácie</Button>
            </Link>
            <Link href="/letiskova-preprava">
              <Button variant="outline">Letisková preprava</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
