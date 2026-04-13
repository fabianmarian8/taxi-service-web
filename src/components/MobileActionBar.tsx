"use client";

import { usePathname } from "next/navigation";
import { Building2, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";
import { getLocalizedUrl } from "@/lib/routes";

export default function MobileActionBar() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const corporatePage = getLocalizedUrl("/firemne-jazdy", language);
  const corporateHref = pathname === corporatePage ? "#corporate-form" : corporatePage;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[70] md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex min-h-[60px] flex-col items-center justify-center rounded-xl bg-accent px-2 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-black"
        >
          <Phone className="mb-1 h-4 w-4" aria-hidden="true" />
          {language === "en" ? "Call" : "Volať"}
        </a>

        <a
          href={siteConfig.social.whatsappUrl}
          className="flex min-h-[60px] flex-col items-center justify-center rounded-xl bg-[#25D366] px-2 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-black"
        >
          <MessageCircle className="mb-1 h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>

        <a
          href={corporateHref}
          className="flex min-h-[60px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/6 px-2 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white"
        >
          <Building2 className="mb-1 h-4 w-4 text-accent" aria-hidden="true" />
          {language === "en" ? "B2B" : "Firmy"}
        </a>
      </div>
    </div>
  );
}
