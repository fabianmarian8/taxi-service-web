"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AirportTransfer() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage("en");
  }, [setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Airport Transfer
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Individual transfer to Slovak and international airports. Fixed price by agreement,
            flight monitoring, luggage assistance.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What to Report</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong>Airport and flight number</strong>, planned <strong>departure/arrival time</strong>
                </li>
                <li>
                  <strong>Number of people and luggage</strong> (oversized? sports equipment?)
                </li>
                <li>
                  Preferred <strong>payment method</strong> and whether you need an <strong>invoice</strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <CardContent className="pt-6">
              <p className="text-lg">
                <strong>Tip:</strong> For flights, book your taxi well in advance.
                We recommend booking at least one day ahead for comfortable airport arrival.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <a href="tel:+421902048583" className="w-full sm:w-auto">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call taxi: +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421902048583" className="w-full sm:w-auto">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp: +421 902 048 583
              </Button>
            </a>
          </div>

          <h3 className="text-xl font-semibold mb-3">Related Articles</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/en/payment-options">
              <Button variant="outline">Payment Options</Button>
            </Link>
            <Link href="/en/24-7-service">
              <Button variant="outline">24/7 Service</Button>
            </Link>
            <Link href="/en">
              <Button variant="outline">← Back to Homepage</Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
