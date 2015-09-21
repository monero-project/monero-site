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

Note : In order to create a viewonly wallet you need first to compile the last source available on [Github](https://github.com/monero-project/bitmonero) as this functionality is not yet included in the official binaries (Sept. 2015).

- To create a view only wallet you will need to first create a "normal" wallet and get the associated viewkey and address. You can get them once logged in simplewallet by typing "*viewkey*" and "*address*". Note each of them carefully and exit simplewallet.

- Launch a new instance of simplewallet by typing "*./simplewallet --generate-from-view-key yourViewKey:yourAddress:nameOfTheViewOnlyWallet*" where *youViewKey* is the view key you got from step 1 and *yourAddress* the associated address. The last part of the command is the name you want to give to you view only portfolio.

- Follow the instructions from the terminal. To see the balance of your portfolio type "*refresh*" (bitmonerod need to be synchronised with the network first). 

- You now have a view only wallet.

