import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, MapPin, Euro, Car } from "lucide-react";
import Link from "next/link";

// 50 najväčších miest Slovenska so vzdialenosťami od Zvolena (v km) - overené cestné vzdialenosti z Google Maps a vzdialenosti.sk
const mestaSlovensko = [
  { mesto: "Bratislava", vzdialenost: 195, kraj: "Bratislavský" },
  { mesto: "Košice", vzdialenost: 212, kraj: "Košický" },
  { mesto: "Prešov", vzdialenost: 217, kraj: "Prešovský" },
  { mesto: "Žilina", vzdialenost: 108, kraj: "Žilinský" },
  { mesto: "Banská Bystrica", vzdialenost: 21, kraj: "Banskobystrický" },
  { mesto: "Nitra", vzdialenost: 102, kraj: "Nitriansky" },
  { mesto: "Trnava", vzdialenost: 151, kraj: "Trnavský" },
  { mesto: "Martin", vzdialenost: 79, kraj: "Žilinský" },
  { mesto: "Trenčín", vzdialenost: 126, kraj: "Trenčiansky" },
  { mesto: "Poprad", vzdialenost: 136, kraj: "Prešovský" },
  { mesto: "Prievidza", vzdialenost: 62, kraj: "Trenčiansky" },
  { mesto: "Považská Bystrica", vzdialenost: 142, kraj: "Trenčiansky" },
  { mesto: "Nové Zámky", vzdialenost: 142, kraj: "Nitriansky" },
  { mesto: "Spišská Nová Ves", vzdialenost: 163, kraj: "Košický" },
  { mesto: "Michalovce", vzdialenost: 290, kraj: "Košický" },
  { mesto: "Komárno", vzdialenost: 151, kraj: "Nitriansky" },
  { mesto: "Levice", vzdialenost: 81, kraj: "Nitriansky" },
  { mesto: "Humenné", vzdialenost: 288, kraj: "Prešovský" },
  { mesto: "Bardejov", vzdialenost: 258, kraj: "Prešovský" },
  { mesto: "Liptovský Mikuláš", vzdialenost: 95, kraj: "Žilinský" },
  { mesto: "Ružomberok", vzdialenost: 73, kraj: "Žilinský" },
  { mesto: "Piešťany", vzdialenost: 183, kraj: "Trnavský" },
  { mesto: "Lučenec", vzdialenost: 59, kraj: "Banskobystrický" },
  { mesto: "Topoľčany", vzdialenost: 104, kraj: "Nitriansky" },
  { mesto: "Čadca", vzdialenost: 141, kraj: "Žilinský" },
  { mesto: "Dubnica nad Váhom", vzdialenost: 132, kraj: "Trenčiansky" },
  { mesto: "Dunajská Streda", vzdialenost: 172, kraj: "Trnavský" },
  { mesto: "Vranov nad Topľou", vzdialenost: 259, kraj: "Prešovský" },
  { mesto: "Partizánske", vzdialenost: 80, kraj: "Trenčiansky" },
  { mesto: "Rimavská Sobota", vzdialenost: 84, kraj: "Banskobystrický" },
  { mesto: "Snina", vzdialenost: 308, kraj: "Prešovský" },
  { mesto: "Dolný Kubín", vzdialenost: 89, kraj: "Žilinský" },
  { mesto: "Trebišov", vzdialenost: 254, kraj: "Košický" },
  { mesto: "Sereď", vzdialenost: 139, kraj: "Trnavský" },
  { mesto: "Hlohovec", vzdialenost: 134, kraj: "Trnavský" },
  { mesto: "Šaľa", vzdialenost: 130, kraj: "Nitriansky" },
  { mesto: "Malacky", vzdialenost: 233, kraj: "Bratislavský" },
  { mesto: "Galanta", vzdialenost: 141, kraj: "Trnavský" },
  { mesto: "Pezinok", vzdialenost: 179, kraj: "Bratislavský" },
  { mesto: "Svidník", vzdialenost: 268, kraj: "Prešovský" },
  { mesto: "Rožňava", vzdialenost: 141, kraj: "Košický" },
  { mesto: "Detva", vzdialenost: 26, kraj: "Banskobystrický" },
  { mesto: "Krupina", vzdialenost: 28, kraj: "Banskobystrický" },
  { mesto: "Žiar nad Hronom", vzdialenost: 25, kraj: "Banskobystrický" },
  { mesto: "Brezno", vzdialenost: 63, kraj: "Banskobystrický" },
  { mesto: "Handlová", vzdialenost: 46, kraj: "Trenčiansky" },
  { mesto: "Nová Baňa", vzdialenost: 55, kraj: "Banskobystrický" },
  { mesto: "Púchov", vzdialenost: 160, kraj: "Trenčiansky" },
  { mesto: "Bánovce nad Bebravou", vzdialenost: 97, kraj: "Trenčiansky" },
  { mesto: "Stará Ľubovňa", vzdialenost: 184, kraj: "Prešovský" },
];

