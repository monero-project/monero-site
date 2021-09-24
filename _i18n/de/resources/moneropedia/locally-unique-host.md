---
summary: 'Ein ausschließlich durch dich festgelegter und auslösbarer Host'
terms: ["Locally-unique-host", "Lokal-einzigartiger-Host", "Lokal-einzigartigen-Host", "Lokal-einzigartigen-Hosts"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ein lokal einzigartiger Host ist ein
[FQDN](https://de.wikipedia.org/wiki/Domain_(Internet)#Fully_Qualified_Domain_Name_(FQDN)),
der nur durch **dich** definiert und aufgelöst werden kann, ähnlich zu dem,
wie eine [Hosts-Datei](https://de.wikipedia.org/wiki/Hosts_(Datei))
implementiert wird. Nicht zu verwechseln mit dem
@Kanonisch-einzigartigen-Host.

### Ausführliche Informationen

Du hast die Möglichkeit, deine Interpretation dessen, wie der Host aufgelöst
wird, zu teilen (z.B. löst `localhost` immer in `127.0.0.1` auf), die
Auflösung wird aber nicht vorschriftsgemäß vollstreckt (z.B. könnte jemand
`localhost` auf irgendeine willkürliche IP-Adresse mappen).

Öffentlich bezogene Hosts können innerhalb des I2P-Netzwerks als
@Kanonisch-einzigartige-Hosts betrachtet werden, letztlich steht es dir
jedoch frei, diese nach deinen Wünschen neu zu definieren.

### Anmerkungen

- Monero nutzt primär die Auflösung des @Kanonisch-einzigartigen-Hosts,
während I2P ausschließlich die Auflösung des lokal einzigartigen Hosts
verwendet.

- Die an I2P und @Kovri zugewiesene Top-Level-Domain ist derzeit `.i2p`;
@Kovri beabsichtigt, einzig die
`.i2p`-[Top-Level-Domain](https://de.wikipedia.org/wiki/Top-Level-Domain) zu
nutzen und zu verarbeiten.
