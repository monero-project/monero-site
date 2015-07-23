---
layout: static_page
title: "Restoring your Monero Account"
title-pre-kick: "Restoring your "
title-kick: "Monero "
title-post-kick: "Account"
kick-class: "purple-kicks"
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

## Operating Systems:  Windows, Linux, Mac 
### Account Software:  Simplewallet

- Retrieve your 25 word @mnemonic-seed that you saved when creating your old Monero @account
 
- Open a command prompt and navigate to the drive and directory that contains simplewallet

- At the command prompt type:  simplewallet --restore-deterministic-wallet

- Once you Press enter you will be prompted for a wallet file name.  Give your wallet a new name, any name will do 

- Press enter again and you will be prompted for a password.  Give your wallet a new and long password

- Press enter again and you will be prompted for the 25 word electrum style mnemonic seed that you retrieved earlier 

After you have entered the 25 word mnemonic seed, simplewallet will generate the same public address and view key as your old wallet.  You will then need to type in the command "refresh" to scan the blockchain and get your account balance. (Please be patient as the refresh may take a while.)
