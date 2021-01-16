{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Système d'exploitations : Différentes versions de Linux et Windows 7, 8

### Application de portefeuille : Simplewallet

#### Ressource pour la création d'un disque bootable : [Linux](http://www.pendrivelinux.com/), [Windows](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool)

#### Ressource pour les binaires Monero : [Binaires Monero]({{ site.baseurl }}/downloads/)

- Prenez n'importe quel ordinateur se trouvant à votre disposition, aussi bien votre station de travail habituelle. Vous pourriez trouver plus simple d'utiliser un vieil ordinateur qui n'ait ni wifi ni bluetooth si vous êtes particulièrement paranoiac.

- Créez un disque bootable Linux ou Windows, et assurez-vous d'avoir les binaires Monero sur le même disque ou sur un second disque (pour linux, assurez-vous d'avoir également copié les dépendances dont vous aurez besoin, libboost1.55 et miniupnpc notament).

- Déconnectez le réseau et/ou la connexion internet de votre ordinateur, enlever physiquement la carte wifi ou désactivez le wifi/bluetooth si possible sur un portable.

- Démarrez sur le disque bootable, installez les dépendances si nécessaire.

- Copiez les binaires Monero sur un disque en RAM (/dev/shm sur Linux, une ISO bootable Windows devrait normalement avoir un disque comme Z:).

- Ne lancez pas le démon Monero. A la place, lancez monero-wallet-cli depuis un terminal en ligne de commande pour créer un nouveau @account Monero.

- Lorsqu'un nom vous est demandé, donnez n'importe lequel, cela n'a aucune importance.

- Lorsqu'on vous demande un mot de passe, saisissez de 50 à 100 caractères aléatoires. Ne vous souciez pas de devoir connaître le mot de passe, saisissez-en juste un long.

- **ÉTAPE CRITIQUE** : Notez (sur un papier) votre @mnemonic-seed de 25 mots.
**ATTENTION**: Si vous oubliez de notez cette information, vos fonds pourraient être perdus pour toujours.

- Notez (sur votre smartphone, un papier, un autre ordinateur, n'importe où) votre adresse et votre clef d'audit.

- Éteignez votre ordinateur, enlevez la batterie s'il y en a une, et laissez le physiquement arrêté pendant quelques heures.

Le compte que vous avez créé se trouvait en mémoire vive, et les fichiers sont maintenant inaccessible. Si un ennemi parvenait d'une quelconque manière à obtenir ces données, il lui manquerait le long mot de passe pour pouvoir l'ouvrir. Si vous avez besoin de recevoir des paiements, vous avez votre adresse publique, et vous avez votre clef d'audit si nécessaire. Si vous avez besoin d'y accéder, vous avez votre @mnemonic-seed de 25 mots, et vous pouvez maintenant en faire quelques copies, dont une copie externe (par exemple, dans le coffre d'une banque).

Lié : [Générateur de Compte Hors-Ligne](http://moneroaddress.org/)
