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

## Index

JSON RPC Methods:

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

Other RPC Methods:

* [](#)


## JSON RPC Methods

The majority of bitmonerod RPC calls use the daemon's `json_rpc` interface to request various bits of information. These methods all follow a similar structure, for example:

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

* *count* - Number of blocks in longest chain seen by the node.
* *status* - General RPC error code. "OK" means everything looks good.

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

* *wallet_address* - Address of wallet to receive coinbase transactions if block is successfully mined.
* *reserve_size* - Reserve size.

Outputs:

* *blocktemplate_blob* - Blob on which to try to mine a new block.
* *difficulty* - Difficulty of next block.
* *height* - Height on which to mine.
* *prev_hash* - Hash of the most recent block on which to mine the next block.
* *reserved_offset* - Reserved offset.
* *status* - General RPC error code. "OK" means everything looks good.

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

* Block blob data

Outputs:

* *status* - Block submit status.


### getlastblockheader

Block header information for the most recent block is easily retrieved with this method. No inputs are needed.

Inputs: *None*.

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
* *status* - General RPC error code. "OK" means everything looks good.

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

* *height* - The block's height.

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

* *height* - The block's height.
* *hash* - The block's hash.

Outputs:

* *blob* - 
* *block_header* - A structure containing block header information. See [getlastblockheader](#getlastblockheader).
* *json* - JSON formatted block details:
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
    * *extra* - Usually called the "transaction ID" but can be used to include any random 32 bytes.
    * *signatures* - Contain signatures of tx signers. Coinbased txs do not have signatures.
  * *tx_hashes* - List of hashes of non-coinbase transactions in the block. If there are no other transactions, this will be an empty list.
* *status* - General RPC error code. "OK" means everything looks good.

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
  * *avg_download* - Average bytes of data downloaded by node.
  * *avg_upload* - Average bytes of data uploaded by node.
  * *current_download* - Current bytes downloaded by node.
  * *current_upload* - Current bytes uploaded by node.
  * *incoming* - Boolean, is the node getting information from your node?
  * *ip* - The node's IP address
  * *live_time* - 
  * *local_ip* - Boolean
  * *localhost* - Boolean
  * *peer_id* - The node's ID on the network.
  * *port* - The port that the node is using to connect to the network.
  * *recv_count* - 
  * *recv_idle_time* - 
  * *send_count* - 
  * *send_idle_time* - 
  * *state* - 

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

* *alt_blocks_count* - Number of alternative blocks to main chain.
* *difficulty* - Network difficulty (analogous to the strength of the network)
* *grey_peerlist_size* - 
* *height* - Current length of longest chain known to daemon.
* *incoming_connections_count* - Number of peers connected to and pulling from your node.
* *outgoing_connections_count* - Number of peers that you are connected to and getting information from.
* *status* - General RPC error code. "OK" means everything looks good.
* *target* - Current target for next proof of work.
* *target_height* - The height of the next block in the chain.
* *testnet* - A Boolean operator stating if the node is on the testnet (true) or mainnet (false).
* *top_block_hash* - Hash of the highest block in the chain.
* *tx_count* - Total number of non-coinbase transaction in the chain.
* *tx_pool_siz* - Number of transactions that have been broadcast but not included in a block.
* *white_peerlist_size* - 

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

* *earliest_height* - Block height at which hard fork would be enabled if voted in.
* *enabled* - Tells if hard fork is enforced.
* *state* - Current hard fork state: 0 (There is likely a hard fork), 1 (An update is needed to fork properly), or 2 (Everything looks good).
* *status* - General RPC error code. "OK" means everything looks good.
* *threshold* - Minimum percent of votes to trigger hard fork. Default is 80.
* *version* - The major block version for the fork.
* *votes* - Number of votes towards hard fork.
* *voting* - Hard fork voting status.
* *window* - Number of blocks over which current votes are cast. Default is 10080 blocks.

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
  * *ip* - IP address to ban, in Int format.
  * *ban* - Set `true` to ban.
  * *seconds* - Number of seconds to ban node.
  
Outputs:

* *status* - General RPC error code. "OK" means everything looks good.

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
  * *ip* - Banned IP address, in Int format.
  * *seconds* - Local Unix time that IP is banned until.
* *status* - General RPC error code. "OK" means everything looks good.

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


## Other Daemon RPC Calls

Not all daemon RPC calls use the JSON_RPC interface. This section gives examples of these calls.

###

