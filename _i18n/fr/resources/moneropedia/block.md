---
summary: 'Un conteneur de transactions, dont une séquence forme une chaîne de blocs'
terms: ["block", "blocks", "bloc", "blocs"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Un bloc est un conteneur de @transactions, avec l'ajout d'un nouveau bloc à
la @chaîne-de-blocs en moyenne toutes les 2 minutes (voir la constante
`DIFFICULTY_TARGET_V2` définit à 120 secondes).

Les blocs contiennent également un type particulier de transactions, la
@transaction-de-la-base-de-la-pièce, qui ajoute des Moneroj nouvellement
créés au réseau.

Les blocs sont créés à travers le processus d'@extraction-minière, et le
@nœud qui a miné le bloc avec succès le diffuse alors à tous les @nœuds
auquels il est connecté, qui rediffuseront ensuite ce bloc jusqu'à ce que la
totalité du réseau l'ait reçu.

De faux ou mauvais blocs ne peuvent généralement pas être créés, dans la
mesure ou les @nœuds recevant les blocs vérifient toujours les @transactions
qu'ils contiennent vis-à-vis d'un certain nombre de règles de consensus
auxquelles tous les nœuds adhèrent, incluant la validation des @signatures
cryptographiques de chaque transaction.
