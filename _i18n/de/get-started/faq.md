{% include untranslated.html %}
<div class="tab">
    <input id="tab-one" type="checkbox" name="tabs" class="accordion">
    <label for="tab-one" class="accordion">Warum hat Monero einen Wert?</label>
    
<div class="tab-content" markdown="1">

Monero hat einen Wert, weil Menschen Einheiten kaufen wollen. Wenn keiner Monero kaufen will, dann hat es keinen Wert. Der Preis von Monero steigt, wenn die Nachfrage höher ist als das Angebot, und sinkt, wenn – umgekehrt – das Angebot höher ist als die Nachfrage.

</div>

</div>

<div class="tab">
    <input id="tab-two" type="checkbox" name="tabs" class="accordion">
    <label for="tab-two" class="accordion">Wie bekomme ich Monero?</label>
    
<div class="tab-content" markdown="1">

Du kannst Monero über eine Börse kaufen oder direkt mit einer Person handeln. Alternativ kannst du Monero minen und Einheiten durch den Block Reward erhalten.
</div>

</div>

<div class="tab">
    <input id="tab-three" type="checkbox" name="tabs" class="accordion">
    <label for="tab-three" class="accordion">Was ist ein Mnemonic Seed?</label>
    
<div class="tab-content" markdown="1">

Ein Mnemonic Seed ist ein Satz von 25 Wörtern, mit denen du deinen Account immer wiederherstellen kannst – selbst wenn dein Computer abgestürzt ist. Halte diese Wörter sich und teile sie nicht mit anderen Personen.
</div>

</div>

<div class="tab">
    <input id="tab-four" type="checkbox" name="tabs" class="accordion">
    <label for="tab-four" class="accordion">Wie unterscheidet sich die Privatspähre durch Monero von der anderer Kryptowährungen?</label>
    
<div class="tab-content" markdown="1">

Monero verwendet drei verschiedene Technologien, die die Privatsphäre ermöglichen: Ring Signaturen, Ring Confidential Transactions (RingCT) sowie Stealth Adressen. Mittels dieser werden Sender, Empfänger und Betrag einer jeden Transaction versteckt. Es gibt keinen Weg, versehentlich eine transparente Transaktion zu senden. Dieses Feature ist exklusiv bei Monero vorhanden. Du braucht keinem anderen deine Privatspähre anvertrauen.
</div>

</div>

<div class="tab">
    <input id="tab-five" type="checkbox" name="tabs" class="accordion">
    <label for="tab-five" class="accordion">Warum braucht mein Wallet so lange zum Synchronisieren?</label>
    
<div class="tab-content" markdown="1">

Wenn du eine Full Node lokal laufen lässt, muss die gesamte Blockchain auf deinen Computer kopiert werden. Dies kann sehr lange dauern, besonders unter der Verwendung von alten Festplatten oder bei langsamer Internetverbindung. Wenn du eine Remote Node verwendest, dann muss dein Computer trotzdem eine Kopie aller Outputs anfordern, was einige Stunden in Anspruch nehmen kann. Sei geduldig; wenn du auf Kosten deiner Privatsphäre schneller synchronisieren möchtest, verwende stattdessen ein leichtgewichtiges (lightweight) Wallet.
</div>

</div>

<div class="tab">
    <input id="tab-six" type="checkbox" name="tabs" class="accordion">
    <label for="tab-six" class="accordion">Was ist der Unterschied zwischen einem leichtgewichtigen (lightweight) und einem normalen Wallet?</label>
    
<div class="tab-content" markdown="1">

Bei einem leichtgewichtigen Wallet gibt du einer Node deinen Viewkey, die für dich die Blockchain auf einkommende Transaktionen prüft. Diese Node weiß, wann du Geld erhalten hast, aber nicht, wie viel du erhalten hast und von wem; sie weiß auch nicht, an wen Geld gesendet wurde. Je nach verwendeter Wallet Software solltest du eine Node benutzen, die du kontrollierst, um Leaks bei der Privatsphäre zu vermeiden. Nutze ein normales Wallet zusammen mit einer eigenen Node für erhöhte Privatsphäre.
</div>

</div>

<div class="tab">
    <input id="tab-seven" type="checkbox" name="tabs" class="accordion">
    <label for="tab-seven" class="accordion">Wie unterscheidet sich Monero von Bitcoin?</label>
    
<div class="tab-content" markdown="1">

Monero basiert nicht auf Bitcoin. Es basiert auf dem CryptoNote Protokoll. Bitcoin ist ein vollständig transparentes System, bei dem genau eingesehen werden kann, wie viel Geld von wem an wen geschickt wurde. Monero versteckt all diese Informationen in allen Transaktionen. Zudem hat Monero eine dynamische Blockgröße und dynamische Gebühren, einen ASIC resistenten Mining (PoW) Algorithmus und neben der Tail Coin Emission einige andere Änderungen.
</div>

</div>

<div class="tab">
    <input id="tab-eight" type="checkbox" name="tabs" class="accordion">
    <label for="tab-eight" class="accordion">Ist bei Monero die Blockgröße begrenzt?</label>
    
