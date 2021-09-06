---
summary: "Une nouvelle sorte de preuve d'étendue remplaçant les transactions confidentielles de cercle pour masquer les montant envoyés"
terms: ["bulletproofs", "bulletproof"]
---

{% include disclaimer.html translated="no" translationOutdated="no" %}

### Les Bases

Les @transactions-confidentielles-de-cercle ont été mise en place pour masquer le montant des transactions. L'un des objectifs de @ringCT était de prouver que la sommes des entrées - sorties dans la @transaction était égale à 0, et que toutes les sorties étaient des nombre positifs.  
Pour ce faire, deux types de signatures de cercle étaient construits : une signature cercle pour la totalité de la transaction (prouvant que la somme est 0) et un lot de signatures de cercle pour chaque bit de la transaction (prouvant que les sorties sont des nombres positifs), alors agrégés en utilisant d'abord les signatures de Schnorr (remplacées ensuite par les signatures de cercle Borroméennes).  
Bien que cela fonctionnait, un gros désavantage était l'énorme taille de ces
transactions RingCT.

### En venir aux bulletproofs

En 2017, un [groupe de cryptographie appliquée de Standford](https://crypto.stanford.edu/bulletproofs/) a écrit une [publication](https://eprint.iacr.org/2017/1066.pdf) présentant une nouvelle sorte de preuve d'étendue, appelé bulletproofs.  

> Bulletproofs are short non-interactive zero-knowledge proofs that require no trusted setup.

Bulletproofs, contrairement aux signatures Borroméennes ou aux signatures de Schnorr est très efficace en tant que preuve d'étendue. Prouver une grande quantité de donné ne génère qu'une petite preuve, et la taille de cette preuve grandit logarithmiquement avec la taille des données à prouver.  
Cela signifie qu'augmenter le nombre de sorties dans une transaction n'augmentera, avec bulletproofs, qu'un tout petit peu la taille de la preuve.  
Bulletproofs a aussi l'avantage de permettre de prouver que différents
montants engagés se situent dans la plage souhaitée en une seule fois. Pas
besoin de prouver chaque sortie vers chaque destination dans des preuves
séparées. La totalité des montant de la transaction peuvent être prouvés
avec une plus grosse (mais toujours très petite) bulletproofs.

### Processus d'audit consciencieux et implémentation

Comme les bulletproofs étaient totalement nouvelles, et l'implémentation initiale faite par le groupe, bien que parfaitement réalisée, nécessitait une réécriture orientée vers notre cas d'usage spécifique, l'implémentation de Bulletproof dans Monero n'était pas une mince affaire.  
Le code a été écrit et réécrit pour suivre les nouvelles versions de Bulletproofs qui était toujours en cours de développement, mais une fois cette implémentation Monero finalisée, le déploiement qui en résulterait devrait être effectué avec le plus grand soin.  
Dans ce sens, la communauté a démarrée un processus d'audit. Les chercheurs se sont rapprochés de Benedikt Bünz, l'auteur principal de la publication des Bulletproofs, et de l'[OSTIF](https://ostif.org/), une organisation qui aide les technologies open-source à s'amméliorer et à se sécuriser.  
OSTIF nous a dirigé vers 3 sociétés en mesure de réaliser l'audit. Alors que l'une d'entre elles demandait à rester anonyme, ce qui l'évinçait de notre processus devant rester publique, les deux autres (QuarksLab & Kudelski Security) furent choisis pour réaliser l'audit.  
Nos 3 auditeurs ont été financés par la communauté pour vérifier que
l'implémentation était exempte de bug critique ou d'axe d'exploitation.  Les
rapports finaux ont été publiés durant l'été 2018, avec quelques
rectifications et corrections utiles conseillées, et l'implémentation
définitive de bulletproof a été ajoutée au Stagenet de Monero, puis au
Mainnet lors de la mise à jours réseau du 18 Octobre 2018.

Depuis que Bulletproofs est en application sur le réseau Monero, la taille
moyenne des transaction a été réduite d'au moins 80%, de même que les frais
de transaction.

Plus d'information (en Anglais) sur l'implémentation Monero de bulletproofs
sur la chaîne Youtube de Fondajo lors d'une [conversation avec Sarang
Noether](https://www.youtube.com/watch?v=6lEWqIMLzUU).
