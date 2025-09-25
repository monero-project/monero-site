---
summary: 'Entweder ein Alias wie donate.getmonero.org, oder eine Reihe von 95 Schriftzeichen, beginnend mit einer 4'
terms: ["address", "addresses", "Adresse" , "Adressen"]
---

{% include disclaimer.html translated="yes" translationOutdated="no" %}

### Grundlagen

When you send Monero to someone you only need one piece of information, and
that is their Monero address. A *raw* Monero address is a set of 95
characters starting with a '4' or an '8'. The Monero donation address, for
instance, is
888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H.

Da diese Adressen lang und komplex sind, wird dir stattdessen häufig eine
@OpenAlias-Adresse begegnen. So können Spenden an Monero zum Beispiel an
donate@getmonero.org oder donate.getmonero.org gesendet werden.

Solltest du eine eigene @OpenAlias-Adresse haben wollen, findest du einige
Informationen auf der [OpenAlias-Seite](https://openalias.org/).

### Integrierte Adresse

Eine integrierte Adresse ist eine Adresse, die mit einer verschlüsselten
64-Bit-@Zahlungs-ID kombiniert ist. Eine integrierte Adresse hat eine Länge
von 106 Zeichen.

### Detaillierte Informationen

Die Adresse ist genau genommen eine Verkettung (im Base58-Format) des
*öffentlichen* @Spend-Keys und des *öffentlichen* @View-Keys, mit
vorangestelltem Netzwerk-Byte (für Monero die Zahl 18) und den angehängten
ersten vier Bytes des Keccac-256-Hashs des gesamten Strings (genutzt als
Prüfsumme).
