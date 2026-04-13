"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MobileActionBar from "@/components/MobileActionBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          {children}
          <MobileActionBar />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
