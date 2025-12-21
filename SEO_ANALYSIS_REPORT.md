# SEO Analýza projektu taxi-service-web

Tento dokument obsahuje podrobnú analýzu stavu SEO pre projekt `taxi-service-web` a odporúčania na zlepšenie.

## ✅ Pozitívne zistenia

1.  **Štruktúrované dáta (JSON-LD)**: Projekt má vynikajúco implementované štruktúrované dáta typu `LocalBusiness`, `FAQPage`, `TaxiService` a `BreadcrumbList`. To výrazne pomáha Google pochopiť biznis model a zobraziť bohaté výsledky (rich snippets).
2.  **Metadáta podstránok**: Každá dôležitá podstránka (napr. `/cennik-taxi-zvolen`) má vlastný `layout.tsx` s unikátnym titulkom, popisom a kľúčovými slovami.
3.  **Výkon a optimalizácia**:
    *   Použitie moderného formátu **WebP** pre obrázky.
    *   Vlastný image loader pre statický export.
    *   Optimalizácia fontov v `layout.tsx`.
    *   Využitie `priority` a `fetchPriority="high"` pre LCP prvky (hero image).
4.  **Kľúčové slová**: Obsah je bohatý na relevantné kľúčové slová ("taxi zvolen", "letisková preprava", "transfer viedeň").
5.  **Interné prelinkovanie**: Stránky sú navzájom prepojené cez sekciu "Užitočné informácie", čo pomáha distribúcii "link juice".

## ⚠️ Identifikované problémy (Kritické)

1.  **Chýbajúca stránka `/en/pricing`**:
    *   V komponente `Header.tsx` je definované mapovanie na túto URL, ale v adresári `app/en/` tento priečinok neexistuje.
    *   **Dôsledok**: Používateľ v anglickej verzii pri kliknutí na "Pricing" uvidí 404 chybu.
2.  **Nekonzistentná Sitemap a Robots.txt**:
    *   Existujú duplicitné súbory: dynamické (`app/sitemap.ts`, `app/robots.ts`) a statické (`public/sitemap.xml`, `public/robots.txt`).
    *   Statická sitemapa v `public` obsahuje viac detailov (jazykové alternatívy), ale nie je kompletná.
    *   Dynamická sitemapa neobsahuje `xhtml:link` pre jazykové verzie, čo je dôležité pre medzinárodné SEO.
3.  **Chýbajúce anglické preklady**:
    *   Stránky ako "Reklamácia", "Kedy volať vopred" a "Transfer na stanicu" nemajú anglické verzie.
    *   **Dôsledok**: V anglickom menu tieto odkazy smerujú na slovenské stránky.

## 💡 Odporúčania na zlepšenie

### 1. Oprava anglickej verzie
*   **Vytvoriť `app/en/pricing/page.tsx`**: Skopírovať a preložiť obsah z `app/cennik-taxi-zvolen/page.tsx`.
*   **Doplniť `URL_MAPPING`**: Pridať chýbajúce stránky do `Header.tsx` a vytvoriť ich anglické ekvivalenty.

### 2. Zjednotenie Sitemapy
*   Odporúčam odstrániť statické súbory z `public/` a plne sa spoľahnúť na `app/sitemap.ts`.
*   **Vylepšiť `app/sitemap.ts`**, aby dynamicky generoval aj jazykové alternatívy (`xhtml:link`).

### 3. Optimalizácia OG obrázkov
*   Súčasný OG obrázok v `layout.tsx` má len 256x256 px.
*   Odporúčané rozlíšenie pre OpenGraph je **1200x630 px**.
*   Premenovať súbor na niečo čitateľnejšie, napr. `og-image-zvolen-taxi.png`.

### 4. Technické SEO
*   **Canonical tagy**: Skontrolovať, či všetky stránky majú správny kanonický tag (momentálne sú v layoutoch, čo je fajn, ale treba postrážiť dynamické parametre, ak by pribudli).
*   **H1 nadpis na domovskej stránke**: Aktuálne je len "Taxi Zvolen". Odporúčam mierne rozšíriť na "Profesionálna taxislužba Zvolen - TaxiGO" pre lepšiu relevanciu.

## 📊 Zhrnutie
Web je po technickej a obsahovej stránke pripravený na výborné pozície vo vyhľadávačoch. Najväčším nedostatkom je nedokončená anglická lokalizácia a nekonzistencia v servisných súboroch (sitemap/robots). Po odstránení týchto chýb bude web patriť k špičke v danom segmente.
