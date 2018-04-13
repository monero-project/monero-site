{% include untranslated.html %}
<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="full">
                    <div class="info-block text-adapt">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Anleitungen für die Kommandozeile</h2>
                            </div>
                        </div>
<div markdown="1">
                           
### Die Grundlagen

Monero funktioniert ein wenig anders als du es von anderen @cryptocurrencies gewohnt bist. Bei einer digitalen Währung wie Bitcoin und seinen vielen Derivaten wird vom Bezahlsystem normalerweise eine neue Empfangs @address für jede Bezahlung oder für jeden Nutzer erstellt.

Da Monero jedoch @stealth-addresses verwendet, muss keine seperate Empfangsadresse für jede Bezahlung oder für jeden Nutzer erstellt werden: Es wird nur eine Empfangsadresse benötigt. Stattdessen stellt der Händler dem Kunden eine Bezahl-ID zur Verfügung.

Eine @payment-ID ist eine 64 Zeichen langer hexadezimaler Code, der zufällig vom Händerl erstellt wird. Ein Beispiel für eine Bezahl-ID ist: 
```
666c75666679706f6e7920697320746865206265737420706f6e792065766572
```

### Eine Bezahlung mit monero-wallet-cli überprüfen

Wenn Du eine eine Bezahlung mit monero-wallet-cli überprüfen möchtest, verwende den "payments" Befehl gefolgt von der/den Bezahl-ID(s). Ein Beispiel:

```
[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
 666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █
```

Details zur programmatischen Überprüfung von Bezahlungen folgen im nächsten Abschnitt.

### Eine Bezahlung erhalten: Schritt für Schritt

* Generiere als Bezahl-ID eine zufällige hexadezimale Zeichenkette bestehend aus 64 Zeichen  
* Kommuniziere die Bezahl-ID sowie Deine Monero Adresse dem Käufer  
* Überprüfen die Bezahlung mit dem "payments" Befehl in monero-wallet-cli  

### Programmatische Überprüfung einer Bezahlung

Benutze die get_payments oder get_bulk_payments JSON RPC API Aufrufe, um programmatisch eine Bezahlung zu Überprüfen.

*get_payments* benötigt den payment_id Parameter mit einer einzigen Bezahl-ID.

*get_bulk_payments* ist die präferierte Methode und benötigt zwei Parameter - ein JSON Array mit Bezahl-IDs - und eine optionale min_block_height - die Blockhöhe, von der aus gescannt werden soll.

Eine Antwort des Aufrufs sieht beispielsweise so aus:

```
[ monero->~ ]$ curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
{
  "id": "test",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 30000000000000,
      "block_height": 441942,
      "payment_id": "666c75666679706f6e7920697320746865206265737420706f6e792065766572",
      "tx_hash": "7ba4cd810c9b4096869849458181e98e18b6474ab66415de0f4ccf7ab1162fdf",
      "unlock_time": 0
    }]
  }
}
```

Es ist anzumerken, dass die zurückgegebenen Beträge in Basis Monero Einheiten sind und nicht in den Darstellungseinheiten, wie sie gewöhlich in Endnutzer Anwendungen verwendet werden. Also, since a transaction will typically have multiple outputs that add up to the total required for the payment, the amounts should be grouped by the tx_hash or the payment_id and added together. Additionally, as multiple outputs can have the same amount, it is imperative not to try and filter out the returned data from a single get_bulk_payments call.

Vor dem Überprüfen von Bezahlungen ist es nützlich zu überprüfen, ob neue Blöcke empfangen wurden (mittels des get_info RPC Aufrufs).
Typischerweise möchtest Du dann nur von diesem empfangen Block aus scannen, indem Du diesen als Parameter min_block_height im Aufruf get_bulk_payments spezifizierst.

### Programmatisch nach Bezahlungen suchen

* Erhalte die neueste Blockhöhe von dem Monero Dämon; nur fortfahren, wenn diese sich seit dem letzten Scan geändert hat  
* Rufe den get_bulk_payments RPC API Aufruf mit der gerade ermittelten Blockhöhe und der Liste aller Bezahl-IDs in deinem System  
* Speichere die momentane Blockhöhe als zuletzt gescannte Höhe  
* Entferne Duplikate basierend auf Transaktionshashes, die wir bereits empfangen und verarbeitet haben  
                           
</div>
                    </div>
                </div>
    
                
                <!-- end right one-third block-->
            </div>
        </section>
                