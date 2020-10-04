---
terms: ["block", "blocks", "Block", "Blöcke"]
summary: "Ein Behältnis von Transaktionen; eine Reihung dieser formt eine Blockchain"
---

### Grundlagen

Ein Block enthält @Transaktionen (ein Block ist sozusagen ein Behältnis ebendieser). Durchschnittlich wird alle zwei Minuten ein neuer Block zur @Blockchain hinzugefügt (siehe das konstant als 120 Sekunden definierte `DIFFICULTY_TARGET_V2`).

Blöcke beinhalten zudem eine besondere Art von Transaktion: die @Coinbase-Transaktion, welche neu erschaffene Moneros zum Netzwerk hinzufügt.

Blöcke werden durch den Prozess des @Minings erschaffen. Der @Node, der einen Block erfolgreich geminet ("geschürft") hat, sendet diesen dann zu allen verbundenen @Nodes, welche den Block wiederum weitersenden, bis ihn das ganze Monero-Netzwerk empfangen hat.

Falsche oder fehlerhafte, schlechte Blöcke können grundsätzlich nicht erstellt werden. @Nodes, welche Blöcke empfangen, verifizieren die in diesen enthaltenen @Transaktionen durch eine Reihe allgemeingültiger Regeln, die von allen Nodes eingehalten werden. Dazu gehört auch die Validierung der kryptografischen @Signaturen jeder einzelnen Transaktion.
