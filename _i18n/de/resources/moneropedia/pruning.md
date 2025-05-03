---
summary: 'Funktion, die es Node-Betreibern erlaubt, lediglich 1/3 der Blockchain herunterzuladen und zu synchronisieren'
terms: ["pruning"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

"Pruning" (eng. für Stutzen) ermöglicht es Node-Betreibern, 2/3 des
Speicherplatzes einzusparen, während der gesamte Transaktionsverlauf
bestehen bleibt. Pruning funktioniert durch das Entfernen von 7/8 der
unwichtigen Ringsignatur-Daten. Das verbleibende Achtel bleibt für andere
Nodes verfügbar und wird zum Synchronisieren mit dem Netzwerk
genutzt. Andere Pruned-Nodes verfügen über ein zufälliges Achtel der Daten
und stellen dies dem Netzwerk zur Verfügung. Es gibt beim Gebrauch eines
Pruned-Nodes keine Nachteile bezüglich der Privatsphäre oder Sicherheit.

Es gibt drei Möglichkeiten des Prunings:

- *Synchronize a pruned node from scratch:* You will download and sync only
  1/3 of the full blockchain.

- *Prune an existing node:* The already existing blockchain will be pruned,
  but this will not result in a smaller blockchain. Instead, it will mark
  parts of the file as free, so that future data will use that free space,
  causing the file to not grow until free space grows scarce.

- *Create a new pruned blockchain from a full one:* A full blockchain that
  you already have will be used to create a new, pruned blockchain.

Pruned-Nodes sind sehr nützlich und @Remote-Nodes vorzuziehen. Wenn es
allerdings möglich ist, sollten Nutzer einen Full-Node betreiben und das
Pruning nur im Falle der Notwendigkeit in Betracht ziehen.

Die Funktion des Datenbank-Prunings wurde im Januar 2019
[hinzugefügt](https://github.com/monero-project/monero/pull/4843). Im
[Blogpost]({{ site.baseurl }}/2019/02/01/pruning.html) finden sich weitere
Informationen.
