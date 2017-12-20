{% include untranslated.html %}
## Operating Systems:  Windows, Linux, Mac

### Account Software:  monero-wallet-cli

- Retrieve your 25 word @mnemonic-seed that you saved when creating your old Monero @wallet
 
- Open a command prompt and navigate to the drive and directory that contains monero-wallet-cli

- At the command prompt type:  `monero-wallet-cli --restore-deterministic-wallet`

- Once you press enter you will be prompted for a wallet file name.  Give your wallet a new name, any name will do 

- Press enter again and you will be prompted for a password.  Give your wallet a new and long password

- Press enter again you will be prompted to repeat the password 

- Press enter again and you will be prompted for the 25 word electrum style mnemonic seed that you retrieved earlier

-  You will then be prompted with "Restore from specific blockchain height (optional, default 0):" Default will start the restore process from the beginning of the Monero blockchain. If you don't know the specific blockchain height, just hit enter. (Specifying a specific blockchain height will start the restore process from that specific height. This will save a bit of time in scanning, if you know what starting blockchain height your initial funds were transacted for this specific account.)

After you have entered the 25 word mnemonic seed and have chosen your specific blockchain height, monero-wallet-cli will generate the same public address and view key as your old wallet and begin the refresh process automatically. (Please be patient as the refresh process may take a while.)

