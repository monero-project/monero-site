---
layout: static_page
title: "Wallet RPC documentation"
title-pre-kick: "Developer Guide: "
title-kick: "Wallet RPC documentation "
title-post-kick: ""
kick-class: "green-kicks"
icon: "icon_client"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

## Introduction

This is a list of the monero-wallet-rpc calls, their inputs and outputs, and examples of each. The program monero-wallet-rpc replaced the rpc interface that was in simplewallet and then monero-wallet-cli.

All monero-wallet-rpc methods use the same JSON RPC interface. For example:

    IP=127.0.0.1
    PORT=18082
    METHOD="make_integrated_address"
    PARAMS="{\"payment_id\":\"1234567890123456789012345678900012345678901234567890123456789000\"}"
    curl \
        -X POST http://$IP:$PORT/json_rpc \
        -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
        -H 'Content-Type: application/json'

If the monero-wallet-rpc was executed with the `--rpc-login` argument as `username:password`, then follow this example:

    IP=127.0.0.1
    PORT=18082
    METHOD="make_integrated_address"
    PARAMS="{\"payment_id\":\"1234567890123456789012345678900012345678901234567890123456789000\"}"
    curl \
        -u username:password --digest \
        -X POST http://$IP:$PORT/json_rpc \
        -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
        -H 'Content-Type: application/json'

Note: "atomic units" refer to the smallest fraction of 1 XMR according to the monerod implementation. **1 XMR = 1e12 atomic units.**

### Index of JSON RPC Methods:

