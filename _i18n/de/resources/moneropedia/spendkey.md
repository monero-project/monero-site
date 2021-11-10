---
summary: 'Eines der zwei Paare privater und öffentlicher kryptografischer Schlüssel, über welche jedes Konto verfügt. Der *private* Spend-Key wird genutzt, um jegliches Guthaben auf dem Konto auszugeben'
terms: ["spend-key", "spend-keys", "Spend-Key", "Spend-Keys"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Eines der zwei Paare privater und öffentlicher kryptografischer Schlüssel,
über welche jedes Konto verfügt. Der *private* Spend-Key wird genutzt, um
jegliches Guthaben auf dem Konto auszugeben.

### Ausführliche Informationen

Der *private* Spend-Key ist ein 256-Bit-Integer, der zum Signieren von
Monero-Transaktionen verwendet wird. Durch das aktuelle, deterministische
Verfahren des offiziellen Wallets, durch welches eine Ableitung der
Schlüssel erfolgt, ist der private Spend-Key zusätzlich eine alternative
Schreibweise des @mnemonischen-Seeds. Er kann zum Ableiten aller anderen
Konto-Schlüssel genutzt werden.
