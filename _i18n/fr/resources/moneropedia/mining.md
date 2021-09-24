---
summary: "Le processus de calcul cryptographique d'une preuve mathématique pour un bloc, contenant une quantité de transactions, qui sont alors ajoutés à la chaîne de blocs"
terms: ["mining", "miner", "miners", "extraction-minière", "mineur", "mineurs"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Le processus de calcul cryptographique d'une preuve mathématique pour un
bloc, contenant une quantité de transactions, qui sont alors ajoutés à la
chaîne de blocs.

L'extraction minière est le processus distribué confirmant les transactions
sur le registre publique de toutes les transactions, c'est à dire la chaîne
de blocs. Les nœuds Monero utilisent la chaîne de blocs pour différencier
les transactions légitimes des tentative de re-dépense des pièces qui ont
déjà été dépensées ailleurs.

Monero est alimenté uniquement par Preuve de Travail. Il utilise un
algorithm d'extraction minière qui a le potentiel pour être exécuté
efficacement par des milliards d'équipement existant (tous les processeurs
x86 modernes et de nombreux processeurs graphiques). Monero utilise une
variante de l'algorithme de preuve de travail CryptoNight, qui est conçu
pour une utilisation sur des CPUs et GPUs ordinaires.

La fonctionnalité d'extraction minière intelligente permet une extraction
minière transparente sur l'ordinateur de l'utilisateur, loin de la
centralisation de facto des fermes et pool d'extractions minières,
poursuivant ainsi la vision originelle d'une vrai monnaie pair-à-pair de
Satoshi Nakamoto.
