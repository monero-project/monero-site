{% include disclaimer.html translated="yes" translationOutdated="no" %}

# monerod

`monerod` est le démon est une application incluse dans la suite Monero. C'est un programme en ligne de commande qui gère la chaîne de blocs. Tandis que le portefeuille Bitcoin gère à la fois un compte et la chaîne de blocs, Monero sépare ces composants : `monerod` gère la chaîne de blocs, et `monero-wallet-cli` gère le compte.

Ce guide suppose que vous avez déjà créé un compte VPS et que vous utilisez SSH pour accéder à la console du serveur.

## Linux, 64-bit (Ubuntu 16.04 LTS)

### Assurez-vous que le port 18080 soit ouvert

`monerod` utilise ce port pour communiquer avec d'autres nœuds sur le réseau Monero.

Exemple en utilisant `ufw`: `sudo ufw allow 18080`
Exemple en utilisant `iptables`: `sudo iptables -A INPUT -p tcp --dport 18080 -j ACCEPT`

### Téléchargez les binaires Monero actuels

    wget https://downloads.getmonero.org/linux64

### Créez un répertoire et décompressez les fichiers

    mkdir monero
    tar -xjvf linux64 -C monero

### Lancez le démon

    cd monero
    ./monerod

### Options

Affichez une liste de toutes les options et paramètres :

    ./monerod --help

Lancez le démon en tâche de fond :

    ./monerod --detach

Surveillez la sortie de `monerod` lancé en tâche de fond :

    tail -f ~/.bitmonero/bitmonero.log

Gardez le VPS à jour avec autoupdate :

https://help.ubuntu.com/community/AutomaticSecurityUpdates


