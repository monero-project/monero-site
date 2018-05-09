## Wprowadzenie

Poniżej znajduje się lista funkcji monero-wallet-rpc, ich wejścia i wyniki oraz przykłady. Oprogramowanie monero-wallet-rpc zamieniło interfejs rpc, które znajdowało się w simplewallet, a później w monero-wallet-cli.

Wszystkie metody monero-wallet-rpc korzystają z tego samego interfejsu JSON RPC. Przykład:

```
IP=127.0.0.1
PORT=18082
METHOD="make_integrated_address"
PARAMS="{\"payment_id\":\"1234567890123456789012345678900012345678901234567890123456789000\"}"
curl \
    -X POST http://$IP:$PORT/json_rpc \
    -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
    -H 'Content-Type: application/json'
```

Jeśli funkcja monero-wallet-rpc została zastosowana z argumentem `--rpc-login` jako `username:password`, postępuj zgodnie z przykładem poniżej:

```
IP=127.0.0.1
PORT=18082
METHOD="make_integrated_address"
PARAMS="{\"payment_id\":\"1234567890123456789012345678900012345678901234567890123456789000\"}"
curl \
    -u username:password --digest \
    -X POST http://$IP:$PORT/json_rpc \
    -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
    -H 'Content-Type: application/json'
```

Zauważ, że jednostki atomowe (@atomic-unit) są najmniejszą częścią 1 XMR, zgodnie z implementacją monerod. **1 XMR = 1e12 jednostek atomowych.**

### Lista metod JSON RPC:

