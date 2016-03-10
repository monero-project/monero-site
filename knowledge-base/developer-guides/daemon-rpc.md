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

Block header information for the most recent block is easily retrieved with this method. No inputs are needed.

Outputs:

* *block_header* - A structure containing block header information.
  * *depth* -  The number of blocks succeeding this block on the blockchain. A larger number means an older block.
  * *difficulty* - The strength of the Monero network based on mining power.
  * *hash* - The hash of this block.
  * *height* - The number of blocks preceding this block on the blockchain.
  * *major_version* - The major version of the monero protocol at this block height.
  * *minor_version* - The minor version of the monero protocol at this block height.
  * *nonce* - a cryptographic random one-time number used in mining a Monero block.
  * *orphan_status* - Usually `false`. If `true`, this block is not part of the longest chain.
  * *prev_hash* - The hash of the block immediately preceding this block in the chain.
  * *reward* - The amount of new atomic units generated in this block and rewarded to the miner. Note: 1 XMR = 1e12 atomic units.
  * *timestamp* - The time the block was recorded into the blockchain.

In this example, the most recent block (990793 at the time) is returned:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getlastblockheader"}' -H 'Content-Type: application/json'
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


### getblockheaderbyhash

Block header information can be retrieved using either a block's hash or height. This method includes a block's hash as an input parameter to retrieve basic information about the block.

Inputs:

* *hash* - The block's sha256 hash.

Outputs:

* *block_header* - A structure containing block header information.
  * *depth* -  The number of blocks succeeding this block on the blockchain. A larger number means an older block.
  * *difficulty* - The strength of the Monero network based on mining power.
  * *hash* - The hash of this block.
  * *height* - The number of blocks preceding this block on the blockchain.
  * *major_version* - The major version of the monero protocol at this block height.
  * *minor_version* - The minor version of the monero protocol at this block height.
  * *nonce* - a cryptographic random one-time number used in mining a Monero block.
  * *orphan_status* - Usually `false`. If `true`, this block is not part of the longest chain.
  * *prev_hash* - The hash of the block immediately preceding this block in the chain.
  * *reward* - The amount of new atomic units generated in this block and rewarded to the miner. Note: 1 XMR = 1e12 atomic units.
  * *timestamp* - The time the block was recorded into the blockchain.

In this example, block 912345 is looked up by its hash:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblockheaderbyhash","params":{"hash":"e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"}}' -H 'Content-Type: application/json'
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


### getblockheaderbyheight

Similar to `getblockheaderbyhash` above, this method includes a block's height as an input parameter to retrieve basic information about the block.

Inputs:

* *height* - The block's height.

Outputs:

* *block_header* - A structure containing block header information.
  * *depth* -  The number of blocks succeeding this block on the blockchain. A larger number means an older block.
  * *difficulty* - The strength of the Monero network based on mining power.
  * *hash* - The hash of this block.
  * *height* - The number of blocks preceding this block on the blockchain.
  * *major_version* - The major version of the monero protocol at this block height.
  * *minor_version* - The minor version of the monero protocol at this block height.
  * *nonce* - a cryptographic random one-time number used in mining a Monero block.
  * *orphan_status* - Usually `false`. If `true`, this block is not part of the longest chain.
  * *prev_hash* - The hash of the block immediately preceding this block in the chain.
  * *reward* - The amount of new atomic units generated in this block and rewarded to the miner. Note: 1 XMR = 1e12 atomic units.
  * *timestamp* - The time the block was recorded into the blockchain.

In this example, block 912345 is looked up by its height (notice that the returned information is the save as in the previous example):

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblockheaderbyheight","params":{"height":912345}}' -H 'Content-Type: application/json'
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

