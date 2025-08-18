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

Testerna kräver Node.js 18 eller senare. De kontrollerar att `CV.json` innehåller nycklarna `name`, `links` och `skills` samt att varje länk har både `label` och `href`.
