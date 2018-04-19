## Introduction

Ce guide a deux volets, la simplicité de l'extraction minière sur une distribution Linux et quelques pratique de sécurité autour de l'extraction minière, dans la mesure ou la plupart de ces applications d'extraction minière n'ont pas subits d'audit de sécurité.

A l'issue de ce guide vous pourrez dormir tranquille en sachant que si le mineur se trouve exploité, cela n'affectera pas votre OS.

### pourquoi Docker

[Docker](https://www.docker.com/) sera utilisé car il est le plus connu et a le plus de chances d'être déjà installé.

J'utilise le conteneur [alpine-xmrig](https://hub.docker.com/r/bitnn/alpine-xmrig/). Comme son nom l'indique, il est basé sur l'image [Alpine Linux](https://www.alpinelinux.org/).

Si vous souahitez savoir comment débuter avec Docker, voici quelques bonnes références de départ.
* [Page Docker](https://wiki.archlinux.org/index.php/Docker) du Wiki Arch Linux
* [Aide-mamoire Sécurité](http://container-solutions.com/content/uploads/2015/06/15.06.15_DockerCheatSheet_A2.pdf) des Solutions de Conteneurs
* [Dockerfile Howto](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images) de Digital Oceans.

Pour une installation sur une distribution spécifique, merci de vous référer au site web des [Docs Docker](https://docs.docker.com/engine/installation/).

### pourquoi XMRig

[XMRig](https://github.com/xmrig/xmrig) est simplement un bon mineur à mon sens. De bons affichage et statistiques, pas de dépendances ou de web-ui tape-à-l'oeil. Le conteneur XMRig ne fait qu'environ 4Mo, ce qui le rend extrèmement portable.

#### Étape 1 : Miner avec XMRig

Lancez les commandes suivante

```bash
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o POOL01 -o POOL02 -u WALLET -p PASSWORD -k
# docker run --restart unless-stopped --read-only -m 50M -c 512 bitnn/alpine-xmrig -o pool.supportxmr.com:7777 -u 45CJVagd6WwQAQfAkS91EHiTyfVaJn12uM4Su8iz6S2SHZ3QthmFM9BSPHVZY388ASWx8G9Wbz4BA24RQZUpGczb35fnnJz -p docker:secret -k
```

#### Étape 2 : Il n'y a pas d'étape 2

Vous avez déjà fait tout ce dont vous aviez besoin. Vous minez maintenant avec un conteneur Docker XMRig. Utilisez `ctrl+c` pour quitter le mineur ou ajoutez `-d` juste après `docker run` pour lancer le mineur en tâche de fond.

