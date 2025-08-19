# CV

Detta repository innehåller ett litet testsystem för att validera `CV.json`.

## Köra tester

1. Installera beroenden:

```bash
npm install
```

2. Kör testerna:

```bash
npm test
```

Tester kräver Node.js 18 eller senare. De kontrollerar att `CV.json` innehåller nycklarna `name`, `links`, `skills` och `summary`. De säkerställer också att `experience` är en icke-tom array där varje post har `org`, `role` och `when`, samt att varje länk har både `label` och `href`.
