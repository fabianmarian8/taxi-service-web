import { Button } from "@/components/ui/button";
import { Home, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Stránka nenájdená | Taxi Zvolen",
  description: "Táto stránka neexistuje. Vráťte sa na domovskú stránku alebo nás kontaktujte.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="text-9xl font-bold text-yellow-500 mb-4">404</div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Stránka nenájdená
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Táto stránka neexistuje alebo bola presunutá.
          Možno hľadáte niektorú z našich služieb?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Domovská stránka
            </Button>
          </Link>
          <a href="tel:+421902048583">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Zavolať taxi
            </Button>
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="mb-2">Populárne stránky:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/letiskova-preprava" className="hover:underline">
              Letisková preprava
            </Link>
            <span>•</span>
            <Link href="/cennik-taxi-zvolen" className="hover:underline">
              Cenník
            </Link>
            <span>•</span>
            <Link href="/nonstop-taxi" className="hover:underline">
              Nonstop taxi
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Späť na hlavnú stránku
          </Link>
        </div>
      </div>
    </div>
  );
}
