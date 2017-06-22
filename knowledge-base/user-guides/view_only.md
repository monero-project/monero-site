---
layout: static_page
title: "View Only Wallets"
title-pre-kick: "Creating aand using a view only wallet "
title-kick: ""
title-post-kick: ""
kick-class: ""
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

A view-only wallet can only see which incoming transactions belong to you. It can not spend any of your Monero, in fact it can't even see outgoing transactions from this wallet. This makes view-only wallets particularly interesting for

* Developers writing libraries to validate payments
* End users validating incoming transactions to cold wallets.

### Creating and Using A View-Only Wallet

You can create a view-only wallet from any existing wallet. We'll call the original wallet OfflineWallet and the view-only wallet ViewWallet.

* Open an existing wallet or create a new one using `monero-wallet-cli`. That will be the OfflineWallet.
* In the wallet, type `address` and `viewkey` to display the wallet's address and secret viewkey. Type `exit` to close the wallet.
* Next, create your view-only wallet by typing `monero-wallet-cli --generate-from-view-key wallet-name`. The last argument will be your new wallet's file name. You will be prompted for `Standard address` and `View key` by the wallet. Paste in your original wallet's address and secret view key. Next, enter and confirm a password for your new wallet and you're done. 
You will now have an additional wallet, a view-only wallet with its separate password. 
We'll call the new wallet is ViewWallet.
* Finally, move the three Viewwallet files (viewWallet, viewWallet.address and viewWallet.KEYS) to an online computer.

### Creating, signing and broadcasting transctions using ViewWallet and OfflineWallet

To create a transaction from the viewWallet, start with the ViewWallet: 
* Run monero-wallet-cli on the online computer and load the ViewWallet.
* Next, use the monero-wallet-cli command `transfer` with parameters ADDRESS and AMOUNT. The viewWallet will create a new file in its directory called `unsigned-monero-transaction`. 
* Copy that file to an SD card/USB key and move it to the directory of the OfflineWallet. For extra protection, use an SD card for that purpose only.
* Next, using monero-wallet-cli load the OfflineWallet, and use the command `sign_transfer`. It will replace the file 	`unsigned-monero-transaction` with a file `signed-monero-transaction`. 
* Move that file from the wallet directory  to the online computer, in the directory where ViewWallet resides using the SD card/USB key.
* Finally, with the ViewWallet loaded, use the command  `submit_transfer` and your signed transfer will be broadcast to the monero blockchain.
