---
summary: 'Das Internet, auf welchem anonyme, überlagernde Netzwerke aufbauen'
terms: ["Clearnet"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

Wenn du das Internet für Dinge wie das Abrufen der Nachrichten, E-Mails,
soziale Medien oder auch Monero nutzt, nutzt du sehr wahrscheinlich eine
Clearnet-Verbindung. Dies bedeutet, dass deine *gesamten* Verbindungen
aufgespürt, verfolgt und überwacht werden können, und das von:

- deinem
[Internetprovider](https://de.wikipedia.org/wiki/Internetdienstanbieter)

- der Webseite/der Person/dem Service, mit der/dem du in Verbindung stehst

- eventuell einer mit den Möglichkeiten der [Five
Eyes](https://en.wikipedia.org/wiki/5_Eyes) befähigten Instanz

Selbst wenn du
[HTTPS](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure)
oder Ähnliches nutzt, sind die übertragenen Inhalte zwar verschlüsselt (vor
dem "Abhören" durch Dritte geschützt), jedoch ist die Verbindung weder
verborgen, noch anonym (Dritte können feststellen, dass die Verbindung
existiert und zwischen wem). Daher werden auch HTTPs und ähnliche
Technologien dem Clearnet zugeordnet.

### Ausführliche Informationen

Da dich ein klassisches
[VPN](https://de.wikipedia.org/wiki/Virtual_Private_Network) nicht vor dem
Clearnet schützen kann - du nutzt schließlich nach wie vor das *Clearnet*
(wobei deine Daten zumindest besser umgeleitet werden, als ohne die
Verwendung eines VPNs) - solltest du ein sogenanntes Overlay-Netzwerk, also
ein anonymes, überlagerndes Netzwerk nutzen, um den direkten Gebrauch des
Clearnets zu vermeiden:

- Java-I2P

- [Tor](https://torproject.org/de/)

Diese Technologien schützen dich vor dem Clearnet, indem sie ein anonymes
Netz **über** ebendiesem errichten und deine Verbindungen somit
verschlüsselt **und** anonym bleiben.

Ein [interaktives Diagramm](https://www.eff.org/pages/tor-and-https) des
[EFF](https://www.eff.org/) zeigt den Zusammenhang des *Clearnets* und
**Tor**. Dieses Konzept trifft in puncto Anonymität (in gewisser Hinsicht)
auch auf @Kovri und I2P zu, mit der Ausnahme, dass dein Datenverkehr niemals
das I2P-Netzwerk verlassen muss
