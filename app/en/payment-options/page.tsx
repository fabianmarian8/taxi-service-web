"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgePercent, Building2, MessageSquare, Phone, ReceiptText } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

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
            We accept cash, bank transfer, and invoice billing for companies. Approved corporate
            rides can receive a 25% discount.
          </p>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li><strong>Cash:</strong> Suitable for standard local rides.</li>
                <li><strong>Bank transfer:</strong> Available for booked rides and airport transfers.</li>
                <li><strong>Invoice:</strong> For corporate clients, hotels, and businesses.</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4">How company invoicing works</h2>
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card>
              <CardContent className="pt-6">
                <ReceiptText className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">1. Send company details</h3>
                <p className="text-muted-foreground text-base">
                  Share your company ID, billing details, and primary contact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Building2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">2. Book rides directly</h3>
                <p className="text-muted-foreground text-base">
                  Arrange one-off or recurring rides by phone or WhatsApp.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BadgePercent className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold mb-2">3. Corporate discount</h3>
                <p className="text-muted-foreground text-base">
                  Approved corporate rides can receive a 25% discount with invoice billing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full sm:w-auto">
              <Button size="lg" className="btn-yellow w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call taxi: {siteConfig.contact.phone}
              </Button>
            </a>
            <a href={siteConfig.social.whatsappUrl} className="w-full sm:w-auto">
              <Button size="lg" className="btn-outline-white w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </Button>
            </a>
          </div>

          <Link href="/en"><Button variant="outline">← Back to Homepage</Button></Link>
        </section>
      </article>
    </div>
  );
}
