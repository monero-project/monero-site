---
summary: 'Monero, die als Teil einer Transaktion versendet wurden und auf das Konto zurückgebucht werden, anstatt an einen anderen Empfänger zu gehen.'
terms: ["change", "Wechselgeld"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Monero, die als Teil einer Transaktion versendet wurden und auf das Konto
zurückgebucht werden, anstatt an einen anderen Empfänger zu gehen.

### Weitere Informationen

Das @Wallet der Monero-Software berechnet Wechselgeld automatisch. Wenn du
eine Transaktion vornimmst, sagst du dem Monero-Netzwerk, was es mit einem
von dir kontrollierten Input tun soll. Ein Input ist eine "Einzahlung" auf
dein Konto, welche du anschließend ausgeben kannst. Outputs sind der Teil
einer Transaktion, welcher dem Monero Netzwerk mitteilt, wohin Beträge
gesendet werden sollen (Outputs sind also gewissermaßen die gesendeten und
damit ausgegebenen Geldbeträge).

Du kannst mehrere Inputs in verschiedenen Stückelungen auf deinem Konto
haben (so hast du vielleicht am Freitag 0,5 XMR und am Samstag 0,75 XMR
eingezahlt). Wenn du also eine Transaktion mit einem Input von 0,5 XMR hast,
jedoch nur 0,1 XMR versenden möchtest, wird deine @Transaktion neben einer
Gebühr zur Bezahlung des @Miners einen Output von 0,1 XMR, die an den
Empfänger gehen, enthalten. Der Restbetrag, den du zurückerhalten möchtest,
geht als Output an dich selbst (dies wird "Wechselgeld" genannt). Sobald die
Transaktion abgeschlossen ist, wird das Wechselgeld zu einem Input, welches
du wieder aufteilen und in einer neuen Transaktion versenden kannst.