* [getbalance](#getbalance)
* [getaddress](#getaddress)
* [getheight](#getheight)
* [transfer](#transfer)
* [transfer_split](#transfersplit)
* [sweep_dust](#sweepdust)
* [sweep_all](#sweepall)
* [store](#store)
* [get_payments](#getpayments)
* [get_bulk_payments](#getbulkpayments)
* [get_transfers](#gettransfers)
* [get_transfer_by_txid](#gettransferbytxid)
* [incoming_transfers](#incomingtransfers)
* [query_key](#querykey)
* [make_integrated_address](#makeintegratedaddress)
* [split_integrated_address](#splitintegratedaddress)
* [stop_wallet](#stopwallet)
* [make_uri](#makeuri)
* [parse_uri](#parseuri)
* [rescan_blockchain](#rescanblockchain)
* [set_tx_notes](#settxnotes)
* [get_tx_notes](#gettxnotes)
* [sign](#sign)
* [verify](#verify)
* [export_key_images](#exportkeyimages)
* [import_key_images](#importkeyimages)
* [get_address_book](#getaddressbook)
* [add_address_book](#addaddressbook)
* [delete_address_book](#deleteaddressbook)
* [rescan_spent](#rescanspent)
* [start_mining](#startmining)
* [stop_mining](#stopmining)
* [get_languages](#getlanguages)
* [create_wallet](#createwallet)
* [open_wallet](#openwallet)

---

## JSON RPC Methods:

### getbalance

Return the wallet's balance.

Inputs: *None*.

Outputs:

* *balance* - unsigned int; The total balance of the current monero-wallet-rpc in session.
* *unlocked_balance* - unsigned int; Unlocked funds are those funds that are sufficiently deep enough in the Monero blockchain to be considered safe to spend.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getbalance"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "balance": 140000000000,
        "unlocked_balance": 50000000000
      }
    }


### getaddress

Return the wallet's address.

Inputs: *None*.

Outputs:

* *address* - string; The 95-character hex address string of the monero-wallet-rpc in session.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getaddress"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "address": "427ZuEhNJQRXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQGaDsaBA"
      }
    }


### getheight

Returns the wallet's current block height.

Inputs: *None*.

Outputs:

* *height* - unsigned int; The current monero-wallet-rpc's blockchain height. If the wallet has been offline for a long time, it may need to catch up with the daemon.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getheight"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "height": 994310
      }
    }


### transfer

Send monero to a number of recipients.

Inputs:

* *destinations* - array of destinations to receive XMR:
  * *amount* - unsigned int; Amount to send to each destination, in atomic units.
  * *address* - string; Destination public address.
* *fee* - unsigned int; Ignored, will be automatically calculated.
* *mixin* - unsigned int; Number of outpouts from the blockchain to mix with (0 means no mixing).
* *unlock_time* - unsigned int; Number of blocks before the monero can be spent (0 to not add a lock).
* *payment_id* - string; (Optional) Random 32-byte/64-character hex string to identify a transaction.
* *get_tx_key* - boolean; (Optional) Return the transaction key after sending.
* *priority* - unsigned int; Set a priority for the transaction. Accepted Values are: 0-3 for: default, unimportant, normal, elevated, priority.
* *do_not_relay* - boolean; (Optional) If true, the newly created transaction will not be relayed to the monero network. (Defaults to false)
* *get_tx_hex* - boolean; Return the transaction as hex string after sending


Outputs:

* *fee* - Integer value of the fee charged for the txn.
* *tx_hash* - String for the publically searchable transaction hash
* *tx_key* - String for the transaction key if get_tx_key is true, otherwise, blank string.
* *tx_blob* - Transaction as hex string if get_tx_hex is true


Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer","params":{"destinations":[{"amount":100000000,"address":"9wNgSYy2F9qPZu7KBjvsFgZLTKE2TZgEpNFbGka9gA5zPmAXS35QzzYaLKJRkYTnzgArGNX7TvSqZC87tBLwtaC5RQgJ8rm"},{"amount":200000000,"address":"9vH5D7Fv47mbpCpdcthcjU34rqiiAYRCh1tYywmhqnEk9iwCE9yppgNCXAyVHG5qJt2kExa42TuhzQfJbmbpeGLkVbg8xit"}],"mixin":4,"get_tx_key": true}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "fee": 48958481211,
        "tx_hash": "985180f468637bc6d2f72ee054e1e34b8d5097988bb29a2e0cb763e4464db23c",
        "tx_key": "8d62e5637f1fcc9a8904057d6bed6c697618507b193e956f77c31ce662b2ee07"
      }
    }


### transfer_split

Same as transfer, but can split into more than one tx if necessary.

Inputs:

* *destinations* - array of destinations to receive XMR:
  * *amount* - unsigned int; Amount to send to each destination, in atomic units.
  * *address* - string; Destination public address.
* *fee* - unsigned int; Ignored, will be automatically calculated.
* *mixin* - unsigned int; Number of outpouts from the blockchain to mix with (0 means no mixing).
* *unlock_time* - unsigned int; Number of blocks before the monero can be spent (0 to not add a lock).
* *payment_id* - string; (Optional) Random 32-byte/64-character hex string to identify a transaction.
* *get_tx_keys* - boolean; (Optional) Return the transaction keys after sending. -- Ignored
* *priority* - unsigned int; Set a priority for the transactions. Accepted Values are: 0-3 for: default, unimportant, normal, elevated, priority.
* *do_not_relay* - boolean; (Optional) If true, the newly created transaction will not be relayed to the monero network. (Defaults to false)
* *get_tx_hex* - boolean; Return the transactions as hex string after sending
* *new_algorithm* - boolean; True to use the new transaction construction algorithm, defaults to false.

Outputs:

* *fee_list* - array of: integer. The amount of fees paid for every transaction.
* *tx_hash_list* - array of: string. The tx hashes of every transaction.
* *tx_blob_list* - array of: string. The tx as hex string for every transaction.
* *amount_list* - array of: integer. The amount transferred for every transaction..
* *tx_key_list* - array of: string. The transaction keys for every transaction.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":100000000,"address":"9wNgSYy2F9qPZu7KBjvsFgZLTKE2TZgEpNFbGka9gA5zPmAXS35QzzYaLKJRkYTnzgArGNX7TvSqZC87tBwtaC5RQgJ8rm"},{"amount":200000000,"address":"9vH5D7Fv47mbpCpdcthcjU34rqiiAYRCh1tYywmhqnEk9iwCE9yppgNCXAyVHG5qJt2kExa42TuhzQfJbmbpeGLkVbg8xit"},{"amount":200000000,"address":"9vC5Q25cR1d3WzKX6dpTaLJaqZyDrtTnfadTmVuB1Wue2tyFGxUhiE4RGa74pEDJv7gSySzcd1Ao6G1nzSaqp78vLfP6MPj"},{"amount":200000000,"address":"A2MSrn49ziBPJBh8ZNEhhbfyLMou6mao4C1F5TLGUatmUnCxZArDYkcbAnVkVEopWVeak2rKDrmc8JpoS7n5dvfN9YDPBTG"},{"amount":200000000,"address":"9tEDyVQ8zgRQbDYiykTdpw5kZ6qWQWcKfExEj9eQshjpGb3sdr3UyWE2AHWzUGzJjaH9HN1DdGBdyQQ4AqGMc7rr5xYwZWW"}],"mixin":4,"get_tx_key": true, "new_algorithm": true}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "fee_list": [97916962422],
        "tx_hash_list": ["c5c389846e701c27aaf1f7ab8b9dc457b471fcea5bc9710e8020d51275afbc54"]
      }
    }


### sweep_dust

Send all dust outputs back to the wallet's, to make them easier to spend (and mix).

Inputs: *None*.

Outputs:

* *tx_hash_list* - list of: string

Example (In this example, `sweep_dust` returns an error due to insufficient funds to sweep):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_dust"}' -H 'Content-Type: application/json'
    {
      "error": {
        "code": -4,
        "message": "not enough money"
      },
      "id": "0",
      "jsonrpc": "2.0"
    }

### sweep_all

Send all unlocked balance to an address.

Inputs:

* *address* - string; Destination public address.
* *priority* - unsigned int; (Optional)
* *mixin* - unsigned int; Number of outpouts from the blockchain to mix with (0 means no mixing).
* *unlock_time* - unsigned int; Number of blocks before the monero can be spent (0 to not add a lock).
* *payment_id* - string; (Optional) Random 32-byte/64-character hex string to identify a transaction.
* *get_tx_keys* - boolean; (Optional) Return the transaction keys after sending.
* *below_amount* - unsigned int; (Optional)
* *do_not_relay* - boolean; (Optional)
* *get_tx_hex* - boolean; (Optional) return the transactions as hex encoded string.

Outputs:

* *tx_hash_list* - array of string;
* *tx_key_list* - array of string;
* *tx_blob_list* - array of string; 

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"9sS8eRU2b5ZbN2FPSrpkiab1bjbHE5XtL6Ti6We3Fhw5aQPudRfVVypjgzKDNkxtvTQSPs122NKggb2mqcqkKSeMNVu59S","mixin":2,"unlock_time":0,"get_tx_keys":true}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "tx_hash_list": ["53a3648797d5524dd037d4105e067fa61468faecab41927fc43adbb26c202d22"],
        "tx_key_list": ["e83b3b78235e36cd7e4d9695efd81a3b3e64c7d1f1ebd61892f0a7add6a50301"]
      }
    }

### store

Save the blockchain.

Inputs: *None*.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"store"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }


### get_payments

Get a list of incoming payments using a given payment id.

Inputs:

* *payment_id* - string

Outputs:

* *payments* - list of:
  * *payment_id* - string
  * *tx_hash* - string
  * *amount* - unsigned int
  * *block_height* - unsigned int
  * *unlock_time* - unsigned int

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030"}}' -H 'Content-Type: application/json'
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


### get_bulk_payments

Get a list of incoming payments using a given payment id, or a list of payments ids, from a given height. This method is the preferred method over `get_payments` because it has the same functionality but is more extendable. Either is fine for looking up transactions by a single payment ID.

Inputs:

* *payment_ids* - array of: string
 * *min_block_height* - unsigned int; The block height at which to start looking for payments.

Outputs:

* *payments* - list of:
  * *payment_id* - string
  * *tx_hash* - string
  * *amount* - unsigned int
  * *block_height* - unsigned int
  * *unlock_time* - unsigned int

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_bulk_payments","params":{"payment_ids":["4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030"],"min_block_height":990000}}' -H 'Content-Type: application/json'
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

### get_transfers

Returns a list of transfers.

Inputs:

* *in* - boolean;
* *out* - boolean;
* *pending* - boolean;
* *failed* - boolean;
* *pool* - boolean;
* *filter_by_height* - boolean;
* *min_height* - unsigned int;
* *max_height* - unsigned int;

Outputs:

* *in* array of transfers:
  * *txid* - string;
  * *payment_id* - string;
  * *height* - unsigned int;
  * *timestamp* - unsigned int;
  * *amount* - unsigned int;
  * *fee* - unsigned int;
  * *note* - string;
  * *destinations* - std::list<transfer_destination>;
  * *type* - string;
* *out* array of transfers
* *pending* array of transfers
* *failed* array of transfers
* *pool* array of transfers


Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_transfers","params":{"pool":true}}' -H 'Content-Type: application/json'
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

### get_transfer_by_txid

Show information about a transfer to/from this address.

Inputs:

* *txid* - string

Outputs:

* *transfer* - JSON object containing parment information:
  * *amount* - unsigned int
  * *fee* - unsigned int
  * *height* - unsigned int
  * *note* - string
  * *payment_id* - string
  * *timestamp* - unsigned int
  * *txid* - string
  * *type* - string

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_transfer_by_txid","params":{"txid":"f2d33ba969a09941c6671e6dfe7e9456e5f686eca72c1a94a3e63ac6d7f27baf"}}' -H 'Content-Type: application/json'
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

### incoming_transfers

Return a list of incoming transfers to the wallet.

Inputs:

* *transfer_type* - string; "all": all the transfers, "available": only transfers which are not yet spent, OR "unavailable": only transfers which are already spent.

Outputs:

* *transfers* - list of:
  * *amount* - unsigned int
  * *spent* - boolean
  * *global_index* - unsigned int; Mostly internal use, can be ignored by most users.
  * *tx_hash* - string; Several incoming transfers may share the same hash if they were in the same transaction.
  * *tx_size* - unsigned int

Example (Return "all" transaction types):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"all"}}' -H 'Content-Type: application/json'
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

Example (Return "available" transactions):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"available"}}' -H 'Content-Type: application/json'
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

Example (Return "unavailable" transaction. Note that this particular example returns 0 unavailable transactions):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"unavailable"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }


### query_key

Return the spend or view private key.

Inputs:

* *key_type* - string; Which key to retrieve: "mnemonic" - the mnemonic seed (older wallets do not have one) OR "view_key" - the view key

Outputs:

* *key* - string; The view key will be hex encoded, while the mnemonic will be a string of words.

Example (Query view key):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "key": "7e341d..."
      }
    }

Example (Query mnemonic key):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "key": "adapt adapt nostril ..."
      }
    }


### make_integrated_address

Make an integrated address from the wallet address and a payment id.

Inputs:

* *payment_id* - string; hex encoded; can be empty, in which case a random payment id is generated

Outputs:

* *integrated_address* - string

Example (Payment ID is empty, use a random ID):

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"payment_id":""}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "integrated_address": "4BpEv3WrufwXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQQ8H2RRJveAtUeiFs6J"
      }
    }


### split_integrated_address

Retrieve the standard address and payment id corresponding to an integrated address.

Inputs:

* *integrated_address* - string

Outputs:

* *standard_address* - string
* *payment* - string; hex encoded

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address": "4BpEv3WrufwXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQQ8H2RRJveAtUeiFs6J"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "payment_id": "&lt;420fa29b2d9a49f5&gt;",
        "standard_address": "427ZuEhNJQRXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQGaDsaBA"
      }
    }


### stop_wallet

Stops the wallet, storing the current state.

Inputs: *None*.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"stop_wallet"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }


### make_uri

Create a payment URI using the official URI spec.

Inputs:

* *address* - wallet address string
* *amount* (optional) - the integer amount to receive, in **atomic** units
* *payment_id* (optional) - 16 or 64 character hexadecimal payment id string
* *recipient_name* (optional) - string name of the payment recipient
* *tx_description* (optional) - string describing the reason for the tx

Outputs:

* *uri* - a string containing all the payment input information as a properly formatted payment URI

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_uri","params":{"address":"44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A","amount":10,"payment_id":"0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef","tx_description":"Testing out the make_uri function.","recipient_name":"Monero Project donation address"}}'  -H 'Content-Type: application/json'
    {
      "id": 0,
      "jsonrpc": "2.0",
      "result": {
        "uri": "monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?tx_payment_id=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef&tx_amount=0.000000000010&recipient_name=Monero%20Project%20donation%20address&tx_description=Testing%20out%20the%20make_uri%20function."
      }
    }


### parse_uri

Parse a payment URI to get payment information.

Inputs:

* *uri* - a string containing all the payment input information as a properly formatted payment URI

Outputs:

* *uri* - JSON object containing payment information:
  * *address* - wallet address string
  * *amount* - the decimal amount to receive, in **coin** units (0 if not provided)
  * *payment_id* - 16 or 64 character hexadecimal payment id string (empty if not provided)
  * *recipient_name* - string name of the payment recipient (empty if not provided)
  * *tx_description* - string describing the reason for the tx (empty if not provided)

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"parse_uri","params":{"uri":"monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?tx_payment_id=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef&tx_amount=0.000000000010&recipient_name=Monero%20Project%20donation%20address&tx_description=Testing%20out%20the%20make_uri%20function."}}' -H 'Content-Type: application/json'
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

### rescan_blockchain

Rescan blockchain from scratch.

Inputs: *None*.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain" -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }

### set_tx_notes

Set arbitrary string notes for transactions.

Inputs:

* *txids* - array of string; transaction ids
* *notes* - array of string; notes for the transactions

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_tx_notes","params":{"txids":["6a1a100c079c236e2cbf36f7760e8ef1a9e8357c434aa790a8c78de653ec4cf2"],"notes":["This is an example"]}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }

### get_tx_notes

Get string notes for transactions.

Inputs:

* *txids* - array of string; transaction ids

Outputs:

* *notes* - array of string; notes for the transactions

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_tx_notes","params":{"txids":["6a1a100c079c236e2cbf36f7760e8ef1a9e8357c434aa790a8c78de653ec4cf2"]}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "notes": ["This is an example"]
      }
    }

### sign

Sign a string.

Inputs:

* *data* - string;

Outputs:

* *signature* - string;

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"This is sample data to be signed"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "signature": "SigV1Xp61ZkGguxSCHpkYEVw9eaWfRfSoAf36PCsSCApx4DUrKWHEqM9CdNwjeuhJii6LHDVDFxvTPijFsj3L8NDQp1TV"
      }
    }

### verify

Verify a signature on a string.

Inputs:

* *data* - string;
* *address* - string;
* *signature* - string;

Outputs:

* *good* - boolean;

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"This is sample data to be signed","address":"9sS8eRU2b5ZbN2FPSrpkiab1bjbHE5XtL6Ti6We3Fhw5aQPudRfVVypjgzKDNkxtvTQZSPs122NKggb2mqcqkKSeMNVu59S","signature":"SigV1Xp61ZkGguxSCHpkYEVw9eaWfRfSoAf36PCsSCApx4DUrKWHEqM9CdNwjeuhJii6LHDVDFxvTPijFsj3L8NDQp1TV"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "good": true
      }
    }

