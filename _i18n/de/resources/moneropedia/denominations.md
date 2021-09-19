---
summary: 'Eine Stückelung ist eine genaue Beschreibung eines Währungsbetrags. Häufig ist dies eine Untereinheit der Währung; so ist ein Cent klassischerweise 1/100stel einer bestimmten Währungseinheit.'
terms: ["denominations", "subunits", "tacoshi", "piconero", "nanonero", "micronero", "millinero", "centinero", "decinero","decanero","hectonero","kilonero","meganero","giganero", "Stückelung", "Stückelungen", "Piconero"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Eine Stückelung ist eine genaue Beschreibung eines Währungsbetrags. Häufig
ist dies eine Untereinheit der Währung; so ist ein Cent klassischerweise
1/100stel einer bestimmten Währungseinheit.

Zur Bezeichnung von Monero-Stückelungen wird die Anfangssilbe "Mo" durch
SI-Einheiten als Präfixe ersetzt. Die kleinste Einheit von Monero ist
demnach ein Piconero (0.000000000001 XMR).

### Stückelungen von Monero

|------------+---------------+-------------------|
| Name       | Dezimalsystem | Betrag            |
|-----------:|:-------------:| -----------------:|
| Piconero   | 10^-12        | 0,000000000001    |
| Nanonero   | 10^-9         | 0,000000001       |
| Micronero  | 10^-6         | 0,000001          |
| Millinero  | 10^-3         | 0,001             |
| Centinero  | 10^-2         | 0,01              |
| Decinero   | 10^-1         | 0,1               |
|============+===============+===================|
| **Monero** | **10^0**      | **1**             |
|============+===============+===================|
| Decanero   | 10^1          | 10                |
| Hectonero  | 10^2          | 100               |
| Kilonero   | 10^3          | 1.000             |
| Meganero   | 10^6          | 1.000.000         |
|------------+---------------+-------------------|

### Ausführliche Informationen

Die Möglichkeit, bei der Eingabe die SI-Präfixe nutzen zu können, wurde am
3. März 2017 von [Moneromooo](https://github.com/moneromooo-monero) [zu
Moneros Codebasis
hinzugefügt](https://github.com/monero-project/monero/pull/1826). Zu Ehren
des Nutzers
[Tacotime](https://bitcointalk.org/index.php?action=profile;u=19270), einem
frühen Mitwirkenden Moneros, wurde die kleinste Einheit von Monero (10^-12
XMR) zunächst "Tacoshi" genannt; zugunsten der Nutzerfreundlichkeit und
Konsistenz wurde dies allerdings später geändert.

### Monerod-Implementierung

Der kleinste Bruchteil von Monero in der aktuellen Monerod-Implementierung
ist auch bekannt als @Kleinste-Einheit, was derzeit ein Piconero ist.
