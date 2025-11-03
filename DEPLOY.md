# Nasadenie na GitHub Pages

Tento web je teraz statická verzia pripravená na nasadenie na GitHub Pages.

## Rýchle nasadenie

### 1. Vytvorenie GitHub repozitára

```bash
# Inicializuj git repozitár (ak už nie je)
git init

# Pridaj všetky súbory
git add .

# Vytvor prvý commit
git commit -m "Static taxi service website"

# Vytvor nový repozitár na GitHub a pripoj ho
git remote add origin https://github.com/TVOJ_USERNAME/TVOJ_REPO.git
git branch -M main
git push -u origin main
```

### 2. Manuálne nasadenie

Po pushnutí kódu:

1. Choď do Settings repozitára na GitHube
2. Zvoľ **Pages** v ľavom menu
3. V časti **Build and deployment**:
   - Source: **GitHub Actions**
4. Vytvor súbor `.github/workflows/deploy.yml` s týmto obsahom:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commitni a pushni tento súbor:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### 3. Ak používaš vlastnú doménu

V `vite.config.ts` je nastavené `base: './'`, čo funguje s akoukoľvek cestou.

Ak chceš použiť vlastnú doménu:
1. V GitHub Pages settings pridaj svoju doménu
2. Vytvor súbor `client/public/CNAME` s obsahom:
   ```
   tvojadomena.sk
   ```

Ak nasadzuješ na `username.github.io/repo-name`, môžeš zmeniť v `vite.config.ts`:
```typescript
base: '/repo-name/'
```

## Lokálny vývoj

```bash
# Inštalácia závislostí
npm install

# Spustenie dev servera
npm run dev

# Build pre produkciu
npm run build

# Preview buildu
npm run preview
```

## Čo bolo odstránené

- ✅ Backend server (express, tRPC)
- ✅ Databáza (drizzle, mysql)
- ✅ Autentifikácia
- ✅ Backend API volania
- ✅ Všetky backend závislosti z package.json

## Obsah webu

Web obsahuje:
- 🏠 Landing page s hero sekciou a video pozadím
- 🚕 Služby taxi
- 💰 Cenník
- ❓ FAQ
- 📞 Kontakty
- 🌍 Prepínanie SK/EN jazyka
- 📱 Responsívny dizajn

Všetko je čisto statické, žiadne volania na backend!
