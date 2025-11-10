import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Shield, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function TaxiSDetskouSedackou() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Taxi vo Zvolene s detskou sedačkou – bezpečne a pohodlne</title>
        <meta name="description" content="Cestujete s dieťaťom? Povieme vám, ako si objednať taxi s vhodnou detskou sedačkou vo Zvolene a čo nahlásiť dopredu." />
        <link rel="canonical" href="https://zvolen-taxi.sk/taxi-s-detskou-sedackou" />
      </Helmet>

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Taxi s detskou sedačkou
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Baby className="w-16 h-16 text-yellow-500 flex-shrink-0" />
            <p className="text-lg">
              Bezpečnosť vašich detí je pre nás prioritou. Ponúkame taxi služby s detskou sedačkou
              pre bezpečnú a pohodlnú prepravu najmenších cestujúcich.
            </p>
          </div>

          <Card className="mb-8 border-yellow-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Ako objednať</h2>
                  <p className="text-lg mb-4">
                    Pri rezervácii uveďte: <strong>vek/drobná výška dieťaťa</strong>, či stačí <strong>podsedák</strong> alebo
                    treba <strong>plnohodnotnú sedačku</strong>. Vodič tak pripraví správny typ.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-6">Typy detských sedačiek</h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Autosedačka pre batoľatá (0-18 kg)</h3>
                <p>
                  Pre najmenšie deti od narodenia do cca 4 rokov. Sedačka je otočená proti smeru jazdy
                  pre maximálnu bezpečnosť.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Autosedačka pre deti (9-36 kg)</h3>
                <p>
                  Pre deti od 1 do 12 rokov. Sedačka je otočená v smere jazdy a má nastaviteľnú výšku.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Podsedák (15-36 kg)</h3>
                <p>
                  Pre väčšie deti od cca 4 rokov. Zvyšuje výšku dieťaťa, aby bezpečnostný pás správne
                  sedel na hrudi a bokoch.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Tip pre rodičov</h3>
            <p className="mb-2">
              Pri dvoch a viac deťoch uveďte počet a približný vek – sedačky sa líšia a potrebujeme
              pripraviť správne vybavenie.
            </p>
            <p>
              Ak cestujete s vlastnou sedačkou, nahláste to pri objednávke. Pomôžeme vám ju namontovať.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Prečo je detská sedačka dôležitá?</h2>
          <p className="text-lg mb-6">
            Detská sedačka nie je len zákonnou povinnosťou, ale hlavne <strong>ochranou života vašich detí</strong>.
            Pri náraze alebo prudkom zabrzdení vie autosedačka zachrániť život alebo predísť vážnym zraneniam.
          </p>

          <Card className="mb-8 bg-yellow-500/10 border-yellow-500/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Ako objednať taxi s detskou sedačkou</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Zavolajte na naše číslo alebo napíšte na WhatsApp</li>
                <li>Uveďte vek a približnú váhu dieťaťa</li>
                <li>Špecifikujte typ sedačky, ak máte preference</li>
                <li>Potvrďte čas a miesto vyzdvihnutia</li>
              </ol>
              <div className="mt-6">
                <a href="tel:+421902048583">
                  <Button size="lg" className="btn-yellow w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Zavolať taxi: +421 902 048 583
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-3 mt-8">Súvisiace články</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/ako-objednat-taxi-bez-aplikacie">
              <Button variant="outline">Ako objednať bez aplikácie</Button>
            </Link>
            <Link href="/platba-v-taxiku">
              <Button variant="outline">Platba v taxíku</Button>
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
