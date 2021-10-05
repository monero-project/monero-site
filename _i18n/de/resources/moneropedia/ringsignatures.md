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

Eine Ringsignatur nutzt die Schlüssel deines @Kontos und eine Anzahl von der
@Blockchain gezogener öffentlicher Schlüssel (auch bekannt als Outputs)
mithilfe einer Methode der Dreiecksverteilung. Im Laufe der Zeit könnten
vergangene Outputs mehrmals genutzt worden sein, um Gruppen möglicher
Unterzeichner zu bilden. Innerhalb des "Rings" potenzieller Unterzeichner
sind alle Ringmitglieder gleichwertig und gleichberechtigt. Es besteht keine
Möglichkeit für einen Außenstehenden, auszumachen, welcher der möglichen
Unterzeichner in einer solchen Gruppe zu deinem @Konto
gehören. Ringsignaturen stellen also sicher, dass Transaktionsoutputs nicht
zurückverfolgbar sind. Außerdem bestehen bei Monero keine Schwierigkeiten
mit @Fungibilität, da jeder Transaktionsoutput glaubwürdige Bestreitbarkeit
hat (z.B. kann das Netzwerk nicht ausmachen, welche Outputs ausgegeben oder
nicht ausgegeben sind).

Wie Monero standardmäßig Privatsphäre bietet, kann im Eintrag über
@Schattenadressen nachgelesen werden.
