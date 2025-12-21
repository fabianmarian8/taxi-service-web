import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export default function StationTransferPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Taxi to Train or Bus Station
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-8 text-xl">
            Need to catch a train or bus in Zvolen? Here is how to ensure you arrive on time without stress.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How to Ensure Precise Pickup</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Provide departure time</strong> – Tell us when your train leaves, not just "to the station".</li>
            <li><strong>Specify entrance</strong> – Let us know if you want to be dropped at the main entrance or a specific platform.</li>
            <li><strong>Arrival tracking</strong> – If arriving by train, send us your train number – we track delays.</li>
          </ul>

          <div className="bg-card p-6 rounded-lg border border-border mb-8">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <MapPin className="text-yellow-500" /> Key Locations in Zvolen:
            </h3>
            <ul className="space-y-1">
              <li>• Zvolen Main Train Station (Hlavná stanica)</li>
              <li>• Zvolen Bus Station (Autobusová stanica)</li>
              <li>• Zvolen Mesto (Small train stop)</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="tel:+421902048583">
            <Button size="lg" className="btn-yellow">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +421 902 048 583
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
}
