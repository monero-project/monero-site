<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="full">
                    <div class="info-block text-adapt">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Istruzioni per l'interfaccia a riga di comando (CLI)</h2>
                            </div>
                        </div>
<div markdown="1">
                           
### Le Basi

Monero lavora in modo leggermente diverso rispetto a quanto sei stato/a abituato/a con le altre @criptovalute. Nel caso di una moneta digitale come Bitcoin e le sue innumerevoli derivate, i sistemi di pagamento dei venditori in genere creano un nuovo indirizzo di destinazione per ogni pagamento o cliente. 

Invece, dal momento che Monero fornisce gli @indirizzi-stealth, non c'è alcun bisogno di gestire indirizzi di destinazione separati per ogni pagamento o cliente, e può essere reso noto solamente un indirizzo di pagamento per tutti. Al momento di ricevere un pagamento, il venditore fornirà al cliente un "ID pagamento".

Un @ID-pagamento è una stringa esadecimale lunga 64 caratteri ed è generalmente creata in modo casuale dal venditore. Un esempio di ID pagamento è: 
```
666c75666679706f6e7920697320746865206265737420706f6e792065766572
```

### Controllare lo stato di un pagamento in monero-wallet-cli

Se vuoi controllare lo stato dei pagamenti utilizzando monero-wallet-cli (il portafoglio Monero a riga di comando) puoi usare il comando "payments" seguito dall'ID pagamento o dagli ID pagamento su cui vuoi effettuare un controllo. Ad esempio:

```
[wallet 49VNLa]: payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
 666c75666679706f6e79206973207     7ba4cd810c9b4096869849458181e98e     441942     30.00000   0
[wallet 49VNLa]: █
```

Se vuoi controllare i pagamenti in modo programmatico, nella prossima sezione trovi tutti i dettagli in merito.

### Ricevere un pagamento passo dopo passo

* Genera una stringa casuale di 64 caratteri esadecimali per il pagamento (ID pagamento)
* Comunica l'ID pagamento generato nonché il tuo indirizzo Monero a chi vuole effettuare un pagamento
* A seguito del pagamento, controlla il suo stato usando il comando "payments" in monero-wallet-cli 

### Controllare lo stato di un pagamento in modo programmatico

Per controllare lo stato dei pagamenti in modo programmatico puoi utilizzare le chiamate API JSON RPC get_payments o get_bulk_payments. 

*get_payments*: richiede un parametro payment_id con un ID pagamento singolo.

*get_bulk_payments*: questo è il metodo da preferire e richiede due parametri, payment_ids (un array JSON di più ID pagamento) e un parametro opzionale min_block_height (l'altezza del blocco da cui iniziare la scansione).

Un esempio di dati ritornati dalle chiamate API:

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

E' importante notare che l'ammontare ritornato è dato in unità base Monero e non in unità visualizzate normalmente nelle applicazioni end-user. Inoltre, dal momento che la transazione tipicamente possiede output multipli che si sommano per formare il totale richiesto dal pagamento, l'ammontare dovrebbe essere raggruppato secondo tx_hash o payment_id e sommato. In più, poiché output multipli possono avere lo stesso ammontare, è imperativo *non* provare a filtrare i dati ritornati da una singola chiamata get_bulk_payments.
 
Prima di iniziare una scansione dei pagamenti, è utile effettuare un controllo preliminare mediante le API RPC del daemon (la chiamata RPC get_info) per vedere se nel frattempo sono stati ricevuti blocchi addizionali. Tipicamente potresti voler iniziare la scansione proprio dal blocco ricevuto specificandolo attraverso il parametro min_block_height del comando get_bulk_payments.

### Effettuare una scansione programmatica per i pagamenti

* Richiedi al daemon l'altezza blocco corrente, procedi solamente se l'altezza ha avuto un incremento dall'ultimo controllo
* Utilizza la chiamata API RPC get_bulk_payments con l'ultima altezza controllata e la lista di tutti gli ID pagamento nel sistema
* Tieni traccia dell'altezza corrente e salvala come ultima altezza alla quale è stata effettuata una scansione
* Rimuovi i duplicati basati sugli hash delle transazioni che hai già ricevuto e processato
         
</div>
                    </div>
                </div>
    
                
                <!-- end right one-third block-->
            </div>
        </section>
                