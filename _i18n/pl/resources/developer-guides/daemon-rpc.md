## Wprowadzenie

Poniżej znajduje się lista funkcji RPC demona monerod, ich wejścia i wyników oraz przykłady.

Wiele funkcji RPC korzysta z interfejsu demona JSON RPC, podczas gdy inne używają własnego interfejsu, jak przedstawiono poniżej.

Uwaga: "jednostki atomowe (@atomic-unit)" dotyczą najmniejszego ułamka 1 XMR, zgodnie z implementacją monerod. **1 XMR = 1e12 jednostek atomowych.**

### [Metody JSON RPC](#json-rpc-methods):

* [getblockcount](#getblockcount)
* [on_getblockhash](#on_getblockhash)
* [getblocktemplate](#getblocktemplate)
* [submitblock](#submitblock)
* [getlastblockheader](#getlastblockheader)
* [getblockheaderbyhash](#getblockheaderbyhash)
* [getblockheaderbyheight](#getblockheaderbyheight)
* [getblock](#getblock)
* [get_connections](#get_connections)
* [get_info](#get_info)
* [hard_fork_info](#hard_fork_info)
* [setbans](#setbans)
* [getbans](#getbans)

### [Pozostałe metody RPC](#other-daemon-rpc-calls):

* [/getheight](#getheight)
* [/gettransactions](#gettransactions)
* [/is_key_image_spent](#is_key_image_spent)
* [/sendrawtransaction](#sendrawtransaction)
* [/get_transaction_pool](#get_transaction_pool)
* [/stop_daemon](#stop_daemon)


---

## Metody JSON RPC

Większość funkcji RPC monerod korzysta z interfejsu demona `json_rpc`, aby żądać różnych informacji. Wszystkie te metody mają podobną strukturę, na przykład:

```
IP=127.0.0.1
PORT=18081
METHOD='getblockheaderbyheight'
PARAMS='{"height":912345}'
curl \
    -X POST http://$IP:$PORT/json_rpc \
    -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'$PARAMS'}' \
    -H 'Content-Type: application/json'
```

Niektóre metody zawierają parametry, a inne nie. Poniżej znajdują się przykłady każdej z funkcji JSON RPC.

### **getblockcount**

Sprawdza ile bloków znajduje się w najdłuższym łańcuchu znanym węzłowi.

Wejście: *brak*.

Wynik:

* *count* - niepodpisana liczba całkowita; liczba bloków w najdłuższym łańcuchu znanym węzłowi.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblockcount"}' -H 'Content-Type: application/json'  

{  
  "id": "0",  
  "jsonrpc": "2.0",  
  "result": {  
    "count": 993163,  
    "status": "OK"  
  }  
}  
```


### **on_getblockhash**

Wyszukuje hasz bloku za pomocą jego wysokości.

Wejście:

* wysokość bloku (liczba całkowita szeregu o długości 1)

Wynik:

* hasz bloku (ciąg)

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"on_getblockhash","params":[912345]}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"
}
```


### **getblocktemplate**

Wejście:

* *wallet_address* - ciąg; Adres portfela, który otrzyma transakcję coinbase, jeśli blok zostanie pomyślnie wydobyty.
* *reserve_size* - niepodpisana liczba całkwita; Wielkość rezerwy.

Wynik:

* *blocktemplate_blob* - ciąg; Blob, na którym próbuje się wydobyć nowy blok.
* *difficulty* - niepodpisana liczba całkowita; Trudność następnego bloku.
* *height* - niepodpisana liczba całkowita; Wysokość, na której się wydobywa.
* *prev_hash* - ciąg; Hasz ostatniego bloku, po którym wydobywa się następny blok.
* *reserved_offset* - niepodpisana liczba całkowita; Zarezerwowany offset.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblocktemplate","params":{"wallet_address":"44GBHzv6ZyQdJkjqZje6KLZ3xSyN1hBSFAnLP6EAqJtCRVzMzZmeXTC2AHKDS9aEDTRKmo6a6o9r9j86pYfhCWDkKjbtcns","reserve_size":60}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blocktemplate_blob": "01029af88cb70568b84a11dc9406ace9e635918ca03b008f7728b9726b327c1b482a98d81ed83000000000018bd03c01ffcfcf3c0493d7cec7020278dfc296544f139394e5e045fcda1ba2cca5b69b39c9ddc90b7e0de859fdebdc80e8eda1ba01029c5d518ce3cc4de26364059eadc8220a3f52edabdaf025a9bff4eec8b6b50e3d8080dd9da417021e642d07a8c33fbe497054cfea9c760ab4068d31532ff0fbb543a7856a9b78ee80c0f9decfae01023ef3a7182cb0c260732e7828606052a0645d3686d7a03ce3da091dbb2b75e5955f01ad2af83bce0d823bf3dbbed01ab219250eb36098c62cbb6aa2976936848bae53023c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001f12d7c87346d6b84e17680082d9b4a1d84e36dd01bd2c7f3b3893478a8d88fb3",
    "difficulty": 982540729,
    "height": 993231,
    "prev_hash": "68b84a11dc9406ace9e635918ca03b008f7728b9726b327c1b482a98d81ed830",
    "reserved_offset": 246,
    "status": "OK"
  }
}
```


### **submitblock**

Zatwierdza wydobyty blok do sieci.

Wejście:

* Dane blobu bloku - ciąg

Wynik:

* *status* - ciąg; Status zatwierdzenia bloku.


### **getlastblockheader**

Dzięki tej metodzie łatwo jest znaleźć informacje o nagłówku ostatniego bloku. Nie wymaga żadnych wejść.

Wejście: *brak*.

Wynik:

* *block_header* - struktura zawierająca informacje o nagłówku bloku.
  * *depth* -  niepodpisana liczba całkowita; liczba bloków następujących po danym bloku w łańcuchu, większa liczba oznacza starszy blok.
  * *difficulty* - niepodpisana liczba całkowita; siła sieci Monero na podstawie mocy wydobycia.
  * *hash* - ciąg; hasz danego bloku.
  * *height* - niepodpisana liczba całkowita; liczba bloków poprzedzających dany blok w łańcuchu.
  * *major_version* - niepodpisana liczba całkowita; główna wersja protokołu Monero na danej wysokości bloku.
  * *minor_version* - niepodpisana liczba całkowita; podrzędna wersja protokołu Monero na danej wysokości bloku.
  * *nonce* - niepodpisana liczba całkowita; losowy i jednorazowy numer kryptograficzny użyty do wydobycia bloku Monero.
  * *orphan_status* - logiczny typ danych; zazwyczaj `false`. Jeśli `true`, dany blok nie jest częścią najdłuższego łańcucha.
  * *prev_hash* - ciąg; hasz bloku bezpośrednio poprzedzającego dany blok w łańcuchu.
  * *reward* - niepodpisana liczba całkowita; liczba nowych jednostek atomowych wytworzonych w danym bloku i przyznanych górnikowi. 	Zauważ: 1 XMR = 1e12 jednostek atomowych.
  * *timestamp* - niepodpisana liczba całkowita; czas, kiedy blok został zapisany w łańcuchu.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

W tym przypadku wynikiem jest ostatni blok (wtedy był to blok 990793):

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getlastblockheader"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 0,
      "difficulty": 746963928,
      "hash": "ac0f1e226268d45c99a16202fdcb730d8f7b36ea5e5b4a565b1ba1a8fc252eb0",
      "height": 990793,
      "major_version": 1,
      "minor_version": 1,
      "nonce": 1550,
      "orphan_status": false,
      "prev_hash": "386575e3b0b004ed8d458dbd31bff0fe37b280339937f971e06df33f8589b75c",
      "reward": 6856609225169,
      "timestamp": 1457589942
    },
    "status": "OK"
  }
}
```


### **getblockheaderbyhash**

Informacja o nagłówku bloku może zostać znaleziona przy użyciu haszu bloku lub jego wysokości. Ta metoda polega na wykorzystaniu bloku haszu jako parametru wejścia w celu uzyskania podstawowych informacji na temat bloku.

Wejście:

* *hash* - ciąg; hasz sha256 bloku.

Wynik:

* *block_header* - struktura zawierająca informacje o nagłówku bloku. Zobacz [getlastblockheader](#getlastblockheader).

W tym przypadku wyszukano blok 912345 za pomocą jego haszu:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblockheaderbyhash","params":{"hash":"e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 78376,
      "difficulty": 815625611,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 1646,
      "orphan_status": false,
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716
    },
    "status": "OK"
  }
}
```


### **getblockheaderbyheight**

Podobnie do funkcji `getblockheaderbyhash` wspomnianej wcześniej, metoda ta bierze pod uwagę wysokość bloku jako parametr wejścia, aby otrzymać podstawowe informacje na temat bloku.

Wejście:

* *height* - niepodpisana liczba całkowita; wysokość bloku.

Wynik:

* *block_header* - Struktura zawierająca informacje na temat nagłówka bloku. Zobacz funkcję [getlastblockheader](#getlastblockheader).

W tym przypadku wyszukano blok 912345 za pomocą jego wysokości (zauważ, że wyszukane informacje są takie same jak w poprzednim przykładzie):

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblockheaderbyheight","params":{"height":912345}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 78376,
      "difficulty": 815625611,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 1646,
      "orphan_status": false,
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716
    },
    "status": "OK"
  }
}
```


### **getblock**

Pełne informacje na temat bloku mogą być wyszukane za pomocą wysokości bloku lub jego hasza, podobnie do wcześniej opisanych funkcji wyszukania nagłówka bloku. Dla pełnych informacji na temat bloku, obydwa rodzaje wyszukiwania korzystają z tej samej metody, jednak z różnymi paramterami wejścia.

Wejście (wybierz jedno z następujących):

* *height* - niepodpisana liczba całkowita; wysokość bloku.
* *hash* - ciąg; hasz bloku.

Wynik:

* *blob* - ciąg; heksadecymalny blok zawierający informacje o bloku.
* *block_header* - struktura zwierająca informacje na temat nagłówka bloku. Zobacz [getlastblockheader](#getlastblockheader).
* *json* - ciąg json; szczegóły bloku w formacie JSON:
  * *major_version* - to samo co w nagłówku bloku.
  * *minor_version* - to samo co w nagłówku bloku.
  * *timestamp* - to samo co w nagłówku bloku.
  * *prev_id* - to samo co `prev_hash` w nagłówku bloku
  * *nonce* - to samo co w nagłówku bloku.
  * *miner_tx* - informacje na temat transakcji górnika.
    * *version* - numer wersji transakcji.
    * *unlock_time* - wysokość bloku gdy transakcja coinbase stanie się zdolna do wydania.
    * *vin* - lista wejść transakcji:
      * *gen* - transakcje górnika są transakcjami coinbase, inaczej "gen".
        * *height* - wysokość danego bloku, czyli kiedy coinbase został wygenerowany.
    * *vout* - lista wyjść transakcji. Każde wyjście zawiera:
      * *amount* - kwotę wyjścia w jednostkach atomowych.
      * *target* -
        * *key* -
    * *extra* - zazwyczaj nazywane "numerem identyfikacyjnym transakcji", może być użyte do zawarcia jakiegokolwiek ciągu 32-		bajtowego/64-znakowego heksadecymalnego.
    * *signatures* - zawiera podpisy uczestników transakcji. Transakcje coinbase nie posiadają podpisów.
  * *tx_hashes* - lista haszy transakcji nie-coinbase w bloku. Jeśli nie było takich transakcji, lista będzie pusta.
* *status* -  ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

**Wyszukiwanie przy użyciu wysokości:**

W poniższym przykładzie wyszukano blok 912345 za pomocą jego wysokości. Zauważ, że blok ten nie posiada żadnych transakcji nie-coinbase (zobacz blok z dodatkowymi transakcjami w następnym przykładzie):

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblock","params":{"height":912345}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blob": "...",
    "block_header": {
      "depth": 80694,
      "difficulty": 815625611,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 1646,
      "orphan_status": false,
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716
    },
    "json": "{\n  \"major_version\": 1, \n  \"minor_version\": 2, \n  \"timestamp\": 1452793716, \n  \"prev_id\": \"b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78\", \n  \"nonce\": 1646, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"unlock_time\": 912405, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 912345\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 8968946286, \n        \"target\": {\n          \"key\": \"378b043c1724c92c69d923d266fe86477d3a5ddd21145062e148c64c57677008\"\n        }\n      }, {\n        \"amount\": 80000000000, \n        \"target\": {\n          \"key\": \"73733cbd6e6218bda671596462a4b062f95cfe5e1dbb5b990dacb30e827d02f2\"\n        }\n      }, {\n        \"amount\": 300000000000, \n        \"target\": {\n          \"key\": \"47a5dab669770da69a860acde21616a119818e1a489bb3c4b1b6b3c50547bc0c\"\n        }\n      }, {\n        \"amount\": 7000000000000, \n        \"target\": {\n          \"key\": \"1f7e4762b8b755e3e3c72b8610cc87b9bc25d1f0a87c0c816ebb952e4f8aff3d\"\n        }\n      }\n    ], \n    \"extra\": [ 1, 253, 10, 119, 137, 87, 244, 243, 16, 58, 131, 138, 253, 164, 136, 195, 205, 173, 242, 105, 123, 61, 52, 173, 113, 35, 66, 130, 178, 250, 217, 16, 14, 2, 8, 0, 0, 0, 11, 223, 194, 193, 108\n    ], \n    \"signatures\": [ ]\n  }, \n  \"tx_hashes\": [ ]\n}",
    "status": "OK"
  }
}
```

**Wyszukiwanie za pomocą hasza:**

W poniższym przykładzie wyszukano blok 993056 za pomocą jego hasza. Zauważ, że ten blok posiada 3 transakcje nie-coinbase:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblock","params":{"hash":"510ee3c4e14330a7b96e883c323a60ebd1b5556ac1262d0bc03c24a3b785516f"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blob": "...",
    "block_header": {
      "depth": 12,
      "difficulty": 964985344,
      "hash": "510ee3c4e14330a7b96e883c323a60ebd1b5556ac1262d0bc03c24a3b785516f",
      "height": 993056,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 2036,
      "orphan_status": false,
      "prev_hash": "0ea4af6547c05c965afc8df6d31509ff3105dc7ae6b10172521d77e09711fd6d",
      "reward": 6932043647005,
      "timestamp": 1457720227
    },
    "json": "{\n  \"major_version\": 1, \n  \"minor_version\": 2, \n  \"timestamp\": 1457720227, \n  \"prev_id\": \"0ea4af6547c05c965afc8df6d31509ff3105dc7ae6b10172521d77e09711fd6d\", \n  \"nonce\": 2036, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"unlock_time\": 993116, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 993056\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 2043647005, \n        \"target\": {\n          \"key\": \"59e9d685b3484886bc7b47c133e6099ecdf212d5eaa16ce19cd58e8c3c1e590a\"\n        }\n      }, {\n        \"amount\": 30000000000, \n        \"target\": {\n          \"key\": \"4c5e2f542d25513c46b9e3b7d40140a22d0ae5314bfcae492ad9f56fff8185f0\"\n        }\n      }, {\n        \"amount\": 900000000000, \n        \"target\": {\n          \"key\": \"13dd8ffdac9e6a2f71e327dad65328198dc879a492d145eae72677c0703a3515\"\n        }\n      }, {\n        \"amount\": 6000000000000, \n        \"target\": {\n          \"key\": \"62bda00341681dccbc066757862da593734395745bdfe1fdc89b5948c86a5d4c\"\n        }\n      }\n    ], \n    \"extra\": [ 1, 182, 145, 133, 28, 240, 87, 185, 195, 2, 163, 219, 202, 135, 158, 28, 186, 76, 196, 80, 97, 202, 85, 170, 166, 224, 60, 220, 103, 171, 158, 69, 80, 2, 8, 0, 0, 0, 12, 97, 127, 223, 22\n    ], \n    \"signatures\": [ ]\n  }, \n  \"tx_hashes\": [ \"79c6b9f00db027bde151705aafe85c495883aae2597d5cb8e1adb2e0f3ae1d07\", \"d715db73331abc3ec588ef07c7bb195786a4724b08dff431b51ffa32a4ce899b\", \"b197066426c0ed89f0b431fe171f7fd62bc95dd29943daa7cf3585cf1fdfc99d\"\n  ]\n}",
    "status": "OK",
    "tx_hashes": ["79c6b9f00db027bde151705aafe85c495883aae2597d5cb8e1adb2e0f3ae1d07","d715db73331abc3ec588ef07c7bb195786a4724b08dff431b51ffa32a4ce899b","b197066426c0ed89f0b431fe171f7fd62bc95dd29943daa7cf3585cf1fdfc99d"]
  }
}
```


### **get_connections**

Wyszukuje informacje na temat przychodzących i wychodzących połączeń z twoim węzłem.

Wejście: *brak*.

Wynik:

* *connections* - lista wszystkich połączeń i ich informacje:
  * *avg_download* - niepodpisana liczba całkowita; średnia bajtów ściągniętych przez węzeł.
  * *avg_upload* - niepodpisana liczba całkowita; średnia bajtów przesłanych przez węzeł.
  * *current_download* - niepodpisana liczba całkowita; aktualna liczba bajtów ściągniętych przez węzeł.
  * *current_upload* - niepodpisana liczba całkowita; aktualna liczba bajtów przesłanych przez węzeł.
  * *incoming* - logiczny typ danych; czy dany węzeł otrzymuje informacje z twojego węzła?
  * *ip* - ciąg; adres IP danego węzła.
  * *live_time* - niepodpisana liczba całkowita
  * *local_ip* - logiczny typ danych
  * *localhost* - logiczny typ danych
  * *peer_id* - ciąg; ID węzła w sieci.
  * *port* - ciąg; port używany przez węzeł do połączenia z siecią.
  * *recv_count* - niepodpisana liczba całkowita
  * *recv_idle_time* - niepodpisana liczba całkowita
  * *send_count* - niepodpisana liczba całkowita
  * *send_idle_time* - niepodpisana liczba całkowita
  * *state* - ciąg

Poniżej znajduje się przykład funkcji `get_connections` i jej wyniki:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_connections"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "connections": [{
      "avg_download": 0,
      "avg_upload": 0,
      "current_download": 0,
      "current_upload": 0,
      "incoming": false,
      "ip": "76.173.170.133",
      "live_time": 1865,
      "local_ip": false,
      "localhost": false,
      "peer_id": "3bfe29d6b1aa7c4c",
      "port": "18080",
      "recv_count": 116396,
      "recv_idle_time": 23,
      "send_count": 176893,
      "send_idle_time": 1457726610,
      "state": "state_normal"
    },{
    ...
    }],
    "status": "OK"
  }
}
```


### **get_info**

Wyszukuje podstawowe informacje na temat stanu twojego węzła oraz sieci.

Wejście: *brak*.

Wynik:

* *alt_blocks_count* - niepodpisana liczba całkowita; liczba alternatywnych bloków głównego łańcucha.
* *difficulty* - niepodpisana liczba całkowita; trudność sieci (analogiczna do siły sieci).
* *grey_peerlist_size* - niepodpisana liczba całkowita; rozmiar szarej listy peerów.
* *height* - niepodpisana liczba całkowita; aktualna długość najdłuższego łańcucha znanego demonowi.
* *incoming_connections_count* - niepodpisana liczba całkowita; liczba peerów podłączonych i korzystających z twojego węzła.
* *outgoing_connections_count* - niepodpisana liczba całkowita; liczba peerów, do których jesteś podłączony i od których pobierasz 	informacje.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.
* *target* - niepodpisana liczba całkowita; aktualny cel następnego dowodu pracy.
* *target_height* - niepodpisana liczba całkowita; wysokość następnego bloku w łańcuchu.
* *testnet* - logiczny typ danych; określa, czy węzeł jest w sieci testowej ("true") lub sieci głównej ("false").
* *top_block_hash* - ciąg; hasz najwyższego bloku w łańcuchu.
* *tx_count* - niepodpisana liczba całkowita; łączna liczba transakcji nie-coinbase w łańcuchu.
* *tx_pool_siz* - niepodpisana liczba całkowita; liczba transakcji, które zostały nadane, ale nie uwzględnione w bloku.
* *white_peerlist_size* - niepodpisana liczba całkowita; rozmiar białej listy peerów.

Poniżej znajduje się przykład funkcji `get_info` i jej wyniki:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "alt_blocks_count": 5,
    "difficulty": 972165250,
    "grey_peerlist_size": 2280,
    "height": 993145,
    "incoming_connections_count": 0,
    "outgoing_connections_count": 8,
    "status": "OK",
    "target": 60,
    "target_height": 993137,
    "testnet": false,
    "top_block_hash": "",
    "tx_count": 564287,
    "tx_pool_size": 45,
    "white_peerlist_size": 529
  }
}
```


### **hard_fork_info**

Wyszukuje informacje na temat głosowania na hard fork oraz jego gotowości.

Wejście: *brak*.

Wynik:

* *earliest_height* - niepodpisana liczba całkowita; wysokość bloku, na której hard fork byłby dokonany, jeśli przegłosowany.
* *enabled* - logiczny typ danych; okreśa, czy hard fork został wyegzekwowany.
* *state* -niepodpisana liczba całkowita; aktualny stan hard forku: 0 (hard fork jest prawdopodobny), 1 (aktualizacja jest konieczna do prawidłowego forku), or 2 (wszystko jest w porządku).
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.
* *threshold* - niepodpisana liczba całkowita; minimalny procent głosów wymagany do rozpoczęcia hard forku. Domyślną liczbą jest 80.
* *version* - niepodpisana liczba całkowita; główna wersja bloku do hard forku.
* *votes* - niepodpisana liczba całkowita; liczba głosów za hard forkiem.
* *voting* - niepodpisana liczba całkowita; status głosowania za hard forkiem.
* *window* - niepodpisana liczba całkowita; liczba bloków, w których oddano głosy. Domyślną liczbą jest 10080 bloków.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"hard_fork_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "earliest_height": 1009827,
    "enabled": false,
    "state": 2,
    "status": "OK",
    "threshold": 0,
    "version": 1,
    "votes": 7277,
    "voting": 2,
    "window": 10080
  }
}
```


### **setbans**

Banuje inny węzeł za pomocą IP.

Wejście:

* *bans* - lista węzłów do zbanowania:
  * *ip* - niepodpisana liczba całkowita; adres IP do zbanowania w formacie numerycznym.
  * *ban* - logiczny typ danych; ustaw `true`, aby zbanować.
  * *seconds* - niepodpisana liczba całkowita; liczba sekund do zbanowania węzła.

Wynik:

* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"setbans","params":{"bans":[{"ip":838969536,"ban":true,"seconds":30}]}}' -H  'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```


### **getbans**

Wejście: *brak*.

Wynik:

* *bans* - list zbanowanych węzłów:
  * *ip* - niepodpisana liczba całkowita; zbanowany adres IP w formacie numerycznym.
  * *seconds* - niepodpisana liczba całkowita; lokalny czas uniksowy, do kiedy dany adres IP jest zbanowany.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getbans"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "bans": [{
      "ip": 838969536,
      "seconds": 1457748792
    }],
    "status": "OK"
  }
}
```


---

## Pozostałe funkcje demona RPC

Nie wszystkie funkcje demona RPC korzystają z interfejsu JSON_RPC. Ta sekcja objaśnia przykłady takich funkcji.

Struktura danych w tych funkcjach jest inna niż w funkcjacj JSON RPC. Podczas gdy metody JSON RPC są stosowane przy użyciu rozszerzenia `/json_rpc` i określeniu metody, poniższe funkcje są stosowane z własnymi rozszerzeniami. Na przykład:

    IP=127.0.0.1
    PORT=18081
    METHOD='gettransactions'
	PARAMS='{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}'
	curl \
		-X POST http://$IP:$PORT/$METHOD \
		-d $PARAMS \
		-H 'Content-Type: application/json'

Zauważ: zaleca się używanie funkcji JSON RPC, gdy jest to możliwe, na przykład zalecanym sposobem na wyszukanie wysokości węzła jest zastosowanie metody JSON RPC [get_info](#getinfo) lub [getlastblockheader](#getlastblockheader), a nie poniższej [getheight](#getheight).


### **/getheight**

Wyszukanie aktualnej wysokości węzła.

Wejście: *brak*.

Wynik:

* *height* - niepodpisana liczba całkowita; aktualna długość najdłuższego łańcucha znanego demonowi.

```
$ curl -X POST http://127.0.0.1:18081/getheight -H 'Content-Type: application/json'

{
  "height": 993488,
  "status": "OK"
}
```


### **/gettransactions**

Wyszukuje jedną lub więcej transakcji za pomocą hasza.

Wejście:

* *txs_hashes* - lista ciągów; listra haszów transakcji do wyszukania.
* *decode_as_json* - logiczny typ danych; opcjonalny. Jeśli ustawiony jako `true`, znalezione informacje na temat transakcji będą dekodowane, a nie 	binarne.

Wynik:

* *status* - kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.
* *txs_as_hex* - ciąg; pełna informacja na temat transakcji jako ciąg heksadecymalny.
* *txs_as_json* - ciąg json; (opcjonalny - znaleziony, jeśli tak wskazano w wejściu); lista informacji na temat transakcji:
  * *version* - wersja transakcji.
  * *unlock_time* - jeśli różne od 0, informuje o czasie, kiedy wyjście transakcji będzie gotowe do wydania.
  * *vin* - lista wkładów do transakcji:
    * *key* - publiczny klucz poprzedniego wyjścia, wydanego w tej transakcji.
      * *amount* - kwota wkładu w jednostkach atomowych.
      * *key_offsets* - lista numerycznych offsetów wkładu.
      * *k_image* - obraz klucza danego wkładu.
  * *vout* - lista wyjść transakcji:
    * *amount* - kwota wyjścia transakcji w jednostkach atomowych.
    * *target* - informacje na temat celu wyjścia:
      * *key* - jednorazowy klucz publiczny odbiorcy. Ktokolwiek posiada prywatny klucz połączony z tym kluczem, kontroluje wyjście tej 	transakcji.
  * *extra* - zazwyczaj nazywane "numerem identyfikacyjnym płatności", może zostać użyte do włączenia dowolnych 32 bajtów.
  * *signatures* - lista podpisów użytych w podpisie pierścieniowym w celu ukrycia prawdziwego pochodzenia transakcji.

Przykład 1: wynik jest informacją na temat transakcji w formacie binarnym.

```
$ curl -X POST http://127.0.0.1:18081/gettransactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}' -H 'Content-Type: application/json'

{
  "status": "OK",
  "txs_as_hex": ["..."]
}
```


Przykład 2: zdekoduj otrzymane informacje na temat transakcji w formacie JSON. Zauważ, że lista "vout" została skrócona w podanym wyniku ze względu na jej obszerność.

```
$ curl -X POST http://127.0.0.1:18081/gettransactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"],"decode_as_json":true}' -H 'Content-Type: application/json'

{
  "status": "OK",
  "txs_as_hex": ["..."],
  "txs_as_json": ["{\n  \"version\": 1, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 70000000, \n        \"key_offsets\": [ 35952\n        ], \n        \"k_image\": \"d16908468dff9438a9814fe96bdaa575f06fe8da85772b72e54926428712293d\"\n      }\n    }, {\n      \"key\": {\n        \"amount\": 400000000000000, \n        \"key_offsets\": [ 6830\n        ], \n        \"k_image\": \"c7a7024b763df1181ae6fe821b70669735e38a68162ac02362e33acbe829b605\"\n      }\n    }\n  ], \n  \"vout\": [ {\n      \"amount\": 50000, \n      \"target\": {\n        \"key\": \"f6be43f7be4f06adcb1d06f4a07c637c7359e009cf3e57bb32b8c9ea636509c3\"\n      }\n    }, {\n      \"amount\": 200000, \n      \"target\": {\n        \"key\": \"b0a7a8e32f2b5302552bcd8d85112c62838b1f56cccd844eb9b63e0a732d0353\"\n      }\n    },  ...  \n  ], \n  \"extra\": [ 1, 225, 240, 98, 34, 169, 73, 47, 237, 117, 192, 30, 192, 60, 155, 47, 4, 115, 20, 21, 11, 13, 252, 219, 129, 13, 174, 37, 36, 78, 191, 141, 109\n  ], \n  \"signatures\": [ \"e6a3be8003d481d2855c8127f56871de3d28a4fb52385b999eb986c831c5cc08361c126b0db24a21b6c4299b438ee2be201d44d57a371230b9cd04395ab8c400\", \"8309851abaf2cf2a7091e0cdb9c83704fa7d68838a7a8ef8c178bb55a1e93a038dd18bb4a7549dc056b7a70e037cabd80911a03f427e36f712756d4c00f38f0b\"]\n}"]
}
```


### **/is_key_image_spent**

Sprawdza, czy wyjścia zostały wydane przy użyciu obrazu klucza powiązanego z wyjściem.

Wejście:

* *key_images* - lista ciągów; lista ciągów heksadecymalnych obrazu klucza do sprawdzenia.

Wynik:

* *spent_status* - lista niepodpisanych liczb całkowitych; lista statusów każdego sprawdzonego obrazu. Statusy są następujące: 0 = niewydany, 1 = wydany w łańcuchu bloków, 2 = wydany w puli transakcji.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/is_key_image_spent -d '{"key_images":["8d1bd8181bf7d857bdb281e0153d84cd55a3fcaa57c3e570f4a49f935850b5e3","7319134bfc50668251f5b899c66b005805ee255c136f0e1cecbb0f3a912e09d4"]}' -H 'Content-Type: application/json'

{
  "spent_status": [1,2],
  "status": "OK"
}
```


### **/sendrawtransaction**

Nadaje surową transakcję do sieci.

Wejście:

* *tx_as_hex* - ciąg; pełna inforacja na temat transakcji jako ciąg heksadecymalny.

Wynik:

* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku. Jakikolwiek inny wynik oznacza, że coś poszło 	nie tak.
* *double_spend* - logiczny typ danych;  Transakcja jest dwukrotnym wydaniem (`true`) lub nie (`false`).
* *fee_too_low* - logiczny typ danych; opłata jest za niska (`true`) lub nie (`false`).
* *invalid_input* - logiczny typ danych; wejście jest nieprawidłowe (`true`) lub prawidłowe (`false`).
* *invalid_output* - logiczny typ danych; wyjście jest nieprawidłowe (`true`) lub prawidłowe (`false`).
* *low_mixin* - logiczny typ danych; liczba Mixin jest zbyt niska (`true`) lub nie (`false`).
* *not_rct* - logiczny typ danych; transakcja nie jest transakcją pierścieniową (`true`) lub jest transakcją pierścieniową (`false`).
* *not_relayed* - logiczny typ danych; transakcja nie została przekazana (`true`) lub została przekazana (`false`).
* *overspend* - logiczny typ danych; transakcja korzysta z większej kwoty niż to możliwe (`true`) lub nie (`false`).
* *reason* - ciąg; dodatkowe informacje. Obecnie puste lub "Not relayed", jeśli transakcja została zaakceptowana, ale nie przekazana.
* *too_big* - logiczny typ danych; rozmiar transakcji jest zbyt duży (`true`) lub nie (`false`).


Przykład (informacja zwrotna nie została tu zawarta):


```
$ curl -X POST http://127.0.0.1:18081/sendrawtransaction -d '{"tx_as_hex":"de6a3..."}' -H 'Content-Type: application/json'
```


### **/get_transaction_pool**

Wyszukuje informacje na temat ważnych transakcji widocznych przez węzeł, które nie zostały jeszcze wydobyte w bloku, oraz informacje na temat obrazu klucza wydawania w pamięci węzła.

Wejście: *brak*.

Wynik:

* *spent_key_images* - lista obrazów klucza wydawania wyjścia:
  * *id_hash* - ciąg; hasz numeru identyfikacyjnego obrazu klucza.
  * *txs_hashes* - lista ciągów; hasze transakcji obrazu klucza.
* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.
* *transactions* - lista transakcji w puli pamięci, które nie zostały uwzględnione w bloku:
  * *blob_size* - niepodpisana liczba całkowita; rozmiar pełnego blobu transakcji.
  * *fee* - niepodpisana liczba całkowita; kwota opłaty wydobywczej uwzględnionej w transakcji w jednostkach atomowych.
  * *id_hash* - ciąg; hasz numeru identyfikacyjnego transakcji.
  * *kept_by_block* - logiczny typ danych; nie akceptujemy transakcji, które skończyły się wcześsniej, chyba że ustawiono jako `true`.
  * *last_failed_height* - niepodpisana liczba całkowita; jeśli transakcja skończyła się wcześniej, funckja ta określa, na jakiej 	wysokości się to stało.
  * *last_failed_id_hash* - ciąg; podobnie do poprzedniej, funkcja ta określa poprzedni hasz numeru identyfikacyjnego transakcji.
  * *max_used_block_height* - niepodpisana liczba całkowita; określa wysokość ostatniego bloku z wyjściem użytym do tej transakcji.
  * *max_used_block_hash* - ciąg; określa hasz ostatniego bloku z wyjściem użytym do tej transakcji.
  * *receive_time* - niepodpisana liczba całkowita; uniksowy czas, kiedy transakcja została zauważona w sieci po raz pierwszy przez 	węzeł.
  * *tx_json* - ciąg json; struktura JSON wszystkich informacji o transakcji:
    * *version* - wersja transakcji.
    * *unlock_time* - jeśli różne od 0, określa czas, kiedy wyjście transakcji będzie możliwe do wydania.
 * *vin* - lista wkładów do transakcji:
    * *key* - publiczny klucz poprzedniego wyjścia, wydanego w tej transakcji.
      * *amount* - kwota wkładu w jednostkach atomowych.
      * *key_offsets* - lista numerycznych offsetów wkładu.
      * *k_image* - obraz klucza danego wkładu.
  * *vout* - lista wyjść transakcji:
    * *amount* - kwota wyjścia transakcji w jednostkach atomowych.
    * *target* - informacje na temat celu wyjścia:
      * *key* - jednorazowy klucz publiczny odbiorcy. Ktokolwiek posiada prywatny klucz połączony z tym kluczem, kontroluje wyjście tej 	transakcji.
  * *extra* - zazwyczaj nazywane "numerem identyfikacyjnym płatności", może zostać użyte do włączenia dowolnych 32 bajtów.
  * *signatures* - lista podpisów użytych w podpisie pierścieniowym w celu ukrycia prawdziwego pochodzenia transakcji.

Przykład (zauważ, że niektóre z list w poniższym wyniku zostały skrócone ze względu na ich obszerność):

```
$ curl -X POST http://127.0.0.1:18081/get_transaction_pool -H 'Content-Type: application/json'

{
  "spent_key_images": [{
    "id_hash": "1edb9ecc39602040282d326070ad22cb473c952c0d6280c9c4c3b853fb34f3bc",
    "txs_hashes": ["409911b2be02e3f0e930b326c67ab9e74675885ce23d71bb3bd28b62bc3e7803"]
  },{
    "id_hash": "4adb4bb63b3397027340ca4e6c45f4ce2147dfb3a4e0fafdec18834ae594a05e",
    "txs_hashes": ["946f1f4c52e3426a41959c93b60078f314813bc4bdebcf69b8ee11d593b2bd14"]
  },
  ...],
  "status": "OK",
  "transactions": [{
    "blob_size": 25761,
    "fee": 290000000000,
    "id_hash": "11d4cff23e610fac6a2b89187ad61d429a5e226652693dcac5d83d506eb92b96",
    "kept_by_block": false,
    "last_failed_height": 0,
    "last_failed_id_hash": "0000000000000000000000000000000000000000000000000000000000000000",
    "max_used_block_height": 954508,
    "max_used_block_id_hash": "03f96b374778bc059e47b96e2beec2e6d4d9e0ad39afeabdbcd77e1bd5a62f81",
    "receive_time": 1457676127,
    "tx_json": "{\n  \"version\": 1, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 70000000000, \n        \"key_offsets\": [ 63408, 18978, 78357, 16560\n        ], \n        \"k_image\": \"7319134bfc50668251f5b899c66b005805ee255c136f0e1cecbb0f3a912e09d4\"\n      }\n    },  ...  ], \n  \"vout\": [ {\n      \"amount\": 80000000000, \n      \"target\": {\n        \"key\": \"094e6a1b187385533665f89db741149f42d95fdc50bdd2a2384bcd1dc5209c55\"\n      }\n    },  ...  ], \n  \"extra\": [ 2, 33, 0, 15, 56, 190, 21, 169, 77, 13, 182, 209, 51, 35, 54, 96, 89, 237, 96, 23, 24, 107, 240, 79, 40, 86, 64, 68, 45, 166, 119, 192, 17, 225, 23, 1, 31, 159, 145, 15, 173, 255, 165, 192, 55, 84, 127, 154, 163, 25, 85, 204, 212, 127, 147, 133, 118, 218, 166, 52, 78, 188, 131, 235, 9, 159, 105, 158\n  ], \n  \"signatures\": [ \"966e5a67fbdbf72d7dc0364b705121a58e0ced7e2ab45747b6b154c05a1afe04fac4aac7f64faa2dc6dd4d51b8277f11e2f2ec7729fac225088befe3b8399c0b71a4cb55b9d0e20f93d305c78cebceff1bcfcfaf225428dfcfaaec630c88720ab65bf5d3399dd1ac82ea0ecf308b3f80d9780af7742fb157692cd60515a7e2086878f082117fa80fff3d257de7d3a2e9cc8b3472ef4a5e545d90e1159523a60f38d16cece783579627124776813334bdb2a2df4171ef1fa12bf415da338ce5085c01e7a715638ef5505aebec06a0625aaa72d13839838f7d4f981673c8f05f08408e8b372f900af7227c49cfb1e1febab6c07dd42b7c26f921cf010832841205\",  ...  ]\n}"
  },
  ...]
}
```


### **/stop_daemon**

Wysyła polecenie do demona, aby bezpiecznie się rozłączyć i wyłączyć.

Wejście: *brak*.

Wynik:

* *status* - ciąg; kod generalnego błędu RPC. "OK" oznacza, że wszystko jest w porządku.

Przykład:

```
$ curl -X POST http://127.0.0.1:18081/stop_daemon -H 'Content-Type: application/json'

{
  "status": "OK"
}
```
