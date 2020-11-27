---
tags: ["kovri"]
terms: ["encryption", "encrypted", "encrypting", "decryption", "decrypted", "decrypting", "Verschlüsselung", "Entschlüsselung", "verschlüsseln", "entschlüsseln", "verschlüsselt", "entschlüsselt"]
summary: "Der Prozess des Verschlüsselns von Nachrichten oder Informationen, sodass ausschließlich autorisierte Instanzen diese entschlüsseln und lesen können"
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}
### Grundlagen

>
In der Kryptografie ist Verschlüsselung der Prozess des Chiffrierens von Nachrichten oder Informationen auf eine Weise, dass ausschließlich autorisierte Beteiligte das Empfangene entschlüsseln und lesen können. Verschlüsselung selbst verhindert nicht ein eventuelles Abfangen der Nachricht, enthält dem Abfänger jedoch den Nachrichteninhalt vor.

(Frei übersetzt von [Encryption](https://en.wikipedia.org/wiki/Encryption))

### Ausführliche Informationen

>
Mit einem Verschlüsselungssystem wird die ursprüngliche Information oder Nachricht (*"Klartext"* genannt) unter Verwendung eines Verschlüsselungsalgorithmus chiffriert und somit ein "Geheimtext" generiert, welcher nur nach Entschlüsselung lesbar ist. Aus technischen Gründen verwendet ein Verschlüsselungssystem normalerweise einen pseudozufälligen, durch einen Algorithmus generierten Verschlüsselungscode. Prinzipiell ist es möglich, die Nachricht zu dechiffrieren, ohne über den Code zu verfügen; bei einem gut aufgebauten Verschlüsselungssystem benötigt dies jedoch umfangreiche Rechenressourcen und Können. Ein autorisierter Empfänger kann die Nachricht ganz einfach mit dem Code entschlüsseln, welchen der Absender jeglichen Empfängern, nicht jedoch unautorisierten Abfängern, bereitgestellt hat.

>
Der Zweck von Verschlüsselung ist es, sicherzustellen, dass nur jemand, der zum Abruf von Daten (bspw. einer Textnachricht oder einer Datei) autorisiert ist, ebendiese unter Verwendung des Entschlüsselungscodes lesen kann. Jemand, der nicht autorisiert ist, kann ausgeschlossen werden, da der- oder diejenige nicht über den benötigten Code verfügt, ohne welchen es unmöglich ist, die verschlüsselte Information zu lesen.

(Frei übersetzt von [Encryption](https://en.wikipedia.org/wiki/Encryption))

### Kovri

@Kovri realisiert verschiedene Arten von Verschlüsselung durch *mindestens* vier erforderliche Funktionen:

- Reseed zwecks Bootstrapping
- Garlic-Routing: Verwendung dreier Verschlüsselungsschichten, um die sichere Überlieferung von Nachrichten an Empfänger/Peers/Ziele zu verifizieren
- "Tunnel Encryption": Garlic-Nachrichten durchaufen eine Art Tunnel und werden ab Eingang bis zum Endpunkt verschlüsselt
- Transportschicht-Verschlüsselung verhindert die Möglichkeit der Nachrichtenentschlüsselung auf der [Medienschicht](https://de.wikipedia.org/wiki/OSI-Modell)

Für Details zu den Arten von Verschlüsselung und kryptografischen @Signaturen, die bei @Kovri und I2P verwendet werden, besuche Java-I2Ps [Kryptografie](https://geti2p.net/spec/cryptography).
