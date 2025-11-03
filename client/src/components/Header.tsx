import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="font-bold text-accent-foreground text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>T</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline" style={{ fontFamily: "'Sora', sans-serif" }}>LEST TAXI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            {t.nav.faq}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            {t.nav.contact}
          </button>
          <a
            href="/files"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            {language === "en" ? "Files" : "Súbory"}
          </a>
        </nav>

        {/* Right side - Language toggle and CTA */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
            title={language === "en" ? "Switch to Slovak" : "Switch to English"}
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-semibold">
              {language.toUpperCase()}
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t.hero.cta}
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-accent transition-colors text-left"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium hover:text-accent transition-colors text-left"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-accent transition-colors text-left"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-accent transition-colors text-left"
            >
              {t.nav.contact}
            </button>
            <a
              href="/files"
              className="text-sm font-medium hover:text-accent transition-colors text-left block"
            >
              {language === "en" ? "Files" : "Súbory"}
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t.hero.cta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
