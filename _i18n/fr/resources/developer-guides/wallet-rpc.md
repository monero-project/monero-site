{% assign version = '2.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## Introduction

Voici une liste des appels de monero-wallet-rpc, leurs entrées et sorties, et des exemples pour chacun d'eux. Le logiciel monero-wallet-rpc remplace l'interface rpc qui était présenter dans simplewallet puis monero-wallet-cli.

Toutes les méthodes monero-wallet-rpc utilisent la même interface JSON RPC. Par exemple :

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

Si monero-wallet-rpc était exécuté avec l'option `--rpc-login` configuré à `username:password`, alors suivez cet exemple :

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

Remarque : "@atomic-units" réfère à la plus petite fraction de 1 XMR selon l'implémentation monerod. **1 XMR = 1e12 unités atomiques**

Cette liste à été mise à jour sur un code gelé le 14/09/2018 après la fusion du commit bb30a7236725e456138f055f96a634c75ce2b491 (version Wallet RPC 1.3), et à la hauteur de bloc 1643308.

### Index des méthodes JSON RPC :

* [get_balance](#get_balance)
* [get_address](#get_address)
* [get_address_index](#get_address_index)
* [create_address](#create_address)
* [label_address](#label_address)
* [get_accounts](#get_accounts)
* [create_account](#create_account)
* [label_account](#label_account)
* [get_account_tags](#get_account_tags)
* [tag_accounts](#tag_accounts)
* [untag_accounts](#untag_accounts)
* [set_account_tag_description](#set_account_tag_description)
* [get_height](#get_height)
* [transfer](#transfer)
* [transfer_split](#transfer_split)
* [sign_transfer](#sign_transfer)
* [submit_transfer](#submit_transfer)
* [sweep_dust](#sweep_dust)
* [sweep_all](#sweep_all)
* [sweep_single](#sweep_single)
* [relay_tx](#relay_tx)
* [store](#store)
* [get_payments](#get_payments)
* [get_bulk_payments](#get_bulk_payments)
* [incoming_transfers](#incoming_transfers)
* [query_key](#query_key)
* [make_integrated_address](#make_integrated_address)
* [split_integrated_address](#split_integrated_address)
* [stop_wallet](#stop_wallet)
* [rescan_blockchain](#rescan_blockchain)
* [set_tx_notes](#set_tx_notes)
* [get_tx_notes](#get_tx_notes)
* [set_attribute](#set_attribute)
* [get_attribute](#get_attribute)
* [get_tx_key](#get_tx_key)
* [check_tx_key](#check_tx_key)
* [get_tx_proof](#get_tx_proof)
* [check_tx_proof](#check_tx_proof)
* [get_spend_proof](#get_spend_proof)
* [check_spend_proof](#check_spend_proof)
* [get_reserve_proof](#get_reserve_proof)
* [check_reserve_proof](#check_reserve_proof)
* [get_transfers](#get_transfers)
* [get_transfer_by_txid](#get_transfer_by_txid)
* [sign](#sign)
* [verify](#verify)
* [export_outputs](#export_outputs)
* [import_outputs](#import_outputs)
* [export_key_images](#export_key_images)
* [import_key_images](#import_key_images)
* [make_uri](#make_uri)
* [parse_uri](#parse_uri)
* [get_address_book](#get_address_book)
* [add_address_book](#add_address_book)
* [delete_address_book](#delete_address_book)
* [refresh](#refresh)
* [rescan_spent](#rescan_spent)
* [start_mining](#start_mining)
* [stop_mining](#stop_mining)
* [get_languages](#get_languages)
* [create_wallet](#create_wallet)
* [open_wallet](#open_wallet)
* [close_wallet](#close_wallet)
* [change_wallet_password](#change_wallet_password)
* [is_multisig](#is_multisig)
* [prepare_multisig](#prepare_multisig)
* [make_multisig](#make_multisig)
* [export_multisig_info](#export_multisig_info)
* [import_multisig_info](#import_multisig_info)
* [finalize_multisig](#finalize_multisig)
* [sign_multisig](#sign_multisig)
* [submit_multisig](#submit_multisig)
* [get_version](#get_version)

---

## Méthodes JSON RPC :

### **get_balance**

Retourne le solde du portefeuille.

Alias : *getbalance*.

Entrées :

* *account_index* - entier non signé; Retourne le solde pour ce compte.
* *address_indices* - liste d'entier non signé; (Optionnel) Retourne le détail du solde pour ces sous-adresses.

Sorties :

* *balance* - entier non signé; Le solde total du monero-wallet-rpc actuellement en session.
* *unlocked_balance* - entier non signé; Les fonds débloqués sont ces fonds qui sont suffisamment profonds sur la chaîne de bloc Monero pour être considérés sûres à dépenser.
* *multisig_import_needed* - booléen; `True` si l'import de données de multisignatures est nécessaire pour retourner le solde correct.
* *per_subaddress* - liste d'informations `subaddress`; Informations de solde pour chaque sous-adresses du compte.
  * *address_index* - entier non signé; Index des sous-addresses du compte.
  * *address* - chaîne de caractères; Adresse à cet index. Représentation Base58 des clefs publiques.
  * *balance* - entier non signé; Solde de la sous-adresse (bloqué ou débloqué).
  * *unlocked_balance* - entier non signé; Solde débloqué pour la sous-adresse.
  * *label* - chaîne de caractères; Libellé de la sous-adresse.
  * *num_unspent_outputs* - entier non signé; Nombre de sorties non dépensées disponibles pour la sous-adresse.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_balance","params":{"account_index":0,"address_indices":[0,1]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "balance": 157443303037455077,
    "multisig_import_needed": false,
    "per_subaddress": [{
      "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "address_index": 0,
      "balance": 157360317826255077,
      "label": "Primary account",
      "num_unspent_outputs": 5281,
      "unlocked_balance": 157360317826255077
    },{
      "address": "7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o",
      "address_index": 1,
      "balance": 59985211200000,
      "label": "",
      "num_unspent_outputs": 1,
      "unlocked_balance": 59985211200000
    }],
    "unlocked_balance": 157443303037455077
  }
}
```


### **get_address**

Retourne l'adresse de portefeuille pour ce compte. Filtre optionnellement sur un lot de sous-adresses.

Alias : *getaddress*.

Entrées :

* *account_index* - entier non signé; Le compte dont retourner les sous-adresses.
* *address_index* - liste d'entier non signé; (Optionnel) Liste de sous-adresses à retourner pour un compte.

Sorties :

* *address* - chaîne de caractères; La chaîne de 95 caractères de l'adresse du portefeuille RPC ouvert.
* *addresses* Liste d'informations `addresses`
  * *address* chaîne de caractères; La chaîne de 95 caractères de (sous-)adresse.
  * *label* chaîne de caractères; Libélé de la (sous-)adresse.
  * *address_index* entier non signé; Index de la sous-adresse.
  * *used* booléen; Indique si la (sous-)adresse à déjà reçu des fonds.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_address","params":{"account_index":0,"address_index":[0,1,4]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
    "addresses": [{
      "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "address_index": 0,
      "label": "Primary account",
      "used": true
    },{
      "address": "7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o",
      "address_index": 1,
      "label": "",
      "used": true
    },{
      "address": "77xa6Dha7kzCQuvmd8iB5VYoMkdenwCNRU9khGhExXQ8KLL3z1N1ZATBD1sFPenyHWT9cm4fVFnCAUApY53peuoZFtwZiw5",
      "address_index": 4,
      "label": "test2",
      "used": true
    }]
  }
}
```



### **get_address_index**

Obtenir les index de compte et d'adresse pour uns (sous-)adresse spécifique.

Alias : *Aucun*.

Entrées :

* *address* - String; (Sous)-adresse à rechercher.

Sorties :

* *index* - Informations de sous-adresse
  * *major* entier non signé; Index de compte.
  * *minor* entier non signé; Index d'adresse.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_address_index","params":{"address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "index": {
      "major": 0,
      "minor": 1
    }
  }
}
```


### **create_address**

Créer une nouvelle adresse sur un compte. Optionnellement, libeller la nouvelle adresse.

Alias : *Aucun*.

Entrées :

* *account_index* - entier non signé; Compte pour lequel créer une nouvelle adresse.
* *label* - chaîne de caractères; (Optionnel) Libellé pour la nouvelle adresse.

Sorties :

* *address* - chaîne de caractères; Nouvelle adresse créée. Représentation Base58 des clefs publiques.
* *address_index* - entier non signé; Index de la nouvelle adresse dans le compte indiqué.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"create_address","params":{"account_index":0,"label":"new-sub"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "address": "7BG5jr9QS5sGMdpbBrZEwVLZjSKJGJBsXdZLt8wiXyhhLjy7x2LZxsrAnHTgD8oG46ZtLjUGic2pWc96GFkGNPQQDA3Dt7Q",
    "address_index": 5
  }
}
```


### **label_address**

Libeller une adresse.

Alias : *Aucun*.

Entrées :

* *index* - Index de sous-adresse; Objet JSON contenant les Index d'adresse majeur et mineur:
  * *major* - entier non signé; Index de compte pour la sous-adresse.
  * *minor* - entier non signé; Index de la sous-adresse de ce compte.
* *label* - chaîne de caractères; Libellé de cette adresse.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"label_address","params":{"index":{"major":0,"minor":5},"label":"myLabel"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```

### **get_accounts**

Obtenir tous les comptes d'un portefeuille. Optionnellement filtrer par étiquette de comptes.

Alias : *Aucun*.

Entrées :

* *tag* - chaîne de caractères; (Optionnel) Étiquette pour filtrer les comptes.

Sorties :

* *subaddress_accounts* - liste d'informations de sous-adresses de compte :
  * *account_index* - entier non signé; Index du compte.
  * *balance* - entier non signé; Solde du compte (bloqué ou débloqué).
  * *base_address* - chaîne de caractères; Représentation Base64 de la première sous-adresse de ce compte.
  * *label* - chaîne de caractères; (Optionnel) Libellé du compte.
  * *tag* - chaîne de caractères; (Optionnel) Étiquette pour filtrer les comptes.
  * *unlocked_balance* - entier non signé; Solde débloqué pour le compte.
* *total_balance* - entier non signé; Solde total des comptes sélectionnés (bloqué ou débloqué).
* *total_unlocked_balance* - entier non signé; Solde total débloqué des comptes sélectionnés.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_accounts","params":{"tag":"myTag"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "subaddress_accounts": [{
      "account_index": 0,
      "balance": 157663195572433688,
      "base_address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "label": "Primary account",
      "tag": "myTag",
      "unlocked_balance": 157443303037455077
    },{
      "account_index": 1,
      "balance": 0,
      "base_address": "77Vx9cs1VPicFndSVgYUvTdLCJEZw9h81hXLMYsjBCXSJfUehLa9TDW3Ffh45SQa7xb6dUs18mpNxfUhQGqfwXPSMrvKhVp",
      "label": "Secondary account",
      "tag": "myTag",
      "unlocked_balance": 0
    }],
    "total_balance": 157663195572433688,
    "total_unlocked_balance": 157443303037455077
  }
}
```


### **create_account**

Créer un nouveau compte avec un libellé optionnel.

Alias : *Aucun*.

Entrées :

* *label* - chaîne de caractères; (Optionnel) Libellé pour le compte.

Sorties :

* *account_index* - entier non signé; Index du nouveau compte.
* *address* - chaîne de caractères; Adresse de ce compte. Représentation Base58 des clefs publiques.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"create_account","params":{"label":"Secondary account"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "account_index": 1,
    "address": "77Vx9cs1VPicFndSVgYUvTdLCJEZw9h81hXLMYsjBCXSJfUehLa9TDW3Ffh45SQa7xb6dUs18mpNxfUhQGqfwXPSMrvKhVp"
  }
}
```


### **label_account**

Libeller un compte.

Alias : *Aucun*.

Entrées :

* *account_index* - entier non signé; Appliquer un libellé au compte à cet index.
* *label* - chaîne de caractères; Libellé pour le compte.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"label_account","params":{"account_index":0,"label":"Primary account"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "account_tags": [{
      "accounts": [0,1],
      "label": "",
      "tag": "myTag"
    }]
  }
}
```


### **get_account_tags**

Obtenir la liste des étiquettes de compte personnalisées.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *account_tags* - liste d'informations d'étiquette de compte :
  * *tag* - chaîne de caractères; Étiquette de filtrage.
  * *label* - chaîne de caractères; Libellé de l'étiquette.
  * *accounts* - liste de int; Liste d'index de comptes étiquetés.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_account_tags","params":""}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "account_tags": [{
      "accounts": [0],
      "label": "Test tag",
      "tag": "myTag"
    }]
  }
}
```


### **tag_accounts**

Appliquer une étiquette de filtrage à une liste de comptes.

Alias : *Aucun*.

Entrées :

* *tag* - chaîne de caractères; Étiquette pour le compte.
* *accounts* - liste d'entier non signé; Étiqueter cette liste de comptes.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"tag_accounts","params":{"tag":"myTag","accounts":[0,1]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **untag_accounts**

Supprimer l'étiquette de filtrage d'une liste de comptes.

Alias : *Aucun*.

Entrées :

* *accounts* - liste d'entier non signé; Supprimer l'étiquette de filtrage de cette liste de comptes.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"untag_accounts","params":{"accounts":[1]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **set_account_tag_description**

Configurer une description pour une étiquette de compte.

Alias : *Aucun*.

Entrées :

* *tag* - chaîne de caractères; Définir une description pour cette étiquette.
* *description* - chaîne de caractères; Description de l'étiquette.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_account_tag_description","params":{"tag":"myTag","description":"Test tag"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **get_height**

Retourne la hauteur de bloc actuelle du portefeuille.

Alias : *getheight*.

Entrées : *Aucun*.

Sorties :

* *height* - entier non signé; La hauteur de bloc actuelle du portefeuille RPC. Si le portefeuille est resté fermé un long moment, il pourrait devoir rattraper le démon.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_height"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "height": 145545
  }
}
```


### **transfer**

Envoyer des Moneroj à un certain nombre de destinataires.

Alias : *Aucun*.

Entrées :

* *destinations* - liste de destinations devant recevoir des XMR :
  * *amount* - entier non signé; Montant à envoyer à chaque destination, en @unités-atomiques.
  * *address* - chaîne de caractères; Adresse publique de destination.
* *account_index* - entier non signé; (Optionnel) Transférer depuis cet index de compte. (0 par défaut)
* *subaddr_indices* - liste d'entier non signé; (Optionnel) Transférer depuis cette liste de sous-adresses. (0 par défaut)
* *priority* - entier non signé; Définir une priorité pour la transaction. Les valeurs acceptées sont de 0 à 3 respectivement pour les priorités par défaut, non-importante, normale et élevée.
* *mixin* - entier non signé; Nombre de sorties de la chaîne de blocs avec lesquelles se mélanger (0 signifie pas de mélange).
* *ring_size* - entier non signé; Nombre de sorties à mélanger dans la transaction (cette sortie + N leurres depuis la chaîne de blocs).
* *unlock_time* - entier non signé; Nombre de blocs avant que les Moneroj puissent être dépensés (0 pour ne pas ajouter de verrouillage).
* *payment_id* - chaîne de caractères; (Optionnel) Chaîne de 64 caractères hexadécimaux ou 32 octets aléatoires pour identifier la transaction.
* *get_tx_key* - booléen; (Optionnel) Retourne la clef de la transaction après l'envoi.
* *do_not_relay* - booléen; (Optionnel) Si `true`, la transaction nouvellement créée ne sera pas relayée sur le réseau Monero. (`false` par défaut)
* *get_tx_hex* - booléen; Retourne la transaction sous forme de chaîne de caractères hexadécimale après l'envoi. (`false` par défaut)
* *get_tx_metadata* - booléen; Retourne les métadonnées nécessaires pour relayer la transaction. (`false` par défaut)

Sorties :

* *amount* - Montant transféré dans la transaction.
* *fee* - Valeur en entier des frais facturés pour la transaction.
* *multisig_txset* - Lot de transaction multi-signatures en attente d'être signée (vide si non-multi-signatures).
* *tx_blob* - Transaction brut représenté par une chaîne de caractères hexadécimale, si `get_tx_hex` est `true`.
* *tx_hash* - Chaîne de caractère du hachage de transaction publiquement consultable.
* *tx_key* - Chaîne de caractère de la clef de transaction si `get_tx_key` est `true`, sinon chaîne de caractères vierge.
* *tx_metadata* - Lot de métadonnées de transactions nécessaires pour relayer ce transfert plus tard, si `get_tx_metadata` est `true`.
* *unsigned_txset* - String. Lot de transactions non-signée pour des besoins de signature à froid.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer","params":{"destinations":[{"amount":100000000000,"address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o"},{"amount":200000000000,"address":"75sNpRwUtekcJGejMuLSGA71QFuK1qcCVLZnYRTfQLgFU5nJ7xiAHtR5ihioS53KMe8pBhH61moraZHyLoG4G7fMER8xkNv"}],"account_index":0,"subaddr_indices":[0],"priority":0,"ring_size":7,"get_tx_key": true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "amount": 300000000000,
    "fee": 86897600000,
    "multisig_txset": "",
    "tx_blob": "",
    "tx_hash": "7663438de4f72b25a0e395b770ea9ecf7108cd2f0c4b75be0b14a103d3362be9",
    "tx_key": "25c9d8ec20045c80c93d665c9d3684aab7335f8b2cd02e1ba2638485afd1c70e236c4bdd7a2f1cb511dbf466f13421bdf8df988b7b969c448ca6239d7251490e4bf1bbf9f6ffacffdcdc93b9d1648ec499eada4d6b4e02ce92d4a1c0452e5d009fbbbf15b549df8856205a4c7bda6338d82c823f911acd00cb75850b198c5803",
    "tx_metadata": "",
    "unsigned_txset": ""
  }
}
```


### **transfer_split**

Comme `transfer`, mais peut être séparé en plus d'une transaction si nécessaire.

Alias : *Aucun*.

Entrées :

* *destinations* - liste de destinations devant recevoir des XMR :
  * *amount* - entier non signé; Montant à envoyer à chaque destination, en @unités-atomiques.
  * *address* - chaîne de caractères; Adresse publique de destination.
* *account_index* - entier non signé; (Optionnel) Transférer depuis cet index de compte. (0 par défaut)
* *subaddr_indices* - liste d'entier non signé; (Optionnel) Transférer depuis cette liste de sous-adresses. (0 par défaut)
* *mixin* - entier non signé; Nombre de sorties de la chaîne de blocs avec lesquelles se mélanger (0 signifie pas de mélange).
* *ring_size* - entier non signé; Nombre de sorties à mélanger dans la transaction (cette sortie + N leurres depuis la chaîne de blocs).
* *unlock_time* - entier non signé; Nombre de blocs avant que les Moneroj puissent être dépensés (0 pour ne pas ajouter de verrouillage).
* *payment_id* - chaîne de caractères; (Optionnel) Chaîne de 64 caractères hexadécimaux ou 32 octets aléatoires pour identifier la transaction.
* *get_tx_key* - booléen; (Optionnel) Retourne la clef de la transaction après l'envoi.
* *priority* - entier non signé; Définir une priorité pour la transaction. Les valeurs acceptées sont de 0 à 3 respectivement pour les priorités par défaut, non-importante, normale et élevée.
* *do_not_relay* - booléen; (Optionnel) Si `true`, la transaction nouvellement créée ne sera pas relayée sur le réseau Monero. (`false` par défaut)
* *get_tx_hex* - booléen; Retourne la transaction sous forme de chaîne de caractères hexadécimale après l'envoi. (`false` par défaut)
* *new_algorithm* - booléen; `True` pour utiliser le nouvel algorithme de construction de transaction, `false` par défaut.
* *get_tx_metadata* - booléen; Retourne les métadonnées nécessaires pour relayer la transaction. (`false` par défaut)

Sorties :

* *tx_hash_list* - liste de : chaîne de caractères. Le hachage de transaction de chaque transaction.
* *tx_key_list* - liste de : chaîne de caractères. La clef de transaction de chaque transaction.
* *amount_list* - liste de : integer. Le montant transféré dans chaque transaction.
* *fee_list* - liste de : integer. Le montant des frais payés pour chaque transaction.
* *tx_blob_list* - liste de : chaîne de caractères. La transaction sous forme de chaîne de caractères hexadécimale pour chaque transaction.
* *tx_metadata_list* - liste de : chaîne de caractères. Liste de métadonnées de transaction nécessaires pour relayer les transactions plus tard.
* *multisig_txset* - chaîne de caractères. Lot de transactions multi-signatures en attente d'être signées (vide si non-multi-signatures).
* *unsigned_txset* - chaîne de caractères. Lot de transactions non-signées pour des besoins de signatures à froid.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":1000000000000,"address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o"},{"amount":2000000000000,"address":"75sNpRwUtekcJGejMuLSGA71QFuK1qcCVLZnYRTfQLgFU5nJ7xiAHtR5ihioS53KMe8pBhH61moraZHyLoG4G7fMER8xkNv"}],"account_index":0,"subaddr_indices":[0],"priority":0,"ring_size":7,"get_tx_key": true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "amount_list": [3000000000000],
    "fee_list": [85106400000],
    "multisig_txset": "",
    "tx_hash_list": ["c8d815f48f27d53fdaf198a74b292a91bfaf87529a9a9a9ee66079a890b3b58b"],
    "unsigned_txset": ""
  }
}
```


### **sign_transfer**

Signer une transaction créée sur un portefeuille d'audit (dans le processus de signature à froid).

Alias : *Aucun*.

Entrées :

* *unsigned_txset* - chaîne de caractères. Lot de transaction non-signée retourné par les méthodes `transfer` ou `transfer_split`.
* *export_raw* - booléen; (Optionnel) Si `true`, retourne les données de transaction brut. (`false` par défaut)

Sorties :

* *signed_txset* - chaîne de caractères. Lot de transaction signée à utiliser pour soumettre le transfert.
* *tx_hash_list* - liste de : chaîne de caractères. Le hachage de transaction de chaque transaction.
* *tx_raw_list* - liste de : chaîne de caractères. Les données de transaction brutes de chaque transaction.

Dans l'exemple ci-dessous, nous générons d'abord un `unsigned_txset` sur un portefeuille d'audit avant de le signer :

Générer un `unsigned_txset` en utilisant la méthode `transfer` ci-dessus sur un portefeuille d'audit :
```
curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer","params":{"destinations":[{"amount":1000000000000,"address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o"}],"account_index":0,"subaddr_indices":[0],"priority":0,"ring_size":7,"do_not_relay":true,"get_tx_hex":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "amount": 1000000000000,
    "fee": 15202740000,
    "multisig_txset": "",
    "tx_blob": "...long_hex...",
    "tx_hash": "c648ba0a049e5ce4ec21361dbf6e4b21eac0f828eea9090215de86c76b31d0a4",
    "tx_key": "",
    "tx_metadata": "",
    "unsigned_txset": "...long_hex..."
  }
}
```

Signer la transaction en utilisant le `unsigned_txset` précédemment généré :
```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sign_transfer","params":{"unsigned_txset":...long_hex..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signed_txset": "...long_hex...",
    "tx_hash_list": ["ff2e2d49fbfb1c9a55754f786576e171c8bf21b463a74438df604b7fa6cebc6d"]
  }
}
```


### **submit_transfer**

Soumettre une transaction préalablement signée sur un portefeuille d'audit (ans le processus de signature à froid).

Alias : *Aucun*.

Entrées :

* *tx_data_hex* - chaîne de caractères; Lot de transaction signée renvoyé par `sign_transfer`.

Sorties :

* *tx_hash_list* - liste de : chaîne de caractères. Le hachage de transaction de chaque transaction.

Dans l'exemple suivant, nous soumettons un transfert en utilisant le `signed_txset` généré plus haut :
```
curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"submit_transfer","params":{"tx_data_hex":...long_hex..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash_list": ["40fad7c828bb383ac02648732f7afce9adc520ba5629e1f5d9c03f584ac53d74"]
  }
}
```

### **sweep_dust**

Renvoyer toutes les sorties résiduelles au portefeuille, pour les rendre plus facile à dépenser (et à mélanger).

Alias : *sweep_unmixable*.

Entrées :

* *get_tx_keys* - booléen; (Optionnel) Retourne la clef de la transaction après l'envoi.
* *do_not_relay* - booléen; (Optionnel) Si `true`, la nouvelle transaction ne sera pas relayée sur le réseau Monero. (`false` par défaut)
* *get_tx_hex* - booléen; (Optionnel) Retourne les transactions sous forme de chaîne de caractères hexadécimales après l'envoi. (`false` par défaut)
* *get_tx_metadata* - booléen; (Optionnel) Retourne la liste des métadonnées de transaction nécessaires pour relayer le transfert ultérieurement. (`false` par défaut)

Sorties :

* *tx_hash_list* - liste de : chaîne de caractères. Le hachage de transaction de chaque transaction.
* *tx_key_list* - liste de : chaîne de caractères. Les clefs de transaction de chaque transaction.
* *amount_list* - liste de : integer. Le montant transféré dans chaque transaction.
* *fee_list* - liste de : integer. Le montant des frais payés pour chaque transaction.
* *tx_blob_list* - liste de : chaîne de caractères. La transaction sous forme de chaîne de caractères hexadécimale pour chaque transaction.
* *tx_metadata_list* - liste de : chaîne de caractères. Liste des métadonnées de transaction nécessaires pour relayer le transfert ultérieurement.
* *multisig_txset* - chaîne de caractères. Le lot de clefs de signature utilisé dans une transaction multi-signatures (vide si non-multi-signatures).
* *unsigned_txset* - chaîne de caractères. Lot de transactions non-signées pour des besoins de signatures à froid.

Exemple (Dans cet exemple, `sweep_dust` ne retourne rien car il n'y a pas de fonds à ramoner) :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_dust","params":{"get_tx_keys":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "multisig_txset": "",
    "unsigned_txset": ""
  }
}
```


### **sweep_all**

Envoyer tout le solde débloqué à une adresse.

Alias : *Aucun*.

Entrées :

* *address* - chaîne de caractères; Adresse publique de destination.
* *account_index* - entier non signé; Ramoner les transaction de ce compte.
* *subaddr_indices* - liste d'entier non signé; (Optionnel) Ramoner depuis ce lot de sous-adresses de ce compte.
* *priority* - entier non signé; (Optionnel) Priorité pour envoyer ce transfert de ramonage, détermine en parti les frais.
* *mixin* - entier non signé; Nombre de sorties de la chaîne de blocs avec lesquelles se mélanger (0 signifie pas de mélange)..
* *ring_size* - entier non signé; Définit la taille de cercle à N (mixin + 1).
* *unlock_time* - entier non signé; Nombre de blocs avant que les Moneroj puissent être dépensés (0 pour ne pas ajouter de verrouillage).
* *payment_id* - chaîne de caractères; (Optionnel) Chaîne de 64 caractères hexadécimaux ou 32 octets aléatoires pour identifier la transaction.
* *get_tx_keys* - booléen; (Optionnel) Retourne la clef de la transaction après l'envoi.
* *below_amount* - entier non signé; (Optionnel) Inclure les sorties plus faibles que ce montant.
* *do_not_relay* - booléen; (Optionnel) Si `true`, ne pas relayer ce transfert de ramonage. (`false` par défaut)
* *get_tx_hex* - booléen; (Optionnel) Retourne les transactions sous forme de chaînes de caractères hexadécimales. (`false` par défaut)
* *get_tx_metadata* - booléen; (Optionnel) Retourne les métadonnées de transaction sous forme de chaîne de caractères. (`false` par défaut)

Sorties :

* *tx_hash_list* - liste de : chaîne de caractères. Le hachage de transaction de chaque transaction.
* *tx_key_list* - liste de : chaîne de caractères. Les clefs de transaction de chaque transaction.
* *amount_list* - liste de : integer. Le montant transféré dans chaque transaction.
* *fee_list* - liste de : integer. Le montant des frais payés pour chaque transaction.
* *tx_blob_list* - liste de : chaîne de caractères. La transaction sous forme de chaîne de caractères hexadécimale pour chaque transaction.
* *tx_metadata_list* - liste de : chaîne de caractères. Liste des métadonnées de transaction nécessaires pour relayer le transfert ultérieurement.
* *multisig_txset* - chaîne de caractères. Le lot de clefs de signature utilisé dans une transaction multi-signatures (vide si non-multi-signatures).
* *unsigned_txset* - chaîne de caractères. Lot de transactions non-signées pour des besoins de signatures à froid.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt","subaddr_indices":[4],"ring_size":7,"unlock_time":0,"get_tx_keys":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "amount_list": [9985885770000],
    "fee_list": [14114230000],
    "multisig_txset": "",
    "tx_hash_list": ["ab4b6b65cc8cd8c9dd317d0b90d97582d68d0aa1637b0065b05b61f9a66ea5c5"],
    "tx_key_list": ["b9b4b39d3bb3062ddb85ec0266d4df39058f4c86077d99309f218ce4d76af607"],
    "unsigned_txset": ""
  }
}
```


### **sweep_single**

Envoie la totalité d'une sortie spécifique à une adresse.

Alias : *Aucun*.

Entrées :

* *address* - chaîne de caractères; Adresse publique de destination.
* *account_index* - entier non signé; Ramoner les transaction de ce compte.
* *subaddr_indices* - liste d'entier non signé; (Optionnel) Ramoner depuis ce lot de sous-adresses de ce compte.
* *priority* - entier non signé; (Optionnel) Priorité pour envoyer ce transfert de ramonage, détermine en parti les frais.
* *mixin* - entier non signé; Nombre de sorties de la chaîne de blocs avec lesquelles se mélanger (0 signifie pas de mélange)..
* *ring_size* - entier non signé; Définit la taille de cercle à N (mixin + 1).
* *unlock_time* - entier non signé; Nombre de blocs avant que les Moneroj puissent être dépensés (0 pour ne pas ajouter de verrouillage).
* *payment_id* - chaîne de caractères; (Optionnel) Chaîne de 64 caractères hexadécimaux ou 32 octets aléatoires pour identifier la transaction.
* *get_tx_keys* - booléen; (Optionnel) Retourne la clef de la transaction après l'envoi.
* *key_image* - chaîne de caractères; Key image of specific output to sweep.
* *below_amount* - entier non signé; (Optionnel) Inclure les sorties plus faibles que ce montant.
* *do_not_relay* - booléen; (Optionnel) Si `true`, ne pas relayer ce transfert de ramonage. (`false` par défaut)
* *get_tx_hex* - booléen; (Optionnel) retourne les transactions sous forme de chaînes de caractères hexadécimales. (`false` par défaut)
* *get_tx_metadata* - booléen; (Optionnel) Retourne les métadonnées de transaction sous forme de chaîne de caractères. (Defaults to false)

Sorties :

* *tx_hash_list* - liste de : chaîne de caractères. Le hachage de transaction de chaque transaction.
* *tx_key_list* - liste de : chaîne de caractères. Les clefs de transaction de chaque transaction.
* *amount_list* - liste de : integer. Le montant transféré dans chaque transaction.
* *fee_list* - liste de : integer. Le montant des frais payés pour chaque transaction.
* *tx_blob_list* - liste de : chaîne de caractères. La transaction sous forme de chaîne de caractères hexadécimale pour chaque transaction.
* *tx_metadata_list* - liste de : chaîne de caractères. Liste des métadonnées de transaction nécessaires pour relayer le transfert ultérieurement.
* *multisig_txset* - chaîne de caractères. Le lot de clefs de signature utilisé dans une transaction multi-signatures (vide si non-multi-signatures).
* *unsigned_txset* - chaîne de caractères. Lot de transactions non-signées pour des besoins de signatures à froid.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_single","params":{"address":"74Jsocx8xbpTBEjm3ncKE5LBQbiJouyCDaGhgSiebpvNDXZnTAbW2CmUR5SsBeae2pNk9WMVuz6jegkC4krUyqRjA6VjoLD","ring_size":7,"unlock_time":0,"key_image":"a7834459ef795d2efb6f665d2fd758c8d9288989d8d4c712a68f8023f7804a5e","get_tx_keys":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "amount": 27126892247503,
    "fee": 14111630000,
    "multisig_txset": "",
    "tx_blob": "",
    "tx_hash": "106d4391a031e5b735ded555862fec63233e34e5fa4fc7edcfdbe461c275ae5b",
    "tx_key": "",
    "tx_metadata": "",
    "unsigned_txset": ""
  }
}
```


### **relay_tx**

Relayer une transaction préalablement créée avec `"do_not_relay":true`.

Alias : *Aucun*.

Entrées :

* *hex* - chaîne de caractères; métadonnées de transaction retournées par une méthode `transfer` avec `get_tx_metadata` positionné à `true`.

Sorties :

* *tx_hash* - Chaîne de caractère du hachage de transaction publiquement consultable.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"relay_tx","params":{"hex":"...tx_metadata..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "1c42dcc5672bb09bccf33fb1e9ab4a498af59a6dbd33b3d0cfb289b9e0e25fa5"
  }
}
```


### **store**

Sauvegarde le fichier de portefeuille.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties : *Aucun*.

Exemple :

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

Obtenir une liste de paiement entrant en utilisant un ID de paiement donné.

Alias : *Aucun*.

Entrées :

* *payment_id* - chaîne de caractères; ID de paiement utilisé pour trouver les paiements (16 caractères hexadécimaux).

Sorties :

* *payments* - liste de :
  * *payment_id* - chaîne de caractères; ID de paiement correspondant au paramètre d'entrée.
  * *tx_hash* - chaîne de caractères; Hachage de transaction utilisé comme ID de transaction.
  * *amount* - entier non signé; Montant de ce paiement.
  * *block_height* - entier non signé; Hauteur du bloc qui a confirmé ce paiement en premier.
  * *unlock_time* - entier non signé; Temps (en hauteur de bloc) avant que ce paiement ne soit sûr à dépenser.
  * *subaddr_index* - Index de sous-adresse:
    * *major* - entier non signé; Index de compte pour la sous-adresse.
    * *minor* - entier non signé; Index de la sous-adresse de ce compte.
  * *address* - chaîne de caractères; Adresse recevant ce paiement; Représentation Base58 des clefs publiques.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"60900e5603bf96e3"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "amount": 1000000000000,
      "block_height": 127606,
      "payment_id": "60900e5603bf96e3",
      "subaddr_index": {
        "major": 0,
        "minor": 0
      },
      "tx_hash": "3292e83ad28fc1cc7bc26dbd38862308f4588680fbf93eae3e803cddd1bd614f",
      "unlock_time": 0
    }]
  }
}
```


### **get_bulk_payments**

Obtenir une liste de paiement entrant en utilisant un ID de paiement ou une liste d'IDs de paiement, pour une hauteur donnée. Cette méthode est préférée à la methode `get_payments` car elle dispose des mêmes fonctionnalité et est plus extensible. Les deux sont parfaites pour vérifier des transactions avec un unique ID de paiement.

Alias : *Aucun*.

Entrées :

* *payment_ids* - liste de : chaîne de caractères; IDs de paiements utilisé pour trouver les paiements (16 caractères hexadécimaux).
* *min_block_height* - entier non signé; La hauteur de bloc à partir de laquelle recherchr les paiements.

Sorties :

* *payments* - liste de :
  * *payment_id* - chaîne de caractères; ID de paiement correspondant à un des IDs fournis en entrée.
  * *tx_hash* - chaîne de caractères; Hachage de transaction utilisé comme ID de transaction.
  * *amount* - entier non signé; Montant de ce paiement.
  * *block_height* - entier non signé; Hauteur du bloc qui a confirmé ce paiement en premier.
  * *unlock_time* - entier non signé; Temps (en hauteur de bloc) avant que ce paiement ne soit sûr à dépenser.
  * *subaddr_index* - Index de sous-adresse:
    * *major* - entier non signé; Index de compte pour la sous-adresse.
    * *minor* - entier non signé; Index de la sous-adresse de ce compte.
  * *address* - chaîne de caractères; Adresse recevant ce paiement; Représentation Base58 des clefs publiques.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_bulk_payments","params":{"payment_ids":["60900e5603bf96e3"],"min_block_height":"120000"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "amount": 1000000000000,
      "block_height": 127606,
      "payment_id": "60900e5603bf96e3",
      "subaddr_index": {
        "major": 0,
        "minor": 0
      },
      "tx_hash": "3292e83ad28fc1cc7bc26dbd38862308f4588680fbf93eae3e803cddd1bd614f",
      "unlock_time": 0
    }]
  }
}
```


### **incoming_transfers**

Retourne une liste de transfert entrant sur le portefeuille.

Entrées :

* *transfer_type* - chaîne de caractères; "all": tous les transferts, "available": Uniquement les transferts qui ne sont pas encore dépensés, OR "unavailable": uniquement les transferts qui sont déjà dépensés.
* *account_index* - entier non signé; (Optionnel) Retourne les transferts pour ce compte. (0 par défaut)
* *subaddr_indices* - liste d'entier non signé; (Optionnel) Retourne les transferts envoyer à ces sous-adresses.
* *verbose* - booléen; (Optionnel) Active la sortie verbeuse, retourne l'image de clef si `true`.

Sorties :

* *transfers* - liste de :
  * *amount* - entier non signé; Montant de ce transfert.
  * *global_index* - entier non signé; Majoritairement pour usage interne, peut être ignoré par la plupart des utilisateurs.
  * *key_image* - chaîne de caractères; Image de clef pour les sorties non dépensées de ce transfert entrant (vide sauf si `verbose` est `true`).
  * *spent* - booléen; Indique si le transfert à été dépensé.
  * *subaddr_index* - entier non signé; Index de sous-adresse for incoming transfer.
  * *tx_hash* - chaîne de caractères; Plusieurs transferts entrant peuvent partager le même hachage s'ils faisaient parti de la même transaction.
  * *tx_size* - entier non signé; Taille de la transaction en octets.

Exemple, obtenir tous les transferts :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"all","account_index":0,"subaddr_indices":[3],"verbose":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "transfers": [{
      "amount": 60000000000000,
      "global_index": 122405,
      "key_image": "768f5144777eb23477ab7acf83562581d690abaf98ca897c03a9d2b900eb479b",
      "spent": true,
      "subaddr_index": 3,
      "tx_hash": "f53401f21c6a43e44d5dd7a90eba5cf580012ad0e15d050059136f8a0da34f6b",
      "tx_size": 159
    },{
      "amount": 27126892247503,
      "global_index": 594994,
      "key_image": "7e561394806afd1be61980cc3431f6ef3569fa9151cd8d234f8ec13aa145695e",
      "spent": false,
      "subaddr_index": 3,
      "tx_hash": "106d4391a031e5b735ded555862fec63233e34e5fa4fc7edcfdbe461c275ae5b",
      "tx_size": 157
    },{
      "amount": 27169374733655,
      "global_index": 594997,
      "key_image": "e76c0a3bfeaae35e4173712f782eb34011198e26b990225b71aa787c8ba8a157",
      "spent": false,
      "subaddr_index": 3,
      "tx_hash": "0bd959b59117ee1254bd8e5aa8e77ec04ef744144a1ffb2d5c1eb9380a719621",
      "tx_size": 158
    }]
  }
}
```

Exemple, obtenir les transferts disponibles :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"available","account_index":0,"subaddr_indices":[3],"verbose":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "transfers": [{
      "amount": 27126892247503,
      "global_index": 594994,
      "key_image": "7e561394806afd1be61980cc3431f6ef3569fa9151cd8d234f8ec13aa145695e",
      "spent": false,
      "subaddr_index": 3,
      "tx_hash": "106d4391a031e5b735ded555862fec63233e34e5fa4fc7edcfdbe461c275ae5b",
      "tx_size": 157
    },{
      "amount": 27169374733655,
      "global_index": 594997,
      "key_image": "e76c0a3bfeaae35e4173712f782eb34011198e26b990225b71aa787c8ba8a157",
      "spent": false,
      "subaddr_index": 3,
      "tx_hash": "0bd959b59117ee1254bd8e5aa8e77ec04ef744144a1ffb2d5c1eb9380a719621",
      "tx_size": 158
    }]
  }
}
```

Exemple, obtenir les transferts indisponibles :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"unavailable","account_index":0,"subaddr_indices":[3],"verbose":true}}' -H 'Content-Type: application/json'
{
"id": "0",
"jsonrpc": "2.0",
"result": {
  "transfers": [{
    "amount": 60000000000000,
    "global_index": 122405,
    "key_image": "768f5144777eb23477ab7acf83562581d690abaf98ca897c03a9d2b900eb479b",
    "spent": true,
    "subaddr_index": 3,
    "tx_hash": "f53401f21c6a43e44d5dd7a90eba5cf580012ad0e15d050059136f8a0da34f6b",
    "tx_size": 159
  }]
}
}
```


### **query_key**

Retourne la clef de dépense ou d'audit privée.

Alias : *Aucun*.

Entrées :

* *key_type* - chaîne de caractères; Quelle clef récupérer : "mnemonic" - la phrase mnémonique (les plus ancien portefeuilles n'en ont pas) OU "view_key" - la clef d'audit

Sorties :

* *key* - chaîne de caractères; La clef d'audit sera sous forme hexadécimale, alors que la phrase mnémonique sera une suite de mots-clefs.

Exemple (Récupérer la clef d'audit) :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "key": "0a1a38f6d246e894600a3e27238a064bf5e8d91801df47a17107596b1378e501"
  }
}
```

Exemple (Récupérer la phrase mnémonique) :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "key": "vocal either anvil films dolphin zeal bacon cuisine quote syndrome rejoices envy okay pancakes tulips lair greater petals organs enmity dedicated oust thwart tomorrow tomorrow"
  }
}
```


### **make_integrated_address**

Construire une adresse intégrée à partir d'une adresse de portefeuille et d'un ID de paiement.

Alias : *Aucun*.

Entrées :

* *standard_address* - chaîne de caractères; (Optionnel, adresse principale par défaut) Adresse publique de destination.
* *payment_id* - chaîne de caractères; (Optionnel, ID aléatoire si non-fourni) 16 caractères encodés en hexadécimal.

Sorties :

* *integrated_address* - chaîne de caractères
* *payment_id* - chaîne de caractères; encodé en hexadécimal;

Exemple (ID de paiement vide, utilise un ID aléatoire) :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"standard_address":"55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "integrated_address": "5F38Rw9HKeaLQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZXCkbHUXdPHyiUeRyokn",
    "payment_id": "420fa29b2d9a49f5"
  }
}
```


### **split_integrated_address**

Récupérer l'adresse standard et l'ID de paiement correspondant à une adresse intégrée.

Alias : *Aucun*.

Entrées :

* *integrated_address* - chaîne de caractères

Sorties :

* *is_subaddress* - booléen; Indique si l'adresse est une sous-adresse.
* *payment* - chaîne de caractères; encodé en hexadécimal
* *standard_address* - chaîne de caractères

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address": "5F38Rw9HKeaLQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZXCkbHUXdPHyiUeRyokn"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "is_subaddress": false,
    "payment_id": "420fa29b2d9a49f5",
    "standard_address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt"
  }
}
```


### **stop_wallet**

Arrête le portefeuille, en enregistrant l'état actuel.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"stop_wallet"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **rescan_blockchain**

Rescanner la chaîne de blocs depuis le début, en perdant toutes les informations qui ne peuvent pas être récupérées depuis la chaîne de blocs elle-même.  
Cela inclus les adresses de destination, les clefs privées des transactions, les notes des transactions, etc.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **set_tx_notes**

Définir des notes arbitraires aux transactions.

Alias : *Aucun*.

Entrées :

* *txids* - liste de chaîne de caractères; IDs de transactions
* *notes* - liste de chaîne de caractères; Notes pour les transactions

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_tx_notes","params":{"txids":["3292e83ad28fc1cc7bc26dbd38862308f4588680fbf93eae3e803cddd1bd614f"],"notes":["This is an example"]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **get_tx_notes**

Obtenir les notes des transactions.

Alias : *Aucun*.

Entrées :

* *txids* - liste de chaîne de caractères; IDs de transactions

Sorties :

* *notes* - liste de chaîne de caractères; Notes des transactions

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_tx_notes","params":{"txids":["3292e83ad28fc1cc7bc26dbd38862308f4588680fbf93eae3e803cddd1bd614f"]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "notes": ["This is an example"]
  }
}
```


### **set_attribute**

Définir un attribut arbitraire.

Alias : *Aucun*.

Entrées :

* *key* - chaîne de caractères; Nom de l'attribut.
* *value* - chaîne de caractères; Valeur de l'attribut.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_attribute","params":{"key":"my_attribute","value":"my_value"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **get_attribute**

Obtenir la valeur d'un attribut par son nom.

Alias : *Aucun*.

Entrées :

* *key* - chaîne de caractères; Nom de l'attribut.

Sorties :

* *value* - chaîne de caractères; Valeur de l'attribut.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_attribute","params":{"key":"my_attribute"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "value": "my_value"
  }
}
```


### **get_tx_key**

Obtenir la clef privée d'une transaction depuis son ID de transaction.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction.

Sorties :

* *tx_key* - chaîne de caractères; Clef privée de la transaction.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_tx_key","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_key": "feba662cf8fb6d0d0da18fc9b70ab28e01cc76311278fdd7fe7ab16360762b06"
  }
}
```


### **check_tx_key**

Vérifier une transaction dans la chaîne de blocs avec sa clef privée.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction.
* *tx_key* - chaîne de caractères; Clef privée de transaction.
* *address* - chaîne de caractères; Adresse publique de destination de la transaction.

Sorties :

* *confirmations* - entier non signé; Nombre de blocs minés après celui contenant la transaction.
* *in_pool* - booléen; Indique si la transaction est toujours dans le pool ou si elle a été ajoutée à un bloc.
* *received* - entier non signé; Montant de la transaction.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_tx_key","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","tx_key":"feba662cf8fb6d0d0da18fc9b70ab28e01cc76311278fdd7fe7ab16360762b06","address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "confirmations": 0,
    "in_pool": false,
    "received": 1000000000000
  }
}
```


### **get_tx_proof**

Obtenir la signature d'une transaction pour la prouver.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction.
* *address* - chaîne de caractères; Adresse publique de destination de la transaction.
* *message* - chaîne de caractères; (Optionnel) ajoute un message à la signature pour améliorer l'authentification du processus de preuve.

Sorties :

* *signature* - chaîne de caractères; Signature de la transaction.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_tx_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o","message":"this is my transaction"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signature": "InProofV13vqBCT6dpSAXkypZmSEMPGVnNRFDX2vscUYeVS4WnSVnV5BwLs31T9q6Etfj9Wts6tAxSAS4gkMeSYzzLS7Gt4vvCSQRh9niGJMUDJsB5hTzb2XJiCkUzWkkcjLFBBRVD5QZ"
  }
}
```


### **check_tx_proof**

Prouver une transaction en contrôlant sa signature.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction.
* *address* - chaîne de caractères; Adresse publique de destination de la transaction.
* *message* - chaîne de caractères; (Optionnel) Doit être le même message que celui utilisé dans `get_tx_proof`.
* *signature* - chaîne de caractères; Signature de la transaction à confirmer.

Sorties :

* *confirmations* - entier non signé; Nombre de blocs minés après celui contenant la transaction.
* *good* - booléen; Indique si les entrées prouvent la transaction.
* *in_pool* - booléen; Indique si la transaction est toujours dans le pool ou si elle a été ajoutée à un bloc.
* *received* - entier non signé; Montant de la transaction.

Dans l'exemple ci-dessous, la transaction a été prouvée :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_tx_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o","message":"this is my transaction","signature":"InProofV13vqBCT6dpSAXkypZmSEMPGVnNRFDX2vscUYeVS4WnSVnV5BwLs31T9q6Etfj9Wts6tAxSAS4gkMeSYzzLS7Gt4vvCSQRh9niGJMUDJsB5hTzb2XJiCkUzWkkcjLFBBRVD5QZ"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "confirmations": 482,
    "good": true,
    "in_pool": false,
    "received": 1000000000000
  }
}
```

Dans l'exemple ci-dessous, le message utilisé est mauvais, empêchant la preuve de la transaction :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_tx_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","address":"7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o","message":"wrong message","signature":"InProofV13vqBCT6dpSAXkypZmSEMPGVnNRFDX2vscUYeVS4WnSVnV5BwLs31T9q6Etfj9Wts6tAxSAS4gkMeSYzzLS7Gt4vvCSQRh9niGJMUDJsB5hTzb2XJiCkUzWkkcjLFBBRVD5QZ"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "confirmations": 0,
    "good": false,
    "in_pool": false,
    "received": 0
  }
}
```


### **get_spend_proof**

Génère une signature pour prouver une dépense. Contrairement à la preuve d'une transaction, cela ne nécessite pas l'adresse publique de destination.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction.
* *message* - chaîne de caractères; (Optionnel) ajoute un message à la signature pour améliorer l'authentification du processus de vérification.

Sorties :

* *signature* - chaîne de caractères; Signature de la dépense.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_spend_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","message":"this is my transaction"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signature": "SpendProofV1aSh8Todhk54736iXgV6vJAFP7egxByuMWZeyNDaN2JY737S95X5zz5mNMQSuCNSLjjhi5HJCsndpNWSNVsuThxwv285qy1KkUrLFRkxMSCjfL6bbycYN33ScZ5UB4Fzseceo1ndpL393T1q638VmcU3a56dhNHF1RPZFiGPS61FA78nXFSqE9uoKCCoHkEz83M1dQVhxZV5CEPF2P6VioGTKgprLCH9vvj9k1ivd4SX19L2VSMc3zD1u3mkR24ioETvxBoLeBSpxMoikyZ6inhuPm8yYo9YWyFtQK4XYfAV9mJ9knz5fUPXR8vvh7KJCAg4dqeJXTVb4mbMzYtsSZXHd6ouWoyCd6qMALdW8pKhgMCHcVYMWp9X9WHZuCo9rsRjRpg15sJUw7oJg1JoGiVgj8P4JeGDjnZHnmLVa5bpJhVCbMhyM7JLXNQJzFWTGC27TQBbthxCfQaKdusYnvZnKPDJWSeceYEFzepUnsWhQtyhbb73FzqgWC4eKEFKAZJqT2LuuSoxmihJ9acnFK7Ze23KTVYgDyMKY61VXADxmSrBvwUtxCaW4nQtnbMxiPMNnDMzeixqsFMBtN72j5UqhiLRY99k6SE7Qf5f29haNSBNSXCFFHChPKNTwJrehkofBdKUhh2VGPqZDNoefWUwfudeu83t85bmjv8Q3LrQSkFgFjRT5tLo8TMawNXoZCrQpyZrEvnodMDDUUNf3NL7rxyv3gM1KrTWjYaWXFU2RAsFee2Q2MTwUW7hR25cJvSFuB1BX2bfkoCbiMk923tHZGU2g7rSKF1GDDkXAc1EvFFD4iGbh1Q5t6hPRhBV8PEncdcCWGq5uAL5D4Bjr6VXG8uNeCy5oYWNgbZ5JRSfm7QEhPv8Fy9AKMgmCxDGMF9dVEaU6tw2BAnJavQdfrxChbDBeQXzCbCfep6oei6n2LZdE5Q84wp7eoQFE5Cwuo23tHkbJCaw2njFi3WGBbA7uGZaGHJPyB2rofTWBiSUXZnP2hiE9bjJghAcDm1M4LVLfWvhZmFEnyeru3VWMETnetz1BYLUC5MJGFXuhnHwWh7F6r74FDyhdswYop4eWPbyrXMXmUQEccTGd2NaT8g2VHADZ76gMC6BjWESvcnz2D4n8XwdmM7ZQ1jFwhuXrBfrb1dwRasyXxxHMGAC2onatNiExyeQ9G1W5LwqNLAh9hvcaNTGaYKYXoceVzLkgm6e5WMkLsCwuZXvB"
  }
}
```


### **check_spend_proof**

Prouver une dépense en utilisant une signature. Contrairement à la preuve d'une transaction, cela ne nécessite pas l'adresse publique de destination.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction.
* *message* - chaîne de caractères; (Optionnel) Doit être le même message que celui utilisé dans `get_spend_proof`.
* *signature* - chaîne de caractères; Signature de la dépense à confirmer.

Sorties :

* *good* - booléen; Indique si les entrées prouvent la dépense.

Dans l'exemple ci-dessous, la dépense a été prouvée :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_spend_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","message":"this is my transaction","signature":"SpendProofV1aSh8Todhk54736iXgV6vJAFP7egxByuMWZeyNDaN2JY737S95X5zz5mNMQSuCNSLjjhi5HJCsndpNWSNVsuThxwv285qy1KkUrLFRkxMSCjfL6bbycYN33ScZ5UB4Fzseceo1ndpL393T1q638VmcU3a56dhNHF1RPZFiGPS61FA78nXFSqE9uoKCCoHkEz83M1dQVhxZV5CEPF2P6VioGTKgprLCH9vvj9k1ivd4SX19L2VSMc3zD1u3mkR24ioETvxBoLeBSpxMoikyZ6inhuPm8yYo9YWyFtQK4XYfAV9mJ9knz5fUPXR8vvh7KJCAg4dqeJXTVb4mbMzYtsSZXHd6ouWoyCd6qMALdW8pKhgMCHcVYMWp9X9WHZuCo9rsRjRpg15sJUw7oJg1JoGiVgj8P4JeGDjnZHnmLVa5bpJhVCbMhyM7JLXNQJzFWTGC27TQBbthxCfQaKdusYnvZnKPDJWSeceYEFzepUnsWhQtyhbb73FzqgWC4eKEFKAZJqT2LuuSoxmihJ9acnFK7Ze23KTVYgDyMKY61VXADxmSrBvwUtxCaW4nQtnbMxiPMNnDMzeixqsFMBtN72j5UqhiLRY99k6SE7Qf5f29haNSBNSXCFFHChPKNTwJrehkofBdKUhh2VGPqZDNoefWUwfudeu83t85bmjv8Q3LrQSkFgFjRT5tLo8TMawNXoZCrQpyZrEvnodMDDUUNf3NL7rxyv3gM1KrTWjYaWXFU2RAsFee2Q2MTwUW7hR25cJvSFuB1BX2bfkoCbiMk923tHZGU2g7rSKF1GDDkXAc1EvFFD4iGbh1Q5t6hPRhBV8PEncdcCWGq5uAL5D4Bjr6VXG8uNeCy5oYWNgbZ5JRSfm7QEhPv8Fy9AKMgmCxDGMF9dVEaU6tw2BAnJavQdfrxChbDBeQXzCbCfep6oei6n2LZdE5Q84wp7eoQFE5Cwuo23tHkbJCaw2njFi3WGBbA7uGZaGHJPyB2rofTWBiSUXZnP2hiE9bjJghAcDm1M4LVLfWvhZmFEnyeru3VWMETnetz1BYLUC5MJGFXuhnHwWh7F6r74FDyhdswYop4eWPbyrXMXmUQEccTGd2NaT8g2VHADZ76gMC6BjWESvcnz2D4n8XwdmM7ZQ1jFwhuXrBfrb1dwRasyXxxHMGAC2onatNiExyeQ9G1W5LwqNLAh9hvcaNTGaYKYXoceVzLkgm6e5WMkLsCwuZXvB"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": true
  }
}
```

Dans l'exemple ci-dessous, le message utilisé est mauvais, empêchant la preuve de la dépense :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_spend_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","message":"wrong message","signature":"SpendProofV1aSh8Todhk54736iXgV6vJAFP7egxByuMWZeyNDaN2JY737S95X5zz5mNMQSuCNSLjjhi5HJCsndpNWSNVsuThxwv285qy1KkUrLFRkxMSCjfL6bbycYN33ScZ5UB4Fzseceo1ndpL393T1q638VmcU3a56dhNHF1RPZFiGPS61FA78nXFSqE9uoKCCoHkEz83M1dQVhxZV5CEPF2P6VioGTKgprLCH9vvj9k1ivd4SX19L2VSMc3zD1u3mkR24ioETvxBoLeBSpxMoikyZ6inhuPm8yYo9YWyFtQK4XYfAV9mJ9knz5fUPXR8vvh7KJCAg4dqeJXTVb4mbMzYtsSZXHd6ouWoyCd6qMALdW8pKhgMCHcVYMWp9X9WHZuCo9rsRjRpg15sJUw7oJg1JoGiVgj8P4JeGDjnZHnmLVa5bpJhVCbMhyM7JLXNQJzFWTGC27TQBbthxCfQaKdusYnvZnKPDJWSeceYEFzepUnsWhQtyhbb73FzqgWC4eKEFKAZJqT2LuuSoxmihJ9acnFK7Ze23KTVYgDyMKY61VXADxmSrBvwUtxCaW4nQtnbMxiPMNnDMzeixqsFMBtN72j5UqhiLRY99k6SE7Qf5f29haNSBNSXCFFHChPKNTwJrehkofBdKUhh2VGPqZDNoefWUwfudeu83t85bmjv8Q3LrQSkFgFjRT5tLo8TMawNXoZCrQpyZrEvnodMDDUUNf3NL7rxyv3gM1KrTWjYaWXFU2RAsFee2Q2MTwUW7hR25cJvSFuB1BX2bfkoCbiMk923tHZGU2g7rSKF1GDDkXAc1EvFFD4iGbh1Q5t6hPRhBV8PEncdcCWGq5uAL5D4Bjr6VXG8uNeCy5oYWNgbZ5JRSfm7QEhPv8Fy9AKMgmCxDGMF9dVEaU6tw2BAnJavQdfrxChbDBeQXzCbCfep6oei6n2LZdE5Q84wp7eoQFE5Cwuo23tHkbJCaw2njFi3WGBbA7uGZaGHJPyB2rofTWBiSUXZnP2hiE9bjJghAcDm1M4LVLfWvhZmFEnyeru3VWMETnetz1BYLUC5MJGFXuhnHwWh7F6r74FDyhdswYop4eWPbyrXMXmUQEccTGd2NaT8g2VHADZ76gMC6BjWESvcnz2D4n8XwdmM7ZQ1jFwhuXrBfrb1dwRasyXxxHMGAC2onatNiExyeQ9G1W5LwqNLAh9hvcaNTGaYKYXoceVzLkgm6e5WMkLsCwuZXvB"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": false
  }
}
```


### **get_reserve_proof**

Générer une signature prouvant d'un certain montant disponible dans un portefeuille.

Alias : *Aucun*.

Entrées :

* *all* - booléen; Prouve que tout le solde du portefeuille est utilisable.
* *account_index* - entier non signé; Spécifie le compte pour lequel prouver une réserve. (ignoré si `all` positionné à `true`)
* *amount* - entier non signé; Montant (en @unités-atomiques) à prouver dont dispose le compte. (ignoré si `all` positionné à `true`)
* *message* - chaîne de caractères; (Optionnel) ajoute un message à la signature pour améliorer l'authentification du processus de vérification.

Sorties :

* *signature* - chaîne de caractères; Signature de la réserve.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":false,"account_index":0,"amount":100000000000}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signature": "ReserveProofV11BZ23sBt9sZJeGccf84mzyAmNCP3KzYbE1111112VKmH111118NfCYJQjZ6c46gT2kXgcHCaSSZeL8sRdzqjqx7i1e7FQfQGu2o113UYFVdwzHQi3iENDPa76Kn1BvywbKz3bMkXdZkBEEhBSF4kjjGaiMJ1ucKb6wvMVC4A8sA4nZEdL2Mk3wBucJCYTZwKqA8i1M113kqakDkG25FrjiDqdQTCYz2wDBmfKxF3eQiV5FWzZ6HmAyxnqTWUiMWukP9A3Edy3ZXqjP1b23dhz7Mbj39bBxe3ZeDNu9HnTSqYvHNRyqCkeUMJpHyQweqjGUJ1DSfFYr33J1E7MkhMnEi1o7trqWjVix32XLetYfePG73yvHbS24837L7Q64i5n1LSpd9yMiQZ3Dyaysi5y6jPx7TpAvnSqBFtuCciKoNzaXoA3dqt9cuVFZTXzdXKqdt3cXcVJMNxY8RvKPVQHhUur94Lpo1nSpxf7BN5a5rHrbZFqoZszsZmiWikYPkLX72XUdw6NWjLrTBxSy7KuPYH86c6udPEXLo2xgN6XHMBMBJzt8FqqK7EcpNUBkuHm2AtpGkf9CABY3oSjDQoRF5n4vNLd3qUaxNsG4XJ12L9gJ7GrK273BxkfEA8fDdxPrb1gpespbgEnCTuZHqj1A"
  }
}
```


### **check_reserve_proof**

Prouve qu'un portefeuille contient une réserve utilisable en utilisant une signature.

Alias : *Aucun*.

Entrées :

* *address* - chaîne de caractères; Adresse publique du portefeuille.
* *message* - chaîne de caractères; (Optionnel) Doit être le même message que celui utilisé dans `get_reserve_proof`.
* *signature* - chaîne de caractères; Signature de la réserve à confirmer.

Sorties :

* *good* - booléen; Indique si les entrées prouvent la réserve.

Dans l'exemple ci-dessous, la réserve a été prouvée :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt","signature":"ReserveProofV11BZ23sBt9sZJeGccf84mzyAmNCP3KzYbE1111112VKmH111118NfCYJQjZ6c46gT2kXgcHCaSSZeL8sRdzqjqx7i1e7FQfQGu2o113UYFVdwzHQi3iENDPa76Kn1BvywbKz3bMkXdZkBEEhBSF4kjjGaiMJ1ucKb6wvMVC4A8sA4nZEdL2Mk3wBucJCYTZwKqA8i1M113kqakDkG25FrjiDqdQTCYz2wDBmfKxF3eQiV5FWzZ6HmAyxnqTWUiMWukP9A3Edy3ZXqjP1b23dhz7Mbj39bBxe3ZeDNu9HnTSqYvHNRyqCkeUMJpHyQweqjGUJ1DSfFYr33J1E7MkhMnEi1o7trqWjVix32XLetYfePG73yvHbS24837L7Q64i5n1LSpd9yMiQZ3Dyaysi5y6jPx7TpAvnSqBFtuCciKoNzaXoA3dqt9cuVFZTXzdXKqdt3cXcVJMNxY8RvKPVQHhUur94Lpo1nSpxf7BN5a5rHrbZFqoZszsZmiWikYPkLX72XUdw6NWjLrTBxSy7KuPYH86c6udPEXLo2xgN6XHMBMBJzt8FqqK7EcpNUBkuHm2AtpGkf9CABY3oSjDQoRF5n4vNLd3qUaxNsG4XJ12L9gJ7GrK273BxkfEA8fDdxPrb1gpespbgEnCTuZHqj1A"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": true,
    "spent": 0,
    "total": 100000000000
  }
}
```

Dans l'exemple ci-dessous, toute la réserve du portefeuille a été prouvée :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt","message":"I have 10 at least","signature":"...signature..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": true,
    "spent": 0,
    "total": 164113855714662789
  }
}
```

Dans l'exemple ci-dessous, le message utilisé est mauvais, empêchant la preuve de la réserve :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"check_spend_proof","params":{"txid":"19d5089f9469db3d90aca9024dfcb17ce94b948300101c8345a5e9f7257353be","message":"wrong message","signature":"SpendProofV1aSh8Todhk54736iXgV6vJAFP7egxByuMWZeyNDaN2JY737S95X5zz5mNMQSuCNSLjjhi5HJCsndpNWSNVsuThxwv285qy1KkUrLFRkxMSCjfL6bbycYN33ScZ5UB4Fzseceo1ndpL393T1q638VmcU3a56dhNHF1RPZFiGPS61FA78nXFSqE9uoKCCoHkEz83M1dQVhxZV5CEPF2P6VioGTKgprLCH9vvj9k1ivd4SX19L2VSMc3zD1u3mkR24ioETvxBoLeBSpxMoikyZ6inhuPm8yYo9YWyFtQK4XYfAV9mJ9knz5fUPXR8vvh7KJCAg4dqeJXTVb4mbMzYtsSZXHd6ouWoyCd6qMALdW8pKhgMCHcVYMWp9X9WHZuCo9rsRjRpg15sJUw7oJg1JoGiVgj8P4JeGDjnZHnmLVa5bpJhVCbMhyM7JLXNQJzFWTGC27TQBbthxCfQaKdusYnvZnKPDJWSeceYEFzepUnsWhQtyhbb73FzqgWC4eKEFKAZJqT2LuuSoxmihJ9acnFK7Ze23KTVYgDyMKY61VXADxmSrBvwUtxCaW4nQtnbMxiPMNnDMzeixqsFMBtN72j5UqhiLRY99k6SE7Qf5f29haNSBNSXCFFHChPKNTwJrehkofBdKUhh2VGPqZDNoefWUwfudeu83t85bmjv8Q3LrQSkFgFjRT5tLo8TMawNXoZCrQpyZrEvnodMDDUUNf3NL7rxyv3gM1KrTWjYaWXFU2RAsFee2Q2MTwUW7hR25cJvSFuB1BX2bfkoCbiMk923tHZGU2g7rSKF1GDDkXAc1EvFFD4iGbh1Q5t6hPRhBV8PEncdcCWGq5uAL5D4Bjr6VXG8uNeCy5oYWNgbZ5JRSfm7QEhPv8Fy9AKMgmCxDGMF9dVEaU6tw2BAnJavQdfrxChbDBeQXzCbCfep6oei6n2LZdE5Q84wp7eoQFE5Cwuo23tHkbJCaw2njFi3WGBbA7uGZaGHJPyB2rofTWBiSUXZnP2hiE9bjJghAcDm1M4LVLfWvhZmFEnyeru3VWMETnetz1BYLUC5MJGFXuhnHwWh7F6r74FDyhdswYop4eWPbyrXMXmUQEccTGd2NaT8g2VHADZ76gMC6BjWESvcnz2D4n8XwdmM7ZQ1jFwhuXrBfrb1dwRasyXxxHMGAC2onatNiExyeQ9G1W5LwqNLAh9hvcaNTGaYKYXoceVzLkgm6e5WMkLsCwuZXvB"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": false
  }
}
```


### **get_transfers**

Retourne une liste de transferts.

Alias : *Aucun*.

Entrées :

* *in* - booléen; (Optionnel) Inclure les transferts entrants.
* *out* - booléen; (Optionnel) Inclure les transferts sortants.
* *pending* - booléen; (Optionnel) Inclure les transferts en attente.
* *failed* - booléen; (Optionnel) Inclure les transferts échoués.
* *pool* - booléen; (Optionnel) Inclure les transferts du pool de transactions du démon.
* *filter_by_height* - booléen; (Optionnel) Filtrer les transferts par hauteur de bloc.
* *min_height* - entier non signé; (Optionnel) Hauteur de bloc minimale pour rechercher les transferts, si le filtrage par hauteur de bloc est activé.
* *max_height* - entier non signé; (Opional) Hauteur de bloc maximale pour rechercher les transferts, si le filtrage par hauteur de bloc est activé (Hauteur de bloc maximale par défaut).
* *account_index* - entier non signé; (Optionnel) Index du compte pour lequel rechercher les transferts. (0 par défaut)
* *subaddr_indices* - liste d'entier non signé; (Optionnel) Liste d'indices de sous-adresse pour lequel rechercher les transferts. (0 par défaut)

Sorties :

* *in* liste de transferts :
  * *address* - chaîne de caractères; Adresse publique du transfert.
  * *amount* - entier non signé; Montant transféré.
  * *confirmations* - entier non signé; Nombre de blocs minés depuis le bloc contenant cette transaction (ou hauteur de bloc à laquelle la transaction devrait être ajoutée à un bloc si elle n'est pas encore confirmée).
  * *double_spend_seen* - booléen; `True` si l(es) image(s) de clef du transfert ont été vues par le passé.
  * *fee* - entier non signé; Frais de transaction pour ce transfert.
  * *height* - entier non signé; Hauteur du premier bloc ayant confirmé ce transfert (0 si pas encore miné).
  * *note* - chaîne de caractères; Remarque à propos de ce transfert.
  * *payment_id* - chaîne de caractères; ID de paiement pour ce transfert.
  * *subaddr_index* - Objet JSON contenant les index majeur & mineur de sous-adresse :
    * *major* - entier non signé; Index de compte pour la sous-adresse.
    * *minor* - entier non signé; Index de la sous-adresse under the account.
  * *suggested_confirmations_threshold* - entier non signé; Estimation des confirmations nécessaires pour que ce transfert soit inclu dans un bloc.
  * *timestamp* - entier non signé; Temps POSIX de la première confirmation dans un bloc de ce transfert (ou moment de la soumission s'il n'est pas encore miné).
  * *txid* - chaîne de caractères; ID de transaction pour ce transfert.
  * *type* - chaîne de caractères; Type de transfert : "in"
  * *unlock_time* - entier non signé; Nombre de blocs avant que ce transfert puisse être dépensé en toute sécurité.
* *out* liste de transferts (voir ci-dessus).
* *pending* liste de transferts (voir ci-dessus).
* *failed* liste de transferts (voir ci-dessus).
* *pool* liste de transferts (voir ci-dessus).


Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_transfers","params":{"in":true,"account_index":1}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "in": [{
      "address": "77Vx9cs1VPicFndSVgYUvTdLCJEZw9h81hXLMYsjBCXSJfUehLa9TDW3Ffh45SQa7xb6dUs18mpNxfUhQGqfwXPSMrvKhVp",
      "amount": 200000000000,
      "confirmations": 1,
      "double_spend_seen": false,
      "fee": 21650200000,
      "height": 153624,
      "note": "",
      "payment_id": "0000000000000000",
      "subaddr_index": {
        "major": 1,
        "minor": 0
      },
      "suggested_confirmations_threshold": 1,
      "timestamp": 1535918400,
      "txid": "c36258a276018c3a4bc1f195a7fb530f50cd63a4fa765fb7c6f7f49fc051762a",
      "type": "in",
      "unlock_time": 0
    }]
  }
}
```

### **get_transfer_by_txid**

Affiche les informations à propos d'un transfert depuis ou vers cette adresse.

Alias : *Aucun*.

Entrées :

* *txid* - chaîne de caractères; ID de transaction utilisé pour trouver le transfert.
* *account_index* - entier non signé; (Optionnel) Index du compte pour lequel rechercher les transferts.

Sorties :

* *transfer* - Objet JSON contenant les informations de paiement :
  * *address* - chaîne de caractères; Adresse ayant transféré les fonds. Représentation Base58 des clefs publiques.
  * *amount* - entier non signé; Montant de ce transfert.
  * *confirmations* - entier non signé; Nombre de blocs minés depuis le bloc contenant cette transaction (ou hauteur de bloc à laquelle la transaction devrait être ajoutée à un bloc si elle n'est pas encore confirmée).
  * *destinations* - liste d'objets JSON contenant les destinations du transfert :
    * *amount* - entier non signé; Montant transféré vers cette destination.
    * *address* - chaîne de caractères; Address de cette destination. Représentation Base58 des clefs publiques.
  * *double_spend_seen* - booléen; `True` si l(es) image(s) de clef du transfert ont été vues par le passé.
  * *fee* - entier non signé; Frais de transaction pour ce transfert.
  * *height* - entier non signé; Hauteur du premier bloc ayant confirmé ce transfert.
  * *note* - chaîne de caractères; Remarque à propos de ce transfert.
  * *payment_id* - chaîne de caractères; ID de paiement pour ce transfert.
  * *subaddr_index* - Objet JSON contenant les index majeur & mineur de sous-adresse :
    * *major* - entier non signé; Index de compte pour la sous-adresse.
    * *minor* - entier non signé; Index de la sous-adresse under the account.
  * *suggested_confirmations_threshold* - entier non signé; Estimation des confirmations nécessaires pour que ce transfert soit inclu dans un bloc.
  * *timestamp* - entier non signé; POSIX timestamp for the block that confirmed this transfer (or timestamp submission if not mined yet).
  * *txid* - chaîne de caractères; ID de transaction de ce transfert (identique à l'ID de transaction en entrée).
  * *type* - chaîne de caractères; Type de transfert, l'un de : "in", "out", "pending", "failed", "pool"
  * *unlock_time* - entier non signé; Nombre de blocs avant que ce transfert puisse être dépensé en toute sécurité.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_transfer_by_txid","params":{"txid":"c36258a276018c3a4bc1f195a7fb530f50cd63a4fa765fb7c6f7f49fc051762a"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "transfer": {
      "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "amount": 300000000000,
      "confirmations": 1,
      "destinations": [{
        "address": "7BnERTpvL5MbCLtj5n9No7J5oE5hHiB3tVCK5cjSvCsYWD2WRJLFuWeKTLiXo5QJqt2ZwUaLy2Vh1Ad51K7FNgqcHgjW85o",
        "amount": 100000000000
      },{
        "address": "77Vx9cs1VPicFndSVgYUvTdLCJEZw9h81hXLMYsjBCXSJfUehLa9TDW3Ffh45SQa7xb6dUs18mpNxfUhQGqfwXPSMrvKhVp",
        "amount": 200000000000
      }],
      "double_spend_seen": false,
      "fee": 21650200000,
      "height": 153624,
      "note": "",
      "payment_id": "0000000000000000",
      "subaddr_index": {
        "major": 0,
        "minor": 0
      },
      "suggested_confirmations_threshold": 1,
      "timestamp": 1535918400,
      "txid": "c36258a276018c3a4bc1f195a7fb530f50cd63a4fa765fb7c6f7f49fc051762a",
      "type": "out",
      "unlock_time": 0
    }
  }
}
```


### **sign**

Signer une chaîne de caractères.

Alias : *Aucun*.

Entrées :

* *data* - chaîne de caractères; Tout ce que vous avez besoin de signer.

Sorties :

* *signature* - chaîne de caractères; Signature généré à partir de `data` et de l'adresse publique du compte.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"This is sample data to be signed"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signature": "SigV14K6G151gycjiGxjQ74tKX6A2LwwghvuHjcDeuRFQio5LS6Gb27BNxjYQY1dPuUvXkEbGQUkiHSVLPj4nJAHRrrw3"
  }
}
```


### **verify**

Verifier la signature d'une chaîne de caractères.

Alias : *Aucun*.

Entrées :

* *data* - chaîne de caractères; Ce qui doit avoir été signé.
* *address* - chaîne de caractères; Adresse publique du portefeuille utilisé pour `signer` les données.
* *signature* - chaîne de caractères; Signature générée par la méthode `sign`.

Sorties :

* *good* - booléen;

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"This is sample data to be signed","address":"55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt","signature":"SigV14K6G151gycjiGxjQ74tKX6A2LwwghvuHjcDeuRFQio5LS6Gb27BNxjYQY1dPuUvXkEbGQUkiHSVLPj4nJAHRrrw3"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "good": true
  }
}
```


### **export_outputs**

Exporte toutes les sorties au format hexadécimal.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *outputs_data_hex* - chaîne de caractères; Sortie du portefeuille au format hexadécimal.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"export_outputs"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "outputs_data_hex": "...outputs..."
  }
}
```


### **import_outputs**

Importer des sorties au format hexadécimal.

Alias : *Aucun*.

Entrées :

* *outputs_data_hex* - chaîne de caractères; Sorties de portefeuille au format hexadecimal.

Sorties :

* *num_imported* - entier non signé; Nombre de sorties importées.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"import_outputs","params":{"outputs_data_hex":"...outputs..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "num_imported": 6400
  }
}
```


### **export_key_images**

Exporter un lot signé d'images de clef.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *signed_key_images* - liste de d'images de clef signées :
  * *key_image* - chaîne de caractères;
  * *signature* - chaîne de caractères;

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"export_key_images"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "signed_key_images": [{
      "key_image": "cd35239b72a35e26a57ed17400c0b66944a55de9d5bda0f21190fed17f8ea876",
      "signature": "c9d736869355da2538ab4af188279f84138c958edbae3c5caf388a63cd8e780b8c5a1aed850bd79657df659422c463608ea4e0c730ba9b662c906ae933816d00"
    },{
      "key_image": "65158a8ee5a3b32009b85a307d85b375175870e560e08de313531c7dbbe6fc19",
      "signature": "c96e40d09dfc45cfc5ed0b76bfd7ca793469588bb0cf2b4d7b45ef23d40fd4036057b397828062e31700dc0c2da364f50cd142295a8405b9fe97418b4b745d0c"
    },...]
  }
}
```


### **import_key_images**

Importer une liste d'images de clefs signées et vérifier leur état de dépense.

Alias : *Aucun*.

Entrées :

* *signed_key_images* - liste d'images de clef signées :
  * *key_image* - chaîne de caractères;
  * *signature* - chaîne de caractères;

Sorties :

* *height* - entier non signé;
* *spent* - entier non signé; Montant (en @unités-atomiques) dépensé depuis ces images de clef.
* *unspent* - entier non signé; Montant (en @unités-atomiques) toujours disponible depuis ces images de clef.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"import_key_images", "params":{"signed_key_images":[{"key_image":"cd35239b72a35e26a57ed17400c0b66944a55de9d5bda0f21190fed17f8ea876","signature":"c9d736869355da2538ab4af188279f84138c958edbae3c5caf388a63cd8e780b8c5a1aed850bd79657df659422c463608ea4e0c730ba9b662c906ae933816d00"},{"key_image":"65158a8ee5a3b32009b85a307d85b375175870e560e08de313531c7dbbe6fc19","signature":"c96e40d09dfc45cfc5ed0b76bfd7ca793469588bb0cf2b4d7b45ef23d40fd4036057b397828062e31700dc0c2da364f50cd142295a8405b9fe97418b4b745d0c"}]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "height": 76428,
    "spent": 62708953408711,
    "unspent": 0
  }
}
```


### **make_uri**

Créer une URI de paiement utilisant les spécifications URI officielles.

Alias : *Aucun*.

Entrées :

* *address* - chaîne de caractères; Adresse de portefeuille.
* *amount* - entier non signé; (optionnel) Le montant sous forme d'entier à recevoir, en **@unités-atomiques**.
* *payment_id* - chaîne de caractères; (optionnel) ID de paiement de 16 ou 64 caractères hexadécimaux.
* *recipient_name* - chaîne de caractères; (optionnel) Nom du destinataire du paiement.
* *tx_description* - chaîne de caractères; (optionnel) Description du motif de la transaction.

Sorties :

* *uri* - chaîne de caractères; Contient toutes les informations entrées sous forme d'une URI de paiement correctement formatée.

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_uri","params":{"address":"55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt","amount":10,"payment_id":"420fa29b2d9a49f5","tx_description":"Testing out the make_uri function.","recipient_name":"el00ruobuob Stagenet wallet"}}'  -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "uri": "monero:55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt?tx_payment_id=420fa29b2d9a49f5&tx_amount=0.000000000010&recipient_name=el00ruobuob%20Stagenet%20wallet&tx_description=Testing%20out%20the%20make_uri%20function."
  }
}
```


### **parse_uri**

Analyser une URI de paiement pour obtenir les informations de paiement.

Alias : *Aucun*.

Entrées :

* *uri* - chaîne de caractères; Contient toutes les informations entrées sous forme d'une URI de paiement correctement formatée.

Sorties :

* *uri* - Objet JSON contenant les informations de paiement :
  * *address* - chaîne de caractères; Adresse de portefeuille
  * *amount* - entier non signé; Montant sous forme d'entier à recevoir, en @unités-atomiques (0 si non fourni)
  * *payment_id* - chaîne de caractères; ID de paiement de 16 ou 64 caractères hexadécimaux (vide si non fourni)
  * *recipient_name* - chaîne de caractères; Nom du destinataire du paiement (vide si non fourni)
  * *tx_description* - chaîne de caractères; Description du motif de la transaction (vide si non fourni)

Exemple :

```
$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"parse_uri","params":{"uri":"monero:55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt?tx_payment_id=420fa29b2d9a49f5&tx_amount=0.000000000010&recipient_name=el00ruobuob%20Stagenet%20wallet&tx_description=Testing%20out%20the%20make_uri%20function."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "uri": {
      "address": "55LTR8KniP4LQGJSPtbYDacR7dz8RBFnsfAKMaMuwUNYX6aQbBcovzDPyrQF9KXF9tVU6Xk3K8no1BywnJX6GvZX8yJsXvt",
      "amount": 10,
      "payment_id": "420fa29b2d9a49f5",
      "recipient_name": "el00ruobuob Stagenet wallet",
      "tx_description": "Testing out the make_uri function."
    }
  }
}
```


### **get_address_book**

Récupère les entrées du carnet d'adresses.

Alias : *Aucun*.

Entrées :

* *entries* - liste d'entier non signé; indices des entrées recherchées du carnet d'adresses.

Sorties :

* *entries* - liste d'entrées:
  * *address* - chaîne de caractères; Adresse publique de l'entrée.
  * *description* - chaîne de caractères; Description de cette entrée.
  * *index* - entier non signé;
  * *payment_id* - chaîne de caractères;

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_address_book","params":{"entries":[0,1]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "entries": [{
      "address": "77Vx9cs1VPicFndSVgYUvTdLCJEZw9h81hXLMYsjBCXSJfUehLa9TDW3Ffh45SQa7xb6dUs18mpNxfUhQGqfwXPSMrvKhVp",
      "description": "Second account",
      "index": 0,
      "payment_id": "0000000000000000000000000000000000000000000000000000000000000000"
    },{
      "address": "78P16M3XmFRGcWFCcsgt1WcTntA1jzcq31seQX1Eg92j8VQ99NPivmdKam4J5CKNAD7KuNWcq5xUPgoWczChzdba5WLwQ4j",
      "description": "Third account",
      "index": 1,
      "payment_id": "0000000000000000000000000000000000000000000000000000000000000000"
    }]
  }
}
```


### **add_address_book**

Ajouter une entrée au carnet d'adresse.

Alias : *Aucun*.

Entrées :

* *address* - chaîne de caractères;
* *payment_id* - (optionnel) chaîne de caractères, "0000000000000000000000000000000000000000000000000000000000000000" par défaut;
* *description* - (optionnel) chaîne de caractères, "" par défaut;

Sorties :

* *index* - entier non signé; L'index de l'entrée du carnet d'adresses.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"add_address_book","params":{"address":"78P16M3XmFRGcWFCcsgt1WcTntA1jzcq31seQX1Eg92j8VQ99NPivmdKam4J5CKNAD7KuNWcq5xUPgoWczChzdba5WLwQ4j","description":"Third account"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "index": 1
  }
}
```


### **delete_address_book**

Supprime une entrée du carnet d'adresses.

Alias : *Aucun*.

Entrées :

* *index* - entier non signé; L'index de l'entrée du carnet d'adresses.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"delete_address_book","params":{"index":1}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **refresh**

Rafraichit un portefeuille après son ouverture.

Alias : *Aucun*.

Entrées :

* *start_height* - entier non signé; (Optionnel) La hauteur de bloc à partir de laquelle commencer le rafraichissement.

Sorties :

* *blocks_fetched* - entier non signé; Nombre de nouveaux blocs scannés.
* *received_money* - booléen; Indique si des transactions à destination du portefeuille ont été trouvées dans les blocs.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"refresh","params":{"start_height":100000}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blocks_fetched": 24,
    "received_money": true
  }
}
```


### **rescan_spent**

Rescanner la chaîne de bloc pour des sorties dépensées.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties : *Aucun*.

Exemple :

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

Démarrer l'extraction minière dans le démon Monero.

Alias : *Aucun*.

Entrées :

* *threads_count* - entier non signé; Nombre de processus créés pour l'extraction minière.
* *do_background_mining* - booléen; Permet de démarrer le mineur en mode d'@Extraction-minière-intelligente
* *ignore_battery* - booléen; Ignore l'état de la batterie (pour l'@Extraction-minière-intelligente uniquement)

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"start_mining","params":{"threads_count":1,"do_background_mining":true,"ignore_battery":false}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **stop_mining**

Arrête l'extraction minière sur le démon Monero.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties : *Aucun*.

Exemple :

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

Obtenir la listes des langues disponibles pour la phrase mnémonique de votre portefeuille.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *languages* - liste de chaîne de caractères; Liste des langues disponibles.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_languages"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "languages": ["Deutsch","English","Español","Français","Italiano","Nederlands","Português","русский язык","日本語","简体中文 (中国)","Esperanto","Lojban"]
  }
}
```


### **create_wallet**

Créer un nouveau portefeuille. Vous devez avoir utiliser l'option "--wallet-dir" lors du lancement de monero-wallet-rpc pour que cela fonctionne.

Alias : *Aucun*.

Entrées :

* *filename* - chaîne de caractères; Nom du fichier du portefeuille.
* *password* - chaîne de caractères; (Optionnel) mot de passe pour protéger le portefeuille.
* *language* - chaîne de caractères; Langue de la phrase mnémonique du portefeuille.

Sorties : *Aucun*.

Exemple :

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

Ouvrir un portefeuille. Vous devez avoir utiliser l'option "--wallet-dir" lors du lancement de monero-wallet-rpc pour que cela fonctionne.

Alias : *Aucun*.

Entrées :

* *filename* - chaîne de caractères; Nom du portefeuille stocké dans --wallet-dir.
* *password* - chaîne de caractères; (Optionnel) uniquement nécessaire si le portefeuille a un mot de passe défini.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"open_wallet","params":{"filename":"mytestwallet","password":"mytestpassword"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **close_wallet**

Ferme le portefeuille actuel, après avoir essayé de le sauvegarder.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"close_wallet"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **change_wallet_password**

Changer le mot de passe d'un portefeuille.

Alias : *Aucun*.

Entrées :

* *old_password* - chaîne de caractères; (Optionnel) Mot de passe actuel du portefeuille, si défini.
* *new_password* - chaîne de caractères; (Optionnel) Nouveau mot de passe du portefeuille, si non vide.

Sorties : *Aucun*.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"theCurrentSecretPassPhrase","new_password":"theNewSecretPassPhrase"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
  }
}
```


### **is_multisig**

Vérifie si un portefeuille est un portefeuille multi-signatures.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *multisig* - booléen; Indique si le portefeuille est multi-signatures.
* *ready* - booléen; 
* *threshold* - entier non signé; Nombre de signatures nécessaires pour signer un transfert.
* *total* - entier non signé; Nombre total de signature dans le portefeuille multi-signatures.

Exemple pour un portefeuille non-multi-signatures :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"is_multisig"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "multisig": false,
    "ready": false,
    "threshold": 0,
    "total": 0
  }
}
```
Exemple pour un portefeuille multi-signatures :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"is_multisig"}' -H 'Content-Type: application/json'                  {
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "multisig": true,
    "ready": true,
    "threshold": 2,
    "total": 2
  }
}
```


### **prepare_multisig**

Prepare un portefeuille pour les multi-signatures en générant une chaîne de caractères de multi-signatures à partager avec les homologues.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *multisig_info* - chaîne de caractères; Chaîne de caractères de multi-signatures à partager avec des homologues pour créer le portefeuille multi-signatures.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"prepare_multisig"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "multisig_info": "MultisigV1BFdxQ653cQHB8wsj9WJQd2VdnjxK89g5M94dKPBNw22reJnyJYKrz6rJeXdjFwJ3Mz6n4qNQLd6eqUZKLiNzJFi3UPNVcTjtkG2aeSys9sYkvYYKMZ7chCxvoEXVgm74KKUcUu4V8xveCBFadFuZs8shnxBWHbcwFr5AziLr2mE7KHJT"
  }
}
```


### **make_multisig**

Rendre un portefeuille multi-Signatures en important les chaînes de caractères de multi-signatures des homologues.

Alias : *Aucun*.

Entrées :

* *multisig_info* - liste de chaîne de caractères; Liste des chaînes de caractères de multi-signatures des homologues.
* *threshold* - entier non signé; Nombres de signatures nécessaires pour signer un transfert. Doit être plus petit ou égal au nombre de signatures dans `multisig_info`.
* *password* - chaîne de caractères; Mot de passe du portefeuille.

Sorties :

* *address* - chaîne de caractères; Adresse du portefeuille multi-signatures.
* *multisig_info* - chaîne de caractères; Chaîne de caractères multi-signatures à partager avec les homologues pour créer le portefeuille multi-signatures (étape supplémentaire pour les portefeuilles N-1/N).

Exemple pour un portefeuille multi-Signatures 2/2 :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_multisig","params":{"multisig_info":["MultisigV1K4tGGe8QirZdHgTYoBZMumSug97fdDyM3Z63M3ZY5VXvAdoZvx16HJzPCP4Rp2ABMKUqLD2a74ugMdBfrVpKt4BwD8qCL5aZLrsYWoHiA7JJwDESuhsC3eF8QC9UMvxLXEMsMVh16o98GnKRYz1HCKXrAEWfcrCHyz3bLW1Pdggyowop"],"threshold":2}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "address": "55SoZTKH7D39drxfgT62k8T4adVFjmDLUXnbzEKYf1MoYwnmTNKKaqGfxm4sqeKCHXQ5up7PVxrkoeRzXu83d8xYURouMod",
    "multisig_info": ""
  }
}
```

Exemple pour un portefeuille multi-Signatures 2/3 :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_multisig","params":{"multisig_info":["MultisigV1MTVm4DZAdJw1PyVutpSy8Q4WisZBCFRAaZY7hhQnMwr5AZ4swzThyaSiVVQM5FHj1JQi3zPKhQ4k81BZkPSEaFjwRJtbfqfJcVvCqRnmBVcWVxhnihX5s8fZWBCjKrzT3CS95spG4dzNzJSUcjheAkLzCpVmSzGtgwMhAS3Vuz9Pas24","MultisigV1TEx58ycKCd6ADCfxF8hALpcdSRAkhZTi1bu4Rs6FdRC98EdB1LY7TAkMxasM55khFgcxrSXivaSr5FCMyJGHmojm1eE4HpGWPeZKv6cgCTThRzC4u6bkkSoFQdbzWN92yn1XEjuP2XQrGHk81mG2LMeyB51MWKJAVF99Pg9mX2BpmYFj"],"threshold":2}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "address": "51sLpF8fWaK1111111111111111111111111111111111ABVbHNf1JFWJyFp5YZgZRQ44RiviJi1sPHgLVMbckRsDkTRgKS",
    "multisig_info": "MultisigxV18jCaYAQQvzCMUJaAWMCaAbAoHpAD6WPmYDmLtBtazD654E8RWkLaGRf29fJ3stU471MELKxwufNYeigP7LoE4tn2Sscwn5g7PyCfcBc1V4ffRHY3Kxqq6VocSCUTncpVeUskaDKuTAWtdB9VTBGW7iG1cd7Zm1dYgur3CiemkGjRUAj9bL3xTEuyaKGYSDhtpFZFp99HQX57EawhiRHk3qq4hjWX"
  }
}
```


### **export_multisig_info**

Exporter les informations multi-signatures pour les autres participants.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *info* - chaîne de caractères; Informations multi-signatures au format hexadécimal pour les autres participants.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"export_multisig_info"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "info": "4d6f6e65726f206d756c7469736967206578706f72740105cf6442b09b75f5eca9d846771fe1a879c9a97ab0553ffbcec64b1148eb7832b51e7898d7944c41cee000415c5a98f4f80dc0efdae379a98805bb6eacae743446f6f421cd03e129eb5b27d6e3b73eb6929201507c1ae706c1a9ecd26ac8601932415b0b6f49cbbfd712e47d01262c59980a8f9a8be776f2bf585f1477a6df63d6364614d941ecfdcb6e958a390eb9aa7c87f056673d73bc7c5f0ab1f74a682e902e48a3322c0413bb7f6fd67404f13fb8e313f70a0ce568c853206751a334ef490068d3c8ca0e"
  }
}
```


### **import_multisig_info**

Imporer les informations multi-signatures provenant des autres participants.

Alias : *Aucun*.

Entrées :

* *info* - liste de chaîne de caractères; Liste d'informations multi-signatures au format hexadécimal provenant des autres participants.

Sorties :

* *n_outputs* - entier non signé; Nombre de sorties signées avec ces informations multi-signatures.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"import_multisig_info","params":{"info":["...multisig_info..."]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "n_outputs": 35
  }
}
```


### **finalize_multisig**

Changer ce portefeuille en portefeuille multi-signature, étape supplémentaire pour les portefeuilles N-1/N.

Alias : *Aucun*.

Entrées :

* *multisig_info* - liste de chaîne de caractères; Liste des chaînes de caractères de multi-signatures des homologues.
* *password* - chaîne de caractères; Mot de passe du portefeuille.

Sorties :

* *address* - chaîne de caractères; Adresse du portefeuille multi-signatures.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"finalize_multisig","params":{"multisig_info":["MultisigxV1JNC6Ja2oBt5Sqea9LN2YEF7WYZCpHqr2EKvPG89Trf3X4E8RWkLaGRf29fJ3stU471MELKxwufNYeigP7LoE4tn2McPr4SbL9q15xNvZT5uwC9YRr7UwjXqSZHmTWN9PBuZEKVAQ4HPPyQciSCdNjgwsuFRBzrskMdMUwNMgKst1debYfm37i6PSzDoS2tk4kYTYj83kkAdR7kdshet1axQPd6HQ","MultisigxV1Unma7Ko4zdd8Ps3Af4oZwtj2JdWKzwNfP6s2G9ZvXhMoSscwn5g7PyCfcBc1V4ffRHY3Kxqq6VocSCUTncpVeUskMcPr4SbL9q15xNvZT5uwC9YRr7UwjXqSZHmTWN9PBuZE1LTpWxLoC3vPMSrqVVcjnmL9LYfdCZz3fECjNZbCEDq3PHDiUuY5jurQTcNoGhDTio5WM9xaAdim9YByiS5KyqF4"]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "address": "5B9gZUTDuHTcGGuY3nL3t8K2tDnEHeRVHSBQgLZUTQxtFYVLnho5JJjWJyFp5YZgZRQ44RiviJi1sPHgLVMbckRsDqDx1gV"
  }
}
```


### **sign_multisig**

Signer une transaction en multi-signatures.

Alias : *Aucun*.

Entrées :

* *tx_data_hex* - chaîne de caractères; Transaction multi-signature au format hexadécimal, telle que renvoyé par la méthode `transfer` via `multisig_txset`.

Sorties :

* *tx_data_hex* - chaîne de caractères; Transaction multi-signatures au format hexadécimal.
* *tx_hash_list* - liste de chaîne de caractères; Liste de hachages de transaction.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sign_multisig","params":{"tx_data_hex":"...multisig_txset..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_data_hex": "...multisig_txset...",
    "tx_hash_list": ["4996091b61c1be112c1097fd5e97d8ff8b28f0e5e62e1137a8c831bacf034f2d"]
  }
}
```


### **submit_multisig**

Soumettre une transaction mutli-signatures signée.

Alias : *Aucun*.

Entrées :

* *tx_data_hex* - chaîne de caractères; Transaction multi-signatures au format hexadécimal, telle que renvoyé par la méthode `sign_multisig` via `tx_data_hex`.

Sorties :

* *tx_hash_list* - liste de chaîne de caractères; Liste de hachages de transaction.

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"submit_multisig","params":{"tx_data_hex":"...tx_data_hex..."}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash_list": ["4996091b61c1be112c1097fd5e97d8ff8b28f0e5e62e1137a8c831bacf034f2d"]
  }
}
```


### **get_version**

Obtenir les versions RPC majeures et mineures au format entier, ou la version majeure constitue les 16 premiers bits, et la version mineure les 16 derniers bits.

Alias : *Aucun*.

Entrées : *Aucun*.

Sorties :

* *version* - entier non signé; version RPC, formatté avec `Majeure * 2^16 + Mineure` (Majeure encodée sur les 16 premiers bits, et Mineure sur les 16 derniers bits).

Exemple :

```
$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_version"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "version": 65539
  }
}
```