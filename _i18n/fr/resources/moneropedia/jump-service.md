---
tags: ["kovri"]
terms: ["Jump-Service", "service-de-rebond"]
summary: "Un service sur un site I2P qui ajoute une adresse à votre carnet d'adresse."
---

### Les Bases

Dans votre navigateur web configuré pour @I2P, vous pouvez utiliser un service de rebond pour *rebondir* sur une adresse @I2P que vous n'avez pas encore dans votre @carnet-d'adresses. Une fois que vous avez *rebondit* sur l'adresse, celle-ci est sauvegardée dans votre @carnet-d'adresses.

### Informations détaillées

Dans un navigateur configuré pour @I2P, rendez-vous sur : http://stats.i2p/i2p/lookup.html (une amabilité du développeur principal d'@I2P-Java *zzz*)

Vous aurez alors deux options :

1. Recherchez le nom d'hôte (*Hostname lookup*) de l'adresse que vous souhaitez visiter en copiez-collez manuellement le résultat.
2. Rebondissez (*Jump*) vers le site web @I2P entrant le nom d'hôte @I2P (**recommandé**)

### Utiliser la recherche de nom d'hôte

Par exemple, entrez `pinkpaste.i2p` dans le champ *Hostname lookup* (puis cliquez sur envoyer (*submit*)) va renvoyer :

```
pinkpaste.i2p=m-HrPrIAsdxts0WM~P4mE8mt9P7g-QTaBvu7Gc6Nl0UX7Vwck-i~RvOPfK6W~kfdRvwhNTqevkBL2UF5l36We02Aiywu7kB2xOHRkze68h-Tg2ewvRVwokohguCD2G3wwAEz~7FVda2avYDCb9-N6TfuzxKLnmhPMvbNSjGL7ZsD2p-h207R3-2kvuMV9bfu-K~w9NI9XJhIyufvUnFYc2jnTVg8PbaR4UP57cNaOO2YIMPkbr6~yTcIu9B1sUfHK6-N~6virQDOxW4M-62rjnZkLpaCtkOsXslmCwZI--TkZ6hKi1kXZvNmJRE1rYfffYRFn38zhaqszeETX8HiIvahZhXF5fNumBziYdmLdw8hkuN1A~emU6Xz9g~a1Ixfsq1Qr~guYoOtaw-0rOFxNRS9yMehE-2LCb8c-cAg6z5OdlN4qJDl~ZHgru4d~EHp~BpAK3v7u2Gi-8l1ygVW-1CHVna~fwnbOPN3ANPwh6~~yUit0Cx1f54XiNRn6-nPBQAEAAcAAA==
```

Copiez-collez ce couple host=@adresse-base64 dans vos @souscriptions **privée**.

### Rebond direct

Par exemple, entrez `pinkpaste.i2p` dans le champ *Jump* (puis cliquez sur envoyer (*submit*)) va automatiquement vous rediriger vers le site web **et** insérer l'@hôte-unique-localement dans votre @carnet-d'adresses.
