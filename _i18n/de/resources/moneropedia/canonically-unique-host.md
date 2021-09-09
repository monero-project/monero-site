---
summary: 'Ein Host, der vorschriftsgemäß in eine Adresse oder eine Reihe von Adressen aufgelöst wird'
terms: ["Canonically-unique-host", "Kanonisch-einzigartiger-Host", "Kanonisch-einzigartigen-Host", "Kanonisch-einzigartige-Hosts", "Kanonisch-einzigartigen-Hosts"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ein kanonisch einzigartiger Host ist ein
[FQDN](https://de.wikipedia.org/wiki/Domain_(Internet)#Fully_Qualified_Domain_Name_(FQDN)),
der vorschriftsgemäß in eine vorgesehene Adresse (oder eine Reihe dieser)
aufgelöst wird. Nicht zu verwechseln mit dem @Lokal-einzigartigen-Host.

### Ausführliche Informationen

Ein kanonisch einzigartiger Host wird durch rechnerferne, maßgebende Quellen
definiert, normalerweise durch das
[DNS](https://de.wikipedia.org/wiki/Domain_Name_System). Zum Auflösen des
Hostnamens eines Rechners nutzt du sehr wahrscheinlich eine externe Quelle,
sofern du nicht Folgendes implementiert hast:

- eine Datenbankdatei, die einer
[Hosts-Datei](https://de.wikipedia.org/wiki/Hosts_(Datei)) ähnelt - einen
netzwerkinternen Auflöser (der letztlich auf externe Quellen zurückgreift)

### Anmerkungen

- Monero nutzt primär die Auflösung des kanonisch einzigartigen Hosts,
während I2P ausschließlich die Auflösung des @Lokal-einzigartigen-Hosts
verwendet.  - Die an I2P und @Kovri zugewiesene Top-Level-Domain ist derzeit
`.i2p`; @Kovri beabsichtigt, einzig die
`.i2p`-[Top-Level-Domain](https://de.wikipedia.org/wiki/Top-Level-Domain) zu
nutzen und zu verarbeiten.
