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

- Monero primarily uses @canonically-unique-host resolution while I2P only
  uses @locally-unique-host resolution.

- I2P's and @Kovri's assigned top-level domain is currently `.i2p` and
  @Kovri intends to only process/use the `.i2p` [top-level
  domain](https://en.wikipedia.org/wiki/Top_level_domain)
