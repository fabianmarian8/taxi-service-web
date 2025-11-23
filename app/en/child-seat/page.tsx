"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ChildSeat() {
  const { setLanguage } = useLanguage();
  useEffect(() => { setLanguage("en"); }, [setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Taxi with Child Seat
        </h1>
        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">
            Safe transport for families with children. Child seats available upon request.
            Book in advance to ensure availability.
          </p>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p>
                <strong>Important:</strong> Please mention when booking that you need a child seat,
                including the child's age and approximate weight for proper seat selection.
              </p>
            </CardContent>
          </Card>
          <Link href="/en"><Button variant="outline">← Back to Homepage</Button></Link>
        </section>
      </article>
    </div>
  );
}
