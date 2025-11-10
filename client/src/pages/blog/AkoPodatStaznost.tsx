import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, FileText, MessageSquare, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function AkoPodatStaznost() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Reklamácia jazdy taxi vo Zvolene – spravodlivé riešenie</title>
        <meta name="description" content="Neboli ste spokojní? Tu je postup, ako podať sťažnosť, čo priložiť a ako prebieha vyhodnotenie." />
        <link rel="canonical" href="https://zvolen-taxi.sk/ako-podat-staznost" />
      </Helmet>

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Ako podať sťažnosť alebo požiadať o vrátenie
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="flex items-center gap-4 mb-8">
            <AlertCircle className="w-16 h-16 text-yellow-500 flex-shrink-0" />
            <p className="text-lg">
              Vaša spokojnosť je pre nás prioritou. Ak ste s niečím neboli spokojní,
              chceme o tom vedieť a nájsť spravodlivé riešenie.
            </p>
          </div>

          <Card className="mb-8 border-yellow-500">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Postup podania sťažnosti</h2>
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

          <h2 className="text-2xl font-semibold mb-6">Najčastejšie dôvody sťažností</h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nesúhlasím s cenou</h3>
                    <p>
                      Ak sa domnievate, že cena bola vyššia, než bola dohodnutá, kontaktujte nás
                      s dokladom o platbe. Preveríme si záznam jazdy a v prípade omylu vrátime
                      rozdiel.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nevhodné správanie vodiča</h3>
                    <p>
                      Naši vodiči sú školení na profesionálne správanie. Ak vodič nebol zdvorilý,
                      alebo sa správal nevhodne, okamžite nás informujte. Všetky sťažnosti berieme
                      vážne.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Oneskorenie alebo neprišiel</h3>
                    <p>
                      Ak taxi prišla výrazne neskôr, než bolo dohodnuté, alebo vôbec neprišla,
                      máte právo na vrátenie alebo zľavu na ďalšiu jazdu. Kontaktujte nás
                      s podrobnosťami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Stav vozidla</h3>
                    <p>
                      Očakávame, že všetky naše vozidlá sú čisté a v dobrom stave. Ak vozidlo
                      nebolo čisté alebo bolo v zlom stave, informujte nás a pošleme vám zľavu.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ako podať sťažnosť</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Telefonicky</h3>
                <p className="mb-4">
                  Zavolajte nám priamo na naše číslo. Dispečer zaznamená vašu sťažnosť
                  a postúpi ju zodpovednému manažérovi.
                </p>
                <a href="tel:+421902048583">
                  <Button className="btn-yellow w-full">
                    Zavolať: +421 902 048 583
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">WhatsApp/SMS</h3>
                <p className="mb-4">
                  Napíšte nám na WhatsApp alebo SMS. Uveďte dátum, čas, trasu a dôvod sťažnosti.
                  Priložte fotku dokladu, ak ju máte.
                </p>
                <a href="https://api.whatsapp.com/send?phone=421902048583">
                  <Button className="btn-outline-white w-full">
                    WhatsApp: +421 902 048 583
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Ako prebieha vyhodnotenie</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Zaznamenáme vašu sťažnosť do systému</li>
              <li>Skontaktujeme vodiča a preveríme GPS záznam jazdy</li>
              <li>Vyhodnotíme situáciu objektívne</li>
              <li>Kontaktujeme vás s návrhom riešenia (do 48 hodín)</li>
              <li>Implementujeme riešenie (vrátenie, zľava, vysvetlenie)</li>
            </ol>
          </div>

          <Card className="mb-8 bg-green-500/10 border-green-500/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Naše záväzky</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Odpovieme na každú sťažnosť do 48 hodín</li>
                <li>Objektívne vyhodnotíme situáciu</li>
                <li>V prípade opodstatnenej sťažnosti ponúkneme riešenie</li>
                <li>Prijmeme opatrenia, aby sa situácia neopakovala</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">Čo priložiť k sťažnosti</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Dátum a čas jazdy</li>
            <li>Miesto vyzdvihnutia a cieľ</li>
            <li>Fotka dokladu alebo bloku (ak máte)</li>
            <li>Číslo vozidla alebo meno vodiča (ak si pamätáte)</li>
            <li>Podrobný popis problému</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/platba-v-taxiku">
              <Button variant="outline">Platba v taxíku</Button>
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
