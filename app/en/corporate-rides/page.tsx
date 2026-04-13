import Header from "@/components/Header";
import CorporateRideForm from "@/components/CorporateRideForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import {
  BadgePercent,
  Building2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  Route,
} from "lucide-react";
import Link from "next/link";

export default function CorporateRidesPage() {
  const benefits = [
    {
      icon: ReceiptText,
      title: "Invoice billing",
      description: "We can set up clear B2B billing after receiving your company and invoice details.",
    },
    {
      icon: BadgePercent,
      title: "25% discount",
      description: "Available for approved corporate rides and recurring cooperation.",
    },
    {
      icon: Clock,
      title: "Priority dispatch",
      description: "Recurring ride requests and company bookings are handled faster and more clearly.",
    },
    {
      icon: Route,
      title: "City and airport routes",
      description: "Suitable for guests, management, staff transfers, and airport pickups.",
    },
  ];

  const audiences = [
    "Hotels, guesthouses, and reception desks",
    "Offices, business teams, and management",
    "Production companies and shift transport",
    "Recurring guest transport to airports or stations",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto max-w-6xl px-4 py-12">
        <header className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            For companies and hotels
          </p>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Corporate rides with invoice billing and 25% discount
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            If you need reliable transport for guests, employees, or regular business rides, we can
            set up a simple company flow. Phone, WhatsApp, or email, without a heavy booking system.
          </p>
        </header>

        <section className="mb-10 flex flex-col gap-4 sm:flex-row">
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="w-full sm:w-auto">
            <span className="w-full sm:w-auto btn-call">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              {siteConfig.contact.phone}
            </span>
          </a>
          <a href={siteConfig.social.whatsappUrl} className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-black sm:w-auto" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp
            </Button>
          </a>
        </section>

        <section className="mb-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-border bg-card p-5">
              <benefit.icon className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">{benefit.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-white">How cooperation works</h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">1. Company details</p>
                  <p className="text-muted-foreground">
                    Send your company name, company ID, billing details, and primary contact person.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">2. Ride type</p>
                  <p className="text-muted-foreground">
                    We define city rides, airport transfers, station pickups, or recurring staff transport.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">3. Terms and discount</p>
                  <p className="text-muted-foreground">
                    For approved corporate rides we can enable invoice billing and a 25% discount.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-white">Who this works for</h2>
              <div className="space-y-3">
                {audiences.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">In practice</p>
                <p className="mt-2 text-lg text-white">
                  We also handle late guest arrivals, early airport departures, and recurring morning rides.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="corporate-form" className="mb-14 scroll-mt-28">
          <CorporateRideForm language="en" />
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/en/pricing">
            <Card className="card-hover h-full border-border bg-card p-6">
              <MapPin className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">Pricing</h2>
              <p className="text-sm text-muted-foreground">
                Check indicative ride prices and main city or airport routes from Zvolen.
              </p>
            </Card>
          </Link>
          <Link href="/en/payment-options">
            <Card className="card-hover h-full border-border bg-card p-6">
              <ReceiptText className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">Payment and invoicing</h2>
              <p className="text-sm text-muted-foreground">
                Overview of payment methods, invoice billing, and company ride conditions.
              </p>
            </Card>
          </Link>
          <Link href="/en">
            <Card className="card-hover h-full border-border bg-card p-6">
              <Building2 className="mb-4 h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-white">Back to homepage</h2>
              <p className="text-sm text-muted-foreground">
                Find quick contact, services, FAQ, and the company ride highlights on the homepage.
              </p>
            </Card>
          </Link>
        </section>
      </article>
    </div>
  );
}
