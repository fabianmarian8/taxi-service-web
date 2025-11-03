# GitHub Pages 404 - Kontrolný Zoznam

## ✅ Čo je už opravené (v main branchi)

1. **Vite Config** - `base: '/taxi-service-web/'` ✅
2. **404.html fallback** - workflow automaticky vytvára 404.html ✅
3. **Favicon odkazy** - odstránené neexistujúce odkazy ✅

## 🔍 Čo musíš SKONTROLOVAŤ na GitHube

### 1. GitHub Pages Nastavenia
Choď na: **https://github.com/fabianmarian8/taxi-service-web/settings/pages**

**Musí byť:**
- **Source**: `GitHub Actions` (NIE "Deploy from a branch")

**Ak je nastavené na "Deploy from a branch":**
1. Zmeň Source na: `GitHub Actions`
2. Uložiť (Save)

### 2. GitHub Actions Workflow Status
Choď na: **https://github.com/fabianmarian8/taxi-service-web/actions**

**Skontroluj:**
- Je tam workflow run "Deploy to GitHub Pages"?
- Má zelený ✓ (úspešný) alebo červený ✗ (zlyhaný)?
- Klikni na workflow a pozri si logy ak je červený

**Ak tam NIE SÚ žiadne workflow runs:**
- GitHub Pages Source NIE JE nastavený na "GitHub Actions"
- Musíš zmeniť v Settings → Pages → Source → GitHub Actions

### 3. Aktuálna URL
Tvoj web by mal byť na:
**https://fabianmarian8.github.io/taxi-service-web/**

## 🚀 Ako MANUÁLNE spustiť deployment

Ak chceš manuálne spustiť deployment:

1. Choď na: **https://github.com/fabianmarian8/taxi-service-web/actions**
2. Klikni na workflow "Deploy to GitHub Pages" v ľavom paneli
3. Klikni "Run workflow" vpravo hore
4. Vyber branch: `main`
5. Klikni "Run workflow" (zelené tlačidlo)

## 🐛 Najbežnejšie Príčiny 404

### Príčina 1: Source nie je nastavený na GitHub Actions
**Riešenie:** Settings → Pages → Source → zmeniť na "GitHub Actions"

### Príčina 2: Workflow nikdy nebežal
**Riešenie:** Manuálne spusti workflow (pozri vyšie)

### Príčina 3: Workflow zlyhal
**Riešenie:** Pozri si error logy v Actions → klikni na červený workflow run

### Príčina 4: Cache v prehliadači
**Riešenie:**
- Otvor DevTools (F12)
- Klikni pravým na refresh ikonu → "Empty Cache and Hard Reload"
- Alebo skús Incognito/Private režim

## 📊 Očakávaný Výsledek

Po správnom nasadení by si mal vidieť:
1. V GitHub Actions: zelený ✓ workflow run
2. V Settings → Pages: "Your site is live at https://fabianmarian8.github.io/taxi-service-web/"
3. Web by sa mal načítať bez 404

## 🔧 Ak STÁLE 404

Pošli mi screenshot:
1. GitHub Pages Settings (https://github.com/fabianmarian8/taxi-service-web/settings/pages)
2. Posledný workflow run (https://github.com/fabianmarian8/taxi-service-web/actions)
3. DevTools Console (F12 → Console tab) keď načítaš stránku

---

**Dôležité:** Všetky kódové opravy sú HOTOVÉ a na main branchi. Problém je pravdepodobne v nastaveniach GitHub Pages alebo workflow nebol spustený.
