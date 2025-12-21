import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

// 50 largest cities in Slovakia with distances from Zvolen (in km)
const citiesSlovakia = [
  { city: "Bratislava", distance: 195, region: "Bratislava" },
  { city: "Košice", distance: 212, region: "Košice" },
  { city: "Prešov", distance: 217, region: "Prešov" },
  { city: "Žilina", distance: 108, region: "Žilina" },
  { city: "Banská Bystrica", distance: 21, region: "Banská Bystrica" },
  { city: "Nitra", distance: 102, region: "Nitra" },
  { city: "Trnava", distance: 151, region: "Trnava" },
  { city: "Martin", distance: 79, region: "Žilina" },
  { city: "Trenčín", distance: 126, region: "Trenčín" },
  { city: "Poprad", distance: 136, region: "Prešov" },
  { city: "Prievidza", distance: 62, region: "Trenčín" },
  { city: "Považská Bystrica", distance: 142, region: "Trenčín" },
  { city: "Nové Zámky", distance: 142, region: "Nitra" },
  { city: "Spišská Nová Ves", distance: 163, region: "Košice" },
  { city: "Michalovce", distance: 290, region: "Košice" },
  { city: "Komárno", distance: 151, region: "Nitra" },
  { city: "Levice", distance: 81, region: "Nitra" },
  { city: "Humenné", distance: 288, region: "Prešov" },
  { city: "Bardejov", distance: 258, region: "Prešov" },
  { city: "Liptovský Mikuláš", distance: 95, region: "Žilina" },
  { city: "Ružomberok", distance: 73, region: "Žilina" },
  { city: "Piešťany", distance: 183, region: "Trnava" },
  { city: "Lučenec", distance: 59, region: "Banská Bystrica" },
  { city: "Topoľčany", distance: 104, region: "Nitra" },
  { city: "Čadca", distance: 141, region: "Žilina" },
  { city: "Dubnica nad Váhom", distance: 132, region: "Trenčín" },
  { city: "Dunajská Streda", distance: 172, region: "Trnava" },
  { city: "Vranov nad Topľou", distance: 259, region: "Prešov" },
  { city: "Partizánske", distance: 80, region: "Trenčín" },
  { city: "Rimavská Sobota", distance: 84, region: "Banská Bystrica" },
  { city: "Snina", distance: 308, region: "Prešov" },
  { city: "Dolný Kubín", distance: 89, region: "Žilina" },
  { city: "Trebišov", distance: 254, region: "Košice" },
  { city: "Sereď", distance: 139, region: "Trnava" },
  { city: "Hlohovec", distance: 134, region: "Trnava" },
  { city: "Šaľa", distance: 130, region: "Nitra" },
  { city: "Malacky", distance: 233, region: "Bratislava" },
  { city: "Galanta", distance: 141, region: "Trnava" },
  { city: "Pezinok", distance: 179, region: "Bratislava" },
  { city: "Svidník", distance: 268, region: "Prešov" },
  { city: "Rožňava", distance: 141, region: "Košice" },
  { city: "Detva", distance: 26, region: "Banská Bystrica" },
  { city: "Krupina", distance: 28, region: "Banská Bystrica" },
  { city: "Žiar nad Hronom", distance: 25, region: "Banská Bystrica" },
  { city: "Brezno", distance: 63, region: "Banská Bystrica" },
  { city: "Handlová", distance: 46, region: "Trenčín" },
  { city: "Nová Baňa", distance: 55, region: "Banská Bystrica" },
  { city: "Púchov", distance: 160, region: "Trenčín" },
  { city: "Bánovce nad Bebravou", distance: 97, region: "Trenčín" },
  { city: "Stará Ľubovňa", distance: 184, region: "Prešov" },
];

const sortedCities = [...citiesSlovakia].sort((a, b) => a.distance - b.distance);

export default function EnglishPricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
            Taxi Zvolen Price List
          </h1>
        </header>

        <section className="mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" aria-label="Taxi price list from Zvolen">
              <caption className="sr-only">Complete taxi price list from Zvolen to 50 Slovak cities</caption>
              <thead>
                <tr className="bg-yellow-500/20">
                  <th scope="col" className="border border-border p-4 text-left font-bold">Route</th>
                  <th scope="col" className="border border-border p-4 text-center font-bold">Distance</th>
                  <th scope="col" className="border border-border p-4 text-center font-bold">Price</th>
                  <th scope="col" className="border border-border p-4 text-left font-bold hidden md:table-cell">Region</th>
                </tr>
              </thead>
              <tbody>
                {sortedCities.map((item, index) => (
                  <tr
                    key={item.city}
                    className={`hover:bg-yellow-500/10 transition-colors ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                  >
                    <td className="border border-border p-4">
                      <strong className="text-yellow-500">Zvolen</strong> → <strong>{item.city}</strong>
                      <span className="block text-sm text-muted-foreground md:hidden">{item.region} region</span>
                    </td>
                    <td className="border border-border p-4 text-center">{item.distance} km</td>
                    <td className="border border-border p-4 text-center font-bold text-yellow-500 text-lg">
                      {item.distance <= 10 ? `from ${Math.round(item.distance * 1.0)}€` : `${Math.round(item.distance * 1.0)}€`}
                    </td>
                    <td className="border border-border p-4 hidden md:table-cell text-muted-foreground">
                      {item.region}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Popular Routes from Zvolen</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen to Bratislava Taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen to Bratislava</strong> is one of our most frequent routes. Distance 195 km,
                  price <strong>195€</strong>. Perfect for airport transfers, business trips, or visits.
                  The journey takes approximately 2 hours via highway.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-500">Zvolen to Košice Taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Zvolen to Košice</strong> transport to Eastern Slovakia. Distance 212 km,
                  price <strong>212€</strong>. Comfortable ride to the metropolis of the east, ideal for business
                  or personal purposes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">How is the taxi price from Zvolen calculated?</h3>
                <p className="text-muted-foreground">
                  The pricing is simple - <strong>1.00€ per kilometer</strong>. No hidden fees,
                  surcharges for luggage, or waiting time. The price in the list is final.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Can I pay by card?</h3>
                <p className="text-muted-foreground">
                  Yes, we accept cash and card payments. For longer routes, advance payment
                  or invoice billing for corporate customers is also possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center bg-yellow-500/10 rounded-xl p-8 border border-yellow-500/30">
          <h2 className="text-2xl font-bold mb-4">Book a Taxi from Zvolen</h2>
          <p className="text-muted-foreground mb-6">
            Call us or write via WhatsApp. We are available <strong>24/7</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+421902048583" aria-label="Call taxi at +421 902 048 583">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421902048583" aria-label="Order taxi via WhatsApp">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
                WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
