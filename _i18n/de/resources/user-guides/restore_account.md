{% include disclaimer.html translated="no" translationOutdated="no" %}

## Operating Systems:  Windows, Linux, Mac

- Retrieve your 25 word @mnemonic-seed that you saved when creating your old Monero @wallet

### Account Software:  monero-wallet-cli

- Open a command prompt and navigate to the drive and directory that contains monero-wallet-cli

- At the command prompt type:  `monero-wallet-cli --restore-deterministic-wallet`

- Once you press enter you will be prompted for a wallet file name.  Give your wallet a new name, any name will do

- Press enter again and you will be prompted for a password.  Give your wallet a new and long password

- Press enter again you will be prompted to repeat the password

- Press enter again and you will be prompted for the 25 word electrum style mnemonic seed that you retrieved earlier

-  You will then be prompted with "Restore from specific blockchain height (optional, default 0):" Default will start the restore process from the beginning of the Monero blockchain. If you don't know the specific blockchain height, just hit enter. (Specifying a specific blockchain height will start the restore process from that specific height. This will save a bit of time in scanning, if you know what starting blockchain height your initial funds were transacted for this specific account.)

After you have entered the 25 word mnemonic seed and have chosen your specific blockchain height, monero-wallet-cli will generate the same public address and view key as your old wallet and begin the refresh process automatically. (Please be patient as the refresh process may take a while.)

### Account Software:  monero-wallet-gui

Lauch `monero-wallet-gui`. If this is the first time you launched it go to the next step, otherwise click `Cancel`:

![cancel opening](png/restore_account/cancel-opening.png)

Select your appropriate language `English(US)`:

![choose language](png/restore_account/choose-language.png)

Click on `Restore wallet from keys or mnemonic seed`:

![choose restore](png/restore_account/choose-restore.png)

Keep `Restore from seed` selected, give your wallet a name & storage location, and complete the `Enter your 25 (or 24) word mnemonic seed`. Optionaly, specify a `Restore height (optional)` to avoid scanning of oldest blocks. Then click the `Right` arrow:

![restore wallet](png/restore_account/restore-wallet.png)

On the next page, give your wallet a strong password and confirm it before clicking the `Right` arrow:

![wallet password](png/restore_account/wallet-password.png)

Specify your daemon settings and click the `Right` arrow:

![daemon settings](png/restore_account/daemon-settings.png)

Click on `USE MONERO` to enjoy your restored wallet:

![all set up](png/restore_account/all-set-up.png)
