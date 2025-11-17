"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

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
            Zaplaťte kartou, mobilom alebo hotovosťou. Firemní zákazníci vo Zvolene môžu jazdiť
            na faktúru – ako to funguje.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Možnosti platby</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong>Karta / mobil (NFC)</strong> – VISA, Mastercard, Apple/Google Pay.
                </li>
                <li>
                  <strong>Hotovosť</strong> – vhodné pri menších sumách.
                </li>
                <li>
                  <strong>Faktúra (B2B)</strong> – po registrácii firemného účtu (IČO, fakturačné údaje).
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">Doklad a kontrola ceny</h2>
          <p className="text-lg mb-6">
            Po každej jazde dostanete doklad. Cenu ovplyvňuje <strong>nástupné</strong>,{" "}
            <strong>kilometre</strong>, prípadne <strong>čakanie</strong> na želanie zákazníka.
          </p>

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
