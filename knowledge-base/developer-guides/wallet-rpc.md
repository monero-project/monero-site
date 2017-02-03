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
* [store](#store)
* [get_payments](#getpayments)
* [get_bulk_payments](#getbulkpayments)
* [incoming_transfers](#incomingtransfers)
* [query_key](#querykey)
* [make_integrated_address](#makeintegratedaddress)
* [split_integrated_address](#splitintegratedaddress)
* [stop_wallet](#stopwallet)

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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getbalance"}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getaddress"}' -H 'Content-Type: application/json'
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

* *height* - string; The current monero-wallet-rpc's blockchain height. If the wallet has been offline for a long time, it may need to catch up with the daemon.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getheight"}' -H 'Content-Type: application/json'
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
Outputs:

* *tx_hash* - array of: string
* *tx_key* - 

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer","params":{"destinations":[{"amount":10000000000000,"address":"427ZuEhNJQRXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQGaDsaBA"},{"amount":200000000000,"address":"49VtwYXDbbh7hq57wwkLH36x4D6XV6Tr2P93ANnBi9qFGyYZbx8SXWPUHC9V1o7N41b4c3WJ1kubkffRfPTPfMuB8QUqFD5"}],"fee":150000000000,"mixin":3,"unlock_time":0,"payment_id":"001f181e2a2e076e8451e9dd7b5fe8fbd2b204cd6a20cb3e21b9a2a42b0ce03c","get_tx_key":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "&lt;29d933789db5483fa63694ed2560d3829dbf0b945fdea3c42fbfa4d381e7ac22&gt;",
    "tx_key": "&lt;c228dff7aa455d770f8cf71b9d319d2055a125cfbac1ca9485aeb1a107604d0d&gt;"
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
* *get_tx_key* - boolean; (Optional) Return the transaction key after sending.
* *new_algorithm* - boolean; True to use the new transaction construction algorithm, defaults to false.

Outputs:

* *tx_hash_list* - array of: string

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":2000000000000,"address":"427ZuEhNJQRXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQGaDsaBA"},{"amount":3000000000000,"address":"49VtwYXDbbh7hq57wwkLH36x4D6XV6Tr2P93ANnBi9qFGyYZbx8SXWPUHC9V1o7N41b4c3WJ1kubkffRfPTPfMuB8QUqFD5"}],"mixin":3,"unlock_time":0,"payment_id":"a29602cc261fecbc93c22a152a942cc791ca6112cffe201c3e809945c9da672f","get_tx_key":true,"new_algorithm":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash_list": ["&lt;fb39c42cb5ff231ee9e8b381bb8734fd655b6ca28a23cbd82aa9422aa870e91b&gt;"]
  }
}


### sweep_dust

Send all dust outputs back to the wallet's, to make them easier to spend (and mix).

Inputs: *None*.

Outputs:

* *tx_hash_list* - list of: string

Example (In this example, `sweep_dust` returns an error due to insufficient funds to sweep):

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sweep_dust"}' -H 'Content-Type: application/json'
{
  "error": {
    "code": -4,
    "message": "not enough money"
  },
  "id": "0",
  "jsonrpc": "2.0"
}

### store

Save the blockchain.

Inputs: *None*.

Outputs: *None*.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"store"}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030"}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_bulk_payments","params":{"payment_ids":["4279257e0a20608e25dba8744949c9e1caff4fcdafc7d5362ecf14225f3d9030"],"min_block_height":990000}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"all"}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"available"}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"unavailable"}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "key": "7e341d..."
  }
}

Example (Query mnemonic key):

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"payment_id":""}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address": "4BpEv3WrufwXoyJAeEoBaNW56ScQaLXyyQWgxeRL9KgAUhVzkvfiELZV7fCPBuuB2CGuJiWFQjhnhhwiH1FsHYGQQ8H2RRJveAtUeiFs6J"}}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"stop_wallet"}' -H 'Content-Type: application/json'
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
<span style="color: cyan;">[ monero->~ ]$</span>curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"make_uri","params":{"address":"44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A","amount":10,"payment_id":"0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef","tx_description":"Testing out the make_uri function.","recipient_name":"Monero Project donation address"}}'  -H 'Content-Type: application/json'
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "uri": "monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?tx_payment_id=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef&tx_amount=0.000000000010&recipient_name=Monero%20Project%20donation%20address&tx_description=Testing%20out%20the%20make_uri%20function."
  }
}


## parse_uri

Parse a payment URI to get payment information.

Inputs:

* *uri* - a string containing all the payment input information as a properly formatted payment URI

Outputs:

* *uri* - JSON object containing parment information:
  * *address* - wallet address string
  * *amount* - the decimal amount to receive, in **coin** units (0 if not provided)
  * *payment_id* - 16 or 64 character hexadecimal payment id string (empty if not provided)
  * *recipient_name* - string name of the payment recipient (empty if not provided)
  * *tx_description* - string describing the reason for the tx (empty if not provided)

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span>curl -X POST http://127.0.0.1:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"parse_uri","params":{"uri":"monero:44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A?tx_payment_id=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef&tx_amount=0.000000000010&recipient_name=Monero%20Project%20donation%20address&tx_description=Testing%20out%20the%20make_uri%20function."}}' -H 'Content-Type: application/json'
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
