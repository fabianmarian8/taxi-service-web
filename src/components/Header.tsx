"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isFaqDropdownOpen, setIsFaqDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sk" : "en");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    // Ak sme na domovskej stránke, scrolluj hore
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Inak naviguj na domovskú stránku
      router.push("/");
    }
  };

  return (
    <header className="header-dark">
      <div className="container flex h-20 items-center justify-between px-8 md:px-12 lg:px-20">
        {/* Left - Logo */}
        <div className="flex items-center">
          <button
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label={language === "en" ? "Go to homepage" : "Prejsť na domovskú stránku"}
          >
            <Image
              src="/flux-1-kontext-pro_a_Modern_logo_design_f.png"
              alt="Zvolen Taxi Service"
              width={147}
              height={81}
              priority
              quality={90}
              className="h-[81px] w-auto"
            />
          </button>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" aria-label={language === "en" ? "Main navigation" : "Hlavná navigácia"}>
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              className="nav-link text-sm uppercase tracking-wide flex items-center gap-1"
              aria-label={language === "en" ? "Services menu" : "Menu služby"}
              aria-expanded={isServicesDropdownOpen}
            >
              {t.nav.services}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2 w-64 z-50">
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg">
                  <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "All Services" : "Všetky služby"}
                  </button>
                  <a href="/letiskova-preprava" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Airport Transfer" : "Letisková preprava"}
                  </a>
                  <a href="/taxi-na-vlak-autobus" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Station Transfer" : "Transfer na stanicu"}
                  </a>
                  <a href="/taxi-s-detskou-sedackou" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm">
                    {language === "en" ? "Child Seat" : "Detská sedačka"}
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("pricing")}
            className="nav-link text-sm uppercase tracking-wide"
            aria-label={language === "en" ? "Go to pricing section" : "Prejsť na sekciu cenník"}
          >
            {t.nav.pricing}
          </button>

          {/* FAQ Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsFaqDropdownOpen(true)}
            onMouseLeave={() => setIsFaqDropdownOpen(false)}
          >
            <button
              className="nav-link text-sm uppercase tracking-wide flex items-center gap-1"
              aria-label={language === "en" ? "FAQ menu" : "Menu FAQ"}
              aria-expanded={isFaqDropdownOpen}
            >
              {t.nav.faq}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isFaqDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2 w-64 z-50">
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg">
                  <button onClick={() => scrollToSection("faq")} className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "All FAQs" : "Všetky otázky"}
                  </button>
                  <a href="/ako-objednat-taxi-bez-aplikacie" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "How to Order Taxi" : "Ako objednať taxi"}
                  </a>
                  <a href="/kedy-volat-taxi-vopred" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "When to Book in Advance" : "Kedy volať vopred"}
                  </a>
                  <a href="/platba-v-taxiku" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm">
                    {language === "en" ? "Payment Options" : "Platba v taxíku"}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsBlogDropdownOpen(true)}
            onMouseLeave={() => setIsBlogDropdownOpen(false)}
          >
            <button
              className="nav-link text-sm uppercase tracking-wide flex items-center gap-1"
              aria-label={language === "en" ? "Blog menu" : "Blog menu"}
              aria-expanded={isBlogDropdownOpen}
            >
              BLOG
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isBlogDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2 w-64 z-50">
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg">
                  <a href="/ako-objednat-taxi-bez-aplikacie" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "How to Order Taxi" : "Ako objednať taxi"}
                  </a>
                  <a href="/kedy-volat-taxi-vopred" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "When to Book in Advance" : "Kedy volať vopred"}
                  </a>
                  <a href="/platba-v-taxiku" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Payment Options" : "Platba v taxíku"}
                  </a>
                  <a href="/taxi-s-detskou-sedackou" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Child Seat" : "Detská sedačka"}
                  </a>
                  <a href="/taxi-na-vlak-autobus" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Station Transfer" : "Transfer na stanicu"}
                  </a>
                  <a href="/letiskova-preprava" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Airport Transfer" : "Letisková preprava"}
                  </a>
                  <a href="/ako-podat-staznost" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm border-b border-gray-200">
                    {language === "en" ? "Complaints" : "Reklamácia"}
                  </a>
                  <a href="/nonstop-taxi" className="block px-4 py-3 hover:bg-gray-100 text-black text-sm">
                    {language === "en" ? "24/7 Service" : "Nonstop služba"}
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link text-sm uppercase tracking-wide"
            aria-label={language === "en" ? "Go to contact section" : "Prejsť na sekciu kontakt"}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right side - Language toggle, CTA and Menu Button (Mobile) */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 text-black hover:text-accent hover:bg-muted/20"
            title={language === "en" ? "Switch to Slovak" : "Switch to English"}
            aria-label={language === "en" ? "Switch language to Slovak" : "Prepnúť jazyk na angličtinu"}
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline text-xs font-bold uppercase">
              {language}
            </span>
          </Button>

          <a
            href="tel:+421902048583"
            className="hidden md:inline-flex btn-call"
          >
            {language === "en" ? "CALL NOW" : "ZAVOLAŤ"}
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted/20 rounded-lg transition-colors text-black"
            aria-label={language === "en" ? "Toggle navigation menu" : "Prepínač navigačného menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-gray-200">
          <nav className="container py-6 flex flex-col gap-4 px-8 md:px-12 lg:px-20" aria-label={language === "en" ? "Mobile navigation" : "Mobilná navigácia"}>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to services section" : "Prejsť na sekciu služby"}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to pricing section" : "Prejsť na sekciu cenník"}
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to FAQ section" : "Prejsť na sekciu často kladené otázky"}
            >
              {t.nav.faq}
            </button>

            {/* Blog Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                className="nav-link text-base text-left py-2 uppercase tracking-wide flex items-center gap-2 w-full"
                aria-expanded={isBlogDropdownOpen}
              >
                BLOG
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isBlogDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>

              {isBlogDropdownOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <a href="/ako-objednat-taxi-bez-aplikacie" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "How to Order Taxi" : "Ako objednať taxi"}
                  </a>
                  <a href="/kedy-volat-taxi-vopred" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "When to Book in Advance" : "Kedy volať vopred"}
                  </a>
                  <a href="/platba-v-taxiku" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "Payment Options" : "Platba v taxíku"}
                  </a>
                  <a href="/taxi-s-detskou-sedackou" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "Child Seat" : "Detská sedačka"}
                  </a>
                  <a href="/taxi-na-vlak-autobus" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "Station Transfer" : "Transfer na stanicu"}
                  </a>
                  <a href="/letiskova-preprava" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "Airport Transfer" : "Letisková preprava"}
                  </a>
                  <a href="/ako-podat-staznost" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "Complaints" : "Reklamácia"}
                  </a>
                  <a href="/nonstop-taxi" className="text-black text-sm py-2 hover:text-accent">
                    {language === "en" ? "24/7 Service" : "Nonstop služba"}
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to contact section" : "Prejsť na sekciu kontakt"}
            >
              {t.nav.contact}
            </button>
            <a
              href="tel:+421902048583"
              className="w-full btn-call mt-4"
            >
              {language === "en" ? "CALL NOW" : "ZAVOLAŤ"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
