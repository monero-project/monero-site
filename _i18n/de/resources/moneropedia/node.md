---
summary: 'Ein mit dem Internet verbundenes Gerät, welches die Monero-Software ausführt, über eine vollständige Kopie der Monero-Blockchain verfügt, und damit das Monero-Netzwerk aktiv unterstützt'
terms: ["node", "nodes", "full-node", "full-nodes", "Node", "Nodes", "Full-Node", "Full-Nodes"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ein Node ist ein mit dem Internet verbundenes Gerät mit einer Kopie der
Monero-Blockchain, welches die Monero-Software ausführt und damit das
Monero-Netzwerk aktiv unterstützt. Ein Node, der nicht auf deinem lokalen
Gerät läuft, nennt sich @Remote-Node. Remote-Nodes können privat (bei
ausschließlichem Privatgebrauch) oder offen sein, wenn sie für andere
zugänglich sind.

### Weitere Informationen

Nodes beteiligen sich innerhalb des Monero-Netzwerks, setzen dessen Regeln
durch und sichern damit @Transaktionen. Nodes laden die gesamte @Blockchain
herunter, damit sie Kenntnis über die stattgefundenen Transaktionen
haben. Sie unterstützen das Netzwerk, indem sie Transaktionen an andere
Nodes innerhalb des Netzwerks weitergeben. Nodes können außerdem zum
Monero-Netzwerk beitragen, indem sie an der Erstellung von @Blöcken
mitwirken (dies wird @Mining genannt).

Mining ist der Prozess, durch welchen Nodes unter Bezugnahme auf den
vorherigen Block (meist mittels seines Hashwerts) aus den Transaktionen, die
im Transaktionspool auf ihre Verarbeitung warten, und aus der
@Coinbase-Transaktion einen neuen Block erstellen. Wenn ein Node denkt, er
habe einen validen Block erstellt, überträgt er diesen an andere Nodes
innerhalb des Netzwerks. Diese wiederum signalisieren ihr Einverständnis
durch das Arbeiten am nächsten Block der Blockchain.

Die Regeln, welche Nodes befolgen, sind in die Monero-Software
eingebaut. Wenn alle Nodes darin übereinstimmen, diese Regeln zu befolgen,
nennt man dies @Konsens. Konsens ist deshalb notwendig für eine
Kryptowährung, da so die Blockchain aufgebaut wird. Nodes, die nicht darin
übereinstimmen, welche Blöcke valide sind (etwa, weil ein Node-Betreiber
seine Monero-Software nicht aktualisiert hat), können nicht mehr am
Monero-Netzwerk mitwirken.

Das Monero-Core-Team plant alle sechs Monate eine Netzwerkaktualisierung,
stattfindend im April und Oktober eines jeden Jahres. Wenn du zu diesen
Zeitpunkten einen Node betreibst, muss dieser mit der neuesten Version der
Monero-Software aktualisiert sein, ansonsten wird er nicht mehr am Netzwerk
teilhaben können.

---

##### Weitere Quellen

<sub>1. *Fluffypony erklärt, warum obligatorische Netzwerkaktualisierungen gut für Monero sind.* ([Monero Missives for the Week of 2016-06-20]({{ site.baseurl_root }}/2016/06/20/monero-missive-for-the-week-of-2016-06-20.html))</sub>
