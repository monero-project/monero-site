---
summary: 'Ein verteiltes Kassenbuch aller vergangenen und gegenwärtigen Transaktionen, ohne Sender oder Empfänger der Gelder aufzudecken'
terms: ["blockchain", "blockchains", "Blockchain", "Blockchains"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Eine Blockchain ist eine verteilte Datenbank, welche durch die Aufzeichnung
aller Transaktionen einer bestimmten Kryptowährung kontinuierlich
wächst. Diese Datenbank wird häufig als Kassenbuch (engl.: Ledger)
bezeichnet, da das Datenmaterial eine lange Liste bereits geschehener
Transaktionen enthält. Bei Monero werden diese Transaktionen im Durchschnitt
alle zwei Minuten zu sogenannten "Blöcken" zusammengepackt, von welchen alle
Miner und Nodes auf dem Netzwerk Kopien besitzen.

### Moneros Blockchain

Im Gegensatz zu Bitcoin und anderen Kryptowährungen offenbaren Transaktionen
innerhalb der Monero-Blockchain nicht, woher Gelder kommen oder wohin diese
gehen. Dies bietet Anonymität und macht die Währung zudem gänzlich
@fungibel. Zusätzlich werden die Beträge aller Transaktionen durch
@Ring-CTs, einer Besonderheit von Monero, verdeckt. Für eine etwaige
Betriebsprüfung oder zu anderen Zwecken der Nachvollziehbarkeit/Transparenz
kann ein Nutzer durch das Teilen eines @View-Keys belegen, dass er einen
bestimmten Betrag von Monero bewirtschaftet.
