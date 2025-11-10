import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Train, Bus, Clock, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function TaxiNaVlakAutobus() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Taxi na stanicu vo Zvolene – presné vyzdvihnutie a načasovanie</title>
        <meta name="description" content="Potrebujete stihnúť vlak alebo autobus? Poradíme, čo nahlásiť dispečerovi, aby ste dorazili načas, bez stresu." />
        <link rel="canonical" href="https://zvolen-taxi.sk/taxi-na-vlak-autobus" />
      </Helmet>

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Taxi na vlak a autobus
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Train className="w-8 h-8 text-yellow-500" />
                  <h2 className="text-xl font-semibold">Vlaková stanica</h2>
                </div>
                <p>
                  Transfer na/zo vlakovej stanice Zvolen je jedným z našich najžiadanejších služieb.
                  Zabezpečíme vám včasný príchod na stanicu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bus className="w-8 h-8 text-blue-500" />
                  <h2 className="text-xl font-semibold">Autobusová stanica</h2>
                </div>
                <p>
                  Či už cestujete do Banskej Bystrice alebo ďalej, pomôžeme vám stihnúť váš autobus
                  načas a bez stresu.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-yellow-500">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Ako na presné vyzdvihnutie</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Napíšte <strong>odchod/čas nástupu</strong> dopravy, nie len „na stanicu"
                </li>
                <li>
                  Uveďte <strong>nástupište</strong> alebo smer (východ/západ), ak ho viete
                </li>
                <li>
                  Pri príjazde vlakom pošlite <strong>číslo vlaku</strong> – sledujeme meškanie
                </li>
                <li>
                  Objednajte taxi aspoň <strong>15-20 minút</strong> pred plánovaným odchodom
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-6">Typy transferov na stanicu</h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ranné odchody</h3>
                    <p>
                      Ak plánujete odcestovať ráno (pred 8:00), objednajte si taxi večer vopred.
                      Ráno je vysoký dopyt a chcete mať istotu, že stihnete svoj vlak/autobus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vyzdvihnutie zo stanice</h3>
                    <p>
                      Keď prichádzate vlakom alebo autobusom, napíšte nám číslo vlaku/spoju.
                      Sledujeme meškania a upravíme čas vyzdvihnutia, aby ste nemuseli čakať.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Train className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">S batožinou</h3>
                    <p>
                      Ak cestujete s viacerými kuframi alebo väčšou batožinou, nahláste to pri objednávke.
                      Zabezpečíme vozidlo s dostatočným priestorom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Sledovanie vlakov a autobusov</h3>
            <p>
              Keď nám poskytnete číslo vlaku alebo spoja, aktívne sledujeme jeho polohu a meškanie.
              V prípade oneskorenia upravíme čas vyzdvihnutia, aby sme boli presne vtedy, keď vystúpite.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ceny transferov na stanicu</h2>
          <p className="text-lg mb-6">
            Transfer z centra Zvolena na vlakovú/autobusovú stanicu je jednou z najlacnejších
            služieb. Presné ceny závisejú od vašej presnej polohy, ale zvyčajne sa pohybujú
            medzi <strong>3,50 € - 5,00 €</strong>.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať vopred</Button>
            </Link>
            <Link href="/letiskova-preprava">
              <Button variant="outline">Letisková preprava</Button>
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
