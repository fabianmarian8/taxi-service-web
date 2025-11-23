"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Service247() {
  const { setLanguage } = useLanguage();
  useEffect(() => { setLanguage("en"); }, [setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          24/7 Nonstop Service
        </h1>
        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            We're available around the clock - day, night, weekends, and holidays.
            Professional taxi service whenever you need it.
          </p>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li><strong>Night Service:</strong> Safe transport during late hours</li>
                <li><strong>Weekend & Holidays:</strong> Always available</li>
                <li><strong>Emergency Rides:</strong> Quick response when you need us most</li>
              </ul>
            </CardContent>
          </Card>
          <a href="tel:+421902048583" className="inline-block">
            <Button size="lg" className="btn-yellow">
              <Phone className="w-5 h-5 mr-2" />Call 24/7: +421 902 048 583
            </Button>
          </a>
          <div className="mt-8">
            <Link href="/en"><Button variant="outline">← Back to Homepage</Button></Link>
          </div>
        </section>
      </article>
    </div>
  );
}
