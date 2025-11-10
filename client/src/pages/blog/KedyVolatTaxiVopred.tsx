import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function KedyVolatTaxiVopred() {
  useDocumentMeta({
    title: "Kedy objednať taxi vo Zvolene vopred – tipy podľa situácie",
    description: "Ranné špičky, víkendy, nádražia aj podujatia. Zistite, kedy vo Zvolene objednať taxi vopred a kedy stačí zavolať na poslednú chvíľu.",
    canonical: "https://zvolen-taxi.sk/kedy-volat-taxi-vopred"
  });

  return (
    <div className="min-h-screen bg-background">

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Kedy volať taxi vopred a kedy „hneď"
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <Card className="mb-8 border-yellow-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Objednať vopred (istota)</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Ráno (6:00–8:30)</strong> – dochádzka do práce/školy.</li>
                    <li><strong>Piatok–sobota večer/noc</strong> – vyšší dopyt.</li>
                    <li><strong>Stanica / nemocnica / väčšie akcie</strong> – veľa ľudí na jednom mieste.</li>
                    <li><strong>Viac zastávok, špeciálne požiadavky</strong> – napr. detská sedačka.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Stačí „hneď teraz"</h2>
                  <p className="text-lg">
                    Mimo špičky počas pracovného dňa, krátke jednosmerné trasy v meste.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <p className="text-lg">
              <strong>Tip:</strong> Ak meškáte, <strong>dajte vedieť</strong> – dispečer vie pozdržať auto alebo poslať iné.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Najčastejšie situácie</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Ranné špičky</h3>
                <p>
                  V čase medzi 6:00 a 8:30 je vysoký dopyt po taxi službách. Ak potrebujete taxi do práce alebo do školy,
                  objednajte si ju aspoň 30 minút vopred.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Víkendové večery</h3>
                <p>
                  Piatok a sobota večer sú najrušnejšie dni pre taxislužby. Odporúčame objednať taxi aspoň hodinu vopred,
                  najmä ak plánujete odchod z reštaurácie alebo baru.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Transfer na stanicu</h3>
                <p>
                  Pri presune na vlakovú alebo autobusovú stanicu je dôležité stihnúť spoj. Objednajte si taxi tak,
                  aby ste mali rezervu aspoň 15 minút pred odchodom.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/ako-objednat-taxi-bez-aplikacie">
              <Button variant="outline">Ako objednať bez aplikácie</Button>
            </Link>
            <Link href="/taxi-na-vlak-autobus">
              <Button variant="outline">Taxi na stanicu</Button>
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
