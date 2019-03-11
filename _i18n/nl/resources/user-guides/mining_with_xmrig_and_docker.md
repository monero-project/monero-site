{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## Inleiding

Deze handleiding heeft twee doelen: gebruiksgemak bij het minen op Linux-distributies en extra veiligheid rondom het minen, aangezien de meeste miningprogramma's niet zijn gecontroleerd op veiligheid.

Aan het eind van deze handleiding kun je er gerust op zijn dat je besturingssysteem niet wordt aangetast als het miningprogramma wordt gehackt.

### Waarom Docker?

Hierbij gebruiken we [Docker](https://www.docker.com/), want dat is de bekendste containertechnologie, met de grootste kans dat het al is geïnstalleerd.

De container die ik gebruik is [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/). Zoals de naam aangeeft, is deze gebaseerd op de distributie [Alpine Linux](https://www.alpinelinux.org/).

Hier zijn een paar goede informatiebronnen als je met Docker wilt leren werken:
* [Arch Linux Wiki over Docker](https://wiki.archlinux.org/index.php/Docker)
* [Security Cheat Sheet](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf) van Container Solutions
* Digital Ocean's [Dockerfile Howto](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images).

Zie de [Docker-documentatie](https://docs.docker.com/engine/installation/)-website voor de installatie op specifieke distributies.

### Waarom XMRig?

[XMRig](https://github.com/xmrig/xmrig) is gewoon een degelijk miningprogramma. Prima uitvoer en statistieken, geen flitsende webinterface of afhankelijkheden. De XMRig-container is slechts ~4 MB, zodat hij op allerlei hardware kan worden gebruikt.

#### Stap 1. Minen met XMRig

Voer het volgende uit:

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u PORTEMONNEE -p WACHTWOORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### Stap 2. Er is geen stap 2.

Je hebt alles wat je moet doen al gedaan. Je bent nu aan het minen in een Docker-container met XMRig. Typ `Ctrl+C` om XMRig af te sluiten of voeg `-d` direct na `docker run` toe om het miningprogramma in de achtergrond uit te voeren.

