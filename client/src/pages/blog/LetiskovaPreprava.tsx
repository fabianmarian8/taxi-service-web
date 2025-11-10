import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Clock, Luggage } from "lucide-react";
import { Link } from "wouter";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { useArticleSchema } from "@/hooks/useArticleSchema";

export default function LetiskovaPreprava() {
  useDocumentMeta({
    title: "Letisková preprava zo Zvolena – spoľahlivo a načas",
    description: "Individuálny odvoz na slovenské aj zahraničné letiská. Fixná cena po dohode, monitoring letu, pomoc s batožinou.",
    canonical: "https://zvolen-taxi.sk/letiskova-preprava"
  });

  useArticleSchema({
    headline: "Letisková preprava",
    description: "Individuálny odvoz na slovenské aj zahraničné letiská. Fixná cena po dohode, monitoring letu, pomoc s batožinou.",
    datePublished: "2025-11-08",
    dateModified: "2025-11-10",
    url: "https://zvolen-taxi.sk/letiskova-preprava"
  });

  return (
    <div className="min-h-screen bg-background">

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Letisková preprava
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Plane className="w-16 h-16 text-yellow-500 flex-shrink-0" />
            <p className="text-lg">
              Poskytujeme spoľahlivú a komfortnú prepravu na všetky hlavné letiská v regióne.
              Sledujeme vaše lety a prispôsobujeme sa meškaniam.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Letiská, na ktoré jazíme</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Bratislava (BTS)</h3>
                <p className="text-muted-foreground mb-2">M. R. Štefánik Airport</p>
                <p className="text-2xl font-bold text-yellow-500">~180 €</p>
                <p className="text-sm mt-2">Vzdialenosť: ~200 km | Čas: ~2 hodiny</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Viedeň (VIE)</h3>
                <p className="text-muted-foreground mb-2">Vienna International Airport</p>
                <p className="text-2xl font-bold text-yellow-500">~240 €</p>
                <p className="text-sm mt-2">Vzdialenosť: ~250 km | Čas: ~2,5 hodiny</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Budapešť (BUD)</h3>
                <p className="text-muted-foreground mb-2">Ferenc Liszt Airport</p>
                <p className="text-2xl font-bold text-yellow-500">~170 €</p>
                <p className="text-sm mt-2">Vzdialenosť: ~230 km | Čas: ~2,5 hodiny</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Košice (KSC)</h3>
                <p className="text-muted-foreground mb-2">Košice Airport</p>
                <p className="text-2xl font-bold text-yellow-500">~220 €</p>
                <p className="text-sm mt-2">Vzdialenosť: ~280 km | Čas: ~3 hodiny</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-yellow-500">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Čo nahlásiť pri objednávke</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Letisko a číslo letu</strong>, plánovaný <strong>čas odletu/príletu</strong>
                </li>
                <li>
                  <strong>Počet osôb a batožiny</strong> (nadrozmerná? športová?)
                </li>
                <li>
                  Preferovanú <strong>platbu</strong> a či chcete <strong>faktúru</strong>
                </li>
                <li>
                  <strong>Miesto vyzdvihnutia</strong> (presná adresa vo Zvolene alebo okolí)
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-6">Výhody našej letiskovej prepravy</h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Monitoring letov</h3>
                    <p>
                      Sledujeme váš let v reálnom čase. Pri meškaní alebo zmene času pristátia
                      automaticky upravíme čas vyzdvihnutia, aby sme boli na letisku presne vtedy,
                      keď budete potrebovať.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Luggage className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pomoc s batožinou</h3>
                    <p>
                      Naši vodiči vám pomôžu s nakladaním a vykladaním batožiny. Vozidlá majú
                      dostatočný priestor pre štandardnú batožinu aj nadrozmerné kusy (lyže,
                      golfové vybavenie, atď.).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vyzdvihnutie kdekoľvek</h3>
                    <p>
                      Vyzdvihneme vás z domu, hotela, práce alebo kdekoľvek vo Zvolene a okolí.
                      Na letisku vás privítame s menovkou a pomôžeme s batožinou.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Plane className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fixná cena vopred</h3>
                    <p>
                      Pri objednávke dostanete fixnú cenu, ktorá sa už nemení. Žiadne prekvapenia,
                      žiadne skryté poplatky. Platíte len to, na čom sme sa dohodli.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Tip pre cestujúcich</h3>
            <p className="mb-2">
              Odporúčame objednať transfer aspoň <strong>24 hodín vopred</strong>, najmä pri ranných
              a večerných letoch. Pri medzinárodných letoch počítajte s príchodom na letisko
              <strong> aspoň 2 hodiny pred odletom</strong>.
            </p>
            <p>
              Pre lety v skorých ranných hodinách (4:00-6:00) je potrebné objednať večer vopred.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ako objednať letiskový transfer</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Zavolajte nám alebo napíšte na WhatsApp</li>
            <li>Uveďte letisko, číslo letu a čas odletu/príletu</li>
            <li>Povedzšte počet osôb a batožiny</li>
            <li>Potvrďte miesto vyzdvihnutia</li>
            <li>Dostanete fixnú cenu a potvrdenie objednávky</li>
          </ol>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/platba-v-taxiku">
              <Button variant="outline">Platba v taxíku</Button>
            </Link>
            <Link href="/ako-podat-staznost">
              <Button variant="outline">Reklamácia jazdy</Button>
            </Link>
            <Link href="/kedy-volat-taxi-vopred">
              <Button variant="outline">Kedy volať vopred</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
