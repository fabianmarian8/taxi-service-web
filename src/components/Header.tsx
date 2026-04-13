"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { NavDropdown, MobileNavDropdown } from "@/components/NavDropdown";
import {
  servicesNavItems,
  pricingNavItems,
  faqNavItems,
  blogNavItems,
  getAlternateUrl,
} from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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
      setOpenMobileDropdown(null);
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

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
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
              src="/flux-1-kontext-pro_a_Modern_logo_design_f.webp"
              alt="Zvolen Taxi Service"
              width={147}
              height={81}
              priority
              quality={90}
              className="h-[81px] w-auto"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 flex-1 justify-center"
          aria-label={language === "en" ? "Main navigation" : "Hlavná navigácia"}
        >
          <NavDropdown
            label={t.nav.services}
            items={servicesNavItems}
            language={language}
            onSectionClick={scrollToSection}
            ariaLabel={language === "en" ? "Services menu" : "Menu služby"}
          />

          <NavDropdown
            label={t.nav.pricing}
            items={pricingNavItems}
            language={language}
            onSectionClick={scrollToSection}
            ariaLabel={language === "en" ? "Pricing menu" : "Menu cenník"}
          />

          <NavDropdown
            label={t.nav.faq}
            items={faqNavItems}
            language={language}
            onSectionClick={scrollToSection}
            ariaLabel={language === "en" ? "FAQ menu" : "Menu FAQ"}
          />

          <NavDropdown
            label="BLOG"
            items={blogNavItems}
            language={language}
            onSectionClick={scrollToSection}
            ariaLabel={language === "en" ? "Blog menu" : "Blog menu"}
          />

          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link text-sm uppercase tracking-wide"
            aria-label={language === "en" ? "Go to contact section" : "Prejsť na sekciu kontakt"}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right side - Language toggle, CTA and Menu Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 text-white hover:bg-white/5 hover:text-accent"
            title={language === "en" ? "Switch to Slovak" : "Switch to English"}
            aria-label={language === "en" ? "Switch language to Slovak" : "Prepnúť jazyk na angličtinu"}
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline text-xs font-bold uppercase">
              {language}
            </span>
          </Button>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="hidden md:inline-flex btn-call items-center gap-2"
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
            className="container py-6 flex flex-col gap-4 px-8 md:px-12 lg:px-20"
            aria-label={language === "en" ? "Mobile navigation" : "Mobilná navigácia"}
          >
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to services section" : "Prejsť na sekciu služby"}
            >
              {t.nav.services}
            </button>

            <MobileNavDropdown
              label={t.nav.pricing}
              items={pricingNavItems}
              language={language}
              onSectionClick={scrollToSection}
              isExpanded={openMobileDropdown === "pricing"}
              onToggle={() => toggleMobileDropdown("pricing")}
              ariaLabel={language === "en" ? "Pricing menu" : "Menu cenník"}
            />

            <button
              onClick={() => scrollToSection("faq")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to FAQ section" : "Prejsť na sekciu často kladené otázky"}
            >
              {t.nav.faq}
            </button>

            <MobileNavDropdown
              label="BLOG"
              items={blogNavItems}
              language={language}
              onSectionClick={scrollToSection}
              isExpanded={openMobileDropdown === "blog"}
              onToggle={() => toggleMobileDropdown("blog")}
              ariaLabel={language === "en" ? "Blog menu" : "Blog menu"}
            />

            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-base text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to contact section" : "Prejsť na sekciu kontakt"}
            >
              {t.nav.contact}
            </button>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
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
