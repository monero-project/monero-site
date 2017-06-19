---
layout: static_page
title: "Easiest way to buy Monero"
title-pre-kick: "Easiest way"
title-kick: "to buy Monero"
title-post-kick: ""
kick-class: "purple-kicks"
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

## How to obtain monero

This is a guide to obtain your own Monero as of June 2017. 

####Step 1: Buy Bitcoin

There are many ways to buy Bitcoin. The most reliable companies at this time are Xapo <http://www.xapo.com/> and Coinbase <http://www.coinbase.com/>. The process will involve uploading your personal identification (State ID, Passport, etc.) and will take anywhere from 2 to 10 days (or longer).  Check their reputations on Reddit before comitting to a large purchase.  Xapo uses Wire Transfers and Coinbase uses Bank Transfers (ACH in the USA).  Coinbase also allows instant buys via a debit card but adds a large fee for this option. Once you have purchased some Bitcoin, you are ready to convert it to Monero!

####Step 2: Download and create a Paper Wallet

Download the paper wallet generator at: https://moneroaddress.org and copy it to a USB stick (Direct link: https://github.com/moneromooo-monero/monero-wallet-generator/archive/master.zip). 

Unzip and open the paper wallet generator (monero-wallet-generator.html) into a web browser on an air-gapped computer that hasn't been used before, or has had a clean installation of the OS. 

Your paper wallet will have four important items:

Public Address
The public address is used to receive funds to the wallet.  You give this to anyone who will be sending funds to your wallet.

Mnemonic Seed
The mnemonic seed is a method of storing the entire wallet that is easily recognizable to humans.  This is all you need to restore your wallet at a later date.

Private Spend Key
The private spend key is used to send funds from the wallet.

Private View Key
The private view key is to view transactions entering the wallet. Commonly this is used to setup a view-only only wallet which can see incoming transactions live on the blockchain as they are sent to a cold storage wallet.

At this point you have many options.  You can print the wallet on paper, save it as a PDF or text on a USB stick, burn it to CD/DVD, etc.  Most likely you will want at least two or three copies, stored securely in different locations.  If storing digitally, encrypt everything with a strong password.  If storing on paper, do not show the wallet to anyone else who can memorize your 25 word key, or take a picture of the wallet without your permission.  Sending someone a picture of the wallet is the same as giving away all of your funds.

Whichever method you chose, be sure there's no copy of the wallet left over on the device you used to create the wallet.  You may need to securely delete the wallet if you saved it to a disk, or make sure your printer does not save a copy in memory.

*If you lose access to your paper wallet the Monero will not be available to you or anyone else, ever.  You wont be able to recover them.


#### Step 3: Buy monero and transfer the monero to your new address

Go to www.shapeshift.io. On the righthand side, of the screen, click the icon under "Receive" and select Monero.  
You will be depositing Bitcoin and Receiving Monero.

Press Continue.

Paste the Monero Public address from your paper wallet where it says "Your Monero Address". 

Enter a Bitcoin address that you control where a refund can be sent in case there's a problem with the transaction.  It's very important that you enter a public bitcoin address you control (or can receive funds at).  At Xapo and Coinbase this is called a Receive Address and it may change periodically.

Leave Payment ID blank if you are sending to your own Monero wallet or Monero paper wallet.

Agree to the Terms and hit the slider to make this a "Reusable Address".  

Press "Start Transaction".

In the new screen that pops up, copy the Deposit Address into your clipboard (select and hit ctrl+c or edit-copy)

Go to your Xapo or Circle account, and find a Transfer or Send button. Paste the Bitcoin address into the Destination field and enter the amount of bitcoin you would like to have converted to Monero and sent to your Monero wallet.  It must be within the Deposit Min and Deposit Max range specified at Shapeshift.io.

Once the send has been initiated by Xapo/Coinbase there will be a delay while the transaction enters the Bitcoin blockchain and awaits confirmation.  This may be minutes or hours.  You can check if the payment has been sent by looking up the Shapeshift.io Deposit address at blockchain.info.  Your transaction to Shapeshift.io will show up there.

When your transaction has been confirmed, Shapeshift.io will then actually exchange BTC for XMR at one of the exchanges and when it is complete, send the Monero to the address of your Cold Storage Paper Wallet!

Because the Monero blockchain is private and untraceable, you won't be able to just lookup your Monero address and confirm that the funds have arrived like you might with Bitcoin.  This is good for privacy, but bad for convenience.

To verify the funds have arrived at your wallet, you will need to setup a View Only wallet.  This is where that view-key comes in.  To create a view-only wallet see the entry: @view-only

To verify the funds are still in your wallet and have not been spent, you will need an offline copy of the Monero blockchain and your mnemonic key.




