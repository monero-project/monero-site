{% include disclaimer.html translated="no" translationOutdated="no" %}

### Table of contents

- [When should I restore a wallet?](#when-should-i-restore-a-wallet)
- [What is needed to restore a wallet from keys?](#what-is-needed-to-restore-a-wallet-from-keys)
- [Where can I find my main address and keys?](#where-can-i-find-my-main-address-and-keys)
- [How to restore a wallet from keys on Monero GUI](#how-to-restore-a-wallet-from-keys-on-monero-gui)
- [How to restore a wallet from keys on Monero CLI](#how-to-restore-a-wallet-from-keys-on-monero-cli)
- [My restored wallet is showing a wrong balance](#my-restored-wallet-is-showing-a-wrong-balance)

### When should I restore a wallet?

You should restore your @wallet in the following situations:
- You lost access to your wallet (you forgot its password, your wallet file is corrupted or your device stopped working/is lost).
- You want to create a copy of your wallet on another device.

This guide will teach you how to restore a Monero wallet from its private keys.

If you want to restore a wallet from a @mnemonic-seed, please read [this guide]({{site.baseurl}}/resources/user-guides/restore_account.html).

If you want to restore a wallet from a hardware wallet, please check [this page]({{site.baseurl}}/downloads/#hardware).

### What is needed to restore a wallet from keys?

The following information is needed to restore a Monero wallet from keys:

1. **Main (primary) address**
2. **Private (secret) @view-key**
3. **Private (secret) @spend-key**
4. **Restore height** (optional)

The password of the wallet being restored is not needed.

### Where can I find my main address and keys?

If you have access to the wallet being restored, you can find the information needed to restore it in the following locations:
- **Monero GUI**: go to `Settings` > `Wallet` and open `Show seed & keys`.
- **Monero CLI**: use the commands `address`, `viewkey`, `spendkey`, and `restore_height`.
- **Cake Wallet**: open `Show seed/keys` on the main menu to see your keys. On the main page, swipe to the left to open `Receive` page and then open `Accounts and subaddresses` to see your main (primary) address.
- **Feather**: on the top menu click on `Wallet` > `Keys`.
- **Monerujo**: open `Show Secrets!` on the main menu to see your keys. On the main page, click on `Receive` button to display your main (primary) address.
- **MyMonero**: open your wallet and click on `Address`.
- **Edge**: open `Request` page and press the `Copy` button to copy your main (primary) address. To see your private view key, long press the `XMR` wallet on the main page and open `View XPUB Address`. On the same menu, open `Get Raw Keys` to see your private spend key (shown as `moneroSpendKeyPrivate`). 

### How to restore a wallet from keys on Monero GUI

On the main menu, click on `Restore wallet from keys or mnemonic seed`.

![main-menu-restore-wallet](/img/resources/user-guides/en/restore_from_keys/main-menu-restore-wallet.png)

The `Restore wallet` page will be displayed:

![restore-from-keys](/img/resources/user-guides/en/restore_from_keys/restore-from-keys.png)

On `Wallet name`, enter the name of the wallet you want to create. You don't need to use the same name of the wallet being restored.

On `Wallet location`, choose where you want the wallet file to be saved.

Next, click on `Restore from keys`.

On `Account address (public)`, enter your wallet main (primary) address, which starts with `4...`

On `View key (private)`, enter your private (secret) view key.

On `Spend key (private)`, enter your private (secret) spend key. If you leave this field blank, Monero GUI will generate a view-only wallet. If you want to learn more about view-only wallets, please read [this guide]({{site.baseurl}}/resources/user-guides/view_only.html).

The next field allows you to enter a `Restore height`. Even though this field is optional, it's not recommended to leave it blank. The wallet restore height is a setting that tells Monero GUI at which block height it should start scanning the blockchain looking for transactions. Ideally it should be the number of the block which included the first incoming transaction to your wallet. If you don't know the wallet restore height, you can also enter the date or an estimated date of the first incoming transaction (YYYY-MM-DD format).

If you set a restore height higher than the block height of your first incoming transaction, Monero GUI will not detect all transactions of your wallet and your balance will be wrong.

If you set a too low restore height, Monero GUI will scan unnecessary blocks and the wallet synchronization will take longer than necessary.

![restore-height](/img/resources/user-guides/en/restore_from_keys/restore-height.png)

After entering your restore height, click on `Next` button.

On the next page, give your wallet a strong password and confirm it. Since your wallet will hold your private keys and seed, it is really important to enter a strong password. The more you mix up letters (upper-case and lower-case), numbers, and symbols, the more secure your password is, and the harder it is for a brute force attack to discover it. It is NOT recommended to use a blank password or weak passwords like "password123" or "abcd1234".

![wallet password](/img/resources/user-guides/en/restore_from_keys/wallet-password.png)

If your wallet is in `Advanced mode`, the `@Daemon settings` page will be displayed. Here you can choose whether you want to start a local node or connect to a remote node. Choose your desired option and click on `Next` button.

![daemon settings](/img/resources/user-guides/en/restore_from_keys/daemon-settings.png)

The next page will display a summary of the wallet you are going to restore. Click on `Create wallet` button to restore your wallet:

![all set up](/img/resources/user-guides/en/restore_from_keys/all-set-up.png)

### How to restore a wallet from keys on Monero CLI

Open the terminal on your Monero CLI directory and run the following command, changing `NewWalletName` for the name of the wallet you want to create:

On Linux: `./monero-wallet-cli --generate-from-keys NewWalletName`

On Windows: `monero-wallet-cli --generate-from-keys NewWalletName`

Next, you will be asked for the `Standard address`, also known as wallet main (primary) address, which starts with `4...`.

The wallet will then ask for the `Secret spend key`, which is your private (secret) spend key. Since this is sensitive information, Monero CLI will not display the key while you type it or after you paste it from the clipboard.

Next, you will be asked for the `Secret view key`, which is your private (secret) view key. Since this is sensitive information, Monero CLI will not display the key while you type it or after you paste it from the clipboard.

Monero CLI will then ask you to give your wallet a password. Since your wallet will hold your private keys and seed, it is really important to enter a strong password. The more you mix up letters (upper-case and lower-case), numbers, and symbols, the more potent your password is, and the harder it is for a brute force attack to discover it. It is NOT recommended to use a blank password or weak passwords like "password123" or "abcd1234".

Next, Monero CLI will ask for a `Restore height`. Even though this setting is optional, it's not recommended to leave it blank. The wallet restore height is a setting that tells Monero CLI at which block height it should start scanning the blockchain looking for transactions. Ideally it should be the number of the block which included the first incoming transaction to your wallet. If you don't know the wallet restore height, you can also enter the date or an estimated date of the first incoming transaction (YYYY-MM-DD format).

If you set a restore height higher than the block height of your first incoming transaction, Monero CLI will not detect all transactions of your wallet and your balance will be wrong.

If you set a too low restore height, Monero CLI will scan unnecessary blocks and the wallet synchronization will take longer than necessary.

![restore-height](/img/resources/user-guides/en/restore_from_keys/restore-height.png)

Next, you will be asked if you want to enable background mining. Type `Y` or `N` and then press `Enter`.

Monero CLI will then start wallet synchronization. You will need to wait for it to finish before start using your wallet.

If you run into any trouble, running `./monero-wallet-cli --help` will show you the options available to you at wallet startup. Once you're inside your wallet, running the `help` command will list the help for the commands available to you within the wallet.

### My restored wallet is showing a wrong balance

This problem usually occurs when you set a restore height that is higher than the block height of the first incoming transaction to your wallet. To solve this issue, you will have to change the wallet restore height. Please read [this guide]({{site.baseurl}}/resources/user-guides/change-restore-height.html) for detailed instructions on how to do this.
