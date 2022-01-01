---
summary: 'Eine Möglichkeit, den in Monero-Transaktionen gesendeten Betrag zu verstecken'
terms: ["ringCT", "ring-CT", "Ring-CT", "Ring-CTs"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Ring-CT, kurz für "Ring Confidential Transactions" (vertrauliche
Ringtransaktionen), ermöglicht die Verschleierung von Transaktionsbeträgen
bei Monero.

Ring-CT wurde im Januar 2017 im Block #1220516 implementiert. Ab September
2017 wurde diese Funktion für alle Transaktionen innerhalb des Netzwerks
obligatorisch.

Ring-CT führt eine verbesserte Version von @Ringsignaturen - "A
Multi-layered Linkable Spontaneous Anonymous Group signature" (zu deutsch
"Eine mehrschichtige, verlinkbare, spontane, anonyme Gruppensignatur")
genannt - ein. Diese ermöglichen verborgene Beträge und
Transaktionsursprünge und -ziele mit akzeptabler Effizienz und
verifizierbarer, vertrauensunabhängiger Erstellung von Coins.

In Shen Noethers [Paper](https://eprint.iacr.org/2015/1098) finden sich
weitere Informationen.
