---
summary: 'Nodes, die nicht im gleichen Gerät wie das Wallet laufen. Offene Remote-Nodes erlauben die direkte Nutzung des Monero-Netzwerks'
terms: ["remote-node", "remote-nodes", "Remote-Node", "Remote-Nodes"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

Ein @Node, der nicht auf demselben Gerät wie das Monero-@Wallet läuft, wird
"Remote-Node" genannt und kann sowohl privat als auch offen sein.

Ein **privater Remote-Node** läuft zwar nicht auf deinem Gerät, du hast
jedoch die volle Kontrolle darüber. Ein klassisches Beispiel ist ein auf
einem VPS oder einem Server laufender Node: Dieser Node ist nicht auf deinem
Gerät, du kannst ihn aber komplett eigenhändig steuern. Du kannst dich sogar
dazu entschließen, ihn zu einem offenen Node werden zu lassen, damit andere
sich zu ihm verbinden können.

Ein **öffentlicher Remote-Node** kann von Leuten genutzt werden, die aus
persönlichen Gründen (im Regelfall aufgrund von Hardware-Voraussetzungen,
Speicherplatz oder auch technischem Können) keinen eigenen Node betreiben
möchten/können und es vorziehen, einen im Monero-Netzwerk öffentlich
verfügbaren Node zu verwenden. Offene Remote-Nodes werden oft einfach nur
"Remote-Nodes" genannt.

Das Nutzen eines offenen Nodes erlaubt es, @Transaktionen augenblicklich zu
senden, ohne dass zunächst die @Blockchain heruntergeladen und mit dem
Monero-Netzwerk synchronisiert werden muss - dies geht jedoch auf Kosten
deiner Privatsphäre. Die Monero-Community empfiehlt dir, immer deinen
eigenen Node zu betreiben, damit du das Maximum an möglicher Privatsphäre
erlangst und dabei hilfst, das Netzwerk zu dezentralisieren.

### Öffentliche Nodes

Offene Nodes sind super, weil sie es Leuten, die keinen eigenen Node
betreiben, erlauben, direkt dem Monero-Netzwerk beizutreten. Es gibt zwei
Hauptmöglichkeiten, zu einem offenen Node zu verbinden: Finde jemanden, der
seinen Node mit dir teilt, oder nutze schlicht einen öffentlichen Node.

Öffentliche Nodes sind durch zwei Systeme im Netzwerk erreichbar:

- **Node-Sammlungen**, im Grunde Auflistungen offener Remote-Nodes. Die
Betreiber dieser Nodes haben sich dazu entschieden, diese zur Sammlung
hinzuzufügen, sodass andere sie nutzen können. Die Sammlung versorgt
denjenigen, der einen Remote-Node nutzen möchte, mit einer simplen
URL. Diese verbindet zu einem der gelisteten Nodes und muss dazu im
Monero-Wallet (GUI oder CLI) eingefügt werden. Das Wallet kontaktiert
daraufhin einen der durch die URL vermittelten Nodes und erlaubt dem
Endnutzer das sofortige Empfangen und Senden von Transaktionen. Eine der
bekanntesten Node-Sammlungen ist
[MoneroWorld](https://moneroworld.com/#nodes).

- **Native offene Nodes**, eine der neuen coolen Funktionen, die die
Monero-Entwickler zur Verbesserung des Nutzererlebnisses und Vereinfachung
des Verbindens zum Netzwerk eingebracht haben. Das CLI-Wallet erlaubt die
Veröffentlichung eines Nodes durch das einfach Hinzufügen des Flags
`--public-node`. Dadurch wird dieser Node auf dem P2P-Netzwerk angezeigt und
Nutzer können sich zu diesem (oder jedem anderen öffentlichen Node, der so
angezeigt wird) verbinden, indem sie die zugehörige Einstellung in den GUI-
und CLI-Wallets vornehmen.

Sei dir darüber bewusst, dass die Nutzung von Remote-Nodes riskant sein
kann. Node-Betreiber können Transaktionen mit IP-Adressen in Verbindung
bringen. Diese Risiken können zwar minimiert werden, wenn möglich solltest
du dennoch vermeiden, einen solchen Node zu nutzen. Betreibe deinen eigenen
Node!
