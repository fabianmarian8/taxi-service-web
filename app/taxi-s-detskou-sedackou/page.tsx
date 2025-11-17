"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
          Blog článok
        </h1>
        <p className="text-lg mb-6">Obsah bude migrovaný z pôvodnej Vite verzie.</p>
        <Link href="/">
          <Button>Späť na hlavnú stránku</Button>
        </Link>
      </article>
    </div>
  );
}
