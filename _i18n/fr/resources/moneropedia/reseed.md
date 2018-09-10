---
entry: "Réensemencement"
tags: ["kovri"]
terms: ["Reseed", "réensemencement"]
summary: "La méthode que Kovri utilise pour s'amorcer sur le réseau I2P"
---

### Les Bases

Lorsque vous démarrez @Kovri pour la première fois (ou s'il a été arrêté longtemps), @Kovri a besoin d'une liste de pairs auxquels se connecter afin qu'il puisse s'[amorcer](https://en.wikipedia.org/wiki/Bootstrapping) dans le réseau @I2P. @Kovri obtient ces pairs à partir d'un fichier spécifique stocké sur un serveur de réensemencement. Les diverses données dont @Kovri a besoin pour se connecter avec des pairs @I2P se trouvent dans ce fichier.

### Informations détaillées

@Kovri dispose d'une liste de serveur de réensemencement [programmée en dur](https://en.wikipedia.org/wiki/Hard-coded) à partir desquels récupérer les données. Ces serveurs servent un fichier [SU3](https://geti2p.net/spec/updates#su3) de manière sécurisée (signé avec une @signature cryptographique) sur le @réseau-en-clair avec [HTTPS](https://fr.wikipedia.org/wiki/HTTPS). Ce fichier SU3 contient les informations nécessaires à la vérification à la fois de l'intégrité et du contenu de ce fichier.

Conjointement aux éléments techniques nécessaires pour vérifier et traiter le fichier, le contenu principal du fichier est une série de fichier d'@info-des-routeurs que les routeurs @Kovri et @I2P utilisent pour trouver et communiquer avec d'autres pairs @I2P. Ces pairs sont ensuite stockés dans une @base-de-données-réseau.
