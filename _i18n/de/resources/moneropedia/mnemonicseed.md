---
summary: 'Eine 13- oder 25-teilige Wortfolge, um ein Monero-Konto zu sichern; verfügbar in mehreren Sprachen'
terms: ["mnemonic-seed", "mnemonic", "mnemonischer-Seed", "mnemonischen-Seed", "mnemonischen-Seeds"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Eine aus 13 oder 25 Wörtern bestehende Wortfolge, welche zur Sicherung eines
Monero-Kontos genutzt wird und in mehreren Sprachen verfügbar ist. Diese
25-teilige Wortfolge (im Fall von MyMonero 13-teilig) enthält alle
benötigten Informationen, um Gelder eines Monero-@Kontos ansehen und
ausgeben zu können.

### Ausführliche Informationen

Beim offiziellen Wallet enthält der mnemonische Seed 25 Wörter, von welchen
das letzte als Prüfsumme genutzt wird. Diese Wörter entsprechen einem
256-Bit-Integer, welcher der *private* @Spend-Key des Kontos ist. Der
*private* @View-Key entsteht aus der Berechnung des privaten Spend-Keys mit
Keccak-256, wodurch ein zweiter 256-Bit-Integer generiert wird. Die
entsprechenden *öffentlichen* Schlüssel leiten sich von den privaten
Schlüsseln ab.

Bewahrst du den mnemonischen Schlüssel (die 25 Wörter) an einem sicheren Ort
auf, so verfügst du über eine Sicherung deiner privaten Schlüssel und damit
deiner Monero. Das Teilen dieser Wortfolge ist das Gleiche, als würdest du
einer anderen Person den Vollzugriff auf dein Geld gewähren.

Es ist keine gute Idee, mehr als das, was du bereit bist zu verlieren, in
einem Zahlungs-Wallet ("Hot-Wallet") aufzubewahren - also einem Wallet,
welches auf einem Gerät liegt, das mit dem Internet oder anderen nicht
vertrauenswürdigen Quellen verbunden ist, war, oder jemals sein könnte.

Durch das Erstellen eines Spar-Wallets ("Cold-Wallet") beziehungsweise
@Paper-Wallets kannst du deine Monero sicher aufbewahren.
