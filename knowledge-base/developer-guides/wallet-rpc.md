---
layout: static_page
title: "Wallet RPC documentation"
title-pre-kick: "How to "
title-kick: "Wallet RPC documentation "
title-post-kick: ""
kick-class: "green-kicks"
icon: "icon_client"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### This is a list of the daemon and wallet RPC calls, along with their inputs and outputs.

bitmonerod

	TODO

simplewallet

	Wallet RPC commands are in JSON format, and can be accessed like this:

		METHOD="make_integrated_address"
		PARAMS="{\"payment_id\":\"1234567890123456789012345678900012345678901234567890123456789000\"}"
		curl \
			-X POST http://$IP:$PORT/json_rpc \
			-d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
			-H 'Content-Type: application/json'

	getbalance
		return the wallet's balance
		outputs:
			balance: unsigned int
			unlocked_balance: unsigned int

	getaddress
		return the wallet's address
		outputs:
			address: string
			
    getheight
        returns the current block height
        outputs:
            height: string

	transfer
		send monero to a number of recipients
		inputs:
			destinations: array of:
				amount: unsigned int
				address: string
			fee: unsigned int
				ignored, will be automatically calculated
			mixin: unsigned int
				number of outpouts from the blockchain to mix with (0 means no mixing)
			unlock_time: unsigned int
				number of blocks before the monero can be spent (0 to not add a lock)
			payment_id: string
		outputs:
		 tx_hash: array of:
			 string

	transfer_split
		same as transfer, but can split into more than one tx if necessary
		inputs:
			destinations: array of:
				amount: unsigned int
				address: string
			fee: unsigned int
				ignored, will be automatically calculated
			mixin: unsigned int
				number of outpouts from the blockchain to mix with (0 means no mixing)
			unlock_time: unsigned int
				number of blocks before the monero can be spent (0 to not add a lock)
			payment_id: string
			new_algorithm: boolean
				true to use the new transaction construction algorithm, defaults to false
		outputs:
		 tx_hash: array of:
			 string

	sweep_dust
		send all dust outputs back to the wallet's, to make them easier to spend (and mix)
		outputs:
			tx_hash_list: list of:
				string

	store
		save the blockchain

	get_payments
		get a list of incoming payments using a given payment id
		inputs:
			payment_id: string
		outputs:
			payments: list of:
				payment_id: string
				tx_hash: string
				amount: unsigned int
				block_height: unsigned int
				unlock_time: unsigned int

	get_bulk_payments
		get a list of incoming payments using a given payment id, or a list of payments ids, from a given height
		inputs:
			payment_ids: array of:
				string
			min_block_height: unsigned int
				the block height at which to start looking for payments
		outputs:
			payments: list of:
				payment_id: string
				tx_hash: string
				amount: unsigned int
				block_height: unsigned int
				unlock_time: unsigned int

	incoming_transfers
		return a list of incoming transfers to the wallet
		inputs:
			transfer_type: string
				"all": all the transfers
				"available": only transfers which are not yet spent
				"unavailable": only transfers which are already spent
		outputs:
			transfers: list of:
				amount: unsigned int
				spent: boolean
				global_index: unsigned int
					mostly internal use, can be ignored by most users
				tx_hash: string
					several incoming transfers may share the same hash if they were in the same transaction
				tx_size: unsigned int

	query_key
		return the spend or view private key
		inputs:
			key_type: string
				which key to retrieve:
					"mnemonic": the mnemonic seed (older wallets do not have one)
					"view_key": the view key
		outputs:
			key: string
				the view key will be hex encoded

	make_integrated_address
		make an integrated address from the wallet address and a payment id
		inputs:
			payment_id: string
				hex encoded; can be empty, in which case a random payment id is generated
		outputs:
			integrated_address: string

	split_integrated_address
		retrieve the standard address and payment id corresponding to an integrated address
		inputs:
			integrated_address: string
		outputs:
			standard_address: string
			payment: string
				hex encoded

	stop_wallet
		stops the wallet, storing the current state

