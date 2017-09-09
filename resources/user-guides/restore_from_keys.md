---
layout: static_page
title: "Restoring a wallet from private keys"
---



Restoring a wallet from private keys (via the command line) is pretty simple. If you have the necessary information, with this guide you can completely restore your wallet. Note: you do NOT have to have your password to restore from keys.

You need to have 3 pieces of data from your wallet, or your .keys file which holds this info and the password to decrypt it. The 3 wallet components that you need are:

1. **Address**
2. **Secret Spendkey**
3. **Secret Viewkey**


Then run the wallet command:

`./monero-wallet-cli New_Wallet_Name.abc`

Next, you'll be asked for the Address, the spendkey, the viewkey, and finally the new password for the re-generated wallet.

Running this with the correct parameters will re-generate your wallet files for you and allow you to set a new password.

If you run into any trouble, running `./monero-wallet-cli --help` will show you the options available to you at wallet startup. Once you're inside your wallet, running the `help` command will list the help for the commands available to you within the wallet.