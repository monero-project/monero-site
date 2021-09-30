---
summary: 'Pedersen-Commitments sind kryptografische Algorithmen, die es einer beweisenden Partei erlauben, sich auf einen bestimmten Wert festzulegen, ohne diesen zu offenbaren oder ändern zu können'
terms: ["commitments", "commitment", "pedersen", "pedersen-commitment", "pedersen-commitments", "Pedersen-Commitment", "Pedersen-Commitments", "Commitment", "Commitments"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Pedersen-Commitments sind kryptografische Algorithmen, die es einer
beweisenden Partei erlauben, sich auf einen bestimmten Wert festzulegen,
ohne diesen zu offenbaren oder ändern zu können.

Wenn Monero ausgegeben werden, sind der Wert der ausgegebenen Inputs und der
Wert der gesendeten Outputs verschlüsselt und, außer für die Empfänger
dieser Outputs, für jeden verschleiert. Pedersen-Commitments erlauben das
Senden von Monero, ohne den Wert der Transaktionen zu offenbaren. Zudem
ermöglichen sie es Personen, zu verifizieren, dass Transaktionen auf der
Blockchain valide sind und nicht etwa aus dem Nichts heraus Monero
erschaffen.

### Was dies bedeutet

Solange die erstellten (verschlüsselten) Output-Beträge (welche einen Output
für den Empfänger und einen an den Sender zurückgehenden Wechselgeld-Output
umfassen) und die (unverschlüsselte) Transaktionsgebühr mit der Summe der
ausgegebenen Inputs übereinstimmen, handelt es sich um eine legitime
Transaktion; es kann bestätigt werden, dass keine Monero aus dem Nichts
heraus erschaffen werden.

Pedersen-Commitments bedeuten, dass zwar die Summen als übereinstimmend
verifiziert werden können, die einzelnen Monero-Werte jeder Summe und der
Inputs und Outputs jedoch unbestimmbar sind. Pedersen-Commitments bedeuten
außerdem, dass selbst das Verhältnis eines Inputs zu einem anderen, oder
eines Outputs zu einem anderen, nicht bestimmbar ist.

Welche Inputs tatsächlich ausgegeben werden ist unklar, da die Ringsignatur
sowohl die in echt ausgegebenen Inputs, als auch Input-Attrappen auflistet,
und demnach nicht genau klar ist, welche Inputs zusammengezählt werden
müssen. Dies ist aber okay, weil die Ringsignatur der @Ring-CT lediglich
nachweisen muss, dass bei einer bestimmten Kombination der Inputs die
Outputs mit der Summe dieser Inputs übereinstimmen. Aus mathematschen
Gründen ist es unmöglich, das Ergebnis zu fälschen.

### Ausführliche Informationen

Weitere Informationen finden sich im ["Ring Confidential
Transactions"-Paper](https://eprint.iacr.org/2015/1098.pdf) von Shen Noether
vom Monero-Research-Lab.
