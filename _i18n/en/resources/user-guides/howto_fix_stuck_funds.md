{% include disclaimer.html translated="no" translationOutdated="no" %}

Sometimes, your funds will become stuck - you will have some locked funds that never become unlocked. This is how you fix it.

- Load your wallet in monero-wallet-cli.

- Type

> seed

into the command prompt. Write down your 25 word seed, if you haven't already. This is the best way to make sure you don't lose access to your funds.

- Close monero-wallet-cli by typing

> exit

- Backup all of your wallet related files. These include:

> yourwalletname.bin
> yourwalletname.bin.keys
> yourwalletname.bin.address.txt

This can be done by copying the files to a new folder.

Sometimes, when creating your wallet, you might have named it something without the .bin part. In that case, the wallet file will be called yourwalletname without the .bin at the end.

- Delete yourwallet.bin

- Load monero-wallet-cli, type in the name of the wallet you just deleted

- Enter password. The wallet will now refresh and hopefully your locked funds will now become unlocked.

