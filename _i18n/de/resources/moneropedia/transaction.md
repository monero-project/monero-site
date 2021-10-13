---
summary: 'Ein kryptografisch signierter Behälter, der einen Monero-Transfer einem (oder mehreren) Empfänger(n) zuweist.'
terms: ["transaction", "transactions", "Transaktion", "Transaktionen"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ein kryptografisch signierter Behälter, der einen Monero-Transfer einem
(oder mehreren) Empfänger(n) zuweist.

Die Parameter einer Transaktion enthalten eine oder mehrere
Empfängeradressen mit entsprechenden Geldbeträgen und einen Parameter
bezüglich der @Ringgröße, welcher die Anzahl der an die Transaktion
gebundenen Outputs festlegt. Je mehr Outputs verwendet werden, desto höher
kann der Grad an Verschleierung sein. Dies hat jedoch seinen Preis: Da eine
Transaktion durch mehr Outputs größer wird, werden die Transaktionsgebühren
höher ausfallen.

Die Offline-Erstellung einer Transaktion ist möglich und bietet zusätzliche,
die Privatsphäre begünstigende Vorteile.

Eine Transaktion kann durch den Gebrauch einer optionalen Transaktions-ID
eindeutig gekennzeichnet werden. Diese wird in der Regel durch einen
32-Byte-Zeichenkette (oder 64 Hexadezimalzeichen) verkörpert.

### Ausführliche Informationen

Jede Transaktion involviert zwei Schlüssel: Einen öffentlichen @Spend-Key
und einen öffentlichen @View-Key. Das Ziel eines Outputs einer Transaktion
ist genau genommen ein öffentlicher Einmal-Schlüssel, der aus diesen zwei
Schlüsseln berechnet wurde.

Wenn ein Wallet nach eingehenden Zahlungen sucht, scannt es jegliche
Transaktionen und schaut dabei, ob eine davon für "dich" ist. Dafür werden
lediglich dein privater View-Key und dein öffentlicher Spend-Key
benötigt. Diese Überprüfung ist unveränderlich und kann nicht gefälscht
werden. Du kannst keine Transaktionen empfangen und diese ohne einen
zugehörigen privaten View-Key identifizieren.

Um deine Gelder auszugeben, musst du einen privaten Einmal-Spend-Key für
diesen Output berechnen. Dies wird fast immer automatisch von der Software
der Monero-Wallets übernommen.
