---
summary: 'Automatische Einmal-Adresse für jede Transaktion'
terms: ["stealth-address", "stealth-addresses", "Schattenadressen", "Schattenadresse"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Schattenadressen sind ein wichtiger Teil von Moneros inhärenter
Privatsphäre. Dem Sender wird ermöglich und abverlangt, im Namen des
Empfängers für jede @Transaktion zufällige Einmal-Adressen zu erstellen. Der
Empfänger kann so lediglich eine Adresse veröffentlichen und
nichtsdestotrotz gehen all seine eingehenden Zahlungen an einmalige Adressen
auf der @Blockchain. Von dort aus können sie weder zur veröffentlichten
Adresse des Empfängers noch zu einer anderweitigen Adresse irgendeiner
anderen Transaktion zurückverfolgt werden. Unter der Verwendung von
Schattenadressen können ausschließlich der Sender und der Empfänger
ausmachen, wohin eine Zahlung geschickt wurde.

Wenn du ein Monero-Konto erstellst, wirst du einen privaten @View-Key, einen
privaten @Spend-Key und eine öffentliche Adresse erhalten. Der @Spend-Key
wird zum Senden von Zahlungen, der @View-Key zum Anzeigen von auf deinem
Konto eingehenden Transaktionen und die öffentliche Adresse zum Empfangen
von Zahlungen verwendet. Sowohl der Spend- als auch der View-Key werden zum
Erstellen deiner Monero-Adresse genutzt. Du kannst ein View-Only-Wallet
haben, welches lediglich den @View-Key verwendet. Diese Funktion kann zu
Zwecken der Buchhaltung oder Betriebsprüfung genutzt werden, ist derzeit
allerdings unverlässlich, da abgehende Transaktionen nicht abgebildet werden
können. Du kannst mit der Weitergabe deines @View-Keys entscheiden, wer dein
Monero-Guthaben sehen kann. Monero ist standardmäßig privat und optional
halbtransparent!

Beim Verwenden des Monero-Wallets wird all dies von der Software
erledigt. Das Senden von Monero ist kinderleicht: Eingabe der Zieladresse
und des Betrags, auf "Senden" klicken - fertig. Zum Empfangen von Monero
musst du dem Sender lediglich deine öffentliche Adresse übermitteln.

Im Eintrag über @Ringsignaturen wird erklärt, wie Monero eine
Verfolgungschronik verhindert (unmögliche Rückverfolgbarkeit).