* [getbalance](#getbalance)
* [getaddress](#getaddress)
* [getheight](#getheight)
* [transfer](#transfer)
* [transfer_split](#transfer_split)
* [sweep_dust](#sweep_dust)
* [sweep_all](#sweep_all)
* [store](#store)
* [get_payments](#get_payments)
* [get_bulk_payments](#get_bulk_payments)
* [get_transfers](#get_transfers)
* [get_transfer_by_txid](#get_transfer_by_txid)
* [incoming_transfers](#incoming_transfers)
* [query_key](#query_key)
* [make_integrated_address](#make_integrated_address)
* [split_integrated_address](#split_integrated_address)
* [stop_wallet](#stop_wallet)
* [make_uri](#make_uri)
* [parse_uri](#parse_uri)
* [rescan_blockchain](#rescan_blockchain)
* [set_tx_notes](#set_tx_notes)
* [get_tx_notes](#get_tx_notes)
* [sign](#sign)
* [verify](#verify)
* [export_key_images](#export_key_images)
* [import_key_images](#import_key_images)
* [get_address_book](#get_address_book)
* [add_address_book](#add_address_book)
* [delete_address_book](#delete_address_book)
* [rescan_spent](#rescan_spent)
* [start_mining](#start_mining)
* [stop_mining](#stop_mining)
* [get_languages](#get_languages)
* [create_wallet](#create_wallet)
* [open_wallet](#open_wallet)

---

## Metody JSON RPC:

### **getbalance**

Wyszukuje saldo portfela.

Wejście: *brak*.

Wynik:

* *balance* - niepodpisana liczba całkowita; całkowite saldo aktualnego monero-wallet-rpc w sesji.
* *unlocked_balance* - niepodpisana liczba całkowita; odblokowane środki to środki znajdujące się wystarczająco głęboko w łańcuchu bloków, aby mogły być bezpiecznie wydane.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getbalance"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "balance": 140000000000,
    "unlocked_balance": 50000000000
  }
}
```


### **getaddress**

Wyszukuje adres portfela.

Wejście: *brak*.

Wynik:

* *address* - ciąg; 95-znakowy heksadecymalny ciąg zawierający adres monero-wallet-rpc w sesji.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getaddress"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "address": "427ZuEhNJQRXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQGaDsaBA"
  }
}
```


### **getheight**

Wyszukuje aktualną wysokość bloku portfela.

Wejście: *brak*.

Wynik:

* *height* - niepodpisana liczba całkowita; aktualna wysokość łańcucha bloków dla monero-wallet-rpc. Jeśli portfel był off-ine przez dłuższy czas, możliwe, że będzie on potrzebował zaktualizować demona.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getheight"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "height": 994310
  }
}
```


### **transfer**

Wysyła Monero do wielu odbiorców.

Wejście:

* *destinations* - szereg odbiorców XMR:
  * *amount* - niepodpisana liczba całkowita; kwota do wysłania każdemu z odbiorców w jednostkach atomowych.
  * *address* - ciąg; adres publiczny odbiorcy.
* *fee* - niepodpisana liczba całkowita; kwota opłaty, gdy zignorowana, zostanie obliczona automatycznie.
* *mixin* - niepodpisana liczba całkowita; liczba wyjść łańcucha do zmiksowaniah (0 oznacza brak miksowania).
* *unlock_time* - niepodpisana liczba całkowita; liczba bloków, które muszą minąć zanim Monero może zostać wydane (0 oznacza brak       blokady).
* *payment_id* - ciąg; (opcjonalny) losowy ciąg 32-bajtowy/64-znakowy heksadecymalny służący do identyfikacji transakcji.
* *get_tx_key* - logiczny typ danych; (opcjonalny) wyszukuje klucz transakcji po jej wysłaniu.
* *priority* - niepodpisana liczba całkowita; ustala pierwszeństwo transakcji. Akceptowanymi wartościami są 0-3 i oznaczają odpowiednio: domyślna, nieważna, normalna, ważniejsza, pierwszeństwo.
* *do_not_relay* - logiczny typ danych; (ocpjonalny) Jeśli "true" - nowo utworzona transakcja nie zostanie przekazana sieci Monero (domyślnie ustawiono jako "false").
* *get_tx_hex* - logiczny typ danych; wyszukuje transakcje jako ciąg heksadecymalny po jej wysłaniu.


Wynik:

* *fee* - całkowita wartość opłaty poniesionej za dokonaną transakcję.
* *tx_hash* - ciąg publicznie możliwego do wyszukania hasza transakcji.
* *tx_key* - ciąg klucza transakcji, jeśli "get_tx_key" jest "true"; w innym przypadku - pusty ciąg.
* *tx_blob* - transakcja jako ciąg heksadecymalny, jeśli "get_tx_hex" jest "true".


Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer","params":{"destinations":[{"amount":100000000,"address":"9wNgSYy2F9qPZu7KBjvsFgZLTKE2TZgEpNFbGka9gA5zPmAXS35QzzYaLKJRkYTnzgArGNX7TvSqZC87tBLwtaC5RQgJ8rm"},{"amount":200000000,"address":"9vH5D7Fv47mbpCpdcthcjU34rqiiAYRCh1tYywmhqnEk9iwCE9yppgNCXAyVHG5qJt2kExa42TuhzQfJbmbpeGLkVbg8xit"}],"mixin":4,"get_tx_key": true}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "fee": 48958481211,
    "tx_hash": "985180f468637bc6d2f72ee054e1e34b8d5097988bb29a2e0cb763e4464db23c",
    "tx_key": "8d62e5637f1fcc9a8904057d6bed6c697618507b193e956f77c31ce662b2ee07"
  }
}
```


### **transfer_split**

Funkcja podobna do "transfer", ale potrafi podzielić płatności na więcej niż jedną transakcję, jeśli to konieczne.

Wejście:

* *destinations* - szereg odbiorców XMR:
  * *amount* - niepodpisana liczba całkowita; kwota do wysłania każdemu z odbiorców w jednostkach atomowych.
  * *address* - ciąg; adres publiczny odbiorcy.
* *fee* - niepodpisana liczba całkowita; kwota opłaty, gdy zignorowana, zostanie obliczona automatycznie.
* *mixin* - niepodpisana liczba całkowita; liczba wyjść łańcucha do zmiksowaniah (0 oznacza brak miksowania).
* *unlock_time* - niepodpisana liczba całkowita; liczba bloków, które muszą minąć zanim Monero może zostać wydane (0 oznacza brak       blokady).
* *payment_id* - ciąg; (opcjonalny) losowy ciąg 32-bajtowy/64-znakowy heksadecymalny służący do identyfikacji transakcji.
* *get_tx_keys* - logiczny typ danych; (opcjonalny) wyszukuje klucz transakcji po jej wysłaniu - do zignorowania.
* *priority* - niepodpisana liczba całkowita; ustala pierwszeństwo transakcji. Akceptowanymi wartościami są 0-3 i oznaczają odpowiednio: domyślna, nieważna, normalna, ważniejsza, pierwszeństwo.
* *do_not_relay* - logiczny typ danych; (ocpjonalny) Jeśli "true" - nowo utworzona transakcja nie zostanie przekazana sieci Monero (domyślnie ustawiono jako "false").
* *get_tx_hex* - logiczny typ danych; wyszukuje transakcje jako ciąg heksadecymalny po jej wysłaniu.
* *new_algorithm* - logiczny typ danych; jeśli "true" - używa algorytmu konstrukcji nowej transakcji, domyślnie ustalony jako "false".

Wynik:

* *fee_list* - szereg: liczba całkowita. Kwota opłat za każdą transakcję.
* *tx_hash_list* - szereg: ciąg. Hasze wszystkich transakcji.
* *tx_blob_list* - szereg: ciąg. Transakcja jako ciąg heksadecymalny.
* *amount_list* - szereg: liczba całkowita. Kwota przesłana w każdej transakcji.
* *tx_key_list* - szereg: ciąg. Klucze wszystkich transakcji.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":100000000,"address":"9wNgSYy2F9qPZu7KBjvsFgZLTKE2TZgEpNFbGka9gA5zPmAXS35QzzYaLKJRkYTnzgArGNX7TvSqZC87tBwtaC5RQgJ8rm"},{"amount":200000000,"address":"9vH5D7Fv47mbpCpdcthcjU34rqiiAYRCh1tYywmhqnEk9iwCE9yppgNCXAyVHG5qJt2kExa42TuhzQfJbmbpeGLkVbg8xit"},{"amount":200000000,"address":"9vC5Q25cR1d3WzKX6dpTaLJaqZyDrtTnfadTmVuB1Wue2tyFGxUhiE4RGa74pEDJv7gSySzcd1Ao6G1nzSaqp78vLfP6MPj"},{"amount":200000000,"address":"A2MSrn49ziBPJBh8ZNEhhbfyLMou6mao4C1F5TLGUatmUnCxZArDYkcbAnVkVEopWVeak2rKDrmc8JpoS7n5dvfN9YDPBTG"},{"amount":200000000,"address":"9tEDyVQ8zgRQbDYiykTdpw5kZ6qWQWcKfExEj9eQshjpGb3sdr3UyWE2AHWzUGzJjaH9HN1DdGBdyQQ4AqGMc7rr5xYwZWW"}],"mixin":4,"get_tx_key": true, "new_algorithm": true}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "fee_list": [97916962422],
    "tx_hash_list": ["c5c389846e701c27aaf1f7ab8b9dc457b471fcea5bc9710e8020d51275afbc54"]
  }
}
```


### **sweep_dust**

Przesyła wszystkie drobne wyniki z powrotem do portfela, aby ułatwić ich wydawanie oraz miksowanie.

Wejście: *brak*.

Wynik:

* *tx_hash_list* - lista: ciąg

Przykład (w tym przypadku funkcja `sweep_dust` pokazuje błąd ze względu na niewystarczające środki):


```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_dust"}' -H 'Content-Type: application/json'

{
  "error": {
    "code": -4,
    "message": "not enough money"
  },
  "id": "0",
  "jsonrpc": "2.0"
}
```

### **sweep_all**

Przesyła wszystkie odblokowane środki na dany adres.

Wejście:

* *address* - ciąg; adres publiczny odbiorcy.
* *priority* - niepodpisana liczba całkowita; (opcjonalne)
* *mixin* - niepodpisana liczba całkowita; liczba wyjść z łańcucha bloków do zmiksowania (0 oznacza brak miksowania).
* *unlock_time* - niepodpisana liczba całkowita; liczba bloków, które muszą upłynąć, zanim Monero może zostać wydane (0 oznacza brak        blokady).
* *payment_id* - ciąg; (opcjonalne) Losowy 32-bajtowy/64-znakowy ciąg heksadecymalny służący do identyfikacji transakcji.
* *get_tx_keys* - logiczny typ danych; (opcjonalne) wyszukuje klucze transakcji po jej dokonaniu.
* *below_amount* - niepodpisana liczba całkowita; (opcjonalne)
* *do_not_relay* - logiczny typ danych; (opcjonalne)
* *get_tx_hex* - logiczny typ danych; (opcjonalne) pokazuje transakcje jako zakodowany heksadecymalnie ciąg.

Wynik:

* *tx_hash_list* - szereg ciągów;
* *tx_key_list* - szereg ciągów;
* *tx_blob_list* - szereg ciągów;

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"9sS8eRU2b5ZbN2FPSrpkiab1bjbHE5XtL6Ti6We3Fhw5aQPudRfVVypjgzKDNkxtvTQSPs122NKggb2mqcqkKSeMNVu59S","mixin":2,"unlock_time":0,"get_tx_keys":true}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash_list": ["53a3648797d5524dd037d4105e067fa61468faecab41927fc43adbb26c202d22"],
    "tx_key_list": ["e83b3b78235e36cd7e4d9695efd81a3b3e64c7d1f1ebd61892f0a7add6a50301"]
  }
}
```

### **store**

Zapisuje łańcuch bloków

Wejście: *brak*.

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"store"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **get_payments**

Pobiera listę płatności przychodzących za pomocą numeru identyfikacyjnego płatności.

Wejście:

* *payment_id* - ciąg

Wynik:

* *payments* - lista:
  * *payment_id* - ciąg
  * *tx_hash* - ciąg
  * *amount* - niepodpisana liczba całkowita
  * *block_height* - niepodpisana liczba całkowita
  * *unlock_time* - niepodpisana liczba całkowita

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 10350000000000,
      "block_height": 994327,
      "payment_id": "4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030",
      "tx_hash": "c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1",
      "unlock_time": 0
    }]
  }
}
```


### **get_bulk_payments**

Wyszukuje listę płatności przychodzących za pomocą numeru identyfikacyjnego płatności lub listy numerów identyfikacyjnych na danej wysokości. Metoda ta jest zalecana, w odróżnieniu od funkcji `get_payments`, ponieważ posiada tę samą funkcjonalność, ale jest bardziej rozszerzalna. Obie funkcje służą do wyszukiwania transakcji za pomocą pojedynczego numeru identyfikacyjnego.

Wejście:

* *payment_ids* - szereg ciągu
 * *min_block_height* - niepodpisana liczba całkowita; wysokość bloku, od której rozpoczęto wyszukiwanie płatności.

Wynik:

* *payments* - lista:
  * *payment_id* - ciągu
  * *tx_hash* - ciągu
  * *amount* - niepodpisanej liczby całkowitej
  * *block_height* - niepodpisanej liczby całkowitej
  * *unlock_time* - niepodpisanej liczby całkowitej

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_bulk_payments","params":{"payment_ids":["4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030"],"min_block_height":990000}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 10350000000000,
      "block_height": 994327,
      "payment_id": "4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030",
      "tx_hash": "c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1",
      "unlock_time": 0
    }]
  }
}
```


### **get_transfers**

Wyszukuje listę transferów.

Wejście:

* *in* - logiczny typ danych;
* *out* - logiczny typ danych;
* *pending* - logiczny typ danych;
* *failed* - logiczny typ danych;
* *pool* - logiczny typ danych;
* *filter_by_height* - logiczny typ danych;
* *min_height* - niepodpisana liczba całkowita;
* *max_height* - niepodpisana liczba całkowita;

Wynik:

* *in* szereg transferów:
  * *txid* - ciąg;
  * *payment_id* - ciąg;
  * *height* - niepodpisana liczba całkowita;
  * *timestamp* - niepodpisana liczba całkowita;
  * *amount* - niepodpisana liczba całkowita;
  * *fee* - niepodpisana liczba całkowita;
  * *note* - ciąg;
  * *destinations* - std::list<transfer_destination>;
  * *type* - ciąg;
* *out* szereg transferów
* *pending* szereg transferów
* *failed* szereg transferów
* *pool* szereg transferów


Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_transfers","params":{"pool":true}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "pool": [{
      "amount": 500000000000,
      "fee": 0,
      "height": 0,
      "note": "",
      "payment_id": "758d9b225fda7b7f",
      "timestamp": 1488312467,
      "txid": "da7301d5423efa09fabacb720002e978d114ff2db6a1546f8b820644a1b96208",
      "type": "pool"
    }]
  }
}
```

### **get_transfer_by_txid**

Wyszukuje informacje na temat transferów z/na dany adres.

Wejście:

* *txid* - ciąg

Wynik:

* *transfer* - obiekt JSON zawierający informacje o płatności:
  * *amount* - niepodpisana liczba całkowita
  * *fee* - niepodpisana liczba całkowita
  * *height* - niepodpisana liczba całkowita
  * *note* - ciąg
  * *payment_id* - ciąg
  * *timestamp* - niepodpisana liczba całkowita
  * *txid* - ciąg
  * *type* - ciąg

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_transfer_by_txid","params":{"txid":"f2d33ba969a09941c6671e6dfe7e9456e5f686eca72c1a94a3e63ac6d7f27baf"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "transfer": {
      "amount": 10000000000000,
      "fee": 0,
      "height": 1316388,
      "note": "",
      "payment_id": "0000000000000000",
      "timestamp": 1495539310,
      "txid": "f2d33ba969a09941c6671e6dfe7e9456e5f686eca72c1a94a3e63ac6d7f27baf",
      "type": "in"
    }
  }
}
```


### **incoming_transfers**

Wyszukuje listę transferów przychodzących do portfela.

Wejście:

* *transfer_type* - ciąg; "all": wszystkie transfery, "available": jedynie transfery jeszcze nie wydane LUB "unavailable": jedynie transfery już wydane.

Wynik:

* *transfers* - lista:
  * *amount* - niepodpisana liczba całkowita
  * *spent* - logiczny typ danych
  * *global_index* - niepodpisana liczba całkowita; zazwyczaj do użytku wewnętrznego, może zostać zignorowana przez większość użytkowników.
  * *tx_hash* - ciąg; wiele transferów przychodzących może posiadać ten sam hasz, jeśli zawarte były w tej samej transakcji.
  * *tx_size* - niepodpisana liczba całkowita

Przykład (wszystkie rodzaje transakcji):

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"all"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "transfers": [{
      "amount": 10000000000000,
      "global_index": 711506,
      "spent": false,
      "tx_hash": "&lt;c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1&gt;",
      "tx_size": 5870
    },{
      "amount": 300000000000,
      "global_index": 794232,
      "spent": false,
      "tx_hash": "&lt;c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1&gt;",
      "tx_size": 5870
    },{
      "amount": 50000000000,
      "global_index": 213659,
      "spent": false,
      "tx_hash": "&lt;c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1&gt;",
      "tx_size": 5870
    }]
  }
}
```

Przykład (wszystkie transakcje "available"):

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"available"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "transfers": [{
      "amount": 10000000000000,
      "global_index": 711506,
      "spent": false,
      "tx_hash": "&lt;c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1&gt;",
      "tx_size": 5870
    },{
      "amount": 300000000000,
      "global_index": 794232,
      "spent": false,
      "tx_hash": "&lt;c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1&gt;",
      "tx_size": 5870
    },{
      "amount": 50000000000,
      "global_index": 213659,
      "spent": false,
      "tx_hash": "&lt;c391089f5b1b02067acc15294e3629a463412af1f1ed0f354113dd4467e4f6c1&gt;",
      "tx_size": 5870
    }]
  }
}
```

Przykład (wszystkie transakcje "unavailable". Zauważ, że w tym przypadku znaleziono 0 transakcji "unavailable"):

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"unavailable"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **query_key**

Wyszukuje prywatny klucz wydawania lub widoczności.

Wejście:

* *key_type* - ciąg; decyduje o rodzaju klucza do wyszukania: "mnemonic" - kod mnemoniczny (starsze portfele nie posiadają go) LUB "view_key" - klucz widoczności.

Wynik:

* *key* - ciąg; klucz widoczności będzie zakodowany heksadecymalnie, a kod mnemoniczny będzie ciągiem słów.

Przykład (dla klucza widoczności):

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "key": "7e341d..."
  }
}
```

Przykład (dla kodu mnemonicznego):

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "key": "adapt adapt nostril ..."
  }
}
```


### **make_integrated_address**

Tworzy adres zintegrowany złożony z adresu portfela i numeru identyfikacyjnego płatności.

Wejście:

* *payment_id* - ciąg; zakodowany heksadecymalnie; może być pusty, co spowoduje wygenerowanie losowego numeru identyfikacyjnego płatności.

Wynik:

* *integrated_address* - ciąg

Przykład (numer identyfikacyjny płatności jest pusty, użycie losowego numeru):

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"payment_id":""}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "integrated_address": "4BpEv3WrufwXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQQ8H2RRJveAtUeiFs6J"
  }
}
```


### **split_integrated_address**

Wyszukuje adres standardowy i numer identyfikacyjny płatności składające się na adres zintegrowany.

Wejście:

* *integrated_address* - ciąg

Wynik:

* *standard_address* - ciąg
* *payment* - ciąg; zakodowany heksadecymalnie

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address": "4BpEv3WrufwXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQQ8H2RRJveAtUeiFs6J"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "payment_id": "&lt;420fa29b2d9a49f5&gt;",
    "standard_address": "427ZuEhNJQRXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQGaDsaBA"
  }
}
```


### **stop_wallet**

Zatrzymuje pracę portfela, zapisując jego aktualny stan.

Wejście: *brak*.

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"stop_wallet"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **make_uri**

Tworzy URI płatności przy użyciu oficjalnych specyfikacji URI.

Wejście:

* *address* - ciąg; adres portfela
* *amount* (opcjonalne) - niepodpisana liczba całkowita; kwota do otrzymania w jednostkach **atomowych**
* *payment_id* (opcjonalne) - ciąg; numer identyfikacyjny płatności jako 16- lub 64-znakowy ciąg heksadecymalny
* *recipient_name* (opcjonalne) - ciąg; nazwa odbiorcy płatności
* *tx_description* (opcjonalne) - ciąg; tytuł transakcji

Wynik:

* *uri* - ciąg zawierający wszystkie informacje na temat wejścia płatności jako odpowiednio sformatowany URI

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_uri","params":{"address":"44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A","amount":10,"payment_id":"0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef","tx_description":"Testing out the make_uri function.","recipient_name":"Monero Project donation address"}}'  -H 'Content-Type: application/json'

{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "uri": "monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?tx_payment_id=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef&tx_amount=0.000000000010&recipient_name=Monero%20Project%20donation%20address&tx_description=Testing%20out%20the%20make_uri%20function."
  }
}
```


### **parse_uri**

Analizuje URI płatności w celu uzyskania informacji na jej temat.

Wejście:

* *uri* - ciąg zawierający wszystkie informacje na temat wejścia płatności jako odpowiednio sformatowany URI

Wynik:

* *uri* - obiekt JSON zawierający informacje na temat płatności:
  * *address* - ciąg; adres portfela
  * *amount* - kwota do otrzymania w jednostkach **monetarnych** (0 jeśli brak informacji)
  * *payment_id* - numer identyfikacyjny płatności jako 16- lub 64-znakowy ciąg heksadecymalny (zostawić puste, jeśli brak informacji)
  * *recipient_name* - ciąg; nazwa odbiorcy płatności (zostawić puste, jeśli brak informacji)
  * *tx_description* - ciąg; tytuł płatności (zostawić puste, jeśli brak informacji)

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"parse_uri","params":{"uri":"monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?tx_payment_id=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef&tx_amount=0.000000000010&recipient_name=Monero%20Project%20donation%20address&tx_description=Testing%20out%20the%20make_uri%20function."}}' -H 'Content-Type: application/json'

{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "uri": {
      "address": "44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A",
      "amount": 10,
      "payment_id": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
      "recipient_name": "Monero Project donation address",
      "tx_description": "Testing out the make_uri function."
    }
  }
}
```


### **rescan_blockchain**

Skanuje łańcuch bloków od początku.

Wejście: *brak*.

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain" -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **set_tx_notes**

Ustanawia dowolny ciąg adnotacji transakcji.

Wejście:

* *txids* - szereg ciągów; numery identyfikacyjne transakcji
* *notes* - szereg ciągów; adnotacje do transakcji

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_tx_notes","params":{"txids":["6a1a100c079c236e2cbf36f7760e8ef1a9e8357c434aa790a8c78de653ec4cf2"],"notes":["This is an example"]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **get_tx_notes**

Wyszukuje ciągi adnotacji transakcji.

Wejście:

* *txids* - szereg ciągów; numery identyfikacyjne transakcji

Wynik:

* *notes* - szereg ciągów; adnotacje do transakcji

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_tx_notes","params":{"txids":["6a1a100c079c236e2cbf36f7760e8ef1a9e8357c434aa790a8c78de653ec4cf2"]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "notes": ["This is an example"]
  }
}
```


### **sign**

Podpisuje dany ciąg.

Wejście:

* *data* - ciąg;

Wynik:

* *signature* - ciąg;

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"This is sample data to be signed"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signature": "SigV1Xp61ZkGguxSCHpkYEVw9eaWfRfSoAf36PCsSCApx4DUrKWHEqM9CdNwjeuhJii6LHDVDFxvTPijFsj3L8NDQp1TV"
  }
}
```


### **verify**

Weryfikuje podpis ciągu.

Wejście:

* *data* - ciąg;
* *address* - ciąg;
* *signature* - ciąg;

Wynik:

* *good* - logiczny typ danych;

Przykład:

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"This is sample data to be signed","address":"9sS8eRU2b5ZbN2FPSrpkiab1bjbHE5XtL6Ti6We3Fhw5aQPudRfVVypjgzKDNkxtvTQZSPs122NKggb2mqcqkKSeMNVu59S","signature":"SigV1Xp61ZkGguxSCHpkYEVw9eaWfRfSoAf36PCsSCApx4DUrKWHEqM9CdNwjeuhJii6LHDVDFxvTPijFsj3L8NDQp1TV"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": true
  }
}
```


### **export_key_images**

Eksportuje podpisany zestaw obrazów klucza.

Wejście: *brak*.

Wynik:

* *signed_key_images* - szereg podpisanych obrazów klucza:
  * *key_image* - ciąg;
  * *signature* - ciąg;

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"export_key_images"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signed_key_images": [{
      "key_image": "62b83df78baad99e23b5ad3f667bc6f8d388a13d9e84c7bb6c223a556dfd34af",
      "signature": "b87b7e989aa85aa3a2a7cd8adcb3a848d3512ff718b168e15217ff3e5da29c0183c0328b97cc052fcb5ee3548aa5e41e530ba9d854199ea19d7ddaf6a54a4c0a"
    }]
  }
}
```


### **import_key_images**

Importuje listy podpisanych obrazów klucza i weryfikuje, czy zostały wydane.

Wejście:

* *signed_key_images* - szereg podpisanych obrazów klucza:
  * *key_image* - ciąg;
  * *signature* - ciąg;

Wynik:

* *height* - niepodpisana liczba całkowita;
* *spent* - niepodpisana liczba całkowita;
* *unspent* - niepodpisana liczba całkowita;

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"import_key_images", "params":{"signed_key_images":[{"key_image":"63b83df78cafd99e23b5ad3f667bc6f8d38813d9e84c7bb6c223a556dfd34af","signature":"b87b7e989aa86aa2a7a7cd8adcb3a848d3512ff718b168e15217ff3e5da29c0183c0328b97cc052fcb5ee3548aa5e41e530ba9d854199ea19d7ddaf6a54a4c0a"},{"key_image":"44ec12fbc56c533a30b09de8ae26febd515528c4957dfe875430377a7e212b4e","signature":"91105f15be0b25bc2a94bd78a7e261608974d6d888080b9f1815655b98af190340325ea1a0840a5951dacf913d4de1b2bd33ea59c1cb7bce1b6648afa7133d03"}]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "height": 986050,
    "spent": 10000100000000,
    "unspent": 4979852760000
  }
}
```


### **get_address_book**

Wyszukuje wpisy do książki adresowej.

Wejście:

* *entries* - szereg niepodpisanych liczb całkowitych; znaczniki żądanych wpisów do książki adresowej

Wynik:

* *entries* - szereg wpisów:
  * *address* - ciąg;
  * *description* - ciąg;
  * *index* - niepodpisana liczba całkowita;
  * *payment_id* - ciąg;

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_address_book","params":{"entries":[1,2]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "entries": [{
      "address": "A135xq3GVMdU5qtAm4hN7zjPgz8bRaiSUQmtuDdjZ6CgXayvQruJy3WPe95qj873JhK4YdTQjoR39Leg6esznQk8PckhjRN",
      "description": "",
      "index": 1,
      "payment_id": "0000000000000000000000000000000000000000000000000000000000000000"
    },{
      "address": "A135xq3GVMdU5qtAm4hN7zjPgz8bRaiSUQmtuDdjZ6CgXayvQruJy3WPe95qj873JhK4YdTQjoR39Leg6esznQk8PckhjRN",
      "description": "",
      "index": 2,
      "payment_id": "0000000000000000000000000000000000000000000000000000000000000000"
    }]
  }
}
```


### **add_address_book**

Dodaje wpis do książki adresowej.

Wejście:

* *address* - ciąg;
* *payment_id* - (opcjonalne) ciąg, domyślnie jako "0000000000000000000000000000000000000000000000000000000000000000";
* *description* - (opcjonalne) ciąg, domyślnie jako "";

Wynik:

* *index* - niepodpisana liczba całkowita; znacznik wpisu do książki adresowej.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"add_address_book","params":{"address":"44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A","description":"Donation address for the Monero project"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "index": 2
  }
}
```


### **delete_address_book**

Usuwa wpis do książki adresowej.

Wejście:

* *index* - niepodpisana liczba całkowita; znacznik wpisu do książki adresowej.

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"delete_address_book","params":{"index":0}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **rescan_spent**

Skanuje łańcuch bloków w poszukiwaniu wydanych wyjść.

Wejście: *brak*.

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"rescan_spent"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **start_mining**

Rozpoczyna wydobywanie w demonie Monero.

Wejście:

* *threads_count* - niepodpisana liczba całkowita; liczba pasm stworzonych do wydobycia
* *do_background_mining* - logiczny typ danych;
* *ignore_battery* - logiczny typ danych;

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"start_mining","params":{"threads_count":1,"do_background_mining":true,"ignore_battery":true}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **stop_mining**

Przerywa wydobywanie w demonie Monero.

Wejście: *brak*.

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"stop_mining"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **get_languages**

Wyszukuje listę dostępnych wersji językowych portfela.

Wejście: *brak*.

Wynik:

* *languages* - szereg ciągów; lista dostępnych języków

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_languages"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "languages": ["Deutsch","English","Español","Français","Italiano","Nederlands","Português","русский язык","日本語","简体中文 (中国)","Esperanto"]
  }
}
```


### **create_wallet**

Tworzy nowy portfel.Create a new wallet. Argument "--wallet-dir" musi zostać ustawiony przy uruchamianiu monero-wallet-rpc, aby funkcja zadziałała.

Wejście:

* *filename* - ciąg;
* *password* - ciąg;
* *language* - ciąg; język twojego portfela

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"mytestwallet","password":"mytestpassword","language":"English"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **open_wallet**

Otwiera portfel. Argument "--wallet-dir" musi zostać ustawiony przy uruchamianiu monero-wallet-rpc, aby funkcja zadziałała.

Wejście:

* *filename* - ciąg;
* *password* - ciąg;

Wynik: *brak*.

Przykład:

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"open_wallet","params":{"filename":"mytestwallet","password":"mytestpassword"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```
