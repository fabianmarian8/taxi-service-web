import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function useMetaTags() {
  const { language } = useLanguage();

  useEffect(() => {
    const t = getTranslation(language);
    const locale = language === "en" ? "en_US" : "sk_SK";
    const alternateLocale = language === "en" ? "sk_SK" : "en_US";

    // Update document title
    document.title = t.seo.title;

    // Helper function to update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    // Update primary meta tags
    updateMetaTag('meta[name="title"]', t.seo.title);
    updateMetaTag('meta[name="description"]', t.seo.description);
    updateMetaTag('meta[name="keywords"]', t.seo.keywords);
    updateMetaTag('meta[name="language"]', language === "en" ? "English" : "Slovak");

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', t.seo.ogTitle);
    updateMetaTag('meta[property="og:description"]', t.seo.ogDescription);
    updateMetaTag('meta[property="og:locale"]', locale);
    updateMetaTag('meta[property="og:locale:alternate"]', alternateLocale);

    // Update Twitter Card tags
    updateMetaTag('meta[property="twitter:title"]', t.seo.ogTitle);
    updateMetaTag('meta[property="twitter:description"]', t.seo.ogDescription);
  }, [language]);
}
