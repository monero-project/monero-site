{% include disclaimer.html translated="no" translationOutdated="no" %}

A view-only wallet is a special type of wallet that can only see incoming transactions. Since it doesn't hold your mnemonic seed and private spend key, it can't sign transactions and it can't see outgoing transactions. This makes them particularly interesting for

* Validate incoming transactions to cold wallets or hardware wallets
* Monitor incoming donations to a fundraising campaign
* Developers writing libraries to validate payments

View-only wallets cannot sign transactions, therefore they can't spend a balance alone. However, they can be used as part of an offline transaction signing, by creating unsigned transactions to be signed offline in a cold device, and later by sending the signed transaction to the network.

If your wallet has outgoing transactions, the balance displayed will not be correct. To get a correct balance in a view-only wallet, you have to import the accompanying key images of each output of the wallet.

You can also create a view-only wallet of a hardware wallet, however this kind of view-only wallet doesn't support offline transaction signing and importing of key images.

In order to create a view-only wallet, you must either have access to a wallet or know the main address and the private view key from a wallet.

### CLI: Creating a View-Only Wallet from a Private View Key

Open an existing wallet and type `address` and `viewkey` commands to display the wallet's address and its private (secret) view key. Type `exit` to close the wallet.

Next, create your view-only wallet by typing `monero-wallet-cli --generate-from-view-key wallet-name`. The last argument will be your new wallet's file name. You will be prompted for `Standard address` and `View key` by the wallet. Paste in your original wallet's address and private (secret) view key. Next, enter and confirm a password for your new wallet.

### GUI: Creating a View-Only Wallet from an Existing Wallet File

If you have access to the existing wallet, open your wallet and go to `Settings` > `Wallet` > `Create a view-only wallet`:

![settings](/img/resources/user-guides/en/view-only/settings.png)

The view-only wallet file will be created within the same directory and using your current password.

Optionally, double-click the `Success` window to copy the message, then click `OK` to close it:

![Success](/img/resources/user-guides/en/view-only/Success.png)

### GUI: Creating a View-only Wallet from a Private View Key

If you don't have access to the existing wallet, you can create a view-only wallet by knowing the wallet's main address and its private view key.

In order to do that, go to the main Menu and click on `Restore wallet from keys or mnemonic seed`:

![restore-view-only](/img/resources/user-guides/en/view-only/restore-view-only.png)

Enter a name for you view-only wallet file. Optionally, you can change the file location.

Select `Restore from keys`.

In `Account address (public)` field, enter your wallet's main address, which starts with 4.

In `View key (private)` field, enter the private view key of your wallet.

Leave the `Spend key (private)` field blank.

Enter a `Wallet creation date` or a `Restore height` if you have one (optional).

Click on `Next` to create your view-only wallet file.
