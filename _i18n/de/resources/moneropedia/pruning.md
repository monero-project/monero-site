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

- *Synchronisieren eines Pruned-Nodes von Grund auf:* Du synchronisierst und
lädst lediglich 1/3 der gesamten Blockchain herunter.

- *Pruning eines bestehenden Nodes:* Die bereits bestehende Blockchain wird
gestutzt. Dies resultiert nicht in einer kleineren Blockchain, sondern wird
Teile der Datei als leer markieren. Zukünftige Daten werden diesen nun
freien Platz nutzen, damit die Datei nicht wächst, bis der Speicherplatz
knapp wird.

- *Erstellung einer neuen, gestutzten Blockchain aus einer kompletten
Blockchain:* Eine komplette Blockchain, die du schon hast, wird zur
Erstellung einer neuen, gestutzten Blockchain verwendet.

Pruned-Nodes sind sehr nützlich und @Remote-Nodes vorzuziehen. Wenn es
allerdings möglich ist, sollten Nutzer einen Full-Node betreiben und das
Pruning nur im Falle der Notwendigkeit in Betracht ziehen.

Die Funktion des Datenbank-Prunings wurde im Januar 2019
[hinzugefügt](https://github.com/monero-project/monero/pull/4843). Im
[Blogpost]({{ site.baseurl }}/2019/02/01/pruning.html) finden sich weitere
Informationen.
