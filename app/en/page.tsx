"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import HomePageClient from "../HomePageClient";

export default function EnglishHome() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Force English language on this page
    setLanguage("en");
  }, [setLanguage]);

  return <HomePageClient />;
}