// Zoradenie podľa vzdialenosti
const mestaZoradene = [...mestaSlovensko].sort((a, b) => a.vzdialenost - b.vzdialenost);

export default function CennikTaxiZvolen() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
            Cenník Taxi Zvolen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompletný prehľad cien taxi prepravy zo <strong>Zvolena</strong> do 50 najväčších miest Slovenska.
            Transparentné ceny <strong>0,80€ za kilometer</strong>.
          </p>
        </header>

        {/* Hlavné info karty */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-yellow-500/50 bg-yellow-500/10">
            <CardContent className="pt-6">
              <Euro className="w-12 h-12 mx-auto mb-4 text-yellow-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold mb-2">0,80€ / km</h2>
              <p className="text-muted-foreground">Jednoduchý cenník bez skrytých poplatkov</p>
            </CardContent>
          </Card>

          <Card className="text-center border-yellow-500/50 bg-yellow-500/10">
            <CardContent className="pt-6">
              <Car className="w-12 h-12 mx-auto mb-4 text-yellow-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold mb-2">Komfortné vozidlá</h2>
              <p className="text-muted-foreground">Klimatizované, čisté, pohodlné</p>
            </CardContent>
          </Card>

          <Card className="text-center border-yellow-500/50 bg-yellow-500/10">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold mb-2">Celé Slovensko</h2>
              <p className="text-muted-foreground">Preprava kamkoľvek na Slovensku</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA tlačidlá */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="tel:+421902048583" aria-label="Zavolať taxi na číslo +421 902 048 583">
            <Button size="lg" className="btn-yellow w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Zavolať: +421 902 048 583
            </Button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=421902048583" aria-label="Objednať taxi cez WhatsApp">
            <Button size="lg" className="btn-outline-white w-full sm:w-auto">
              <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
              WhatsApp objednávka
            </Button>
          </a>
        </div>

        {/* Cenník tabuľka */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Ceny taxi zo Zvolena do miest Slovenska
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" aria-label="Cenník taxi prepravy zo Zvolena">
              <caption className="sr-only">Kompletný cenník taxi služby zo Zvolena do 50 miest Slovenska</caption>
              <thead>
                <tr className="bg-yellow-500/20">
                  <th scope="col" className="border border-border p-4 text-left font-bold">Trasa</th>
                  <th scope="col" className="border border-border p-4 text-center font-bold">Vzdialenosť</th>
                  <th scope="col" className="border border-border p-4 text-center font-bold">Cena</th>
                  <th scope="col" className="border border-border p-4 text-left font-bold hidden md:table-cell">Kraj</th>
                </tr>
              </thead>
              <tbody>
                {mestaZoradene.map((item, index) => (
                  <tr
                    key={item.mesto}
                    className={`hover:bg-yellow-500/10 transition-colors ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                    id={`zvolen-${item.mesto.toLowerCase().replace(/\s+/g, '-')}-taxi`}
                  >
                    <td className="border border-border p-4">
                      <strong className="text-yellow-500">Zvolen</strong> → <strong>{item.mesto}</strong>
                      <span className="block text-sm text-muted-foreground md:hidden">{item.kraj} kraj</span>
                    </td>
                    <td className="border border-border p-4 text-center">{item.vzdialenost} km</td>
                    <td className="border border-border p-4 text-center font-bold text-yellow-500 text-lg">
                      {item.vzdialenost <= 30 ? `od ${Math.round(item.vzdialenost * 0.8)}€` : `${Math.round(item.vzdialenost * 0.8)}€`}
                    </td>
                    <td className="border border-border p-4 hidden md:table-cell text-muted-foreground">
                      {item.kraj}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO texty pre najdôležitejšie trasy */}
        <section className="mb-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Najobľúbenejšie trasy zo Zvolena</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen Bratislava taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen Bratislava taxi</strong> je jedna z najčastejších trás. Vzdialenosť 195 km,
                  cena <strong>156€</strong>. Ideálne pre transfer na letisko, obchodné cesty alebo návštevy.
                  Cesta trvá približne 2 hodiny po diaľnici.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen Košice taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen Košice taxi</strong> preprava na východ Slovenska. Vzdialenosť 212 km,
                  cena <strong>170€</strong>. Komfortná cesta do metropoly východu, ideálne pre business
                  alebo osobné účely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen Žilina taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen Žilina taxi</strong> - severné Slovensko na dosah. Vzdialenosť 108 km,
                  cena <strong>86€</strong>. Rýchla a pohodlná preprava do priemyselného centra severu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen Banská Bystrica taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen Banská Bystrica taxi</strong> - blízke mestá, výhodná cena. Len 21 km,
                  cena <strong>od 17€</strong>. Najčastejšia lokálna trasa pre každodenné potreby.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen Poprad taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen Poprad taxi</strong> - brána do Vysokých Tatier. Vzdialenosť 136 km,
                  cena <strong>109€</strong>. Ideálne pre turistov smerujúcich do hôr alebo na letisko Poprad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen Nitra taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen Nitra taxi</strong> - historické mesto na západe. Vzdialenosť 102 km,
                  cena <strong>82€</strong>. Preprava do univerzitného a kultúrneho centra Slovenska.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ sekcia pre SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Často kladené otázky</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Ako sa počíta cena taxi zo Zvolena?</h3>
                <p className="text-muted-foreground">
                  Cena je jednoduchá - <strong>0,80€ za každý kilometer</strong>. Žiadne skryté poplatky,
                  príplatky za batožinu ani čakaciu dobu. Cena uvedená v cenníku je finálna.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Môžem platiť kartou?</h3>
                <p className="text-muted-foreground">
                  Áno, akceptujeme platbu v hotovosti aj kartou. Pri dlhších trasách je možná
                  aj platba vopred alebo na faktúru pre firemných zákazníkov.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Je potrebná rezervácia vopred?</h3>
                <p className="text-muted-foreground">
                  Pre medzimestské trasy odporúčame rezerváciu aspoň niekoľko hodín vopred.
                  Pre dlhšie trasy (nad 100 km) ideálne deň vopred.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Aké vozidlá používate?</h3>
                <p className="text-muted-foreground">
                  Používame moderné, klimatizované vozidlá s dostatkom miesta pre 4 pasažierov
                  a batožinu. Na požiadanie vieme zabezpečiť aj väčšie vozidlo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Záverečné CTA */}
        <section className="text-center bg-yellow-500/10 rounded-xl p-8 border border-yellow-500/30">
          <h2 className="text-2xl font-bold mb-4">Objednajte taxi zo Zvolena</h2>
          <p className="text-muted-foreground mb-6">
            Zavolajte nám alebo napíšte cez WhatsApp. Sme k dispozícii <strong>24/7</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421902048583" aria-label="Zavolať taxi na číslo +421 902 048 583">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421902048583" aria-label="Objednať taxi cez WhatsApp">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp
              </Button>
            </a>
          </div>
        </section>

        {/* Interné odkazy */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Súvisiace služby</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/letiskova-preprava">
              <Button variant="outline">Letisková preprava</Button>
            </Link>
            <Link href="/platba-v-taxiku">
              <Button variant="outline">Platba v taxíku</Button>
            </Link>
            <Link href="/nonstop-taxi">
              <Button variant="outline">Nonstop taxi služba</Button>
            </Link>
            <Link href="/taxi-s-detskou-sedackou">
              <Button variant="outline">Taxi s detskou sedačkou</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