### export_key_images

Export a signed set of key images.

Inputs: *None*.

Outputs:

* *signed_key_images* - array of signed key images:
  * *key_image* - string;
  * *signature* - string;

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"export_key_images"}' -H 'Content-Type: application/json'
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

### import_key_images

Import signed key images list and verify their spent status.

Inputs:

* *signed_key_images* - array of signed key images:
  * *key_image* - string;
  * *signature* - string;

Outputs:

* *height* - unsigned int;
* *spent* - unsigned int;
* *unspent* - unsigned int;

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"import_key_images", "params":{"signed_key_images":[{"key_image":"63b83df78cafd99e23b5ad3f667bc6f8d38813d9e84c7bb6c223a556dfd34af","signature":"b87b7e989aa86aa2a7a7cd8adcb3a848d3512ff718b168e15217ff3e5da29c0183c0328b97cc052fcb5ee3548aa5e41e530ba9d854199ea19d7ddaf6a54a4c0a"},{"key_image":"44ec12fbc56c533a30b09de8ae26febd515528c4957dfe875430377a7e212b4e","signature":"91105f15be0b25bc2a94bd78a7e261608974d6d888080b9f1815655b98af190340325ea1a0840a5951dacf913d4de1b2bd33ea59c1cb7bce1b6648afa7133d03"}]}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "height": 986050,
        "spent": 10000100000000,
        "unspent": 4979852760000
      }
    }

