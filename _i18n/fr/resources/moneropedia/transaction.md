---
summary: 'Un conteneur signé cryptographiquement qui détaille le transfert de Moneroj à un destinataire (ou des destinataires).'
terms: ["transaction", "transactions"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Les Bases

Un conteneur signé cryptographiquement qui détaille le transfert de Moneroj
à un destinataire (ou des destinataires).

Les paramètres d'une transaction contiennent une ou plusieurs adresses de
destinataires avec le montant des fonds correspondants et un paramètre de
@taille-de-cercle qui spécifie le nombre de sorties attachées à la
transaction. Plus le nombre de sorties est important, plus grand est le
degré d'obscurcissement possible, mais cela a un coût. Comme une transaction
devient plus grande avec plus de sorties, les frais de transaction seront
plus élevés.

Il est possible de concevoir une transaction hors-ligne, ce qui permet une
confidentialité supplémentaire.

Une transaction peut être identifiée de façon unique en utilisant un ID de
transaction optionnel, qui est habituellement représenté par une chaîne de
caractères de 32 octets (64 caractères hexadécimaux).

### Informations détaillées

Chaque transaction nécessite deux clefs : une @clef-de-dépense publique et
une @clef-d'audit publique. La destination d'une sortie de transaction est
en réalité une clef publique à usage unique calculée à partir de ces deux
clefs.

Lorsqu'un portefeuille est à la recherche de transactions entrantes, chaque
transaction est scannée pour voir si elle est pour "vous". Cela ne nécessite
que votre clef privée d'autit et votre clef de dépense publique, et cette
vérification est immuable et ne peut pas être falsifiée. Vous ne pouvez pas
recevoir de transactions et les identifier sans la clef privée d'audit
correspondante.

Afin de dépenser les fonds que vous avez, vous devez calculer une clef de
dépense privée à usage unique pour cette sortie. Ce qui est la plupart du
temps fait automatiquement par le logiciel de portefeuille Monero.
