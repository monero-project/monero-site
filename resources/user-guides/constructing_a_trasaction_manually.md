---
layout: static_page
title: Constructing a transaction manually
---

Constructing a transaction manually works a bit different than in Bitcoin due to Monero specifics involving scanning for outputs with the view-key and checking the spent status by using key images.

First, we assume you have a fully-synced node and fully-refreshed watch-only wallet on the hot computer. Also, we assume you have wallet software on the cold computer (don't need the node, just `monero-wallet-cli`).

1. Using watch-only wallet, command `export_outputs <filename>`. There will be a file with `<filename>` created in the working folder\*.
2. **Copy** the file to the cold wallet computer.
3. Using cold wallet, command `import_outputs <filename>`\*. The cold wallet now has all the outputs and can prepare a signed key image for every one of them (unless something new was received after step 1. It won't display the correct balance because it can't check the spent status of the key images, as it is offline.

--- Stop here if you only want to monitor incoming transfers and don't care to see the correct balance and when something has been spent ---

---

4. Using cold wallet, command `export_key_images <filename>`. There will be a file with `<filename>` created in the working folder\*.
5. **Copy** the file to the hot wallet computer.
6. Using watch only wallet, command `import_key_images <filename>`\*. The watch wallet is now aware of spent status for each output and it shows the correct balance (unless something new was received in the meantime, after step 1.

--- Stop here if you only want to monitor the balance with the watch only wallet. Goto 1. after each newly received funds. Continue for cold spending. ---

---

7. Using watch only wallet and `transfer` command as you would normally, prepare an unsigned transaction. The syntax is the same as if it was a full wallet, but in this case the watch wallet will automatically save the TX to the `unsigned_monero_tx` file\* and a message `Unsigned transaction(s) successfully written to file: unsigned_monero_tx` will be displayed.
8. **Copy** the file to the cold wallet computer.
9. Using cold wallet, command `sign_transfer`, to sign and export the transaction. Note that the wallet will look for the file to sign in the working folder\*. The signed transaction will be automatically saved to the file\* `signed_monero_tx` and a message `Transaction successfully signed to file signed_monero_tx, txid ...` will be displayed.
10. **Copy** the file to the hot wallet computer.
11. Using the watch wallet, command `submit_transfer` and the transaction will be sent to the network. The `signed_monero_tx` file\* must be located in the working folder so it can be found by the wallet. A message `Money successfully sent, transaction: ...` will be displayed.
12. Goto 1. because you need the signed key image for the change output.

\*Note on folders and file locations, as it could create some confusions. The wallet will look for the files and export them to the folder from where it was started, ie where your command prompt / shell was when you called monero-wallet-cli. It may or may not be the same folder as your actual wallet files or monero-wallet-cli, depending on how you go about it.

For example, your wallet could be on some USB drive like `f:\temp\`, and your wallet software on `c:\monero\` and your shell working folder could be `c:\`.

If you remain in `c:\` with the shell, you could start the wallet by its full path and specify the wallet file location: `c:\monero\monero-wallet-cli.exe --wallet-file f:\temp\mywallet`. In this case, all the import/export stuff would be read/written to `c:\` because that's still your shell's working folder.

It would be probably feel more natural to `cd` into the wallet folder. Do `f:` to change drive and then `cd f:\temp\`. Then, simply start the wallet from that location by its full path again: `c:\monero\monero-wallet-cli.exe --wallet-file mywallet`. Notice how you don't have to write the full wallet path now as you're already there with your shell. In this case, all the files mentioned above would be written or read from the same folder as the wallet files.
