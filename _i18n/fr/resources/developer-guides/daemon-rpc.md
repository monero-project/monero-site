{% assign version = '2.3.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## Introduction

Voici une liste des appels de procédures distantes (RPC) du démon, leurs entrées et sorties, et des exemples pour chacun d'eux.

De nombreux appels RPC utilisent l'interface JSON RPC du démon, alors que d'autres utilisent leurs propres interfaces, comme démontré plus bas.

Remarque : "@unité-atomique" réfère à la plus petite fraction de 1 XMR selon l'implémentation monerod. **1 XMR = 1e12 unités atomiques**

Remarque 2 : Guide mis à jour à la hauteur du réseau 1562465.

### [Méthodes JSON RPC](#methodes-json-rpc) :

* [get_block_count](#get_block_count)
* [on_get_block_hash](#on_get_block_hash)
* [get_block_template](#get_block_template)
* [submit_block](#submit_block)
* [get_last_block_header](#get_last_block_header)
* [get_block_header_by_hash](#get_block_header_by_hash)
* [get_block_header_by_height](#get_block_header_by_height)
* [get_block_headers_range](#get_block_headers_range)
* [get_block](#get_block)
* [get_connections](#get_connections)
* [get_info](#get_info)
* [hard_fork_info](#hard_fork_info)
* [set_bans](#set_bans)
* [get_bans](#get_bans)
* [flush_txpool](#flush_txpool)
* [get_output_histogram](#get_output_histogram)
* [get_version](#get_version)
* [get_coinbase_tx_sum](#get_coinbase_tx_sum)
* [get_fee_estimate](#get_fee_estimate)
* [get_alternate_chains](#get_alternate_chains)
* [relay_tx](#relay_tx)
* [sync_info](#sync_info)
* [get_txpool_backlog](#get_txpool_backlog)
* [get_output_distribution](#get_output_distribution)

### [Autres Méthodes RPC](#autres-appels-rpc-du-demon) :

* [/get_height](#get_height)
* [/get_blocks.bin](#get_blocksbin)
* [/get_blocks_by_height.bin](#get_blocks_by_heightbin)
* [/get_hashes.bin](#get_hashesbin)
* [/get_o_indexes.bin](#get_o_indexesbin)
* [/get_outs.bin](#get_outsbin)
* [/get_transactions](#get_transactions)
* [/get_alt_blocks_hashes](#get_alt_blocks_hashes)
* [/is_key_image_spent](#is_key_image_spent)
* [/send_raw_transaction](#send_raw_transaction)
* [/start_mining](#start_mining)
* [/stop_mining](#stop_mining)
* [/mining_status](#mining_status)
* [/save_bc](#save_bc)
* [/get_peer_list](#get_peer_list)
* [/set_log_hash_rate](#set_log_hash_rate)
* [/set_log_level](#set_log_level)
* [/set_log_categories](#set_log_categories)
* [/get_transaction_pool](#get_transaction_pool)
* [/get_transaction_pool_hashes.bin](#get_transaction_pool_hashesbin)
* [/get_transaction_pool_stats](#get_transaction_pool_stats)
* [/stop_daemon](#stop_daemon)
* [/get_info (not JSON)](#get_info-not-json)
* [/get_limit](#get_limit)
* [/set_limit](#set_limit)
* [/out_peers](#out_peers)
* [/in_peers](#in_peers)
* [/start_save_graph](#start_save_graph)
* [/stop_save_graph](#stop_save_graph)
* [/get_outs](#get_outs)
* [/update](#update)


---

## Méthodes JSON RPC

La majorité des appels RPC de monerod utilisent l'interface `json_rpc` du démon pour demander des bribes d'information. Ces méthodes suivent toutes une structure similaire, par exemple :

```
IP=127.0.0.1
PORT=18081
METHOD='get_block_header_by_height'
ALIAS='getblockheaderbyheight'
PARAMS='{"height":912345}'
curl \
    -X POST http://$IP:$PORT/json_rpc \
    -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'$PARAMS'}' \
    -H 'Content-Type: application/json'
```

Certaines méthodes comportent des paramètres, alors que d'autres non. Chaque méthode JSON RPC est suivit d'exemple(s).

### **get_block_count**

Cherche combien de blocs sont contenus dans la plus longue chaîne connue du nœud.

Alias : *getblockcount*.

Entrées : *Aucune*.

Sorties :

* *count* - entier non signé; Nombre de blocs dans la plus longue chaîne vue par le nœud.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_count"}' -H 'Content-Type: application/json'  

{  
  "id": "0",  
  "jsonrpc": "2.0",  
  "result": {  
    "count": 993163,  
    "status": "OK"  
  }  
}  
```


### **on_get_block_hash**

Cherche le hachage d'un bloc par sa hauteur de bloc.

Alias : *on_getblockhash*.

Entrées :

* *block height* - tableau d'entiers de longueur 1; Hauteur(s) de bloc à rechercher.

Sorties :

* *block hash* - chaîne de caractères; Hachage du bloc correspondant.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"on_get_block_hash","params":[912345]}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"
}
```


### **get_block_template**

Obtenir un modèle de bloc à partir duquel miner un nouveau bloc.

Alias : *getblocktemplate*.

Entrées :

* *wallet_address* - chaîne de caractères; Adresse du portefeuille à laquelle recevoir la transaction de la base de la pièce si le bloc est miné avec succès.
* *reserve_size* - entier non signé; Taille de réserve.

Sorties :

* *blocktemplate_blob* - chaîne de caractères; Forme sur laquelle essayer de miner un nouveau bloc.
* *blockhashing_blob* - chaîne de caractères; Forme sur laquelle essayer de trouver un nonce valide.
* *difficulty* - entier non signé; Difficulté du bloc suivant.
* *expected_reward* - entier non signé; Récompense de la base de la pièce à espérer si le bloc est miné avec succès.
* *height* - entier non signé; Hauteur à laquelle miner.
* *prev_hash* - chaîne de caractères; Hachage du bloc le plus récent sur lequel miner le bloc suivant.
* *reserved_offset* - entier non signé; Déport réservé.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_template","params":{"wallet_address":"44GBHzv6ZyQdJkjqZje6KLZ3xSyN1hBSFAnLP6EAqJtCRVzMzZmeXTC2AHKDS9aEDTRKmo6a6o9r9j86pYfhCWDkKjbtcns","reserve_size":60}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blockhashing_blob": "070786a498d705f8dc58791266179087907a2ff4cd883615216749b97d2f12173171c725a6f84a00000000fc751ea4a94c2f840751eaa36138eee66dda15ef554e7d6594395827994e31da10",
    "blocktemplate_blob": "070786a498d705f8dc58791266179087907a2ff4cd883615216749b97d2f12173171c725a6f84a0000000002aeab5f01fff2aa5f01e0a9d0f2f08a01028fdb3d5b5a2c363d36ea17a4add99a23a3ec7935b4c3e1e0364fcc4295c7a2ef5f01f912b15f5d17c1539d4722f79d8856d8654c5af87f54cfb3a4ff7f6b512b2a08023c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f1755090c809421d69873c161e7969b8bf33cee3b451dd4859bfc244a705f0b4900498f804b6023e13fa023a0fb759e8b7c9a39506a21442bc47077beeedc6b78d34c4ebdae91bd96097ccc9a882bc5056568b0d2f1f06559368fea4acba8e745444e883e53156d5083c1fd260edf05292934c8b40c098b81fe4e261720bdd272b209e317247a1d2c55dc4718891af0d16273c5a610f36f382a3bf50f54808aaa6a508e51d4601dd0d8fbf8b3b1685066ce121666a1409e8ac7a4d673c1cc36d10b825f764af647441f53230518e4d2efbcf8791c6060912c76e90db4982a66d51bbd96290bbb34db8080b216c2940cec407260bf5e2c3a5ee280835f15298f0801e9d98c4d414792282fbc2c28c3e20bc0fcb1829b5c3ad8f8d20847be8fdb2a949fd96f0205fbd6d271c880c5d8c83e9813606cd803a44d377fdeae45bfa67112132af601e9b3b0613ba7dff2ec3d4b935c447b47bfe39f7b950981b2f4c66c0d853e2218f1f69229a9b608c3d98be09b6d4d640a9f6ff0e920dbacf7e58b59554c0b398b1ae4b1d497104b4e4e745d850eed7eddb8aa93437427bf442ae5beb22cbf10a8fa738ea38cfa5d86dfd30675d4be11a38016e36936fd5601e52643e8b8bc433702ea7ae6149309c95b898cc854850e73fe0b95c5b8879b7325ecd4",
    "difficulty": 61043624293,
    "expected_reward": 4771949057248,
    "height": 1561970,
    "prev_hash": "f8dc58791266179087907a2ff4cd883615216749b97d2f12173171c725a6f84a",
    "reserved_offset": 129,
    "status": "OK",
    "untrusted": false
  }
}
```


### **submit_block**

Soumettre un bloc miné au réseau.

Alias : *submitblock*.

Entrées :

* *Block blob data* - liste de chaînes de caractères; Liste des formes de blocs qui ont été minées.  Voir [get_block_template](#get_block_template) pour obtenir une forme sur laquelle miner.

Sorties :

* *status* - chaîne de caractères; Statut de la soumission du bloc.

Dans cet exemple, un bloc qui n'a pas été miné est soumis :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"submit_block","params":["0707e6bdfedc053771512f1bc27c62731ae9e8f2443db64ce742f4e57f5cf8d393de28551e441a0000000002fb830a01ffbf830a018cfe88bee283060274c0aae2ef5730e680308d9c00b6da59187ad0352efe3c71d36eeeb28782f29f2501bd56b952c3ddc3e350c2631d3a5086cac172c56893831228b17de296ff4669de020200000000"]' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "error": {
    "code": -7,
    "message": "Block not accepted"
  }
}
```


### **get_last_block_header**

Les informations d'entête du bloc le plus récent sont facilement récupérées avec cette méthode. Aucune entrée n'est nécessaire.

Alias : *getlastblockheader*.

Entrées : *Aucune*.

Sorties :

* *block_header* - Une structure contenant les informations d'entête du bloc.
  * *block_size* - entier non signé; La taille du bloc en octets.
  * *depth* -  entier non signé; Le nombre de blocs succédant à ce bloc dans la chaîne de blocs. Un plus grand nombre signifie un bloc plus ancien.
  * *difficulty* - entier non signé; La robustesse du réseau Monero basé sur la puissance d'extraction minière.
  * *hash* - chaîne de caractères; Le hachage de ce bloc.
  * *height* - entier non signé; Le nombre de blocs précédant ce bloc sur la chaîne de blocs.
  * *major_version* - entier non signé; La version majeure du protocole Monero à cette hauteur de bloc.
  * *minor_version* - entier non signé; La version mineure du protocole Monero à cette hauteur de bloc.
  * *nonce* - entier non signé; Un nombre cryptographique aléatoire à usage unique utilisé dans l'extraction minière d'un bloc Monero.
  * *num_txes* - entier non signé; Nombre de transactions dans le bloc, sans compter la transaction de la base de la pièce.
  * *orphan_status* - booléen; Habituellement `false`. Si `true`, ce bloc ne fait pas partie de la chaîne la plus longue.
  * *prev_hash* - chaîne de caractères; Le hachage du bloc précédent immédiatement ce bloc dans la chaîne de blocs.
  * *reward* - entier non signé; Le montant de nouvelles @unités-atomiques généré dans ce bloc et fournies en récompense au mineur. Remarque : 1 XMR = 1e12 @unités-atomiques.
  * *timestamp* - entier non signé; Le temps Unix auquel ce bloc à été enregistré dans la chaîne de blocs.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Dans cette exmemple, le bloc le plus récent (1562023 à ce moment-là) est retourné :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_last_block_header"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "block_size": 62774,
      "depth": 0,
      "difficulty": 60097900840,
      "hash": "3a289b8fa88b10e2163826c230b45d79f2be37d14fa3153ee58ff8a427782d14",
      "height": 1562023,
      "major_version": 7,
      "minor_version": 7,
      "nonce": 3789681204,
      "num_txes": 5,
      "orphan_status": false,
      "prev_hash": "743e5d0a26849efe27b96086f2c4ecc39a0bc744bf21473dad6710221aff6ac3",
      "reward": 4724029079703,
      "timestamp": 1525029411
    },
    "status": "OK",
    "untrusted": false
  }
}
```


### **get_block_header_by_hash**

Les informations d'entête de bloc peuvent être récupérées en utilisant soit un hachage, soit une hauteur de bloc. Cette méthode inclue un hachage de bloc comme paramètre d'entrée pour récupérer les informations basiques du bloc.

Alias : *getblockheaderbyhash*.

Entrées :

* *hash* - chaîne de caractères; Le hachage sha256 du bloc.

Sorties :

* *block_header* - Une structure contenant les informations d'entête du bloc. Voir [get_last_block_header](#get_last_block_header).
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Dans cet exemple, le bloc 912345 est recherché par son hachage :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_hash","params":{"hash":"e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "block_size": 210,
      "depth": 649717,
      "difficulty": 815625611,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 1646,
      "num_txes": 0,
      "orphan_status": false,
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716
    },
    "status": "OK",
    "untrusted": false
  }
}
```


### **get_block_header_by_height**

Similaire à [get_block_header_by_hash](#get_block_header_by_hash) ci-dessus, cette méthode prend la hauteur de bloc comme paramètre d'entrée pour récupérer les informations basiques du bloc.

Alias : *getblockheaderbyheight*.

Entrées :

* *height* - entier non signé; La hauteur du bloc.

Sorties :

* *block_header* - Une structure contenant les informations d'entête du bloc. Voir [get_last_block_header](#get_last_block_header).
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Dans cet exemple, le bloc 912345 est recherché par sa hauteur (remarquez que les informations renvoyées sont les mêmes que dans l'exemple précédent) :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_height","params":{"height":912345}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "block_size": 210,
      "depth": 649721,
      "difficulty": 815625611,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 1646,
      "num_txes": 0,
      "orphan_status": false,
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716
    },
    "status": "OK",
    "untrusted": false
  }
}
```

### **get_block_headers_range**

Similaire à [get_block_header_by_height](#get_block_header_by_height) ci-dessus, mais pour une plage de blocs. Cette méthode nécessite une hauteur de bloc de départ et une hauteur de bloc de fin comme paramètres pour récupérer les informations basiques de la plage de blocs.

Alias : *getblockheadersrange*.

Entrées :

* *start_height* - entier non signé; La hauteur de bloc de départ.
* *end_height* - entier non signé; La hauteur de bloc de fin.

Sorties :

* *headers* - liste de `block_header` (Une structure contenant les informations d'entête du bloc. Voir [get_last_block_header](#get_last_block_header)).
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Dans cet exemple, la plage de bloc de la hauteur 1545999 à la hauteur 1546000 est recherchée (remarquez que les informations renvoyées sont dans l'ordre ascendant et qu'il s'agit du moment de la mise à jour réseau d'Avril 2018) :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_headers_range","params":{"start_height":1545999,"end_height":1546000}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "headers": [{
      "block_size": 301413,
      "depth": 16085,
      "difficulty": 134636057921,
      "hash": "86d1d20a40cefcf3dd410ff6967e0491613b77bf73ea8f1bf2e335cf9cf7d57a",
      "height": 1545999,
      "major_version": 6,
      "minor_version": 6,
      "nonce": 3246403956,
      "num_txes": 20,
      "orphan_status": false,
      "prev_hash": "0ef6e948f77b8f8806621003f5de24b1bcbea150bc0e376835aea099674a5db5",
      "reward": 5025593029981,
      "timestamp": 1523002893
    },{
      "block_size": 13322,
      "depth": 16084,
      "difficulty": 134716086238,
      "hash": "b408bf4cfcd7de13e7e370c84b8314c85b24f0ba4093ca1d6eeb30b35e34e91a",
      "height": 1546000,
      "major_version": 7,
      "minor_version": 7,
      "nonce": 3737164176,
      "num_txes": 1,
      "orphan_status": false,
      "prev_hash": "86d1d20a40cefcf3dd410ff6967e0491613b77bf73ea8f1bf2e335cf9cf7d57a",
      "reward": 4851952181070,
      "timestamp": 1523002931
    }],
    "status": "OK",
    "untrusted": false
  }
}
```


### **get_block**

Les informations complètes d'un bloc peuvent être récupérées soit par sa hauteur, soit par son hachage, comme pour les appels précédents. Pour les informations complètes du bloc, les deux recherches utilisent la même méthode, mais avec des paramètres d'entrées différents.

Alias : *getblock*.

Entrées (choisir l'un des suivant) :

* *height* - entier non signé; La hauteur du bloc.
* *hash* - chaîne de caractères; Le hachage du bloc.

Sorties :

* *blob* - chaîne de caractères; Forme au format hexadécimal des informations du bloc.
* *block_header* - Une structure contenant les informations d'entête du bloc. Voir [get_last_block_header](#get_last_block_header).
* *json* - chaîne de caractères json; détail du bloc au format JSON :
  * *major_version* - Comme dans l'entête du bloc.
  * *minor_version* - Comme dans l'entête du bloc.
  * *timestamp* - Comme dans l'entête du bloc.
  * *prev_id* - Comme `prev_hash` dans l'entête du bloc.
  * *nonce* - Comme dans l'entête du bloc.
  * *miner_tx* - Information de la transaction du mineur.
    * *version* - Numéro de version de la transaction.
    * *unlock_time* - La hauteur de bloc à laquelle la transaction de la base de la pièce peut être dépensée.
    * *vin* - Liste des entrées de la transaction :
      * *gen* - Les transactions du mineur sont des transactions de la base de la pièce, ou "gen".
        * *height* - Cette hauteur de bloc, c.a.d lorsque la transaction de la base de la pièce est générée.
    * *vout* - Liste des sorties de la transaction. Chaque sortie contient :
      * *amount* - Le montant de la sortie, en @unités-atomiques.
      * *target* -
        * *key* -
    * *extra* - Habituellement appelé "ID de transaction" mais peut inclure n'importe quelle chaîne de 32 octets ou 64 caractères hexadécimaux.
    * *signatures* - Contient les signatures des signataires de la transaction. Les transactions de la base de la pièce n'ont pas de signatures.
  * *tx_hashes* - Liste des hachages des transactions autres que la transaction de la base de la pièce. S'il n'y a pas d'autre transaction, cette liste sera vide.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

**Recherche par hauteur :**

Dans l'exemple ci-desous, le bloc 912345 est recherché par sa hauteur. Remarquez que le bloc 912345 n'a pas de transactions autre que la transaction de la base de la pièce. (voir l'exemple suivant pour un bloc avec d'autres transactions):

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"height":912345}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blob": "0102f4bedfb405b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff786e0600000195d83701ffd9d73704ee84ddb42102378b043c1724c92c69d923d266fe86477d3a5ddd21145062e148c64c5767700880c0fc82aa020273733cbd6e6218bda671596462a4b062f95cfe5e1dbb5b990dacb30e827d02f280f092cbdd080247a5dab669770da69a860acde21616a119818e1a489bb3c4b1b6b3c50547bc0c80e08d84ddcb01021f7e4762b8b755e3e3c72b8610cc87b9bc25d1f0a87c0c816ebb952e4f8aff3d2b01fd0a778957f4f3103a838afda488c3cdadf2697b3d34ad71234282b2fad9100e02080000000bdfc2c16c00",
    "block_header": {
      "block_size": 210,
      "depth": 649772,
      "difficulty": 815625611,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 1646,
      "num_txes": 0,
      "orphan_status": false,
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716
    },
    "json": "{\n  \"major_version\": 1, \n  \"minor_version\": 2, \n  \"timestamp\": 1452793716, \n  \"prev_id\": \"b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78\", \n  \"nonce\": 1646, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"unlock_time\": 912405, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 912345\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 8968946286, \n        \"target\": {\n          \"key\": \"378b043c1724c92c69d923d266fe86477d3a5ddd21145062e148c64c57677008\"\n        }\n      }, {\n        \"amount\": 80000000000, \n        \"target\": {\n          \"key\": \"73733cbd6e6218bda671596462a4b062f95cfe5e1dbb5b990dacb30e827d02f2\"\n        }\n      }, {\n        \"amount\": 300000000000, \n        \"target\": {\n          \"key\": \"47a5dab669770da69a860acde21616a119818e1a489bb3c4b1b6b3c50547bc0c\"\n        }\n      }, {\n        \"amount\": 7000000000000, \n        \"target\": {\n          \"key\": \"1f7e4762b8b755e3e3c72b8610cc87b9bc25d1f0a87c0c816ebb952e4f8aff3d\"\n        }\n      }\n    ], \n    \"extra\": [ 1, 253, 10, 119, 137, 87, 244, 243, 16, 58, 131, 138, 253, 164, 136, 195, 205, 173, 242, 105, 123, 61, 52, 173, 113, 35, 66, 130, 178, 250, 217, 16, 14, 2, 8, 0, 0, 0, 11, 223, 194, 193, 108\n    ], \n    \"signatures\": [ ]\n  }, \n  \"tx_hashes\": [ ]\n}",
    "miner_tx_hash": "c7da3965f25c19b8eb7dd8db48dcd4e7c885e2491db77e289f0609bf8e08ec30",
    "status": "OK",
    "untrusted": false
  }
}
```

**Recherche par hachage :**

Dans cet exemple, le bloc 993056 est recherché par son hachage. Remarquez que le bloc 993056 a 3 transactions autres que la transaction de la base de la pièce :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"hash":"510ee3c4e14330a7b96e883c323a60ebd1b5556ac1262d0bc03c24a3b785516f"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blob": "0102a3978cb7050ea4af6547c05c965afc8df6d31509ff3105dc7ae6b10172521d77e09711fd6df407000001dcce3c01ffa0ce3c049da8bece070259e9d685b3484886bc7b47c133e6099ecdf212d5eaa16ce19cd58e8c3c1e590a80d88ee16f024c5e2f542d25513c46b9e3b7d40140a22d0ae5314bfcae492ad9f56fff8185f080d0b8e1981a0213dd8ffdac9e6a2f71e327dad65328198dc879a492d145eae72677c0703a351580c0f9decfae010262bda00341681dccbc066757862da593734395745bdfe1fdc89b5948c86a5d4c2b01b691851cf057b9c302a3dbca879e1cba4cc45061ca55aaa6e03cdc67ab9e455002080000000c617fdf160379c6b9f00db027bde151705aafe85c495883aae2597d5cb8e1adb2e0f3ae1d07d715db73331abc3ec588ef07c7bb195786a4724b08dff431b51ffa32a4ce899bb197066426c0ed89f0b431fe171f7fd62bc95dd29943daa7cf3585cf1fdfc99d",
    "block_header": {
      "block_size": 3981,
      "depth": 569068,
      "difficulty": 964985344,
      "hash": "510ee3c4e14330a7b96e883c323a60ebd1b5556ac1262d0bc03c24a3b785516f",
      "height": 993056,
      "major_version": 1,
      "minor_version": 2,
      "nonce": 2036,
      "num_txes": 3,
      "orphan_status": false,
      "prev_hash": "0ea4af6547c05c965afc8df6d31509ff3105dc7ae6b10172521d77e09711fd6d",
      "reward": 6932043647005,
      "timestamp": 1457720227
    },
    "json": "{\n  \"major_version\": 1, \n  \"minor_version\": 2, \n  \"timestamp\": 1457720227, \n  \"prev_id\": \"0ea4af6547c05c965afc8df6d31509ff3105dc7ae6b10172521d77e09711fd6d\", \n  \"nonce\": 2036, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"unlock_time\": 993116, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 993056\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 2043647005, \n        \"target\": {\n          \"key\": \"59e9d685b3484886bc7b47c133e6099ecdf212d5eaa16ce19cd58e8c3c1e590a\"\n        }\n      }, {\n        \"amount\": 30000000000, \n        \"target\": {\n          \"key\": \"4c5e2f542d25513c46b9e3b7d40140a22d0ae5314bfcae492ad9f56fff8185f0\"\n        }\n      }, {\n        \"amount\": 900000000000, \n        \"target\": {\n          \"key\": \"13dd8ffdac9e6a2f71e327dad65328198dc879a492d145eae72677c0703a3515\"\n        }\n      }, {\n        \"amount\": 6000000000000, \n        \"target\": {\n          \"key\": \"62bda00341681dccbc066757862da593734395745bdfe1fdc89b5948c86a5d4c\"\n        }\n      }\n    ], \n    \"extra\": [ 1, 182, 145, 133, 28, 240, 87, 185, 195, 2, 163, 219, 202, 135, 158, 28, 186, 76, 196, 80, 97, 202, 85, 170, 166, 224, 60, 220, 103, 171, 158, 69, 80, 2, 8, 0, 0, 0, 12, 97, 127, 223, 22\n    ], \n    \"signatures\": [ ]\n  }, \n  \"tx_hashes\": [ \"79c6b9f00db027bde151705aafe85c495883aae2597d5cb8e1adb2e0f3ae1d07\", \"d715db73331abc3ec588ef07c7bb195786a4724b08dff431b51ffa32a4ce899b\", \"b197066426c0ed89f0b431fe171f7fd62bc95dd29943daa7cf3585cf1fdfc99d\"\n  ]\n}",
    "miner_tx_hash": "372395aeac5e5ad2c40b4c546b0bad00c4242fb2bd88e2e25f4e43231876f81e",
    "status": "OK",
    "tx_hashes": ["79c6b9f00db027bde151705aafe85c495883aae2597d5cb8e1adb2e0f3ae1d07","d715db73331abc3ec588ef07c7bb195786a4724b08dff431b51ffa32a4ce899b","b197066426c0ed89f0b431fe171f7fd62bc95dd29943daa7cf3585cf1fdfc99d"],
    "untrusted": false
  }
}
```


### **get_connections**

Récupère les informations des connexions entrantes et sortantes de votre nœud.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *connections* - Liste de toutes les connexions et leurs infos :
  * *address* - chaîne de caractères; L'adresse de l'homologue, actuellement IPv4 & port
  * *avg_download* - entier non signé; Moyenne des octets de données téléchargés par le nœud.
  * *avg_upload* - entier non signé; Moyenne des octets de données téléversés par le nœud.
  * *connection_id* - chaîne de caractères; L'ID de connexion
  * *current_download* - entier non signé; Octets actuellement téléchargés par le nœud.
  * *current_upload* - entier non signé; Octets actuellement téléversés par le nœud.
  * *height*- entier non signé; La hauteur de bloc de l'homologue.
  * *host* - chaîne de caractères; L'hôte de l'homologue.
  * *incoming* - booléen; Est-ce que l'homologue récupère des informations depuis votre nœud ?
  * *ip* - chaîne de caractères; L'adresse IP du nœud.
  * *live_time* - entier non signé
  * *local_ip* - booléen
  * *localhost* - booléen
  * *peer_id* - chaîne de caractères; L'ID du nœud sur le réseau.
  * *port* - chaîne de caractères; Le port utilisé par le nœud pour se connecter au réseau.
  * *recv_count* - entier non signé
  * *recv_idle_time* - entier non signé
  * *send_count* - entier non signé
  * *send_idle_time* - entier non signé
  * *state* - chaîne de caractères
  * *support_flags* - entier non signé

Ci-dessous un exemple de `get_connections` et son retour :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_connections"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "connections": [{
      "address": "173.90.69.136:62950",
      "avg_download": 0,
      "avg_upload": 2,
      "connection_id": "083c301a3030329a487adb12ad981d2c",
      "current_download": 0,
      "current_upload": 2,
      "height": 1562127,
      "host": "173.90.69.136",
      "incoming": true,
      "ip": "173.90.69.136",
      "live_time": 8,
      "local_ip": false,
      "localhost": false,
      "peer_id": "c959fbfbed9e44fb",
      "port": "62950",
      "recv_count": 259,
      "recv_idle_time": 8,
      "send_count": 24342,
      "send_idle_time": 8,
      "state": "state_normal",
      "support_flags": 0
    },{
    ...
    }],
    "status": "OK"
  }
}
```


### **get_info**

Récupère les informations générales à propos de l'état de votre nœud et du réseau.

Alias :

* */get_info*
* */getinfo*

Voir l'autre appel RPC du démon [/get_info (not JSON)](#get_info-not-json)

Entrées : *Aucune*.

Sorties :

* *alt_blocks_count* - entier non signé; Nombre de bloc alternatifs jusqu'à la chaîne principale.
* *block_size_limit* - entier non signé; Taille de bloc maximale autorisée.
* *block_size_median* - entier non signé; Taille de bloc médiane des 100 derniers blocs.
* *bootstrap_daemon_address* - chaîne de caractères; @nœud-d'amorce permettant d'utiliser immédiatement des portefeuilles durant la synchronisation en proxyfiant le RPC vers celui-ci. (Remarque : les réponses pourraient ne pas être digne de confiance).
* *cumulative_difficulty* - entier non signé; Cumule de difficulté de tous les blocs de la chaîne de blocs.
* *difficulty* - entier non signé; Difficulté du réseau (analogue à la robustesse du réseau)
* *free_space* - entier non signé; Espace disque disponible sur le nœud.
* *grey_peerlist_size* - entier non signé; Taille de la liste grise d'homologues.
* *height* - entier non signé; Longueur actuelle de la plus longue chaîne connue du démon.
* *height_without_bootstrap* - entier non signé; Longueur actuelle de la chaîne locale du démon.
* *incoming_connections_count* - entier non signé; Nombre d'homologue connectés et se synchronisant depuis notre nœud.
* *mainnet* - booléen; Indique si le nœud est sur le mainnet (`true`) ou non (`false`).
* *offline* - booléen; Indique si le nœud est hors ligne (`true`) ou en ligne (`false`).
* *outgoing_connections_count* - entier non signé; Nombre d'homologues auxquels vous êtes connectés et auprès desquels cous récupérez des informations.
* *rpc_connections_count* - entier non signé; Nombre de client RPC connectés au démon (cette requête RPC comprise).
* *stagenet* - booléen; Indique si le nœud est sur le stagenet (`true`) ou non (`false`).
* *start_time* - entier non signé; Heure de démarage du démon, au format UNIX.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *target* - entier non signé; Cible actuel pour la prochaine preuve de travail.
* *target_height* - entier non signé; La hauteur du prochain bloc dans la chaîne.
* *testnet* - booléen; Indique si le nœud est sur le testnet (`true`) ou non (`false`).
* *top_block_hash* - chaîne de caractères; Hachage du plus haut bloc dans la chaîne.
* *tx_count* - entier non signé; Nombre total de transactions (hors transactions de la base de la pièce) dans la chaîne.
* *tx_pool_size* - entier non signé; Nombre de transactions qui ont été diffusées mais pas incluses dans un bloc.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).
* *was_bootstrap_ever_used* - booléen; Indique si un nœud d'amorce à jamais été utilisé depuis le démarrage du démon.
* *white_peerlist_size* - entier non signé; Taille de la liste blanche d'homologues.

Ci-dessous un exemple d'appel `get_info` et de son retour :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "alt_blocks_count": 6,
    "block_size_limit": 600000,
    "block_size_median": 129017,
    "bootstrap_daemon_address": "",
    "cumulative_difficulty": 14121125493385685,
    "difficulty": 60580751777,
    "free_space": 138758750208,
    "grey_peerlist_size": 4998,
    "height": 1562168,
    "height_without_bootstrap": 1562168,
    "incoming_connections_count": 2,
    "mainnet": true,
    "offline": false,
    "outgoing_connections_count": 8,
    "rpc_connections_count": 2,
    "stagenet": false,
    "start_time": 1524751757,
    "status": "OK",
    "target": 120,
    "target_height": 1562063,
    "testnet": false,
    "top_block_hash": "7a7ba647080844073fdd8e3a069e00554c773d6e6863354dba1dec45a43f5592",
    "tx_count": 2759894,
    "tx_pool_size": 755,
    "untrusted": false,
    "was_bootstrap_ever_used": false,
    "white_peerlist_size": 1000
  }
}
```


### **hard_fork_info**

Recherche des informations concernant le vote et la disponibilité d'une mise à jour réseau.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *earliest_height* - entier non signé; Hauteur de bloc à laquelle la mise à jour réseau sera activée si elle est votée.
* *enabled* - booléen; Indique si la mise à jour réseau est appliquée.
* *state* - entier non signé; Statut actuel de mise à jour réseau : 0 (il semble y avoir une mise à jour du réseau), 1 (une mise à jour logicielle est nécessaire pour suivre la mise à jour du réseau) ou 2 (tout va bien).
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *threshold* - entier non signé; Pourcentage de vote minimum nécessaire pour déclencher la mise à jour du réseau. 80 par défaut.
* *version* - entier non signé; La verion de bloc majeure pour cette mise mise à jour réseau.
* *votes* - entier non signé; Nombre de votes en faveur de la mise à jour réseau.
* *voting* - entier non signé; Statut du vote de la mise à jour réseau
* *window* - entier non signé; Nombre de blocs sur lesquels les votes actuels sont diffusés. 10080 blocs par défaut.

Exemple :

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


### **set_bans**

Bannir un autre nœud par son IP.

Alias : *Aucun*.

Entrées :

* *bans* - Une liste de nœuds à bannir :
  * *host* - chaîne de caractères; Hôte à bannir (IP au format A.B.C.D - supportera des adresses I2P à l'avenir).
  * *ip* - entier non signé; Adresse IP à bannir, sous forme d'entier.
  * *ban* - booléen; Spécifier `true` pour bannir.
  * *seconds* - entier non signé; Nombre de secondes pendant lesquelles bannir le nœud.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Examples:

**bannir par hôte**

Dans l'exemple ci-dessous, un hôte est banni avec son adresse IP sous la forme d'une chaîne de caractères A.B.C.D :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_bans","params":{"bans":[{"host":"192.168.1.51","ban":true,"seconds":30}]}}' -H  'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```

**bannir par ip**

Dans l'exemple ci-dessous, une adresse IP au format entier est bannie :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_bans","params":{"bans":[{"ip":838969536,"ban":true,"seconds":30}]}}' -H  'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```


### **get_bans**

Obtenir la liste des IPs bannies.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *bans* - Liste des nœuds bannis :
  * *host* - chaîne de caractères; Hôte banni (IP au format A.B.C.D).
  * *ip* - entier non signé; Adresse IP bannie, au format entier.
  * *seconds* - entier non signé; Temps Unix local jusqu'auquel cette IP est bannie.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_bans"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "bans": [{
      "host": "102.168.1.51",
      "ip": 855746662,
      "seconds": 22
    },{
      "host": "192.168.1.50",
      "ip": 838969536,
      "seconds": 28
    }],
    "status": "OK"
  }
}
```


### **flush_txpool**

Vide le pool de transactions de certains ids de tx.

Alias : *Aucun*.

Entrées :

* *txids* - liste de chaînes de caractères; Optionnel, liste d'IDs de transactions à vider du pool (tous les ids de tx sont vidés si vide).

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"flush_txpool","params":{"txids":["dc16fa8eaffe1484ca9014ea050e13131d3acf23b419f33bb4cc0b32b6c49308",""]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```

### **get_output_histogram**

Obtenir un histogramme des montant des sorties. Pour tous les montants (pouvant être filtrés par les paramètres), fournit le nombre de sorties sur la chaîne pour chaque montant.
Les sorties des transactions confidentielles de cercle comptent comme un montant de 0.

Entrées :

* *amounts* - liste d'entiers non signés
* *min_count* - entier non signé
* *max_count* - entier non signé
* *unlocked* - booléen
* *recent_cutoff* - entier non signé

Sorties :

* *histogram* - liste d'entrées de l'histogramme, avec la structure suivante :
  * *amount* - entier non signé; Montant des sorties en @unités-atomiques
  * *total_instances* - entier non signé;
  * *unlocked_instances* - entier non signé;
  * *recent_instances* - entier non signé;
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_output_histogram","params":{"amounts":[20000000000]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "histogram": [{
      "amount": 20000000000,
      "recent_instances": 0,
      "total_instances": 381458,
      "unlocked_instances": 0
    }],
    "status": "OK",
    "untrusted": false
  }
}
```


### **get_coinbase_tx_sum**

Obtenir la somme des montants des transactions de la base de la pièce et des frais des n derniers blocs en débutant à une certaine hauteur.

Alias : *Aucun*.

Entrées :

* *height* - entier non signé; Hauteur de bloc à partir de laquelle récupérer les montants.
* *count* - entier non signé; Nombre de bloc à inclure dans la somme.

Sorties :

* *emission_amount* - entier non signé; Montant des récompenses de la base de la pièce en @unités-atomiques
* *fee_amount* - entier non signé; Montant des frais en @unités-atomiques
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_coinbase_tx_sum","params":{"height":1563078,"count":2}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "emission_amount": 9387854817320,
    "fee_amount": 83981380000,
    "status": "OK"
  }
}
```


### **get_version**

Indique la version actuelle du nœud

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).
* *version* - entier non signé;

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_version"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "untrusted": false,
    "version": 65555
  }
}
```


### **get_fee_estimate**

Donne une estimation des frais par kO.

Alias : *Aucun*.

Entrées :

* *grace_blocks* - entier non signé; Optionnel

Sorties :

* *fee* - entier non signé; Montant estimé des frais par kO en @unités-atomiques
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_fee_estimate"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "fee": 187610000,
    "status": "OK",
    "untrusted": false
  }
}
```


### **get_alternate_chains**

Affiche les chaînes alternatives vues par le nœud

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *chains* - liste de chains, La structure suivante :
  * *block_hash* - chaîne de caractères; Le hachage de bloc du premier bloc divergeant de cette chaîne alternative.
  * *difficulty* - entier non signé; La difficulté cumulée de tous les blocs de cette chaîne alternative.
  * *height* - entier non signé; La hauteur de bloc du premier bloc divergeant de cette chaîne alternative.
  * *length* - entier non signé; La longueur en blocs de cette chaîne alternative, après divergence.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_alternate_chains"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "chains": [{
      "block_hash": "697cf03c89a9b118f7bdf11b1b3a6a028d7b3617d2d0ed91322c5709acf75625",
      "difficulty": 14114729638300280,
      "height": 1562062,
      "length": 2
    }],
    "status": "OK"
  }
}
```


### **relay_tx**

Relaye une liste d'IDs de transactions.

Alias : *Aucun*.

Entrées :

* *txids* - Liste de chaîne de caractères; Liste d'IDs de transactions à relayer.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"relay_tx","params":{"txids":[9fd75c429cbe52da9a52f2ffc5fbd107fe7fd2099c0d8de274dc8a67e0c98613]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```


### **sync_info**

Obtenir les informations de synchronisation.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *height* - entier non signé;
* *peers* - liste de structures d'homologues, définies comme suit :
  * *info* - structure d'information de connexion, comme définit dans [get_connections](#get_connections)
* *spans* - liste de structure de plages, définies comme suit (optionnelle, absente si le nœud est totalement synchronisé) :
  * *connection_id* - chaîne de caractères; ID de connexion.
  * *nblocks* - entier non signé; Nombre de blocs dans cette plage.
  * *rate* - entier non signé; Débit de connexion.
  * *remote_address* - chaîne de caractères; Adresse de l'homologue à partir duquel le nœud télécharge (ou a téléchargé) cette plage.
  * *size* - entier non signé; Nombre total d'octets dans les blocs de cette plage (comprenant les transactions).
  * *speed* - entier non signé; Vitesse de la connexion.
  * *start_block_height* - entier non signé; Hauteur de bloc du premier bloc de cette plage.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *target_height* - entier non signé; Hauteur de bloc cible vers laquelle le nœud se synchronise (optionnel, absent si le nœud est totalement synchronisé).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sync_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "height": 1563543,
    "peers": [{
      "info": {
        "address": "70.109.53.128:60064",
        "avg_download": 0,
        "avg_upload": 5,
        "connection_id": "204067223b9b3415c265dd25ad29ee48",
        "current_download": 0,
        "current_upload": 1,
        "height": 1559975,
        "host": "70.109.53.128",
        "incoming": true,
        "ip": "70.109.53.128",
        "live_time": 38,
        "local_ip": false,
        "localhost": false,
        "peer_id": "96b8545dbc7a8866",
        "port": "60064",
        "recv_count": 1580,
        "recv_idle_time": 28,
        "send_count": 203603,
        "send_idle_time": 8,
        "state": "state_normal",
        "support_flags": 1
      }
    },{
      "info": {
        ...
      }
    },{
      ...
    },{
      ...
    },{
      ...
    }],
    "status": "OK",
    "target_height": 1564067
  }
}
```


### **get_txpool_backlog**

Obtenir toutes les transactions en retard du pool.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *backlog*: liste de structures *tx_backlog_entry* (au format binaire) :
  * *blob_size* - entier non signé (au format binaire)
  * *fee* - entier non signé (au format binaire)
  * *time_in_pool* - entier non signé (au format binaire)
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_txpool_backlog"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "backlog": "...Binary...",
    "status": "OK",
    "untrusted": false
  }
}
```


### **get_output_distribution**



Alias : *Aucun*.

Entrées :

* *amounts* - liste d'entier non signé; Montants à rechercher.
* *cumulative* - booléen; (optionnel, `false` par défaut) Indique si le résultat doit être cumulatif (`true`) ou non (`false`).
* *from_height* - entier non signé; (optionnel, 0 par défaut) Hauteur de bloc de départ à partir de laquelle vérifier.
* *to_height* - entier non signé; (optionnel, 0 par défaut) Hauteur de bloc de fin jusqu'à laquelle vérifier.

Sorties :

* *distributions* - liste de structure distribution comme suit :
  * *amount* - entier non signé
  * *base* - entier non signé
  * *distribution* - liste d'entier non signé
  * *start_height* - entier non signé
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_output_distribution","params":{"amounts":[628780000],"from_height":1462078}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "distributions": [{
      "amount": 2628780000,
      "base": 0,
      "distribution": "",
      "start_height": 1462078
    }],
    "status": "OK"
  }
}
```


---

## Autres appels RPC du Démon

Tous les appels RPC du démon n'utilisent pas l'interface JSON. Cette rubrique donne des exemples de ces appels.

La structure de données pour ces appels diffère de celle des appels JSON RPC. Alors que les méthodes JSON RPC sont appellées en utilisant l'extension `/json_rpc` et en spécifiant une méthode, ces méthodes sont appelées avec leurs propres extensions. Par exemple :

    IP=127.0.0.1
    PORT=18081
    METHOD='gettransactions'
	PARAMS='{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}'
	curl \
		-X POST http://$IP:$PORT/$METHOD \
		-d $PARAMS \
		-H 'Content-Type: application/json'

Remarque : Il est recommandé d'utiliser JSON RPC lorsque l'alternative existe, plutôt que les méthodes suivantes. Par exemple, la méthode recommandée pour obtenir la hauteur d'un nœud est via la méthode JSON RPC [get_info](#getinfo) ou [get_last_block_header](#get_last_block_header), plutôt que [getheight](#getheight) ci-dessous.

Pour les appels qui se terminent par **.bin**, les données sont échangées sous forme d'objets sérialisés binaire, comme définit dans le [Core RPC Server](https://github.com/monero-project/monero/blob/master/src/rpc/core_rpc_server_commands_defs.h).


### **/get_height**

Obtenir la hauteur actuelle du nœud.

Alias : */getheight*.

Entrées : *Aucune*.

Sorties :

* *height* - entier non signé; Longueur actuelle de la plus longue chaîne connue du démon.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

```
$ curl -X POST http://127.0.0.1:18081/get_height -H 'Content-Type: application/json'

{
  "height": 1564055,
  "status": "OK",
  "untrusted": false
}
```



### **/get_blocks.bin**

Récupère toutes les infos des blocs. Requête binaire.

Alias : */getblocks.bin*.

Entrées :

* *block_ids* - liste binaire de hashes; Les 10 premiers blocs sont attendus séquentiellement, les suivant par décalage de puissance de 2, comme 2, 4, 8, 16, 32, 64 et ainsi de suite, et le dernier est toujours le bloc de genèse.
* *start_height* - entier non signé
* *prune* - booléen

Sorties :

* *blocks* - liste d'entrées de bloc complets
* *current_height* - entier non signé
* *output_indices* - structure comme suit :
  * *indices* - liste d'indice de sorties de transactions, structure comme suit :
    * *indices* - liste d'entier non signé
* *start_height* - entier non signé
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

<!-- Cannot get this working
Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_blocks.bin -d '{"block_ids":["d109a406528a7b44fef8bc03e75eaabb0f919f852884b43b550b8b3be80a49e7"],"start_height":1562062}' -H 'Content-Type: application/json'

```
--->

### **/get_blocks_by_height.bin**

Obtenir des blocs par leur heuteur. Requête binaire.

Alias : */getblocks_by_height.bin*.

Entrées :

* *heights* - liste d'entier non signé; Liste de hauteurs de blocs.

Sorties :

* *blocks* - liste d'entrées de bloc complets
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

<!-- Cannot get this working
Exemple :

```
$ echo -e '\x7B\x22\x68\x65\x69\x67\x68\x74\x73\x22\x3A\x5B\x31\x35\x36\x34\x32\x34\x36\x5D\x7D\x' | curl -X POST --data-binary @- http://127.0.0.1:18081/get_blocks_by_height.bin
$ echo -e '1564246' | curl -X POST --data-binary @- http://127.0.0.1:18081/get_blocks_by_height.bin
curl -X POST http://127.0.0.1:18081/get_blocks_by_height.bin --data-binary '{"heights":[1564246]}'

```
--->


### **/get_hashes.bin**

Récupérer des hachages. Requête binaire.

Alias : */gethashes.bin*.

Entrées :

* *block_ids* - liste binaire de hachages; Les 10 premiers blocs sont attendus séquentiellement, les suivant par décalage de puissance de 2, comme 2, 4, 8, 16, 32, 64 et ainsi de suite, et le dernier est toujours le bloc de genèse.
* *start_height* - entier non signé

Sorties :

* *current_height* - entier non signé
* *m_block_ids* - liste binaire de hachages; Voir *block_ids* ci-dessus.
* *start_height* - entier non signé
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

<!-- Cannot get this working
Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_hashes.bin -d '{"block_ids":["d109a406528a7b44fef8bc03e75eaabb0f919f852884b43b550b8b3be80a49e7"],"start_height":1562062}' -H 'Content-Type: application/json'

```
--->


### **/get_o_indexes.bin**

Obtenir les sorties de transactions. Requête binaire.

Alias : *Aucun*.

Entrées :

* *txid* - ID de transaction binaire

Sorties :

* *o_indexes* - liste d'entier non signé; Liste d'indexes de sorties
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

<!-- Cannot get this working
Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_o_indexes.bin --data-binary '{"txid":"d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"}'

```
--->


### **/get_outs.bin**

Obtenir des sorties. Requête binaire.

Alias : *Aucun*.

Entrées :

* *outputs* - liste de structure *get_outputs_out* comme suit :
  * *amount* - entier non signé;
  * *index* - entier non signé;

Sorties :

* *outs* - liste de structure *outkey* comme suit :
  * *amount* - entier non signé; Montant.
  * *height* - entier non signé; Hauteur de bloc pour la sortie.
  * *key* - La clef publique de la sortie.
  * *mask*
  * *txid* - ID de transaction.
  * *unlocked* - booléen; Indique si la sortie est verrouillée (`false`) ou non (`true`)
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

<!-- Cannot get this working
Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_o_indexes.bin --data-binary '{"txid":"d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"}'

```
--->


### **/get_transactions**

Recherche une ou plusieurs transactions par hachage.

Alias : */gettransactions*.

Entrées :

* *txs_hashes* - chaîne de caractères list; Liste de hachages de transactions à rechercher.
* *decode_as_json* - booléen; Optionnel (`false` par défaut). Si positionné à `true`, les informations de transactions retournées seront décodées plutôt que binaires.
* *prune* - booléen; Optionnel (`false` par défaut).

Sorties :

* *missed_tx* - liste de chaîne de caractères. (Optionnel - retourné si non vide) Hachages de transactions qui sont introuvables.
* *status* - Code erreur général RPC. "OK" signifie que tout va bien.
* *txs* - liste de structure *entry* comme suit :
  * *as_hex* - chaîne de caractères; Information de transaction complète sous forme de chaîne de caractères hexadécimale.
  * *as_json* - chaîne de caractères json; Liste d'informations de transaction :
    * *version* - Version de la transaction.
    * *unlock_time* - Si différent de 0, indique quand la sortie de la transaction pourra être dépensée.
    * *vin* - Liste d'entrées de la transaction :
      * *key* - La clef publique de la précédente sortie dépensée dans cette transaction.
        * *amount* - Le montant de cette entrée, en @unités-atomiques.
        * *key_offsets* - Une liste de décalage d'entiers pour cette entrée.
        * *k_image* - L'image clef de cette entrée.
    * *vout* - Liste de sorties de la transaction :
      * *amount* - Montant de la sortie, en @unités-atomiques.
      * *target* - Informations de destination de la sortie :
        * *key* - La clef furtive du destinataire. Quiconque possède la clef privée associée à cette clef contrôle cette sortie de transaction.
    * *extra* - Habituellement appelé "ID de paiement", mais peut être utiliser pour inclure n'importe quelle valeur de 32 octets.
    * *signatures* - Liste de signatures utilisés dans les signatures de cercle pour masquer l'origine réelle de la transaction.
  * *block_height* - entier non signé; Hauteur de bloc incluant cette transaction.
  * *block_timestamp* - entier non signé; Temps Unix auquel ce bloc a été ajouté à la chaîne de blocs.
  * *double_spend_seen* - booléen; Indique si la transaction est une double-dépense (`true`) ou non (`false`)
  * *in_pool* - booléen; indique si la transaction est dans le pool (`true`) ou incluse dans un bloc (`false`)
  * *output_indices* - liste d'entier non signé; Indexes de transactions.
  * *tx_hash* - chaîne de caractères; Hachage de la transaction
* *txs_as_hex* - chaîne de caractères; Informations complètes de transactions sous forme de chaîne de caractères hexadécimale (ancien paramètre de compatibilité).
* *txs_as_json* - json chaîne de caractères; (Optionnel - retourné si définit en entré. Ancien paramètre de compatibilité) Liste de transactions comme dans *as_json* ci-dessus.

Exemple 1 : Renvoyer les informations de transaction au format binaire.

```
$ curl -X POST http://127.0.0.1:18081/get_transactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}' -H 'Content-Type: application/json'

{
  "status": "OK",
  "txs": [{
    "as_hex": "...",
    "as_json": "",
    "block_height": 993442,
    "block_timestamp": 1457749396,
    "double_spend_seen": false,
    "in_pool": false,
    "output_indices": [198769,418598,176616,50345,509],
    "tx_hash": "d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"
  }],
  "txs_as_hex": ["..."],
  "untrusted": false
}
```

Exemple 2 : Décoder les informations de transaction renvoyées au format JSON. Remarque : les liste "vin", "vout" et "signatures" sont tronquées dans la réponse présenté par soucis d'espace.

```
$ curl -X POST http://127.0.0.1:18081/get_transactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"],"decode_as_json":true}' -H 'Content-Type: application/json'

{
  "status": "OK",
  "txs": [{
    "as_hex": "...",
    "as_json": "{\n  \"version\": 1, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 9999999999, \n        \"key_offsets\": [ 691\n        ], \n        \"k_image\": \"6ebee1b651a8da723462b4891d471b990ddc226049a0866d3029b8e2f75b7012\"\n      }\n    }, {\n      \"key\": {\n        \"amount\": 9000000000000, \n        \"key_offsets\": [ 175760\n        ], \n        \"k_image\": \"200bd02b70ee707441a8863c5279b4e4d9f376dc97a140b1e5bc7d72bc508069\"\n      }\n    }, ... \n  ], \n  \"vout\": [ {\n      \"amount\": 60000000000, \n      \"target\": {\n        \"key\": \"8c792dea94dab48160e067fb681edd6247ba375281fbcfedc03cb970f3b98e2d\"\n      }\n    }, {\n      \"amount\": 700000000000, \n      \"target\": {\n        \"key\": \"1ab33e69737e157d23e33274c42793be06a8711670e73fa10ecebc604f87cc71\"\n      }\n    }, ... \n  ], \n  \"extra\": [ 1, 3, 140, 109, 156, 205, 47, 148, 153, 9, 17, 93, 83, 33, 162, 110, 152, 1, 139, 70, 121, 19, 138, 10, 44, 6, 55, 140, 242, 124, 143, 219, 172\n  ], \n  \"signatures\": [ \"fd82214a59c99d9251fa00126d353f9cf502a80d8993a6c223e3c802a40ab405555637f495903d3ba558312881e586d452e6e95826d8e128345f6c0a8f9f350e\", \"8c04ef50cf34afa3a9ec19c457143496f8cf7045ed869b581f9efa2f1d65e30f1cec5272b00e9c61a34bdd3c78cf82ae8ef4df3132f70861391069b9c255cd08\", ... ]\n}",
    "block_height": 993442,
    "block_timestamp": 1457749396,
    "double_spend_seen": false,
    "in_pool": false,
    "output_indices": [198769,418598,176616,50345,509],
    "tx_hash": "d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"
  }],
  "txs_as_hex": ["..."],
  "txs_as_json": ["{\n  \"version\": 1, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 9999999999, \n        \"key_offsets\": [ 691\n        ], \n        \"k_image\": \"6ebee1b651a8da723462b4891d471b990ddc226049a0866d3029b8e2f75b7012\"\n      }\n    }, {\n      \"key\": {\n        \"amount\": 9000000000000, \n        \"key_offsets\": [ 175760\n        ], \n        \"k_image\": \"200bd02b70ee707441a8863c5279b4e4d9f376dc97a140b1e5bc7d72bc508069\"\n      }\n    }, ... \n  ], \n  \"vout\": [ {\n      \"amount\": 60000000000, \n      \"target\": {\n        \"key\": \"8c792dea94dab48160e067fb681edd6247ba375281fbcfedc03cb970f3b98e2d\"\n      }\n    }, {\n      \"amount\": 700000000000, \n      \"target\": {\n        \"key\": \"1ab33e69737e157d23e33274c42793be06a8711670e73fa10ecebc604f87cc71\"\n      }\n    }, ... \n  ], \n  \"extra\": [ 1, 3, 140, 109, 156, 205, 47, 148, 153, 9, 17, 93, 83, 33, 162, 110, 152, 1, 139, 70, 121, 19, 138, 10, 44, 6, 55, 140, 242, 124, 143, 219, 172\n  ], \n  \"signatures\": [ \"fd82214a59c99d9251fa00126d353f9cf502a80d8993a6c223e3c802a40ab405555637f495903d3ba558312881e586d452e6e95826d8e128345f6c0a8f9f350e\", \"8c04ef50cf34afa3a9ec19c457143496f8cf7045ed869b581f9efa2f1d65e30f1cec5272b00e9c61a34bdd3c78cf82ae8ef4df3132f70861391069b9c255cd08\", ... ]\n}"],
  "untrusted": false
}
```

Exemple 3 : Renvoie une transaction manquante (inexistante).

```
curl -X POST http://127.0.0.1:18081/get_transactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090409"]}' -H 'Content-Type: application/json'

{
  "missed_tx": ["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090409"],
  "status": "OK",
  "untrusted": false
}
```


### **/get_alt_blocks_hashes**

Obtenir les hachages de blocs connus qui ne sont pas sur la chaîne principale.

Alias : *Aucun*.

Entrées : *Aucune*

Sorties :

* *blks_hashes* - liste de chaînes de caractères; liste des hachages de blocs alternatifs à la chaîne principale.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_alt_blocks_hashes -H 'Content-Type: application/json'

{
  "blks_hashes": ["9c2277c5470234be8b32382cdf8094a103aba4fcd5e875a6fc159dc2ec00e011","637c0e0f0558e284493f38a5fcca3615db59458d90d3a5eff0a18ff59b83f46f","6f3adc174a2e8082819ebb965c96a095e3e8b63929ad9be2d705ad9c086a6b1c","697cf03c89a9b118f7bdf11b1b3a6a028d7b3617d2d0ed91322c5709acf75625","d99b3cf3ac6f17157ac7526782a3c3b9537f89d07e069f9ce7821d74bd9cad0e","e97b62109a6303233dcd697fa8545c9fcbc0bf8ed2268fede57ddfc36d8c939c","70ff822066a53ad64b04885c89bbe5ce3e537cdc1f7fa0dc55317986f01d1788","b0d36b209bd0d4442b55ea2f66b5c633f522401f921f5a85ea6f113fd2988866"],
  "status": "OK",
  "untrusted": false
}
```


### **/is_key_image_spent**

Vérifie si des sorties ont été dépensées en utilisant l'image clef associé à la sortie.

Alias : *Aucun*.

Entrées :

* *key_images* - liste de chaîne de caractères; Liste de chaîne de caractères hexadécimales d'image clef à vérifier.

Sorties :

* *spent_status* - entier non signé list; Liste des statut pour chaque image vérifiée. Les statut sont les suivants : 0 = non dépensé, 1 = dépensé sur la chaîne de blocs, 2 = dépensé dans le pool de transactions.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/is_key_image_spent -d '{"key_images":["8d1bd8181bf7d857bdb281e0153d84cd55a3fcaa57c3e570f4a49f935850b5e3","7319134bfc50668251f5b899c66b005805ee255c136f0e1cecbb0f3a912e09d4"]}' -H 'Content-Type: application/json'

{
  "spent_status": [1,2],
  "status": "OK"
  "untrusted": false
}
```


### **/send_raw_transaction**

Transmettre une transaction brute sur le réseau.

Alias : */sendrawtransaction*.

Entrées :

* *tx_as_hex* - chaîne de caractères; Information complète de transaction sous forme de chaîne de caractères hexadécimale.
* *do_not_relay* - booléen; Empêche de relayer la transaction aux autres nœuds (`false` par défaut).

Sorties :

* *double_spend* - booléen; La transaction est une double dépense (`true`) ou non (`false`).
* *fee_too_low* - booléen; Les frais sont trop faibles (`true`) ou OK (`false`).
* *invalid_input* - booléen; L'entrée est invalide (`true`) ou valide (`false`).
* *invalid_output* - booléen; La sortie est invalide (`true`) ou valide (`false`).
* *low_mixin* - booléen; Le nombre de mixage est trop faible (`true`) ou OK (`false`).
* *not_rct* - booléen; La transaction est une transaction de cercle standard (`true`) ou une transaction confidentielle de cercle (`false`).
* *not_relayed* - booléen; La transaction n'a pas été relayée (`true`) ou relayée (`false`).
* *overspend* - booléen; La transaction utilise plus d'argent que disponible (`true`) ou non (`false`).
* *reason* - chaîne de caractères; Informations complémentaires. Actuellement vide, ou "Non relayée" si la transaction a été acceptée mais pas relayée.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.
* *too_big* - booléen; La taille de la transaction est trop importante (`true`) ou OK (`false`).
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).


Exemple (Pas de retour d'informations inclus ici.) :


```
$ curl -X POST http://127.0.0.1:18081/send_raw_transaction -d '{"tx_as_hex":"de6a3...", "do_not_relay":false}' -H 'Content-Type: application/json'
```


### **/start_mining**

Démarrer l'extraction minière sur le démon.

Alias : *Aucun*.

Entrées :

* *do_background_mining* - booléen;  Indique si l'extraction minière doit avoir lieux en arrière plan (`true`) ou au premier plan (`false`).
* *ignore_battery* - booléen; Indique si l'état de la batterie (sur PC portable) doit être ignorée (`true`) ou non (`false`).
* *miner_address* - chaîne de caractères; Adresse de compte sur laquelle miner.
* *threads_count* - entier non signé; Nombre de processus d'extraction minière à lancer.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/start_mining -d '{"do_background_mining":false,"ignore_battery":true,"miner_address":"47xu3gQpF569au9C2ajo5SSMrWji6xnoE5vhr94EzFRaKAGw6hEGFXYAwVADKuRpzsjiU1PtmaVgcjUJF89ghGPhUXkndHc","threads_count":1}' -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/stop_mining**

Arrête l'extraction minière sur le démon.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/stop_mining -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/mining_status**

Obtenir l'état de l'extraction minière du démon.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *active* - booléen; Indique si l'extraction minière est activée (`true`) ou désactivée (`false`).
* *address* - chaîne de caractères; Adresse de compte sur laquelle le démon mine. Vide en l'abscence d'extraction minière.
* *is_background_mining_enabled* - booléen; Indique si l'extraction minière fonctionne en arrière plan (`true`) ou au premier plan (`false`).
* *speed* - entier non signé; Puissance d'extraction minière en hachages par secondes.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.
* *threads_count* - entier non signé; Nombre de processus d'extraction minière actifs.

Exemple pendant l'extraction minière :

```
$ curl -X POST http://127.0.0.1:18081/mining_status -H 'Content-Type: application/json'

{
  "active": true,
  "address": "47xu3gQpF569au9C2ajo5SSMrWji6xnoE5vhr94EzFRaKAGw6hEGFXYAwVADKuRpzsjiU1PtmaVgcjUJF89ghGPhUXkndHc",
  "is_background_mining_enabled": false,
  "speed": 20,
  "status": "OK",
  "threads_count": 1
}
```

Exemple hors extraction minière :

```
$ curl -X POST http://127.0.0.1:18081/mining_status -H 'Content-Type: application/json'

{
  "active": false,
  "address": "",
  "is_background_mining_enabled": false,
  "speed": 0,
  "status": "OK",
  "threads_count": 0
}
```


### **/save_bc**

Sauvegarde la chaîne de bloc. La chaîne de bloc n'a pas besoin d'être sauvegardée et est toujours sauvegardée lorsqu'elle est modifiée, mais cela force à vider le cache du système de fichier sur le disque pour des besoins de sécurité lors de défaillances du système d'exploitation ou du matériel.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/save_bc -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/get_peer_list**

Obtenir la liste des homologues connus.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *gray_list* - liste d'homologues hors-ligne (structure *peer*) comme suit :
  * *host* - entier non signé; Adresse IP sous forme d'entier.
  * *id* - chaîne de caractères; ID de l'homologue
  * *ip* - entier non signé; Adresse IP sous forme d'entier.
  * *last_seen* - entier non signé; Temps Unix auquel l'homologue a été vu pour la dernière fois.
  * *port* - entier non signé; Port TCP que l'homologue utilise pour se connecter au réseau Monero.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.
* *white_list* - liste d'homologues en ligne (structure *peer*), comme ci-dessus.

Exemple (listes tronquées):

```
$ curl -X POST http://127.0.0.1:18081/get_peer_list -H 'Content-Type: application/json'

{
  "gray_list": [{
    "host": "640304833",
    "id": 5345237316225602120,
    "ip": 640304833,
    "last_seen": 1525540510,
    "port": 18080
  },{
    "host": "2183731038",
    "id": 14955030573998424430,
    "ip": 2183731038,
    "last_seen": 1525540499,
    "port": 28080
  }, ...
  ],
  "status": "OK",
  "white_list": [{
    "host": "1221637955",
    "id": 10354694710033118926,
    "ip": 1221637955,
    "last_seen": 1525540511,
    "port": 18080
  },{
    "host": "1780407354",
    "id": 17193661050352240890,
    "ip": 1780407354,
    "last_seen": 1525540510,
    "port": 18080
  }, ...
  ]
}
```


### **/set_log_hash_rate**

Définir le mode d'affichage du taux de hachage dans les journaux.

Alias : *Aucun*.

Entrées :

* *visible* - booléen; Indique si le taux de hachage doit être visible (`true`) ou masqué (`false`) dans les journaux.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.

Exemple pendant l'extraction minière :

```
$ curl -X POST http://127.0.0.1:18081/set_log_hash_rate -d '{"visible":true}' -H 'Content-Type: application/json'

{
  "status": "OK"
}
```

Erreur en l'absence d'extraction minière:

```
$ curl -X POST http://127.0.0.1:18081/set_log_hash_rate -d '{"visible":true}' -H 'Content-Type: application/json'

{
  "status": "NOT MINING"
}
```


### **/set_log_level**

Définir le niveau de journalisation du démon.
Par défaut, le niveau de journalisation est définit à `0`.

Alias : *Aucun*.

Entrées :

* *level* - integer; Niveau de journalisation du démon à positionner de `0` (le moins verbeux) à `4` (le plus verbeux)

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/set_log_level -d '{"level":1}' -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/set_log_categories**

Définir les catégories de journalisation du démon.
Les catégories sont présentées sous forme d'une liste séparé par des virgules de `<Catégorie>:<niveau>` (de manière analogue au standard syslog `<Facility>:<Severity-level>`), où :
* *Categorie*  est l'une des suivantes :
  * *\** - Toutes catégories
  * *default*
  * *net*
  * *net.http*
  * *net.p2p*
  * *logging*
  * *net.throttle*
  * *blockchain.db*
  * *blockchain.db.lmdb*
  * *bcutil*
  * *checkpoints*
  * *net.dns*
  * *net.dl*
  * *i18n*
  * *perf*
  * *stacktrace*
  * *updates*
  * *account*
  * *cn*
  * *difficulty*
  * *hardfork*
  * *miner*
  * *blockchain*
  * *txpool*
  * *cn.block_queue*
  * *net.cn*
  * *daemon*
  * *debugtools.deserialize*
  * *debugtools.objectsizes*
  * *device.ledger*
  * *wallet.gen_multisig*
  * *multisig*
  * *bulletproofs*
  * *ringct*
  * *daemon.rpc*
  * *wallet.simplewallet*
  * *WalletAPI*
  * *wallet.ringdb*
  * *wallet.wallet2*
  * *wallet.rpc*
  * *tests.core*
* *niveau* est l'un des suivants :
  * *FATAL* - niveau le plus élevé
  * *ERROR*
  * *WARNING*
  * *INFO*
  * *DEBUG*
  * *TRACE* - niveau le plus faible
Un niveau contient automatiquement les niveaux les plus élevés.
Par défaut, les catégories sont définies à `*:WARNING,net:FATAL,net.p2p:FATAL,net.cn:FATAL,global:INFO,verify:FATAL,stacktrace:INFO,logging:INFO,msgwriter:INFO`.
Définir les catégories à "" empêche toute journalisation de logs.

Alias : *Aucun*.

Entrées :

* *categories* - chaîne de caractères; Optionnelle, Catégories de journalisation du démon à activer.

Sorties :

* *categories* - chaîne de caractères; Catégories de journalisation du démon activées.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien. Any other value means that something went wrong.

Example pour activer toutes les catégories au niveau `Info` :

```
$ curl -X POST http://127.0.0.1:18081/set_log_categories -d '{"categories": "*:INFO"}' -H 'Content-Type: application/json'

{
  "categories": "*:INFO",
  "status": "OK"
}
```

Exemple sans entrée pour définir les catégories par défaut :

```
$ curl -X POST http://127.0.0.1:18081/set_log_categories -H 'Content-Type: application/json'

{
  "categories": "*:WARNING,net:FATAL,net.p2p:FATAL,net.cn:FATAL,global:INFO,verify:FATAL,stacktrace:INFO,logging:INFO,msgwriter:INFO",
  "status": "OK"
}
```


### **/get_transaction_pool**

Montre les informations à propos des transactions valides vue par le nœud mais pas encore minées dans un bloc, de même que les informations d'images clefs pour le pool de transaction en mémoire dans le nœud.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *spent_key_images* - Liste d'images clefs de sorties dépensées :
  * *id_hash* - chaîne de caractères; Image clef.
  * *txs_hashes* - liste de chaîne de caractères; Hachages de transaction des transactions (Habituellement une) dépensant cette image clef.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *transactions* - Liste des transaction en mémoire dans le pool qui ne sont pas encore dans un bloc sur la chaîne principale :
  * *blob_size* - entier non signé; La taille de la forme de la transaction complète.
  * *double_spend_seen* - booléen; Indique si cette transaction a été vue comme double dépense.
  * *do_not_relay*; booléen; Indique si la transaction doit être relayée.
  * *fee* - entier non signé; Le montant des frais d'extraction minière inclus dans la transaction, en @unités-atomiques.
  * *id_hash* - chaîne de caractères; Le hachage d'ID de transaction.
  * *kept_by_block* - booléen; Indique si la transaction a été incluse dans un bloc au moins une fois (`true`) ou non (`false`).
  * *last_failed_height* - entier non signé; Si la validation de la transaction à déjà échouée, cela indique à quelle hauteur cela c'est produit.
  * *last_failed_id_hash* - chaîne de caractères; Comme précédemment, cela indique le hachage d'ID de la précédente transaction.
  * *last_relayed_time* - entier non signé; Dernier temps Unix auquel la transaction a été relayé.
  * *max_used_block_height* - entier non signé; Indique la hauteur du bloc le plus récent avec une sortie utilisé dans cette transaction.
  * *max_used_block_hash* - chaîne de caractères; Indique le hachage du bloc le plus récent avec une sortie utilisé dans cette transaction.
  * *receive_time* - entier non signé; Le temps Unix auquel la transaction a été vue pour la première fois sur le réseau par le nœud.
  * *relayed* - booléen; Indique si la transaction a été relayée.
  * *tx_blob* - entier non signé; Forme hexadécimale représentant la transaction.
  * *tx_json* - chaîne de caractères json; Structure JSON de toutes les informations dans la transaction :
    * *version* - Version de la transaction
    * *unlock_time* - Si différent de 0, indique quand la sortie de la transaction pourra être dépensée.
    * *vin* - Liste d'entrées de la transaction :
      * *key* - La clef publique de la précédente sortie dépensée dans cette transaction.
        * *amount* - Le montant de cette entrée, en @unités-atomiques.
        * *key_offsets* - Une liste de décalage d'entiers pour cette entrée.
        * *k_image* - L'image clef de cette entrée.
    * *vout* - Liste de sorties de la transaction :
      * *amount* - Montant de la sortie, en @unités-atomiques.
      * *target* - Informations de destination de la sortie :
        * *key* - La clef furtive du destinataire. Quiconque possède la clef privée associée à cette clef contrôle cette sortie de transaction.
    * *extra* - Habituellement appelé "ID de paiement", mais peut être utiliser pour inclure n'importe quelle valeur de 32 octets.
    * *rct_signatures* - Signatures de cercle :
      * *type*
      * *txnFee*
      * *ecdhInfo* - liste de structures de courbes elliptiques Diffie Helman comme suit :
        * *mask* - Chaîne de caractères
        * *amount* - Chaîne de caractères
      * *outPk*
    * *rctsig_prunable*
      * *rangeSigs* - liste de structures comme suit :
        * *asig*
        * *Ci*
      * *MGs* - liste de structures comme suit :
        * *ss* - liste de listes de deux chaines de caractères.
        * *cc* - Chaîne de caractères

Exemple (Remarque : Certaines listes dans les informations renvoyées ont été tronquées par soucis d'espace) :

```
$ curl -X POST http://127.0.0.1:18081/get_transaction_pool -H 'Content-Type: application/json'

{
  "spent_key_images": [{
    "id_hash": "a2af919609db4ff5ab8d4ba18502e647d521760e1cbc30288f06fa87bf9a0c1c",
    "txs_hashes": ["1ee6a4873b638711795fc3b0b73fc7146505a09a7f4749534fd408d571a273cf"]
  },{
    "id_hash": "02d5f6559e9bca5ae5a335130aeeb05df2db518ab9837fa64ebbab276c100792",
    "txs_hashes": ["531aacc0ceb8514cdde5f104285202ccc3e969c77584e3c6fa614c987c583965"]
  },
  ...],
  "status": "OK",
  "transactions": [{
    "blob_size": 13193,
    "do_not_relay": false,
    "double_spend_seen": false,
    "fee": 9694360000,
    "id_hash": "f8fb875cfc9e2e59bcf96a42474c79e01d50b69e6548d445d45984f7db66e50f",
    "kept_by_block": false,
    "last_failed_height": 0,
    "last_failed_id_hash": "0000000000000000000000000000000000000000000000000000000000000000",
    "last_relayed_time": 1525615049,
    "max_used_block_height": 1564924,
    "max_used_block_id_hash": "4bae7856979f46c7de31f3fb58cac36d4dfd2765bf33f876edf33d0e05ebb4a7",
    "receive_time": 1525615049,
    "relayed": true,
    "tx_blob": " ... ",
    "tx_json": "{\n  \"version\": 2, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 0, \n        \"key_offsets\": [ 2630347, 594429, 1047509, 758973, 464501, 61971, 22268\n        ], \n        \"k_image\": \"0731363c58dd4492f031fa20c82fe6ddcb9cc070d73938afe8a5f7f77897f8b4\"\n      }\n    }\n  ], \n  \"vout\": [ {\n      \"amount\": 0, \n      \"target\": {\n        \"key\": \"f3b3dd09483616e343b9866eed50a0ce01d5c0d0f2612ce2c4d0e9cce5c218cd\"\n      }\n    }, {\n      \"amount\": 0, \n      \"target\": {\n        \"key\": \"9796f2d477a696b6282bf3cb1a41cefba0c4604eedcc2e7a44904d7033643e0e\"\n      }\n    }\n  ], \n  \"extra\": [ 1, 25, 228, 80, 5, 214, 117, 150, 9, 125, 98, 17, 113, 208, 89, 223, 242, 227, 188, 197, 141, 190, 135, 140, 152, 117, 240, 150, 21, 93, 62, 108, 124\n  ], \n  \"rct_signatures\": {\n    \"type\": 1, \n    \"txnFee\": 9694360000, \n    \"ecdhInfo\": [ {\n        \"mask\": \"645f06a2816aecf83d5041c3320eb31092b994fb2733bb74c8c47e288d452c04\", \n        \"amount\": \"3908f14d39dcb3831331cb255eeadc5b0aea0143645b9cd3034abf613995740d\"\n      }, {\n        \"mask\": \"0785b5df0a994b14d59da810503a022721d8f629720f526e15bd848ad3c2c509\", \n        \"amount\": \"fbd81cf2368dcd742905ded5287457030467aaf5bc9939e13f1d6bf8d4c8ca09\"\n      }], \n    \"outPk\": [ \"c19f5fa052859126e0eed0e3c860aadab049677b2b3dd14cc74d02f92f1d013f\", \"1581ef6368de1608ea366566b88272db220479cf215f6d88d7b60ec221d11e0a\"]\n  }, \n  \"rctsig_prunable\": {\n    \"rangeSigs\": [ {\n        \"asig\": \" ... \", \n        \"Ci\": \" .. \"\n      }, {\n        \"asig\": \" ... \", \n        \"Ci\": \" ... \"\n      }], \n    \"MGs\": [ {\n        \"ss\": [ [ \"218a10a29e0f66e5a324af67b7734708a8a4cc8f16b28acd8cda538aaa495a02\", \"b368b4e956df5808c5c257f0dc3f7eff8c28463d0bb20759d19977fa02d6f205\"], [ \"f741d2c96bc23b362b4155a03fb6f1351ab5bf4445a43b3e52ba776f526af305\", \"a10ad1ee80dce3f311dd3dc141803daeecaa4d2a25a390cd9c35e4161b7c9e0c\"],
    ...], \n        \"cc\": \"e93801b707261ca76e146fdf2085abae71ad9203a00edc843c74f4ead8a39601\"\n      }]\n  }\n}"
  },
  ...]
}
```


### **/get_transaction_pool_hashes.bin**

Obtenir les hachages depuis le pool de transactions. Requête binaire.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *tx_hashes* - liste binaire de hachages de transactions.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_transaction_pool_hashes.bin -H 'Content-Type: application/json'

{
  "status": "OK",
  "tx_hashes": " ... ",
  "untrusted": false
}
```


### **/get_transaction_pool_stats**

Obtenir les statistiques du pool de transactions.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *pool_stats* - Structure comme suit :
  * *bytes_max* - entier non signé; Taille de la plus grande transaction dans le pool.
  * *bytes_med* - entier non signé; Taille médiane des transactions dans le pool.
  * *bytes_min* - entier non signé; Taille de la plus petite transaction dans le pool.
  * *bytes_total* - entier non signé; Taille totale de toutes les transactions dans le pool.
  * *histo* - structure *txpool_histo* comme suit :
    * *txs* - entier non signé; Nombre de transactions.
    * *bytes* - entier non signé; Taille en octets.
  * *histo_98pc* entier non signé; Le moment auquel 98% des transactions sont plus récentes.
  * *num_10m* entier non signé; Nombre de transactions dans le pool depuis plus de 10 minutes.
  * *num_double_spends* entier non signé; Nombre de transaction de double dépenses.
  * *num_failing* entier non signé; Nombre de transactions en échec.
  * *num_not_relayed* entier non signé; Nombre de transactions non-relayées.
  * *oldest* entier non signé; Temps Unix de la plus ancienne transaction dans le pool.
  * *txs_total* entier non signé; Nombre total de transactions.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_transaction_pool_stats -H 'Content-Type: application/json'

{
  "pool_stats": {
    "bytes_max": 47222,
    "bytes_med": 13290,
    "bytes_min": 13092,
    "bytes_total": 449511,
    "fee_total": 289715320000,
    "histo": "\t▒'▒5▒4▒\/▒▒▒$3",
    "histo_98pc": 0,
    "num_10m": 18,
    "num_double_spends": 1,
    "num_failing": 17,
    "num_not_relayed": 0,
    "oldest": 1525457001,
    "txs_total": 26
  },
  "status": "OK",
  "untrusted": false
}
```


### **/stop_daemon**

Envoie une commande au démon pour le déconnecter et l'arrêter proprement.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/stop_daemon -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/get_info (not JSON)**

Cette méthode est fournie pour des raisons de compatibilité historique et ne doit plus être utilisée. Voir la méthode RPC JSON [get_info](#get_info) pour plus de détails.

Alias :

* */getinfo*
* *get_info*


### **/get_limit**

Obtenir les limites de bande passante du démon.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *limit_down* - entier non signé; Limite de téléchargement en kilo-octets par secondes.
* *limit_up* - entier non signé; Limite de téléversement en kilo-octets par secondes.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/get_limit -H 'Content-Type: application/json'

{
  "limit_down": 8192,
  "limit_up": 128,
  "status": "OK",
  "untrusted": false
}
```


### **/set_limit**

Définir les limites de bande passante du démon.

Alias : *Aucun*.

Entrées :

* *limit_down* - signed int; Limite de téléchargement en kilo-octets par secondes (-1 rétablit la valeur par défaut, 0 ne change pas la limite actuelle).
* *limit_up* - signed int; Limite de téléversement en kilo-octets par secondes (-1 rétablit la valeur par défaut, 0 ne change pas la limite actuelle).

Sorties :

* *limit_down* - entier non signé; Limite de téléchargement en kilo-octets par secondes.
* *limit_up* - entier non signé; Limite de téléversement en kilo-octets par secondes.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/set_limit -d '{"limit_down": 1024}' -H 'Content-Type: application/json'

{
  "limit_down": 1024,
  "limit_up": 128,
  "status": "OK"
}
```


### **/out_peers**

Limite le nombre d'homologues sortants.

Alias : *Aucun*.

Entrées :

* *out_peers* - entier non signé; Nombre maximum d'homologues sortants.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/out_peers -d '{"out_peers": 3232235535}' -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/in_peers**

Limite le nombre d'homologues entrants.

Alias : *Aucun*.

Entrées :

* *in_peers* - entier non signé; ombre maximum d'homologues entrants.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/out_peers -d '{"in_peers": 3232235535}' -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/start_save_graph**

Obsolete. Conservé ici pour référence.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/start_save_graph -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/stop_save_graph**

Obsolete. Conservé ici pour référence.

Alias : *Aucun*.

Entrées : *Aucune*.

Sorties :

* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/stop_save_graph -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/get_outs**

Obtenir des sorties.

Alias : *Aucun*.

Entrées :

* *outputs* liste de *get_outputs_out* structure comme suit :
  * *amount* - entier non signé;
  * *index* - entier non signé;

Sorties :

* *outs* - liste de structure *outkey* comme suit :
  * *height* - entier non signé; hauteur de bloc de la sortie.
  * *key* - chaîne de caractères; La clef publique de la sortie.
  * *mask* - chaîne de caractères
  * *txid* - chaîne de caractères; ID de transaction
  * *unlocked* - booléen; Indique si la sortie est verrouillée (`false`) ou non (`true`)
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *untrusted* - booléen; Indique si le résultat est obtenu en utilisant un nœud d'amorce, auquel il ne faudrait pas faire confiance (`true`), ou si le démon est totalement synchronisé (`false`).


### **/update**

Met à jour le démon.

Alias : *Aucun*.

Entrées :

* *command* - chaîne de caractères; Commande à utiliser, soit `check`, soit `download`
* *path* - chaîne de caractères; Optionnel, chemin où télécharger la mise à jour.

Sorties :

* *auto_uri* - chaîne de caractères;
* *hash* - chaîne de caractères;
* *path* - chaîne de caractères; Chemin où télécharger la mise à jour.
* *status* - chaîne de caractères; Code erreur général RPC. "OK" signifie que tout va bien.
* *update* - booléen; States if an update is available to download (`true`) ou non (`false`)
* *user_uri* - chaîne de caractères;
* *version* - chaîne de caractères; Version available for download.

Exemple :

```
$ curl -X POST http://127.0.0.1:18081/update -d '{"command":"check"}' -H 'Content-Type: application/json'

{
  "auto_uri": "",
  "hash": "",
  "path": "",
  "status": "OK",
  "update": false,
  "user_uri": "",
  "version": ""
}
```