<div class="tab-content" markdown="1">

Nein, Monero hat kein hartes Limit der Blockgröße. Stattdessen kann die Blockgröße über Zeit höher oder niedriger werden, basierend auf Nachfrage. Sie ist auf eine gewisse Wachstumsrate begrenzt, um extremes Wachstum zu unterbinden.
</div>

</div>

<div class="tab">
    <input id="tab-nine" type="checkbox" name="tabs" class="accordion">
    <label for="tab-nine" class="accordion">Was ist eine Blockchain?</label>
    
<div class="tab-content" markdown="1">

Eine Blockchain ist ein System, welches eine Kopie der gesamten Transaktionshistorie im Monero Netzwerk speichert. Alle zwei Minuten wird ein weiterer Block mit den neuesten Transaktionen an die Blockchain angefügt. Diese Kette von Blöcke (Blockchain) erlaubt dem Netzwerk, die Beträge der Konten zu überprüfen und macht es widerstandsfähig gegen Angriffe oder Versuchen von Zentralisierung.
</div>

</div>

<div class="tab">
    <input id="tab-ten" type="checkbox" name="tabs" class="accordion">
    <label for="tab-ten" class="accordion">Was ist Kovri?</label>
    
<div class="tab-content" markdown="1">

Kovri ist ein I2P Router, der in C++ geschrieben ist. I2P ist ein verstecktes Netwerk wie Tor mit einigen technischen Unterschieden. Kovri ist ein unabhängiges Projekt von Monero, aber es wird neben Monero auch für andere Projekte verwendbar sein. Kovri versteckt den Broadcast der Transaktion, sodass andere Nodes nicht wissen, wer die Transaktion erstellt hat. Kovri kann benutzt werden, um den gesamten Monero Netzwerkverkehr durch I2P zu leiten, wodurch nicht festgestellt werden kann, dass Monero verwendet wird. Momentan ist Kovri in der Alpha Phase und noch nicht vollständig in Monero integriert. Lerne mehr über Kovri auf der [Website des Projektes](https://getkovri.org).
</div>

</div>

<div class="tab">
    <input id="tab-eleven" type="checkbox" name="tabs" class="accordion">
    <label for="tab-eleven" class="accordion">Was ist Fungibilität und warum ist sie wichtig?</label>
    
<div class="tab-content" markdown="1">

Fungibilität ist die einfache Eigenschaft von Geld, dass kein Unterschied zwischen zwei gleichen Beträgen besteht. Wenn zwei Personen einen Zehner und zwei Fünfer tauschten, dann wäre niemand im Nachteil. Nehmen wir jedoch an, dass der Zehner zuvor bei einem Ransomware Angriff verwendet wurde und dies allgemein bekannt ist: Würde die andere Person nichtsdestotrotz den Handel durchführen? Vermutlich nicht, selbst wenn die Person mit dem Zehner keine Verbindung zu der Ransomware hat. Dies ist ein Problem, da der Empfänger dauernd das Geld prüfen muss, um letzten Endes kein beschmutztes Geld zu erhalten. Monero ist fungibel, wodurch niemand diesen Aufwand betreiben muss.
</div>

</div>

<div class="tab">
    <input id="tab-twelve" type="checkbox" name="tabs" class="accordion">
    <label for="tab-twelve" class="accordion">Wenn Monero so privat ist: Wie wissen wir, dass Einheiten nicht aus dem Nichts erzeugt werden?</label>
    
<div class="tab-content" markdown="1">
Bei Monero ist jeder Transaktions-Output einzigartig mit einem Key Image assoziert, welches nur von dem Inhaber des Outputs generiert werden kann. Key Images, die mehr als ein Mal verwendet werden, werden von den Minern als Double-Spending abgelehnt und können nicht zu einem validen Block hinzugefügt werden. Wenn eine neue Transaktion empfangen wurde, überprüfen die Miner, dass ein Key Image nicht bereits in einer vorherigen Transaktion existiert, um zu versichern, dass es sich nicht um ein Double-Spend handelt.

Außerdem wissen wir, dass die Transaktionsbeträge gültig sind, obwohl die Beträge der Inputs und Outputs verschlüsselt sind (versteckt für jeden, bis auf den Empfänger). Weil die Beträge mittels eines Pedersen Commitment-Verfahrens verschlüsselt sind, kann zwar kein Beobachter die Beträge selbst sehen, aber mathematisch prüfen, dass keine Monero aus dem Nichts erstellt wurden.

Solange die verschlüsselten Output Beträge, die du erstellst, der Summe der Inputs gleichen, die verbraucht werden (diese beinhalten einen Output für den Empfänger und einen Change Output an dich selbst sowie eine unverschlüsselte Transaktionsgebühr), hast du eine legitime Transaktion und weißt, dass keine Monero aus dem Nichts geschaffen wurden. Das Pedersen Commitment-Verfahren bedeutet, dass die Summen als gleich überprüft werden können, ohne dass die Werte selbst bekannt sind.
</div>

</div>
