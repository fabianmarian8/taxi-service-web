// Centralizované URL mapovanie medzi SK a EN verziami
export const URL_MAPPING: Record<string, string> = {
  // SK -> EN
  "/": "/en/",
  "/letiskova-preprava": "/en/airport-transfer",
  "/ako-objednat-taxi-bez-aplikacie": "/en/how-to-order-taxi",
  "/platba-v-taxiku": "/en/payment-options",
  "/taxi-s-detskou-sedackou": "/en/child-seat",
  "/nonstop-taxi": "/en/24-7-service",
  "/cennik-taxi-zvolen": "/en/pricing",
  "/ako-podat-staznost": "/en/complaints",
  "/kedy-volat-taxi-vopred": "/en/when-to-book",
  "/taxi-na-vlak-autobus": "/en/station-transfer",
  // EN -> SK (reverse mapping)
  "/en/": "/",
  "/en/airport-transfer": "/letiskova-preprava",
  "/en/how-to-order-taxi": "/ako-objednat-taxi-bez-aplikacie",
  "/en/payment-options": "/platba-v-taxiku",
  "/en/child-seat": "/taxi-s-detskou-sedackou",
  "/en/24-7-service": "/nonstop-taxi",
  "/en/pricing": "/cennik-taxi-zvolen",
  "/en/complaints": "/ako-podat-staznost",
  "/en/when-to-book": "/kedy-volat-taxi-vopred",
  "/en/station-transfer": "/taxi-na-vlak-autobus",
};

// Navigačné položky pre dropdown menu
export interface NavItem {
  labelSk: string;
  labelEn: string;
  href: string;
  isSection?: boolean; // true ak ide o scroll na sekciu
}

export const servicesNavItems: NavItem[] = [
  { labelSk: "Všetky služby", labelEn: "All Services", href: "services", isSection: true },
  { labelSk: "Letisková preprava", labelEn: "Airport Transfer", href: "/letiskova-preprava" },
  { labelSk: "Transfer na stanicu", labelEn: "Station Transfer", href: "/taxi-na-vlak-autobus" },
  { labelSk: "Detská sedačka", labelEn: "Child Seat", href: "/taxi-s-detskou-sedackou" },
];

export const pricingNavItems: NavItem[] = [
  { labelSk: "Rýchly cenník", labelEn: "Quick Pricing", href: "pricing", isSection: true },
  { labelSk: "Detailný cenník", labelEn: "Detailed Price List", href: "/cennik-taxi-zvolen" },
];

export const faqNavItems: NavItem[] = [
  { labelSk: "Všetky otázky", labelEn: "All FAQs", href: "faq", isSection: true },
  { labelSk: "Ako objednať taxi", labelEn: "How to Order Taxi", href: "/ako-objednat-taxi-bez-aplikacie" },
  { labelSk: "Kedy volať vopred", labelEn: "When to Book in Advance", href: "/kedy-volat-taxi-vopred" },
  { labelSk: "Platba v taxíku", labelEn: "Payment Options", href: "/platba-v-taxiku" },
];

export const blogNavItems: NavItem[] = [
  { labelSk: "Ako objednať taxi", labelEn: "How to Order Taxi", href: "/ako-objednat-taxi-bez-aplikacie" },
  { labelSk: "Kedy volať vopred", labelEn: "When to Book in Advance", href: "/kedy-volat-taxi-vopred" },
  { labelSk: "Platba v taxíku", labelEn: "Payment Options", href: "/platba-v-taxiku" },
  { labelSk: "Detská sedačka", labelEn: "Child Seat", href: "/taxi-s-detskou-sedackou" },
  { labelSk: "Transfer na stanicu", labelEn: "Station Transfer", href: "/taxi-na-vlak-autobus" },
  { labelSk: "Letisková preprava", labelEn: "Airport Transfer", href: "/letiskova-preprava" },
  { labelSk: "Reklamácia", labelEn: "Complaints", href: "/ako-podat-staznost" },
  { labelSk: "Nonstop služba", labelEn: "24/7 Service", href: "/nonstop-taxi" },
];

// Helper na získanie lokalizovanej URL
export const getLocalizedUrl = (skUrl: string, language: "sk" | "en"): string => {
  if (language === "en") {
    return URL_MAPPING[skUrl] || skUrl;
  }
  return skUrl;
};

// Helper na získanie alternatívnej URL pre prepnutie jazyka
export const getAlternateUrl = (pathname: string, currentLanguage: "sk" | "en"): string => {
  return URL_MAPPING[pathname] || (currentLanguage === "en" ? "/" : "/en/");
};
