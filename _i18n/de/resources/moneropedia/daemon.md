---
summary: 'Hintergrundprozess, der einen Monero-Node betreibt und steuert'
terms: ["daemon", "Hintergrunddienst"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

"Hintergrunddienst" ist der allgemeine Ausdruck für eine Software, welche im
Hintergrund läuft. Bei Monero wird der Hintergrunddienst durch das
"Monerod"-Programm gestartet. Wenn du den Hintergrunddienst lokal laufen
lässt, betreibst du einen lokalen @Node. Wenn der Hintergrunddienst auf
einem anderen Gerät läuft, handelt es sich um einen @Remote-Node. Ein
@Wallet (wie CLI oder GUI) muss eine Verbindung zu einem (lokalen oder
Remote-) Node aufbauen, um dem Netzwerk Transaktionen zu übermitteln.

Es ist möglich, dem Hintergrunddienst direkt oder via RPC Befehle zu
senden. Die [Anleitung des Hintergrunddienst-RPCs](docs.getmonero.org/rpc-library/monerod-rpc/) enthält eine ausführliche
(und mit Beispielen versehene) Erläuterung der verfügbaren RPC-Aufrufe. Für
detailliertere und fachspezifische Informationen über den Hintergrunddienst
findet sich unten ein Verweis auf Monero Docs.

---

##### Zusätzliche Quellen

<sub>1. Der [Monerod-Beitrag auf docs.getmonero.org](https://docs.getmonero.org/interacting/monerod-reference/)</sub><br>

<sub>2. "Hintergrunddienst"-Artikel [auf Wikipedia](https://de.wikipedia.org/wiki/Daemon)</sub><br>

<sub>3. Monerod-bezogene Fragen [auf StackExchange](https://monero.stackexchange.com/?tags=monerod)</sub>
