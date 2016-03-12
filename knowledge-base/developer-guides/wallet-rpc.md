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

This is a list of the simplewallet RPC calls, their inputs and outputs, and examples of each.

All simplewallet methods use the same JSON RPC interface. For example:

    IP=127.0.0.1
    PORT=18082
    METHOD="make_integrated_address"
    PARAMS="{\"payment_id\":\"1234567890123456789012345678900012345678901234567890123456789000\"}"
    curl \
        -X POST http://$IP:$PORT/json_rpc \
        -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
        -H 'Content-Type: application/json'

### JSON RPC Methods:

* [getbalance](#getbalance)
* [getaddress](#getaddress)
* [getheight](#getheight)
* [transfer](#transfer)
* [transfer_split](#transfer_split)
* [sweep_dust](#sweep_dust)
* [store](#store)
* [get_payments](#get_payments)
* [get_bulk_payments](#get_bulk_payments)
* [incoming_transfers](#incoming_transfers)
* [query_key](#query_key)
* [make_integrated_address](#make_integrated_address)
* [split_integrated_address](#split_integrated_address)
* [stop_wallet](#stop_wallet)

---

### getbalance

Return the wallet's balance.

Inputs: *None*.

Outputs:

* *balance* - unsigned int
* *unlocked_balance* - unsigned int

Example:


### getaddress

Return the wallet's address.

Inputs: *None*.

Outputs:

* *address* - string

Example:


### getheight

Returns the wallet's current block height.

Inputs: *None*.

Outputs:

* *height* - string

Example:


### transfer

Send monero to a number of recipients.

Inputs:

* *destinations* - array of:
  * *amount* - unsigned int
  * *address* - string
* *fee* - unsigned int; Ignored, will be automatically calculated.
* *mixin* - unsigned int; Number of outpouts from the blockchain to mix with (0 means no mixing).
* *unlock_time* - unsigned int; Number of blocks before the monero can be spent (0 to not add a lock).
* *payment_id* - string

Outputs:

* *tx_hash* - array of: string

Example:


### transfer_split

Same as transfer, but can split into more than one tx if necessary.

Inputs:

* *destinations* - array of:
  * *amount* - unsigned int
  * *address* - string
* *fee* - unsigned int; Ignored, will be automatically calculated.
* *mixin* - unsigned int; Number of outpouts from the blockchain to mix with (0 means no mixing).
* *unlock_time* - unsigned int; Number of blocks before the monero can be spent (0 to not add a lock).
* *payment_id* - string
* *new_algorithm* - boolean; True to use the new transaction construction algorithm, defaults to false.

Outputs:

* *tx_hash* - array of: string

Example:


### sweep_dust

Send all dust outputs back to the wallet's, to make them easier to spend (and mix).

Inputs: *None*.

Outputs:

* *tx_hash_list* - list of: string

Example:


### store

Save the blockchain.

Inputs: *None*.

Outputs:

Example:


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


### get_bulk_payments

Get a list of incoming payments using a given payment id, or a list of payments ids, from a given height.

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

Example:


### query_key

Return the spend or view private key.

Inputs:

* *key_type* - string; which key to retrieve: "mnemonic" - the mnemonic seed (older wallets do not have one) OR "view_key" - the view key

Outputs:

* *key* - string; the view key will be hex encoded

Example:


### make_integrated_address

Make an integrated address from the wallet address and a payment id.

Inputs:

* *payment_id* - string; hex encoded; can be empty, in which case a random payment id is generated

Outputs:

* *integrated_address* - string

Example:


### split_integrated_address

Retrieve the standard address and payment id corresponding to an integrated address.

Inputs:

* *integrated_address* - string

Outputs:

* *standard_address* - string
* *payment* - string; hex encoded

Example:


### stop_wallet

Stops the wallet, storing the current state.

Inputs: *None*.

Outputs:

Example:


