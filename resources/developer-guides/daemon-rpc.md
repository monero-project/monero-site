---
layout: static_page
title: "Daemon RPC documentation"
title-pre-kick: "Developer Guide: "
title-kick: "Daemon RPC documentation "
title-post-kick: ""
kick-class: "green-kicks"
icon: "icon_client"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

## Introduction

This is a list of the monerod daemon RPC calls, their inputs and outputs, and examples of each.

Many RPC calls use the daemon's JSON RPC interface while others use their own interfaces, as demonstrated below.

Note: "atomic units" refer to the smallest fraction of 1 XMR according to the monerod implementation. **1 XMR = 1e12 atomic units.**

### [JSON RPC Methods](#json-rpc-methods):

* [getblockcount](#getblockcount)
* [on_getblockhash](#ongetblockhash)
* [getblocktemplate](#getblocktemplate)
* [submitblock](#submitblock)
* [getlastblockheader](#getlastblockheader)
* [getblockheaderbyhash](#getblockheaderbyhash)
* [getblockheaderbyheight](#getblockheaderbyheight)
* [getblock](#getblock)
* [get_connections](#getconnections)
* [get_info](#getinfo)
* [hard_fork_info](#hardforkinfo)
* [setbans](#setbans)
* [getbans](#getbans)

### [Other RPC Methods](#other-daemon-rpc-calls):

* [/getheight](#getheight)
* [/gettransactions](#gettransactions)
* [/is_key_image_spent](#iskeyimagespent)
* [/sendrawtransaction](#sendrawtransaction)
* [/get_transaction_pool](#gettransactionpool)
* [/stop_daemon](#stopdaemon)


---

## JSON RPC Methods

The majority of monerod RPC calls use the daemon's `json_rpc` interface to request various bits of information. These methods all follow a similar structure, for example:

    IP=127.0.0.1
    PORT=18081
    METHOD='getblockheaderbyheight'
	PARAMS='{"height":912345}'
	curl \
		-X POST http://$IP:$PORT/json_rpc \
		-d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'$PARAMS'}' \
		-H 'Content-Type: application/json'

Some methods include parameters, while others do not. Examples of each JSON RPC method follow.

### getblockcount

Look up how many blocks are in the longest chain known to the node.

Inputs: *None*.

Outputs:

* *count* - unsigned int; Number of blocks in longest chain seen by the node.
* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblockcount"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "count": 993163,
    "status": "OK"
  }
}


### on_getblockhash

Look up a block's hash by its height.

Inputs:

* block height (int array of length 1)
  
Outputs:

* block hash (string)

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"on_getblockhash","params":[912345]}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"
}


### getblocktemplate

Inputs:

* *wallet_address* - string; Address of wallet to receive coinbase transactions if block is successfully mined.
* *reserve_size* - unsigned int; Reserve size.

Outputs:

* *blocktemplate_blob* - string; Blob on which to try to mine a new block.
* *difficulty* - unsigned int; Difficulty of next block.
* *height* - unsigned int; Height on which to mine.
* *prev_hash* - string; Hash of the most recent block on which to mine the next block.
* *reserved_offset* - unsigned int; Reserved offset.
* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblocktemplate","params":{"wallet_address":"44GBHzv6ZyQdJkjqZje6KLZ3xSyN1hBSFAnLP6EAqJtCRVzMzZmeXTC2AHKDS9aEDTRKmo6a6o9r9j86pYfhCWDkKjbtcns","reserve_size":60}' -H 'Content-Type: application/json'
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

### submitblock

Submit a mined block to the network.

Inputs:

* Block blob data - string

Outputs:

* *status* - string; Block submit status.


### getlastblockheader

Block header information for the most recent block is easily retrieved with this method. No inputs are needed.

Inputs: *None*.

Outputs:

* *block_header* - A structure containing block header information.
  * *depth* -  unsigned int; The number of blocks succeeding this block on the blockchain. A larger number means an older block.
  * *difficulty* - unsigned int; The strength of the Monero network based on mining power.
  * *hash* - string; The hash of this block.
  * *height* - unsigned int; The number of blocks preceding this block on the blockchain.
  * *major_version* - unsigned int; The major version of the monero protocol at this block height.
  * *minor_version* - unsigned int; The minor version of the monero protocol at this block height.
  * *nonce* - unsigned int; a cryptographic random one-time number used in mining a Monero block.
  * *orphan_status* - boolean; Usually `false`. If `true`, this block is not part of the longest chain.
  * *prev_hash* - string; The hash of the block immediately preceding this block in the chain.
  * *reward* - unsigned int; The amount of new atomic units generated in this block and rewarded to the miner. Note: 1 XMR = 1e12 atomic units.
  * *timestamp* - unsigned int; The time the block was recorded into the blockchain.
* *status* - string; General RPC error code. "OK" means everything looks good.

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

* *hash* - string; The block's sha256 hash.

Outputs:

* *block_header* - A structure containing block header information. See [getlastblockheader](#getlastblockheader).

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

* *height* - unsigned int; The block's height.

Outputs:

* *block_header* - A structure containing block header information. See [getlastblockheader](#getlastblockheader).

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

Full block information can be retrieved by either block height or hash, like with the above block header calls. For full block information, both lookups use the same method, but with different input parameters.

Inputs (pick one of the following):

* *height* - unsigned int; The block's height.
* *hash* - string; The block's hash.

Outputs:

* *blob* - string; Hexadecimal blob of block information.
* *block_header* - A structure containing block header information. See [getlastblockheader](#getlastblockheader).
* *json* - json string; JSON formatted block details:
  * *major_version* - Same as in block header.
  * *minor_version* - Same as in block header.
  * *timestamp* - Same as in block header.
  * *prev_id* - Same as `prev_hash` in block header.
  * *nonce* - Same as in block header.
  * *miner_tx* - Miner transaction information
    * *version* - Transaction version number.
    * *unlock_time* - The block height when the coinbase transaction becomes spendable.
    * *vin* - List of transaction inputs:
      * *gen* - Miner txs are coinbase txs, or "gen".
        * *height* - This block height, a.k.a. when the coinbase is generated.
    * *vout* - List of transaction outputs. Each output contains:
      * *amount* - The amount of the output, in atomic units.
      * *target* - 
        * *key* - 
    * *extra* - Usually called the "transaction ID" but can be used to include any random 32 byte/64 character hex string.
    * *signatures* - Contain signatures of tx signers. Coinbased txs do not have signatures.
  * *tx_hashes* - List of hashes of non-coinbase transactions in the block. If there are no other transactions, this will be an empty list.
* *status* - string; General RPC error code. "OK" means everything looks good.

**Look up by height:**

In the following example, block 912345 is looked up by its height. Note that block 912345 does not have any non-coinbase transactions. (See the next example for a block with extra transactions):

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblock","params":{"height":912345}}' -H 'Content-Type: application/json'
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

**Look up by hash:**

In the following example, block 993056 is looked up by its hash. Note that block 993056 has 3 non-coinbase transactions:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getblock","params":{"hash":"510ee3c4e14330a7b96e883c323a60ebd1b5556ac1262d0bc03c24a3b785516f"}}' -H 'Content-Type: application/json'
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


### get_connections

Retrieve information about incoming and outgoing connections to your node.

Inputs: *None*.

Outputs:

* *connections* - List of all connections and their info:
  * *avg_download* - unsigned int; Average bytes of data downloaded by node.
  * *avg_upload* - unsigned int; Average bytes of data uploaded by node.
  * *current_download* - unsigned int; Current bytes downloaded by node.
  * *current_upload* - unsigned int; Current bytes uploaded by node.
  * *incoming* - boolean; Is the node getting information from your node?
  * *ip* - string; The node's IP address.
  * *live_time* - unsigned int
  * *local_ip* - boolean
  * *localhost* - boolean
  * *peer_id* - string; The node's ID on the network.
  * *port* - stringl The port that the node is using to connect to the network.
  * *recv_count* - unsigned int
  * *recv_idle_time* - unsigned int
  * *send_count* - unsigned int
  * *send_idle_time* - unsigned int
  * *state* - string

Following is an example of `get_connections` and it's return:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_connections"}' -H 'Content-Type: application/json'
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


### get_info

Retrieve general information about the state of your node and the network.

Inputs: *None*.

Outputs:

* *alt_blocks_count* - unsigned int; Number of alternative blocks to main chain.
* *difficulty* - unsigned int; Network difficulty (analogous to the strength of the network)
* *grey_peerlist_size* - unsigned int; Grey Peerlist Size
* *height* - unsigned int; Current length of longest chain known to daemon.
* *incoming_connections_count* - unsigned int; Number of peers connected to and pulling from your node.
* *outgoing_connections_count* - unsigned int; Number of peers that you are connected to and getting information from.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *target* - unsigned int; Current target for next proof of work.
* *target_height* - unsigned int; The height of the next block in the chain.
* *testnet* - boolean; States if the node is on the testnet (true) or mainnet (false).
* *top_block_hash* - string; Hash of the highest block in the chain.
* *tx_count* - unsigned int; Total number of non-coinbase transaction in the chain.
* *tx_pool_siz* - unsigned int; Number of transactions that have been broadcast but not included in a block.
* *white_peerlist_size* - unsigned int; White Peerlist Size

Following is an example `get_info` call and its return:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
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


### hard_fork_info

Look up information regarding hard fork voting and readiness.

Inputs: *None*.

Outputs:

* *earliest_height* - unsigned int; Block height at which hard fork would be enabled if voted in.
* *enabled* - boolean; Tells if hard fork is enforced.
* *state* - unsigned int; Current hard fork state: 0 (There is likely a hard fork), 1 (An update is needed to fork properly), or 2 (Everything looks good).
* *status* - string; General RPC error code. "OK" means everything looks good.
* *threshold* - unsigned int; Minimum percent of votes to trigger hard fork. Default is 80.
* *version* - unsigned int; The major block version for the fork.
* *votes* - unsigned int; Number of votes towards hard fork.
* *voting* - unsigned int; Hard fork voting status.
* *window* - unsigned int; Number of blocks over which current votes are cast. Default is 10080 blocks.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"hard_fork_info"}' -H 'Content-Type: application/json'
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


### setbans

Ban another node by IP.

Inputs:

* *bans* - A list of nodes to ban:
  * *ip* - unsigned int; IP address to ban, in Int format.
  * *ban* - boolean; Set `true` to ban.
  * *seconds* - unsigned int; Number of seconds to ban node.
  
Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"setbans","params":{"bans":[{"ip":838969536,"ban":true,"seconds":30}]}}' -H  'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}


### getbans

Inputs: *None*.

Outputs:

* *bans* - List of banned nodes:
  * *ip* - unsigned int; Banned IP address, in Int format.
  * *seconds* - unsigned int; Local Unix time that IP is banned until.
* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"getbans"}' -H 'Content-Type: application/json'
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


---

## Other Daemon RPC Calls

Not all daemon RPC calls use the JSON_RPC interface. This section gives examples of these calls.

The data structure for these calls is different than the JSON RPC calls. Whereas the JSON RPC methods were called using the `/json_rpc` extension and specifying a method, these methods are called at their own extensions. For example:

    IP=127.0.0.1
    PORT=18081
    METHOD='gettransactions'
	PARAMS='{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}'
	curl \
		-X POST http://$IP:$PORT/$METHOD \
		-d $PARAMS \
		-H 'Content-Type: application/json'

Note: It is recommended to use JSON RPC where such alternatives exist, rather than the following methods. For example, the recommended way to get a node's height is via the JSON RPC methods [get_info](#getinfo) or [getlastblockheader](#getlastblockheader), rather than [getheight](#getheight) below.


### /getheight

Get the node's current height.

Inputs: *None*.

Outputs:

* *height* - unsigned int; Current length of longest chain known to daemon. 

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/getheight -H 'Content-Type: application/json'
{
  "height": 993488,
  "status": "OK"
}


### /gettransactions

Look up one or more transactions by hash.

Inputs:

* *txs_hashes* - string list; List of transaction hashes to look up.
* *decode_as_json* - boolean; Optional. If set `true`, the returned transaction information will be decoded rather than binary.

Outputs:

* *status* - General RPC error code. "OK" means everything looks good.
* *txs_as_hex* - string; Full transaction information as a hex string.
* *txs_as_json* - json string; (Optional - returned if set in inputs.) List of transaction info:
  * *version* - Transaction version
  * *unlock_time* - If not 0, this tells when a transaction output is spendable.
  * *vin* - List of inputs into transaction:
    * *key* - The public key of the previous output spent in this transaction.
      * *amount* - The amount of the input, in atomic units.
      * *key_offsets* - A list of integer offets to the input.
      * *k_image* - The key image for the given input
  * *vout* - List of outputs from transaction:
    * *amount* - Amount of transaction output, in atomic units.
    * *target* - Output destination information:
      * *key* - The stealth public key of the receiver. Whoever owns the private key associated with this key controls this transaction output.
  * *extra* - Usually called the "payment ID" but can be used to include any random 32 bytes.
  * *signatures* - List of ignatures used in ring signature to hide the true origin of the transaction.
Example 1: Return transaction information in binary format.

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/gettransactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}' -H 'Content-Type: application/json'
{
  "status": "OK",
  "txs_as_hex": ["..."]
}

Example 2: Decode returned transaction information in JSON format. Note: the "vout" list has been truncated in the displayed return for space considerations.

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/gettransactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"],"decode_as_json":true}' -H 'Content-Type: application/json'
{
  "status": "OK",
  "txs_as_hex": ["..."],
  "txs_as_json": ["{\n  \"version\": 1, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 70000000, \n        \"key_offsets\": [ 35952\n        ], \n        \"k_image\": \"d16908468dff9438a9814fe96bdaa575f06fe8da85772b72e54926428712293d\"\n      }\n    }, {\n      \"key\": {\n        \"amount\": 400000000000000, \n        \"key_offsets\": [ 6830\n        ], \n        \"k_image\": \"c7a7024b763df1181ae6fe821b70669735e38a68162ac02362e33acbe829b605\"\n      }\n    }\n  ], \n  \"vout\": [ {\n      \"amount\": 50000, \n      \"target\": {\n        \"key\": \"f6be43f7be4f06adcb1d06f4a07c637c7359e009cf3e57bb32b8c9ea636509c3\"\n      }\n    }, {\n      \"amount\": 200000, \n      \"target\": {\n        \"key\": \"b0a7a8e32f2b5302552bcd8d85112c62838b1f56cccd844eb9b63e0a732d0353\"\n      }\n    },  ...  \n  ], \n  \"extra\": [ 1, 225, 240, 98, 34, 169, 73, 47, 237, 117, 192, 30, 192, 60, 155, 47, 4, 115, 20, 21, 11, 13, 252, 219, 129, 13, 174, 37, 36, 78, 191, 141, 109\n  ], \n  \"signatures\": [ \"e6a3be8003d481d2855c8127f56871de3d28a4fb52385b999eb986c831c5cc08361c126b0db24a21b6c4299b438ee2be201d44d57a371230b9cd04395ab8c400\", \"8309851abaf2cf2a7091e0cdb9c83704fa7d68838a7a8ef8c178bb55a1e93a038dd18bb4a7549dc056b7a70e037cabd80911a03f427e36f712756d4c00f38f0b\"]\n}"]
}


### /is_key_image_spent

Check if outputs have been spent using the key image associated with the output.

Inputs:

* *key_images* - string list; List of key image hex strings to check.

Outputs:

* *spent_status* - unsigned int list; List of statuses for each image checked. Statuses are follows: 0 = unspent, 1 = spent in blockchain, 2 = spent in transaction pool
* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/is_key_image_spent -d '{"key_images":["8d1bd8181bf7d857bdb281e0153d84cd55a3fcaa57c3e570f4a49f935850b5e3","7319134bfc50668251f5b899c66b005805ee255c136f0e1cecbb0f3a912e09d4"]}' -H 'Content-Type: application/json'
{
  "spent_status": [1,2],
  "status": "OK"
}


### /sendrawtransaction

Broadcast a raw transaction to the network.

Inputs:

* *tx_as_hex* - string; Full transaction information as hexidecimal string.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example (No return information included here.):

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/sendrawtransaction -d '{"tx_as_hex":"de6a3..."}' -H 'Content-Type: application/json'


### /get_transaction_pool

Show information about valid transactions seen by the node but not yet mined into a block, as well as spent key image information in the node's memory.

Inputs: *None*.

Outputs:

* *spent_key_images* - List of spent output key images:
  * *id_hash* - string; Key image ID hash.
  * *txs_hashes* - string list; Key image transaction hashes.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *transactions* - List of transactions in the mempool that have not been included in a block:
  * *blob_size* - unsigned int; The size of the full transaction blob.
  * *fee* - unsigned int; The amount of the mining fee included in the transaction, in atomic units.
  * *id_hash* - string; The transaction ID hash.
  * *kept_by_block* - boolean; We do not accept transactions that timed out before, unless set `true`.
  * *last_failed_height* - unsigned int; If the transaction has previously timed out, this tells at what height that occured.
  * *last_failed_id_hash* - string; Like the previous, this tells the previous transaction ID hash.
  * *max_used_block_height* - unsigned int; Tells the height of the most recent block with an output used in this transaction.
  * *max_used_block_hash* - string; Tells the hash of the most recent block with an output used in this transaction.
  * *receive_time* - unsigned int; The Unix time that the transaction was first seen on the network by the node.
  * *tx_json* - json string; JSON structure of all information in the transaction:
    * *version* - Transaction version
    * *unlock_time* - If not 0, this tells when a transaction output is spendable.
    * *vin* - List of inputs into transaction:
      * *key* - The public key of the previous output spent in this transaction.
        * *amount* - The amount of the input, in atomic units.
        * *key_offsets* - A list of integer offets to the input.
        * *k_image* - The key image for the given input
    * *vout* - List of outputs from transaction:
      * *amount* - Amount of transaction output, in atomic units.
      * *target* - Output destination information:
        * *key* - The stealth public key of the receiver. Whoever owns the private key associated with this key controls this transaction output.
    * *extra* - Usually called the "transaction ID" but can be used to include any random 32 bytes.
    * *signatures* - List of ignatures used in ring signature to hide the true origin of the transaction.

Example (Note: Some lists in the returned information have been truncated for display reasons):

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/get_transaction_pool -H 'Content-Type: application/json'
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


### /stop_daemon

Send a command to the daemon to safely disconnect and shut down.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18081/stop_daemon -H 'Content-Type: application/json'
{
  "status": "OK"
}

