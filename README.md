# CV

Detta repository innehåller ett litet testsystem för att validera `data/cv.json`.

## Köra tester

1. Installera beroenden:

```bash
npm install
```

2. Kör testerna:

```bash
npm test
```

Tester kräver Node.js 18 eller senare. De kontrollerar att `data/cv.json` innehåller nycklarna `name`, `links`, `skills` och `summary`. De säkerställer också att `experience` är en icke-tom array där varje post har `org`, `role` och `when`, samt att varje länk har både `label` och `href`.

## Förhandsgranska CV:t

`index.html` laddar sin data via `fetch`, vilket kräver att sidan servas över HTTP. Starta en enkel server:

```bash
npx http-server .
# eller
python -m http.server
```

Öppna sedan `http://localhost:8080` (eller den port servern rapporterar) för att se CV:t.
