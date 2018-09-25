---
tags: ["kovri"]
terms: ["Address-Book", "carnet-d'adresses"]
summary: "Vous permet de visiter des sites et services I2P du domaine .i2p"
---

### Les Bases

Afin de naviguer sur des sites @I2P ou de consulter des services avec @Kovri, vous aurez besoin d'un carnet d'adresses. Un carnet d'adresses vous permettra de traduire les sites et services @I2P qui utilisent le [domaine de premier niveau](https://fr.wikipedia.org/wiki/Domaine_de_premier_niveau) `.i2p` en adresses que le réseau @I2P comprendra.

Sans carnet d'adresse, vous seriez contraint d'utiliser une @adresse-base32 chaque fois que vous visiteriez un site ou service @I2P, et ce n'est pas drôle !

### Informations détaillées

Comme [DNS](https://fr.wikipedia.org/wiki/Domain_Name_System) n'existe pas sur le réseau @I2P, @Kovri **ne peut pas** utiliser DNS ou quelque sorte de résolution d'@hôte-canonique-unique. Au lieu de cela, @Kovri fait correspondre un @hôte-unique-localement à une @adresse-base64 de @destination dans une @souscription. Une fois que votre carnet d'adresse est complété avec une @souscription, vous pouvez résoudre vos sites favoris du domaine `.i2p` en une adresse destination @I2P utilisable.

### Créer un carnet d'adresses

Par défaut, votre installation contiendra une @souscription publique par défaut appelée `hosts.txt` dans votre @répertoire-de-données. Au démarrage de @Kovri, il chargera cette souscription et récupèrera toute autre souscription que vous aurez spécifié. Une fois chargé, votre carnet d'adresses sera correctement rempli. Pour des détails sur la gestion des souscriptions, voir @souscription.

### Mettre à jour le carnet d'adresses

Actuellement, il y a plusieurs façons de mettre à jour votre carnet d'adresses :

1. Utiliser un @service-de-rebond pour insérer des adresses I2P dans votre carnet d'adresses
2. Utiliser un @service-de-rebond pour copier/coller une adresse dans votre @souscription privée
3. Ajouter ou supprimer manuellement depuis une @souscription privée

**Remarque : Kovri est en cours de développement intensif. Dans le futur il y *aura* des moyens plus simples de mettre à jour le carnet d'adresses**

### Spécifications du carnets d'adresse / du nommage

Pour des spécifications détaillées et plus encore, visiter les [Spécifications du carnet d'adresses et du nommage](https://geti2p.net/fr/docs/naming)
