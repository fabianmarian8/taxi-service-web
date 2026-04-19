"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { NavDropdown, MobileNavDropdown } from "@/components/NavDropdown";
import { getAlternateUrl, pricingNavItems } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const targetUrl = getAlternateUrl(pathname, language);
    router.push(targetUrl);
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
    const homePage = language === "en" ? "/en/" : "/";
    if (pathname === homePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(homePage);
    }
  };

  const pricingLabel = language === "en" ? "Pricing" : "Cenník";
  const [pricingMobileOpen, setPricingMobileOpen] = useState(false);

  return (
    <header className="header-dark">
      <div className="container flex h-20 items-center justify-between px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label={language === "en" ? "Go to homepage" : "Prejsť na domovskú stránku"}
          >
            <Image
              src="/logo-zvolen-taxi-transparent.png"
              alt="Zvolen Taxi Service"
              width={150}
              height={48}
              priority
              quality={90}
              className="h-12 w-auto"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 flex-1 justify-center"
          aria-label={language === "en" ? "Main navigation" : "Hlavná navigácia"}
        >
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link text-[13px] font-semibold uppercase tracking-[0.08em]"
          >
            {language === "en" ? "Services" : "Služby"}
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className="nav-link text-[13px] font-semibold uppercase tracking-[0.08em]"
          >
            {language === "en" ? "Why us" : "Prečo my"}
          </button>
          <NavDropdown
            label={pricingLabel}
            items={pricingNavItems}
            language={language}
            onSectionClick={scrollToSection}
            ariaLabel={language === "en" ? "Pricing menu" : "Menu cenník"}
          />
          <button
            onClick={() => scrollToSection("faq")}
            className="nav-link text-[13px] font-semibold uppercase tracking-[0.08em]"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link text-[13px] font-semibold uppercase tracking-[0.08em]"
          >
            {language === "en" ? "Contact" : "Kontakt"}
          </button>
        </nav>

        {/* Right side - Language toggle + CTA + Mobile menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="hidden sm:inline-flex rounded bg-transparent border border-white/20 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] text-white transition-colors hover:border-white/40 hover:bg-white/5"
            title={language === "en" ? "Switch to Slovak" : "Switch to English"}
            aria-label={language === "en" ? "Switch language to Slovak" : "Prepnúť jazyk na angličtinu"}
          >
            {language === "en" ? "SK" : "EN"}
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="hidden md:inline-flex btn-call items-center gap-2 text-[13px]"
            style={{ padding: "10px 16px" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.contact.phone}
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/5 md:hidden"
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
        <div id="mobile-menu" className="border-t border-white/10 bg-black/95 md:hidden">
          <nav
            className="container py-6 flex flex-col gap-3 px-6"
            aria-label={language === "en" ? "Mobile navigation" : "Mobilná navigácia"}
          >
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
            >
              {language === "en" ? "Services" : "Služby"}
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
            >
              {language === "en" ? "Why us" : "Prečo my"}
            </button>
            <MobileNavDropdown
              label={pricingLabel}
              items={pricingNavItems}
              language={language}
              onSectionClick={scrollToSection}
              isExpanded={pricingMobileOpen}
              onToggle={() => setPricingMobileOpen(!pricingMobileOpen)}
              ariaLabel={language === "en" ? "Pricing menu" : "Menu cenník"}
            />
            <button
              onClick={() => scrollToSection("faq")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
            >
              {language === "en" ? "Contact" : "Kontakt"}
            </button>

            <button
              onClick={toggleLanguage}
              className="mt-2 inline-flex w-fit rounded bg-transparent border border-white/20 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] text-white"
            >
              {language === "en" ? "SK" : "EN"}
            </button>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full btn-call mt-3"
            >
              {language === "en" ? "CALL NOW" : "ZAVOLAŤ"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
