"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export default function NonstopTaxi() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Nonstop taxi: čo to znamená v praxi
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Ako funguje nonstop taxi vo Zvolene, čo očakávať v noci a na čo sa pripraviť
            počas víkendov a sviatkov.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Realita nonstop prevádzky</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  Vyšší dopyt = môže byť <strong>dlhší dojazd</strong>
                </li>
                <li>
                  Bezpečnostné prestávky vodičov – niekedy je potrebné preplánovať odvoz
                </li>
                <li>
                  Pri veľkých akciách odporúčame <strong>rezerváciu vopred</strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <CardContent className="pt-6">
              <p className="text-lg">
                <strong>Tip:</strong> Aj keď sme k dispozícii nonstop, v nočných hodinách
                a počas víkendov môže byť vyššia frekvencia objednávok. Pre istotu si taxi
                objednajte vopred.
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
            <Link href="/taxi-na-vlak-autobus">
              <Button variant="outline">Taxi na stanicu</Button>
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
