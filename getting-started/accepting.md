---
layout: static_page
title: "Accepting Monero Payments"
title-pre-kick: "Accepting Monero"
title-kick: "Payments"
title-post-kick: ""
kick-class: "kicks"
icon: "icon_accepting"
attribution: "<!-- Icon is based on work by Icons8 (http://www.icons8.com) and is licensed under Creative Commons BY 3.0 -->"
---

### The Basics

Monero works a little differently to what you may have become accustomed to from other @cryptocurrencies. In the case of a digital currency like Bitcoin and its many derivatives merchant payment systems will usually create a new recipient @address for each payment or user.

However, because Monero has @stealth-addresses there is no need to have separate recipient addresses for each payment or user, and a single @account address can be published. Instead, when receiving payments a merchant will provide the person paying with a "payment ID".

A @payment-ID is a hexadecimal string that is 64 characters long, and is normally randomly created by the merchant. An example of a payment ID is: <span class="long-term">666c75666679706f6e7920697320746865206265737420706f6e792065766572</span>

### Checking for a Payment in simplewallet

If you want to check for a payment using simplewallet you can use the "payments" command followed by the payment ID or payment IDs you want to check. For example:

{:.cli-code}
<span style="color: yellow;">[wallet 49VNLa]:</span> payments 666c75666679706f6e7920697320746865206265737420706f6e792065766572
            payment                           transaction               height     amount     unlock time
<span style="color: lime;"><666c75666679706f6e79206973207>   <7ba4cd810c9b4096869849458181e98e>    441942     30.00000   0</span>
<span style="color: yellow;">[wallet 49VNLa]:</span> <span style="color: gray;">█</span><br><br><br><br><br><br>

If you need to check for payments programmatically, then details follow the next section.

### Receiving a Payment Step-by-Step

<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Generate a random 64 character hexadecimal string for the payment  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Communicate the payment ID and Monero address to the individual who is making payment  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Check for the payment using the "payments" command in simplewallet

### Checking for a Payment Programatically

In order to check for a payment programatically you can use the get_payments or get_bulk_payments JSON RPC API calls.

*get_payments*: this requires a payment_id parameter with a single payment ID.

*get_bulk_payments*: this is the preferred method, and requires two parameters, payment_ids - a JSON array of payment IDs - and an optional min_block_height - the block height to scan from.

An example of returned data is as follows:

{:.cli-code}
<span style="color: cyan;">[ monero->~ ]$</span> curl -X POST http://127.0.0.1:18500/json_rpc -d '{"jsonrpc":"2.0","method":"get_bulk_payments","id":"test", "params":{"payment_ids": ["666c75666679706f6e7920697320746865206265737420706f6e792065766572"]}}' -H "Content-Type: application/json"
{
  "id": "test",
  "jsonrpc": "2.0",
  "result": {
    "payments": [{
      "amount": 30000000000000,
      "block_height": 441942,
      "payment_id": "666c75666679706f6e7920697320746865206265737420706f6e792065766572",
      "tx_hash": "7ba4cd810c9b4096869849458181e98e18b6474ab66415de0f4ccf7ab1162fdf",
      "unlock_time": 0
    }]
  }
}

It is important to note that the amounts returned are in base Monero units and not in the display units normally used in end-user applications. Also, since a transaction will typically have multiple outputs that add up to the total required for the payment, the amounts should be grouped by the tx_hash or the payment_id and added together. Additionally, as multiple outputs can have the same amount, it is imperative not to try and filter out the returned data from a single get_bulk_payments call.

Before scanning for payments it is useful to check against the daemon RPC API (the get_info RPC call) to see if additional blocks have been received. Typically you would want to then scan only from that received block on by specifying it as the min_block_height to get_bulk_payments.

### Programatically Scanning for Payments

<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Get the current block height from the daemon, only proceed if it has increased since our last scan  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Call the get_bulk_payments RPC API call with our last scanned height and the list of all payment IDs in our system  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Store the current block height as our last scanned height  
<i class="fa fa-level-up fa-rotate-90 fa-lg instruction-list"></i> Remove duplicates based on transaction hashes we have already received and processed  