### get_address_book

Retrieves entries from the address book.

Inputs:

* *entries* - array of unsigned int; indices of the requested address book entries

Outputs:

* *entries* - array of entries:
  * *address* - string;
  * *description* - string;
  * *index* - unsigned int;
  * *payment_id* - string;

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_address_book","params":{"entries":[1,2]}}' -H 'Content-Type: application/json'
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

### add_address_book

Add an entry to the address book.

Inputs:

* *address* - string;
* *payment_id* - (optional) string, defaults to "0000000000000000000000000000000000000000000000000000000000000000";
* *description* - (optional) string, defaults to "";

Outputs:

* *index* - unsigned int; The index of the address book entry.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"add_address_book","params":{"address":"44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A","description":"Donation address for the Monero project"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "index": 2
      }
    }

### delete_address_book

Delete an entry from the address book.

Inputs:

* *index* - unsigned int; The index of the address book entry.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"delete_address_book","params":{"index":0}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }

### rescan_spent

Rescan the blockchain for spent outputs.

Inputs: *None*.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"rescan_spent"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }

### start_mining

Start mining in the Monero daemon.

Inputs:

* *threads_count* - unsigned int; Number of threads created for mining
* *do_background_mining* - boolean;
* *ignore_battery* - boolean;

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"start_mining","params":{"threads_count":1,"do_background_mining":true,"ignore_battery":true}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }
### stop_mining

Stop mining in the Monero daemon.

Inputs: *None*.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"stop_mining"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }

### get_languages

Get a list of available languages for your wallet's seed.

Inputs: *None*.

Outputs:

* *languages* - array of string; List of available languages

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_languages"}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
        "languages": ["Deutsch","English","Español","Français","Italiano","Nederlands","Português","русский язык","日本語","简体中文 (中国)","Esperanto"]
      }
    }

### create_wallet

Create a new wallet. You need to have set the argument "--wallet-dir" when launching monero-wallet-rpc to make this work.

Inputs:

* *filename* - string;
* *password* - string;
* *language* - string; Language for your wallets' seed.

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"mytestwallet","password":"mytestpassword","language":"English"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }

### open_wallet

Open a wallet. You need to have set the argument "--wallet-dir" when launching monero-wallet-rpc to make this work.

Inputs:

* *filename* - string;
* *password* - string;

Outputs: *None*.

Example:

{:.cli-code}
    [ monero->~ ]$ curl -X POST http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"open_wallet","params":{"filename":"mytestwallet","password":"mytestpassword"}}' -H 'Content-Type: application/json'
    {
      "id": "0",
      "jsonrpc": "2.0",
      "result": {
      }
    }
