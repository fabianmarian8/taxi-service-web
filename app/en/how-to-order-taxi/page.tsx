"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function HowToOrderTaxi() {
  const { setLanguage } = useLanguage();
  useEffect(() => { setLanguage("en"); }, [setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          How to Order Taxi Without App
        </h1>
        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            No app needed! Order your taxi easily by phone, SMS, or WhatsApp.
            We respond quickly and confirm your booking with a fixed price.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Quick Booking Options</h2>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li><strong>Phone Call:</strong> +421 902 048 583 (instant confirmation)</li>
                <li><strong>WhatsApp:</strong> Message us your pickup location and destination</li>
                <li><strong>SMS:</strong> Text your details and we'll call you back</li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <a href="tel:+421902048583" className="w-full sm:w-auto">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />Call: +421 902 048 583
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=421902048583" className="w-full sm:w-auto">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" />WhatsApp
              </Button>
            </a>
          </div>
          <Link href="/en"><Button variant="outline">← Back to Homepage</Button></Link>
        </section>
      </article>
    </div>
  );
}
