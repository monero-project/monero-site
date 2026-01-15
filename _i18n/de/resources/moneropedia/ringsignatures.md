---
summary: 'Eine Gruppe kryptografischer Signaturen mit mindestens einem realen Beteiligten, aber keiner Möglichkeit, auszumachen, wer in der Gruppe real ist, da alle gleichwertig scheinen'
terms: ["ring-signature", "ring-signatures", "Ringsignatur", "Ringsignaturen"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

In der Kryptografie ist eine Ringsignatur eine Art digitaler Signatur, die
durch ein beliebiges Mitglied einer Nutzergruppe, in der jeder einen
Schlüssel hat, erbracht werden kann. Das heißt, eine mit Ringsignatur
signierte Nachricht wird von irgendjemandem aus einer bestimmten Gruppe
gesendet. Eines der Sicherheitsmerkmale von Ringsignaturen ist, dass es
rechnerisch unmöglich sein sollte zu bestimmen, *welches* der
Gruppenmitglieder seine Schlüssel zum Erstellen der Signatur verwendet hat.

Eine Ringsignatur könnte beispielsweise genutzt werden, um eine anonyme
Signatur "eines hochrangigen Offiziellen des Weißen Hauses" bereitzustellen,
ohne offenzulegen, welcher Offizielle die Nachricht signiert hat. Für diese
Verwendung sind Ringsignaturen geeignet, da ihre Anonymität nicht aufgehoben
werden und die Gruppe für eine Ringsignatur spontan (ohne vorherige
Abstimmung bzw. Einrichtung) gebildet werden kann.

### Anwendung auf Monero

A ring signature makes use of your @account keys and a number of public keys
(also known as outputs) pulled from the @blockchain using a gamma
distribution method. Over the course of time, past outputs could be used
multiple times to form possible signer participants. In a "ring" of possible
signers, all ring members are equal and valid. There is no way an outside
observer can tell which of the possible signers in a signature group belongs
to your @account. So, ring signatures ensure that transaction outputs are
untraceable. Moreover, there are no @fungibility issues with Monero given
that every transaction output has plausible deniability (e.g. the network
can not tell which outputs are spent or unspent).

Wie Monero standardmäßig Privatsphäre bietet, kann im Eintrag über
@Schattenadressen nachgelesen werden.
