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

- **Node aggregators**, which are basically lists of open remote nodes. The
  operators of those nodes decided to add them to the aggregator so that
  other people can use them. The aggregator will provide to the person who
  want to use a remote node a simple URL. This URL connects to one of the
  nodes in the list and will need to be inserted in the Monero wallet (GUI
  or CLI). The wallet will then contact one of the nodes provided by the URL
  and will allow the end user to immediately receive and send
  transactions. One of the most famous node aggregators is
  [MoneroWorld](https://moneroworld.com/#nodes).

- **Native public nodes**. This is one of the new coolest features the
  Monero devs came up with to improve the user experience and to make easier
  to connect to the network. The @daemon allows to make a node public by
  simply adding the flag `--public-node`. Doing so, it will be advertised on
  the P2P network and people will be able to connect to it (or to another
  public node advertising itself in the same way) using the related option
  in the GUI and CLI wallets.

Sei dir darüber bewusst, dass die Nutzung von Remote-Nodes riskant sein
kann. Node-Betreiber können Transaktionen mit IP-Adressen in Verbindung
bringen. Diese Risiken können zwar minimiert werden, wenn möglich solltest
du dennoch vermeiden, einen solchen Node zu nutzen. Betreibe deinen eigenen
Node!
