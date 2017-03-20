---
layout: static_page
title: "Creating a view only wallet"
title-pre-kick: "Creating a view only wallet "
title-kick: "on Ubuntu "
title-post-kick: ""
kick-class: "purple-kicks"
icon: "icon_userguides"
attribution: "<!-- Icon is based on work by Freepik (http://www.freepik.com) and is licensed under Creative Commons BY 3.0 -->"
---

### Operating Systems:  Ubuntu


- To create a view only wallet you will need to first create a "normal" wallet and get the associated viewkey and address. You can get them once logged in monero-wallet-cli by typing "*viewkey*" and "*address*". Note each of them carefully and exit monero-wallet-cli.

- Launch a new instance of monero-wallet-cli by typing "`./monero-wallet-cli --generate-from-view-key nameOfTheViewOnlyWallet`" where nameOfTheViewOnlyWallet is any name of your choice.

- Follow the instructions from the terminal. The system will then prompt you to enter your address, viewkey, and finally your desired password. To see the balance of your portfolio type "*refresh*" (monerod need to be synchronised with the network first). 

- You now have a view only wallet.

