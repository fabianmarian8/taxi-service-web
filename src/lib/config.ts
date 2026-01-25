// Centralizovaná konfigurácia - jedno miesto pre všetky kontaktné údaje
export const siteConfig = {
  // Kontaktné údaje
  contact: {
    phone: "+421 902 048 583",
    phoneRaw: "+421902048583",
    whatsapp: "+421 919 040 118",
    whatsappRaw: "421919040118",
    email: "info@zvolen-taxi.sk",
  },

  // Adresa
  address: {
    street: "Námestie SNP 63",
    postalCode: "960 01",
    city: "Zvolen",
    region: "Banskobystrický kraj",
    country: "SK",
    countryFull: "Slovakia",
  },

  // Geo súradnice
  geo: {
    latitude: 48.5764,
    longitude: 19.1251,
    region: "SK-BC",
  },

  // SEO & Branding
  brand: {
    name: "Taxi Service Zvolen",
    shortName: "ZVOLEN TAXI",
    alternateNames: ["Zvolen Taxi", "ZV Taxi", "Taxi Zvolen"],
    url: "https://zvolen-taxi.sk",
    logo: "/favicon.png",
    ogImage: "/og-image.jpg",
  },

  // Hodnotenia
  rating: {
    value: "4.8",
    count: "127",
    bestRating: "5",
    worstRating: "1",
  },

  // Analytics
  analytics: {
    googleId: "G-G5NKCS80W0",
    clarityId: "u32b6wmhp2",
    googleVerification: "lQ4KKwYBn_4OAit-CY6Ye57Iwl19XvSjDe4yfLLPSJc",
  },

  // Social
  social: {
    whatsappUrl: "https://api.whatsapp.com/send?phone=421919040118",
  },
} as const;

// Helper funkcie
export const getPhoneLink = () => `tel:${siteConfig.contact.phoneRaw}`;
export const getWhatsAppLink = () => siteConfig.social.whatsappUrl;
export const getFullAddress = () =>
  `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;

// Typ pre TypeScript
export type SiteConfig = typeof siteConfig;
