"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentOptions() {
  const { setLanguage } = useLanguage();
  useEffect(() => { setLanguage("en"); }, [setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Payment Options
        </h1>
        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            We accept multiple payment methods for your convenience. Fixed prices agreed in advance.
          </p>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li><strong>Cash:</strong> Most common payment method</li>
                <li><strong>Bank Transfer:</strong> Available for all rides</li>
                <li><strong>Invoice:</strong> For corporate clients and businesses</li>
              </ul>
            </CardContent>
          </Card>
          <Link href="/en"><Button variant="outline">← Back to Homepage</Button></Link>
        </section>
      </article>
    </div>
  );
}
