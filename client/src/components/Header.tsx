import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";
import logoImage from "/taxigo-logo.webp";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="header-dark">
      <div className="container flex h-20 items-center justify-between">
        {/* Left - Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted/20 rounded-lg transition-colors text-white"
          aria-label={language === "en" ? "Toggle navigation menu" : "Prepínač navigačného menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
          <span className="sr-only">Menu</span>
        </button>

        {/* Center - Logo */}
        <div className="flex items-center justify-center flex-1 md:flex-initial">
          <img src={logoImage} alt="TaxiGO - Zvolen Taxi Service" className="h-[100px] w-auto" loading="eager" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" aria-label={language === "en" ? "Main navigation" : "Hlavná navigácia"}>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-semibold text-white hover:text-accent transition-colors uppercase tracking-wide"
            aria-label={language === "en" ? "Go to services section" : "Prejsť na sekciu služby"}
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-semibold text-white hover:text-accent transition-colors uppercase tracking-wide"
            aria-label={language === "en" ? "Go to pricing section" : "Prejsť na sekciu cenník"}
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-semibold text-white hover:text-accent transition-colors uppercase tracking-wide"
            aria-label={language === "en" ? "Go to FAQ section" : "Prejsť na sekciu často kladené otázky"}
          >
            {t.nav.faq}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-semibold text-white hover:text-accent transition-colors uppercase tracking-wide"
            aria-label={language === "en" ? "Go to contact section" : "Prejsť na sekciu kontakt"}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right side - Language toggle and CTA */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 text-white hover:text-accent hover:bg-muted/20"
            title={language === "en" ? "Switch to Slovak" : "Switch to English"}
            aria-label={language === "en" ? "Switch language to Slovak" : "Prepnúť jazyk na angličtinu"}
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline text-xs font-bold uppercase">
              {language}
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex bg-accent hover:bg-yellow-400 text-accent-foreground font-bold px-6 uppercase tracking-wide"
          >
            {language === "en" ? "BOOK NOW" : "REZERVOVAŤ"}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-black/98">
          <nav className="container py-6 flex flex-col gap-4" aria-label={language === "en" ? "Mobile navigation" : "Mobilná navigácia"}>
            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-semibold text-white hover:text-accent transition-colors text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to services section" : "Prejsť na sekciu služby"}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-base font-semibold text-white hover:text-accent transition-colors text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to pricing section" : "Prejsť na sekciu cenník"}
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-base font-semibold text-white hover:text-accent transition-colors text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to FAQ section" : "Prejsť na sekciu často kladené otázky"}
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-semibold text-white hover:text-accent transition-colors text-left py-2 uppercase tracking-wide"
              aria-label={language === "en" ? "Go to contact section" : "Prejsť na sekciu kontakt"}
            >
              {t.nav.contact}
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent hover:bg-yellow-400 text-accent-foreground font-bold mt-4 uppercase tracking-wide"
            >
              {language === "en" ? "BOOK NOW" : "REZERVOVAŤ"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
