---
terms: ["address", "addresses", "Adresse" , "Adressen"]
summary: "Entweder ein Alias wie donate.getmonero.org, oder eine Reihe von 95 Schriftzeichen, beginnend mit einer 4"
---

### Grundlagen

Wenn du Monero an jemanden versenden möchtest, benötigst du nur eine einzige Information, und das ist die Monero-Adresse des jeweiligen Empfängers. Eine *rohe* Monero-Adresse ist eine Reihe von 95 Schriftzeichen, beginnend mit einer "4". Die Spendenadresse von Monero ist beispielsweise <span class="long-term">888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H</span>.

Da diese Adressen lang und komplex sind, wird dir stattdessen häufig eine @OpenAlias-Adresse begegnen. So können Spenden an Monero zum Beispiel an <span class="long-term">donate@getmonero.org</span> oder <span class="long-term">donate.getmonero.org</span> gesendet werden.

Solltest du eine eigene @OpenAlias-Adresse haben wollen, findest du einige Informationen auf der [OpenAlias-Seite] (https://getmonero.org/resources/moneropedia/openalias.html).

### Integrierte Adresse

Eine integrierte Adresse ist eine Adresse, die mit einer verschlüsselten 64-bit-@Zahlungs-ID kombiniert ist. Eine rohe integrierte Adresse hat eine Länge von 106 Zeichen.

### Detaillierte Informationen

Die Adresse ist genau genommen die Verkettung (im Base58-Format) des *öffentlichen* @Spend-Keys und des *öffentlichen* @View-Keys, mit vorangestelltem Netzwerk-Byte (für Monero die Zahl 18) und den angehängten ersten vier Bytes des Keccac-256-Hashs des gesamten Strings (gebraucht als Prüfsumme).
