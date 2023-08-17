---
layout: user-guide
title: "Daemon RPC documentation"
---

{% t global.lang_tag %}

# Daemon RPC

## Introduction

This is a list of the monerod daemon RPC calls, their inputs and outputs, and examples of each.

Many RPC calls use the daemon's JSON RPC interface while others use their own interfaces, as demonstrated below.

Note: "@atomic-units" refer to the smallest fraction of 1 XMR according to the monerod implementation. **1 XMR = 1e12 @atomic-units.**

### [JSON RPC Methods](#json-rpc-methods):

* [get_block_count](#get_block_count)
* [on_get_block_hash](#on_get_block_hash)
* [get_block_template](#get_block_template)
* [submit_block](#submit_block)
* [generateblocks](#generateblocks)
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
* [banned](#banned)
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
* [get_miner_data](#get_miner_data)
* [prune_blockchain](#prune_blockchain)
* [calc_pow](#calc_pow)
* [flush_cache](#flush_cache)
* [add_aux_pow](#add_aux_pow)


### [Other RPC Methods](#other-daemon-rpc-calls):

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
* [/set_bootstrap_daemon](#set_bootstrap_daemon)
* [/get_transaction_pool](#get_transaction_pool)
* [/get_transaction_pool_hashes.bin](#get_transaction_pool_hashesbin)
* [/get_transaction_pool_stats](#get_transaction_pool_stats)
* [/stop_daemon](#stop_daemon)
* [/get_info (not JSON)](#get_info-not-json)
* [/get_limit](#get_limit)
* [/set_limit](#set_limit)
* [/out_peers](#out_peers)
* [/in_peers](#in_peers)
* [/get_net_stats](#get_net_stats)
* [/start_save_graph](#start_save_graph)
* [/stop_save_graph](#stop_save_graph)
* [/get_outs](#get_outs)
* [/update](#update)
* [/pop_blocks](#pop_blocks)


---

## JSON RPC Methods

The majority of monerod RPC calls use the daemon's `json_rpc` interface to request various bits of information. These methods all follow a similar structure, for example:

```
IP=127.0.0.1
PORT=18081
METHOD='get_block_header_by_height'
ALIAS='getblockheaderbyheight'
PARAMS='{"height":912345}'
curl \
    http://$IP:$PORT/json_rpc \
    -d '{"jsonrpc":"2.0","id":"0","method":"'$METHOD'","params":'$PARAMS'}' \
    -H 'Content-Type: application/json'
```

Some methods include parameters, while others do not. Examples of each JSON RPC method follow.

### **get_block_count**

Look up how many blocks are in the longest chain known to the node.

Alias: *getblockcount*.

Inputs: *None*.

Outputs:

* *count* - unsigned int; Number of blocks in longest chain seen by the node.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_count"}' -H 'Content-Type: application/json'  

{  
  "id": "0",  
  "jsonrpc": "2.0",  
  "result": {  
    "count": 993163,  
    "status": "OK"
    "untrusted": "false"  
  }  
}  
```


### **on_get_block_hash**

Look up a block's hash by its height.

Alias: *on_getblockhash*.

Inputs:

* block height (int array of length 1)

Outputs:

* block hash (string)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"on_get_block_hash","params":[912345]}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"
}
```


### **get_block_template**

Get a block template on which mining a new block.

Alias: *getblocktemplate*.

Inputs:

* *wallet_address* - string; Address of wallet to receive coinbase transactions if block is successfully mined.
* *reserve_size* - unsigned int; Reserve size.

Outputs:

* *blocktemplate_blob* - string; Blob on which to try to mine a new block.
* *blockhashing_blob* - string; Blob on which to try to find a valid nonce.
* *difficulty* - unsigned int; Least-significant 64 bits of the 128-bit network difficulty.
* *difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit network difficulty.
* *expected_reward* - unsigned int; Coinbase reward expected to be received if block is successfully mined.
* *height* - unsigned int; Height on which to mine.
* *next_seed_hash* - string; Hash of the next block to use as seed for Random-X proof-of-work.
* *prev_hash* - string; Hash of the most recent block on which to mine the next block.
* *reserved_offset* - unsigned int; Reserved offset.
* *seed_hash* - string; Hash of block to use as seed for Random-X proof-of-work.
* *seed_height* - unsigned int; Height of block to use as seed for Random-X proof-of-work.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *wide_difficulty* - string; Network difficulty (analogous to the strength of the network) as a hexadecimal string representing a 128-bit number.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_template","params":{"wallet_address":"44GBHzv6ZyQdJkjqZje6KLZ3xSyN1hBSFAnLP6EAqJtCRVzMzZmeXTC2AHKDS9aEDTRKmo6a6o9r9j86pYfhCWDkKjbtcns","reserve_size":60}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blockhashing_blob": "0e0ed286da8006ecdc1aab3033cf1716c52f13f9d8ae0051615a2453643de94643b550d543becd00000000d130d22cf308b308498bbc16e2e955e7dbd691e6a8fab805f98ad82e6faa8bcc06",
    "blocktemplate_blob": "0e0ed286da8006ecdc1aab3033cf1716c52f13f9d8ae0051615a2453643de94643b550d543becd0000000002abc78b0101ffefc68b0101fcfcf0d4b422025014bb4a1eade6622fd781cb1063381cad396efa69719b41aa28b4fce8c7ad4b5f019ce1dc670456b24a5e03c2d9058a2df10fec779e2579753b1847b74ee644f16b023c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000051399a1bc46a846474f5b33db24eae173a26393b976054ee14f9feefe99925233802867097564c9db7a36af5bb5ed33ab46e63092bd8d32cef121608c3258edd55562812e21cc7e3ac73045745a72f7d74581d9a0849d6f30e8b2923171253e864f4e9ddea3acb5bc755f1c4a878130a70c26297540bc0b7a57affb6b35c1f03d8dbd54ece8457531f8cba15bb74516779c01193e212050423020e45aa2c15dcb",
    "difficulty": 226807339040,
    "difficulty_top64": 0,
    "expected_reward": 1182367759996,
    "height": 2286447,
    "next_seed_hash": "",
    "prev_hash": "ecdc1aab3033cf1716c52f13f9d8ae0051615a2453643de94643b550d543becd",
    "reserved_offset": 130,
    "seed_hash": "d432f499205150873b2572b5f033c9c6e4b7c6f3394bd2dd93822cd7085e7307",
    "seed_height": 2285568,
    "status": "OK",
    "untrusted": false,
    "wide_difficulty": "0x34cec55820"
  }
```


### **submit_block**

Submit a mined block to the network.

Alias: *submitblock*.

Inputs:

* Block blob data - array of strings; list of block blobs which have been mined.  See [get_block_template](#get_block_template) to get a blob on which to mine.

Outputs:

* *status* - string; Block submit status.

In this example, a block blob which has not been mined is submitted:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"submit_block","params":["0707e6bdfedc053771512f1bc27c62731ae9e8f2443db64ce742f4e57f5cf8d393de28551e441a0000000002fb830a01ffbf830a018cfe88bee283060274c0aae2ef5730e680308d9c00b6da59187ad0352efe3c71d36eeeb28782f29f2501bd56b952c3ddc3e350c2631d3a5086cac172c56893831228b17de296ff4669de020200000000"]' -H 'Content-Type: application/json'

{
  "error": {
    "code": -7,
    "message": "Block not accepted"
  },
  "id": "0",
  "jsonrpc": "2.0"
}
```

### **generateblocks**

Generate a block and specify the address to receive the coinbase reward.

Inputs:
* *amount_of_blocks* - unsigned int; number of blocks to be generated.
* *wallet_address* - string; address to receive the coinbase reward.
* *prev_block* - string;
* *starting_nonce* - unsigned int; Increased by miner untill it finds a matching result that solves a block.

Outputs:
* *blocks* - list of string;
* *height* - unsigned int;
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

The example below uses monerod with the start flags `--regtest --offline --fixed-difficulty 1`. `--offline` ensures that the node does not connect to the main network and learn of its latest chaintip and `--fixed-difficulty` keeps the difficulty constant, allowing a large number of blocks to be generated quickly.

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"generateblocks","params":{"amount_of_blocks":1,"wallet_address":"44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A","starting_nonce": 0}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blocks": ["49b712db7760e3728586f8434ee8bc8d7b3d410dac6bb6e98bf5845c83b917e4"],
    "height": 9783,
    "status": "OK",
    "untrusted": false
  }
}
```

### **get_last_block_header**

Block header information for the most recent block is easily retrieved with this method. No inputs are needed.

Alias: *getlastblockheader*.

Inputs:

* *fill_pow_hash* - boolean; (Optional; defaults to `false`) Add PoW hash to block_header response.

Outputs:

* *block_header* - A structure containing block header information.
  * *block_size* - unsigned int; Backward compatibility, same as *block_weight*, use that instead
  * *block_weight* - unsigned int; The adjusted block size, in bytes. This is the raw size, plus a positive adjustment for any Bulletproof transactions with more than 2 outputs.
  * *cumulative_difficulty* - unsigned int; Least-significant 64 bits of the cumulative difficulty of all blocks up to the block in the reply.
  * *cumulative_difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit cumulative difficulty.
  * *depth* -  unsigned int; The number of blocks succeeding this block on the blockchain. A larger number means an older block.
  * *difficulty* - unsigned int; The strength of the Monero network based on mining power.
  * *difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit network difficulty.
  * *hash* - string; The hash of this block.
  * *height* - unsigned int; The number of blocks preceding this block on the blockchain.
  * *long_term_weight* - unsigned int; The long term block weight, based on the median weight of the preceding 100000 blocks.
  * *major_version* - unsigned int; The major version of the monero protocol at this block height.
  * *miner_tx_hash* - string; The hash of this block's coinbase transaction.
  * *minor_version* - unsigned int; The minor version of the monero protocol at this block height.
  * *nonce* - unsigned int; a cryptographic random one-time number used in mining a Monero block.
  * *num_txes* - unsigned int; Number of transactions in the block, not counting the coinbase tx.
  * *orphan_status* - boolean; Usually `false`. If `true`, this block is not part of the longest chain.
  * *pow_hash* - string; The hash, as a hexadecimal string, calculated from the block as proof-of-work.
  * *prev_hash* - string; The hash of the block immediately preceding this block in the chain.
  * *reward* - unsigned int; The amount of new @atomic-units generated in this block and rewarded to the miner. Note: 1 XMR = 1e12 @atomic-units.
  * *timestamp* - unsigned int; The unix time at which the block was recorded into the blockchain.
  * *wide_cumulative_difficulty* - Cumulative difficulty of all blocks in the blockchain as a hexadecimal string representing a 128-bit number.
  * *wide_difficulty* - string; Network difficulty (analogous to the strength of the network) as a hexadecimal string representing a 128-bit number.
* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

In this example, the most recent block (1562023 at the time) is returned:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_last_block_header"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "block_size": 5500,
      "block_weight": 5500,
      "cumulative_difficulty": 86164894009456483,
      "cumulative_difficulty_top64": 0,
      "depth": 0,
      "difficulty": 227026389695,
      "difficulty_top64": 0,
      "hash": "a6ad87cf357a1aac1ee1d7cb0afa4c2e653b0b1ab7d5bf6af310333e43c59dd0",
      "height": 2286454,
      "long_term_weight": 5500,
      "major_version": 14,
      "miner_tx_hash": "a474f87de1645ff14c5e90c477b07f9bc86a22fb42909caa0705239298da96d0",
      "minor_version": 14,
      "nonce": 249602367,
      "num_txes": 3,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "fa17fefe1d05da775a61a3dc33d9e199d12af167ef0ab37e52b51e8487b50f25",
      "reward": 1181337498013,
      "timestamp": 1612088597,
      "wide_cumulative_difficulty": "0x1321e83bb8af763",
      "wide_difficulty": "0x34dbd3cabf"
    },
    "credits": 0,
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```


### **get_block_header_by_hash**

Block header information can be retrieved using either a block's hash or height. This method includes a block's hash as an input parameter to retrieve basic information about the block.

Alias: *getblockheaderbyhash*.

Inputs:

* *hash* - string; The block's sha256 hash.
* *fill_pow_hash* - boolean; (Optional; defaults to `false`) Add PoW hash to block_header response.

Outputs:

* *block_header* - A structure containing block header information. See [get_last_block_header](#get_last_block_header).
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

In this example, block 912345 is looked up by its hash:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_hash","params":{"hash":"e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "block_size": 210,
      "block_weight": 210,
      "cumulative_difficulty": 754734824984346,
      "cumulative_difficulty_top64": 0,
      "depth": 1374113,
      "difficulty": 815625611,
      "difficulty_top64": 0,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "long_term_weight": 210,
      "major_version": 1,
      "miner_tx_hash": "c7da3965f25c19b8eb7dd8db48dcd4e7c885e2491db77e289f0609bf8e08ec30",
      "minor_version": 2,
      "nonce": 1646,
      "num_txes": 0,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716,
      "wide_cumulative_difficulty": "0x2ae6d65248f1a",
      "wide_difficulty": "0x309d758b"
    },
    "credits": 0,
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```


### **get_block_header_by_height**

Similar to [get_block_header_by_hash](#get_block_header_by_hash) above, this method includes a block's height as an input parameter to retrieve basic information about the block.

Alias: *getblockheaderbyheight*.

Inputs:

* *height* - unsigned int; The block's height.
* *fill_pow_hash* - boolean; (Optional; defaults to `false`) Add PoW hash to block_header response.

Outputs:

* *block_header* - A structure containing block header information. See [get_last_block_header](#get_last_block_header).
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

In this example, block 912345 is looked up by its height (notice that the returned information is the same as in the previous example):

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_height","params":{"height":912345}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "block_size": 210,
      "block_weight": 210,
      "cumulative_difficulty": 754734824984346,
      "cumulative_difficulty_top64": 0,
      "depth": 1374118,
      "difficulty": 815625611,
      "difficulty_top64": 0,
      "hash": "e22cf75f39ae720e8b71b3d120a5ac03f0db50bba6379e2850975b4859190bc6",
      "height": 912345,
      "long_term_weight": 210,
      "major_version": 1,
      "miner_tx_hash": "c7da3965f25c19b8eb7dd8db48dcd4e7c885e2491db77e289f0609bf8e08ec30",
      "minor_version": 2,
      "nonce": 1646,
      "num_txes": 0,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "b61c58b2e0be53fad5ef9d9731a55e8a81d972b8d90ed07c04fd37ca6403ff78",
      "reward": 7388968946286,
      "timestamp": 1452793716,
      "wide_cumulative_difficulty": "0x2ae6d65248f1a",
      "wide_difficulty": "0x309d758b"
    },
    "credits": 0,
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```

### **get_block_headers_range**

Similar to [get_block_header_by_height](#get_block_header_by_height) above, but for a range of blocks. This method includes a starting block height and an ending block height as parameters to retrieve basic information about the range of blocks.

Alias: *getblockheadersrange*.

Inputs:

* *start_height* - unsigned int; The starting block's height.
* *end_height* - unsigned int; The ending block's height.
* *fill_pow_hash* - boolean; (Optional; defaults to `false`) Add PoW hash to block_header response.

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *headers* - array of `block_header` (a structure containing block header information. See [get_last_block_header](#get_last_block_header)).
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

In this example, blocks range from height 1545999 to 1546000 is looked up (notice that the returned informations are ascending order and that it is at the April 2018 network upgrade time):

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block_headers_range","params":{"start_height":1545999,"end_height":1546000}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "credits": 0,
    "headers": [{
      "block_size": 301413,
      "block_weight": 301413,
      "cumulative_difficulty": 13185267971483472,
      "cumulative_difficulty_top64": 0,
      "depth": 740464,
      "difficulty": 134636057921,
      "difficulty_top64": 0,
      "hash": "86d1d20a40cefcf3dd410ff6967e0491613b77bf73ea8f1bf2e335cf9cf7d57a",
      "height": 1545999,
      "long_term_weight": 301413,
      "major_version": 6,
      "miner_tx_hash": "9909c6f8a5267f043c3b2b079fb4eacc49ef9c1dee1c028eeb1a259b95e6e1d9",
      "minor_version": 6,
      "nonce": 3246403956,
      "num_txes": 20,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "0ef6e948f77b8f8806621003f5de24b1bcbea150bc0e376835aea099674a5db5",
      "reward": 5025593029981,
      "timestamp": 1523002893,
      "wide_cumulative_difficulty": "0x2ed7ee6db56750",
      "wide_difficulty": "0x1f58ef3541"
    },{
      "block_size": 13322,
      "block_weight": 13322,
      "cumulative_difficulty": 13185402687569710,
      "cumulative_difficulty_top64": 0,
      "depth": 740463,
      "difficulty": 134716086238,
      "difficulty_top64": 0,
      "hash": "b408bf4cfcd7de13e7e370c84b8314c85b24f0ba4093ca1d6eeb30b35e34e91a",
      "height": 1546000,
      "long_term_weight": 13322,
      "major_version": 7,
      "miner_tx_hash": "7f749c7c64acb35ef427c7454c45e6688781fbead9bbf222cb12ad1a96a4e8f6",
      "minor_version": 7,
      "nonce": 3737164176,
      "num_txes": 1,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "86d1d20a40cefcf3dd410ff6967e0491613b77bf73ea8f1bf2e335cf9cf7d57a",
      "reward": 4851952181070,
      "timestamp": 1523002931,
      "wide_cumulative_difficulty": "0x2ed80dcb69bf2e",
      "wide_difficulty": "0x1f5db457de"
    }],
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```


### **get_block**

Full block information can be retrieved by either block height or hash, like with the above block header calls. For full block information, both lookups use the same method, but with different input parameters.

Alias: *getblock*.

Inputs (pick height or hash):

* *height* - unsigned int; The block's height.
* *hash* - string; The block's hash.
* *fill_pow_hash* - bool; (Optional; Default false) Add PoW hash to block_header response.

Outputs:

* *blob* - string; Hexadecimal blob of block information.
* *block_header* - A structure containing block header information. See [get_last_block_header](#get_last_block_header).
* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
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
      * *amount* - The amount of the coinbase output, in @atomic-units.
      * *target* -
        * *tagged_key* -
          * *key* - the public key of the output
          * *view_tag* - The 1st byte of a shared secret (used for reducing synchronization time)
    * *extra* - Usually called the "transaction ID" but can be used to include any random 32 byte/64 character hex string.
    * *rct_signatures* - Contain signatures of tx signers. Coinbased txs do not have signatures.
  * *tx_hashes* - List of hashes of non-coinbase transactions in the block. If there are no other transactions, this will be an empty list.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

**Look up by height:**

In the following example, block 2751506 is looked up by its height. Note that block 2751506 does not have any non-coinbase transactions. (See the next example for a block with extra transactions):

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"height":2751506}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blob": "1010c58bab9b06b27bdecfc6cd0a46172d136c08831cf67660377ba992332363228b1b722781e7807e07f502cef8a70101ff92f8a7010180e0a596bb1103d7cbf826b665d7a532c316982dc8dbc24f285cbc18bbcc27c7164cd9b3277a85d034019f629d8b36bd16a2bfce3ea80c31dc4d8762c67165aec21845494e32b7582fe00211000000297a787a000000000000000000000000",
    "block_header": {
      "block_size": 106,
      "block_weight": 106,
      "cumulative_difficulty": 236046001376524168,
      "cumulative_difficulty_top64": 0,
      "depth": 40,
      "difficulty": 313732272488,
      "difficulty_top64": 0,
      "hash": "43bd1f2b6556dcafa413d8372974af59e4e8f37dbf74dc6b2a9b7212d0577428",
      "height": 2751506,
      "long_term_weight": 176470,
      "major_version": 16,
      "miner_tx_hash": "e49b854c5f339d7410a77f2a137281d8042a0ffc7ef9ab24cd670b67139b24cd",
      "minor_version": 16,
      "nonce": 4110909056,
      "num_txes": 0,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "b27bdecfc6cd0a46172d136c08831cf67660377ba992332363228b1b722781e7",
      "reward": 600000000000,
      "timestamp": 1667941829,
      "wide_cumulative_difficulty": "0x3469a966eb2f788",
      "wide_difficulty": "0x490be69168"
    },
    "credits": 0,
    "json": "{\n  \"major_version\": 16, \n  \"minor_version\": 16, \n  \"timestamp\": 1667941829, \n  \"prev_id\": \"b27bdecfc6cd0a46172d136c08831cf67660377ba992332363228b1b722781e7\", \n  \"nonce\": 4110909056, \n  \"miner_tx\": {\n    \"version\": 2, \n    \"unlock_time\": 2751566, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 2751506\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 600000000000, \n        \"target\": {\n          \"tagged_key\": {\n            \"key\": \"d7cbf826b665d7a532c316982dc8dbc24f285cbc18bbcc27c7164cd9b3277a85\", \n            \"view_tag\": \"d0\"\n          }\n        }\n      }\n    ], \n    \"extra\": [ 1, 159, 98, 157, 139, 54, 189, 22, 162, 191, 206, 62, 168, 12, 49, 220, 77, 135, 98, 198, 113, 101, 174, 194, 24, 69, 73, 78, 50, 183, 88, 47, 224, 2, 17, 0, 0, 0, 41, 122, 120, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0\n    ], \n    \"rct_signatures\": {\n      \"type\": 0\n    }\n  }, \n  \"tx_hashes\": [ ]\n}",
    "miner_tx_hash": "e49b854c5f339d7410a77f2a137281d8042a0ffc7ef9ab24cd670b67139b24cd",
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```

**Look up by hash:**

In the following example, block 2751210 is looked up by its hash. Note that block 2751210 has 2 non-coinbase transactions:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"hash":"86d421322b700166dde2d7eba1cc8600925ef640abf6c0a2cc8ce0d6dd90abfd"}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "blob": "1010d8faa89b06f8a36d0dbe4d27d2f52160000563896048d71067c31e99a3869bf9b7142227bb5328010b02a6f6a70101ffeaf5a70101a08bc8b3bb11036d6713f5aa552a1aaf33baed7591f795b86daf339e51029a9062dfe09f0f909b312b0124d6023d591c4d434000e5e31c6db718a1e96e865939930e90a7042a1cd4cbd202083786a78452fdfc000002a89e380a44d8dfc64b551baa171447a0f9c9262255be6e8f8ef10896e36e2bf90c4d343e416e394ad9cc10b7d2df7b2f39370a554730f75dfcb04944bd62c299",
    "block_header": {
      "block_size": 3166,
      "block_weight": 3166,
      "cumulative_difficulty": 235954020187853162,
      "cumulative_difficulty_top64": 0,
      "depth": 26,
      "difficulty": 312527777859,
      "difficulty_top64": 0,
      "hash": "86d421322b700166dde2d7eba1cc8600925ef640abf6c0a2cc8ce0d6dd90abfd",
      "height": 2751210,
      "long_term_weight": 176470,
      "major_version": 16,
      "miner_tx_hash": "dabe07900d3123ed895612f4a151adb3e39681b145f0f85bfee23ea1fe47acf2",
      "minor_version": 16,
      "nonce": 184625235,
      "num_txes": 2,
      "orphan_status": false,
      "pow_hash": "",
      "prev_hash": "f8a36d0dbe4d27d2f52160000563896048d71067c31e99a3869bf9b7142227bb",
      "reward": 600061380000,
      "timestamp": 1667906904,
      "wide_cumulative_difficulty": "0x34646ee649f516a",
      "wide_difficulty": "0x48c41b7043"
    },
    "credits": 0,
    "json": "{\n  \"major_version\": 16, \n  \"minor_version\": 16, \n  \"timestamp\": 1667906904, \n  \"prev_id\": \"f8a36d0dbe4d27d2f52160000563896048d71067c31e99a3869bf9b7142227bb\", \n  \"nonce\": 184625235, \n  \"miner_tx\": {\n    \"version\": 2, \n    \"unlock_time\": 2751270, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 2751210\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 600061380000, \n        \"target\": {\n          \"tagged_key\": {\n            \"key\": \"6d6713f5aa552a1aaf33baed7591f795b86daf339e51029a9062dfe09f0f909b\", \n            \"view_tag\": \"31\"\n          }\n        }\n      }\n    ], \n    \"extra\": [ 1, 36, 214, 2, 61, 89, 28, 77, 67, 64, 0, 229, 227, 28, 109, 183, 24, 161, 233, 110, 134, 89, 57, 147, 14, 144, 167, 4, 42, 28, 212, 203, 210, 2, 8, 55, 134, 167, 132, 82, 253, 252, 0\n    ], \n    \"rct_signatures\": {\n      \"type\": 0\n    }\n  }, \n  \"tx_hashes\": [ \"a89e380a44d8dfc64b551baa171447a0f9c9262255be6e8f8ef10896e36e2bf9\", \"0c4d343e416e394ad9cc10b7d2df7b2f39370a554730f75dfcb04944bd62c299\"\n  ]\n}",
    "miner_tx_hash": "dabe07900d3123ed895612f4a151adb3e39681b145f0f85bfee23ea1fe47acf2",
    "status": "OK",
    "top_hash": "",
    "tx_hashes": ["a89e380a44d8dfc64b551baa171447a0f9c9262255be6e8f8ef10896e36e2bf9","0c4d343e416e394ad9cc10b7d2df7b2f39370a554730f75dfcb04944bd62c299"],
    "untrusted": false
  }
}
```


### **get_connections**

Retrieve information about incoming and outgoing connections to your node.

Alias: *None*.

Inputs: *None*.

Outputs:

* *connections* - List of all connections and their info:
  * *address* - string; The peer's address, actually IPv4 & port
  * *avg_download* - unsigned int; Average bytes of data downloaded by node.
  * *avg_upload* - unsigned int; Average bytes of data uploaded by node.
  * *connection_id* - string; The connection ID
  * *current_download* - unsigned int; Current bytes downloaded by node.
  * *current_upload* - unsigned int; Current bytes uploaded by node.
  * *height*- unsigned int; The peer height
  * *host* - string; The peer host
  * *incoming* - boolean; Is the node getting information from your node?
  * *ip* - string; The node's IP address.
  * *live_time* - unsigned int
  * *local_ip* - boolean
  * *localhost* - boolean
  * *peer_id* - string; The node's ID on the network.
  * *port* - string; The port that the node is using to connect to the network.
  * *recv_count* - unsigned int
  * *recv_idle_time* - unsigned int
  * *send_count* - unsigned int
  * *send_idle_time* - unsigned int
  * *state* - string
  * *support_flags* - unsigned int
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Following is an example of `get_connections` and it's return:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_connections"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "connections": [{
      "address": "51.75.162.171:44741",
      "address_type": 1,
      "avg_download": 0,
      "avg_upload": 1,
      "connection_id": "4420a6fcf9c642daaae41400ccfc1fd7",
      "current_download": 0,
      "current_upload": 1,
      "height": 1,
      "host": "51.75.162.171",
      "incoming": true,
      "ip": "51.75.162.171",
      "live_time": 9,
      "local_ip": false,
      "localhost": false,
      "peer_id": "ff561b6a65c2838c",
      "port": "44741",
      "pruning_seed": 0,
      "recv_count": 382,
      "recv_idle_time": 8,
      "rpc_credits_per_hash": 0,
      "rpc_port": 0,
      "send_count": 15434,
      "send_idle_time": 8,
      "state": "normal",
      "support_flags": 1
    },{

    ...
    }],
    "status": "OK"
    "untrusted": false
  }
}
```


### **get_info**

Retrieve general information about the state of your node and the network.

Alias:

* */get_info*
* */getinfo*

See other RPC Methods [/get_info (not JSON)](#get_info-not-json)

Inputs: *None*.

Outputs:

* *adjusted_time* - unsigned int; Current time approximated from chain data, as Unix time.
* *alt_blocks_count* - unsigned int; Number of alternative blocks to main chain.
* *block_size_limit* - unsigned int; Backward compatibility, same as *block_weight_limit*, use that instead
* *block_size_median* - unsigned int; Backward compatibility, same as *block_weight_median*, use that instead
* *block_weight_limit* - unsigned int; Maximum allowed adjusted block size based on latest 100000 blocks
* *block_weight_median* - unsigned int; Median adjusted block size of latest 100000 blocks
* *bootstrap_daemon_address* - string; @Bootstrap-node to give immediate usability to wallets while syncing by proxying RPC to it. (Note: the replies may be untrustworthy).
* *busy_syncing* - boolean; States if new blocks are being added (`true`) or not (`false`).
* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *cumulative_difficulty* - unsigned int; Least-significant 64 bits of the 128-bit cumulative difficulty.
* *cumulative_difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit cumulative difficulty.
* *database_size* - unsigned int; The size of the blockchain database, in bytes.
* *difficulty* - unsigned int; Least-significant 64 bits of the 128-bit network difficulty.
* *difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit network difficulty.
* *free_space* - unsigned int; Available disk space on the node.
* *grey_peerlist_size* - unsigned int; Grey Peerlist Size
* *height* - unsigned int; Current length of longest chain known to daemon.
* *height_without_bootstrap* - unsigned int; Current length of the local chain of the daemon.
* *incoming_connections_count* - unsigned int; Number of peers connected to and pulling from your node.
* *mainnet* - boolean; States if the node is on the mainnet (`true`) or not (`false`).
* *nettype* - string; Network type (one of `mainnet`, `stagenet` or `testnet`).
* *offline* - boolean; States if the node is offline (`true`) or online (`false`).
* *outgoing_connections_count* - unsigned int; Number of peers that you are connected to and getting information from.
* *rpc_connections_count* - unsigned int; Number of RPC client connected to the daemon (Including this RPC request).
* *stagenet* - boolean; States if the node is on the stagenet (`true`) or not (`false`).
* *start_time* - unsigned int; Start time of the daemon, as UNIX time.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *synchronized* - boolean; States if the node is synchronized (`true`) or not (`false`).
* *target* - unsigned int; Current target for next proof of work.
* *target_height* - unsigned int; The height of the next block in the chain.
* *testnet* - boolean; States if the node is on the testnet (`true`) or not (`false`).
* *top_block_hash* - string; Hash of the highest block in the chain.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *tx_count* - unsigned int; Total number of non-coinbase transaction in the chain.
* *tx_pool_size* - unsigned int; Number of transactions that have been broadcast but not included in a block.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *update_available* - boolean; States if a newer Monero software version is available.
* *version* - string; The version of the Monero software the node is running.
* *was_bootstrap_ever_used* - boolean; States if a bootstrap node has ever been used since the daemon started.
* *white_peerlist_size* - unsigned int; White Peerlist Size
* *wide_cumulative_difficulty* - Cumulative difficulty of all blocks in the blockchain as a hexadecimal string representing a 128-bit number.
* *wide_difficulty* - string; Network difficulty (analogous to the strength of the network) as a hexadecimal string representing a 128-bit number.

Following is an example `get_info` call and its return:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "adjusted_time": 1612090533,
    "alt_blocks_count": 2,
    "block_size_limit": 600000,
    "block_size_median": 300000,
    "block_weight_limit": 600000,
    "block_weight_median": 300000,
    "bootstrap_daemon_address": "",
    "busy_syncing": false,
    "credits": 0,
    "cumulative_difficulty": 86168732847545368,
    "cumulative_difficulty_top64": 0,
    "database_size": 34329849856,
    "difficulty": 225889137349,
    "difficulty_top64": 0,
    "free_space": 10795802624,
    "grey_peerlist_size": 4999,
    "height": 2286472,
    "height_without_bootstrap": 2286472,
    "incoming_connections_count": 85,
    "mainnet": true,
    "nettype": "mainnet",
    "offline": false,
    "outgoing_connections_count": 16,
    "rpc_connections_count": 1,
    "stagenet": false,
    "start_time": 1611915662,
    "status": "OK",
    "synchronized": true,
    "target": 120,
    "target_height": 2286464,
    "testnet": false,
    "top_block_hash": "b92720d8315b96e32020d04e14a0c54cc13e057d4a5beb4501be490d306fdd8f",
    "top_hash": "",
    "tx_count": 11239803,
    "tx_pool_size": 21,
    "untrusted": false,
    "update_available": false,
    "version": "0.17.1.9-release",
    "was_bootstrap_ever_used": false,
    "white_peerlist_size": 1000,
    "wide_cumulative_difficulty": "0x1322201881f9c18",
    "wide_difficulty": "0x34980ab2c5"
  }
}
```


### **hard_fork_info**

Look up information regarding hard fork voting and readiness.

Alias: *None*.

Inputs: *None*.

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *earliest_height* - unsigned int; Block height at which hard fork would be enabled if voted in.
* *enabled* - boolean; Tells if hard fork is enforced.
* *state* - unsigned int; Current hard fork state: 0 (There is likely a hard fork), 1 (An update is needed to fork properly), or 2 (Everything looks good).
* *status* - string; General RPC error code. "OK" means everything looks good.
* *threshold* - unsigned int; Minimum percent of votes to trigger hard fork. Default is 80.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *version* - unsigned int; The major block version for the fork.
* *votes* - unsigned int; Number of votes towards hard fork.
* *voting* - unsigned int; Hard fork voting status.
* *window* - unsigned int; Number of blocks over which current votes are cast. Default is 10080 blocks.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"hard_fork_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "credits": 0,
    "earliest_height": 2210720,
    "enabled": true,
    "state": 2,
    "status": "OK",
    "threshold": 0,
    "top_hash": "",
    "untrusted": false,
    "version": 14,
    "votes": 10080,
    "voting": 14,
    "window": 10080
  }
}
```


### **set_bans**

Ban another node by IP.

Alias: *None*.

Inputs:

* *bans* - A list of nodes to ban:
  * *host* - string; Host to ban (IP in A.B.C.D form - will support I2P address in the future).
  * *ip* - unsigned int; IP address to ban, in Int format.
  * *ban* - boolean; Set `true` to ban.
  * *seconds* - unsigned int; Number of seconds to ban node.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Examples:

**banning by host**

In the following example, host is banned with its IP address string-formatted as A.B.C.D:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_bans","params":{"bans":[{"host":"192.168.1.51","ban":true,"seconds":30}]}}' -H  'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "untrusted": false
  }
}
```

**banning by ip**

In the following example, integer-formatted IP is banned:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"set_bans","params":{"bans":[{"ip":838969536,"ban":true,"seconds":30}]}}' -H  'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```


### **get_bans**

Get list of banned IPs.

Alias: *None*.

Inputs: *None*.

Outputs:

* *bans* - List of banned nodes:
  * *host* - string; Banned host (IP in A.B.C.D form).
  * *ip* - unsigned int; Banned IP address, in Int format.
  * *seconds* - unsigned int; Local Unix time that IP is banned until.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_bans"}' -H 'Content-Type: application/json'

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
    "untrusted": false
  }
}
```


### **banned**

Check if an IP address is banned and for how long.

Alias: *None*

Inputs:

* *address* - string;

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.
* *banned* - boolean;
* *seconds* - unsigned int;

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"banned","params":{"address":"95.216.203.255"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "banned": true,
    "seconds": 690413,
    "status": "OK"
  }
}
```

### **flush_txpool**

Flush tx ids from transaction pool

Alias: *None*.

Inputs:

* *txids* - array of strings; Optional, list of transactions IDs to flush from pool (all tx ids flushed if empty).

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"flush_txpool","params":{"txids":["dc16fa8eaffe1484ca9014ea050e13131d3acf23b419f33bb4cc0b32b6c49308",""]}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```

### **get_output_histogram**

Get a histogram of output amounts. For all amounts (possibly filtered by parameters), gives the number of outputs on the chain for that amount.
RingCT outputs counts as 0 amount.

Inputs:

* *amounts* - list of unsigned int
* *min_count* - unsigned int
* *max_count* - unsigned int
* *unlocked* - boolean
* *recent_cutoff* - unsigned int

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *histogram* - list of histogram entries, in the following structure:
  * *amount* - unsigned int; Output amount in @atomic-units
  * *total_instances* - unsigned int;
  * *unlocked_instances* - unsigned int;
  * *recent_instances* - unsigned int;
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_output_histogram","params":{"amounts":[20000000000]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "credits": 0,
    "histogram": [{
      "amount": 20000000000,
      "recent_instances": 0,
      "total_instances": 381477,
      "unlocked_instances": 0
    }],
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```


### **get_coinbase_tx_sum**

Get the coinbase amount and the fees amount for n last blocks starting at particular height

Alias: *None*.

Inputs:

* *height* - unsigned int; Block height from which getting the amounts
* *count* - unsigned int; number of blocks to include in the sum

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *emission_amount* - unsigned int; Least significant 64 bits for 128 bit integer representing the sum of coinbase rewards in @atomic-units. (See src/rpc/core_rpc_server.cpp store_128)
* *emission_amount_top64* - unsigned it; Most significant 64 bits for 128 bit integer representing the sum of coinbase rewards in @atomic-units
* *fee_amount* - unsigned int; Most significant 64 bits for 128 bit integer representing the sum of fees in @atomic-units.
* *fee_amount_top64* - unsigned int; Most significant 64 bits for 128 bit integer representing the sum of fees in @atomic-units.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *wide_emission_amount* - string (128 bit hex encoded integer); Sum of coinbase rewards in @atomic-units.
* *wide_fee_amount* - string (128 bit hex encoded integer); Sum of fees in @atomic-units.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_coinbase_tx_sum","params":{"height":1563078,"count":2}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "credits": 0,
    "emission_amount": 9471836197320,
    "emission_amount_top64": 0,
    "fee_amount": 0,
    "fee_amount_top64": 0,
    "status": "OK",
    "top_hash": "",
    "untrusted": false,
    "wide_emission_amount": "0x89d556e91c8",
    "wide_fee_amount": "0x0"
  }
}
```


### **get_version**

Give the node current version

Alias: *None*.

Inputs: *None*.

Outputs:

* *release* - boolean; States if the daemon software version corresponds to an official tagged release (`true`), or not (`false`)
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *version* - unsigned int;

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_version"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "release": true,
    "status": "OK",
    "untrusted": false,
    "version": 196613
  }
```


### **get_fee_estimate**

Gives an estimation on fees per byte.

Alias: *None*.

Inputs:

* *grace_blocks* - unsigned int; Optional

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *fee* - unsigned int; Amount of fees estimated per byte in @atomic-units
* *fees* - array of unsigned int; Represents the base fees at different priorities [slow, normal, fast, fastest].
* *quantization_mask* - unsigned int; Final fee should be rounded up to an even multiple of this value
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_fee_estimate"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "credits": 0,
    "fee": 7874,
    "fees": [20000,80000,320000,4000000],
    "quantization_mask": 10000,
    "status": "OK",
    "top_hash": "",
    "untrusted": false
  }
}
```


### **get_alternate_chains**

Display alternative chains seen by the node.

Alias: *None*.

Inputs: *None*.

Outputs:

* *chains* - array of chains, the following structure:
  * *block_hash* - string; the block hash of the first diverging block of this alternative chain.
  * *block_hashes* - array of strings; An array of all block hashes in the alternative chain that are not in the main chain.
  * *difficulty* - unsigned int; Least-significant 64 bits of 128-bit integer for the cumulative difficulty of all blocks in the alternative chain.
  * *difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit network difficulty.
  * *height* - unsigned int; the block height of the first diverging block of this alternative chain.
  * *length* - unsigned int; the length in blocks of this alternative chain, after divergence.
  * *main_chain_parent_block* - string; The hash of the greatest height block that is shared between the alternative chain and the main chain.
  * *wide_difficulty* - string; Network difficulty (analogous to the strength of the network) as a hexadecimal string representing a 128-bit number.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_alternate_chains"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "chains": [{
      "block_hash": "dd4998cfe92a959a5a0e4ed72432cf23d7dfc4179cbea871ee2a705d71fb5e25",
      "block_hashes": ["dd4998cfe92a959a5a0e4ed72432cf23d7dfc4179cbea871ee2a705d71fb5e25"],
      "difficulty": 86227995333492079,
      "difficulty_top64": 0,
      "height": 2286736,
      "length": 1,
      "main_chain_parent_block": "6da3d2dc86ccc9353d19fc6b05083125f4ca7d22540d938010462f197a3fe590",
      "wide_difficulty": "0x13257e7a78bfd6f"
    }],
    "status": "OK",
    "untrusted": false
  }
}
```


### **relay_tx**

Relay a list of transaction IDs.

Alias: *None*.

Inputs:

* *txids* - array of string; list of transaction IDs to relay

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"relay_tx","params":{"txids":["9fd75c429cbe52da9a52f2ffc5fbd107fe7fd2099c0d8de274dc8a67e0c98613"]}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```


### **sync_info**

Get synchronisation informations

Alias: *None*.

Inputs: *None*.

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *height* - unsigned int;
* *next_needed_pruning_seed* - unsigned int; The next pruning seed needed for pruned sync.
* *overview* - string; Overview of current block queue where each character in the string represents a block set in the queue. `. = requested but not received`, `o = set received`, `m  = received set that matches the next blocks needed`
* *peers* - array of peer structure, defined as follows:
  * *info* - structure of connection info, as defined in [get_connections](#get_connections)
* *spans* - array of span structure, defined as follows (optional, absent if node is fully synced):
  * *connection_id* - string; Id of connection
  * *nblocks* - unsigned int; number of blocks in that span
  * *rate* - unsigned int; connection rate
  * *remote_address* - string; peer address the node is downloading (or has downloaded) than span from
  * *size* - unsigned int; total number of bytes in that span's blocks (including txes)
  * *speed* - unsigned int; connection speed
  * *start_block_height* - unsigned int; block height of the first block in that span
* *status* - string; General RPC error code. "OK" means everything looks good.
* *target_height* - unsigned int; target height the node is syncing from (will be 0 if node is fully synced)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"sync_info"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "credits": 0,
    "height": 2287210,
    "next_needed_pruning_seed": 0,
    "overview": "[]",
    "peers": [{
      "info": {
        "address": "51.79.49.41:44317",
        "address_type": 1,
        "avg_download": 0,
        "avg_upload": 1,
        "connection_id": "718a970773e844618f3b830aa5775a45",
        "current_download": 0,
        "current_upload": 1,
        "height": 1,
        "host": "51.79.49.41",
        "incoming": true,
        "ip": "51.79.49.41",
        "live_time": 26,
        "local_ip": false,
        "localhost": false,
        "peer_id": "c1d50bcd29c89909",
        "port": "44317",
        "pruning_seed": 0,
        "recv_count": 468,
        "recv_idle_time": 5,
        "rpc_credits_per_hash": 0,
        "rpc_port": 0,
        "send_count": 35347,
        "send_idle_time": 3,
        "state": "normal",
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
    "target_height": 2287203,
    "top_hash": "",
    "untrusted": false
  }
}
```


### **get_txpool_backlog**

Get all transaction pool backlog

Alias: *None*.

Inputs: *None*.

Outputs:

* *backlog*: array of structures *tx_backlog_entry* (in binary form):
  * *blob_size* - unsigned int (in binary form)
  * *fee* - unsigned int (in binary form)
  * *time_in_pool* - unsigned int (in binary form)
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_txpool_backlog"}' -H 'Content-Type: application/json'

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



Alias: *None*.

Inputs:

* *amounts* - array of unsigned int; amounts to look for
* *cumulative* - boolean; (optional, default is `false`) States if the result should be cumulative (`true`) or not (`false`)
* *from_height* - unsigned int; (optional, default is 0) starting height to check from
* *to_height* - unsigned int; (optional, default is 0) ending height to check up to

Outputs:

* *distributions* - array of structure distribution as follows:
  * *amount* - unsigned int
  * *base* - unsigned int
  * *distribution* - array of unsigned int
  * *start_height* - unsigned int
* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_output_distribution","params":{"amounts":[628780000],"from_height":1462078}}' -H 'Content-Type: application/json'

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


### **get_miner_data**

Provide the necessary data to create a custom block template. They are used by p2pool.

Inputs: *None*.

Outputs:

* *major_version* - unsigned int; major fork version.
* *height* - unsigned int; current blockheight.
* *prev_id* - string; previous block id.
* *seed_hash* - string; RandomX seed hash.
* *difficulty* - unsigned int; network. difficulty.
* *median_weight* - unsigned int; median block weight.
* *already_generated_coins* - unsigned int; coins mined by the network so far.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *tx_backlog* - array of mineable mempool transactions.
  * *id* - string;
  * *weight* - unsigned int; 
  * *fee* - unsigned int;
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://localhost:18082/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"get_miner_data"}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "already_generated_coins": 18186022843595960691,
    "difficulty": "0x48afae42de",
    "height": 2731375,
    "major_version": 16,
    "median_weight": 300000,
    "prev_id": "78d50c5894d187c4946d54410990ca59a75017628174a9e8c7055fa4ca5c7c6d",
    "seed_hash": "a6b869d50eca3a43ec26fe4c369859cf36ae37ce6ecb76457d31ffeb8a6ca8a6",
    "status": "OK",
    "tx_backlog": [{
      "fee": 30700000,
      "id": "9868490d6bb9207fdd9cf17ca1f6c791b92ca97de0365855ea5c089f67c22208",
      "weight": 1535
    },{
      "fee": 44280000,
      "id": "b6000b02bbec71e18ad704bcae09fb6e5ae86d897ced14a718753e76e86c0a0a",
      "weight": 2214
    }],
    "untrusted": false
  }
}
```


### **prune_blockchain** 

Alias: *None*.

Inputs:

* *check* - boolean; Optional (`false` by default) - If set to `true` then pruning status is checked instead of initiating pruning.

Outputs:

* *pruned* - boolean;
* *pruning_seed* - unsigned int; Blockheight at which pruning began.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"prune_blockchain","params":{"check":true}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "pruned": true,
    "pruning_seed": 387,
    "status": "OK",
    "untrusted": false
  }
}
```


### **calc_pow**

Calculate PoW hash for a block candidate.

Alias: *None*.

Inputs:

* *major_version* - unsigned int; The major version of the monero protocol at this block height.
* *height* - unsigned int;
* *block_blob* - blobdata;
* *seed_hash* - string;

Outputs:

* *result* - string; PoW hash.

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"calc_pow","params":{"major_version":14,"height":2286447,"block_blob":"0e0ed286da8006ecdc1aab3033cf1716c52f13f9d8ae0051615a2453643de94643b550d543becd0000000002abc78b0101ffefc68b0101fcfcf0d4b422025014bb4a1eade6622fd781cb1063381cad396efa69719b41aa28b4fce8c7ad4b5f019ce1dc670456b24a5e03c2d9058a2df10fec779e2579753b1847b74ee644f16b023c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000051399a1bc46a846474f5b33db24eae173a26393b976054ee14f9feefe99925233802867097564c9db7a36af5bb5ed33ab46e63092bd8d32cef121608c3258edd55562812e21cc7e3ac73045745a72f7d74581d9a0849d6f30e8b2923171253e864f4e9ddea3acb5bc755f1c4a878130a70c26297540bc0b7a57affb6b35c1f03d8dbd54ece8457531f8cba15bb74516779c01193e212050423020e45aa2c15dcb","seed_hash":"d432f499205150873b2572b5f033c9c6e4b7c6f3394bd2dd93822cd7085e7307"}}' -H 'Content-Type: application/json'

{
  "id": "0",
  "jsonrpc": "2.0",
  "result": "d0402d6834e26fb94a9ce38c6424d27d2069896a9b8b1ce685d79936bca6e0a8"
}
```


### **flush_cache**

Flush bad transactions / blocks from the cache.

Alias: *None*.

Inputs:

* *bad_txs* - boolean; Optional (`false` by default).
* *bad_blocks* - boolean; Optional (`false` by default).

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"flush_cache","params":{"bad_txs":true,"bad_blocks":true}}' -H 'Content-Type: application/json'
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "untrusted": false
  }
}
```


### **add_aux_pow**

Easily enable merge mining with Monero without requiring software that manually alters the extra field in the coinbase tx to include the merkle root of the aux blocks.

Alias: *None*.

Inputs:

* *blocktemplate_blob* - string;
* *aux_pow* - array;
  * *id* - string;
  * *hash* - string;

Outputs:

* *blocktemplate_blob* - string;
* *blockhashing_blob* - string;
* *merkle_root* - string;
* *merkle_tree_depth* - unsigned int;
* *aux_pow* - array;
  * *id* - string;
  * *hash* - string;

Example:

```
$ curl http://127.0.0.1:18081/json_rpc -d '{"jsonrpc":"2.0","id":"0","method":"add_aux_pow","params":{"blocktemplate_blob":" ... ","aux_pow":[{"id":"3200b4ea97c3b2081cd4190b58e49572b2319fed00d030ad51809dff06b5d8c8","hash":"7b35762de164b20885e15dbe656b1138db06bb402fa1796f5765a23933d8859a"}]}}' -H 'Content-Type: application/json''
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "aux_pow": [{
      "hash": "7b35762de164b20885e15dbe656b1138db06bb402fa1796f5765a23933d8859a",
      "id": "3200b4ea97c3b2081cd4190b58e49572b2319fed00d030ad51809dff06b5d8c8"
    }],
    "blockhashing_blob": "1010ee97e2a106e9f8ebe8887e5b609949ac8ea6143e560ed13552b110cb009b21f0cfca1eaccf00000000b2685c1283a646bc9020c758daa443be145b7370ce5a6efacb3e614117032e2c22",
    "blocktemplate_blob": " ... ",
    "merkle_root": "7b35762de164b20885e15dbe656b1138db06bb402fa1796f5765a23933d8859a",
    "merkle_tree_depth": 0,
    "status": "OK",
    "untrusted": false
  }
}
```


---

## Other Daemon RPC Calls

Not all daemon RPC calls use the JSON_RPC interface. This section gives examples of these calls.

The data structure for these calls is different than the JSON RPC calls. Whereas the JSON RPC methods were called using the `/json_rpc` extension and specifying a method, these methods are called at their own extensions. For example:

    IP=127.0.0.1
    PORT=18081
    METHOD='gettransactions'
	PARAMS='{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}'
	curl \
		http://$IP:$PORT/$METHOD \
		-d $PARAMS \
		-H 'Content-Type: application/json'

Note: It is recommended to use JSON RPC where such alternatives exist, rather than the following methods. For example, the recommended way to get a node's height is via the JSON RPC methods [get_info](#getinfo) or [get_last_block_header](#get_last_block_header), rather than [getheight](#getheight) below.

For calls that end with **.bin**, the data is exchanged in the form of binary, serialized objects, as defined in the [Core RPC Server](https://github.com/monero-project/monero/blob/master/src/rpc/core_rpc_server_commands_defs.h).


### **/get_height**

Get the node's current height.

Alias: */getheight*.

Inputs: *None*.

Outputs:

* *hash* - string; The block's hash.
* *height* - unsigned int; Current length of longest chain known to daemon.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

```
$ curl http://127.0.0.1:18081/get_height -H 'Content-Type: application/json'

{
  "hash": "7e23a28cfa6df925d5b63940baf60b83c0cbb65da95f49b19e7cf0ce7dd709ce",
  "height": 2287217,
  "status": "OK",
  "untrusted": false
}
```



### **/get_blocks.bin**

Get all blocks info. Binary request.

Alias: */getblocks.bin*.

Inputs:

* *block_ids* - binary array of hashes; first 10 blocks id goes sequential, next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64 and so on, and the last one is always genesis block
* *start_height* - unsigned int
* *prune* - boolean

Outputs:

* *blocks* - array of block complete entries
* *current_height* - unsigned int
* *output_indices* - structure as follows:
  * *indices* - array of tx output indices, structure as follows:
    * *indices* - array of unsigned int
* *start_height* - unsigned int
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

<!-- Cannot get this working
Example:

```
$ curl http://127.0.0.1:18081/get_blocks.bin -d '{"block_ids":["d109a406528a7b44fef8bc03e75eaabb0f919f852884b43b550b8b3be80a49e7"],"start_height":1562062}' -H 'Content-Type: application/json'

```
--->

### **/get_blocks_by_height.bin**

Get blocks by height. Binary request.

Alias: */getblocks_by_height.bin*.

Inputs:

* *heights* - array of unsigned int; list of block heights

Outputs:

* *blocks* - array of block complete entries
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

<!-- Cannot get this working
Example:

```
$ echo -e '\x7B\x22\x68\x65\x69\x67\x68\x74\x73\x22\x3A\x5B\x31\x35\x36\x34\x32\x34\x36\x5D\x7D\x' | curl --data-binary @- http://127.0.0.1:18081/get_blocks_by_height.bin
$ echo -e '1564246' | curl --data-binary @- http://127.0.0.1:18081/get_blocks_by_height.bin
curl http://127.0.0.1:18081/get_blocks_by_height.bin --data-binary '{"heights":[1564246]}'

```
--->


### **/get_hashes.bin**

Get hashes. Binary request.

Alias: */gethashes.bin*.

Inputs:

* *block_ids* - binary array of hashes; first 10 blocks id goes sequential, next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64 and so on, and the last one is always genesis block
* *start_height* - unsigned int

Outputs:

* *current_height* - unsigned int
* *m_block_ids* - binary array of hashes; see *block_ids* above.
* *start_height* - unsigned int
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

<!-- Cannot get this working
Example:

```
$ curl http://127.0.0.1:18081/get_hashes.bin -d '{"block_ids":["d109a406528a7b44fef8bc03e75eaabb0f919f852884b43b550b8b3be80a49e7"],"start_height":1562062}' -H 'Content-Type: application/json'

```
--->


### **/get_o_indexes.bin**

Get global outputs of transactions. Binary request.

Alias: *None*.

Inputs:

* *txid* - binary txid

Outputs:

* *o_indexes* - array of unsigned int; List of output indexes
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

<!-- Cannot get this working
Example:

```
$ curl http://127.0.0.1:18081/get_o_indexes.bin --data-binary '{"txid":"d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"}'

```
--->


### **/get_outs.bin**

Get outputs. Binary request.

Alias: *None*.

Inputs:

* *outputs* - array of structure *get_outputs_out* as follows:
  * *amount* - unsigned int;
  * *index* - unsigned int;

Outputs:

* *outs* - array of structure *outkey* as follows:
  * *amount* - unsigned int;
  * *height* - unsigned int; block height of the output
  * *key* - the public key of the output
  * *mask*
  * *txid* - transaction id
  * *unlocked* - boolean; States if output is locked (`false`) or not (`true`)
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

<!-- Cannot get this working
Example:

```
$ curl http://127.0.0.1:18081/get_o_indexes.bin --data-binary '{"txid":"d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"}'

```
--->


### **/get_transactions**

Look up one or more transactions by hash.

Alias: */gettransactions*.

Inputs:

* *txs_hashes* - string list; List of transaction hashes to look up.
* *decode_as_json* - boolean; Optional (`false` by default). If set `true`, the returned transaction information will be decoded rather than binary.
* *prune* - boolean; Optional (`false` by default).
* *split* - boolean; Optional (`false` by default).

Outputs:

* *missed_tx* - array of strings. (Optional - returned if not empty) Transaction hashes that could not be found.
* *status* - General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *txs* - array of structure *entry* as follows:
  * *as_hex* - string; Full transaction information as a hex string.
  * *as_json* - json string; List of transaction info:
    * *version* - Transaction version
    * *unlock_time* - If not 0, this tells when a transaction output is spendable.
    * *vin* - List of inputs into transaction:
      * *key* - The public key of the previous output spent in this transaction.
        * *amount* - The amount of the input, in @atomic-units.
        * *key_offsets* - A list of integer offets to the input.
        * *k_image* - The key image for the given input
    * *vout* - List of outputs from transaction:
      * *amount* - Amount of transaction output (if coinbase output, otherwise 0), in @atomic-units.
      * *target* - Output destination information:
        * *tagged_key*
          * *key* - The stealth public key of the receiver. Whoever owns the private key associated with this key controls this transaction output.
          * *view_tag* - The 1st byte of a shared secret (used for reducing synchronization time).
    * *extra* - Usually called the "payment ID" but can be used to include any random 32 bytes.
    * *rct_signatures* - List of signatures used in ring signature to hide the true origin of the transaction.
      * *ecdhInfo* - array of Diffie Helman Elipctic curves structures as follows:
        * *mask* - String;
        * *amount* - String;
      * *outPk* - List
      * *txnFee* -
      * *type* -
    * *rctsig_prunable* -
      * *CLSAGs* - List
        * *D* -
        * *c1* -
        * *s* - List
      * *bpp* - List
        * *A* -
        * *A1* -
        * *B* -
        * *L* - List
        * *R* - List
        * *d1* -
        * *r1* -
        * *s1* -
      * *npb* -
      * *pseudoOuts* -
  * *block_height* - unsigned int; block height including the transaction
  * *block_timestamp* - unsigned int; Unix time at chich the block has been added to the blockchain
  * *double_spend_seen* - boolean; States if the transaction is a double-spend (`true`) or not (`false`)
  * *in_pool* - boolean; States if the transaction is in pool (`true`) or included in a block (`false`)
  * *output_indices* - array of unsigned int; transaction indexes
  * *prunable_as_hex* - string; Prunable block encoded as a hex string.
  * *prunable_hash* - string; Keccak-256 hash of the prunable portion of the block.
  * *pruned_as_hex* - string; Pruned block encoded as hex string.
  * *tx_hash* - string; transaction hash
* *txs_as_hex* - string; Full transaction information as a hex string (old compatibility parameter)
* *txs_as_json* - json string; (Optional - returned if set in inputs. Old compatibility parameter) List of transaction as in *as_json* above:

Example 1: Return transaction information in binary format.

```
$ curl http://127.0.0.1:18081/get_transactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"]}' -H 'Content-Type: application/json'

{
  "credits": 0,
  "status": "OK",
  "top_hash": "",
  "txs": [{
    "as_hex": "...",
    "as_json": "",
    "block_height": 993442,
    "block_timestamp": 1457749396,
    "double_spend_seen": false,
    "in_pool": false,
    "output_indices": [198769,418598,176616,50345,509],
    "prunable_as_hex": "",
    "prunable_hash": "0000000000000000000000000000000000000000000000000000000000000000",
    "pruned_as_hex": "",
    "tx_hash": "d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090408"
  }],

  "txs_as_hex": ["..."],
  "untrusted": false
}
```

Example 2: Decode returned transaction information in JSON format. Note: the "vin", "vout", "rct_signatures", "rctsig_prunable" list have been truncated in the displayed return for space considerations.

```
$ curl http://127.0.0.1:18081/get_transactions -d '{"txs_hashes":["a9c71fe27ccf978a56ef96e50b680a3d569754cd4d070e51d10fa9f6f658b8e3"],"decode_as_json":true}' -H 'Content-Type: application/json'

{
  "credits": 0,
  "status": "OK",
  "top_hash": "",
  "txs": [{
    "as_hex": "...",
    "as_json": "{\n  \"version\": 2, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 0, \n        \"key_offsets\": [ 10077101, 34287013, 18015596, 907866, 44197, 192564, 52932, 325, 253684, 12715, 11997, 53334, 1265, 38895, 2549, 4459\n        ], \n        \"k_image\": \"0931bae7689a009d7ab3eb9e3f2a1bb22f3ca1951ff68a271506c12f619c23f7\"\n      }\n    }\n  ], \n  \"vout\": [ {\n      \"amount\": 0, \n      \"target\": {\n        \"tagged_key\": {\n          \"key\": \"b49eda305377eb6bd14107e38b0e444219c57a34b47ed75b82bf616b4bcc0de2\", \n          \"view_tag\": \"44\"\n        }\n      }\n    }, ... \n      }\n    }\n  ], \n  \"extra\": [ 1, 128, 11, 79, 9, 245, 251, 172, 229, 55, 56, 18, 217, 12, 137, 129, 115, 245, 29, 99, 20, 152, 197, 212, 113, 41, 183, 252, 160, 202, 147, 176, 12, 2, 9, 1, 252, 7, 158, 153, 11, 223, 205, 97\n  ], \n ... }\n}",
    "block_height": 2751288,
    "block_timestamp": 1667916404,
    "confirmations": 44,
    "double_spend_seen": false,
    "in_pool": false,
    "output_indices": [63958274,63958275],
    "prunable_as_hex": "",
    "prunable_hash": "cdc54f848f991f48cbb64d76617570ebbe9787bd9eff71b9e36af3d409686650",
    "pruned_as_hex": "",
    "tx_hash": "a9c71fe27ccf978a56ef96e50b680a3d569754cd4d070e51d10fa9f6f658b8e3"
  }],
  "txs_as_hex": ["..."],
  "txs_as_json": ["{\n  \"version\": 2, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 0, \n        \"key_offsets\": [ 10077101, 34287013, 18015596, 907866, 44197, 192564, 52932, 325, 253684, 12715, 11997, 53334, 1265, 38895, 2549, 4459\n        ], \n        \"k_image\": \"0931bae7689a009d7ab3eb9e3f2a1bb22f3ca1951ff68a271506c12f619c23f7\"\n      }\n    }\n  ], \n  \"vout\": [ {\n      \"amount\": 0, \n      \"target\": {\n        \"tagged_key\": {\n          \"key\": \"b49eda305377eb6bd14107e38b0e444219c57a34b47ed75b82bf616b4bcc0de2\", \n          \"view_tag\": \"44\"\n        }\n      }\n    }, ... \n      }\n    }\n  ], \n  \"extra\": [ 1, 128, 11, 79, 9, 245, 251, 172, 229, 55, 56, 18, 217, 12, 137, 129, 115, 245, 29, 99, 20, 152, 197, 212, 113, 41, 183, 252, 160, 202, 147, 176, 12, 2, 9, 1, 252, 7, 158, 153, 11, 223, 205, 97\n  ], \n ... }\n}"],
  "untrusted": false
}
```

Example 3: Returned a missed (unexisting) transaction.

```
curl http://127.0.0.1:18081/get_transactions -d '{"txs_hashes":["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090409"]}' -H 'Content-Type: application/json'

{
  "credits": 0,
  "missed_tx": ["d6e48158472848e6687173a91ae6eebfa3e1d778e65252ee99d7515d63090409"],
  "status": "OK",
  "top_hash": "",
  "untrusted": false
}
```


### **/get_alt_blocks_hashes**

Get the known blocks hashes which are not on the main chain.

Alias: *None*.

Inputs: *None*

Outputs:

* *blks_hashes* - array of strings; list of alternative blocks hashes to main chain
* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/get_alt_blocks_hashes -H 'Content-Type: application/json'

{
  "blks_hashes": ["dd4998cfe92a959a5a0e4ed72432cf23d7dfc4179cbea871ee2a705d71fb5e25","f36c3856ffde6a7d06fc832c80ede4ad5b6c8f702c9736dae1e2140d86504db9","8d0c1f806817259d213c8829ea3356334e0d8fdd3b118e1243756e12dce767bb"],
  "credits": 0,
  "status": "OK",
  "top_hash": "",
  "untrusted": false
}
```


### **/is_key_image_spent**

Check if outputs have been spent using the key image associated with the output.

Alias: *None*.

Inputs:

* *key_images* - string list; List of key image hex strings to check.

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *spent_status* - unsigned int list; List of statuses for each image checked. Statuses are follows: 0 = unspent, 1 = spent in blockchain, 2 = spent in transaction pool
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/is_key_image_spent -d '{"key_images":["8d1bd8181bf7d857bdb281e0153d84cd55a3fcaa57c3e570f4a49f935850b5e3","7319134bfc50668251f5b899c66b005805ee255c136f0e1cecbb0f3a912e09d4"]}' -H 'Content-Type: application/json'

{
  "credits": 0,
  "spent_status": [1,1],
  "status": "OK",
  "top_hash": "",
  "untrusted": false
}
```


### **/send_raw_transaction**

Broadcast a raw transaction to the network.

Alias: */sendrawtransaction*.

Inputs:

* *tx_as_hex* - string; Full transaction information as hexidecimal string.
* *do_not_relay* - boolean; Stop relaying transaction to other nodes (default is `false`).

Outputs:

* *double_spend* - boolean;  Transaction is a double spend (`true`) or not (`false`).
* *fee_too_low* - boolean; Fee is too low (`true`) or OK (`false`).
* *invalid_input* - boolean; Input is invalid (`true`) or valid (`false`).
* *invalid_output* - boolean; Output is invalid (`true`) or valid (`false`).
* *low_mixin* - boolean; Mixin count is too low (`true`) or OK (`false`).
* *not_rct* - boolean; Transaction is a standard ring transaction (`true`) or a ring confidential transaction (`false`).
* *not_relayed* - boolean; Transaction was not relayed (`true`) or relayed (`false`).
* *overspend* - boolean; Transaction uses more money than available (`true`) or not (`false`).
* *reason* - string; Additional information. Currently empty or "Not relayed" if transaction was accepted but not relayed.
* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *too_big* - boolean; Transaction size is too big (`true`) or OK (`false`).
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)


Example (No return information included here.):


```
$ curl http://127.0.0.1:18081/send_raw_transaction -d '{"tx_as_hex":"de6a3...", "do_not_relay":false}' -H 'Content-Type: application/json'
```


### **/start_mining**

Start mining on the daemon.

Alias: *None*.

Inputs:

* *do_background_mining* - boolean; States if the mining should run in background (`true`) or foreground (`false`).
* *ignore_battery* - boolean; States if batery state (on laptop) should be ignored (`true`) or not (`false`).
* *miner_address* - string; Account address to mine to.
* *threads_count* - unsigned int; Number of mining thread to run.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/start_mining -d '{"do_background_mining":false,"ignore_battery":true,"miner_address":"47xu3gQpF569au9C2ajo5SSMrWji6xnoE5vhr94EzFRaKAGw6hEGFXYAwVADKuRpzsjiU1PtmaVgcjUJF89ghGPhUXkndHc","threads_count":1}' -H 'Content-Type: application/json'

{
  "status": "OK",
  "untrusted": false
}
```


### **/stop_mining**

Stop mining on the daemon.

Alias: *None*.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/stop_mining -H 'Content-Type: application/json'

{
  "status": "OK",
  "untrusted": false
}
```


### **/mining_status**

Get the mining status of the daemon.

Alias: *None*.

Inputs: *None*.

Outputs:

* *active* - boolean; States if mining is enabled (`true`) or disabled (`false`).
* *address* - string; Account address daemon is mining to. Empty if not mining.
* *bg_idle_threshold* - int; Minimum average idle percentage over lookback interval.
* *bg_ignore_battery* - boolean; If false, the device will stop mining when battery is low.
* *bg_min_idle_seconds* - int; Minimum lookback interval in seconds for determining whether the device is idle or not.
* *bg_target* - int; Maximum percentage cpu use by miner.
* *block_reward* - int; Base block reward for the next block to be mined.
* *block_target* - int; The target number of seconds between blocks.
* *difficulty* - unsigned int; Network difficulty (analogous to the strength of the network)
* *difficulty_top64* - unsigned int; Most-significant 64 bits of the 128-bit network difficulty.
* *is_background_mining_enabled* - boolean; States if the mining is running in background (`true`) or foreground (`false`).
* *pow_algorithm* - string; The name of the proof-of-work algorithm currently being used by the miner.
* *speed* - unsigned int; Mining power in hashes per seconds.
* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *threads_count* - unsigned int; Number of running mining threads.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *wide_difficulty* - string; Network difficulty (analogous to the strength of the network) as a hexadecimal string representing a 128-bit number.

Example while mining:

```
$ curl http://127.0.0.1:18081/mining_status -H 'Content-Type: application/json'

{
  "active": true,
  "address": "47xu3gQpF569au9C2ajo5SSMrWji6xnoE5vhr94EzFRaKAGw6hEGFXYAwVADKuRpzsjiU1PtmaVgcjUJF89ghGPhUXkndHc",
  "bg_idle_threshold": 0,
  "bg_ignore_battery": false,
  "bg_min_idle_seconds": 0,
  "bg_target": 0,
  "block_reward": 1181637918707,
  "block_target": 120,
  "difficulty": 239928394679,
  "difficulty_top64": 0,
  "is_background_mining_enabled": false,
  "pow_algorithm": "RandomX",
  "speed": 23,
  "status": "OK",
  "threads_count": 1,
  "untrusted": false,
  "wide_difficulty": "0x37dcd8c3b7"
}
```

Example while not mining:

```
$ curl http://127.0.0.1:18081/mining_status -H 'Content-Type: application/json'

{
  "active": false,
  "address": "",
  "bg_idle_threshold": 0,
  "bg_ignore_battery": false,
  "bg_min_idle_seconds": 0,
  "bg_target": 0,
  "block_reward": 0,
  "block_target": 120,
  "difficulty": 239928394679,
  "difficulty_top64": 0,
  "is_background_mining_enabled": false,
  "pow_algorithm": "RandomX",
  "speed": 0,
  "status": "OK",
  "threads_count": 0,
  "untrusted": false,
  "wide_difficulty": "0x37dcd8c3b7"
}
```


### **/save_bc**

Save the blockchain. The blockchain does not need saving and is always saved when modified, however it does a sync to flush the filesystem cache onto the disk for safety purposes against Operating System or Hardware crashes.

Alias: *None*.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/save_bc -H 'Content-Type: application/json'

{
  "status": "OK",
  "untrusted": false
}
```


### **/get_peer_list**

Get the known peers list.

Alias: *None*.

Inputs: *None*.

Outputs:

* *gray_list* - array of offline *peer* structure as follows:
  * *host* - unsigned int; IP address in integer format
  * *id* - string; Peer id
  * *ip* - unsigned int; IP address in integer format
  * *last_seen* - unsigned int; unix time at which the peer has been seen for the last time
  * *port* - unsigned int; TCP port the peer is using to connect to monero network.
* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *white_list* - array of online *peer* structure, as above.

Example (truncated lists):

```
$ curl http://127.0.0.1:18081/get_peer_list -H 'Content-Type: application/json'

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

Set the log hash rate display mode.

Alias: *None*.

Inputs:

* *visible* - boolean; States if hash rate logs should be visible (`true`) or hidden (`false`)

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example while mining:

```
$ curl http://127.0.0.1:18081/set_log_hash_rate -d '{"visible":true}' -H 'Content-Type: application/json'

{
  "status": "OK"
  "untrusted": false
}
```

Error while not mining:

```
$ curl http://127.0.0.1:18081/set_log_hash_rate -d '{"visible":true}' -H 'Content-Type: application/json'

{
  "status": "NOT MINING",
  "untrusted": false
}
```


### **/set_log_level**

Set the daemon log level.
By default, log level is set to `0`.

Alias: *None*.

Inputs:

* *level* - integer; daemon log level to set from `0` (less verbose) to `4` (most verbose)

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/set_log_level -d '{"level":1}' -H 'Content-Type: application/json'

{
  "status": "OK"
  "untrusted": false
}
```

### **/set_log_categories**

Set the daemon log categories.
Categories are represented as a comma separated list of `<Category>:<level>` (similarly to syslog standard `<Facility>:<Severity-level>`), where:
* *Category*  is one of the following:
  * *\** - All facilities
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
* *Level* is one of the following:
  * *FATAL* - higher level
  * *ERROR*
  * *WARNING*
  * *INFO*
  * *DEBUG*
  * *TRACE* - lower level
A level automatically includes higher level.
By default, categories are set to `*:WARNING,net:FATAL,net.p2p:FATAL,net.cn:FATAL,global:INFO,verify:FATAL,stacktrace:INFO,logging:INFO,msgwriter:INFO`.
Setting the categories to "" prevent any logs to be outputed.

Alias: *None*.

Inputs:

* *categories* - string; Optional, daemon log categories to enable

Outputs:

* *categories* - string; daemon log enabled categories
* *status* - string; General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example to set all facilities to Security Level `Info`:

```
$ curl http://127.0.0.1:18081/set_log_categories -d '{"categories": "*:INFO"}' -H 'Content-Type: application/json'

{
  "categories": "*:INFO",
  "status": "OK",
  "untrusted": false
}
```

Example without input to set the default categories:

```
$ curl http://127.0.0.1:18081/set_log_categories -H 'Content-Type: application/json'

{
  "categories": "*:WARNING,net:FATAL,net.p2p:FATAL,net.cn:FATAL,global:INFO,verify:FATAL,stacktrace:INFO,logging:INFO,msgwriter:INFO",
  "status": "OK"
  "untrusted": false
}
```


### **/set_bootstrap_daemon**

Give immediate usability to wallets while syncing by proxying RPC requests.

Alias: *None*.

Inputs:

* *address* - string; host:port
* *username* - string;
* *password* - string;
* *proxy* - string; 

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

Once set, the address will appear in `get_info` as `bootstrap_daemon_address`

```
$ curl http://127.0.0.1:18081/set_bootstrap_daemon -d '{"address": "http://getmonero.org:18081"}' -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/get_transaction_pool**

Show information about valid transactions seen by the node but not yet mined into a block, as well as spent key image information for the txpool in the node's memory.

Alias: *None*.

Inputs: *None*.

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *spent_key_images* - List of spent output key images:
  * *id_hash* - string; Key image.
  * *txs_hashes* - string list; tx hashes of the txes (usually one) spending that key image.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *transactions* - List of transactions in the mempool are not in a block on the main chain at the moment:
  * *blob_size* - unsigned int; The size of the full transaction blob.
  * *do_not_relay*; boolean; States if this transaction should not be relayed
  * *double_spend_seen* - boolean; States if this transaction has been seen as double spend.
  * *fee* - unsigned int; The amount of the mining fee included in the transaction, in @atomic-units.
  * *id_hash* - string; The transaction ID hash.
  * *kept_by_block* - boolean; States if the tx was included in a block at least once (`true`) or not (`false`).
  * *last_failed_height* - unsigned int; If the transaction validation has previously failed, this tells at what height that occured.
  * *last_failed_id_hash* - string; Like the previous, this tells the previous transaction ID hash.
  * *last_relayed_time* - unsigned int; Last unix time at which the transaction has been relayed.
  * *max_used_block_height* - unsigned int; Tells the height of the most recent block with an output used in this transaction.
  * *max_used_block_id_hash* - string; Tells the hash of the most recent block with an output used in this transaction.
  * *receive_time* - unsigned int; The Unix time that the transaction was first seen on the network by the node.
  * *relayed* - boolean; States if this transaction has been relayed
  * *tx_blob* - unsigned int; Hexadecimal blob represnting the transaction.
  * *tx_json* - json string; JSON structure of all information in the transaction:
    * *version* - Transaction version
    * *unlock_time* - If not 0, this tells when a transaction output is spendable.
    * *vin* - List of inputs into transaction:
      * *key* - The public key of the previous output spent in this transaction.
        * *amount* - The amount of the input, in @atomic-units.
        * *key_offsets* - A list of integer offets to the input.
        * *k_image* - The key image for the given input
    * *vout* - List of outputs from transaction:
      * *amount* - Amount of transaction output (if coinbase output, otherwise 0), in @atomic-units.
      * *target* - Output destination information:
        * *tagged_key*
          * *key* - The stealth public key of the receiver. Whoever owns the private key associated with this key controls this transaction output.
          * *view_tag* - The 1st byte of a shared secret (used for reducing synchronization time).
    * *extra* - Usually called the "transaction ID" but can be used to include any random 32 bytes.
    * *rct_signatures* - List of signatures used in ring signature to hide the true origin of the transaction.
      * *ecdhInfo* - array of Diffie Helman Elipctic curves structures as follows:
        * *mask* - String;
        * *amount* - String;
      * *outPk* - List
      * *txnFee* -
      * *type* -
    * *rctsig_prunable* -
      * *CLSAGs* - List
        * *D* -
        * *c1* -
        * *s* - List
      * *bpp* - List
        * *A* -
        * *A1* -
        * *B* -
        * *L* - List
        * *R* - List
        * *d1* -
        * *r1* -
        * *s1* -
      * *npb* -
      * *pseudoOuts* -
  * *weight* -

Example (Note: Some lists in the returned information have been truncated for display reasons):

```
$ curl http://127.0.0.1:18081/get_transaction_pool -H 'Content-Type: application/json'

{
  "spent_key_images": [{
    "id_hash": "5b5d68e7eb5ddfc7dd30d9a91f1db6835563b0214b66dc0b791909fb46c9cbb4",
    "txs_hashes": ["0b1839626bd7a609d5b16966396a51eb5fda9c55b9b2fc314a916459a7532e02"]
  },{
    "id_hash": "b583a134ccd6fd48697f02f530e82604f746b97ce26de103fa756d91274ac60e",
    "txs_hashes": ["0b1839626bd7a609d5b16966396a51eb5fda9c55b9b2fc314a916459a7532e02"]
  },
  ...],
  "status": "OK",
  "transactions": [{
    "blob_size": 2217,
    "do_not_relay": false,
    "double_spend_seen": false,
    "fee": 44340000,
    "id_hash": "0b1839626bd7a609d5b16966396a51eb5fda9c55b9b2fc314a916459a7532e02",
    "kept_by_block": false,
    "last_failed_height": 0,
    "last_failed_id_hash": "0000000000000000000000000000000000000000000000000000000000000000",
    "last_relayed_time": 1667929927,
    "max_used_block_height": 2751399,
    "max_used_block_id_hash": "52d2ac5230146c4d8003c8fb1d8e54aea91d2536c72884bd6e126b7def4ed9c6",
    "receive_time": 1667929927,
    "relayed": true,
    "tx_blob": " ... ",
    "tx_json": "{\n  \"version\": 2, \n  \"unlock_time\": 0, \n  \"vin\": [ {\n      \"key\": {\n        \"amount\": 0, \n        \"key_offsets\": [ 54937085, 875767, 6217742, 360564, 431709, 807289, 138472, 6221, 111408, 42881, 145, 12396, 20911, 899, 3546, 112\n        ], \n        \"k_image\": \"b583a134ccd6fd48697f02f530e82604f746b97ce26de103fa756d91274ac60e\"\n      }\n    }, {\n      \"key\": {\n        \"amount\": 0, \n        \"key_offsets\": [ 28132301, 33525919, 17414, 2042026, 73478, 73012, 54330, 8150, 5725, 10740, 4581, 7687, 9290, 592, 994, 725\n        ], \n        \"k_image\": \"5b5d68e7eb5ddfc7dd30d9a91f1db6835563b0214b66dc0b791909fb46c9cbb4\"\n      }\n    }\n  ], \n  \"vout\": [ {\n      \"amount\": 0, \n      \"target\": {\n        \"tagged_key\": {\n          \"key\": \"2849325ea3410c1378ab631c4e008028a99843a767c1d11019631cad8e083b53\", \n          \"view_tag\": \"1f\"\n        }\n      }\n    }, {\n      \"amount\": 0, \n      \"target\": {\n        \"tagged_key\": {\n          \"key\": \"9677c3568218bab3dc1a6eee5b486eeb372c9b2c7d552d8f9c6c84bd4051bab8\", \n          \"view_tag\": \"ee\"\n        }\n      }\n    }\n  ], \n  \"extra\": [ 1, 110, 21, 19, 40, 178, 62, 51, 216, 134, 71, 171, 159, 249, 160, 206, 100, 247, 190, 162, 177, 0, 35, 237, 165, 157, 42, 84, 52, 25, 151, 202, 231, 2, 9, 1, 195, 62, 127, 79, 4, 67, 161, 64\n  ], \n  ... }\n}",
    "weight": 2217
  },
  ...]
}
```


### **/get_transaction_pool_hashes.bin**

Get hashes from transaction pool. Binary request.

Alias: *None*.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.
* *tx_hashes* - binary array of transaction hashes.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/get_transaction_pool_hashes.bin -H 'Content-Type: application/json'

{
  "status": "OK",
  "tx_hashes": " ... ",
  "untrusted": false
}
```


### **/get_transaction_pool_stats**

Get the transaction pool statistics.

Alias: *None*.

Inputs: *None*.

Outputs:

* *credits* - unsigned int; If payment for RPC is enabled, the number of credits available to the requesting client. Otherwise, 0.
* *pool_stats* - Structure as follows:
  * *bytes_max* - unsigned int; Max transaction size in pool
  * *bytes_med* - unsigned int; Median transaction size in pool
  * *bytes_min* - unsigned int; Min transaction size in pool
  * *bytes_total* - unsigned int; total size of all transactions in pool
  * *fee_total* - unsigned int; The sum of the fees for all transactions currently in the transaction pool @atomic-units.
  * *histo* - structure *txpool_histo* as follows:
    * *txs* - unsigned int; number of transactions
    * *bytes* - unsigned int; size in bytes.
  * *histo_98pc* unsigned int; the time 98% of txes are "younger" than
  * *num_10m* unsigned int; number of transactions in pool for more than 10 minutes
  * *num_double_spends* unsigned int; number of double spend transactions
  * *num_failing* unsigned int; number of failing transactions
  * *num_not_relayed* unsigned int; number of non-relayed transactions
  * *oldest* unsigned int; unix time of the oldest transaction in the pool
  * *txs_total* unsigned int; total number of transactions.
* *status* - string; General RPC error code. "OK" means everything looks good.
* *top_hash* - string; If payment for RPC is enabled, the hash of the highest block in the chain. Otherwise, empty.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/get_transaction_pool_stats -H 'Content-Type: application/json'

{
  "credits": 0,
  "pool_stats": {
    "bytes_max": 14325,
    "bytes_med": 1460,
    "bytes_min": 1450,
    "bytes_total": 410674,
    "fee_total": 18198895000,
    "histo": [{ ...
    }],
    "histo_98pc": 297,
    "num_10m": 1,
    "num_double_spends": 1,
    "num_failing": 0,
    "num_not_relayed": 0,
    "oldest": 1612232218,
    "txs_total": 124
  },
  "status": "OK",
  "top_hash": "",
  "untrusted": false

}
```


### **/stop_daemon**

Send a command to the daemon to safely disconnect and shut down.

Alias: *None*.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

```
$ curl http://127.0.0.1:18081/stop_daemon -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/get_info (not JSON)**

This method is a convenient backward support and should not be used anymore. See [get_info](#get_info) JSON RPC for details.

Alias:

* */getinfo*
* *get_info*


### **/get_limit**

Get daemon bandwidth limits.

Alias: *None*.

Inputs: *None*.

Outputs:

* *limit_down* - unsigned int; Download limit in kBytes per second
* *limit_up* - unsigned int; Upload limit in kBytes per second
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/get_limit -H 'Content-Type: application/json'

{
  "limit_down": 8192,
  "limit_up": 128,
  "status": "OK",
  "untrusted": false
}
```


### **/set_limit**

Set daemon bandwidth limits.

Alias: *None*.

Inputs:

* *limit_down* - signed int; Download limit in kBytes per second (-1 reset to default, 0 don't change the current limit)
* *limit_up* - signed int; Upload limit in kBytes per second (-1 reset to default, 0 don't change the current limit)

Outputs:

* *limit_down* - unsigned int; Download limit in kBytes per second
* *limit_up* - unsigned int; Upload limit in kBytes per second
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/set_limit -d '{"limit_down": 1024}' -H 'Content-Type: application/json'

{
  "limit_down": 1024,
  "limit_up": 128,
  "status": "OK"
  "untrusted": false
}
```


### **/out_peers**

Limit number of Outgoing peers.

Alias: *None*.

Inputs:

* *out_peers* - unsigned int; Max number of outgoing peers

Outputs:

* *out_peers* - unsigned int; Max number of outgoing peers
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/out_peers -d '{"out_peers": 3232235535}' -H 'Content-Type: application/json'

{
  "out_peers": 3232235535,
  "status": "OK",
  "untrusted": false
}
```


### **/in_peers**

Limit number of Incoming peers.

Alias: *None*.

Inputs:

* *in_peers* - unsigned int; Max number of incoming peers

Outputs:

* *in_peers* - unsigned int; Max number of incoming peers
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/out_peers -d '{"in_peers": 3232235535}' -H 'Content-Type: application/json'

{
  "in_peers": 3232235535,
  "status": "OK",
  "untrusted": false
}
```


### **/get_net_stats**

Alias: *None*.

Inputs: *None*.

Outputs:

* *start_time* - unsigned int; Unix start time.
* *total_packets_in* - unsigned int;
* *total_bytes_in* - unsigned int;
* *total_packets_out* - unsigned int;
* *total_bytes_out* - unsigned int;
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`).

Example: 

```
$ curl http://127.0.0.1:18081/get_net_stats -H 'Content-Type: application/json'

{
  "start_time": 1665147355,
  "status": "OK",
  "total_bytes_in": 3743474809,
  "total_bytes_out": 5932012405,
  "total_packets_in": 2130592,
  "total_packets_out": 1010674,
  "untrusted": false
}
```


### **/start_save_graph**

Obsolete. Conserved here for reference.

Alias: *None*.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

```
$ curl http://127.0.0.1:18081/start_save_graph -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/stop_save_graph**

Obsolete. Conserved here for reference.

Alias: *None*.

Inputs: *None*.

Outputs:

* *status* - string; General RPC error code. "OK" means everything looks good.

Example:

```
$ curl http://127.0.0.1:18081/stop_save_graph -H 'Content-Type: application/json'

{
  "status": "OK"
}
```


### **/get_outs**

Get outputs.

Alias: *None*.

Inputs:

* *outputs* array of *get_outputs_out* structure as follows:
  * *amount* - unsigned int;
  * *index* - unsigned int;
* *get_txid* - boolean; If `true`, a *txid* will included for each output in the response.

Outputs:

* *outs* - array of structure *outkey* as follows:
  * *height* - unsigned int; block height of the output
  * *key* - String; the public key of the output
  * *mask* - String
  * *txid* - String; transaction id
  * *unlocked* - boolean; States if output is locked (`false`) or not (`true`)
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)


### **/update**

Update daemon.

Alias: *None*.

Inputs:

* *command* - String; command to use, either `check` or `download`
* *path* - String; Optional, path where to download the update.

Outputs:

* *auto_uri* - string;
* *hash* - string;
* *path* - String; path to download the update
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)
* *update* - boolean; States if an update is available to download (`true`) or not (`false`)
* *user_uri* - string;
* *version* - string; Version available for download.

Example:

```
$ curl http://127.0.0.1:18081/update -d '{"command":"check"}' -H 'Content-Type: application/json'

{
  "auto_uri": "",
  "hash": "",
  "path": "",
  "status": "OK",
  "untrusted": false,
  "update": false,
  "user_uri": "",
  "version": ""
}
```


### **/pop_blocks**

Alias: *None*.

Inputs:

* *nblocks* - unsigned int;

Outputs:

* *height* - unsigned int; New blockheight after popping blocks
* *status* - string; General RPC error code. "OK" means everything looks good.
* *untrusted* - boolean; States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced and thus handles the RPC locally (`false`)

Example:

```
$ curl http://127.0.0.1:18081/pop_blocks -d '{"nblocks":6}' -H 'Content-Type: application/json''

{
  "height": 76482,
  "status": "OK",
  "untrusted": false
}
```
