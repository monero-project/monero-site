---
entry: "Souscription"
tags: ["kovri"]
terms: ["Subscription", "souscription", "souscriptions"]
summary: "Un fichier utilisé par le carnet d'adresses qui contient les hôtes I2P associés aux destinations I2P"
---

### Les Bases

Une souscription est un fichier qui contient une liste d'hôtes `.i2p` associés à leurs @destinations respectives. Les souscriptions sont utilisées par le @carnet-d'adresses.

### Informations détaillées

De la même manière qu'un [fichier hosts](https://fr.wikipedia.org/wiki/Hosts) peut faire correspondre un nom d'hôte internet à une adresse spécifique, une souscription fait correspondre une adresse `.i2p` à une @adresse-base64 en utilisant le format suivant (espaces interdits) : `hôte=adresse`

Plus spécifiquement, une souscription associe un @hôte-unique-localement à une @adresse-base64.

Exemple:

```
anonimal.i2p=AQZGLAMpI9Q0l0kmMj1vpJJYK3CjLp~fE3MfvE-e7KMKjI5cPOH6EN8m794uHJ6b09qM8mb9VEv1lVLEov~usVliTSXCSHuRBOCIwIOuDNU0AbVa4BpIx~2sU4TxKhoaA3zQ6VzINoduTdR2IJhPvI5xzezp7dR21CEQGGTbenDslXeQ4iLHFA2~bzp1f7etSl9T2W9RID-KH78sRQmzWnv7dbhNodMbpO6xsf1vENf6bMRzqD5vgHEHZu2aSoNuPyYxDU1eM6--61b2xp9mt1k3ud-5WvPVg89RaU9ugU5cxaHgR927lHMCAEU2Ax~zUb3DbrvgQBOTHnJEx2Fp7pOK~PnP6ylkYKQMfLROosLDXinxOoSKP0UYCh2WgIUPwE7WzJH3PiJVF0~WZ1dZ9mg00c~gzLgmkOxe1NpFRNg6XzoARivNVB5NuWqNxr5WKWMLBGQ9YHvHO1OHhUJTowb9X90BhtHnLK2AHwO6fV-iHWxRJyDabhSMj1kuYpVUBQAEAAcAAA==
```

1. `anonimal.i2p` est l'@hôte-unique-localement
2. `=` est le séparateur
3. Tout ce qu'il reste est l'@adresse-base64

### Types de souscriptions

Pour @Kovri, il y a deux types de fichiers de souscriptions : *publique* et *privé*.

Une souscription *publique* :
- est utilisée lors de l'amorçage pour utiliser les services essentiels (IRC, email, Monero, etc.)
- est statique et est mise à jour toutes les 12 heures depuis le serveur de @carnet-d'adresses de Monero
- vous permet de partager les souscriptions avec tout le monde car elle est publiquement disponible (quiconque partage la même souscription publique pourra également résoudre le même nom d'hôte vers la même destination que vous)

Une souscription *privée* :
- est utilisée exclusivement par vous et n'est pas partagée avec d'autres à moins que vous ne choisissiez explicitement de partager le fichier
- le fichier par défaut est `private_hosts.txt` dans votre @répertoire-de-données

### Mettre à jour une souscription privée

Vous pouvez utiliser un @service-de-rebond pour mettre à jour manuellement votre souscription privée. La souscription mise à jour sera alors insérée dans votre @carnet-d'adresses pour que vous puissiez l'utiliser.

### Remarque
Pour savoir comment souscrire à de multiples souscriptions, voir le [guide utilisateur](https://gitlab.com/kovri-project/kovri-docs/blob/master/i18n/fr/user_guide.md).
