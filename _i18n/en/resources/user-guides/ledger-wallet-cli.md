{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
## How to generate a Ledger Monero wallet with the CLI (monero-wallet-cli)

### Table of Content

* [1. Windows](#1-windows)
* [2. Mac OS X](#2-mac-os-x)
* [3. Linux](#3-linux)
* [4. Final notes](#4-a-few-final-notes)

### 1. Windows

We first have to ensure that we're sufficiently prepared. This entails the following:

1. This guide assumes you have already initialized your Ledger wallet and thus generated a 24 word mnemonic seed.

2. You need to run / use CLI v0.12.2.0, which can be found <a href="{{site.baseurl}}/downloads/">here</a>.

3. You need to install the Ledger Monero app and configure your system. Instructions can be found [here](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (sections 3.1.1 and 3.2.3 in particular). In addition, make sure to set the network to `Mainnet`

4. Your Ledger needs to be plugged in and the Ledger Monero app should be running.

5. Either your daemon (`monerod.exe`) should be running and preferably be fully synced or you should connect to a remote node.

Now that we're sufficiently prepared, let's start!

1. Go to the directory / folder monerod.exe and monero-wallet-cli.exe are located.

2. Open a new command prompt / powershell. This is done by first making sure your cursor isn't located on any of the files and subsequently doing SHIFT + right click. It will give you an option to "Open command window here". If you're using Windows 10 in latest version, it'll give you an option to "open the PowerShell window here".

3. Now type:

`monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200` (Win 10)

Note that is simply a placeholder for the actual wallet name. If you, for instance, want to name your wallet `MoneroWallet`, the command would be as follows:

`monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 7 + 8)

`.\monero-wallet-cli.exe --generate-from-device MoneroWallet --subaddress-lookahead 3:200` (Win 10)

4. The CLI will, after executing aforementioned command, prompt your for a password. Make sure to set a strong password and confirm it thereafter.

5. The Ledger will ask whether you want to export the private view key or not. First and foremost, your funds cannot be compromised with merely the private view key. Exporting the private view key enables the client (on the computer - Monero v0.12.2.0) to scan blocks looking for transactions that belong to your wallet / address. If this option is not utilized, the device (Ledger) will scan blocks, which will be significantly slower. There is, however, one caveat. That is, if your system gets compromised, the adversary will potentially be able to compromise your private view key as well, which is detrimental to privacy. This is virtually impossible when the private view key is not exported.

6. You may have to hit confirm twice before it proceeds.

7. Your Ledger Monero wallet will now be generated. Note that this may take up to 5-10 minutes. Furthermore, there will be no immediate feedback in the CLI nor on the Ledger.

8. `monero-wallet-cli` will start refreshing. Wait until it has fully refreshed.

Congratulations, you can now use your Ledger Monero wallet in conjunction with the CLI.

### 2. Mac OS X
We first have to ensure that we're sufficiently prepared. This entails the following:

1. This guide assumes you have already initialized your Ledger wallet and thus generated a 24 word mnemonic seed.

2. You need to run / use CLI v0.12.2.0, which can be found <a href="{{site.baseurl}}/downloads/">here</a>.

3. You need to install the Ledger Monero app and configure your system. Instructions can be found [here](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (sections 3.1.1 and 3.2.2 in particular). In addition, make sure to set the network to `Mainnet`

4. Note that the instructions for system configuration (section 3.2.2) on Mac OS X are quite elaborate and can be perceived as slightly convoluted. Fortunately, tficharmers has created a guide [here](https://monero.stackexchange.com/questions/8438/how-do-i-make-my-macos-detect-my-ledger-nano-s-when-plugged-in) that you can use for assistance.

5. Your Ledger needs to be plugged in and the Ledger Monero app should be running.

6. Either your daemon (`monerod`) should be running and preferably be fully synced or you should connect to a remote node.

Now that we're sufficiently prepared, let's start!

1. Use Finder to browse to the directory / folder `monero-wallet-cli` (CLI v0.12.2.0) is located.

2. Go to your desktop.

3. Open a new terminal (if don't know how to open a terminal, see [here](https://apple.stackexchange.com/a/256263)).

4. Drag `monero-wallet-cli` in the terminal. It should add the full path to the terminal. Do not hit enter.

5. Now type:

`--generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Note that is simply a placeholder for the actual wallet name. If you, for instance, want to name your wallet `MoneroWallet`, the command would be as follows:

`--generate-from-device MoneroWallet --subaddress-lookahead 3:200`

Note that aforementioned text will be appended to the path of `monero-wallet-cli`. Thus, before you hit enter, your terminal should look like:

`/full/path/to/monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Where the full path is, intuitively, the actual path on your Mac OS X.

7. The CLI will, after executing aforementioned command, prompt you for a password. Make sure to set a strong password and confirm it thereafter.

8. The Ledger will ask whether you want to export the private view key or not. First and foremost, your funds cannot be compromised with merely the private view key. Exporting the private view key enables the client (on the computer - Monero v0.12.2.0) to scan blocks looking for transactions that belong to your wallet / address. If this option is not utilized, the device (Ledger) will scan blocks, which will be significantly slower. There is, however, one caveat. That is, if your system gets compromised, the adversary will potentially be able to compromise your private view key as well, which is detrimental to privacy. This is virtually impossible when the private view key is not exported.

9. You may have to hit confirm twice before it proceeds.

10. Your Ledger Monero wallet will now be generated. Note that this may take up to 5-10 minutes. Furthermore, there will be no immediate feedback in the CLI nor on the Ledger.

11. `monero-wallet-cli` will start refreshing. Wait until it has fully refreshed.

12. Congratulations, you can now use your Ledger Monero wallet in conjunction with the CLI.

### 3. Linux
We first have to ensure that we're sufficiently prepared. This entails the following:

1. This guide assumes you have already initialized your Ledger wallet and thus generated a 24 word mnemonic seed.

2. You need to run / use CLI v0.12.2.0, which can be found <a href="{{site.baseurl}}/downloads/">here</a>.

3. You need to install the Ledger Monero app and configure your system. Instructions can be found [here](https://github.com/LedgerHQ/blue-app-monero/blob/master/doc/user/bolos-app-monero.pdf) (sections 3.1.1 and 3.2.1 in particular). In addition, make sure to set the network to `Mainnet`

4. Your Ledger needs to be plugged in and the Ledger Monero app should be running.

5. Either your daemon (`monerod`) should be running and preferably be fully synced or you should connect to a remote node.

Now that we're sufficiently prepared, let's start!

1. Go to the directory / folder monero-wallet-cli and monerod are located.

2. Open a new terminal

3. Now type:

`./monero-wallet-cli --generate-from-device <new-wallet-name> --subaddress-lookahead 3:200`

Note that is simply a placeholder for the actual wallet name. If you, for instance, want to name your wallet `MoneroWallet`, the command would be as follows:

`./monero-wallet-cli --generate-from-device MoneroWallet --subaddress-lookahead 3:200`

4. The CLI will, after executing aforementioned command, prompt your for a password. Make sure to set a strong password and confirm it thereafter.

5. The Ledger will ask whether you want to export the private view key or not. First and foremost, your funds cannot be compromised with merely the private view key. Exporting the private view key enables the client (on the computer - Monero v0.12.2.0) to scan blocks looking for transactions that belong to your wallet / address. If this option is not utilized, the device (Ledger) will scan blocks, which will be significantly slower. There is, however, one caveat. That is, if your system gets compromised, the adversary will potentially be able to compromise your private view key as well, which is detrimental to privacy. This is virtually impossible when the private view key is not exported.

6. You may have to hit confirm twice before it proceeds.

7. Your Ledger Monero wallet will now be generated. Note that this may take up to 5-10 minutes. Furthermore, there will be no immediate feedback in the CLI nor on the Ledger.

8. `monero-wallet-cli` will start refreshing. Wait until it has fully refreshed.

Congratulations, you can now use your Ledger Monero wallet in conjunction with the CLI.

### 4. A few final notes

1. We'd strongly advise to test the full process first. That is, send a small amount to the wallet and subsequently restore it (using aforementioned guide) to verify that you can recover the wallet. Note that, upon recreating / restoring the wallet, you ought to append the `--restore-height` option (with a block height before the height of your first transaction to the wallet) to the command in step 3 (Windows), step 5 (Mac OS X), or step 3 (Linux). More information about the restore height and how to approximate it can be found [here](https://monero.stackexchange.com/questions/7581/what-is-the-relevance-of-the-restore-height).

2. If you use a remote node, append the `--daemon-address host:port` option to the command in step 3 (Windows), step 5 (Mac OS X), or step 3 (Linux).

3. If desired, you can manually tweak the `--subaddress-lookahead` value. The first value is the number of accounts and the second value is the number of subaddresses per account. Thus, if you, for instance, want to pregenerate 5 accounts with 100 subaddresses each, use `--subaddress-lookahead 5:100`. Bear in mind that, the more subaddresses you pregenerate, the longer it takes for the Ledger to create your wallet.

4. You only have to use the `--generate-from-device` option once (i.e. upon wallet creation). Thereafter, you'd basically use it similar to how you normally use the CLI. That is:
   1. Make sure your Ledger is plugged in and the Monero app is running.
   2. Open `monero-wallet-cli`.
   3. Enter the wallet name of your Ledger Monero wallet.
   4. Enter the password to open the wallet.

   If the Ledger wallet files are not in the same directory as `monero-wallet-cli`, you ought to open `monero-wallet-cli` with the `--wallet-file /path/to/wallet.keys/file` option. Alternatively, you can copy the Ledger wallet files to the same directory as `monero-wallet-cli`.

5. If you have any further questions or need assistance, please leave a comment to the original [StackExchange](https://monero.stackexchange.com/questions/8503/how-do-i-generate-a-ledger-monero-wallet-with-the-cli-monero-wallet-cli) answer.

Author: dEBRUYNE
Secondary scribe: el00ruobuob
