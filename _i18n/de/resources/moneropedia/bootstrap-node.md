---
summary: 'Ein Node, zu dem ein Hintergrunddienst verbindet, um schon während des Synchronisierens eine sofortige Verwendbarkeit von Wallets zu ermöglichen'
terms: ["bootstrap-node", "bootstrap-nodes", "Bootstrap-Node", "Bootstrap-Nodes"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ein auf einem lokalen @Node laufender Hintergrunddienst muss mit anderen
(Remote-)@Nodes synchronisieren. Während er noch nicht gänzlich
synchronisiert ist, könnte das @Wallet noch mit dem lokalen Node verbunden
sein, was zur Folge hat, dass es keinen Zugriff auf die noch nicht
synchronisierten @Blöcke hat.

Um das @Wallet unmittelbar nutzbar zu machen, nutzt der (auf einem lokalen
@Node laufende) Hintergrunddienst einen Bootstrap-Node, an welchen
RPC-Anfragen umgeleitet werden. Dadurch wird der Zugriff auf die noch
fehlenden @Blöcke ermöglicht.

Anmerkung: Die Antworten des Bootstrap-Nodes könnten nicht vertrauenswürdig
sein.
