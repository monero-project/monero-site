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

## General Remarks

This is a list of the bitmonerod daemon RPC calls, their inputs and outputs, and examples of each. Many RPC calls use the Daemon's JSON RPC interface, while others use their own interfaces.

On this page, you will find examples of these RPC calls.


## JSON RPC Methods

The majority of bitmonerod RPC calls use the daemon's `json_rpc` interface to request various bits of information. These methods all follow a similar structure, for example:

    IP=127.0.0.1
    PORT=18081
    METHOD="getblockheaderbyheight"
	PARAMS="{\"height\":912345}"
	curl \
		-X POST http://$IP:$PORT/json_rpc \
		-d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'"$PARAMS"'}' \
		-H 'Content-Type: application/json'

Some methods include parameters, while others do not. Examples of each JSON RPC method follow.

### getblockcount

### on_getblockhash

### getblocktemplate

### submitblock

### getlastblockheader

### getblockheaderbyhash

### getblockheaderbyheight

### getblock

### get_connections

### get_info

### hard_fork_info

### setbans

### getbans

### flush_txpool


## Other Daemon RPC Calls

Not all daemon RPC calls use the JSON_RPC interface. This section gives examples of these calls.

###

