---
summary: 'Optionales Flag, welches zur Identifizierung von Transaktionen an Händler hinzugefügt wird und aus 64 Hexadezimalzeichen besteht'
terms: ["payment-ID", "payment-IDs", "Zahlungs-ID", "Zahlungs-IDs"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

*Anmerkung:* Lange Zahlungs-IDs wurden mit der 0.15-Version entfernt. Es ist nicht möglich, diese weiterhin zu verwenden. Weitere Infos finden sich im dies ankündigenden [Blogpost]({{ site.baseurl_root }}/2019/06/04/Long-Payment-ID-Deprecation.html).

### Grundlagen

Eine Zahlungs-ID ist ein **beliebiger** und **optionaler**
Transaktionsanhang, der aus 32 Bytes (64 Hexadezimalzeichen) oder (im Falle
integrierter Adressen) acht Bytes besteht.

Für gewöhnlich wird die Zahlungs-ID zur Identifizierung von an Händler und
Börsen gehenden Transaktionen verwendet. In Anbetracht der in Monero
integrierten immanenten Privatsphärefunktionen (normalerweise wird für
eingehende Transaktionen eine einzelne öffentliche Adresse genutzt) ist die
Zahlungs-ID besonders nützlich, um eingehende Zahlungen mit Nutzerkonten zu
verknüpfen.

### Kompakte Zahlungs-IDs und integrierte Adressen

Seit der 0.9-Hydrogen-Helix-Version können Zahlungs-IDs verschlüsselt und in
eine Zahlungsadresse eingebunden werden. Zahlungs-IDs dieser Art sollten
eine Länge von 64 Bits haben; sie sind mit einem zufälligen
Einmal-Schlüssel, der nur dem Sender und dem Empfänger bekannt ist,
verschlüsselt.

### Erstellen einer Zahlungs-ID

Es wird empfohlen, den `integrated_address`-Befehl des offiziellen Wallets
zu verwenden, welcher automatisch integrierte Adressen generiert, die eine
kompakte Zahlungs-ID enthalten. Wenn du die Befehlszeile nutzen möchtest,
kannst du Zahlungs-IDs wie folgt generieren:

Erstellen einer kompakten Zahlungs-ID für eine integrierte Adresse:

```# openssl rand -hex 8```

Erstellen einer herkömmlichen Zahlungs-ID:

```# openssl rand -hex 32```
