---
summary: 'Nominał jest prawidłowym opisem ilości waluty. Często jest on podjednostką waluty, na przykład cent jest 1/100 danej jednostki waluty.'
terms: ["denominations", "subunits", "nominał", "nominały", "nominałem", "nominałom", "nominałowi", "podjednostki", "podjednostkom", "podjednostka", "podjednostce", "podjednostką", "tacoshi", "piconero", "nanonero", "micronero", "millinero", "centinero", "decinero","decanero","hectonero","kilonero","meganero","giganero"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Podstawy

Nominał jest prawidłowym opisem ilości waluty. Często jest on podjednostką
waluty, na przykład cent jest 1/100 danej jednostki waluty.

Nominał jest prawidłowym opisem ilości waluty. Często jest on podjednostką
waluty, na przykład cent jest 1/100 danej jednostki waluty. Nazwy nominałów
Monero tworzone są poprzez dodanie przedrostka jednostek SI w miejsce
początkowego "mo". Najmniejszą jednostką Monero jest 1 piconero
(0.000000000001 XMR).

### Nominały Monero

|------------+----------+-------------------|
| Nazwa      | Baza 10  | Ilość             |
|-----------:|:--------:| -----------------:|
| piconero   | 10^-12   | 0.000000000001    |
| nanonero   | 10^-9    | 0.000000001       |
| micronero  | 10^-6    | 0.000001          |
| millinero  | 10^-3    | 0.001             |
| centinero  | 10^-2    | 0.01              |
| decinero   | 10^-1    | 0.1               |
|============+==========+===================|
| **monero** | **10^0** | **1**             |
|============+==========+===================|
| decanero   | 10^1     | 10                |
| hectonero  | 10^2     | 100               |
| kilonero   | 10^3     | 1,000             |
| meganero   | 10^6     | 1,000,000         |
|------------+----------+-------------------|

### Szczegółowe informacje

Pomoc w zakresie wkładów z użyciem przedrostków SI została [dodana do bazy
kodów Monero](https://github.com/monero-project/monero/pull/1826) 3 marca
2017 roku przez
[Moneromooo](https://github.com/moneromooo-monero). Najmniejsza jednostka
Monero (10^-12 XMR) została pierwotnie nazwana tacoshi na cześć użytkownika
[Tacotime] (https://bitcointalk.org/index.php?action=profile;u=19270),
współautora Monero we wczesnej fazie, i następnie przemianowana dla
łatwiejszego użycia i konsekwencji.

### Monerod Implementation

The smallest fraction of Monero in the current monerod implementation is
also known as the @atomic-unit, which is currently one piconero.
