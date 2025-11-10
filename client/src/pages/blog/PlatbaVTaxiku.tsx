import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Banknote, FileText } from "lucide-react";
import { Link } from "wouter";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function PlatbaVTaxiku() {
  useDocumentMeta({
    title: "Platba v taxíku vo Zvolene – karta, hotovosť, faktúra",
    description: "Zaplaťte kartou, mobilom alebo hotovosťou. Firemní zákazníci vo Zvolene môžu jazdiť na faktúru – ako to funguje.",
    canonical: "https://zvolen-taxi.sk/platba-v-taxiku"
  });

  return (
    <div className="min-h-screen bg-background">

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Platba v taxíku: karta, hotovosť, faktúra
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-8">
            Ponúkame vám flexibility pri platbe za taxi služby. Vyberte si spôsob, ktorý vám vyhovuje najlepšie.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Možnosti platby</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <CreditCard className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Karta / Mobil (NFC)</h3>
                  <p className="text-sm">
                    VISA, Mastercard, Apple Pay, Google Pay
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Banknote className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hotovosť</h3>
                  <p className="text-sm">
                    Vhodné pri menších sumách
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Faktúra (B2B)</h3>
                  <p className="text-sm">
                    Po registrácii firemného účtu (IČO, fakturačné údaje)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 bg-blue-500/10 border-blue-500/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Doklad a kontrola ceny</h2>
              <p className="text-lg mb-4">
                Po každej jazde dostanete doklad. Cenu ovplyvňuje <strong>nástupné</strong>, <strong>kilometre</strong>,
                prípadne <strong>čakanie</strong> na želanie zákazníka.
              </p>
              <p className="text-sm text-muted-foreground">
                Všetky ceny sú transparentné a môžete si ich overiť vopred pri objednávke.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">Platba kartou</h2>
          <p className="text-lg mb-6">
            Naše vozidlá sú vybavené moderným termínálom, ktorý akceptuje všetky hlavné platobné karty
            vrátane bezkontaktných platieb (NFC). Podporujeme aj Apple Pay a Google Pay.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Faktúra pre firmy</h2>
          <p className="text-lg mb-6">
            Firemní zákazníci môžu využiť platbu na faktúru. Po registrácii firemného účtu
            (potrebujeme IČO, DIČ, fakturačnú adresu) vám budeme vystavovať faktúry s DPH.
            Platba faktúry je splatná do 14 dní od vystavenia.
          </p>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Potrebujete faktúru?</h3>
            <p>
              Kontaktujte nás pred jazdou a nahláste potrebu vystavenia faktúry. Poskytne vám všetky
              potrebné informácie pre nastavenie firemného účtu.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať vopred</Button>
            </Link>
            <Link href="/ako-podat-staznost">
              <Button variant="outline">Reklamácia jazdy</Button>
            </Link>
            <Link href="/ako-objednat-taxi-bez-aplikacie">
              <Button variant="outline">Ako objednať taxi</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
