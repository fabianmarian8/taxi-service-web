# Video Enhancement - Dokumentácia

## Prehľad

Pôvodné video na pozadí bolo vylepšené a upscalované z Full HD (1920x1080) na 2K rozlíšenie (2560x1440) pomocou pokročilých FFmpeg filtrov.

## Dostupné verzie

### 1. `background.mp4` (Originál)
- **Rozlíšenie**: 1920x1080 (Full HD)
- **Veľkosť**: 9.3 MB
- **Bitrate**: ~17.5 Mbps
- **Použitie**: Pôvodná verzia, zachovaná ako záloha

### 2. `background_2k.mp4` (Odporúčané pre web)
- **Rozlíšenie**: 2560x1440 (2K)
- **Veľkosť**: 18 MB
- **Bitrate**: ~32.4 Mbps
- **Použitie**: **Optimálna voľba pre produkčné nasadenie**
- **Výhody**: 
  - Vylepšená ostrosť a detaily
  - Vyššie rozlíšenie (2K)
  - Prijateľná veľkosť pre web
  - Rýchle načítanie
  - Optimalizované pre streaming (faststart)

### 3. `background_2k_hq.mp4` (Vysoká kvalita)
- **Rozlíšenie**: 2560x1440 (2K)
- **Veľkosť**: 42 MB
- **Bitrate**: ~79.3 Mbps
- **Použitie**: Pre špeciálne účely alebo offline prezentácie
- **Výhody**: 
  - Maximálna kvalita
  - Najlepšie detaily a ostrosť
- **Nevýhody**: 
  - Veľká veľkosť súboru
  - Pomalšie načítanie na webe

## Použité vylepšenia

### Upscaling
- **Algoritmus**: Lanczos resampling (najkvalitnejší algoritmus pre upscaling)
- **Škálovanie**: 1920x1080 → 2560x1440 (1.33x)

### Filtrácia a vylepšenia
1. **Unsharp masking**: Zlepšenie ostrosti a detailov
2. **Kontrast**: +5% pre lepšiu hĺbku
3. **Jas**: +2% pre svetlejší obraz
4. **Saturácia**: +10% pre živšie farby

### Kódovanie
- **Kodek**: H.264 (libx264)
- **Preset**: slow (najlepší pomer kvalita/veľkosť)
- **Pixel format**: yuv420p (maximálna kompatibilita)
- **Frame rate**: 50 fps (zachované z originálu)
- **Optimalizácia**: faststart flag pre rýchle spustenie na webe

## Implementácia na webe

### Odporúčaná zmena v kóde

Nahraďte pôvodné video vylepšenou verziou:

```javascript
// Pôvodne
<video src="/background.mp4" />

// Vylepšené (odporúčané)
<video src="/background_2k.mp4" />
```

### Responzívne načítanie (voliteľné)

Pre optimálne načítanie na rôznych zariadeniach:

```javascript
<video>
  <source src="/background_2k.mp4" type="video/mp4" media="(min-width: 1920px)" />
  <source src="/background.mp4" type="video/mp4" />
</video>
```

## Technické detaily

### Príkaz použitý na vytvorenie

```bash
# Vysoká kvalita (HQ)
ffmpeg -i background.mp4 \
  -vf "scale=2560:1440:flags=lanczos,unsharp=5:5:1.0:5:5:0.0,eq=contrast=1.05:brightness=0.02:saturation=1.1" \
  -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -r 50 \
  background_2k_hq.mp4

# Web optimalizované
ffmpeg -i background_2k_hq.mp4 \
  -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart \
  -vf "scale=2560:1440:flags=lanczos" \
  background_2k.mp4
```

## Výsledky

| Parameter | Originál | 2K Web | 2K HQ | Zlepšenie |
|-----------|----------|--------|-------|-----------|
| Rozlíšenie | 1920x1080 | 2560x1440 | 2560x1440 | +77% pixelov |
| Veľkosť | 9.3 MB | 18 MB | 42 MB | - |
| Bitrate | 17.5 Mbps | 32.4 Mbps | 79.3 Mbps | - |
| Ostrosť | Štandard | Vylepšená | Maximálna | ++ |
| Web výkon | Výborný | Veľmi dobrý | Pomalý | - |

## Odporúčania

1. **Pre produkciu**: Použite `background_2k.mp4` - najlepší pomer kvalita/výkon
2. **Pre mobilné zariadenia**: Zvážte ponechanie originálu `background.mp4` ako fallback
3. **Pre prezentácie**: Použite `background_2k_hq.mp4` pre maximálnu kvalitu

## Poznámky

- Všetky videá zachovávajú pôvodný frame rate (50 fps)
- Použitý kodek H.264 je kompatibilný so všetkými modernými prehliadačmi
- Videá sú optimalizované pre rýchle spustenie (faststart)
- Pomer strán je zachovaný (16:9)

---

**Vytvorené**: 7. november 2025  
**Nástroje**: FFmpeg, Lanczos upscaling, Unsharp masking
