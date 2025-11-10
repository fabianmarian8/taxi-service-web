import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Moon, AlertCircle, Shield } from "lucide-react";
import { Link } from "wouter";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function NonstopTaxi() {
  useDocumentMeta({
    title: "Nonstop taxi Zvolen – dostupnosť v noci a cez víkendy",
    description: "Ako funguje nonstop taxi vo Zvolene, čo očakávať v noci a na čo sa pripraviť počas víkendov a sviatkov.",
    canonical: "https://zvolen-taxi.sk/nonstop-taxi"
  });

  return (
    <div className="min-h-screen bg-background">

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Nonstop taxi: čo to znamená v praxi
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-16 h-16 text-yellow-500 flex-shrink-0" />
            <p className="text-lg">
              Naša taxislužba je k dispozícii <strong>24 hodín denne, 7 dní v týždni</strong>.
              Či potrebujete taxi ráno o 5:00 alebo neskoro v noci, vždy sme tu pre vás.
            </p>
          </div>

          <Card className="mb-8 border-yellow-500">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Realita nonstop prevádzky</h2>
              <ul className="list-disc list-inside space-y-3">
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

          <h2 className="text-2xl font-semibold mb-6">Nočná prevádzka (22:00 - 6:00)</h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Moon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nočné hodiny</h3>
                    <p>
                      V nočných hodinách (22:00 - 6:00) je menší počet dostupných vozidiel.
                      Odporúčame objednať taxi aspoň 15-20 minút vopred, aby ste mali istotu,
                      že vám pridelíme vozidlo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bezpečnosť v noci</h3>
                    <p>
                      Všetky naše vozidlá sú vybavené GPS trackingom a kamerami. Vodiči sú
                      školení na bezpečnú jazdu v nočných podmienkach. Vaša bezpečnosť je
                      našou prioritou.
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
                    <h3 className="text-xl font-semibold mb-2">Ranné hodiny (4:00 - 6:00)</h3>
                    <p>
                      Pre jazdy v skorých ranných hodinách odporúčame objednať taxi večer vopred.
                      V tomto čase je vysoký dopyt pre transfery na letisko a do práce.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Víkendová prevádzka</h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Piatok a sobota večer</h3>
              <p className="mb-4">
                Víkendové večery sú najrušnejšie časy pre taxislužby. Mnoho ľudí sa vracia
                z reštaurácií, barov a podujatí. V tomto čase môže byť dojazd taxi dlhší,
                odporúčame preto:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Objednať taxi aspoň 30-60 minút vopred</li>
                <li>Byť flexibilný s časom vyzdvihnutia</li>
                <li>Mať alternatívny spôsob dopravy ako zálohu</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-6">Sviatky a špeciálne dni</h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Silvester</h3>
                  <p>
                    Najrušnejší deň v roku. Odporúčame objednať taxi aspoň 2-3 hodiny vopred.
                    Ceny môžu byť vyššie kvôli vysokému dopytu.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Veľká noc, Vianoce</h3>
                  <p>
                    Počas sviatkov je znížený počet dostupných vozidiel. Objednajte vopred,
                    najmä pre transfery na stanicu alebo letisko.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mestské podujatia</h3>
                  <p>
                    Pri veľkých podujatiach vo Zvolene (festivaly, koncerty) môže byť dopyt
                    výrazne vyšší. Plánujte dopravu vopred.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Tip pre zákazníkov</h3>
            <p className="mb-2">
              Aj keď sme k dispozícii nonstop, neznamená to, že vozidlo je vždy hneď dostupné.
              Pri vysokom dopyte môže trvať dlhšie, kým sa k vám taxi dostane.
            </p>
            <p>
              <strong>Objednajte vopred</strong> vždy, keď je to možné, aby ste mali istotu.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ako sa pripraviť na nočnú jazdu</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Objednajte taxi aspoň 15-20 minút vopred</li>
            <li>Majte telefón nabitý</li>
            <li>Overte si SPZ a farbu vozidla pred nastúpením</li>
            <li>Pri nástupe skontrolujte, či je to váše objednané taxi</li>
            <li>Zdieľajte svoju polohu s niekým, komu dôverujete</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať vopred</Button>
            </Link>
            <Link href="/taxi-na-vlak-autobus">
              <Button variant="outline">Taxi na stanicu</Button>
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
